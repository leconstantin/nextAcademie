import AnimatedBack from "@/components/resources/animeback";
import Healthy from "@/components/resources/healthy";
import Play from "@/components/resources/tailwindplay";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resources",
};
export default function page() {
  return (
    <main>
      <Play />
      {/* <div className="flex flex-col items-center justify-center py-6">
        <article className="prose prose-neutral dark:prose-invert  dark:bg-neutral-900">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>

          <section id="health-safety">
            <h2>Health and Safety Policies</h2>
            <p>
              At [School Name], we are committed to ensuring the health, safety,
              and well-being of all students, staff, and visitors. Below, you
              will find important policies and procedures to help maintain a
              safe environment. Please review these carefully.
            </p>

            <ul>
              <li>
                <h3>
                  <a href="immunization_requirements.pdf" target="_blank">
                    Immunization Requirements
                  </a>
                </h3>
                <p>
                  All students are required to meet state and district
                  immunization standards to ensure a healthy school environment.
                  Parents must submit proof of their child’s immunizations
                  before enrollment. Review the full list of required
                  vaccinations and deadlines in the document above.
                </p>
              </li>

              <li>
                <h3>
                  <a href="medication_policy.pdf" target="_blank">
                    Medication Administration Policy
                  </a>
                </h3>
                <p>
                  Students who need to take prescription or over-the-counter
                  medications during school hours must have prior approval. A
                  signed medication administration form must be submitted by the
                  parent or guardian. The school nurse will oversee the
                  administration of medication to ensure safety and compliance.
                </p>
              </li>

              <li>
                <h3>
                  <a href="emergency_health_information.pdf" target="_blank">
                    Emergency Health Information
                  </a>
                </h3>
                <p>
                  Parents are required to provide up-to-date emergency health
                  information for each student, including allergies, chronic
                  conditions, and emergency contacts. This information helps
                  ensure that the school is prepared in case of a health
                  emergency.
                </p>
              </li>

              <li>
                <h3>
                  <a href="allergy_policy.pdf" target="_blank">
                    Food Allergy Policy
                  </a>
                </h3>
                <p>
                  We take food allergies very seriously. The school implements
                  strict policies to protect students with allergies, including
                  clearly labeled foods in the cafeteria and strict protocols
                  for avoiding cross-contamination. Parents of children with
                  allergies must submit a medical action plan that outlines
                  emergency procedures.
                </p>
              </li>

              <li>
                <h3>
                  <a href="covid_guidelines.pdf" target="_blank">
                    COVID-19 Guidelines
                  </a>
                </h3>
                <p>
                  In light of ongoing health concerns, we have updated our
                  COVID-19 safety protocols, including mask-wearing, social
                  distancing, and testing requirements where applicable. These
                  guidelines are in place to protect the health of our entire
                  school community. Please refer to the full document for
                  current procedures.
                </p>
              </li>
            </ul>
          </section>
        </article>
      </div> */}
      <Healthy />
    </main>
  );
}
