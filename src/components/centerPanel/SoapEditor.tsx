const SoapEditor = () => {
  return (
    <div className="bg-white p-6 min-h-[700px] overflow-y-auto">
      <div className="space-y-8">
        {/* SUBJECTIVE */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Subjective
          </h2>

          <div className="space-y-3 text-sm leading-7 text-gray-700">
            <p>
              <span className="font-semibold">Chief Complaint:</span>
              {" "}Erectile dysfunction and decreased penile sensation.
            </p>

            <p>
              <span className="font-semibold">
                History of Present Illness:
              </span>{" "}
              Patient reports difficulty maintaining erections for
              approximately six months. Symptoms have gradually worsened.
              Denies pain, trauma, or urinary symptoms.
            </p>

            <p>
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
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Objective
          </h2>

          <div className="space-y-3 text-sm leading-7 text-gray-700">
            <p>
              Physical examination deferred during this encounter.
            </p>

            <p>
              No acute distress observed.
            </p>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Assessment
          </h2>

          <div className="space-y-3 text-sm leading-7 text-gray-700">
            <p>
              Erectile dysfunction of unclear etiology.
            </p>

            <p>
              Differential diagnosis includes vascular, neurologic,
              psychogenic, and hormonal causes.
            </p>
          </div>
        </section>

        {/* PLAN */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Plan
          </h2>

          <div className="space-y-3 text-sm leading-7 text-gray-700">
            <ul className="list-disc pl-5">
              <li>Order testosterone level.</li>
              <li>Order HbA1c and lipid profile.</li>
              <li>Consider urology referral.</li>
              <li>Follow up in 4 weeks.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoapEditor;