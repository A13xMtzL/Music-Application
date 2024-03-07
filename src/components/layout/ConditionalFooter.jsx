import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const location = useLocation();
  return (
    location.pathname !== '*' && (
      <div className="mt-20">
        <Footer />
      </div>
    )
  );
}