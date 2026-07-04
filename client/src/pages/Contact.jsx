import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLang } from "../LangContext.jsx";
import { useTitle } from "../useTitle.js";
import "./Contact.css";

const initial = { companyName: "", contactName: "", phone: "", email: "", subject: "", message: "" };

const t = {
  breadcrumb:    { ja: "お問い合わせ", en: "Inquiry" },
  title:         { ja: "お問い合わせ", en: "Inquiry" },
  company:       { ja: "貴社名・団体名", en: "Company / organization name" },
  contact:       { ja: "ご担当者名", en: "Contact person name" },
  phone:         { ja: "電話番号", en: "Phone number" },
  email:         { ja: "メールアドレス", en: "Email address" },
  subject:       { ja: "件名", en: "Subject" },
  message:       { ja: "お問い合わせ内容", en: "Inquiry details" },
  privacyTitle:  { ja: "【個人情報の取り扱いについて】", en: "[ About the handling of personal information ]" },
  privacyBody:   { ja: "ご記入いただいた個人情報は、お問い合わせへの対応のみに使用し、プライバシーポリシーに従い適切に管理いたします。", en: "Information submitted through this form is used only to respond to your inquiry and will be handled in accordance with our privacy policy." },
  agreeText:     { ja: "個人情報の取り扱い（プライバシーポリシー）に同意する", en: "I agree to the handling of personal information (privacy policy)" },
  send:          { ja: "送信する", en: "Send" },
  sending:       { ja: "送信中…お待ちください", en: "Sending… please wait" },
  success:       { ja: "お問い合わせを受け付けました。近日中にご連絡いたします。", en: "Thank you — your inquiry has been sent. We'll be in touch soon." },
  required:      { ja: "必須", en: "Required" },
};

export default function Contact() {
  const { lang } = useLang();
  const ja = lang === "ja";
  const tx = (key) => t[key][lang];
  const [form, setForm] = useState(initial);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) { setStatus("error"); setErrorMsg(ja ? "プライバシーポリシーに同意してください。" : "Please agree to the privacy policy before sending."); return; }
    setStatus("sending"); setErrorMsg("");
    try {
      await axios.post("/api/contact", form);
      setStatus("sent"); setForm(initial); setAgreed(false);
    } catch (err) {
      setStatus("error"); setErrorMsg(err?.response?.data?.error || (ja ? "エラーが発生しました。" : "Something went wrong. Please try again."));
    }
  };

  return (
    <div className="inquiry">
      <div className="container inquiry__breadcrumb">
        <Link to="/">{ja ? "ホーム" : "Home"}</Link>
        <span className="inquiry__breadcrumb-sep">›</span>
        <span>{tx("breadcrumb")}</span>
      </div>
      <div className="container inquiry__body">
        <h1 className="inquiry__title">{tx("title")}</h1>
        {status === "sent" ? (
          <p className="inquiry__success">{tx("success")}</p>
        ) : (
          <form onSubmit={onSubmit} className="inquiry__form" noValidate>
            <table className="inquiry__table">
              <tbody>
                <Row label={tx("company")} req={tx("required")}><input type="text" name="companyName" value={form.companyName} onChange={onChange} required /></Row>
                <Row label={tx("contact")} req={tx("required")}><input type="text" name="contactName" value={form.contactName} onChange={onChange} required /></Row>
                <Row label={tx("phone")} req={tx("required")}><input type="tel" name="phone" value={form.phone} onChange={onChange} required /></Row>
                <Row label={tx("email")} req={tx("required")}><input type="email" name="email" value={form.email} onChange={onChange} required /></Row>
                <Row label={tx("subject")} req={tx("required")}><input type="text" name="subject" value={form.subject} onChange={onChange} required /></Row>
                <Row label={tx("message")} req={tx("required")}><textarea name="message" rows={7} value={form.message} onChange={onChange} required /></Row>
              </tbody>
            </table>
            <div className="inquiry__privacy">
              <p className="inquiry__privacy-title">{tx("privacyTitle")}</p>
              <div className="inquiry__privacy-box">{tx("privacyBody")}</div>
              <label className="inquiry__agree">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                <span><Link to="/privacy">{tx("agreeText")}</Link></span>
              </label>
            </div>
            {status === "error" && <p className="inquiry__error">{errorMsg}</p>}
            <div className="inquiry__submit-row">
              <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? tx("sending") : tx("send")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Row({ label, req, children }) {
  return (
    <tr>
      <th><span className="inquiry__required">{req}</span>{label}</th>
      <td>{children}</td>
    </tr>
  );
}
