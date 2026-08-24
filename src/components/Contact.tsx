import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { IconMail, IconLinkedIn, IconGithub } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";

export function Contact() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailOpened, setEmailOpened] = useState(false);

  const heading = dark ? "text-white" : "text-[#111111]";
  const sub = dark ? "text-[#AAAAAA]" : "text-[#555555]";
  const channelText = dark
    ? "text-[#AAAAAA] hover:text-white"
    : "text-[#444444] hover:text-[#111111]";
  const iconBox = dark
    ? "border-[#333] text-[#777] group-hover:border-[#555] group-hover:text-[#AAAAAA]"
    : "border-[#E2E2E0] text-[#888888] group-hover:border-[#AAAAAA] group-hover:text-[#444]";
  const labelCls = dark ? "text-[#888888]" : "text-[#555555]";
  const inputCls = dark
    ? "border-[#333] bg-[#222] text-white placeholder:text-[#555] focus:border-[#777] focus:ring-[#777]"
    : "border-[#E2E2E0] bg-[#F9F9F7] text-[#111] placeholder:text-[#BBBBBB] focus:border-[#888] focus:ring-[#888]";

  return (
    <section
      id="contact"
      className={`py-24 px-6 border-t ${
        dark ? "border-[#2A2A2A] bg-[#1A1A1A]" : "border-[#E2E2E0] bg-[#FFFFFF]"
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Contato</SectionLabel>
          <h2
            className={`font-display text-4xl md:text-5xl mb-5 leading-tight ${heading}`}
          >
            Vamos criar
            <br />
            <span className="italic">algo juntos?</span>
          </h2>
          <p className={`text-[15px] leading-relaxed mb-10 max-w-sm ${sub}`}>
            Estou aberto a colaborações técnicas, ou uma conversa sobre
            engenharia de software e tecnologia. Respondo mensagens assim que
            possível.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: <IconMail size={18} />,
                label: "rebuuula@gmail.com",
                href: "mailto:rebuuula@gmail.com",
              },
              {
                icon: <IconLinkedIn size={18} />,
                label: "linkedin.com/in/samuel-rebula",
                href: "https://linkedin.com/in/samuel-rebula",
              },
              {
                icon: <IconGithub size={18} />,
                label: "github.com/samuelrebula",
                href: "https://github.com/samuelrebula",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`flex items-center gap-3 text-sm transition-colors group ${channelText}`}
              >
                <span
                  className={`w-9 h-9 border rounded-md flex items-center justify-center transition-colors ${iconBox}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          {emailOpened ? (
            <div
              className={`border rounded-md p-8 text-center ${
                dark
                  ? "border-[#444] bg-[#252525]"
                  : "border-[#D0D0CE] bg-[#F4F4F2]"
              }`}
            >
              <p className={`font-display text-2xl mb-2 ${heading}`}>
                E-mail preparado!
              </p>
              <p className={`text-sm ${sub}`}>
                Seu aplicativo de e-mail foi aberto com a mensagem preenchida.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const subject = `Contato pelo portfólio: ${form.name}`;
                const body = `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`;
                window.location.href = `mailto:rebuuula@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setEmailOpened(true);
              }}
              className="space-y-4"
            >
              {[
                {
                  id: "name",
                  label: "Nome",
                  type: "text",
                  placeholder: "Seu nome completo",
                },
                {
                  id: "email",
                  label: "E-mail",
                  type: "email",
                  placeholder: "seu@email.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    className={`block text-sm font-medium mb-2 ${labelCls}`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as "name" | "email"]}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        [field.id]: e.target.value,
                      }))
                    }
                    required
                    className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-1 transition-colors ${inputCls}`}
                  />
                </div>
              ))}
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelCls}`}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Conte-me sobre o seu projeto ou oportunidade..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  required
                  className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-1 transition-colors resize-none ${inputCls}`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 text-sm font-medium rounded-md transition-colors ${
                  dark
                    ? "bg-white text-[#111] hover:bg-[#E8E8E6]"
                    : "bg-[#111111] text-white hover:bg-[#222222]"
                }`}
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
