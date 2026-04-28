import{r as wt,c as pt,j as n}from"./vendor-react-0ysHbwzk.js";import{K as ct,f as me,l as tt}from"./pages-invoices-C_MgSCQW.js";import{e as Tt}from"./pages-misc-a3znShT2.js";const zt={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},It=wt.forwardRef((l,t)=>{const e=pt.c(161),{invoice:s,customer:i,company:ce}=l,a=ce===void 0?zt:ce;let o;e[0]!==s.items?(o=()=>s.items.reduce(Pt,0),e[0]=s.items,e[1]=o):o=e[1];const le=o;let A,c,O,R,p,$,g,x,u,r;if(e[2]!==le||e[3]!==a.address||e[4]!==a.city||e[5]!==a.email||e[6]!==a.name||e[7]!==a.phone||e[8]!==a.phone2||e[9]!==a.tagline||e[10]!==a.website||e[11]!==i||e[12]!==s.customerAddress||e[13]!==s.customerName||e[14]!==s.customerPhone||e[15]!==s.dueDate||e[16]!==s.invoiceNumber||e[17]!==s.issueDate||e[18]!==s.items||e[19]!==s.status||e[20]!==s.subtotal||e[21]!==t){const H=le();x=t,u="print-invoice-a5",e[32]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("style",{children:`
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
        `}),e[32]=r):r=e[32];let W;e[33]===Symbol.for("react.memo_cache_sentinel")?(W={display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px"},e[33]=W):W=e[33];let te;e[34]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain",borderRadius:"4px"}}),e[34]=te):te=e[34];let D;e[35]!==a.name?(D=n.jsxs("div",{style:W,children:[te,n.jsx("h1",{children:a.name})]}),e[35]=a.name,e[36]=D):D=e[36];let z;e[37]!==a.tagline?(z=a.tagline&&n.jsx("div",{className:"tagline",children:a.tagline}),e[37]=a.tagline,e[38]=z):z=e[38];let k;e[39]===Symbol.for("react.memo_cache_sentinel")?(k=n.jsx("br",{}),e[39]=k):k=e[39];const Q=a.phone2&&`| ${a.phone2}`;let M;e[40]===Symbol.for("react.memo_cache_sentinel")?(M=n.jsx("br",{}),e[40]=M):M=e[40];let f;e[41]!==a.website?(f=a.website&&n.jsxs(n.Fragment,{children:[" | Web: ",a.website]}),e[41]=a.website,e[42]=f):f=e[42];let I;e[43]!==a.address||e[44]!==a.city||e[45]!==a.email||e[46]!==a.phone||e[47]!==Q||e[48]!==f?(I=n.jsxs("div",{className:"details",children:[a.address,", ",a.city,k,"Tel: ",a.phone," ",Q,M,"Email: ",a.email,f]}),e[43]=a.address,e[44]=a.city,e[45]=a.email,e[46]=a.phone,e[47]=Q,e[48]=f,e[49]=I):I=e[49];let Y;e[50]!==D||e[51]!==z||e[52]!==I?(Y=n.jsxs("div",{className:"company-info-a5",children:[D,z,I]}),e[50]=D,e[51]=z,e[52]=I,e[53]=Y):Y=e[53];let X;e[54]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsx("h2",{children:"INVOICE"}),e[54]=X):X=e[54];let K;e[55]!==s.invoiceNumber?(K=n.jsxs("div",{className:"invoice-title-a5",children:[X,n.jsx("div",{className:"invoice-number",children:s.invoiceNumber})]}),e[55]=s.invoiceNumber,e[56]=K):K=e[56],e[57]!==Y||e[58]!==K?(A=n.jsxs("div",{className:"invoice-header-a5",children:[Y,K]}),e[57]=Y,e[58]=K,e[59]=A):A=e[59];let b;e[60]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx("label",{children:"Bill To"}),e[60]=b):b=e[60];let Z;e[61]!==s.customerName?(Z=n.jsx("div",{className:"name",children:s.customerName}),e[61]=s.customerName,e[62]=Z):Z=e[62];let ne;e[63]!==i?(ne=i&&n.jsxs("div",{className:"info",children:[i.businessName&&n.jsxs(n.Fragment,{children:[i.businessName,n.jsx("br",{})]}),i.address&&n.jsxs(n.Fragment,{children:[i.address,n.jsx("br",{})]}),i.phone&&n.jsxs(n.Fragment,{children:["Tel: ",i.phone,n.jsx("br",{})]}),i.email&&n.jsx(n.Fragment,{children:i.email})]}),e[63]=i,e[64]=ne):ne=e[64];let ee;e[65]!==i||e[66]!==s.customerAddress||e[67]!==s.customerPhone?(ee=!i&&s.customerPhone&&n.jsxs("div",{className:"info",children:["Tel: ",s.customerPhone,n.jsx("br",{}),s.customerAddress]}),e[65]=i,e[66]=s.customerAddress,e[67]=s.customerPhone,e[68]=ee):ee=e[68];let se;e[69]!==Z||e[70]!==ne||e[71]!==ee?(se=n.jsxs("div",{className:"meta-box-a5",children:[b,Z,ne,ee]}),e[69]=Z,e[70]=ne,e[71]=ee,e[72]=se):se=e[72];let oe;e[73]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("label",{children:"Invoice Details"}),e[73]=oe):oe=e[73];let pe;e[74]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsx("strong",{children:"Date:"}),e[74]=pe):pe=e[74];let xe;e[75]!==s.issueDate?(xe=ct(s.issueDate),e[75]=s.issueDate,e[76]=xe):xe=e[76];let je;e[77]===Symbol.for("react.memo_cache_sentinel")?(je=n.jsx("br",{}),e[77]=je):je=e[77];let fe;e[78]!==s.dueDate?(fe=s.dueDate&&n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Due:"})," ",ct(s.dueDate),n.jsx("br",{})]}),e[78]=s.dueDate,e[79]=fe):fe=e[79];let be;e[80]===Symbol.for("react.memo_cache_sentinel")?(be=n.jsx("strong",{children:"Status:"}),e[80]=be):be=e[80];const ge=`status-badge-a5 status-${s.status}`;let ie;e[81]!==s.status||e[82]!==ge?(ie=n.jsx("span",{className:ge,children:s.status}),e[81]=s.status,e[82]=ge,e[83]=ie):ie=e[83];let de;e[84]!==xe||e[85]!==fe||e[86]!==ie?(de=n.jsxs("div",{className:"meta-box-a5 right",children:[oe,n.jsxs("div",{className:"info",children:[pe," ",xe,je,fe,be," ",ie]})]}),e[84]=xe,e[85]=fe,e[86]=ie,e[87]=de):de=e[87],e[88]!==se||e[89]!==de?(c=n.jsxs("div",{className:"invoice-meta-a5",children:[se,de]}),e[88]=se,e[89]=de,e[90]=c):c=e[90];let he;e[91]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#"}),n.jsx("th",{children:"Item Description"}),n.jsx("th",{children:"Weight"}),n.jsx("th",{children:"Qty"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Amount"})]})}),e[91]=he):he=e[91];let re;e[92]!==s.items?(re=s.items.map(Dt),e[92]=s.items,e[93]=re):re=e[93],e[94]!==re?(O=n.jsxs("table",{className:"items-table-a5",children:[he,n.jsx("tbody",{children:re})]}),e[94]=re,e[95]=O):O=e[95],g="totals-section-a5",R="totals-box-a5";let ue;e[96]===Symbol.for("react.memo_cache_sentinel")?(ue=n.jsx("span",{className:"label",children:"Subtotal"}),e[96]=ue):ue=e[96];let Ne;e[97]!==s.subtotal?(Ne=me(s.subtotal),e[97]=s.subtotal,e[98]=Ne):Ne=e[98],e[99]!==Ne?(p=n.jsxs("div",{className:"totals-row-a5 subtotal",children:[ue,n.jsx("span",{className:"value",children:Ne})]}),e[99]=Ne,e[100]=p):p=e[100],$=H>0&&n.jsxs("div",{className:"totals-row-a5 discount",children:[n.jsx("span",{className:"label",children:"Item Discounts"}),n.jsxs("span",{className:"value",children:["-",me(H)]})]}),e[2]=le,e[3]=a.address,e[4]=a.city,e[5]=a.email,e[6]=a.name,e[7]=a.phone,e[8]=a.phone2,e[9]=a.tagline,e[10]=a.website,e[11]=i,e[12]=s.customerAddress,e[13]=s.customerName,e[14]=s.customerPhone,e[15]=s.dueDate,e[16]=s.invoiceNumber,e[17]=s.issueDate,e[18]=s.items,e[19]=s.status,e[20]=s.subtotal,e[21]=t,e[22]=A,e[23]=c,e[24]=O,e[25]=R,e[26]=p,e[27]=$,e[28]=g,e[29]=x,e[30]=u,e[31]=r}else A=e[22],c=e[23],O=e[24],R=e[25],p=e[26],$=e[27],g=e[28],x=e[29],u=e[30],r=e[31];let j;e[101]!==s.discount||e[102]!==s.discountType?(j=s.discount>0&&n.jsxs("div",{className:"totals-row-a5 discount",children:[n.jsxs("span",{className:"label",children:["Discount ",s.discountType==="percentage"&&`(${s.discount}%)`]}),n.jsxs("span",{className:"value",children:["-",me(s.discount)]})]}),e[101]=s.discount,e[102]=s.discountType,e[103]=j):j=e[103];let P;e[104]!==s.tax||e[105]!==s.taxRate?(P=s.tax>0&&n.jsxs("div",{className:"totals-row-a5",children:[n.jsxs("span",{className:"label",children:["Tax ",s.taxRate&&`(${s.taxRate}%)`]}),n.jsx("span",{className:"value",children:me(s.tax)})]}),e[104]=s.tax,e[105]=s.taxRate,e[106]=P):P=e[106];let S;e[107]===Symbol.for("react.memo_cache_sentinel")?(S=n.jsx("span",{className:"label",children:"Total Amount"}),e[107]=S):S=e[107];let T;e[108]!==s.total?(T=me(s.total),e[108]=s.total,e[109]=T):T=e[109];let N;e[110]!==T?(N=n.jsxs("div",{className:"totals-row-a5 total",children:[S,n.jsx("span",{className:"value",children:T})]}),e[110]=T,e[111]=N):N=e[111];let y;e[112]!==s.balanceDue?(y=s.balanceDue>0&&n.jsxs("div",{className:"totals-row-a5 balance",children:[n.jsx("span",{className:"label",children:"Balance Due"}),n.jsx("span",{className:"value",children:me(s.balanceDue)})]}),e[112]=s.balanceDue,e[113]=y):y=e[113];let m;e[114]!==j||e[115]!==P||e[116]!==N||e[117]!==y||e[118]!==R||e[119]!==p||e[120]!==$?(m=n.jsxs("div",{className:R,children:[p,$,j,P,N,y]}),e[114]=j,e[115]=P,e[116]=N,e[117]=y,e[118]=R,e[119]=p,e[120]=$,e[121]=m):m=e[121];let _;e[122]!==m||e[123]!==g?(_=n.jsx("div",{className:g,children:m}),e[122]=m,e[123]=g,e[124]=_):_=e[124];let d;e[125]!==s.amountPaid||e[126]!==s.paymentMethod?(d=s.amountPaid>0&&n.jsxs("div",{className:"payment-info-a5",children:[n.jsxs("div",{className:"payment-box-a5",children:[n.jsx("label",{children:"Amount Paid"}),n.jsx("div",{className:"value",children:me(s.amountPaid)})]}),s.paymentMethod&&n.jsxs("div",{className:"payment-box-a5",children:[n.jsx("label",{children:"Payment Method"}),n.jsx("div",{className:"value",children:s.paymentMethod.replace("-"," ").toUpperCase()})]})]}),e[125]=s.amountPaid,e[126]=s.paymentMethod,e[127]=d):d=e[127];let h;e[128]!==s.notes?(h=s.notes&&n.jsxs("div",{className:"notes-section-a5",children:[n.jsx("label",{children:"Notes"}),n.jsx("p",{children:s.notes})]}),e[128]=s.notes,e[129]=h):h=e[129];let J;e[130]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsx("label",{children:"Terms & Conditions"}),e[130]=J):J=e[130];let E;e[131]!==a.invoiceTerms?(E=a?.invoiceTerms?a.invoiceTerms.split(`
`).filter(kt).map(Mt):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"All jewellery items are hallmarked and certified."}),n.jsx("li",{children:"Exchange within 7 days with original receipt. No refunds on custom-made items."})]}),e[131]=a.invoiceTerms,e[132]=E):E=e[132];let v;e[133]!==E?(v=n.jsxs("div",{className:"terms-section-a5",children:[J,n.jsx("ul",{children:E})]}),e[133]=E,e[134]=v):v=e[134];let V;e[135]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("span",{className:"gold-diamond"}),e[135]=V):V=e[135];let C;e[136]===Symbol.for("react.memo_cache_sentinel")?(C=n.jsxs("div",{className:"thank-you",children:[V,"Thank You for Your Patronage",n.jsx("span",{className:"gold-diamond"})]}),e[136]=C):C=e[136];const F=`mailto:${a.email}`;let B;e[137]!==a.email||e[138]!==F?(B=n.jsx("a",{href:F,children:a.email}),e[137]=a.email,e[138]=F,e[139]=B):B=e[139];const q=`tel:${a.phone}`;let w;e[140]!==a.phone||e[141]!==q?(w=n.jsx("a",{href:q,children:a.phone}),e[140]=a.phone,e[141]=q,e[142]=w):w=e[142];let U;e[143]!==B||e[144]!==w?(U=n.jsxs("div",{className:"contact",children:["Questions? Contact us at ",B," or call ",w]}),e[143]=B,e[144]=w,e[145]=U):U=e[145];let ae;e[146]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),e[146]=ae):ae=e[146];let G;e[147]!==U?(G=n.jsxs("div",{className:"footer-a5",children:[C,U,ae]}),e[147]=U,e[148]=G):G=e[148];let L;return e[149]!==A||e[150]!==c||e[151]!==O||e[152]!==_||e[153]!==d||e[154]!==h||e[155]!==v||e[156]!==G||e[157]!==x||e[158]!==u||e[159]!==r?(L=n.jsxs("div",{ref:x,className:u,children:[r,A,c,O,_,d,h,v,G]}),e[149]=A,e[150]=c,e[151]=O,e[152]=_,e[153]=d,e[154]=h,e[155]=v,e[156]=G,e[157]=x,e[158]=u,e[159]=r,e[160]=L):L=e[160],L});It.displayName="PrintableInvoice";function Pt(l,t){const s=((t.originalPrice||t.unitPrice)-t.unitPrice)*t.quantity;return l+(s>0?s:0)}function Dt(l,t){return n.jsxs("tr",{children:[n.jsx("td",{children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("div",{className:"item-name",children:l.productName}),n.jsxs("div",{className:"item-details",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),n.jsx("td",{children:tt(l.metalWeight)}),n.jsx("td",{children:l.quantity}),n.jsx("td",{children:me(l.unitPrice)}),n.jsx("td",{children:me(l.total)})]},l.id)}function kt(l){return l.trim()}function Mt(l,t){return n.jsx("li",{children:l},t)}const At={name:"Onelka Jewellery",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"},Rt=wt.forwardRef((l,t)=>{const e=pt.c(162),{clearance:s,customer:i,company:ce,pawningTerms:a}=l,o=ce===void 0?At:ce;let le;e[0]!==a?(le=a===void 0?[]:a,e[0]=a,e[1]=le):le=e[1];const A=le,c=s.monthlyInterestRate?s.total*Number(s.monthlyInterestRate)/100:null;let O;e[2]!==s.status?(O=s.status==="pending"?"ACTIVE":s.status==="paid"?"REDEEMED":s.status.toUpperCase(),e[2]=s.status,e[3]=O):O=e[3];const R=O;let p;e[4]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx("style",{children:`
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
              min-height: auto !important;
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
          .pct-company-name {
            font-size: 15pt; font-weight: 800; letter-spacing: 1px;
            text-transform: uppercase; margin: 0 0 0.3mm; line-height: 1.1;
          }
          .pct-company-sinhala { font-size: 10pt; font-weight: 600; color: #222; margin: 0 0 1mm; }
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
        `}),e[4]=p):p=e[4];let $;e[5]===Symbol.for("react.memo_cache_sentinel")?($={display:"flex",alignItems:"center",gap:"8px",marginBottom:"1mm"},e[5]=$):$=e[5];let g;e[6]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx("img",{src:"/logo.jpg",alt:"Logo",style:{width:"36px",height:"36px",objectFit:"contain",borderRadius:"3px"}}),e[6]=g):g=e[6];let x;e[7]!==o.name?(x=n.jsx("div",{className:"pct-company-name",children:o.name}),e[7]=o.name,e[8]=x):x=e[8];let u;e[9]===Symbol.for("react.memo_cache_sentinel")?(u=n.jsx("div",{className:"pct-company-sinhala",children:"ඔනෙල්කා ජුවලරි"}),e[9]=u):u=e[9];let r;e[10]!==x?(r=n.jsxs("div",{style:$,children:[g,n.jsxs("div",{children:[x,u]})]}),e[10]=x,e[11]=r):r=e[11];let j;e[12]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsx("br",{}),e[12]=j):j=e[12];const P=o.phone2?` / ${o.phone2}`:"";let S;e[13]===Symbol.for("react.memo_cache_sentinel")?(S=n.jsx("br",{}),e[13]=S):S=e[13];let T;e[14]!==o.address||e[15]!==o.city||e[16]!==o.email||e[17]!==o.phone||e[18]!==P?(T=n.jsxs("div",{className:"pct-company-contact",children:[o.address,", ",o.city,j,"Tel: ",o.phone,P,S,o.email]}),e[14]=o.address,e[15]=o.city,e[16]=o.email,e[17]=o.phone,e[18]=P,e[19]=T):T=e[19];let N;e[20]!==r||e[21]!==T?(N=n.jsxs("div",{className:"pct-header-left",children:[r,T]}),e[20]=r,e[21]=T,e[22]=N):N=e[22];let y;e[23]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("div",{className:"pct-form-label",children:"Form No. / පෝරම අංකය"}),e[23]=y):y=e[23];let m;e[24]!==s.clearanceNumber?(m=n.jsx("div",{className:"pct-form-no",children:s.clearanceNumber}),e[24]=s.clearanceNumber,e[25]=m):m=e[25];let _;e[26]===Symbol.for("react.memo_cache_sentinel")?(_=n.jsxs("div",{style:{marginTop:"2mm"},children:[n.jsx("div",{className:"pct-form-label",children:"Branch / ශාඛාව"}),n.jsx("div",{className:"pct-form-no",children:"Head Office"})]}),e[26]=_):_=e[26];let d;e[27]!==m?(d=n.jsxs("div",{className:"pct-header-right",children:[y,m,_]}),e[27]=m,e[28]=d):d=e[28];let h;e[29]!==N||e[30]!==d?(h=n.jsxs("div",{className:"pct-header",children:[N,d]}),e[29]=N,e[30]=d,e[31]=h):h=e[31];let J;e[32]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsxs("div",{className:"pct-title-bar",children:[n.jsx("div",{className:"pct-title-en",children:"PAWN TICKET"}),n.jsx("div",{className:"pct-title-si",children:"උකස් පත"})]}),e[32]=J):J=e[32];let E;e[33]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Ticket & Customer Information"}),n.jsx("span",{className:"pct-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[33]=E):E=e[33];let v;e[34]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsxs("span",{className:"pct-field-label",children:["Ticket No. ",n.jsx("span",{className:"pct-field-label-si",children:"/ අංකය"})]}),e[34]=v):v=e[34];let V;e[35]===Symbol.for("react.memo_cache_sentinel")?(V={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[35]=V):V=e[35];let C;e[36]!==s.clearanceNumber?(C=n.jsxs("div",{className:"pct-info-cell",children:[v,n.jsx("span",{className:"pct-field-value",style:V,children:s.clearanceNumber})]}),e[36]=s.clearanceNumber,e[37]=C):C=e[37];let F;e[38]===Symbol.for("react.memo_cache_sentinel")?(F=n.jsxs("span",{className:"pct-field-label",children:["Pawn Date ",n.jsx("span",{className:"pct-field-label-si",children:"/ උකස් දිනය"})]}),e[38]=F):F=e[38];const B=s.pawnDate||s.issueDate;let q;e[39]!==B?(q=ct(B),e[39]=B,e[40]=q):q=e[40];let w;e[41]!==q?(w=n.jsxs("div",{className:"pct-info-cell",children:[F,n.jsx("span",{className:"pct-field-value",children:q})]}),e[41]=q,e[42]=w):w=e[42];let U;e[43]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsxs("span",{className:"pct-field-label",children:["Customer Name ",n.jsx("span",{className:"pct-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[43]=U):U=e[43];let ae;e[44]!==s.customerName?(ae=n.jsxs("div",{className:"pct-info-cell",children:[U,n.jsx("span",{className:"pct-field-value",children:s.customerName})]}),e[44]=s.customerName,e[45]=ae):ae=e[45];let G;e[46]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsxs("span",{className:"pct-field-label",children:["NIC No. ",n.jsx("span",{className:"pct-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[46]=G):G=e[46];const L=s.customerNic||"—";let H;e[47]!==L?(H=n.jsxs("div",{className:"pct-info-cell",children:[G,n.jsx("span",{className:"pct-field-value",children:L})]}),e[47]=L,e[48]=H):H=e[48];let W;e[49]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsxs("span",{className:"pct-field-label",children:["Phone ",n.jsx("span",{className:"pct-field-label-si",children:"/ දුරකථනය"})]}),e[49]=W):W=e[49];const te=s.customerPhone||i?.phone||"—";let D;e[50]!==te?(D=n.jsxs("div",{className:"pct-info-cell",children:[W,n.jsx("span",{className:"pct-field-value",children:te})]}),e[50]=te,e[51]=D):D=e[51];let z;e[52]===Symbol.for("react.memo_cache_sentinel")?(z=n.jsxs("span",{className:"pct-field-label",children:["Status ",n.jsx("span",{className:"pct-field-label-si",children:"/ තත්ත්වය"})]}),e[52]=z):z=e[52];const k=`pct-status pct-status-${s.status==="pending"?"active":"redeemed"}`;let Q;e[53]!==R||e[54]!==k?(Q=n.jsxs("div",{className:"pct-info-cell",children:[z,n.jsx("span",{className:"pct-field-value",children:n.jsx("span",{className:k,children:R})})]}),e[53]=R,e[54]=k,e[55]=Q):Q=e[55];let M;e[56]!==s.customerAddress||e[57]!==i?.address?(M=(s.customerAddress||i?.address)&&n.jsxs("div",{className:"pct-info-cell full",children:[n.jsxs("span",{className:"pct-field-label",children:["Address ",n.jsx("span",{className:"pct-field-label-si",children:"/ ලිපිනය"})]}),n.jsx("span",{className:"pct-field-value",style:{fontSize:"9pt"},children:s.customerAddress||i?.address})]}),e[56]=s.customerAddress,e[57]=i?.address,e[58]=M):M=e[58];let f;e[59]!==C||e[60]!==w||e[61]!==ae||e[62]!==H||e[63]!==D||e[64]!==Q||e[65]!==M?(f=n.jsxs("div",{className:"pct-section",children:[E,n.jsxs("div",{className:"pct-info-grid",children:[C,w,ae,H,D,Q,M]})]}),e[59]=C,e[60]=w,e[61]=ae,e[62]=H,e[63]=D,e[64]=Q,e[65]=M,e[66]=f):f=e[66];let I;e[67]===Symbol.for("react.memo_cache_sentinel")?(I={borderTop:"none"},e[67]=I):I=e[67];let Y;e[68]===Symbol.for("react.memo_cache_sentinel")?(Y=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Pawned Items / රන් භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"pct-section-title-si",children:"Gold Articles"})]}),e[68]=Y):Y=e[68];let X,K;e[69]===Symbol.for("react.memo_cache_sentinel")?(X=n.jsx("th",{style:{width:"5%"},children:"#"}),K={width:"30%"},e[69]=X,e[70]=K):(X=e[69],K=e[70]);let b,Z;e[71]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsxs("th",{style:K,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),Z={width:"10%"},e[71]=b,e[72]=Z):(b=e[71],Z=e[72]);let ne,ee;e[73]===Symbol.for("react.memo_cache_sentinel")?(ne=n.jsxs("th",{style:Z,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),ee={width:"12%"},e[73]=ne,e[74]=ee):(ne=e[73],ee=e[74]);let se,oe;e[75]===Symbol.for("react.memo_cache_sentinel")?(se=n.jsxs("th",{style:ee,children:["Weight",n.jsx("span",{className:"si",children:"බර"})]}),oe={width:"6%"},e[75]=se,e[76]=oe):(se=e[75],oe=e[76]);let pe,xe;e[77]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsxs("th",{style:oe,children:["Qty",n.jsx("span",{className:"si",children:"ගණන"})]}),xe={width:"18%"},e[77]=pe,e[78]=xe):(pe=e[77],xe=e[78]);let je,fe;e[79]===Symbol.for("react.memo_cache_sentinel")?(je=n.jsxs("th",{style:xe,children:["Item Price",n.jsx("span",{className:"si",children:"භාණ්ඩ මිල"})]}),fe={width:"19%"},e[79]=je,e[80]=fe):(je=e[79],fe=e[80]);let be;e[81]===Symbol.for("react.memo_cache_sentinel")?(be=n.jsx("thead",{children:n.jsxs("tr",{children:[X,b,ne,se,pe,je,n.jsxs("th",{style:fe,children:["Assessed Value",n.jsx("span",{className:"si",children:"ඇස්තමේන්තු"})]})]})}),e[81]=be):be=e[81];let ge;e[82]!==s.items?(ge=s.items.map(Et),e[82]=s.items,e[83]=ge):ge=e[83];let ie;e[84]!==ge?(ie=n.jsx("tbody",{children:ge}),e[84]=ge,e[85]=ie):ie=e[85];let de;e[86]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsx("td",{colSpan:5,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total Item Value / මුළු භාණ්ඩ වටිනාකම"}),e[86]=de):de=e[86];let he;e[87]!==s.items?(he=me(s.items.reduce(Ct,0)),e[87]=s.items,e[88]=he):he=e[88];let re;e[89]!==he?(re=n.jsx("td",{className:"right",children:he}),e[89]=he,e[90]=re):re=e[90];let ue;e[91]===Symbol.for("react.memo_cache_sentinel")?(ue={fontWeight:700},e[91]=ue):ue=e[91];let Ne;e[92]!==s.items?(Ne=me(s.items.reduce(Wt,0)),e[92]=s.items,e[93]=Ne):Ne=e[93];let ye;e[94]!==Ne?(ye=n.jsx("td",{className:"right",style:ue,children:Ne}),e[94]=Ne,e[95]=ye):ye=e[95];let we;e[96]!==re||e[97]!==ye?(we=n.jsx("tfoot",{children:n.jsxs("tr",{children:[de,re,ye]})}),e[96]=re,e[97]=ye,e[98]=we):we=e[98];let _e;e[99]!==ie||e[100]!==we?(_e=n.jsxs("div",{className:"pct-section",style:I,children:[Y,n.jsxs("table",{className:"pct-table",children:[be,ie,we]})]}),e[99]=ie,e[100]=we,e[101]=_e):_e=e[101];let Se;e[102]===Symbol.for("react.memo_cache_sentinel")?(Se={borderTop:"none"},e[102]=Se):Se=e[102];let He;e[103]===Symbol.for("react.memo_cache_sentinel")?(He=n.jsxs("div",{className:"pct-section-header",children:[n.jsx("span",{className:"pct-section-title-en",children:"Loan & Interest Details / ණය සහ පොලී විස්තර"}),n.jsx("span",{className:"pct-section-title-si",children:"Finance Information"})]}),e[103]=He):He=e[103];let Qe;e[104]===Symbol.for("react.memo_cache_sentinel")?(Qe=n.jsxs("span",{className:"pct-finance-label",children:["Assessed Value / Total ",n.jsx("span",{className:"si",children:"ඇස්තමේන්තු වටිනාකම"})]}),e[104]=Qe):Qe=e[104];let Te;e[105]!==s.items?(Te=me(s.items.reduce($t,0)),e[105]=s.items,e[106]=Te):Te=e[106];let ze;e[107]!==Te?(ze=n.jsxs("div",{className:"pct-finance-row",children:[Qe,n.jsx("span",{className:"pct-finance-value",children:Te})]}),e[107]=Te,e[108]=ze):ze=e[108];let Ie;e[109]!==s.discount?(Ie=s.discount>0&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Discount ",n.jsx("span",{className:"si",children:"වට්ටම"})]}),n.jsxs("span",{className:"pct-finance-value",children:["- ",me(s.discount)]})]}),e[109]=s.discount,e[110]=Ie):Ie=e[110];let Xe;e[111]===Symbol.for("react.memo_cache_sentinel")?(Xe=n.jsxs("span",{className:"pct-finance-label",children:["Advance / Loan Amount ",n.jsx("span",{className:"si",children:"අත්තිකාරම් / ණය මුදල"})]}),e[111]=Xe):Xe=e[111];let Ze;e[112]===Symbol.for("react.memo_cache_sentinel")?(Ze={fontSize:"13pt"},e[112]=Ze):Ze=e[112];let Pe;e[113]!==s.total?(Pe=me(s.total),e[113]=s.total,e[114]=Pe):Pe=e[114];let De;e[115]!==Pe?(De=n.jsxs("div",{className:"pct-finance-row highlight",children:[Xe,n.jsx("span",{className:"pct-finance-value",style:Ze,children:Pe})]}),e[115]=Pe,e[116]=De):De=e[116];let ke;e[117]!==s.monthlyInterestRate?(ke=s.monthlyInterestRate!=null&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Rate ",n.jsx("span",{className:"si",children:"මාසික පොලී අනුපාතය"})]}),n.jsxs("span",{className:"pct-finance-value",children:[s.monthlyInterestRate,"%"]})]}),e[117]=s.monthlyInterestRate,e[118]=ke):ke=e[118];let Me;e[119]!==c?(Me=c!=null&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Monthly Interest Amount ",n.jsx("span",{className:"si",children:"මාසික පොලී මුදල"})]}),n.jsx("span",{className:"pct-finance-value",children:me(c)})]}),e[119]=c,e[120]=Me):Me=e[120];let Ae;e[121]!==s.total||e[122]!==c?(Ae=c!=null&&n.jsxs("div",{className:"pct-finance-row highlight",children:[n.jsxs("span",{className:"pct-finance-label",children:["Redemption After 1 Month (Principal + Interest)",n.jsx("span",{className:"si",children:"මාසයකට පසු ආපසු ගෙවිය යුතු මුදල (ණය + පොලිය)"})]}),n.jsx("span",{className:"pct-finance-value",style:{fontSize:"13pt"},children:me(s.total+c)})]}),e[121]=s.total,e[122]=c,e[123]=Ae):Ae=e[123];let Re;e[124]!==s.dueDate?(Re=s.dueDate&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Redemption Due Date ",n.jsx("span",{className:"si",children:"ආපසු ගැනීමේ දිනය"})]}),n.jsx("span",{className:"pct-finance-value",children:ct(s.dueDate)})]}),e[124]=s.dueDate,e[125]=Re):Re=e[125];let Ee;e[126]!==s.paymentMethod?(Ee=s.paymentMethod&&n.jsxs("div",{className:"pct-finance-row",children:[n.jsxs("span",{className:"pct-finance-label",children:["Payment Method ",n.jsx("span",{className:"si",children:"ගෙවීමේ ක්‍රමය"})]}),n.jsx("span",{className:"pct-finance-value",children:s.paymentMethod.replace("-"," ").toUpperCase()})]}),e[126]=s.paymentMethod,e[127]=Ee):Ee=e[127];let Ce;e[128]!==ze||e[129]!==Ie||e[130]!==De||e[131]!==ke||e[132]!==Me||e[133]!==Ae||e[134]!==Re||e[135]!==Ee?(Ce=n.jsxs("div",{className:"pct-section",style:Se,children:[He,ze,Ie,De,ke,Me,Ae,Re,Ee]}),e[128]=ze,e[129]=Ie,e[130]=De,e[131]=ke,e[132]=Me,e[133]=Ae,e[134]=Re,e[135]=Ee,e[136]=Ce):Ce=e[136];let We;e[137]===Symbol.for("react.memo_cache_sentinel")?(We=n.jsxs("div",{className:"pct-terms-header",children:["Terms & Conditions / ",n.jsx("span",{style:{fontWeight:600,fontSize:"9pt"},children:"නියමයන් සහ කොන්දේසි"})]}),e[137]=We):We=e[137];let $e;e[138]!==o.clearanceTerms||e[139]!==o.pawnTerms||e[140]!==A?($e=A.length>0?A.map(Ft):o?.pawnTerms||o?.clearanceTerms?(o.pawnTerms||o.clearanceTerms).split(`
`).filter(Bt).map(Gt):n.jsxs(n.Fragment,{children:[n.jsxs("li",{children:["Interest is charged at the agreed monthly rate from the pawn date, even for one day.",n.jsx("span",{className:"si",children:" / උකස් දිනයේ සිට එකඟ වූ මාසික අනුපාතයෙන් පොලිය අය කෙරේ."})]}),n.jsxs("li",{children:["Items must be redeemed within the agreed period with original ticket and valid ID.",n.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),n.jsxs("li",{children:["Unclaimed items after the redemption deadline may be forfeited without further notice.",n.jsx("span",{className:"si",children:" / නියමිත කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),n.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",n.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[138]=o.clearanceTerms,e[139]=o.pawnTerms,e[140]=A,e[141]=$e):$e=e[141];let Fe;e[142]!==$e?(Fe=n.jsxs("div",{className:"pct-terms",children:[We,n.jsx("ul",{className:"pct-terms-list",children:$e})]}),e[142]=$e,e[143]=Fe):Fe=e[143];let Be;e[144]===Symbol.for("react.memo_cache_sentinel")?(Be=n.jsx("div",{className:"pct-sig-space"}),e[144]=Be):Be=e[144];let Ge;e[145]===Symbol.for("react.memo_cache_sentinel")?(Ge=n.jsxs("div",{className:"pct-sig-box",children:[Be,n.jsxs("div",{className:"pct-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[145]=Ge):Ge=e[145];let Le;e[146]===Symbol.for("react.memo_cache_sentinel")?(Le=n.jsx("div",{className:"pct-sig-space"}),e[146]=Le):Le=e[146];let Oe;e[147]===Symbol.for("react.memo_cache_sentinel")?(Oe=n.jsxs("div",{className:"pct-sig-box",children:[Le,n.jsxs("div",{className:"pct-sig-label",children:["Valuer / ",n.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[147]=Oe):Oe=e[147];let Ve;e[148]===Symbol.for("react.memo_cache_sentinel")?(Ve=n.jsx("div",{className:"pct-sig-space"}),e[148]=Ve):Ve=e[148];let Ue,Ye;e[149]===Symbol.for("react.memo_cache_sentinel")?(Ue=n.jsxs("div",{className:"pct-sig-row",children:[Ge,Oe,n.jsxs("div",{className:"pct-sig-box",children:[Ve,n.jsxs("div",{className:"pct-sig-label",children:["Manager / ",n.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),Ye=n.jsx("div",{className:"pct-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[149]=Ue,e[150]=Ye):(Ue=e[149],Ye=e[150]);let Ke;e[151]===Symbol.for("react.memo_cache_sentinel")?(Ke=new Date().toLocaleString("en-GB"),e[151]=Ke):Ke=e[151];let ve;e[152]!==s.clearanceNumber?(ve=n.jsxs("div",{className:"pct-footer",children:["Printed: ",Ke,"  |  ",s.clearanceNumber,"  |  This is a computer-generated document."]}),e[152]=s.clearanceNumber,e[153]=ve):ve=e[153];let et;return e[154]!==t||e[155]!==h||e[156]!==f||e[157]!==_e||e[158]!==Ce||e[159]!==Fe||e[160]!==ve?(et=n.jsxs("div",{ref:t,className:"pct-root",children:[p,h,J,f,_e,Ce,Fe,Ue,Ye,ve]}),e[154]=t,e[155]=h,e[156]=f,e[157]=_e,e[158]=Ce,e[159]=Fe,e[160]=ve,e[161]=et):et=e[161],et});Rt.displayName="PrintableClearance";function Et(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("strong",{children:l.productName}),n.jsxs("div",{className:"item-sub",children:[l.metalType.toUpperCase(),l.karat&&` • ${l.karat}`,l.sku&&` • SKU: ${l.sku}`]})]}),n.jsx("td",{className:"center",children:l.karat||"—"}),n.jsx("td",{className:"center",children:tt(l.metalWeight)}),n.jsx("td",{className:"center",children:l.quantity}),n.jsx("td",{className:"right",children:l.unitPrice>0?me(l.unitPrice):"—"}),n.jsx("td",{className:"right",style:{fontWeight:700},children:l.assessedValue?me(Number(l.assessedValue)):"—"})]},l.id)}function Ct(l,t){return l+(t.unitPrice||0)}function Wt(l,t){return l+(Number(t.assessedValue)||0)}function $t(l,t){return l+(Number(t.assessedValue)||0)}function Ft(l){return n.jsxs("li",{children:[n.jsx("span",{className:"en",children:l.en}),l.si&&n.jsxs("span",{className:"si",children:[" ",l.si]}),l.ta&&n.jsxs("span",{className:"ta",children:[" ",l.ta]})]},l.groupId)}function Bt(l){return l.trim()}function Gt(l,t){const e=l.split(" / ");return n.jsxs("li",{children:[e[0]?.trim(),e[1]&&n.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}function sn(l){const t=pt.c(75),{data:e,company:s}=l;let i;t[0]!==e.redemptionDate?(i=e?.redemptionDate||new Date().toISOString().split("T")[0],t[0]=e.redemptionDate,t[1]=i):i=t[1];const ce=i,a=e?.interest,o=a?a.totalPayable:Number(e?.total||0),le=Ot,A=Lt;let c;t[2]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("style",{children:`
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
      `}),t[2]=c):c=t[2];const O=s?.name||"Onelka Jewellery";let R;t[3]!==O?(R=n.jsx("h1",{children:O}),t[3]=O,t[4]=R):R=t[4];let p;t[5]!==s?(p=s?.tagline&&n.jsx("p",{children:s.tagline}),t[5]=s,t[6]=p):p=t[6];const $=s?.address||"";let g;t[7]!==$?(g=n.jsx("p",{children:$}),t[7]=$,t[8]=g):g=t[8];const x=s?.phone||"";let u;t[9]!==x?(u=n.jsxs("p",{children:["Tel: ",x]}),t[9]=x,t[10]=u):u=t[10];let r;t[11]!==R||t[12]!==p||t[13]!==g||t[14]!==u?(r=n.jsxs("div",{className:"pos-header",children:[R,p,g,u]}),t[11]=R,t[12]=p,t[13]=g,t[14]=u,t[15]=r):r=t[15];let j;t[16]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsx("div",{className:"pos-title",children:"උකස් Receipt / Pawn Redemption"}),t[16]=j):j=t[16];let P;t[17]===Symbol.for("react.memo_cache_sentinel")?(P=n.jsx("span",{className:"label",children:"Ticket #:"}),t[17]=P):P=t[17];let S;t[18]!==e.clearanceNumber?(S=n.jsxs("div",{className:"pos-row",children:[P,n.jsx("span",{className:"value",children:e.clearanceNumber})]}),t[18]=e.clearanceNumber,t[19]=S):S=t[19];let T;t[20]===Symbol.for("react.memo_cache_sentinel")?(T=n.jsx("span",{className:"label",children:"Date:"}),t[20]=T):T=t[20];let N;t[21]!==ce?(N=le(ce),t[21]=ce,t[22]=N):N=t[22];let y;t[23]!==N?(y=n.jsxs("div",{className:"pos-row",children:[T,n.jsx("span",{className:"value",children:N})]}),t[23]=N,t[24]=y):y=t[24];let m;t[25]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx("span",{className:"label",children:"Pawn Date:"}),t[25]=m):m=t[25];const _=e.pawnDate||e.issueDate;let d;t[26]!==_?(d=le(_),t[26]=_,t[27]=d):d=t[27];let h;t[28]!==d?(h=n.jsxs("div",{className:"pos-row",children:[m,n.jsx("span",{className:"value",children:d})]}),t[28]=d,t[29]=h):h=t[29];let J;t[30]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsx("div",{className:"pos-divider"}),t[30]=J):J=t[30];let E;t[31]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsx("span",{className:"label",children:"Customer:"}),t[31]=E):E=t[31];let v;t[32]!==e.customerName?(v=n.jsxs("div",{className:"pos-row",children:[E,n.jsx("span",{className:"value",children:e.customerName})]}),t[32]=e.customerName,t[33]=v):v=t[33];let V;t[34]!==e.customerNic?(V=e.customerNic&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"NIC:"}),n.jsx("span",{className:"value",children:e.customerNic})]}),t[34]=e.customerNic,t[35]=V):V=t[35];let C;t[36]!==e.customerPhone?(C=e.customerPhone&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Phone:"}),n.jsx("span",{className:"value",children:e.customerPhone})]}),t[36]=e.customerPhone,t[37]=C):C=t[37];let F,B;t[38]===Symbol.for("react.memo_cache_sentinel")?(F=n.jsx("div",{className:"pos-divider"}),B=n.jsx("div",{style:{fontWeight:"bold",fontSize:"11px",marginBottom:"4px"},children:"ITEMS REDEEMED:"}),t[38]=F,t[39]=B):(F=t[38],B=t[39]);let q;if(t[40]!==e.items){let K;t[42]===Symbol.for("react.memo_cache_sentinel")?(K=(b,Z)=>n.jsxs("div",{className:"pos-item",children:[n.jsxs("div",{className:"item-name",children:[Z+1,". ",b.productName]}),(b.karat||b.metalWeight)&&n.jsxs("div",{className:"item-detail",children:[b.karat&&`${b.karat} `,b.metalType&&`${b.metalType} `,b.metalWeight?`${b.metalWeight}g`:""]}),n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"item-detail",children:["Qty: ",b.quantity]}),n.jsx("span",{children:A(b.total)})]})]},Z),t[42]=K):K=t[42],q=e.items.map(K),t[40]=e.items,t[41]=q}else q=t[41];let w;t[43]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx("div",{className:"pos-divider"}),t[43]=w):w=t[43];let U;t[44]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsx("span",{className:"label",children:"Principal:"}),t[44]=U):U=t[44];const ae=A(e.total);let G;t[45]!==ae?(G=n.jsxs("div",{className:"pos-row",children:[U,n.jsx("span",{className:"value",children:ae})]}),t[45]=ae,t[46]=G):G=t[46];let L;t[47]!==a?(L=a&&n.jsxs(n.Fragment,{children:[a.daysElapsed>0&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Days:"}),n.jsxs("span",{className:"value",children:[a.daysElapsed," days"]})]}),a.firstMonthInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"label",children:["1st Mo. (",a.interestRatePerMonth,"%):"]}),n.jsx("span",{className:"value",children:A(a.firstMonthInterest)})]}),a.additionalMonthsInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Add. Months:"}),n.jsx("span",{className:"value",children:A(a.additionalMonthsInterest)})]}),a.proratedDailyInterest>0&&n.jsxs("div",{className:"pos-row",children:[n.jsxs("span",{className:"label",children:["Daily (",a.remainingDays,"d):"]}),n.jsx("span",{className:"value",children:A(a.proratedDailyInterest)})]}),n.jsxs("div",{className:"pos-row",children:[n.jsx("span",{className:"label",children:"Total Interest:"}),n.jsx("span",{className:"value",children:A(a.totalInterest)})]})]}),t[47]=a,t[48]=L):L=t[48];const H=A(o);let W;t[49]!==H?(W=n.jsxs("div",{className:"pos-total",children:["TOTAL PAID: ",H]}),t[49]=H,t[50]=W):W=t[50];let te;t[51]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsx("span",{className:"label",children:"Payment:"}),t[51]=te):te=t[51];const D=e.redeemPaymentMethod||e.paymentMethod||"cash";let z;t[52]!==D?(z=D.replace("-"," ").toUpperCase(),t[52]=D,t[53]=z):z=t[53];let k;t[54]!==z?(k=n.jsxs("div",{className:"pos-row",children:[te,n.jsx("span",{className:"value",children:z})]}),t[54]=z,t[55]=k):k=t[55];let Q,M;t[56]===Symbol.for("react.memo_cache_sentinel")?(Q=n.jsx("p",{children:"Items returned to customer."}),M=n.jsx("p",{children:"Thank you for your trust!"}),t[56]=Q,t[57]=M):(Q=t[56],M=t[57]);const f=s?.name||"Onelka Jewellery";let I;t[58]!==f?(I=n.jsxs("div",{className:"pos-footer",children:[Q,M,n.jsxs("p",{children:["— ",f," —"]})]}),t[58]=f,t[59]=I):I=t[59];let Y;t[60]===Symbol.for("react.memo_cache_sentinel")?(Y=n.jsxs("div",{className:"pos-timestamp",children:["Printed: ",new Date().toLocaleString("en-GB")]}),t[60]=Y):Y=t[60];let X;return t[61]!==r||t[62]!==S||t[63]!==y||t[64]!==h||t[65]!==v||t[66]!==V||t[67]!==C||t[68]!==q||t[69]!==G||t[70]!==L||t[71]!==W||t[72]!==k||t[73]!==I?(X=n.jsxs("div",{className:"pos-receipt",children:[c,r,j,S,y,h,J,v,V,C,F,B,q,w,G,L,W,k,I,Y]}),t[61]=r,t[62]=S,t[63]=y,t[64]=h,t[65]=v,t[66]=V,t[67]=C,t[68]=q,t[69]=G,t[70]=L,t[71]=W,t[72]=k,t[73]=I,t[74]=X):X=t[74],X}function Lt(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ot(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}const Vt={name:"Onelka Jewellery",address:"No. 123, Galle Road",city:"Colombo 03, Sri Lanka",phone:"+94 11 234 5678",phone2:"+94 77 123 4567",email:"info@onelkajewellery.lk",registrationNumber:"REG-2024-001"},Ut=wt.forwardRef((l,t)=>{const e=pt.c(236),{ticket:s,company:i,pawningTerms:ce}=l,a=i===void 0?Vt:i;let o;e[0]!==ce?(o=ce===void 0?[]:ce,e[0]=ce,e[1]=o):o=e[1];const le=o;let A,c,O;if(e[2]!==s.maturityDate||e[3]!==s.pawnDate){const M=new Date(s.pawnDate),f=new Date(s.maturityDate);O=(f.getFullYear()-M.getFullYear())*12,A=f.getMonth(),c=M.getMonth(),e[2]=s.maturityDate,e[3]=s.pawnDate,e[4]=A,e[5]=c,e[6]=O}else A=e[4],c=e[5],O=e[6];const R=O+(A-c);let p,$,g,x,u,r,j,P,S,T,N,y,m,_,d,h,J,E,v,V;if(e[7]!==a.address||e[8]!==a.city||e[9]!==a.email||e[10]!==a.name||e[11]!==a.phone||e[12]!==a.phone2||e[13]!==a.registrationNumber||e[14]!==R||e[15]!==t||e[16]!==s.customerAddress||e[17]!==s.customerNIC||e[18]!==s.customerName||e[19]!==s.customerPhone||e[20]!==s.gracePeriodDays||e[21]!==s.interestRatePerMonth||e[22]!==s.items||e[23]!==s.loanToValueRatio||e[24]!==s.maturityDate||e[25]!==s.pawnDate||e[26]!==s.principalAmount||e[27]!==s.ticketNumber||e[28]!==s.totalGrossWeight||e[29]!==s.totalNetWeight||e[30]!==s.totalValuation){const M=Tt(s.principalAmount,R,s.interestRatePerMonth);T=t,N="ppt-root",e[51]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');

          @media print {
            @page { size: A4 portrait; margin: 12mm 14mm; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; padding: 0; background: white; }
            .ppt-root { width: 100% !important; padding: 0 !important; margin: 0 !important; box-shadow: none !important; }
            .no-print { display: none !important; }
          }

          .ppt-root {
            width: 182mm;
            min-height: 257mm;
            margin: 0 auto;
            padding: 10mm 12mm;
            background: #fff;
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans', Arial, sans-serif;
            font-size: 9.5pt;
            color: #111;
            line-height: 1.45;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
          }

          /* ── HEADER ── */
          .ppt-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border: 1.5pt solid #111;
            padding: 3mm 4mm 2.5mm;
            margin-bottom: 0;
          }
          .ppt-header-left { flex: 1; }
          .ppt-header-right {
            text-align: right;
            font-size: 8pt;
            color: #333;
            min-width: 44mm;
          }
          .ppt-company-name {
            font-size: 17pt;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin: 0 0 0.5mm;
            line-height: 1.1;
          }
          .ppt-company-sinhala {
            font-size: 11pt;
            font-weight: 600;
            color: #222;
            margin: 0 0 1.5mm;
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
        `}),e[51]=y):y=e[51];let f;e[52]!==a.name?(f=n.jsx("div",{className:"ppt-company-name",children:a.name}),e[52]=a.name,e[53]=f):f=e[53];let I;e[54]===Symbol.for("react.memo_cache_sentinel")?(I=n.jsx("div",{className:"ppt-company-sinhala",children:"ඔනෙල්කා ජුවලරි"}),e[54]=I):I=e[54];let Y;e[55]===Symbol.for("react.memo_cache_sentinel")?(Y=n.jsx("br",{}),e[55]=Y):Y=e[55];const X=a.phone2?` / ${a.phone2}`:"";let K;e[56]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsx("br",{}),e[56]=K):K=e[56];let b;e[57]!==a.address||e[58]!==a.city||e[59]!==a.email||e[60]!==a.phone||e[61]!==X?(b=n.jsxs("div",{className:"ppt-company-contact",children:[a.address,", ",a.city,Y,"Tel: ",a.phone,X,K,a.email]}),e[57]=a.address,e[58]=a.city,e[59]=a.email,e[60]=a.phone,e[61]=X,e[62]=b):b=e[62];let Z;e[63]!==f||e[64]!==b?(Z=n.jsxs("div",{className:"ppt-header-left",children:[f,I,b]}),e[63]=f,e[64]=b,e[65]=Z):Z=e[65];let ne;e[66]===Symbol.for("react.memo_cache_sentinel")?(ne=n.jsx("div",{className:"ppt-form-label",children:"Form No. / පෝරම අංකය"}),e[66]=ne):ne=e[66];let ee;e[67]!==a.registrationNumber?(ee=n.jsx("div",{className:"ppt-form-no",children:a.registrationNumber}),e[67]=a.registrationNumber,e[68]=ee):ee=e[68];let se;e[69]===Symbol.for("react.memo_cache_sentinel")?(se=n.jsxs("div",{style:{marginTop:"2mm"},children:[n.jsx("div",{className:"ppt-form-label",children:"Branch / ශාඛාව"}),n.jsx("div",{className:"ppt-form-no",children:"Head Office"})]}),e[69]=se):se=e[69];let oe;e[70]!==ee?(oe=n.jsxs("div",{className:"ppt-header-right",children:[ne,ee,se]}),e[70]=ee,e[71]=oe):oe=e[71],e[72]!==Z||e[73]!==oe?(m=n.jsxs("div",{className:"ppt-header",children:[Z,oe]}),e[72]=Z,e[73]=oe,e[74]=m):m=e[74],e[75]===Symbol.for("react.memo_cache_sentinel")?(_=n.jsxs("div",{className:"ppt-title-bar",children:[n.jsx("div",{className:"ppt-title-en",children:"PAWN TICKET"}),n.jsx("div",{className:"ppt-title-si",children:"උකස් පත"})]}),e[75]=_):_=e[75];let pe;e[76]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Ticket & Customer Information"}),n.jsx("span",{className:"ppt-section-title-si",children:"ටිකට් සහ ගනුදෙනුකරු තොරතුරු"})]}),e[76]=pe):pe=e[76];let xe;e[77]===Symbol.for("react.memo_cache_sentinel")?(xe=n.jsxs("span",{className:"ppt-field-label",children:["Ticket No. ",n.jsx("span",{className:"ppt-field-label-si",children:"/ අංකය"})]}),e[77]=xe):xe=e[77];let je;e[78]===Symbol.for("react.memo_cache_sentinel")?(je={fontFamily:"Consolas, monospace",fontSize:"11pt"},e[78]=je):je=e[78];let fe;e[79]!==s.ticketNumber?(fe=n.jsxs("div",{className:"ppt-info-cell",children:[xe,n.jsx("span",{className:"ppt-field-value",style:je,children:s.ticketNumber})]}),e[79]=s.ticketNumber,e[80]=fe):fe=e[80];let be;e[81]===Symbol.for("react.memo_cache_sentinel")?(be=n.jsxs("span",{className:"ppt-field-label",children:["Date ",n.jsx("span",{className:"ppt-field-label-si",children:"/ දිනය"})]}),e[81]=be):be=e[81];let ge;e[82]!==s.pawnDate?(ge=ct(s.pawnDate),e[82]=s.pawnDate,e[83]=ge):ge=e[83];let ie;e[84]!==ge?(ie=n.jsxs("div",{className:"ppt-info-cell",children:[be,n.jsx("span",{className:"ppt-field-value",children:ge})]}),e[84]=ge,e[85]=ie):ie=e[85];let de;e[86]===Symbol.for("react.memo_cache_sentinel")?(de=n.jsxs("span",{className:"ppt-field-label",children:["Customer Name ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ගනුදෙනුකරු නම"})]}),e[86]=de):de=e[86];let he;e[87]!==s.customerName?(he=n.jsxs("div",{className:"ppt-info-cell",children:[de,n.jsx("span",{className:"ppt-field-value",children:s.customerName})]}),e[87]=s.customerName,e[88]=he):he=e[88];let re;e[89]===Symbol.for("react.memo_cache_sentinel")?(re=n.jsxs("span",{className:"ppt-field-label",children:["NIC No. ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ජා.හැ.අංකය"})]}),e[89]=re):re=e[89];let ue;e[90]!==s.customerNIC?(ue=n.jsxs("div",{className:"ppt-info-cell",children:[re,n.jsx("span",{className:"ppt-field-value",children:s.customerNIC})]}),e[90]=s.customerNIC,e[91]=ue):ue=e[91];let Ne;e[92]===Symbol.for("react.memo_cache_sentinel")?(Ne=n.jsxs("span",{className:"ppt-field-label",children:["Phone ",n.jsx("span",{className:"ppt-field-label-si",children:"/ දුරකථනය"})]}),e[92]=Ne):Ne=e[92];let ye;e[93]!==s.customerPhone?(ye=n.jsxs("div",{className:"ppt-info-cell",children:[Ne,n.jsx("span",{className:"ppt-field-value",children:s.customerPhone})]}),e[93]=s.customerPhone,e[94]=ye):ye=e[94];let we;e[95]===Symbol.for("react.memo_cache_sentinel")?(we=n.jsxs("span",{className:"ppt-field-label",children:["Address ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ලිපිනය"})]}),e[95]=we):we=e[95];let _e;e[96]===Symbol.for("react.memo_cache_sentinel")?(_e={fontSize:"9pt"},e[96]=_e):_e=e[96];let Se;e[97]!==s.customerAddress?(Se=n.jsxs("div",{className:"ppt-info-cell",children:[we,n.jsx("span",{className:"ppt-field-value",style:_e,children:s.customerAddress})]}),e[97]=s.customerAddress,e[98]=Se):Se=e[98],e[99]!==fe||e[100]!==ie||e[101]!==he||e[102]!==ue||e[103]!==ye||e[104]!==Se?(d=n.jsxs("div",{className:"ppt-section",children:[pe,n.jsxs("div",{className:"ppt-info-grid",children:[fe,ie,he,ue,ye,Se]})]}),e[99]=fe,e[100]=ie,e[101]=he,e[102]=ue,e[103]=ye,e[104]=Se,e[105]=d):d=e[105];let He;e[106]===Symbol.for("react.memo_cache_sentinel")?(He={borderTop:"none"},e[106]=He):He=e[106];let Qe;e[107]===Symbol.for("react.memo_cache_sentinel")?(Qe=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Gold Items / රන් භාණ්ඩ විස්තරය"}),n.jsx("span",{className:"ppt-section-title-si",children:"Pawned Articles"})]}),e[107]=Qe):Qe=e[107];let Te,ze;e[108]===Symbol.for("react.memo_cache_sentinel")?(Te=n.jsx("th",{style:{width:"5%"},children:"#"}),ze={width:"32%"},e[108]=Te,e[109]=ze):(Te=e[108],ze=e[109]);let Ie,Xe;e[110]===Symbol.for("react.memo_cache_sentinel")?(Ie=n.jsxs("th",{style:ze,children:["Description",n.jsx("span",{className:"si",children:"විස්තරය"})]}),Xe={width:"10%"},e[110]=Ie,e[111]=Xe):(Ie=e[110],Xe=e[111]);let Ze,Pe;e[112]===Symbol.for("react.memo_cache_sentinel")?(Ze=n.jsxs("th",{style:Xe,children:["Karat",n.jsx("span",{className:"si",children:"කැරට්"})]}),Pe={width:"13%"},e[112]=Ze,e[113]=Pe):(Ze=e[112],Pe=e[113]);let De,ke;e[114]===Symbol.for("react.memo_cache_sentinel")?(De=n.jsxs("th",{style:Pe,children:["Gross Wt",n.jsx("span",{className:"si",children:"මුළු බර"})]}),ke={width:"13%"},e[114]=De,e[115]=ke):(De=e[114],ke=e[115]);let Me,Ae;e[116]===Symbol.for("react.memo_cache_sentinel")?(Me=n.jsxs("th",{style:ke,children:["Net Wt",n.jsx("span",{className:"si",children:"ශුද්ධ බර"})]}),Ae={width:"13%"},e[116]=Me,e[117]=Ae):(Me=e[116],Ae=e[117]);let Re,Ee;e[118]===Symbol.for("react.memo_cache_sentinel")?(Re=n.jsxs("th",{style:Ae,children:["Gold Wt",n.jsx("span",{className:"si",children:"රන් බර"})]}),Ee={width:"14%"},e[118]=Re,e[119]=Ee):(Re=e[118],Ee=e[119]);let Ce;e[120]===Symbol.for("react.memo_cache_sentinel")?(Ce=n.jsx("thead",{children:n.jsxs("tr",{children:[Te,Ie,Ze,De,Me,Re,n.jsxs("th",{style:Ee,children:["Value",n.jsx("span",{className:"si",children:"වටිනාකම"})]})]})}),e[120]=Ce):Ce=e[120];let We;e[121]!==s.items?(We=s.items.map(Yt),e[121]=s.items,e[122]=We):We=e[122];let $e;e[123]===Symbol.for("react.memo_cache_sentinel")?($e={background:"#f5f5f5",fontWeight:700},e[123]=$e):$e=e[123];let Fe;e[124]===Symbol.for("react.memo_cache_sentinel")?(Fe=n.jsx("td",{colSpan:3,style:{textAlign:"right",fontSize:"8pt",paddingRight:"3mm"},children:"Total / මුළු එකතුව"}),e[124]=Fe):Fe=e[124];let Be;e[125]!==s.totalGrossWeight?(Be=tt(s.totalGrossWeight),e[125]=s.totalGrossWeight,e[126]=Be):Be=e[126];let Ge;e[127]!==Be?(Ge=n.jsx("td",{className:"right",children:Be}),e[127]=Be,e[128]=Ge):Ge=e[128];let Le;e[129]!==s.totalNetWeight?(Le=tt(s.totalNetWeight),e[129]=s.totalNetWeight,e[130]=Le):Le=e[130];let Oe;e[131]!==Le?(Oe=n.jsx("td",{className:"right",children:Le}),e[131]=Le,e[132]=Oe):Oe=e[132];let Ve;e[133]!==s.totalNetWeight?(Ve=tt(s.totalNetWeight),e[133]=s.totalNetWeight,e[134]=Ve):Ve=e[134];let Ue;e[135]!==Ve?(Ue=n.jsx("td",{className:"right",children:Ve}),e[135]=Ve,e[136]=Ue):Ue=e[136];let Ye;e[137]!==s.totalValuation?(Ye=me(s.totalValuation),e[137]=s.totalValuation,e[138]=Ye):Ye=e[138];let Ke;e[139]!==Ye?(Ke=n.jsx("td",{className:"right",children:Ye}),e[139]=Ye,e[140]=Ke):Ke=e[140];let ve;e[141]!==Ge||e[142]!==Oe||e[143]!==Ue||e[144]!==Ke?(ve=n.jsxs("tr",{style:$e,children:[Fe,Ge,Oe,Ue,Ke]}),e[141]=Ge,e[142]=Oe,e[143]=Ue,e[144]=Ke,e[145]=ve):ve=e[145],e[146]!==We||e[147]!==ve?(h=n.jsxs("div",{className:"ppt-section",style:He,children:[Qe,n.jsxs("table",{className:"ppt-table",children:[Ce,n.jsxs("tbody",{children:[We,ve]})]})]}),e[146]=We,e[147]=ve,e[148]=h):h=e[148];let et;e[149]===Symbol.for("react.memo_cache_sentinel")?(et={borderTop:"none"},e[149]=et):et=e[149];let mt;e[150]===Symbol.for("react.memo_cache_sentinel")?(mt=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Loan Details / ණය විස්තර"}),n.jsx("span",{className:"ppt-section-title-si",children:"Finance Information"})]}),e[150]=mt):mt=e[150];let dt;e[151]===Symbol.for("react.memo_cache_sentinel")?(dt=n.jsxs("span",{className:"ppt-field-label",children:["Assessed Value ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ඇස්තමේන්තු වටිනාකම"})]}),e[151]=dt):dt=e[151];let nt;e[152]!==s.totalValuation?(nt=me(s.totalValuation),e[152]=s.totalValuation,e[153]=nt):nt=e[153];let st;e[154]!==nt?(st=n.jsxs("div",{className:"ppt-finance-cell",children:[dt,n.jsx("span",{className:"ppt-finance-amount",children:nt})]}),e[154]=nt,e[155]=st):st=e[155];let ht;e[156]===Symbol.for("react.memo_cache_sentinel")?(ht=n.jsxs("span",{className:"ppt-field-label",children:["LTV Ratio ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ණය අනුපාතය"})]}),e[156]=ht):ht=e[156];const vt=s.loanToValueRatio*100;let at;e[157]!==vt?(at=vt.toFixed(0),e[157]=vt,e[158]=at):at=e[158];let lt;e[159]!==at?(lt=n.jsxs("div",{className:"ppt-finance-cell",children:[ht,n.jsxs("span",{className:"ppt-finance-amount",children:[at,"%"]})]}),e[159]=at,e[160]=lt):lt=e[160];let ft;e[161]===Symbol.for("react.memo_cache_sentinel")?(ft={background:"#f9f9f9"},e[161]=ft):ft=e[161];let xt;e[162]===Symbol.for("react.memo_cache_sentinel")?(xt=n.jsxs("span",{className:"ppt-field-label",children:["Loan Amount ",n.jsx("span",{className:"ppt-field-label-si",children:"/ ණය මුදල"})]}),e[162]=xt):xt=e[162];let bt;e[163]===Symbol.for("react.memo_cache_sentinel")?(bt={fontSize:"15pt"},e[163]=bt):bt=e[163];let it;e[164]!==s.principalAmount?(it=me(s.principalAmount),e[164]=s.principalAmount,e[165]=it):it=e[165];let ot;e[166]!==it?(ot=n.jsxs("div",{className:"ppt-finance-cell",style:ft,children:[xt,n.jsx("span",{className:"ppt-finance-amount",style:bt,children:it})]}),e[166]=it,e[167]=ot):ot=e[167],e[168]!==st||e[169]!==lt||e[170]!==ot?(J=n.jsxs("div",{className:"ppt-section",style:et,children:[mt,n.jsxs("div",{className:"ppt-finance-grid",children:[st,lt,ot]})]}),e[168]=st,e[169]=lt,e[170]=ot,e[171]=J):J=e[171],$="ppt-section",e[172]===Symbol.for("react.memo_cache_sentinel")?(g={borderTop:"none"},e[172]=g):g=e[172],e[173]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsxs("div",{className:"ppt-section-header",children:[n.jsx("span",{className:"ppt-section-title-en",children:"Interest & Repayment / පොලී සහ ආපසු ගෙවීම"}),n.jsx("span",{className:"ppt-section-title-si",children:"Interest Information"})]}),e[173]=x):x=e[173];let gt;e[174]===Symbol.for("react.memo_cache_sentinel")?(gt=n.jsxs("span",{className:"ppt-interest-label",children:["Interest Rate ",n.jsx("span",{className:"si",children:"පොලී අනුපාතය"})]}),e[174]=gt):gt=e[174],e[175]!==s.interestRatePerMonth?(u=n.jsxs("div",{className:"ppt-interest-row",children:[gt,n.jsxs("span",{className:"ppt-interest-value",children:[s.interestRatePerMonth,"% per month / මාසයකට"]})]}),e[175]=s.interestRatePerMonth,e[176]=u):u=e[176];let ut;e[177]===Symbol.for("react.memo_cache_sentinel")?(ut=n.jsxs("span",{className:"ppt-interest-label",children:["Loan Period ",n.jsx("span",{className:"si",children:"ණය කාලය"})]}),e[177]=ut):ut=e[177],e[178]!==R?(r=n.jsxs("div",{className:"ppt-interest-row",children:[ut,n.jsxs("span",{className:"ppt-interest-value",children:[R," Month(s) / මාස"]})]}),e[178]=R,e[179]=r):r=e[179];let jt;e[180]===Symbol.for("react.memo_cache_sentinel")?(jt=n.jsxs("span",{className:"ppt-interest-label",children:["Maturity Date ",n.jsx("span",{className:"si",children:"කල් පිරෙන දිනය"})]}),e[180]=jt):jt=e[180];let rt;e[181]!==s.maturityDate?(rt=ct(s.maturityDate),e[181]=s.maturityDate,e[182]=rt):rt=e[182],e[183]!==rt?(j=n.jsxs("div",{className:"ppt-interest-row",children:[jt,n.jsx("span",{className:"ppt-interest-value",children:rt})]}),e[183]=rt,e[184]=j):j=e[184];let Nt;e[185]===Symbol.for("react.memo_cache_sentinel")?(Nt=n.jsxs("span",{className:"ppt-interest-label",children:["Grace Period ",n.jsx("span",{className:"si",children:"සහන කාලය"})]}),e[185]=Nt):Nt=e[185],e[186]!==s.gracePeriodDays?(P=n.jsxs("div",{className:"ppt-interest-row",children:[Nt,n.jsxs("span",{className:"ppt-interest-value",children:[s.gracePeriodDays," Days / දින"]})]}),e[186]=s.gracePeriodDays,e[187]=P):P=e[187];let yt;e[188]===Symbol.for("react.memo_cache_sentinel")?(yt=n.jsxs("span",{className:"ppt-interest-label",children:["Estimated Interest at Maturity ",n.jsx("span",{className:"si",children:"කල් පිරෙන විට ඇස්තමේන්තු පොලිය"})]}),e[188]=yt):yt=e[188],S=n.jsxs("div",{className:"ppt-interest-row",children:[yt,n.jsx("span",{className:"ppt-interest-value",children:me(M.totalInterest)})]}),V="ppt-interest-row total",e[189]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsxs("span",{className:"ppt-interest-label",children:["Total Payable at Maturity ",n.jsx("span",{className:"si",children:"කල් පිරෙන විට ගෙවිය යුතු මුළු මුදල"})]}),e[189]=p):p=e[189],E="ppt-interest-value",v=me(M.totalPayable),e[7]=a.address,e[8]=a.city,e[9]=a.email,e[10]=a.name,e[11]=a.phone,e[12]=a.phone2,e[13]=a.registrationNumber,e[14]=R,e[15]=t,e[16]=s.customerAddress,e[17]=s.customerNIC,e[18]=s.customerName,e[19]=s.customerPhone,e[20]=s.gracePeriodDays,e[21]=s.interestRatePerMonth,e[22]=s.items,e[23]=s.loanToValueRatio,e[24]=s.maturityDate,e[25]=s.pawnDate,e[26]=s.principalAmount,e[27]=s.ticketNumber,e[28]=s.totalGrossWeight,e[29]=s.totalNetWeight,e[30]=s.totalValuation,e[31]=p,e[32]=$,e[33]=g,e[34]=x,e[35]=u,e[36]=r,e[37]=j,e[38]=P,e[39]=S,e[40]=T,e[41]=N,e[42]=y,e[43]=m,e[44]=_,e[45]=d,e[46]=h,e[47]=J,e[48]=E,e[49]=v,e[50]=V}else p=e[31],$=e[32],g=e[33],x=e[34],u=e[35],r=e[36],j=e[37],P=e[38],S=e[39],T=e[40],N=e[41],y=e[42],m=e[43],_=e[44],d=e[45],h=e[46],J=e[47],E=e[48],v=e[49],V=e[50];let C;e[190]!==E||e[191]!==v?(C=n.jsx("span",{className:E,children:v}),e[190]=E,e[191]=v,e[192]=C):C=e[192];let F;e[193]!==p||e[194]!==C||e[195]!==V?(F=n.jsxs("div",{className:V,children:[p,C]}),e[193]=p,e[194]=C,e[195]=V,e[196]=F):F=e[196];let B;e[197]!==$||e[198]!==g||e[199]!==x||e[200]!==u||e[201]!==r||e[202]!==j||e[203]!==P||e[204]!==S||e[205]!==F?(B=n.jsxs("div",{className:$,style:g,children:[x,u,r,j,P,S,F]}),e[197]=$,e[198]=g,e[199]=x,e[200]=u,e[201]=r,e[202]=j,e[203]=P,e[204]=S,e[205]=F,e[206]=B):B=e[206];let q;e[207]===Symbol.for("react.memo_cache_sentinel")?(q=n.jsxs("div",{className:"ppt-terms-header",children:["Terms & Conditions / ",n.jsx("span",{className:"si",children:"නියමයන් සහ කොන්දේසි"})]}),e[207]=q):q=e[207];let w;e[208]!==a.pawnTerms||e[209]!==le||e[210]!==s.interestRatePerMonth?(w=le.length>0?le.map(Kt):a?.pawnTerms?a.pawnTerms.split(`
`).filter(Jt).map(qt):n.jsxs(n.Fragment,{children:[n.jsxs("li",{children:["Interest of ",s.interestRatePerMonth,"% is charged per month, even for one day. Daily pro-rata applies after the first month.",n.jsxs("span",{className:"si",children:[" / ",s.interestRatePerMonth,"% ක් මාසිකව අය කෙරේ. පළමු මාසයෙන් පසු දෛනික ගණනය කෙරේ."]})]}),n.jsxs("li",{children:["Items must be redeemed within the loan period plus grace period with original ticket and valid ID.",n.jsx("span",{className:"si",children:" / භාණ්ඩ ආපසු ගැනීමට මුල් ටිකට් පත සහ වලංගු හැඳුනුම්පත ඉදිරිපත් කළ යුතුය."})]}),n.jsxs("li",{children:["Unredeemed items after the grace period may be forfeited without further notice.",n.jsx("span",{className:"si",children:" / සහන කාලය ඉකුත් වූ පසු භාණ්ඩ රඳවා ගැනීමට ආයතනයට අයිතිය ඇත."})]}),n.jsxs("li",{children:["This ticket must be surrendered to redeem the pawned articles.",n.jsx("span",{className:"si",children:" / උකස් භාණ්ඩ ආපසු ගැනීමේදී මෙම ටිකට් පත ඉදිරිපත් කළ යුතුය."})]})]}),e[208]=a.pawnTerms,e[209]=le,e[210]=s.interestRatePerMonth,e[211]=w):w=e[211];let U;e[212]!==w?(U=n.jsxs("div",{className:"ppt-terms",children:[q,n.jsx("ul",{className:"ppt-terms-list",children:w})]}),e[212]=w,e[213]=U):U=e[213];let ae;e[214]===Symbol.for("react.memo_cache_sentinel")?(ae=n.jsx("div",{className:"ppt-sig-space"}),e[214]=ae):ae=e[214];let G;e[215]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsxs("div",{className:"ppt-sig-box",children:[ae,n.jsxs("div",{className:"ppt-sig-label",children:["Customer / ",n.jsx("span",{className:"si",children:"ගනුදෙනුකරු"})]})]}),e[215]=G):G=e[215];let L;e[216]===Symbol.for("react.memo_cache_sentinel")?(L=n.jsx("div",{className:"ppt-sig-space"}),e[216]=L):L=e[216];let H;e[217]===Symbol.for("react.memo_cache_sentinel")?(H=n.jsxs("div",{className:"ppt-sig-box",children:[L,n.jsxs("div",{className:"ppt-sig-label",children:["Valuer / ",n.jsx("span",{className:"si",children:"තක්සේරු නිලධාරී"})]})]}),e[217]=H):H=e[217];let W;e[218]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx("div",{className:"ppt-sig-space"}),e[218]=W):W=e[218];let te,D;e[219]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsxs("div",{className:"ppt-sig-row",children:[G,H,n.jsxs("div",{className:"ppt-sig-box",children:[W,n.jsxs("div",{className:"ppt-sig-label",children:["Manager / ",n.jsx("span",{className:"si",children:"කළමනාකරු"})]})]})]}),D=n.jsx("div",{className:"ppt-customer-copy",children:"CUSTOMER COPY — Please retain this ticket for redemption / ගනුදෙනුකරු පිටපත — භාණ්ඩ ආපසු ගැනීමට මෙය රඳවා ගන්න"}),e[219]=te,e[220]=D):(te=e[219],D=e[220]);let z;e[221]===Symbol.for("react.memo_cache_sentinel")?(z=new Date().toLocaleString("en-GB"),e[221]=z):z=e[221];let k;e[222]!==a.registrationNumber?(k=n.jsxs("div",{className:"ppt-footer",children:["Printed: ",z,"  |  ",a.registrationNumber,"  |  This is a computer-generated document."]}),e[222]=a.registrationNumber,e[223]=k):k=e[223];let Q;return e[224]!==T||e[225]!==N||e[226]!==y||e[227]!==m||e[228]!==_||e[229]!==d||e[230]!==h||e[231]!==J||e[232]!==B||e[233]!==U||e[234]!==k?(Q=n.jsxs("div",{ref:T,className:N,children:[y,m,_,d,h,J,B,U,te,D,k]}),e[224]=T,e[225]=N,e[226]=y,e[227]=m,e[228]=_,e[229]=d,e[230]=h,e[231]=J,e[232]=B,e[233]=U,e[234]=k,e[235]=Q):Q=e[235],Q});Ut.displayName="PrintablePawnTicket";function Yt(l,t){return n.jsxs("tr",{children:[n.jsx("td",{className:"center",children:t+1}),n.jsxs("td",{children:[n.jsx("strong",{children:l.itemType}),l.description&&n.jsx("div",{className:"item-sub",children:l.description}),l.hasGemstones&&n.jsxs("div",{className:"item-sub",children:["* ",l.gemstoneDescription]})]}),n.jsx("td",{className:"center",children:l.karat}),n.jsx("td",{className:"right",children:tt(l.grossWeight)}),n.jsx("td",{className:"right",children:tt(l.netWeight)}),n.jsx("td",{className:"right",children:tt(l.netWeight)}),n.jsx("td",{className:"right",children:me(l.valuedAmount)})]},l.id)}function Kt(l){return n.jsxs("li",{children:[n.jsx("span",{className:"en",children:l.en}),l.si&&n.jsx("span",{className:"si",children:l.si}),l.ta&&n.jsx("span",{className:"ta",children:l.ta})]},l.groupId)}function Jt(l){return l.trim()}function qt(l,t){const e=l.split(" / ");return n.jsxs("li",{children:[e[0]?.trim(),e[1]&&n.jsxs("span",{className:"si",children:[" / ",e[1].trim()]})]},t)}const Ht={name:"Onelka Jewellery",tagline:"Exquisite Craftsmanship Since 1985",address:"Makandura, Matara.",city:"Matara",phone:"0770400789",email:"onelkajewellery95@gmail.com"};function Je(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function _t(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function Qt(l){switch(l){case"redemption":return{en:"REDEMPTION RECEIPT",si:"මුදා ගැනීමේ රිසිට්පත"};case"interest":return{en:"INTEREST PAYMENT RECEIPT",si:"පොලී ගෙවීමේ රිසිට්පත"};default:return{en:"PAYMENT RECEIPT",si:"ගෙවීම් රිසිට්පත"}}}function an(l){const t=pt.c(136),{data:e,company:s}=l,i=s||Ht;let ce;t[0]!==e.paymentType?(ce=Qt(e.paymentType),t[0]=e.paymentType,t[1]=ce):ce=t[1];const a=ce;let o;t[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx("style",{children:`
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
      `}),t[2]=o):o=t[2];let le;t[3]===Symbol.for("react.memo_cache_sentinel")?(le={display:"flex",alignItems:"center",gap:"10px",marginBottom:"3px"},t[3]=le):le=t[3];let A;t[4]===Symbol.for("react.memo_cache_sentinel")?(A=n.jsx("img",{src:"/logo.jpg",alt:"",style:{width:"42px",height:"42px",objectFit:"contain",borderRadius:"3px"}}),t[4]=A):A=t[4];let c;t[5]!==i.name?(c=n.jsxs("div",{style:le,children:[A,n.jsx("h1",{children:i.name})]}),t[5]=i.name,t[6]=c):c=t[6];let O;t[7]!==i.tagline?(O=i.tagline&&n.jsx("div",{className:"tagline",children:i.tagline}),t[7]=i.tagline,t[8]=O):O=t[8];const R=i.city?`, ${i.city}`:"";let p;t[9]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx("br",{}),t[9]=p):p=t[9];let $;t[10]===Symbol.for("react.memo_cache_sentinel")?($=n.jsx("br",{}),t[10]=$):$=t[10];let g;t[11]!==i.address||t[12]!==i.email||t[13]!==i.phone||t[14]!==R?(g=n.jsxs("div",{className:"details",children:[i.address,R,p,"Tel: ",i.phone,$,"Email: ",i.email]}),t[11]=i.address,t[12]=i.email,t[13]=i.phone,t[14]=R,t[15]=g):g=t[15];let x;t[16]!==g||t[17]!==c||t[18]!==O?(x=n.jsxs("div",{className:"pp-company",children:[c,O,g]}),t[16]=g,t[17]=c,t[18]=O,t[19]=x):x=t[19];let u;t[20]!==a.en?(u=n.jsx("h2",{children:a.en}),t[20]=a.en,t[21]=u):u=t[21];let r;t[22]!==a.si?(r=n.jsx("div",{className:"subtitle",children:a.si}),t[22]=a.si,t[23]=r):r=t[23];let j;t[24]!==e.clearanceNumber?(j=n.jsx("div",{className:"ticket-no",children:e.clearanceNumber}),t[24]=e.clearanceNumber,t[25]=j):j=t[25];let P;t[26]!==u||t[27]!==r||t[28]!==j?(P=n.jsxs("div",{className:"pp-title-block",children:[u,r,j]}),t[26]=u,t[27]=r,t[28]=j,t[29]=P):P=t[29];let S;t[30]!==x||t[31]!==P?(S=n.jsxs("div",{className:"pp-header",children:[x,P]}),t[30]=x,t[31]=P,t[32]=S):S=t[32];let T;t[33]===Symbol.for("react.memo_cache_sentinel")?(T=n.jsx("label",{children:"Customer Details / පාරිභෝගික විස්තර"}),t[33]=T):T=t[33];let N;t[34]!==e.customerName?(N=n.jsx("div",{className:"name",children:e.customerName}),t[34]=e.customerName,t[35]=N):N=t[35];let y;t[36]!==e.customerNic?(y=e.customerNic&&n.jsxs(n.Fragment,{children:["NIC: ",e.customerNic,n.jsx("br",{})]}),t[36]=e.customerNic,t[37]=y):y=t[37];let m;t[38]!==e.customerPhone?(m=e.customerPhone&&n.jsxs(n.Fragment,{children:["Tel: ",e.customerPhone,n.jsx("br",{})]}),t[38]=e.customerPhone,t[39]=m):m=t[39];let _;t[40]!==e.customerAddress?(_=e.customerAddress&&n.jsx(n.Fragment,{children:e.customerAddress}),t[40]=e.customerAddress,t[41]=_):_=t[41];let d;t[42]!==y||t[43]!==m||t[44]!==_?(d=n.jsxs("div",{className:"meta",children:[y,m,_]}),t[42]=y,t[43]=m,t[44]=_,t[45]=d):d=t[45];let h;t[46]!==N||t[47]!==d?(h=n.jsxs("div",{className:"pp-info-box",children:[T,N,d]}),t[46]=N,t[47]=d,t[48]=h):h=t[48];let J;t[49]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsx("label",{children:"Payment Details / ගෙවීම් විස්තර"}),t[49]=J):J=t[49];let E;t[50]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsx("strong",{children:"Pawn Date:"}),t[50]=E):E=t[50];let v;t[51]!==e.pawnDate?(v=_t(e.pawnDate),t[51]=e.pawnDate,t[52]=v):v=t[52];let V,C;t[53]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("br",{}),C=n.jsx("strong",{children:"Payment Date:"}),t[53]=V,t[54]=C):(V=t[53],C=t[54]);let F;t[55]!==e.paymentDate?(F=_t(e.paymentDate),t[55]=e.paymentDate,t[56]=F):F=t[56];let B,q;t[57]===Symbol.for("react.memo_cache_sentinel")?(B=n.jsx("br",{}),q=n.jsx("strong",{children:"Method:"}),t[57]=B,t[58]=q):(B=t[57],q=t[58]);let w;t[59]!==e.paymentMethod?(w=e.paymentMethod.replace("-"," ").toUpperCase(),t[59]=e.paymentMethod,t[60]=w):w=t[60];let U,ae;t[61]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsx("br",{}),ae=n.jsx("strong",{children:"Type:"}),t[61]=U,t[62]=ae):(U=t[61],ae=t[62]);const G=e.paymentType==="redemption"?"FULL REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let L;t[63]!==G?(L=n.jsx("span",{className:"pp-status",children:G}),t[63]=G,t[64]=L):L=t[64];let H;t[65]!==v||t[66]!==F||t[67]!==w||t[68]!==L?(H=n.jsxs("div",{className:"pp-info-box right",children:[J,n.jsxs("div",{className:"meta",children:[E," ",v,V,C," ",F,B,q," ",w,U,ae," ",L]})]}),t[65]=v,t[66]=F,t[67]=w,t[68]=L,t[69]=H):H=t[69];let W;t[70]!==h||t[71]!==H?(W=n.jsxs("div",{className:"pp-info-grid",children:[h,H]}),t[70]=h,t[71]=H,t[72]=W):W=t[72];let te;t[73]===Symbol.for("react.memo_cache_sentinel")?(te=n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#"}),n.jsx("th",{children:"Pawned Item / උකස් භාණ්ඩය"}),n.jsx("th",{children:"Details"}),n.jsx("th",{children:"Weight"}),n.jsx("th",{children:"Value (Ref.)"})]})}),t[73]=te):te=t[73];let D;t[74]!==e.items?(D=e.items.map(Xt),t[74]=e.items,t[75]=D):D=t[75];let z;t[76]!==D?(z=n.jsxs("table",{className:"pp-items-table",children:[te,n.jsx("tbody",{children:D})]}),t[76]=D,t[77]=z):z=t[77];let k;t[78]!==e.additionalMonthsInterest||t[79]!==e.daysElapsed||t[80]!==e.firstMonthInterest||t[81]!==e.interestRate||t[82]!==e.proratedDailyInterest||t[83]!==e.totalInterest?(k=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"pp-interest-box",children:[n.jsx("h3",{children:"Interest Breakdown / පොලී විස්තරය"}),e.daysElapsed!=null&&n.jsxs("div",{className:"pp-row",children:[n.jsx("span",{className:"label",children:"Period Elapsed"}),n.jsxs("span",{className:"value",children:[e.daysElapsed," days"]})]}),n.jsxs("div",{className:"pp-row",children:[n.jsx("span",{className:"label",children:"Interest Rate"}),n.jsxs("span",{className:"value",children:[e.interestRate,"% / month"]})]}),e.firstMonthInterest!=null&&e.firstMonthInterest>0&&n.jsxs("div",{className:"pp-row",children:[n.jsxs("span",{className:"label",children:["1st Month Interest (",e.interestRate,"%)"]}),n.jsx("span",{className:"value",children:Je(e.firstMonthInterest)})]}),e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&n.jsxs("div",{className:"pp-row",children:[n.jsx("span",{className:"label",children:"Additional Months Interest"}),n.jsx("span",{className:"value",children:Je(e.additionalMonthsInterest)})]}),e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&n.jsxs("div",{className:"pp-row",children:[n.jsx("span",{className:"label",children:"Pro-rated Daily Interest"}),n.jsx("span",{className:"value",children:Je(e.proratedDailyInterest)})]}),n.jsxs("div",{className:"pp-row highlight",style:{borderTop:"1px solid #ddd",paddingTop:"4px",marginTop:"2px"},children:[n.jsx("span",{className:"label",style:{fontWeight:600},children:"Total Interest / මුළු පොලිය"}),n.jsx("span",{className:"value",children:Je(e.totalInterest)})]})]}),t[78]=e.additionalMonthsInterest,t[79]=e.daysElapsed,t[80]=e.firstMonthInterest,t[81]=e.interestRate,t[82]=e.proratedDailyInterest,t[83]=e.totalInterest,t[84]=k):k=t[84];let Q;t[85]===Symbol.for("react.memo_cache_sentinel")?(Q=n.jsx("span",{className:"label",children:"Advance Amount (අත්තිකාරම් මුදල)"}),t[85]=Q):Q=t[85];let M;t[86]!==e.principalAmount?(M=Je(e.principalAmount),t[86]=e.principalAmount,t[87]=M):M=t[87];let f;t[88]!==M?(f=n.jsxs("div",{className:"pp-summary-row",children:[Q,n.jsx("span",{className:"value",children:M})]}),t[88]=M,t[89]=f):f=t[89];let I;t[90]!==e.totalInterest?(I=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"pp-summary-row",children:[n.jsx("span",{className:"label",children:"Total Interest"}),n.jsx("span",{className:"value",children:Je(e.totalInterest)})]}),t[90]=e.totalInterest,t[91]=I):I=t[91];let Y;t[92]!==e.totalPayable?(Y=e.totalPayable!=null&&n.jsxs("div",{className:"pp-summary-row total",children:[n.jsx("span",{className:"label",children:"Total Due / මුළු මුදල"}),n.jsx("span",{className:"value",children:Je(e.totalPayable)})]}),t[92]=e.totalPayable,t[93]=Y):Y=t[93];let X;t[94]!==e.previousPayments?(X=e.previousPayments!=null&&e.previousPayments>0&&n.jsxs("div",{className:"pp-summary-row",style:{marginTop:"4px"},children:[n.jsx("span",{className:"label",children:"Previous Payments"}),n.jsxs("span",{className:"value",children:["(",Je(e.previousPayments),")"]})]}),t[94]=e.previousPayments,t[95]=X):X=t[95];let K;t[96]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsx("span",{className:"label",children:"Amount Paid / ගෙවූ මුදල"}),t[96]=K):K=t[96];let b;t[97]!==e.paymentAmount?(b=Je(e.paymentAmount),t[97]=e.paymentAmount,t[98]=b):b=t[98];let Z;t[99]!==b?(Z=n.jsxs("div",{className:"pp-summary-row paid",children:[K,n.jsx("span",{className:"value",children:b})]}),t[99]=b,t[100]=Z):Z=t[100];let ne;t[101]!==e.remainingBalance?(ne=e.remainingBalance!=null&&e.remainingBalance>0&&n.jsxs("div",{className:"pp-summary-row",style:{marginTop:"4px",fontSize:"10pt"},children:[n.jsx("span",{className:"label",style:{color:"#333",fontWeight:600},children:"Remaining Balance"}),n.jsx("span",{className:"value",style:{fontWeight:700},children:Je(e.remainingBalance)})]}),t[101]=e.remainingBalance,t[102]=ne):ne=t[102];let ee;t[103]!==f||t[104]!==I||t[105]!==Y||t[106]!==X||t[107]!==Z||t[108]!==ne?(ee=n.jsx("div",{className:"pp-summary",children:n.jsxs("div",{className:"pp-summary-box",children:[f,I,Y,X,Z,ne]})}),t[103]=f,t[104]=I,t[105]=Y,t[106]=X,t[107]=Z,t[108]=ne,t[109]=ee):ee=t[109];let se;t[110]!==e.notes?(se=e.notes&&n.jsxs("div",{className:"pp-notes",children:[n.jsx("label",{children:"Notes"}),n.jsx("p",{children:e.notes})]}),t[110]=e.notes,t[111]=se):se=t[111];let oe;t[112]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("div",{className:"pp-sig",children:n.jsx("div",{className:"line",children:"Customer Signature / පාරිභෝගික අත්සන"})}),t[112]=oe):oe=t[112];let pe;t[113]===Symbol.for("react.memo_cache_sentinel")?(pe=n.jsxs("div",{className:"pp-signatures",children:[oe,n.jsx("div",{className:"pp-sig",children:n.jsx("div",{className:"line",children:"Authorized Signature / බලයලත් අත්සන"})})]}),t[113]=pe):pe=t[113];let xe;t[114]===Symbol.for("react.memo_cache_sentinel")?(xe=n.jsx("span",{className:"pp-diamond"}),t[114]=xe):xe=t[114];let je;t[115]===Symbol.for("react.memo_cache_sentinel")?(je=n.jsxs("div",{className:"thank-you",children:[xe,"Thank You for Your Patronage",n.jsx("span",{className:"pp-diamond"})]}),t[115]=je):je=t[115];const fe=`mailto:${i.email}`;let be;t[116]!==i.email||t[117]!==fe?(be=n.jsx("a",{href:fe,children:i.email}),t[116]=i.email,t[117]=fe,t[118]=be):be=t[118];const ge=`tel:${i.phone}`;let ie;t[119]!==i.phone||t[120]!==ge?(ie=n.jsx("a",{href:ge,children:i.phone}),t[119]=i.phone,t[120]=ge,t[121]=ie):ie=t[121];let de;t[122]!==be||t[123]!==ie?(de=n.jsxs("div",{className:"contact",children:["Contact us at ",be," or call ",ie]}),t[122]=be,t[123]=ie,t[124]=de):de=t[124];let he;t[125]===Symbol.for("react.memo_cache_sentinel")?(he=n.jsx("div",{className:"tagline-footer",children:"✦ Premium Quality ✦ Expert Craftsmanship ✦ Lifetime Warranty ✦"}),t[125]=he):he=t[125];let re;t[126]!==de?(re=n.jsxs("div",{className:"pp-footer",children:[je,de,he]}),t[126]=de,t[127]=re):re=t[127];let ue;return t[128]!==S||t[129]!==W||t[130]!==z||t[131]!==k||t[132]!==ee||t[133]!==se||t[134]!==re?(ue=n.jsxs("div",{className:"pawn-payment-a4",children:[o,S,W,z,k,ee,se,pe,re]}),t[128]=S,t[129]=W,t[130]=z,t[131]=k,t[132]=ee,t[133]=se,t[134]=re,t[135]=ue):ue=t[135],ue}function Xt(l,t){return n.jsxs("tr",{children:[n.jsx("td",{children:String(t+1).padStart(2,"0")}),n.jsxs("td",{children:[n.jsx("div",{className:"item-name",children:l.productName}),(l.metalType||l.karat)&&n.jsxs("div",{className:"item-meta",children:[l.metalType?.toUpperCase(),l.karat?` • ${l.karat}`:""]})]}),n.jsx("td",{style:{fontSize:"9pt",color:"#555"},children:l.karat||"—"}),n.jsx("td",{children:l.metalWeight?`${Number(l.metalWeight).toFixed(3)} g`:"—"}),n.jsx("td",{children:Je(l.total)})]},t)}function qe(l){return`Rs. ${l.toLocaleString("en-LK",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function St(l){return new Date(l).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function ln(l){const t=pt.c(113),{data:e,company:s}=l,i=e.paymentType==="redemption"?"REDEMPTION":e.paymentType==="interest"?"INTEREST PAYMENT":"PARTIAL PAYMENT";let ce;t[0]===Symbol.for("react.memo_cache_sentinel")?(ce=n.jsx("style",{children:`
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
      `}),t[0]=ce):ce=t[0];const a=s?.name||"Onelka Jewellery";let o;t[1]!==a?(o=n.jsx("h1",{children:a}),t[1]=a,t[2]=o):o=t[2];let le;t[3]!==s?(le=s?.tagline&&n.jsx("p",{children:s.tagline}),t[3]=s,t[4]=le):le=t[4];const A=s?.address||"";let c;t[5]!==A?(c=n.jsx("p",{children:A}),t[5]=A,t[6]=c):c=t[6];const O=s?.phone||"";let R;t[7]!==O?(R=n.jsxs("p",{children:["Tel: ",O]}),t[7]=O,t[8]=R):R=t[8];let p;t[9]!==o||t[10]!==le||t[11]!==c||t[12]!==R?(p=n.jsxs("div",{className:"ppr-header",children:[o,le,c,R]}),t[9]=o,t[10]=le,t[11]=c,t[12]=R,t[13]=p):p=t[13];let $;t[14]!==i?($=n.jsx("div",{className:"ppr-title",children:i}),t[14]=i,t[15]=$):$=t[15];let g;t[16]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx("span",{className:"label",children:"Ticket #:"}),t[16]=g):g=t[16];let x;t[17]!==e.clearanceNumber?(x=n.jsxs("div",{className:"ppr-row",children:[g,n.jsx("span",{className:"value",children:e.clearanceNumber})]}),t[17]=e.clearanceNumber,t[18]=x):x=t[18];let u;t[19]===Symbol.for("react.memo_cache_sentinel")?(u=n.jsx("span",{className:"label",children:"Pawn Date:"}),t[19]=u):u=t[19];let r;t[20]!==e.pawnDate?(r=St(e.pawnDate),t[20]=e.pawnDate,t[21]=r):r=t[21];let j;t[22]!==r?(j=n.jsxs("div",{className:"ppr-row",children:[u,n.jsx("span",{className:"value",children:r})]}),t[22]=r,t[23]=j):j=t[23];let P;t[24]===Symbol.for("react.memo_cache_sentinel")?(P=n.jsx("span",{className:"label",children:"Pay Date:"}),t[24]=P):P=t[24];let S;t[25]!==e.paymentDate?(S=St(e.paymentDate),t[25]=e.paymentDate,t[26]=S):S=t[26];let T;t[27]!==S?(T=n.jsxs("div",{className:"ppr-row",children:[P,n.jsx("span",{className:"value",children:S})]}),t[27]=S,t[28]=T):T=t[28];let N;t[29]===Symbol.for("react.memo_cache_sentinel")?(N=n.jsx("div",{className:"ppr-divider"}),t[29]=N):N=t[29];let y;t[30]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("span",{className:"label",children:"Customer:"}),t[30]=y):y=t[30];let m;t[31]!==e.customerName?(m=n.jsxs("div",{className:"ppr-row",children:[y,n.jsx("span",{className:"value",children:e.customerName})]}),t[31]=e.customerName,t[32]=m):m=t[32];let _;t[33]!==e.customerNic?(_=e.customerNic&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"NIC:"}),n.jsx("span",{className:"value",children:e.customerNic})]}),t[33]=e.customerNic,t[34]=_):_=t[34];let d,h;t[35]===Symbol.for("react.memo_cache_sentinel")?(d=n.jsx("div",{className:"ppr-divider"}),h={fontWeight:"bold",fontSize:"11px",marginBottom:"3px"},t[35]=d,t[36]=h):(d=t[35],h=t[36]);const J=e.paymentType==="redemption"?"ITEMS REDEEMED:":"PAWNED ITEMS:";let E;t[37]!==J?(E=n.jsx("div",{style:h,children:J}),t[37]=J,t[38]=E):E=t[38];let v;t[39]!==e.items?(v=e.items.map(Zt),t[39]=e.items,t[40]=v):v=t[40];let V;t[41]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsx("div",{className:"ppr-divider"}),t[41]=V):V=t[41];let C;t[42]===Symbol.for("react.memo_cache_sentinel")?(C=n.jsx("span",{className:"label",children:"Principal:"}),t[42]=C):C=t[42];let F;t[43]!==e.principalAmount?(F=qe(e.principalAmount),t[43]=e.principalAmount,t[44]=F):F=t[44];let B;t[45]!==F?(B=n.jsxs("div",{className:"ppr-row",children:[C,n.jsx("span",{className:"value",children:F})]}),t[45]=F,t[46]=B):B=t[46];let q;t[47]===Symbol.for("react.memo_cache_sentinel")?(q=n.jsx("span",{className:"label",children:"Rate:"}),t[47]=q):q=t[47];let w;t[48]!==e.interestRate?(w=n.jsxs("div",{className:"ppr-row",children:[q,n.jsxs("span",{className:"value",children:[e.interestRate,"%/mo"]})]}),t[48]=e.interestRate,t[49]=w):w=t[49];let U;t[50]===Symbol.for("react.memo_cache_sentinel")?(U=n.jsx("span",{className:"label",children:"Monthly Int:"}),t[50]=U):U=t[50];const ae=e.principalAmount*e.interestRate/100;let G;t[51]!==ae?(G=qe(ae),t[51]=ae,t[52]=G):G=t[52];let L;t[53]!==G?(L=n.jsxs("div",{className:"ppr-row",children:[U,n.jsx("span",{className:"value",children:G})]}),t[53]=G,t[54]=L):L=t[54];let H;t[55]!==e.daysElapsed?(H=e.daysElapsed!=null&&e.daysElapsed>0&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"Period:"}),n.jsxs("span",{className:"value",children:[e.daysElapsed," days"]})]}),t[55]=e.daysElapsed,t[56]=H):H=t[56];let W;t[57]!==e.firstMonthInterest?(W=e.firstMonthInterest!=null&&e.firstMonthInterest>0&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"1st Month:"}),n.jsx("span",{className:"value",children:qe(e.firstMonthInterest)})]}),t[57]=e.firstMonthInterest,t[58]=W):W=t[58];let te;t[59]!==e.additionalMonthsInterest?(te=e.additionalMonthsInterest!=null&&e.additionalMonthsInterest>0&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"Addtl Months:"}),n.jsx("span",{className:"value",children:qe(e.additionalMonthsInterest)})]}),t[59]=e.additionalMonthsInterest,t[60]=te):te=t[60];let D;t[61]!==e.proratedDailyInterest?(D=e.proratedDailyInterest!=null&&e.proratedDailyInterest>0&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"Pro-rated:"}),n.jsx("span",{className:"value",children:qe(e.proratedDailyInterest)})]}),t[61]=e.proratedDailyInterest,t[62]=D):D=t[62];let z;t[63]!==e.totalInterest?(z=e.totalInterest!=null&&e.totalInterest>0&&n.jsxs("div",{className:"ppr-row",style:{fontWeight:"bold",borderTop:"1px dashed #000",paddingTop:"3px",marginTop:"2px"},children:[n.jsx("span",{className:"label",children:"Total Int:"}),n.jsx("span",{className:"value",children:qe(e.totalInterest)})]}),t[63]=e.totalInterest,t[64]=z):z=t[64];let k;t[65]!==e.totalPayable?(k=e.totalPayable!=null&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"Total Due:"}),n.jsx("span",{className:"value",children:qe(e.totalPayable)})]}),t[65]=e.totalPayable,t[66]=k):k=t[66];let Q;t[67]!==e.previousPayments?(Q=e.previousPayments!=null&&e.previousPayments>0&&n.jsxs("div",{className:"ppr-row",children:[n.jsx("span",{className:"label",children:"Prev. Paid:"}),n.jsxs("span",{className:"value",children:["(",qe(e.previousPayments),")"]})]}),t[67]=e.previousPayments,t[68]=Q):Q=t[68];let M;t[69]!==e.paymentAmount?(M=qe(e.paymentAmount),t[69]=e.paymentAmount,t[70]=M):M=t[70];let f;t[71]!==M?(f=n.jsxs("div",{className:"ppr-total",children:["PAID: ",M]}),t[71]=M,t[72]=f):f=t[72];let I;t[73]!==e.remainingBalance?(I=e.remainingBalance!=null&&e.remainingBalance>0&&n.jsxs("div",{className:"ppr-row",style:{fontWeight:"bold"},children:[n.jsx("span",{className:"label",children:"Balance:"}),n.jsx("span",{className:"value",children:qe(e.remainingBalance)})]}),t[73]=e.remainingBalance,t[74]=I):I=t[74];let Y;t[75]===Symbol.for("react.memo_cache_sentinel")?(Y=n.jsx("span",{className:"label",children:"Method:"}),t[75]=Y):Y=t[75];let X;t[76]!==e.paymentMethod?(X=e.paymentMethod.replace("-"," ").toUpperCase(),t[76]=e.paymentMethod,t[77]=X):X=t[77];let K;t[78]!==X?(K=n.jsxs("div",{className:"ppr-row",children:[Y,n.jsx("span",{className:"value",children:X})]}),t[78]=X,t[79]=K):K=t[79];let b;t[80]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx("p",{children:"Thank you!"}),t[80]=b):b=t[80];const Z=s?.name||"Onelka Jewellery";let ne;t[81]!==Z?(ne=n.jsx("p",{children:Z}),t[81]=Z,t[82]=ne):ne=t[82];let ee;t[83]!==s?(ee=s?.phone&&n.jsxs("p",{children:["Tel: ",s.phone]}),t[83]=s,t[84]=ee):ee=t[84];let se;t[85]!==ne||t[86]!==ee?(se=n.jsxs("div",{className:"ppr-footer",children:[b,ne,ee]}),t[85]=ne,t[86]=ee,t[87]=se):se=t[87];let oe;t[88]===Symbol.for("react.memo_cache_sentinel")?(oe=n.jsx("div",{className:"ppr-ts",children:new Date().toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}),t[88]=oe):oe=t[88];let pe;return t[89]!==$||t[90]!==x||t[91]!==j||t[92]!==T||t[93]!==m||t[94]!==_||t[95]!==E||t[96]!==v||t[97]!==B||t[98]!==w||t[99]!==L||t[100]!==H||t[101]!==W||t[102]!==te||t[103]!==D||t[104]!==z||t[105]!==k||t[106]!==Q||t[107]!==f||t[108]!==I||t[109]!==K||t[110]!==se||t[111]!==p?(pe=n.jsxs("div",{className:"pos-pay-receipt",children:[ce,p,$,x,j,T,N,m,_,d,E,v,V,B,w,L,H,W,te,D,z,k,Q,f,I,K,se,oe]}),t[89]=$,t[90]=x,t[91]=j,t[92]=T,t[93]=m,t[94]=_,t[95]=E,t[96]=v,t[97]=B,t[98]=w,t[99]=L,t[100]=H,t[101]=W,t[102]=te,t[103]=D,t[104]=z,t[105]=k,t[106]=Q,t[107]=f,t[108]=I,t[109]=K,t[110]=se,t[111]=p,t[112]=pe):pe=t[112],pe}function Zt(l,t){return n.jsxs("div",{className:"ppr-item",children:[n.jsxs("div",{className:"ppr-item-name",children:[t+1,". ",l.productName]}),(l.karat||l.metalWeight)&&n.jsxs("div",{className:"ppr-item-meta",children:[l.karat||""," ",l.metalType||""," ",l.metalWeight?`${l.metalWeight}g`:""]})]},t)}export{It as P,Rt as a,sn as b,ln as c,an as d,Ut as e};
