import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionTitle from "./components/Accordion/AccordionTitle.jsx";


function App() {
  return (<>
  <main>
    <section>
      <h2>Why work with us?</h2>
<Accordion className="accordion">
<Accordion.Item

    className="accordion-item"
    >
  <Accordion.Title   className="accordion-item-title"  id="experience">
    We got 20 years of experience
  </Accordion.Title>
  <Accordion.Content  className="accordion-item-content"    id="experience">
    <article>
      <p>
        You wont go wrong with us
      </p>
      <p>
        We got 20 years of experience
      </p>
    </article>
  </Accordion.Content>


</Accordion.Item>
  <Accordion.Item
      id="local-guides"
      title="We're working with local guides">
    <Accordion.Title   className="accordion-item-title"  id="local-guides">
      We're working with local guides
    </Accordion.Title>
    <Accordion.Content
        className="accordion-item-content"
        id="local-guides">
      <article>
        <p>
          We're not doing this alone just from an office
        </p>
        <p>
          We're working with locals
        </p>
      </article>
    </Accordion.Content>


  </Accordion.Item>

</Accordion>
    </section>
  </main>
      </>
  )
}

export default App;
