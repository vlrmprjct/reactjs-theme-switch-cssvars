
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

    const tag   = document.getElementById('theme');
    const vars  = document.createTextNode(css);
    if (tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
    tag.parentNode.appendChild(tag);
    tag.appendChild(vars);

    // TRIGGER IE PONYFILL WITH SOME OPTIONS
    // WE DON'T NEEDED TO CHECK IF IS AN IE11
    // THIS IS A PART OF PONYFILL
    cssVars({
        silent: true,
        onlyLegacy: !(/Edge\/1[56]\./i.test(navigator.userAgent))
    });

    return null;
};

ThemeLoader.propTypes = {
    theme: PropTypes.number
};

export default ThemeLoader;
