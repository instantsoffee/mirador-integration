import Mirador from 'mirador/dist/es/src/index'
import { miradorImageToolsPlugin } from 'mirador-image-tools'
import miradorDownloadPlugin from 'mirador-dl-plugin/es';
import textOverlayPlugin from 'mirador-textoverlay/es';

import CustomMetadata from './components/custom_metadata'
import CustomBrand from './components/custom_brand';


const config = {
  language: 'de',
  // id and windows come from HTML options and are merged with the default config
  // workspace: {
  //   type: "elastic"
  // },
  selectedTheme: 'onb', // Set default theme
  theme: {
    palette: {
      primary: {
        main: '#C8421C',
      },
      secondary: {
        main: '#EA9A5A',
      },
    },
  },
  themes: {
    light: {
      palette: {
        type: 'light',
        primary: {
          main: '#C8421C',
        },
      },
    },
    dark: {
      palette: {
        type: 'dark',
        primary: {
          main: '#C8421C',
        },
      },
    },
    onb: {
      palette: {
        type: 'light',
        primary: {
          main: '#C8421C',
        },
      },
      typography:{
        fontFamily: ['Inter', 'sans-serif'],
        // fontSize: 16, // verändert die Größe der Icons
        // htmlFontSize: 24, // verändert auch die Größe der Icons
        h4: {
          fontSize: '1rem',
          fontWeight: 700,
        },
        overline: {
          fontFamily: ['Spectral', 'serif'],
        },
        body1: {
          fontFamily: ['Spectral', 'serif'],
        },
      },
    }
  },
  window: { //global window defaults
    allowClose: false, // Configure if windows can be closed or not
    allowFullscreen: false, // Configure to show a "fullscreen" button in the WindowTopBar
    allowMaximize: false, // Configure if windows can be maximized or not
    allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not
    allowWindowSideBar: true, // Configure if side bar menu is visible or not
    authNewWindowCenter: 'parent', // Configure how to center a new window created by the authentication flow. Options: parent, screen
    sideBarPanel: 'info', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultSidebarPanelHeight: 201,  // Configure default sidebar height in pixels
    defaultSidebarPanelWidth: 235, // Configure default sidebar width in pixels
    defaultView: 'single',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    forceDrawAnnotations: false, // ??
    hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not
    highlightAllAnnotations: false, // ?? Configure whether to display annotations on the canvas by default
    showLocalePicker: true, // Configure locale picker for multi-lingual metadata
    sideBarOpen: true, // Configure if the sidebar (and its content panel) is open by default
    switchCanvasOnSearch: true, // Configure if Mirador should automatically switch to the canvas of the first search result
    panels: { // Configure which panels are visible in WindowSideBarButtons
      info: true,
      attribution: true,
      canvas: true,
      annotations: true,
      search: true,
      layers: true,
    },
    views: [
      { key: 'single', behaviors: ['individuals'] },
      { key: 'book', behaviors: ['paged'] },
      { key: 'scroll', behaviors: ['continuous'] },
      { key: 'gallery' },
    ],
    elastic: {
      height: 400,
      width: 480
    }
  },
  thumbnailNavigation: {
    defaultPosition: 'off', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
    displaySettings: true, // Display the settings for this in WindowTopMenu
    height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
    width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
  },
  workspace: {
    draggingEnabled: true,
    allowNewWindows: true,
    // id: uuid(),
    isWorkspaceAddVisible: false, // Catalog/Workspace add window feature visible by default
    exposeModeOn: false, // unused?
    height: 5000, // height of the elastic mode's virtual canvas
    showZoomControls: false, // Configure if zoom controls should be displayed by default
    type: 'mosaic', // Which workspace type to load by default. Other possible values are "elastic". If "mosaic" or "elastic" are not selected no worksapce type will be used.
    viewportPosition: { // center coordinates for the elastic mode workspace
      x: 0,
      y: 0,
    },
    width: 5000, // width of the elastic mode's virtual canvas
  },
  workspaceControlPanel: {
    enabled: false, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
  },
}

const plugins = [
  {
    mode: 'wrap',
    component: CustomBrand,
    target: 'Branding',
  },
  {
    mode: 'add',
    component: CustomMetadata,
    target: 'CanvasInfo',
  },
  ...miradorImageToolsPlugin,
  ...textOverlayPlugin,
  ...miradorDownloadPlugin,
]

window.renderMirador = function (optionsFromHTML) {

  // Merge the options from the HTML with the default config
  const mergedConfig = {
    ...config,
    ...optionsFromHTML,
  }

  return Mirador.viewer(mergedConfig, plugins)
}


