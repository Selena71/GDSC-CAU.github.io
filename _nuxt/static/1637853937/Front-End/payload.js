__NUXT_JSONP__("/Front-End", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ){return {data:[{articles:[{slug:"tailwind-on-nuxt",description:"프로젝트에 Tailwind CSS를 적용하는 방법을 Nuxt 프레임워크를 중심으로 알아봐요.",title:"프로젝트에 Tailwind CSS 적용하기",img:_,category:$,author:aa,featured:"none",datetime:"2021-11-17T00:00:00.000Z",toc:[{id:J,depth:C,text:J},{id:ab,depth:K,text:ac},{id:ad,depth:K,text:ae},{id:af,depth:C,text:ag},{id:ah,depth:K,text:ai},{id:aj,depth:K,text:ak},{id:al,depth:C,text:am},{id:an,depth:K,text:J}],body:{type:ao,children:[{type:b,tag:g,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fwww.blog.penielcho.com\u002Ftailwind-on-nuxt",rel:[D,E,F],target:G},children:[{type:a,value:"지난 포스트"}]},{type:a,value:"에서는 왜 Tailwind가 좋은지에 대해 알아봤다면, 이번엔 실제 프로젝트에 Tailwind CSS를 어떻게 적용하는지에 대해 알아볼게요. Tailwind는 다양한 프로젝트에 versatile하게 사용할 수 있는 프레임워크지만, 오늘은 제가 요즘 가장 많이 사용하고 있는 Vue 프레임워크인 Nuxt 환경을 기반으로 Tailwind CSS 사용법을 말씀드리도록 할게요. 사실 Nuxt라고 해도 다른 프레임워크들과 크게 다르지 않을 거에요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"Tailwind 지원 프레임워크",src:"\u002Ftailwind-on-nuxt\u002F01.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"추가로, Tailwind CSS가 공식적으로 지원하는 프레임워크 및 툴은 이렇게 6가지에요. 각 프레임워크, 툴 별 설치 방법을 알고 싶다면 "},{type:b,tag:m,props:{href:ap,rel:[D,E,F],target:G},children:[{type:a,value:aq}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:H,props:{id:J},children:[{type:b,tag:m,props:{href:"#%EC%84%A4%EC%B9%98",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:L,props:{id:ab},children:[{type:b,tag:m,props:{href:"#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%EC%8B%9C-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"npx를 통한 tailwind 설치",src:"\u002Ftailwind-on-nuxt\u002F02.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt의 경우, 프로젝트를 만들 때 1차적으로 tailwind css를 설치할 수 있어요. 터미널에  "},{type:b,tag:n,props:{},children:[{type:a,value:"npx create-next-app"}]},{type:a,value:"  명령어를 쳐서 프로젝트를 생성하면, 어떤 라이브러리와 프레임워크들을 함께 설치할지를 물어보거든요. 이때 Tailwind CSS를 선택해주시면 돼요."}]},{type:a,value:e},{type:b,tag:L,props:{id:ad},children:[{type:b,tag:m,props:{href:"#%EC%A1%B4%EC%9E%AC%ED%95%98%EB%8A%94-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ae}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"만약 이미 생성된 프로젝트에 Tailwind CSS를 적용하고 싶다면, npm을 통해 패키지를 설치해주면 돼요. 해당 프로젝트의 디렉토리에서 터미널을 연 후, 아래 명령어를 입력해주세요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:as}]},{type:a,value:" -D @nuxtjs\u002Ftailwindcss tailwindcss@latest postcss@latest autoprefixer@latest\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"설치가 완료되었다면, nuxt.config.js 파일에서 tailwind를 모듈로 지정해주어야 돼요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F nuxt.config.js"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,at,au]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,at,au]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n  buildModules"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'@nuxtjs\u002Ftailwindcss'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이렇게 하면 설치는 완료입니다."}]},{type:a,value:e},{type:b,tag:H,props:{id:af},children:[{type:b,tag:m,props:{href:"#config-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ag}]},{type:a,value:e},{type:b,tag:L,props:{id:ah},children:[{type:b,tag:m,props:{href:"#config-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ai}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"다만, Tailwind CSS를 사용하면서 커스터마이징이 필요한 부분들이 있어요. 좀 더 개성있는 색상을 원한다거나, 폰트 크기를 더욱 세부적으로 조절한다거나 하는 부분에서요. 이를 위해서는 Tailwind 자체의 configuration 파일이 필요한데, configuration 파일의 생성은 아래 명령어를 통해 가능해요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"npx tailwindcss init\n"}]}]}]},{type:a,value:e},{type:b,tag:L,props:{id:aj},children:[{type:b,tag:m,props:{href:"#config-%ED%8C%8C%EC%9D%BC%EC%9D%84-%ED%86%B5%ED%95%B4-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95%ED%95%98%EA%B8%B0",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ak}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"실제로 configuration 파일을 통해 커스터마이징을 하는 예시를 보여드릴게요. Tailwind CSS에서 폰트의 크기는 "},{type:b,tag:n,props:{},children:[{type:a,value:"text-어쩌구"}]},{type:a,value:"의 형식의 class로 결정돼요. 이때 configuration 파일의 수정을 통해서 기존 유틸리티 클래스에 설정된 폰트 크기를 수정할 수도 있고, 새로운 유틸리티 클래스를 만들 수도 있어요. 아래의 예시를 봐주세요. 원래 Tailwind CSS의 유틸리티에 tiny라는 클래스는 존재하지 않아요. 다만 sm은 너무 작게 느껴지고, base는 너무 크게 느껴질 경우 그 사이에 위치하는 새로운 크기의 'tiny'라는 이름의 클래스를 만들 수 있는 거죠. 기존 클래스에 할당된 기능을 수정할 수도 있어요. 폰트의 크기에 있어 text-6xl의 경우, 원래 4rem의 크기를 가져요. 그치만 configuration 파일에서 제가 5rem으로 정의해버리면, text-6xl 클래스가 부여된 html 요소들은 5rem의 크기를 갖게 되는 거죠."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:U}]},{type:a,value:"\n  module"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n    theme"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n      fontSize"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'xs'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'.75rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'sm'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'.875rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'tiny'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'.89rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'base'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'lg'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1.125rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1.25rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'2xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1.5rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'3xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1.875rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'4xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'2.25rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'5xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'3rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'6xl'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'5rem'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:al},children:[{type:b,tag:m,props:{href:"#tailwind-typography-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%A0%81%EC%9A%A9",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:am}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"제가 최근 만들고 있는 Nuxt 사이트들의 대부분은 블로그에요. md 파일을 업로드하면 자동으로 라우팅 경로를 만들어 해당 md 파일이 하나의 아티클 페이지가 되죠. 이 경우, 개별 마크다운 파일 혹은 마크다운 내의 태그 요소들을 하나하나 꾸밀 수 없기에 이미 만들어진 디자인을 적용하면 편해요. 이럴 때 사용할 수 있는 것이 Tailwind Typography에요. 쉽게 말해 md 파일을 styling 해주는 모듈이죠."}]},{type:a,value:e},{type:b,tag:L,props:{id:an},children:[{type:b,tag:m,props:{href:"#%EC%84%A4%EC%B9%98-1",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"# Using npm"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:as}]},{type:a,value:" @tailwindcss\u002Ftypography\n\n"},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"# Using Yarn"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"yarn"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"add"}]},{type:a,value:" @tailwindcss\u002Ftypography\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Npm, Yarn 중 편한 툴을 사용해서 설치해주세요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:U}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Y}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Y}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"설치가 완료되었다면 tailwind.config.js 파일에서 typography 모듈을 추가해주세요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,"language-html"]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,aD]},children:[{type:b,tag:c,props:{className:[d,aD]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C"}]},{type:a,value:"nuxt-content"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:":document"}]},{type:b,tag:c,props:{className:[d,aF]},children:[{type:b,tag:c,props:{className:[d,f,aG]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:"article"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,aF]},children:[{type:b,tag:c,props:{className:[d,f,aG]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:"prose max-w-3xl custom-text px-6"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Tailwind Typography를 적용하는 방법은 엄청 쉬워요. 다른 유틸리티 클래스들처럼 적용을 원하는 태그에 prose라는 클래스를 부여만 해주면 된답니다. 그럼 헤딩부터 bullets, code block 등등 블로그에서 사용하는 태그들을 자동으로 스타일링 해줘요."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:U}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n    extend"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n      typography"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"DEFAULT"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n          css"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n            a"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n              color"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'#3182ce'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'&:hover'"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n                color"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'#2c5282'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:"\n          "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Y}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"그치만, 여전히 맘에 안 드는 부분이 있을 수 있죠. 이 경우 Typography 역시 Tailwind CSS 처럼 tailwind.config.js 파일에서 커스터마이징이 가능해요. 위는 a 태그의 기본 색상과 hover시의 색상을 설정하는 코드에요. 더 많은 커스터마이징 예시를 보고 싶다면 "},{type:b,tag:m,props:{href:"https:\u002F\u002Fgithub.com\u002Ftailwindlabs\u002Ftailwindcss-typography",rel:[D,E,F],target:G},children:[{type:a,value:"Tailwind Typography 공식 문서"}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"기본적인 설치 및 적용 방법은 끝났습니다. 그럼 이제 직접 프로젝트에 적용해볼까요?"}]},{type:a,value:e},{type:b,tag:Z,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:aJ},{type:b,tag:m,props:{href:aK,rel:[D,E,F],target:G},children:[{type:a,value:aL}]},{type:a,value:aM}]},{type:a,value:e}]}]},dir:aN,path:"\u002Fblog\u002Ftailwind-on-nuxt",extension:aO,createdAt:aP,updatedAt:aQ},{slug:"why-tailwind-css",description:"가장 핫한 CSS 프레임워크인 Tailwind CSS, 무엇이 좋을까요?",title:"가장 쉽고 아름다운 CSS 프레임워크, Tailwind CSS",img:_,category:$,author:aa,datetime:"2021-11-16T00:00:00.000Z",toc:[{id:aR,depth:C,text:aS},{id:aT,depth:C,text:aU},{id:aV,depth:C,text:aW},{id:aX,depth:C,text:aY}],body:{type:ao,children:[{type:b,tag:g,props:{},children:[{type:a,value:"웹 개발에 있어 디자인은 너무 중요한 요소지만, 저희 같은 비- 웹 개발자들에게 디자인은 계륵과 같죠. 기능만 제대로 하는 웹 사이트를 만들어도 충분한데 막상 못생기게 만드려니 아쉽거든요. 그렇다고 각잡고 만드려니 이것저것 건드려야 할 것도 많고, 후에 유지보수하기도 막막하고요. 이를 도와주는 다양한 CSS 라이브러리와 프레임워크가 존재하지만, 저는 Tailwind CSS를 추천드려요."}]},{type:a,value:e},{type:b,tag:H,props:{id:aR},children:[{type:b,tag:m,props:{href:"#tailwind-css",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aS}]},{type:a,value:e},{type:b,tag:Z,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"A utility-first CSS framework packed with classes like "},{type:b,tag:n,props:{},children:[{type:a,value:"flex"}]},{type:a,value:aZ},{type:b,tag:n,props:{},children:[{type:a,value:"pt-4"}]},{type:a,value:aZ},{type:b,tag:n,props:{},children:[{type:a,value:"text-center"}]},{type:a,value:" and "},{type:b,tag:n,props:{},children:[{type:a,value:"rotate-90"}]},{type:a,value:" that can be composed to build any design, directly in your markup."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"Tailwind css 사이트"}]},{type:a,value:"에 나와있는 설명입니다. 여기서 중요한 건 Utility-first CSS라는 컨셉인데요, 쉽게 말하면 미리 정의된 CSS 특성들을 class의 형태로 불러와 적용시키는 것입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"general css vs utility first",src:"\u002Fwhy-tailwind-css\u002F01.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"위 이미지는 일반적인 CSS 코드와 utility-first 컨셉의 Tailwind를 사용했을 때의 코드를 비교한 사진이에요. 보시다시피, Utility-first 컨셉의 Tailwind는 코드의 길이를 엄청나게 줄여주고, 코드의 직관성을 높여줘요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 같은 컨셉을 중심으로, Tailwind의 장점들에 대해 알아봅시다."}]},{type:a,value:e},{type:b,tag:H,props:{id:aT},children:[{type:b,tag:m,props:{href:"#zero-%EB%9F%AC%EB%8B%9D%EC%BB%A4%EB%B8%8C",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aU}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Tailwind를 사용하기로 결정해도 따로 시간을 들여 무언가를 배울 필요는 없어요. npm 혹은 yarn을 통해 패키지만 설치해주고, 원하는 html 요소에 class만 부여해주면 돼요. 필요한 효과들은 그때마다 documentation에 검색해서 쓰면 되고요. 몇번 사용하면 자주 사용하는 class들은 외워지실 거에요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"documentation 내 class 예시",src:"\u002Fwhy-tailwind-css\u002F02.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"다른 css 프레임워크의 경우, 효과들을 좀 더 '쉽게' 설명하는데에 집중하다보니 덜 직관적인 경우가 많아요(개발자보다 디자이너를 고려한 것 같은 class 작명...!). 반면 tailwind는 css의 기본적인 속성들을 알고 있다면 사전 공부 없이도 즉석에서 사용 가능할 정도로 각 class별 기능을 알기 쉽고요. 프로젝트에 tailwind를 도입할 때 가장 큰 이점 중 하나이지 않나 싶습니다."}]},{type:a,value:e},{type:b,tag:H,props:{id:aV},children:[{type:b,tag:m,props:{href:"#%EC%89%AC%EC%9A%B4-configuration-%EC%88%98%EC%A0%95",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aW}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"저 같은 경우, Bootstrap을 비롯해 다양한 css 프레임워크를 사용해봤지만, 원하는 결과물이 나오지 않아 결국 scss로 직접 모든 css 코드를 작성하는 일이 비일비재했어요. 이 중 가장 큰 이유는 Configuration을 수정하는 과정이 복잡했기 때문이에요. 기본 제공 theme 중 마음에 드는 것이 없어 매번 config 수정을 해야 했는데 config 파일이 나눠져 있고 파일 자체도 읽기 복잡하다보니 차라리 내가 직접 치는 게 빠르겠다, 싶었던 거죠."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"보다 간단한 configuration",src:"\u002Fwhy-tailwind-css\u002F03.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"그치만 Tailwind의 경우는 조금 달랐어요. 일단 기본 css 요소들이 디자인적으로 예뻐서 수정할 필요가 없기도 했고, 수정이 필요할 경우엔 프로젝트 가장 위 디렉토리에 존재하는 tailwind.config.js 파일 내에서 쉽게 수정이 가능했거든요. 추가적으로 class별 config를 수정하는 방법도 개별 페이지마다 적혀 있답니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"각 페이지별 존재하는 config 가이드",src:"\u002Fwhy-tailwind-css\u002F04.png"},children:[]}]},{type:a,value:e},{type:b,tag:H,props:{id:aX},children:[{type:b,tag:m,props:{href:"#%EA%B0%84%EB%8B%A8%ED%95%9C-responsive-design",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:aY}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"각 뷰포트별 break point",src:"\u002Fwhy-tailwind-css\u002F05.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Tailwind의 경우 Responsive 디자인을 위한 미디어쿼리 작성이 매우 간단해요. 보통의 경우 각 뷰포트 별 요소들의 변화를 각각의 css 파일별로 나누어 저장 후 import 하는데, 이 경우 작성하기도 번거롭고 어느 html 요소에 어떤 코드가 적용되는지 찾기가 힘들죠."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"Tailwind 미디어 쿼리 예시",src:"\u002Fwhy-tailwind-css\u002F06.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"반면 Tailwind의 경우 개별 class가 어떤 뷰포트마다 사용될지를 개별 html 요소가 어떻게 보일지를 class 앞에 사이즈를 지정해주는 보다 직접적인 방식으로 Responsive Design이 이뤄져요. 어떤 요소에 어떤 css 효과가 적용되는지, 어떤 뷰포트에서 해당 요소가 어떻게 보일지 보다 직관적으로 파악이 가능해지는 거죠. 이는 Responsive Design을 위한 코드를 작성할 때 뿐 아니라 추후 유지보수 혹은 협업의 경우 커다란 이점이 돼요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:v,props:{alt:"실제 예시",src:"\u002Fwhy-tailwind-css\u002F07.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"실제로 코드를 작성할 때 저 같은 경우엔 모바일과 데스크탑, 두가지로만 뷰포트를 나누어 디자인을 해요. 즉 px을 기준으로 두가지 상황을 가정해 코드를 짜주는 거죠. 그런데 이 경우, 모바일용 코드를 따로 작성해줄 필요는 없어요. Tailwind CSS는 mobile-first 원칙을 갖고 있어, 적어준 유틸리티 클래스들은 모바일용 뷰포트에 바로 적용이 돼요. 즉 Responsive Design을 위해 코드를 작성시, 모바일용 코드를 제외하고 md용 클래스만 따로 적어주면 되는 거죠."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이외에도 Tailwind CSS에는 과하게! 친절한 Documentation과 보다 복잡한 기능들을 간단하게 지원하는(group, group-hover 보고 놀랐어요...) 등의 다양한 장점이 있답니다. 직접 사용해보시면 더욱 와닿으실 거라 생각해요. 더 많은 정보를 위해서는 "},{type:b,tag:m,props:{href:ap,rel:[D,E,F],target:G},children:[{type:a,value:aq}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"다음 포스팅에서는 Nuxt 프로젝트에 Tailwind CSS를 설치하여 사용하는 방법에 대해 알아보도록 할게요."}]},{type:a,value:e},{type:b,tag:Z,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:aJ},{type:b,tag:m,props:{href:aK,rel:[D,E,F],target:G},children:[{type:a,value:aL}]},{type:a,value:aM}]},{type:a,value:e}]}]},dir:aN,path:"\u002Fblog\u002Fwhy-tailwind-css",extension:aO,createdAt:aP,updatedAt:aQ}]}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","p"," ","operator","string",":",",","a","code","{","}","true",-1,"icon","icon-link","\n       ","img","comment","div","nuxt-content-highlight","pre","line-numbers","function",2,"nofollow","noopener","noreferrer","_blank","h2","\n    ","설치",3,"h3","=","\n  ","language-javascript","\"","를 참고해주세요.","language-shell","[","]","\u002F\u002F tailwind.config.js",".","property-access","exports","\u002F\u002F ...","blockquote","tailwind.jpeg","Front-End","Peniel Cho","프로젝트-생성시-설치하기","프로젝트 생성시 설치하기","존재하는-프로젝트에-설치하기","존재하는 프로젝트에 설치하기","config-파일-생성-및-커스터마이징","Config 파일 생성 및 커스터마이징","config-파일-생성하기","Config 파일 생성하기","config-파일을-통해-유틸리티-클래스-커스터마이징하기","Config 파일을 통해 유틸리티 클래스 커스터마이징하기","tailwind-typography-설치-및-적용","Tailwind Typography 설치 및 적용","설치-1","root","https:\u002F\u002Ftailwindcss.com\u002Fdocs\u002Finstallation","공식 문서","npm","install","keyword","module","\n      ","\nmodule","\n  theme","\n  plugins","require","(","'@tailwindcss\u002Ftypography'",")","tag","attr-name","attr-value","attr-equals","\n        ","\n              ","본 포스팅은 ","https:\u002F\u002Fwww.blog.penielcho.com\u002F","PENIELog","의 아티클을 재포스팅한 것입니다.","\u002Fblog",".md","2021-11-18T03:59:08.000Z","2021-11-24T14:55:46.000Z","tailwind-css","Tailwind CSS?","zero-러닝커브","Zero 러닝커브","쉬운-configuration-수정","쉬운 Configuration 수정","간단한-responsive-design","간단한 Responsive Design",", ")));