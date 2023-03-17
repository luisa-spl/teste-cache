import { Route, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements, ScrollRestoration } from 'react-router-dom';
import { ReactElement } from 'react';
import { GlobalLayout } from '../Components/GlobalLayout';
import { Home } from '../Pages/Home';

interface ProtectedRouteProps {
  children: ReactElement;
  hideFooter?: boolean;
  hideLayout?: boolean;
  padding?: string;
  tabTitle?: string;
}

function ProtectedRoute({ children, hideLayout, padding, tabTitle }: ProtectedRouteProps) {

  if (hideLayout) {
    return (
      children
    );
  }

  return (
      <GlobalLayout padding={padding}>
        <ScrollRestoration />
        {children}
      </GlobalLayout>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute padding="0px" tabTitle="Galeria | Cubos Academy">
            <Home />
          </ProtectedRoute>
        }
      />
    </>
  )
)

export function MainRoutes() {
  return (
    <RouterProvider router={router} />
  )
}
