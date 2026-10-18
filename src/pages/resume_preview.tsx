import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import resumeUrl from "@/assets/My Resumes.pdf";
import { Button } from "@/components/ui/button";

const downloadFileName = "Mohamed_Thawfeek_CV.pdf";

const ResumePreview = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Resume | Mohamed Thawfeek";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/" aria-label="Back to portfolio">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>

            <div>
              <h1 className="text-xl font-semibold sm:text-2xl">
                Mohamed Thawfeek — Resume
              </h1>
              <p className="text-sm text-muted-foreground">
                Preview the resume or download a copy.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto flex min-h-0 flex-1 px-0 py-0 sm:px-6 sm:py-6">
        <object
          data={`${resumeUrl}#view=FitH&toolbar=1&navpanes=0`}
          type="application/pdf"
          aria-label="Mohamed Thawfeek resume PDF preview"
          className="min-h-[calc(100vh-145px)] w-full bg-white sm:min-h-[calc(100vh-137px)] sm:rounded-xl sm:border sm:border-border sm:shadow-2xl"
        >
          <div className="flex min-h-[60vh] w-full items-center justify-center p-6 text-center">
            <div className="max-w-md space-y-4">
              <p className="text-muted-foreground">
                Your browser cannot display the PDF preview here.
              </p>
              <Button asChild>
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                  Open the resume PDF
                </a>
              </Button>
            </div>
          </div>
        </object>
      </section>
    </main>
  );
};

export default ResumePreview;
