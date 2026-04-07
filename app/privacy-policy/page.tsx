import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Database,
  Cookie,
  ExternalLink,
  FileText,
  UserRound,
  Scale,
  Globe,
  Lock,
  MonitorPlay,
  ScrollText,
} from 'lucide-react'

function PolicySection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10 border border-black/10 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E4B15A]/20 text-black">
          <Icon size={20} className="text-[#C96B3C]" />
        </span>
        <h2 className="text-xl font-black text-black sm:text-2xl">{title}</h2>
      </div>

      <div className="mt-5 space-y-4 text-sm leading-6 text-gray-700 md:text-[15px]">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
            Associazione Calico ODV
          </p>

          <h1 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl md:text-5xl">
            Informativa sulla Privacy e Cookie Policy
          </h1>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

          <p className="mt-4 text-sm text-gray-500">
            Ultimo aggiornamento: 7 aprile 2026
          </p>
        </div>

        <div className="mb-10 border border-[#E4B15A]/40 bg-[#FDF6E8] p-6">
          <p className="text-sm leading-6 text-gray-700 md:text-[15px]">
            La presente informativa descrive in modo trasparente come vengono
            trattati i dati personali degli utenti che visitano il sito
            dell’Associazione Calico ODV. Le informazioni contenute in questa
            pagina si applicano esclusivamente al presente sito e non si
            estendono ai siti esterni eventualmente raggiungibili tramite link o
            contenuti incorporati di terze parti.
          </p>
        </div>

        <PolicySection icon={ShieldCheck} title="Titolare del trattamento">
          <p>
            Il titolare del trattamento dei dati personali è{' '}
            <strong>Associazione Calico ODV</strong>.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserRound size={16} className="text-[#C96B3C]" />
              <span>
                Presidente dell’associazione: <strong>Sonia Nicoletta D&apos;Angelo</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#C96B3C]" />
              <span>Via Giacomo Matteotti 47, 01036 Nepi (VT)</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#C96B3C]" />
              <span>calicoassociazione@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#C96B3C]" />
              <span>+39 393 501334</span>
            </div>
          </div>
        </PolicySection>

        <PolicySection icon={Database} title="Tipologia di dati trattati">
          <p>
            Il sito <strong>non prevede aree riservate, registrazioni, form di contatto,
            newsletter o raccolta diretta di dati personali</strong> attraverso moduli
            online.
          </p>

          <p>
            Durante la normale navigazione, tuttavia, i sistemi informatici e le
            procedure tecniche necessarie al funzionamento del sito possono
            trattare alcuni dati tecnici, la cui trasmissione è implicita
            nell’uso dei protocolli Internet.
          </p>

          <p>Tra questi dati possono rientrare, a titolo esemplificativo:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>indirizzo IP o altri identificativi tecnici del dispositivo;</li>
            <li>tipo di browser e sistema operativo;</li>
            <li>data e ora della visita;</li>
            <li>pagine richieste e risorse consultate;</li>
            <li>dati tecnici necessari alla corretta visualizzazione del sito.</li>
          </ul>

          <p>
            Tali informazioni sono trattate in forma strettamente funzionale
            all’erogazione del sito e alla sicurezza tecnica dello stesso.
          </p>
        </PolicySection>

        <PolicySection icon={Scale} title="Finalità e base giuridica del trattamento">
          <p>I dati tecnici di navigazione sono trattati per le seguenti finalità:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>consentire il corretto funzionamento del sito;</li>
            <li>garantire la sicurezza e la stabilità tecnica della piattaforma;</li>
            <li>gestire le preferenze relative ai cookie e ai contenuti esterni;</li>
            <li>
              permettere, previo consenso quando necessario, la visualizzazione
              di contenuti incorporati di terze parti;
            </li>
            <li>
              accertare eventuali responsabilità in caso di usi illeciti o danni
              ai sistemi.
            </li>
          </ul>

          <p>
            La base giuridica del trattamento è costituita, a seconda dei casi:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              dalla necessità di erogare il sito e i suoi servizi tecnici
              essenziali;
            </li>
            <li>
              dal legittimo interesse del titolare alla sicurezza, manutenzione e
              corretta gestione tecnica del sito;
            </li>
            <li>
              dal consenso dell’utente per l’eventuale attivazione di contenuti
              di terze parti non necessari.
            </li>
          </ul>
        </PolicySection>

        <PolicySection icon={ExternalLink} title="Collegamenti esterni e servizi di terze parti">
          <p>
            Il sito può contenere collegamenti verso piattaforme esterne, social
            network o servizi terzi, ad esempio per finalità informative,
            promozionali, di donazione o adozione.
          </p>

          <p>Tra questi possono rientrare, a titolo esemplificativo:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>PayPal;</li>
            <li>Teaming;</li>
            <li>CatLives;</li>
            <li>Empethy;</li>
            <li>Facebook, Instagram, WhatsApp;</li>
            <li>altri siti esterni eventualmente collegati tramite link.</li>
          </ul>

          <p>
            La semplice presenza di un link esterno <strong>non comporta di per sé
            l’installazione di cookie di terze parti sul presente sito</strong>.
            Il trattamento dei dati avviene direttamente da parte dei rispettivi
            gestori solo nel momento in cui l’utente decide di visitare tali
            servizi o interagire con essi.
          </p>

          <p>
            L’associazione non è responsabile delle modalità con cui i siti terzi
            trattano i dati personali degli utenti. Si invita pertanto a
            consultare le relative informative privacy prima di utilizzare tali
            servizi.
          </p>
        </PolicySection>

        <PolicySection icon={MonitorPlay} title="Contenuti incorporati di terze parti">
          <p>
            Alcune pagine del sito possono includere <strong>contenuti incorporati di
            terze parti</strong>, come ad esempio la diretta video della Gatteria
            tramite servizi esterni collegati a CatLives.
          </p>

          <p>
            Tali contenuti <strong>non vengono caricati automaticamente</strong>, ma
            solo dopo il consenso dell’utente ai contenuti di terze parti oppure
            dopo l’interazione prevista dal sistema di gestione dei cookie.
          </p>

          <p>
            Una volta attivati, questi contenuti possono comportare il
            trattamento di dati tecnici da parte della piattaforma esterna, come
            ad esempio:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>indirizzo IP;</li>
            <li>informazioni sul browser e sul dispositivo;</li>
            <li>dati di utilizzo del contenuto incorporato;</li>
            <li>altri dati tecnici necessari all’erogazione del servizio.</li>
          </ul>

          <p>
            Tali trattamenti avvengono secondo le informative privacy dei
            rispettivi fornitori esterni.
          </p>
        </PolicySection>

        <PolicySection icon={Cookie} title="Cookie Policy">
          <p>
            I cookie sono piccoli file di testo che i siti web possono salvare
            sul dispositivo dell’utente per garantire funzioni tecniche,
            memorizzare preferenze o consentire il caricamento di contenuti.
          </p>

          <p>Il sito dell’Associazione Calico ODV utilizza le seguenti categorie:</p>

          <div className="space-y-4">
            <div className="border border-black/10 bg-[#FCFBF8] p-4">
              <p className="font-bold text-black">1. Cookie necessari</p>
              <p className="mt-2">
                Sono i cookie tecnici indispensabili al funzionamento del sito e
                alla gestione delle preferenze privacy. Non possono essere
                disattivati perché strettamente necessari alla fruizione del sito.
              </p>
            </div>

            <div className="border border-black/10 bg-[#FCFBF8] p-4">
              <p className="font-bold text-black">2. Contenuti di terze parti</p>
              <p className="mt-2">
                Alcune pagine possono includere contenuti esterni, come la
                diretta video della Gatteria. Questi contenuti vengono caricati
                solo dopo il consenso dell’utente e possono utilizzare cookie o
                strumenti tecnici propri della piattaforma esterna.
              </p>
            </div>
          </div>

          <p>
            Il sito <strong>non utilizza cookie di profilazione, pubblicitari o di
            marketing propri</strong>.
          </p>

          <p>
            L’utente può gestire le proprie preferenze tramite il banner cookie e
            riaprirle in qualsiasi momento mediante l’apposita icona presente sul
            sito.
          </p>
        </PolicySection>

        <PolicySection icon={Lock} title="Modalità del trattamento e sicurezza">
          <p>
            I dati sono trattati con strumenti informatici e misure organizzative
            adeguate a garantirne la sicurezza, la riservatezza e la protezione
            da accessi non autorizzati, perdita, uso illecito o divulgazione
            indebita.
          </p>

          <p>
            Il trattamento avviene nei limiti strettamente necessari al
            perseguimento delle finalità indicate nella presente informativa.
          </p>
        </PolicySection>

        <PolicySection icon={Globe} title="Conservazione dei dati">
          <p>
            Il sito non raccoglie direttamente dati personali tramite moduli
            propri. I dati tecnici eventualmente trattati durante la navigazione
            sono conservati per il tempo strettamente necessario al funzionamento
            del sito, alla gestione tecnica e alla sicurezza.
          </p>

          <p>
            Per quanto riguarda eventuali contenuti o servizi di terze parti, i
            tempi di conservazione dipendono dalle policy dei rispettivi
            fornitori esterni.
          </p>
        </PolicySection>

        <PolicySection icon={ScrollText} title="Diritti dell’interessato">
          <p>
            Nei casi previsti dalla normativa applicabile, l’utente può
            esercitare i diritti riconosciuti dal Regolamento (UE) 2016/679,
            tra cui:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>diritto di accesso ai dati personali;</li>
            <li>diritto di rettifica;</li>
            <li>diritto alla cancellazione;</li>
            <li>diritto alla limitazione del trattamento;</li>
            <li>diritto di opposizione nei casi previsti;</li>
            <li>diritto di proporre reclamo all’Autorità Garante competente.</li>
          </ul>

          <p>
            Per qualsiasi richiesta relativa alla privacy o al trattamento dei
            dati è possibile contattare l’associazione ai recapiti indicati in
            questa pagina.
          </p>
        </PolicySection>

        <PolicySection icon={FileText} title="Modifiche alla presente informativa">
          <p>
            La presente informativa può essere aggiornata nel tempo per esigenze
            normative, tecniche o organizzative.
          </p>

          <p>
            Eventuali modifiche saranno pubblicate su questa pagina con
            l’indicazione della data di ultimo aggiornamento.
          </p>
        </PolicySection>

        <div className="border border-[#E4B15A]/40 bg-[#FDF6E8] p-6">
          <p className="text-sm leading-6 text-gray-700 md:text-[15px]">
            Per ulteriori informazioni puoi scrivere a{' '}
            <a
              href="mailto:calicoassociazione@gmail.com"
              className="font-semibold text-black underline underline-offset-2"
            >
              calicoassociazione@gmail.com
            </a>{' '}
            oppure tornare alla pagina{' '}
            <Link
              href="/chi-siamo"
              className="font-semibold text-black underline underline-offset-2"
            >
              Chi siamo
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}