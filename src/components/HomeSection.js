import Artbridge from "./shared/Artbridge";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center text-center align-middle"
    >
      <Artbridge />

      <div className="h4 flex text-center justify-center">
        gdzie sztuka łączy ludzi
      </div>
    </section>
  );
}
