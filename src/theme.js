import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";
import createSpacing from "@material-ui/core/styles/createSpacing";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import createShadows from "@material-ui/core/styles/shadows";

const palette = createPalette({
  primary: {
    light: "#EF7061",
    main: "#FF495E",
    dark: "#FF495E",
    contrastText: "#FFFFFF",
  },
  contrast: {
    blue: "#1E6397",
    green: "#29A865",
    red: "#D84300",
    lightBlue: "#00BFFF",
    orange: "#FFA500",
    yellow: "#FFFF00",
  },
  base: {
    light: "#F5F7FB",
    dark: "#3D4551",
    primary: "#AEB6C4",
    secondary: "#4D5A6C",
  },
  greys: {
    input: "#C3C5D3",
    main: "#6D7587",
    inputBorder: "#DADCE8",
  },
  textColor: {
    primary: "#2E384D",
    secondary: "#A3B4C2",
  },
});

const typography = createTypography(palette, {
  fontFamily: [
    "CircularStd",
    "CircularStd-Book",
    "CircularStd-Light",
    "Montserrat",
    "sans-serif",
  ].join(","),
  h1: {
    fontSize: "36px",
  },
  h2: {
    fontSize: "32px",
  },
  h3: {
    fontSize: "28px",
  },
  h4: {
    fontSize: "24px",
  },
  h5: {
    fontSize: "22px",
  },
  h6: {
    fontSize: "20px",
  },
  body1: {
    fontSize: "18px",
  },
  body2: {
    fontSize: "16px",
  },
  subtitle1: {
    fontSize: "14px",
  },
  subtitle2: {
    fontSize: "12px",
  },
});

const spacingValues = {
  3: 3,
  4: 4,
  5: 5,
  7: 7,
};

const spacing = createSpacing((args) => {
  let output;

  if (Array.isArray(args)) {
    const [factor, input] = Array.from(args);
    output = spacingValues[factor] * input;
  } else {
    const defaultMuiSpacing = spacingValues["4"] * 2;
    output = args * defaultMuiSpacing;
  }

  return output;
});

const breakpoints = createBreakpoints({
  values: {
    xs: 480,
    sm: 768,
    md: 960,
    lg: 1280,
    xl: 1600,
  },
});

const shadows = createShadows;
const customShadow = "3px 3px 10px rgba(0,0,0,0.06)";
shadows.splice(1, 0, customShadow);

let theme = createTheme({
  palette,
  typography,
  spacing,
  breakpoints,
  shadows,
  shape: {
    borderRadius: 15,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        // @ts-ignore
        "@font-face": "Roboto",
        'input[type="number"]': {
          "-webkit-appearance": "textfield",

          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
        body: {
          // @ts-ignore
          backgroundColor: palette.base.light,
        },
      },
    },
    MuiTypography: {
      root: {},
      colorPrimary: {
        // @ts-ignore
        color: palette.greys.main,
      },
      colorSecondary: {
        // @ts-ignore
        color: palette.base.dark,
      },
      colorTextPrimary: {
        // @ts-ignore
        color: palette.greys.input,
      },
      colorTextSecondary: {
        color: palette.primary.dark,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        textTransform: "capitalize",
      },
      textPrimary: {
        // @ts-ignore
        color: palette.greys.main,
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      textSecondary: {
        // @ts-ignore
        color: palette.greys.input,
        // @ts-ignore
        borderBottom: `1px solid ${palette.greys.input}`,
        fontWeight: "bold",
        borderRadius: 0,
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      textSizeSmall: {
        padding: 0,
      },
      outlined: {
        "&$disabled": {
          // @ts-ignore
          backgroundColor: palette.base.primary,
          color: "#FFF",
          fontWeight: "bold",
          background: "none",
        },
      },
      outlinedPrimary: {
        background: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
        color: palette.primary.contrastText,
        "&:disabled": {
          background: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
          // @ts-ignore
          color: palette.greys.main,
        },
      },
      outlinedSecondary: {
        backgroundColor: palette.primary.contrastText,
        // @ts-ignore
        color: palette.base.secondary,
        // @ts-ignore
        borderColor: palette.greys.inputBorder,
        borderWidth: 2,
      },
      containedPrimary: {
        background: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
        color: palette.primary.contrastText,
        borderRadius: 18,
        padding: "9px 30px",
        "&:hover": {
          background: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
        },
      },
      containedSecondary: {
        backgroundColor: "#F5F7FB",
        color: palette.primary.main,
        borderRadius: 18,
        border: "1px solid #EDF1F1",
        padding: "9px 30px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#F5F7FB",
        },
      },
      contained: {
        // @ts-ignore
        backgroundColor: palette.contrast.blue,
        color: "#FFF",
        borderRadius: 18,
      },
      containedSizeSmall: {
        fontSize: 12,
        padding: "6px 12px",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 4,
        // @ts-ignore
        borderColor: palette.greys.input,
        // @ts-ignore
        color: palette.greys.input,
        padding: "0px 12px",
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(224,231,255,0.2)",
        "&$focused": {
          borderColor: "#1E6397",
        },
      },
      input: {
        fontColor: "#000",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      },
      inputMarginDense: {
        paddingTop: 8,
        paddingBottom: 8,
      },
      inputAdornedStart: {
        paddingLeft: 6,
      },
    },
    MuiTextField: {
      root: {
        fontSize: 8,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 12,
      },
    },
    MuiTab: {
      root: {
        width: "50%",
        "&$selected": {
          background: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
          color: palette.primary.contrastText,
          // @ts-ignore
          border: `solid 1px ${palette.greys.input}`,
          borderRadius: 10,
        },
      },
    },
    MuiTabs: {
      root: {
        // @ts-ignore
        border: `solid 1px ${palette.greys.input}`,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
      },
      indicator: {
        backgroundColor: "transparent",
      },
    },
    MuiFormControl: {
      marginDense: {
        marginTop: 4,
      },
    },
    MuiCollapse: {
      wrapper: {
        height: "100%",
      },
      hidden: {
        width: 0,
      },
      entered: {
        width: "100%",
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        fontSize: 14,
      },
    },
    MuiInputBase: {
      root: {
        "&$disabled": {
          // @ts-ignore
          color: palette.textColor.primary,
        },
      },
      input: {
        // @ts-ignore
        color: palette.textColor.primary,
      },
    },
    MuiInput: {
      underline: {
        border: "none",
        "&::before": {
          border: "none",
        },
        "&::after": {
          border: "none",
        },
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: spacing(1),
        [breakpoints.between("lg", "xl")]: {
          width: 36,
          height: 22,
        },
        [breakpoints.between("md", "lg")]: {
          width: 42,
          height: 26,
        },
        [breakpoints.between("sm", "md")]: {
          width: 42,
          height: 26,
        },
        [breakpoints.down("sm")]: {
          width: 42,
          height: 26,
        },
      },
      switchBase: {
        top: 2,
        padding: 1,
        "&$checked": {
          transform: "translateX(16px)",
          color: palette.common.white,
          "& + $track": {
            backgroundColor: "#1E6397",
            opacity: 1,
            border: "none",
          },
        },
        "&$focusVisible $thumb": {
          color: "#1E6397",
          border: "6px solid #fff",
        },
      },
      thumb: {
        width: 16,
        height: 16,
        [breakpoints.between("lg", "xl")]: {
          width: 16,
          height: 16,
        },
        [breakpoints.between("md", "lg")]: {
          width: 14,
          height: 14,
        },
        [breakpoints.between("sm", "md")]: {
          width: 12,
          height: 12,
        },
        [breakpoints.down("sm")]: {
          width: 10,
          height: 10,
        },
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${palette.grey[400]}`,
        backgroundColor: palette.grey[50],
        opacity: 1,
        // transition: transitions.create(['background-color', 'border'])
      },
      checked: {},
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "rgba(255,73,94,0.3)",
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: 15,
      },
    },
    MuiSlider: {
      root: {
        // color: '#3880ff',
        height: 2,
        padding: "15px 0",
      },
      thumb: {
        height: 28,
        width: 28,
        backgroundColor: "#FF495E",
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
        marginTop: -14,
        marginLeft: -14,
        "&:focus, &:hover, &$active": {
          boxShadow:
            "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow:
              "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
          },
        },
      },
      active: {},
      valueLabel: {
        left: "calc(-50% + 12px)",
        top: 8,
        fontSize: 12,
        fontWeight: "bold",
        "& *": {
          background: "transparent",
          color: "#FFF",
        },
      },
      track: {
        height: 2,
      },
      rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf",
      },
      mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3,
      },
      markActive: {
        opacity: 1,
        backgroundColor: "currentColor",
      },
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: "420px",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
