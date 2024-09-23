declare global {
    interface Window {
        _app: {backendID: string; appPath: string; baseServerPath: string}
    }
}

export const backendID = window._app?.backendID ?? '7066990350169366716'
export const BACKEND_URL = `/custom_web_template.html?object_id=${backendID}`