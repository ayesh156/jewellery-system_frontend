import{r as Ne,c as ve,j as n}from"./vendor-react-C-Dg_Q4f.js";import{K as we,f as o,l as ke}from"./pages-invoices-Pc0bt88a.js";const Se={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},ze=Ne.forwardRef((s,i)=>{const e=ve.c(161),{invoice:t,customer:l,company:je}=s,a=je===void 0?Se:je;let O;e[0]!==t.items?(O=()=>t.items.reduce(_e,0),e[0]=t.items,e[1]=O):O=e[1];const xe=O;let r,c,d,h,m,x,b,f,g,p;if(e[2]!==xe||e[3]!==a.address||e[4]!==a.city||e[5]!==a.email||e[6]!==a.name||e[7]!==a.phone||e[8]!==a.phone2||e[9]!==a.tagline||e[10]!==a.website||e[11]!==l||e[12]!==t.customerAddress||e[13]!==t.customerName||e[14]!==t.customerPhone||e[15]!==t.dueDate||e[16]!==t.invoiceNumber||e[17]!==t.issueDate||e[18]!==t.items||e[19]!==t.status||e[20]!==t.subtotal||e[21]!==i){const ye=xe();f=i,g="print-invoice-a5",e[32]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx("style",{children:`
          /* =========================================
             A5 Invoice Styles - Jewellery System
             A5 Size: 148mm x 210mm
             ========================================= */
          
          /* System fonts - no external loading */
          
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            body {
              margin: 0;
              padding: 0;
              background: white;
            }
            
            .print-invoice-a5 {
              width: 100%;
              max-width: none;
              padding: 0;
              margin: 0 auto;
              background: white !important;
              color: #1a1a1a !important;
            }
            
            .no-print {
              display: none !important;
            }

            table {
              page-break-inside: avoid;
            }
          }
          
          .print-invoice-a5 {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 20mm;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            font-size: 10pt;
            line-height: 1.5;
            box-sizing: border-box;
          }

          /* ========== Header Section ========== */
          .invoice-header-a5 {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 2px solid #333;
            position: relative;
          }

          .invoice-header-a5::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #333, transparent);
          }

          .company-info-a5 {
            flex: 1;
          }

          .company-info-a5 h1 {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 24pt;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0 0 3px 0;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .company-info-a5 .tagline {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 10pt;
            color: #666;
            font-style: italic;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }

          .company-info-a5 .details {
            font-size: 9pt;
            color: #666;
            line-height: 1.5;
          }

          .invoice-title-a5 {
            text-align: right;
          }

          .invoice-title-a5 h2 {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 28pt;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 2px;
          }

          .invoice-title-a5 .invoice-number {
            font-size: 12pt;
            font-weight: 600;
            color: #333;
            margin-top: 6px;
            background: white;
            padding: 4px 12px;
            border-radius: 3px;
            border: 1.5px solid #999;
          }

          /* ========== Meta Section ========== */
          .invoice-meta-a5 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            gap: 16px;
          }

          .meta-box-a5 {
            flex: 1;
            padding: 10px 14px;
            background: white;
            border-left: 2.5px solid #333;
            border-radius: 0;
          }

          .meta-box-a5.right {
            border-left: none;
            border-right: 2.5px solid #333;
            border-radius: 0;
            text-align: right;
          }

          .meta-box-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 5px;
          }

          .meta-box-a5 .name {
            font-size: 13pt;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 3px;
          }

          .meta-box-a5 .info {
            font-size: 10pt;
            color: #555;
            line-height: 1.5;
          }

          /* ========== Items Table ========== */
          .items-table-a5 {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 14px;
            font-size: 11pt;
          }

          .items-table-a5 thead th {
            background: white;
            color: #1a1a1a;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            padding: 8px 8px;
            text-align: left;
            border-bottom: 2px solid #333;
            border-top: 1px solid #333;
          }

          .items-table-a5 thead th:first-child {
            width: 6%;
            text-align: center;
            border-radius: 3px 0 0 0;
          }

          .items-table-a5 thead th:nth-child(2) {
            width: 35%;
          }

          .items-table-a5 thead th:nth-child(3) {
            width: 12%;
            text-align: center;
          }

          .items-table-a5 thead th:nth-child(4) {
            width: 8%;
            text-align: center;
          }

          .items-table-a5 thead th:nth-child(5),
          .items-table-a5 thead th:nth-child(6) {
            width: 18%;
            text-align: right;
          }

          .items-table-a5 thead th:last-child {
            border-radius: 0 3px 0 0;
          }

          .items-table-a5 tbody tr {
            border-bottom: 1px solid #ddd;
          }

          .items-table-a5 tbody tr:nth-child(even) {
            background: white;
          }

          .items-table-a5 tbody tr:hover {
            background: white;
          }

          .items-table-a5 tbody td {
            padding: 8px;
            color: #333;
            vertical-align: middle;
          }

          .items-table-a5 tbody td:first-child {
            text-align: center;
            color: #888;
            font-weight: 500;
          }

          .items-table-a5 tbody td:nth-child(2) .item-name {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 11pt;
          }

          .items-table-a5 tbody td:nth-child(2) .item-details {
            font-size: 9pt;
            color: #777;
            margin-top: 2px;
          }

          .items-table-a5 tbody td:nth-child(3),
          .items-table-a5 tbody td:nth-child(4) {
            text-align: center;
          }

          .items-table-a5 tbody td:nth-child(5),
          .items-table-a5 tbody td:nth-child(6) {
            text-align: right;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 10pt;
          }

          .items-table-a5 tbody td:nth-child(6) {
            font-weight: 600;
            color: #1a1a1a;
          }

          /* ========== Totals Section ========== */
          .totals-section-a5 {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
          }

          .totals-box-a5 {
            width: 50%;
          }

          .totals-row-a5 {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            font-size: 11pt;
          }

          .totals-row-a5 .label {
            color: #666;
          }

          .totals-row-a5 .value {
            font-family: 'Consolas', 'Monaco', monospace;
            color: #333;
            font-weight: 500;
          }

          .totals-row-a5.subtotal {
            border-bottom: 1px solid #ddd;
          }

          .totals-row-a5.discount {
            color: #333;
          }

          .totals-row-a5.discount .value {
            color: #333;
          }

          .totals-row-a5.total {
            background: white;
            color: #1a1a1a;
            font-size: 13pt;
            font-weight: 700;
            margin-top: 6px;
            padding: 8px 10px;
            border-top: 2px solid #333;
            border-bottom: 2px solid #333;
          }

          .totals-row-a5.total .value {
            color: #1a1a1a;
            font-size: 14pt;
          }

          .totals-row-a5.total .label {
            color: #1a1a1a;
          }

          .totals-row-a5.balance {
            background: white;
            border: 1px solid #333;
            margin-top: 4px;
            border-radius: 3px;
          }

          .totals-row-a5.balance .label,
          .totals-row-a5.balance .value {
            color: #333;
            font-weight: 600;
          }

          /* ========== Payment Info ========== */
          .payment-info-a5 {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
          }

          .payment-box-a5 {
            flex: 1;
            padding: 10px 14px;
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            font-size: 11pt;
          }

          .payment-box-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
          }

          .payment-box-a5 .value {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 12pt;
          }

          /* ========== Status Badge ========== */
          .status-badge-a5 {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 10px;
            font-size: 9pt;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }

          .status-paid { background: white; color: #333; border: 1px solid #999; }
          .status-pending { background: white; color: #555; border: 1px solid #999; }
          .status-partial { background: white; color: #444; border: 1px solid #999; }
          .status-cancelled { background: white; color: #555; border: 1px solid #999; }
          .status-draft { background: white; color: #6b7280; border: 1px solid #999; }

          /* ========== Notes Section ========== */
          .notes-section-a5 {
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 12px;
          }

          .notes-section-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }

          .notes-section-a5 p {
            font-size: 10pt;
            color: #444;
            margin: 0;
            line-height: 1.5;
          }

          /* ========== Terms Section ========== */
          .terms-section-a5 {
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 14px;
          }

          .terms-section-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }

          .terms-section-a5 ul {
            margin: 0;
            padding-left: 16px;
            font-size: 9pt;
            color: #666;
            line-height: 1.6;
            list-style-type: disc;
          }

          .terms-section-a5 ul li {
            margin-bottom: 1px;
          }

          /* ========== Footer ========== */
          .footer-a5 {
            border-top: 2px solid #333;
            padding-top: 8px;
            text-align: center;
            position: relative;
          }

          .footer-a5::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #333, transparent);
          }

          .footer-a5 .thank-you {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 14pt;
            font-weight: 600;
            color: #333;
            margin-bottom: 6px;
          }

          .footer-a5 .contact {
            font-size: 10pt;
            color: #666;
          }

          .footer-a5 .contact a {
            color: #333;
            text-decoration: none;
            font-weight: 500;
          }

          .footer-a5 .tagline-footer {
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid #ddd;
            font-size: 9pt;
            color: #999;
            letter-spacing: 0.5px;
          }

          /* ========== Accent Decorations ========== */
          .gold-diamond {
            display: inline-block;
            width: 4px;
            height: 4px;
            background: white;
            border: 1px solid #333;
            transform: rotate(45deg);
            margin: 0 4px;
          }
        `}),e[32]=p):p=e[32];let te;e[33]===Symbol.for("react.memo_cache_sentinel")?(te={display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px"},e[33]=te):te=e[33];let ae;e[34]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain",borderRadius:"4px"}}),e[34]=ae):ae=e[34];let C;e[35]!==a.name?(C=n.jsxs("div",{style:te,children:[ae,n.jsx("h1",{children:a.name})]}),e[35]=a.name,e[36]=C):C=e[36];let M;e[37]!==a.tagline?(M=a.tagline&&n.jsx("div",{className:"tagline",children:a.tagline}),e[37]=a.tagline,e[38]=M):M=e[38];let se;e[39]===Symbol.for("react.memo_cache_sentinel")?(se=n.jsx("br",{}),e[39]=se):se=e[39];const ge=a.phone2&&`| ${a.phone2}`;let le;e[40]===Symbol.for("react.memo_cache_sentinel")?(le=n.jsx("br",{}),e[40]=le):le=e[40];let $;e[41]!==a.website?($=a.website&&n.jsxs(n.Fragment,{children:[" | Web: ",a.website]}),e[41]=a.website,e[42]=$):$=e[42];let F;e[43]!==a.address||e[44]!==a.city||e[45]!==a.email||e[46]!==a.phone||e[47]!==ge||e[48]!==$?(F=n.jsxs("div",{className:"details",children:[a.address,", ",a.city,se,"Tel: ",a.phone," ",ge,le,"Email: ",a.email,$]}),e[43]=a.address,e[44]=a.city,e[45]=a.email,e[46]=a.phone,e[47]=ge,e[48]=$,e[49]=F):F=e[49];let I;e[50]!==C||e[51]!==M||e[52]!==F?(I=n.jsxs("div",{className:"company-info-a5",children:[C,M,F]}),e[50]=C,e[51]=M,e[52]=F,e[53]=I):I=e[53];let ie;e[54]===Symbol.for("react.memo_cache_sentinel")?(ie=n.jsx("h2",{children:"INVOICE"}),e[54]=ie):ie=e[54];let E;e[55]!==t.invoiceNumber?(E=n.jsxs("div",{className:"invoice-title-a5",children:[ie,n.jsx("div",{className:"invoice-number",children:t.invoiceNumber})]}),e[55]=t.invoiceNumber,e[56]=E):E=e[56],e[57]!==I||e[58]!==E?(r=n.jsxs("div",{className:"invoice-header-a5",children:[I,E]}),e[57]=I,e[58]=E,e[59]=r):r=e[59];let oe;e[60]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("label",{children:"Bill To"}),e[60]=oe):oe=e[60];let B;e[61]!==t.customerName?(B=n.jsx("div",{className:"name",children:t.customerName}),e[61]=t.customerName,e[62]=B):B=e[62];let W;e[63]!==l?(W=l&&n.jsxs("div",{className:"info",children:[l.businessName&&n.jsxs(n.Fragment,{children:[l.businessName,n.jsx("br",{})]}),l.address&&n.jsxs(n.Fragment,{children:[l.address,n.jsx("br",{})]}),l.phone&&n.jsxs(n.Fragment,{children:["Tel: ",l.phone,n.jsx("br",{})]}),l.email&&n.jsx(n.Fragment,{children:l.email})]}),e[63]=l,e[64]=W):W=e[64];let G;e[65]!==l||e[66]!==t.customerAddress||e[67]!==t.customerPhone?(G=!l&&t.customerPhone&&n.jsxs("div",{className:"info",children:["Tel: ",t.customerPhone,n.jsx("br",{}),t.customerAddress]}),e[65]=l,e[66]=t.customerAddress,e[67]=t.customerPhone,e[68]=G):G=e[68];let U;e[69]!==B||e[70]!==W||e[71]!==G?(U=n.jsxs("div",{className:"meta-box-a5",children:[oe,B,W,G]}),e[69]=B,e[70]=W,e[71]=G,e[72]=U):U=e[72];let re;e[73]===Symbol.for("react.memo_cache_sentinel")?(re=n.jsx("label",{children:"Invoice Details"}),e[73]=re):re=e[73];let ce;e[74]===Symbol.for("react.memo_cache_sentinel")?(ce=n.jsx("strong",{children:"Date:"}),e[74]=ce):ce=e[74];let q;e[75]!==t.issueDate?(q=we(t.issueDate),e[75]=t.issueDate,e[76]=q):q=e[76];let de;e[77]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsx("br",{}),e[77]=de):de=e[77];let L;e[78]!==t.dueDate?(L=t.dueDate&&n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Due:"})," ",we(t.dueDate),n.jsx("br",{})]}),e[78]=t.dueDate,e[79]=L):L=e[79];let me;e[80]===Symbol.for("react.memo_cache_sentinel")?(me=n.jsx("strong",{children:"Status:"}),e[80]=me):me=e[80];const ue=`status-badge-a5 status-${t.status}`;let Q;e[81]!==t.status||e[82]!==ue?(Q=n.jsx("span",{className:ue,children:t.status}),e[81]=t.status,e[82]=ue,e[83]=Q):Q=e[83];let J;e[84]!==q||e[85]!==L||e[86]!==Q?(J=n.jsxs("div",{className:"meta-box-a5 right",children:[re,n.jsxs("div",{className:"info",children:[ce," ",q,de,L,me," ",Q]})]}),e[84]=q,e[85]=L,e[86]=Q,e[87]=J):J=e[87],e[88]!==U||e[89]!==J?(c=n.jsxs("div",{className:"invoice-meta-a5",children:[U,J]}),e[88]=U,e[89]=J,e[90]=c):c=e[90];let pe;e[91]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#"}),n.jsx("th",{children:"Item Description"}),n.jsx("th",{children:"Weight"}),n.jsx("th",{children:"Qty"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Amount"})]})}),e[91]=pe):pe=e[91];let Y;e[92]!==t.items?(Y=t.items.map(Pe),e[92]=t.items,e[93]=Y):Y=e[93],e[94]!==Y?(d=n.jsxs("table",{className:"items-table-a5",children:[pe,n.jsx("tbody",{children:Y})]}),e[94]=Y,e[95]=d):d=e[95],b="totals-section-a5",h="totals-box-a5";let he;e[96]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsx("span",{className:"label",children:"Subtotal"}),e[96]=he):he=e[96];let K;e[97]!==t.subtotal?(K=o(t.subtotal),e[97]=t.subtotal,e[98]=K):K=e[98],e[99]!==K?(m=n.jsxs("div",{className:"totals-row-a5 subtotal",children:[he,n.jsx("span",{className:"value",children:K})]}),e[99]=K,e[100]=m):m=e[100],x=ye>0&&n.jsxs("div",{className:"totals-row-a5 discount",children:[n.jsx("span",{className:"label",children:"Item Discounts"}),n.jsxs("span",{className:"value",children:["-",o(ye)]})]}),e[2]=xe,e[3]=a.address,e[4]=a.city,e[5]=a.email,e[6]=a.name,e[7]=a.phone,e[8]=a.phone2,e[9]=a.tagline,e[10]=a.website,e[11]=l,e[12]=t.customerAddress,e[13]=t.customerName,e[14]=t.customerPhone,e[15]=t.dueDate,e[16]=t.invoiceNumber,e[17]=t.issueDate,e[18]=t.items,e[19]=t.status,e[20]=t.subtotal,e[21]=i,e[22]=r,e[23]=c,e[24]=d,e[25]=h,e[26]=m,e[27]=x,e[28]=b,e[29]=f,e[30]=g,e[31]=p}else r=e[22],c=e[23],d=e[24],h=e[25],m=e[26],x=e[27],b=e[28],f=e[29],g=e[30],p=e[31];let u;e[101]!==t.discount||e[102]!==t.discountType?(u=t.discount>0&&n.jsxs("div",{className:"totals-row-a5 discount",children:[n.jsxs("span",{className:"label",children:["Discount ",t.discountType==="percentage"&&`(${t.discount}%)`]}),n.jsxs("span",{className:"value",children:["-",o(t.discount)]})]}),e[101]=t.discount,e[102]=t.discountType,e[103]=u):u=e[103];let j;e[104]!==t.tax||e[105]!==t.taxRate?(j=t.tax>0&&n.jsxs("div",{className:"totals-row-a5",children:[n.jsxs("span",{className:"label",children:["Tax ",t.taxRate&&`(${t.taxRate}%)`]}),n.jsx("span",{className:"value",children:o(t.tax)})]}),e[104]=t.tax,e[105]=t.taxRate,e[106]=j):j=e[106];let H;e[107]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsx("span",{className:"label",children:"Total Amount"}),e[107]=H):H=e[107];let y;e[108]!==t.total?(y=o(t.total),e[108]=t.total,e[109]=y):y=e[109];let w;e[110]!==y?(w=n.jsxs("div",{className:"totals-row-a5 total",children:[H,n.jsx("span",{className:"value",children:y})]}),e[110]=y,e[111]=w):w=e[111];let N;e[112]!==t.balanceDue?(N=t.balanceDue>0&&n.jsxs("div",{className:"totals-row-a5 balance",children:[n.jsx("span",{className:"label",children:"Balance Due"}),n.jsx("span",{className:"value",children:o(t.balanceDue)})]}),e[112]=t.balanceDue,e[113]=N):N=e[113];let v;e[114]!==u||e[115]!==j||e[116]!==w||e[117]!==N||e[118]!==h||e[119]!==m||e[120]!==x?(v=n.jsxs("div",{className:h,children:[m,x,u,j,w,N]}),e[114]=u,e[115]=j,e[116]=w,e[117]=N,e[118]=h,e[119]=m,e[120]=x,e[121]=v):v=e[121];let k;e[122]!==v||e[123]!==b?(k=n.jsx("div",{className:b,children:v}),e[122]=v,e[123]=b,e[124]=k):k=e[124];let S;e[125]!==t.amountPaid||e[126]!==t.paymentMethod?(S=t.amountPaid>0&&n.jsxs("div",{className:"payment-info-a5",children:[n.jsxs("div",{className:"payment-box-a5",children:[n.jsx("label",{children:"Amount Paid"}),n.jsx("div",{className:"value",children:o(t.amountPaid)})]}),t.paymentMethod&&n.jsxs("div",{className:"payment-box-a5",children:[n.jsx("label",{children:"Payment Method"}),n.jsx("div",{className:"value",children:t.paymentMethod.replace("-"," ").toUpperCase()})]})]}),e[125]=t.amountPaid,e[126]=t.paymentMethod,e[127]=S):S=e[127];let z;e[128]!==t.notes?(z=t.notes&&n.jsxs("div",{className:"notes-section-a5",children:[n.jsx("label",{children:"Notes"}),n.jsx("p",{children:t.notes})]}),e[128]=t.notes,e[129]=z):z=e[129];let V;e[130]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("label",{children:"Terms & Conditions"}),e[130]=V):V=e[130];let _;e[131]!==a.invoiceTerms?(_=a?.invoiceTerms?a.invoiceTerms.split(`
`).filter(Te).map(De):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"All jewellery items are hallmarked and certified."}),n.jsx("li",{children:"Exchange within 7 days with original receipt. No refunds on custom-made items."})]}),e[131]=a.invoiceTerms,e[132]=_):_=e[132];let P;e[133]!==_?(P=n.jsxs("div",{className:"terms-section-a5",children:[V,n.jsx("ul",{children:_})]}),e[133]=_,e[134]=P):P=e[134];let X;e[135]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsx("span",{className:"gold-diamond"}),e[135]=X):X=e[135];let Z;e[136]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsxs("div",{className:"thank-you",children:[X,"Thank You for Your Patronage",n.jsx("span",{className:"gold-diamond"})]}),e[136]=Z):Z=e[136];const be=`mailto:${a.email}`;let T;e[137]!==a.email||e[138]!==be?(T=n.jsx("a",{href:be,children:a.email}),e[137]=a.email,e[138]=be,e[139]=T):T=e[139];const fe=`tel:${a.phone}`;let D;e[140]!==a.phone||e[141]!==fe?(D=n.jsx("a",{href:fe,children:a.phone}),e[140]=a.phone,e[141]=fe,e[142]=D):D=e[142];let A;e[143]!==T||e[144]!==D?(A=n.jsxs("div",{className:"contact",children:["Questions? Contact us at ",T," or call ",D]}),e[143]=T,e[144]=D,e[145]=A):A=e[145];let ee;e[146]===Symbol.for("react.memo_cache_sentinel")?(ee=n.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),e[146]=ee):ee=e[146];let R;e[147]!==A?(R=n.jsxs("div",{className:"footer-a5",children:[Z,A,ee]}),e[147]=A,e[148]=R):R=e[148];let ne;return e[149]!==r||e[150]!==c||e[151]!==d||e[152]!==k||e[153]!==S||e[154]!==z||e[155]!==P||e[156]!==R||e[157]!==f||e[158]!==g||e[159]!==p?(ne=n.jsxs("div",{ref:f,className:g,children:[p,r,c,d,k,S,z,P,R]}),e[149]=r,e[150]=c,e[151]=d,e[152]=k,e[153]=S,e[154]=z,e[155]=P,e[156]=R,e[157]=f,e[158]=g,e[159]=p,e[160]=ne):ne=e[160],ne});ze.displayName="PrintableInvoice";function _e(s,i){const t=((i.originalPrice||i.unitPrice)-i.unitPrice)*i.quantity;return s+(t>0?t:0)}function Pe(s,i){return n.jsxs("tr",{children:[n.jsx("td",{children:String(i+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("div",{className:"item-name",children:s.productName}),n.jsxs("div",{className:"item-details",children:[s.metalType.toUpperCase(),s.karat&&` • ${s.karat}`,s.sku&&` • SKU: ${s.sku}`]})]}),n.jsx("td",{children:ke(s.metalWeight)}),n.jsx("td",{children:s.quantity}),n.jsx("td",{children:o(s.unitPrice)}),n.jsx("td",{children:o(s.total)})]},s.id)}function Te(s){return s.trim()}function De(s,i){return n.jsx("li",{children:s},i)}const Ae={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},Re=Ne.forwardRef((s,i)=>{const e=ve.c(161),{clearance:t,customer:l,company:je}=s,a=je===void 0?Ae:je;let O;e[0]!==t.items?(O=()=>t.items.reduce(Ce,0),e[0]=t.items,e[1]=O):O=e[1];const xe=O;let r,c,d,h,m,x,b,f,g,p;if(e[2]!==xe||e[3]!==t.clearanceNumber||e[4]!==t.clearanceReason||e[5]!==t.customerAddress||e[6]!==t.customerName||e[7]!==t.customerPhone||e[8]!==t.issueDate||e[9]!==t.items||e[10]!==t.status||e[11]!==t.subtotal||e[12]!==a.address||e[13]!==a.city||e[14]!==a.email||e[15]!==a.name||e[16]!==a.phone||e[17]!==a.phone2||e[18]!==a.tagline||e[19]!==a.website||e[20]!==l||e[21]!==i){const ye=xe();f=i,g="print-clearance-a5",e[32]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx("style",{children:`
          /* =========================================
             A5 Clearance Styles - Jewellery System
             A5 Size: 148mm x 210mm
             ========================================= */
          
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            body {
              margin: 0;
              padding: 0;
              background: white;
            }
            
            .print-clearance-a5 {
              width: 100%;
              max-width: none;
              padding: 0;
              margin: 0 auto;
              background: white !important;
              color: #1a1a1a !important;
            }
            
            .no-print {
              display: none !important;
            }

            table {
              page-break-inside: avoid;
            }
          }
          
          .print-clearance-a5 {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 20mm;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            font-size: 10pt;
            line-height: 1.5;
            box-sizing: border-box;
          }

          /* ========== Header Section ========== */
          .clr-header-a5 {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 2px solid #333;
            position: relative;
          }

          .clr-header-a5::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #333, transparent);
          }

          .clr-company-info-a5 {
            flex: 1;
          }

          .clr-company-info-a5 h1 {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 24pt;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0 0 3px 0;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .clr-company-info-a5 .tagline {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 10pt;
            color: #666;
            font-style: italic;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }

          .clr-company-info-a5 .details {
            font-size: 9pt;
            color: #666;
            line-height: 1.5;
          }

          .clr-title-a5 {
            text-align: right;
          }

          .clr-title-a5 h2 {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 22pt;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 2px;
          }

          .clr-title-a5 .clr-number {
            font-size: 12pt;
            font-weight: 600;
            color: #333;
            margin-top: 6px;
            background: white;
            padding: 4px 12px;
            border-radius: 3px;
            border: 1.5px solid #999;
          }

          /* ========== Meta Section ========== */
          .clr-meta-a5 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            gap: 16px;
          }

          .clr-meta-box-a5 {
            flex: 1;
            padding: 10px 14px;
            background: white;
            border-left: 2.5px solid #333;
            border-radius: 0;
          }

          .clr-meta-box-a5.right {
            border-left: none;
            border-right: 2.5px solid #333;
            border-radius: 0;
            text-align: right;
          }

          .clr-meta-box-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 5px;
          }

          .clr-meta-box-a5 .name {
            font-size: 13pt;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 3px;
          }

          .clr-meta-box-a5 .info {
            font-size: 10pt;
            color: #555;
            line-height: 1.5;
          }

          /* ========== Items Table ========== */
          .clr-items-table-a5 {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 14px;
            font-size: 11pt;
          }

          .clr-items-table-a5 thead th {
            background: white;
            color: #1a1a1a;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            padding: 8px 8px;
            text-align: left;
            border-bottom: 2px solid #333;
            border-top: 1px solid #333;
          }

          .clr-items-table-a5 thead th:first-child {
            width: 6%;
            text-align: center;
            border-radius: 3px 0 0 0;
          }

          .clr-items-table-a5 thead th:nth-child(2) {
            width: 35%;
          }

          .clr-items-table-a5 thead th:nth-child(3) {
            width: 12%;
            text-align: center;
          }

          .clr-items-table-a5 thead th:nth-child(4) {
            width: 8%;
            text-align: center;
          }

          .clr-items-table-a5 thead th:nth-child(5),
          .clr-items-table-a5 thead th:nth-child(6) {
            width: 18%;
            text-align: right;
          }

          .clr-items-table-a5 thead th:last-child {
            border-radius: 0 3px 0 0;
          }

          .clr-items-table-a5 tbody tr {
            border-bottom: 1px solid #ddd;
          }

          .clr-items-table-a5 tbody tr:nth-child(even) {
            background: white;
          }

          .clr-items-table-a5 tbody td {
            padding: 8px;
            color: #333;
            vertical-align: middle;
          }

          .clr-items-table-a5 tbody td:first-child {
            text-align: center;
            color: #888;
            font-weight: 500;
          }

          .clr-items-table-a5 tbody td:nth-child(2) .item-name {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 11pt;
          }

          .clr-items-table-a5 tbody td:nth-child(2) .item-details {
            font-size: 9pt;
            color: #777;
            margin-top: 2px;
          }

          .clr-items-table-a5 tbody td:nth-child(3),
          .clr-items-table-a5 tbody td:nth-child(4) {
            text-align: center;
          }

          .clr-items-table-a5 tbody td:nth-child(5),
          .clr-items-table-a5 tbody td:nth-child(6) {
            text-align: right;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 10pt;
          }

          .clr-items-table-a5 tbody td:nth-child(6) {
            font-weight: 600;
            color: #1a1a1a;
          }

          /* ========== Totals Section ========== */
          .clr-totals-section-a5 {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
          }

          .clr-totals-box-a5 {
            width: 50%;
          }

          .clr-totals-row-a5 {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            font-size: 11pt;
          }

          .clr-totals-row-a5 .label {
            color: #666;
          }

          .clr-totals-row-a5 .value {
            font-family: 'Consolas', 'Monaco', monospace;
            color: #333;
            font-weight: 500;
          }

          .clr-totals-row-a5.subtotal {
            border-bottom: 1px solid #ddd;
          }

          .clr-totals-row-a5.discount .value {
            color: #333;
          }

          .clr-totals-row-a5.total {
            background: white;
            color: #1a1a1a;
            font-size: 13pt;
            font-weight: 700;
            margin-top: 6px;
            padding: 8px 10px;
            border-top: 2px solid #333;
            border-bottom: 2px solid #333;
          }

          .clr-totals-row-a5.total .value {
            color: #1a1a1a;
            font-size: 14pt;
          }

          .clr-totals-row-a5.total .label {
            color: #1a1a1a;
          }

          .clr-totals-row-a5.balance {
            background: white;
            border: 1px solid #333;
            margin-top: 4px;
            border-radius: 3px;
          }

          .clr-totals-row-a5.balance .label,
          .clr-totals-row-a5.balance .value {
            color: #333;
            font-weight: 600;
          }

          /* ========== Payment Info ========== */
          .clr-payment-info-a5 {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
          }

          .clr-payment-box-a5 {
            flex: 1;
            padding: 10px 14px;
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            font-size: 11pt;
          }

          .clr-payment-box-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
          }

          .clr-payment-box-a5 .value {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 12pt;
          }

          /* ========== Status Badge ========== */
          .clr-status-badge-a5 {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 10px;
            font-size: 9pt;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }

          .clr-status-paid { background: white; color: #333; border: 1px solid #999; }
          .clr-status-pending { background: white; color: #555; border: 1px solid #999; }
          .clr-status-partial { background: white; color: #444; border: 1px solid #999; }
          .clr-status-cancelled { background: white; color: #555; border: 1px solid #999; }
          .clr-status-draft { background: white; color: #6b7280; border: 1px solid #999; }

          /* ========== Notes Section ========== */
          .clr-notes-section-a5 {
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 12px;
          }

          .clr-notes-section-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }

          .clr-notes-section-a5 p {
            font-size: 10pt;
            color: #444;
            margin: 0;
            line-height: 1.5;
          }

          /* ========== Terms Section ========== */
          .clr-terms-section-a5 {
            background: white;
            border: 1px solid #999;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 14px;
          }

          .clr-terms-section-a5 label {
            display: block;
            font-size: 9pt;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }

          .clr-terms-section-a5 ul {
            margin: 0;
            padding-left: 16px;
            font-size: 9pt;
            color: #666;
            line-height: 1.6;
            list-style-type: disc;
          }

          .clr-terms-section-a5 ul li {
            margin-bottom: 1px;
          }

          /* ========== Footer ========== */
          .clr-footer-a5 {
            border-top: 2px solid #333;
            padding-top: 8px;
            text-align: center;
            position: relative;
          }

          .clr-footer-a5::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #333, transparent);
          }

          .clr-footer-a5 .thank-you {
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 14pt;
            font-weight: 600;
            color: #333;
            margin-bottom: 6px;
          }

          .clr-footer-a5 .contact {
            font-size: 10pt;
            color: #666;
          }

          .clr-footer-a5 .contact a {
            color: #333;
            text-decoration: none;
            font-weight: 500;
          }

          .clr-footer-a5 .tagline-footer {
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid #ddd;
            font-size: 9pt;
            color: #999;
            letter-spacing: 0.5px;
          }

          /* ========== Accent Decorations ========== */
          .clr-gold-diamond {
            display: inline-block;
            width: 4px;
            height: 4px;
            background: white;
            border: 1px solid #333;
            transform: rotate(45deg);
            margin: 0 4px;
          }
        `}),e[32]=p):p=e[32];let te;e[33]===Symbol.for("react.memo_cache_sentinel")?(te={display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px"},e[33]=te):te=e[33];let ae;e[34]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain",borderRadius:"4px"}}),e[34]=ae):ae=e[34];let C;e[35]!==a.name?(C=n.jsxs("div",{style:te,children:[ae,n.jsx("h1",{children:a.name})]}),e[35]=a.name,e[36]=C):C=e[36];let M;e[37]!==a.tagline?(M=a.tagline&&n.jsx("div",{className:"tagline",children:a.tagline}),e[37]=a.tagline,e[38]=M):M=e[38];let se;e[39]===Symbol.for("react.memo_cache_sentinel")?(se=n.jsx("br",{}),e[39]=se):se=e[39];const ge=a.phone2&&`| ${a.phone2}`;let le;e[40]===Symbol.for("react.memo_cache_sentinel")?(le=n.jsx("br",{}),e[40]=le):le=e[40];let $;e[41]!==a.website?($=a.website&&n.jsxs(n.Fragment,{children:[" | Web: ",a.website]}),e[41]=a.website,e[42]=$):$=e[42];let F;e[43]!==a.address||e[44]!==a.city||e[45]!==a.email||e[46]!==a.phone||e[47]!==ge||e[48]!==$?(F=n.jsxs("div",{className:"details",children:[a.address,", ",a.city,se,"Tel: ",a.phone," ",ge,le,"Email: ",a.email,$]}),e[43]=a.address,e[44]=a.city,e[45]=a.email,e[46]=a.phone,e[47]=ge,e[48]=$,e[49]=F):F=e[49];let I;e[50]!==C||e[51]!==M||e[52]!==F?(I=n.jsxs("div",{className:"clr-company-info-a5",children:[C,M,F]}),e[50]=C,e[51]=M,e[52]=F,e[53]=I):I=e[53];let ie;e[54]===Symbol.for("react.memo_cache_sentinel")?(ie=n.jsx("h2",{children:"CLEARANCE SALE"}),e[54]=ie):ie=e[54];let E;e[55]!==t.clearanceNumber?(E=n.jsxs("div",{className:"clr-title-a5",children:[ie,n.jsx("div",{className:"clr-number",children:t.clearanceNumber})]}),e[55]=t.clearanceNumber,e[56]=E):E=e[56],e[57]!==I||e[58]!==E?(r=n.jsxs("div",{className:"clr-header-a5",children:[I,E]}),e[57]=I,e[58]=E,e[59]=r):r=e[59];let oe;e[60]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("label",{children:"Bill To"}),e[60]=oe):oe=e[60];let B;e[61]!==t.customerName?(B=n.jsx("div",{className:"name",children:t.customerName}),e[61]=t.customerName,e[62]=B):B=e[62];let W;e[63]!==l?(W=l&&n.jsxs("div",{className:"info",children:[l.businessName&&n.jsxs(n.Fragment,{children:[l.businessName,n.jsx("br",{})]}),l.address&&n.jsxs(n.Fragment,{children:[l.address,n.jsx("br",{})]}),l.phone&&n.jsxs(n.Fragment,{children:["Tel: ",l.phone,n.jsx("br",{})]}),l.email&&n.jsx(n.Fragment,{children:l.email})]}),e[63]=l,e[64]=W):W=e[64];let G;e[65]!==t.customerAddress||e[66]!==t.customerPhone||e[67]!==l?(G=!l&&t.customerPhone&&n.jsxs("div",{className:"info",children:["Tel: ",t.customerPhone,n.jsx("br",{}),t.customerAddress]}),e[65]=t.customerAddress,e[66]=t.customerPhone,e[67]=l,e[68]=G):G=e[68];let U;e[69]!==B||e[70]!==W||e[71]!==G?(U=n.jsxs("div",{className:"clr-meta-box-a5",children:[oe,B,W,G]}),e[69]=B,e[70]=W,e[71]=G,e[72]=U):U=e[72];let re;e[73]===Symbol.for("react.memo_cache_sentinel")?(re=n.jsx("label",{children:"Clearance Details"}),e[73]=re):re=e[73];let ce;e[74]===Symbol.for("react.memo_cache_sentinel")?(ce=n.jsx("strong",{children:"Date:"}),e[74]=ce):ce=e[74];let q;e[75]!==t.issueDate?(q=we(t.issueDate),e[75]=t.issueDate,e[76]=q):q=e[76];let de;e[77]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsx("br",{}),e[77]=de):de=e[77];let L;e[78]!==t.clearanceReason?(L=t.clearanceReason&&n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Reason:"})," ",t.clearanceReason,n.jsx("br",{})]}),e[78]=t.clearanceReason,e[79]=L):L=e[79];let me;e[80]===Symbol.for("react.memo_cache_sentinel")?(me=n.jsx("strong",{children:"Status:"}),e[80]=me):me=e[80];const ue=`clr-status-badge-a5 clr-status-${t.status}`;let Q;e[81]!==t.status||e[82]!==ue?(Q=n.jsx("span",{className:ue,children:t.status}),e[81]=t.status,e[82]=ue,e[83]=Q):Q=e[83];let J;e[84]!==q||e[85]!==L||e[86]!==Q?(J=n.jsxs("div",{className:"clr-meta-box-a5 right",children:[re,n.jsxs("div",{className:"info",children:[ce," ",q,de,L,me," ",Q]})]}),e[84]=q,e[85]=L,e[86]=Q,e[87]=J):J=e[87],e[88]!==U||e[89]!==J?(c=n.jsxs("div",{className:"clr-meta-a5",children:[U,J]}),e[88]=U,e[89]=J,e[90]=c):c=e[90];let pe;e[91]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#"}),n.jsx("th",{children:"Item Description"}),n.jsx("th",{children:"Weight"}),n.jsx("th",{children:"Qty"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Amount"})]})}),e[91]=pe):pe=e[91];let Y;e[92]!==t.items?(Y=t.items.map(Me),e[92]=t.items,e[93]=Y):Y=e[93],e[94]!==Y?(d=n.jsxs("table",{className:"clr-items-table-a5",children:[pe,n.jsx("tbody",{children:Y})]}),e[94]=Y,e[95]=d):d=e[95],b="clr-totals-section-a5",h="clr-totals-box-a5";let he;e[96]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsx("span",{className:"label",children:"Subtotal"}),e[96]=he):he=e[96];let K;e[97]!==t.subtotal?(K=o(t.subtotal),e[97]=t.subtotal,e[98]=K):K=e[98],e[99]!==K?(m=n.jsxs("div",{className:"clr-totals-row-a5 subtotal",children:[he,n.jsx("span",{className:"value",children:K})]}),e[99]=K,e[100]=m):m=e[100],x=ye>0&&n.jsxs("div",{className:"clr-totals-row-a5 discount",children:[n.jsx("span",{className:"label",children:"Item Discounts"}),n.jsxs("span",{className:"value",children:["-",o(ye)]})]}),e[2]=xe,e[3]=t.clearanceNumber,e[4]=t.clearanceReason,e[5]=t.customerAddress,e[6]=t.customerName,e[7]=t.customerPhone,e[8]=t.issueDate,e[9]=t.items,e[10]=t.status,e[11]=t.subtotal,e[12]=a.address,e[13]=a.city,e[14]=a.email,e[15]=a.name,e[16]=a.phone,e[17]=a.phone2,e[18]=a.tagline,e[19]=a.website,e[20]=l,e[21]=i,e[22]=r,e[23]=c,e[24]=d,e[25]=h,e[26]=m,e[27]=x,e[28]=b,e[29]=f,e[30]=g,e[31]=p}else r=e[22],c=e[23],d=e[24],h=e[25],m=e[26],x=e[27],b=e[28],f=e[29],g=e[30],p=e[31];let u;e[101]!==t.discount||e[102]!==t.discountType?(u=t.discount>0&&n.jsxs("div",{className:"clr-totals-row-a5 discount",children:[n.jsxs("span",{className:"label",children:["Discount ",t.discountType==="percentage"&&`(${t.discount}%)`]}),n.jsxs("span",{className:"value",children:["-",o(t.discount)]})]}),e[101]=t.discount,e[102]=t.discountType,e[103]=u):u=e[103];let j;e[104]!==t.tax||e[105]!==t.taxRate?(j=t.tax>0&&n.jsxs("div",{className:"clr-totals-row-a5",children:[n.jsxs("span",{className:"label",children:["Tax ",t.taxRate&&`(${t.taxRate}%)`]}),n.jsx("span",{className:"value",children:o(t.tax)})]}),e[104]=t.tax,e[105]=t.taxRate,e[106]=j):j=e[106];let H;e[107]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsx("span",{className:"label",children:"Total Amount"}),e[107]=H):H=e[107];let y;e[108]!==t.total?(y=o(t.total),e[108]=t.total,e[109]=y):y=e[109];let w;e[110]!==y?(w=n.jsxs("div",{className:"clr-totals-row-a5 total",children:[H,n.jsx("span",{className:"value",children:y})]}),e[110]=y,e[111]=w):w=e[111];let N;e[112]!==t.balanceDue?(N=t.balanceDue>0&&n.jsxs("div",{className:"clr-totals-row-a5 balance",children:[n.jsx("span",{className:"label",children:"Balance Due"}),n.jsx("span",{className:"value",children:o(t.balanceDue)})]}),e[112]=t.balanceDue,e[113]=N):N=e[113];let v;e[114]!==u||e[115]!==j||e[116]!==w||e[117]!==N||e[118]!==h||e[119]!==m||e[120]!==x?(v=n.jsxs("div",{className:h,children:[m,x,u,j,w,N]}),e[114]=u,e[115]=j,e[116]=w,e[117]=N,e[118]=h,e[119]=m,e[120]=x,e[121]=v):v=e[121];let k;e[122]!==v||e[123]!==b?(k=n.jsx("div",{className:b,children:v}),e[122]=v,e[123]=b,e[124]=k):k=e[124];let S;e[125]!==t.amountPaid||e[126]!==t.paymentMethod?(S=t.amountPaid>0&&n.jsxs("div",{className:"clr-payment-info-a5",children:[n.jsxs("div",{className:"clr-payment-box-a5",children:[n.jsx("label",{children:"Amount Paid"}),n.jsx("div",{className:"value",children:o(t.amountPaid)})]}),t.paymentMethod&&n.jsxs("div",{className:"clr-payment-box-a5",children:[n.jsx("label",{children:"Payment Method"}),n.jsx("div",{className:"value",children:t.paymentMethod.replace("-"," ").toUpperCase()})]})]}),e[125]=t.amountPaid,e[126]=t.paymentMethod,e[127]=S):S=e[127];let z;e[128]!==t.notes?(z=t.notes&&n.jsxs("div",{className:"clr-notes-section-a5",children:[n.jsx("label",{children:"Notes"}),n.jsx("p",{children:t.notes})]}),e[128]=t.notes,e[129]=z):z=e[129];let V;e[130]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("label",{children:"Terms & Conditions"}),e[130]=V):V=e[130];let _;e[131]!==a.clearanceTerms?(_=a?.clearanceTerms?a.clearanceTerms.split(`
`).filter($e).map(Fe):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"All clearance sale items are sold as-is."}),n.jsx("li",{children:"All clearance sales are final. No returns or exchanges."}),n.jsx("li",{children:"All jewellery items are hallmarked and certified."})]}),e[131]=a.clearanceTerms,e[132]=_):_=e[132];let P;e[133]!==_?(P=n.jsxs("div",{className:"clr-terms-section-a5",children:[V,n.jsx("ul",{children:_})]}),e[133]=_,e[134]=P):P=e[134];let X;e[135]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsx("span",{className:"clr-gold-diamond"}),e[135]=X):X=e[135];let Z;e[136]===Symbol.for("react.memo_cache_sentinel")?(Z=n.jsxs("div",{className:"thank-you",children:[X,"Thank You for Your Patronage",n.jsx("span",{className:"clr-gold-diamond"})]}),e[136]=Z):Z=e[136];const be=`mailto:${a.email}`;let T;e[137]!==a.email||e[138]!==be?(T=n.jsx("a",{href:be,children:a.email}),e[137]=a.email,e[138]=be,e[139]=T):T=e[139];const fe=`tel:${a.phone}`;let D;e[140]!==a.phone||e[141]!==fe?(D=n.jsx("a",{href:fe,children:a.phone}),e[140]=a.phone,e[141]=fe,e[142]=D):D=e[142];let A;e[143]!==T||e[144]!==D?(A=n.jsxs("div",{className:"contact",children:["Questions? Contact us at ",T," or call ",D]}),e[143]=T,e[144]=D,e[145]=A):A=e[145];let ee;e[146]===Symbol.for("react.memo_cache_sentinel")?(ee=n.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),e[146]=ee):ee=e[146];let R;e[147]!==A?(R=n.jsxs("div",{className:"clr-footer-a5",children:[Z,A,ee]}),e[147]=A,e[148]=R):R=e[148];let ne;return e[149]!==r||e[150]!==c||e[151]!==d||e[152]!==k||e[153]!==S||e[154]!==z||e[155]!==P||e[156]!==R||e[157]!==f||e[158]!==g||e[159]!==p?(ne=n.jsxs("div",{ref:f,className:g,children:[p,r,c,d,k,S,z,P,R]}),e[149]=r,e[150]=c,e[151]=d,e[152]=k,e[153]=S,e[154]=z,e[155]=P,e[156]=R,e[157]=f,e[158]=g,e[159]=p,e[160]=ne):ne=e[160],ne});Re.displayName="PrintableClearance";function Ce(s,i){const t=((i.originalPrice||i.unitPrice)-i.unitPrice)*i.quantity;return s+(t>0?t:0)}function Me(s,i){return n.jsxs("tr",{children:[n.jsx("td",{children:String(i+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("div",{className:"item-name",children:s.productName}),n.jsxs("div",{className:"item-details",children:[s.metalType.toUpperCase(),s.karat&&` • ${s.karat}`,s.sku&&` • SKU: ${s.sku}`]})]}),n.jsx("td",{children:ke(s.metalWeight)}),n.jsx("td",{children:s.quantity}),n.jsx("td",{children:o(s.unitPrice)}),n.jsx("td",{children:o(s.total)})]},s.id)}function $e(s){return s.trim()}function Fe(s,i){return n.jsx("li",{children:s},i)}export{ze as P,Re as a};
