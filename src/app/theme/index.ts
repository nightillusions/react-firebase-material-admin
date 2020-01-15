import { createMuiTheme, Theme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import { Palette } from "@material-ui/core/styles/createPalette";
import { Typography } from "@material-ui/core/styles/createTypography";
import { Overrides } from "@material-ui/core/styles/overrides";
import { ZIndex } from "@material-ui/core/styles/zIndex";

export interface ITheme extends Theme {
  palette: IPalette;
  typography: ITypography;
  overrides: Overrides;
  zIndex: ZIndex;
}

export interface ITypography extends Typography {
  fontWeight: any;
  letterSpacing: any;
}

export interface IPalette extends Palette {
  icon: string;
  white: string;
}

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
}) as ITheme;

export default theme;
