import logoImg from "../../imports/logo2.png";

export function Footer() {
  return (
    <footer className="bg-[#234660] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="">
            <img src={logoImg} alt="Outversal" className="h-19 mb-3" />
            <p className="text-sm opacity-80">
              Le pont stratégique entre l'exigence française et l'excellence
              malgache.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#services"
                  className="hover:opacity-100 transition-opacity"
                >
                  Postes couverts
                </a>
              </li>
              <li>
                <a
                  href="#comment"
                  className="hover:opacity-100 transition-opacity"
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href="#avantages"
                  className="hover:opacity-100 transition-opacity"
                >
                  Nos avantages
                </a>
              </li>
              <li>
                <a
                  href="#tarifs"
                  className="hover:opacity-100 transition-opacity"
                >
                  Tarifs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#apropos"
                  className="hover:opacity-100 transition-opacity"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>contact@outversal.com</li>
              <li>+33 7 61 74 21 51</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-sm text-center opacity-80">
          <p>&copy; 2026 Outversal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
