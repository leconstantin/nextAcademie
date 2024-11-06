import { CiCircleCheck } from "react-icons/ci";
export default function Healthy() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg sm:px-10">
        <div className="w-full">
          <h2 className="font-bold text-lg">Health and Safety Policies</h2>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                At Academie dela salle, we are committed to ensuring the health,
                safety, and well-being of all students, staff, and visitors.
                Below, you will find important policies and procedures to help
                maintain a safe environment. Please review these carefully.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      {" "}
                      Immunization Requirements:
                    </code>{" "}
                    All students are required to meet state and district
                    immunization standards to ensure a healthy school
                    environment. Parents must submit proof of their child’s
                    immunizations before enrollment. Review the full list of
                    required vaccinations and deadlines in the document above.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      Medication Administration Policy:
                    </code>{" "}
                    Students who need to take prescription or over-the-counter
                    medications during school hours must have prior approval. A
                    signed medication administration form must be submitted by
                    the parent or guardian. The school nurse will oversee the
                    administration of medication to ensure safety and
                    compliance.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      Emergency Health Information:
                    </code>{" "}
                    Parents are required to provide up-to-date emergency health
                    information for each student, including allergies, chronic
                    conditions, and emergency contacts. This information helps
                    ensure that the school is prepared in case of a health
                    emergency.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      Food Allergy Policy:
                    </code>{" "}
                    e take food allergies very seriously. The school implements
                    strict policies to protect students with allergies,
                    including clearly labeled foods in the cafeteria and strict
                    protocols for avoiding cross-contamination. Parents of
                    children with allergies must submit a medical action plan
                    that outlines emergency procedures.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      COVID-19 Guidelines:
                    </code>{" "}
                    In light of ongoing health concerns, we have updated our
                    COVID-19 safety protocols, including mask-wearing, social
                    distancing, and testing requirements where applicable. These
                    guidelines are in place to protect the health of our entire
                    school community. Please refer to the full document for
                    current procedures.
                  </p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
