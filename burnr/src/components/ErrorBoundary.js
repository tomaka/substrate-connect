/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from "react";
class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return React.createElement("h1", null, "There was an error");
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map