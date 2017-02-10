export const FILE_CHANGE_EVENT = 'change';
export const FILE_ADD_EVENT = 'add';
export const FILE_DELETE_EVENT = 'unlink';
export const DIRECTORY_ADD_EVENT = 'addDir';
export const DIRECTORY_DELETE_EVENT = 'unlinkDir';

export const SOURCE_MAP_TYPE_CHEAP = 'eval';
export const SOURCE_MAP_TYPE_EXPENSIVE = 'source-map';

export const BUILD_DIR = 'build';
export const SRC_DIR = 'src';
export const TMP_DIR = '.tmp';
export const WWW_DIR = 'www';
export const NODE_MODULES = 'node_modules';
export const IONIC_ANGULAR = 'ionic-angular';
export const WWW_INDEX_FILENAME = 'index.html';

export const ENV_VAR_PROD = 'prod';
export const ENV_VAR_DEV = 'dev';
export const ENV_VAR_IONIC_ENV = 'IONIC_ENV';
export const ENV_VAR_ROOT_DIR = 'IONIC_ROOT_DIR';
export const ENV_VAR_SRC_DIR = 'IONIC_SRC_DIR';
export const ENV_VAR_TMP_DIR = 'IONIC_TMP_DIR';
export const ENV_VAR_WWW_DIR = 'IONIC_WWW_DIR';
export const ENV_VAR_BUILD_DIR = 'IONIC_BUILD_DIR';
export const ENV_VAR_NODE_MODULES_DIR = 'IONIC_NODE_MODULES_DIR';
export const ENV_VAR_IONIC_ANGULAR_DIR = 'IONIC_ANGULAR_DIR';
export const ENV_VAR_TARGET = 'IONIC_TARGET';
export const ENV_VAR_PLATFORM = 'IONIC_PLATFORM';
export const ENV_VAR_IONIC_ANGULAR_ENTRY_POINT = 'IONIC_ANGULAR_ENTRY_POINT';
export const ENV_VAR_APP_SCRIPTS_DIR = 'IONIC_APP_SCRIPTS_DIR';
export const ENV_VAR_GENERATE_SOURCE_MAP = 'IONIC_GENERATE_SOURCE_MAP';
export const ENV_VAR_SOURCE_MAP_TYPE = 'IONIC_SOURCE_MAP_TYPE';
export const ENV_TS_CONFIG = 'IONIC_TS_CONFIG';
export const ENV_APP_ENTRY_POINT = 'IONIC_APP_ENTRY_POINT';
export const ENV_APP_NG_MODULE_PATH = 'IONIC_APP_NG_MODULE_PATH';
export const ENV_APP_NG_MODULE_CLASS = 'IONIC_APP_NG_MODULE_CLASS';
export const ENV_GLOB_UTIL = 'IONIC_GLOB_UTIL';
export const ENV_CLEAN_BEFORE_COPY = 'IONIC_CLEAN_BEFORE_COPY';
export const ENV_CLOSURE_JAR = 'IONIC_CLOSURE_JAR';

export const ENV_OUTPUT_JS_FILE_NAME = 'IONIC_OUTPUT_JS_FILE_NAME';
export const ENV_OUTPUT_JS_MAP_FILE_NAME = 'IONIC_OUTPUT_JS_MAP_FILE_NAME';
export const ENV_OUTPUT_CSS_FILE_NAME = 'IONIC_OUTPUT_CSS_FILE_NAME';
export const ENV_OUTPUT_CSS_MAP_FILE_NAME = 'IONIC_OUTPUT_CSS_MAP_FILE_NAME';
export const ENV_WEBPACK_FACTORY = 'IONIC_WEBPACK_FACTORY';
export const ENV_WEBPACK_LOADER = 'IONIC_WEBPACK_LOADER';
export const ENV_OPTIMIZATION_LOADER = 'IONIC_OPTIMIZATION_LOADER';
export const ENV_AOT_WRITE_TO_DISK = 'IONIC_AOT_WRITE_TO_DISK';
export const ENV_BAIL_ON_LINT_ERROR = 'IONIC_BAIL_ON_LINT_ERROR';
export const ENV_BUILD_TO_ES5 = 'IONIC_BUILD_TO_ES5';

export const ENV_PRINT_ORIGINAL_DEPENDENCY_TREE = 'IONIC_PRINT_ORIGINAL_DEPENDENCY_TREE';
export const ENV_PRINT_MODIFIED_DEPENDENCY_TREE = 'IONIC_PRINT_MODIFIED_DEPENDENCY_TREE';
export const ENV_PRINT_WEBPACK_DEPENDENCY_TREE = 'IONIC_PRINT_WEBPACK_DEPENDENCY_TREE';

/* Flags for experimental stuff */
export const ENV_EXPERIMENTAL_PARSE_DEEPLINKS = 'IONIC_EXPERIMENTAL_PARSE_DEEPLINKS';
export const ENV_EXPERIMENTAL_MANUAL_TREESHAKING = 'IONIC_EXPERIMENTAL_MANUAL_TREESHAKING';
export const ENV_EXPERIMENTAL_PURGE_DECORATORS = 'IONIC_EXPERIMENTAL_PURGE_DECORATORS';
export const ENV_USE_EXPERIMENTAL_CLOSURE = 'IONIC_USE_EXPERIMENTAL_CLOSURE';
export const ENV_USE_EXPERIMENTAL_BABILI = 'IONIC_USE_EXPERIMENTAL_BABILI';

/* Providers */
export const ENV_ACTION_SHEET_CONTROLLER_CLASSNAME = 'IONIC_ACTION_SHEET_CONTROLLER_CLASSNAME';
export const ENV_ACTION_SHEET_CONTROLLER_PATH = 'IONIC_ACTION_SHEET_CONTROLLER_PATH';
export const ENV_ACTION_SHEET_VIEW_CONTROLLER_PATH = 'IONIC_ACTION_SHEET_VIEW_CONTROLLER_PATH';
export const ENV_ACTION_SHEET_COMPONENT_FACTORY_PATH = 'IONIC_ACTION_SHEET_COMPONENT_FACTORY_PATH';

export const ENV_ALERT_CONTROLLER_CLASSNAME = 'IONIC_ALERT_CONTROLLER_CLASSNAME';
export const ENV_ALERT_CONTROLLER_PATH = 'IONIC_ALERT_CONTROLLER_PATH';
export const ENV_ALERT_VIEW_CONTROLLER_PATH = 'IONIC_ALERT_VIEW_CONTROLLER_PATH';
export const ENV_ALERT_COMPONENT_FACTORY_PATH = 'IONIC_ALERT_COMPONENT_FACTORY_PATH';

export const ENV_LOADING_CONTROLLER_CLASSNAME = 'IONIC_LOADING_CONTROLLER_CLASSNAME';
export const ENV_LOADING_CONTROLLER_PATH = 'IONIC_LOADING_CONTROLLER_PATH';
export const ENV_LOADING_VIEW_CONTROLLER_PATH = 'IONIC_LOADING_VIEW_CONTROLLER_PATH';
export const ENV_LOADING_COMPONENT_FACTORY_PATH = 'IONIC_LOADING_COMPONENT_FACTORY_PATH';

export const ENV_MODAL_CONTROLLER_CLASSNAME = 'IONIC_MODAL_CONTROLLER_CLASSNAME';
export const ENV_MODAL_CONTROLLER_PATH = 'IONIC_MODAL_CONTROLLER_PATH';
export const ENV_MODAL_VIEW_CONTROLLER_PATH = 'IONIC_MODAL_VIEW_CONTROLLER_PATH';
export const ENV_MODAL_COMPONENT_FACTORY_PATH = 'IONIC_MODAL_COMPONENT_FACTORY_PATH';

export const ENV_PICKER_CONTROLLER_CLASSNAME = 'IONIC_PICKER_CONTROLLER_CLASSNAME';
export const ENV_PICKER_CONTROLLER_PATH = 'IONIC_PICKER_CONTROLLER_PATH';
export const ENV_PICKER_VIEW_CONTROLLER_PATH = 'IONIC_PICKER_VIEW_CONTROLLER_PATH';
export const ENV_PICKER_COMPONENT_FACTORY_PATH = 'IONIC_PICKER_COMPONENT_FACTORY_PATH';

export const ENV_POPOVER_CONTROLLER_CLASSNAME = 'IONIC_POPOVER_CONTROLLER_CLASSNAME';
export const ENV_POPOVER_CONTROLLER_PATH = 'IONIC_POPOVER_CONTROLLER_PATH';
export const ENV_POPOVER_VIEW_CONTROLLER_PATH = 'IONIC_POPOVER_VIEW_CONTROLLER_PATH';
export const ENV_POPOVER_COMPONENT_FACTORY_PATH = 'IONIC_POPOVER_COMPONENT_FACTORY_PATH';

export const ENV_TOAST_CONTROLLER_CLASSNAME = 'IONIC_TOAST_CONTROLLER_CLASSNAME';
export const ENV_TOAST_CONTROLLER_PATH = 'IONIC_TOAST_CONTROLLER_PATH';
export const ENV_TOAST_VIEW_CONTROLLER_PATH = 'IONIC_TOAST_VIEW_CONTROLLER_PATH';
export const ENV_TOAST_COMPONENT_FACTORY_PATH = 'IONIC_TOAST_COMPONENT_FACTORY_PATH';

export const BUNDLER_ROLLUP = 'rollup';
export const BUNDLER_WEBPACK = 'webpack';
