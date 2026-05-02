import{r as St,c as mt,j as n}from"./vendor-react-c8iXu-O6.js";import{K as rt,f as Te,l as Ze}from"./pages-invoices-DH9skEuX.js";import{e as Dt}from"./pages-misc-CE0Pt44r.js";const It={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},Pt=St.forwardRef((l,t)=>{const e=mt.c(167),{invoice:s,customer:a,company:ue}=l,i=ue===void 0?It:ue;let o,H,B,y,me,A,j,W,p,v;if(e[0]!==i.address||e[1]!==i.city||e[2]!==i.email||e[3]!==i.name||e[4]!==i.phone||e[5]!==i.phone2||e[6]!==a?.address||e[7]!==a?.phone||e[8]!==s.customerAddress||e[9]!==s.customerName||e[10]!==s.customerPhone||e[11]!==s.dueDate||e[12]!==s.invoiceNumber||e[13]!==s.issueDate||e[14]!==s.items||e[15]!==s.paymentMethod||e[16]!==s.status||e[17]!==t){const C=s.items.reduce(kt,0);A=t,j="inv-root",e[28]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 10mm 12mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .inv-root {
              width: 100% !important;
              max-width: 100% !important;
              padding: 8mm !important; 
              margin: 0 !important;
              box-shadow: none !important;
              font-size: 8.5pt !important;
            }
            .no-print { display: none !important; }
          }

          /* ── ROOT ── */
          .inv-root {
            width: 186mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 8mm 10mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9pt;
            color: #111;
            line-height: 1.4;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            box-sizing: border-box;
          }

          /* ── HEADER ── */
          .inv-header {
            position: relative;
            text-align: center;
            border: 1.5pt solid #111;
            padding: 3mm 42mm 3mm 42mm;
            min-height: 28mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .inv-header-left {
            position: absolute;
            left: 3mm;
            top: 50%;
            transform: translateY(-50%);
            text-align: left;
          }
          .inv-header-right {
            position: absolute;
            right: 3mm;
            top: 3mm;
            font-size: 8pt;
            color: #333;
            text-align: right;
          }
          .inv-logo-name-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-bottom: 2mm;
          }
          .inv-company-sinhala-large {
            font-size: 26pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .inv-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .inv-company-contact { font-size: 7.5pt; color: #555; line-height: 1.7; }
          .inv-form-label { font-size: 7.5pt; color: #666; }
          .inv-form-no { font-size: 9pt; font-weight: 700; }

          /* ── TITLE BAR ── */
          .inv-title-bar {
          border-left: 1.5pt solid #111; border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex; align-items: stretch;
          }
          .inv-title-en {
            flex: 1; text-align: center; font-size: 13pt; font-weight: 800;
            letter-spacing: 3px; text-transform: uppercase; padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .inv-title-si {
            flex: 1; text-align: center; font-size: 12pt; font-weight: 700;
            padding: 2mm 0; color: #111;
          }

          /* ── SECTION ── */
          .inv-section {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
          }
          .inv-section-header {
            background: #f0f0f0; border-bottom: 1pt solid #111;
            padding: 1mm 3mm; display: flex; justify-content: space-between; align-items: center;
          }
          .inv-section-title-en { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .inv-section-title-si { font-size: 8.5pt; font-weight: 600; color: #333; }

          /* ── INFO GRID ── */
          .inv-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .inv-info-cell {
            padding: 1.5mm 3mm; border-right: 0.5pt solid #bbb; border-bottom: 0.5pt solid #ddd;
          }
          .inv-info-cell:nth-child(even) { border-right: none; }
          .inv-info-cell.full { grid-column: 1 / -1; border-right: none; }
          .inv-field-label { font-size: 7.5pt; color: #666; display: block; margin-bottom: 0.3mm; }
          .inv-field-label-si { font-size: 7.5pt; color: #888; }
          .inv-field-value { font-size: 10pt; font-weight: 600; color: #000; display: block; }

          /* ── STATUS ── */
          .inv-status {
            display: inline-block; padding: 1mm 3mm; border: 1pt solid #333;
            font-size: 8pt; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          }

          /* ── TABLE ── */
          .inv-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
          .inv-table th {
            padding: 1.5mm 2mm; background: #f0f0f0; border: 0.5pt solid #999;
            font-size: 7.5pt; font-weight: 700; text-align: center; text-transform: uppercase;
          }
          .inv-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .inv-table td { padding: 2mm; border: 0.5pt solid #bbb; vertical-align: middle; }
          .inv-table td.center { text-align: center; }
          .inv-table td.right { text-align: right; }
          .inv-item-sub { font-size: 7.5pt; color: #555; }
          .inv-table tfoot td { background: #f5f5f5; font-weight: 700; border: 0.5pt solid #999; }

          /* ── TOTALS ── */
          .inv-totals-row {
            display: flex; justify-content: space-between;
            padding: 1.5mm 3mm; border-bottom: 0.5pt solid #ddd; font-size: 9pt;
          }
          .inv-totals-row:last-child { border-bottom: none; }
          .inv-totals-row.highlight {
            font-size: 11pt; font-weight: 700; background: #f9f9f9;
            border-top: 1pt solid #555; border-bottom: none;
          }
          .inv-totals-row.balance {
            border: 1pt solid #333; margin: 2mm 3mm 0; font-weight: 700;
          }
          .inv-totals-label { color: #444; }
          .inv-totals-label .si { font-size: 7.5pt; color: #888; display: block; }
          .inv-totals-value { font-weight: 600; }

          /* ── NOTES / TERMS ── */
          .inv-box {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
            padding: 2mm 3mm;
          }
          .inv-box-cap {
            font-size: 7.5pt; font-weight: 700; text-transform: uppercase;
            letter-spacing: 1px; color: #555; margin-bottom: 1.5mm;
          }
          .inv-box p { font-size: 8.5pt; color: #444; margin: 0; }
          .inv-terms-list {
            margin: 0; padding-left: 4mm;
            font-size: 7.5pt; color: #444; line-height: 1.7; list-style-type: disc;
          }

          /* ── SIGNATURES ── */
          .inv-sig-row {
            display: flex; justify-content: space-between;
            padding: 4mm 3mm 2mm; gap: 6mm;
          }
          .inv-sig-box { flex: 1; border: 0.75pt solid #555; padding: 2mm 3mm; text-align: center; }
          .inv-sig-space { height: 12mm; }
          .inv-sig-label { border-top: 0.75pt solid #333; padding-top: 1.5mm; font-size: 8.5pt; font-weight: 700; }
          .inv-sig-label .si { font-size: 8pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .inv-footer {
            margin: 0; text-align: center; font-size: 7.5pt; color: #888;
            border-top: 0.5pt solid #ccc; padding: 1.5mm 3mm;
          }
        `}),e[28]=W):W=e[28];let Z,J;e[29]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"50px",height:"50px",objectFit:"contain",borderRadius:"4px",display:"block",marginBottom:"1.5mm"},onError:At}),J={fontSize:"7pt",color:"#555",lineHeight:1.7},e[29]=Z,e[30]=J):(Z=e[29],J=e[30]);let I;e[31]===Symbol.for("react.memo_cache_sentinel")?(I=n.jsx("br",{}),e[31]=I):I=e[31];const K=i.phone2?` / ${i.phone2}`:"";let q;e[32]===Symbol.for("react.memo_cache_sentinel")?(q=n.jsx("br",{}),e[32]=q):q=e[32];let P;e[33]!==i.address||e[34]!==i.city||e[35]!==i.email||e[36]!==i.phone||e[37]!==K?(P=n.jsxs("div",{className:"inv-header-left",children:[Z,n.jsxs("div",{style:J,children:[i.address,", ",i.city,I,"Tel: ",i.phone,K,q,i.email]})]}),e[33]=i.address,e[34]=i.city,e[35]=i.email,e[36]=i.phone,e[37]=K,e[38]=P):P=e[38];let ae;e[39]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("div",{className:"inv-form-label",children:"Form No. / පෝරම අංකය"}),e[39]=ae):ae=e[39];let ee;e[40]!==s.invoiceNumber?(ee=n.jsx("div",{className:"inv-form-no",children:s.invoiceNumber}),e[40]=s.invoiceNumber,e[41]=ee):ee=e[41];let k;e[42]===Symbol.for("react.memo_cache_sentinel")?(k=n.jsxs("div",{style:{marginTop:"2mm"},children:[n.jsx("div",{className:"inv-form-label",children:"Branch / ශාඛාව"}),n.jsx("div",{className:"inv-form-no",children:"Head Office"})]}),e[42]=k):k=e[42];let d;e[43]!==ee?(d=n.jsxs("div",{className:"inv-header-right",children:[ae,ee,k]}),e[43]=ee,e[44]=d):d=e[44];let O;e[45]===Symbol.for("react.memo_cache_sentinel")?(O=n.jsx("div",{className:"inv-logo-name-row",children:n.jsx("div",{className:"inv-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"})}),e[45]=O):O=e[45];let F;e[46]!==i.name?(F=n.jsx("div",{className:"inv-company-name",children:i.name}),e[46]=i.name,e[47]=F):F=e[47],e[48]!==P||e[49]!==d||e[50]!==F?(p=n.jsxs("div",{className:"inv-header",children:[P,d,O,F]}),e[48]=P,e[49]=d,e[50]=F,e[51]=p):p=e[51],e[52]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsxs("div",{className:"inv-title-bar",children:[n.jsx("div",{className:"inv-title-en",children:"INVOICE"}),n.jsx("div",{className:"inv-title-si",children:"ඉන්වොයිස්"})]}),e[52]=v):v=e[52];let V;e[53]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Bill To & Invoice Details"}),n.jsx("span",{className:"inv-section-title-si",children:"ගනුදෙනුකරු සහ ඉන්වොයිස් විස්තර"})]}),e[53]=V):V=e[53];let Q;e[54]===Symbol.for("react.memo_cache_sentinel")?(Q=n.jsxs("span",{className:"inv-field-label",children:["Customer Name ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[54]=Q):Q=e[54];let X;e[55]!==s.customerName?(X=n.jsxs("div",{className:"inv-info-cell",children:[Q,n.jsx("span",{className:"inv-field-value",children:s.customerName})]}),e[55]=s.customerName,e[56]=X):X=e[56];let te;e[57]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsxs("span",{className:"inv-field-label",children:["Invoice Date ",n.jsx("span",{className:"inv-field-label-si",children:"/ ඉන්වොයිස් දිනය"})]}),e[57]=te):te=e[57];let U;e[58]!==s.issueDate?(U=rt(s.issueDate),e[58]=s.issueDate,e[59]=U):U=e[59];let c;e[60]!==U?(c=n.jsxs("div",{className:"inv-info-cell",children:[te,n.jsx("span",{className:"inv-field-value",children:U})]}),e[60]=U,e[61]=c):c=e[61];let oe;e[62]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsxs("span",{className:"inv-field-label",children:["Phone ",n.jsx("span",{className:"inv-field-label-si",children:"/ දුරකථනය"})]}),e[62]=oe):oe=e[62];const fe=s.customerPhone||a?.phone||"—";let de;e[63]!==fe?(de=n.jsxs("div",{className:"inv-info-cell",children:[oe,n.jsx("span",{className:"inv-field-value",children:fe})]}),e[63]=fe,e[64]=de):de=e[64];let ne;e[65]===Symbol.for("react.memo_cache_sentinel")?(ne=n.jsxs("span",{className:"inv-field-label",children:["Due Date ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවිය යුතු දිනය"})]}),e[65]=ne):ne=e[65];let se;e[66]!==s.dueDate?(se=s.dueDate?rt(s.dueDate):"—",e[66]=s.dueDate,e[67]=se):se=e[67];let pe;e[68]!==se?(pe=n.jsxs("div",{className:"inv-info-cell",children:[ne,n.jsx("span",{className:"inv-field-value",children:se})]}),e[68]=se,e[69]=pe):pe=e[69];let be;e[70]===Symbol.for("react.memo_cache_sentinel")?(be=n.jsxs("span",{className:"inv-field-label",children:["Status ",n.jsx("span",{className:"inv-field-label-si",children:"/ තත්ත්වය"})]}),e[70]=be):be=e[70];let xe;e[71]!==s.status?(xe=s.status.toUpperCase(),e[71]=s.status,e[72]=xe):xe=e[72];let le;e[73]!==xe?(le=n.jsxs("div",{className:"inv-info-cell",children:[be,n.jsx("span",{className:"inv-field-value",children:n.jsx("span",{className:"inv-status",children:xe})})]}),e[73]=xe,e[74]=le):le=e[74];let ce;e[75]===Symbol.for("react.memo_cache_sentinel")?(ce=n.jsxs("span",{className:"inv-field-label",children:["Payment Method ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ ක්‍රමය"})]}),e[75]=ce):ce=e[75];let ge;e[76]!==s.paymentMethod?(ge=s.paymentMethod?s.paymentMethod.replace("-"," ").toUpperCase():"—",e[76]=s.paymentMethod,e[77]=ge):ge=e[77];let re;e[78]!==ge?(re=n.jsxs("div",{className:"inv-info-cell",children:[ce,n.jsx("span",{className:"inv-field-value",children:ge})]}),e[78]=ge,e[79]=re):re=e[79];let L;e[80]!==a?.address||e[81]!==s.customerAddress?(L=(s.customerAddress||a?.address)&&n.jsxs("div",{className:"inv-info-cell full",children:[n.jsxs("span",{className:"inv-field-label",children:["Address ",n.jsx("span",{className:"inv-field-label-si",children:"/ ලිපිනය"})]}),n.jsx("span",{className:"inv-field-value",style:{fontSize:"9pt"},children:s.customerAddress||a?.address})]}),e[80]=a?.address,e[81]=s.customerAddress,e[82]=L):L=e[82],e[83]!==X||e[84]!==c||e[85]!==de||e[86]!==pe||e[87]!==le||e[88]!==re||e[89]!==L?(o=n.jsxs("div",{className:"inv-section",children:[V,n.jsxs("div",{className:"inv-info-grid",children:[X,c,de,pe,le,re,L]})]}),e[83]=X,e[84]=c,e[85]=de,e[86]=pe,e[87]=le,e[88]=re,e[89]=L,e[90]=o):o=e[90];let Ne;e[91]===Symbol.for("react.memo_cache_sentinel")?(Ne=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Items / භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"inv-section-title-si",children:"Jewellery Items"})]}),e[91]=Ne):Ne=e[91];let Y,he;e[92]===Symbol.for("react.memo_cache_sentinel")?(Y=n.jsx("th",{style:{width:"5%"},children:"#"}),he={width:"40%"},e[92]=Y,e[93]=he):(Y=e[92],he=e[93]);let ie,ze;e[94]===Symbol.for("react.memo_cache_sentinel")?(ie=n.jsxs("th",{style:he,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),ze={width:"10%"},e[94]=ie,e[95]=ze):(ie=e[94],ze=e[95]);let De,Ie;e[96]===Symbol.for("react.memo_cache_sentinel")?(De=n.jsxs("th",{style:ze,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),Ie={width:"13%"},e[96]=De,e[97]=Ie):(De=e[96],Ie=e[97]);let Pe,je;e[98]===Symbol.for("react.memo_cache_sentinel")?(Pe=n.jsxs("th",{style:Ie,children:["Weight",n.jsx("span",{className:"si",children:"බර"})]}),je={width:"7%"},e[98]=Pe,e[99]=je):(Pe=e[98],je=e[99]);let ye,we;e[100]===Symbol.for("react.memo_cache_sentinel")?(ye=n.jsxs("th",{style:je,children:["Qty",n.jsx("span",{className:"si",children:"ගණන"})]}),we={width:"25%"},e[100]=ye,e[101]=we):(ye=e[100],we=e[101]);let Ee;e[102]===Symbol.for("react.memo_cache_sentinel")?(Ee=n.jsx("thead",{children:n.jsxs("tr",{children:[Y,ie,De,Pe,ye,n.jsxs("th",{style:we,children:["Amount",n.jsx("span",{className:"si",children:"මුදල"})]})]})}),e[102]=Ee):Ee=e[102];let ke;e[103]!==s.items?(ke=s.items.map(Et),e[103]=s.items,e[104]=ke):ke=e[104];let _e;e[105]!==ke?(_e=n.jsx("tbody",{children:ke}),e[105]=ke,e[106]=_e):_e=e[106];let Ae;e[107]===Symbol.for("react.memo_cache_sentinel")?(Ae=n.jsx("td",{colSpan:5,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total / මුළු එකතුව"}),e[107]=Ae):Ae=e[107];let Se;e[108]!==s.items?(Se=Te(s.items.reduce(Rt,0)),e[108]=s.items,e[109]=Se):Se=e[109];let ve;e[110]!==Se?(ve=n.jsx("tfoot",{children:n.jsxs("tr",{children:[Ae,n.jsx("td",{className:"right",children:Se})]})}),e[110]=Se,e[111]=ve):ve=e[111],e[112]!==_e||e[113]!==ve?(H=n.jsxs("div",{className:"inv-section",children:[Ne,n.jsxs("table",{className:"inv-table",children:[Ee,_e,ve]})]}),e[112]=_e,e[113]=ve,e[114]=H):H=e[114],B="inv-section",e[115]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Payment Summary / ගෙවීම් සාරාංශය"}),n.jsx("span",{className:"inv-section-title-si",children:"Financial Details"})]}),e[115]=y):y=e[115],me=C>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Item Discounts ",n.jsx("span",{className:"si",children:"භාණ්ඩ වට්ටම්"})]}),n.jsxs("span",{className:"inv-totals-value",children:["− ",Te(C)]})]}),e[0]=i.address,e[1]=i.city,e[2]=i.email,e[3]=i.name,e[4]=i.phone,e[5]=i.phone2,e[6]=a?.address,e[7]=a?.phone,e[8]=s.customerAddress,e[9]=s.customerName,e[10]=s.customerPhone,e[11]=s.dueDate,e[12]=s.invoiceNumber,e[13]=s.issueDate,e[14]=s.items,e[15]=s.paymentMethod,e[16]=s.status,e[17]=t,e[18]=o,e[19]=H,e[20]=B,e[21]=y,e[22]=me,e[23]=A,e[24]=j,e[25]=W,e[26]=p,e[27]=v}else o=e[18],H=e[19],B=e[20],y=e[21],me=e[22],A=e[23],j=e[24],W=e[25],p=e[26],v=e[27];let u;e[116]!==s.discount||e[117]!==s.discountType?(u=s.discount>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Discount ",n.jsx("span",{className:"si",children:"වට්ටම"}),s.discountType==="percentage"&&` (${s.discount}%)`]}),n.jsxs("span",{className:"inv-totals-value",children:["− ",Te(s.discount)]})]}),e[116]=s.discount,e[117]=s.discountType,e[118]=u):u=e[118];let r;e[119]!==s.tax||e[120]!==s.taxRate?(r=s.tax>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Tax ",n.jsx("span",{className:"si",children:"බදු"}),s.taxRate&&` (${s.taxRate}%)`]}),n.jsx("span",{className:"inv-totals-value",children:Te(s.tax)})]}),e[119]=s.tax,e[120]=s.taxRate,e[121]=r):r=e[121];let f;e[122]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsxs("span",{className:"inv-totals-label",children:["Total Amount ",n.jsx("span",{className:"si",children:"මුළු මුදල"})]}),e[122]=f):f=e[122];let w;e[123]===Symbol.for("react.memo_cache_sentinel")?(w={fontSize:"13pt"},e[123]=w):w=e[123];let _;e[124]!==s.total?(_=Te(s.total),e[124]=s.total,e[125]=_):_=e[125];let S;e[126]!==_?(S=n.jsxs("div",{className:"inv-totals-row highlight",children:[f,n.jsx("span",{className:"inv-totals-value",style:w,children:_})]}),e[126]=_,e[127]=S):S=e[127];let x;e[128]!==s.amountPaid?(x=s.amountPaid>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Amount Paid ",n.jsx("span",{className:"si",children:"ගෙවූ මුදල"})]}),n.jsx("span",{className:"inv-totals-value",children:Te(s.amountPaid)})]}),e[128]=s.amountPaid,e[129]=x):x=e[129];let b;e[130]!==s.balanceDue?(b=s.balanceDue>0&&n.jsxs("div",{className:"inv-totals-row balance",children:[n.jsxs("span",{className:"inv-totals-label",children:["Balance Due ",n.jsx("span",{className:"si",children:"ශේෂ මුදල"})]}),n.jsx("span",{className:"inv-totals-value",children:Te(s.balanceDue)})]}),e[130]=s.balanceDue,e[131]=b):b=e[131];let m;e[132]!==u||e[133]!==r||e[134]!==S||e[135]!==x||e[136]!==b||e[137]!==B||e[138]!==y||e[139]!==me?(m=n.jsxs("div",{className:B,children:[y,me,u,r,S,x,b]}),e[132]=u,e[133]=r,e[134]=S,e[135]=x,e[136]=b,e[137]=B,e[138]=y,e[139]=me,e[140]=m):m=e[140];let h;e[141]!==s.notes?(h=s.notes&&n.jsxs("div",{className:"inv-box",children:[n.jsx("div",{className:"inv-box-cap",children:"Notes / සටහන"}),n.jsx("p",{children:s.notes})]}),e[141]=s.notes,e[142]=h):h=e[142];let E;e[143]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsx("div",{className:"inv-box-cap",children:"Terms & Conditions / නියමයන් සහ කොන්දේසි"}),e[143]=E):E=e[143];let g;e[144]!==i.invoiceTerms?(g=i?.invoiceTerms?i.invoiceTerms.split(`
`).filter(Mt).map(Ct):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"All jewellery items are hallmarked and certified for purity."}),n.jsx("li",{children:"Exchange within 7 days with original receipt. No refunds on custom-made items."}),n.jsx("li",{children:"Warranty does not cover damage caused by misuse, negligence or normal wear."})]}),e[144]=i.invoiceTerms,e[145]=g):g=e[145];let N;e[146]!==g?(N=n.jsxs("div",{className:"inv-box",children:[E,n.jsx("ul",{className:"inv-terms-list",children:g})]}),e[146]=g,e[147]=N):N=e[147];let G;e[148]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsx("div",{className:"inv-sig-space"}),e[148]=G):G=e[148];let T;e[149]===Symbol.for("react.memo_cache_sentinel")?(T=n.jsxs("div",{className:"inv-sig-box",children:[G,n.jsxs("div",{className:"inv-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[149]=T):T=e[149];let R;e[150]===Symbol.for("react.memo_cache_sentinel")?(R=n.jsx("div",{className:"inv-sig-space"}),e[150]=R):R=e[150];let $;e[151]===Symbol.for("react.memo_cache_sentinel")?($=n.jsxs("div",{className:"inv-sig-row",children:[T,n.jsxs("div",{className:"inv-sig-box",children:[R,n.jsxs("div",{className:"inv-sig-label",children:["Authorized / ",n.jsx("span",{className:"si",children:"අනුමත නිලධාරී"})]})]})]}),e[151]=$):$=e[151];let z;e[152]===Symbol.for("react.memo_cache_sentinel")?(z=new Date().toLocaleString("en-GB"),e[152]=z):z=e[152];let D;e[153]!==s.invoiceNumber?(D=n.jsxs("div",{className:"inv-footer",children:["Printed: ",z,"  |  ",s.invoiceNumber,"  |  This is a computer-generated document."]}),e[153]=s.invoiceNumber,e[154]=D):D=e[154];let M;return e[155]!==o||e[156]!==H||e[157]!==m||e[158]!==h||e[159]!==N||e[160]!==D||e[161]!==A||e[162]!==j||e[163]!==W||e[164]!==p||e[165]!==v?(M=n.jsxs("div",{ref:A,className:j,children:[W,p,v,o,H,m,h,N,$,D]}),e[155]=o,e[156]=H,e[157]=m,e[158]=h,e[159]=N,e[160]=D,e[161]=A,e[162]=j,e[163]=W,e[164]=p,e[165]=v,e[166]=M):M=e[166],M});Pt.displayName="PrintableInvoice";function kt(l,t){const s=((t.originalPrice||t.unitPrice)-t.unitPrice)*t.quantity;return l+(s>0?s:0)}function At(l){l.target.style.display="none"}function Et(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",style:{color:"#888"},children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("strong",{children:l.productName}),n.jsxs("div",{className:"inv-item-sub",children:[l.metalType.toUpperCase(),l.karat&&` · ${l.karat}`,l.sku&&` · SKU: ${l.sku}`]})]}),n.jsx("td",{className:"center",children:l.karat||"—"}),n.jsx("td",{className:"center",children:Ze(l.metalWeight)}),n.jsx("td",{className:"center",children:l.quantity}),n.jsx("td",{className:"right",style:{fontWeight:600},children:Te(l.total)})]},l.id)}function Rt(l,t){return l+t.total}function Mt(l){return l.trim()}function Ct(l,t){return n.jsx("li",{children:l},t)}const Ot={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},Bt=St.forwardRef((l,t)=>{const e=mt.c(158),{clearance:s,customer:a,company:ue,pawningTerms:i}=l,o=ue===void 0?Ot:ue;let H;e[0]!==i?(H=i===void 0?[]:i,e[0]=i,e[1]=H):H=e[1];const B=H,y=s.monthlyInterestRate?s.total*Number(s.monthlyInterestRate)/100:null;let me;e[2]!==s.status?(me=s.status==="pending"?"ACTIVE":s.status==="paid"?"REDEEMED":s.status.toUpperCase(),e[2]=s.status,e[3]=me):me=e[3];const A=me;let j;e[4]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 10mm 12mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .pct-root { 
               width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important; 
              margin: 0 !important;
              box-shadow: none !important;
              font-size: 8.5pt !important;
            }
            .no-print { display: none !important; }
          }

          .pct-root {
            width: 186mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 8mm 10mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9pt;
            color: #111;
            line-height: 1.4;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            box-sizing: border-box;
          }

          /* ── HEADER ── */
          .pct-header {
            position: relative;
            text-align: center;
            border: 1.5pt solid #111;
            padding: 3mm 42mm 3mm 42mm;
            min-height: 28mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .pct-header-left {
            position: absolute;
            left: 3mm;
            top: 50%;
            transform: translateY(-50%);
            text-align: left;
          }
          .pct-header-right { position: absolute; right: 3mm; top: 3mm; text-align: right; font-size: 7.5pt; color: #333; }
          .pct-logo-name-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-bottom: 2mm;
          }
          .pct-company-sinhala-large {
            font-size: 26pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0;
            font-family: 'Noto Sans Sinhala', sans-serif;
            padding-bottom: 2mm;
          }
          .pct-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .pct-company-contact { font-size: 7.5pt; color: #555; line-height: 1.7; }
          .pct-form-label { font-size: 8pt; color: #666; }
          .pct-form-no { font-size: 8.5pt; font-weight: 700; }

          /* ── TITLE BAR ── */
          .pct-title-bar {
            border-left: 1.5pt solid #111; border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex; align-items: stretch;
          }
          .pct-title-en {
            flex: 1; text-align: center; font-size: 13pt; font-weight: 800;
            letter-spacing: 3px; text-transform: uppercase; padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .pct-title-si {
            flex: 1; text-align: center; font-size: 12pt; font-weight: 700;
            padding: 2mm 0; color: #111;
          }

          /* ── SECTION ── */
          .pct-section { border-left: 1.5pt solid #111; border-right: 1.5pt solid #111; border-bottom: 1pt solid #111; }
          .pct-section-header {
            background: #f0f0f0; border-bottom: 1pt solid #111;
            padding: 1mm 3mm; display: flex; justify-content: space-between; align-items: center;
          }
          .pct-section-title-en { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .pct-section-title-si { font-size: 8.5pt; font-weight: 600; color: #333; }

          /* ── INFO GRID ── */
          .pct-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .pct-info-cell {
            padding: 1mm 2.5mm; border-right: 0.5pt solid #bbb; border-bottom: 0.5pt solid #ddd;
          }
          .pct-info-cell:nth-child(even) { border-right: none; }
          .pct-info-cell.full { grid-column: 1 / -1; border-right: none; }
          .pct-field-label { font-size: 7pt; color: #666; display: block; margin-bottom: 0.2mm; }
          .pct-field-label-si { font-size: 7pt; color: #888; }
          .pct-field-value { font-size: 9.5pt; font-weight: 600; color: #000; display: block; }

          /* ── STATUS BADGE ── */
          .pct-status {
            display: inline-block; padding: 1mm 3mm; border: 1pt solid #333;
            font-size: 8pt; font-weight: 700; letter-spacing: 0.5px;
          }
          .pct-status-active { border-color: #111; color: #111; }
          .pct-status-redeemed { border-color: #555; color: #555; }

          /* ── TABLE ── */
          .pct-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
          .pct-table th {
            padding: 1.5mm 2mm; background: #f0f0f0; border: 0.5pt solid #999;
            font-size: 7.5pt; font-weight: 700; text-align: center; text-transform: uppercase;
          }
          .pct-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .pct-table td { padding: 2mm; border: 0.5pt solid #bbb; vertical-align: middle; }
          .pct-table td.center { text-align: center; }
          .pct-table td.right { text-align: right; }
          .pct-table .item-sub { font-size: 7.5pt; color: #555; }
          .pct-table tfoot td {
            background: #f5f5f5; font-weight: 700; border: 0.5pt solid #999;
          }

          /* ── FINANCE ROWS ── */
          .pct-finance-row {
            display: flex; justify-content: space-between;
            padding: 1mm 3mm; border-bottom: 0.5pt solid #ddd; font-size: 8.5pt;
          }
          .pct-finance-row:last-child { border-bottom: none; }
          .pct-finance-row.highlight {
            font-size: 10pt; font-weight: 700; background: #f9f9f9;
            border-top: 1pt solid #555; border-bottom: none;
          }
          .pct-finance-label { color: #444; }
          .pct-finance-label .si { font-size: 7.5pt; color: #888; display: block; }
          .pct-finance-value { font-weight: 600; }

          /* ── TERMS ── */
          .pct-terms { border: 1.5pt solid #111; margin-top: 2mm; padding: 1.5mm 3mm; }
          .pct-terms-header {
            text-align: center; font-size: 8.5pt; font-weight: 700; text-transform: uppercase;
            letter-spacing: 1px; border-bottom: 0.75pt solid #555;
            padding-bottom: 1mm; margin-bottom: 1.5mm;
          }
          .pct-terms-list {
            margin: 0; padding-left: 4mm; font-size: 7pt; color: #333; line-height: 1.5;
            list-style-type: disc;
          }
          .pct-terms-list li { margin-bottom: 1mm; }
          .pct-terms-list li .en { display: block; font-size: 7pt; color: #111; font-weight: 500; }
          .pct-terms-list li .si { display: block; font-size: 6.5pt; color: #444; }
          .pct-terms-list li .ta { display: block; font-size: 6.5pt; color: #555; font-style: italic; }

          /* ── SIGNATURES ── */
          .pct-sig-row { display: flex; justify-content: space-between; margin-top: 4mm; gap: 4mm; }
          .pct-sig-box { flex: 1; border: 0.75pt solid #555; padding: 1.5mm 2mm; text-align: center; }
          .pct-sig-space { height: 10mm; }
          .pct-sig-label { border-top: 0.75pt solid #333; padding-top: 1mm; font-size: 8pt; font-weight: 700; }
          .pct-sig-label .si { font-size: 7.5pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .pct-customer-copy {
            margin-top: 2mm; border: 1.5pt solid #111; text-align: center;
            padding: 1mm; font-size: 8pt; font-weight: 700; letter-spacing: 0.5px;
          }
          .pct-footer {
            margin-top: 1.5mm; text-align: center; font-size: 7pt; color: #888;
            border-top: 0.5pt solid #ccc; padding-top: 1mm;
          }
        `}),e[4]=j):j=e[4];let W,p;e[5]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"50px",height:"50px",objectFit:"contain",borderRadius:"4px",display:"block",marginBottom:"1.5mm"},onError:Wt}),p={fontSize:"7pt",color:"#555",lineHeight:1.7},e[5]=W,e[6]=p):(W=e[5],p=e[6]);let v;e[7]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsx("br",{}),e[7]=v):v=e[7];const u=o.phone2?` / ${o.phone2}`:"";let r;e[8]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("br",{}),e[8]=r):r=e[8];let f;e[9]!==o.address||e[10]!==o.city||e[11]!==o.email||e[12]!==o.phone||e[13]!==u?(f=n.jsxs("div",{className:"pct-header-left",children:[W,n.jsxs("div",{style:p,children:[o.address,", ",o.city,v,"Tel: ",o.phone,u,r,o.email]})]}),e[9]=o.address,e[10]=o.city,e[11]=o.email,e[12]=o.phone,e[13]=u,e[14]=f):f=e[14];let w;e[15]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx("div",{className:"pct-form-label",children:"Form No. / පෝරම අංකය"}),e[15]=w):w=e[15];let _;e[16]!==s.clearanceNumber?(_=n.jsx("div",{className:"pct-form-no",children:s.clearanceNumber}),e[16]=s.clearanceNumber,e[17]=_):_=e[17];let S;e[18]===Symbol.for("react.memo_cache_sentinel")?(S=n.jsxs("div",{style:{marginTop:"2mm"},children:[n.jsx("div",{className:"pct-form-label",children:"Branch / ශාඛාව"}),n.jsx("div",{className:"pct-form-no",children:"Head Office"})]}),e[18]=S):S=e[18];let x;e[19]!==_?(x=n.jsxs("div",{className:"pct-header-right",children:[w,_,S]}),e[19]=_,e[20]=x):x=e[20];let b;e[21]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx("div",{className:"pct-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),e[21]=b):b=e[21];let m;e[22]!==o.name?(m=n.jsx("div",{className:"pct-company-name",children:o.name}),e[22]=o.name,e[23]=m):m=e[23];let h;e[24]!==f||e[25]!==x||e[26]!==m?(h=n.jsxs("div",{className:"pct-header",children:[f,x,b,m]}),e[24]=f,e[25]=x,e[26]=m,e[27]=h):h=e[27];let E;e[28]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsxs("div",{className:"pct-title-bar",children:[n.jsx("div",{className:"pct-title-en",children:"PAWN TICKET"}),n.jsx("div",{className:"pct-title-si",children:"උකස් පත"})]}),e[28]=E):E=e[28];let g;e[29]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Ticket & Customer Information"}),n.jsx("span",{className:"pct-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[29]=g):g=e[29];let N;e[30]===Symbol.for("react.memo_cache_sentinel")?(N=n.jsxs("span",{className:"pct-field-label",children:["Ticket No. ",n.jsx("span",{className:"pct-field-label-si",children:"/ අංකය"})]}),e[30]=N):N=e[30];let G;e[31]===Symbol.for("react.memo_cache_sentinel")?(G={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[31]=G):G=e[31];let T;e[32]!==s.clearanceNumber?(T=n.jsxs("div",{className:"pct-info-cell",children:[N,n.jsx("span",{className:"pct-field-value",style:G,children:s.clearanceNumber})]}),e[32]=s.clearanceNumber,e[33]=T):T=e[33];let R;e[34]===Symbol.for("react.memo_cache_sentinel")?(R=n.jsxs("span",{className:"pct-field-label",children:["Pawn Date ",n.jsx("span",{className:"pct-field-label-si",children:"/ උකස් දිනය"})]}),e[34]=R):R=e[34];const $=s.pawnDate||s.issueDate;let z;e[35]!==$?(z=rt($),e[35]=$,e[36]=z):z=e[36];let D;e[37]!==z?(D=n.jsxs("div",{className:"pct-info-cell",children:[R,n.jsx("span",{className:"pct-field-value",children:z})]}),e[37]=z,e[38]=D):D=e[38];let M;e[39]===Symbol.for("react.memo_cache_sentinel")?(M=n.jsxs("span",{className:"pct-field-label",children:["Customer Name ",n.jsx("span",{className:"pct-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[39]=M):M=e[39];let C;e[40]!==s.customerName?(C=n.jsxs("div",{className:"pct-info-cell",children:[M,n.jsx("span",{className:"pct-field-value",children:s.customerName})]}),e[40]=s.customerName,e[41]=C):C=e[41];let Z;e[42]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsxs("span",{className:"pct-field-label",children:["NIC No. ",n.jsx("span",{className:"pct-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[42]=Z):Z=e[42];const J=s.customerNic||"—";let I;e[43]!==J?(I=n.jsxs("div",{className:"pct-info-cell",children:[Z,n.jsx("span",{className:"pct-field-value",children:J})]}),e[43]=J,e[44]=I):I=e[44];let K;e[45]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsxs("span",{className:"pct-field-label",children:["Phone ",n.jsx("span",{className:"pct-field-label-si",children:"/ දුරකථනය"})]}),e[45]=K):K=e[45];const q=s.customerPhone||a?.phone||"—";let P;e[46]!==q?(P=n.jsxs("div",{className:"pct-info-cell",children:[K,n.jsx("span",{className:"pct-field-value",children:q})]}),e[46]=q,e[47]=P):P=e[47];let ae;e[48]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsxs("span",{className:"pct-field-label",children:["Status ",n.jsx("span",{className:"pct-field-label-si",children:"/ තත්ත්වය"})]}),e[48]=ae):ae=e[48];const ee=`pct-status pct-status-${s.status==="pending"?"active":"redeemed"}`;let k;e[49]!==A||e[50]!==ee?(k=n.jsxs("div",{className:"pct-info-cell",children:[ae,n.jsx("span",{className:"pct-field-value",children:n.jsx("span",{className:ee,children:A})})]}),e[49]=A,e[50]=ee,e[51]=k):k=e[51];let d;e[52]!==s.customerAddress||e[53]!==a?.address?(d=(s.customerAddress||a?.address)&&n.jsxs("div",{className:"pct-info-cell full",children:[n.jsxs("span",{className:"pct-field-label",children:["Address ",n.jsx("span",{className:"pct-field-label-si",children:"/ ලිපිනය"})]}),n.jsx("span",{className:"pct-field-value",style:{fontSize:"9pt"},children:s.customerAddress||a?.address})]}),e[52]=s.customerAddress,e[53]=a?.address,e[54]=d):d=e[54];let O;e[55]!==T||e[56]!==D||e[57]!==C||e[58]!==I||e[59]!==P||e[60]!==k||e[61]!==d?(O=n.jsxs("div",{className:"pct-section",children:[g,n.jsxs("div",{className:"pct-info-grid",children:[T,D,C,I,P,k,d]})]}),e[55]=T,e[56]=D,e[57]=C,e[58]=I,e[59]=P,e[60]=k,e[61]=d,e[62]=O):O=e[62];let F;e[63]===Symbol.for("react.memo_cache_sentinel")?(F={borderTop:"none"},e[63]=F):F=e[63];let V;e[64]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Pawned Items / රන් භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"pct-section-title-si",children:"Gold Articles"})]}),e[64]=V):V=e[64];let Q,X;e[65]===Symbol.for("react.memo_cache_sentinel")?(Q=n.jsx("th",{style:{width:"5%"},children:"#"}),X={width:"30%"},e[65]=Q,e[66]=X):(Q=e[65],X=e[66]);let te,U;e[67]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsxs("th",{style:X,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),U={width:"10%"},e[67]=te,e[68]=U):(te=e[67],U=e[68]);let c,oe;e[69]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsxs("th",{style:U,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),oe={width:"12%"},e[69]=c,e[70]=oe):(c=e[69],oe=e[70]);let fe,de;e[71]===Symbol.for("react.memo_cache_sentinel")?(fe=n.jsxs("th",{style:oe,children:["Weight",n.jsx("span",{className:"si",children:"බර"})]}),de={width:"6%"},e[71]=fe,e[72]=de):(fe=e[71],de=e[72]);let ne,se;e[73]===Symbol.for("react.memo_cache_sentinel")?(ne=n.jsxs("th",{style:de,children:["Qty",n.jsx("span",{className:"si",children:"ගණන"})]}),se={width:"18%"},e[73]=ne,e[74]=se):(ne=e[73],se=e[74]);let pe,be;e[75]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsxs("th",{style:se,children:["Item Price",n.jsx("span",{className:"si",children:"භාණ්ඩ මිල"})]}),be={width:"19%"},e[75]=pe,e[76]=be):(pe=e[75],be=e[76]);let xe;e[77]===Symbol.for("react.memo_cache_sentinel")?(xe=n.jsx("thead",{children:n.jsxs("tr",{children:[Q,te,c,fe,ne,pe,n.jsxs("th",{style:be,children:["Assessed Value",n.jsx("span",{className:"si",children:"ඇස්තමේන්තු"})]})]})}),e[77]=xe):xe=e[77];let le;e[78]!==s.items?(le=s.items.map($t),e[78]=s.items,e[79]=le):le=e[79];let ce;e[80]!==le?(ce=n.jsx("tbody",{children:le}),e[80]=le,e[81]=ce):ce=e[81];let ge;e[82]===Symbol.for("react.memo_cache_sentinel")?(ge=n.jsx("td",{colSpan:5,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total Item Value / මුළු භාණ්ඩ වටිනාකම"}),e[82]=ge):ge=e[82];let re;e[83]!==s.items?(re=Te(s.items.reduce(Ft,0)),e[83]=s.items,e[84]=re):re=e[84];let L;e[85]!==re?(L=n.jsx("td",{className:"right",children:re}),e[85]=re,e[86]=L):L=e[86];let Ne;e[87]===Symbol.for("react.memo_cache_sentinel")?(Ne={fontWeight:700},e[87]=Ne):Ne=e[87];let Y;e[88]!==s.items?(Y=Te(s.items.reduce(Lt,0)),e[88]=s.items,e[89]=Y):Y=e[89];let he;e[90]!==Y?(he=n.jsx("td",{className:"right",style:Ne,children:Y}),e[90]=Y,e[91]=he):he=e[91];let ie;e[92]!==L||e[93]!==he?(ie=n.jsx("tfoot",{children:n.jsxs("tr",{children:[ge,L,he]})}),e[92]=L,e[93]=he,e[94]=ie):ie=e[94];let ze;e[95]!==ce||e[96]!==ie?(ze=n.jsxs("div",{className:"pct-section",style:F,children:[V,n.jsxs("table",{className:"pct-table",children:[xe,ce,ie]})]}),e[95]=ce,e[96]=ie,e[97]=ze):ze=e[97];let De;e[98]===Symbol.for("react.memo_cache_sentinel")?(De={borderTop:"none"},e[98]=De):De=e[98];let Ie;e[99]===Symbol.for("react.memo_cache_sentinel")?(Ie=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Loan & Interest Details / ණය සහ පොලී විස්තර"}),n.jsx("span",{className:"pct-section-title-si",children:"Finance Information"})]}),e[99]=Ie):Ie=e[99];let Pe;e[100]===Symbol.for("react.memo_cache_sentinel")?(Pe=n.jsxs("span",{className:"pct-finance-label",children:["Assessed Value / Total ",n.jsx("span",{className:"si",children:"ඇස්තමේන්තු වටිනාකම"})]}),e[100]=Pe):Pe=e[100];let je;e[101]!==s.items?(je=Te(s.items.reduce(Gt,0)),e[101]=s.items,e[102]=je):je=e[102];let ye;e[103]!==je?(ye=n.jsxs("div",{className:"pct-finance-row",children:[Pe,n.jsx("span",{className:"pct-finance-value",children:je})]}),e[103]=je,e[104]=ye):ye=e[104];let we;e[105]!==s.discount?(we=s.discount>0&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Discount ",n.jsx("span",{className:"si",children:"වට්ටම"})]}),n.jsxs("span",{className:"pct-finance-value",children:["- ",Te(s.discount)]})]}),e[105]=s.discount,e[106]=we):we=e[106];let Ee;e[107]===Symbol.for("react.memo_cache_sentinel")?(Ee=n.jsxs("span",{className:"pct-finance-label",children:["Advance / Loan Amount ",n.jsx("span",{className:"si",children:"අත්තිකාරම් / ණය මුදල"})]}),e[107]=Ee):Ee=e[107];let ke;e[108]===Symbol.for("react.memo_cache_sentinel")?(ke={fontSize:"13pt"},e[108]=ke):ke=e[108];let _e;e[109]!==s.total?(_e=Te(s.total),e[109]=s.total,e[110]=_e):_e=e[110];let Ae;e[111]!==_e?(Ae=n.jsxs("div",{className:"pct-finance-row highlight",children:[Ee,n.jsx("span",{className:"pct-finance-value",style:ke,children:_e})]}),e[111]=_e,e[112]=Ae):Ae=e[112];let Se;e[113]!==s.monthlyInterestRate?(Se=s.monthlyInterestRate!=null&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Rate ",n.jsx("span",{className:"si",children:"මාසික පොලී අනුපාතය"})]}),n.jsxs("span",{className:"pct-finance-value",children:[s.monthlyInterestRate,"%"]})]}),e[113]=s.monthlyInterestRate,e[114]=Se):Se=e[114];let ve;e[115]!==y?(ve=y!=null&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Amount ",n.jsx("span",{className:"si",children:"මාසික පොලී මුදල"})]}),n.jsx("span",{className:"pct-finance-value",children:Te(y)})]}),e[115]=y,e[116]=ve):ve=e[116];let Re;e[117]!==s.total||e[118]!==y?(Re=y!=null&&n.jsxs("div",{className:"pct-finance-row highlight",children:[n.jsxs("span",{className:"pct-finance-label",children:["Redemption After 1 Month (Principal + Interest)",n.jsx("span",{className:"si",children:"මාසයකට පසු ආපසු ගෙවිය යුතු මුදල (ණය + පොලිය)"})]}),n.jsx("span",{className:"pct-finance-value",style:{fontSize:"13pt"},children:Te(s.total+y)})]}),e[117]=s.total,e[118]=y,e[119]=Re):Re=e[119];let Oe;e[120]!==s.dueDate?(Oe=s.dueDate&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Redemption Due Date ",n.jsx("span",{className:"si",children:"ආපසු ගැනීමේ දිනය"})]}),n.jsx("span",{className:"pct-finance-value",children:rt(s.dueDate)})]}),e[120]=s.dueDate,e[121]=Oe):Oe=e[121];let Be;e[122]!==s.paymentMethod?(Be=s.paymentMethod&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Payment Method ",n.jsx("span",{className:"si",children:"ගෙවීමේ ක්‍රමය"})]}),n.jsx("span",{className:"pct-finance-value",children:s.paymentMethod.replace("-"," ").toUpperCase()})]}),e[122]=s.paymentMethod,e[123]=Be):Be=e[123];let We;e[124]!==ye||e[125]!==we||e[126]!==Ae||e[127]!==Se||e[128]!==ve||e[129]!==Re||e[130]!==Oe||e[131]!==Be?(We=n.jsxs("div",{className:"pct-section",style:De,children:[Ie,ye,we,Ae,Se,ve,Re,Oe,Be]}),e[124]=ye,e[125]=we,e[126]=Ae,e[127]=Se,e[128]=ve,e[129]=Re,e[130]=Oe,e[131]=Be,e[132]=We):We=e[132];let qe;e[133]===Symbol.for("react.memo_cache_sentinel")?(qe=n.jsxs("div",{className:"pct-terms-header",children:["Terms & Conditions / ",n.jsx("span",{style:{fontWeight:600,fontSize:"9pt"},children:"නියමයන් සහ කොන්දේසි"})]}),e[133]=qe):qe=e[133];let $e;e[134]!==o.clearanceTerms||e[135]!==o.pawnTerms||e[136]!==B?($e=B.length>0?B.map(Vt):o?.pawnTerms||o?.clearanceTerms?(o.pawnTerms||o.clearanceTerms).split(`
`).filter(Ut).map(Kt):n.jsxs(n.Fragment,{children:[n.jsxs("li",{children:["Interest is charged at the agreed monthly rate from the pawn date, even for one day.",n.jsx("span",{className:"si",children:" / උකස් දිනයේ සිට එකඟ වූ මාසික අනුපාතයෙන් පොලිය අය කෙරේ."})]}),n.jsxs("li",{children:["Items must be redeemed within the agreed period with original ticket and valid ID.",n.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),n.jsxs("li",{children:["Unclaimed items after the redemption deadline may be forfeited without further notice.",n.jsx("span",{className:"si",children:" / නියමිත කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),n.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",n.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[134]=o.clearanceTerms,e[135]=o.pawnTerms,e[136]=B,e[137]=$e):$e=e[137];let Fe;e[138]!==$e?(Fe=n.jsxs("div",{className:"pct-terms",children:[qe,n.jsx("ul",{className:"pct-terms-list",children:$e})]}),e[138]=$e,e[139]=Fe):Fe=e[139];let Le;e[140]===Symbol.for("react.memo_cache_sentinel")?(Le=n.jsx("div",{className:"pct-sig-space"}),e[140]=Le):Le=e[140];let Qe;e[141]===Symbol.for("react.memo_cache_sentinel")?(Qe=n.jsxs("div",{className:"pct-sig-box",children:[Le,n.jsxs("div",{className:"pct-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[141]=Qe):Qe=e[141];let Xe;e[142]===Symbol.for("react.memo_cache_sentinel")?(Xe=n.jsx("div",{className:"pct-sig-space"}),e[142]=Xe):Xe=e[142];let Ge;e[143]===Symbol.for("react.memo_cache_sentinel")?(Ge=n.jsxs("div",{className:"pct-sig-box",children:[Xe,n.jsxs("div",{className:"pct-sig-label",children:["Valuer / ",n.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[143]=Ge):Ge=e[143];let Ve;e[144]===Symbol.for("react.memo_cache_sentinel")?(Ve=n.jsx("div",{className:"pct-sig-space"}),e[144]=Ve):Ve=e[144];let Ue,Ke;e[145]===Symbol.for("react.memo_cache_sentinel")?(Ue=n.jsxs("div",{className:"pct-sig-row",children:[Qe,Ge,n.jsxs("div",{className:"pct-sig-box",children:[Ve,n.jsxs("div",{className:"pct-sig-label",children:["Manager / ",n.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),Ke=n.jsx("div",{className:"pct-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[145]=Ue,e[146]=Ke):(Ue=e[145],Ke=e[146]);let Ye;e[147]===Symbol.for("react.memo_cache_sentinel")?(Ye=new Date().toLocaleString("en-GB"),e[147]=Ye):Ye=e[147];let Me;e[148]!==s.clearanceNumber?(Me=n.jsxs("div",{className:"pct-footer",children:["Printed: ",Ye,"  |  ",s.clearanceNumber,"  |  This is a computer-generated document."]}),e[148]=s.clearanceNumber,e[149]=Me):Me=e[149];let He;return e[150]!==t||e[151]!==h||e[152]!==O||e[153]!==ze||e[154]!==We||e[155]!==Fe||e[156]!==Me?(He=n.jsxs("div",{ref:t,className:"pct-root",children:[j,h,E,O,ze,We,Fe,Ue,Ke,Me]}),e[150]=t,e[151]=h,e[152]=O,e[153]=ze,e[154]=We,e[155]=Fe,e[156]=Me,e[157]=He):He=e[157],He});Bt.displayName="PrintableClearance";function Wt(l){l.target.style.display="none"}function $t(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("strong",{children:l.productName}),n.jsxs("div",{className:"item-sub",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),n.jsx("td",{className:"center",children:l.karat||"—"}),n.jsx("td",{className:"center",children:Ze(l.metalWeight)}),n.jsx("td",{className:"center",children:l.quantity}),n.jsx("td",{className:"right",children:l.unitPrice>0?Te(l.unitPrice):"—"}),n.jsx("td",{className:"right",style:{fontWeight:700},children:l.assessedValue?Te(Number(l.assessedValue)):"—"})]},l.id)}function Ft(l,t){return l+(t.unitPrice||0)}function Lt(l,t){return l+(Number(t.assessedValue)||0)}function Gt(l,t){return l+(Number(t.assessedValue)||0)}function Vt(l){return n.jsxs("li",{children:[n.jsx("span",{className:"en",children:l.en}),l.si&&n.jsxs("span",{className:"si",children:[" ",l.si]}),l.ta&&n.jsxs("span",{className:"ta",children:[" ",l.ta]})]},l.groupId)}function Ut(l){return l.trim()}function Kt(l,t){const e=l.split(" / ");return n.jsxs("li",{children:[e[0]?.trim(),e[1]&&n.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}function fn(l){const t=mt.c(75),{data:e,company:s}=l;let a;t[0]!==e.redemptionDate?(a=e?.redemptionDate||new Date().toISOString().split("T")[0],t[0]=e.redemptionDate,t[1]=a):a=t[1];const ue=a,i=e?.interest,o=i?i.totalPayable:Number(e?.total||0),H=Ht,B=Yt;let y;t[2]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("style",{children:`
        .pos-receipt {
          width: 80mm;
          max-width: 80mm;
          margin: 20px auto;
          padding: 8mm 5mm;
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          line-height: 1.4;
          color: #000;
          background: #fff;
        }
        .pos-receipt * {
          box-sizing: border-box;
        }
        .pos-header {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 8px;
          margin-bottom: 8px;
        }
        .pos-header h1 {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pos-header p {
          margin: 1px 0;
          font-size: 10px;
        }
        .pos-title {
          text-align: center;
          font-size: 13px;
          font-weight: bold;
          margin: 8px 0;
          padding: 4px 0;
          border-top: 1px dashed #000;
          border-bottom: 1px dashed #000;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .pos-row {
          display: flex;
          justify-content: space-between;
          padding: 1px 0;
        }
        .pos-row .label {
          color: #333;
        }
        .pos-row .value {
          font-weight: bold;
          text-align: right;
        }
        .pos-divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        .pos-item {
          padding: 3px 0;
        }
        .pos-item .item-name {
          font-weight: bold;
        }
        .pos-item .item-detail {
          font-size: 10px;
          color: #555;
          padding-left: 8px;
        }
        .pos-total {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          padding: 8px 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          margin: 6px 0;
        }
        .pos-footer {
          text-align: center;
          font-size: 10px;
          margin-top: 12px;
          padding-top: 8px;
          border-top: 1px dashed #000;
        }
        .pos-footer p {
          margin: 2px 0;
        }
        .pos-timestamp {
          text-align: center;
          font-size: 9px;
          color: #666;
          margin-top: 4px;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .pos-receipt { margin: 0; padding: 3mm; }
          @page { size: 80mm auto; margin: 0; }
        }
        @media screen {
          .pos-receipt {
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
            border-radius: 4px;
          }
        }
      `}),t[2]=y):y=t[2];const me=s?.name||"Onelka Jewellery";let A;t[3]!==me?(A=n.jsx("h1",{children:me}),t[3]=me,t[4]=A):A=t[4];let j;t[5]!==s?(j=s?.tagline&&n.jsx("p",{children:s.tagline}),t[5]=s,t[6]=j):j=t[6];const W=s?.address||"";let p;t[7]!==W?(p=n.jsx("p",{children:W}),t[7]=W,t[8]=p):p=t[8];const v=s?.phone||"";let u;t[9]!==v?(u=n.jsxs("p",{children:["Tel: ",v]}),t[9]=v,t[10]=u):u=t[10];let r;t[11]!==A||t[12]!==j||t[13]!==p||t[14]!==u?(r=n.jsxs("div",{className:"pos-header",children:[A,j,p,u]}),t[11]=A,t[12]=j,t[13]=p,t[14]=u,t[15]=r):r=t[15];let f;t[16]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx("div",{className:"pos-title",children:"උකස් Receipt / Pawn Redemption"}),t[16]=f):f=t[16];let w;t[17]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx("span",{className:"label",children:"Ticket #:"}),t[17]=w):w=t[17];let _;t[18]!==e.clearanceNumber?(_=n.jsxs("div",{className:"pos-row",children:[w,n.jsx("span",{className:"value",children:e.clearanceNumber})]}),t[18]=e.clearanceNumber,t[19]=_):_=t[19];let S;t[20]===Symbol.for("react.memo_cache_sentinel")?(S=n.jsx("span",{className:"label",children:"Date:"}),t[20]=S):S=t[20];let x;t[21]!==ue?(x=H(ue),t[21]=ue,t[22]=x):x=t[22];let b;t[23]!==x?(b=n.jsxs("div",{className:"pos-row",children:[S,n.jsx("span",{className:"value",children:x})]}),t[23]=x,t[24]=b):b=t[24];let m;t[25]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx("span",{className:"label",children:"Pawn Date:"}),t[25]=m):m=t[25];const h=e.pawnDate||e.issueDate;let E;t[26]!==h?(E=H(h),t[26]=h,t[27]=E):E=t[27];let g;t[28]!==E?(g=n.jsxs("div",{className:"pos-row",children:[m,n.jsx("span",{className:"value",children:E})]}),t[28]=E,t[29]=g):g=t[29];let N;t[30]===Symbol.for("react.memo_cache_sentinel")?(N=n.jsx("div",{className:"pos-divider"}),t[30]=N):N=t[30];let G;t[31]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsx("span",{className:"label",children:"Customer:"}),t[31]=G):G=t[31];let T;t[32]!==e.customerName?(T=n.jsxs("div",{className:"pos-row",children:[G,n.jsx("span",{className:"value",children:e.customerName})]}),t[32]=e.customerName,t[33]=T):T=t[33];let R;t[34]!==e.customerNic?(R=e.customerNic&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"NIC:"}),n.jsx("span",{className:"value",children:e.customerNic})]}),t[34]=e.customerNic,t[35]=R):R=t[35];let $;t[36]!==e.customerPhone?($=e.customerPhone&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Phone:"}),n.jsx("span",{className:"value",children:e.customerPhone})]}),t[36]=e.customerPhone,t[37]=$):$=t[37];let z,D;t[38]===Symbol.for("react.memo_cache_sentinel")?(z=n.jsx("div",{className:"pos-divider"}),D=n.jsx("div",{style:{fontWeight:"bold",fontSize:"11px",marginBottom:"4px"},children:"ITEMS REDEEMED:"}),t[38]=z,t[39]=D):(z=t[38],D=t[39]);let M;if(t[40]!==e.items){let U;t[42]===Symbol.for("react.memo_cache_sentinel")?(U=(c,oe)=>n.jsxs("div",{className:"pos-item",children:[n.jsxs("div",{className:"item-name",children:[oe+1,". ",c.productName]}),(c.karat||c.metalWeight)&&n.jsxs("div",{className:"item-detail",children:[c.karat&&`${c.karat} `,c.metalType&&`${c.metalType} `,c.metalWeight?`${c.metalWeight}g`:""]}),n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"item-detail",children:["Qty: ",c.quantity]}),n.jsx("span",{children:B(c.total)})]})]},oe),t[42]=U):U=t[42],M=e.items.map(U),t[40]=e.items,t[41]=M}else M=t[41];let C;t[43]===Symbol.for("react.memo_cache_sentinel")?(C=n.jsx("div",{className:"pos-divider"}),t[43]=C):C=t[43];let Z;t[44]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsx("span",{className:"label",children:"Principal:"}),t[44]=Z):Z=t[44];const J=B(e.total);let I;t[45]!==J?(I=n.jsxs("div",{className:"pos-row",children:[Z,n.jsx("span",{className:"value",children:J})]}),t[45]=J,t[46]=I):I=t[46];let K;t[47]!==i?(K=i&&n.jsxs(n.Fragment,{children:[i.daysElapsed>0&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Days:"}),n.jsxs("span",{className:"value",children:[i.daysElapsed," days"]})]}),i.firstMonthInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"label",children:["1st Mo. (",i.interestRatePerMonth,"%):"]}),n.jsx("span",{className:"value",children:B(i.firstMonthInterest)})]}),i.additionalMonthsInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Add. Months:"}),n.jsx("span",{className:"value",children:B(i.additionalMonthsInterest)})]}),i.proratedDailyInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"label",children:["Daily (",i.remainingDays,"d):"]}),n.jsx("span",{className:"value",children:B(i.proratedDailyInterest)})]}),n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Total Interest:"}),n.jsx("span",{className:"value",children:B(i.totalInterest)})]})]}),t[47]=i,t[48]=K):K=t[48];const q=B(o);let P;t[49]!==q?(P=n.jsxs("div",{className:"pos-total",children:["TOTAL PAID: ",q]}),t[49]=q,t[50]=P):P=t[50];let ae;t[51]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("span",{className:"label",children:"Payment:"}),t[51]=ae):ae=t[51];const ee=e.redeemPaymentMethod||e.paymentMethod||"cash";let k;t[52]!==ee?(k=ee.replace("-"," ").toUpperCase(),t[52]=ee,t[53]=k):k=t[53];let d;t[54]!==k?(d=n.jsxs("div",{className:"pos-row",children:[ae,n.jsx("span",{className:"value",children:k})]}),t[54]=k,t[55]=d):d=t[55];let O,F;t[56]===Symbol.for("react.memo_cache_sentinel")?(O=n.jsx("p",{children:"Items returned to customer."}),F=n.jsx("p",{children:"Thank you for your trust!"}),t[56]=O,t[57]=F):(O=t[56],F=t[57]);const V=s?.name||"Onelka Jewellery";let Q;t[58]!==V?(Q=n.jsxs("div",{className:"pos-footer",children:[O,F,n.jsxs("p",{children:["— ",V," —"]})]}),t[58]=V,t[59]=Q):Q=t[59];let X;t[60]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsxs("div",{className:"pos-timestamp",children:["Printed: ",new Date().toLocaleString("en-GB")]}),t[60]=X):X=t[60];let te;return t[61]!==r||t[62]!==_||t[63]!==b||t[64]!==g||t[65]!==T||t[66]!==R||t[67]!==$||t[68]!==M||t[69]!==I||t[70]!==K||t[71]!==P||t[72]!==d||t[73]!==Q?(te=n.jsxs("div",{className:"pos-receipt",children:[y,r,f,_,b,g,N,T,R,$,z,D,M,C,I,K,P,d,Q,X]}),t[61]=r,t[62]=_,t[63]=b,t[64]=g,t[65]=T,t[66]=R,t[67]=$,t[68]=M,t[69]=I,t[70]=K,t[71]=P,t[72]=d,t[73]=Q,t[74]=te):te=t[74],te}function Yt(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ht(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const Jt={name:"Onelka Jewellery",address:"No. 123, Galle Road",city:"Colombo 03, Sri Lanka",phone:"+94 11 234 5678",phone2:"+94 77 123 4567",email:"info@onelkajewellery.lk",registrationNumber:"REG-2024-001"},qt=St.forwardRef((l,t)=>{const e=mt.c(236),{ticket:s,company:a,pawningTerms:ue}=l,i=a===void 0?Jt:a;let o;e[0]!==ue?(o=ue===void 0?[]:ue,e[0]=ue,e[1]=o):o=e[1];const H=o;let B,y,me;if(e[2]!==s.maturityDate||e[3]!==s.pawnDate){const F=new Date(s.pawnDate),V=new Date(s.maturityDate);me=(V.getFullYear()-F.getFullYear())*12,B=V.getMonth(),y=F.getMonth(),e[2]=s.maturityDate,e[3]=s.pawnDate,e[4]=B,e[5]=y,e[6]=me}else B=e[4],y=e[5],me=e[6];const A=me+(B-y);let j,W,p,v,u,r,f,w,_,S,x,b,m,h,E,g,N,G,T,R;if(e[7]!==i.address||e[8]!==i.city||e[9]!==i.email||e[10]!==i.name||e[11]!==i.phone||e[12]!==i.phone2||e[13]!==i.registrationNumber||e[14]!==A||e[15]!==t||e[16]!==s.customerAddress||e[17]!==s.customerNIC||e[18]!==s.customerName||e[19]!==s.customerPhone||e[20]!==s.gracePeriodDays||e[21]!==s.interestRatePerMonth||e[22]!==s.items||e[23]!==s.loanToValueRatio||e[24]!==s.maturityDate||e[25]!==s.pawnDate||e[26]!==s.principalAmount||e[27]!==s.ticketNumber||e[28]!==s.totalGrossWeight||e[29]!==s.totalNetWeight||e[30]!==s.totalValuation){const F=Dt(s.principalAmount,A,s.interestRatePerMonth);S=t,x="ppt-root",e[51]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 12mm 14mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .ppt-root { width: 100% !important; padding: 0 !important; margin: 0 !important; box-shadow: none !important; }
            .no-print { display: none !important; }
          }

          .ppt-root {
            width: 186mm;
            min-height: 257mm;
            margin: 16px auto;
            padding: 0;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9.5pt;
            color: #111;
            line-height: 1.45;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            box-sizing: border-box;
            border: 1pt solid #111;
          }

          /* ── HEADER ── */
          .ppt-header {
            position: relative;
            text-align: center;
            border: 1.5pt solid #111;
            padding: 3mm 42mm 3mm 42mm;
            min-height: 28mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 0;
          }
          .ppt-header-left {
            position: absolute;
            left: 3mm;
            top: 50%;
            transform: translateY(-50%);
            text-align: left;
          }
          .ppt-header-right {
            position: absolute;
            right: 3mm;
            top: 3mm;
            font-size: 8pt;
            color: #333;
            text-align: right;
          }
          .ppt-logo-name-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-bottom: 3mm;
          }
          .ppt-company-sinhala-large {
            font-size: 26pt;
            padding-bottom: 2mm;
            font-weight: 900;
            color: #111;
            letter-spacing: 1px;
            line-height: 1.1;
            margin: 0;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .ppt-company-name {
            font-size: 9pt;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #444;
            margin: 0 0 1mm;
            line-height: 1.2;
          }
          .ppt-company-contact {
            font-size: 8pt;
            color: #444;
            line-height: 1.6;
          }
          .ppt-form-label {
            font-size: 7.5pt;
            color: #666;
          }
          .ppt-form-no {
            font-size: 9pt;
            font-weight: 700;
          }

          /* ── TITLE BAR ── */
          .ppt-title-bar {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1.5pt solid #111;
            display: flex;
            align-items: stretch;
          }
          .ppt-title-en {
            flex: 1;
            text-align: center;
            font-size: 13pt;
            font-weight: 800;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 2mm 0;
            border-right: 1pt solid #111;
          }
          .ppt-title-si {
            flex: 1;
            text-align: center;
            font-size: 12pt;
            font-weight: 700;
            padding: 2mm 0;
            color: #111;
          }

          /* ── SECTION WRAPPER ── */
          .ppt-section {
            border-left: 1.5pt solid #111;
            border-right: 1.5pt solid #111;
            border-bottom: 1pt solid #111;
          }
          .ppt-section-header {
            background: #f0f0f0;
            border-bottom: 1pt solid #111;
            padding: 1mm 3mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .ppt-section-title-en {
            font-size: 8.5pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .ppt-section-title-si {
            font-size: 8.5pt;
            font-weight: 600;
            color: #333;
          }

          /* ── INFO GRID ── */
          .ppt-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .ppt-info-cell {
            padding: 1.5mm 3mm;
            border-right: 0.5pt solid #bbb;
            border-bottom: 0.5pt solid #ddd;
          }
          .ppt-info-cell:nth-child(even) { border-right: none; }
          .ppt-info-cell:last-child, .ppt-info-cell:nth-last-child(2) { border-bottom: none; }
          .ppt-field-label {
            font-size: 7.5pt;
            color: #666;
            display: block;
            margin-bottom: 0.3mm;
          }
          .ppt-field-label-si {
            font-size: 7.5pt;
            color: #888;
          }
          .ppt-field-value {
            font-size: 10pt;
            font-weight: 600;
            color: #000;
            display: block;
          }

          /* ── TABLE ── */
          .ppt-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8.5pt;
          }
          .ppt-table th {
            padding: 1.5mm 2mm;
            background: #f0f0f0;
            border: 0.5pt solid #999;
            font-size: 7.5pt;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
          }
          .ppt-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
          .ppt-table td {
            padding: 2mm 2mm;
            border: 0.5pt solid #bbb;
            vertical-align: middle;
          }
          .ppt-table td.center { text-align: center; }
          .ppt-table td.right { text-align: right; }
          .ppt-table .item-sub { font-size: 7.5pt; color: #555; }

          /* ── FINANCE GRID ── */
          .ppt-finance-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .ppt-finance-cell {
            padding: 2mm 3mm;
            border-right: 0.5pt solid #bbb;
            text-align: center;
          }
          .ppt-finance-cell:last-child { border-right: none; }
          .ppt-finance-amount {
            font-size: 13pt;
            font-weight: 800;
            color: #000;
            display: block;
            margin-top: 0.5mm;
          }

          /* ── INTEREST BOX ── */
          .ppt-interest-row {
            display: flex;
            justify-content: space-between;
            padding: 1.5mm 3mm;
            border-bottom: 0.5pt solid #ddd;
            font-size: 9pt;
          }
          .ppt-interest-row:last-child { border-bottom: none; }
          .ppt-interest-row.total {
            font-size: 10.5pt;
            font-weight: 700;
            background: #f9f9f9;
            border-top: 1pt solid #555;
          }
          .ppt-interest-label { color: #444; }
          .ppt-interest-label .si { font-size: 7.5pt; color: #888; display: block; }
          .ppt-interest-value { font-weight: 600; }

          /* ── TERMS ── */
          .ppt-terms {
            border: 1.5pt solid #111;
            margin-top: 3mm;
            padding: 2mm 3mm;
          }
          .ppt-terms-header {
            text-align: center;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 0.75pt solid #555;
            padding-bottom: 1.5mm;
            margin-bottom: 2mm;
          }
          .ppt-terms-header .si { font-size: 9pt; font-weight: 600; color: #333; }
          .ppt-terms-list {
            margin: 0;
            padding-left: 4mm;
            font-size: 7.5pt;
            color: #333;
            line-height: 1.6;
            list-style-type: disc;
          }
          .ppt-terms-list li { margin-bottom: 2mm; }
          .ppt-terms-list li .en { display: block; font-size: 7.5pt; color: #111; font-weight: 500; }
          .ppt-terms-list li .si { display: block; font-size: 7pt; color: #444; }
          .ppt-terms-list li .ta { display: block; font-size: 7pt; color: #555; font-style: italic; }

          /* ── SIGNATURES ── */
          .ppt-sig-row {
            display: flex;
            justify-content: space-between;
            margin-top: 6mm;
            gap: 6mm;
          }
          .ppt-sig-box {
            flex: 1;
            border: 0.75pt solid #555;
            padding: 2mm 3mm;
            text-align: center;
          }
          .ppt-sig-space { height: 14mm; }
          .ppt-sig-label {
            border-top: 0.75pt solid #333;
            padding-top: 1.5mm;
            font-size: 8.5pt;
            font-weight: 700;
          }
          .ppt-sig-label .si { font-size: 8pt; color: #555; font-weight: 600; }

          /* ── FOOTER ── */
          .ppt-customer-copy {
            margin-top: 3mm;
            border: 1.5pt solid #111;
            text-align: center;
            padding: 1.5mm;
            font-size: 9pt;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .ppt-footer {
            margin-top: 2mm;
            text-align: center;
            font-size: 7.5pt;
            color: #888;
            border-top: 0.5pt solid #ccc;
            padding-top: 1.5mm;
          }
        `}),e[51]=b):b=e[51];let V,Q;e[52]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"50px",height:"50px",objectFit:"contain",borderRadius:"4px",display:"block",marginBottom:"1.5mm"},onError:Qt}),Q={fontSize:"7pt",color:"#555",lineHeight:1.7},e[52]=V,e[53]=Q):(V=e[52],Q=e[53]);let X;e[54]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsx("br",{}),e[54]=X):X=e[54];const te=i.phone2?` / ${i.phone2}`:"";let U;e[55]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsx("br",{}),e[55]=U):U=e[55];let c;e[56]!==i.address||e[57]!==i.city||e[58]!==i.email||e[59]!==i.phone||e[60]!==te?(c=n.jsxs("div",{className:"ppt-header-left",children:[V,n.jsxs("div",{style:Q,children:[i.address,", ",i.city,X,"Tel: ",i.phone,te,U,i.email]})]}),e[56]=i.address,e[57]=i.city,e[58]=i.email,e[59]=i.phone,e[60]=te,e[61]=c):c=e[61];let oe;e[62]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("div",{className:"ppt-form-label",children:"Form No. / පෝරම අංකය"}),e[62]=oe):oe=e[62];let fe;e[63]!==i.registrationNumber?(fe=n.jsx("div",{className:"ppt-form-no",children:i.registrationNumber}),e[63]=i.registrationNumber,e[64]=fe):fe=e[64];let de;e[65]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsxs("div",{style:{marginTop:"2mm"},children:[n.jsx("div",{className:"ppt-form-label",children:"Branch / ශාඛාව"}),n.jsx("div",{className:"ppt-form-no",children:"Head Office"})]}),e[65]=de):de=e[65];let ne;e[66]!==fe?(ne=n.jsxs("div",{className:"ppt-header-right",children:[oe,fe,de]}),e[66]=fe,e[67]=ne):ne=e[67];let se;e[68]===Symbol.for("react.memo_cache_sentinel")?(se=n.jsx("div",{className:"ppt-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),e[68]=se):se=e[68];let pe;e[69]!==i.name?(pe=n.jsx("div",{className:"ppt-company-name",children:i.name}),e[69]=i.name,e[70]=pe):pe=e[70],e[71]!==c||e[72]!==ne||e[73]!==pe?(m=n.jsxs("div",{className:"ppt-header",children:[c,ne,se,pe]}),e[71]=c,e[72]=ne,e[73]=pe,e[74]=m):m=e[74],e[75]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsxs("div",{className:"ppt-title-bar",children:[n.jsx("div",{className:"ppt-title-en",children:"PAWN TICKET"}),n.jsx("div",{className:"ppt-title-si",children:"උකස් පත"})]}),e[75]=h):h=e[75];let be;e[76]===Symbol.for("react.memo_cache_sentinel")?(be=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Ticket & Customer Information"}),n.jsx("span",{className:"ppt-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[76]=be):be=e[76];let xe;e[77]===Symbol.for("react.memo_cache_sentinel")?(xe=n.jsxs("span",{className:"ppt-field-label",children:["Ticket No. ",n.jsx("span",{className:"ppt-field-label-si",children:"/ අංකය"})]}),e[77]=xe):xe=e[77];let le;e[78]===Symbol.for("react.memo_cache_sentinel")?(le={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[78]=le):le=e[78];let ce;e[79]!==s.ticketNumber?(ce=n.jsxs("div",{className:"ppt-info-cell",children:[xe,n.jsx("span",{className:"ppt-field-value",style:le,children:s.ticketNumber})]}),e[79]=s.ticketNumber,e[80]=ce):ce=e[80];let ge;e[81]===Symbol.for("react.memo_cache_sentinel")?(ge=n.jsxs("span",{className:"ppt-field-label",children:["Date ",n.jsx("span",{className:"ppt-field-label-si",children:"/ දිනය"})]}),e[81]=ge):ge=e[81];let re;e[82]!==s.pawnDate?(re=rt(s.pawnDate),e[82]=s.pawnDate,e[83]=re):re=e[83];let L;e[84]!==re?(L=n.jsxs("div",{className:"ppt-info-cell",children:[ge,n.jsx("span",{className:"ppt-field-value",children:re})]}),e[84]=re,e[85]=L):L=e[85];let Ne;e[86]===Symbol.for("react.memo_cache_sentinel")?(Ne=n.jsxs("span",{className:"ppt-field-label",children:["Customer Name ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[86]=Ne):Ne=e[86];let Y;e[87]!==s.customerName?(Y=n.jsxs("div",{className:"ppt-info-cell",children:[Ne,n.jsx("span",{className:"ppt-field-value",children:s.customerName})]}),e[87]=s.customerName,e[88]=Y):Y=e[88];let he;e[89]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsxs("span",{className:"ppt-field-label",children:["NIC No. ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[89]=he):he=e[89];let ie;e[90]!==s.customerNIC?(ie=n.jsxs("div",{className:"ppt-info-cell",children:[he,n.jsx("span",{className:"ppt-field-value",children:s.customerNIC})]}),e[90]=s.customerNIC,e[91]=ie):ie=e[91];let ze;e[92]===Symbol.for("react.memo_cache_sentinel")?(ze=n.jsxs("span",{className:"ppt-field-label",children:["Phone ",n.jsx("span",{className:"ppt-field-label-si",children:"/ දුරකථනය"})]}),e[92]=ze):ze=e[92];let De;e[93]!==s.customerPhone?(De=n.jsxs("div",{className:"ppt-info-cell",children:[ze,n.jsx("span",{className:"ppt-field-value",children:s.customerPhone})]}),e[93]=s.customerPhone,e[94]=De):De=e[94];let Ie;e[95]===Symbol.for("react.memo_cache_sentinel")?(Ie=n.jsxs("span",{className:"ppt-field-label",children:["Address ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ලිපිනය"})]}),e[95]=Ie):Ie=e[95];let Pe;e[96]===Symbol.for("react.memo_cache_sentinel")?(Pe={fontSize:"9pt"},e[96]=Pe):Pe=e[96];let je;e[97]!==s.customerAddress?(je=n.jsxs("div",{className:"ppt-info-cell",children:[Ie,n.jsx("span",{className:"ppt-field-value",style:Pe,children:s.customerAddress})]}),e[97]=s.customerAddress,e[98]=je):je=e[98],e[99]!==ce||e[100]!==L||e[101]!==Y||e[102]!==ie||e[103]!==De||e[104]!==je?(E=n.jsxs("div",{className:"ppt-section",children:[be,n.jsxs("div",{className:"ppt-info-grid",children:[ce,L,Y,ie,De,je]})]}),e[99]=ce,e[100]=L,e[101]=Y,e[102]=ie,e[103]=De,e[104]=je,e[105]=E):E=e[105];let ye;e[106]===Symbol.for("react.memo_cache_sentinel")?(ye={borderTop:"none"},e[106]=ye):ye=e[106];let we;e[107]===Symbol.for("react.memo_cache_sentinel")?(we=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Gold Items / රන් භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"ppt-section-title-si",children:"Pawned Articles"})]}),e[107]=we):we=e[107];let Ee,ke;e[108]===Symbol.for("react.memo_cache_sentinel")?(Ee=n.jsx("th",{style:{width:"5%"},children:"#"}),ke={width:"32%"},e[108]=Ee,e[109]=ke):(Ee=e[108],ke=e[109]);let _e,Ae;e[110]===Symbol.for("react.memo_cache_sentinel")?(_e=n.jsxs("th",{style:ke,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),Ae={width:"10%"},e[110]=_e,e[111]=Ae):(_e=e[110],Ae=e[111]);let Se,ve;e[112]===Symbol.for("react.memo_cache_sentinel")?(Se=n.jsxs("th",{style:Ae,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),ve={width:"13%"},e[112]=Se,e[113]=ve):(Se=e[112],ve=e[113]);let Re,Oe;e[114]===Symbol.for("react.memo_cache_sentinel")?(Re=n.jsxs("th",{style:ve,children:["Gross Wt",n.jsx("span",{className:"si",children:"මුළු බර"})]}),Oe={width:"13%"},e[114]=Re,e[115]=Oe):(Re=e[114],Oe=e[115]);let Be,We;e[116]===Symbol.for("react.memo_cache_sentinel")?(Be=n.jsxs("th",{style:Oe,children:["Net Wt",n.jsx("span",{className:"si",children:"ශුද්ධ බර"})]}),We={width:"13%"},e[116]=Be,e[117]=We):(Be=e[116],We=e[117]);let qe,$e;e[118]===Symbol.for("react.memo_cache_sentinel")?(qe=n.jsxs("th",{style:We,children:["Gold Wt",n.jsx("span",{className:"si",children:"රන් බර"})]}),$e={width:"14%"},e[118]=qe,e[119]=$e):(qe=e[118],$e=e[119]);let Fe;e[120]===Symbol.for("react.memo_cache_sentinel")?(Fe=n.jsx("thead",{children:n.jsxs("tr",{children:[Ee,_e,Se,Re,Be,qe,n.jsxs("th",{style:$e,children:["Value",n.jsx("span",{className:"si",children:"වටිනාකම"})]})]})}),e[120]=Fe):Fe=e[120];let Le;e[121]!==s.items?(Le=s.items.map(Xt),e[121]=s.items,e[122]=Le):Le=e[122];let Qe;e[123]===Symbol.for("react.memo_cache_sentinel")?(Qe={background:"#f5f5f5",fontWeight:700},e[123]=Qe):Qe=e[123];let Xe;e[124]===Symbol.for("react.memo_cache_sentinel")?(Xe=n.jsx("td",{colSpan:3,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total / මුළු එකතුව"}),e[124]=Xe):Xe=e[124];let Ge;e[125]!==s.totalGrossWeight?(Ge=Ze(s.totalGrossWeight),e[125]=s.totalGrossWeight,e[126]=Ge):Ge=e[126];let Ve;e[127]!==Ge?(Ve=n.jsx("td",{className:"right",children:Ge}),e[127]=Ge,e[128]=Ve):Ve=e[128];let Ue;e[129]!==s.totalNetWeight?(Ue=Ze(s.totalNetWeight),e[129]=s.totalNetWeight,e[130]=Ue):Ue=e[130];let Ke;e[131]!==Ue?(Ke=n.jsx("td",{className:"right",children:Ue}),e[131]=Ue,e[132]=Ke):Ke=e[132];let Ye;e[133]!==s.totalNetWeight?(Ye=Ze(s.totalNetWeight),e[133]=s.totalNetWeight,e[134]=Ye):Ye=e[134];let Me;e[135]!==Ye?(Me=n.jsx("td",{className:"right",children:Ye}),e[135]=Ye,e[136]=Me):Me=e[136];let He;e[137]!==s.totalValuation?(He=Te(s.totalValuation),e[137]=s.totalValuation,e[138]=He):He=e[138];let et;e[139]!==He?(et=n.jsx("td",{className:"right",children:He}),e[139]=He,e[140]=et):et=e[140];let tt;e[141]!==Ve||e[142]!==Ke||e[143]!==Me||e[144]!==et?(tt=n.jsxs("tr",{style:Qe,children:[Xe,Ve,Ke,Me,et]}),e[141]=Ve,e[142]=Ke,e[143]=Me,e[144]=et,e[145]=tt):tt=e[145],e[146]!==Le||e[147]!==tt?(g=n.jsxs("div",{className:"ppt-section",style:ye,children:[we,n.jsxs("table",{className:"ppt-table",children:[Fe,n.jsxs("tbody",{children:[Le,tt]})]})]}),e[146]=Le,e[147]=tt,e[148]=g):g=e[148];let dt;e[149]===Symbol.for("react.memo_cache_sentinel")?(dt={borderTop:"none"},e[149]=dt):dt=e[149];let pt;e[150]===Symbol.for("react.memo_cache_sentinel")?(pt=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Loan Details / ණය විස්තර"}),n.jsx("span",{className:"ppt-section-title-si",children:"Finance Information"})]}),e[150]=pt):pt=e[150];let ht;e[151]===Symbol.for("react.memo_cache_sentinel")?(ht=n.jsxs("span",{className:"ppt-field-label",children:["Assessed Value ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ඇස්තමේන්තු වටිනාකම"})]}),e[151]=ht):ht=e[151];let nt;e[152]!==s.totalValuation?(nt=Te(s.totalValuation),e[152]=s.totalValuation,e[153]=nt):nt=e[153];let st;e[154]!==nt?(st=n.jsxs("div",{className:"ppt-finance-cell",children:[ht,n.jsx("span",{className:"ppt-finance-amount",children:nt})]}),e[154]=nt,e[155]=st):st=e[155];let ft;e[156]===Symbol.for("react.memo_cache_sentinel")?(ft=n.jsxs("span",{className:"ppt-field-label",children:["LTV Ratio ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ණය අනුපාතය"})]}),e[156]=ft):ft=e[156];const wt=s.loanToValueRatio*100;let lt;e[157]!==wt?(lt=wt.toFixed(0),e[157]=wt,e[158]=lt):lt=e[158];let it;e[159]!==lt?(it=n.jsxs("div",{className:"ppt-finance-cell",children:[ft,n.jsxs("span",{className:"ppt-finance-amount",children:[lt,"%"]})]}),e[159]=lt,e[160]=it):it=e[160];let xt;e[161]===Symbol.for("react.memo_cache_sentinel")?(xt={background:"#f9f9f9"},e[161]=xt):xt=e[161];let bt;e[162]===Symbol.for("react.memo_cache_sentinel")?(bt=n.jsxs("span",{className:"ppt-field-label",children:["Loan Amount ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ණය මුදල"})]}),e[162]=bt):bt=e[162];let gt;e[163]===Symbol.for("react.memo_cache_sentinel")?(gt={fontSize:"15pt"},e[163]=gt):gt=e[163];let at;e[164]!==s.principalAmount?(at=Te(s.principalAmount),e[164]=s.principalAmount,e[165]=at):at=e[165];let ot;e[166]!==at?(ot=n.jsxs("div",{className:"ppt-finance-cell",style:xt,children:[bt,n.jsx("span",{className:"ppt-finance-amount",style:gt,children:at})]}),e[166]=at,e[167]=ot):ot=e[167],e[168]!==st||e[169]!==it||e[170]!==ot?(N=n.jsxs("div",{className:"ppt-section",style:dt,children:[pt,n.jsxs("div",{className:"ppt-finance-grid",children:[st,it,ot]})]}),e[168]=st,e[169]=it,e[170]=ot,e[171]=N):N=e[171],W="ppt-section",e[172]===Symbol.for("react.memo_cache_sentinel")?(p={borderTop:"none"},e[172]=p):p=e[172],e[173]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Interest & Repayment / පොලී සහ ආපසු ගෙවීම"}),n.jsx("span",{className:"ppt-section-title-si",children:"Interest Information"})]}),e[173]=v):v=e[173];let Nt;e[174]===Symbol.for("react.memo_cache_sentinel")?(Nt=n.jsxs("span",{className:"ppt-interest-label",children:["Interest Rate ",n.jsx("span",{className:"si",children:"පොලී අනුපාතය"})]}),e[174]=Nt):Nt=e[174],e[175]!==s.interestRatePerMonth?(u=n.jsxs("div",{className:"ppt-interest-row",children:[Nt,n.jsxs("span",{className:"ppt-interest-value",children:[s.interestRatePerMonth,"% per month / මාසයකට"]})]}),e[175]=s.interestRatePerMonth,e[176]=u):u=e[176];let jt;e[177]===Symbol.for("react.memo_cache_sentinel")?(jt=n.jsxs("span",{className:"ppt-interest-label",children:["Loan Period ",n.jsx("span",{className:"si",children:"ණය කාලය"})]}),e[177]=jt):jt=e[177],e[178]!==A?(r=n.jsxs("div",{className:"ppt-interest-row",children:[jt,n.jsxs("span",{className:"ppt-interest-value",children:[A," Month(s) / මාස"]})]}),e[178]=A,e[179]=r):r=e[179];let vt;e[180]===Symbol.for("react.memo_cache_sentinel")?(vt=n.jsxs("span",{className:"ppt-interest-label",children:["Maturity Date ",n.jsx("span",{className:"si",children:"කල් පිරෙන දිනය"})]}),e[180]=vt):vt=e[180];let ct;e[181]!==s.maturityDate?(ct=rt(s.maturityDate),e[181]=s.maturityDate,e[182]=ct):ct=e[182],e[183]!==ct?(f=n.jsxs("div",{className:"ppt-interest-row",children:[vt,n.jsx("span",{className:"ppt-interest-value",children:ct})]}),e[183]=ct,e[184]=f):f=e[184];let ut;e[185]===Symbol.for("react.memo_cache_sentinel")?(ut=n.jsxs("span",{className:"ppt-interest-label",children:["Grace Period ",n.jsx("span",{className:"si",children:"සහන කාලය"})]}),e[185]=ut):ut=e[185],e[186]!==s.gracePeriodDays?(w=n.jsxs("div",{className:"ppt-interest-row",children:[ut,n.jsxs("span",{className:"ppt-interest-value",children:[s.gracePeriodDays," Days / දින"]})]}),e[186]=s.gracePeriodDays,e[187]=w):w=e[187];let yt;e[188]===Symbol.for("react.memo_cache_sentinel")?(yt=n.jsxs("span",{className:"ppt-interest-label",children:["Estimated Interest at Maturity ",n.jsx("span",{className:"si",children:"කල් පිරෙන විට ඇස්තමේන්තු පොලිය"})]}),e[188]=yt):yt=e[188],_=n.jsxs("div",{className:"ppt-interest-row",children:[yt,n.jsx("span",{className:"ppt-interest-value",children:Te(F.totalInterest)})]}),R="ppt-interest-row total",e[189]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsxs("span",{className:"ppt-interest-label",children:["Total Payable at Maturity ",n.jsx("span",{className:"si",children:"කල් පිරෙන විට ගෙවිය යුතු මුළු මුදල"})]}),e[189]=j):j=e[189],G="ppt-interest-value",T=Te(F.totalPayable),e[7]=i.address,e[8]=i.city,e[9]=i.email,e[10]=i.name,e[11]=i.phone,e[12]=i.phone2,e[13]=i.registrationNumber,e[14]=A,e[15]=t,e[16]=s.customerAddress,e[17]=s.customerNIC,e[18]=s.customerName,e[19]=s.customerPhone,e[20]=s.gracePeriodDays,e[21]=s.interestRatePerMonth,e[22]=s.items,e[23]=s.loanToValueRatio,e[24]=s.maturityDate,e[25]=s.pawnDate,e[26]=s.principalAmount,e[27]=s.ticketNumber,e[28]=s.totalGrossWeight,e[29]=s.totalNetWeight,e[30]=s.totalValuation,e[31]=j,e[32]=W,e[33]=p,e[34]=v,e[35]=u,e[36]=r,e[37]=f,e[38]=w,e[39]=_,e[40]=S,e[41]=x,e[42]=b,e[43]=m,e[44]=h,e[45]=E,e[46]=g,e[47]=N,e[48]=G,e[49]=T,e[50]=R}else j=e[31],W=e[32],p=e[33],v=e[34],u=e[35],r=e[36],f=e[37],w=e[38],_=e[39],S=e[40],x=e[41],b=e[42],m=e[43],h=e[44],E=e[45],g=e[46],N=e[47],G=e[48],T=e[49],R=e[50];let $;e[190]!==G||e[191]!==T?($=n.jsx("span",{className:G,children:T}),e[190]=G,e[191]=T,e[192]=$):$=e[192];let z;e[193]!==j||e[194]!==$||e[195]!==R?(z=n.jsxs("div",{className:R,children:[j,$]}),e[193]=j,e[194]=$,e[195]=R,e[196]=z):z=e[196];let D;e[197]!==W||e[198]!==p||e[199]!==v||e[200]!==u||e[201]!==r||e[202]!==f||e[203]!==w||e[204]!==_||e[205]!==z?(D=n.jsxs("div",{className:W,style:p,children:[v,u,r,f,w,_,z]}),e[197]=W,e[198]=p,e[199]=v,e[200]=u,e[201]=r,e[202]=f,e[203]=w,e[204]=_,e[205]=z,e[206]=D):D=e[206];let M;e[207]===Symbol.for("react.memo_cache_sentinel")?(M=n.jsxs("div",{className:"ppt-terms-header",children:["Terms & Conditions / ",n.jsx("span",{className:"si",children:"නියමයන් සහ කොන්දේසි"})]}),e[207]=M):M=e[207];let C;e[208]!==i.pawnTerms||e[209]!==H||e[210]!==s.interestRatePerMonth?(C=H.length>0?H.map(Zt):i?.pawnTerms?i.pawnTerms.split(`
`).filter(en).map(tn):n.jsxs(n.Fragment,{children:[n.jsxs("li",{children:["Interest of ",s.interestRatePerMonth,"% is charged per month, even for one day. Daily pro-rata applies after the first month.",n.jsxs("span",{className:"si",children:[" / ",s.interestRatePerMonth,"% ක් මාසිකව අය කෙරේ. පළමු මාසයෙන් පසු දෛනික ගණනය කෙරේ."]})]}),n.jsxs("li",{children:["Items must be redeemed within the loan period plus grace period with original ticket and valid ID.",n.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),n.jsxs("li",{children:["Unredeemed items after the grace period may be forfeited without further notice.",n.jsx("span",{className:"si",children:" / සහන කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),n.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",n.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[208]=i.pawnTerms,e[209]=H,e[210]=s.interestRatePerMonth,e[211]=C):C=e[211];let Z;e[212]!==C?(Z=n.jsxs("div",{className:"ppt-terms",children:[M,n.jsx("ul",{className:"ppt-terms-list",children:C})]}),e[212]=C,e[213]=Z):Z=e[213];let J;e[214]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsx("div",{className:"ppt-sig-space"}),e[214]=J):J=e[214];let I;e[215]===Symbol.for("react.memo_cache_sentinel")?(I=n.jsxs("div",{className:"ppt-sig-box",children:[J,n.jsxs("div",{className:"ppt-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[215]=I):I=e[215];let K;e[216]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsx("div",{className:"ppt-sig-space"}),e[216]=K):K=e[216];let q;e[217]===Symbol.for("react.memo_cache_sentinel")?(q=n.jsxs("div",{className:"ppt-sig-box",children:[K,n.jsxs("div",{className:"ppt-sig-label",children:["Valuer / ",n.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[217]=q):q=e[217];let P;e[218]===Symbol.for("react.memo_cache_sentinel")?(P=n.jsx("div",{className:"ppt-sig-space"}),e[218]=P):P=e[218];let ae,ee;e[219]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsxs("div",{className:"ppt-sig-row",children:[I,q,n.jsxs("div",{className:"ppt-sig-box",children:[P,n.jsxs("div",{className:"ppt-sig-label",children:["Manager / ",n.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),ee=n.jsx("div",{className:"ppt-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[219]=ae,e[220]=ee):(ae=e[219],ee=e[220]);let k;e[221]===Symbol.for("react.memo_cache_sentinel")?(k=new Date().toLocaleString("en-GB"),e[221]=k):k=e[221];let d;e[222]!==i.registrationNumber?(d=n.jsxs("div",{className:"ppt-footer",children:["Printed: ",k,"  |  ",i.registrationNumber,"  |  This is a computer-generated document."]}),e[222]=i.registrationNumber,e[223]=d):d=e[223];let O;return e[224]!==S||e[225]!==x||e[226]!==b||e[227]!==m||e[228]!==h||e[229]!==E||e[230]!==g||e[231]!==N||e[232]!==D||e[233]!==Z||e[234]!==d?(O=n.jsxs("div",{ref:S,className:x,children:[b,m,h,E,g,N,D,Z,ae,ee,d]}),e[224]=S,e[225]=x,e[226]=b,e[227]=m,e[228]=h,e[229]=E,e[230]=g,e[231]=N,e[232]=D,e[233]=Z,e[234]=d,e[235]=O):O=e[235],O});qt.displayName="PrintablePawnTicket";function Qt(l){l.target.style.display="none"}function Xt(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",children:t+1}),n.jsxs("td",{children:[n.jsx("strong",{children:l.itemType}),l.description&&n.jsx("div",{className:"item-sub",children:l.description}),l.hasGemstones&&n.jsxs("div",{className:"item-sub",children:["* ",l.gemstoneDescription]})]}),n.jsx("td",{className:"center",children:l.karat}),n.jsx("td",{className:"right",children:Ze(l.grossWeight)}),n.jsx("td",{className:"right",children:Ze(l.netWeight)}),n.jsx("td",{className:"right",children:Ze(l.netWeight)}),n.jsx("td",{className:"right",children:Te(l.valuedAmount)})]},l.id)}function Zt(l){return n.jsxs("li",{children:[n.jsx("span",{className:"en",children:l.en}),l.si&&n.jsx("span",{className:"si",children:l.si}),l.ta&&n.jsx("span",{className:"ta",children:l.ta})]},l.groupId)}function en(l){return l.trim()}function tn(l,t){const e=l.split(" / ");return n.jsxs("li",{children:[e[0]?.trim(),e[1]&&n.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}const nn={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"};function Ce(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function _t(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function sn(l){switch(l){case"redemption":return{en:"REDEMPTION RECEIPT",si:"මුදා ගැනීමේ රිසිට්පත"};case"interest":return{en:"INTEREST PAYMENT RECEIPT",si:"පොලී ගෙවීමේ රිසිට්පත"};default:return{en:"PAYMENT RECEIPT",si:"ගෙවීම් රිසිට්පත"}}}function xn(l){const t=mt.c(156),{data:e,company:s}=l,a=s||nn;let ue;t[0]!==e.paymentType?(ue=sn(e.paymentType),t[0]=e.paymentType,t[1]=ue):ue=t[1];const i=ue;let o;t[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600&display=swap');

        @media print {
          @page { size: A4 portrait; margin: 10mm 12mm; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { margin: 0; padding: 0; background: white; }
          .inv-root {
            width: 100% !important;
              max-width: 100% !important;
              padding: 8mm !important; 
              margin: 0 !important;
              box-shadow: none !important;
              font-size: 8.5pt !important;
          }
          .no-print { display: none !important; }
        }

        /* ── ROOT ── */
        .inv-root {
          width: 186mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 8mm 10mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9pt;
            color: #111;
            line-height: 1.4;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            box-sizing: border-box;
        }

        /* ── HEADER ── */
        .inv-header {
          position: relative;
          text-align: center;
          border: 1.5pt solid #111;
          padding: 3mm 42mm 3mm 42mm;
          min-height: 28mm;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .inv-header-left {
          position: absolute;
          left: 3mm;
          top: 50%;
          transform: translateY(-50%);
          text-align: left;
        }
        .inv-header-right {
          position: absolute;
          right: 3mm;
          top: 3mm;
          font-size: 8pt;
          color: #333;
          text-align: right;
        }
        .inv-logo-name-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-bottom: 2mm;
        }
        .inv-company-sinhala-large {
          font-size: 26pt; font-weight: 900; color: #111;
          letter-spacing: 1px; line-height: 1.1; margin: 0;
          font-family: 'Noto Sans Sinhala', sans-serif;
          padding-bottom: 2mm;
        }
        .inv-company-name {
          font-size: 9pt; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
        }
        .inv-company-contact { font-size: 7.5pt; color: #555; line-height: 1.7; }
        .inv-form-label { font-size: 7.5pt; color: #666; }
        .inv-form-no { font-size: 9pt; font-weight: 700; }

        /* ── TITLE BAR ── */
        .inv-title-bar {
                  border-left: 1.5pt solid #111; border-right: 1.5pt solid #111;
          border-bottom: 1.5pt solid #111;
          display: flex; align-items: stretch;
        }
        .inv-title-en {
          flex: 1; text-align: center; font-size: 13pt; font-weight: 800;
          letter-spacing: 3px; text-transform: uppercase; padding: 2mm 0;
          border-right: 1pt solid #111;
        }
        .inv-title-si {
          flex: 1; text-align: center; font-size: 12pt; font-weight: 700;
          padding: 2mm 0; color: #111;
        }

        /* ── SECTION ── */
        .inv-section {
          border-left: 1.5pt solid #111;
          border-right: 1.5pt solid #111;
          border-bottom: 1pt solid #111;
        }
        .inv-section-header {
          background: #f0f0f0; border-bottom: 1pt solid #111;
          padding: 1mm 3mm; display: flex; justify-content: space-between; align-items: center;
        }
        .inv-section-title-en { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .inv-section-title-si { font-size: 8.5pt; font-weight: 600; color: #333; }

        /* ── INFO GRID ── */
        .inv-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .inv-info-cell {
          padding: 1.5mm 3mm; border-right: 0.5pt solid #bbb; border-bottom: 0.5pt solid #ddd;
        }
        .inv-info-cell:nth-child(even) { border-right: none; }
        .inv-info-cell.full { grid-column: 1 / -1; border-right: none; }
        .inv-field-label { font-size: 7.5pt; color: #666; display: block; margin-bottom: 0.3mm; }
        .inv-field-label-si { font-size: 7.5pt; color: #888; }
        .inv-field-value { font-size: 10pt; font-weight: 600; color: #000; display: block; }

        /* ── STATUS BADGE ── */
        .inv-status {
          display: inline-block; padding: 1mm 3mm; border: 1pt solid #333;
          font-size: 8pt; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
        }

        /* ── TABLE ── */
        .inv-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
        .inv-table th {
          padding: 1.5mm 2mm; background: #f0f0f0; border: 0.5pt solid #999;
          font-size: 7.5pt; font-weight: 700; text-align: center; text-transform: uppercase;
        }
        .inv-table th .si { font-weight: 600; font-size: 7pt; color: #555; display: block; }
        .inv-table td { padding: 2mm; border: 0.5pt solid #bbb; vertical-align: middle; }
        .inv-table td.center { text-align: center; }
        .inv-table td.right { text-align: right; }
        .inv-item-sub { font-size: 7.5pt; color: #555; }
        .inv-table tfoot td { background: #f5f5f5; font-weight: 700; border: 0.5pt solid #999; }

        /* ── BREAKDOWN ROWS (interest calc) ── */
        .inv-breakdown-row {
          display: flex; justify-content: space-between;
          padding: 1mm 3mm; font-size: 8.5pt; border-bottom: 0.3pt solid #eee;
        }
        .inv-breakdown-row:last-child { border-bottom: none; }
        .inv-breakdown-row .l { color: #555; }
        .inv-breakdown-row .v { font-weight: 500; }
        .inv-breakdown-row.sub { padding-left: 8mm; }
        .inv-breakdown-row.sub .l { color: #888; font-size: 8pt; }

        /* ── TOTALS ── */
        .inv-totals-row {
          display: flex; justify-content: space-between;
          padding: 1.5mm 3mm; border-bottom: 0.5pt solid #ddd; font-size: 9pt;
        }
        .inv-totals-row:last-child { border-bottom: none; }
        .inv-totals-row.highlight {
          font-size: 11pt; font-weight: 700; background: #f9f9f9;
          border-top: 1pt solid #555; border-bottom: none;
        }
        .inv-totals-row.balance {
          border: 1pt solid #333; margin: 2mm 3mm 2mm; font-weight: 700;
        }
        .inv-totals-label { color: #444; }
        .inv-totals-label .si { font-size: 7.5pt; color: #888; display: block; }
        .inv-totals-value { font-weight: 600; }

        /* ── NOTES BOX ── */
        .inv-box {
          border-left: 1.5pt solid #111;
          border-right: 1.5pt solid #111;
          border-bottom: 1pt solid #111;
          padding: 2mm 3mm;
        }
        .inv-box-cap {
          font-size: 7.5pt; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; color: #555; margin-bottom: 1.5mm;
        }
        .inv-box p { font-size: 8.5pt; color: #444; margin: 0; }

        /* ── SIGNATURES ── */
        .inv-sig-row {
          display: flex; justify-content: space-between;
          padding: 4mm 3mm 2mm; gap: 6mm;
        .inv-sig-box { flex: 1; border: 0.75pt solid #555; padding: 2mm 3mm; text-align: center; }
        .inv-sig-space { height: 12mm; }
        .inv-sig-label { border-top: 0.75pt solid #333; padding-top: 1.5mm; font-size: 8.5pt; font-weight: 700; }
        .inv-sig-label .si { font-size: 8pt; color: #555; font-weight: 600; }

        /* ── FOOTER ── */
        .inv-footer {
          margin: 0; text-align: center; font-size: 7.5pt; color: #888;
          border-top: 0.5pt solid #ccc; padding: 1.5mm 3mm;
        }
      `}),t[2]=o):o=t[2];let H,B;t[3]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"50px",height:"50px",objectFit:"contain",borderRadius:"4px",display:"block",marginBottom:"1.5mm"},onError:on}),B={fontSize:"7pt",color:"#555",lineHeight:1.7},t[3]=H,t[4]=B):(H=t[3],B=t[4]);let y;t[5]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("br",{}),t[5]=y):y=t[5];const me=a.phone2?` / ${a.phone2}`:"";let A;t[6]===Symbol.for("react.memo_cache_sentinel")?(A=n.jsx("br",{}),t[6]=A):A=t[6];let j;t[7]!==a.address||t[8]!==a.city||t[9]!==a.email||t[10]!==a.phone||t[11]!==me?(j=n.jsxs("div",{className:"inv-header-left",children:[H,n.jsxs("div",{style:B,children:[a.address,", ",a.city,y,"Tel: ",a.phone,me,A,a.email]})]}),t[7]=a.address,t[8]=a.city,t[9]=a.email,t[10]=a.phone,t[11]=me,t[12]=j):j=t[12];let W;t[13]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx("div",{className:"inv-form-label",children:"Receipt No. / රිසිට් අංකය"}),t[13]=W):W=t[13];let p;t[14]!==e.clearanceNumber?(p=n.jsx("div",{className:"inv-form-no",children:e.clearanceNumber}),t[14]=e.clearanceNumber,t[15]=p):p=t[15];let v,u;t[16]===Symbol.for("react.memo_cache_sentinel")?(v={marginTop:"2mm"},u=n.jsx("div",{className:"inv-form-label",children:"Date / දිනය"}),t[16]=v,t[17]=u):(v=t[16],u=t[17]);let r;t[18]!==e.paymentDate?(r=_t(e.paymentDate),t[18]=e.paymentDate,t[19]=r):r=t[19];let f;t[20]!==r?(f=n.jsxs("div",{style:v,children:[u,n.jsx("div",{className:"inv-form-no",children:r})]}),t[20]=r,t[21]=f):f=t[21];let w;t[22]!==p||t[23]!==f?(w=n.jsxs("div",{className:"inv-header-right",children:[W,p,f]}),t[22]=p,t[23]=f,t[24]=w):w=t[24];let _;t[25]===Symbol.for("react.memo_cache_sentinel")?(_=n.jsx("div",{className:"inv-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),t[25]=_):_=t[25];let S;t[26]!==a.name?(S=n.jsx("div",{className:"inv-company-name",children:a.name}),t[26]=a.name,t[27]=S):S=t[27];let x;t[28]!==w||t[29]!==S||t[30]!==j?(x=n.jsxs("div",{className:"inv-header",children:[j,w,_,S]}),t[28]=w,t[29]=S,t[30]=j,t[31]=x):x=t[31];let b;t[32]!==i.en?(b=n.jsx("div",{className:"inv-title-en",children:i.en}),t[32]=i.en,t[33]=b):b=t[33];let m;t[34]!==i.si?(m=n.jsx("div",{className:"inv-title-si",children:i.si}),t[34]=i.si,t[35]=m):m=t[35];let h;t[36]!==b||t[37]!==m?(h=n.jsxs("div",{className:"inv-title-bar",children:[b,m]}),t[36]=b,t[37]=m,t[38]=h):h=t[38];let E;t[39]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Customer & Payment Details"}),n.jsx("span",{className:"inv-section-title-si",children:"ගනුදෙනුකරු සහ ගෙවීම් විස්තර"})]}),t[39]=E):E=t[39];let g;t[40]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsxs("span",{className:"inv-field-label",children:["Customer Name ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),t[40]=g):g=t[40];let N;t[41]!==e.customerName?(N=n.jsxs("div",{className:"inv-info-cell",children:[g,n.jsx("span",{className:"inv-field-value",children:e.customerName})]}),t[41]=e.customerName,t[42]=N):N=t[42];let G;t[43]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsxs("span",{className:"inv-field-label",children:["Ticket No. ",n.jsx("span",{className:"inv-field-label-si",children:"/ ටිකට් අංකය"})]}),t[43]=G):G=t[43];let T;t[44]===Symbol.for("react.memo_cache_sentinel")?(T={fontFamily:"Consolas, monospace"},t[44]=T):T=t[44];let R;t[45]!==e.clearanceNumber?(R=n.jsxs("div",{className:"inv-info-cell",children:[G,n.jsx("span",{className:"inv-field-value",style:T,children:e.clearanceNumber})]}),t[45]=e.clearanceNumber,t[46]=R):R=t[46];let $;t[47]!==e.customerNic?($=e.customerNic&&n.jsxs("div",{className:"inv-info-cell",children:[n.jsxs("span",{className:"inv-field-label",children:["NIC No. ",n.jsx("span",{className:"inv-field-label-si",children:"/ ජා.හැ.අංකය"})]}),n.jsx("span",{className:"inv-field-value",children:e.customerNic})]}),t[47]=e.customerNic,t[48]=$):$=t[48];let z;t[49]!==e.customerPhone?(z=e.customerPhone&&n.jsxs("div",{className:"inv-info-cell",children:[n.jsxs("span",{className:"inv-field-label",children:["Phone ",n.jsx("span",{className:"inv-field-label-si",children:"/ දුරකථනය"})]}),n.jsx("span",{className:"inv-field-value",children:e.customerPhone})]}),t[49]=e.customerPhone,t[50]=z):z=t[50];let D;t[51]===Symbol.for("react.memo_cache_sentinel")?(D=n.jsxs("span",{className:"inv-field-label",children:["Pawn Date ",n.jsx("span",{className:"inv-field-label-si",children:"/ උකස් දිනය"})]}),t[51]=D):D=t[51];let M;t[52]!==e.pawnDate?(M=_t(e.pawnDate),t[52]=e.pawnDate,t[53]=M):M=t[53];let C;t[54]!==M?(C=n.jsxs("div",{className:"inv-info-cell",children:[D,n.jsx("span",{className:"inv-field-value",children:M})]}),t[54]=M,t[55]=C):C=t[55];let Z;t[56]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsxs("span",{className:"inv-field-label",children:["Payment Date ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ දිනය"})]}),t[56]=Z):Z=t[56];let J;t[57]!==e.paymentDate?(J=_t(e.paymentDate),t[57]=e.paymentDate,t[58]=J):J=t[58];let I;t[59]!==J?(I=n.jsxs("div",{className:"inv-info-cell",children:[Z,n.jsx("span",{className:"inv-field-value",children:J})]}),t[59]=J,t[60]=I):I=t[60];let K;t[61]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsxs("span",{className:"inv-field-label",children:["Payment Method ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ ක්‍රමය"})]}),t[61]=K):K=t[61];let q;t[62]!==e.paymentMethod?(q=e.paymentMethod.replace("-"," ").toUpperCase(),t[62]=e.paymentMethod,t[63]=q):q=t[63];let P;t[64]!==q?(P=n.jsxs("div",{className:"inv-info-cell",children:[K,n.jsx("span",{className:"inv-field-value",children:n.jsx("span",{className:"inv-status",children:q})})]}),t[64]=q,t[65]=P):P=t[65];let ae;t[66]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsxs("span",{className:"inv-field-label",children:["Payment Type ",n.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ වර්ගය"})]}),t[66]=ae):ae=t[66];const ee=e.paymentType==="redemption"?"FULL REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let k;t[67]!==ee?(k=n.jsxs("div",{className:"inv-info-cell",children:[ae,n.jsx("span",{className:"inv-field-value",children:n.jsx("span",{className:"inv-status",children:ee})})]}),t[67]=ee,t[68]=k):k=t[68];let d;t[69]!==e.customerAddress?(d=e.customerAddress&&n.jsxs("div",{className:"inv-info-cell full",children:[n.jsxs("span",{className:"inv-field-label",children:["Address ",n.jsx("span",{className:"inv-field-label-si",children:"/ ලිපිනය"})]}),n.jsx("span",{className:"inv-field-value",style:{fontSize:"9pt"},children:e.customerAddress})]}),t[69]=e.customerAddress,t[70]=d):d=t[70];let O;t[71]!==N||t[72]!==R||t[73]!==$||t[74]!==z||t[75]!==C||t[76]!==I||t[77]!==P||t[78]!==k||t[79]!==d?(O=n.jsxs("div",{className:"inv-section",children:[E,n.jsxs("div",{className:"inv-info-grid",children:[N,R,$,z,C,I,P,k,d]})]}),t[71]=N,t[72]=R,t[73]=$,t[74]=z,t[75]=C,t[76]=I,t[77]=P,t[78]=k,t[79]=d,t[80]=O):O=t[80];let F;t[81]===Symbol.for("react.memo_cache_sentinel")?(F=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Pawned Items / උකස් භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"inv-section-title-si",children:"Gold Articles"})]}),t[81]=F):F=t[81];let V,Q;t[82]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("th",{style:{width:"5%"},children:"#"}),Q={width:"42%"},t[82]=V,t[83]=Q):(V=t[82],Q=t[83]);let X,te;t[84]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsxs("th",{style:Q,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),te={width:"13%"},t[84]=X,t[85]=te):(X=t[84],te=t[85]);let U,c;t[86]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsxs("th",{style:te,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),c={width:"15%"},t[86]=U,t[87]=c):(U=t[86],c=t[87]);let oe,fe;t[88]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsxs("th",{style:c,children:["Weight",n.jsx("span",{className:"si",children:"බර"})]}),fe={width:"25%"},t[88]=oe,t[89]=fe):(oe=t[88],fe=t[89]);let de;t[90]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsx("thead",{children:n.jsxs("tr",{children:[V,X,U,oe,n.jsxs("th",{style:fe,children:["Value (Ref.)",n.jsx("span",{className:"si",children:"වටිනාකම"})]})]})}),t[90]=de):de=t[90];let ne;t[91]!==e.items?(ne=e.items.map(an),t[91]=e.items,t[92]=ne):ne=t[92];let se;t[93]!==ne?(se=n.jsx("tbody",{children:ne}),t[93]=ne,t[94]=se):se=t[94];let pe;t[95]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsx("td",{colSpan:4,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total Assessed Value / මුළු ඇස්තමේන්තු වටිනාකම"}),t[95]=pe):pe=t[95];let be;t[96]!==e.items?(be=Ce(e.items.reduce(ln,0)),t[96]=e.items,t[97]=be):be=t[97];let xe;t[98]!==be?(xe=n.jsx("tfoot",{children:n.jsxs("tr",{children:[pe,n.jsx("td",{className:"right",children:be})]})}),t[98]=be,t[99]=xe):xe=t[99];let le;t[100]!==se||t[101]!==xe?(le=n.jsxs("div",{className:"inv-section",children:[F,n.jsxs("table",{className:"inv-table",children:[de,se,xe]})]}),t[100]=se,t[101]=xe,t[102]=le):le=t[102];let ce;t[103]!==e.additionalMonthsInterest||t[104]!==e.daysElapsed||t[105]!==e.firstMonthInterest||t[106]!==e.interestRate||t[107]!==e.principalAmount||t[108]!==e.proratedDailyInterest||t[109]!==e.totalInterest?(ce=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"inv-section",children:[n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Interest Calculation / පොලී ගණනය"}),n.jsx("span",{className:"inv-section-title-si",children:"Interest Breakdown"})]}),e.daysElapsed!=null&&n.jsxs("div",{className:"inv-breakdown-row",children:[n.jsx("span",{className:"l",children:"Days Elapsed / ගත වූ දින"}),n.jsxs("span",{className:"v",children:[e.daysElapsed," days"]})]}),n.jsxs("div",{className:"inv-breakdown-row",children:[n.jsx("span",{className:"l",children:"Interest Rate / පොලී අනුපාතය"}),n.jsxs("span",{className:"v",children:[e.interestRate,"% per month"]})]}),n.jsxs("div",{className:"inv-breakdown-row",children:[n.jsx("span",{className:"l",children:"Principal / ණය මුදල"}),n.jsx("span",{className:"v",children:Ce(e.principalAmount)})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&n.jsxs("div",{className:"inv-breakdown-row sub",children:[n.jsxs("span",{className:"l",children:["First Month Interest (",e.interestRate,"%)"]}),n.jsx("span",{className:"v",children:Ce(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&n.jsxs("div",{className:"inv-breakdown-row sub",children:[n.jsx("span",{className:"l",children:"Additional Months Interest"}),n.jsx("span",{className:"v",children:Ce(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&n.jsxs("div",{className:"inv-breakdown-row sub",children:[n.jsx("span",{className:"l",children:"Pro-rated Daily Interest"}),n.jsx("span",{className:"v",children:Ce(e.proratedDailyInterest)})]})]}),t[103]=e.additionalMonthsInterest,t[104]=e.daysElapsed,t[105]=e.firstMonthInterest,t[106]=e.interestRate,t[107]=e.principalAmount,t[108]=e.proratedDailyInterest,t[109]=e.totalInterest,t[110]=ce):ce=t[110];let ge;t[111]===Symbol.for("react.memo_cache_sentinel")?(ge=n.jsxs("div",{className:"inv-section-header",children:[n.jsx("span",{className:"inv-section-title-en",children:"Payment Summary / ගෙවීම් සාරාංශය"}),n.jsx("span",{className:"inv-section-title-si",children:"Financial Details"})]}),t[111]=ge):ge=t[111];let re;t[112]===Symbol.for("react.memo_cache_sentinel")?(re=n.jsxs("span",{className:"inv-totals-label",children:["Principal Amount ",n.jsx("span",{className:"si",children:"ණය මුදල"})]}),t[112]=re):re=t[112];let L;t[113]!==e.principalAmount?(L=Ce(e.principalAmount),t[113]=e.principalAmount,t[114]=L):L=t[114];let Ne;t[115]!==L?(Ne=n.jsxs("div",{className:"inv-totals-row",children:[re,n.jsx("span",{className:"inv-totals-value",children:L})]}),t[115]=L,t[116]=Ne):Ne=t[116];let Y;t[117]!==e.totalInterest?(Y=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Total Interest ",n.jsx("span",{className:"si",children:"මුළු පොලිය"})]}),n.jsx("span",{className:"inv-totals-value",children:Ce(e.totalInterest)})]}),t[117]=e.totalInterest,t[118]=Y):Y=t[118];let he;t[119]!==e.previousPayments?(he=e.previousPayments!=null&&e.previousPayments>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Previous Payments ",n.jsx("span",{className:"si",children:"පෙර ගෙවීම්"})]}),n.jsxs("span",{className:"inv-totals-value",children:["(",Ce(e.previousPayments),")"]})]}),t[119]=e.previousPayments,t[120]=he):he=t[120];let ie;t[121]!==e.totalPayable?(ie=e.totalPayable!=null&&n.jsxs("div",{className:"inv-totals-row highlight",children:[n.jsxs("span",{className:"inv-totals-label",children:["Total Due ",n.jsx("span",{className:"si",children:"ගෙවිය යුතු මුළු මුදල"})]}),n.jsx("span",{className:"inv-totals-value",style:{fontSize:"13pt"},children:Ce(e.totalPayable)})]}),t[121]=e.totalPayable,t[122]=ie):ie=t[122];let ze;t[123]===Symbol.for("react.memo_cache_sentinel")?(ze=n.jsxs("span",{className:"inv-totals-label",children:["Amount Paid ",n.jsx("span",{className:"si",children:"ගෙවූ මුදල"})]}),t[123]=ze):ze=t[123];let De;t[124]===Symbol.for("react.memo_cache_sentinel")?(De={fontSize:"13pt"},t[124]=De):De=t[124];let Ie;t[125]!==e.paymentAmount?(Ie=Ce(e.paymentAmount),t[125]=e.paymentAmount,t[126]=Ie):Ie=t[126];let Pe;t[127]!==Ie?(Pe=n.jsxs("div",{className:"inv-totals-row balance",children:[ze,n.jsx("span",{className:"inv-totals-value",style:De,children:Ie})]}),t[127]=Ie,t[128]=Pe):Pe=t[128];let je;t[129]!==e.remainingBalance?(je=e.remainingBalance!=null&&e.remainingBalance>0&&n.jsxs("div",{className:"inv-totals-row",children:[n.jsxs("span",{className:"inv-totals-label",children:["Remaining Balance ",n.jsx("span",{className:"si",children:"ශේෂ මුදල"})]}),n.jsx("span",{className:"inv-totals-value",children:Ce(e.remainingBalance)})]}),t[129]=e.remainingBalance,t[130]=je):je=t[130];let ye;t[131]!==Ne||t[132]!==Y||t[133]!==he||t[134]!==ie||t[135]!==Pe||t[136]!==je?(ye=n.jsxs("div",{className:"inv-section",children:[ge,Ne,Y,he,ie,Pe,je]}),t[131]=Ne,t[132]=Y,t[133]=he,t[134]=ie,t[135]=Pe,t[136]=je,t[137]=ye):ye=t[137];let we;t[138]!==e.notes?(we=e.notes&&n.jsxs("div",{className:"inv-box",children:[n.jsx("div",{className:"inv-box-cap",children:"Notes / සටහන"}),n.jsx("p",{children:e.notes})]}),t[138]=e.notes,t[139]=we):we=t[139];let Ee;t[140]===Symbol.for("react.memo_cache_sentinel")?(Ee=n.jsx("div",{className:"inv-sig-space"}),t[140]=Ee):Ee=t[140];let ke;t[141]===Symbol.for("react.memo_cache_sentinel")?(ke=n.jsxs("div",{className:"inv-sig-box",children:[Ee,n.jsxs("div",{className:"inv-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),t[141]=ke):ke=t[141];let _e;t[142]===Symbol.for("react.memo_cache_sentinel")?(_e=n.jsx("div",{className:"inv-sig-space"}),t[142]=_e):_e=t[142];let Ae;t[143]===Symbol.for("react.memo_cache_sentinel")?(Ae=n.jsxs("div",{className:"inv-sig-row",children:[ke,n.jsxs("div",{className:"inv-sig-box",children:[_e,n.jsxs("div",{className:"inv-sig-label",children:["Authorized / ",n.jsx("span",{className:"si",children:"අනුමත නිලධාරී"})]})]})]}),t[143]=Ae):Ae=t[143];let Se;t[144]===Symbol.for("react.memo_cache_sentinel")?(Se=new Date().toLocaleString("en-GB"),t[144]=Se):Se=t[144];let ve;t[145]!==e.clearanceNumber?(ve=n.jsxs("div",{className:"inv-footer",children:["Printed: ",Se,"  |  ",e.clearanceNumber,"  |  Computer-generated document."]}),t[145]=e.clearanceNumber,t[146]=ve):ve=t[146];let Re;return t[147]!==x||t[148]!==h||t[149]!==O||t[150]!==le||t[151]!==ce||t[152]!==ye||t[153]!==we||t[154]!==ve?(Re=n.jsxs("div",{className:"inv-root",children:[o,x,h,O,le,ce,ye,we,Ae,ve]}),t[147]=x,t[148]=h,t[149]=O,t[150]=le,t[151]=ce,t[152]=ye,t[153]=we,t[154]=ve,t[155]=Re):Re=t[155],Re}function ln(l,t){return l+t.total}function an(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",style:{color:"#888"},children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("strong",{children:l.productName}),(l.metalType||l.karat)&&n.jsxs("div",{className:"inv-item-sub",children:[l.metalType?.toUpperCase(),l.karat?` · ${l.karat}`:""]})]}),n.jsx("td",{className:"center",children:l.karat||"—"}),n.jsx("td",{className:"center",children:l.metalWeight?`${Number(l.metalWeight).toFixed(3)} g`:"—"}),n.jsx("td",{className:"right",style:{fontWeight:600},children:Ce(l.total)})]},t)}function on(l){l.target.style.display="none"}function Je(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Tt(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const zt={redemption:{labelEn:"REDEMPTION",labelSi:"මුදා ගැනීම",icon:"🔓"},interest:{labelEn:"INTEREST PAYMENT",labelSi:"පොලී ගෙවීම",icon:"💰"},partial:{labelEn:"PARTIAL PAYMENT",labelSi:"අර්ධ ගෙවීම",icon:"💳"}},cn={cash:"මුදල්",card:"කාඩ්","bank-transfer":"බැංකු",cheque:"චෙක්",other:"වෙනත්"};function bn(l){const t=mt.c(128),{data:e,company:s}=l,a=zt[e.paymentType]||zt.partial,ue=cn[e.paymentMethod]||e.paymentMethod;let i;t[0]===Symbol.for("react.memo_cache_sentinel")?(i=new Date().toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),t[0]=i):i=t[0];const o=i;let H,B;t[1]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700;900&display=swap');

        @media print {
          @page { size: 80mm auto; margin: 0; }
          body { margin: 0; padding: 0; background: white; }
          .pos-root { margin: 0 !important; box-shadow: none !important; }
          .no-print { display: none !important; }
        }

        /* ── ROOT ── */
        .pos-root {
          width: 76mm;
          margin: 16px auto;
          padding: 0;
          background: #fff;
          font-family: 'Noto Sans Sinhala', 'Noto Sans', Arial, sans-serif;
          font-size: 9pt;
          color: #111;
          line-height: 1.5;
          box-sizing: border-box;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }

        /* ── TOP WAVE / TEAR ── */
        .pos-tear-top {
          width: 100%;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0px, #fff 6px,
            transparent 6px, transparent 10px
          );
          border-bottom: 1px dashed #999;
        }

        /* ── HEADER ── */
        .pos-header {
          text-align: center;
          padding: 4mm 4mm 3mm;
          border-bottom: 1.5px solid #111;
          position: relative;
        }
        .pos-logo-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 1mm;
        }
        .pos-company-si {
          font-size: 16pt;
          font-weight: 900;
          color: #111;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .pos-company-en {
          font-size: 7.5pt;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 1mm;
        }
        .pos-contact {
          font-size: 7pt;
          color: #666;
          line-height: 1.6;
        }

        /* ── TITLE BAND ── */
        .pos-title-band {
          background: #fff;
          color: #111;
          text-align: center;
          padding: 2.5mm 3mm;
          border-bottom: 1.5px solid #111;
        }
        .pos-title-icon {
          font-size: 14pt;
          display: block;
          margin-bottom: 0.5mm;
        }
        .pos-title-en {
          font-size: 10pt;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          color: #111;
        }
        .pos-title-si {
          font-size: 9pt;
          font-weight: 600;
          color: #555;
          display: block;
          margin-top: 0.5mm;
        }

        /* ── TICKET BADGE ── */
        .pos-ticket-badge {
          text-align: center;
          padding: 2mm 3mm;
          border-bottom: 1px dashed #999;
        }
        .pos-ticket-label {
          font-size: 7pt;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pos-ticket-no {
          font-size: 14pt;
          font-weight: 900;
          color: #111;
          letter-spacing: 1px;
          font-family: 'Courier New', monospace;
        }

        /* ── SECTION ── */
        .pos-section {
          border-bottom: 1px dashed #bbb;
          padding: 2mm 4mm;
        }
        .pos-section-cap {
          font-size: 7pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          margin-bottom: 1.5mm;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .pos-section-cap::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: #ccc;
          margin-left: 3px;
        }

        /* ── INFO ROWS ── */
        .pos-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.8mm 0;
          font-size: 8.5pt;
        }
        .pos-row .lbl {
          color: #555;
          font-size: 8pt;
        }
        .pos-row .lbl .si {
          display: block;
          font-size: 7pt;
          color: #aaa;
        }
        .pos-row .val {
          font-weight: 600;
          text-align: right;
          color: #111;
        }

        /* ── ITEMS ── */
        .pos-item {
          padding: 1.5mm 0;
          border-bottom: 0.5px dotted #ddd;
        }
        .pos-item:last-child { border-bottom: none; }
        .pos-item-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5mm;
          height: 5mm;
          background: #fff;
          color: #111;
          font-size: 7pt;
          font-weight: 700;
          border: 1.5px solid #111;
          border-radius: 50%;
          margin-right: 2mm;
          flex-shrink: 0;
        }
        .pos-item-name {
          font-size: 9pt;
          font-weight: 700;
          color: #111;
        }
        .pos-item-meta {
          font-size: 7.5pt;
          color: #777;
          padding-left: 7mm;
          margin-top: 0.3mm;
        }

        /* ── INTEREST BREAKDOWN ── */
        .pos-calc-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5mm 0;
          font-size: 8pt;
          color: #555;
        }
        .pos-calc-row.sub {
          padding-left: 4mm;
          font-size: 7.5pt;
          color: #888;
        }
        .pos-calc-row .v { font-weight: 500; color: #333; }

        /* ── TOTAL BAND ── */
        .pos-total-band {
          background: #fff;
          color: #111;
          padding: 3mm 4mm;
          text-align: center;
          border-top: 1.5px solid #111;
          border-bottom: 1.5px solid #111;
        }
        .pos-total-label-si {
          font-size: 8pt;
          color: #666;
          display: block;
          margin-bottom: 0.5mm;
        }
        .pos-total-label-en {
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #555;
          display: block;
        }
        .pos-total-amount {
          font-size: 16pt;
          font-weight: 900;
          color: #111;
          display: block;
          letter-spacing: 0.5px;
          margin-top: 1mm;
          font-family: 'Courier New', monospace;
        }

        /* ── BALANCE ── */
        .pos-balance {
          text-align: center;
          padding: 2mm 4mm;
          border-bottom: 1px dashed #bbb;
          font-size: 8.5pt;
        }
        .pos-balance .lbl { color: #888; font-size: 7.5pt; }
        .pos-balance .val { font-weight: 700; font-size: 10pt; color: #111; }

        /* ── METHOD BADGE ── */
        .pos-method {
          text-align: center;
          padding: 2mm 4mm;
          border-bottom: 1px dashed #bbb;
        }
        .pos-method-badge {
          display: inline-block;
          border: 1.5px solid #111;
          padding: 1mm 5mm;
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .pos-method-si {
          font-size: 7.5pt;
          color: #888;
          margin-top: 0.5mm;
        }

        /* ── FOOTER ── */
        .pos-footer {
          text-align: center;
          padding: 3mm 4mm 2mm;
          border-top: 1px dashed #999;
        }
        .pos-footer-si {
          font-size: 10pt;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.5mm;
        }
        .pos-footer-en {
          font-size: 8pt;
          color: #555;
          margin-bottom: 1mm;
        }
        .pos-footer-contact {
          font-size: 7.5pt;
          color: #888;
          line-height: 1.6;
        }
        .pos-timestamp {
          font-size: 7pt;
          color: #bbb;
          margin-top: 2mm;
          font-family: 'Courier New', monospace;
        }

        /* ── BOTTOM TEAR ── */
        .pos-tear-bottom {
          width: 100%;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0px, #fff 6px,
            transparent 6px, transparent 10px
          );
          border-top: 1px dashed #999;
        }
      `}),B=n.jsx("div",{className:"pos-tear-top"}),t[1]=H,t[2]=B):(H=t[1],B=t[2]);let y;t[3]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsxs("div",{className:"pos-logo-row",children:[n.jsx("img",{src:"/logo.jpg",alt:"",style:{width:"28px",height:"28px",objectFit:"contain",borderRadius:"3px"},onError:mn}),n.jsx("div",{className:"pos-company-si",children:"ඔනෙල්කා ජුවලරි"})]}),t[3]=y):y=t[3];const me=s?.name||"Onelka Jewellery";let A;t[4]!==me?(A=n.jsx("div",{className:"pos-company-en",children:me}),t[4]=me,t[5]=A):A=t[5];const j=s?.address||"Makandura, Matara";let W;t[6]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx("br",{}),t[6]=W):W=t[6];const p=s?.phone||"0770400789";let v;t[7]!==j||t[8]!==p?(v=n.jsxs("div",{className:"pos-contact",children:[j,W,"දු.ල. / Tel: ",p]}),t[7]=j,t[8]=p,t[9]=v):v=t[9];let u;t[10]!==v||t[11]!==A?(u=n.jsxs("div",{className:"pos-header",children:[y,A,v]}),t[10]=v,t[11]=A,t[12]=u):u=t[12];let r;t[13]!==a.labelEn?(r=n.jsx("span",{className:"pos-title-en",children:a.labelEn}),t[13]=a.labelEn,t[14]=r):r=t[14];let f;t[15]!==a.labelSi?(f=n.jsx("span",{className:"pos-title-si",children:a.labelSi}),t[15]=a.labelSi,t[16]=f):f=t[16];let w;t[17]!==r||t[18]!==f?(w=n.jsxs("div",{className:"pos-title-band",children:[r,f]}),t[17]=r,t[18]=f,t[19]=w):w=t[19];let _;t[20]===Symbol.for("react.memo_cache_sentinel")?(_=n.jsx("div",{className:"pos-ticket-label",children:"ටිකට් අංකය / Ticket No."}),t[20]=_):_=t[20];let S;t[21]!==e.clearanceNumber?(S=n.jsxs("div",{className:"pos-ticket-badge",children:[_,n.jsx("div",{className:"pos-ticket-no",children:e.clearanceNumber})]}),t[21]=e.clearanceNumber,t[22]=S):S=t[22];let x;t[23]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsx("div",{className:"pos-section-cap",children:"දිනයන් / Dates"}),t[23]=x):x=t[23];let b;t[24]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsxs("span",{className:"lbl",children:["උකස් දිනය",n.jsx("span",{className:"si",children:"Pawn Date"})]}),t[24]=b):b=t[24];let m;t[25]!==e.pawnDate?(m=Tt(e.pawnDate),t[25]=e.pawnDate,t[26]=m):m=t[26];let h;t[27]!==m?(h=n.jsxs("div",{className:"pos-row",children:[b,n.jsx("span",{className:"val",children:m})]}),t[27]=m,t[28]=h):h=t[28];let E;t[29]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsxs("span",{className:"lbl",children:["ගෙවීමේ දිනය",n.jsx("span",{className:"si",children:"Payment Date"})]}),t[29]=E):E=t[29];let g;t[30]!==e.paymentDate?(g=Tt(e.paymentDate),t[30]=e.paymentDate,t[31]=g):g=t[31];let N;t[32]!==g?(N=n.jsxs("div",{className:"pos-row",children:[E,n.jsx("span",{className:"val",children:g})]}),t[32]=g,t[33]=N):N=t[33];let G;t[34]!==e.daysElapsed?(G=e.daysElapsed!=null&&e.daysElapsed>0&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"lbl",children:["ගත වූ දින",n.jsx("span",{className:"si",children:"Days Elapsed"})]}),n.jsxs("span",{className:"val",children:[e.daysElapsed," දින"]})]}),t[34]=e.daysElapsed,t[35]=G):G=t[35];let T;t[36]!==h||t[37]!==N||t[38]!==G?(T=n.jsxs("div",{className:"pos-section",children:[x,h,N,G]}),t[36]=h,t[37]=N,t[38]=G,t[39]=T):T=t[39];let R;t[40]===Symbol.for("react.memo_cache_sentinel")?(R=n.jsx("div",{className:"pos-section-cap",children:"ගනුදෙනුකරු / Customer"}),t[40]=R):R=t[40];let $;t[41]===Symbol.for("react.memo_cache_sentinel")?($=n.jsxs("span",{className:"lbl",children:["නම",n.jsx("span",{className:"si",children:"Name"})]}),t[41]=$):$=t[41];let z;t[42]!==e.customerName?(z=n.jsxs("div",{className:"pos-row",children:[$,n.jsx("span",{className:"val",children:e.customerName})]}),t[42]=e.customerName,t[43]=z):z=t[43];let D;t[44]!==e.customerNic?(D=e.customerNic&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"lbl",children:["ජා.හැ.අංකය",n.jsx("span",{className:"si",children:"NIC"})]}),n.jsx("span",{className:"val",children:e.customerNic})]}),t[44]=e.customerNic,t[45]=D):D=t[45];let M;t[46]!==e.customerPhone?(M=e.customerPhone&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"lbl",children:["දුරකථනය",n.jsx("span",{className:"si",children:"Phone"})]}),n.jsx("span",{className:"val",children:e.customerPhone})]}),t[46]=e.customerPhone,t[47]=M):M=t[47];let C;t[48]!==z||t[49]!==D||t[50]!==M?(C=n.jsxs("div",{className:"pos-section",children:[R,z,D,M]}),t[48]=z,t[49]=D,t[50]=M,t[51]=C):C=t[51];const Z=e.paymentType==="redemption"?"ආපසු ලබා දුන් භාණ්ඩ / Items Returned":"උකස් භාණ්ඩ / Pawned Items";let J;t[52]!==Z?(J=n.jsx("div",{className:"pos-section-cap",children:Z}),t[52]=Z,t[53]=J):J=t[53];let I;t[54]!==e.items?(I=e.items.map(rn),t[54]=e.items,t[55]=I):I=t[55];let K;t[56]!==J||t[57]!==I?(K=n.jsxs("div",{className:"pos-section",children:[J,I]}),t[56]=J,t[57]=I,t[58]=K):K=t[58];let q;t[59]!==e.additionalMonthsInterest||t[60]!==e.firstMonthInterest||t[61]!==e.interestRate||t[62]!==e.principalAmount||t[63]!==e.proratedDailyInterest||t[64]!==e.totalInterest?(q=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"pos-section",children:[n.jsx("div",{className:"pos-section-cap",children:"පොලී ගණනය / Interest"}),n.jsxs("div",{className:"pos-calc-row",children:[n.jsx("span",{children:"ණය මුදල / Principal"}),n.jsx("span",{className:"v",children:Je(e.principalAmount)})]}),n.jsxs("div",{className:"pos-calc-row",children:[n.jsx("span",{children:"අනුපාතය / Rate"}),n.jsxs("span",{className:"v",children:[e.interestRate,"% / මාසය"]})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&n.jsxs("div",{className:"pos-calc-row sub",children:[n.jsx("span",{children:"1 වන මාසය"}),n.jsx("span",{className:"v",children:Je(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&n.jsxs("div",{className:"pos-calc-row sub",children:[n.jsx("span",{children:"අමතර මාස"}),n.jsx("span",{className:"v",children:Je(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&n.jsxs("div",{className:"pos-calc-row sub",children:[n.jsx("span",{children:"දෛනික පොලිය"}),n.jsx("span",{className:"v",children:Je(e.proratedDailyInterest)})]}),n.jsxs("div",{className:"pos-calc-row",style:{borderTop:"0.5px dashed #ccc",paddingTop:"1mm",marginTop:"1mm",fontWeight:700,color:"#111"},children:[n.jsx("span",{children:"මුළු පොලිය / Total Interest"}),n.jsx("span",{className:"v",children:Je(e.totalInterest)})]})]}),t[59]=e.additionalMonthsInterest,t[60]=e.firstMonthInterest,t[61]=e.interestRate,t[62]=e.principalAmount,t[63]=e.proratedDailyInterest,t[64]=e.totalInterest,t[65]=q):q=t[65];let P;t[66]===Symbol.for("react.memo_cache_sentinel")?(P=n.jsx("div",{className:"pos-section-cap",children:"ගෙවීම් සාරාංශය / Summary"}),t[66]=P):P=t[66];let ae;t[67]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("span",{children:"ණය මුදල / Principal"}),t[67]=ae):ae=t[67];let ee;t[68]!==e.principalAmount?(ee=Je(e.principalAmount),t[68]=e.principalAmount,t[69]=ee):ee=t[69];let k;t[70]!==ee?(k=n.jsxs("div",{className:"pos-calc-row",children:[ae,n.jsx("span",{className:"v",children:ee})]}),t[70]=ee,t[71]=k):k=t[71];let d;t[72]!==e.totalInterest?(d=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"pos-calc-row",children:[n.jsx("span",{children:"පොලිය / Interest"}),n.jsx("span",{className:"v",children:Je(e.totalInterest)})]}),t[72]=e.totalInterest,t[73]=d):d=t[73];let O;t[74]!==e.previousPayments?(O=e.previousPayments!=null&&e.previousPayments>0&&n.jsxs("div",{className:"pos-calc-row",children:[n.jsx("span",{children:"පෙර ගෙවීම් / Prev. Paid"}),n.jsxs("span",{className:"v",children:["(",Je(e.previousPayments),")"]})]}),t[74]=e.previousPayments,t[75]=O):O=t[75];let F;t[76]!==e.totalPayable?(F=e.totalPayable!=null&&n.jsxs("div",{className:"pos-calc-row",style:{fontWeight:700,color:"#111",borderTop:"0.5px dashed #ccc",paddingTop:"1mm",marginTop:"1mm"},children:[n.jsx("span",{children:"ගෙවිය යුතු / Total Due"}),n.jsx("span",{className:"v",children:Je(e.totalPayable)})]}),t[76]=e.totalPayable,t[77]=F):F=t[77];let V;t[78]!==k||t[79]!==d||t[80]!==O||t[81]!==F?(V=n.jsxs("div",{className:"pos-section",children:[P,k,d,O,F]}),t[78]=k,t[79]=d,t[80]=O,t[81]=F,t[82]=V):V=t[82];let Q,X;t[83]===Symbol.for("react.memo_cache_sentinel")?(Q=n.jsx("span",{className:"pos-total-label-si",children:"ගෙවූ මුදල"}),X=n.jsx("span",{className:"pos-total-label-en",children:"Amount Paid"}),t[83]=Q,t[84]=X):(Q=t[83],X=t[84]);let te;t[85]!==e.paymentAmount?(te=Je(e.paymentAmount),t[85]=e.paymentAmount,t[86]=te):te=t[86];let U;t[87]!==te?(U=n.jsxs("div",{className:"pos-total-band",children:[Q,X,n.jsx("span",{className:"pos-total-amount",children:te})]}),t[87]=te,t[88]=U):U=t[88];let c;t[89]!==e.remainingBalance?(c=e.remainingBalance!=null&&e.remainingBalance>0&&n.jsxs("div",{className:"pos-balance",children:[n.jsx("div",{className:"lbl",children:"ශේෂ මුදල / Remaining Balance"}),n.jsx("div",{className:"val",children:Je(e.remainingBalance)})]}),t[89]=e.remainingBalance,t[90]=c):c=t[90];let oe;t[91]!==e.paymentMethod?(oe=e.paymentMethod.replace("-"," ").toUpperCase(),t[91]=e.paymentMethod,t[92]=oe):oe=t[92];let fe;t[93]!==oe?(fe=n.jsx("div",{className:"pos-method-badge",children:oe}),t[93]=oe,t[94]=fe):fe=t[94];let de;t[95]!==ue?(de=n.jsxs("div",{className:"pos-method-si",children:[ue," මගින් ගෙවන ලදී"]}),t[95]=ue,t[96]=de):de=t[96];let ne;t[97]!==fe||t[98]!==de?(ne=n.jsxs("div",{className:"pos-method",children:[fe,de]}),t[97]=fe,t[98]=de,t[99]=ne):ne=t[99];let se;t[100]!==e.notes?(se=e.notes&&n.jsxs("div",{className:"pos-section",style:{fontSize:"8pt",color:"#555"},children:[n.jsx("div",{className:"pos-section-cap",children:"සටහන / Notes"}),e.notes]}),t[100]=e.notes,t[101]=se):se=t[101];let pe,be;t[102]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsx("div",{className:"pos-footer-si",children:"ස්තූතියි! 🙏"}),be=n.jsx("div",{className:"pos-footer-en",children:"Thank you for your patronage"}),t[102]=pe,t[103]=be):(pe=t[102],be=t[103]);const xe=s?.name||"Onelka Jewellery";let le;t[104]===Symbol.for("react.memo_cache_sentinel")?(le=n.jsx("br",{}),t[104]=le):le=t[104];const ce=s?.address||"Makandura, Matara";let ge;t[105]===Symbol.for("react.memo_cache_sentinel")?(ge=n.jsx("br",{}),t[105]=ge):ge=t[105];const re=s?.phone||"0770400789";let L;t[106]!==xe||t[107]!==ce||t[108]!==re?(L=n.jsxs("div",{className:"pos-footer-contact",children:[xe,le,ce,ge,re]}),t[106]=xe,t[107]=ce,t[108]=re,t[109]=L):L=t[109];let Ne;t[110]===Symbol.for("react.memo_cache_sentinel")?(Ne=n.jsx("div",{className:"pos-timestamp",children:o}),t[110]=Ne):Ne=t[110];let Y;t[111]!==L?(Y=n.jsxs("div",{className:"pos-footer",children:[pe,be,L,Ne]}),t[111]=L,t[112]=Y):Y=t[112];let he;t[113]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsx("div",{className:"pos-tear-bottom"}),t[113]=he):he=t[113];let ie;return t[114]!==u||t[115]!==w||t[116]!==S||t[117]!==T||t[118]!==C||t[119]!==K||t[120]!==q||t[121]!==V||t[122]!==U||t[123]!==c||t[124]!==ne||t[125]!==se||t[126]!==Y?(ie=n.jsxs("div",{className:"pos-root",children:[H,B,u,w,S,T,C,K,q,V,U,c,ne,se,Y,he]}),t[114]=u,t[115]=w,t[116]=S,t[117]=T,t[118]=C,t[119]=K,t[120]=q,t[121]=V,t[122]=U,t[123]=c,t[124]=ne,t[125]=se,t[126]=Y,t[127]=ie):ie=t[127],ie}function rn(l,t){return n.jsxs("div",{className:"pos-item",children:[n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0"},children:[n.jsx("span",{className:"pos-item-num",children:t+1}),n.jsx("span",{className:"pos-item-name",children:l.productName})]}),(l.karat||l.metalWeight||l.metalType)&&n.jsx("div",{className:"pos-item-meta",children:[l.karat,l.metalType?.toUpperCase(),l.metalWeight?`${l.metalWeight}g`:null].filter(Boolean).join(" · ")})]},t)}function mn(l){l.target.style.display="none"}export{Pt as P,Bt as a,fn as b,bn as c,xn as d,qt as e};
