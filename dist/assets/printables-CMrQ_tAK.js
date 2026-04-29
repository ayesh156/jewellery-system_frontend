import{r as zt,c as pt,j as s}from"./vendor-react-c8iXu-O6.js";import{K as dt,f as Ie,l as tt}from"./pages-invoices-JmA9Drip.js";import{e as Pt}from"./pages-misc-BwJK4sq9.js";const kt={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},At=zt.forwardRef((l,t)=>{const e=pt.c(170),{invoice:n,customer:i,company:we}=l,a=we===void 0?kt:we;let o,Q,B,y,le,g,I,V,N,p;if(e[0]!==a.address||e[1]!==a.city||e[2]!==a.email||e[3]!==a.name||e[4]!==a.phone||e[5]!==a.phone2||e[6]!==i?.address||e[7]!==i?.phone||e[8]!==n.customerAddress||e[9]!==n.customerName||e[10]!==n.customerPhone||e[11]!==n.dueDate||e[12]!==n.invoiceNumber||e[13]!==n.issueDate||e[14]!==n.items||e[15]!==n.paymentMethod||e[16]!==n.status||e[17]!==t){const Y=n.items.reduce(Et,0);g=t,I="inv-root",e[28]===Symbol.for("react.memo_cache_sentinel")?(V=s.jsx("style",{children:`
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
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;
          }
          .inv-header-left { flex: 1; }
          .inv-header-right { text-align: right; font-size: 8pt; color: #333; min-width: 44mm; }
          .inv-company-sinhala-large {
            font-size: 20pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0 0 0.5mm;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .inv-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .inv-company-contact { font-size: 7.5pt; color: #444; line-height: 1.6; margin-top: 1mm; }
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
        `}),e[28]=V):V=e[28];let q;e[29]===Symbol.for("react.memo_cache_sentinel")?(q={display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"1mm"},e[29]=q):q=e[29];let $,H,F;e[30]===Symbol.for("react.memo_cache_sentinel")?($=s.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"40px",height:"40px",objectFit:"contain",borderRadius:"3px",marginTop:"1mm",flexShrink:0},onError:Rt}),H={flex:1},F=s.jsx("div",{className:"inv-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),e[30]=$,e[31]=H,e[32]=F):($=e[30],H=e[31],F=e[32]);let P;e[33]!==a.name?(P=s.jsxs("div",{style:q,children:[$,s.jsxs("div",{style:H,children:[F,s.jsx("div",{className:"inv-company-name",children:a.name})]})]}),e[33]=a.name,e[34]=P):P=e[34];let X;e[35]===Symbol.for("react.memo_cache_sentinel")?(X=s.jsx("br",{}),e[35]=X):X=e[35];const ae=a.phone2?` / ${a.phone2}`:"";let L;e[36]===Symbol.for("react.memo_cache_sentinel")?(L=s.jsx("br",{}),e[36]=L):L=e[36];let R;e[37]!==a.address||e[38]!==a.city||e[39]!==a.email||e[40]!==a.phone||e[41]!==ae?(R=s.jsxs("div",{className:"inv-company-contact",children:[a.address,", ",a.city,X,"Tel: ",a.phone,ae,L,a.email]}),e[37]=a.address,e[38]=a.city,e[39]=a.email,e[40]=a.phone,e[41]=ae,e[42]=R):R=e[42];let M;e[43]!==P||e[44]!==R?(M=s.jsxs("div",{className:"inv-header-left",children:[P,R]}),e[43]=P,e[44]=R,e[45]=M):M=e[45];let C;e[46]===Symbol.for("react.memo_cache_sentinel")?(C=s.jsx("div",{className:"inv-form-label",children:"Form No. / පෝරම අංකය"}),e[46]=C):C=e[46];let v;e[47]!==n.invoiceNumber?(v=s.jsx("div",{className:"inv-form-no",children:n.invoiceNumber}),e[47]=n.invoiceNumber,e[48]=v):v=e[48];let z;e[49]===Symbol.for("react.memo_cache_sentinel")?(z=s.jsxs("div",{style:{marginTop:"2mm"},children:[s.jsx("div",{className:"inv-form-label",children:"Branch / ශාඛාව"}),s.jsx("div",{className:"inv-form-no",children:"Head Office"})]}),e[49]=z):z=e[49];let J;e[50]!==v?(J=s.jsxs("div",{className:"inv-header-right",children:[C,v,z]}),e[50]=v,e[51]=J):J=e[51],e[52]!==M||e[53]!==J?(N=s.jsxs("div",{className:"inv-header",children:[M,J]}),e[52]=M,e[53]=J,e[54]=N):N=e[54],e[55]===Symbol.for("react.memo_cache_sentinel")?(p=s.jsxs("div",{className:"inv-title-bar",children:[s.jsx("div",{className:"inv-title-en",children:"INVOICE"}),s.jsx("div",{className:"inv-title-si",children:"ඉන්වොයිස්"})]}),e[55]=p):p=e[55];let ie;e[56]===Symbol.for("react.memo_cache_sentinel")?(ie=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Bill To & Invoice Details"}),s.jsx("span",{className:"inv-section-title-si",children:"ගනුදෙනුකරු සහ ඉන්වොයිස් විස්තර"})]}),e[56]=ie):ie=e[56];let Z;e[57]===Symbol.for("react.memo_cache_sentinel")?(Z=s.jsxs("span",{className:"inv-field-label",children:["Customer Name ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[57]=Z):Z=e[57];let O;e[58]!==n.customerName?(O=s.jsxs("div",{className:"inv-info-cell",children:[Z,s.jsx("span",{className:"inv-field-value",children:n.customerName})]}),e[58]=n.customerName,e[59]=O):O=e[59];let u;e[60]===Symbol.for("react.memo_cache_sentinel")?(u=s.jsxs("span",{className:"inv-field-label",children:["Invoice Date ",s.jsx("span",{className:"inv-field-label-si",children:"/ ඉන්වොයිස් දිනය"})]}),e[60]=u):u=e[60];let ee;e[61]!==n.issueDate?(ee=dt(n.issueDate),e[61]=n.issueDate,e[62]=ee):ee=e[62];let ce;e[63]!==ee?(ce=s.jsxs("div",{className:"inv-info-cell",children:[u,s.jsx("span",{className:"inv-field-value",children:ee})]}),e[63]=ee,e[64]=ce):ce=e[64];let re;e[65]===Symbol.for("react.memo_cache_sentinel")?(re=s.jsxs("span",{className:"inv-field-label",children:["Phone ",s.jsx("span",{className:"inv-field-label-si",children:"/ දුරකථනය"})]}),e[65]=re):re=e[65];const fe=n.customerPhone||i?.phone||"—";let me;e[66]!==fe?(me=s.jsxs("div",{className:"inv-info-cell",children:[re,s.jsx("span",{className:"inv-field-value",children:fe})]}),e[66]=fe,e[67]=me):me=e[67];let de;e[68]===Symbol.for("react.memo_cache_sentinel")?(de=s.jsxs("span",{className:"inv-field-label",children:["Due Date ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවිය යුතු දිනය"})]}),e[68]=de):de=e[68];let pe;e[69]!==n.dueDate?(pe=n.dueDate?dt(n.dueDate):"—",e[69]=n.dueDate,e[70]=pe):pe=e[70];let xe;e[71]!==pe?(xe=s.jsxs("div",{className:"inv-info-cell",children:[de,s.jsx("span",{className:"inv-field-value",children:pe})]}),e[71]=pe,e[72]=xe):xe=e[72];let ge;e[73]===Symbol.for("react.memo_cache_sentinel")?(ge=s.jsxs("span",{className:"inv-field-label",children:["Status ",s.jsx("span",{className:"inv-field-label-si",children:"/ තත්ත්වය"})]}),e[73]=ge):ge=e[73];let be;e[74]!==n.status?(be=n.status.toUpperCase(),e[74]=n.status,e[75]=be):be=e[75];let te;e[76]!==be?(te=s.jsxs("div",{className:"inv-info-cell",children:[ge,s.jsx("span",{className:"inv-field-value",children:s.jsx("span",{className:"inv-status",children:be})})]}),e[76]=be,e[77]=te):te=e[77];let oe;e[78]===Symbol.for("react.memo_cache_sentinel")?(oe=s.jsxs("span",{className:"inv-field-label",children:["Payment Method ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ ක්‍රමය"})]}),e[78]=oe):oe=e[78];let he;e[79]!==n.paymentMethod?(he=n.paymentMethod?n.paymentMethod.replace("-"," ").toUpperCase():"—",e[79]=n.paymentMethod,e[80]=he):he=e[80];let se;e[81]!==he?(se=s.jsxs("div",{className:"inv-info-cell",children:[oe,s.jsx("span",{className:"inv-field-value",children:he})]}),e[81]=he,e[82]=se):se=e[82];let G;e[83]!==i?.address||e[84]!==n.customerAddress?(G=(n.customerAddress||i?.address)&&s.jsxs("div",{className:"inv-info-cell full",children:[s.jsxs("span",{className:"inv-field-label",children:["Address ",s.jsx("span",{className:"inv-field-label-si",children:"/ ලිපිනය"})]}),s.jsx("span",{className:"inv-field-value",style:{fontSize:"9pt"},children:n.customerAddress||i?.address})]}),e[83]=i?.address,e[84]=n.customerAddress,e[85]=G):G=e[85],e[86]!==O||e[87]!==ce||e[88]!==me||e[89]!==xe||e[90]!==te||e[91]!==se||e[92]!==G?(o=s.jsxs("div",{className:"inv-section",children:[ie,s.jsxs("div",{className:"inv-info-grid",children:[O,ce,me,xe,te,se,G]})]}),e[86]=O,e[87]=ce,e[88]=me,e[89]=xe,e[90]=te,e[91]=se,e[92]=G,e[93]=o):o=e[93];let Ne;e[94]===Symbol.for("react.memo_cache_sentinel")?(Ne=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Items / භාණ්ඩ විස්තරය"}),s.jsx("span",{className:"inv-section-title-si",children:"Jewellery Items"})]}),e[94]=Ne):Ne=e[94];let ne,ye;e[95]===Symbol.for("react.memo_cache_sentinel")?(ne=s.jsx("th",{style:{width:"5%"},children:"#"}),ye={width:"40%"},e[95]=ne,e[96]=ye):(ne=e[95],ye=e[96]);let je,De;e[97]===Symbol.for("react.memo_cache_sentinel")?(je=s.jsxs("th",{style:ye,children:["Description",s.jsx("span",{className:"si",children:"විස්තරය"})]}),De={width:"10%"},e[97]=je,e[98]=De):(je=e[97],De=e[98]);let Pe,ke;e[99]===Symbol.for("react.memo_cache_sentinel")?(Pe=s.jsxs("th",{style:De,children:["Karat",s.jsx("span",{className:"si",children:"කැරට්"})]}),ke={width:"13%"},e[99]=Pe,e[100]=ke):(Pe=e[99],ke=e[100]);let Ae,ve;e[101]===Symbol.for("react.memo_cache_sentinel")?(Ae=s.jsxs("th",{style:ke,children:["Weight",s.jsx("span",{className:"si",children:"බර"})]}),ve={width:"7%"},e[101]=Ae,e[102]=ve):(Ae=e[101],ve=e[102]);let _e,Se;e[103]===Symbol.for("react.memo_cache_sentinel")?(_e=s.jsxs("th",{style:ve,children:["Qty",s.jsx("span",{className:"si",children:"ගණන"})]}),Se={width:"25%"},e[103]=_e,e[104]=Se):(_e=e[103],Se=e[104]);let Me;e[105]===Symbol.for("react.memo_cache_sentinel")?(Me=s.jsx("thead",{children:s.jsxs("tr",{children:[ne,je,Pe,Ae,_e,s.jsxs("th",{style:Se,children:["Amount",s.jsx("span",{className:"si",children:"මුදල"})]})]})}),e[105]=Me):Me=e[105];let Ee;e[106]!==n.items?(Ee=n.items.map(Mt),e[106]=n.items,e[107]=Ee):Ee=e[107];let Te;e[108]!==Ee?(Te=s.jsx("tbody",{children:Ee}),e[108]=Ee,e[109]=Te):Te=e[109];let Re;e[110]===Symbol.for("react.memo_cache_sentinel")?(Re=s.jsx("td",{colSpan:5,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total / මුළු එකතුව"}),e[110]=Re):Re=e[110];let ze;e[111]!==n.items?(ze=Ie(n.items.reduce(Ct,0)),e[111]=n.items,e[112]=ze):ze=e[112];let ue;e[113]!==ze?(ue=s.jsx("tfoot",{children:s.jsxs("tr",{children:[Re,s.jsx("td",{className:"right",children:ze})]})}),e[113]=ze,e[114]=ue):ue=e[114],e[115]!==Te||e[116]!==ue?(Q=s.jsxs("div",{className:"inv-section",children:[Ne,s.jsxs("table",{className:"inv-table",children:[Me,Te,ue]})]}),e[115]=Te,e[116]=ue,e[117]=Q):Q=e[117],B="inv-section",e[118]===Symbol.for("react.memo_cache_sentinel")?(y=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Payment Summary / ගෙවීම් සාරාංශය"}),s.jsx("span",{className:"inv-section-title-si",children:"Financial Details"})]}),e[118]=y):y=e[118],le=Y>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Item Discounts ",s.jsx("span",{className:"si",children:"භාණ්ඩ වට්ටම්"})]}),s.jsxs("span",{className:"inv-totals-value",children:["− ",Ie(Y)]})]}),e[0]=a.address,e[1]=a.city,e[2]=a.email,e[3]=a.name,e[4]=a.phone,e[5]=a.phone2,e[6]=i?.address,e[7]=i?.phone,e[8]=n.customerAddress,e[9]=n.customerName,e[10]=n.customerPhone,e[11]=n.dueDate,e[12]=n.invoiceNumber,e[13]=n.issueDate,e[14]=n.items,e[15]=n.paymentMethod,e[16]=n.status,e[17]=t,e[18]=o,e[19]=Q,e[20]=B,e[21]=y,e[22]=le,e[23]=g,e[24]=I,e[25]=V,e[26]=N,e[27]=p}else o=e[18],Q=e[19],B=e[20],y=e[21],le=e[22],g=e[23],I=e[24],V=e[25],N=e[26],p=e[27];let r;e[119]!==n.discount||e[120]!==n.discountType?(r=n.discount>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Discount ",s.jsx("span",{className:"si",children:"වට්ටම"}),n.discountType==="percentage"&&` (${n.discount}%)`]}),s.jsxs("span",{className:"inv-totals-value",children:["− ",Ie(n.discount)]})]}),e[119]=n.discount,e[120]=n.discountType,e[121]=r):r=e[121];let m;e[122]!==n.tax||e[123]!==n.taxRate?(m=n.tax>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Tax ",s.jsx("span",{className:"si",children:"බදු"}),n.taxRate&&` (${n.taxRate}%)`]}),s.jsx("span",{className:"inv-totals-value",children:Ie(n.tax)})]}),e[122]=n.tax,e[123]=n.taxRate,e[124]=m):m=e[124];let w;e[125]===Symbol.for("react.memo_cache_sentinel")?(w=s.jsxs("span",{className:"inv-totals-label",children:["Total Amount ",s.jsx("span",{className:"si",children:"මුළු මුදල"})]}),e[125]=w):w=e[125];let W;e[126]===Symbol.for("react.memo_cache_sentinel")?(W={fontSize:"13pt"},e[126]=W):W=e[126];let k;e[127]!==n.total?(k=Ie(n.total),e[127]=n.total,e[128]=k):k=e[128];let h;e[129]!==k?(h=s.jsxs("div",{className:"inv-totals-row highlight",children:[w,s.jsx("span",{className:"inv-totals-value",style:W,children:k})]}),e[129]=k,e[130]=h):h=e[130];let f;e[131]!==n.amountPaid?(f=n.amountPaid>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Amount Paid ",s.jsx("span",{className:"si",children:"ගෙවූ මුදල"})]}),s.jsx("span",{className:"inv-totals-value",children:Ie(n.amountPaid)})]}),e[131]=n.amountPaid,e[132]=f):f=e[132];let x;e[133]!==n.balanceDue?(x=n.balanceDue>0&&s.jsxs("div",{className:"inv-totals-row balance",children:[s.jsxs("span",{className:"inv-totals-label",children:["Balance Due ",s.jsx("span",{className:"si",children:"ශේෂ මුදල"})]}),s.jsx("span",{className:"inv-totals-value",children:Ie(n.balanceDue)})]}),e[133]=n.balanceDue,e[134]=x):x=e[134];let d;e[135]!==r||e[136]!==m||e[137]!==h||e[138]!==f||e[139]!==x||e[140]!==B||e[141]!==y||e[142]!==le?(d=s.jsxs("div",{className:B,children:[y,le,r,m,h,f,x]}),e[135]=r,e[136]=m,e[137]=h,e[138]=f,e[139]=x,e[140]=B,e[141]=y,e[142]=le,e[143]=d):d=e[143];let j;e[144]!==n.notes?(j=n.notes&&s.jsxs("div",{className:"inv-box",children:[s.jsx("div",{className:"inv-box-cap",children:"Notes / සටහන"}),s.jsx("p",{children:n.notes})]}),e[144]=n.notes,e[145]=j):j=e[145];let b;e[146]===Symbol.for("react.memo_cache_sentinel")?(b=s.jsx("div",{className:"inv-box-cap",children:"Terms & Conditions / නියමයන් සහ කොන්දේසි"}),e[146]=b):b=e[146];let c;e[147]!==a.invoiceTerms?(c=a?.invoiceTerms?a.invoiceTerms.split(`
`).filter(Ot).map(Bt):s.jsxs(s.Fragment,{children:[s.jsx("li",{children:"All jewellery items are hallmarked and certified for purity."}),s.jsx("li",{children:"Exchange within 7 days with original receipt. No refunds on custom-made items."}),s.jsx("li",{children:"Warranty does not cover damage caused by misuse, negligence or normal wear."})]}),e[147]=a.invoiceTerms,e[148]=c):c=e[148];let _;e[149]!==c?(_=s.jsxs("div",{className:"inv-box",children:[b,s.jsx("ul",{className:"inv-terms-list",children:c})]}),e[149]=c,e[150]=_):_=e[150];let U;e[151]===Symbol.for("react.memo_cache_sentinel")?(U=s.jsx("div",{className:"inv-sig-space"}),e[151]=U):U=e[151];let S;e[152]===Symbol.for("react.memo_cache_sentinel")?(S=s.jsxs("div",{className:"inv-sig-box",children:[U,s.jsxs("div",{className:"inv-sig-label",children:["Customer / ",s.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[152]=S):S=e[152];let K;e[153]===Symbol.for("react.memo_cache_sentinel")?(K=s.jsx("div",{className:"inv-sig-space"}),e[153]=K):K=e[153];let A;e[154]===Symbol.for("react.memo_cache_sentinel")?(A=s.jsxs("div",{className:"inv-sig-row",children:[S,s.jsxs("div",{className:"inv-sig-box",children:[K,s.jsxs("div",{className:"inv-sig-label",children:["Authorized / ",s.jsx("span",{className:"si",children:"අනුමත නිලධාරී"})]})]})]}),e[154]=A):A=e[154];let E;e[155]===Symbol.for("react.memo_cache_sentinel")?(E=new Date().toLocaleString("en-GB"),e[155]=E):E=e[155];let D;e[156]!==n.invoiceNumber?(D=s.jsxs("div",{className:"inv-footer",children:["Printed: ",E,"  |  ",n.invoiceNumber,"  |  This is a computer-generated document."]}),e[156]=n.invoiceNumber,e[157]=D):D=e[157];let T;return e[158]!==o||e[159]!==Q||e[160]!==d||e[161]!==j||e[162]!==_||e[163]!==D||e[164]!==g||e[165]!==I||e[166]!==V||e[167]!==N||e[168]!==p?(T=s.jsxs("div",{ref:g,className:I,children:[V,N,p,o,Q,d,j,_,A,D]}),e[158]=o,e[159]=Q,e[160]=d,e[161]=j,e[162]=_,e[163]=D,e[164]=g,e[165]=I,e[166]=V,e[167]=N,e[168]=p,e[169]=T):T=e[169],T});At.displayName="PrintableInvoice";function Et(l,t){const n=((t.originalPrice||t.unitPrice)-t.unitPrice)*t.quantity;return l+(n>0?n:0)}function Rt(l){l.target.style.display="none"}function Mt(l,t){return s.jsxs("tr",{children:[s.jsx("td",{className:"center",style:{color:"#888"},children:String(t+1).padStart(2,"0")}),s.jsxs("td",{children:[s.jsx("strong",{children:l.productName}),s.jsxs("div",{className:"inv-item-sub",children:[l.metalType.toUpperCase(),l.karat&&` · ${l.karat}`,l.sku&&` · SKU: ${l.sku}`]})]}),s.jsx("td",{className:"center",children:l.karat||"—"}),s.jsx("td",{className:"center",children:tt(l.metalWeight)}),s.jsx("td",{className:"center",children:l.quantity}),s.jsx("td",{className:"right",style:{fontWeight:600},children:Ie(l.total)})]},l.id)}function Ct(l,t){return l+t.total}function Ot(l){return l.trim()}function Bt(l,t){return s.jsx("li",{children:l},t)}const Wt={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},$t=zt.forwardRef((l,t)=>{const e=pt.c(161),{clearance:n,customer:i,company:we,pawningTerms:a}=l,o=we===void 0?Wt:we;let Q;e[0]!==a?(Q=a===void 0?[]:a,e[0]=a,e[1]=Q):Q=e[1];const B=Q,y=n.monthlyInterestRate?n.total*Number(n.monthlyInterestRate)/100:null;let le;e[2]!==n.status?(le=n.status==="pending"?"ACTIVE":n.status==="paid"?"REDEEMED":n.status.toUpperCase(),e[2]=n.status,e[3]=le):le=e[3];const g=le;let I;e[4]===Symbol.for("react.memo_cache_sentinel")?(I=s.jsx("style",{children:`
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
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;
          }
          .pct-header-left { flex: 1; }
          .pct-header-right { text-align: right; font-size: 7.5pt; color: #333; min-width: 40mm; }
          .pct-company-sinhala-large {
            font-size: 20pt; font-weight: 900; color: #111;
            letter-spacing: 1px; line-height: 1.1; margin: 0 0 0.5mm;
            font-family: 'Noto Sans Sinhala', sans-serif;
          }
          .pct-company-name {
            font-size: 9pt; font-weight: 600; letter-spacing: 2px;
            text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
          }
          .pct-company-contact { font-size: 7.5pt; color: #444; line-height: 1.5; }
          .pct-form-label { font-size: 7pt; color: #666; }
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
        `}),e[4]=I):I=e[4];let V;e[5]===Symbol.for("react.memo_cache_sentinel")?(V={display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"1mm"},e[5]=V):V=e[5];let N,p,r;e[6]===Symbol.for("react.memo_cache_sentinel")?(N=s.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"40px",height:"40px",objectFit:"contain",borderRadius:"3px",marginTop:"1mm"}}),p={flex:1},r=s.jsx("div",{className:"pct-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),e[6]=N,e[7]=p,e[8]=r):(N=e[6],p=e[7],r=e[8]);let m;e[9]!==o.name?(m=s.jsxs("div",{style:V,children:[N,s.jsxs("div",{style:p,children:[r,s.jsx("div",{className:"pct-company-name",children:o.name})]})]}),e[9]=o.name,e[10]=m):m=e[10];let w;e[11]===Symbol.for("react.memo_cache_sentinel")?(w=s.jsx("br",{}),e[11]=w):w=e[11];const W=o.phone2?` / ${o.phone2}`:"";let k;e[12]===Symbol.for("react.memo_cache_sentinel")?(k=s.jsx("br",{}),e[12]=k):k=e[12];let h;e[13]!==o.address||e[14]!==o.city||e[15]!==o.email||e[16]!==o.phone||e[17]!==W?(h=s.jsxs("div",{className:"pct-company-contact",children:[o.address,", ",o.city,w,"Tel: ",o.phone,W,k,o.email]}),e[13]=o.address,e[14]=o.city,e[15]=o.email,e[16]=o.phone,e[17]=W,e[18]=h):h=e[18];let f;e[19]!==m||e[20]!==h?(f=s.jsxs("div",{className:"pct-header-left",children:[m,h]}),e[19]=m,e[20]=h,e[21]=f):f=e[21];let x;e[22]===Symbol.for("react.memo_cache_sentinel")?(x=s.jsx("div",{className:"pct-form-label",children:"Form No. / පෝරම අංකය"}),e[22]=x):x=e[22];let d;e[23]!==n.clearanceNumber?(d=s.jsx("div",{className:"pct-form-no",children:n.clearanceNumber}),e[23]=n.clearanceNumber,e[24]=d):d=e[24];let j;e[25]===Symbol.for("react.memo_cache_sentinel")?(j=s.jsxs("div",{style:{marginTop:"2mm"},children:[s.jsx("div",{className:"pct-form-label",children:"Branch / ශාඛාව"}),s.jsx("div",{className:"pct-form-no",children:"Head Office"})]}),e[25]=j):j=e[25];let b;e[26]!==d?(b=s.jsxs("div",{className:"pct-header-right",children:[x,d,j]}),e[26]=d,e[27]=b):b=e[27];let c;e[28]!==f||e[29]!==b?(c=s.jsxs("div",{className:"pct-header",children:[f,b]}),e[28]=f,e[29]=b,e[30]=c):c=e[30];let _;e[31]===Symbol.for("react.memo_cache_sentinel")?(_=s.jsxs("div",{className:"pct-title-bar",children:[s.jsx("div",{className:"pct-title-en",children:"PAWN TICKET"}),s.jsx("div",{className:"pct-title-si",children:"උකස් පත"})]}),e[31]=_):_=e[31];let U;e[32]===Symbol.for("react.memo_cache_sentinel")?(U=s.jsxs("div",{className:"pct-section-header",children:[s.jsx("span",{className:"pct-section-title-en",children:"Ticket & Customer Information"}),s.jsx("span",{className:"pct-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[32]=U):U=e[32];let S;e[33]===Symbol.for("react.memo_cache_sentinel")?(S=s.jsxs("span",{className:"pct-field-label",children:["Ticket No. ",s.jsx("span",{className:"pct-field-label-si",children:"/ අංකය"})]}),e[33]=S):S=e[33];let K;e[34]===Symbol.for("react.memo_cache_sentinel")?(K={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[34]=K):K=e[34];let A;e[35]!==n.clearanceNumber?(A=s.jsxs("div",{className:"pct-info-cell",children:[S,s.jsx("span",{className:"pct-field-value",style:K,children:n.clearanceNumber})]}),e[35]=n.clearanceNumber,e[36]=A):A=e[36];let E;e[37]===Symbol.for("react.memo_cache_sentinel")?(E=s.jsxs("span",{className:"pct-field-label",children:["Pawn Date ",s.jsx("span",{className:"pct-field-label-si",children:"/ උකස් දිනය"})]}),e[37]=E):E=e[37];const D=n.pawnDate||n.issueDate;let T;e[38]!==D?(T=dt(D),e[38]=D,e[39]=T):T=e[39];let Y;e[40]!==T?(Y=s.jsxs("div",{className:"pct-info-cell",children:[E,s.jsx("span",{className:"pct-field-value",children:T})]}),e[40]=T,e[41]=Y):Y=e[41];let q;e[42]===Symbol.for("react.memo_cache_sentinel")?(q=s.jsxs("span",{className:"pct-field-label",children:["Customer Name ",s.jsx("span",{className:"pct-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[42]=q):q=e[42];let $;e[43]!==n.customerName?($=s.jsxs("div",{className:"pct-info-cell",children:[q,s.jsx("span",{className:"pct-field-value",children:n.customerName})]}),e[43]=n.customerName,e[44]=$):$=e[44];let H;e[45]===Symbol.for("react.memo_cache_sentinel")?(H=s.jsxs("span",{className:"pct-field-label",children:["NIC No. ",s.jsx("span",{className:"pct-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[45]=H):H=e[45];const F=n.customerNic||"—";let P;e[46]!==F?(P=s.jsxs("div",{className:"pct-info-cell",children:[H,s.jsx("span",{className:"pct-field-value",children:F})]}),e[46]=F,e[47]=P):P=e[47];let X;e[48]===Symbol.for("react.memo_cache_sentinel")?(X=s.jsxs("span",{className:"pct-field-label",children:["Phone ",s.jsx("span",{className:"pct-field-label-si",children:"/ දුරකථනය"})]}),e[48]=X):X=e[48];const ae=n.customerPhone||i?.phone||"—";let L;e[49]!==ae?(L=s.jsxs("div",{className:"pct-info-cell",children:[X,s.jsx("span",{className:"pct-field-value",children:ae})]}),e[49]=ae,e[50]=L):L=e[50];let R;e[51]===Symbol.for("react.memo_cache_sentinel")?(R=s.jsxs("span",{className:"pct-field-label",children:["Status ",s.jsx("span",{className:"pct-field-label-si",children:"/ තත්ත්වය"})]}),e[51]=R):R=e[51];const M=`pct-status pct-status-${n.status==="pending"?"active":"redeemed"}`;let C;e[52]!==g||e[53]!==M?(C=s.jsxs("div",{className:"pct-info-cell",children:[R,s.jsx("span",{className:"pct-field-value",children:s.jsx("span",{className:M,children:g})})]}),e[52]=g,e[53]=M,e[54]=C):C=e[54];let v;e[55]!==n.customerAddress||e[56]!==i?.address?(v=(n.customerAddress||i?.address)&&s.jsxs("div",{className:"pct-info-cell full",children:[s.jsxs("span",{className:"pct-field-label",children:["Address ",s.jsx("span",{className:"pct-field-label-si",children:"/ ලිපිනය"})]}),s.jsx("span",{className:"pct-field-value",style:{fontSize:"9pt"},children:n.customerAddress||i?.address})]}),e[55]=n.customerAddress,e[56]=i?.address,e[57]=v):v=e[57];let z;e[58]!==A||e[59]!==Y||e[60]!==$||e[61]!==P||e[62]!==L||e[63]!==C||e[64]!==v?(z=s.jsxs("div",{className:"pct-section",children:[U,s.jsxs("div",{className:"pct-info-grid",children:[A,Y,$,P,L,C,v]})]}),e[58]=A,e[59]=Y,e[60]=$,e[61]=P,e[62]=L,e[63]=C,e[64]=v,e[65]=z):z=e[65];let J;e[66]===Symbol.for("react.memo_cache_sentinel")?(J={borderTop:"none"},e[66]=J):J=e[66];let ie;e[67]===Symbol.for("react.memo_cache_sentinel")?(ie=s.jsxs("div",{className:"pct-section-header",children:[s.jsx("span",{className:"pct-section-title-en",children:"Pawned Items / රන් භාණ්ඩ විස්තරය"}),s.jsx("span",{className:"pct-section-title-si",children:"Gold Articles"})]}),e[67]=ie):ie=e[67];let Z,O;e[68]===Symbol.for("react.memo_cache_sentinel")?(Z=s.jsx("th",{style:{width:"5%"},children:"#"}),O={width:"30%"},e[68]=Z,e[69]=O):(Z=e[68],O=e[69]);let u,ee;e[70]===Symbol.for("react.memo_cache_sentinel")?(u=s.jsxs("th",{style:O,children:["Description",s.jsx("span",{className:"si",children:"විස්තරය"})]}),ee={width:"10%"},e[70]=u,e[71]=ee):(u=e[70],ee=e[71]);let ce,re;e[72]===Symbol.for("react.memo_cache_sentinel")?(ce=s.jsxs("th",{style:ee,children:["Karat",s.jsx("span",{className:"si",children:"කැරට්"})]}),re={width:"12%"},e[72]=ce,e[73]=re):(ce=e[72],re=e[73]);let fe,me;e[74]===Symbol.for("react.memo_cache_sentinel")?(fe=s.jsxs("th",{style:re,children:["Weight",s.jsx("span",{className:"si",children:"බර"})]}),me={width:"6%"},e[74]=fe,e[75]=me):(fe=e[74],me=e[75]);let de,pe;e[76]===Symbol.for("react.memo_cache_sentinel")?(de=s.jsxs("th",{style:me,children:["Qty",s.jsx("span",{className:"si",children:"ගණන"})]}),pe={width:"18%"},e[76]=de,e[77]=pe):(de=e[76],pe=e[77]);let xe,ge;e[78]===Symbol.for("react.memo_cache_sentinel")?(xe=s.jsxs("th",{style:pe,children:["Item Price",s.jsx("span",{className:"si",children:"භාණ්ඩ මිල"})]}),ge={width:"19%"},e[78]=xe,e[79]=ge):(xe=e[78],ge=e[79]);let be;e[80]===Symbol.for("react.memo_cache_sentinel")?(be=s.jsx("thead",{children:s.jsxs("tr",{children:[Z,u,ce,fe,de,xe,s.jsxs("th",{style:ge,children:["Assessed Value",s.jsx("span",{className:"si",children:"ඇස්තමේන්තු"})]})]})}),e[80]=be):be=e[80];let te;e[81]!==n.items?(te=n.items.map(Ft),e[81]=n.items,e[82]=te):te=e[82];let oe;e[83]!==te?(oe=s.jsx("tbody",{children:te}),e[83]=te,e[84]=oe):oe=e[84];let he;e[85]===Symbol.for("react.memo_cache_sentinel")?(he=s.jsx("td",{colSpan:5,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total Item Value / මුළු භාණ්ඩ වටිනාකම"}),e[85]=he):he=e[85];let se;e[86]!==n.items?(se=Ie(n.items.reduce(Lt,0)),e[86]=n.items,e[87]=se):se=e[87];let G;e[88]!==se?(G=s.jsx("td",{className:"right",children:se}),e[88]=se,e[89]=G):G=e[89];let Ne;e[90]===Symbol.for("react.memo_cache_sentinel")?(Ne={fontWeight:700},e[90]=Ne):Ne=e[90];let ne;e[91]!==n.items?(ne=Ie(n.items.reduce(Gt,0)),e[91]=n.items,e[92]=ne):ne=e[92];let ye;e[93]!==ne?(ye=s.jsx("td",{className:"right",style:Ne,children:ne}),e[93]=ne,e[94]=ye):ye=e[94];let je;e[95]!==G||e[96]!==ye?(je=s.jsx("tfoot",{children:s.jsxs("tr",{children:[he,G,ye]})}),e[95]=G,e[96]=ye,e[97]=je):je=e[97];let De;e[98]!==oe||e[99]!==je?(De=s.jsxs("div",{className:"pct-section",style:J,children:[ie,s.jsxs("table",{className:"pct-table",children:[be,oe,je]})]}),e[98]=oe,e[99]=je,e[100]=De):De=e[100];let Pe;e[101]===Symbol.for("react.memo_cache_sentinel")?(Pe={borderTop:"none"},e[101]=Pe):Pe=e[101];let ke;e[102]===Symbol.for("react.memo_cache_sentinel")?(ke=s.jsxs("div",{className:"pct-section-header",children:[s.jsx("span",{className:"pct-section-title-en",children:"Loan & Interest Details / ණය සහ පොලී විස්තර"}),s.jsx("span",{className:"pct-section-title-si",children:"Finance Information"})]}),e[102]=ke):ke=e[102];let Ae;e[103]===Symbol.for("react.memo_cache_sentinel")?(Ae=s.jsxs("span",{className:"pct-finance-label",children:["Assessed Value / Total ",s.jsx("span",{className:"si",children:"ඇස්තමේන්තු වටිනාකම"})]}),e[103]=Ae):Ae=e[103];let ve;e[104]!==n.items?(ve=Ie(n.items.reduce(Vt,0)),e[104]=n.items,e[105]=ve):ve=e[105];let _e;e[106]!==ve?(_e=s.jsxs("div",{className:"pct-finance-row",children:[Ae,s.jsx("span",{className:"pct-finance-value",children:ve})]}),e[106]=ve,e[107]=_e):_e=e[107];let Se;e[108]!==n.discount?(Se=n.discount>0&&s.jsxs("div",{className:"pct-finance-row",children:[s.jsxs("span",{className:"pct-finance-label",children:["Discount ",s.jsx("span",{className:"si",children:"වට්ටම"})]}),s.jsxs("span",{className:"pct-finance-value",children:["- ",Ie(n.discount)]})]}),e[108]=n.discount,e[109]=Se):Se=e[109];let Me;e[110]===Symbol.for("react.memo_cache_sentinel")?(Me=s.jsxs("span",{className:"pct-finance-label",children:["Advance / Loan Amount ",s.jsx("span",{className:"si",children:"අත්තිකාරම් / ණය මුදල"})]}),e[110]=Me):Me=e[110];let Ee;e[111]===Symbol.for("react.memo_cache_sentinel")?(Ee={fontSize:"13pt"},e[111]=Ee):Ee=e[111];let Te;e[112]!==n.total?(Te=Ie(n.total),e[112]=n.total,e[113]=Te):Te=e[113];let Re;e[114]!==Te?(Re=s.jsxs("div",{className:"pct-finance-row highlight",children:[Me,s.jsx("span",{className:"pct-finance-value",style:Ee,children:Te})]}),e[114]=Te,e[115]=Re):Re=e[115];let ze;e[116]!==n.monthlyInterestRate?(ze=n.monthlyInterestRate!=null&&s.jsxs("div",{className:"pct-finance-row",children:[s.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Rate ",s.jsx("span",{className:"si",children:"මාසික පොලී අනුපාතය"})]}),s.jsxs("span",{className:"pct-finance-value",children:[n.monthlyInterestRate,"%"]})]}),e[116]=n.monthlyInterestRate,e[117]=ze):ze=e[117];let ue;e[118]!==y?(ue=y!=null&&s.jsxs("div",{className:"pct-finance-row",children:[s.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Amount ",s.jsx("span",{className:"si",children:"මාසික පොලී මුදල"})]}),s.jsx("span",{className:"pct-finance-value",children:Ie(y)})]}),e[118]=y,e[119]=ue):ue=e[119];let Ce;e[120]!==n.total||e[121]!==y?(Ce=y!=null&&s.jsxs("div",{className:"pct-finance-row highlight",children:[s.jsxs("span",{className:"pct-finance-label",children:["Redemption After 1 Month (Principal + Interest)",s.jsx("span",{className:"si",children:"මාසයකට පසු ආපසු ගෙවිය යුතු මුදල (ණය + පොලිය)"})]}),s.jsx("span",{className:"pct-finance-value",style:{fontSize:"13pt"},children:Ie(n.total+y)})]}),e[120]=n.total,e[121]=y,e[122]=Ce):Ce=e[122];let We;e[123]!==n.dueDate?(We=n.dueDate&&s.jsxs("div",{className:"pct-finance-row",children:[s.jsxs("span",{className:"pct-finance-label",children:["Redemption Due Date ",s.jsx("span",{className:"si",children:"ආපසු ගැනීමේ දිනය"})]}),s.jsx("span",{className:"pct-finance-value",children:dt(n.dueDate)})]}),e[123]=n.dueDate,e[124]=We):We=e[124];let $e;e[125]!==n.paymentMethod?($e=n.paymentMethod&&s.jsxs("div",{className:"pct-finance-row",children:[s.jsxs("span",{className:"pct-finance-label",children:["Payment Method ",s.jsx("span",{className:"si",children:"ගෙවීමේ ක්‍රමය"})]}),s.jsx("span",{className:"pct-finance-value",children:n.paymentMethod.replace("-"," ").toUpperCase()})]}),e[125]=n.paymentMethod,e[126]=$e):$e=e[126];let Fe;e[127]!==_e||e[128]!==Se||e[129]!==Re||e[130]!==ze||e[131]!==ue||e[132]!==Ce||e[133]!==We||e[134]!==$e?(Fe=s.jsxs("div",{className:"pct-section",style:Pe,children:[ke,_e,Se,Re,ze,ue,Ce,We,$e]}),e[127]=_e,e[128]=Se,e[129]=Re,e[130]=ze,e[131]=ue,e[132]=Ce,e[133]=We,e[134]=$e,e[135]=Fe):Fe=e[135];let Xe;e[136]===Symbol.for("react.memo_cache_sentinel")?(Xe=s.jsxs("div",{className:"pct-terms-header",children:["Terms & Conditions / ",s.jsx("span",{style:{fontWeight:600,fontSize:"9pt"},children:"නියමයන් සහ කොන්දේසි"})]}),e[136]=Xe):Xe=e[136];let Le;e[137]!==o.clearanceTerms||e[138]!==o.pawnTerms||e[139]!==B?(Le=B.length>0?B.map(Ut):o?.pawnTerms||o?.clearanceTerms?(o.pawnTerms||o.clearanceTerms).split(`
`).filter(Kt).map(Yt):s.jsxs(s.Fragment,{children:[s.jsxs("li",{children:["Interest is charged at the agreed monthly rate from the pawn date, even for one day.",s.jsx("span",{className:"si",children:" / උකස් දිනයේ සිට එකඟ වූ මාසික අනුපාතයෙන් පොලිය අය කෙරේ."})]}),s.jsxs("li",{children:["Items must be redeemed within the agreed period with original ticket and valid ID.",s.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),s.jsxs("li",{children:["Unclaimed items after the redemption deadline may be forfeited without further notice.",s.jsx("span",{className:"si",children:" / නියමිත කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),s.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",s.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[137]=o.clearanceTerms,e[138]=o.pawnTerms,e[139]=B,e[140]=Le):Le=e[140];let Ge;e[141]!==Le?(Ge=s.jsxs("div",{className:"pct-terms",children:[Xe,s.jsx("ul",{className:"pct-terms-list",children:Le})]}),e[141]=Le,e[142]=Ge):Ge=e[142];let Ve;e[143]===Symbol.for("react.memo_cache_sentinel")?(Ve=s.jsx("div",{className:"pct-sig-space"}),e[143]=Ve):Ve=e[143];let Ze;e[144]===Symbol.for("react.memo_cache_sentinel")?(Ze=s.jsxs("div",{className:"pct-sig-box",children:[Ve,s.jsxs("div",{className:"pct-sig-label",children:["Customer / ",s.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[144]=Ze):Ze=e[144];let et;e[145]===Symbol.for("react.memo_cache_sentinel")?(et=s.jsx("div",{className:"pct-sig-space"}),e[145]=et):et=e[145];let Ue;e[146]===Symbol.for("react.memo_cache_sentinel")?(Ue=s.jsxs("div",{className:"pct-sig-box",children:[et,s.jsxs("div",{className:"pct-sig-label",children:["Valuer / ",s.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[146]=Ue):Ue=e[146];let Ke;e[147]===Symbol.for("react.memo_cache_sentinel")?(Ke=s.jsx("div",{className:"pct-sig-space"}),e[147]=Ke):Ke=e[147];let Ye,He;e[148]===Symbol.for("react.memo_cache_sentinel")?(Ye=s.jsxs("div",{className:"pct-sig-row",children:[Ze,Ue,s.jsxs("div",{className:"pct-sig-box",children:[Ke,s.jsxs("div",{className:"pct-sig-label",children:["Manager / ",s.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),He=s.jsx("div",{className:"pct-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[148]=Ye,e[149]=He):(Ye=e[148],He=e[149]);let Je;e[150]===Symbol.for("react.memo_cache_sentinel")?(Je=new Date().toLocaleString("en-GB"),e[150]=Je):Je=e[150];let Oe;e[151]!==n.clearanceNumber?(Oe=s.jsxs("div",{className:"pct-footer",children:["Printed: ",Je,"  |  ",n.clearanceNumber,"  |  This is a computer-generated document."]}),e[151]=n.clearanceNumber,e[152]=Oe):Oe=e[152];let qe;return e[153]!==t||e[154]!==c||e[155]!==z||e[156]!==De||e[157]!==Fe||e[158]!==Ge||e[159]!==Oe?(qe=s.jsxs("div",{ref:t,className:"pct-root",children:[I,c,_,z,De,Fe,Ge,Ye,He,Oe]}),e[153]=t,e[154]=c,e[155]=z,e[156]=De,e[157]=Fe,e[158]=Ge,e[159]=Oe,e[160]=qe):qe=e[160],qe});$t.displayName="PrintableClearance";function Ft(l,t){return s.jsxs("tr",{children:[s.jsx("td",{className:"center",children:String(t+1).padStart(2,"0")}),s.jsxs("td",{children:[s.jsx("strong",{children:l.productName}),s.jsxs("div",{className:"item-sub",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),s.jsx("td",{className:"center",children:l.karat||"—"}),s.jsx("td",{className:"center",children:tt(l.metalWeight)}),s.jsx("td",{className:"center",children:l.quantity}),s.jsx("td",{className:"right",children:l.unitPrice>0?Ie(l.unitPrice):"—"}),s.jsx("td",{className:"right",style:{fontWeight:700},children:l.assessedValue?Ie(Number(l.assessedValue)):"—"})]},l.id)}function Lt(l,t){return l+(t.unitPrice||0)}function Gt(l,t){return l+(Number(t.assessedValue)||0)}function Vt(l,t){return l+(Number(t.assessedValue)||0)}function Ut(l){return s.jsxs("li",{children:[s.jsx("span",{className:"en",children:l.en}),l.si&&s.jsxs("span",{className:"si",children:[" ",l.si]}),l.ta&&s.jsxs("span",{className:"ta",children:[" ",l.ta]})]},l.groupId)}function Kt(l){return l.trim()}function Yt(l,t){const e=l.split(" / ");return s.jsxs("li",{children:[e[0]?.trim(),e[1]&&s.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}function fs(l){const t=pt.c(75),{data:e,company:n}=l;let i;t[0]!==e.redemptionDate?(i=e?.redemptionDate||new Date().toISOString().split("T")[0],t[0]=e.redemptionDate,t[1]=i):i=t[1];const we=i,a=e?.interest,o=a?a.totalPayable:Number(e?.total||0),Q=Jt,B=Ht;let y;t[2]===Symbol.for("react.memo_cache_sentinel")?(y=s.jsx("style",{children:`
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
      `}),t[2]=y):y=t[2];const le=n?.name||"Onelka Jewellery";let g;t[3]!==le?(g=s.jsx("h1",{children:le}),t[3]=le,t[4]=g):g=t[4];let I;t[5]!==n?(I=n?.tagline&&s.jsx("p",{children:n.tagline}),t[5]=n,t[6]=I):I=t[6];const V=n?.address||"";let N;t[7]!==V?(N=s.jsx("p",{children:V}),t[7]=V,t[8]=N):N=t[8];const p=n?.phone||"";let r;t[9]!==p?(r=s.jsxs("p",{children:["Tel: ",p]}),t[9]=p,t[10]=r):r=t[10];let m;t[11]!==g||t[12]!==I||t[13]!==N||t[14]!==r?(m=s.jsxs("div",{className:"pos-header",children:[g,I,N,r]}),t[11]=g,t[12]=I,t[13]=N,t[14]=r,t[15]=m):m=t[15];let w;t[16]===Symbol.for("react.memo_cache_sentinel")?(w=s.jsx("div",{className:"pos-title",children:"උකස් Receipt / Pawn Redemption"}),t[16]=w):w=t[16];let W;t[17]===Symbol.for("react.memo_cache_sentinel")?(W=s.jsx("span",{className:"label",children:"Ticket #:"}),t[17]=W):W=t[17];let k;t[18]!==e.clearanceNumber?(k=s.jsxs("div",{className:"pos-row",children:[W,s.jsx("span",{className:"value",children:e.clearanceNumber})]}),t[18]=e.clearanceNumber,t[19]=k):k=t[19];let h;t[20]===Symbol.for("react.memo_cache_sentinel")?(h=s.jsx("span",{className:"label",children:"Date:"}),t[20]=h):h=t[20];let f;t[21]!==we?(f=Q(we),t[21]=we,t[22]=f):f=t[22];let x;t[23]!==f?(x=s.jsxs("div",{className:"pos-row",children:[h,s.jsx("span",{className:"value",children:f})]}),t[23]=f,t[24]=x):x=t[24];let d;t[25]===Symbol.for("react.memo_cache_sentinel")?(d=s.jsx("span",{className:"label",children:"Pawn Date:"}),t[25]=d):d=t[25];const j=e.pawnDate||e.issueDate;let b;t[26]!==j?(b=Q(j),t[26]=j,t[27]=b):b=t[27];let c;t[28]!==b?(c=s.jsxs("div",{className:"pos-row",children:[d,s.jsx("span",{className:"value",children:b})]}),t[28]=b,t[29]=c):c=t[29];let _;t[30]===Symbol.for("react.memo_cache_sentinel")?(_=s.jsx("div",{className:"pos-divider"}),t[30]=_):_=t[30];let U;t[31]===Symbol.for("react.memo_cache_sentinel")?(U=s.jsx("span",{className:"label",children:"Customer:"}),t[31]=U):U=t[31];let S;t[32]!==e.customerName?(S=s.jsxs("div",{className:"pos-row",children:[U,s.jsx("span",{className:"value",children:e.customerName})]}),t[32]=e.customerName,t[33]=S):S=t[33];let K;t[34]!==e.customerNic?(K=e.customerNic&&s.jsxs("div",{className:"pos-row",children:[s.jsx("span",{className:"label",children:"NIC:"}),s.jsx("span",{className:"value",children:e.customerNic})]}),t[34]=e.customerNic,t[35]=K):K=t[35];let A;t[36]!==e.customerPhone?(A=e.customerPhone&&s.jsxs("div",{className:"pos-row",children:[s.jsx("span",{className:"label",children:"Phone:"}),s.jsx("span",{className:"value",children:e.customerPhone})]}),t[36]=e.customerPhone,t[37]=A):A=t[37];let E,D;t[38]===Symbol.for("react.memo_cache_sentinel")?(E=s.jsx("div",{className:"pos-divider"}),D=s.jsx("div",{style:{fontWeight:"bold",fontSize:"11px",marginBottom:"4px"},children:"ITEMS REDEEMED:"}),t[38]=E,t[39]=D):(E=t[38],D=t[39]);let T;if(t[40]!==e.items){let O;t[42]===Symbol.for("react.memo_cache_sentinel")?(O=(u,ee)=>s.jsxs("div",{className:"pos-item",children:[s.jsxs("div",{className:"item-name",children:[ee+1,". ",u.productName]}),(u.karat||u.metalWeight)&&s.jsxs("div",{className:"item-detail",children:[u.karat&&`${u.karat} `,u.metalType&&`${u.metalType} `,u.metalWeight?`${u.metalWeight}g`:""]}),s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"item-detail",children:["Qty: ",u.quantity]}),s.jsx("span",{children:B(u.total)})]})]},ee),t[42]=O):O=t[42],T=e.items.map(O),t[40]=e.items,t[41]=T}else T=t[41];let Y;t[43]===Symbol.for("react.memo_cache_sentinel")?(Y=s.jsx("div",{className:"pos-divider"}),t[43]=Y):Y=t[43];let q;t[44]===Symbol.for("react.memo_cache_sentinel")?(q=s.jsx("span",{className:"label",children:"Principal:"}),t[44]=q):q=t[44];const $=B(e.total);let H;t[45]!==$?(H=s.jsxs("div",{className:"pos-row",children:[q,s.jsx("span",{className:"value",children:$})]}),t[45]=$,t[46]=H):H=t[46];let F;t[47]!==a?(F=a&&s.jsxs(s.Fragment,{children:[a.daysElapsed>0&&s.jsxs("div",{className:"pos-row",children:[s.jsx("span",{className:"label",children:"Days:"}),s.jsxs("span",{className:"value",children:[a.daysElapsed," days"]})]}),a.firstMonthInterest>0&&s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"label",children:["1st Mo. (",a.interestRatePerMonth,"%):"]}),s.jsx("span",{className:"value",children:B(a.firstMonthInterest)})]}),a.additionalMonthsInterest>0&&s.jsxs("div",{className:"pos-row",children:[s.jsx("span",{className:"label",children:"Add. Months:"}),s.jsx("span",{className:"value",children:B(a.additionalMonthsInterest)})]}),a.proratedDailyInterest>0&&s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"label",children:["Daily (",a.remainingDays,"d):"]}),s.jsx("span",{className:"value",children:B(a.proratedDailyInterest)})]}),s.jsxs("div",{className:"pos-row",children:[s.jsx("span",{className:"label",children:"Total Interest:"}),s.jsx("span",{className:"value",children:B(a.totalInterest)})]})]}),t[47]=a,t[48]=F):F=t[48];const P=B(o);let X;t[49]!==P?(X=s.jsxs("div",{className:"pos-total",children:["TOTAL PAID: ",P]}),t[49]=P,t[50]=X):X=t[50];let ae;t[51]===Symbol.for("react.memo_cache_sentinel")?(ae=s.jsx("span",{className:"label",children:"Payment:"}),t[51]=ae):ae=t[51];const L=e.redeemPaymentMethod||e.paymentMethod||"cash";let R;t[52]!==L?(R=L.replace("-"," ").toUpperCase(),t[52]=L,t[53]=R):R=t[53];let M;t[54]!==R?(M=s.jsxs("div",{className:"pos-row",children:[ae,s.jsx("span",{className:"value",children:R})]}),t[54]=R,t[55]=M):M=t[55];let C,v;t[56]===Symbol.for("react.memo_cache_sentinel")?(C=s.jsx("p",{children:"Items returned to customer."}),v=s.jsx("p",{children:"Thank you for your trust!"}),t[56]=C,t[57]=v):(C=t[56],v=t[57]);const z=n?.name||"Onelka Jewellery";let J;t[58]!==z?(J=s.jsxs("div",{className:"pos-footer",children:[C,v,s.jsxs("p",{children:["— ",z," —"]})]}),t[58]=z,t[59]=J):J=t[59];let ie;t[60]===Symbol.for("react.memo_cache_sentinel")?(ie=s.jsxs("div",{className:"pos-timestamp",children:["Printed: ",new Date().toLocaleString("en-GB")]}),t[60]=ie):ie=t[60];let Z;return t[61]!==m||t[62]!==k||t[63]!==x||t[64]!==c||t[65]!==S||t[66]!==K||t[67]!==A||t[68]!==T||t[69]!==H||t[70]!==F||t[71]!==X||t[72]!==M||t[73]!==J?(Z=s.jsxs("div",{className:"pos-receipt",children:[y,m,w,k,x,c,_,S,K,A,E,D,T,Y,H,F,X,M,J,ie]}),t[61]=m,t[62]=k,t[63]=x,t[64]=c,t[65]=S,t[66]=K,t[67]=A,t[68]=T,t[69]=H,t[70]=F,t[71]=X,t[72]=M,t[73]=J,t[74]=Z):Z=t[74],Z}function Ht(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Jt(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const qt={name:"Onelka Jewellery",address:"No. 123, Galle Road",city:"Colombo 03, Sri Lanka",phone:"+94 11 234 5678",phone2:"+94 77 123 4567",email:"info@onelkajewellery.lk",registrationNumber:"REG-2024-001"},Qt=zt.forwardRef((l,t)=>{const e=pt.c(239),{ticket:n,company:i,pawningTerms:we}=l,a=i===void 0?qt:i;let o;e[0]!==we?(o=we===void 0?[]:we,e[0]=we,e[1]=o):o=e[1];const Q=o;let B,y,le;if(e[2]!==n.maturityDate||e[3]!==n.pawnDate){const v=new Date(n.pawnDate),z=new Date(n.maturityDate);le=(z.getFullYear()-v.getFullYear())*12,B=z.getMonth(),y=v.getMonth(),e[2]=n.maturityDate,e[3]=n.pawnDate,e[4]=B,e[5]=y,e[6]=le}else B=e[4],y=e[5],le=e[6];const g=le+(B-y);let I,V,N,p,r,m,w,W,k,h,f,x,d,j,b,c,_,U,S,K;if(e[7]!==a.address||e[8]!==a.city||e[9]!==a.email||e[10]!==a.name||e[11]!==a.phone||e[12]!==a.phone2||e[13]!==a.registrationNumber||e[14]!==g||e[15]!==t||e[16]!==n.customerAddress||e[17]!==n.customerNIC||e[18]!==n.customerName||e[19]!==n.customerPhone||e[20]!==n.gracePeriodDays||e[21]!==n.interestRatePerMonth||e[22]!==n.items||e[23]!==n.loanToValueRatio||e[24]!==n.maturityDate||e[25]!==n.pawnDate||e[26]!==n.principalAmount||e[27]!==n.ticketNumber||e[28]!==n.totalGrossWeight||e[29]!==n.totalNetWeight||e[30]!==n.totalValuation){const v=Pt(n.principalAmount,g,n.interestRatePerMonth);h=t,f="ppt-root",e[51]===Symbol.for("react.memo_cache_sentinel")?(x=s.jsx("style",{children:`
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
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;
            margin-bottom: 0;
          }
          .ppt-header-left { flex: 1; }
          .ppt-header-right {
            text-align: right;
            font-size: 8pt;
            color: #333;
            min-width: 44mm;
          }
          .ppt-company-sinhala-large {
            font-size: 20pt;
            font-weight: 900;
            color: #111;
            letter-spacing: 1px;
            line-height: 1.1;
            margin: 0 0 0.5mm;
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
        `}),e[51]=x):x=e[51];let z;e[52]===Symbol.for("react.memo_cache_sentinel")?(z={display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"1mm"},e[52]=z):z=e[52];let J,ie,Z;e[53]===Symbol.for("react.memo_cache_sentinel")?(J=s.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"40px",height:"40px",objectFit:"contain",borderRadius:"3px",marginTop:"1mm",flexShrink:0},onError:Xt}),ie={flex:1},Z=s.jsx("div",{className:"ppt-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),e[53]=J,e[54]=ie,e[55]=Z):(J=e[53],ie=e[54],Z=e[55]);let O;e[56]!==a.name?(O=s.jsxs("div",{style:z,children:[J,s.jsxs("div",{style:ie,children:[Z,s.jsx("div",{className:"ppt-company-name",children:a.name})]})]}),e[56]=a.name,e[57]=O):O=e[57];let u;e[58]===Symbol.for("react.memo_cache_sentinel")?(u=s.jsx("br",{}),e[58]=u):u=e[58];const ee=a.phone2?` / ${a.phone2}`:"";let ce;e[59]===Symbol.for("react.memo_cache_sentinel")?(ce=s.jsx("br",{}),e[59]=ce):ce=e[59];let re;e[60]!==a.address||e[61]!==a.city||e[62]!==a.email||e[63]!==a.phone||e[64]!==ee?(re=s.jsxs("div",{className:"ppt-company-contact",children:[a.address,", ",a.city,u,"Tel: ",a.phone,ee,ce,a.email]}),e[60]=a.address,e[61]=a.city,e[62]=a.email,e[63]=a.phone,e[64]=ee,e[65]=re):re=e[65];let fe;e[66]!==O||e[67]!==re?(fe=s.jsxs("div",{className:"ppt-header-left",children:[O,re]}),e[66]=O,e[67]=re,e[68]=fe):fe=e[68];let me;e[69]===Symbol.for("react.memo_cache_sentinel")?(me=s.jsx("div",{className:"ppt-form-label",children:"Form No. / පෝරම අංකය"}),e[69]=me):me=e[69];let de;e[70]!==a.registrationNumber?(de=s.jsx("div",{className:"ppt-form-no",children:a.registrationNumber}),e[70]=a.registrationNumber,e[71]=de):de=e[71];let pe;e[72]===Symbol.for("react.memo_cache_sentinel")?(pe=s.jsxs("div",{style:{marginTop:"2mm"},children:[s.jsx("div",{className:"ppt-form-label",children:"Branch / ශාඛාව"}),s.jsx("div",{className:"ppt-form-no",children:"Head Office"})]}),e[72]=pe):pe=e[72];let xe;e[73]!==de?(xe=s.jsxs("div",{className:"ppt-header-right",children:[me,de,pe]}),e[73]=de,e[74]=xe):xe=e[74],e[75]!==fe||e[76]!==xe?(d=s.jsxs("div",{className:"ppt-header",children:[fe,xe]}),e[75]=fe,e[76]=xe,e[77]=d):d=e[77],e[78]===Symbol.for("react.memo_cache_sentinel")?(j=s.jsxs("div",{className:"ppt-title-bar",children:[s.jsx("div",{className:"ppt-title-en",children:"PAWN TICKET"}),s.jsx("div",{className:"ppt-title-si",children:"උකස් පත"})]}),e[78]=j):j=e[78];let ge;e[79]===Symbol.for("react.memo_cache_sentinel")?(ge=s.jsxs("div",{className:"ppt-section-header",children:[s.jsx("span",{className:"ppt-section-title-en",children:"Ticket & Customer Information"}),s.jsx("span",{className:"ppt-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[79]=ge):ge=e[79];let be;e[80]===Symbol.for("react.memo_cache_sentinel")?(be=s.jsxs("span",{className:"ppt-field-label",children:["Ticket No. ",s.jsx("span",{className:"ppt-field-label-si",children:"/ අංකය"})]}),e[80]=be):be=e[80];let te;e[81]===Symbol.for("react.memo_cache_sentinel")?(te={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[81]=te):te=e[81];let oe;e[82]!==n.ticketNumber?(oe=s.jsxs("div",{className:"ppt-info-cell",children:[be,s.jsx("span",{className:"ppt-field-value",style:te,children:n.ticketNumber})]}),e[82]=n.ticketNumber,e[83]=oe):oe=e[83];let he;e[84]===Symbol.for("react.memo_cache_sentinel")?(he=s.jsxs("span",{className:"ppt-field-label",children:["Date ",s.jsx("span",{className:"ppt-field-label-si",children:"/ දිනය"})]}),e[84]=he):he=e[84];let se;e[85]!==n.pawnDate?(se=dt(n.pawnDate),e[85]=n.pawnDate,e[86]=se):se=e[86];let G;e[87]!==se?(G=s.jsxs("div",{className:"ppt-info-cell",children:[he,s.jsx("span",{className:"ppt-field-value",children:se})]}),e[87]=se,e[88]=G):G=e[88];let Ne;e[89]===Symbol.for("react.memo_cache_sentinel")?(Ne=s.jsxs("span",{className:"ppt-field-label",children:["Customer Name ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[89]=Ne):Ne=e[89];let ne;e[90]!==n.customerName?(ne=s.jsxs("div",{className:"ppt-info-cell",children:[Ne,s.jsx("span",{className:"ppt-field-value",children:n.customerName})]}),e[90]=n.customerName,e[91]=ne):ne=e[91];let ye;e[92]===Symbol.for("react.memo_cache_sentinel")?(ye=s.jsxs("span",{className:"ppt-field-label",children:["NIC No. ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[92]=ye):ye=e[92];let je;e[93]!==n.customerNIC?(je=s.jsxs("div",{className:"ppt-info-cell",children:[ye,s.jsx("span",{className:"ppt-field-value",children:n.customerNIC})]}),e[93]=n.customerNIC,e[94]=je):je=e[94];let De;e[95]===Symbol.for("react.memo_cache_sentinel")?(De=s.jsxs("span",{className:"ppt-field-label",children:["Phone ",s.jsx("span",{className:"ppt-field-label-si",children:"/ දුරකථනය"})]}),e[95]=De):De=e[95];let Pe;e[96]!==n.customerPhone?(Pe=s.jsxs("div",{className:"ppt-info-cell",children:[De,s.jsx("span",{className:"ppt-field-value",children:n.customerPhone})]}),e[96]=n.customerPhone,e[97]=Pe):Pe=e[97];let ke;e[98]===Symbol.for("react.memo_cache_sentinel")?(ke=s.jsxs("span",{className:"ppt-field-label",children:["Address ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ලිපිනය"})]}),e[98]=ke):ke=e[98];let Ae;e[99]===Symbol.for("react.memo_cache_sentinel")?(Ae={fontSize:"9pt"},e[99]=Ae):Ae=e[99];let ve;e[100]!==n.customerAddress?(ve=s.jsxs("div",{className:"ppt-info-cell",children:[ke,s.jsx("span",{className:"ppt-field-value",style:Ae,children:n.customerAddress})]}),e[100]=n.customerAddress,e[101]=ve):ve=e[101],e[102]!==oe||e[103]!==G||e[104]!==ne||e[105]!==je||e[106]!==Pe||e[107]!==ve?(b=s.jsxs("div",{className:"ppt-section",children:[ge,s.jsxs("div",{className:"ppt-info-grid",children:[oe,G,ne,je,Pe,ve]})]}),e[102]=oe,e[103]=G,e[104]=ne,e[105]=je,e[106]=Pe,e[107]=ve,e[108]=b):b=e[108];let _e;e[109]===Symbol.for("react.memo_cache_sentinel")?(_e={borderTop:"none"},e[109]=_e):_e=e[109];let Se;e[110]===Symbol.for("react.memo_cache_sentinel")?(Se=s.jsxs("div",{className:"ppt-section-header",children:[s.jsx("span",{className:"ppt-section-title-en",children:"Gold Items / රන් භාණ්ඩ විස්තරය"}),s.jsx("span",{className:"ppt-section-title-si",children:"Pawned Articles"})]}),e[110]=Se):Se=e[110];let Me,Ee;e[111]===Symbol.for("react.memo_cache_sentinel")?(Me=s.jsx("th",{style:{width:"5%"},children:"#"}),Ee={width:"32%"},e[111]=Me,e[112]=Ee):(Me=e[111],Ee=e[112]);let Te,Re;e[113]===Symbol.for("react.memo_cache_sentinel")?(Te=s.jsxs("th",{style:Ee,children:["Description",s.jsx("span",{className:"si",children:"විස්තරය"})]}),Re={width:"10%"},e[113]=Te,e[114]=Re):(Te=e[113],Re=e[114]);let ze,ue;e[115]===Symbol.for("react.memo_cache_sentinel")?(ze=s.jsxs("th",{style:Re,children:["Karat",s.jsx("span",{className:"si",children:"කැරට්"})]}),ue={width:"13%"},e[115]=ze,e[116]=ue):(ze=e[115],ue=e[116]);let Ce,We;e[117]===Symbol.for("react.memo_cache_sentinel")?(Ce=s.jsxs("th",{style:ue,children:["Gross Wt",s.jsx("span",{className:"si",children:"මුළු බර"})]}),We={width:"13%"},e[117]=Ce,e[118]=We):(Ce=e[117],We=e[118]);let $e,Fe;e[119]===Symbol.for("react.memo_cache_sentinel")?($e=s.jsxs("th",{style:We,children:["Net Wt",s.jsx("span",{className:"si",children:"ශුද්ධ බර"})]}),Fe={width:"13%"},e[119]=$e,e[120]=Fe):($e=e[119],Fe=e[120]);let Xe,Le;e[121]===Symbol.for("react.memo_cache_sentinel")?(Xe=s.jsxs("th",{style:Fe,children:["Gold Wt",s.jsx("span",{className:"si",children:"රන් බර"})]}),Le={width:"14%"},e[121]=Xe,e[122]=Le):(Xe=e[121],Le=e[122]);let Ge;e[123]===Symbol.for("react.memo_cache_sentinel")?(Ge=s.jsx("thead",{children:s.jsxs("tr",{children:[Me,Te,ze,Ce,$e,Xe,s.jsxs("th",{style:Le,children:["Value",s.jsx("span",{className:"si",children:"වටිනාකම"})]})]})}),e[123]=Ge):Ge=e[123];let Ve;e[124]!==n.items?(Ve=n.items.map(Zt),e[124]=n.items,e[125]=Ve):Ve=e[125];let Ze;e[126]===Symbol.for("react.memo_cache_sentinel")?(Ze={background:"#f5f5f5",fontWeight:700},e[126]=Ze):Ze=e[126];let et;e[127]===Symbol.for("react.memo_cache_sentinel")?(et=s.jsx("td",{colSpan:3,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total / මුළු එකතුව"}),e[127]=et):et=e[127];let Ue;e[128]!==n.totalGrossWeight?(Ue=tt(n.totalGrossWeight),e[128]=n.totalGrossWeight,e[129]=Ue):Ue=e[129];let Ke;e[130]!==Ue?(Ke=s.jsx("td",{className:"right",children:Ue}),e[130]=Ue,e[131]=Ke):Ke=e[131];let Ye;e[132]!==n.totalNetWeight?(Ye=tt(n.totalNetWeight),e[132]=n.totalNetWeight,e[133]=Ye):Ye=e[133];let He;e[134]!==Ye?(He=s.jsx("td",{className:"right",children:Ye}),e[134]=Ye,e[135]=He):He=e[135];let Je;e[136]!==n.totalNetWeight?(Je=tt(n.totalNetWeight),e[136]=n.totalNetWeight,e[137]=Je):Je=e[137];let Oe;e[138]!==Je?(Oe=s.jsx("td",{className:"right",children:Je}),e[138]=Je,e[139]=Oe):Oe=e[139];let qe;e[140]!==n.totalValuation?(qe=Ie(n.totalValuation),e[140]=n.totalValuation,e[141]=qe):qe=e[141];let st;e[142]!==qe?(st=s.jsx("td",{className:"right",children:qe}),e[142]=qe,e[143]=st):st=e[143];let nt;e[144]!==Ke||e[145]!==He||e[146]!==Oe||e[147]!==st?(nt=s.jsxs("tr",{style:Ze,children:[et,Ke,He,Oe,st]}),e[144]=Ke,e[145]=He,e[146]=Oe,e[147]=st,e[148]=nt):nt=e[148],e[149]!==Ve||e[150]!==nt?(c=s.jsxs("div",{className:"ppt-section",style:_e,children:[Se,s.jsxs("table",{className:"ppt-table",children:[Ge,s.jsxs("tbody",{children:[Ve,nt]})]})]}),e[149]=Ve,e[150]=nt,e[151]=c):c=e[151];let ht;e[152]===Symbol.for("react.memo_cache_sentinel")?(ht={borderTop:"none"},e[152]=ht):ht=e[152];let ft;e[153]===Symbol.for("react.memo_cache_sentinel")?(ft=s.jsxs("div",{className:"ppt-section-header",children:[s.jsx("span",{className:"ppt-section-title-en",children:"Loan Details / ණය විස්තර"}),s.jsx("span",{className:"ppt-section-title-si",children:"Finance Information"})]}),e[153]=ft):ft=e[153];let xt;e[154]===Symbol.for("react.memo_cache_sentinel")?(xt=s.jsxs("span",{className:"ppt-field-label",children:["Assessed Value ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ඇස්තමේන්තු වටිනාකම"})]}),e[154]=xt):xt=e[154];let lt;e[155]!==n.totalValuation?(lt=Ie(n.totalValuation),e[155]=n.totalValuation,e[156]=lt):lt=e[156];let at;e[157]!==lt?(at=s.jsxs("div",{className:"ppt-finance-cell",children:[xt,s.jsx("span",{className:"ppt-finance-amount",children:lt})]}),e[157]=lt,e[158]=at):at=e[158];let bt;e[159]===Symbol.for("react.memo_cache_sentinel")?(bt=s.jsxs("span",{className:"ppt-field-label",children:["LTV Ratio ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ණය අනුපාතය"})]}),e[159]=bt):bt=e[159];const St=n.loanToValueRatio*100;let it;e[160]!==St?(it=St.toFixed(0),e[160]=St,e[161]=it):it=e[161];let ot;e[162]!==it?(ot=s.jsxs("div",{className:"ppt-finance-cell",children:[bt,s.jsxs("span",{className:"ppt-finance-amount",children:[it,"%"]})]}),e[162]=it,e[163]=ot):ot=e[163];let gt;e[164]===Symbol.for("react.memo_cache_sentinel")?(gt={background:"#f9f9f9"},e[164]=gt):gt=e[164];let Nt;e[165]===Symbol.for("react.memo_cache_sentinel")?(Nt=s.jsxs("span",{className:"ppt-field-label",children:["Loan Amount ",s.jsx("span",{className:"ppt-field-label-si",children:"/ ණය මුදල"})]}),e[165]=Nt):Nt=e[165];let jt;e[166]===Symbol.for("react.memo_cache_sentinel")?(jt={fontSize:"15pt"},e[166]=jt):jt=e[166];let ct;e[167]!==n.principalAmount?(ct=Ie(n.principalAmount),e[167]=n.principalAmount,e[168]=ct):ct=e[168];let rt;e[169]!==ct?(rt=s.jsxs("div",{className:"ppt-finance-cell",style:gt,children:[Nt,s.jsx("span",{className:"ppt-finance-amount",style:jt,children:ct})]}),e[169]=ct,e[170]=rt):rt=e[170],e[171]!==at||e[172]!==ot||e[173]!==rt?(_=s.jsxs("div",{className:"ppt-section",style:ht,children:[ft,s.jsxs("div",{className:"ppt-finance-grid",children:[at,ot,rt]})]}),e[171]=at,e[172]=ot,e[173]=rt,e[174]=_):_=e[174],V="ppt-section",e[175]===Symbol.for("react.memo_cache_sentinel")?(N={borderTop:"none"},e[175]=N):N=e[175],e[176]===Symbol.for("react.memo_cache_sentinel")?(p=s.jsxs("div",{className:"ppt-section-header",children:[s.jsx("span",{className:"ppt-section-title-en",children:"Interest & Repayment / පොලී සහ ආපසු ගෙවීම"}),s.jsx("span",{className:"ppt-section-title-si",children:"Interest Information"})]}),e[176]=p):p=e[176];let vt;e[177]===Symbol.for("react.memo_cache_sentinel")?(vt=s.jsxs("span",{className:"ppt-interest-label",children:["Interest Rate ",s.jsx("span",{className:"si",children:"පොලී අනුපාතය"})]}),e[177]=vt):vt=e[177],e[178]!==n.interestRatePerMonth?(r=s.jsxs("div",{className:"ppt-interest-row",children:[vt,s.jsxs("span",{className:"ppt-interest-value",children:[n.interestRatePerMonth,"% per month / මාසයකට"]})]}),e[178]=n.interestRatePerMonth,e[179]=r):r=e[179];let ut;e[180]===Symbol.for("react.memo_cache_sentinel")?(ut=s.jsxs("span",{className:"ppt-interest-label",children:["Loan Period ",s.jsx("span",{className:"si",children:"ණය කාලය"})]}),e[180]=ut):ut=e[180],e[181]!==g?(m=s.jsxs("div",{className:"ppt-interest-row",children:[ut,s.jsxs("span",{className:"ppt-interest-value",children:[g," Month(s) / මාස"]})]}),e[181]=g,e[182]=m):m=e[182];let yt;e[183]===Symbol.for("react.memo_cache_sentinel")?(yt=s.jsxs("span",{className:"ppt-interest-label",children:["Maturity Date ",s.jsx("span",{className:"si",children:"කල් පිරෙන දිනය"})]}),e[183]=yt):yt=e[183];let mt;e[184]!==n.maturityDate?(mt=dt(n.maturityDate),e[184]=n.maturityDate,e[185]=mt):mt=e[185],e[186]!==mt?(w=s.jsxs("div",{className:"ppt-interest-row",children:[yt,s.jsx("span",{className:"ppt-interest-value",children:mt})]}),e[186]=mt,e[187]=w):w=e[187];let wt;e[188]===Symbol.for("react.memo_cache_sentinel")?(wt=s.jsxs("span",{className:"ppt-interest-label",children:["Grace Period ",s.jsx("span",{className:"si",children:"සහන කාලය"})]}),e[188]=wt):wt=e[188],e[189]!==n.gracePeriodDays?(W=s.jsxs("div",{className:"ppt-interest-row",children:[wt,s.jsxs("span",{className:"ppt-interest-value",children:[n.gracePeriodDays," Days / දින"]})]}),e[189]=n.gracePeriodDays,e[190]=W):W=e[190];let _t;e[191]===Symbol.for("react.memo_cache_sentinel")?(_t=s.jsxs("span",{className:"ppt-interest-label",children:["Estimated Interest at Maturity ",s.jsx("span",{className:"si",children:"කල් පිරෙන විට ඇස්තමේන්තු පොලිය"})]}),e[191]=_t):_t=e[191],k=s.jsxs("div",{className:"ppt-interest-row",children:[_t,s.jsx("span",{className:"ppt-interest-value",children:Ie(v.totalInterest)})]}),K="ppt-interest-row total",e[192]===Symbol.for("react.memo_cache_sentinel")?(I=s.jsxs("span",{className:"ppt-interest-label",children:["Total Payable at Maturity ",s.jsx("span",{className:"si",children:"කල් පිරෙන විට ගෙවිය යුතු මුළු මුදල"})]}),e[192]=I):I=e[192],U="ppt-interest-value",S=Ie(v.totalPayable),e[7]=a.address,e[8]=a.city,e[9]=a.email,e[10]=a.name,e[11]=a.phone,e[12]=a.phone2,e[13]=a.registrationNumber,e[14]=g,e[15]=t,e[16]=n.customerAddress,e[17]=n.customerNIC,e[18]=n.customerName,e[19]=n.customerPhone,e[20]=n.gracePeriodDays,e[21]=n.interestRatePerMonth,e[22]=n.items,e[23]=n.loanToValueRatio,e[24]=n.maturityDate,e[25]=n.pawnDate,e[26]=n.principalAmount,e[27]=n.ticketNumber,e[28]=n.totalGrossWeight,e[29]=n.totalNetWeight,e[30]=n.totalValuation,e[31]=I,e[32]=V,e[33]=N,e[34]=p,e[35]=r,e[36]=m,e[37]=w,e[38]=W,e[39]=k,e[40]=h,e[41]=f,e[42]=x,e[43]=d,e[44]=j,e[45]=b,e[46]=c,e[47]=_,e[48]=U,e[49]=S,e[50]=K}else I=e[31],V=e[32],N=e[33],p=e[34],r=e[35],m=e[36],w=e[37],W=e[38],k=e[39],h=e[40],f=e[41],x=e[42],d=e[43],j=e[44],b=e[45],c=e[46],_=e[47],U=e[48],S=e[49],K=e[50];let A;e[193]!==U||e[194]!==S?(A=s.jsx("span",{className:U,children:S}),e[193]=U,e[194]=S,e[195]=A):A=e[195];let E;e[196]!==I||e[197]!==A||e[198]!==K?(E=s.jsxs("div",{className:K,children:[I,A]}),e[196]=I,e[197]=A,e[198]=K,e[199]=E):E=e[199];let D;e[200]!==V||e[201]!==N||e[202]!==p||e[203]!==r||e[204]!==m||e[205]!==w||e[206]!==W||e[207]!==k||e[208]!==E?(D=s.jsxs("div",{className:V,style:N,children:[p,r,m,w,W,k,E]}),e[200]=V,e[201]=N,e[202]=p,e[203]=r,e[204]=m,e[205]=w,e[206]=W,e[207]=k,e[208]=E,e[209]=D):D=e[209];let T;e[210]===Symbol.for("react.memo_cache_sentinel")?(T=s.jsxs("div",{className:"ppt-terms-header",children:["Terms & Conditions / ",s.jsx("span",{className:"si",children:"නියමයන් සහ කොන්දේසි"})]}),e[210]=T):T=e[210];let Y;e[211]!==a.pawnTerms||e[212]!==Q||e[213]!==n.interestRatePerMonth?(Y=Q.length>0?Q.map(es):a?.pawnTerms?a.pawnTerms.split(`
`).filter(ts).map(ss):s.jsxs(s.Fragment,{children:[s.jsxs("li",{children:["Interest of ",n.interestRatePerMonth,"% is charged per month, even for one day. Daily pro-rata applies after the first month.",s.jsxs("span",{className:"si",children:[" / ",n.interestRatePerMonth,"% ක් මාසිකව අය කෙරේ. පළමු මාසයෙන් පසු දෛනික ගණනය කෙරේ."]})]}),s.jsxs("li",{children:["Items must be redeemed within the loan period plus grace period with original ticket and valid ID.",s.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),s.jsxs("li",{children:["Unredeemed items after the grace period may be forfeited without further notice.",s.jsx("span",{className:"si",children:" / සහන කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),s.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",s.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[211]=a.pawnTerms,e[212]=Q,e[213]=n.interestRatePerMonth,e[214]=Y):Y=e[214];let q;e[215]!==Y?(q=s.jsxs("div",{className:"ppt-terms",children:[T,s.jsx("ul",{className:"ppt-terms-list",children:Y})]}),e[215]=Y,e[216]=q):q=e[216];let $;e[217]===Symbol.for("react.memo_cache_sentinel")?($=s.jsx("div",{className:"ppt-sig-space"}),e[217]=$):$=e[217];let H;e[218]===Symbol.for("react.memo_cache_sentinel")?(H=s.jsxs("div",{className:"ppt-sig-box",children:[$,s.jsxs("div",{className:"ppt-sig-label",children:["Customer / ",s.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[218]=H):H=e[218];let F;e[219]===Symbol.for("react.memo_cache_sentinel")?(F=s.jsx("div",{className:"ppt-sig-space"}),e[219]=F):F=e[219];let P;e[220]===Symbol.for("react.memo_cache_sentinel")?(P=s.jsxs("div",{className:"ppt-sig-box",children:[F,s.jsxs("div",{className:"ppt-sig-label",children:["Valuer / ",s.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[220]=P):P=e[220];let X;e[221]===Symbol.for("react.memo_cache_sentinel")?(X=s.jsx("div",{className:"ppt-sig-space"}),e[221]=X):X=e[221];let ae,L;e[222]===Symbol.for("react.memo_cache_sentinel")?(ae=s.jsxs("div",{className:"ppt-sig-row",children:[H,P,s.jsxs("div",{className:"ppt-sig-box",children:[X,s.jsxs("div",{className:"ppt-sig-label",children:["Manager / ",s.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),L=s.jsx("div",{className:"ppt-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[222]=ae,e[223]=L):(ae=e[222],L=e[223]);let R;e[224]===Symbol.for("react.memo_cache_sentinel")?(R=new Date().toLocaleString("en-GB"),e[224]=R):R=e[224];let M;e[225]!==a.registrationNumber?(M=s.jsxs("div",{className:"ppt-footer",children:["Printed: ",R,"  |  ",a.registrationNumber,"  |  This is a computer-generated document."]}),e[225]=a.registrationNumber,e[226]=M):M=e[226];let C;return e[227]!==h||e[228]!==f||e[229]!==x||e[230]!==d||e[231]!==j||e[232]!==b||e[233]!==c||e[234]!==_||e[235]!==D||e[236]!==q||e[237]!==M?(C=s.jsxs("div",{ref:h,className:f,children:[x,d,j,b,c,_,D,q,ae,L,M]}),e[227]=h,e[228]=f,e[229]=x,e[230]=d,e[231]=j,e[232]=b,e[233]=c,e[234]=_,e[235]=D,e[236]=q,e[237]=M,e[238]=C):C=e[238],C});Qt.displayName="PrintablePawnTicket";function Xt(l){l.target.style.display="none"}function Zt(l,t){return s.jsxs("tr",{children:[s.jsx("td",{className:"center",children:t+1}),s.jsxs("td",{children:[s.jsx("strong",{children:l.itemType}),l.description&&s.jsx("div",{className:"item-sub",children:l.description}),l.hasGemstones&&s.jsxs("div",{className:"item-sub",children:["* ",l.gemstoneDescription]})]}),s.jsx("td",{className:"center",children:l.karat}),s.jsx("td",{className:"right",children:tt(l.grossWeight)}),s.jsx("td",{className:"right",children:tt(l.netWeight)}),s.jsx("td",{className:"right",children:tt(l.netWeight)}),s.jsx("td",{className:"right",children:Ie(l.valuedAmount)})]},l.id)}function es(l){return s.jsxs("li",{children:[s.jsx("span",{className:"en",children:l.en}),l.si&&s.jsx("span",{className:"si",children:l.si}),l.ta&&s.jsx("span",{className:"ta",children:l.ta})]},l.groupId)}function ts(l){return l.trim()}function ss(l,t){const e=l.split(" / ");return s.jsxs("li",{children:[e[0]?.trim(),e[1]&&s.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}const ns={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"};function Be(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Tt(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function ls(l){switch(l){case"redemption":return{en:"REDEMPTION RECEIPT",si:"මුදා ගැනීමේ රිසිට්පත"};case"interest":return{en:"INTEREST PAYMENT RECEIPT",si:"පොලී ගෙවීමේ රිසිට්පත"};default:return{en:"PAYMENT RECEIPT",si:"ගෙවීම් රිසිට්පත"}}}function xs(l){const t=pt.c(159),{data:e,company:n}=l,i=n||ns;let we;t[0]!==e.paymentType?(we=ls(e.paymentType),t[0]=e.paymentType,t[1]=we):we=t[1];const a=we;let o;t[2]===Symbol.for("react.memo_cache_sentinel")?(o=s.jsx("style",{children:`
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
           display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 2mm 3mm 2mm;;
        }
        .inv-header-left { flex: 1; }
        .inv-header-right { text-align: right; font-size: 8pt; color: #333; min-width: 44mm; }
        .inv-company-sinhala-large {
          font-size: 20pt; font-weight: 900; color: #111;
          letter-spacing: 1px; line-height: 1.1; margin: 0 0 0.5mm;
          font-family: 'Noto Sans Sinhala', sans-serif;
        }
        .inv-company-name {
          font-size: 9pt; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #444; margin: 0 0 1mm; line-height: 1.2;
        }
        .inv-company-contact { font-size: 7.5pt; color: #444; line-height: 1.6; margin-top: 1mm; }
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
      `}),t[2]=o):o=t[2];let Q;t[3]===Symbol.for("react.memo_cache_sentinel")?(Q={display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"1mm"},t[3]=Q):Q=t[3];let B,y,le;t[4]===Symbol.for("react.memo_cache_sentinel")?(B=s.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"40px",height:"40px",objectFit:"contain",borderRadius:"3px",marginTop:"1mm",flexShrink:0},onError:os}),y={flex:1},le=s.jsx("div",{className:"inv-company-sinhala-large",children:"ඔනෙල්කා ජුවලරි"}),t[4]=B,t[5]=y,t[6]=le):(B=t[4],y=t[5],le=t[6]);let g;t[7]!==i.name?(g=s.jsxs("div",{style:Q,children:[B,s.jsxs("div",{style:y,children:[le,s.jsx("div",{className:"inv-company-name",children:i.name})]})]}),t[7]=i.name,t[8]=g):g=t[8];let I;t[9]===Symbol.for("react.memo_cache_sentinel")?(I=s.jsx("br",{}),t[9]=I):I=t[9];const V=i.phone2?` / ${i.phone2}`:"";let N;t[10]===Symbol.for("react.memo_cache_sentinel")?(N=s.jsx("br",{}),t[10]=N):N=t[10];let p;t[11]!==i.address||t[12]!==i.city||t[13]!==i.email||t[14]!==i.phone||t[15]!==V?(p=s.jsxs("div",{className:"inv-company-contact",children:[i.address,", ",i.city,I,"Tel: ",i.phone,V,N,i.email]}),t[11]=i.address,t[12]=i.city,t[13]=i.email,t[14]=i.phone,t[15]=V,t[16]=p):p=t[16];let r;t[17]!==p||t[18]!==g?(r=s.jsxs("div",{className:"inv-header-left",children:[g,p]}),t[17]=p,t[18]=g,t[19]=r):r=t[19];let m;t[20]===Symbol.for("react.memo_cache_sentinel")?(m=s.jsx("div",{className:"inv-form-label",children:"Receipt No. / රිසිට් අංකය"}),t[20]=m):m=t[20];let w;t[21]!==e.clearanceNumber?(w=s.jsx("div",{className:"inv-form-no",children:e.clearanceNumber}),t[21]=e.clearanceNumber,t[22]=w):w=t[22];let W,k;t[23]===Symbol.for("react.memo_cache_sentinel")?(W={marginTop:"2mm"},k=s.jsx("div",{className:"inv-form-label",children:"Date / දිනය"}),t[23]=W,t[24]=k):(W=t[23],k=t[24]);let h;t[25]!==e.paymentDate?(h=Tt(e.paymentDate),t[25]=e.paymentDate,t[26]=h):h=t[26];let f;t[27]!==h?(f=s.jsxs("div",{style:W,children:[k,s.jsx("div",{className:"inv-form-no",children:h})]}),t[27]=h,t[28]=f):f=t[28];let x;t[29]!==w||t[30]!==f?(x=s.jsxs("div",{className:"inv-header-right",children:[m,w,f]}),t[29]=w,t[30]=f,t[31]=x):x=t[31];let d;t[32]!==r||t[33]!==x?(d=s.jsxs("div",{className:"inv-header",children:[r,x]}),t[32]=r,t[33]=x,t[34]=d):d=t[34];let j;t[35]!==a.en?(j=s.jsx("div",{className:"inv-title-en",children:a.en}),t[35]=a.en,t[36]=j):j=t[36];let b;t[37]!==a.si?(b=s.jsx("div",{className:"inv-title-si",children:a.si}),t[37]=a.si,t[38]=b):b=t[38];let c;t[39]!==j||t[40]!==b?(c=s.jsxs("div",{className:"inv-title-bar",children:[j,b]}),t[39]=j,t[40]=b,t[41]=c):c=t[41];let _;t[42]===Symbol.for("react.memo_cache_sentinel")?(_=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Customer & Payment Details"}),s.jsx("span",{className:"inv-section-title-si",children:"ගනුදෙනුකරු සහ ගෙවීම් විස්තර"})]}),t[42]=_):_=t[42];let U;t[43]===Symbol.for("react.memo_cache_sentinel")?(U=s.jsxs("span",{className:"inv-field-label",children:["Customer Name ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),t[43]=U):U=t[43];let S;t[44]!==e.customerName?(S=s.jsxs("div",{className:"inv-info-cell",children:[U,s.jsx("span",{className:"inv-field-value",children:e.customerName})]}),t[44]=e.customerName,t[45]=S):S=t[45];let K;t[46]===Symbol.for("react.memo_cache_sentinel")?(K=s.jsxs("span",{className:"inv-field-label",children:["Ticket No. ",s.jsx("span",{className:"inv-field-label-si",children:"/ ටිකට් අංකය"})]}),t[46]=K):K=t[46];let A;t[47]===Symbol.for("react.memo_cache_sentinel")?(A={fontFamily:"Consolas, monospace"},t[47]=A):A=t[47];let E;t[48]!==e.clearanceNumber?(E=s.jsxs("div",{className:"inv-info-cell",children:[K,s.jsx("span",{className:"inv-field-value",style:A,children:e.clearanceNumber})]}),t[48]=e.clearanceNumber,t[49]=E):E=t[49];let D;t[50]!==e.customerNic?(D=e.customerNic&&s.jsxs("div",{className:"inv-info-cell",children:[s.jsxs("span",{className:"inv-field-label",children:["NIC No. ",s.jsx("span",{className:"inv-field-label-si",children:"/ ජා.හැ.අංකය"})]}),s.jsx("span",{className:"inv-field-value",children:e.customerNic})]}),t[50]=e.customerNic,t[51]=D):D=t[51];let T;t[52]!==e.customerPhone?(T=e.customerPhone&&s.jsxs("div",{className:"inv-info-cell",children:[s.jsxs("span",{className:"inv-field-label",children:["Phone ",s.jsx("span",{className:"inv-field-label-si",children:"/ දුරකථනය"})]}),s.jsx("span",{className:"inv-field-value",children:e.customerPhone})]}),t[52]=e.customerPhone,t[53]=T):T=t[53];let Y;t[54]===Symbol.for("react.memo_cache_sentinel")?(Y=s.jsxs("span",{className:"inv-field-label",children:["Pawn Date ",s.jsx("span",{className:"inv-field-label-si",children:"/ උකස් දිනය"})]}),t[54]=Y):Y=t[54];let q;t[55]!==e.pawnDate?(q=Tt(e.pawnDate),t[55]=e.pawnDate,t[56]=q):q=t[56];let $;t[57]!==q?($=s.jsxs("div",{className:"inv-info-cell",children:[Y,s.jsx("span",{className:"inv-field-value",children:q})]}),t[57]=q,t[58]=$):$=t[58];let H;t[59]===Symbol.for("react.memo_cache_sentinel")?(H=s.jsxs("span",{className:"inv-field-label",children:["Payment Date ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ දිනය"})]}),t[59]=H):H=t[59];let F;t[60]!==e.paymentDate?(F=Tt(e.paymentDate),t[60]=e.paymentDate,t[61]=F):F=t[61];let P;t[62]!==F?(P=s.jsxs("div",{className:"inv-info-cell",children:[H,s.jsx("span",{className:"inv-field-value",children:F})]}),t[62]=F,t[63]=P):P=t[63];let X;t[64]===Symbol.for("react.memo_cache_sentinel")?(X=s.jsxs("span",{className:"inv-field-label",children:["Payment Method ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ ක්‍රමය"})]}),t[64]=X):X=t[64];let ae;t[65]!==e.paymentMethod?(ae=e.paymentMethod.replace("-"," ").toUpperCase(),t[65]=e.paymentMethod,t[66]=ae):ae=t[66];let L;t[67]!==ae?(L=s.jsxs("div",{className:"inv-info-cell",children:[X,s.jsx("span",{className:"inv-field-value",children:s.jsx("span",{className:"inv-status",children:ae})})]}),t[67]=ae,t[68]=L):L=t[68];let R;t[69]===Symbol.for("react.memo_cache_sentinel")?(R=s.jsxs("span",{className:"inv-field-label",children:["Payment Type ",s.jsx("span",{className:"inv-field-label-si",children:"/ ගෙවීමේ වර්ගය"})]}),t[69]=R):R=t[69];const M=e.paymentType==="redemption"?"FULL REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let C;t[70]!==M?(C=s.jsxs("div",{className:"inv-info-cell",children:[R,s.jsx("span",{className:"inv-field-value",children:s.jsx("span",{className:"inv-status",children:M})})]}),t[70]=M,t[71]=C):C=t[71];let v;t[72]!==e.customerAddress?(v=e.customerAddress&&s.jsxs("div",{className:"inv-info-cell full",children:[s.jsxs("span",{className:"inv-field-label",children:["Address ",s.jsx("span",{className:"inv-field-label-si",children:"/ ලිපිනය"})]}),s.jsx("span",{className:"inv-field-value",style:{fontSize:"9pt"},children:e.customerAddress})]}),t[72]=e.customerAddress,t[73]=v):v=t[73];let z;t[74]!==S||t[75]!==E||t[76]!==D||t[77]!==T||t[78]!==$||t[79]!==P||t[80]!==L||t[81]!==C||t[82]!==v?(z=s.jsxs("div",{className:"inv-section",children:[_,s.jsxs("div",{className:"inv-info-grid",children:[S,E,D,T,$,P,L,C,v]})]}),t[74]=S,t[75]=E,t[76]=D,t[77]=T,t[78]=$,t[79]=P,t[80]=L,t[81]=C,t[82]=v,t[83]=z):z=t[83];let J;t[84]===Symbol.for("react.memo_cache_sentinel")?(J=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Pawned Items / උකස් භාණ්ඩ විස්තරය"}),s.jsx("span",{className:"inv-section-title-si",children:"Gold Articles"})]}),t[84]=J):J=t[84];let ie,Z;t[85]===Symbol.for("react.memo_cache_sentinel")?(ie=s.jsx("th",{style:{width:"5%"},children:"#"}),Z={width:"42%"},t[85]=ie,t[86]=Z):(ie=t[85],Z=t[86]);let O,u;t[87]===Symbol.for("react.memo_cache_sentinel")?(O=s.jsxs("th",{style:Z,children:["Description",s.jsx("span",{className:"si",children:"විස්තරය"})]}),u={width:"13%"},t[87]=O,t[88]=u):(O=t[87],u=t[88]);let ee,ce;t[89]===Symbol.for("react.memo_cache_sentinel")?(ee=s.jsxs("th",{style:u,children:["Karat",s.jsx("span",{className:"si",children:"කැරට්"})]}),ce={width:"15%"},t[89]=ee,t[90]=ce):(ee=t[89],ce=t[90]);let re,fe;t[91]===Symbol.for("react.memo_cache_sentinel")?(re=s.jsxs("th",{style:ce,children:["Weight",s.jsx("span",{className:"si",children:"බර"})]}),fe={width:"25%"},t[91]=re,t[92]=fe):(re=t[91],fe=t[92]);let me;t[93]===Symbol.for("react.memo_cache_sentinel")?(me=s.jsx("thead",{children:s.jsxs("tr",{children:[ie,O,ee,re,s.jsxs("th",{style:fe,children:["Value (Ref.)",s.jsx("span",{className:"si",children:"වටිනාකම"})]})]})}),t[93]=me):me=t[93];let de;t[94]!==e.items?(de=e.items.map(is),t[94]=e.items,t[95]=de):de=t[95];let pe;t[96]!==de?(pe=s.jsx("tbody",{children:de}),t[96]=de,t[97]=pe):pe=t[97];let xe;t[98]===Symbol.for("react.memo_cache_sentinel")?(xe=s.jsx("td",{colSpan:4,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total Assessed Value / මුළු ඇස්තමේන්තු වටිනාකම"}),t[98]=xe):xe=t[98];let ge;t[99]!==e.items?(ge=Be(e.items.reduce(as,0)),t[99]=e.items,t[100]=ge):ge=t[100];let be;t[101]!==ge?(be=s.jsx("tfoot",{children:s.jsxs("tr",{children:[xe,s.jsx("td",{className:"right",children:ge})]})}),t[101]=ge,t[102]=be):be=t[102];let te;t[103]!==pe||t[104]!==be?(te=s.jsxs("div",{className:"inv-section",children:[J,s.jsxs("table",{className:"inv-table",children:[me,pe,be]})]}),t[103]=pe,t[104]=be,t[105]=te):te=t[105];let oe;t[106]!==e.additionalMonthsInterest||t[107]!==e.daysElapsed||t[108]!==e.firstMonthInterest||t[109]!==e.interestRate||t[110]!==e.principalAmount||t[111]!==e.proratedDailyInterest||t[112]!==e.totalInterest?(oe=e.totalInterest!=null&&e.totalInterest>0&&s.jsxs("div",{className:"inv-section",children:[s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Interest Calculation / පොලී ගණනය"}),s.jsx("span",{className:"inv-section-title-si",children:"Interest Breakdown"})]}),e.daysElapsed!=null&&s.jsxs("div",{className:"inv-breakdown-row",children:[s.jsx("span",{className:"l",children:"Days Elapsed / ගත වූ දින"}),s.jsxs("span",{className:"v",children:[e.daysElapsed," days"]})]}),s.jsxs("div",{className:"inv-breakdown-row",children:[s.jsx("span",{className:"l",children:"Interest Rate / පොලී අනුපාතය"}),s.jsxs("span",{className:"v",children:[e.interestRate,"% per month"]})]}),s.jsxs("div",{className:"inv-breakdown-row",children:[s.jsx("span",{className:"l",children:"Principal / ණය මුදල"}),s.jsx("span",{className:"v",children:Be(e.principalAmount)})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&s.jsxs("div",{className:"inv-breakdown-row sub",children:[s.jsxs("span",{className:"l",children:["First Month Interest (",e.interestRate,"%)"]}),s.jsx("span",{className:"v",children:Be(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&s.jsxs("div",{className:"inv-breakdown-row sub",children:[s.jsx("span",{className:"l",children:"Additional Months Interest"}),s.jsx("span",{className:"v",children:Be(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&s.jsxs("div",{className:"inv-breakdown-row sub",children:[s.jsx("span",{className:"l",children:"Pro-rated Daily Interest"}),s.jsx("span",{className:"v",children:Be(e.proratedDailyInterest)})]})]}),t[106]=e.additionalMonthsInterest,t[107]=e.daysElapsed,t[108]=e.firstMonthInterest,t[109]=e.interestRate,t[110]=e.principalAmount,t[111]=e.proratedDailyInterest,t[112]=e.totalInterest,t[113]=oe):oe=t[113];let he;t[114]===Symbol.for("react.memo_cache_sentinel")?(he=s.jsxs("div",{className:"inv-section-header",children:[s.jsx("span",{className:"inv-section-title-en",children:"Payment Summary / ගෙවීම් සාරාංශය"}),s.jsx("span",{className:"inv-section-title-si",children:"Financial Details"})]}),t[114]=he):he=t[114];let se;t[115]===Symbol.for("react.memo_cache_sentinel")?(se=s.jsxs("span",{className:"inv-totals-label",children:["Principal Amount ",s.jsx("span",{className:"si",children:"ණය මුදල"})]}),t[115]=se):se=t[115];let G;t[116]!==e.principalAmount?(G=Be(e.principalAmount),t[116]=e.principalAmount,t[117]=G):G=t[117];let Ne;t[118]!==G?(Ne=s.jsxs("div",{className:"inv-totals-row",children:[se,s.jsx("span",{className:"inv-totals-value",children:G})]}),t[118]=G,t[119]=Ne):Ne=t[119];let ne;t[120]!==e.totalInterest?(ne=e.totalInterest!=null&&e.totalInterest>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Total Interest ",s.jsx("span",{className:"si",children:"මුළු පොලිය"})]}),s.jsx("span",{className:"inv-totals-value",children:Be(e.totalInterest)})]}),t[120]=e.totalInterest,t[121]=ne):ne=t[121];let ye;t[122]!==e.previousPayments?(ye=e.previousPayments!=null&&e.previousPayments>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Previous Payments ",s.jsx("span",{className:"si",children:"පෙර ගෙවීම්"})]}),s.jsxs("span",{className:"inv-totals-value",children:["(",Be(e.previousPayments),")"]})]}),t[122]=e.previousPayments,t[123]=ye):ye=t[123];let je;t[124]!==e.totalPayable?(je=e.totalPayable!=null&&s.jsxs("div",{className:"inv-totals-row highlight",children:[s.jsxs("span",{className:"inv-totals-label",children:["Total Due ",s.jsx("span",{className:"si",children:"ගෙවිය යුතු මුළු මුදල"})]}),s.jsx("span",{className:"inv-totals-value",style:{fontSize:"13pt"},children:Be(e.totalPayable)})]}),t[124]=e.totalPayable,t[125]=je):je=t[125];let De;t[126]===Symbol.for("react.memo_cache_sentinel")?(De=s.jsxs("span",{className:"inv-totals-label",children:["Amount Paid ",s.jsx("span",{className:"si",children:"ගෙවූ මුදල"})]}),t[126]=De):De=t[126];let Pe;t[127]===Symbol.for("react.memo_cache_sentinel")?(Pe={fontSize:"13pt"},t[127]=Pe):Pe=t[127];let ke;t[128]!==e.paymentAmount?(ke=Be(e.paymentAmount),t[128]=e.paymentAmount,t[129]=ke):ke=t[129];let Ae;t[130]!==ke?(Ae=s.jsxs("div",{className:"inv-totals-row balance",children:[De,s.jsx("span",{className:"inv-totals-value",style:Pe,children:ke})]}),t[130]=ke,t[131]=Ae):Ae=t[131];let ve;t[132]!==e.remainingBalance?(ve=e.remainingBalance!=null&&e.remainingBalance>0&&s.jsxs("div",{className:"inv-totals-row",children:[s.jsxs("span",{className:"inv-totals-label",children:["Remaining Balance ",s.jsx("span",{className:"si",children:"ශේෂ මුදල"})]}),s.jsx("span",{className:"inv-totals-value",children:Be(e.remainingBalance)})]}),t[132]=e.remainingBalance,t[133]=ve):ve=t[133];let _e;t[134]!==Ne||t[135]!==ne||t[136]!==ye||t[137]!==je||t[138]!==Ae||t[139]!==ve?(_e=s.jsxs("div",{className:"inv-section",children:[he,Ne,ne,ye,je,Ae,ve]}),t[134]=Ne,t[135]=ne,t[136]=ye,t[137]=je,t[138]=Ae,t[139]=ve,t[140]=_e):_e=t[140];let Se;t[141]!==e.notes?(Se=e.notes&&s.jsxs("div",{className:"inv-box",children:[s.jsx("div",{className:"inv-box-cap",children:"Notes / සටහන"}),s.jsx("p",{children:e.notes})]}),t[141]=e.notes,t[142]=Se):Se=t[142];let Me;t[143]===Symbol.for("react.memo_cache_sentinel")?(Me=s.jsx("div",{className:"inv-sig-space"}),t[143]=Me):Me=t[143];let Ee;t[144]===Symbol.for("react.memo_cache_sentinel")?(Ee=s.jsxs("div",{className:"inv-sig-box",children:[Me,s.jsxs("div",{className:"inv-sig-label",children:["Customer / ",s.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),t[144]=Ee):Ee=t[144];let Te;t[145]===Symbol.for("react.memo_cache_sentinel")?(Te=s.jsx("div",{className:"inv-sig-space"}),t[145]=Te):Te=t[145];let Re;t[146]===Symbol.for("react.memo_cache_sentinel")?(Re=s.jsxs("div",{className:"inv-sig-row",children:[Ee,s.jsxs("div",{className:"inv-sig-box",children:[Te,s.jsxs("div",{className:"inv-sig-label",children:["Authorized / ",s.jsx("span",{className:"si",children:"අනුමත නිලධාරී"})]})]})]}),t[146]=Re):Re=t[146];let ze;t[147]===Symbol.for("react.memo_cache_sentinel")?(ze=new Date().toLocaleString("en-GB"),t[147]=ze):ze=t[147];let ue;t[148]!==e.clearanceNumber?(ue=s.jsxs("div",{className:"inv-footer",children:["Printed: ",ze,"  |  ",e.clearanceNumber,"  |  Computer-generated document."]}),t[148]=e.clearanceNumber,t[149]=ue):ue=t[149];let Ce;return t[150]!==d||t[151]!==c||t[152]!==z||t[153]!==te||t[154]!==oe||t[155]!==_e||t[156]!==Se||t[157]!==ue?(Ce=s.jsxs("div",{className:"inv-root",children:[o,d,c,z,te,oe,_e,Se,Re,ue]}),t[150]=d,t[151]=c,t[152]=z,t[153]=te,t[154]=oe,t[155]=_e,t[156]=Se,t[157]=ue,t[158]=Ce):Ce=t[158],Ce}function as(l,t){return l+t.total}function is(l,t){return s.jsxs("tr",{children:[s.jsx("td",{className:"center",style:{color:"#888"},children:String(t+1).padStart(2,"0")}),s.jsxs("td",{children:[s.jsx("strong",{children:l.productName}),(l.metalType||l.karat)&&s.jsxs("div",{className:"inv-item-sub",children:[l.metalType?.toUpperCase(),l.karat?` · ${l.karat}`:""]})]}),s.jsx("td",{className:"center",children:l.karat||"—"}),s.jsx("td",{className:"center",children:l.metalWeight?`${Number(l.metalWeight).toFixed(3)} g`:"—"}),s.jsx("td",{className:"right",style:{fontWeight:600},children:Be(l.total)})]},t)}function os(l){l.target.style.display="none"}function Qe(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function It(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const Dt={redemption:{labelEn:"REDEMPTION",labelSi:"මුදා ගැනීම",icon:"🔓"},interest:{labelEn:"INTEREST PAYMENT",labelSi:"පොලී ගෙවීම",icon:"💰"},partial:{labelEn:"PARTIAL PAYMENT",labelSi:"අර්ධ ගෙවීම",icon:"💳"}},cs={cash:"මුදල්",card:"කාඩ්","bank-transfer":"බැංකු",cheque:"චෙක්",other:"වෙනත්"};function bs(l){const t=pt.c(128),{data:e,company:n}=l,i=Dt[e.paymentType]||Dt.partial,we=cs[e.paymentMethod]||e.paymentMethod;let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=new Date().toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),t[0]=a):a=t[0];const o=a;let Q,B;t[1]===Symbol.for("react.memo_cache_sentinel")?(Q=s.jsx("style",{children:`
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
      `}),B=s.jsx("div",{className:"pos-tear-top"}),t[1]=Q,t[2]=B):(Q=t[1],B=t[2]);let y;t[3]===Symbol.for("react.memo_cache_sentinel")?(y=s.jsxs("div",{className:"pos-logo-row",children:[s.jsx("img",{src:"/logo.jpg",alt:"",style:{width:"28px",height:"28px",objectFit:"contain",borderRadius:"3px"},onError:ms}),s.jsx("div",{className:"pos-company-si",children:"ඔනෙල්කා ජුවලරි"})]}),t[3]=y):y=t[3];const le=n?.name||"Onelka Jewellery";let g;t[4]!==le?(g=s.jsx("div",{className:"pos-company-en",children:le}),t[4]=le,t[5]=g):g=t[5];const I=n?.address||"Makandura, Matara";let V;t[6]===Symbol.for("react.memo_cache_sentinel")?(V=s.jsx("br",{}),t[6]=V):V=t[6];const N=n?.phone||"0770400789";let p;t[7]!==I||t[8]!==N?(p=s.jsxs("div",{className:"pos-contact",children:[I,V,"දු.ල. / Tel: ",N]}),t[7]=I,t[8]=N,t[9]=p):p=t[9];let r;t[10]!==p||t[11]!==g?(r=s.jsxs("div",{className:"pos-header",children:[y,g,p]}),t[10]=p,t[11]=g,t[12]=r):r=t[12];let m;t[13]!==i.labelEn?(m=s.jsx("span",{className:"pos-title-en",children:i.labelEn}),t[13]=i.labelEn,t[14]=m):m=t[14];let w;t[15]!==i.labelSi?(w=s.jsx("span",{className:"pos-title-si",children:i.labelSi}),t[15]=i.labelSi,t[16]=w):w=t[16];let W;t[17]!==m||t[18]!==w?(W=s.jsxs("div",{className:"pos-title-band",children:[m,w]}),t[17]=m,t[18]=w,t[19]=W):W=t[19];let k;t[20]===Symbol.for("react.memo_cache_sentinel")?(k=s.jsx("div",{className:"pos-ticket-label",children:"ටිකට් අංකය / Ticket No."}),t[20]=k):k=t[20];let h;t[21]!==e.clearanceNumber?(h=s.jsxs("div",{className:"pos-ticket-badge",children:[k,s.jsx("div",{className:"pos-ticket-no",children:e.clearanceNumber})]}),t[21]=e.clearanceNumber,t[22]=h):h=t[22];let f;t[23]===Symbol.for("react.memo_cache_sentinel")?(f=s.jsx("div",{className:"pos-section-cap",children:"දිනයන් / Dates"}),t[23]=f):f=t[23];let x;t[24]===Symbol.for("react.memo_cache_sentinel")?(x=s.jsxs("span",{className:"lbl",children:["උකස් දිනය",s.jsx("span",{className:"si",children:"Pawn Date"})]}),t[24]=x):x=t[24];let d;t[25]!==e.pawnDate?(d=It(e.pawnDate),t[25]=e.pawnDate,t[26]=d):d=t[26];let j;t[27]!==d?(j=s.jsxs("div",{className:"pos-row",children:[x,s.jsx("span",{className:"val",children:d})]}),t[27]=d,t[28]=j):j=t[28];let b;t[29]===Symbol.for("react.memo_cache_sentinel")?(b=s.jsxs("span",{className:"lbl",children:["ගෙවීමේ දිනය",s.jsx("span",{className:"si",children:"Payment Date"})]}),t[29]=b):b=t[29];let c;t[30]!==e.paymentDate?(c=It(e.paymentDate),t[30]=e.paymentDate,t[31]=c):c=t[31];let _;t[32]!==c?(_=s.jsxs("div",{className:"pos-row",children:[b,s.jsx("span",{className:"val",children:c})]}),t[32]=c,t[33]=_):_=t[33];let U;t[34]!==e.daysElapsed?(U=e.daysElapsed!=null&&e.daysElapsed>0&&s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"lbl",children:["ගත වූ දින",s.jsx("span",{className:"si",children:"Days Elapsed"})]}),s.jsxs("span",{className:"val",children:[e.daysElapsed," දින"]})]}),t[34]=e.daysElapsed,t[35]=U):U=t[35];let S;t[36]!==j||t[37]!==_||t[38]!==U?(S=s.jsxs("div",{className:"pos-section",children:[f,j,_,U]}),t[36]=j,t[37]=_,t[38]=U,t[39]=S):S=t[39];let K;t[40]===Symbol.for("react.memo_cache_sentinel")?(K=s.jsx("div",{className:"pos-section-cap",children:"ගනුදෙනුකරු / Customer"}),t[40]=K):K=t[40];let A;t[41]===Symbol.for("react.memo_cache_sentinel")?(A=s.jsxs("span",{className:"lbl",children:["නම",s.jsx("span",{className:"si",children:"Name"})]}),t[41]=A):A=t[41];let E;t[42]!==e.customerName?(E=s.jsxs("div",{className:"pos-row",children:[A,s.jsx("span",{className:"val",children:e.customerName})]}),t[42]=e.customerName,t[43]=E):E=t[43];let D;t[44]!==e.customerNic?(D=e.customerNic&&s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"lbl",children:["ජා.හැ.අංකය",s.jsx("span",{className:"si",children:"NIC"})]}),s.jsx("span",{className:"val",children:e.customerNic})]}),t[44]=e.customerNic,t[45]=D):D=t[45];let T;t[46]!==e.customerPhone?(T=e.customerPhone&&s.jsxs("div",{className:"pos-row",children:[s.jsxs("span",{className:"lbl",children:["දුරකථනය",s.jsx("span",{className:"si",children:"Phone"})]}),s.jsx("span",{className:"val",children:e.customerPhone})]}),t[46]=e.customerPhone,t[47]=T):T=t[47];let Y;t[48]!==E||t[49]!==D||t[50]!==T?(Y=s.jsxs("div",{className:"pos-section",children:[K,E,D,T]}),t[48]=E,t[49]=D,t[50]=T,t[51]=Y):Y=t[51];const q=e.paymentType==="redemption"?"ආපසු ලබා දුන් භාණ්ඩ / Items Returned":"උකස් භාණ්ඩ / Pawned Items";let $;t[52]!==q?($=s.jsx("div",{className:"pos-section-cap",children:q}),t[52]=q,t[53]=$):$=t[53];let H;t[54]!==e.items?(H=e.items.map(rs),t[54]=e.items,t[55]=H):H=t[55];let F;t[56]!==$||t[57]!==H?(F=s.jsxs("div",{className:"pos-section",children:[$,H]}),t[56]=$,t[57]=H,t[58]=F):F=t[58];let P;t[59]!==e.additionalMonthsInterest||t[60]!==e.firstMonthInterest||t[61]!==e.interestRate||t[62]!==e.principalAmount||t[63]!==e.proratedDailyInterest||t[64]!==e.totalInterest?(P=e.totalInterest!=null&&e.totalInterest>0&&s.jsxs("div",{className:"pos-section",children:[s.jsx("div",{className:"pos-section-cap",children:"පොලී ගණනය / Interest"}),s.jsxs("div",{className:"pos-calc-row",children:[s.jsx("span",{children:"ණය මුදල / Principal"}),s.jsx("span",{className:"v",children:Qe(e.principalAmount)})]}),s.jsxs("div",{className:"pos-calc-row",children:[s.jsx("span",{children:"අනුපාතය / Rate"}),s.jsxs("span",{className:"v",children:[e.interestRate,"% / මාසය"]})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&s.jsxs("div",{className:"pos-calc-row sub",children:[s.jsx("span",{children:"1 වන මාසය"}),s.jsx("span",{className:"v",children:Qe(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&s.jsxs("div",{className:"pos-calc-row sub",children:[s.jsx("span",{children:"අමතර මාස"}),s.jsx("span",{className:"v",children:Qe(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&s.jsxs("div",{className:"pos-calc-row sub",children:[s.jsx("span",{children:"දෛනික පොලිය"}),s.jsx("span",{className:"v",children:Qe(e.proratedDailyInterest)})]}),s.jsxs("div",{className:"pos-calc-row",style:{borderTop:"0.5px dashed #ccc",paddingTop:"1mm",marginTop:"1mm",fontWeight:700,color:"#111"},children:[s.jsx("span",{children:"මුළු පොලිය / Total Interest"}),s.jsx("span",{className:"v",children:Qe(e.totalInterest)})]})]}),t[59]=e.additionalMonthsInterest,t[60]=e.firstMonthInterest,t[61]=e.interestRate,t[62]=e.principalAmount,t[63]=e.proratedDailyInterest,t[64]=e.totalInterest,t[65]=P):P=t[65];let X;t[66]===Symbol.for("react.memo_cache_sentinel")?(X=s.jsx("div",{className:"pos-section-cap",children:"ගෙවීම් සාරාංශය / Summary"}),t[66]=X):X=t[66];let ae;t[67]===Symbol.for("react.memo_cache_sentinel")?(ae=s.jsx("span",{children:"ණය මුදල / Principal"}),t[67]=ae):ae=t[67];let L;t[68]!==e.principalAmount?(L=Qe(e.principalAmount),t[68]=e.principalAmount,t[69]=L):L=t[69];let R;t[70]!==L?(R=s.jsxs("div",{className:"pos-calc-row",children:[ae,s.jsx("span",{className:"v",children:L})]}),t[70]=L,t[71]=R):R=t[71];let M;t[72]!==e.totalInterest?(M=e.totalInterest!=null&&e.totalInterest>0&&s.jsxs("div",{className:"pos-calc-row",children:[s.jsx("span",{children:"පොලිය / Interest"}),s.jsx("span",{className:"v",children:Qe(e.totalInterest)})]}),t[72]=e.totalInterest,t[73]=M):M=t[73];let C;t[74]!==e.previousPayments?(C=e.previousPayments!=null&&e.previousPayments>0&&s.jsxs("div",{className:"pos-calc-row",children:[s.jsx("span",{children:"පෙර ගෙවීම් / Prev. Paid"}),s.jsxs("span",{className:"v",children:["(",Qe(e.previousPayments),")"]})]}),t[74]=e.previousPayments,t[75]=C):C=t[75];let v;t[76]!==e.totalPayable?(v=e.totalPayable!=null&&s.jsxs("div",{className:"pos-calc-row",style:{fontWeight:700,color:"#111",borderTop:"0.5px dashed #ccc",paddingTop:"1mm",marginTop:"1mm"},children:[s.jsx("span",{children:"ගෙවිය යුතු / Total Due"}),s.jsx("span",{className:"v",children:Qe(e.totalPayable)})]}),t[76]=e.totalPayable,t[77]=v):v=t[77];let z;t[78]!==R||t[79]!==M||t[80]!==C||t[81]!==v?(z=s.jsxs("div",{className:"pos-section",children:[X,R,M,C,v]}),t[78]=R,t[79]=M,t[80]=C,t[81]=v,t[82]=z):z=t[82];let J,ie;t[83]===Symbol.for("react.memo_cache_sentinel")?(J=s.jsx("span",{className:"pos-total-label-si",children:"ගෙවූ මුදල"}),ie=s.jsx("span",{className:"pos-total-label-en",children:"Amount Paid"}),t[83]=J,t[84]=ie):(J=t[83],ie=t[84]);let Z;t[85]!==e.paymentAmount?(Z=Qe(e.paymentAmount),t[85]=e.paymentAmount,t[86]=Z):Z=t[86];let O;t[87]!==Z?(O=s.jsxs("div",{className:"pos-total-band",children:[J,ie,s.jsx("span",{className:"pos-total-amount",children:Z})]}),t[87]=Z,t[88]=O):O=t[88];let u;t[89]!==e.remainingBalance?(u=e.remainingBalance!=null&&e.remainingBalance>0&&s.jsxs("div",{className:"pos-balance",children:[s.jsx("div",{className:"lbl",children:"ශේෂ මුදල / Remaining Balance"}),s.jsx("div",{className:"val",children:Qe(e.remainingBalance)})]}),t[89]=e.remainingBalance,t[90]=u):u=t[90];let ee;t[91]!==e.paymentMethod?(ee=e.paymentMethod.replace("-"," ").toUpperCase(),t[91]=e.paymentMethod,t[92]=ee):ee=t[92];let ce;t[93]!==ee?(ce=s.jsx("div",{className:"pos-method-badge",children:ee}),t[93]=ee,t[94]=ce):ce=t[94];let re;t[95]!==we?(re=s.jsxs("div",{className:"pos-method-si",children:[we," මගින් ගෙවන ලදී"]}),t[95]=we,t[96]=re):re=t[96];let fe;t[97]!==ce||t[98]!==re?(fe=s.jsxs("div",{className:"pos-method",children:[ce,re]}),t[97]=ce,t[98]=re,t[99]=fe):fe=t[99];let me;t[100]!==e.notes?(me=e.notes&&s.jsxs("div",{className:"pos-section",style:{fontSize:"8pt",color:"#555"},children:[s.jsx("div",{className:"pos-section-cap",children:"සටහන / Notes"}),e.notes]}),t[100]=e.notes,t[101]=me):me=t[101];let de,pe;t[102]===Symbol.for("react.memo_cache_sentinel")?(de=s.jsx("div",{className:"pos-footer-si",children:"ස්තූතියි! 🙏"}),pe=s.jsx("div",{className:"pos-footer-en",children:"Thank you for your patronage"}),t[102]=de,t[103]=pe):(de=t[102],pe=t[103]);const xe=n?.name||"Onelka Jewellery";let ge;t[104]===Symbol.for("react.memo_cache_sentinel")?(ge=s.jsx("br",{}),t[104]=ge):ge=t[104];const be=n?.address||"Makandura, Matara";let te;t[105]===Symbol.for("react.memo_cache_sentinel")?(te=s.jsx("br",{}),t[105]=te):te=t[105];const oe=n?.phone||"0770400789";let he;t[106]!==xe||t[107]!==be||t[108]!==oe?(he=s.jsxs("div",{className:"pos-footer-contact",children:[xe,ge,be,te,oe]}),t[106]=xe,t[107]=be,t[108]=oe,t[109]=he):he=t[109];let se;t[110]===Symbol.for("react.memo_cache_sentinel")?(se=s.jsx("div",{className:"pos-timestamp",children:o}),t[110]=se):se=t[110];let G;t[111]!==he?(G=s.jsxs("div",{className:"pos-footer",children:[de,pe,he,se]}),t[111]=he,t[112]=G):G=t[112];let Ne;t[113]===Symbol.for("react.memo_cache_sentinel")?(Ne=s.jsx("div",{className:"pos-tear-bottom"}),t[113]=Ne):Ne=t[113];let ne;return t[114]!==r||t[115]!==W||t[116]!==h||t[117]!==S||t[118]!==Y||t[119]!==F||t[120]!==P||t[121]!==z||t[122]!==O||t[123]!==u||t[124]!==fe||t[125]!==me||t[126]!==G?(ne=s.jsxs("div",{className:"pos-root",children:[Q,B,r,W,h,S,Y,F,P,z,O,u,fe,me,G,Ne]}),t[114]=r,t[115]=W,t[116]=h,t[117]=S,t[118]=Y,t[119]=F,t[120]=P,t[121]=z,t[122]=O,t[123]=u,t[124]=fe,t[125]=me,t[126]=G,t[127]=ne):ne=t[127],ne}function rs(l,t){return s.jsxs("div",{className:"pos-item",children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0"},children:[s.jsx("span",{className:"pos-item-num",children:t+1}),s.jsx("span",{className:"pos-item-name",children:l.productName})]}),(l.karat||l.metalWeight||l.metalType)&&s.jsx("div",{className:"pos-item-meta",children:[l.karat,l.metalType?.toUpperCase(),l.metalWeight?`${l.metalWeight}g`:null].filter(Boolean).join(" · ")})]},t)}function ms(l){l.target.style.display="none"}export{At as P,$t as a,fs as b,bs as c,xs as d,Qt as e};
