
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen text-center bg-neutral-light p-4">
          <h1 className="text-2xl font-bold text-destructive mb-4">Oops! Something went wrong.</h1>
          <p className="text-neutral-taupe mb-8">We've logged the error and our team will look into it. Please try refreshing the page or go back home.</p>
          <Button onClick={() => window.location.href = '/'}>
            Go to Homepage
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
