import { useEffect, useState } from "react";
import { Phone, BadgeCheck, Download, X } from "lucide-react";

import img1 from "./assets/img1.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";
import img7 from "./assets/img7.webp";
import img8 from "./assets/img8.webp";
import img9 from "./assets/img9.webp";
import img10 from "./assets/img10.webp";
import img11 from "./assets/img11.webp";
import img12 from "./assets/img12.webp";
import img13 from "./assets/img13.webp";
import img14 from "./assets/img14.webp";
import img15 from "./assets/img15.webp";
import img16 from "./assets/img16.webp";
import img17 from "./assets/img17.webp";
import img18 from "./assets/img18.webp";
import img20 from "./assets/img20.webp";
import img21 from "./assets/img21.webp";
import img22 from "./assets/img22.webp";
import img23 from "./assets/img23.webp";
import img24 from "./assets/img24.webp";
import img25 from "./assets/img25.webp";
import img26 from "./assets/img26.webp";
import img27 from "./assets/img27.webp";

const users = [
  { id: 1, name: "Mohamed Aweys", image: img1, phone: "+252 61 3511576" },
  { id: 3, name: "Mohamed Warsame Mohamed", image: img3, phone: "+252 61 5724741" },
  { id: 4, name: "Mohamed Said Moalin", image: img4, phone: "771784850" },
  { id: 5, name: "Sharifuddin Hussein Mohamed", image: img5, phone: "0612525150" },
  { id: 6, name: "Said Mohamud Mohamed", image: img6, phone: "+252 62 6617000" },
  { id: 7, name: "Abdinasir Mohamed Ahmed", image: img7, phone: "61 4655572" },
  { id: 8, name: "Abdirahman Ahmed Abdi", image: img8, phone: "614554727" },
  { id: 9, name: "Ahmed Mohamud Haji", image: img9, phone: "615409009" },
  { id: 10, name: "Somali Super Star", image: img10, phone: "614664400" },
  { id: 11, name: "Sahra Hussein Hassan", image: img11, phone: "613496812" },
  { id: 12, name: "Sumayo Ibrahim Ahmed", image: img12, phone: "+252619499406" },
  { id: 13, name: "Hanad Dahir Mohamed", image: img13, phone: "686586419" },
  { id: 14, name: "Dalmar Abdullahi Mohamud", image: img14, phone: "+252 61 9973810" },
  { id: 15, name: "Ahmed Abdullhi Mohamed", image: img15, phone: "0611676867" },
  { id: 16, name: "5 Class", image: img16, phone: "614753636" },
  { id: 17, name: "Mahad Ahmed Elmi", image: img17, phone: "+252 62 8222975" },
  { id: 18, name: "Abdullahi Mohamed Nur", image: img18, phone: "+252 61 8949101" },
  { id: 20, name: "Mohamud Abdirahman Abdulle", image: img20, phone: "614698048" },
  { id: 21, name: "Abdifitah Mohamed Hirey", image: img21, phone: "+252 61 1696932" },
  { id: 22, name: "Awale Adan Awale", image: img22, phone: "+252 61 3040873" },
  { id: 23, name: "Abdullahi Mohamud Ahmed", image: img23, phone: "+252 61 9818075" },
  { id: 24, name: "Abdinur Hassan Jimale", image: img24, phone: "61 2660036" },
  { id: 25, name: "Koos", image: img25, phone: "252615335481" },
  { id: 26, name: "Abdinur", image: img26, phone: "252615335481" },
  { id: 27, name: "Abdirahman Abdi Ali", image: img27, phone: "61 3847425" },
];

function Identify() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [checkedUsers, setCheckedUsers] = useState([]);

  useEffect(() => {
    users.slice(0, 12).forEach((user) => {
      const image = new Image();
      image.src = user.image;
    });
  }, []);

  const toggleChecked = (id) => {
    setCheckedUsers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-white to-white">
      <div className="sticky top-0 z-30 backdrop-blur-xl bg-white/80 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Abdimahad's registered users and merchants
          </h1>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Browse all registered profiles with their identification details.
          </p>

          <div className="mt-4 inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Registered Checked: {checkedUsers.length} / {users.length}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users.map((user, index) => {
            const isChecked = checkedUsers.includes(user.id);

            return (
              <div
                key={user.id}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isChecked ? "ring-2 ring-green-500" : ""
                }`}
              >
                <div className="absolute top-3 left-3 z-20 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <BadgeCheck size={13} />
                  {index + 1}
                </div>

                <button
                  type="button"
                  onClick={() => toggleChecked(user.id)}
                  className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition ${
                    isChecked
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <BadgeCheck size={18} />
                </button>

                <div
                  onClick={() => setSelectedUser(user)}
                  className="cursor-pointer overflow-hidden bg-gray-100"
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    loading={index < 12 ? "eager" : "lazy"}
                    fetchPriority={index < 6 ? "high" : "auto"}
                    decoding="async"
                    width="400"
                    height="320"
                    className="w-full h-72 sm:h-64 md:h-60 object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base truncate">
                    {user.name}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Phone size={15} />
                    <span className="truncate">{user.phone}</span>
                  </div>

                  <div className="mt-4">
                    {isChecked ? (
                      <div className="bg-green-100 text-green-700 text-sm font-semibold py-2 rounded-xl text-center">
                        Registered
                      </div>
                    ) : (
                      <div className="bg-gray-100 text-gray-600 text-sm font-medium py-2 rounded-xl text-center">
                        Pending
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 z-20 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="bg-black flex items-center justify-center">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedUser.name}
              </h2>

              <div className="flex items-center gap-2 text-gray-600 mt-3">
                <Phone size={18} />
                {selectedUser.phone}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedUser.image}
                  download={`${selectedUser.name}.webp`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-2xl font-semibold transition"
                >
                  <Download size={18} />
                  Download Image
                </a>

                <button
                  type="button"
                  onClick={() => toggleChecked(selectedUser.id)}
                  className={`flex-1 px-5 py-3 rounded-2xl font-semibold transition ${
                    checkedUsers.includes(selectedUser.id)
                      ? "bg-green-500 text-white"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {checkedUsers.includes(selectedUser.id)
                    ? "Registered"
                    : "Mark as Registered"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Identify;
