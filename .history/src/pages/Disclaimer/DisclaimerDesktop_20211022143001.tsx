/* eslint-disable no-octal-escape */
import React from "react";
import styles from "./DisclaimerDesktop.module.css";
import Header from "../../components/Header/HeaderMobile";
import ArrowUp from "../../components/svg/arrowUp";
import { HashLink } from "react-router-hash-link";
import "react-scroll";
import Footer from "../../components/Footer/Footer";
import FooterDesktop from "../../components/Footer/FooterDesktop";
import HeaderDesktop from "../../components/Header/HeaderDesktop";

function DisclaimerDesktop(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderDesktop type={"disclaimer"} />
      </div>
      <main className={styles.main}>
        <section id={"section1"} className={styles.section}>
          <h3>
            DIS<span>CLAIMER</span>
          </h3>
          <h4>Licence</h4>
          <div className={styles.disclaimerWrapper}>
            <p className={styles.disclaimerText}>
              Wangui Gathere Advocates grants to Users a single non-exclusive
              and non-assignable licence to access the Website and make use of
              the functions provided as part of the Website subject always to
              these conditions which shall not be amended or waived unless with
              the written agreement of Wangui Gathere Advocates. <br />
              1. Intellectual Property <br />
              All Intellectual Property in the Website and the content displayed
              as part of it shall belong to Wangui Gathere Advocates and its
              Licensors and particular (but without prejudice to the generality
              of the foregoing): <br />
              1.1 Copyright <br />
              All the content included as a graphical representation on this
              site including (but not limited to) text, graphics, logos, button
              icons, images, audio clips, digital downloads, data compilations
              and software is the property of Wangui Gathere Advocates or its
              Licensors. Users are granted permission to browse and use the site
              for its intended purpose and to make one electronic copy of any
              part of this Website designated as available for down-loading for
              personal use subject to these conditions. Any other use of the
              materials on this Website including (but not limited to)
              reproduction, modification, distribution, transmission, removal,
              deletion, addition, display, performance, or replication of the
              content on this site or any other manner of exploitation of any of
              the contents of the Website in part or in whole is strictly
              prohibited.
              <br />
              <br />
              All source codes including but not limited to, HTML, Java-script,
              WML, XTML or any other format or script used to create this
              website are the property of Wangui Gathere Advocates. Any use of
              such source codes including (but not limited to) reproduction,
              modification, distribution, transmission, removal, deletion,
              addition, display, decompilation, reverse engineering or
              replication or any other manner or exploitation of any part of the
              source code in part is strictly prohibited.
              <br />
              <br />
              Any copyright material posted on this Website which is not the
              property of Wangui Gathere Advocates is acknowledged as such. All
              rights to this copyright remain with the proprietor of the
              copyright subject to a licence to Wangui Gathere Advocates.
              <br />
              <br />
              1.2 Trademark
              <br />
              The Wangui Gathere Advocates logo and other/or Marks indicated as
              such on the site are trademarks of Wangui Gathere Advocates.
              Wangui Gathere Advocates's trademarks may not be used in
              connection with any other product or service or in any manner that
              is likely in the opinion of Wangui Gathere Advocates to cause
              confusion amongst clients or any manner which is detrimental to
              the image or reputation of Wangui Gathere Advocates. All other
              trademarks not owned by Wangui Gathere Advocates that appear on
              this site are the property of their respective owners and appear
              by Licence to Wangui Gathere Advocates only. This Website does not
              grant by implication or otherwise any licence or right to use any
              trademarks displayed. Infringement or misappropriation of the
              trademarks will lead to legal action for the misuse of this
              Website.
              <br />
              <br />
              1.3 Database Right
              <br />
              All database material compiled by or on behalf of Wangui Gathere
              Advocates (including but not limited to compilation through the
              Website) by whatever accessible means or on whatever medium stored
              remains the property of Wangui Gathere Advocates.
              <br />
              <br />
              2. Defamation
              <br />
              <br />
              2.1 Disclaimer
              <br />
              Wangui Gathere Advocates does not make any representations or
              warranties about the legality, decency, content or policy of any
              websites accessible by links from the Website. Any such website is
              independent of Wangui Gathere Advocates and Wangui Gathere
              Advocates has no control over or responsibility for the
              information provided or activities undertaken by any such website.
              The presence of a link from the Website to another website does
              not imply any endorsement by Wangui Gathere Advocates of any such
              website.
              <br />
              <br />
              2.2
              <br />
              Wangui Gathere Advocates does not make any representations or
              warranties about the legality, decency, content or policies of any
              other websites reached by way of use of any search engines or
              other facilities on the Website.
              <br />
              <br />
              3. Data Protection
              <br />
              <br />
              3.1
              <br />
              Personal data received and stored through the use of the Website
              or any other means by Wangui Gathere Advocates may be made
              available to the bodies and for the purposes listed below:
              <br />
              <br />
              3.1.1
              <br />
              Hosts of the Website for the purposes of hosting;
              <br />
              3.1.2
              <br />
              Financial institutions for the purposes of providing advice and
              information on financial services;
              <br />
              <br />
              3.1.3
              <br />
              Other departments within Wangui Gathere Advocates to compile
              statistics and provide information on the services provided by
              Wangui Gathere Advocates.
              <br />
              <br />
              3.2
              <br />
              Personal data may also be disclosed to necessary recipients for
              the following purposes:
              <br />
              <br />
              3.2.1
              <br />
              To protect the rights, property or safety of Wangui Gathere
              Advocates, Users or others;
              <br />
              <br />
              3.2.2
              <br />
              Where required by any statute, regulation or other instrument
              having legal effect or by the order of any Court or the Data
              Protection Commissioner;
              <br />
              <br />
              3.3
              <br />
              For market research and security purposes Wangui Gathere Advocates
              reserves the right to use "cookies" technology for the purpose of
              identification of Users.
              <br />
              <br />
              A cookie is a small amount of data that is sent to the Users'
              browser from the Website and sorted on the Users' computer's hard
              drive. If the User does not wish to have cookies placed on his
              computer the User can disable cookies through the Users' internet
              browser. Disabling cookies may prevent the User from accessing
              some portions of the Website.
              <br />
              <br />
              3.4
              <br />
              Any Users not wishing to receive information about the services
              provided by Wangui Gathere Advocates should write to us at the
              registered address. <br />
              <br />
              4. No Legal Advice, Instructions
              <br />
              <br />
              4.1
              <br />
              The content and use of the Website is intended to be for
              information purposes only and in no way shall such content be
              construed as legal advice. Wangui Gathere Advocates will not
              assume responsibility or liability for any losses arising
              whatsoever from any reliance by any User on the information
              contained in the Website. Users are reminded that this Website
              does not remove the need to take expert advice on all matters
              having legal effect.
              <br />
              <br />
              4.2
              <br />
              Receipt of information by Wangui Gathere Advocates by electronic
              means from Users of the Website shall not be taken to be the
              receipt by Wangui Gathere Advocates of instructions to act for a
              client or clients or the conclusion of any form of contract for
              goods and services. Wangui Gathere Advocates reserves the right at
              its discretion to accept or refuse invitations to enter contracts.
              <br />
              <br />
              5. Warranties, Liability
              <br />
              <br />
              5.1
              <br />
              Wangui Gathere Advocates does not assume any responsibility or
              liability for loss of any data placed on the Website by Users or
              by any other persons for whatever reason;
              <br />
              <br />
              5.2
              <br />
              Wangui Gathere Advocates shall not be liable for any loss incurred
              by any business as a result of being a User of the Website
              including (but not limited to) loss of profits, loss of contracts
              or loss of business.
              <br />
              <br />
              5.3
              <br />
              Wangui Gathere Advocates shall not be liable for any consequential
              or economic loss suffered by any User howsoever caused.
              <br />
              <br />
              5.4
              <br />
              In the case of damage to property caused by a User accessing the
              Site the liability of Wangui Gathere Advocates in any jurisdiction
              shall be excluded to the greatest extent permitted by law.
              <br />
              <br />
              6. Technical
              <br />
              <br />
              6.1
              <br />
              Wangui Gathere Advocates and any of its partners, employees,
              agents, contractors or successors shall not be liable for the
              non-accessibility of this Website due to technical inefficiency or
              failure including (but not limited to) such failure caused by
              electricity supply faults or non-functionality of the Internet.
              <br />
              <br />
              6.2
              <br />
              The availability of the Website is dependent upon the continuing
              availability of any third party Licences to Wangui Gathere
              Advocates. Termination of such Licences may result in the removal
              or non-functionality of parts or all of the Website.
              <br />
              <br />
              6.3
              <br />
              Wangui Gathere Advocates accepts no responsibility for the
              inaccessibility of this Website caused by the use by Users of
              non-compatible, defective or obsolete hardware or software, nor
              shall Wangui Gathere Advocates be liable for failure to inform
              Users of the hardware and software required for use of the
              Website.
              <br />
              <br />
              6.4
              <br />
              Wangui Gathere Advocates does not endorse nor warrant the
              effectiveness or compatibility of any third party software
              including (but not limited to) search engines or browsers,
              required for the use of this Website nor shall Wangui Gathere
              Advocates be liable for providing any equipment, software or
              telecommunication services in order to access and use this
              Website, Wangui Gathere Advocates does not warrant that any third
              party software licences are valid nor is Wangui Gathere Advocates
              agent for any third party. <br />
              <br />
              6.5
              <br />
              Wangui Gathere Advocates does not warrant that this site is free
              from viruses or other harmful components. Wangui Gathere Advocates
              will not be liable for any damage of any kind to hardware or
              software purported to have been caused by entry to this site
              including (but not limited to) loss or corruption of data. Users
              are advised to use a virus checking application on their computer
              systems.
              <br />
              <br />
              6.6
              <br />
              Wangui Gathere Advocates expressly disclaims any responsibility or
              liability for any damage, loss or injury arising out of the
              activities of any third party or the goods or services offered or
              content displayed by any such third party where such goods or
              services are not directly made available for sale or supply on the
              Website.
              <br />
              <br />
              7. Jurisdiction
              <br />
              <br />
              7.1
              <br />
              These conditions shall be governed by Kenyan law in every
              particular including formation and interpretation and shall be
              deemed to have been made in Kenya.
              <br />
              <br />
              7.2
              <br />
              Any proceedings arising out of or in connection with these
              conditions shall be brought in any court of competent jurisdiction
              in Kenya.
              <br />
              <br />
              8. General
              <br />
              <br />
              8.1
              <br />
              Wangui Gathere Advocates is regulated by the Law Society of Kenya.
              <br />
              <br />
              8.2
              <br />A list of Partners is available on request or available for
              inspection at our Registered Address.
            </p>
          </div>
          <HashLink
            to={"/disclaimer/#section1"}
            className={styles.links}
            smooth={true}
          >
            <ArrowUp />
          </HashLink>
        </section>
      </main>
      <FooterDesktop />
    </div>
  );
}
export default DisclaimerDesktop;