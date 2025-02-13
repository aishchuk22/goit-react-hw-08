import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";

import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import ContactsPage from "../../pages/ContactsPage/ContactsPage"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import LoginPage from "../../pages/LoginPage/LoginPage"
import HomePage from "../../pages/HomePage/HomePage"
import Layout from "../Layout";

  
function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

return isRefreshing ? null : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
}

export default App;
