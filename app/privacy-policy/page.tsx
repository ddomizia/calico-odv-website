import { Mail, Phone, MapPin, ShieldCheck, Database, Cookie, ExternalLink } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">

        {/* TITOLO */}
        <div className="mb-10">
          <h1 className="text-3xl font-black uppercase text-black sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

          <p className="mt-4 text-sm text-gray-500">
            Ultimo aggiornamento: 7 aprile 2026
          </p>
        </div>

        {/* TITOLARE */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#C96B3C]" />
            <h2 className="text-xl font-black">Titolare del trattamento</h2>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Associazione Calico ODV</strong></p>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Via Giacomo Matteotti 47, 01036 Nepi (VT)
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              calicoassociazione@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              +39 393 501334
            </div>
          </div>
        </section>

        {/* DATI RACCOLTI */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <Database className="text-[#C96B3C]" />
            <h2 className="text-xl font-black">Dati raccolti</h2>
          </div>

          <p className="text-sm leading-6 text-gray-700">
            Questo sito non raccoglie direttamente dati personali tramite form,
            registrazioni o aree riservate.
          </p>

          <p className="text-sm leading-6 text-gray-700">
            Durante la navigazione possono essere raccolti dati tecnici
            (come indirizzo IP, tipo di browser, dispositivo utilizzato e pagine visitate),
            necessari al corretto funzionamento del sito.
          </p>
        </section>

        {/* FINALITÀ */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-black">Finalità del trattamento</h2>

          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>garantire il funzionamento del sito</li>
            <li>migliorare l’esperienza utente</li>
            <li>consentire l’accesso a contenuti esterni</li>
          </ul>
        </section>

        {/* SERVIZI TERZI */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <ExternalLink className="text-[#C96B3C]" />
            <h2 className="text-xl font-black">Servizi di terze parti</h2>
          </div>

          <p className="text-sm leading-6 text-gray-700">
            Il sito può contenere collegamenti a piattaforme esterne come servizi di pagamento,
            raccolta fondi, social network o piattaforme di adozione.
          </p>

          <p className="text-sm leading-6 text-gray-700">
            Interagendo con tali servizi, i dati vengono trattati direttamente dai rispettivi
            fornitori secondo le loro informative sulla privacy.
          </p>
        </section>

        {/* COOKIE */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <Cookie className="text-[#C96B3C]" />
            <h2 className="text-xl font-black">Cookie</h2>
          </div>

          <p className="text-sm leading-6 text-gray-700">
            Il sito utilizza cookie tecnici necessari al funzionamento e, ove presenti,
            cookie di terze parti.
          </p>

          <p className="text-sm leading-6 text-gray-700">
            L’utente può gestire le proprie preferenze tramite il banner cookie.
          </p>
        </section>

        {/* DIRITTI */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-black">Diritti dell’utente</h2>

          <p className="text-sm leading-6 text-gray-700">
            Ai sensi del GDPR, l’utente può richiedere accesso, modifica o cancellazione dei dati,
            oltre a limitare o opporsi al trattamento.
          </p>

          <p className="text-sm leading-6 text-gray-700">
            Per esercitare i propri diritti è possibile contattare:
            <br />
            <strong>calicoassociazione@gmail.com</strong>
          </p>
        </section>

        {/* MODIFICHE */}
        <section className="space-y-4">
          <h2 className="text-xl font-black">Modifiche alla policy</h2>

          <p className="text-sm leading-6 text-gray-700">
            La presente informativa può essere aggiornata nel tempo.
            Le modifiche saranno pubblicate su questa pagina.
          </p>
        </section>

      </div>
    </main>
  )
}