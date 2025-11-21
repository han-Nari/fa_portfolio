import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

export default function Design() {
  return (
    <>
      <header className="background-top relative">
        <h1 className="text-center title-header">
          Front end{" "}
          <span className="bg-linear-to-r from-gray-800 via-gray-700 to-black bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <h4 className="text-center title-h2">
          Building{" "}
          <span className="bg-linear-to-r from-gray-800 via-gray-700 to-black bg-clip-text text-transparent">
            website
          </span>
          <span> that people love to use</span>
        </h4>
      </header>
    </>
  );
}
