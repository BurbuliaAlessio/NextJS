import { JSX } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next"; // Importa i18next direttamente
import i18nConfig from "./../../../../i18n";

const { locales } = i18nConfig;

const ChangeLanguage = (): JSX.Element => {
    const { t } = useTranslation("common");

    return (
        <div>
            {locales.map((lng) => (
                <button key={lng} onClick={() => i18next.changeLanguage(lng)}>
                    {lng}
                </button>
            ))}
        </div>
    );
}

export default ChangeLanguage;
