// <AnimatePresence>
//   {show ? (
//     <motion.div
//       key="111"
//       initial={{ scale: 0 }}
//       animate={{
//         scale: 1,
//         transition: { ease: "easeInOut", duration: 1, delay: 1 },
//       }}
//       exit={{ scale: 0, transition: { ease: "easeInOut", duration: 1 } }}
//       onClick={() => {
//         setShow(!show);
//       }}
//       className="w-10 h-10 bg-white absolute"
//     ></motion.div>
//   ) : (
//     <motion.div
//       key="222"
//       initial={{ scale: 0 }}
//       animate={{
//         scale: 1,
//         transition: { ease: "easeInOut", duration: 1, delay: 1 },
//       }}
//       exit={{ scale: 0, transition: { ease: "easeInOut", duration: 1 } }}
//       onClick={() => {
//         setShow(!show);
//       }}
//       className="w-10 h-10 bg-red-500 absolute"
//     ></motion.div>
//   )}
// </AnimatePresence>;
