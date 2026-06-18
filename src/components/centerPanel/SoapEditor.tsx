const SoapEditor = () => {
  return (
    <div className="bg-white p-6 min-h-[750px] overflow-y-auto">
      <div className="space-y-8">

        {/* SUBJECTIVE */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Subjective
            </h2>

            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
              Covered
            </span>
          </div>

          <div className="border rounded-xl p-4 bg-gray-50">
            <p className="text-sm leading-7 text-gray-700">
              <span className="font-semibold">Chief Complaint:</span>{" "}
              Erectile dysfunction and decreased penile sensation.
            </p>

            <p className="text-sm leading-7 text-gray-700 mt-3">
              <span className="font-semibold">
                History of Present Illness:
              </span>{" "}
              Patient reports difficulty maintaining erections for
              approximately six months. Symptoms have gradually worsened.
              Denies pain, trauma, urinary symptoms, or recent infections.
            </p>

            <p className="text-sm leading-7 text-gray-700 mt-3">
              <span className="font-semibold">
                Review of Systems:
              </span>{" "}
              Negative for fever, dysuria, hematuria, numbness, or
              lower extremity weakness.
            </p>
          </div>
        </section>

        {/* OBJECTIVE */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Objective
            </h2>

            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
              Partial
            </span>
          </div>

          <div className="border rounded-xl p-4 bg-gray-50">
            <p className="text-sm leading-7 text-gray-700">
              Physical examination deferred during this encounter.
            </p>

            <p className="text-sm leading-7 text-gray-700 mt-3">
              No acute distress observed.
            </p>

            <p className="text-sm leading-7 text-red-500 mt-3">
              Missing: Vitals and diagnostic findings.
            </p>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Assessment
            </h2>

            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
              Covered
            </span>
          </div>

          <div className="border rounded-xl p-4 bg-gray-50">
            <p className="text-sm leading-7 text-gray-700">
              Erectile dysfunction of unclear etiology.
            </p>

            <p className="text-sm leading-7 text-gray-700 mt-3">
              Differential diagnosis includes vascular,
              neurologic, psychogenic and hormonal causes.
            </p>
          </div>
        </section>

        {/* PLAN */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Plan
            </h2>

            <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs">
              Missing
            </span>
          </div>

          <div className="border rounded-xl p-4 bg-gray-50">
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Order testosterone level.</li>
              <li>Order HbA1c and lipid profile.</li>
              <li>Consider urology referral.</li>
              <li>Follow-up appointment in 4 weeks.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SoapEditor;