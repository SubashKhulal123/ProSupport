import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import { useTitle } from "../useTitle.js";
import "./PageShared.css";
import "./Privacy.css";

export default function Privacy() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <div>
      <div className="container page-breadcrumb">
        <Link to="/">{ja ? "ホーム" : "Home"}</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>{ja ? "プライバシーポリシー" : "Privacy Policy"}</span>
      </div>
      <div className="container privacy__body">
        <h1 className="page-tab-title">{ja ? "プライバシーポリシー" : "Privacy Policy"}</h1>
        {ja ? <JA /> : <EN />}
      </div>
    </div>
  );
}

function JA() {
  return (
    <div className="privacy__content">
      <h2>個人情報の取扱</h2>
      <h3>プライバシーポリシー</h3>
      <p>株式会社Pro Support（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）によって取得する、本サービスを利用されるユーザー（以下、単に「ユーザー」といいます。）の個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>

      <h3>第1条（個人情報）</h3>
      <p>「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>

      <h3>第2条（個人情報の収集方法）</h3>
      <p>当社は，ユーザーが本サービスにおけるフォームへの入力をされる際、又は、その他本サービスに関連して適正な方法により、氏名，生年月日，住所，電話番号，メールアドレスその他ユーザーに関する個人情報などを収集いたします。また，本サービスに関連して，ユーザーと当社の提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,提携先などから収集することがあります。</p>

      <h3>第3条（個人情報を収集・利用する目的）</h3>
      <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
      <ol>
        <li>本サービスの提供・運営のため</li>
        <li>本サービスにおける、求職者様と求人企業様への情報提供のため</li>
        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
        <li>ユーザーが利用中の本サービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
        <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
        <li>利用規約に違反したユーザーや，不正・不当な目的で本サービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
        <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
        <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
        <li>上記の利用目的に付随する目的</li>
      </ol>

      <h3>第4条（利用目的の変更）</h3>
      <p>当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には，変更後の目的について，本ウェブサイト上に公表するものとします。</p>

      <h3>第5条（個人情報の第三者提供）</h3>
      <p>当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。</p>
      <ol>
        <li>法令に基づく場合</li>
        <li>人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
      </ol>

      <h3>第6条（個人情報の開示）</h3>
      <p>当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。</p>
      <ol>
        <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
        <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
        <li>その他法令に違反することとなる場合</li>
      </ol>

      <h3>第7条（個人情報の訂正および削除）</h3>
      <p>ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。</p>

      <h3>第8条（個人情報の利用停止等）</h3>
      <p>当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。</p>

      <h3>第9条（プライバシーポリシーの変更）</h3>
      <p>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</p>

      <h3>第10条（お問い合わせ窓口）</h3>
      <p>本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。</p>
      <p>
        住所：〒371-0854 群馬県前橋市大渡町１丁目１６－１オクシー前橋１階Ａ号室<br />
        社名：株式会社Pro Support<br />
        担当部署：個人情報取扱責任者<br />
        TEL：027-289-0762
      </p>
    </div>
  );
}

function EN() {
  return (
    <div className="privacy__content">
      <h2>Handling of Personal Information</h2>
      <h3>Privacy Policy</h3>
      <p>ProSupport Co., Ltd. (hereinafter "the Company") establishes the following Privacy Policy (hereinafter "this Policy") regarding the handling of personal information of users (hereinafter "Users") of the services provided on this website (hereinafter "the Service").</p>

      <h3>Article 1 (Personal Information)</h3>
      <p>"Personal information" refers to "personal information" as defined under the Personal Information Protection Act, meaning information about a living individual that can identify a specific individual by name, date of birth, address, telephone number, contact information, or other description, as well as data relating to appearance, fingerprints, voiceprints, and health insurance policy numbers that can identify a specific individual on their own.</p>

      <h3>Article 2 (Method of Collecting Personal Information)</h3>
      <p>The Company collects personal information such as name, date of birth, address, telephone number, email address, and other information when Users fill in forms on the Service or through other appropriate methods related to the Service.</p>

      <h3>Article 3 (Purpose of Collecting and Using Personal Information)</h3>
      <p>The purposes for which the Company collects and uses personal information are as follows:</p>
      <ol>
        <li>To provide and operate the Service</li>
        <li>To provide information to job seekers and recruiting companies through the Service</li>
        <li>To respond to inquiries from Users (including identity verification)</li>
        <li>To send emails about new features, updates, campaigns, and other services provided by the Company</li>
        <li>To contact Users as necessary for maintenance, important notices, etc.</li>
        <li>To identify Users who violate the Terms of Use or attempt to use the Service for improper purposes, and to refuse their use</li>
        <li>To allow Users to view, change, or delete their own registered information</li>
        <li>To bill Users for paid services</li>
        <li>For purposes incidental to the above purposes</li>
      </ol>

      <h3>Article 4 (Change of Purpose of Use)</h3>
      <p>The Company may change the purpose of use of personal information only when it is reasonably recognized that the changed purpose is related to the original purpose, and will announce the changed purpose on this website.</p>

      <h3>Article 5 (Provision of Personal Information to Third Parties)</h3>
      <p>The Company will not provide personal information to third parties without the prior consent of the User, except in the following cases:</p>
      <ol>
        <li>When required by law</li>
        <li>When necessary to protect the life, body, or property of a person and it is difficult to obtain the consent of the individual</li>
        <li>When particularly necessary for improving public health or promoting the sound development of children, and it is difficult to obtain the consent of the individual</li>
        <li>When it is necessary to cooperate with a national institution, local government, or their entrusted party in carrying out duties prescribed by law, and obtaining consent may impede those duties</li>
      </ol>

      <h3>Article 6 (Disclosure of Personal Information)</h3>
      <p>When requested by the individual to disclose personal information, the Company will disclose it without delay. However, if disclosure falls under any of the following, all or part may not be disclosed, and the individual will be notified promptly:</p>
      <ol>
        <li>When there is a risk of harm to the life, body, property, or other rights of the individual or a third party</li>
        <li>When there is significant risk of interference with the proper conduct of the Company's business</li>
        <li>When it would violate other laws and regulations</li>
      </ol>

      <h3>Article 7 (Correction and Deletion of Personal Information)</h3>
      <p>If a User's personal information held by the Company is incorrect, the User may request correction, addition, or deletion through the procedures established by the Company. If the Company determines that the request should be accommodated, it will make corrections without delay.</p>

      <h3>Article 8 (Suspension of Use of Personal Information)</h3>
      <p>If the individual requests suspension or deletion of personal information on the grounds that it is being handled beyond the stated purpose or was obtained by improper means, the Company will conduct necessary investigations without delay and take action if the request is deemed appropriate.</p>

      <h3>Article 9 (Changes to the Privacy Policy)</h3>
      <p>The contents of this Policy may be changed without notice to Users, except as otherwise stipulated by law or this Policy. Changes will take effect when posted on this website.</p>

      <h3>Article 10 (Contact)</h3>
      <p>
        Address: 〒371-0854 1-16-1 Owatarimachi, Maebashi City, Gunma Prefecture, Oxy Maebashi 1F Room A<br />
        Company: ProSupport Co., Ltd.<br />
        Department: Personal Information Manager<br />
        TEL: 027-289-0762
      </p>
    </div>
  );
}
