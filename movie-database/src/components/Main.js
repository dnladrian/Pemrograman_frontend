import Hello from "./Hello";

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Daniel" />
      <Hello name="Mikael" />
      <Hello name="Hanna" />
      <Hello name="Joni" />
      <Hello name="Mars" />
    </main>
  );
}

export default Main;
