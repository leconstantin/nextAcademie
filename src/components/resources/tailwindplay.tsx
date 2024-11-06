import { CiCircleCheck } from "react-icons/ci";
export default function Play() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg sm:px-10">
        <div className="w-full">
          <h2 className="font-bold text-lg">School Policies</h2>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                The School Policies page should outline the fundamental rules
                and guidelines that shape the school environment. These
                documents establish expectations and standards for behavior,
                ensuring a safe and productive learning space for everyone.
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
                      Code of Conduct:
                    </code>{" "}
                    Outlines the expected behavior of students, staff, and
                    visitors on campus. This includes rules on discipline,
                    respect, and the consequences for misbehavior. It should
                    cover topics such as bullying, cheating, dress code, and
                    social media use.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      Attendance Policy:
                    </code>{" "}
                    A detailed explanation of the school&apos;s attendance
                    requirements, including tardiness, excused and unexcused
                    absences, and procedures for reporting absences.
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      Attendance Policy:
                    </code>{" "}
                    A detailed explanation of the school&apos;s attendance
                    requirements, including tardiness, excused and unexcused
                    absences, and procedures for reporting absences.
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
