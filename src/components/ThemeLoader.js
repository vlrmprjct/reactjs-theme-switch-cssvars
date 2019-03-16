
import PropTypes from 'prop-types';
import cssVars from 'css-vars-ponyfill';

const getThemes = () => {
    const _require = require.context("../themes/", false, /\.json/);
    return _require
        .keys()
        .map(filename => _require(filename));
}

const parseVariables = (style) => {
    return Object.keys(style || {}).reduce(
        (index, variable) => `${index} --${variable}: ${style[variable]};`, ''
    );
}

const ThemeLoader = ({ theme }) => {

    const css = ':root {' + parseVariables(getThemes()[theme].colors) + '}';

    // MAGIC CREATING <STYLE>-TAG MAY NOT NEEDED
    // <STYLE>-TAG SHOULD BE A PART OF THE PUBLIC STATIC HTML TEMPLATE
    const head  = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    const tag   = document.getElementById('theme');
    const vars  = document.createTextNode(css);

    style.type = 'text/css';
    style.setAttribute('id', 'theme');

    switch (tag) {
        case null:
        case "":
            // INIT
            head.appendChild(style);
            style.appendChild(vars);
            break;
        default:
            // CHANGE
            tag.removeChild(tag.firstChild);
            tag.appendChild(vars);
    }


    // TRIGGER IE PONYFILL WITH SOME OPTIONS
    // WE DON'T NEEDED TO CHECK IF IS AN IE11
    // THIS IS A PART OF PONYFILL
    cssVars({
        silent: true,
        onlyLegacy: !(/Edge\/1[56]\./i.test(navigator.userAgent))
    });

    // TODO: DO WE NEED THIS ?
    // return <sometags></sometags>
    return null;
};

ThemeLoader.propTypes = {
    theme: PropTypes.number
};

export default ThemeLoader;
