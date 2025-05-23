function Avatar({ avatar }) {
  return (
    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
      <img
        src={avatar}
        alt=""
        className="rounded-full h-full w-full object-cover"
      />
    </div>
  );
}
export default Avatar;
