import React, { useLayoutEffect, useState, useTransition } from "react";
import { BrowserRouterProps, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

/**
 * A custom wrapper component that adds transition support to the React Router.
 * It listens to browser history updates and schedules transitions using Suspense.
 *
 * @param {...rest} The props for the BrowserRouter component.
 * @returns The SuspenseRouter component.
 */
export const SuspenseRouter = ({ ...rest }: BrowserRouterProps) => {
  // Component state to store the current action and location
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  // useTransition hook for scheduling component transitions
  const [, startTransition] = useTransition();

  // useLayoutEffect hook to listen to history updates and update the state within a transition
  useLayoutEffect(() => {
    history.listen((update) => {
      startTransition(() => {
        setState(update);
      });
    });
  }, [history]);

  // Render the Router component from react-router-dom with necessary props
  return (
    <Router
      {...rest}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
