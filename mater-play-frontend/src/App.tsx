import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Section from "./app/components/Section"


function App() {

  return (
    <div className="wrapper">
    <Header />
    <main
      style={{
        marginTop: '8rem'
      }}
    >

        <Section title="">

        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App