import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiUser,
  FiTv,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { MdGroups3 } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { GrResources } from "react-icons/gr";
import { navGroup } from "@/lib/navlink";
import Link from "next/link";

const GroupMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-1 rounded-md text-zinc-700 dark:text-zinc-100  hover:border-b-2 hover:border-blue-500 transition-colors"
        >
          <span className="font-medium">School</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg shadow-xl absolute top-[125%] left-[50%] w-48 overflow-hidden"
        >
          {navGroup.map((nav) => (
            <Link key={nav.id} href={nav.href}>
              <Option
                setOpen={setOpen}
                Icon={
                  nav.id == 1
                    ? MdGroups3
                    : nav.id == 2
                    ? FiUser
                    : nav.id == 3
                    ? TfiGallery
                    : nav.id == 4
                    ? FiTv
                    : GrResources
                }
                text={nav.label}
              />
            </Link>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default GroupMenu;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
