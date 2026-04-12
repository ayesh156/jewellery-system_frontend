import{r as De,c as Se,j as t}from"./vendor-react-0ysHbwzk.js";import{K as ze,f as pe,l as Me}from"./pages-invoices-BbGpOqul.js";const Ae={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},Re=De.forwardRef((l,n)=>{const e=Se.c(161),{invoice:a,customer:i,company:de}=l,s=de===void 0?Ae:de;let se;e[0]!==a.items?(se=()=>a.items.reduce(Ee,0),e[0]=a.items,e[1]=se):se=e[1];const le=se;let d,r,f,P,c,R,b,k,g,o;if(e[2]!==le||e[3]!==s.address||e[4]!==s.city||e[5]!==s.email||e[6]!==s.name||e[7]!==s.phone||e[8]!==s.phone2||e[9]!==s.tagline||e[10]!==s.website||e[11]!==i||e[12]!==a.customerAddress||e[13]!==a.customerName||e[14]!==a.customerPhone||e[15]!==a.dueDate||e[16]!==a.invoiceNumber||e[17]!==a.issueDate||e[18]!==a.items||e[19]!==a.status||e[20]!==a.subtotal||e[21]!==n){const ee=le();k=n,g="print-invoice-a5",e[32]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("style",{children:`
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
        `}),e[32]=o):o=e[32];let G;e[33]===Symbol.for("react.memo_cache_sentinel")?(G={display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px"},e[33]=G):G=e[33];let X;e[34]===Symbol.for("react.memo_cache_sentinel")?(X=t.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain",borderRadius:"4px"}}),e[34]=X):X=e[34];let $;e[35]!==s.name?($=t.jsxs("div",{style:G,children:[X,t.jsx("h1",{children:s.name})]}),e[35]=s.name,e[36]=$):$=e[36];let m;e[37]!==s.tagline?(m=s.tagline&&t.jsx("div",{className:"tagline",children:s.tagline}),e[37]=s.tagline,e[38]=m):m=e[38];let S;e[39]===Symbol.for("react.memo_cache_sentinel")?(S=t.jsx("br",{}),e[39]=S):S=e[39];const ne=s.phone2&&`| ${s.phone2}`;let q;e[40]===Symbol.for("react.memo_cache_sentinel")?(q=t.jsx("br",{}),e[40]=q):q=e[40];let F;e[41]!==s.website?(F=s.website&&t.jsxs(t.Fragment,{children:[" | Web: ",s.website]}),e[41]=s.website,e[42]=F):F=e[42];let h;e[43]!==s.address||e[44]!==s.city||e[45]!==s.email||e[46]!==s.phone||e[47]!==ne||e[48]!==F?(h=t.jsxs("div",{className:"details",children:[s.address,", ",s.city,S,"Tel: ",s.phone," ",ne,q,"Email: ",s.email,F]}),e[43]=s.address,e[44]=s.city,e[45]=s.email,e[46]=s.phone,e[47]=ne,e[48]=F,e[49]=h):h=e[49];let M;e[50]!==$||e[51]!==m||e[52]!==h?(M=t.jsxs("div",{className:"company-info-a5",children:[$,m,h]}),e[50]=$,e[51]=m,e[52]=h,e[53]=M):M=e[53];let A;e[54]===Symbol.for("react.memo_cache_sentinel")?(A=t.jsx("h2",{children:"INVOICE"}),e[54]=A):A=e[54];let U;e[55]!==a.invoiceNumber?(U=t.jsxs("div",{className:"invoice-title-a5",children:[A,t.jsx("div",{className:"invoice-number",children:a.invoiceNumber})]}),e[55]=a.invoiceNumber,e[56]=U):U=e[56],e[57]!==M||e[58]!==U?(d=t.jsxs("div",{className:"invoice-header-a5",children:[M,U]}),e[57]=M,e[58]=U,e[59]=d):d=e[59];let x;e[60]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx("label",{children:"Bill To"}),e[60]=x):x=e[60];let Q;e[61]!==a.customerName?(Q=t.jsx("div",{className:"name",children:a.customerName}),e[61]=a.customerName,e[62]=Q):Q=e[62];let te;e[63]!==i?(te=i&&t.jsxs("div",{className:"info",children:[i.businessName&&t.jsxs(t.Fragment,{children:[i.businessName,t.jsx("br",{})]}),i.address&&t.jsxs(t.Fragment,{children:[i.address,t.jsx("br",{})]}),i.phone&&t.jsxs(t.Fragment,{children:["Tel: ",i.phone,t.jsx("br",{})]}),i.email&&t.jsx(t.Fragment,{children:i.email})]}),e[63]=i,e[64]=te):te=e[64];let K;e[65]!==i||e[66]!==a.customerAddress||e[67]!==a.customerPhone?(K=!i&&a.customerPhone&&t.jsxs("div",{className:"info",children:["Tel: ",a.customerPhone,t.jsx("br",{}),a.customerAddress]}),e[65]=i,e[66]=a.customerAddress,e[67]=a.customerPhone,e[68]=K):K=e[68];let V;e[69]!==Q||e[70]!==te||e[71]!==K?(V=t.jsxs("div",{className:"meta-box-a5",children:[x,Q,te,K]}),e[69]=Q,e[70]=te,e[71]=K,e[72]=V):V=e[72];let ie;e[73]===Symbol.for("react.memo_cache_sentinel")?(ie=t.jsx("label",{children:"Invoice Details"}),e[73]=ie):ie=e[73];let oe;e[74]===Symbol.for("react.memo_cache_sentinel")?(oe=t.jsx("strong",{children:"Date:"}),e[74]=oe):oe=e[74];let xe;e[75]!==a.issueDate?(xe=ze(a.issueDate),e[75]=a.issueDate,e[76]=xe):xe=e[76];let ge;e[77]===Symbol.for("react.memo_cache_sentinel")?(ge=t.jsx("br",{}),e[77]=ge):ge=e[77];let he;e[78]!==a.dueDate?(he=a.dueDate&&t.jsxs(t.Fragment,{children:[t.jsx("strong",{children:"Due:"})," ",ze(a.dueDate),t.jsx("br",{})]}),e[78]=a.dueDate,e[79]=he):he=e[79];let fe;e[80]===Symbol.for("react.memo_cache_sentinel")?(fe=t.jsx("strong",{children:"Status:"}),e[80]=fe):fe=e[80];const ue=`status-badge-a5 status-${a.status}`;let re;e[81]!==a.status||e[82]!==ue?(re=t.jsx("span",{className:ue,children:a.status}),e[81]=a.status,e[82]=ue,e[83]=re):re=e[83];let me;e[84]!==xe||e[85]!==he||e[86]!==re?(me=t.jsxs("div",{className:"meta-box-a5 right",children:[ie,t.jsxs("div",{className:"info",children:[oe," ",xe,ge,he,fe," ",re]})]}),e[84]=xe,e[85]=he,e[86]=re,e[87]=me):me=e[87],e[88]!==V||e[89]!==me?(r=t.jsxs("div",{className:"invoice-meta-a5",children:[V,me]}),e[88]=V,e[89]=me,e[90]=r):r=e[90];let ye;e[91]===Symbol.for("react.memo_cache_sentinel")?(ye=t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Item Description"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Qty"}),t.jsx("th",{children:"Price"}),t.jsx("th",{children:"Amount"})]})}),e[91]=ye):ye=e[91];let ce;e[92]!==a.items?(ce=a.items.map(Ce),e[92]=a.items,e[93]=ce):ce=e[93],e[94]!==ce?(f=t.jsxs("table",{className:"items-table-a5",children:[ye,t.jsx("tbody",{children:ce})]}),e[94]=ce,e[95]=f):f=e[95],b="totals-section-a5",P="totals-box-a5";let be;e[96]===Symbol.for("react.memo_cache_sentinel")?(be=t.jsx("span",{className:"label",children:"Subtotal"}),e[96]=be):be=e[96];let je;e[97]!==a.subtotal?(je=pe(a.subtotal),e[97]=a.subtotal,e[98]=je):je=e[98],e[99]!==je?(c=t.jsxs("div",{className:"totals-row-a5 subtotal",children:[be,t.jsx("span",{className:"value",children:je})]}),e[99]=je,e[100]=c):c=e[100],R=ee>0&&t.jsxs("div",{className:"totals-row-a5 discount",children:[t.jsx("span",{className:"label",children:"Item Discounts"}),t.jsxs("span",{className:"value",children:["-",pe(ee)]})]}),e[2]=le,e[3]=s.address,e[4]=s.city,e[5]=s.email,e[6]=s.name,e[7]=s.phone,e[8]=s.phone2,e[9]=s.tagline,e[10]=s.website,e[11]=i,e[12]=a.customerAddress,e[13]=a.customerName,e[14]=a.customerPhone,e[15]=a.dueDate,e[16]=a.invoiceNumber,e[17]=a.issueDate,e[18]=a.items,e[19]=a.status,e[20]=a.subtotal,e[21]=n,e[22]=d,e[23]=r,e[24]=f,e[25]=P,e[26]=c,e[27]=R,e[28]=b,e[29]=k,e[30]=g,e[31]=o}else d=e[22],r=e[23],f=e[24],P=e[25],c=e[26],R=e[27],b=e[28],k=e[29],g=e[30],o=e[31];let u;e[101]!==a.discount||e[102]!==a.discountType?(u=a.discount>0&&t.jsxs("div",{className:"totals-row-a5 discount",children:[t.jsxs("span",{className:"label",children:["Discount ",a.discountType==="percentage"&&`(${a.discount}%)`]}),t.jsxs("span",{className:"value",children:["-",pe(a.discount)]})]}),e[101]=a.discount,e[102]=a.discountType,e[103]=u):u=e[103];let I;e[104]!==a.tax||e[105]!==a.taxRate?(I=a.tax>0&&t.jsxs("div",{className:"totals-row-a5",children:[t.jsxs("span",{className:"label",children:["Tax ",a.taxRate&&`(${a.taxRate}%)`]}),t.jsx("span",{className:"value",children:pe(a.tax)})]}),e[104]=a.tax,e[105]=a.taxRate,e[106]=I):I=e[106];let T;e[107]===Symbol.for("react.memo_cache_sentinel")?(T=t.jsx("span",{className:"label",children:"Total Amount"}),e[107]=T):T=e[107];let D;e[108]!==a.total?(D=pe(a.total),e[108]=a.total,e[109]=D):D=e[109];let y;e[110]!==D?(y=t.jsxs("div",{className:"totals-row-a5 total",children:[T,t.jsx("span",{className:"value",children:D})]}),e[110]=D,e[111]=y):y=e[111];let j;e[112]!==a.balanceDue?(j=a.balanceDue>0&&t.jsxs("div",{className:"totals-row-a5 balance",children:[t.jsx("span",{className:"label",children:"Balance Due"}),t.jsx("span",{className:"value",children:pe(a.balanceDue)})]}),e[112]=a.balanceDue,e[113]=j):j=e[113];let N;e[114]!==u||e[115]!==I||e[116]!==y||e[117]!==j||e[118]!==P||e[119]!==c||e[120]!==R?(N=t.jsxs("div",{className:P,children:[c,R,u,I,y,j]}),e[114]=u,e[115]=I,e[116]=y,e[117]=j,e[118]=P,e[119]=c,e[120]=R,e[121]=N):N=e[121];let z;e[122]!==N||e[123]!==b?(z=t.jsx("div",{className:b,children:N}),e[122]=N,e[123]=b,e[124]=z):z=e[124];let w;e[125]!==a.amountPaid||e[126]!==a.paymentMethod?(w=a.amountPaid>0&&t.jsxs("div",{className:"payment-info-a5",children:[t.jsxs("div",{className:"payment-box-a5",children:[t.jsx("label",{children:"Amount Paid"}),t.jsx("div",{className:"value",children:pe(a.amountPaid)})]}),a.paymentMethod&&t.jsxs("div",{className:"payment-box-a5",children:[t.jsx("label",{children:"Payment Method"}),t.jsx("div",{className:"value",children:a.paymentMethod.replace("-"," ").toUpperCase()})]})]}),e[125]=a.amountPaid,e[126]=a.paymentMethod,e[127]=w):w=e[127];let v;e[128]!==a.notes?(v=a.notes&&t.jsxs("div",{className:"notes-section-a5",children:[t.jsx("label",{children:"Notes"}),t.jsx("p",{children:a.notes})]}),e[128]=a.notes,e[129]=v):v=e[129];let Z;e[130]===Symbol.for("react.memo_cache_sentinel")?(Z=t.jsx("label",{children:"Terms & Conditions"}),e[130]=Z):Z=e[130];let B;e[131]!==s.invoiceTerms?(B=s?.invoiceTerms?s.invoiceTerms.split(`
`).filter($e).map(Fe):t.jsxs(t.Fragment,{children:[t.jsx("li",{children:"All jewellery items are hallmarked and certified."}),t.jsx("li",{children:"Exchange within 7 days with original receipt. No refunds on custom-made items."})]}),e[131]=s.invoiceTerms,e[132]=B):B=e[132];let p;e[133]!==B?(p=t.jsxs("div",{className:"terms-section-a5",children:[Z,t.jsx("ul",{children:B})]}),e[133]=B,e[134]=p):p=e[134];let W;e[135]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsx("span",{className:"gold-diamond"}),e[135]=W):W=e[135];let H;e[136]===Symbol.for("react.memo_cache_sentinel")?(H=t.jsxs("div",{className:"thank-you",children:[W,"Thank You for Your Patronage",t.jsx("span",{className:"gold-diamond"})]}),e[136]=H):H=e[136];const O=`mailto:${s.email}`;let Y;e[137]!==s.email||e[138]!==O?(Y=t.jsx("a",{href:O,children:s.email}),e[137]=s.email,e[138]=O,e[139]=Y):Y=e[139];const J=`tel:${s.phone}`;let E;e[140]!==s.phone||e[141]!==J?(E=t.jsx("a",{href:J,children:s.phone}),e[140]=s.phone,e[141]=J,e[142]=E):E=e[142];let L;e[143]!==Y||e[144]!==E?(L=t.jsxs("div",{className:"contact",children:["Questions? Contact us at ",Y," or call ",E]}),e[143]=Y,e[144]=E,e[145]=L):L=e[145];let ae;e[146]===Symbol.for("react.memo_cache_sentinel")?(ae=t.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),e[146]=ae):ae=e[146];let C;e[147]!==L?(C=t.jsxs("div",{className:"footer-a5",children:[H,L,ae]}),e[147]=L,e[148]=C):C=e[148];let _;return e[149]!==d||e[150]!==r||e[151]!==f||e[152]!==z||e[153]!==w||e[154]!==v||e[155]!==p||e[156]!==C||e[157]!==k||e[158]!==g||e[159]!==o?(_=t.jsxs("div",{ref:k,className:g,children:[o,d,r,f,z,w,v,p,C]}),e[149]=d,e[150]=r,e[151]=f,e[152]=z,e[153]=w,e[154]=v,e[155]=p,e[156]=C,e[157]=k,e[158]=g,e[159]=o,e[160]=_):_=e[160],_});Re.displayName="PrintableInvoice";function Ee(l,n){const a=((n.originalPrice||n.unitPrice)-n.unitPrice)*n.quantity;return l+(a>0?a:0)}function Ce(l,n){return t.jsxs("tr",{children:[t.jsx("td",{children:String(n+1).padStart(2,"0")}),t.jsxs("td",{children:[t.jsx("div",{className:"item-name",children:l.productName}),t.jsxs("div",{className:"item-details",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),t.jsx("td",{children:Me(l.metalWeight)}),t.jsx("td",{children:l.quantity}),t.jsx("td",{children:pe(l.unitPrice)}),t.jsx("td",{children:pe(l.total)})]},l.id)}function $e(l){return l.trim()}function Fe(l,n){return t.jsx("li",{children:l},n)}const Be={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",country:"Sri Lanka",phone:"0770400789",email:"onelkajewellery95@gmail.com"},We=De.forwardRef((l,n)=>{const e=Se.c(162),{clearance:a,customer:i,company:de}=l,s=de===void 0?Be:de;let se;e[0]!==a.items?(se=()=>a.items.reduce(Le,0),e[0]=a.items,e[1]=se):se=e[1];const le=se;let d,r,f,P,c,R,b,k,g,o;if(e[2]!==le||e[3]!==a||e[4]!==s.address||e[5]!==s.city||e[6]!==s.email||e[7]!==s.name||e[8]!==s.phone||e[9]!==s.phone2||e[10]!==s.tagline||e[11]!==s.website||e[12]!==i||e[13]!==n){const G=le();k=n,g="print-clearance-a5",e[24]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("style",{children:`
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
        `}),e[24]=o):o=e[24];let X;e[25]===Symbol.for("react.memo_cache_sentinel")?(X={display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px"},e[25]=X):X=e[25];let $;e[26]===Symbol.for("react.memo_cache_sentinel")?($=t.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain",borderRadius:"4px"}}),e[26]=$):$=e[26];let m;e[27]!==s.name?(m=t.jsxs("div",{style:X,children:[$,t.jsx("h1",{children:s.name})]}),e[27]=s.name,e[28]=m):m=e[28];let S;e[29]!==s.tagline?(S=s.tagline&&t.jsx("div",{className:"tagline",children:s.tagline}),e[29]=s.tagline,e[30]=S):S=e[30];let ne;e[31]===Symbol.for("react.memo_cache_sentinel")?(ne=t.jsx("br",{}),e[31]=ne):ne=e[31];const q=s.phone2&&`| ${s.phone2}`;let F;e[32]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx("br",{}),e[32]=F):F=e[32];let h;e[33]!==s.website?(h=s.website&&t.jsxs(t.Fragment,{children:[" | Web: ",s.website]}),e[33]=s.website,e[34]=h):h=e[34];let M;e[35]!==s.address||e[36]!==s.city||e[37]!==s.email||e[38]!==s.phone||e[39]!==q||e[40]!==h?(M=t.jsxs("div",{className:"details",children:[s.address,", ",s.city,ne,"Tel: ",s.phone," ",q,F,"Email: ",s.email,h]}),e[35]=s.address,e[36]=s.city,e[37]=s.email,e[38]=s.phone,e[39]=q,e[40]=h,e[41]=M):M=e[41];let A;e[42]!==m||e[43]!==S||e[44]!==M?(A=t.jsxs("div",{className:"clr-company-info-a5",children:[m,S,M]}),e[42]=m,e[43]=S,e[44]=M,e[45]=A):A=e[45];let U,x;e[46]===Symbol.for("react.memo_cache_sentinel")?(U=t.jsx("h2",{children:"PAWN TICKET"}),x=t.jsx("div",{style:{fontSize:"9pt",color:"#666",marginTop:"2px",fontStyle:"italic"},children:"උකස් ටිකට්පත"}),e[46]=U,e[47]=x):(U=e[46],x=e[47]);let Q;e[48]!==a.clearanceNumber?(Q=t.jsxs("div",{className:"clr-title-a5",children:[U,x,t.jsx("div",{className:"clr-number",children:a.clearanceNumber})]}),e[48]=a.clearanceNumber,e[49]=Q):Q=e[49],e[50]!==A||e[51]!==Q?(d=t.jsxs("div",{className:"clr-header-a5",children:[A,Q]}),e[50]=A,e[51]=Q,e[52]=d):d=e[52];let te;e[53]===Symbol.for("react.memo_cache_sentinel")?(te=t.jsx("label",{children:"Bill To"}),e[53]=te):te=e[53];let K;e[54]!==a.customerName?(K=t.jsx("div",{className:"name",children:a.customerName}),e[54]=a.customerName,e[55]=K):K=e[55];let V;e[56]!==i?(V=i&&t.jsxs("div",{className:"info",children:[i.businessName&&t.jsxs(t.Fragment,{children:[i.businessName,t.jsx("br",{})]}),i.address&&t.jsxs(t.Fragment,{children:[i.address,t.jsx("br",{})]}),i.phone&&t.jsxs(t.Fragment,{children:["Tel: ",i.phone,t.jsx("br",{})]}),i.email&&t.jsx(t.Fragment,{children:i.email})]}),e[56]=i,e[57]=V):V=e[57];let ie;e[58]!==a.customerAddress||e[59]!==a.customerPhone||e[60]!==i?(ie=!i&&a.customerPhone&&t.jsxs("div",{className:"info",children:["Tel: ",a.customerPhone,t.jsx("br",{}),a.customerAddress]}),e[58]=a.customerAddress,e[59]=a.customerPhone,e[60]=i,e[61]=ie):ie=e[61];let oe;e[62]!==K||e[63]!==V||e[64]!==ie?(oe=t.jsxs("div",{className:"clr-meta-box-a5",children:[te,K,V,ie]}),e[62]=K,e[63]=V,e[64]=ie,e[65]=oe):oe=e[65];let xe;e[66]===Symbol.for("react.memo_cache_sentinel")?(xe=t.jsx("label",{children:"Pawn Details"}),e[66]=xe):xe=e[66];let ge;e[67]===Symbol.for("react.memo_cache_sentinel")?(ge=t.jsx("strong",{children:"Pawn Date:"}),e[67]=ge):ge=e[67];let he;e[68]!==a.issueDate?(he=ze(a.issueDate),e[68]=a.issueDate,e[69]=he):he=e[69];let fe;e[70]===Symbol.for("react.memo_cache_sentinel")?(fe=t.jsx("br",{}),e[70]=fe):fe=e[70];let ue;e[71]!==a?(ue=a.customerNic&&t.jsxs(t.Fragment,{children:[t.jsx("strong",{children:"NIC:"})," ",a.customerNic,t.jsx("br",{})]}),e[71]=a,e[72]=ue):ue=e[72];let re;e[73]!==a.clearanceReason?(re=a.clearanceReason&&t.jsxs(t.Fragment,{children:[t.jsx("strong",{children:"Reason:"})," ",a.clearanceReason,t.jsx("br",{})]}),e[73]=a.clearanceReason,e[74]=re):re=e[74];let me;e[75]===Symbol.for("react.memo_cache_sentinel")?(me=t.jsx("strong",{children:"Status:"}),e[75]=me):me=e[75];const ye=`clr-status-badge-a5 clr-status-${a.status}`;let ce;e[76]!==a.status?(ce=a.status==="pending"?"ACTIVE":a.status.toUpperCase(),e[76]=a.status,e[77]=ce):ce=e[77];let be;e[78]!==ye||e[79]!==ce?(be=t.jsx("span",{className:ye,children:ce}),e[78]=ye,e[79]=ce,e[80]=be):be=e[80];let je;e[81]!==he||e[82]!==ue||e[83]!==re||e[84]!==be?(je=t.jsxs("div",{className:"clr-meta-box-a5 right",children:[xe,t.jsxs("div",{className:"info",children:[ge," ",he,fe,ue,re,me," ",be]})]}),e[81]=he,e[82]=ue,e[83]=re,e[84]=be,e[85]=je):je=e[85],e[86]!==oe||e[87]!==je?(r=t.jsxs("div",{className:"clr-meta-a5",children:[oe,je]}),e[86]=oe,e[87]=je,e[88]=r):r=e[88];let Pe;e[89]===Symbol.for("react.memo_cache_sentinel")?(Pe=t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Item Description"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Qty"}),t.jsx("th",{children:"Price"}),t.jsx("th",{children:"Amount"})]})}),e[89]=Pe):Pe=e[89];let ve;e[90]!==a.items?(ve=a.items.map(Ge),e[90]=a.items,e[91]=ve):ve=e[91],e[92]!==ve?(f=t.jsxs("table",{className:"clr-items-table-a5",children:[Pe,t.jsx("tbody",{children:ve})]}),e[92]=ve,e[93]=f):f=e[93],b="clr-totals-section-a5",P="clr-totals-box-a5";let ke;e[94]===Symbol.for("react.memo_cache_sentinel")?(ke=t.jsx("span",{className:"label",children:"Items Value (Ref.)"}),e[94]=ke):ke=e[94];let _e;e[95]!==a.items?(_e=pe(a.items.reduce(Ue,0)),e[95]=a.items,e[96]=_e):_e=e[96],e[97]!==_e?(c=t.jsxs("div",{className:"clr-totals-row-a5 subtotal",children:[ke,t.jsx("span",{className:"value",children:_e})]}),e[97]=_e,e[98]=c):c=e[98],R=G>0&&t.jsxs("div",{className:"clr-totals-row-a5 discount",children:[t.jsx("span",{className:"label",children:"Item Discounts"}),t.jsxs("span",{className:"value",children:["-",pe(G)]})]}),e[2]=le,e[3]=a,e[4]=s.address,e[5]=s.city,e[6]=s.email,e[7]=s.name,e[8]=s.phone,e[9]=s.phone2,e[10]=s.tagline,e[11]=s.website,e[12]=i,e[13]=n,e[14]=d,e[15]=r,e[16]=f,e[17]=P,e[18]=c,e[19]=R,e[20]=b,e[21]=k,e[22]=g,e[23]=o}else d=e[14],r=e[15],f=e[16],P=e[17],c=e[18],R=e[19],b=e[20],k=e[21],g=e[22],o=e[23];let u;e[99]!==a.discount||e[100]!==a.discountType?(u=a.discount>0&&t.jsxs("div",{className:"clr-totals-row-a5 discount",children:[t.jsxs("span",{className:"label",children:["Discount ",a.discountType==="percentage"&&`(${a.discount}%)`]}),t.jsxs("span",{className:"value",children:["-",pe(a.discount)]})]}),e[99]=a.discount,e[100]=a.discountType,e[101]=u):u=e[101];let I;e[102]!==a.tax||e[103]!==a.taxRate?(I=a.tax>0&&t.jsxs("div",{className:"clr-totals-row-a5",children:[t.jsxs("span",{className:"label",children:["Tax ",a.taxRate&&`(${a.taxRate}%)`]}),t.jsx("span",{className:"value",children:pe(a.tax)})]}),e[102]=a.tax,e[103]=a.taxRate,e[104]=I):I=e[104];let T;e[105]===Symbol.for("react.memo_cache_sentinel")?(T=t.jsx("span",{className:"label",children:"Advance Amount (අත්තිකාරම් මුදල)"}),e[105]=T):T=e[105];let D;e[106]!==a.total?(D=pe(a.total),e[106]=a.total,e[107]=D):D=e[107];let y;e[108]!==D?(y=t.jsxs("div",{className:"clr-totals-row-a5 total",children:[T,t.jsx("span",{className:"value",children:D})]}),e[108]=D,e[109]=y):y=e[109];let j;e[110]!==a?(j=a.monthlyInterestRate&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"clr-totals-row-a5",style:{fontSize:"10pt",marginTop:"4px"},children:[t.jsx("span",{className:"label",children:"Monthly Interest Rate"}),t.jsxs("span",{className:"value",children:[a.monthlyInterestRate,"%"]})]}),t.jsxs("div",{className:"clr-totals-row-a5",style:{fontSize:"10pt"},children:[t.jsx("span",{className:"label",children:"Monthly Interest (මාසික පොලිය)"}),t.jsx("span",{className:"value",children:pe(a.total*Number(a.monthlyInterestRate)/100)})]})]}),e[110]=a,e[111]=j):j=e[111];let N;e[112]!==a.balanceDue?(N=a.balanceDue>0&&t.jsxs("div",{className:"clr-totals-row-a5 balance",children:[t.jsx("span",{className:"label",children:"Balance Due"}),t.jsx("span",{className:"value",children:pe(a.balanceDue)})]}),e[112]=a.balanceDue,e[113]=N):N=e[113];let z;e[114]!==u||e[115]!==I||e[116]!==y||e[117]!==j||e[118]!==N||e[119]!==P||e[120]!==c||e[121]!==R?(z=t.jsxs("div",{className:P,children:[c,R,u,I,y,j,N]}),e[114]=u,e[115]=I,e[116]=y,e[117]=j,e[118]=N,e[119]=P,e[120]=c,e[121]=R,e[122]=z):z=e[122];let w;e[123]!==z||e[124]!==b?(w=t.jsx("div",{className:b,children:z}),e[123]=z,e[124]=b,e[125]=w):w=e[125];let v;e[126]!==a.amountPaid||e[127]!==a.paymentMethod?(v=a.amountPaid>0&&t.jsxs("div",{className:"clr-payment-info-a5",children:[t.jsxs("div",{className:"clr-payment-box-a5",children:[t.jsx("label",{children:"Amount Disbursed"}),t.jsx("div",{className:"value",children:pe(a.amountPaid)})]}),a.paymentMethod&&t.jsxs("div",{className:"clr-payment-box-a5",children:[t.jsx("label",{children:"Payment Method"}),t.jsx("div",{className:"value",children:a.paymentMethod.replace("-"," ").toUpperCase()})]})]}),e[126]=a.amountPaid,e[127]=a.paymentMethod,e[128]=v):v=e[128];let Z;e[129]!==a.notes?(Z=a.notes&&t.jsxs("div",{className:"clr-notes-section-a5",children:[t.jsx("label",{children:"Notes"}),t.jsx("p",{children:a.notes})]}),e[129]=a.notes,e[130]=Z):Z=e[130];let B;e[131]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx("label",{children:"Terms & Conditions"}),e[131]=B):B=e[131];let p;e[132]!==s?(p=s?.pawnTerms?s.pawnTerms.split(`
`).filter(Oe).map(Ye):s?.clearanceTerms?s.clearanceTerms.split(`
`).filter(Je).map(qe):t.jsxs(t.Fragment,{children:[t.jsx("li",{children:"Interest is charged at the agreed monthly rate from the pawn date."}),t.jsx("li",{children:"Items must be redeemed within the agreed period."}),t.jsx("li",{children:"Unclaimed items may be forfeited after the redemption deadline."})]}),e[132]=s,e[133]=p):p=e[133];let W;e[134]!==p?(W=t.jsxs("div",{className:"clr-terms-section-a5",children:[B,t.jsx("ul",{children:p})]}),e[134]=p,e[135]=W):W=e[135];let H;e[136]===Symbol.for("react.memo_cache_sentinel")?(H=t.jsx("span",{className:"clr-gold-diamond"}),e[136]=H):H=e[136];let O;e[137]===Symbol.for("react.memo_cache_sentinel")?(O=t.jsxs("div",{className:"thank-you",children:[H,"Thank You for Your Patronage",t.jsx("span",{className:"clr-gold-diamond"})]}),e[137]=O):O=e[137];const Y=`mailto:${s.email}`;let J;e[138]!==s.email||e[139]!==Y?(J=t.jsx("a",{href:Y,children:s.email}),e[138]=s.email,e[139]=Y,e[140]=J):J=e[140];const E=`tel:${s.phone}`;let L;e[141]!==s.phone||e[142]!==E?(L=t.jsx("a",{href:E,children:s.phone}),e[141]=s.phone,e[142]=E,e[143]=L):L=e[143];let ae;e[144]!==J||e[145]!==L?(ae=t.jsxs("div",{className:"contact",children:["Questions? Contact us at ",J," or call ",L]}),e[144]=J,e[145]=L,e[146]=ae):ae=e[146];let C;e[147]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),e[147]=C):C=e[147];let _;e[148]!==ae?(_=t.jsxs("div",{className:"clr-footer-a5",children:[O,ae,C]}),e[148]=ae,e[149]=_):_=e[149];let ee;return e[150]!==d||e[151]!==r||e[152]!==f||e[153]!==w||e[154]!==v||e[155]!==Z||e[156]!==W||e[157]!==_||e[158]!==k||e[159]!==g||e[160]!==o?(ee=t.jsxs("div",{ref:k,className:g,children:[o,d,r,f,w,v,Z,W,_]}),e[150]=d,e[151]=r,e[152]=f,e[153]=w,e[154]=v,e[155]=Z,e[156]=W,e[157]=_,e[158]=k,e[159]=g,e[160]=o,e[161]=ee):ee=e[161],ee});We.displayName="PrintableClearance";function Le(l,n){const a=((n.originalPrice||n.unitPrice)-n.unitPrice)*n.quantity;return l+(a>0?a:0)}function Ge(l,n){return t.jsxs("tr",{children:[t.jsx("td",{children:String(n+1).padStart(2,"0")}),t.jsxs("td",{children:[t.jsx("div",{className:"item-name",children:l.productName}),t.jsxs("div",{className:"item-details",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),t.jsx("td",{children:Me(l.metalWeight)}),t.jsx("td",{children:l.quantity}),t.jsx("td",{children:pe(l.unitPrice)}),t.jsx("td",{children:pe(l.total)})]},l.id)}function Ue(l,n){return l+n.total}function Oe(l){return l.trim()}function Ye(l,n){return t.jsx("li",{children:l},n)}function Je(l){return l.trim()}function qe(l,n){return t.jsx("li",{children:l},n)}function tn(l){const n=Se.c(75),{data:e,company:a}=l;let i;n[0]!==e.redemptionDate?(i=e?.redemptionDate||new Date().toISOString().split("T")[0],n[0]=e.redemptionDate,n[1]=i):i=n[1];const de=i,s=e?.interest,se=s?s.totalPayable:Number(e?.total||0),le=Ke,d=Qe;let r;n[2]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx("style",{children:`
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
      `}),n[2]=r):r=n[2];const f=a?.name||"Onelka Jewellery";let P;n[3]!==f?(P=t.jsx("h1",{children:f}),n[3]=f,n[4]=P):P=n[4];let c;n[5]!==a?(c=a?.tagline&&t.jsx("p",{children:a.tagline}),n[5]=a,n[6]=c):c=n[6];const R=a?.address||"";let b;n[7]!==R?(b=t.jsx("p",{children:R}),n[7]=R,n[8]=b):b=n[8];const k=a?.phone||"";let g;n[9]!==k?(g=t.jsxs("p",{children:["Tel: ",k]}),n[9]=k,n[10]=g):g=n[10];let o;n[11]!==P||n[12]!==c||n[13]!==b||n[14]!==g?(o=t.jsxs("div",{className:"pos-header",children:[P,c,b,g]}),n[11]=P,n[12]=c,n[13]=b,n[14]=g,n[15]=o):o=n[15];let u;n[16]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx("div",{className:"pos-title",children:"උකස් Receipt / Pawn Redemption"}),n[16]=u):u=n[16];let I;n[17]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsx("span",{className:"label",children:"Ticket #:"}),n[17]=I):I=n[17];let T;n[18]!==e.clearanceNumber?(T=t.jsxs("div",{className:"pos-row",children:[I,t.jsx("span",{className:"value",children:e.clearanceNumber})]}),n[18]=e.clearanceNumber,n[19]=T):T=n[19];let D;n[20]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsx("span",{className:"label",children:"Date:"}),n[20]=D):D=n[20];let y;n[21]!==de?(y=le(de),n[21]=de,n[22]=y):y=n[22];let j;n[23]!==y?(j=t.jsxs("div",{className:"pos-row",children:[D,t.jsx("span",{className:"value",children:y})]}),n[23]=y,n[24]=j):j=n[24];let N;n[25]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx("span",{className:"label",children:"Pawn Date:"}),n[25]=N):N=n[25];const z=e.pawnDate||e.issueDate;let w;n[26]!==z?(w=le(z),n[26]=z,n[27]=w):w=n[27];let v;n[28]!==w?(v=t.jsxs("div",{className:"pos-row",children:[N,t.jsx("span",{className:"value",children:w})]}),n[28]=w,n[29]=v):v=n[29];let Z;n[30]===Symbol.for("react.memo_cache_sentinel")?(Z=t.jsx("div",{className:"pos-divider"}),n[30]=Z):Z=n[30];let B;n[31]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx("span",{className:"label",children:"Customer:"}),n[31]=B):B=n[31];let p;n[32]!==e.customerName?(p=t.jsxs("div",{className:"pos-row",children:[B,t.jsx("span",{className:"value",children:e.customerName})]}),n[32]=e.customerName,n[33]=p):p=n[33];let W;n[34]!==e.customerNic?(W=e.customerNic&&t.jsxs("div",{className:"pos-row",children:[t.jsx("span",{className:"label",children:"NIC:"}),t.jsx("span",{className:"value",children:e.customerNic})]}),n[34]=e.customerNic,n[35]=W):W=n[35];let H;n[36]!==e.customerPhone?(H=e.customerPhone&&t.jsxs("div",{className:"pos-row",children:[t.jsx("span",{className:"label",children:"Phone:"}),t.jsx("span",{className:"value",children:e.customerPhone})]}),n[36]=e.customerPhone,n[37]=H):H=n[37];let O,Y;n[38]===Symbol.for("react.memo_cache_sentinel")?(O=t.jsx("div",{className:"pos-divider"}),Y=t.jsx("div",{style:{fontWeight:"bold",fontSize:"11px",marginBottom:"4px"},children:"ITEMS REDEEMED:"}),n[38]=O,n[39]=Y):(O=n[38],Y=n[39]);let J;if(n[40]!==e.items){let U;n[42]===Symbol.for("react.memo_cache_sentinel")?(U=(x,Q)=>t.jsxs("div",{className:"pos-item",children:[t.jsxs("div",{className:"item-name",children:[Q+1,". ",x.productName]}),(x.karat||x.metalWeight)&&t.jsxs("div",{className:"item-detail",children:[x.karat&&`${x.karat} `,x.metalType&&`${x.metalType} `,x.metalWeight?`${x.metalWeight}g`:""]}),t.jsxs("div",{className:"pos-row",children:[t.jsxs("span",{className:"item-detail",children:["Qty: ",x.quantity]}),t.jsx("span",{children:d(x.total)})]})]},Q),n[42]=U):U=n[42],J=e.items.map(U),n[40]=e.items,n[41]=J}else J=n[41];let E;n[43]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsx("div",{className:"pos-divider"}),n[43]=E):E=n[43];let L;n[44]===Symbol.for("react.memo_cache_sentinel")?(L=t.jsx("span",{className:"label",children:"Principal:"}),n[44]=L):L=n[44];const ae=d(e.total);let C;n[45]!==ae?(C=t.jsxs("div",{className:"pos-row",children:[L,t.jsx("span",{className:"value",children:ae})]}),n[45]=ae,n[46]=C):C=n[46];let _;n[47]!==s?(_=s&&t.jsxs(t.Fragment,{children:[s.daysElapsed>0&&t.jsxs("div",{className:"pos-row",children:[t.jsx("span",{className:"label",children:"Days:"}),t.jsxs("span",{className:"value",children:[s.daysElapsed," days"]})]}),s.firstMonthInterest>0&&t.jsxs("div",{className:"pos-row",children:[t.jsxs("span",{className:"label",children:["1st Mo. (",s.interestRatePerMonth,"%):"]}),t.jsx("span",{className:"value",children:d(s.firstMonthInterest)})]}),s.additionalMonthsInterest>0&&t.jsxs("div",{className:"pos-row",children:[t.jsx("span",{className:"label",children:"Add. Months:"}),t.jsx("span",{className:"value",children:d(s.additionalMonthsInterest)})]}),s.proratedDailyInterest>0&&t.jsxs("div",{className:"pos-row",children:[t.jsxs("span",{className:"label",children:["Daily (",s.remainingDays,"d):"]}),t.jsx("span",{className:"value",children:d(s.proratedDailyInterest)})]}),t.jsxs("div",{className:"pos-row",children:[t.jsx("span",{className:"label",children:"Total Interest:"}),t.jsx("span",{className:"value",children:d(s.totalInterest)})]})]}),n[47]=s,n[48]=_):_=n[48];const ee=d(se);let G;n[49]!==ee?(G=t.jsxs("div",{className:"pos-total",children:["TOTAL PAID: ",ee]}),n[49]=ee,n[50]=G):G=n[50];let X;n[51]===Symbol.for("react.memo_cache_sentinel")?(X=t.jsx("span",{className:"label",children:"Payment:"}),n[51]=X):X=n[51];const $=e.redeemPaymentMethod||e.paymentMethod||"cash";let m;n[52]!==$?(m=$.replace("-"," ").toUpperCase(),n[52]=$,n[53]=m):m=n[53];let S;n[54]!==m?(S=t.jsxs("div",{className:"pos-row",children:[X,t.jsx("span",{className:"value",children:m})]}),n[54]=m,n[55]=S):S=n[55];let ne,q;n[56]===Symbol.for("react.memo_cache_sentinel")?(ne=t.jsx("p",{children:"Items returned to customer."}),q=t.jsx("p",{children:"Thank you for your trust!"}),n[56]=ne,n[57]=q):(ne=n[56],q=n[57]);const F=a?.name||"Onelka Jewellery";let h;n[58]!==F?(h=t.jsxs("div",{className:"pos-footer",children:[ne,q,t.jsxs("p",{children:["— ",F," —"]})]}),n[58]=F,n[59]=h):h=n[59];let M;n[60]===Symbol.for("react.memo_cache_sentinel")?(M=t.jsxs("div",{className:"pos-timestamp",children:["Printed: ",new Date().toLocaleString("en-GB")]}),n[60]=M):M=n[60];let A;return n[61]!==o||n[62]!==T||n[63]!==j||n[64]!==v||n[65]!==p||n[66]!==W||n[67]!==H||n[68]!==J||n[69]!==C||n[70]!==_||n[71]!==G||n[72]!==S||n[73]!==h?(A=t.jsxs("div",{className:"pos-receipt",children:[r,o,u,T,j,v,Z,p,W,H,O,Y,J,E,C,_,G,S,h,M]}),n[61]=o,n[62]=T,n[63]=j,n[64]=v,n[65]=p,n[66]=W,n[67]=H,n[68]=J,n[69]=C,n[70]=_,n[71]=G,n[72]=S,n[73]=h,n[74]=A):A=n[74],A}function Qe(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ke(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const Ve={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"};function Ne(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ie(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function He(l){switch(l){case"redemption":return{en:"REDEMPTION RECEIPT",si:"මුදා ගැනීමේ රිසිට්පත"};case"interest":return{en:"INTEREST PAYMENT RECEIPT",si:"පොලී ගෙවීමේ රිසිට්පත"};default:return{en:"PAYMENT RECEIPT",si:"ගෙවීම් රිසිට්පත"}}}function an(l){const n=Se.c(136),{data:e,company:a}=l,i=a||Ve;let de;n[0]!==e.paymentType?(de=He(e.paymentType),n[0]=e.paymentType,n[1]=de):de=n[1];const s=de;let se;n[2]===Symbol.for("react.memo_cache_sentinel")?(se=t.jsx("style",{children:`
        .pawn-payment-a4 {
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
        @media print {
          @page { size: A4 portrait; margin: 10mm; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { margin: 0; padding: 0; background: white; }
          .pawn-payment-a4 { width: 100%; max-width: none; padding: 0; margin: 0 auto; }
        }

        /* Header */
        .pp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 10px;
          margin-bottom: 14px;
          border-bottom: 2.5px solid #1a1a1a;
          position: relative;
        }
        .pp-header::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
        }
        .pp-company h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22pt;
          font-weight: 700;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pp-company .tagline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 9pt;
          color: #666;
          font-style: italic;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .pp-company .details {
          font-size: 8.5pt;
          color: #666;
          line-height: 1.5;
        }
        .pp-title-block {
          text-align: right;
        }
        .pp-title-block h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 16pt;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1.5px;
        }
        .pp-title-block .subtitle {
          font-size: 8.5pt;
          color: #666;
          font-style: italic;
          margin-top: 1px;
        }
        .pp-title-block .ticket-no {
          display: inline-block;
          margin-top: 6px;
          font-size: 11pt;
          font-weight: 600;
          padding: 3px 12px;
          border: 1.5px solid #999;
          border-radius: 3px;
        }

        /* Info Grid */
        .pp-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 16px;
        }
        .pp-info-box {
          padding: 10px 14px;
          border-left: 2.5px solid #1a1a1a;
        }
        .pp-info-box.right {
          border-left: none;
          border-right: 2.5px solid #1a1a1a;
          text-align: right;
        }
        .pp-info-box label {
          display: block;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #555;
          margin-bottom: 4px;
        }
        .pp-info-box .name {
          font-size: 13pt;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 2px;
        }
        .pp-info-box .meta {
          font-size: 9.5pt;
          color: #555;
          line-height: 1.5;
        }

        /* Items Table */
        .pp-items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
          font-size: 10pt;
        }
        .pp-items-table thead th {
          background: #f8f8f8;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          padding: 7px 8px;
          text-align: left;
          border-bottom: 2px solid #333;
          border-top: 1px solid #333;
          color: #333;
        }
        .pp-items-table thead th:first-child { width: 6%; text-align: center; }
        .pp-items-table thead th:nth-child(2) { width: 40%; }
        .pp-items-table thead th:nth-child(3) { width: 18%; text-align: center; }
        .pp-items-table thead th:nth-child(4) { width: 18%; text-align: right; }
        .pp-items-table thead th:last-child { width: 18%; text-align: right; }
        .pp-items-table tbody tr {
          border-bottom: 1px solid #ddd;
        }
        .pp-items-table tbody td {
          padding: 7px 8px;
          vertical-align: middle;
          color: #333;
        }
        .pp-items-table tbody td:first-child { text-align: center; color: #888; font-size: 9pt; }
        .pp-items-table .item-name { font-weight: 600; color: #1a1a1a; }
        .pp-items-table .item-meta { font-size: 8.5pt; color: #777; margin-top: 1px; }
        .pp-items-table tbody td:nth-child(3) { text-align: center; }
        .pp-items-table tbody td:nth-child(4),
        .pp-items-table tbody td:last-child {
          text-align: right;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 9.5pt;
        }

        /* Interest Breakdown Box */
        .pp-interest-box {
          border: 1.5px solid #333;
          border-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        .pp-interest-box h3 {
          font-size: 9pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #333;
          margin: 0 0 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid #ddd;
        }
        .pp-row {
          display: flex;
          justify-content: space-between;
          padding: 3px 0;
          font-size: 10pt;
        }
        .pp-row .label { color: #555; }
        .pp-row .value {
          font-family: 'Consolas', 'Monaco', monospace;
          font-weight: 500;
          color: #1a1a1a;
        }
        .pp-row.highlight .value { font-weight: 700; }

        /* Payment Summary */
        .pp-summary {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
        }
        .pp-summary-box {
          width: 55%;
        }
        .pp-summary-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 10px;
          font-size: 10pt;
        }
        .pp-summary-row .label { color: #555; }
        .pp-summary-row .value {
          font-family: 'Consolas', 'Monaco', monospace;
          color: #333;
          font-weight: 500;
        }
        .pp-summary-row.total {
          background: #f8f8f8;
          font-size: 13pt;
          font-weight: 700;
          padding: 8px 10px;
          margin-top: 4px;
          border-top: 2px solid #333;
          border-bottom: 2px solid #333;
        }
        .pp-summary-row.total .label,
        .pp-summary-row.total .value { color: #1a1a1a; }
        .pp-summary-row.paid {
          margin-top: 6px;
          padding: 6px 10px;
          border: 1.5px solid #333;
          border-radius: 3px;
          font-weight: 700;
          font-size: 12pt;
        }
        .pp-summary-row.paid .label,
        .pp-summary-row.paid .value { color: #1a1a1a; }

        /* Signature Area */
        .pp-signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          padding-top: 10px;
        }
        .pp-sig {
          width: 40%;
          text-align: center;
        }
        .pp-sig .line {
          border-top: 1px solid #333;
          padding-top: 4px;
          font-size: 9pt;
          color: #555;
          font-weight: 600;
        }

        /* Footer */
        .pp-footer {
          border-top: 2px solid #333;
          padding-top: 8px;
          text-align: center;
          margin-top: 20px;
          position: relative;
        }
        .pp-footer::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
        }
        .pp-footer .thank-you {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 13pt;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }
        .pp-footer .contact {
          font-size: 9pt;
          color: #666;
        }
        .pp-footer .contact a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
        }
        .pp-footer .tagline-footer {
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid #ddd;
          font-size: 8.5pt;
          color: #999;
          letter-spacing: 0.5px;
        }
        .pp-diamond {
          display: inline-block;
          width: 4px; height: 4px;
          background: white;
          border: 1px solid #333;
          transform: rotate(45deg);
          margin: 0 4px;
        }

        /* Notes */
        .pp-notes {
          background: #f8f8f8;
          border: 1px solid #999;
          border-radius: 4px;
          padding: 8px 14px;
          margin-bottom: 14px;
        }
        .pp-notes label {
          display: block;
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #333;
          margin-bottom: 3px;
        }
        .pp-notes p {
          font-size: 9.5pt;
          color: #444;
          margin: 0;
          line-height: 1.5;
        }

        /* Status Badge */
        .pp-status {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 10px;
          font-size: 8.5pt;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          border: 1px solid #333;
        }
      `}),n[2]=se):se=n[2];let le;n[3]===Symbol.for("react.memo_cache_sentinel")?(le={display:"flex",alignItems:"center",gap:"10px",marginBottom:"3px"},n[3]=le):le=n[3];let d;n[4]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx("img",{src:"/logo.jpg",alt:"",style:{width:"42px",height:"42px",objectFit:"contain",borderRadius:"3px"}}),n[4]=d):d=n[4];let r;n[5]!==i.name?(r=t.jsxs("div",{style:le,children:[d,t.jsx("h1",{children:i.name})]}),n[5]=i.name,n[6]=r):r=n[6];let f;n[7]!==i.tagline?(f=i.tagline&&t.jsx("div",{className:"tagline",children:i.tagline}),n[7]=i.tagline,n[8]=f):f=n[8];const P=i.city?`, ${i.city}`:"";let c;n[9]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsx("br",{}),n[9]=c):c=n[9];let R;n[10]===Symbol.for("react.memo_cache_sentinel")?(R=t.jsx("br",{}),n[10]=R):R=n[10];let b;n[11]!==i.address||n[12]!==i.email||n[13]!==i.phone||n[14]!==P?(b=t.jsxs("div",{className:"details",children:[i.address,P,c,"Tel: ",i.phone,R,"Email: ",i.email]}),n[11]=i.address,n[12]=i.email,n[13]=i.phone,n[14]=P,n[15]=b):b=n[15];let k;n[16]!==b||n[17]!==r||n[18]!==f?(k=t.jsxs("div",{className:"pp-company",children:[r,f,b]}),n[16]=b,n[17]=r,n[18]=f,n[19]=k):k=n[19];let g;n[20]!==s.en?(g=t.jsx("h2",{children:s.en}),n[20]=s.en,n[21]=g):g=n[21];let o;n[22]!==s.si?(o=t.jsx("div",{className:"subtitle",children:s.si}),n[22]=s.si,n[23]=o):o=n[23];let u;n[24]!==e.clearanceNumber?(u=t.jsx("div",{className:"ticket-no",children:e.clearanceNumber}),n[24]=e.clearanceNumber,n[25]=u):u=n[25];let I;n[26]!==g||n[27]!==o||n[28]!==u?(I=t.jsxs("div",{className:"pp-title-block",children:[g,o,u]}),n[26]=g,n[27]=o,n[28]=u,n[29]=I):I=n[29];let T;n[30]!==k||n[31]!==I?(T=t.jsxs("div",{className:"pp-header",children:[k,I]}),n[30]=k,n[31]=I,n[32]=T):T=n[32];let D;n[33]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsx("label",{children:"Customer Details / පාරිභෝගික විස්තර"}),n[33]=D):D=n[33];let y;n[34]!==e.customerName?(y=t.jsx("div",{className:"name",children:e.customerName}),n[34]=e.customerName,n[35]=y):y=n[35];let j;n[36]!==e.customerNic?(j=e.customerNic&&t.jsxs(t.Fragment,{children:["NIC: ",e.customerNic,t.jsx("br",{})]}),n[36]=e.customerNic,n[37]=j):j=n[37];let N;n[38]!==e.customerPhone?(N=e.customerPhone&&t.jsxs(t.Fragment,{children:["Tel: ",e.customerPhone,t.jsx("br",{})]}),n[38]=e.customerPhone,n[39]=N):N=n[39];let z;n[40]!==e.customerAddress?(z=e.customerAddress&&t.jsx(t.Fragment,{children:e.customerAddress}),n[40]=e.customerAddress,n[41]=z):z=n[41];let w;n[42]!==j||n[43]!==N||n[44]!==z?(w=t.jsxs("div",{className:"meta",children:[j,N,z]}),n[42]=j,n[43]=N,n[44]=z,n[45]=w):w=n[45];let v;n[46]!==y||n[47]!==w?(v=t.jsxs("div",{className:"pp-info-box",children:[D,y,w]}),n[46]=y,n[47]=w,n[48]=v):v=n[48];let Z;n[49]===Symbol.for("react.memo_cache_sentinel")?(Z=t.jsx("label",{children:"Payment Details / ගෙවීම් විස්තර"}),n[49]=Z):Z=n[49];let B;n[50]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx("strong",{children:"Pawn Date:"}),n[50]=B):B=n[50];let p;n[51]!==e.pawnDate?(p=Ie(e.pawnDate),n[51]=e.pawnDate,n[52]=p):p=n[52];let W,H;n[53]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsx("br",{}),H=t.jsx("strong",{children:"Payment Date:"}),n[53]=W,n[54]=H):(W=n[53],H=n[54]);let O;n[55]!==e.paymentDate?(O=Ie(e.paymentDate),n[55]=e.paymentDate,n[56]=O):O=n[56];let Y,J;n[57]===Symbol.for("react.memo_cache_sentinel")?(Y=t.jsx("br",{}),J=t.jsx("strong",{children:"Method:"}),n[57]=Y,n[58]=J):(Y=n[57],J=n[58]);let E;n[59]!==e.paymentMethod?(E=e.paymentMethod.replace("-"," ").toUpperCase(),n[59]=e.paymentMethod,n[60]=E):E=n[60];let L,ae;n[61]===Symbol.for("react.memo_cache_sentinel")?(L=t.jsx("br",{}),ae=t.jsx("strong",{children:"Type:"}),n[61]=L,n[62]=ae):(L=n[61],ae=n[62]);const C=e.paymentType==="redemption"?"FULL REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let _;n[63]!==C?(_=t.jsx("span",{className:"pp-status",children:C}),n[63]=C,n[64]=_):_=n[64];let ee;n[65]!==p||n[66]!==O||n[67]!==E||n[68]!==_?(ee=t.jsxs("div",{className:"pp-info-box right",children:[Z,t.jsxs("div",{className:"meta",children:[B," ",p,W,H," ",O,Y,J," ",E,L,ae," ",_]})]}),n[65]=p,n[66]=O,n[67]=E,n[68]=_,n[69]=ee):ee=n[69];let G;n[70]!==v||n[71]!==ee?(G=t.jsxs("div",{className:"pp-info-grid",children:[v,ee]}),n[70]=v,n[71]=ee,n[72]=G):G=n[72];let X;n[73]===Symbol.for("react.memo_cache_sentinel")?(X=t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Pawned Item / උකස් භාණ්ඩය"}),t.jsx("th",{children:"Details"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Value (Ref.)"})]})}),n[73]=X):X=n[73];let $;n[74]!==e.items?($=e.items.map(Xe),n[74]=e.items,n[75]=$):$=n[75];let m;n[76]!==$?(m=t.jsxs("table",{className:"pp-items-table",children:[X,t.jsx("tbody",{children:$})]}),n[76]=$,n[77]=m):m=n[77];let S;n[78]!==e.additionalMonthsInterest||n[79]!==e.daysElapsed||n[80]!==e.firstMonthInterest||n[81]!==e.interestRate||n[82]!==e.proratedDailyInterest||n[83]!==e.totalInterest?(S=e.totalInterest!=null&&e.totalInterest>0&&t.jsxs("div",{className:"pp-interest-box",children:[t.jsx("h3",{children:"Interest Breakdown / පොලී විස්තරය"}),e.daysElapsed!=null&&t.jsxs("div",{className:"pp-row",children:[t.jsx("span",{className:"label",children:"Period Elapsed"}),t.jsxs("span",{className:"value",children:[e.daysElapsed," days"]})]}),t.jsxs("div",{className:"pp-row",children:[t.jsx("span",{className:"label",children:"Interest Rate"}),t.jsxs("span",{className:"value",children:[e.interestRate,"% / month"]})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&t.jsxs("div",{className:"pp-row",children:[t.jsxs("span",{className:"label",children:["1st Month Interest (",e.interestRate,"%)"]}),t.jsx("span",{className:"value",children:Ne(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&t.jsxs("div",{className:"pp-row",children:[t.jsx("span",{className:"label",children:"Additional Months Interest"}),t.jsx("span",{className:"value",children:Ne(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&t.jsxs("div",{className:"pp-row",children:[t.jsx("span",{className:"label",children:"Pro-rated Daily Interest"}),t.jsx("span",{className:"value",children:Ne(e.proratedDailyInterest)})]}),t.jsxs("div",{className:"pp-row highlight",style:{borderTop:"1px solid #ddd",paddingTop:"4px",marginTop:"2px"},children:[t.jsx("span",{className:"label",style:{fontWeight:600},children:"Total Interest / මුළු පොලිය"}),t.jsx("span",{className:"value",children:Ne(e.totalInterest)})]})]}),n[78]=e.additionalMonthsInterest,n[79]=e.daysElapsed,n[80]=e.firstMonthInterest,n[81]=e.interestRate,n[82]=e.proratedDailyInterest,n[83]=e.totalInterest,n[84]=S):S=n[84];let ne;n[85]===Symbol.for("react.memo_cache_sentinel")?(ne=t.jsx("span",{className:"label",children:"Advance Amount (අත්තිකාරම් මුදල)"}),n[85]=ne):ne=n[85];let q;n[86]!==e.principalAmount?(q=Ne(e.principalAmount),n[86]=e.principalAmount,n[87]=q):q=n[87];let F;n[88]!==q?(F=t.jsxs("div",{className:"pp-summary-row",children:[ne,t.jsx("span",{className:"value",children:q})]}),n[88]=q,n[89]=F):F=n[89];let h;n[90]!==e.totalInterest?(h=e.totalInterest!=null&&e.totalInterest>0&&t.jsxs("div",{className:"pp-summary-row",children:[t.jsx("span",{className:"label",children:"Total Interest"}),t.jsx("span",{className:"value",children:Ne(e.totalInterest)})]}),n[90]=e.totalInterest,n[91]=h):h=n[91];let M;n[92]!==e.totalPayable?(M=e.totalPayable!=null&&t.jsxs("div",{className:"pp-summary-row total",children:[t.jsx("span",{className:"label",children:"Total Due / මුළු මුදල"}),t.jsx("span",{className:"value",children:Ne(e.totalPayable)})]}),n[92]=e.totalPayable,n[93]=M):M=n[93];let A;n[94]!==e.previousPayments?(A=e.previousPayments!=null&&e.previousPayments>0&&t.jsxs("div",{className:"pp-summary-row",style:{marginTop:"4px"},children:[t.jsx("span",{className:"label",children:"Previous Payments"}),t.jsxs("span",{className:"value",children:["(",Ne(e.previousPayments),")"]})]}),n[94]=e.previousPayments,n[95]=A):A=n[95];let U;n[96]===Symbol.for("react.memo_cache_sentinel")?(U=t.jsx("span",{className:"label",children:"Amount Paid / ගෙවූ මුදල"}),n[96]=U):U=n[96];let x;n[97]!==e.paymentAmount?(x=Ne(e.paymentAmount),n[97]=e.paymentAmount,n[98]=x):x=n[98];let Q;n[99]!==x?(Q=t.jsxs("div",{className:"pp-summary-row paid",children:[U,t.jsx("span",{className:"value",children:x})]}),n[99]=x,n[100]=Q):Q=n[100];let te;n[101]!==e.remainingBalance?(te=e.remainingBalance!=null&&e.remainingBalance>0&&t.jsxs("div",{className:"pp-summary-row",style:{marginTop:"4px",fontSize:"10pt"},children:[t.jsx("span",{className:"label",style:{color:"#333",fontWeight:600},children:"Remaining Balance"}),t.jsx("span",{className:"value",style:{fontWeight:700},children:Ne(e.remainingBalance)})]}),n[101]=e.remainingBalance,n[102]=te):te=n[102];let K;n[103]!==F||n[104]!==h||n[105]!==M||n[106]!==A||n[107]!==Q||n[108]!==te?(K=t.jsx("div",{className:"pp-summary",children:t.jsxs("div",{className:"pp-summary-box",children:[F,h,M,A,Q,te]})}),n[103]=F,n[104]=h,n[105]=M,n[106]=A,n[107]=Q,n[108]=te,n[109]=K):K=n[109];let V;n[110]!==e.notes?(V=e.notes&&t.jsxs("div",{className:"pp-notes",children:[t.jsx("label",{children:"Notes"}),t.jsx("p",{children:e.notes})]}),n[110]=e.notes,n[111]=V):V=n[111];let ie;n[112]===Symbol.for("react.memo_cache_sentinel")?(ie=t.jsx("div",{className:"pp-sig",children:t.jsx("div",{className:"line",children:"Customer Signature / පාරිභෝගික අත්සන"})}),n[112]=ie):ie=n[112];let oe;n[113]===Symbol.for("react.memo_cache_sentinel")?(oe=t.jsxs("div",{className:"pp-signatures",children:[ie,t.jsx("div",{className:"pp-sig",children:t.jsx("div",{className:"line",children:"Authorized Signature / බලයලත් අත්සන"})})]}),n[113]=oe):oe=n[113];let xe;n[114]===Symbol.for("react.memo_cache_sentinel")?(xe=t.jsx("span",{className:"pp-diamond"}),n[114]=xe):xe=n[114];let ge;n[115]===Symbol.for("react.memo_cache_sentinel")?(ge=t.jsxs("div",{className:"thank-you",children:[xe,"Thank You for Your Patronage",t.jsx("span",{className:"pp-diamond"})]}),n[115]=ge):ge=n[115];const he=`mailto:${i.email}`;let fe;n[116]!==i.email||n[117]!==he?(fe=t.jsx("a",{href:he,children:i.email}),n[116]=i.email,n[117]=he,n[118]=fe):fe=n[118];const ue=`tel:${i.phone}`;let re;n[119]!==i.phone||n[120]!==ue?(re=t.jsx("a",{href:ue,children:i.phone}),n[119]=i.phone,n[120]=ue,n[121]=re):re=n[121];let me;n[122]!==fe||n[123]!==re?(me=t.jsxs("div",{className:"contact",children:["Contact us at ",fe," or call ",re]}),n[122]=fe,n[123]=re,n[124]=me):me=n[124];let ye;n[125]===Symbol.for("react.memo_cache_sentinel")?(ye=t.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),n[125]=ye):ye=n[125];let ce;n[126]!==me?(ce=t.jsxs("div",{className:"pp-footer",children:[ge,me,ye]}),n[126]=me,n[127]=ce):ce=n[127];let be;return n[128]!==T||n[129]!==G||n[130]!==m||n[131]!==S||n[132]!==K||n[133]!==V||n[134]!==ce?(be=t.jsxs("div",{className:"pawn-payment-a4",children:[se,T,G,m,S,K,V,oe,ce]}),n[128]=T,n[129]=G,n[130]=m,n[131]=S,n[132]=K,n[133]=V,n[134]=ce,n[135]=be):be=n[135],be}function Xe(l,n){return t.jsxs("tr",{children:[t.jsx("td",{children:String(n+1).padStart(2,"0")}),t.jsxs("td",{children:[t.jsx("div",{className:"item-name",children:l.productName}),(l.metalType||l.karat)&&t.jsxs("div",{className:"item-meta",children:[l.metalType?.toUpperCase(),l.karat?` • ${l.karat}`:""]})]}),t.jsx("td",{style:{fontSize:"9pt",color:"#555"},children:l.karat||"—"}),t.jsx("td",{children:l.metalWeight?`${Number(l.metalWeight).toFixed(3)} g`:"—"}),t.jsx("td",{children:Ne(l.total)})]},n)}function we(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Te(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function sn(l){const n=Se.c(113),{data:e,company:a}=l,i=e.paymentType==="redemption"?"REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let de;n[0]===Symbol.for("react.memo_cache_sentinel")?(de=t.jsx("style",{children:`
        .pos-pay-receipt {
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
        .pos-pay-receipt * { box-sizing: border-box; }
        .ppr-header {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 8px;
          margin-bottom: 6px;
        }
        .ppr-header h1 {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .ppr-header p { margin: 1px 0; font-size: 10px; }
        .ppr-title {
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          margin: 6px 0;
          padding: 4px 0;
          border-top: 1px dashed #000;
          border-bottom: 1px dashed #000;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .ppr-row {
          display: flex;
          justify-content: space-between;
          padding: 1px 0;
        }
        .ppr-row .label { color: #333; }
        .ppr-row .value { font-weight: bold; text-align: right; }
        .ppr-divider {
          border-top: 1px dashed #000;
          margin: 5px 0;
        }
        .ppr-item {
          padding: 2px 0;
        }
        .ppr-item-name {
          font-weight: bold;
          font-size: 11px;
        }
        .ppr-item-meta {
          font-size: 9px;
          color: #555;
          padding-left: 8px;
        }
        .ppr-total {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          padding: 6px 0;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          margin: 6px 0;
        }
        .ppr-footer {
          text-align: center;
          font-size: 10px;
          margin-top: 10px;
          padding-top: 6px;
          border-top: 1px dashed #000;
        }
        .ppr-footer p { margin: 2px 0; }
        .ppr-ts {
          text-align: center;
          font-size: 9px;
          color: #666;
          margin-top: 3px;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .pos-pay-receipt { margin: 0; padding: 3mm; }
          @page { size: 80mm auto; margin: 0; }
        }
        @media screen {
          .pos-pay-receipt {
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
            border-radius: 4px;
          }
        }
      `}),n[0]=de):de=n[0];const s=a?.name||"Onelka Jewellery";let se;n[1]!==s?(se=t.jsx("h1",{children:s}),n[1]=s,n[2]=se):se=n[2];let le;n[3]!==a?(le=a?.tagline&&t.jsx("p",{children:a.tagline}),n[3]=a,n[4]=le):le=n[4];const d=a?.address||"";let r;n[5]!==d?(r=t.jsx("p",{children:d}),n[5]=d,n[6]=r):r=n[6];const f=a?.phone||"";let P;n[7]!==f?(P=t.jsxs("p",{children:["Tel: ",f]}),n[7]=f,n[8]=P):P=n[8];let c;n[9]!==se||n[10]!==le||n[11]!==r||n[12]!==P?(c=t.jsxs("div",{className:"ppr-header",children:[se,le,r,P]}),n[9]=se,n[10]=le,n[11]=r,n[12]=P,n[13]=c):c=n[13];let R;n[14]!==i?(R=t.jsx("div",{className:"ppr-title",children:i}),n[14]=i,n[15]=R):R=n[15];let b;n[16]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx("span",{className:"label",children:"Ticket #:"}),n[16]=b):b=n[16];let k;n[17]!==e.clearanceNumber?(k=t.jsxs("div",{className:"ppr-row",children:[b,t.jsx("span",{className:"value",children:e.clearanceNumber})]}),n[17]=e.clearanceNumber,n[18]=k):k=n[18];let g;n[19]===Symbol.for("react.memo_cache_sentinel")?(g=t.jsx("span",{className:"label",children:"Pawn Date:"}),n[19]=g):g=n[19];let o;n[20]!==e.pawnDate?(o=Te(e.pawnDate),n[20]=e.pawnDate,n[21]=o):o=n[21];let u;n[22]!==o?(u=t.jsxs("div",{className:"ppr-row",children:[g,t.jsx("span",{className:"value",children:o})]}),n[22]=o,n[23]=u):u=n[23];let I;n[24]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsx("span",{className:"label",children:"Pay Date:"}),n[24]=I):I=n[24];let T;n[25]!==e.paymentDate?(T=Te(e.paymentDate),n[25]=e.paymentDate,n[26]=T):T=n[26];let D;n[27]!==T?(D=t.jsxs("div",{className:"ppr-row",children:[I,t.jsx("span",{className:"value",children:T})]}),n[27]=T,n[28]=D):D=n[28];let y;n[29]===Symbol.for("react.memo_cache_sentinel")?(y=t.jsx("div",{className:"ppr-divider"}),n[29]=y):y=n[29];let j;n[30]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx("span",{className:"label",children:"Customer:"}),n[30]=j):j=n[30];let N;n[31]!==e.customerName?(N=t.jsxs("div",{className:"ppr-row",children:[j,t.jsx("span",{className:"value",children:e.customerName})]}),n[31]=e.customerName,n[32]=N):N=n[32];let z;n[33]!==e.customerNic?(z=e.customerNic&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"NIC:"}),t.jsx("span",{className:"value",children:e.customerNic})]}),n[33]=e.customerNic,n[34]=z):z=n[34];let w,v;n[35]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx("div",{className:"ppr-divider"}),v={fontWeight:"bold",fontSize:"11px",marginBottom:"3px"},n[35]=w,n[36]=v):(w=n[35],v=n[36]);const Z=e.paymentType==="redemption"?"ITEMS REDEEMED:":"PAWNED ITEMS:";let B;n[37]!==Z?(B=t.jsx("div",{style:v,children:Z}),n[37]=Z,n[38]=B):B=n[38];let p;n[39]!==e.items?(p=e.items.map(Ze),n[39]=e.items,n[40]=p):p=n[40];let W;n[41]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsx("div",{className:"ppr-divider"}),n[41]=W):W=n[41];let H;n[42]===Symbol.for("react.memo_cache_sentinel")?(H=t.jsx("span",{className:"label",children:"Principal:"}),n[42]=H):H=n[42];let O;n[43]!==e.principalAmount?(O=we(e.principalAmount),n[43]=e.principalAmount,n[44]=O):O=n[44];let Y;n[45]!==O?(Y=t.jsxs("div",{className:"ppr-row",children:[H,t.jsx("span",{className:"value",children:O})]}),n[45]=O,n[46]=Y):Y=n[46];let J;n[47]===Symbol.for("react.memo_cache_sentinel")?(J=t.jsx("span",{className:"label",children:"Rate:"}),n[47]=J):J=n[47];let E;n[48]!==e.interestRate?(E=t.jsxs("div",{className:"ppr-row",children:[J,t.jsxs("span",{className:"value",children:[e.interestRate,"%/mo"]})]}),n[48]=e.interestRate,n[49]=E):E=n[49];let L;n[50]===Symbol.for("react.memo_cache_sentinel")?(L=t.jsx("span",{className:"label",children:"Monthly Int:"}),n[50]=L):L=n[50];const ae=e.principalAmount*e.interestRate/100;let C;n[51]!==ae?(C=we(ae),n[51]=ae,n[52]=C):C=n[52];let _;n[53]!==C?(_=t.jsxs("div",{className:"ppr-row",children:[L,t.jsx("span",{className:"value",children:C})]}),n[53]=C,n[54]=_):_=n[54];let ee;n[55]!==e.daysElapsed?(ee=e.daysElapsed!=null&&e.daysElapsed>0&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"Period:"}),t.jsxs("span",{className:"value",children:[e.daysElapsed," days"]})]}),n[55]=e.daysElapsed,n[56]=ee):ee=n[56];let G;n[57]!==e.firstMonthInterest?(G=e.firstMonthInterest!=null&&e.firstMonthInterest>0&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"1st Month:"}),t.jsx("span",{className:"value",children:we(e.firstMonthInterest)})]}),n[57]=e.firstMonthInterest,n[58]=G):G=n[58];let X;n[59]!==e.additionalMonthsInterest?(X=e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"Addtl Months:"}),t.jsx("span",{className:"value",children:we(e.additionalMonthsInterest)})]}),n[59]=e.additionalMonthsInterest,n[60]=X):X=n[60];let $;n[61]!==e.proratedDailyInterest?($=e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"Pro-rated:"}),t.jsx("span",{className:"value",children:we(e.proratedDailyInterest)})]}),n[61]=e.proratedDailyInterest,n[62]=$):$=n[62];let m;n[63]!==e.totalInterest?(m=e.totalInterest!=null&&e.totalInterest>0&&t.jsxs("div",{className:"ppr-row",style:{fontWeight:"bold",borderTop:"1px dashed #000",paddingTop:"3px",marginTop:"2px"},children:[t.jsx("span",{className:"label",children:"Total Int:"}),t.jsx("span",{className:"value",children:we(e.totalInterest)})]}),n[63]=e.totalInterest,n[64]=m):m=n[64];let S;n[65]!==e.totalPayable?(S=e.totalPayable!=null&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"Total Due:"}),t.jsx("span",{className:"value",children:we(e.totalPayable)})]}),n[65]=e.totalPayable,n[66]=S):S=n[66];let ne;n[67]!==e.previousPayments?(ne=e.previousPayments!=null&&e.previousPayments>0&&t.jsxs("div",{className:"ppr-row",children:[t.jsx("span",{className:"label",children:"Prev. Paid:"}),t.jsxs("span",{className:"value",children:["(",we(e.previousPayments),")"]})]}),n[67]=e.previousPayments,n[68]=ne):ne=n[68];let q;n[69]!==e.paymentAmount?(q=we(e.paymentAmount),n[69]=e.paymentAmount,n[70]=q):q=n[70];let F;n[71]!==q?(F=t.jsxs("div",{className:"ppr-total",children:["PAID: ",q]}),n[71]=q,n[72]=F):F=n[72];let h;n[73]!==e.remainingBalance?(h=e.remainingBalance!=null&&e.remainingBalance>0&&t.jsxs("div",{className:"ppr-row",style:{fontWeight:"bold"},children:[t.jsx("span",{className:"label",children:"Balance:"}),t.jsx("span",{className:"value",children:we(e.remainingBalance)})]}),n[73]=e.remainingBalance,n[74]=h):h=n[74];let M;n[75]===Symbol.for("react.memo_cache_sentinel")?(M=t.jsx("span",{className:"label",children:"Method:"}),n[75]=M):M=n[75];let A;n[76]!==e.paymentMethod?(A=e.paymentMethod.replace("-"," ").toUpperCase(),n[76]=e.paymentMethod,n[77]=A):A=n[77];let U;n[78]!==A?(U=t.jsxs("div",{className:"ppr-row",children:[M,t.jsx("span",{className:"value",children:A})]}),n[78]=A,n[79]=U):U=n[79];let x;n[80]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx("p",{children:"Thank you!"}),n[80]=x):x=n[80];const Q=a?.name||"Onelka Jewellery";let te;n[81]!==Q?(te=t.jsx("p",{children:Q}),n[81]=Q,n[82]=te):te=n[82];let K;n[83]!==a?(K=a?.phone&&t.jsxs("p",{children:["Tel: ",a.phone]}),n[83]=a,n[84]=K):K=n[84];let V;n[85]!==te||n[86]!==K?(V=t.jsxs("div",{className:"ppr-footer",children:[x,te,K]}),n[85]=te,n[86]=K,n[87]=V):V=n[87];let ie;n[88]===Symbol.for("react.memo_cache_sentinel")?(ie=t.jsx("div",{className:"ppr-ts",children:new Date().toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}),n[88]=ie):ie=n[88];let oe;return n[89]!==R||n[90]!==k||n[91]!==u||n[92]!==D||n[93]!==N||n[94]!==z||n[95]!==B||n[96]!==p||n[97]!==Y||n[98]!==E||n[99]!==_||n[100]!==ee||n[101]!==G||n[102]!==X||n[103]!==$||n[104]!==m||n[105]!==S||n[106]!==ne||n[107]!==F||n[108]!==h||n[109]!==U||n[110]!==V||n[111]!==c?(oe=t.jsxs("div",{className:"pos-pay-receipt",children:[de,c,R,k,u,D,y,N,z,w,B,p,W,Y,E,_,ee,G,X,$,m,S,ne,F,h,U,V,ie]}),n[89]=R,n[90]=k,n[91]=u,n[92]=D,n[93]=N,n[94]=z,n[95]=B,n[96]=p,n[97]=Y,n[98]=E,n[99]=_,n[100]=ee,n[101]=G,n[102]=X,n[103]=$,n[104]=m,n[105]=S,n[106]=ne,n[107]=F,n[108]=h,n[109]=U,n[110]=V,n[111]=c,n[112]=oe):oe=n[112],oe}function Ze(l,n){return t.jsxs("div",{className:"ppr-item",children:[t.jsxs("div",{className:"ppr-item-name",children:[n+1,". ",l.productName]}),(l.karat||l.metalWeight)&&t.jsxs("div",{className:"ppr-item-meta",children:[l.karat||""," ",l.metalType||""," ",l.metalWeight?`${l.metalWeight}g`:""]})]},n)}export{Re as P,We as a,tn as b,sn as c,an as d};
