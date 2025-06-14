// Registration form page: fetches options and manages form state/logic for the generic Form
import React from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";
import Form from "../../components/Form/Form";

function App() {
  // State for available activities, loading, error, success, and validation
  const [options, setOptions] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [validationErrors, setValidationErrors] = React.useState<string[]>([]);

  // Fetch available activities on mount
  React.useEffect(() => {
    fetch("/api/activities")
      .then((res) => res.json())
      .then((data) => setOptions(data.activities || []))
      .catch(() => setOptions([]));
  }, []);

  // Handles the actual form submission logic
  // Sends data to the backend and manages UI state based on response
  const handleFormSubmit = async ({
    name,
    email,
    selected,
  }: {
    name: string;
    email: string;
    selected: string[];
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setValidationErrors([]);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          activities: selected,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        // Show validation errors or generic error
        if (Array.isArray(data.errors)) {
          setValidationErrors(data.errors);
          return { errors: data.errors };
        } else {
          setError(data.error || "Ett fel uppstod vid inskickning.");
          return { error: data.error || "Ett fel uppstod vid inskickning." };
        }
      } else {
        // Show success message and reset form
        const msg = [
          "Tack för din anmälan",
          "Bekräfta prenumerationen via länken i det mejl som du har fått.",
        ].join("\n");
        setSuccess(msg);
        return { success: msg, reset: true };
      }
    } catch (err) {
      setError("Kunde inte ansluta till servern.");
      return { error: "Kunde inte ansluta till servern." };
    } finally {
      setLoading(false);
    }
  };

  // Render the generic Form component with all state and handlers
  return (
    <Form
      options={options}
      onSubmit={handleFormSubmit}
      loading={loading}
      error={error}
      success={success}
      validationErrors={validationErrors}
    />
  );
}

// Mount the app to the root element
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
