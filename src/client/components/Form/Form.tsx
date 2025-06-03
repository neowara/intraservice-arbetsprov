// Generic Form component: receives options, handles selection, and delegates submit logic to parent
import React from "react";
import Section from "../Section/Section";
import InputField from "../InputField/InputField";
import Dropdown from "../Dropdown/Dropdown";
import Select from "../Select/Select";
import Button from "../Button/Button";
import ValidationMessage from "../ValidationMessage/ValidationMessage";
import { FiX } from "react-icons/fi";
import type { FormProps } from "./types";

const Form: React.FC<FormProps> = ({
  options,
  onSubmit,
  loading = false,
  error = null,
  success = null,
  validationErrors = [],
}) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Reset form fields when success message appears
  React.useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setSelected([]);
    }
  }, [success]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Handle selection/deselection (max 3)
  const handleOptionChange = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((a) => a !== option));
    } else if (selected.length < 3) {
      setSelected([...selected, option]);
    }
  };

  // Remove an option from selection
  const removeOption = (option: string) => {
    setSelected(selected.filter((a) => a !== option));
  };

  // Handle form submit: delegate to parent
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit({ name, email, selected });
  };

  return (
    <form
      className="max-w-2xl mx-auto bg-white border-2 border-black p-10 mt-8 shadow-default font-sans"
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold mb-2 text-black">
        Anmälan lägerverksamhet
      </h1>
      <p className="mb-8 text-black">
        Fyll i formuläret nedan för att anmäla dig till lägerverksamhet 2025.
      </p>
      {/* Show validation errors if any */}
      {validationErrors.length > 0 && (
        <div className="mb-4">
          <ValidationMessage
            message={validationErrors.join("\n")}
            type="error"
          />
        </div>
      )}
      {/* Show success message if present */}
      {success && (
        <div className="mb-4">
          <ValidationMessage message={success} type="success" />
        </div>
      )}
      <Section title="Personuppgifter" className="mb-8">
        <div className="mb-4">
          <InputField
            id="name"
            name="name"
            label={
              <span className="block font-semibold mb-1 text-black">
                För- och efternamn
                <span className="text-red-600 font-bold"> *</span>
              </span>
            }
            required
            placeholder="Skriv ditt för- och efternamn"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <InputField
            id="email"
            name="email"
            label={
              <span className="block font-semibold mb-1 text-black">
                E-post<span className="text-red-600 font-bold"> *</span>
              </span>
            }
            required
            type="email"
            placeholder="namn@example.com"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Section>
      <Section title="Aktiviteter" className="mb-8">
        <div className="flex flex-wrap gap-2 mb-2 mt-2">
          {selected.map((option) => (
            <span
              key={option}
              className="flex items-center bg-gray border border-gray text-black px-3 py-1 text-sm"
            >
              {option}
              <Button
                type="button"
                aria-label={`Ta bort ${option}`}
                onClick={() => removeOption(option)}
                className="ml-2 w-6 h-6 flex items-center justify-center text-base font-bold bg-white border border-gray hover:text-red-600 hover:bg-white hover:ring-2 hover:ring-red-400 p-0 transition-colors cursor-pointer"
              >
                <FiX className="w-4 h-4" />
              </Button>
            </span>
          ))}
        </div>
        <p className="text-sm text-black mt-2 pb-2">
          Välj 3 aktiviteter du är intresserad av.
        </p>
        <div className="mb-2">
          <Dropdown
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            dropdownRef={dropdownRef}
            label={
              selected.length === 0
                ? "Välj aktiviteter"
                : `${selected.length} valda`
            }
          >
            <Select
              options={options}
              selected={selected}
              onChange={handleOptionChange}
              max={3}
              className="flex flex-col divide-y divide-gray"
            />
          </Dropdown>
        </div>
      </Section>
      <Button
        type="submit"
        loading={loading}
        className="mt-4 bg-action-blue text-white border border-action-blue rounded-none px-6 py-2 font-bold transition hover:bg-action-blue-dark hover:underline hover:cursor-pointer"
      >
        Skicka in anmälan
      </Button>
    </form>
  );
};

export default Form;
