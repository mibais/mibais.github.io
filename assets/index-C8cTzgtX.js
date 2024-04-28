import{C as _r,D as bi}from"./index-DcB7UUez.js";import{bt as lm,bs as hr,bq as z,bu as cm,bv as fm,bw as hm,bx as dm,by as vm,bz as pm,bA as gm,bB as mm,bC as ym,bD as _m,bE as xm,bF as bm,bG as Sm,bH as Em,bI as Cm,aW as Am,bJ as wm,bK as Tm,bL as Mm,bM as Im,bN as km,br as S}from"./antd-CHYaqX98.js";import{A as mr,E as lt,q as ze,g as dt,s as In,n as nr,h as Sn,d as Fr,r as er,u as kn,v as hp,w as Qi,p as cr,x as po,y as il,z as Lm,B as ci,C as al,D as Ji}from"./vec2-Dj6KP9ic.js";function xn(){var e=new mr(16);return mr!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Rm(e){var t=new mr(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Pm(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function dp(e,t,r,n,i,a,o,u,s,l,c,f,h,d,v,p){var g=new mr(16);return g[0]=e,g[1]=t,g[2]=r,g[3]=n,g[4]=i,g[5]=a,g[6]=o,g[7]=u,g[8]=s,g[9]=l,g[10]=c,g[11]=f,g[12]=h,g[13]=d,g[14]=v,g[15]=p,g}function Fm(e,t,r,n,i,a,o,u,s,l,c,f,h,d,v,p,g){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e[4]=a,e[5]=o,e[6]=u,e[7]=s,e[8]=l,e[9]=c,e[10]=f,e[11]=h,e[12]=d,e[13]=v,e[14]=p,e[15]=g,e}function vp(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Om(e,t){if(e===t){var r=t[1],n=t[2],i=t[3],a=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function pp(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15],_=r*u-n*o,y=r*s-i*o,x=r*l-a*o,b=n*s-i*u,k=n*l-a*u,T=i*l-a*s,D=c*p-f*v,U=c*g-h*v,I=c*m-d*v,w=f*g-h*p,M=f*m-d*p,P=h*m-d*g,B=_*P-y*M+x*w+b*I-k*U+T*D;return B?(B=1/B,e[0]=(u*P-s*M+l*w)*B,e[1]=(i*M-n*P-a*w)*B,e[2]=(p*T-g*k+m*b)*B,e[3]=(h*k-f*T-d*b)*B,e[4]=(s*I-o*P-l*U)*B,e[5]=(r*P-i*I+a*U)*B,e[6]=(g*x-v*T-m*y)*B,e[7]=(c*T-h*x+d*y)*B,e[8]=(o*M-u*I+l*D)*B,e[9]=(n*I-r*M-a*D)*B,e[10]=(v*k-p*x+m*_)*B,e[11]=(f*x-c*k-d*_)*B,e[12]=(u*U-o*w-s*D)*B,e[13]=(r*w-n*U+i*D)*B,e[14]=(p*y-v*b-g*_)*B,e[15]=(c*b-f*y+h*_)*B,e):null}function Dm(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15];return e[0]=u*(h*m-d*g)-f*(s*m-l*g)+p*(s*d-l*h),e[1]=-(n*(h*m-d*g)-f*(i*m-a*g)+p*(i*d-a*h)),e[2]=n*(s*m-l*g)-u*(i*m-a*g)+p*(i*l-a*s),e[3]=-(n*(s*d-l*h)-u*(i*d-a*h)+f*(i*l-a*s)),e[4]=-(o*(h*m-d*g)-c*(s*m-l*g)+v*(s*d-l*h)),e[5]=r*(h*m-d*g)-c*(i*m-a*g)+v*(i*d-a*h),e[6]=-(r*(s*m-l*g)-o*(i*m-a*g)+v*(i*l-a*s)),e[7]=r*(s*d-l*h)-o*(i*d-a*h)+c*(i*l-a*s),e[8]=o*(f*m-d*p)-c*(u*m-l*p)+v*(u*d-l*f),e[9]=-(r*(f*m-d*p)-c*(n*m-a*p)+v*(n*d-a*f)),e[10]=r*(u*m-l*p)-o*(n*m-a*p)+v*(n*l-a*u),e[11]=-(r*(u*d-l*f)-o*(n*d-a*f)+c*(n*l-a*u)),e[12]=-(o*(f*g-h*p)-c*(u*g-s*p)+v*(u*h-s*f)),e[13]=r*(f*g-h*p)-c*(n*g-i*p)+v*(n*h-i*f),e[14]=-(r*(u*g-s*p)-o*(n*g-i*p)+v*(n*s-i*u)),e[15]=r*(u*h-s*f)-o*(n*h-i*f)+c*(n*s-i*u),e}function Nm(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],u=e[6],s=e[7],l=e[8],c=e[9],f=e[10],h=e[11],d=e[12],v=e[13],p=e[14],g=e[15],m=t*o-r*a,_=t*u-n*a,y=t*s-i*a,x=r*u-n*o,b=r*s-i*o,k=n*s-i*u,T=l*v-c*d,D=l*p-f*d,U=l*g-h*d,I=c*p-f*v,w=c*g-h*v,M=f*g-h*p;return m*M-_*w+y*I+x*U-b*D+k*T}function Zr(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],v=t[11],p=t[12],g=t[13],m=t[14],_=t[15],y=r[0],x=r[1],b=r[2],k=r[3];return e[0]=y*n+x*u+b*f+k*p,e[1]=y*i+x*s+b*h+k*g,e[2]=y*a+x*l+b*d+k*m,e[3]=y*o+x*c+b*v+k*_,y=r[4],x=r[5],b=r[6],k=r[7],e[4]=y*n+x*u+b*f+k*p,e[5]=y*i+x*s+b*h+k*g,e[6]=y*a+x*l+b*d+k*m,e[7]=y*o+x*c+b*v+k*_,y=r[8],x=r[9],b=r[10],k=r[11],e[8]=y*n+x*u+b*f+k*p,e[9]=y*i+x*s+b*h+k*g,e[10]=y*a+x*l+b*d+k*m,e[11]=y*o+x*c+b*v+k*_,y=r[12],x=r[13],b=r[14],k=r[15],e[12]=y*n+x*u+b*f+k*p,e[13]=y*i+x*s+b*h+k*g,e[14]=y*a+x*l+b*d+k*m,e[15]=y*o+x*c+b*v+k*_,e}function Bm(e,t,r){var n=r[0],i=r[1],a=r[2],o,u,s,l,c,f,h,d,v,p,g,m;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*a+t[12],e[13]=t[1]*n+t[5]*i+t[9]*a+t[13],e[14]=t[2]*n+t[6]*i+t[10]*a+t[14],e[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(o=t[0],u=t[1],s=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],v=t[8],p=t[9],g=t[10],m=t[11],e[0]=o,e[1]=u,e[2]=s,e[3]=l,e[4]=c,e[5]=f,e[6]=h,e[7]=d,e[8]=v,e[9]=p,e[10]=g,e[11]=m,e[12]=o*n+c*i+v*a+t[12],e[13]=u*n+f*i+p*a+t[13],e[14]=s*n+h*i+g*a+t[14],e[15]=l*n+d*i+m*a+t[15]),e}function Um(e,t,r){var n=r[0],i=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function zm(e,t,r,n){var i=n[0],a=n[1],o=n[2],u=Math.hypot(i,a,o),s,l,c,f,h,d,v,p,g,m,_,y,x,b,k,T,D,U,I,w,M,P,B,J;return u<lt?null:(u=1/u,i*=u,a*=u,o*=u,s=Math.sin(r),l=Math.cos(r),c=1-l,f=t[0],h=t[1],d=t[2],v=t[3],p=t[4],g=t[5],m=t[6],_=t[7],y=t[8],x=t[9],b=t[10],k=t[11],T=i*i*c+l,D=a*i*c+o*s,U=o*i*c-a*s,I=i*a*c-o*s,w=a*a*c+l,M=o*a*c+i*s,P=i*o*c+a*s,B=a*o*c-i*s,J=o*o*c+l,e[0]=f*T+p*D+y*U,e[1]=h*T+g*D+x*U,e[2]=d*T+m*D+b*U,e[3]=v*T+_*D+k*U,e[4]=f*I+p*w+y*M,e[5]=h*I+g*w+x*M,e[6]=d*I+m*w+b*M,e[7]=v*I+_*w+k*M,e[8]=f*P+p*B+y*J,e[9]=h*P+g*B+x*J,e[10]=d*P+m*B+b*J,e[11]=v*P+_*B+k*J,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function gp(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[4],o=t[5],u=t[6],s=t[7],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*n,e[5]=o*i+c*n,e[6]=u*i+f*n,e[7]=s*i+h*n,e[8]=l*i-a*n,e[9]=c*i-o*n,e[10]=f*i-u*n,e[11]=h*i-s*n,e}function mp(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],u=t[2],s=t[3],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*n,e[1]=o*i-c*n,e[2]=u*i-f*n,e[3]=s*i-h*n,e[8]=a*n+l*i,e[9]=o*n+c*i,e[10]=u*n+f*i,e[11]=s*n+h*i,e}function $m(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],u=t[2],s=t[3],l=t[4],c=t[5],f=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*n,e[1]=o*i+c*n,e[2]=u*i+f*n,e[3]=s*i+h*n,e[4]=l*i-a*n,e[5]=c*i-o*n,e[6]=f*i-u*n,e[7]=h*i-s*n,e}function yp(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function Vm(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function jm(e,t,r){var n=r[0],i=r[1],a=r[2],o=Math.hypot(n,i,a),u,s,l;return o<lt?null:(o=1/o,n*=o,i*=o,a*=o,u=Math.sin(t),s=Math.cos(t),l=1-s,e[0]=n*n*l+s,e[1]=i*n*l+a*u,e[2]=a*n*l-i*u,e[3]=0,e[4]=n*i*l-a*u,e[5]=i*i*l+s,e[6]=a*i*l+n*u,e[7]=0,e[8]=n*a*l+i*u,e[9]=i*a*l-n*u,e[10]=a*a*l+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function Hm(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Gm(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Wm(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _p(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],u=n+n,s=i+i,l=a+a,c=n*u,f=n*s,h=n*l,d=i*s,v=i*l,p=a*l,g=o*u,m=o*s,_=o*l;return e[0]=1-(d+p),e[1]=f+_,e[2]=h-m,e[3]=0,e[4]=f-_,e[5]=1-(c+p),e[6]=v+g,e[7]=0,e[8]=h+m,e[9]=v-g,e[10]=1-(c+d),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function Ym(e,t){var r=new mr(3),n=-t[0],i=-t[1],a=-t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=n*n+i*i+a*a+o*o;return f>0?(r[0]=(u*o+c*n+s*a-l*i)*2/f,r[1]=(s*o+c*i+l*n-u*a)*2/f,r[2]=(l*o+c*a+u*i-s*n)*2/f):(r[0]=(u*o+c*n+s*a-l*i)*2,r[1]=(s*o+c*i+l*n-u*a)*2,r[2]=(l*o+c*a+u*i-s*n)*2),_p(e,t,r),e}function Xm(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function xp(e,t){var r=t[0],n=t[1],i=t[2],a=t[4],o=t[5],u=t[6],s=t[8],l=t[9],c=t[10];return e[0]=Math.hypot(r,n,i),e[1]=Math.hypot(a,o,u),e[2]=Math.hypot(s,l,c),e}function Zm(e,t){var r=new mr(3);xp(r,t);var n=1/r[0],i=1/r[1],a=1/r[2],o=t[0]*n,u=t[1]*i,s=t[2]*a,l=t[4]*n,c=t[5]*i,f=t[6]*a,h=t[8]*n,d=t[9]*i,v=t[10]*a,p=o+c+v,g=0;return p>0?(g=Math.sqrt(p+1)*2,e[3]=.25*g,e[0]=(f-d)/g,e[1]=(h-s)/g,e[2]=(u-l)/g):o>c&&o>v?(g=Math.sqrt(1+o-c-v)*2,e[3]=(f-d)/g,e[0]=.25*g,e[1]=(u+l)/g,e[2]=(h+s)/g):c>v?(g=Math.sqrt(1+c-o-v)*2,e[3]=(h-s)/g,e[0]=(u+l)/g,e[1]=.25*g,e[2]=(f+d)/g):(g=Math.sqrt(1+v-o-c)*2,e[3]=(u-l)/g,e[0]=(h+s)/g,e[1]=(f+d)/g,e[2]=.25*g),e}function qm(e,t,r,n){var i=t[0],a=t[1],o=t[2],u=t[3],s=i+i,l=a+a,c=o+o,f=i*s,h=i*l,d=i*c,v=a*l,p=a*c,g=o*c,m=u*s,_=u*l,y=u*c,x=n[0],b=n[1],k=n[2];return e[0]=(1-(v+g))*x,e[1]=(h+y)*x,e[2]=(d-_)*x,e[3]=0,e[4]=(h-y)*b,e[5]=(1-(f+g))*b,e[6]=(p+m)*b,e[7]=0,e[8]=(d+_)*k,e[9]=(p-m)*k,e[10]=(1-(f+v))*k,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function Km(e,t,r,n,i){var a=t[0],o=t[1],u=t[2],s=t[3],l=a+a,c=o+o,f=u+u,h=a*l,d=a*c,v=a*f,p=o*c,g=o*f,m=u*f,_=s*l,y=s*c,x=s*f,b=n[0],k=n[1],T=n[2],D=i[0],U=i[1],I=i[2],w=(1-(p+m))*b,M=(d+x)*b,P=(v-y)*b,B=(d-x)*k,J=(1-(h+m))*k,se=(g+_)*k,ce=(v+y)*T,pe=(g-_)*T,H=(1-(h+p))*T;return e[0]=w,e[1]=M,e[2]=P,e[3]=0,e[4]=B,e[5]=J,e[6]=se,e[7]=0,e[8]=ce,e[9]=pe,e[10]=H,e[11]=0,e[12]=r[0]+D-(w*D+B*U+ce*I),e[13]=r[1]+U-(M*D+J*U+pe*I),e[14]=r[2]+I-(P*D+se*U+H*I),e[15]=1,e}function Qm(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,u=n+n,s=i+i,l=r*o,c=n*o,f=n*u,h=i*o,d=i*u,v=i*s,p=a*o,g=a*u,m=a*s;return e[0]=1-f-v,e[1]=c+m,e[2]=h-g,e[3]=0,e[4]=c-m,e[5]=1-l-v,e[6]=d+p,e[7]=0,e[8]=h+g,e[9]=d-p,e[10]=1-l-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Jm(e,t,r,n,i,a,o){var u=1/(r-t),s=1/(i-n),l=1/(a-o);return e[0]=a*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*s,e[6]=0,e[7]=0,e[8]=(r+t)*u,e[9]=(i+n)*s,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function bp(e,t,r,n,i){var a=1/Math.tan(t/2),o;return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(n-i),e[10]=(i+n)*o,e[14]=2*i*n*o):(e[10]=-1,e[14]=-2*n),e}var ey=bp;function ty(e,t,r,n,i){var a=1/Math.tan(t/2),o;return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(n-i),e[10]=i*o,e[14]=i*n*o):(e[10]=-1,e[14]=-n),e}function ry(e,t,r,n){var i=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),u=Math.tan(t.rightDegrees*Math.PI/180),s=2/(o+u),l=2/(i+a);return e[0]=s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((o-u)*s*.5),e[9]=(i-a)*l*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}function Sp(e,t,r,n,i,a,o){var u=1/(t-r),s=1/(n-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+r)*u,e[13]=(i+n)*s,e[14]=(o+a)*l,e[15]=1,e}var ny=Sp;function iy(e,t,r,n,i,a,o){var u=1/(t-r),s=1/(n-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=l,e[11]=0,e[12]=(t+r)*u,e[13]=(i+n)*s,e[14]=a*l,e[15]=1,e}function ay(e,t,r,n){var i,a,o,u,s,l,c,f,h,d,v=t[0],p=t[1],g=t[2],m=n[0],_=n[1],y=n[2],x=r[0],b=r[1],k=r[2];return Math.abs(v-x)<lt&&Math.abs(p-b)<lt&&Math.abs(g-k)<lt?vp(e):(c=v-x,f=p-b,h=g-k,d=1/Math.hypot(c,f,h),c*=d,f*=d,h*=d,i=_*h-y*f,a=y*c-m*h,o=m*f-_*c,d=Math.hypot(i,a,o),d?(d=1/d,i*=d,a*=d,o*=d):(i=0,a=0,o=0),u=f*o-h*a,s=h*i-c*o,l=c*a-f*i,d=Math.hypot(u,s,l),d?(d=1/d,u*=d,s*=d,l*=d):(u=0,s=0,l=0),e[0]=i,e[1]=u,e[2]=c,e[3]=0,e[4]=a,e[5]=s,e[6]=f,e[7]=0,e[8]=o,e[9]=l,e[10]=h,e[11]=0,e[12]=-(i*v+a*p+o*g),e[13]=-(u*v+s*p+l*g),e[14]=-(c*v+f*p+h*g),e[15]=1,e)}function oy(e,t,r,n){var i=t[0],a=t[1],o=t[2],u=n[0],s=n[1],l=n[2],c=i-r[0],f=a-r[1],h=o-r[2],d=c*c+f*f+h*h;d>0&&(d=1/Math.sqrt(d),c*=d,f*=d,h*=d);var v=s*h-l*f,p=l*c-u*h,g=u*f-s*c;return d=v*v+p*p+g*g,d>0&&(d=1/Math.sqrt(d),v*=d,p*=d,g*=d),e[0]=v,e[1]=p,e[2]=g,e[3]=0,e[4]=f*g-h*p,e[5]=h*v-c*g,e[6]=c*p-f*v,e[7]=0,e[8]=c,e[9]=f,e[10]=h,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function uy(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function sy(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function ly(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}function Ep(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function cy(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e}function fy(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e[9]=t[9]+r[9]*n,e[10]=t[10]+r[10]*n,e[11]=t[11]+r[11]*n,e[12]=t[12]+r[12]*n,e[13]=t[13]+r[13]*n,e[14]=t[14]+r[14]*n,e[15]=t[15]+r[15]*n,e}function hy(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function dy(e,t){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],u=e[5],s=e[6],l=e[7],c=e[8],f=e[9],h=e[10],d=e[11],v=e[12],p=e[13],g=e[14],m=e[15],_=t[0],y=t[1],x=t[2],b=t[3],k=t[4],T=t[5],D=t[6],U=t[7],I=t[8],w=t[9],M=t[10],P=t[11],B=t[12],J=t[13],se=t[14],ce=t[15];return Math.abs(r-_)<=lt*Math.max(1,Math.abs(r),Math.abs(_))&&Math.abs(n-y)<=lt*Math.max(1,Math.abs(n),Math.abs(y))&&Math.abs(i-x)<=lt*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(a-b)<=lt*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(o-k)<=lt*Math.max(1,Math.abs(o),Math.abs(k))&&Math.abs(u-T)<=lt*Math.max(1,Math.abs(u),Math.abs(T))&&Math.abs(s-D)<=lt*Math.max(1,Math.abs(s),Math.abs(D))&&Math.abs(l-U)<=lt*Math.max(1,Math.abs(l),Math.abs(U))&&Math.abs(c-I)<=lt*Math.max(1,Math.abs(c),Math.abs(I))&&Math.abs(f-w)<=lt*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(h-M)<=lt*Math.max(1,Math.abs(h),Math.abs(M))&&Math.abs(d-P)<=lt*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(v-B)<=lt*Math.max(1,Math.abs(v),Math.abs(B))&&Math.abs(p-J)<=lt*Math.max(1,Math.abs(p),Math.abs(J))&&Math.abs(g-se)<=lt*Math.max(1,Math.abs(g),Math.abs(se))&&Math.abs(m-ce)<=lt*Math.max(1,Math.abs(m),Math.abs(ce))}var vy=Zr,py=Ep;const gy=Object.freeze(Object.defineProperty({__proto__:null,add:ly,adjoint:Dm,clone:Rm,copy:Pm,create:xn,determinant:Nm,equals:dy,exactEquals:hy,frob:sy,fromQuat:Qm,fromQuat2:Ym,fromRotation:jm,fromRotationTranslation:_p,fromRotationTranslationScale:qm,fromRotationTranslationScaleOrigin:Km,fromScaling:Vm,fromTranslation:yp,fromValues:dp,fromXRotation:Hm,fromYRotation:Gm,fromZRotation:Wm,frustum:Jm,getRotation:Zm,getScaling:xp,getTranslation:Xm,identity:vp,invert:pp,lookAt:ay,mul:vy,multiply:Zr,multiplyScalar:cy,multiplyScalarAndAdd:fy,ortho:ny,orthoNO:Sp,orthoZO:iy,perspective:ey,perspectiveFromFieldOfView:ry,perspectiveNO:bp,perspectiveZO:ty,rotate:zm,rotateX:gp,rotateY:mp,rotateZ:$m,scale:Um,set:Fm,str:uy,sub:py,subtract:Ep,targetTo:oy,translate:Bm,transpose:Om},Symbol.toStringTag,{value:"Module"}));function Cp(){var e=new mr(4);return mr!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function yy(e,t,r,n){var i=new mr(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function w6(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function Ap(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3];return e[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,e[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,e[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,e[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,e}(function(){var e=Cp();return function(t,r,n,i,a,o){var u,s;for(r||(r=4),n||(n=0),i?s=Math.min(i*r+n,t.length):s=t.length,u=n;u<s;u+=r)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],a(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}})();var wp={},Tp={},ol=function(t){return Tp[t]},Ut=function(t,r){Tp[t]=r},_y=function(t){return wp[t]},Nn=function(t,r){wp[t]=r},ul={},go={},mo=34,Hn=10,yo=13;function Mp(e){return new Function("d","return {"+e.map(function(t,r){return JSON.stringify(t)+": d["+r+'] || ""'}).join(",")+"}")}function xy(e,t){var r=Mp(e);return function(n,i){return t(r(n),i,e)}}function sl(e){var t=Object.create(null),r=[];return e.forEach(function(n){for(var i in n)i in t||r.push(t[i]=i)}),r}function Lt(e,t){var r=e+"",n=r.length;return n<t?new Array(t-n+1).join(0)+r:r}function by(e){return e<0?"-"+Lt(-e,6):e>9999?"+"+Lt(e,6):Lt(e,4)}function Sy(e){var t=e.getUTCHours(),r=e.getUTCMinutes(),n=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":by(e.getUTCFullYear())+"-"+Lt(e.getUTCMonth()+1,2)+"-"+Lt(e.getUTCDate(),2)+(i?"T"+Lt(t,2)+":"+Lt(r,2)+":"+Lt(n,2)+"."+Lt(i,3)+"Z":n?"T"+Lt(t,2)+":"+Lt(r,2)+":"+Lt(n,2)+"Z":r||t?"T"+Lt(t,2)+":"+Lt(r,2)+"Z":"")}function Ey(e){var t=new RegExp('["'+e+`
\r]`),r=e.charCodeAt(0);function n(f,h){var d,v,p=i(f,function(g,m){if(d)return d(g,m-1);v=g,d=h?xy(g,h):Mp(g)});return p.columns=v||[],p}function i(f,h){var d=[],v=f.length,p=0,g=0,m,_=v<=0,y=!1;f.charCodeAt(v-1)===Hn&&--v,f.charCodeAt(v-1)===yo&&--v;function x(){if(_)return go;if(y)return y=!1,ul;var k,T=p,D;if(f.charCodeAt(T)===mo){for(;p++<v&&f.charCodeAt(p)!==mo||f.charCodeAt(++p)===mo;);return(k=p)>=v?_=!0:(D=f.charCodeAt(p++))===Hn?y=!0:D===yo&&(y=!0,f.charCodeAt(p)===Hn&&++p),f.slice(T+1,k-1).replace(/""/g,'"')}for(;p<v;){if((D=f.charCodeAt(k=p++))===Hn)y=!0;else if(D===yo)y=!0,f.charCodeAt(p)===Hn&&++p;else if(D!==r)continue;return f.slice(T,k)}return _=!0,f.slice(T,v)}for(;(m=x())!==go;){for(var b=[];m!==ul&&m!==go;)b.push(m),m=x();h&&(b=h(b,g++))==null||d.push(b)}return d}function a(f,h){return f.map(function(d){return h.map(function(v){return c(d[v])}).join(e)})}function o(f,h){return h==null&&(h=sl(f)),[h.map(c).join(e)].concat(a(f,h)).join(`
`)}function u(f,h){return h==null&&(h=sl(f)),a(f,h).join(`
`)}function s(f){return f.map(l).join(`
`)}function l(f){return f.map(c).join(e)}function c(f){return f==null?"":f instanceof Date?Sy(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:n,parseRows:i,format:o,formatBody:u,formatRows:s,formatRow:l,formatValue:c}}var Cy=Ey(","),Ay=Cy.parse;function Si(e,t,r){r===void 0&&(r={});var n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function is(e,t,r){r===void 0&&(r={});for(var n=0,i=e;n<i.length;n++){var a=i[n];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<a[a.length-1].length;o++)if(a[a.length-1][o]!==a[0][o])throw new Error("First and last Position are not equivalent.")}var u={type:"Polygon",coordinates:e};return Si(u,t,r)}function wy(e,t,r){if(r===void 0&&(r={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");var n={type:"LineString",coordinates:e};return Si(n,t,r)}function Ty(e,t){t===void 0&&(t={});var r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function My(e,t,r){r===void 0&&(r={});var n={type:"MultiPolygon",coordinates:e};return Si(n,t,r)}function Ip(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ll(e){return e.type==="Feature"?e.geometry:e}function kp(e,t,r){if(e!==null)for(var n,i,a,o,u,s,l,c=0,f=0,h,d=e.type,v=d==="FeatureCollection",p=d==="Feature",g=v?e.features.length:1,m=0;m<g;m++){l=v?e.features[m].geometry:p?e.geometry:e,h=l?l.type==="GeometryCollection":!1,u=h?l.geometries.length:1;for(var _=0;_<u;_++){var y=0,x=0;if(o=h?l.geometries[_]:l,o!==null){s=o.coordinates;var b=o.type;switch(c=r&&(b==="Polygon"||b==="MultiPolygon")?1:0,b){case null:break;case"Point":if(t(s,f,m,y,x)===!1)return!1;f++,y++;break;case"LineString":case"MultiPoint":for(n=0;n<s.length;n++){if(t(s[n],f,m,y,x)===!1)return!1;f++,b==="MultiPoint"&&y++}b==="LineString"&&y++;break;case"Polygon":case"MultiLineString":for(n=0;n<s.length;n++){for(i=0;i<s[n].length-c;i++){if(t(s[n][i],f,m,y,x)===!1)return!1;f++}b==="MultiLineString"&&y++,b==="Polygon"&&x++}b==="Polygon"&&y++;break;case"MultiPolygon":for(n=0;n<s.length;n++){for(x=0,i=0;i<s[n].length;i++){for(a=0;a<s[n][i].length-c;a++){if(t(s[n][i][a],f,m,y,x)===!1)return!1;f++}x++}y++}break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(kp(o.geometries[n],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Iy(e,t){var r,n,i,a,o,u,s,l,c,f,h=0,d=e.type==="FeatureCollection",v=e.type==="Feature",p=d?e.features.length:1;for(r=0;r<p;r++){for(u=d?e.features[r].geometry:v?e.geometry:e,l=d?e.features[r].properties:v?e.properties:{},c=d?e.features[r].bbox:v?e.bbox:void 0,f=d?e.features[r].id:v?e.id:void 0,s=u?u.type==="GeometryCollection":!1,o=s?u.geometries.length:1,i=0;i<o;i++){if(a=s?u.geometries[i]:u,a===null){if(t(null,h,l,c,f)===!1)return!1;continue}switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(a,h,l,c,f)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<a.geometries.length;n++)if(t(a.geometries[n],h,l,c,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}h++}}function Lp(e,t){Iy(e,function(r,n,i,a,o){var u=r===null?null:r.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return t(Si(r,i,{bbox:a,id:o}),n,0)===!1?!1:void 0}var s;switch(u){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon";break}for(var l=0;l<r.coordinates.length;l++){var c=r.coordinates[l],f={type:s,coordinates:c};if(t(Si(f,i),n,l)===!1)return!1}})}function cl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lm(n.key),n)}}function ne(e,t,r){return t&&cl(e.prototype,t),r&&cl(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ei(e,t){return Ei=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Ei(e,t)}function be(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ei(e,t)}function R(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e,t){if(t&&(hr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},K(e)}function ky(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function Rp(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Rp=function(){return!!e})()}function Ly(e,t,r){if(Rp())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var i=new(e.bind.apply(e,n));return r&&Ei(i,r.prototype),i}function su(e){var t=typeof Map=="function"?new Map:void 0;return su=function(n){if(n===null||!ky(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return Ly(n,arguments,K(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Ei(i,n)},su(e)}var Ry={REGISTERED_PROTOCOLS:{}};function Py(e){var t=Fy();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Fy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var as=function(t){return Ry.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))]},Oy=function(e){be(r,e);var t=Py(r);function r(n,i,a,o){var u;return ie(this,r),u=t.call(this,"AJAXError: ".concat(i," (").concat(n,"): ").concat(a)),u.status=n,u.statusText=i,u.url=a,u.body=o,u}return ne(r)}(su(Error));function Pp(e,t){var r=new XMLHttpRequest,n=Array.isArray(e.url)?e.url[0]:e.url;r.open(e.method||"GET",n,!0),e.type==="arrayBuffer"&&(r.responseType="arraybuffer");for(var i in e.headers)e.headers.hasOwnProperty(i)&&r.setRequestHeader(i,e.headers[i]);return e.type==="json"&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials=e.credentials==="include",r.onerror=function(){t(new Error(r.statusText))},r.onload=function(){if((r.status>=200&&r.status<300||r.status===0)&&r.response!==null){var a=r.response;if(e.type==="json")try{a=JSON.parse(r.response)}catch(u){return t(u)}t(null,a,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"),r)}else{var o=new Blob([r.response],{type:r.getResponseHeader("Content-Type")});t(new Oy(r.status,r.statusText,n.toString(),o))}},r.cancel=r.abort,r.send(e.body),r}function Dy(e){return new Promise(function(t,r){Pp(e,function(n,i,a,o,u){n?r({err:n,data:null,xhr:u}):t({err:null,data:i,cacheControl:a,expires:o,xhr:u})})})}function os(e,t){return Pp(e,t)}var Ny=function(t,r){var n=as(t.url)||os;return n(z(z({},t),{},{type:"json"}),r)},us=function(t,r){var n=as(t.url)||os;return n(z(z({},t),{},{type:"arrayBuffer"}),r)},By=function(t,r){return os(z(z({},t),{},{method:"GET"}),r)},fl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function Fp(e,t){var r=new window.Image,n=window.URL||window.webkitURL;r.crossOrigin="anonymous",r.onload=function(){t(null,r),n.revokeObjectURL(r.src),r.onload=null,window.requestAnimationFrame(function(){r.src=fl})},r.onerror=function(){return t(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var i=new Blob([new Uint8Array(e)],{type:"image/png"});r.src=e.byteLength?n.createObjectURL(i):fl}function Op(e,t){var r=new Blob([new Uint8Array(e)],{type:"image/png"});createImageBitmap(r).then(function(n){t(null,n)}).catch(function(n){t(new Error("Could not load image because of ".concat(n.message,". Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.")))})}var lu=function(t,r,n){var i=function(o,u){if(o)r(o);else if(u){var s=typeof createImageBitmap=="function",l=n?n(u):u;s?Op(l,r):Fp(l,r)}};return t.type==="json"?Ny(t,i):us(t,i)},Uy=function(t,r){var n=typeof createImageBitmap=="function";n?Op(t,r):Fp(t,r)};function ss(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Dp(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function zi(){}var Ci=.7,Ca=1/Ci,En="\\s*([+-]?\\d+)\\s*",Ai="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",ir="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",zy=/^#([0-9a-f]{3,8})$/,$y=new RegExp("^rgb\\("+[En,En,En]+"\\)$"),Vy=new RegExp("^rgb\\("+[ir,ir,ir]+"\\)$"),jy=new RegExp("^rgba\\("+[En,En,En,Ai]+"\\)$"),Hy=new RegExp("^rgba\\("+[ir,ir,ir,Ai]+"\\)$"),Gy=new RegExp("^hsl\\("+[Ai,ir,ir]+"\\)$"),Wy=new RegExp("^hsla\\("+[Ai,ir,ir,Ai]+"\\)$"),hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ss(zi,Ln,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:dl,formatHex:dl,formatHsl:Yy,formatRgb:vl,toString:vl});function dl(){return this.rgb().formatHex()}function Yy(){return Np(this).formatHsl()}function vl(){return this.rgb().formatRgb()}function Ln(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=zy.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?pl(t):r===3?new Bt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?ea(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?ea(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=$y.exec(e))?new Bt(t[1],t[2],t[3],1):(t=Vy.exec(e))?new Bt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=jy.exec(e))?ea(t[1],t[2],t[3],t[4]):(t=Hy.exec(e))?ea(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Gy.exec(e))?yl(t[1],t[2]/100,t[3]/100,1):(t=Wy.exec(e))?yl(t[1],t[2]/100,t[3]/100,t[4]):hl.hasOwnProperty(e)?pl(hl[e]):e==="transparent"?new Bt(NaN,NaN,NaN,0):null}function pl(e){return new Bt(e>>16&255,e>>8&255,e&255,1)}function ea(e,t,r,n){return n<=0&&(e=t=r=NaN),new Bt(e,t,r,n)}function Xy(e){return e instanceof zi||(e=Ln(e)),e?(e=e.rgb(),new Bt(e.r,e.g,e.b,e.opacity)):new Bt}function Aa(e,t,r,n){return arguments.length===1?Xy(e):new Bt(e,t,r,n??1)}function Bt(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}ss(Bt,Aa,Dp(zi,{brighter:function(e){return e=e==null?Ca:Math.pow(Ca,e),new Bt(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ci:Math.pow(Ci,e),new Bt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:gl,formatHex:gl,formatRgb:ml,toString:ml}));function gl(){return"#"+_o(this.r)+_o(this.g)+_o(this.b)}function ml(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function _o(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function yl(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new tr(e,t,r,n)}function Np(e){if(e instanceof tr)return new tr(e.h,e.s,e.l,e.opacity);if(e instanceof zi||(e=Ln(e)),!e)return new tr;if(e instanceof tr)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=NaN,u=a-i,s=(a+i)/2;return u?(t===a?o=(r-n)/u+(r<n)*6:r===a?o=(n-t)/u+2:o=(t-r)/u+4,u/=s<.5?a+i:2-a-i,o*=60):u=s>0&&s<1?0:o,new tr(o,u,s,e.opacity)}function Zy(e,t,r,n){return arguments.length===1?Np(e):new tr(e,t,r,n??1)}function tr(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}ss(tr,Zy,Dp(zi,{brighter:function(e){return e=e==null?Ca:Math.pow(Ca,e),new tr(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ci:Math.pow(Ci,e),new tr(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new Bt(xo(e>=240?e-240:e+120,i,n),xo(e,i,n),xo(e<120?e+240:e-120,i,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function xo(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}function qe(e){var t=Ln(e),r=[0,0,0,0];return t!=null&&(r[0]=t.r/255,r[1]=t.g/255,r[2]=t.b/255,r[3]=t.opacity),r}function qr(e){var t=e&&e[0],r=e&&e[1],n=e&&e[2],i=t+r*256+n*65536-1;return i}function yr(e){return[e+1&255,e+1>>8&255,e+1>>8>>8&255]}function qy(e){var t=window.document.createElement("canvas"),r=t.getContext("2d");t.width=256,t.height=1;for(var n=null,i=r.createLinearGradient(0,0,256,1),a=e.positions[0],o=e.positions[e.positions.length-1],u=0;u<e.colors.length;++u){var s=(e.positions[u]-a)/(o-a);i.addColorStop(s,e.colors[u])}return r.fillStyle=i,r.fillRect(0,0,256,1),n=new Uint8ClampedArray(r.getImageData(0,0,256,1).data),t=null,r=null,{data:n,width:256,height:1}}function Ky(e,t){var r=window.document.createElement("canvas"),n=r.getContext("2d");r.width=256,r.height=1,console.log("colorRamp",r);for(var i=n.createLinearGradient(0,0,256,1),a=t[1]-t[0],o=0;o<e.colors.length;++o){var u=Math.max((e.positions[o]-t[0])/a,0);i.addColorStop(u,e.colors[o])}n.fillStyle=i,n.fillRect(0,0,256,1);var s=n.getImageData(0,0,256,1).data,l=ls(n,s);return r=null,n=null,l}function Qy(e){var t=window.document.createElement("canvas"),r=t.getContext("2d");t.width=256,t.height=1;var n=r.createImageData(256,1);return n.data.fill(0),e.positions.forEach(function(i,a){var o=qe(e.colors[a]);n.data[i*4+0]=o[0]*255,n.data[i*4+1]=o[1]*255,n.data[i*4+2]=o[2]*255,n.data[i*4+3]=o[3]*255}),t=null,r=null,n}function Jy(e){var t=window.document.createElement("canvas"),r=t.getContext("2d");r.globalAlpha=1,t.width=256,t.height=1;for(var n=256/e.colors.length,i=0;i<e.colors.length;i++)r.beginPath(),r.lineWidth=2,r.strokeStyle=e.colors[i],r.moveTo(i*n,0),r.lineTo((i+1)*n,0),r.stroke();var a=r.getImageData(0,0,256,1).data,o=ls(r,a);return t=null,r=null,o}function e1(e,t){var r=window.document.createElement("canvas"),n=r.getContext("2d");n.globalAlpha=1,r.width=256,r.height=1;var i=t[1]-t[0];e.positions.length-e.colors.length!==1&&console.warn("positions 的数字个数应当比 colors 的样式多一个,poisitions 的首尾值一般为数据的最大最新值");for(var a=0;a<e.colors.length;a++)n.beginPath(),n.lineWidth=2,n.strokeStyle=e.colors[a],n.moveTo((e.positions[a]-t[0])/i*255,0),n.lineTo((e.positions[a+1]-t[0])/i*255,0),n.stroke();var o=n.getImageData(0,0,256,1).data,u=ls(n,o);return r=null,n=null,u}function ls(e,t){for(var r=e.createImageData(256,1),n=0;n<r.data.length;n+=4)r.data[n+0]=t[n+0],r.data[n+1]=t[n+1],r.data[n+2]=t[n+2],r.data[n+3]=t[n+3];return r}function cs(e){switch(e.type){case"cat":return[0,255];default:return[0,1]}}var Vr={BACK:1029,FRONT:1028};function fs(e){switch(e){case"GAODE1.x":return Vr.BACK;case"GAODE2.x":return Vr.BACK;case"MAPBOX":return Vr.FRONT;case"SIMPLE":return Vr.FRONT;case"GLOBEL":return Vr.BACK;case"DEBAULT":return Vr.FRONT;default:return Vr.FRONT}}function cu(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t1(e){if(Array.isArray(e))return cu(e)}function r1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bp(e,t){if(e){if(typeof e=="string")return cu(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return cu(e,t)}}function n1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(e){return t1(e)||r1(e)||Bp(e)||n1()}function i1(e){if(Array.isArray(e))return e}function a1(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],s=!0,l=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(c){l=!0,i=c}finally{try{if(!s&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw i}}return u}}function o1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(e,t){return i1(e)||a1(e,t)||Bp(e,t)||o1()}var Ze={isNil:cm,merge:fm,throttle:hm,isString:dm,debounce:vm,pull:pm,isTypedArray:gm,isPlainObject:mm,isNumber:ym,isBoolean:_m,isEqual:xm,cloneDeep:bm,uniq:Sm,clamp:Em,upperFirst:Cm,get:Am,mergeWith:wm,isFunction:Tm,isObject:Mm,isUndefined:Im,camelCase:km};function T6(e){var t=e;return typeof e=="string"&&(t=window.document.getElementById(e)),t}function Up(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function zp(e){return Up(e).split(/\s+/)}function u1(e){var t,r=(t=document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!r)return e[0];for(var n in e)if(e[n]&&e[n]in r)return e[n];return e[0]}function Or(e,t,r){var n=window.document.createElement(e);return t&&(n.className=t||""),r&&r.appendChild(n),n}function wa(e){var t=e.parentNode;t&&t.removeChild(e)}function yi(e,t){if(e.classList!==void 0)for(var r=zp(t),n=0,i=r.length;n<i;n++)e.classList.add(r[n]);else if(!s1(e,t)){var a=hs(e);$p(e,(a?a+" ":"")+t)}}function fu(e,t){if(e.classList!==void 0){var r=zp(t);r.forEach(function(n){e.classList.remove(n)})}else $p(e,Up((" "+hs(e)+" ").replace(" "+t+" "," ")))}function s1(e,t){if(e.classList!==void 0)return e.classList.contains(t);var r=hs(e);return r.length>0&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(r)}function $p(e,t){e instanceof HTMLElement?e.className=t:e.className.baseVal=t}function hs(e){return e instanceof SVGElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}u1(["transform","WebkitTransform"]);function l1(){var e,t=window.document.querySelector('meta[name="viewport"]');if(!t)return 1;var r=(e=t.content)===null||e===void 0?void 0:e.split(","),n=r.find(function(i){var a=i.split("="),o=Ie(a,1),u=o[0];return u==="initial-scale"});return n?n.split("=")[1]*1:1}var nt=l1()<1?1:window.devicePixelRatio;function c1(e,t){e.setAttribute("style","".concat(e.style.cssText).concat(t))}function f1(e){return Object.entries(e).map(function(t){var r=Ie(t,2),n=r[0],i=r[1];return"".concat(n,": ").concat(i)}).join(";")}function h1(e,t){return{left:e.left-t.left,top:e.top-t.top,right:t.left+t.width-e.left-e.width,bottom:t.top+t.height-e.top-e.height}}function d1(e){e.innerHTML=""}function M6(e){e.setAttribute("draggable","false")}function v1(e,t){for(var r=Array.isArray(t)?t:[t],n=e;n instanceof Element&&n!==window.document.body;){var i,a;if(r.find(function(o){var u;return(u=n)===null||u===void 0?void 0:u.matches(o)}))return n;n=(i=(a=n)===null||a===void 0?void 0:a.parentElement)!==null&&i!==void 0?i:null}}var bo;function p1(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap}var hu=(bo=navigator)===null||bo===void 0?void 0:bo.userAgent,I6=!!hu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);hu.indexOf("Android")>-1||hu.indexOf("Adr")>-1;function du(e){var t=[1/0,1/0,-1/0,-1/0];return kp(e,function(r){t[0]>r[0]&&(t[0]=r[0]),t[1]>r[1]&&(t[1]=r[1]),t[2]<r[0]&&(t[2]=r[0]),t[3]<r[1]&&(t[3]=r[1])}),t}du.default=du;function So(e){return typeof e=="number"}var _l=2*Math.PI*6378137/2;function g1(e,t){var r=Ie(t,4),n=r[0],i=r[1],a=r[2],o=r[3];return e.lng>n&&e.lng<=a&&e.lat>i&&e.lat<=o}function m1(e){var t=[1/0,1/0,-1/0,-1/0];return e.forEach(function(r){var n=r.coordinates;Vp(t,n)}),t}function Vp(e,t){return Array.isArray(t[0])?t.forEach(function(r){Vp(e,r)}):(e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])),e}function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{enable:!0,decimal:1};e=x1(e,t);var n=e[0],i=e[1],a=n*_l/180,o=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return o=o*_l/180,r.enable&&(a=Number(a.toFixed(r.decimal)),o=Number(o.toFixed(r.decimal))),e.length===3?[a,o,e[2]]:[a,o]}function y1(e){if(e==null)throw new Error("lng is required");return(e>180||e<-180)&&(e=e%360,e>180&&(e=-360+e),e<-180&&(e=360+e),e===0&&(e=0)),e}function _1(e){if(e==null)throw new Error("lat is required");return(e>90||e<-90)&&(e=e%180,e>90&&(e=-180+e),e<-90&&(e=180+e),e===0&&(e=0)),e}function x1(e,t){if(t===!1)return e;var r=y1(e[0]),n=_1(e[1]);return n>85&&(n=85),n<-85&&(n=-85),e.length===3?[r,n,e[2]]:[r,n]}function ot(e){var t=85.0511287798,r=Math.max(Math.min(t,e[1]),-t),n=256<<20,i=Math.PI/180,a=e[0]*i,o=r*i;o=Math.log(Math.tan(Math.PI/4+o/2));var u=.5/Math.PI,s=.5,l=-.5/Math.PI;return i=.5,a=n*(u*a+s),o=n*(l*o+i),[Math.floor(a),Math.floor(o)]}function ds(e,t){var r=Math.abs(e[1][1]-e[0][1])*t,n=Math.abs(e[1][0]-e[0][0])*t;return[[e[0][0]-n,e[0][1]-r],[e[1][0]+n,e[1][1]+r]]}function jp(e,t){return e[0][0]<=t[0][0]&&e[0][1]<=t[0][1]&&e[1][0]>=t[1][0]&&e[1][1]>=t[1][1]}function Ta(e){return[[e[0],e[1]],[e[2],e[3]]]}function b1(e){var t=S1(e,[0,0]);return[e[0]/t,e[1]/t]}function S1(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function vr(e){if(So(e[0]))return e;if(So(e[0][0]))throw new Error("当前数据不支持标注");if(So(e[0][0][0])){var t=e,r=0,n=0,i=0;return t.forEach(function(a){a.forEach(function(o){r+=o[0],n+=o[1],i++})}),[r/i,n/i,0]}else throw new Error("当前数据不支持标注")}function E1(e){for(var t=e[0],r=e[1],n=e[0],i=e[1],a=0,o=0,u=0,s=0;s<e.length;s+=2){var l=e[s],c=e[s+1];l&&c&&(t=Math.max(l,t),r=Math.max(c,r),n=Math.min(l,n),i=Math.min(c,i),a+=l,o+=c,u++)}return{center:[a/u,o/u],radius:Math.sqrt(Math.pow(t-n,2)+Math.pow(r-i,2))/2}}function k6(e){return du(Ty([wy(e)]))}function C1(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)})}var A1=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:50,r=arguments.length>1?arguments[1]:void 0;ie(this,e),this.limit=t,this.destroy=r||this.defaultDestroy,this.order=[],this.clear()}return ne(e,[{key:"clear",value:function(){var r=this;this.order.forEach(function(n){r.delete(n)}),this.cache={},this.order=[]}},{key:"get",value:function(r){var n=this.cache[r];return n&&(this.deleteOrder(r),this.appendOrder(r)),n}},{key:"set",value:function(r,n){this.cache[r]?(this.delete(r),this.cache[r]=n,this.appendOrder(r)):(Object.keys(this.cache).length===this.limit&&this.delete(this.order[0]),this.cache[r]=n,this.appendOrder(r))}},{key:"delete",value:function(r){var n=this.cache[r];n&&(this.deleteCache(r),this.deleteOrder(r),this.destroy(n,r))}},{key:"deleteCache",value:function(r){delete this.cache[r]}},{key:"deleteOrder",value:function(r){var n=this.order.findIndex(function(i){return i===r});n>=0&&this.order.splice(n,1)}},{key:"appendOrder",value:function(r){this.order.push(r)}},{key:"defaultDestroy",value:function(r,n){return null}}]),e}();function w1(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]>t&&(t=e[r]);return t*1}function T1(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]<t&&(t=e[r]);return t*1}function Hp(e){if(e.length===0)return 0;for(var t=e[0]*1,r=1;r<e.length;r++)t+=e[r]*1;return t}function M1(e){if(e.length===0)throw new Error("mean requires at least one data point");return Hp(e)/e.length}function I1(e){if(e.length===0)throw new Error("mean requires at least one data point");if(e.length<3)return e[0];e.sort();for(var t=e[0],r=NaN,n=0,i=1,a=1;a<e.length+1;a++)e[a]!==t?(i>n&&(n=i,r=t),i=1,t=e[a]):i++;return r*1}var Gp={min:T1,max:w1,mean:M1,sum:Hp,mode:I1};function Wp(e,t){return e.map(function(r){return r[t]})}function xl(e,t,r,n,i,a,o){try{var u=e[a](o),s=u.value}catch(l){r(l);return}u.done?t(s):Promise.resolve(s).then(n,i)}function Y(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(s){xl(a,n,i,o,u,"next",s)}function u(s){xl(a,n,i,o,u,"throw",s)}o(void 0)})}}var Yp={exports:{}},Xp={exports:{}};(function(e){function t(r){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Xp);var k1=Xp.exports;(function(e){var t=k1.default;function r(){e.exports=r=function(){return i},e.exports.__esModule=!0,e.exports.default=e.exports;var n,i={},a=Object.prototype,o=a.hasOwnProperty,u=Object.defineProperty||function(H,V,Z){H[V]=Z.value},s=typeof Symbol=="function"?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(H,V,Z){return Object.defineProperty(H,V,{value:Z,enumerable:!0,configurable:!0,writable:!0}),H[V]}try{h({},"")}catch{h=function(Z,X,fe){return Z[X]=fe}}function d(H,V,Z,X){var fe=V&&V.prototype instanceof x?V:x,ue=Object.create(fe.prototype),he=new ce(X||[]);return u(ue,"_invoke",{value:P(H,Z,he)}),ue}function v(H,V,Z){try{return{type:"normal",arg:H.call(V,Z)}}catch(X){return{type:"throw",arg:X}}}i.wrap=d;var p="suspendedStart",g="suspendedYield",m="executing",_="completed",y={};function x(){}function b(){}function k(){}var T={};h(T,l,function(){return this});var D=Object.getPrototypeOf,U=D&&D(D(pe([])));U&&U!==a&&o.call(U,l)&&(T=U);var I=k.prototype=x.prototype=Object.create(T);function w(H){["next","throw","return"].forEach(function(V){h(H,V,function(Z){return this._invoke(V,Z)})})}function M(H,V){function Z(fe,ue,he,Be){var Le=v(H[fe],H,ue);if(Le.type!=="throw"){var Qe=Le.arg,$=Qe.value;return $&&t($)=="object"&&o.call($,"__await")?V.resolve($.__await).then(function(ae){Z("next",ae,he,Be)},function(ae){Z("throw",ae,he,Be)}):V.resolve($).then(function(ae){Qe.value=ae,he(Qe)},function(ae){return Z("throw",ae,he,Be)})}Be(Le.arg)}var X;u(this,"_invoke",{value:function(ue,he){function Be(){return new V(function(Le,Qe){Z(ue,he,Le,Qe)})}return X=X?X.then(Be,Be):Be()}})}function P(H,V,Z){var X=p;return function(fe,ue){if(X===m)throw new Error("Generator is already running");if(X===_){if(fe==="throw")throw ue;return{value:n,done:!0}}for(Z.method=fe,Z.arg=ue;;){var he=Z.delegate;if(he){var Be=B(he,Z);if(Be){if(Be===y)continue;return Be}}if(Z.method==="next")Z.sent=Z._sent=Z.arg;else if(Z.method==="throw"){if(X===p)throw X=_,Z.arg;Z.dispatchException(Z.arg)}else Z.method==="return"&&Z.abrupt("return",Z.arg);X=m;var Le=v(H,V,Z);if(Le.type==="normal"){if(X=Z.done?_:g,Le.arg===y)continue;return{value:Le.arg,done:Z.done}}Le.type==="throw"&&(X=_,Z.method="throw",Z.arg=Le.arg)}}}function B(H,V){var Z=V.method,X=H.iterator[Z];if(X===n)return V.delegate=null,Z==="throw"&&H.iterator.return&&(V.method="return",V.arg=n,B(H,V),V.method==="throw")||Z!=="return"&&(V.method="throw",V.arg=new TypeError("The iterator does not provide a '"+Z+"' method")),y;var fe=v(X,H.iterator,V.arg);if(fe.type==="throw")return V.method="throw",V.arg=fe.arg,V.delegate=null,y;var ue=fe.arg;return ue?ue.done?(V[H.resultName]=ue.value,V.next=H.nextLoc,V.method!=="return"&&(V.method="next",V.arg=n),V.delegate=null,y):ue:(V.method="throw",V.arg=new TypeError("iterator result is not an object"),V.delegate=null,y)}function J(H){var V={tryLoc:H[0]};1 in H&&(V.catchLoc=H[1]),2 in H&&(V.finallyLoc=H[2],V.afterLoc=H[3]),this.tryEntries.push(V)}function se(H){var V=H.completion||{};V.type="normal",delete V.arg,H.completion=V}function ce(H){this.tryEntries=[{tryLoc:"root"}],H.forEach(J,this),this.reset(!0)}function pe(H){if(H||H===""){var V=H[l];if(V)return V.call(H);if(typeof H.next=="function")return H;if(!isNaN(H.length)){var Z=-1,X=function fe(){for(;++Z<H.length;)if(o.call(H,Z))return fe.value=H[Z],fe.done=!1,fe;return fe.value=n,fe.done=!0,fe};return X.next=X}}throw new TypeError(t(H)+" is not iterable")}return b.prototype=k,u(I,"constructor",{value:k,configurable:!0}),u(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,f,"GeneratorFunction"),i.isGeneratorFunction=function(H){var V=typeof H=="function"&&H.constructor;return!!V&&(V===b||(V.displayName||V.name)==="GeneratorFunction")},i.mark=function(H){return Object.setPrototypeOf?Object.setPrototypeOf(H,k):(H.__proto__=k,h(H,f,"GeneratorFunction")),H.prototype=Object.create(I),H},i.awrap=function(H){return{__await:H}},w(M.prototype),h(M.prototype,c,function(){return this}),i.AsyncIterator=M,i.async=function(H,V,Z,X,fe){fe===void 0&&(fe=Promise);var ue=new M(d(H,V,Z,X),fe);return i.isGeneratorFunction(V)?ue:ue.next().then(function(he){return he.done?he.value:ue.next()})},w(I),h(I,f,"Generator"),h(I,l,function(){return this}),h(I,"toString",function(){return"[object Generator]"}),i.keys=function(H){var V=Object(H),Z=[];for(var X in V)Z.push(X);return Z.reverse(),function fe(){for(;Z.length;){var ue=Z.pop();if(ue in V)return fe.value=ue,fe.done=!1,fe}return fe.done=!0,fe}},i.values=pe,ce.prototype={constructor:ce,reset:function(V){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(se),!V)for(var Z in this)Z.charAt(0)==="t"&&o.call(this,Z)&&!isNaN(+Z.slice(1))&&(this[Z]=n)},stop:function(){this.done=!0;var V=this.tryEntries[0].completion;if(V.type==="throw")throw V.arg;return this.rval},dispatchException:function(V){if(this.done)throw V;var Z=this;function X(Qe,$){return he.type="throw",he.arg=V,Z.next=Qe,$&&(Z.method="next",Z.arg=n),!!$}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ue=this.tryEntries[fe],he=ue.completion;if(ue.tryLoc==="root")return X("end");if(ue.tryLoc<=this.prev){var Be=o.call(ue,"catchLoc"),Le=o.call(ue,"finallyLoc");if(Be&&Le){if(this.prev<ue.catchLoc)return X(ue.catchLoc,!0);if(this.prev<ue.finallyLoc)return X(ue.finallyLoc)}else if(Be){if(this.prev<ue.catchLoc)return X(ue.catchLoc,!0)}else{if(!Le)throw new Error("try statement without catch or finally");if(this.prev<ue.finallyLoc)return X(ue.finallyLoc)}}}},abrupt:function(V,Z){for(var X=this.tryEntries.length-1;X>=0;--X){var fe=this.tryEntries[X];if(fe.tryLoc<=this.prev&&o.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ue=fe;break}}ue&&(V==="break"||V==="continue")&&ue.tryLoc<=Z&&Z<=ue.finallyLoc&&(ue=null);var he=ue?ue.completion:{};return he.type=V,he.arg=Z,ue?(this.method="next",this.next=ue.finallyLoc,y):this.complete(he)},complete:function(V,Z){if(V.type==="throw")throw V.arg;return V.type==="break"||V.type==="continue"?this.next=V.arg:V.type==="return"?(this.rval=this.arg=V.arg,this.method="return",this.next="end"):V.type==="normal"&&Z&&(this.next=Z),y},finish:function(V){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var X=this.tryEntries[Z];if(X.finallyLoc===V)return this.complete(X.completion,X.afterLoc),se(X),y}},catch:function(V){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var X=this.tryEntries[Z];if(X.tryLoc===V){var fe=X.completion;if(fe.type==="throw"){var ue=fe.arg;se(X)}return ue}}throw new Error("illegal catch attempt")},delegateYield:function(V,Z,X){return this.delegate={iterator:pe(V),resultName:Z,nextLoc:X},this.method==="next"&&(this.arg=n),y}},i}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Yp);var L1=Yp.exports,ga=L1(),R1=ga;try{regeneratorRuntime=ga}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ga:Function("r","regeneratorRuntime = r")(ga)}const A=_r(R1);function P1(e,t){t===void 0&&(t={});var r=Number(e[0]),n=Number(e[1]),i=Number(e[2]),a=Number(e[3]);if(e.length===6)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var o=[r,n],u=[r,a],s=[i,a],l=[i,n];return is([[o,l,s,u,o]],t.properties,{bbox:e,id:t.id})}var Zp={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(s,l,c){this.fn=s,this.context=l,this.once=c||!1}function a(s,l,c,f,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,f||s,h),v=r?r+l:l;return s._events[v]?s._events[v].fn?s._events[v]=[s._events[v],d]:s._events[v].push(d):(s._events[v]=d,s._eventsCount++),s}function o(s,l){--s._eventsCount===0?s._events=new n:delete s._events[l]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var l=[],c,f;if(this._eventsCount===0)return l;for(f in c=this._events)t.call(c,f)&&l.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},u.prototype.listeners=function(l){var c=r?r+l:l,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,d=f.length,v=new Array(d);h<d;h++)v[h]=f[h].fn;return v},u.prototype.listenerCount=function(l){var c=r?r+l:l,f=this._events[c];return f?f.fn?1:f.length:0},u.prototype.emit=function(l,c,f,h,d,v){var p=r?r+l:l;if(!this._events[p])return!1;var g=this._events[p],m=arguments.length,_,y;if(g.fn){switch(g.once&&this.removeListener(l,g.fn,void 0,!0),m){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,f),!0;case 4:return g.fn.call(g.context,c,f,h),!0;case 5:return g.fn.call(g.context,c,f,h,d),!0;case 6:return g.fn.call(g.context,c,f,h,d,v),!0}for(y=1,_=new Array(m-1);y<m;y++)_[y-1]=arguments[y];g.fn.apply(g.context,_)}else{var x=g.length,b;for(y=0;y<x;y++)switch(g[y].once&&this.removeListener(l,g[y].fn,void 0,!0),m){case 1:g[y].fn.call(g[y].context);break;case 2:g[y].fn.call(g[y].context,c);break;case 3:g[y].fn.call(g[y].context,c,f);break;case 4:g[y].fn.call(g[y].context,c,f,h);break;default:if(!_)for(b=1,_=new Array(m-1);b<m;b++)_[b-1]=arguments[b];g[y].fn.apply(g[y].context,_)}}return!0},u.prototype.on=function(l,c,f){return a(this,l,c,f,!1)},u.prototype.once=function(l,c,f){return a(this,l,c,f,!0)},u.prototype.removeListener=function(l,c,f,h){var d=r?r+l:l;if(!this._events[d])return this;if(!c)return o(this,d),this;var v=this._events[d];if(v.fn)v.fn===c&&(!h||v.once)&&(!f||v.context===f)&&o(this,d);else{for(var p=0,g=[],m=v.length;p<m;p++)(v[p].fn!==c||h&&!v[p].once||f&&v[p].context!==f)&&g.push(v[p]);g.length?this._events[d]=g.length===1?g[0]:g:o(this,d)}return this},u.prototype.removeAllListeners=function(l){var c;return l?(c=r?r+l:l,this._events[c]&&o(this,c)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u})(Zp);var zt=Zp.exports;const vs=_r(zt);var ma=function(e){return e.Realtime="realtime",e.Overlap="overlap",e.Replace="replace",e}({}),Xt=function(e){return e.Loading="Loading",e.Loaded="Loaded",e.Failure="Failure",e.Cancelled="Cancelled",e}({}),qp=0,bl=1,Ha=2;function F1(e){e.forEach(function(t){t.isCurrent&&(t.isVisible=t.isLoaded)})}function O1(e){e.forEach(function(t){t.properties.state=qp}),e.forEach(function(t){t.isCurrent&&!Kp(t)&&ps(t)}),e.forEach(function(t){t.isVisible=!!(t.properties.state&Ha)})}function D1(e){e.forEach(function(r){r.properties.state=qp}),e.forEach(function(r){r.isCurrent&&Kp(r)});var t=e.slice().sort(function(r,n){return r.z-n.z});t.forEach(function(r){r.isVisible=!!(r.properties.state&Ha),r.children.length&&(r.isVisible||r.properties.state&bl)?r.children.forEach(function(n){n.properties.state=bl}):r.isCurrent&&ps(r)})}function Kp(e){for(;e;){if(e.isLoaded)return e.properties.state|=Ha,!0;e=e.parent}return!1}function ps(e){e.children.forEach(function(t){t.isLoaded?t.properties.state|=Ha:ps(t)})}var Gn,Qp=[-1/0,-1/0,1/0,1/0],N1=.2,B1=5,U1=(Gn={},S(Gn,ma.Realtime,F1),S(Gn,ma.Overlap,O1),S(Gn,ma.Replace,D1),Gn),z1=function(){};function vu(e,t,r){var n=Math.floor((e+180)/360*Math.pow(2,r)),i=Math.floor((1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,r));return[n,i]}function Sl(e,t,r){var n=e/Math.pow(2,r)*360-180,i=Math.PI-2*Math.PI*t/Math.pow(2,r),a=180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)));return[n,a]}var Jp=function(t,r,n){var i=Sl(t,r,n),a=Ie(i,2),o=a[0],u=a[1],s=Sl(t+1,r+1,n),l=Ie(s,2),c=l[0],f=l[1];return[o,f,c,u]};function $1(e){var t=e.zoom,r=e.latLonBounds,n=e.maxZoom,i=n===void 0?1/0:n,a=e.minZoom,o=a===void 0?0:a,u=e.zoomOffset,s=u===void 0?0:u,l=e.extent,c=l===void 0?Qp:l,f=Math.ceil(t)+s;if(Number.isFinite(o)&&f<o)return[];Number.isFinite(i)&&f>i&&(f=i);for(var h=Ie(r,4),d=h[0],v=h[1],p=h[2],g=h[3],m=[Math.max(d,c[0]),Math.max(v,c[1]),Math.min(p,c[2]),Math.min(g,c[3])],_=[],y=vu(m[0],m[1],f),x=Ie(y,2),b=x[0],k=x[1],T=vu(m[2],m[3],f),D=Ie(T,2),U=D[0],I=D[1],w=b;w<=U;w++)for(var M=I;M<=k;M++)_.push({x:w,y:M,z:f});var P=(U+b)/2,B=(k+I)/2,J=function(ce,pe){return Math.abs(ce-P)+Math.abs(pe-B)};return _.sort(function(se,ce){return J(se.x,se.y)-J(ce.x,ce.y)}),_}var V1=function(t,r,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a=Math.pow(2,n),o=a-1,u=a,s=t,l=r;return i&&(s<0?s=s+u:s>o&&(s=s%u)),{warpX:s,warpY:l}};function j1(e){var t=H1();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function H1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var G1=function(e){be(r,e);var t=j1(r);function r(n){var i;ie(this,r),i=t.call(this),S(R(i),"tileSize",256),S(R(i),"isVisible",!1),S(R(i),"isCurrent",!1),S(R(i),"isVisibleChange",!1),S(R(i),"loadedLayers",0),S(R(i),"isLayerLoaded",!1),S(R(i),"isLoad",!1),S(R(i),"isChildLoad",!1),S(R(i),"parent",null),S(R(i),"children",[]),S(R(i),"data",null),S(R(i),"properties",{}),S(R(i),"loadDataId",0);var a=n.x,o=n.y,u=n.z,s=n.tileSize,l=n.warp,c=l===void 0?!0:l;return i.x=a,i.y=o,i.z=u,i.warp=c||!0,i.tileSize=s,i}return ne(r,[{key:"isLoading",get:function(){return this.loadStatus===Xt.Loading}},{key:"isLoaded",get:function(){return this.loadStatus===Xt.Loaded}},{key:"isFailure",get:function(){return this.loadStatus===Xt.Failure}},{key:"setTileLayerLoaded",value:function(){this.isLayerLoaded=!0}},{key:"isCancelled",get:function(){return this.loadStatus===Xt.Cancelled}},{key:"isDone",get:function(){return[Xt.Loaded,Xt.Cancelled,Xt.Failure].includes(this.loadStatus)}},{key:"bounds",get:function(){return Jp(this.x,this.y,this.z)}},{key:"bboxPolygon",get:function(){var i=Ie(this.bounds,4),a=i[0],o=i[1],u=i[2],s=i[3],l=[(u-a)/2,(s-o)/2],c=P1(this.bounds,{properties:{key:this.key,id:this.key,bbox:this.bounds,center:l,meta:`
      `.concat(this.key,`
      `)}});return c}},{key:"key",get:function(){var i="".concat(this.x,"_").concat(this.y,"_").concat(this.z);return i}},{key:"layerLoad",value:function(){this.loadedLayers++,this.emit("layerLoaded")}},{key:"loadData",value:function(){var n=Y(A.mark(function a(o){var u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,k,T;return A.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return u=o.getData,s=o.onLoad,l=o.onError,this.loadDataId++,c=this.loadDataId,this.isLoading&&this.abortLoad(),this.abortController=new AbortController,this.loadStatus=Xt.Loading,f=null,U.prev=7,d=this.x,v=this.y,p=this.z,g=this.bounds,m=this.tileSize,_=this.warp,y=V1(d,v,p,_),x=y.warpX,b=y.warpY,k=this.abortController.signal,T={x,y:b,z:p,bounds:g,tileSize:m,signal:k,warp:_},U.next=14,u(T,this);case 14:f=U.sent,U.next=20;break;case 17:U.prev=17,U.t0=U.catch(7),h=U.t0;case 20:if(c===this.loadDataId){U.next=22;break}return U.abrupt("return");case 22:if(!(this.isCancelled&&!f)){U.next=24;break}return U.abrupt("return");case 24:if(!(h||!f)){U.next=28;break}return this.loadStatus=Xt.Failure,l(h,this),U.abrupt("return");case 28:this.loadStatus=Xt.Loaded,this.data=f,s(this);case 31:case"end":return U.stop()}},a,this,[[7,17]])}));function i(a){return n.apply(this,arguments)}return i}()},{key:"reloadData",value:function(i){this.isLoading&&this.abortLoad(),this.loadData(i)}},{key:"abortLoad",value:function(){this.isLoaded||this.isCancelled||(this.loadStatus=Xt.Cancelled,this.abortController.abort(),this.xhrCancel&&this.xhrCancel())}}]),r}(zt.EventEmitter),W1=function(t,r){var n=Ta(t),i=ds(n,r),a=360*3-180,o=85.0511287798065,u=[Math.max(i[0][0],-a),Math.max(i[0][1],-o),Math.min(i[1][0],a),Math.min(i[1][1],o)];return u},Y1=function(t,r){var n=Ta(t),i=Ta(r),a=jp(n,i);return a};function Sr(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=X1(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function X1(e,t){if(e){if(typeof e=="string")return El(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return El(e,t)}}function El(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z1(e){var t=q1();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function q1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var K1=Ze.throttle,un=function(e){return e.TilesLoadStart="tiles-load-start",e.TileLoaded="tile-loaded",e.TileError="tile-error",e.TileUnload="tile-unload",e.TileUpdate="tile-update",e.TilesLoadFinished="tiles-load-finished",e}({}),Q1=function(e){be(r,e);var t=Z1(r);function r(n){var i;return ie(this,r),i=t.call(this),S(R(i),"currentTiles",[]),S(R(i),"cacheTiles",new Map),S(R(i),"throttleUpdate",K1(function(a,o){i.update(a,o)},16)),S(R(i),"onTileLoad",function(a){i.emit(un.TileLoaded,a),i.updateTileVisible(),i.loadFinished()}),S(R(i),"onTileError",function(a,o){i.emit(un.TileError,{error:a,tile:o}),i.updateTileVisible(),i.loadFinished()}),S(R(i),"onTileUnload",function(a){i.emit(un.TileUnload,a),i.loadFinished()}),i.options={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,extent:Qp,getTileData:z1,warp:!0,updateStrategy:ma.Replace},i.updateOptions(n),i}return ne(r,[{key:"isLoaded",get:function(){return this.currentTiles.every(function(i){return i.isDone})}},{key:"tiles",get:function(){var i=Array.from(this.cacheTiles.values()).sort(function(a,o){return a.z-o.z});return i}},{key:"updateOptions",value:function(i){var a=i.minZoom===void 0?this.options.minZoom:Math.ceil(i.minZoom),o=i.maxZoom===void 0?this.options.maxZoom:Math.floor(i.maxZoom);this.options=z(z(z({},this.options),i),{},{minZoom:a,maxZoom:o})}},{key:"update",value:function(i,a){var o=this,u=Math.max(0,Math.ceil(i));if(!(this.lastViewStates&&this.lastViewStates.zoom===u&&Y1(this.lastViewStates.latLonBoundsBuffer,a))){var s=W1(a,N1);this.lastViewStates={zoom:u,latLonBounds:a,latLonBoundsBuffer:s},this.currentZoom=u;var l=!1,c=this.getTileIndices(u,s).filter(function(f){return o.options.warp||f.x>=0&&f.x<Math.pow(2,u)});this.emit(un.TilesLoadStart),this.currentTiles=c.map(function(f){var h=f.x,d=f.y,v=f.z,p=o.getTile(h,d,v);if(p){var g,m,_=((g=p)===null||g===void 0?void 0:g.isFailure)||((m=p)===null||m===void 0?void 0:m.isCancelled);return _&&p.loadData({getData:o.options.getTileData,onLoad:o.onTileLoad,onError:o.onTileError}),p}return p=o.createTile(h,d,v),l=!0,p}),l&&this.resizeCacheTiles(),this.updateTileVisible(),this.pruneRequests()}}},{key:"reloadAll",value:function(){var i=Sr(this.cacheTiles),a;try{for(i.s();!(a=i.n()).done;){var o=Ie(a.value,2),u=o[0],s=o[1];if(!this.currentTiles.includes(s)){this.cacheTiles.delete(u),this.onTileUnload(s);return}this.onTileUnload(s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError})}}catch(l){i.e(l)}finally{i.f()}}},{key:"reloadTileById",value:function(i,a,o){var u=this.cacheTiles.get("".concat(a,",").concat(o,",").concat(i));u&&(this.onTileUnload(u),u.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}))}},{key:"reloadTileByLnglat",value:function(i,a,o){var u=this.getTileByLngLat(i,a,o);u&&this.reloadTileById(u.z,u.x,u.y)}},{key:"reloadTileByExtent",value:function(i,a){var o=this,u=this.getTileIndices(a,i);u.forEach(function(s){o.reloadTileById(s.z,s.x,s.y)})}},{key:"pruneRequests",value:function(){var i=[],a=Sr(this.cacheTiles.values()),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;u.isLoading&&!u.isCurrent&&!u.isVisible&&i.push(u)}}catch(l){a.e(l)}finally{a.f()}for(;i.length>0;){var s=i.shift();s.abortLoad()}}},{key:"getTileByLngLat",value:function(i,a,o){var u=this.options.zoomOffset,s=Math.ceil(o)+u,l=vu(i,a,s),c=this.tiles.filter(function(f){return f.key==="".concat(l[0],"_").concat(l[1],"_").concat(s)});return c[0]}},{key:"getTileExtent",value:function(i,a){return this.getTileIndices(a,i)}},{key:"getTileByZXY",value:function(i,a,o){var u=this.tiles.filter(function(s){return s.key==="".concat(a,"_").concat(o,"_").concat(i)});return u[0]}},{key:"clear",value:function(){var i=Sr(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.isLoading?o.abortLoad():this.onTileUnload(o)}}catch(u){i.e(u)}finally{i.f()}this.lastViewStates=void 0,this.cacheTiles.clear(),this.currentTiles=[]}},{key:"destroy",value:function(){this.clear(),this.removeAllListeners()}},{key:"updateTileVisible",value:function(){var i=this.options.updateStrategy,a=new Map,o=Sr(this.cacheTiles.values()),u;try{for(o.s();!(u=o.n()).done;){var s=u.value;a.set(s.key,s.isVisible),s.isCurrent=!1,s.isVisible=!1}}catch(v){o.e(v)}finally{o.f()}var l=Sr(this.currentTiles),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.isCurrent=!0,f.isVisible=!0}}catch(v){l.e(v)}finally{l.f()}var h=Array.from(this.cacheTiles.values());typeof i=="function"?i(h):U1[i](h);var d=!1;Array.from(this.cacheTiles.values()).forEach(function(v){v.isVisible!==a.get(v.key)?(v.isVisibleChange=!0,d=!0):v.isVisibleChange=!1}),d&&this.emit(un.TileUpdate)}},{key:"getTileIndices",value:function(i,a){var o=this.options,u=o.tileSize,s=o.extent,l=o.zoomOffset,c=Math.floor(this.options.maxZoom),f=Math.ceil(this.options.minZoom),h=$1({maxZoom:c,minZoom:f,zoomOffset:l,tileSize:u,zoom:i,latLonBounds:a,extent:s});return h}},{key:"getTileId",value:function(i,a,o){var u="".concat(i,",").concat(a,",").concat(o);return u}},{key:"loadFinished",value:function(){var i=!this.currentTiles.some(function(a){return!a.isDone});return i&&this.emit(un.TilesLoadFinished),i}},{key:"getTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=this.cacheTiles.get(u);return s}},{key:"createTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=new G1({x:i,y:a,z:o,tileSize:this.options.tileSize,warp:this.options.warp});return this.cacheTiles.set(u,s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}),s}},{key:"resizeCacheTiles",value:function(){var i=B1*this.currentTiles.length,a=this.cacheTiles.size>i;if(a){var o=Sr(this.cacheTiles),u;try{for(o.s();!(u=o.n()).done;){var s=Ie(u.value,2),l=s[0],c=s[1];if(!c.isVisible&&!this.currentTiles.includes(c)&&(this.cacheTiles.delete(l),this.onTileUnload(c)),this.cacheTiles.size<=i)break}}catch(f){o.e(f)}finally{o.f()}}this.rebuildTileTree()}},{key:"rebuildTileTree",value:function(){var i=Sr(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.parent=null,o.children.length=0}}catch(f){i.e(f)}finally{i.f()}var u=Sr(this.cacheTiles.values()),s;try{for(u.s();!(s=u.n()).done;){var l=s.value,c=this.getNearestAncestor(l.x,l.y,l.z);l.parent=c,c!=null&&c.children&&c.children.push(l)}}catch(f){u.e(f)}finally{u.f()}}},{key:"getNearestAncestor",value:function(i,a,o){for(;o>this.options.minZoom;){i=Math.floor(i/2),a=Math.floor(a/2),o=o-1;var u=this.getTile(i,a,o);if(u)return u}return null}}]),r}(vs);function e0(e){var t=[],r=/\{([a-z])-([a-z])\}/.exec(e);if(r){var n=r[1].charCodeAt(0),i=r[2].charCodeAt(0),a;for(a=n;a<=i;++a)t.push(e.replace(r[0],String.fromCharCode(a)));return t}if(r=/\{(\d+)-(\d+)\}/.exec(e),r){for(var o=parseInt(r[2],10),u=parseInt(r[1],10);u<=o;u++)t.push(e.replace(r[0],u.toString()));return t}return t.push(e),t}function Cn(e,t){if(!e||!e.length)throw new Error("url is not allowed to be empty");var r=t.x,n=t.y,i=t.z,a=e0(e),o=Math.abs(r+n)%a.length,u=as(a[o])?"".concat(a[o],"/{z}/{x}/{y}"):a[o];return u.replace(/\{x\}/g,r.toString()).replace(/\{y\}/g,n.toString()).replace(/\{z\}/g,i.toString()).replace(/\{bbox\}/g,Jp(r,n,i).join(",")).replace(/\{-y\}/g,(Math.pow(2,i)-n-1).toString())}function J1(e,t){var r=t.x,n=t.y,i=t.z,a=t.layer,o=t.version,u=o===void 0?"1.0.0":o,s=t.style,l=s===void 0?"default":s,c=t.format,f=t.service,h=f===void 0?"WMTS":f,d=t.tileMatrixset,v=e0(e),p=Math.abs(r+n)%v.length,g="".concat(v[p],"&SERVICE=").concat(h,"&REQUEST=GetTile&VERSION=").concat(u,"&LAYER=").concat(a,"&STYLE=").concat(l,"&TILEMATRIXSET=").concat(d,"&FORMAT=").concat(c,"&TILECOL=").concat(r,"&TILEROW=").concat(n,"&TILEMATRIX=").concat(i);return g}function pu(e,t){if(!e)throw new Error(t||"web worker helper assertion failed.")}var Co=new Map;function e_(e){pu(e.source&&!e.url||!e.source&&e.url);var t=Co.get(e.source||e.url);return t||(e.url&&(t=t_(e.url),Co.set(e.url,t)),e.source&&(t=t0(e.source),Co.set(e.source,t))),pu(t),t}function t_(e){if(!e.startsWith("http"))return e;var t=r_(e);return t0(t)}function t0(e){var t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function r_(e){return`try {
  importScripts('`+e+`');
} catch (error) {
  console.error(error);
  throw error;
}`}function gs(e,t,r){t===void 0&&(t=!0);var n=r||new Set;if(e){if(Cl(e))n.add(e);else if(Cl(e.buffer))n.add(e.buffer);else if(!ArrayBuffer.isView(e)){if(t&&typeof e=="object")for(var i in e)gs(e[i],t,n)}}return r===void 0?Array.from(n):[]}function Cl(e){return e?e instanceof ArrayBuffer||typeof MessagePort<"u"&&e instanceof MessagePort||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas:!1}var Ao=function(){};(function(){function e(t){this.terminated=!1,this.loadableURL="";var r=t.name,n=t.source,i=t.url;pu(n||i),this.name=r,this.source=n,this.url=i,this.onMessage=Ao,this.onError=function(a){return console.log(a)},this.worker=this.createBrowserWorker()}return e.isSupported=function(){return typeof Worker<"u"},e.prototype.destroy=function(){this.onMessage=Ao,this.onError=Ao,this.worker.terminate(),this.terminated=!0},Object.defineProperty(e.prototype,"isRunning",{get:function(){return!!this.onMessage},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(t,r){r=r||gs(t),this.worker.postMessage(t,r)},e.prototype.getErrorFromErrorEvent=function(t){var r="Failed to load ";return r+="worker "+this.name+" from "+this.url+". ",t.message&&(r+=t.message+" in "),t.lineno&&(r+=":"+t.lineno+":"+t.colno),new Error(r)},e.prototype.createBrowserWorker=function(){var t=this;this.loadableURL=e_({source:this.source,url:this.url});var r=new Worker(this.loadableURL,{name:this.name});return r.onmessage=function(n){n.data?t.onMessage(n.data):t.onError(new Error("No data received"))},r.onerror=function(n){t.onError(t.getErrorFromErrorEvent(n)),t.terminated=!0},r.onmessageerror=function(n){return console.error("worker "+t.name+", message error: "+n)},r},e})();var wo=new Map;(function(){function e(){}return Object.defineProperty(e,"onmessage",{set:function(t){self.onmessage=function(r){if(Al(r)){var n=r.data,i=n.type,a=n.payload;t(i,a)}}},enumerable:!1,configurable:!0}),e.addEventListener=function(t){var r=wo.get(t);r||(r=function(n){if(Al(n)){var i=n.data,a=i.type,o=i.payload;t(a,o)}}),self.addEventListener("message",r)},e.removeEventListener=function(t){var r=wo.get(t);wo.delete(t),self.removeEventListener("message",r)},e.postMessage=function(t,r){if(self){var n={source:"Worker thread",type:t,payload:r},i=gs(r);self.postMessage(n,i)}},e})();function Al(e){var t=e.type,r=e.data;return t==="message"&&r&&typeof r.source=="string"&&r.source==="Main thread"}function ms(e){var t=e.color;return!t||!t.length?[1,1,1,1]:t}function ys(e,t,r){return r.length===2?[r[0],r[1],0]:[r[0],r[1],r[2]]}function _s(e){var t=e.filter;return t?[1]:[0]}function xs(e,t){return[t]}var bs={exports:{}};bs.exports=Ga;bs.exports.default=Ga;function Ga(e,t,r){r=r||2;var n=t&&t.length,i=n?t[0]*r:e.length,a=r0(e,0,i,r,!0),o=[];if(!a||a.next===a.prev)return o;var u,s,l,c,f,h,d;if(n&&(a=u_(e,t,a,r)),e.length>80*r){u=l=e[0],s=c=e[1];for(var v=r;v<i;v+=r)f=e[v],h=e[v+1],f<u&&(u=f),h<s&&(s=h),f>l&&(l=f),h>c&&(c=h);d=Math.max(l-u,c-s),d=d!==0?32767/d:0}return wi(a,o,r,u,s,d,0),o}function r0(e,t,r,n,i){var a,o;if(i===yu(e,t,r,n)>0)for(a=t;a<r;a+=n)o=wl(a,e[a],e[a+1],o);else for(a=r-n;a>=t;a-=n)o=wl(a,e[a],e[a+1],o);return o&&Wa(o,o.next)&&(Mi(o),o=o.next),o}function Qr(e,t){if(!e)return e;t||(t=e);var r=e,n;do if(n=!1,!r.steiner&&(Wa(r,r.next)||it(r.prev,r,r.next)===0)){if(Mi(r),r=t=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==t);return t}function wi(e,t,r,n,i,a,o){if(e){!o&&a&&h_(e,n,i,a);for(var u=e,s,l;e.prev!==e.next;){if(s=e.prev,l=e.next,a?i_(e,n,i,a):n_(e)){t.push(s.i/r|0),t.push(e.i/r|0),t.push(l.i/r|0),Mi(e),e=l.next,u=l.next;continue}if(e=l,e===u){o?o===1?(e=a_(Qr(e),t,r),wi(e,t,r,n,i,a,2)):o===2&&o_(e,t,r,n,i,a):wi(Qr(e),t,r,n,i,a,1);break}}}}function n_(e){var t=e.prev,r=e,n=e.next;if(it(t,r,n)>=0)return!1;for(var i=t.x,a=r.x,o=n.x,u=t.y,s=r.y,l=n.y,c=i<a?i<o?i:o:a<o?a:o,f=u<s?u<l?u:l:s<l?s:l,h=i>a?i>o?i:o:a>o?a:o,d=u>s?u>l?u:l:s>l?s:l,v=n.next;v!==t;){if(v.x>=c&&v.x<=h&&v.y>=f&&v.y<=d&&bn(i,u,a,s,o,l,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function i_(e,t,r,n){var i=e.prev,a=e,o=e.next;if(it(i,a,o)>=0)return!1;for(var u=i.x,s=a.x,l=o.x,c=i.y,f=a.y,h=o.y,d=u<s?u<l?u:l:s<l?s:l,v=c<f?c<h?c:h:f<h?f:h,p=u>s?u>l?u:l:s>l?s:l,g=c>f?c>h?c:h:f>h?f:h,m=gu(d,v,t,r,n),_=gu(p,g,t,r,n),y=e.prevZ,x=e.nextZ;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&bn(u,c,s,f,l,h,y.x,y.y)&&it(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&bn(u,c,s,f,l,h,x.x,x.y)&&it(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&bn(u,c,s,f,l,h,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&bn(u,c,s,f,l,h,x.x,x.y)&&it(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a_(e,t,r){var n=e;do{var i=n.prev,a=n.next.next;!Wa(i,a)&&n0(i,n,n.next,a)&&Ti(i,a)&&Ti(a,i)&&(t.push(i.i/r|0),t.push(n.i/r|0),t.push(a.i/r|0),Mi(n),Mi(n.next),n=e=a),n=n.next}while(n!==e);return Qr(n)}function o_(e,t,r,n,i,a){var o=e;do{for(var u=o.next.next;u!==o.prev;){if(o.i!==u.i&&p_(o,u)){var s=i0(o,u);o=Qr(o,o.next),s=Qr(s,s.next),wi(o,t,r,n,i,a,0),wi(s,t,r,n,i,a,0);return}u=u.next}o=o.next}while(o!==e)}function u_(e,t,r,n){var i=[],a,o,u,s,l;for(a=0,o=t.length;a<o;a++)u=t[a]*n,s=a<o-1?t[a+1]*n:e.length,l=r0(e,u,s,n,!1),l===l.next&&(l.steiner=!0),i.push(v_(l));for(i.sort(s_),a=0;a<i.length;a++)r=l_(i[a],r);return r}function s_(e,t){return e.x-t.x}function l_(e,t){var r=c_(e,t);if(!r)return t;var n=i0(r,e);return Qr(n,n.next),Qr(r,r.next)}function c_(e,t){var r=t,n=e.x,i=e.y,a=-1/0,o;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var u=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(u<=n&&u>a&&(a=u,o=r.x<r.next.x?r:r.next,u===n))return o}r=r.next}while(r!==t);if(!o)return null;var s=o,l=o.x,c=o.y,f=1/0,h;r=o;do n>=r.x&&r.x>=l&&n!==r.x&&bn(i<c?n:a,i,l,c,i<c?a:n,i,r.x,r.y)&&(h=Math.abs(i-r.y)/(n-r.x),Ti(r,e)&&(h<f||h===f&&(r.x>o.x||r.x===o.x&&f_(o,r)))&&(o=r,f=h)),r=r.next;while(r!==s);return o}function f_(e,t){return it(e.prev,e,t.prev)<0&&it(t.next,e,e.next)<0}function h_(e,t,r,n){var i=e;do i.z===0&&(i.z=gu(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,d_(i)}function d_(e){var t,r,n,i,a,o,u,s,l=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,n=r,u=0,t=0;t<l&&(u++,n=n.nextZ,!!n);t++);for(s=l;u>0||s>0&&n;)u!==0&&(s===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,u--):(i=n,n=n.nextZ,s--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,l*=2}while(o>1);return e}function gu(e,t,r,n,i){return e=(e-r)*i|0,t=(t-n)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v_(e){var t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function bn(e,t,r,n,i,a,o,u){return(i-o)*(t-u)>=(e-o)*(a-u)&&(e-o)*(n-u)>=(r-o)*(t-u)&&(r-o)*(a-u)>=(i-o)*(n-u)}function p_(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!g_(e,t)&&(Ti(e,t)&&Ti(t,e)&&m_(e,t)&&(it(e.prev,e,t.prev)||it(e,t.prev,t))||Wa(e,t)&&it(e.prev,e,e.next)>0&&it(t.prev,t,t.next)>0)}function it(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Wa(e,t){return e.x===t.x&&e.y===t.y}function n0(e,t,r,n){var i=ra(it(e,t,r)),a=ra(it(e,t,n)),o=ra(it(r,n,e)),u=ra(it(r,n,t));return!!(i!==a&&o!==u||i===0&&ta(e,r,t)||a===0&&ta(e,n,t)||o===0&&ta(r,e,n)||u===0&&ta(r,t,n))}function ta(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function ra(e){return e>0?1:e<0?-1:0}function g_(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&n0(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Ti(e,t){return it(e.prev,e,e.next)<0?it(e,t,e.next)>=0&&it(e,e.prev,t)>=0:it(e,t,e.prev)<0||it(e,e.next,t)<0}function m_(e,t){var r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==e);return n}function i0(e,t){var r=new mu(e.i,e.x,e.y),n=new mu(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function wl(e,t,r,n){var i=new mu(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function mu(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ga.deviation=function(e,t,r,n){var i=t&&t.length,a=i?t[0]*r:e.length,o=Math.abs(yu(e,0,a,r));if(i)for(var u=0,s=t.length;u<s;u++){var l=t[u]*r,c=u<s-1?t[u+1]*r:e.length;o-=Math.abs(yu(e,l,c,r))}var f=0;for(u=0;u<n.length;u+=3){var h=n[u]*r,d=n[u+1]*r,v=n[u+2]*r;f+=Math.abs((e[h]-e[v])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[v+1]-e[h+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function yu(e,t,r,n){for(var i=0,a=t,o=r-n;a<r;a+=n)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}Ga.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)r.vertices.push(e[i][a][o]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r};var y_=bs.exports;const Ot=_r(y_);var na=ze();ze();var ft=ze(),Er=ze(),sn=ze();function To(e,t,r,n,i){dt(e,r,n),nr(e,e),t=kn(-e[1],e[0]);var a=kn(-r[1],r[0]);return[i/Fr(t,a),t]}function Cr(e,t){return hp(e,-t[1],t[0])}function ln(e,t,r){return In(e,t,r),nr(e,e),e}function Mo(e,t){return e[0]===t[0]&&e[1]===t[1]}var __=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ie(this,e),S(this,"lastFlip",-1),S(this,"miter",kn(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return ne(e,[{key:"extrude_gaode2",value:function(r,n){var i=this.complex;if(r.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=r.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=r[u-1];f.push((s=n[u-1][2])!==null&&s!==void 0?s:0);var h=n[u-1],d=r[u];d.push((l=n[u][2])!==null&&l!==void 0?l:0);var v=n[u],p=u<r.length-1?[].concat(Q(r[u+1]),[(c=n[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<n.length-1?n[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"simpleExtrude_gaode2",value:function(r,n){var i=this.complex;if(r.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=r.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=r[u-1];f.push((s=n[u-1][2])!==null&&s!==void 0?s:0);var h=n[u-1],d=r[u];d.push((l=n[u][2])!==null&&l!==void 0?l:0);var v=n[u],p=u<r.length-1?[].concat(Q(r[u+1]),[(c=n[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<n.length-1?n[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(r){var n=this.complex;if(r.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=r.length,a=n.startIndex,o=1;o<i;o++){var u=r[o-1],s=r[o],l=o<r.length-1?r[o+1]:null,c=this.segment(n,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<n.positions.length/6;f++)n.positions[f*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}},{key:"simpleExtrude",value:function(r){var n=this.complex;if(r.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=r.length,a=n.startIndex,o=1;o<i;o++){var u=r[o-1],s=r[o],l=o<r.length-1?r[o+1]:null,c=this.simpleSegment(n,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<n.positions.length/6;f++)n.positions[f*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}},{key:"segment_gaode2",value:function(r,n,i,a,o,u,s,l){var c=0,f=r.indices,h=r.positions,d=r.normals,v=this.cap==="square",p=this.join==="bevel",g=ot([s[0],s[1]]),m=ot([u[0],u[1]]);ln(ft,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=ze(),Cr(this.normal,ft)),!this.started)if(this.started=!0,v){var y=ze(),x=ze();dt(y,this.normal,ft),dt(x,this.normal,ft),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(n+0,n+1,n+2),o){Mo(a,o)&&dt(o,a,nr(o,Sn(o,a,i))),ln(Er,o,a);var T=To(sn,ze(),ft,Er,this.thickness),D=Ie(T,2),U=D[0],I=D[1],w=Fr(sn,this.normal)<0?-1:1,M=p;if(!M&&this.join==="miter"){var P=U;P>this.miterLimit&&(M=!0)}M?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,Q(this.lastFlip!==-w?[n,n+2,n+3]:[n+2,n+1,n+3])),f.push(n+2,n+3,n+4),Cr(na,Er),er(this.normal,na),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,U,this.totalDistance),f.push.apply(f,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),w=-1,er(this.normal,I),c+=2),this.lastFlip=w}else{if(Cr(this.normal,ft),v){var b=ze(),k=ze();In(k,ft,this.normal),dt(b,ft,this.normal),d.push(k[0],k[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),c+=2}return c}},{key:"simpleSegment",value:function(r,n,i,a,o){var u=0,s=r.indices,l=r.positions,c=r.normals,f=ot([a[0],a[1]]),h=ot([i[0],i[1]]);ln(ft,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=ze(),Cr(this.normal,ft)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(n+0,n+1,n+2),!o)Cr(this.normal,ft),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),u+=2;else{var v=ot([o[0],o[1]]);Mo(f,v)&&dt(v,f,nr(v,Sn(v,f,h))),ln(Er,v,f);var p=To(sn,ze(),ft,Er,this.thickness),g=Ie(p,2),m=g[0],_=g[1],y=Fr(sn,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),y=-1,er(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment",value:function(r,n,i,a,o){var u=0,s=r.indices,l=r.positions,c=r.normals,f=this.cap==="square",h=this.join==="bevel",d=ot([a[0],a[1]]),v=ot([i[0],i[1]]);ln(ft,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=ze(),Cr(this.normal,ft)),!this.started)if(this.started=!0,f){var g=ze(),m=ze();dt(g,this.normal,ft),dt(m,this.normal,ft),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(n+0,n+1,n+2),o){var x=ot([o[0],o[1]]);Mo(d,x)&&dt(x,d,nr(x,Sn(x,d,v))),ln(Er,x,d);var b=To(sn,ze(),ft,Er,this.thickness),k=Ie(b,2),T=k[0],D=k[1],U=Fr(sn,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var w=T;w>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(D[0],D[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,Q(this.lastFlip!==-U?[n,n+2,n+3]:[n+2,n+1,n+3])),s.push(n+2,n+3,n+4),Cr(na,Er),er(this.normal,na),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,D,T,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),U=-1,er(this.normal,D),u+=2),this.lastFlip=U}else{if(Cr(this.normal,ft),f){var _=ze(),y=ze();In(y,ft,this.normal),dt(_,ft,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),u+=2}return u}},{key:"extrusions",value:function(r,n,i,a,o,u){n.push(a[0],a[1],0),n.push(a[0],a[1],0),r.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),r.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(r,n){var i=n[0]-r[0],a=n[1]-r[1];return Math.sqrt(i*i+a*a)}}]),e}();function _u(e){var t=e.coordinates,r=e.originCoordinates,n=e.version,i=new __({dash:!0,join:"bevel"});if(n==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=r;Array.isArray(o[0][0])||(o=[r]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function ya(e){var t=vr(e.coordinates);return{vertices:[].concat(Q(t),Q(t),Q(t),Q(t)),indices:[0,1,2,2,3,0],size:t.length}}function a0(e){var t=e.coordinates,r=Ot.flatten(t),n=r.vertices,i=r.dimensions,a=r.holes,o=Ot(n,a,i);return{indices:o,vertices:n,size:i}}var x_=function(){var e=Y(A.mark(function t(r){var n,i,a,o,u,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return n=r.descriptors,i=r.features,a=r.enablePicking,o=r.iconMap,u={a_Color:ms,a_Position:ys,filter:_s,a_vertexId:xs,a_PickingColor:function(p){var g=p.id;return a?yr(g):[0,0,0]},a_DistanceAndIndex:function(p,g,m,_,y,x){return x===void 0?[m[3],10]:[m[3],x]},a_Total_Distance:function(p,g,m){return[m[5]]},a_Size:function(p){var g=p.size,m=g===void 0?1:g;return Array.isArray(m)?[m[0],m[1]]:[m,0]},a_Normal:function(p,g,m,_,y){return y},a_Miter:function(p,g,m){return[m[4]]},a_iconMapUV:function(p){var g=p.texture,m=o[g]||{x:0,y:0},_=m.x,y=m.y;return[_,y]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=_u(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(U){c.push(U+l)}),f=x;var k=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=k;for(var T=function(I){var w=(y==null?void 0:y.slice(I*3,I*3+3))||[],M=_.slice(I*x,I*x+x),P=0;b&&b[I]!==void 0&&(P=b[I]),n.forEach(function(B){if(B&&u[B.name]){var J;(J=B.buffer.data).push.apply(J,Q(u[B.name](v,p,M,I,w,P)))}})},D=0;D<k;D++)T(D)}),d.abrupt("return",{descriptors:n,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(r){return e.apply(this,arguments)}}(),b_=function(){var e=Y(A.mark(function t(r){var n,i,a,o,u,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return n=r.descriptors,i=r.features,a=r.enablePicking,o=r.shape2d,u={a_Color:ms,a_Position:ys,filter:_s,a_vertexId:xs,a_PickingColor:function(p){var g=p.id;return a?yr(g):[0,0,0]},a_Shape:function(p){var g=p.shape,m=g===void 0?2:g,_=o.indexOf(m);return[_]},a_Extrude:function(p,g,m,_){var y=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],x=_%4*3;return[y[x],y[x+1],y[x+2]]},a_Size:function(p){var g=p.size,m=g===void 0?5:g;return Array.isArray(m)?[m[0]]:[m]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=ya(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(U){c.push(U+l)}),f=x;var k=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=k;for(var T=function(I){var w=(y==null?void 0:y.slice(I*3,I*3+3))||[],M=_.slice(I*x,I*x+x),P=0;b&&b[I]!==void 0&&(P=b[I]),n.forEach(function(B){if(B&&u[B.name]){var J;(J=B.buffer.data).push.apply(J,Q(u[B.name](v,p,M,I,w,P)))}})},D=0;D<k;D++)T(D)}),d.abrupt("return",{descriptors:n,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(r){return e.apply(this,arguments)}}(),S_=function(){var e=Y(A.mark(function t(r){var n,i,a,o,u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return n=r.descriptors,i=r.features,a=r.enablePicking,o={a_Color:ms,a_Position:ys,filter:_s,a_vertexId:xs,a_PickingColor:function(v){var p=v.id;return a?yr(p):[0,0,0]}},u={sizePerElement:0,elements:[]},s=0,l=[],c=3,i.forEach(function(d,v){var p=a0(d),g=p.indices,m=p.vertices,_=p.normals,y=p.size,x=p.indexes;g.forEach(function(D){l.push(D+s)}),c=y;var b=m.length/y;u.sizePerElement=c,u.elements.push({featureIdx:v,vertices:m,normals:_,offset:s}),s+=b;for(var k=function(U){var I=(_==null?void 0:_.slice(U*3,U*3+3))||[],w=m.slice(U*y,U*y+y),M=0;x&&x[U]!==void 0&&(M=x[U]),n.forEach(function(P){if(P&&o[P.name]){var B;(B=P.buffer.data).push.apply(B,Q(o[P.name](d,v,w,U,I,M)))}})},T=0;T<b;T++)k(T)}),h.abrupt("return",{descriptors:n,featureLayout:u,indices:l});case 8:case"end":return h.stop()}},t)}));return function(r){return e.apply(this,arguments)}}(),E_={pointFill:b_,line:x_,polygonFill:S_};z({},E_);function Wn(e,t){return e??t}var C_=_a;function _a(e,t){var r=e&&e.type,n;if(r==="FeatureCollection")for(n=0;n<e.features.length;n++)_a(e.features[n],t);else if(r==="GeometryCollection")for(n=0;n<e.geometries.length;n++)_a(e.geometries[n],t);else if(r==="Feature")_a(e.geometry,t);else if(r==="Polygon")Tl(e.coordinates,t);else if(r==="MultiPolygon")for(n=0;n<e.coordinates.length;n++)Tl(e.coordinates[n],t);return e}function Tl(e,t){if(e.length!==0){Ml(e[0],t);for(var r=1;r<e.length;r++)Ml(e[r],!t)}}function Ml(e,t){for(var r=0,n=0,i=0,a=e.length,o=a-1;i<a;o=i++){var u=(e[i][0]-e[o][0])*(e[o][1]+e[i][1]),s=r+u;n+=Math.abs(r)>=Math.abs(u)?r-s+u:u-s+r,r=s}r+n>=0!=!!t&&e.reverse()}const A_=_r(C_);function w_(e,t){return e.map(function(r){return r[t]*1})}function o0(e){return Array.isArray(e)?e.length===0||typeof e[0]=="number":!1}function xu(e){var t=Object.isFrozen(e)?Ze.cloneDeep(e):e;return A_(t,!0),t}function u0(e,t){var r=t.x,n=t.y,i=t.x1,a=t.y1,o=t.coordinates,u=t.geometry,s=[];if(!Array.isArray(e))return{dataArray:[]};if(u)return e.filter(function(m){return m[u]&&m[u].type&&m[u].coordinates&&m[u].coordinates.length>0}).forEach(function(m,_){var y=xu(m[u]);Lp(y,function(x){var b=Ip(x),k=z(z({},m),{},{_id:_,coordinates:b});s.push(k)})}),{dataArray:s};for(var l=0;l<e.length;l++){var c=e[l],f=[];if(o){var h="Polygon";Array.isArray(o[0])||(h="Point"),Array.isArray(o[0])&&!Array.isArray(o[0][0])&&(h="LineString");var d=xu({type:h,coordinates:c[o]});f=d.coordinates}else if(r&&n&&i&&a){var v=[parseFloat(c[r]),parseFloat(c[n])],p=[parseFloat(c[i]),parseFloat(c[a])];f=[v,p]}else r&&n&&(f=[parseFloat(c[r]),parseFloat(c[n])]);var g=z(z({},c),{},{_id:l,coordinates:f});s.push(g)}return{dataArray:s}}function T_(e,t){var r=Ay(e);return u0(r,t)}function M_(e){for(var t=e.toString(),r=5381,n=t.length;n;)r=r*33^t.charCodeAt(--n);return r>>>0}function I_(e,t){return t===void 0?null:typeof(e.properties[t]*1)=="number"?e.properties[t]*1:e.properties&&e.properties[t]?M_(e.properties[t]+"")%1000019:null}function k_(e,t){var r=[],n={};return e.features?(e.features=e.features.filter(function(i){var a=i.geometry;return i!=null&&a&&a.type&&a.coordinates&&a.coordinates.length>0}),e=xu(e),e.features.length===0?{dataArray:[],featureKeys:n}:(Lp(e,function(i,a){var o=I_(i,t==null?void 0:t.featureId);o===null&&(o=a);var u=o,s=Ip(i),l=z(z({},i.properties),{},{coordinates:s,_id:u});r.push(l)}),{dataArray:r,featureKeys:n})):(e.features=[],{dataArray:[]})}function bu(e,t,r,n){for(var i=n,a=r-t>>1,o=r-t,u,s=e[t],l=e[t+1],c=e[r],f=e[r+1],h=t+3;h<r;h+=3){var d=L_(e[h],e[h+1],s,l,c,f);if(d>i)u=h,i=d;else if(d===i){var v=Math.abs(h-a);v<o&&(u=h,o=v)}}i>n&&(u-t>3&&bu(e,t,u,n),e[u+2]=i,r-u>3&&bu(e,u,r,n))}function L_(e,t,r,n,i,a){var o=i-r,u=a-n;if(o!==0||u!==0){var s=((e-r)*o+(t-n)*u)/(o*o+u*u);s>1?(r=i,n=a):s>0&&(r+=o*s,n+=u*s)}return o=e-r,u=t-n,o*o+u*u}function Ii(e,t,r,n){var i={id:typeof e>"u"?null:e,type:t,geometry:r,tags:n,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return R_(i),i}function R_(e){var t=e.geometry,r=e.type;if(r==="Point"||r==="MultiPoint"||r==="LineString")Io(e,t);else if(r==="Polygon"||r==="MultiLineString")for(var n=0;n<t.length;n++)Io(e,t[n]);else if(r==="MultiPolygon")for(n=0;n<t.length;n++)for(var i=0;i<t[n].length;i++)Io(e,t[n][i])}function Io(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1])}function P_(e,t){var r=[];if(e.type==="FeatureCollection")for(var n=0;n<e.features.length;n++)xa(r,e.features[n],t,n);else e.type==="Feature"?xa(r,e,t):xa(r,{geometry:e},t);return r}function xa(e,t,r,n){if(t.geometry){var i=t.geometry.coordinates,a=t.geometry.type,o=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),u=[],s=t.id;if(r.promoteId?s=t.properties[r.promoteId]:r.generateId&&(s=n||0),a==="Point")Il(i,u);else if(a==="MultiPoint")for(var l=0;l<i.length;l++)Il(i[l],u);else if(a==="LineString")Su(i,u,o,!1);else if(a==="MultiLineString")if(r.lineMetrics){for(l=0;l<i.length;l++)u=[],Su(i[l],u,o,!1),e.push(Ii(s,"LineString",u,t.properties));return}else ko(i,u,o,!1);else if(a==="Polygon")ko(i,u,o,!0);else if(a==="MultiPolygon")for(l=0;l<i.length;l++){var c=[];ko(i[l],c,o,!0),u.push(c)}else if(a==="GeometryCollection"){for(l=0;l<t.geometry.geometries.length;l++)xa(e,{id:s,geometry:t.geometry.geometries[l],properties:t.properties},r,n);return}else throw new Error("Input data is not a valid GeoJSON object.");e.push(Ii(s,a,u,t.properties))}}function Il(e,t){t.push(s0(e[0])),t.push(l0(e[1])),t.push(0)}function Su(e,t,r,n){for(var i,a,o=0,u=0;u<e.length;u++){var s=s0(e[u][0]),l=l0(e[u][1]);t.push(s),t.push(l),t.push(0),u>0&&(n?o+=(i*l-s*a)/2:o+=Math.sqrt(Math.pow(s-i,2)+Math.pow(l-a,2))),i=s,a=l}var c=t.length-3;t[2]=1,bu(t,0,c,r),t[c+2]=1,t.size=Math.abs(o),t.start=0,t.end=t.size}function ko(e,t,r,n){for(var i=0;i<e.length;i++){var a=[];Su(e[i],a,r,n),t.push(a)}}function s0(e){return e/360+.5}function l0(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function fr(e,t,r,n,i,a,o,u){if(r/=t,n/=t,a>=r&&o<n)return e;if(o<r||a>=n)return null;for(var s=[],l=0;l<e.length;l++){var c=e[l],f=c.geometry,h=c.type,d=i===0?c.minX:c.minY,v=i===0?c.maxX:c.maxY;if(d>=r&&v<n){s.push(c);continue}else if(v<r||d>=n)continue;var p=[];if(h==="Point"||h==="MultiPoint")F_(f,p,r,n,i);else if(h==="LineString")c0(f,p,r,n,i,!1,u.lineMetrics);else if(h==="MultiLineString")Lo(f,p,r,n,i,!1);else if(h==="Polygon")Lo(f,p,r,n,i,!0);else if(h==="MultiPolygon")for(var g=0;g<f.length;g++){var m=[];Lo(f[g],m,r,n,i,!0),m.length&&p.push(m)}if(p.length){if(u.lineMetrics&&h==="LineString"){for(g=0;g<p.length;g++)s.push(Ii(c.id,h,p[g],c.tags));continue}(h==="LineString"||h==="MultiLineString")&&(p.length===1?(h="LineString",p=p[0]):h="MultiLineString"),(h==="Point"||h==="MultiPoint")&&(h=p.length===3?"Point":"MultiPoint"),s.push(Ii(c.id,h,p,c.tags))}}return s.length?s:null}function F_(e,t,r,n,i){for(var a=0;a<e.length;a+=3){var o=e[a+i];o>=r&&o<=n&&(t.push(e[a]),t.push(e[a+1]),t.push(e[a+2]))}}function c0(e,t,r,n,i,a,o){for(var u=kl(e),s=i===0?O_:D_,l=e.start,c,f,h=0;h<e.length-3;h+=3){var d=e[h],v=e[h+1],p=e[h+2],g=e[h+3],m=e[h+4],_=i===0?d:v,y=i===0?g:m,x=!1;o&&(c=Math.sqrt(Math.pow(d-g,2)+Math.pow(v-m,2))),_<r?y>r&&(f=s(u,d,v,g,m,r),o&&(u.start=l+c*f)):_>n?y<n&&(f=s(u,d,v,g,m,n),o&&(u.start=l+c*f)):Ro(u,d,v,p),y<r&&_>=r&&(f=s(u,d,v,g,m,r),x=!0),y>n&&_<=n&&(f=s(u,d,v,g,m,n),x=!0),!a&&x&&(o&&(u.end=l+c*f),t.push(u),u=kl(e)),o&&(l+=c)}var b=e.length-3;d=e[b],v=e[b+1],p=e[b+2],_=i===0?d:v,_>=r&&_<=n&&Ro(u,d,v,p),b=u.length-3,a&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&Ro(u,u[0],u[1],u[2]),u.length&&t.push(u)}function kl(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function Lo(e,t,r,n,i,a){for(var o=0;o<e.length;o++)c0(e[o],t,r,n,i,a,!1)}function Ro(e,t,r,n){e.push(t),e.push(r),e.push(n)}function O_(e,t,r,n,i,a){var o=(a-t)/(n-t);return e.push(a),e.push(r+(i-r)*o),e.push(1),o}function D_(e,t,r,n,i,a){var o=(a-r)/(i-r);return e.push(t+(n-t)*o),e.push(a),e.push(1),o}function N_(e,t){var r=t.buffer/t.extent,n=e,i=fr(e,1,-1-r,r,0,-1,2,t),a=fr(e,1,1-r,2+r,0,-1,2,t);return(i||a)&&(n=fr(e,1,-r,1+r,0,-1,2,t)||[],i&&(n=Ll(i,1).concat(n)),a&&(n=n.concat(Ll(a,-1)))),n}function Ll(e,t){for(var r=[],n=0;n<e.length;n++){var i=e[n],a=i.type,o;if(a==="Point"||a==="MultiPoint"||a==="LineString")o=Po(i.geometry,t);else if(a==="MultiLineString"||a==="Polygon"){o=[];for(var u=0;u<i.geometry.length;u++)o.push(Po(i.geometry[u],t))}else if(a==="MultiPolygon")for(o=[],u=0;u<i.geometry.length;u++){for(var s=[],l=0;l<i.geometry[u].length;l++)s.push(Po(i.geometry[u][l],t));o.push(s)}r.push(Ii(i.id,a,o,i.tags))}return r}function Po(e,t){var r=[];r.size=e.size,e.start!==void 0&&(r.start=e.start,r.end=e.end);for(var n=0;n<e.length;n+=3)r.push(e[n]+t,e[n+1],e[n+2]);return r}function Rl(e,t){if(e.transformed)return e;var r=1<<e.z,n=e.x,i=e.y,a,o,u;for(a=0;a<e.features.length;a++){var s=e.features[a],l=s.geometry,c=s.type;if(s.geometry=[],c===1)for(o=0;o<l.length;o+=2)s.geometry.push(Pl(l[o],l[o+1],t,r,n,i));else for(o=0;o<l.length;o++){var f=[];for(u=0;u<l[o].length;u+=2)f.push(Pl(l[o][u],l[o][u+1],t,r,n,i));s.geometry.push(f)}}return e.transformed=!0,e}function Pl(e,t,r,n,i,a){return[Math.round(r*(e*n-i)),Math.round(r*(t*n-a))]}function B_(e,t,r,n,i){for(var a=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),o={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:n,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},u=0;u<e.length;u++){o.numFeatures++,U_(o,e[u],a,i);var s=e[u].minX,l=e[u].minY,c=e[u].maxX,f=e[u].maxY;s<o.minX&&(o.minX=s),l<o.minY&&(o.minY=l),c>o.maxX&&(o.maxX=c),f>o.maxY&&(o.maxY=f)}return o}function U_(e,t,r,n){var i=t.geometry,a=t.type,o=[];if(a==="Point"||a==="MultiPoint")for(var u=0;u<i.length;u+=3)o.push(i[u]),o.push(i[u+1]),e.numPoints++,e.numSimplified++;else if(a==="LineString")Fo(o,i,e,r,!1,!1);else if(a==="MultiLineString"||a==="Polygon")for(u=0;u<i.length;u++)Fo(o,i[u],e,r,a==="Polygon",u===0);else if(a==="MultiPolygon")for(var s=0;s<i.length;s++){var l=i[s];for(u=0;u<l.length;u++)Fo(o,l[u],e,r,!0,u===0)}if(o.length){var c=t.tags||null;if(a==="LineString"&&n.lineMetrics){c={};for(var f in t.tags)c[f]=t.tags[f];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size}var h={geometry:o,type:a==="Polygon"||a==="MultiPolygon"?3:a==="LineString"||a==="MultiLineString"?2:1,tags:c};t.id!==null&&(h.id=t.id),e.features.push(h)}}function Fo(e,t,r,n,i,a){var o=n*n;if(n>0&&t.size<(i?o:n)){r.numPoints+=t.length/3;return}for(var u=[],s=0;s<t.length;s+=3)(n===0||t[s+2]>o)&&(r.numSimplified++,u.push(t[s]),u.push(t[s+1])),r.numPoints++;i&&z_(u,a),e.push(u)}function z_(e,t){for(var r=0,n=0,i=e.length,a=i-2;n<i;a=n,n+=2)r+=(e[n]-e[a])*(e[n+1]+e[a+1]);if(r>0===t)for(n=0,i=e.length;n<i/2;n+=2){var o=e[n],u=e[n+1];e[n]=e[i-2-n],e[n+1]=e[i-1-n],e[i-2-n]=o,e[i-1-n]=u}}function $_(e,t){return new Ya(e,t)}function Ya(e,t){t=this.options=V_(Object.create(this.options),t);var r=t.debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var n=P_(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),n=N_(n,t),n.length&&this.splitTile(n,0,0,0),r&&(n.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}Ya.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0};Ya.prototype.splitTile=function(e,t,r,n,i,a,o){for(var u=[e,t,r,n],s=this.options,l=s.debug;u.length;){n=u.pop(),r=u.pop(),t=u.pop(),e=u.pop();var c=1<<t,f=Eu(t,r,n),h=this.tiles[f];if(!h&&(l>1&&console.time("creation"),h=this.tiles[f]=B_(e,t,r,n,s),this.tileCoords.push({z:t,x:r,y:n}),l)){l>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,n,h.numFeatures,h.numPoints,h.numSimplified),console.timeEnd("creation"));var d="z"+t;this.stats[d]=(this.stats[d]||0)+1,this.total++}if(h.source=e,i){if(t===s.maxZoom||t===i)continue;var v=1<<i-t;if(r!==Math.floor(a/v)||n!==Math.floor(o/v))continue}else if(t===s.indexMaxZoom||h.numPoints<=s.indexMaxPoints)continue;if(h.source=null,e.length!==0){l>1&&console.time("clipping");var p=.5*s.buffer/s.extent,g=.5-p,m=.5+p,_=1+p,y,x,b,k,T,D;y=x=b=k=null,T=fr(e,c,r-p,r+m,0,h.minX,h.maxX,s),D=fr(e,c,r+g,r+_,0,h.minX,h.maxX,s),e=null,T&&(y=fr(T,c,n-p,n+m,1,h.minY,h.maxY,s),x=fr(T,c,n+g,n+_,1,h.minY,h.maxY,s),T=null),D&&(b=fr(D,c,n-p,n+m,1,h.minY,h.maxY,s),k=fr(D,c,n+g,n+_,1,h.minY,h.maxY,s),D=null),l>1&&console.timeEnd("clipping"),u.push(y||[],t+1,r*2,n*2),u.push(x||[],t+1,r*2,n*2+1),u.push(b||[],t+1,r*2+1,n*2),u.push(k||[],t+1,r*2+1,n*2+1)}}};Ya.prototype.getTile=function(e,t,r){var n=this.options,i=n.extent,a=n.debug;if(e<0||e>24)return null;var o=1<<e;t=(t%o+o)%o;var u=Eu(e,t,r);if(this.tiles[u])return Rl(this.tiles[u],i);a>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var s=e,l=t,c=r,f;!f&&s>0;)s--,l=Math.floor(l/2),c=Math.floor(c/2),f=this.tiles[Eu(s,l,c)];return!f||!f.source?null:(a>1&&console.log("found parent tile z%d-%d-%d",s,l,c),a>1&&console.time("drilling down"),this.splitTile(f.source,s,l,c,e,t,r),a>1&&console.timeEnd("drilling down"),this.tiles[u]?Rl(this.tiles[u],i):null)};function Eu(e,t,r){return((1<<e)*r+t)*32+e}function V_(e,t){for(var r in t)e[r]=t[r];return e}var fi=function(){function e(t,r,n,i){ie(this,e),S(this,"vectorLayerCache",{}),this.x=r,this.y=n,this.z=i,this.vectorTile=t}return ne(e,[{key:"getTileData",value:function(r){if(!r||!this.vectorTile.layers[r])return[];if(this.vectorLayerCache[r])return this.vectorLayerCache[r];var n=this.vectorTile.layers[r];return n.features}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),j_={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0};function H_(e){for(var t=0,r=0,n=e.length,i=n-1,a,o;r<n;i=r++)a=e[r],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}function G_(e){var t=e.length;if(t<=1)return[e];for(var r=[],n,i,a=0;a<t;a++){var o=H_(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(n&&r.push(n),n=[e[a]]):n.push(e[a]))}return n&&r.push(n),r}var W_=["Unknown","Point","LineString","Polygon"];function Y_(e,t,r,n,i){var a=i.geometry,o=i.type,u=i.tags,s=i.id,l=e*Math.pow(2,n),c=e*t,f=e*r,h=W_[o],d,v;function p(_){for(var y=0;y<_.length;y++){var x=_[y];if(x[3])break;var b=180-(x[1]+f)*360/l,k=(x[0]+c)*360/l-180,T=360/Math.PI*Math.atan(Math.exp(b*Math.PI/180))-90;_[y]=[k,T,0,1]}}switch(o){case 1:var g=[];for(d=0;d<a.length;d++)g[d]=a[d][0];a=g,p(a);break;case 2:for(d=0;d<a.length;d++)p(a[d]);break;case 3:for(a=G_(a),d=0;d<a.length;d++)for(v=0;v<a[d].length;v++)p(a[d][v]);break}a.length===1?a=a[0]:h="Multi"+h;var m={type:"Feature",geometry:{type:h,coordinates:a},properties:u,id:s,tileOrigin:[0,0],coord:""};return m}var X_=function(){var e=Y(A.mark(function t(r,n,i,a){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s){var l=n.getTile(r.z,r.x,r.y),c=l?l.features.map(function(d){return Y_(a,i.x,i.y,i.z,d)}):[],f={layers:{defaultLayer:{features:c}}},h=new fi(f,r.x,r.y,r.z);s(h)}));case 1:case"end":return u.stop()}},t)}));return function(r,n,i,a){return e.apply(this,arguments)}}();function Z_(e){var t={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!0,debug:0};return e===void 0||typeof e.geojsonvtOptions>"u"?t:z(z({},t),e.geojsonvtOptions)}function q_(e,t){var r=Z_(t),n=r.extent||4096,i=$_(e,r),a=function(s,l){return X_(l,i,s,n)},o=z(z(z({},j_),t),{},{getTileData:a});return{data:e,dataArray:[],tilesetOptions:o,isTile:!0}}function f0(e,t){var r=t.extent,n=r===void 0?[121.168,30.2828,121.384,30.4219]:r,i=t.requestParameters,a=i===void 0?{}:i,o=new Promise(function(s){e instanceof HTMLImageElement||p1(e)?s([e]):K_(e,a,function(l){s(l)})}),u={originData:e,images:o,_id:1,dataArray:[{_id:0,coordinates:[[n[0],n[1]],[n[2],n[3]]]}]};return u}function K_(e,t,r){var n=[];if(typeof e=="string")lu(z(z({},t),{},{url:e}),function(o,u){u&&(n.push(u),r(n))});else{var i=e.length,a=0;e.forEach(function(o){lu(z(z({},t),{},{url:o}),function(u,s){a++,s&&n.push(s),a===i&&r(n)})})}return f0}var Q_=function(){var e=Y(A.mark(function t(r,n,i,a){var o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o={x:n.x,y:n.y,z:n.z},u=Cn(r,o),l.abrupt("return",new Promise(function(c){a?a(o,function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new fi(d,n.x,n.y,n.z);c(v)}else{var p={layers:{defaultLayer:{features:h.features}}},g=new fi(p,n.x,n.y,n.z);c(g)}}):By(z(z({},i),{},{url:u}),function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new fi(d,n.x,n.y,n.z);c(v)}else{var p=JSON.parse(h),g={layers:{defaultLayer:{features:p}}},m=new fi(g,n.x,n.y,n.z);c(m)}})}));case 3:case"end":return l.stop()}},t)}));return function(r,n,i,a){return e.apply(this,arguments)}}();function J_(e,t){var r=function(a,o){return Q_(e,o,t==null?void 0:t.requestParameters,t.getCustomData)},n=z(z({},t),{},{getTileData:r});return{dataArray:[],tilesetOptions:n,isTile:!0}}var e2=An;function An(e,t){this.x=e,this.y=t}An.prototype={clone:function(){return new An(this.x,this.y)},add:function(e){return this.clone()._add(e)},sub:function(e){return this.clone()._sub(e)},multByPoint:function(e){return this.clone()._multByPoint(e)},divByPoint:function(e){return this.clone()._divByPoint(e)},mult:function(e){return this.clone()._mult(e)},div:function(e){return this.clone()._div(e)},rotate:function(e){return this.clone()._rotate(e)},rotateAround:function(e,t){return this.clone()._rotateAround(e,t)},matMult:function(e){return this.clone()._matMult(e)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(e){return this.x===e.x&&this.y===e.y},dist:function(e){return Math.sqrt(this.distSqr(e))},distSqr:function(e){var t=e.x-this.x,r=e.y-this.y;return t*t+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(e){return Math.atan2(this.y-e.y,this.x-e.x)},angleWith:function(e){return this.angleWithSep(e.x,e.y)},angleWithSep:function(e,t){return Math.atan2(this.x*t-this.y*e,this.x*e+this.y*t)},_matMult:function(e){var t=e[0]*this.x+e[1]*this.y,r=e[2]*this.x+e[3]*this.y;return this.x=t,this.y=r,this},_add:function(e){return this.x+=e.x,this.y+=e.y,this},_sub:function(e){return this.x-=e.x,this.y-=e.y,this},_mult:function(e){return this.x*=e,this.y*=e,this},_div:function(e){return this.x/=e,this.y/=e,this},_multByPoint:function(e){return this.x*=e.x,this.y*=e.y,this},_divByPoint:function(e){return this.x/=e.x,this.y/=e.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var e=this.y;return this.y=this.x,this.x=-e,this},_rotate:function(e){var t=Math.cos(e),r=Math.sin(e),n=t*this.x-r*this.y,i=r*this.x+t*this.y;return this.x=n,this.y=i,this},_rotateAround:function(e,t){var r=Math.cos(e),n=Math.sin(e),i=t.x+r*(this.x-t.x)-n*(this.y-t.y),a=t.y+n*(this.x-t.x)+r*(this.y-t.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};An.convert=function(e){return e instanceof An?e:Array.isArray(e)?new An(e[0],e[1]):e};var t2=e2,r2=Rn;function Rn(e,t,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=e,this._geometry=-1,this._keys=n,this._values=i,e.readFields(n2,this,t)}function n2(e,t,r){e==1?t.id=r.readVarint():e==2?i2(r,t):e==3?t.type=r.readVarint():e==4&&(t._geometry=r.pos)}function i2(e,t){for(var r=e.readVarint()+e.pos;e.pos<r;){var n=t._keys[e.readVarint()],i=t._values[e.readVarint()];t.properties[n]=i}}Rn.types=["Unknown","Point","LineString","Polygon"];Rn.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,r=1,n=0,i=0,a=0,o=[],u;e.pos<t;){if(n<=0){var s=e.readVarint();r=s&7,n=s>>3}if(n--,r===1||r===2)i+=e.readSVarint(),a+=e.readSVarint(),r===1&&(u&&o.push(u),u=[]),u.push(new t2(i,a));else if(r===7)u&&u.push(u[0].clone());else throw new Error("unknown command "+r)}return u&&o.push(u),o};Rn.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,r=1,n=0,i=0,a=0,o=1/0,u=-1/0,s=1/0,l=-1/0;e.pos<t;){if(n<=0){var c=e.readVarint();r=c&7,n=c>>3}if(n--,r===1||r===2)i+=e.readSVarint(),a+=e.readSVarint(),i<o&&(o=i),i>u&&(u=i),a<s&&(s=a),a>l&&(l=a);else if(r!==7)throw new Error("unknown command "+r)}return[o,s,u,l]};Rn.prototype.toGeoJSON=function(e,t,r){var n=this.extent*Math.pow(2,r),i=this.extent*e,a=this.extent*t,o=this.loadGeometry(),u=Rn.types[this.type],s,l;function c(d){for(var v=0;v<d.length;v++){var p=d[v],g=180-(p.y+a)*360/n;d[v]=[(p.x+i)*360/n-180,360/Math.PI*Math.atan(Math.exp(g*Math.PI/180))-90]}}switch(this.type){case 1:var f=[];for(s=0;s<o.length;s++)f[s]=o[s][0];o=f,c(o);break;case 2:for(s=0;s<o.length;s++)c(o[s]);break;case 3:for(o=a2(o),s=0;s<o.length;s++)for(l=0;l<o[s].length;l++)c(o[s][l]);break}o.length===1?o=o[0]:u="Multi"+u;var h={type:"Feature",geometry:{type:u,coordinates:o},properties:this.properties};return"id"in this&&(h.id=this.id),h};function a2(e){var t=e.length;if(t<=1)return[e];for(var r=[],n,i,a=0;a<t;a++){var o=o2(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(n&&r.push(n),n=[e[a]]):n.push(e[a]))}return n&&r.push(n),r}function o2(e){for(var t=0,r=0,n=e.length,i=n-1,a,o;r<n;i=r++)a=e[r],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}var u2=r2,s2=h0;function h0(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(l2,this,t),this.length=this._features.length}function l2(e,t,r){e===15?t.version=r.readVarint():e===1?t.name=r.readString():e===5?t.extent=r.readVarint():e===2?t._features.push(r.pos):e===3?t._keys.push(r.readString()):e===4&&t._values.push(c2(r))}function c2(e){for(var t=null,r=e.readVarint()+e.pos;e.pos<r;){var n=e.readVarint()>>3;t=n===1?e.readString():n===2?e.readFloat():n===3?e.readDouble():n===4?e.readVarint64():n===5?e.readVarint():n===6?e.readSVarint():n===7?e.readBoolean():null}return t}h0.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new u2(this._pbf,t,this.extent,this._keys,this._values)};var f2=s2,h2=d2;function d2(e,t){this.layers=e.readFields(v2,{},t)}function v2(e,t,r){if(e===3){var n=new f2(r,r.readVarint()+r.pos);n.length&&(t[n.name]=n)}}var p2=h2,Ss={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ss.read=function(e,t,r,n,i){var a,o,u=i*8-n-1,s=(1<<u)-1,l=s>>1,c=-7,f=r?i-1:0,h=r?-1:1,d=e[t+f];for(f+=h,a=d&(1<<-c)-1,d>>=-c,c+=u;c>0;a=a*256+e[t+f],f+=h,c-=8);for(o=a&(1<<-c)-1,a>>=-c,c+=n;c>0;o=o*256+e[t+f],f+=h,c-=8);if(a===0)a=1-l;else{if(a===s)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,n),a=a-l}return(d?-1:1)*o*Math.pow(2,a-n)};Ss.write=function(e,t,r,n,i,a){var o,u,s,l=a*8-i-1,c=(1<<l)-1,f=c>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:a-1,v=n?1:-1,p=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+f>=1?t+=h/s:t+=h*Math.pow(2,1-f),t*s>=2&&(o++,s/=2),o+f>=c?(u=0,o=c):o+f>=1?(u=(t*s-1)*Math.pow(2,i),o=o+f):(u=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=u&255,d+=v,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;e[r+d]=o&255,d+=v,o/=256,l-=8);e[r+d-v]|=p*128};var g2=We,ia=Ss;function We(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}We.Varint=0;We.Fixed64=1;We.Bytes=2;We.Fixed32=5;var Cu=65536*65536,Fl=1/Cu,m2=12,d0=typeof TextDecoder>"u"?null:new TextDecoder("utf8");We.prototype={destroy:function(){this.buf=null},readFields:function(e,t,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=n&7,e(i,t,this),this.pos===a&&this.skip(n)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=aa(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=Dl(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=aa(this.buf,this.pos)+aa(this.buf,this.pos+4)*Cu;return this.pos+=8,e},readSFixed64:function(){var e=aa(this.buf,this.pos)+Dl(this.buf,this.pos+4)*Cu;return this.pos+=8,e},readFloat:function(){var e=ia.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=ia.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t=this.buf,r,n;return n=t[this.pos++],r=n&127,n<128||(n=t[this.pos++],r|=(n&127)<<7,n<128)||(n=t[this.pos++],r|=(n&127)<<14,n<128)||(n=t[this.pos++],r|=(n&127)<<21,n<128)?r:(n=t[this.pos],r|=(n&15)<<28,y2(r,e,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2===1?(e+1)/-2:e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=m2&&d0?R2(this.buf,t,e):L2(this.buf,t,e)},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){if(this.type!==We.Bytes)return e.push(this.readVarint(t));var r=sr(this);for(e=e||[];this.pos<r;)e.push(this.readVarint(t));return e},readPackedSVarint:function(e){if(this.type!==We.Bytes)return e.push(this.readSVarint());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readSVarint());return e},readPackedBoolean:function(e){if(this.type!==We.Bytes)return e.push(this.readBoolean());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readBoolean());return e},readPackedFloat:function(e){if(this.type!==We.Bytes)return e.push(this.readFloat());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readFloat());return e},readPackedDouble:function(e){if(this.type!==We.Bytes)return e.push(this.readDouble());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readDouble());return e},readPackedFixed32:function(e){if(this.type!==We.Bytes)return e.push(this.readFixed32());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readFixed32());return e},readPackedSFixed32:function(e){if(this.type!==We.Bytes)return e.push(this.readSFixed32());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed32());return e},readPackedFixed64:function(e){if(this.type!==We.Bytes)return e.push(this.readFixed64());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readFixed64());return e},readPackedSFixed64:function(e){if(this.type!==We.Bytes)return e.push(this.readSFixed64());var t=sr(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed64());return e},skip:function(e){var t=e&7;if(t===We.Varint)for(;this.buf[this.pos++]>127;);else if(t===We.Bytes)this.pos=this.readVarint()+this.pos;else if(t===We.Fixed32)this.pos+=4;else if(t===We.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var r=new Uint8Array(t);r.set(this.buf),this.buf=r,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),fn(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),fn(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),fn(this.buf,e&-1,this.pos),fn(this.buf,Math.floor(e*Fl),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),fn(this.buf,e&-1,this.pos),fn(this.buf,Math.floor(e*Fl),this.pos+4),this.pos+=8},writeVarint:function(e){if(e=+e||0,e>268435455||e<0){_2(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))},writeSVarint:function(e){this.writeVarint(e<0?-e*2-1:e*2)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(e.length*4),this.pos++;var t=this.pos;this.pos=P2(this.buf,e,this.pos);var r=this.pos-t;r>=128&&Ol(t,r,this),this.pos=t-1,this.writeVarint(r),this.pos+=r},writeFloat:function(e){this.realloc(4),ia.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),ia.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=e.length;this.writeVarint(t),this.realloc(t);for(var r=0;r<t;r++)this.buf[this.pos++]=e[r]},writeRawMessage:function(e,t){this.pos++;var r=this.pos;e(t,this);var n=this.pos-r;n>=128&&Ol(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n},writeMessage:function(e,t,r){this.writeTag(e,We.Bytes),this.writeRawMessage(t,r)},writePackedVarint:function(e,t){t.length&&this.writeMessage(e,S2,t)},writePackedSVarint:function(e,t){t.length&&this.writeMessage(e,E2,t)},writePackedBoolean:function(e,t){t.length&&this.writeMessage(e,w2,t)},writePackedFloat:function(e,t){t.length&&this.writeMessage(e,C2,t)},writePackedDouble:function(e,t){t.length&&this.writeMessage(e,A2,t)},writePackedFixed32:function(e,t){t.length&&this.writeMessage(e,T2,t)},writePackedSFixed32:function(e,t){t.length&&this.writeMessage(e,M2,t)},writePackedFixed64:function(e,t){t.length&&this.writeMessage(e,I2,t)},writePackedSFixed64:function(e,t){t.length&&this.writeMessage(e,k2,t)},writeBytesField:function(e,t){this.writeTag(e,We.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,We.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,We.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,We.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,We.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,We.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,We.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,We.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,We.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,We.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}};function y2(e,t,r){var n=r.buf,i,a;if(a=n[r.pos++],i=(a&112)>>4,a<128||(a=n[r.pos++],i|=(a&127)<<3,a<128)||(a=n[r.pos++],i|=(a&127)<<10,a<128)||(a=n[r.pos++],i|=(a&127)<<17,a<128)||(a=n[r.pos++],i|=(a&127)<<24,a<128)||(a=n[r.pos++],i|=(a&1)<<31,a<128))return cn(e,i,t);throw new Error("Expected varint not more than 10 bytes")}function sr(e){return e.type===We.Bytes?e.readVarint()+e.pos:e.pos+1}function cn(e,t,r){return r?t*4294967296+(e>>>0):(t>>>0)*4294967296+(e>>>0)}function _2(e,t){var r,n;if(e>=0?(r=e%4294967296|0,n=e/4294967296|0):(r=~(-e%4294967296),n=~(-e/4294967296),r^4294967295?r=r+1|0:(r=0,n=n+1|0)),e>=18446744073709552e3||e<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");t.realloc(10),x2(r,n,t),b2(n,t)}function x2(e,t,r){r.buf[r.pos++]=e&127|128,e>>>=7,r.buf[r.pos++]=e&127|128,e>>>=7,r.buf[r.pos++]=e&127|128,e>>>=7,r.buf[r.pos++]=e&127|128,e>>>=7,r.buf[r.pos]=e&127}function b2(e,t){var r=(e&7)<<4;t.buf[t.pos++]|=r|((e>>>=3)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127)))))}function Ol(e,t,r){var n=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.floor(Math.log(t)/(Math.LN2*7));r.realloc(n);for(var i=r.pos-1;i>=e;i--)r.buf[i+n]=r.buf[i]}function S2(e,t){for(var r=0;r<e.length;r++)t.writeVarint(e[r])}function E2(e,t){for(var r=0;r<e.length;r++)t.writeSVarint(e[r])}function C2(e,t){for(var r=0;r<e.length;r++)t.writeFloat(e[r])}function A2(e,t){for(var r=0;r<e.length;r++)t.writeDouble(e[r])}function w2(e,t){for(var r=0;r<e.length;r++)t.writeBoolean(e[r])}function T2(e,t){for(var r=0;r<e.length;r++)t.writeFixed32(e[r])}function M2(e,t){for(var r=0;r<e.length;r++)t.writeSFixed32(e[r])}function I2(e,t){for(var r=0;r<e.length;r++)t.writeFixed64(e[r])}function k2(e,t){for(var r=0;r<e.length;r++)t.writeSFixed64(e[r])}function aa(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+e[t+3]*16777216}function fn(e,t,r){e[r]=t,e[r+1]=t>>>8,e[r+2]=t>>>16,e[r+3]=t>>>24}function Dl(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}function L2(e,t,r){for(var n="",i=t;i<r;){var a=e[i],o=null,u=a>239?4:a>223?3:a>191?2:1;if(i+u>r)break;var s,l,c;u===1?a<128&&(o=a):u===2?(s=e[i+1],(s&192)===128&&(o=(a&31)<<6|s&63,o<=127&&(o=null))):u===3?(s=e[i+1],l=e[i+2],(s&192)===128&&(l&192)===128&&(o=(a&15)<<12|(s&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):u===4&&(s=e[i+1],l=e[i+2],c=e[i+3],(s&192)===128&&(l&192)===128&&(c&192)===128&&(o=(a&15)<<18|(s&63)<<12|(l&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,u=1):o>65535&&(o-=65536,n+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),n+=String.fromCharCode(o),i+=u}return n}function R2(e,t,r){return d0.decode(e.subarray(t,r))}function P2(e,t,r){for(var n=0,i,a;n<t.length;n++){if(i=t.charCodeAt(n),i>55295&&i<57344)if(a)if(i<56320){e[r++]=239,e[r++]=191,e[r++]=189,a=i;continue}else i=a-55296<<10|i-56320|65536,a=null;else{i>56319||n+1===t.length?(e[r++]=239,e[r++]=191,e[r++]=189):a=i;continue}else a&&(e[r++]=239,e[r++]=191,e[r++]=189,a=null);i<128?e[r++]=i:(i<2048?e[r++]=i>>6|192:(i<65536?e[r++]=i>>12|224:(e[r++]=i>>18|240,e[r++]=i>>12&63|128),e[r++]=i>>6&63|128),e[r++]=i&63|128)}return r}const F2=_r(g2);var Nl=function(){function e(t,r,n,i){ie(this,e),S(this,"vectorLayerCache",{}),this.x=r,this.y=n,this.z=i,this.vectorTile=new p2(new F2(t))}return ne(e,[{key:"getTileData",value:function(r){if(!r||!this.vectorTile.layers[r])return[];if(this.vectorLayerCache[r])return this.vectorLayerCache[r];var n=this.vectorTile.layers[r];if(Array.isArray(n.features))return this.vectorLayerCache[r]=n.features,n.features;for(var i=[],a=0;a<n.length;a++){var o=n.feature(a),u=o.toGeoJSON(this.x,this.y,this.z);i.push(z(z({},u),{},{properties:z({id:u.id},u.properties)}))}return this.vectorLayerCache[r]=i,i}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),O2={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0},D2=function(){var e=Y(A.mark(function t(r,n,i,a,o){var u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=Cn(r,n),l.abrupt("return",new Promise(function(c){if(o)o({x:i.x,y:i.y,z:i.z},function(h,d){if(h||!d)c(void 0);else{var v=new Nl(d,i.x,i.y,i.z);c(v)}});else{var f=us(z(z({},a),{},{url:u}),function(h,d){if(h||!d)c(void 0);else{var v=new Nl(d,i.x,i.y,i.z);c(v)}});i.xhrCancel=function(){return f.cancel()}}}));case 2:case"end":return l.stop()}},t)}));return function(r,n,i,a,o){return e.apply(this,arguments)}}();function N2(e,t){var r=Array.isArray(e)?e[0]:e,n=function(o,u){return D2(r,o,u,t==null?void 0:t.requestParameters,t==null?void 0:t.getCustomData)},i=z(z(z({},O2),t),{},{getTileData:n});return{data:r,dataArray:[],tilesetOptions:i,isTile:!0}}function B2(e,t,r){switch(e){case"+":return t+r;case"-":return t-r;case"*":return t*r;case"/":return t/r;case"%":return t%r;case"^":return Math.pow(t,r);case"abs":return Math.abs(t);case"floor":return Math.floor(t);case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"sin":return Math.sin(t);case"cos":return Math.cos(t);case"atan":return r===-1?Math.atan(t):Math.atan2(t,r);case"min":return Math.min(t,r);case"max":return Math.max(t,r);case"log10":return Math.log(t);case"log2":return Math.log2(t);default:return console.warn("Calculate symbol err! Return default 0"),0}}function _i(e,t){for(var r=t[0],n=r.width,i=r.height,a=t.map(function(d){return d.rasterData}),o=n*i,u=[],s=JSON.stringify(e),l=0;l<o;l++){var c=JSON.parse(s),f=v0(c,a,l);if(typeof f=="number")u.push(f);else{var h=Au(c);u.push(h)}}return u}function v0(e,t,r){if(e.length===2&&e[0]==="band"&&typeof e[1]=="number")try{return t[e[1]][r]}catch{return console.warn("Raster Data err!"),0}e.map(function(n,i){if(Array.isArray(n)&&n.length>0)switch(n[0]){case"band":try{e[i]=t[n[1]][r]}catch{console.warn("Raster Data err!"),e[i]=0}break;default:v0(n,t,r)}})}function U2(e){var t=Ie(e,3),r=t[0],n=t[1],i=n===void 0?-1:n,a=t[2],o=a===void 0?-1:a;if(r===void 0)return console.warn("Express err!"),["+",0,0];var u=r.replace(/\s+/g,"");return[u,i,o]}function Au(e){var t=U2(e),r=t[0],n=t[1],i=t[2];return Array.isArray(n)&&(n=Au(e[1])),Array.isArray(i)&&(i=Au(e[2])),B2(r,n,i)}var z2={nd:{type:"operation",expression:["/",["-",["band",1],["band",0]],["+",["band",1],["band",0]]]},rgb:{type:"function",method:$2}};function $2(e,t){for(var r=e[0].rasterData,n=e[1].rasterData,i=e[2].rasterData,a=[],o=(t==null?void 0:t.countCut)||[2,98],u=Ie(o,2),s=u[0],l=u[1],c=(t==null?void 0:t.RMinMax)||wn(r,s,l),f=(t==null?void 0:t.GMinMax)||wn(n,s,l),h=(t==null?void 0:t.BMinMax)||wn(i,s,l),d=0;d<r.length;d++)a.push(Math.max(0,r[d]-c[0])),a.push(Math.max(0,n[d]-f[0])),a.push(Math.max(0,i[d]-h[0]));return{rasterData:a,rMinMax:c,gMinMax:f,bMinMax:h}}function wn(e,t,r){var n=e.slice().sort(function(u,s){return u-s}),i=n.length,a=n[Math.ceil(i*t/100)],o=n[Math.ceil(i*r/100)];return[a,o]}function Es(e,t,r){return wu.apply(this,arguments)}function wu(){return wu=Y(A.mark(function e(t,r,n){var i,a,o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(t.length!==0){f.next=2;break}return f.abrupt("return",{rasterData:[0],width:1,heigh:1});case 2:return f.next=4,Promise.all(t.map(function(h){var d=h.data,v=h.bands,p=v===void 0?[0]:v;return r(d,p)}));case 4:i=f.sent,a=[],i.forEach(function(h){Array.isArray(h)?a.push.apply(a,Q(h)):a.push(h)}),o=a[0],u=o.width,s=o.height,f.t0=hr(n),f.next=f.t0==="function"?11:f.t0==="object"?13:15;break;case 11:return l=n(a),f.abrupt("break",16);case 13:return Array.isArray(n)?l={rasterData:_i(n,a)}:l=V2(n,a),f.abrupt("break",16);case 15:l={rasterData:a[0].rasterData};case 16:return f.abrupt("return",z(z({},l),{},{width:u,height:s}));case 17:case"end":return f.stop()}},e)})),wu.apply(this,arguments)}function V2(e,t){var r=z2[e.type];if(r.type==="function")return r.method(t,e==null?void 0:e.options);if(r.type==="operation")return e.type==="rgb"?j2(r.expression,t):{rasterData:_i(r.expression,t)}}function j2(e,t){e.r===void 0&&console.warn("Channel R lost in Operation! Use band[0] to fill!"),e.g===void 0&&console.warn("Channel G lost in Operation! Use band[0] to fill!"),e.b===void 0&&console.warn("Channel B lost in Operation! Use band[0] to fill!");var r=_i(e.r||["band",0],t),n=_i(e.g||["band",0],t),i=_i(e.b||["band",0],t);return[r,n,i]}function Tu(e,t,r,n){return Mu.apply(this,arguments)}function Mu(){return Mu=Y(A.mark(function e(t,r,n,i){var a;return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Es(t,r,n);case 2:a=u.sent,i(null,{data:a});case 4:case"end":return u.stop()}},e)})),Mu.apply(this,arguments)}function H2(e,t){var r=t.extent,n=t.width,i=t.height,a=t.min,o=t.max,u=t.format,s=t.operation,l,c,f;if(u===void 0||o0(e))l=Array.from(e),c=n,f=i;else{var h=Array.isArray(e)?e:[e];l=Es(h,u,s)}var d={_id:1,dataArray:[{_id:1,data:l,width:c,height:f,min:a,max:o,coordinates:[[r[0],r[1]],[r[2],r[3]]]}]};return d}/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Bl;(function(e){(function(t){var r=typeof globalThis=="object"?globalThis:typeof bi=="object"?bi:typeof self=="object"?self:typeof this=="object"?this:u(),n=i(e);typeof r.Reflect<"u"&&(n=i(r.Reflect,n)),t(n,r),typeof r.Reflect>"u"&&(r.Reflect=e);function i(s,l){return function(c,f){Object.defineProperty(s,c,{configurable:!0,writable:!0,value:f}),l&&l(c,f)}}function a(){try{return Function("return this;")()}catch{}}function o(){try{return(0,eval)("(function() { return this; })()")}catch{}}function u(){return a()||o()}})(function(t,r){var n=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",a=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",o=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",u=typeof Object.create=="function",s={__proto__:[]}instanceof Array,l=!u&&!s,c={create:u?function(){return Me(Object.create(null))}:s?function(){return Me({__proto__:null})}:function(){return Me({})},has:l?function(O,N){return n.call(O,N)}:function(O,N){return N in O},get:l?function(O,N){return n.call(O,N)?O[N]:void 0}:function(O,N){return O[N]}},f=Object.getPrototypeOf(Function),h=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:de(),d=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ve(),v=typeof WeakMap=="function"?WeakMap:He(),p=i?Symbol.for("@reflect-metadata:registry"):void 0,g=qt(),m=j(g);function _(O,N,G,re){if(X(G)){if(!me(O))throw new TypeError;if(!$e(N))throw new TypeError;return M(O,N)}else{if(!me(O))throw new TypeError;if(!he(N))throw new TypeError;if(!he(re)&&!X(re)&&!fe(re))throw new TypeError;return fe(re)&&(re=void 0),G=ae(G),P(O,N,G,re)}}t("decorate",_);function y(O,N){function G(re,ye){if(!he(re))throw new TypeError;if(!X(ye)&&!ke(ye))throw new TypeError;pe(O,N,re,ye)}return G}t("metadata",y);function x(O,N,G,re){if(!he(G))throw new TypeError;return X(re)||(re=ae(re)),pe(O,N,G,re)}t("defineMetadata",x);function b(O,N,G){if(!he(N))throw new TypeError;return X(G)||(G=ae(G)),B(O,N,G)}t("hasMetadata",b);function k(O,N,G){if(!he(N))throw new TypeError;return X(G)||(G=ae(G)),J(O,N,G)}t("hasOwnMetadata",k);function T(O,N,G){if(!he(N))throw new TypeError;return X(G)||(G=ae(G)),se(O,N,G)}t("getMetadata",T);function D(O,N,G){if(!he(N))throw new TypeError;return X(G)||(G=ae(G)),ce(O,N,G)}t("getOwnMetadata",D);function U(O,N){if(!he(O))throw new TypeError;return X(N)||(N=ae(N)),H(O,N)}t("getMetadataKeys",U);function I(O,N){if(!he(O))throw new TypeError;return X(N)||(N=ae(N)),V(O,N)}t("getOwnMetadataKeys",I);function w(O,N,G){if(!he(N))throw new TypeError;if(X(G)||(G=ae(G)),!he(N))throw new TypeError;X(G)||(G=ae(G));var re=oe(N,G,!1);return X(re)?!1:re.OrdinaryDeleteMetadata(O,N,G)}t("deleteMetadata",w);function M(O,N){for(var G=O.length-1;G>=0;--G){var re=O[G],ye=re(N);if(!X(ye)&&!fe(ye)){if(!$e(ye))throw new TypeError;N=ye}}return N}function P(O,N,G,re){for(var ye=O.length-1;ye>=0;--ye){var Ke=O[ye],st=Ke(N,G,re);if(!X(st)&&!fe(st)){if(!he(st))throw new TypeError;re=st}}return re}function B(O,N,G){var re=J(O,N,G);if(re)return!0;var ye=Xe(N);return fe(ye)?!1:B(O,ye,G)}function J(O,N,G){var re=oe(N,G,!1);return X(re)?!1:Qe(re.OrdinaryHasOwnMetadata(O,N,G))}function se(O,N,G){var re=J(O,N,G);if(re)return ce(O,N,G);var ye=Xe(N);if(!fe(ye))return se(O,ye,G)}function ce(O,N,G){var re=oe(N,G,!1);if(!X(re))return re.OrdinaryGetOwnMetadata(O,N,G)}function pe(O,N,G,re){var ye=oe(G,re,!0);ye.OrdinaryDefineOwnMetadata(O,N,G,re)}function H(O,N){var G=V(O,N),re=Xe(O);if(re===null)return G;var ye=H(re,N);if(ye.length<=0)return G;if(G.length<=0)return ye;for(var Ke=new d,st=[],Fe=0,ge=G;Fe<ge.length;Fe++){var Ce=ge[Fe],Ee=Ke.has(Ce);Ee||(Ke.add(Ce),st.push(Ce))}for(var Ae=0,De=ye;Ae<De.length;Ae++){var Ce=De[Ae],Ee=Ke.has(Ce);Ee||(Ke.add(Ce),st.push(Ce))}return st}function V(O,N){var G=oe(O,N,!1);return G?G.OrdinaryOwnMetadataKeys(O,N):[]}function Z(O){if(O===null)return 1;switch(typeof O){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return O===null?1:6;default:return 6}}function X(O){return O===void 0}function fe(O){return O===null}function ue(O){return typeof O=="symbol"}function he(O){return typeof O=="object"?O!==null:typeof O=="function"}function Be(O,N){switch(Z(O)){case 0:return O;case 1:return O;case 2:return O;case 3:return O;case 4:return O;case 5:return O}var G=N===3?"string":N===5?"number":"default",re=Pe(O,a);if(re!==void 0){var ye=re.call(O,G);if(he(ye))throw new TypeError;return ye}return Le(O,G==="default"?"number":G)}function Le(O,N){if(N==="string"){var G=O.toString;if(ee(G)){var re=G.call(O);if(!he(re))return re}var ye=O.valueOf;if(ee(ye)){var re=ye.call(O);if(!he(re))return re}}else{var ye=O.valueOf;if(ee(ye)){var re=ye.call(O);if(!he(re))return re}var Ke=O.toString;if(ee(Ke)){var re=Ke.call(O);if(!he(re))return re}}throw new TypeError}function Qe(O){return!!O}function $(O){return""+O}function ae(O){var N=Be(O,3);return ue(N)?N:$(N)}function me(O){return Array.isArray?Array.isArray(O):O instanceof Object?O instanceof Array:Object.prototype.toString.call(O)==="[object Array]"}function ee(O){return typeof O=="function"}function $e(O){return typeof O=="function"}function ke(O){switch(Z(O)){case 3:return!0;case 4:return!0;default:return!1}}function je(O,N){return O===N||O!==O&&N!==N}function Pe(O,N){var G=O[N];if(G!=null){if(!ee(G))throw new TypeError;return G}}function Te(O){var N=Pe(O,o);if(!ee(N))throw new TypeError;var G=N.call(O);if(!he(G))throw new TypeError;return G}function tt(O){return O.value}function ut(O){var N=O.next();return N.done?!1:N}function at(O){var N=O.return;N&&N.call(O)}function Xe(O){var N=Object.getPrototypeOf(O);if(typeof O!="function"||O===f||N!==f)return N;var G=O.prototype,re=G&&Object.getPrototypeOf(G);if(re==null||re===Object.prototype)return N;var ye=re.constructor;return typeof ye!="function"||ye===O?N:ye}function At(){var O;!X(p)&&typeof r.Reflect<"u"&&!(p in r.Reflect)&&typeof r.Reflect.defineMetadata=="function"&&(O=te(r.Reflect));var N,G,re,ye=new v,Ke={registerProvider:st,getProvider:ge,setProvider:Ee};return Ke;function st(Ae){if(!Object.isExtensible(Ke))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case O===Ae:break;case X(N):N=Ae;break;case N===Ae:break;case X(G):G=Ae;break;case G===Ae:break;default:re===void 0&&(re=new d),re.add(Ae);break}}function Fe(Ae,De){if(!X(N)){if(N.isProviderFor(Ae,De))return N;if(!X(G)){if(G.isProviderFor(Ae,De))return N;if(!X(re))for(var Je=Te(re);;){var rt=ut(Je);if(!rt)return;var Dt=tt(rt);if(Dt.isProviderFor(Ae,De))return at(Je),Dt}}}if(!X(O)&&O.isProviderFor(Ae,De))return O}function ge(Ae,De){var Je=ye.get(Ae),rt;return X(Je)||(rt=Je.get(De)),X(rt)&&(rt=Fe(Ae,De),X(rt)||(X(Je)&&(Je=new h,ye.set(Ae,Je)),Je.set(De,rt))),rt}function Ce(Ae){if(X(Ae))throw new TypeError;return N===Ae||G===Ae||!X(re)&&re.has(Ae)}function Ee(Ae,De,Je){if(!Ce(Je))throw new Error("Metadata provider not registered.");var rt=ge(Ae,De);if(rt!==Je){if(!X(rt))return!1;var Dt=ye.get(Ae);X(Dt)&&(Dt=new h,ye.set(Ae,Dt)),Dt.set(De,Je)}return!0}}function qt(){var O;return!X(p)&&he(r.Reflect)&&Object.isExtensible(r.Reflect)&&(O=r.Reflect[p]),X(O)&&(O=At()),!X(p)&&he(r.Reflect)&&Object.isExtensible(r.Reflect)&&Object.defineProperty(r.Reflect,p,{enumerable:!1,configurable:!1,writable:!1,value:O}),O}function j(O){var N=new v,G={isProviderFor:function(Ce,Ee){var Ae=N.get(Ce);return X(Ae)?!1:Ae.has(Ee)},OrdinaryDefineOwnMetadata:st,OrdinaryHasOwnMetadata:ye,OrdinaryGetOwnMetadata:Ke,OrdinaryOwnMetadataKeys:Fe,OrdinaryDeleteMetadata:ge};return g.registerProvider(G),G;function re(Ce,Ee,Ae){var De=N.get(Ce),Je=!1;if(X(De)){if(!Ae)return;De=new h,N.set(Ce,De),Je=!0}var rt=De.get(Ee);if(X(rt)){if(!Ae)return;if(rt=new h,De.set(Ee,rt),!O.setProvider(Ce,Ee,G))throw De.delete(Ee),Je&&N.delete(Ce),new Error("Wrong provider for target.")}return rt}function ye(Ce,Ee,Ae){var De=re(Ee,Ae,!1);return X(De)?!1:Qe(De.has(Ce))}function Ke(Ce,Ee,Ae){var De=re(Ee,Ae,!1);if(!X(De))return De.get(Ce)}function st(Ce,Ee,Ae,De){var Je=re(Ae,De,!0);Je.set(Ce,Ee)}function Fe(Ce,Ee){var Ae=[],De=re(Ce,Ee,!1);if(X(De))return Ae;for(var Je=De.keys(),rt=Te(Je),Dt=0;;){var zn=ut(rt);if(!zn)return Ae.length=Dt,Ae;var io=tt(zn);try{Ae[Dt]=io}catch(ao){try{at(rt)}finally{throw ao}}Dt++}}function ge(Ce,Ee,Ae){var De=re(Ee,Ae,!1);if(X(De)||!De.delete(Ce))return!1;if(De.size===0){var Je=N.get(Ee);X(Je)||(Je.delete(Ae),Je.size===0&&N.delete(Je))}return!0}}function te(O){var N=O.defineMetadata,G=O.hasOwnMetadata,re=O.getOwnMetadata,ye=O.getOwnMetadataKeys,Ke=O.deleteMetadata,st=new v,Fe={isProviderFor:function(ge,Ce){var Ee=st.get(ge);return X(Ee)?ye(ge,Ce).length?(X(Ee)&&(Ee=new d,st.set(ge,Ee)),Ee.add(Ce),!0):!1:Ee.has(Ce)},OrdinaryDefineOwnMetadata:N,OrdinaryHasOwnMetadata:G,OrdinaryGetOwnMetadata:re,OrdinaryOwnMetadataKeys:ye,OrdinaryDeleteMetadata:Ke};return Fe}function oe(O,N,G){var re=g.getProvider(O,N);if(!X(re))return re;if(G){if(g.setProvider(O,N,m))return m;throw new Error("Illegal state.")}}function de(){var O={},N=[],G=function(){function Fe(ge,Ce,Ee){this._index=0,this._keys=ge,this._values=Ce,this._selector=Ee}return Fe.prototype["@@iterator"]=function(){return this},Fe.prototype[o]=function(){return this},Fe.prototype.next=function(){var ge=this._index;if(ge>=0&&ge<this._keys.length){var Ce=this._selector(this._keys[ge],this._values[ge]);return ge+1>=this._keys.length?(this._index=-1,this._keys=N,this._values=N):this._index++,{value:Ce,done:!1}}return{value:void 0,done:!0}},Fe.prototype.throw=function(ge){throw this._index>=0&&(this._index=-1,this._keys=N,this._values=N),ge},Fe.prototype.return=function(ge){return this._index>=0&&(this._index=-1,this._keys=N,this._values=N),{value:ge,done:!0}},Fe}(),re=function(){function Fe(){this._keys=[],this._values=[],this._cacheKey=O,this._cacheIndex=-2}return Object.defineProperty(Fe.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Fe.prototype.has=function(ge){return this._find(ge,!1)>=0},Fe.prototype.get=function(ge){var Ce=this._find(ge,!1);return Ce>=0?this._values[Ce]:void 0},Fe.prototype.set=function(ge,Ce){var Ee=this._find(ge,!0);return this._values[Ee]=Ce,this},Fe.prototype.delete=function(ge){var Ce=this._find(ge,!1);if(Ce>=0){for(var Ee=this._keys.length,Ae=Ce+1;Ae<Ee;Ae++)this._keys[Ae-1]=this._keys[Ae],this._values[Ae-1]=this._values[Ae];return this._keys.length--,this._values.length--,je(ge,this._cacheKey)&&(this._cacheKey=O,this._cacheIndex=-2),!0}return!1},Fe.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=O,this._cacheIndex=-2},Fe.prototype.keys=function(){return new G(this._keys,this._values,ye)},Fe.prototype.values=function(){return new G(this._keys,this._values,Ke)},Fe.prototype.entries=function(){return new G(this._keys,this._values,st)},Fe.prototype["@@iterator"]=function(){return this.entries()},Fe.prototype[o]=function(){return this.entries()},Fe.prototype._find=function(ge,Ce){if(!je(this._cacheKey,ge)){this._cacheIndex=-1;for(var Ee=0;Ee<this._keys.length;Ee++)if(je(this._keys[Ee],ge)){this._cacheIndex=Ee;break}}return this._cacheIndex<0&&Ce&&(this._cacheIndex=this._keys.length,this._keys.push(ge),this._values.push(void 0)),this._cacheIndex},Fe}();return re;function ye(Fe,ge){return Fe}function Ke(Fe,ge){return ge}function st(Fe,ge){return[Fe,ge]}}function ve(){var O=function(){function N(){this._map=new h}return Object.defineProperty(N.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),N.prototype.has=function(G){return this._map.has(G)},N.prototype.add=function(G){return this._map.set(G,G),this},N.prototype.delete=function(G){return this._map.delete(G)},N.prototype.clear=function(){this._map.clear()},N.prototype.keys=function(){return this._map.keys()},N.prototype.values=function(){return this._map.keys()},N.prototype.entries=function(){return this._map.entries()},N.prototype["@@iterator"]=function(){return this.keys()},N.prototype[o]=function(){return this.keys()},N}();return O}function He(){var O=16,N=c.create(),G=re();return function(){function ge(){this._key=re()}return ge.prototype.has=function(Ce){var Ee=ye(Ce,!1);return Ee!==void 0?c.has(Ee,this._key):!1},ge.prototype.get=function(Ce){var Ee=ye(Ce,!1);return Ee!==void 0?c.get(Ee,this._key):void 0},ge.prototype.set=function(Ce,Ee){var Ae=ye(Ce,!0);return Ae[this._key]=Ee,this},ge.prototype.delete=function(Ce){var Ee=ye(Ce,!1);return Ee!==void 0?delete Ee[this._key]:!1},ge.prototype.clear=function(){this._key=re()},ge}();function re(){var ge;do ge="@@WeakMap@@"+Fe();while(c.has(N,ge));return N[ge]=!0,ge}function ye(ge,Ce){if(!n.call(ge,G)){if(!Ce)return;Object.defineProperty(ge,G,{value:c.create()})}return ge[G]}function Ke(ge,Ce){for(var Ee=0;Ee<Ce;++Ee)ge[Ee]=Math.random()*255|0;return ge}function st(ge){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(ge)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(ge)):Ke(new Uint8Array(ge),ge):Ke(new Array(ge),ge)}function Fe(){var ge=st(O);ge[6]=ge[6]&79|64,ge[8]=ge[8]&191|128;for(var Ce="",Ee=0;Ee<O;++Ee){var Ae=ge[Ee];(Ee===4||Ee===6||Ee===8)&&(Ce+="-"),Ae<16&&(Ce+="0"),Ce+=Ae.toString(16).toLowerCase()}return Ce}}function Me(O){return O.__=void 0,delete O.__,O}})})(Bl||(Bl={}));var rr="named",p0="name",Cs="unmanaged",g0="optional",Xa="inject",ki="multi_inject",m0="inversify:tagged",y0="inversify:tagged_props",Iu="inversify:paramtypes",G2="design:paramtypes",xi="post_construct";function W2(){return[Xa,ki,p0,Cs,rr,g0]}var Ul=W2(),Ct={Request:"Request",Singleton:"Singleton",Transient:"Transient"},Et={ConstantValue:"ConstantValue",Constructor:"Constructor",DynamicValue:"DynamicValue",Factory:"Factory",Function:"Function",Instance:"Instance",Invalid:"Invalid",Provider:"Provider"},dr={ClassProperty:"ClassProperty",ConstructorArgument:"ConstructorArgument",Variable:"Variable"},Y2=0;function $i(){return Y2++}var X2=function(){function e(t,r){this.id=$i(),this.activated=!1,this.serviceIdentifier=t,this.scope=r,this.type=Et.Invalid,this.constraint=function(n){return!0},this.implementationType=null,this.cache=null,this.factory=null,this.provider=null,this.onActivation=null,this.dynamicValue=null}return e.prototype.clone=function(){var t=new e(this.serviceIdentifier,this.scope);return t.activated=t.scope===Ct.Singleton?this.activated:!1,t.implementationType=this.implementationType,t.dynamicValue=this.dynamicValue,t.scope=this.scope,t.type=this.type,t.factory=this.factory,t.provider=this.provider,t.constraint=this.constraint,t.onActivation=this.onActivation,t.cache=this.cache,t},e}(),Z2="Cannot apply @injectable decorator multiple times.",q2="Metadata key was used more than once in a parameter:",Yn="NULL argument",zl="Key Not Found",K2="Ambiguous match found for serviceIdentifier:",Q2="Could not unbind serviceIdentifier:",J2="No matching bindings found for serviceIdentifier:",ex="Missing required @injectable annotation in:",tx="Missing required @inject or @multiInject annotation in:",rx=function(e){return"@inject called with undefined this could mean that the class "+e+" has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."},nx="Circular dependency found:",ix="Invalid binding type:",ax="No snapshot available to restore.",ox="Invalid return type in middleware. Middleware must return!",ux="Value provided to function binding must be a function!",sx="The toSelf function can only be applied when a constructor is used as service identifier",lx="The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",cx=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"The number of constructor arguments in the derived class "+(e[0]+" must be >= than the number of constructor arguments of its base class.")},fx="Invalid Container constructor argument. Container options must be an object.",hx="Invalid Container option. Default scope must be a string ('singleton' or 'transient').",dx="Invalid Container option. Auto bind injectable must be a boolean",vx="Invalid Container option. Skip base check must be a boolean",px="Cannot apply @postConstruct decorator multiple times in the same class",gx=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"@postConstruct error in class "+e[0]+": "+e[1]},mx=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"It looks like there is a circular dependency "+("in one of the '"+e[0]+"' bindings. Please investigate bindings with")+("service identifier '"+e[1]+"'.")},yx="Maximum call stack size exceeded",_x=function(){function e(){}return e.prototype.getConstructorMetadata=function(t){var r=Reflect.getMetadata(Iu,t),n=Reflect.getMetadata(m0,t);return{compilerGeneratedMetadata:r,userGeneratedMetadata:n||{}}},e.prototype.getPropertiesMetadata=function(t){var r=Reflect.getMetadata(y0,t)||[];return r},e}(),ba={MultipleBindingsAvailable:2,NoBindingsAvailable:0,OnlyOneBindingAvailable:1};function _0(e){return e instanceof RangeError||e.message===yx}function Li(e){if(typeof e=="function"){var t=e;return t.name}else{if(typeof e=="symbol")return e.toString();var t=e;return t}}function $l(e,t,r){var n="",i=r(e,t);return i.length!==0&&(n=`
Registered bindings:`,i.forEach(function(a){var o="Object";a.implementationType!==null&&(o=Za(a.implementationType)),n=n+`
 `+o,a.constraint.metaData&&(n=n+" - "+a.constraint.metaData)})),n}function x0(e,t){return e.parentRequest===null?!1:e.parentRequest.serviceIdentifier===t?!0:x0(e.parentRequest,t)}function xx(e){function t(n,i){i===void 0&&(i=[]);var a=Li(n.serviceIdentifier);return i.push(a),n.parentRequest!==null?t(n.parentRequest,i):i}var r=t(e);return r.reverse().join(" --> ")}function b0(e){e.childRequests.forEach(function(t){if(x0(t,t.serviceIdentifier)){var r=xx(t);throw new Error(nx+" "+r)}else b0(t)})}function bx(e,t){if(t.isTagged()||t.isNamed()){var r="",n=t.getNamedTag(),i=t.getCustomTags();return n!==null&&(r+=n.toString()+`
`),i!==null&&i.forEach(function(a){r+=a.toString()+`
`})," "+e+`
 `+e+" - "+r}else return" "+e}function Za(e){if(e.name)return e.name;var t=e.toString(),r=t.match(/^function\s*([^\s(]+)/);return r?r[1]:"Anonymous function: "+t}var S0=function(){function e(t){this.id=$i(),this.container=t}return e.prototype.addPlan=function(t){this.plan=t},e.prototype.setCurrentRequest=function(t){this.currentRequest=t},e}(),Nr=function(){function e(t,r){this.key=t,this.value=r}return e.prototype.toString=function(){return this.key===rr?"named: "+this.value.toString()+" ":"tagged: { key:"+this.key.toString()+", value: "+this.value+" }"},e}(),Sx=function(){function e(t,r){this.parentContext=t,this.rootRequest=r}return e}();function Ex(e,t,r,n){var i=m0;E0(i,e,t,n,r)}function Cx(e,t,r){var n=y0;E0(n,e.constructor,t,r)}function E0(e,t,r,n,i){var a={},o=typeof i=="number",u=i!==void 0&&o?i.toString():r;if(o&&r!==void 0)throw new Error(lx);Reflect.hasOwnMetadata(e,t)&&(a=Reflect.getMetadata(e,t));var s=a[u];if(!Array.isArray(s))s=[];else for(var l=0,c=s;l<c.length;l++){var f=c[l];if(f.key===n.key)throw new Error(q2+" "+f.key.toString())}s.push(n),a[u]=s,Reflect.defineMetadata(e,a,t)}function Vl(e,t){Reflect.decorate(e,t)}function Ax(e,t){return function(r,n){t(r,n,e)}}function Tx(e,t,r){typeof r=="number"?Vl([Ax(r,e)],t):typeof r=="string"?Reflect.decorate([e],t,r):Vl([e],t)}var Mx=function(){function e(t){this._cb=t}return e.prototype.unwrap=function(){return this._cb()},e}();function Ue(e){return function(t,r,n){if(e===void 0)throw new Error(rx(t.name));var i=new Nr(Xa,e);typeof n=="number"?Ex(t,r,n,i):Cx(t,r,i)}}var Ix=function(){function e(t){this.str=t}return e.prototype.startsWith=function(t){return this.str.indexOf(t)===0},e.prototype.endsWith=function(t){var r="",n=t.split("").reverse().join("");return r=this.str.split("").reverse().join(""),this.startsWith.call({str:r},n)},e.prototype.contains=function(t){return this.str.indexOf(t)!==-1},e.prototype.equals=function(t){return this.str===t},e.prototype.value=function(){return this.str},e}(),qa=function(){function e(t,r,n,i){this.id=$i(),this.type=t,this.serviceIdentifier=n,this.name=new Ix(r||""),this.metadata=new Array;var a=null;typeof i=="string"?a=new Nr(rr,i):i instanceof Nr&&(a=i),a!==null&&this.metadata.push(a)}return e.prototype.hasTag=function(t){for(var r=0,n=this.metadata;r<n.length;r++){var i=n[r];if(i.key===t)return!0}return!1},e.prototype.isArray=function(){return this.hasTag(ki)},e.prototype.matchesArray=function(t){return this.matchesTag(ki)(t)},e.prototype.isNamed=function(){return this.hasTag(rr)},e.prototype.isTagged=function(){return this.metadata.some(function(t){return Ul.every(function(r){return t.key!==r})})},e.prototype.isOptional=function(){return this.matchesTag(g0)(!0)},e.prototype.getNamedTag=function(){return this.isNamed()?this.metadata.filter(function(t){return t.key===rr})[0]:null},e.prototype.getCustomTags=function(){return this.isTagged()?this.metadata.filter(function(t){return Ul.every(function(r){return t.key!==r})}):null},e.prototype.matchesNamedTag=function(t){return this.matchesTag(rr)(t)},e.prototype.matchesTag=function(t){var r=this;return function(n){for(var i=0,a=r.metadata;i<a.length;i++){var o=a[i];if(o.key===t&&o.value===n)return!0}return!1}},e}(),Ma=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};function kx(e,t){var r=Za(t),n=C0(e,r,t,!1);return n}function C0(e,t,r,n){var i=e.getConstructorMetadata(r),a=i.compilerGeneratedMetadata;if(a===void 0){var o=ex+" "+t+".";throw new Error(o)}var u=i.userGeneratedMetadata,s=Object.keys(u),l=r.length===0&&s.length>0,c=s.length>r.length,f=l||c?s.length:r.length,h=Rx(n,t,a,u,f),d=A0(e,r),v=Ma(Ma([],h),d);return v}function Lx(e,t,r,n,i){var a=i[e.toString()]||[],o=T0(a),u=o.unmanaged!==!0,s=n[e],l=o.inject||o.multiInject;if(s=l||s,s instanceof Mx&&(s=s.unwrap()),u){var c=s===Object,f=s===Function,h=s===void 0,d=c||f||h;if(!t&&d){var v=tx+" argument "+e+" in class "+r+".";throw new Error(v)}var p=new qa(dr.ConstructorArgument,o.targetName,s);return p.metadata=a,p}return null}function Rx(e,t,r,n,i){for(var a=[],o=0;o<i;o++){var u=o,s=Lx(u,e,t,r,n);s!==null&&a.push(s)}return a}function A0(e,t){for(var r=e.getPropertiesMetadata(t),n=[],i=Object.keys(r),a=0,o=i;a<o.length;a++){var u=o[a],s=r[u],l=T0(r[u]),c=l.targetName||u,f=l.inject||l.multiInject,h=new qa(dr.ClassProperty,c,f);h.metadata=s,n.push(h)}var d=Object.getPrototypeOf(t.prototype).constructor;if(d!==Object){var v=A0(e,d);n=Ma(Ma([],n),v)}return n}function w0(e,t){var r=Object.getPrototypeOf(t.prototype).constructor;if(r!==Object){var n=Za(r),i=C0(e,n,r,!0),a=i.map(function(s){return s.metadata.filter(function(l){return l.key===Cs})}),o=[].concat.apply([],a).length,u=i.length-o;return u>0?u:w0(e,r)}else return 0}function T0(e){var t={};return e.forEach(function(r){t[r.key.toString()]=r.value}),{inject:t[Xa],multiInject:t[ki],targetName:t[p0],unmanaged:t[Cs]}}var As=function(){function e(t,r,n,i,a){this.id=$i(),this.serviceIdentifier=t,this.parentContext=r,this.parentRequest=n,this.target=a,this.childRequests=[],this.bindings=Array.isArray(i)?i:[i],this.requestScope=n===null?new Map:null}return e.prototype.addChildRequest=function(t,r,n){var i=new e(t,this.parentContext,this,r,n);return this.childRequests.push(i),i},e}();function ku(e){return e._bindingDictionary}function Px(e,t,r,n,i,a){var o=e?ki:Xa,u=new Nr(o,r),s=new qa(t,n,r,u);if(i!==void 0){var l=new Nr(i,a);s.metadata.push(l)}return s}function jl(e,t,r,n,i){var a=Ri(r.container,i.serviceIdentifier),o=[];return a.length===ba.NoBindingsAvailable&&r.container.options.autoBindInjectable&&typeof i.serviceIdentifier=="function"&&e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata&&(r.container.bind(i.serviceIdentifier).toSelf(),a=Ri(r.container,i.serviceIdentifier)),t?o=a:o=a.filter(function(u){var s=new As(u.serviceIdentifier,r,n,u,i);return u.constraint(s)}),Fx(i.serviceIdentifier,o,i,r.container),o}function Fx(e,t,r,n){switch(t.length){case ba.NoBindingsAvailable:if(r.isOptional())return t;var i=Li(e),a=J2;throw a+=bx(i,r),a+=$l(n,i,Ri),new Error(a);case ba.OnlyOneBindingAvailable:if(!r.isArray())return t;case ba.MultipleBindingsAvailable:default:if(r.isArray())return t;var i=Li(e),a=K2+" "+i;throw a+=$l(n,i,Ri),new Error(a)}}function M0(e,t,r,n,i,a){var o,u;if(i===null){o=jl(e,t,n,null,a),u=new As(r,n,null,o,a);var s=new Sx(n,u);n.addPlan(s)}else o=jl(e,t,n,i,a),u=i.addChildRequest(a.serviceIdentifier,o,a);o.forEach(function(l){var c=null;if(a.isArray())c=u.addChildRequest(l.serviceIdentifier,l,a);else{if(l.cache)return;c=u}if(l.type===Et.Instance&&l.implementationType!==null){var f=kx(e,l.implementationType);if(!n.container.options.skipBaseClassChecks){var h=w0(e,l.implementationType);if(f.length<h){var d=cx(Za(l.implementationType));throw new Error(d)}}f.forEach(function(v){M0(e,!1,v.serviceIdentifier,n,c,v)})}})}function Ri(e,t){var r=[],n=ku(e);return n.hasKey(t)?r=n.get(t):e.parent!==null&&(r=Ri(e.parent,t)),r}function Ox(e,t,r,n,i,a,o,u){u===void 0&&(u=!1);var s=new S0(t),l=Px(r,n,i,"",a,o);try{return M0(e,u,i,s,null,l),s}catch(c){throw _0(c)&&s.plan&&b0(s.plan.rootRequest),c}}function Dx(e,t,r,n){var i=new qa(dr.Variable,"",t,new Nr(r,n)),a=new S0(e),o=new As(t,a,null,[],i);return o}var Nx=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};function Bx(e,t,r){var n=t.filter(function(a){return a.target!==null&&a.target.type===dr.ClassProperty}),i=n.map(r);return n.forEach(function(a,o){var u="";u=a.target.name.value();var s=i[o];e[u]=s}),e}function Ux(e,t){return new(e.bind.apply(e,Nx([void 0],t)))}function zx(e,t){if(Reflect.hasMetadata(xi,e)){var r=Reflect.getMetadata(xi,e);try{t[r.value]()}catch(n){throw new Error(gx(e.name,n.message))}}}function $x(e,t,r){var n=null;if(t.length>0){var i=t.filter(function(o){return o.target!==null&&o.target.type===dr.ConstructorArgument}),a=i.map(r);n=Ux(e,a),n=Bx(n,t,r)}else n=new e;return zx(e,n),n}var Oo=function(e,t,r){try{return r()}catch(n){throw _0(n)?new Error(mx(e,t.toString())):n}},Lu=function(e){return function(t){t.parentContext.setCurrentRequest(t);var r=t.bindings,n=t.childRequests,i=t.target&&t.target.isArray(),a=!t.parentRequest||!t.parentRequest.target||!t.target||!t.parentRequest.target.matchesArray(t.target.serviceIdentifier);if(i&&a)return n.map(function(f){var h=Lu(e);return h(f)});var o=null;if(t.target.isOptional()&&r.length===0)return;var u=r[0],s=u.scope===Ct.Singleton,l=u.scope===Ct.Request;if(s&&u.activated)return u.cache;if(l&&e!==null&&e.has(u.id))return e.get(u.id);if(u.type===Et.ConstantValue)o=u.cache,u.activated=!0;else if(u.type===Et.Function)o=u.cache,u.activated=!0;else if(u.type===Et.Constructor)o=u.implementationType;else if(u.type===Et.DynamicValue&&u.dynamicValue!==null)o=Oo("toDynamicValue",u.serviceIdentifier,function(){return u.dynamicValue(t.parentContext)});else if(u.type===Et.Factory&&u.factory!==null)o=Oo("toFactory",u.serviceIdentifier,function(){return u.factory(t.parentContext)});else if(u.type===Et.Provider&&u.provider!==null)o=Oo("toProvider",u.serviceIdentifier,function(){return u.provider(t.parentContext)});else if(u.type===Et.Instance&&u.implementationType!==null)o=$x(u.implementationType,n,Lu(e));else{var c=Li(t.serviceIdentifier);throw new Error(ix+" "+c)}return typeof u.onActivation=="function"&&(o=u.onActivation(t.parentContext,o)),s&&(u.cache=o,u.activated=!0),l&&e!==null&&!e.has(u.id)&&e.set(u.id,o),o}};function Vx(e){var t=Lu(e.plan.rootRequest.requestScope);return t(e.plan.rootRequest)}var lr=function(e,t){var r=e.parentRequest;return r!==null?t(r)?!0:lr(r,t):!1},hi=function(e){return function(t){var r=function(n){return n!==null&&n.target!==null&&n.target.matchesTag(e)(t)};return r.metaData=new Nr(e,t),r}},oa=hi(rr),Do=function(e){return function(t){var r=null;if(t!==null)if(r=t.bindings[0],typeof e=="string"){var n=r.serviceIdentifier;return n===e}else{var i=t.bindings[0].implementationType;return e===i}return!1}},ws=function(){function e(t){this._binding=t}return e.prototype.when=function(t){return this._binding.constraint=t,new bt(this._binding)},e.prototype.whenTargetNamed=function(t){return this._binding.constraint=oa(t),new bt(this._binding)},e.prototype.whenTargetIsDefault=function(){return this._binding.constraint=function(t){var r=t.target!==null&&!t.target.isNamed()&&!t.target.isTagged();return r},new bt(this._binding)},e.prototype.whenTargetTagged=function(t,r){return this._binding.constraint=hi(t)(r),new bt(this._binding)},e.prototype.whenInjectedInto=function(t){return this._binding.constraint=function(r){return Do(t)(r.parentRequest)},new bt(this._binding)},e.prototype.whenParentNamed=function(t){return this._binding.constraint=function(r){return oa(t)(r.parentRequest)},new bt(this._binding)},e.prototype.whenParentTagged=function(t,r){return this._binding.constraint=function(n){return hi(t)(r)(n.parentRequest)},new bt(this._binding)},e.prototype.whenAnyAncestorIs=function(t){return this._binding.constraint=function(r){return lr(r,Do(t))},new bt(this._binding)},e.prototype.whenNoAncestorIs=function(t){return this._binding.constraint=function(r){return!lr(r,Do(t))},new bt(this._binding)},e.prototype.whenAnyAncestorNamed=function(t){return this._binding.constraint=function(r){return lr(r,oa(t))},new bt(this._binding)},e.prototype.whenNoAncestorNamed=function(t){return this._binding.constraint=function(r){return!lr(r,oa(t))},new bt(this._binding)},e.prototype.whenAnyAncestorTagged=function(t,r){return this._binding.constraint=function(n){return lr(n,hi(t)(r))},new bt(this._binding)},e.prototype.whenNoAncestorTagged=function(t,r){return this._binding.constraint=function(n){return!lr(n,hi(t)(r))},new bt(this._binding)},e.prototype.whenAnyAncestorMatches=function(t){return this._binding.constraint=function(r){return lr(r,t)},new bt(this._binding)},e.prototype.whenNoAncestorMatches=function(t){return this._binding.constraint=function(r){return!lr(r,t)},new bt(this._binding)},e}(),bt=function(){function e(t){this._binding=t}return e.prototype.onActivation=function(t){return this._binding.onActivation=t,new ws(this._binding)},e}(),Lr=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new ws(this._binding),this._bindingOnSyntax=new bt(this._binding)}return e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,r){return this._bindingWhenSyntax.whenTargetTagged(t,r)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,r){return this._bindingWhenSyntax.whenParentTagged(t,r)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,r){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,r)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,r){return this._bindingWhenSyntax.whenNoAncestorTagged(t,r)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),jx=function(){function e(t){this._binding=t}return e.prototype.inRequestScope=function(){return this._binding.scope=Ct.Request,new Lr(this._binding)},e.prototype.inSingletonScope=function(){return this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.inTransientScope=function(){return this._binding.scope=Ct.Transient,new Lr(this._binding)},e}(),Hl=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new ws(this._binding),this._bindingOnSyntax=new bt(this._binding),this._bindingInSyntax=new jx(t)}return e.prototype.inRequestScope=function(){return this._bindingInSyntax.inRequestScope()},e.prototype.inSingletonScope=function(){return this._bindingInSyntax.inSingletonScope()},e.prototype.inTransientScope=function(){return this._bindingInSyntax.inTransientScope()},e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,r){return this._bindingWhenSyntax.whenTargetTagged(t,r)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,r){return this._bindingWhenSyntax.whenParentTagged(t,r)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,r){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,r)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,r){return this._bindingWhenSyntax.whenNoAncestorTagged(t,r)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),Hx=function(){function e(t){this._binding=t}return e.prototype.to=function(t){return this._binding.type=Et.Instance,this._binding.implementationType=t,new Hl(this._binding)},e.prototype.toSelf=function(){if(typeof this._binding.serviceIdentifier!="function")throw new Error(""+sx);var t=this._binding.serviceIdentifier;return this.to(t)},e.prototype.toConstantValue=function(t){return this._binding.type=Et.ConstantValue,this._binding.cache=t,this._binding.dynamicValue=null,this._binding.implementationType=null,this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.toDynamicValue=function(t){return this._binding.type=Et.DynamicValue,this._binding.cache=null,this._binding.dynamicValue=t,this._binding.implementationType=null,new Hl(this._binding)},e.prototype.toConstructor=function(t){return this._binding.type=Et.Constructor,this._binding.implementationType=t,this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.toFactory=function(t){return this._binding.type=Et.Factory,this._binding.factory=t,this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.toFunction=function(t){if(typeof t!="function")throw new Error(ux);var r=this.toConstantValue(t);return this._binding.type=Et.Function,this._binding.scope=Ct.Singleton,r},e.prototype.toAutoFactory=function(t){return this._binding.type=Et.Factory,this._binding.factory=function(r){var n=function(){return r.container.get(t)};return n},this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.toProvider=function(t){return this._binding.type=Et.Provider,this._binding.provider=t,this._binding.scope=Ct.Singleton,new Lr(this._binding)},e.prototype.toService=function(t){this.toDynamicValue(function(r){return r.container.get(t)})},e}(),Gx=function(){function e(){}return e.of=function(t,r){var n=new e;return n.bindings=t,n.middleware=r,n},e}(),Gl=function(){function e(){this._map=new Map}return e.prototype.getMap=function(){return this._map},e.prototype.add=function(t,r){if(t==null)throw new Error(Yn);if(r==null)throw new Error(Yn);var n=this._map.get(t);n!==void 0?(n.push(r),this._map.set(t,n)):this._map.set(t,[r])},e.prototype.get=function(t){if(t==null)throw new Error(Yn);var r=this._map.get(t);if(r!==void 0)return r;throw new Error(zl)},e.prototype.remove=function(t){if(t==null)throw new Error(Yn);if(!this._map.delete(t))throw new Error(zl)},e.prototype.removeByCondition=function(t){var r=this;this._map.forEach(function(n,i){var a=n.filter(function(o){return!t(o)});a.length>0?r._map.set(i,a):r._map.delete(i)})},e.prototype.hasKey=function(t){if(t==null)throw new Error(Yn);return this._map.has(t)},e.prototype.clone=function(){var t=new e;return this._map.forEach(function(r,n){r.forEach(function(i){return t.add(n,i.clone())})}),t},e.prototype.traverse=function(t){this._map.forEach(function(r,n){t(n,r)})},e}(),Wx=function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function u(c){try{l(n.next(c))}catch(f){o(f)}}function s(c){try{l(n.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((n=n.apply(e,t||[])).next())})},Yx=function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(c){l=[6,c],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Xx=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},Ts=function(){function e(t){this._appliedMiddleware=[];var r=t||{};if(typeof r!="object")throw new Error(""+fx);if(r.defaultScope===void 0)r.defaultScope=Ct.Transient;else if(r.defaultScope!==Ct.Singleton&&r.defaultScope!==Ct.Transient&&r.defaultScope!==Ct.Request)throw new Error(""+hx);if(r.autoBindInjectable===void 0)r.autoBindInjectable=!1;else if(typeof r.autoBindInjectable!="boolean")throw new Error(""+dx);if(r.skipBaseClassChecks===void 0)r.skipBaseClassChecks=!1;else if(typeof r.skipBaseClassChecks!="boolean")throw new Error(""+vx);this.options={autoBindInjectable:r.autoBindInjectable,defaultScope:r.defaultScope,skipBaseClassChecks:r.skipBaseClassChecks},this.id=$i(),this._bindingDictionary=new Gl,this._snapshots=[],this._middleware=null,this.parent=null,this._metadataReader=new _x}return e.merge=function(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var a=new e,o=Xx([t,r],n).map(function(l){return ku(l)}),u=ku(a);function s(l,c){l.traverse(function(f,h){h.forEach(function(d){c.add(d.serviceIdentifier,d.clone())})})}return o.forEach(function(l){s(l,u)}),a},e.prototype.load=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=this._getContainerModuleHelpersFactory(),i=0,a=t;i<a.length;i++){var o=a[i],u=n(o.id);o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)}},e.prototype.loadAsync=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Wx(this,void 0,void 0,function(){var n,i,a,o,u;return Yx(this,function(s){switch(s.label){case 0:n=this._getContainerModuleHelpersFactory(),i=0,a=t,s.label=1;case 1:return i<a.length?(o=a[i],u=n(o.id),[4,o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)]):[3,4];case 2:s.sent(),s.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.unload=function(){for(var t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=function(a){return function(o){return o.moduleId===a}};r.forEach(function(a){var o=i(a.id);t._bindingDictionary.removeByCondition(o)})},e.prototype.bind=function(t){var r=this.options.defaultScope||Ct.Transient,n=new X2(t,r);return this._bindingDictionary.add(t,n),new Hx(n)},e.prototype.rebind=function(t){return this.unbind(t),this.bind(t)},e.prototype.unbind=function(t){try{this._bindingDictionary.remove(t)}catch{throw new Error(Q2+" "+Li(t))}},e.prototype.unbindAll=function(){this._bindingDictionary=new Gl},e.prototype.isBound=function(t){var r=this._bindingDictionary.hasKey(t);return!r&&this.parent&&(r=this.parent.isBound(t)),r},e.prototype.isBoundNamed=function(t,r){return this.isBoundTagged(t,rr,r)},e.prototype.isBoundTagged=function(t,r,n){var i=!1;if(this._bindingDictionary.hasKey(t)){var a=this._bindingDictionary.get(t),o=Dx(this,t,r,n);i=a.some(function(u){return u.constraint(o)})}return!i&&this.parent&&(i=this.parent.isBoundTagged(t,r,n)),i},e.prototype.snapshot=function(){this._snapshots.push(Gx.of(this._bindingDictionary.clone(),this._middleware))},e.prototype.restore=function(){var t=this._snapshots.pop();if(t===void 0)throw new Error(ax);this._bindingDictionary=t.bindings,this._middleware=t.middleware},e.prototype.createChild=function(t){var r=new e(t||this.options);return r.parent=this,r},e.prototype.applyMiddleware=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];this._appliedMiddleware=this._appliedMiddleware.concat(t);var n=this._middleware?this._middleware:this._planAndResolve();this._middleware=t.reduce(function(i,a){return a(i)},n)},e.prototype.applyCustomMetadataReader=function(t){this._metadataReader=t},e.prototype.get=function(t){return this._get(!1,!1,dr.Variable,t)},e.prototype.getTagged=function(t,r,n){return this._get(!1,!1,dr.Variable,t,r,n)},e.prototype.getNamed=function(t,r){return this.getTagged(t,rr,r)},e.prototype.getAll=function(t){return this._get(!0,!0,dr.Variable,t)},e.prototype.getAllTagged=function(t,r,n){return this._get(!1,!0,dr.Variable,t,r,n)},e.prototype.getAllNamed=function(t,r){return this.getAllTagged(t,rr,r)},e.prototype.resolve=function(t){var r=this.createChild();return r.bind(t).toSelf(),this._appliedMiddleware.forEach(function(n){r.applyMiddleware(n)}),r.get(t)},e.prototype._getContainerModuleHelpersFactory=function(){var t=this,r=function(u,s){u._binding.moduleId=s},n=function(u){return function(s){var l=t.bind.bind(t),c=l(s);return r(c,u),c}},i=function(u){return function(s){var l=t.unbind.bind(t);l(s)}},a=function(u){return function(s){var l=t.isBound.bind(t);return l(s)}},o=function(u){return function(s){var l=t.rebind.bind(t),c=l(s);return r(c,u),c}};return function(u){return{bindFunction:n(u),isboundFunction:a(),rebindFunction:o(u),unbindFunction:i()}}},e.prototype._get=function(t,r,n,i,a,o){var u=null,s={avoidConstraints:t,contextInterceptor:function(l){return l},isMultiInject:r,key:a,serviceIdentifier:i,targetType:n,value:o};if(this._middleware){if(u=this._middleware(s),u==null)throw new Error(ox)}else u=this._planAndResolve()(s);return u},e.prototype._planAndResolve=function(){var t=this;return function(r){var n=Ox(t._metadataReader,t,r.isMultiInject,r.targetType,r.serviceIdentifier,r.key,r.value,r.avoidConstraints);n=r.contextInterceptor(n);var i=Vx(n);return i}},e}();function Re(){return function(e){if(Reflect.hasOwnMetadata(Iu,e))throw new Error(Z2);var t=Reflect.getMetadata(G2,e)||[];return Reflect.defineMetadata(Iu,t,e),e}}function Zx(){return function(e,t,r){var n=new Nr(xi,t);if(Reflect.hasOwnMetadata(xi,e.constructor))throw new Error(px);Reflect.defineMetadata(xi,n,e.constructor)}}var Xn=Symbol.for("INJECTION");function Ka(e,t,r,n){function i(){return n&&!Reflect.hasMetadata(Xn,this,t)&&Reflect.defineMetadata(Xn,r(),this,t),Reflect.hasMetadata(Xn,this,t)?Reflect.getMetadata(Xn,this,t):r()}function a(o){Reflect.defineMetadata(Xn,o,this,t)}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:i,set:a})}function qx(e,t){return function(r){return function(n,i){var a=function(){return e.get(r)};Ka(n,i,a,t)}}}function Kx(e,t){return function(r,n){return function(i,a){var o=function(){return e.getNamed(r,n)};Ka(i,a,o,t)}}}function Qx(e,t){return function(r,n,i){return function(a,o){var u=function(){return e.getTagged(r,n,i)};Ka(a,o,u,t)}}}function Jx(e,t){return function(r){return function(n,i){var a=function(){return e.getAll(r)};Ka(n,i,a,t)}}}function e3(e,t){t===void 0&&(t=!0);var r=qx(e,t),n=Kx(e,t),i=Qx(e,t),a=Jx(e,t);return{lazyInject:r,lazyInjectNamed:n,lazyInjectTagged:i,lazyMultiInject:a}}var q={IEventEmitter:Symbol.for("IEventEmitter"),ISceneService:Symbol.for("ISceneService"),IGlobalConfigService:Symbol.for("IGlobalConfigService"),ICameraService:Symbol.for("ICameraService"),ICoordinateSystemService:Symbol.for("ICoordinateSystemService"),ILayerService:Symbol.for("ILayerService"),IDebugService:Symbol.for("IDebugService"),ILayerMappingService:Symbol.for("ILayerMappingService"),ILayerStyleService:Symbol.for("ILayerStyleService"),IMapService:Symbol.for("IMapService"),IMarkerService:Symbol.for("IMarkerService"),IPopupService:Symbol.for("PopupService"),IFactoryMapService:Symbol.for("Factory<IMapService>"),IRendererService:Symbol.for("IRendererService"),IShaderModuleService:Symbol.for("IShaderModuleService"),IIconService:Symbol.for("IIconService"),IFontService:Symbol.for("IFontService"),IInteractionService:Symbol.for("IInteractionService"),IPickingService:Symbol.for("IPickingService"),IControlService:Symbol.for("IControlService"),IStyleAttributeService:Symbol.for("IStyleAttributeService"),ILayer:Symbol.for("ILayer"),ILayerPlugin:Symbol.for("ILayerPlugin"),INormalPass:Symbol.for("INormalPass"),IPostProcessor:Symbol.for("IPostProcessor"),IPostProcessingPass:Symbol.for("IPostProcessingPass"),IFactoryPostProcessingPass:Symbol.for("Factory<IPostProcessingPass>"),IFactoryNormalPass:Symbol.for("Factory<IFactoryNormalPass>"),IMultiPassRenderer:Symbol.for("IMultiPassRenderer"),SceneID:Symbol.for("SceneID"),MapConfig:Symbol.for("MapConfig")},Ms={exports:{}};Ms.exports=Vi;Ms.exports.default=Vi;var Tn=1e20;function Vi(e,t,r,n,i,a){this.fontSize=e||24,this.buffer=t===void 0?3:t,this.cutoff=n||.25,this.fontFamily=i||"sans-serif",this.fontWeight=a||"normal",this.radius=r||8;var o=this.size=this.fontSize+this.buffer*2,u=o+this.buffer*2;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=o,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textAlign="left",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(u*u),this.gridInner=new Float64Array(u*u),this.f=new Float64Array(u),this.z=new Float64Array(u+1),this.v=new Uint16Array(u),this.useMetrics=this.ctx.measureText("A").actualBoundingBoxLeft!==void 0,this.middle=Math.round(o/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function t3(e,t,r,n,i,a,o){a.fill(Tn,0,t*r),o.fill(0,0,t*r);for(var u=(t-n)/2,s=0;s<i;s++)for(var l=0;l<n;l++){var c=(s+u)*t+l+u,f=e.data[4*(s*n+l)+3]/255;if(f===1)a[c]=0,o[c]=Tn;else if(f===0)a[c]=Tn,o[c]=0;else{var h=Math.max(0,.5-f),d=Math.max(0,f-.5);a[c]=h*h,o[c]=d*d}}}function r3(e,t,r,n,i,a,o){for(var u=0;u<t*r;u++){var s=Math.sqrt(n[u])-Math.sqrt(i[u]);e[u]=Math.round(255-255*(s/a+o))}}Vi.prototype._draw=function(e,t){var r=this.ctx.measureText(e),n=r.width,i=2*this.buffer,a,o,u,s,l,c,f,h;t&&this.useMetrics?(l=Math.floor(r.actualBoundingBoxAscent),h=this.buffer+Math.ceil(r.actualBoundingBoxAscent),c=this.buffer,f=this.buffer,o=Math.min(this.size,Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft)),s=Math.min(this.size-c,Math.ceil(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)),a=o+i,u=s+i,this.ctx.textBaseline="alphabetic"):(a=o=this.size,u=s=this.size,l=19*this.fontSize/24,c=f=0,h=this.middle,this.ctx.textBaseline="middle");var d;o&&s&&(this.ctx.clearRect(f,c,o,s),this.ctx.fillText(e,this.buffer,h),d=this.ctx.getImageData(f,c,o,s));var v=new Uint8ClampedArray(a*u);return t3(d,a,u,o,s,this.gridOuter,this.gridInner),Wl(this.gridOuter,a,u,this.f,this.v,this.z),Wl(this.gridInner,a,u,this.f,this.v,this.z),r3(v,a,u,this.gridOuter,this.gridInner,this.radius,this.cutoff),{data:v,metrics:{width:o,height:s,sdfWidth:a,sdfHeight:u,top:l,left:0,advance:n}}};Vi.prototype.draw=function(e){return this._draw(e,!1).data};Vi.prototype.drawWithMetrics=function(e){return this._draw(e,!0)};function Wl(e,t,r,n,i,a){for(var o=0;o<t;o++)Yl(e,o,t,r,n,i,a);for(var u=0;u<r;u++)Yl(e,u*t,1,t,n,i,a)}function Yl(e,t,r,n,i,a,o){var u,s,l,c;for(a[0]=0,o[0]=-Tn,o[1]=Tn,u=0;u<n;u++)i[u]=e[t+u*r];for(u=1,s=0,l=0;u<n;u++){do c=a[s],l=(i[u]-i[c]+u*u-c*c)/(u-c)/2;while(l<=o[s]&&--s>-1);s++,a[s]=u,o[s]=l,o[s+1]=Tn}for(u=0,s=0;u<n;u++){for(;o[s+1]<u;)s++;c=a[s],e[t+u*r]=i[c]+(u-c)*(u-c)}}var n3=Ms.exports;const i3=_r(n3);function I0(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=a3(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function a3(e,t){if(e){if(typeof e=="string")return Xl(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Xl(e,t)}}function Xl(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Zn=30;function o3(e){var t=e.characterSet,r=e.getFontWidth,n=e.fontHeight,i=e.buffer,a=e.maxCanvasWidth,o=e.mapping,u=o===void 0?{}:o,s=e.xOffset,l=s===void 0?0:s,c=e.yOffset,f=c===void 0?0:c,h=0,d=l;Array.from(t).forEach(function(p,g){if(!u[p]){var m=r(p,g);d+Zn>a&&(d=0,h++),u[p]={x:d,y:f+h*Zn,width:Zn,height:Zn,advance:m},d+=Zn}});var v=n+i*2;return{mapping:u,xOffset:d,yOffset:f+h*v,canvasHeight:k0(f+(h+1)*v)}}function u3(e,t,r){var n=0,i=0,a=0,o=[],u={},s=I0(e),l;try{for(s.s();!(l=s.n()).done;){var c=l.value;if(!u[c.id]){var f=c.size;n+f+t>r&&(Zl(u,o,i),n=0,i=a+i+t,a=0,o=[]),o.push({icon:c,xOffset:n}),n=n+f+t,a=Math.max(a,f)}}}catch(d){s.e(d)}finally{s.f()}o.length>0&&Zl(u,o,i);var h=k0(a+i+t);return{mapping:u,canvasHeight:h}}function Zl(e,t,r){var n=I0(t),i;try{for(n.s();!(i=n.n()).done;){var a=i.value,o=a.icon,u=a.xOffset;e[o.id]=z(z({},o),{},{x:u,y:r,image:o.image,width:o.width,height:o.height})}}catch(s){n.e(s)}finally{n.f()}}function k0(e){return Math.pow(2,Math.ceil(Math.log2(e)))}var ql,Kl;function Ql(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=s3(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function s3(e,t){if(e){if(typeof e=="string")return Jl(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Jl(e,t)}}function Jl(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l3(e){var t=c3();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function c3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var f3=x3(),h3="sans-serif",d3="normal",v3=24,p3=3,g3=.25,m3=8,ec=1024,y3=1,tc=1,_3=3;function x3(){for(var e=[],t=32;t<128;t++)e.push(String.fromCharCode(t));return e}function rc(e,t,r,n){e.font="".concat(n," ").concat(r,"px ").concat(t),e.fillStyle="black",e.textBaseline="middle"}function nc(e,t){for(var r=0;r<e.length;r++)t.data[4*r+3]=e[r]}var b3=(ql=Re(),ql(Kl=function(e){be(r,e);var t=l3(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"fontAtlas",void 0),S(R(n),"iconFontMap",void 0),S(R(n),"iconFontGlyphs",{}),S(R(n),"fontOptions",void 0),S(R(n),"key",void 0),S(R(n),"cache",new A1(_3)),n}return ne(r,[{key:"scale",get:function(){return tc}},{key:"canvas",get:function(){var i=this.cache.get(this.key);return i&&i.data}},{key:"mapping",get:function(){var i=this.cache.get(this.key);return i&&i.mapping||{}}},{key:"getCanvasByKey",value:function(i){var a=this.cache.get(i);return a&&a.data}},{key:"getMappingByKey",value:function(i){var a=this.cache.get(i);return a&&a.mapping||{}}},{key:"init",value:function(){this.cache.clear(),this.fontOptions={fontFamily:h3,fontWeight:d3,characterSet:f3,fontSize:v3,buffer:p3,sdf:!0,cutoff:g3,radius:m3,iconfont:!1},this.key="",this.iconFontMap=new Map}},{key:"addIconGlyphs",value:function(i){var a=this;i.forEach(function(o){a.iconFontGlyphs[o.name]=o.unicode})}},{key:"addIconFont",value:function(i,a){this.iconFontMap.set(i,a)}},{key:"getIconFontKey",value:function(i){return this.iconFontMap.get(i)||i}},{key:"getGlyph",value:function(i){return this.iconFontGlyphs[i]?String.fromCharCode(parseInt(this.iconFontGlyphs[i],16)):""}},{key:"setFontOptions",value:function(i){this.fontOptions=z(z({},this.fontOptions),i),this.key=this.getKey();var a=this.getNewChars(this.key,this.fontOptions.characterSet),o=this.cache.get(this.key);if(!(o&&a.length===0)){var u=this.generateFontAtlas(this.key,a,o);this.fontAtlas=u,this.cache.set(this.key,u)}}},{key:"addFontFace",value:function(i,a){var o=this,u=document.createElement("style");u.type="text/css",u.innerText=`
        @font-face{
            font-family: '`.concat(i,`';
            src: url('`).concat(a,`') format('woff2'),
            url('`).concat(a,`') format('woff'),
            url('`).concat(a,`') format('truetype');
        }`),u.onload=function(){if(document.fonts)try{document.fonts.load("24px ".concat(i),"L7text"),document.fonts.ready.then(function(){o.emit("fontloaded",{fontFamily:i})})}catch(s){console.warn("当前环境不支持 document.fonts !"),console.warn("当前环境不支持 iconfont !"),console.warn(s)}},document.getElementsByTagName("head")[0].appendChild(u)}},{key:"destroy",value:function(){this.cache.clear(),this.iconFontMap.clear()}},{key:"generateFontAtlas",value:function(i,a,o){var u=this.fontOptions,s=u.fontFamily,l=u.fontWeight,c=u.fontSize,f=u.buffer,h=u.sdf,d=u.radius,v=u.cutoff,p=u.iconfont,g=o&&o.data;g||(g=window.document.createElement("canvas"),g.width=ec);var m=g.getContext("2d",{willReadFrequently:!0});rc(m,s,c,l);var _=o3(z({getFontWidth:function(H){return m.measureText(H).width},fontHeight:c*tc,buffer:f,characterSet:a,maxCanvasWidth:ec},o&&{mapping:o.mapping,xOffset:o.xOffset,yOffset:o.yOffset})),y=_.mapping,x=_.canvasHeight,b=_.xOffset,k=_.yOffset,T=m.getImageData(0,0,g.width,g.height);if(g.height=x,m.putImageData(T,0,0),rc(m,s,c,l),h){var D=new i3(c,f,d,v,s,l),U=m.getImageData(0,0,D.size,D.size),I=Ql(a),w;try{for(I.s();!(w=I.n()).done;){var M=w.value;if(p){var P=String.fromCharCode(parseInt(M.replace("&#x","").replace(";",""),16)),B=D.draw(P);nc(B,U)}else nc(D.draw(M),U);m.putImageData(U,y[M].x,y[M].y)}}catch(pe){I.e(pe)}finally{I.f()}}else{var J=Ql(a),se;try{for(J.s();!(se=J.n()).done;){var ce=se.value;m.fillText(ce,y[ce].x,y[ce].y+c*y3)}}catch(pe){J.e(pe)}finally{J.f()}}return{xOffset:b,yOffset:k,mapping:y,data:g,width:g.width,height:g.height}}},{key:"getKey",value:function(){var i=this.fontOptions,a=i.fontFamily,o=i.fontWeight;return"".concat(a,"_").concat(o)}},{key:"getNewChars",value:function(i,a){var o=this.cache.get(i);if(!o)return a;var u=[],s=o.mapping,l=new Set(Object.keys(s)),c=new Set(a);return c.forEach(function(f){l.has(f)||u.push(f)}),u}}]),r}(zt.EventEmitter))||Kl),ic,ac;function S3(e){var t=E3();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function E3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var C3=3,oc=1024,qn=64,A3=(ic=Re(),ic(ac=function(e){be(r,e);var t=S3(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"canvasHeight",128),S(R(n),"texture",void 0),S(R(n),"canvas",void 0),S(R(n),"iconData",void 0),S(R(n),"iconMap",void 0),S(R(n),"ctx",void 0),S(R(n),"loadingImageCount",0),n}return ne(r,[{key:"isLoading",value:function(){return this.loadingImageCount===0}},{key:"init",value:function(){this.iconData=[],this.iconMap={},this.canvas=window.document.createElement("canvas"),this.canvas.width=128,this.canvas.height=128,this.ctx=this.canvas.getContext("2d")}},{key:"addImage",value:function(){var n=Y(A.mark(function a(o,u){var s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=new Image,this.loadingImageCount++,this.hasImage(o)?console.warn("Image Id already exists"):this.iconData.push({id:o,size:qn}),this.updateIconMap(),f.next=6,this.loadImage(u);case 6:s=f.sent,l=this.iconData.find(function(h){return h.id===o}),l&&(l.image=s,l.width=s.width,l.height=s.height),this.update();case 10:case"end":return f.stop()}},a,this)}));function i(a,o){return n.apply(this,arguments)}return i}()},{key:"addImageMini",value:function(i,a,o){var u=this,s=o.getSceneConfig().canvas,l=s.createImage();if(this.loadingImageCount++,this.hasImage(i))throw new Error("Image Id already exists");this.iconData.push({id:i,size:qn}),this.updateIconMap(),this.loadImageMini(a,s).then(function(c){l=c;var f=u.iconData.find(function(h){return h.id===i});f&&(f.image=l,f.width=l.width,f.height=l.height),u.update()})}},{key:"getTexture",value:function(){return this.texture}},{key:"getIconMap",value:function(){return this.iconMap}},{key:"getCanvas",value:function(){return this.canvas}},{key:"hasImage",value:function(i){return this.iconMap.hasOwnProperty(i)}},{key:"removeImage",value:function(i){this.hasImage(i)&&(this.iconData=this.iconData.filter(function(a){return a.id!==i}),delete this.iconMap[i],this.update())}},{key:"destroy",value:function(){this.removeAllListeners("imageUpdate"),this.iconData=[],this.iconMap={}}},{key:"loadImage",value:function(i){return new Promise(function(a,o){if(i instanceof HTMLImageElement){a(i);return}var u=new Image;u.crossOrigin="anonymous",u.onload=function(){a(u)},u.onerror=function(){o(new Error("Could not load image at "+i))},u.src=i instanceof File?URL.createObjectURL(i):i})}},{key:"update",value:function(){this.updateIconMap(),this.updateIconAtlas(),this.loadingImageCount--,this.loadingImageCount===0&&this.emit("imageUpdate")}},{key:"updateIconAtlas",value:function(){var i=this;this.canvas.width=oc,this.canvas.height=this.canvasHeight,Object.keys(this.iconMap).forEach(function(a){var o=i.iconMap[a],u=o.x,s=o.y,l=o.image,c=o.width,f=c===void 0?64:c,h=o.height,d=h===void 0?64:h,v=Math.max(f,d),p=v/qn,g=d/p,m=f/p;l&&i.ctx.drawImage(l,u+(qn-m)/2,s+(qn-g)/2,m,g)})}},{key:"updateIconMap",value:function(){var i=u3(this.iconData,C3,oc),a=i.mapping,o=i.canvasHeight;this.iconMap=a,this.canvasHeight=o}},{key:"loadImageMini",value:function(i,a){return new Promise(function(o,u){var s=a.createImage();s.crossOrigin="anonymous",s.onload=function(){o(s)},s.onerror=function(){u(new Error("Could not load image at "+i))},s.src=i})}}]),r}(zt.EventEmitter))||ac),uc,sc,w3=(uc=Re(),uc(sc=function(){function e(){ie(this,e),S(this,"viewport",void 0),S(this,"overridedViewProjectionMatrix",void 0),S(this,"jitteredViewProjectionMatrix",void 0),S(this,"jitteredProjectionMatrix",void 0),S(this,"viewMatrixInverse",void 0),S(this,"cameraPosition",void 0)}return ne(e,[{key:"init",value:function(){}},{key:"update",value:function(r){this.viewport=r,this.viewMatrixInverse=xn(),pp(this.viewMatrixInverse,r.getViewMatrix()),this.cameraPosition=[this.viewMatrixInverse[12],this.viewMatrixInverse[13],this.viewMatrixInverse[14]]}},{key:"getProjectionMatrix",value:function(){return this.jitteredProjectionMatrix||this.viewport.getProjectionMatrix()}},{key:"getModelMatrix",value:function(){return this.viewport.getModelMatrix()}},{key:"getViewMatrix",value:function(){return this.viewport.getViewMatrix()}},{key:"getViewMatrixUncentered",value:function(){return this.viewport.getViewMatrixUncentered()}},{key:"getViewProjectionMatrixUncentered",value:function(){return this.viewport.getViewProjectionMatrixUncentered()}},{key:"getViewProjectionMatrix",value:function(){return this.overridedViewProjectionMatrix||this.jitteredViewProjectionMatrix||this.viewport.getViewProjectionMatrix()}},{key:"getZoom",value:function(){return this.viewport.getZoom()}},{key:"getZoomScale",value:function(){return this.viewport.getZoomScale()}},{key:"getCenter",value:function(){var r=this.viewport.getCenter(),n=Ie(r,2),i=n[0],a=n[1];return[i,a]}},{key:"getFocalDistance",value:function(){return this.viewport.getFocalDistance()}},{key:"getCameraPosition",value:function(){return this.cameraPosition}},{key:"projectFlat",value:function(r,n){return this.viewport.projectFlat(r,n)}},{key:"setViewProjectionMatrix",value:function(r){this.overridedViewProjectionMatrix=r}},{key:"jitterProjectionMatrix",value:function(r,n){var i=yp(xn(),[r,n,0]);this.jitteredProjectionMatrix=Zr(xn(),i,this.viewport.getProjectionMatrix()),this.jitteredViewProjectionMatrix=Zr(xn(),this.jitteredProjectionMatrix,this.viewport.getViewMatrix())}},{key:"clearJitterProjectionMatrix",value:function(){this.jitteredProjectionMatrix=void 0,this.jitteredViewProjectionMatrix=void 0}}]),e}())||sc),Ru=function(e){return e.TOPRIGHT="topright",e.TOPLEFT="topleft",e.BOTTOMRIGHT="bottomright",e.BOTTOMLEFT="bottomleft",e.TOPCENTER="topcenter",e.BOTTOMCENTER="bottomcenter",e.LEFTCENTER="leftcenter",e.RIGHTCENTER="rightcenter",e.LEFTTOP="lefttop",e.RIGHTTOP="righttop",e.LEFTBOTTOM="leftbottom",e.RIGHTBOTTOM="rightbottom",e}({}),lc,cc;function T3(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=M3(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function M3(e,t){if(e){if(typeof e=="string")return fc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fc(e,t)}}function fc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I3={topleft:"column",topright:"column",bottomright:"column",bottomleft:"column",leftcenter:"column",rightcenter:"column",topcenter:"row",bottomcenter:"row",lefttop:"row",righttop:"row",leftbottom:"row",rightbottom:"row"},k3=(lc=Re(),lc(cc=function(){function e(){ie(this,e),S(this,"container",void 0),S(this,"controlCorners",void 0),S(this,"controlContainer",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"controls",[]),S(this,"unAddControls",[])}return ne(e,[{key:"init",value:function(r,n){this.container=r.container,this.scene=n,this.mapsService=n.get(q.IMapService),this.initControlPos()}},{key:"addControl",value:function(r,n){var i=n.get(q.IMapService);i.map?(r.addTo(this.scene),this.controls.push(r)):this.unAddControls.push(r)}},{key:"getControlByName",value:function(r){return this.controls.find(function(n){return n.controlOption.name===r})}},{key:"removeControl",value:function(r){var n=this.controls.indexOf(r);return n>-1&&this.controls.splice(n,1),r.remove(),this}},{key:"addControls",value:function(){var r=this;this.unAddControls.forEach(function(n){n.addTo(r.scene),r.controls.push(n)}),this.unAddControls=[]}},{key:"destroy",value:function(){var r=T3(this.controls),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;i.remove()}}catch(a){r.e(a)}finally{r.f()}this.controls=[],this.clearControlPos()}},{key:"initControlPos",value:function(){var r=this.controlCorners={},n="l7-",i=this.controlContainer=Or("div",n+"control-container",this.container);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=u.map(function(l){return n+l}).join(" ");r[u.filter(function(l){return!["row","column"].includes(l)}).join("")]=Or("div",s,i)}function o(u){var s=u.replace(/^(top|bottom|left|right|center)/,"$1-").split("-");return[].concat(Q(s),[I3[u]])}Object.values(Ru).forEach(function(u){a(o(u))}),this.checkCornerOverlap()}},{key:"clearControlPos",value:function(){for(var r in this.controlCorners)this.controlCorners[r]&&wa(this.controlCorners[r]);this.controlContainer&&wa(this.controlContainer)}},{key:"checkCornerOverlap",value:function(){var r=this,n=window.MutationObserver;if(n)for(var i=function(){var s=o[a],l=s.match(/^(top|bottom)(left|right)$/);if(l){var c=Ie(l,3),f=c[1],h=c[2],d=r.controlCorners["".concat(f).concat(h)],v=new n(function(p){var g=Ie(p,1),m=g[0].target;d&&(d.style[f]=m.clientHeight+"px")});v.observe(r.controlCorners["".concat(h).concat(f)],{childList:!0,attributes:!0})}},a=0,o=Object.keys(this.controlCorners);a<o.length;a++)i()}}]),e}())||cc),hc,dc,L3=(hc=Re(),hc(dc=function(){function e(){ie(this,e),S(this,"container",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"markers",[]),S(this,"markerLayers",[]),S(this,"unAddMarkers",[]),S(this,"unAddMarkerLayers",[])}return ne(e,[{key:"addMarkerLayer",value:function(r){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markerLayers.push(r),r.addTo(this.scene)):this.unAddMarkerLayers.push(r)}},{key:"removeMarkerLayer",value:function(r){r.destroy(),this.markerLayers.indexOf(r);var n=this.markerLayers.indexOf(r);n>-1&&this.markerLayers.splice(n,1)}},{key:"addMarker",value:function(r){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markers.push(r),r.addTo(this.scene)):this.unAddMarkers.push(r)}},{key:"addMarkers",value:function(){var r=this;this.unAddMarkers.forEach(function(n){n.addTo(r.scene),r.markers.push(n)}),this.unAddMarkers=[]}},{key:"addMarkerLayers",value:function(){var r=this;this.unAddMarkerLayers.forEach(function(n){r.markerLayers.push(n),n.addTo(r.scene)}),this.unAddMarkers=[]}},{key:"removeMarker",value:function(r){r.remove(),this.markers.indexOf(r);var n=this.markers.indexOf(r);n>-1&&this.markers.splice(n,1)}},{key:"removeAllMarkers",value:function(){this.destroy()}},{key:"init",value:function(r){this.scene=r,this.mapsService=r.get(q.IMapService)}},{key:"destroy",value:function(){this.markers.forEach(function(r){r.remove()}),this.markers=[],this.markerLayers.forEach(function(r){r.destroy()}),this.markerLayers=[]}},{key:"removeMakerLayerMarker",value:function(r){r.destroy()}}]),e}())||dc),vc,pc,R3=(vc=Re(),vc(pc=function(){function e(){ie(this,e),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"popups",[]),S(this,"unAddPopups",[])}return ne(e,[{key:"isMarkerReady",get:function(){return this.mapsService.map&&this.mapsService.getMarkerContainer()}},{key:"removePopup",value:function(r){r!=null&&r.isOpen()&&r.remove();var n=this.popups.indexOf(r);n>-1&&this.popups.splice(n,1);var i=this.unAddPopups.indexOf(r);i>-1&&this.unAddPopups.splice(i,1)}},{key:"destroy",value:function(){this.popups.forEach(function(r){return r.remove()})}},{key:"addPopup",value:function(r){var n=this;r&&r.getOptions().autoClose&&[].concat(Q(this.popups),Q(this.unAddPopups)).forEach(function(i){i.getOptions().autoClose&&n.removePopup(i)}),this.isMarkerReady?(r.addTo(this.scene),this.popups.push(r)):this.unAddPopups.push(r),r.on("close",function(){n.removePopup(r)})}},{key:"initPopup",value:function(){var r=this;this.unAddPopups.length&&this.unAddPopups.forEach(function(n){r.addPopup(n),r.unAddPopups=[]})}},{key:"init",value:function(r){this.scene=r,this.mapsService=r.get(q.IMapService)}}]),e}())||pc),kr=function(e){return e.normal="normal",e.additive="additive",e.subtractive="subtractive",e.min="min",e.max="max",e.none="none",e}({}),Xr=function(e){return e.MULTIPLE="MULTIPLE",e.SINGLE="SINGLE",e}({}),Qa=function(e){return e.AND="and",e.OR="or",e}({}),vt=function(e){return e.INIT="init",e.UPDATE="update",e}({}),P3={MapToken:"您正在使用 Demo 测试 Token, 生产环境务必自行注册 Token 确保服务稳定 高德地图申请地址 https://lbs.amap.com/api/javascript-api/guide/abc/prepare  Mapbox地图申请地址 https://docs.mapbox.com/help/glossary/access-token/",SDK:"请确认引入了mapbox-gl api且在L7之前引入"},gc,mc,F3=Ze.merge,O3={id:"map",logoPosition:"bottomleft",logoVisible:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1,pickBufferScale:1,fitBoundsOptions:{animate:!1}},D3={colors:["rgb(103,0,31)","rgb(178,24,43)","rgb(214,96,77)","rgb(244,165,130)","rgb(253,219,199)","rgb(247,247,247)","rgb(209,229,240)","rgb(146,197,222)","rgb(67,147,195)","rgb(33,102,172)","rgb(5,48,97)"],size:10,shape:"circle",scales:{},shape2d:["circle","triangle","square","pentagon","hexagon","octogon","hexagram","rhombus","vesica"],shape3d:["cylinder","triangleColumn","hexagonColumn","squareColumn"],minZoom:-1,maxZoom:24,visible:!0,autoFit:!1,pickingBuffer:0,enablePropagation:!1,zIndex:0,blend:"normal",maskLayers:[],enableMask:!0,maskOperation:Qa.AND,pickedFeatureID:-1,enableMultiPassRenderer:!1,enablePicking:!0,active:!1,activeColor:"#2f54eb",enableHighlight:!1,enableSelect:!1,highlightColor:"#2f54eb",activeMix:0,selectColor:"blue",selectMix:0,enableTAA:!1,jitterScale:1,enableLighting:!1,animateOption:{enable:!1,interval:.2,duration:4,trailLength:.15},forward:!0},N3=(gc=Re(),gc(mc=function(){function e(){ie(this,e),S(this,"sceneConfigCache",{}),S(this,"layerConfigCache",{}),S(this,"layerAttributeConfigCache",{})}return ne(e,[{key:"getSceneConfig",value:function(r){return this.sceneConfigCache[r]}},{key:"getSceneWarninfo",value:function(r){return P3[r]}},{key:"setSceneConfig",value:function(r,n){this.sceneConfigCache[r]=z(z({},O3),n)}},{key:"getLayerConfig",value:function(r){return this.layerConfigCache[r]}},{key:"setLayerConfig",value:function(r,n,i){this.layerConfigCache[n]=z({},F3({},this.sceneConfigCache[r],D3,i))}},{key:"getAttributeConfig",value:function(r){return this.layerAttributeConfigCache[r]}},{key:"setAttributeConfig",value:function(r,n){this.layerAttributeConfigCache[r]=z(z({},this.layerAttributeConfigCache[r]),n)}},{key:"clean",value:function(){this.sceneConfigCache={},this.layerConfigCache={}}}]),e}())||mc);function Ne(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Oe(e,t,r,n,i){var a={};return Object.keys(n).forEach(function(o){a[o]=n[o]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(o,u){return u(e,t,o)||o},a),i&&a.initializer!==void 0&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0),a.initializer===void 0&&(Object.defineProperty(e,t,a),a=null),a}var No=Math.PI/180,B3=512,yc=4003e4;function _c(e){var t=e.latitude,r=t===void 0?0:t,n=e.zoom,i=n===void 0?0:n,a=e.scale,o=e.highPrecision,u=o===void 0?!1:o,s=e.flipY,l=s===void 0?!1:s;a=a!==void 0?a:Math.pow(2,i);var c={},f=B3*a,h=Math.cos(r*No),d=f/360,v=d/h,p=f/yc/h;if(c.pixelsPerMeter=[p,-p,p],c.metersPerPixel=[1/p,-1/p,1/p],c.pixelsPerDegree=[d,-v,p],c.degreesPerPixel=[1/d,-1/v,1/p],u){var g=No*Math.tan(r*No)/h,m=d*g/2,_=f/yc*g,y=_/v*p;c.pixelsPerDegree2=[0,-m,_],c.pixelsPerMeter2=[y,0,y],l&&(c.pixelsPerDegree2[1]=-c.pixelsPerDegree2[1],c.pixelsPerMeter2[1]=-c.pixelsPerMeter2[1])}return l&&(c.pixelsPerMeter[1]=-c.pixelsPerMeter[1],c.metersPerPixel[1]=-c.metersPerPixel[1],c.pixelsPerDegree[1]=-c.pixelsPerDegree[1],c.degreesPerPixel[1]=-c.degreesPerPixel[1]),c}var ua=function(e){return e[e.LNGLAT=1]="LNGLAT",e[e.LNGLAT_OFFSET=2]="LNGLAT_OFFSET",e[e.VECTOR_TILE=3]="VECTOR_TILE",e[e.IDENTITY=4]="IDENTITY",e[e.P20=5]="P20",e[e.P20_OFFSET=6]="P20_OFFSET",e[e.METER_OFFSET=7]="METER_OFFSET",e[e.P20_2=8]="P20_2",e}({}),jr={CoordinateSystem:"u_CoordinateSystem",ViewportCenter:"u_ViewportCenter",ViewportCenterProjection:"u_ViewportCenterProjection",PixelsPerDegree:"u_PixelsPerDegree",PixelsPerDegree2:"u_PixelsPerDegree2",PixelsPerMeter:"u_PixelsPerMeter",Mvp:"u_Mvp"},xc,bc,Sc,Bo,Ec,U3=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],z3=(xc=Re(),bc=Ue(q.ICameraService),xc(Sc=(Bo=function(){function e(){ie(this,e),S(this,"needRefresh",!0),Ne(this,"cameraService",Ec,this),S(this,"coordinateSystem",void 0),S(this,"viewportCenter",void 0),S(this,"viewportCenterProjection",void 0),S(this,"pixelsPerDegree",void 0),S(this,"pixelsPerDegree2",void 0),S(this,"pixelsPerMeter",void 0)}return ne(e,[{key:"refresh",value:function(r){var n=this.cameraService.getZoom(),i=this.cameraService.getZoomScale(),a=r||this.cameraService.getCenter(),o=_c({latitude:a[1],zoom:n}),u=o.pixelsPerMeter,s=o.pixelsPerDegree;this.viewportCenter=a,this.viewportCenterProjection=[0,0,0,0],this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=[0,0,0],this.coordinateSystem===ua.LNGLAT||this.coordinateSystem===ua.P20?this.cameraService.setViewProjectionMatrix(void 0):this.coordinateSystem===ua.LNGLAT_OFFSET?this.calculateLnglatOffset(a,n):this.coordinateSystem===ua.P20_OFFSET&&this.calculateLnglatOffset(a,n,i,!0),this.needRefresh=!1}},{key:"getCoordinateSystem",value:function(){return this.coordinateSystem}},{key:"setCoordinateSystem",value:function(r){this.coordinateSystem=r}},{key:"getViewportCenter",value:function(){return this.viewportCenter}},{key:"getViewportCenterProjection",value:function(){return this.viewportCenterProjection}},{key:"getPixelsPerDegree",value:function(){return this.pixelsPerDegree}},{key:"getPixelsPerDegree2",value:function(){return this.pixelsPerDegree2}},{key:"getPixelsPerMeter",value:function(){return this.pixelsPerMeter}},{key:"calculateLnglatOffset",value:function(r,n,i,a){var o=_c({latitude:r[1],zoom:n,scale:i,flipY:a,highPrecision:!0}),u=o.pixelsPerMeter,s=o.pixelsPerDegree,l=o.pixelsPerDegree2,c=this.cameraService.getViewMatrix(),f=this.cameraService.getProjectionMatrix(),h=Zr([],f,c),d=this.cameraService.projectFlat([Math.fround(r[0]),Math.fround(r[1])],Math.pow(2,n));this.viewportCenterProjection=Ap([],[d[0],d[1],0,1],h),c=this.cameraService.getViewMatrixUncentered()||c,h=Zr([],f,c),h=Zr([],h,U3),this.cameraService.setViewProjectionMatrix(h),this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=l}}]),e}(),Ec=Oe(Bo.prototype,"cameraService",[bc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bo))||Sc),Cc,Ac;function $3(e){var t=V3();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function V3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var j3=(Cc=Re(),Cc(Ac=function(e){be(r,e);var t=$3(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"renderMap",new Map),S(R(n),"enable",!1),S(R(n),"renderEnable",!1),S(R(n),"cacheLogs",{}),n}return ne(r,[{key:"setEnable",value:function(i){this.enable=!!i}},{key:"log",value:function(i,a){var o=this;if(this.enable){var u=i.split("."),s=null;u.forEach(function(l,c){s!==null?(s[l]||(s[l]={}),c!==u.length-1&&(s=s[l])):(o.cacheLogs[l]||(o.cacheLogs[l]={}),c!==u.length-1&&(s=o.cacheLogs[l])),c===u.length-1&&(s[l]=z(z({time:Date.now()},s[l]),a))})}}},{key:"getLog",value:function(i){var a=this;switch(hr(i)){case"string":return this.cacheLogs[i];case"object":return i.map(function(o){return a.cacheLogs[o]}).filter(function(o){return o!==void 0});case"undefined":return this.cacheLogs}}},{key:"removeLog",value:function(i){delete this.cacheLogs[i]}},{key:"generateRenderUid",value:function(){return this.renderEnable?C1():""}},{key:"renderDebug",value:function(i){this.renderEnable=i}},{key:"renderStart",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i)||{};this.renderMap.set(i,z(z({},a),{},{renderUid:i,renderStart:Date.now()}))}}},{key:"renderEnd",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i);if(a){var o=a.renderStart,u=Date.now();this.emit("renderEnd",z(z({},a),{},{renderEnd:u,renderDuration:u-o})),this.renderMap.delete(i)}}}},{key:"destroy",value:function(){this.cacheLogs=null,this.renderMap.clear()}}]),r}(zt.EventEmitter))||Ac),L0={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,r,n,i){var a=["","webkit","Moz","MS","ms","o"],o=r.createElement("div"),u="function",s=Math.round,l=Math.abs,c=Date.now;function f(E,C,F){return setTimeout(y(E,F),C)}function h(E,C,F){return Array.isArray(E)?(d(E,F[C],F),!0):!1}function d(E,C,F){var W;if(E)if(E.forEach)E.forEach(C,F);else if(E.length!==i)for(W=0;W<E.length;)C.call(F,E[W],W,E),W++;else for(W in E)E.hasOwnProperty(W)&&C.call(F,E[W],W,E)}function v(E,C,F){var W="DEPRECATED METHOD: "+C+`
`+F+` AT 
`;return function(){var le=new Error("get-stack-trace"),xe=le&&le.stack?le.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Ve=t.console&&(t.console.warn||t.console.log);return Ve&&Ve.call(t.console,W,xe),E.apply(this,arguments)}}var p;typeof Object.assign!="function"?p=function(C){if(C===i||C===null)throw new TypeError("Cannot convert undefined or null to object");for(var F=Object(C),W=1;W<arguments.length;W++){var le=arguments[W];if(le!==i&&le!==null)for(var xe in le)le.hasOwnProperty(xe)&&(F[xe]=le[xe])}return F}:p=Object.assign;var g=v(function(C,F,W){for(var le=Object.keys(F),xe=0;xe<le.length;)(!W||W&&C[le[xe]]===i)&&(C[le[xe]]=F[le[xe]]),xe++;return C},"extend","Use `assign`."),m=v(function(C,F){return g(C,F,!0)},"merge","Use `assign`.");function _(E,C,F){var W=C.prototype,le;le=E.prototype=Object.create(W),le.constructor=E,le._super=W,F&&p(le,F)}function y(E,C){return function(){return E.apply(C,arguments)}}function x(E,C){return typeof E==u?E.apply(C&&C[0]||i,C):E}function b(E,C){return E===i?C:E}function k(E,C,F){d(I(C),function(W){E.addEventListener(W,F,!1)})}function T(E,C,F){d(I(C),function(W){E.removeEventListener(W,F,!1)})}function D(E,C){for(;E;){if(E==C)return!0;E=E.parentNode}return!1}function U(E,C){return E.indexOf(C)>-1}function I(E){return E.trim().split(/\s+/g)}function w(E,C,F){if(E.indexOf&&!F)return E.indexOf(C);for(var W=0;W<E.length;){if(F&&E[W][F]==C||!F&&E[W]===C)return W;W++}return-1}function M(E){return Array.prototype.slice.call(E,0)}function P(E,C,F){for(var W=[],le=[],xe=0;xe<E.length;){var Ve=C?E[xe][C]:E[xe];w(le,Ve)<0&&W.push(E[xe]),le[xe]=Ve,xe++}return F&&(C?W=W.sort(function(_t,Mt){return _t[C]>Mt[C]}):W=W.sort()),W}function B(E,C){for(var F,W,le=C[0].toUpperCase()+C.slice(1),xe=0;xe<a.length;){if(F=a[xe],W=F?F+le:C,W in E)return W;xe++}return i}var J=1;function se(){return J++}function ce(E){var C=E.ownerDocument||E;return C.defaultView||C.parentWindow||t}var pe=/mobile|tablet|ip(ad|hone|od)|android/i,H="ontouchstart"in t,V=B(t,"PointerEvent")!==i,Z=H&&pe.test(navigator.userAgent),X="touch",fe="pen",ue="mouse",he="kinect",Be=25,Le=1,Qe=2,$=4,ae=8,me=1,ee=2,$e=4,ke=8,je=16,Pe=ee|$e,Te=ke|je,tt=Pe|Te,ut=["x","y"],at=["clientX","clientY"];function Xe(E,C){var F=this;this.manager=E,this.callback=C,this.element=E.element,this.target=E.options.inputTarget,this.domHandler=function(W){x(E.options.enable,[E])&&F.handler(W)},this.init()}Xe.prototype={handler:function(){},init:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(ce(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&T(this.element,this.evEl,this.domHandler),this.evTarget&&T(this.target,this.evTarget,this.domHandler),this.evWin&&T(ce(this.element),this.evWin,this.domHandler)}};function At(E){var C,F=E.options.inputClass;return F?C=F:V?C=De:Z?C=Wi:H?C=oo:C=Fe,new C(E,qt)}function qt(E,C,F){var W=F.pointers.length,le=F.changedPointers.length,xe=C&Le&&W-le===0,Ve=C&($|ae)&&W-le===0;F.isFirst=!!xe,F.isFinal=!!Ve,xe&&(E.session={}),F.eventType=C,j(E,F),E.emit("hammer.input",F),E.recognize(F),E.session.prevInput=F}function j(E,C){var F=E.session,W=C.pointers,le=W.length;F.firstInput||(F.firstInput=de(C)),le>1&&!F.firstMultiple?F.firstMultiple=de(C):le===1&&(F.firstMultiple=!1);var xe=F.firstInput,Ve=F.firstMultiple,pt=Ve?Ve.center:xe.center,_t=C.center=ve(W);C.timeStamp=c(),C.deltaTime=C.timeStamp-xe.timeStamp,C.angle=N(pt,_t),C.distance=O(pt,_t),te(F,C),C.offsetDirection=Me(C.deltaX,C.deltaY);var Mt=He(C.deltaTime,C.deltaX,C.deltaY);C.overallVelocityX=Mt.x,C.overallVelocityY=Mt.y,C.overallVelocity=l(Mt.x)>l(Mt.y)?Mt.x:Mt.y,C.scale=Ve?re(Ve.pointers,W):1,C.rotation=Ve?G(Ve.pointers,W):0,C.maxPointers=F.prevInput?C.pointers.length>F.prevInput.maxPointers?C.pointers.length:F.prevInput.maxPointers:C.pointers.length,oe(F,C);var Qt=E.element;D(C.srcEvent.target,Qt)&&(Qt=C.srcEvent.target),C.target=Qt}function te(E,C){var F=C.center,W=E.offsetDelta||{},le=E.prevDelta||{},xe=E.prevInput||{};(C.eventType===Le||xe.eventType===$)&&(le=E.prevDelta={x:xe.deltaX||0,y:xe.deltaY||0},W=E.offsetDelta={x:F.x,y:F.y}),C.deltaX=le.x+(F.x-W.x),C.deltaY=le.y+(F.y-W.y)}function oe(E,C){var F=E.lastInterval||C,W=C.timeStamp-F.timeStamp,le,xe,Ve,pt;if(C.eventType!=ae&&(W>Be||F.velocity===i)){var _t=C.deltaX-F.deltaX,Mt=C.deltaY-F.deltaY,Qt=He(W,_t,Mt);xe=Qt.x,Ve=Qt.y,le=l(Qt.x)>l(Qt.y)?Qt.x:Qt.y,pt=Me(_t,Mt),E.lastInterval=C}else le=F.velocity,xe=F.velocityX,Ve=F.velocityY,pt=F.direction;C.velocity=le,C.velocityX=xe,C.velocityY=Ve,C.direction=pt}function de(E){for(var C=[],F=0;F<E.pointers.length;)C[F]={clientX:s(E.pointers[F].clientX),clientY:s(E.pointers[F].clientY)},F++;return{timeStamp:c(),pointers:C,center:ve(C),deltaX:E.deltaX,deltaY:E.deltaY}}function ve(E){var C=E.length;if(C===1)return{x:s(E[0].clientX),y:s(E[0].clientY)};for(var F=0,W=0,le=0;le<C;)F+=E[le].clientX,W+=E[le].clientY,le++;return{x:s(F/C),y:s(W/C)}}function He(E,C,F){return{x:C/E||0,y:F/E||0}}function Me(E,C){return E===C?me:l(E)>=l(C)?E<0?ee:$e:C<0?ke:je}function O(E,C,F){F||(F=ut);var W=C[F[0]]-E[F[0]],le=C[F[1]]-E[F[1]];return Math.sqrt(W*W+le*le)}function N(E,C,F){F||(F=ut);var W=C[F[0]]-E[F[0]],le=C[F[1]]-E[F[1]];return Math.atan2(le,W)*180/Math.PI}function G(E,C){return N(C[1],C[0],at)+N(E[1],E[0],at)}function re(E,C){return O(C[0],C[1],at)/O(E[0],E[1],at)}var ye={mousedown:Le,mousemove:Qe,mouseup:$},Ke="mousedown",st="mousemove mouseup";function Fe(){this.evEl=Ke,this.evWin=st,this.pressed=!1,Xe.apply(this,arguments)}_(Fe,Xe,{handler:function(C){var F=ye[C.type];F&Le&&C.button===0&&(this.pressed=!0),F&Qe&&C.which!==1&&(F=$),this.pressed&&(F&$&&(this.pressed=!1),this.callback(this.manager,F,{pointers:[C],changedPointers:[C],pointerType:ue,srcEvent:C}))}});var ge={pointerdown:Le,pointermove:Qe,pointerup:$,pointercancel:ae,pointerout:ae},Ce={2:X,3:fe,4:ue,5:he},Ee="pointerdown",Ae="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(Ee="MSPointerDown",Ae="MSPointerMove MSPointerUp MSPointerCancel");function De(){this.evEl=Ee,this.evWin=Ae,Xe.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}_(De,Xe,{handler:function(C){var F=this.store,W=!1,le=C.type.toLowerCase().replace("ms",""),xe=ge[le],Ve=Ce[C.pointerType]||C.pointerType,pt=Ve==X,_t=w(F,C.pointerId,"pointerId");xe&Le&&(C.button===0||pt)?_t<0&&(F.push(C),_t=F.length-1):xe&($|ae)&&(W=!0),!(_t<0)&&(F[_t]=C,this.callback(this.manager,xe,{pointers:F,changedPointers:[C],pointerType:Ve,srcEvent:C}),W&&F.splice(_t,1))}});var Je={touchstart:Le,touchmove:Qe,touchend:$,touchcancel:ae},rt="touchstart",Dt="touchstart touchmove touchend touchcancel";function zn(){this.evTarget=rt,this.evWin=Dt,this.started=!1,Xe.apply(this,arguments)}_(zn,Xe,{handler:function(C){var F=Je[C.type];if(F===Le&&(this.started=!0),!!this.started){var W=io.call(this,C,F);F&($|ae)&&W[0].length-W[1].length===0&&(this.started=!1),this.callback(this.manager,F,{pointers:W[0],changedPointers:W[1],pointerType:X,srcEvent:C})}}});function io(E,C){var F=M(E.touches),W=M(E.changedTouches);return C&($|ae)&&(F=P(F.concat(W),"identifier",!0)),[F,W]}var ao={touchstart:Le,touchmove:Qe,touchend:$,touchcancel:ae},Jg="touchstart touchmove touchend touchcancel";function Wi(){this.evTarget=Jg,this.targetIds={},Xe.apply(this,arguments)}_(Wi,Xe,{handler:function(C){var F=ao[C.type],W=em.call(this,C,F);W&&this.callback(this.manager,F,{pointers:W[0],changedPointers:W[1],pointerType:X,srcEvent:C})}});function em(E,C){var F=M(E.touches),W=this.targetIds;if(C&(Le|Qe)&&F.length===1)return W[F[0].identifier]=!0,[F,F];var le,xe,Ve=M(E.changedTouches),pt=[],_t=this.target;if(xe=F.filter(function(Mt){return D(Mt.target,_t)}),C===Le)for(le=0;le<xe.length;)W[xe[le].identifier]=!0,le++;for(le=0;le<Ve.length;)W[Ve[le].identifier]&&pt.push(Ve[le]),C&($|ae)&&delete W[Ve[le].identifier],le++;if(pt.length)return[P(xe.concat(pt),"identifier",!0),pt]}var tm=2500,Xs=25;function oo(){Xe.apply(this,arguments);var E=y(this.handler,this);this.touch=new Wi(this.manager,E),this.mouse=new Fe(this.manager,E),this.primaryTouch=null,this.lastTouches=[]}_(oo,Xe,{handler:function(C,F,W){var le=W.pointerType==X,xe=W.pointerType==ue;if(!(xe&&W.sourceCapabilities&&W.sourceCapabilities.firesTouchEvents)){if(le)rm.call(this,F,W);else if(xe&&nm.call(this,W))return;this.callback(C,F,W)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function rm(E,C){E&Le?(this.primaryTouch=C.changedPointers[0].identifier,Zs.call(this,C)):E&($|ae)&&Zs.call(this,C)}function Zs(E){var C=E.changedPointers[0];if(C.identifier===this.primaryTouch){var F={x:C.clientX,y:C.clientY};this.lastTouches.push(F);var W=this.lastTouches,le=function(){var xe=W.indexOf(F);xe>-1&&W.splice(xe,1)};setTimeout(le,tm)}}function nm(E){for(var C=E.srcEvent.clientX,F=E.srcEvent.clientY,W=0;W<this.lastTouches.length;W++){var le=this.lastTouches[W],xe=Math.abs(C-le.x),Ve=Math.abs(F-le.y);if(xe<=Xs&&Ve<=Xs)return!0}return!1}var qs=B(o.style,"touchAction"),Ks=qs!==i,Qs="compute",Js="auto",uo="manipulation",$r="none",$n="pan-x",Vn="pan-y",Yi=am();function so(E,C){this.manager=E,this.set(C)}so.prototype={set:function(E){E==Qs&&(E=this.compute()),Ks&&this.manager.element.style&&Yi[E]&&(this.manager.element.style[qs]=E),this.actions=E.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var E=[];return d(this.manager.recognizers,function(C){x(C.options.enable,[C])&&(E=E.concat(C.getTouchAction()))}),im(E.join(" "))},preventDefaults:function(E){var C=E.srcEvent,F=E.offsetDirection;if(this.manager.session.prevented){C.preventDefault();return}var W=this.actions,le=U(W,$r)&&!Yi[$r],xe=U(W,Vn)&&!Yi[Vn],Ve=U(W,$n)&&!Yi[$n];if(le){var pt=E.pointers.length===1,_t=E.distance<2,Mt=E.deltaTime<250;if(pt&&_t&&Mt)return}if(!(Ve&&xe)&&(le||xe&&F&Pe||Ve&&F&Te))return this.preventSrc(C)},preventSrc:function(E){this.manager.session.prevented=!0,E.preventDefault()}};function im(E){if(U(E,$r))return $r;var C=U(E,$n),F=U(E,Vn);return C&&F?$r:C||F?C?$n:Vn:U(E,uo)?uo:Js}function am(){if(!Ks)return!1;var E={},C=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(F){E[F]=C?t.CSS.supports("touch-action",F):!0}),E}var Xi=1,$t=2,on=4,br=8,ar=br,jn=16,Kt=32;function or(E){this.options=p({},this.defaults,E||{}),this.id=se(),this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=Xi,this.simultaneous={},this.requireFail=[]}or.prototype={defaults:{},set:function(E){return p(this.options,E),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(E){if(h(E,"recognizeWith",this))return this;var C=this.simultaneous;return E=Zi(E,this),C[E.id]||(C[E.id]=E,E.recognizeWith(this)),this},dropRecognizeWith:function(E){return h(E,"dropRecognizeWith",this)?this:(E=Zi(E,this),delete this.simultaneous[E.id],this)},requireFailure:function(E){if(h(E,"requireFailure",this))return this;var C=this.requireFail;return E=Zi(E,this),w(C,E)===-1&&(C.push(E),E.requireFailure(this)),this},dropRequireFailure:function(E){if(h(E,"dropRequireFailure",this))return this;E=Zi(E,this);var C=w(this.requireFail,E);return C>-1&&this.requireFail.splice(C,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(E){return!!this.simultaneous[E.id]},emit:function(E){var C=this,F=this.state;function W(le){C.manager.emit(le,E)}F<br&&W(C.options.event+el(F)),W(C.options.event),E.additionalEvent&&W(E.additionalEvent),F>=br&&W(C.options.event+el(F))},tryEmit:function(E){if(this.canEmit())return this.emit(E);this.state=Kt},canEmit:function(){for(var E=0;E<this.requireFail.length;){if(!(this.requireFail[E].state&(Kt|Xi)))return!1;E++}return!0},recognize:function(E){var C=p({},E);if(!x(this.options.enable,[this,C])){this.reset(),this.state=Kt;return}this.state&(ar|jn|Kt)&&(this.state=Xi),this.state=this.process(C),this.state&($t|on|br|jn)&&this.tryEmit(C)},process:function(E){},getTouchAction:function(){},reset:function(){}};function el(E){return E&jn?"cancel":E&br?"end":E&on?"move":E&$t?"start":""}function tl(E){return E==je?"down":E==ke?"up":E==ee?"left":E==$e?"right":""}function Zi(E,C){var F=C.manager;return F?F.get(E):E}function Yt(){or.apply(this,arguments)}_(Yt,or,{defaults:{pointers:1},attrTest:function(E){var C=this.options.pointers;return C===0||E.pointers.length===C},process:function(E){var C=this.state,F=E.eventType,W=C&($t|on),le=this.attrTest(E);return W&&(F&ae||!le)?C|jn:W||le?F&$?C|br:C&$t?C|on:$t:Kt}});function qi(){Yt.apply(this,arguments),this.pX=null,this.pY=null}_(qi,Yt,{defaults:{event:"pan",threshold:10,pointers:1,direction:tt},getTouchAction:function(){var E=this.options.direction,C=[];return E&Pe&&C.push(Vn),E&Te&&C.push($n),C},directionTest:function(E){var C=this.options,F=!0,W=E.distance,le=E.direction,xe=E.deltaX,Ve=E.deltaY;return le&C.direction||(C.direction&Pe?(le=xe===0?me:xe<0?ee:$e,F=xe!=this.pX,W=Math.abs(E.deltaX)):(le=Ve===0?me:Ve<0?ke:je,F=Ve!=this.pY,W=Math.abs(E.deltaY))),E.direction=le,F&&W>C.threshold&&le&C.direction},attrTest:function(E){return Yt.prototype.attrTest.call(this,E)&&(this.state&$t||!(this.state&$t)&&this.directionTest(E))},emit:function(E){this.pX=E.deltaX,this.pY=E.deltaY;var C=tl(E.direction);C&&(E.additionalEvent=this.options.event+C),this._super.emit.call(this,E)}});function lo(){Yt.apply(this,arguments)}_(lo,Yt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[$r]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.scale-1)>this.options.threshold||this.state&$t)},emit:function(E){if(E.scale!==1){var C=E.scale<1?"in":"out";E.additionalEvent=this.options.event+C}this._super.emit.call(this,E)}});function co(){or.apply(this,arguments),this._timer=null,this._input=null}_(co,or,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Js]},process:function(E){var C=this.options,F=E.pointers.length===C.pointers,W=E.distance<C.threshold,le=E.deltaTime>C.time;if(this._input=E,!W||!F||E.eventType&($|ae)&&!le)this.reset();else if(E.eventType&Le)this.reset(),this._timer=f(function(){this.state=ar,this.tryEmit()},C.time,this);else if(E.eventType&$)return ar;return Kt},reset:function(){clearTimeout(this._timer)},emit:function(E){this.state===ar&&(E&&E.eventType&$?this.manager.emit(this.options.event+"up",E):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function fo(){Yt.apply(this,arguments)}_(fo,Yt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[$r]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.rotation)>this.options.threshold||this.state&$t)}});function ho(){Yt.apply(this,arguments)}_(ho,Yt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Pe|Te,pointers:1},getTouchAction:function(){return qi.prototype.getTouchAction.call(this)},attrTest:function(E){var C=this.options.direction,F;return C&(Pe|Te)?F=E.overallVelocity:C&Pe?F=E.overallVelocityX:C&Te&&(F=E.overallVelocityY),this._super.attrTest.call(this,E)&&C&E.offsetDirection&&E.distance>this.options.threshold&&E.maxPointers==this.options.pointers&&l(F)>this.options.velocity&&E.eventType&$},emit:function(E){var C=tl(E.offsetDirection);C&&this.manager.emit(this.options.event+C,E),this.manager.emit(this.options.event,E)}});function Ki(){or.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}_(Ki,or,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[uo]},process:function(E){var C=this.options,F=E.pointers.length===C.pointers,W=E.distance<C.threshold,le=E.deltaTime<C.time;if(this.reset(),E.eventType&Le&&this.count===0)return this.failTimeout();if(W&&le&&F){if(E.eventType!=$)return this.failTimeout();var xe=this.pTime?E.timeStamp-this.pTime<C.interval:!0,Ve=!this.pCenter||O(this.pCenter,E.center)<C.posThreshold;this.pTime=E.timeStamp,this.pCenter=E.center,!Ve||!xe?this.count=1:this.count+=1,this._input=E;var pt=this.count%C.taps;if(pt===0)return this.hasRequireFailures()?(this._timer=f(function(){this.state=ar,this.tryEmit()},C.interval,this),$t):ar}return Kt},failTimeout:function(){return this._timer=f(function(){this.state=Kt},this.options.interval,this),Kt},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ar&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function ur(E,C){return C=C||{},C.recognizers=b(C.recognizers,ur.defaults.preset),new vo(E,C)}ur.VERSION="2.0.7",ur.defaults={domEvents:!1,touchAction:Qs,enable:!0,inputTarget:null,inputClass:null,preset:[[fo,{enable:!1}],[lo,{enable:!1},["rotate"]],[ho,{direction:Pe}],[qi,{direction:Pe},["swipe"]],[Ki],[Ki,{event:"doubletap",taps:2},["tap"]],[co]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var om=1,rl=2;function vo(E,C){this.options=p({},ur.defaults,C||{}),this.options.inputTarget=this.options.inputTarget||E,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=E,this.input=At(this),this.touchAction=new so(this,this.options.touchAction),nl(this,!0),d(this.options.recognizers,function(F){var W=this.add(new F[0](F[1]));F[2]&&W.recognizeWith(F[2]),F[3]&&W.requireFailure(F[3])},this)}vo.prototype={set:function(E){return p(this.options,E),E.touchAction&&this.touchAction.update(),E.inputTarget&&(this.input.destroy(),this.input.target=E.inputTarget,this.input.init()),this},stop:function(E){this.session.stopped=E?rl:om},recognize:function(E){var C=this.session;if(!C.stopped){this.touchAction.preventDefaults(E);var F,W=this.recognizers,le=C.curRecognizer;(!le||le&&le.state&ar)&&(le=C.curRecognizer=null);for(var xe=0;xe<W.length;)F=W[xe],C.stopped!==rl&&(!le||F==le||F.canRecognizeWith(le))?F.recognize(E):F.reset(),!le&&F.state&($t|on|br)&&(le=C.curRecognizer=F),xe++}},get:function(E){if(E instanceof or)return E;for(var C=this.recognizers,F=0;F<C.length;F++)if(C[F].options.event==E)return C[F];return null},add:function(E){if(h(E,"add",this))return this;var C=this.get(E.options.event);return C&&this.remove(C),this.recognizers.push(E),E.manager=this,this.touchAction.update(),E},remove:function(E){if(h(E,"remove",this))return this;if(E=this.get(E),E){var C=this.recognizers,F=w(C,E);F!==-1&&(C.splice(F,1),this.touchAction.update())}return this},on:function(E,C){if(E!==i&&C!==i){var F=this.handlers;return d(I(E),function(W){F[W]=F[W]||[],F[W].push(C)}),this}},off:function(E,C){if(E!==i){var F=this.handlers;return d(I(E),function(W){C?F[W]&&F[W].splice(w(F[W],C),1):delete F[W]}),this}},emit:function(E,C){this.options.domEvents&&um(E,C);var F=this.handlers[E]&&this.handlers[E].slice();if(!(!F||!F.length)){C.type=E,C.preventDefault=function(){C.srcEvent.preventDefault()};for(var W=0;W<F.length;)F[W](C),W++}},destroy:function(){this.element&&nl(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function nl(E,C){var F=E.element;if(F.style){var W;d(E.options.cssProps,function(le,xe){W=B(F.style,xe),C?(E.oldCssProps[W]=F.style[W],F.style[W]=le):F.style[W]=E.oldCssProps[W]||""}),C||(E.oldCssProps={})}}function um(E,C){var F=r.createEvent("Event");F.initEvent(E,!0,!0),F.gesture=C,C.target.dispatchEvent(F)}p(ur,{INPUT_START:Le,INPUT_MOVE:Qe,INPUT_END:$,INPUT_CANCEL:ae,STATE_POSSIBLE:Xi,STATE_BEGAN:$t,STATE_CHANGED:on,STATE_ENDED:br,STATE_RECOGNIZED:ar,STATE_CANCELLED:jn,STATE_FAILED:Kt,DIRECTION_NONE:me,DIRECTION_LEFT:ee,DIRECTION_RIGHT:$e,DIRECTION_UP:ke,DIRECTION_DOWN:je,DIRECTION_HORIZONTAL:Pe,DIRECTION_VERTICAL:Te,DIRECTION_ALL:tt,Manager:vo,Input:Xe,TouchAction:so,TouchInput:Wi,MouseInput:Fe,PointerEventInput:De,TouchMouseInput:oo,SingleTouchInput:zn,Recognizer:or,AttrRecognizer:Yt,Tap:Ki,Pan:qi,Swipe:ho,Pinch:lo,Rotate:fo,Press:co,on:k,off:T,each:d,merge:m,extend:g,assign:p,inherit:_,bindFn:y,prefixed:B});var sm=typeof t<"u"?t:typeof self<"u"?self:{};sm.Hammer=ur,typeof i=="function"&&i.amd?i(function(){return ur}):e.exports?e.exports=ur:t[n]=ur})(window,document,"Hammer")})(L0);var H3=L0.exports;const Kn=_r(H3);var Rt=function(e){return e.Hover="hover",e.Click="click",e.Select="select",e.Active="active",e.Drag="drag",e}({}),wc,Tc,Mc,Uo,Ic;function G3(e){var t=W3();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function W3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Y3={panstart:"dragstart",panmove:"dragging",panend:"dragend",pancancel:"dragcancel"},X3=(wc=Re(),Tc=Ue(q.IMapService),wc(Mc=(Uo=function(e){be(r,e);var t=G3(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"indragging",!1),Ne(R(n),"mapService",Ic,R(n)),S(R(n),"hammertime",void 0),S(R(n),"lastClickTime",0),S(R(n),"lastClickXY",[-1,-1]),S(R(n),"clickTimer",void 0),S(R(n),"$containter",void 0),S(R(n),"onDrag",function(u){var s=n.interactionEvent(u);s.type=Y3[s.type],s.type==="dragging"?n.indragging=!0:n.indragging=!1,n.emit(Rt.Drag,s)}),S(R(n),"onHammer",function(u){u.srcEvent.stopPropagation();var s=n.interactionEvent(u);n.emit(Rt.Hover,s)}),S(R(n),"onTouch",function(u){var s=u.touches[0];n.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchstart"})}),S(R(n),"onTouchEnd",function(u){if(u.changedTouches.length>0){var s=u.changedTouches[0];n.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchend"})}}),S(R(n),"onTouchMove",function(u){var s=u.changedTouches[0];n.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchmove"})}),S(R(n),"onHover",function(u){var s=u.clientX,l=u.clientY,c=s,f=l,h=u.type,d=n.mapService.getMapContainer();if(d){var v=d.getBoundingClientRect(),p=v.top,g=v.left;c=c-g-d.clientLeft,f=f-p-d.clientTop}var m=n.mapService.containerToLngLat([c,f]);if(h==="click"){n.isDoubleTap(c,f,m);return}if(h==="touch"){n.isDoubleTap(c,f,m);return}h!=="click"&&h!=="dblclick"&&n.emit(Rt.Hover,{x:c,y:f,lngLat:m,type:h,target:u})}),n}return ne(r,[{key:"init",value:function(){this.addEventListenerOnMap(),this.$containter=this.mapService.getMapContainer()}},{key:"destroy",value:function(){this.hammertime&&this.hammertime.destroy(),this.removeEventListenerOnMap(),this.off(Rt.Hover)}},{key:"triggerHover",value:function(i){var a=i.x,o=i.y;this.emit(Rt.Hover,{x:a,y:o})}},{key:"triggerSelect",value:function(i){this.emit(Rt.Select,{featureId:i})}},{key:"triggerActive",value:function(i){this.emit(Rt.Active,{featureId:i})}},{key:"addEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();if(i){var a=new Kn.Manager(i);a.add(new Kn.Tap({event:"dblclick",taps:2})),a.add(new Kn.Tap({event:"click"})),a.add(new Kn.Pan({threshold:0,pointers:0})),a.add(new Kn.Press({})),a.on("dblclick click",this.onHammer),a.on("panstart panmove panend pancancel",this.onDrag),i.addEventListener("touchstart",this.onTouch),i.addEventListener("touchend",this.onTouchEnd),i.addEventListener("mousemove",this.onHover),i.addEventListener("touchmove",this.onTouchMove),i.addEventListener("mousedown",this.onHover,!0),i.addEventListener("mouseup",this.onHover),i.addEventListener("contextmenu",this.onHover),this.hammertime=a}}},{key:"removeEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();i&&(i.removeEventListener("mousemove",this.onHover),this.hammertime.off("dblclick click",this.onHammer),this.hammertime.off("panstart panmove panend pancancel",this.onDrag),i.removeEventListener("touchstart",this.onTouch),i.removeEventListener("touchend",this.onTouchEnd),i.removeEventListener("mousedown",this.onHover),i.removeEventListener("mouseup",this.onHover),i.removeEventListener("contextmenu",this.onHover))}},{key:"interactionEvent",value:function(i){var a=i.type,o=i.pointerType,u,s;o==="touch"?(s=Math.floor(i.pointers[0].clientY),u=Math.floor(i.pointers[0].clientX)):(s=Math.floor(i.srcEvent.y),u=Math.floor(i.srcEvent.x));var l=this.mapService.getMapContainer();if(l){var c=l.getBoundingClientRect(),f=c.top,h=c.left;u-=h,s-=f}var d=this.mapService.containerToLngLat([u,s]);return{x:u,y:s,lngLat:d,type:a,target:i.srcEvent}}},{key:"isDoubleTap",value:function(i,a,o){var u=this,s=new Date().getTime(),l="click";s-this.lastClickTime<400&&Math.abs(this.lastClickXY[0]-i)<10&&Math.abs(this.lastClickXY[1]-a)<10?(this.lastClickTime=0,this.lastClickXY=[-1,-1],this.clickTimer&&clearTimeout(this.clickTimer),l="dblclick",this.emit(Rt.Hover,{x:i,y:a,lngLat:o,type:l})):(this.lastClickTime=s,this.lastClickXY=[i,a],this.clickTimer=setTimeout(function(){l="click",u.emit(Rt.Hover,{x:i,y:a,lngLat:o,type:l})},400))}}]),r}(vs),Ic=Oe(Uo.prototype,"mapService",[Tc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Uo))||Mc),Z3=0;function q3(e){var t=e;if(typeof e=="string"&&(t=document.getElementById(e)),t){var r=document.createElement("div");return r.style.cssText+=`
      position: absolute;
      z-index:2;
      height: 100%;
      width: 100%;
      pointer-events: none;
    `,r.id="l7-scene-".concat(Z3++),r.classList.add("l7-scene"),t.appendChild(r),r}return null}function K3(e){var t,r=!0;if((e==null||(t=e.target)===null||t===void 0?void 0:t.target)instanceof HTMLElement)for(var n,i=e==null||(n=e.target)===null||n===void 0?void 0:n.target;i;){var a,o=Array.from(i.classList);if(o.includes("l7-marker")||o.includes("l7-popup")){r=!1;break}i=(a=i)===null||a===void 0?void 0:a.parentElement}return r}var Q3=function(e){return e[e.SAMPLED=0]="SAMPLED",e[e.RENDER_TARGET=1]="RENDER_TARGET",e}({}),kc,Lc,Rc,Pc,Fc,Oc,Dc,Hr,Nc,Bc,Uc,zc,$c;function J3(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=eb(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function eb(e,t){if(e){if(typeof e=="string")return Vc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vc(e,t)}}function Vc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var tb=(kc=Re(),Lc=Ue(q.IMapService),Rc=Ue(q.IRendererService),Pc=Ue(q.IGlobalConfigService),Fc=Ue(q.IInteractionService),Oc=Ue(q.ILayerService),kc(Dc=(Hr=function(){function e(){var t=this;ie(this,e),S(this,"pickedColors",void 0),S(this,"pickedTileLayers",[]),Ne(this,"mapService",Nc,this),Ne(this,"rendererService",Bc,this),Ne(this,"configService",Uc,this),Ne(this,"interactionService",zc,this),Ne(this,"layerService",$c,this),S(this,"pickingFBO",void 0),S(this,"width",0),S(this,"height",0),S(this,"alreadyInPicking",!1),S(this,"pickBufferScale",1),S(this,"pickFromPickingFBO",function(){var r=Y(A.mark(function n(i,a){var o,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,k,T,D,U,I,w,M;return A.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(o=a.x,u=a.y,s=a.lngLat,l=a.type,c=a.target,f=!1,h=t.rendererService,d=h.readPixelsAsync,v=h.getContainer,p=t.getContainerSize(v()),g=p.width,m=p.height,g*=nt,m*=nt,_=i.getLayerConfig(),y=_.enableHighlight,x=_.enableSelect,b=o*nt,k=u*nt,!(b>g-1*nt||b<0||k>m-1*nt||k<0)){B.next=11;break}return B.abrupt("return",!1);case 11:return B.next=13,d({x:Math.floor(b/t.pickBufferScale),y:Math.floor((m-(u+1)*nt)/t.pickBufferScale),width:1,height:1,data:new Uint8Array(4),framebuffer:t.pickingFBO});case 13:return T=B.sent,t.pickedColors=T,T[0]!==0||T[1]!==0||T[2]!==0?(D=qr(T),U=i.layerPickService.getFeatureById(D),D!==i.getCurrentPickId()&&l==="mousemove"&&(l="mouseenter"),I={x:o,y:u,type:l,lngLat:s,featureId:D,feature:U,target:c},U&&(f=!0,i.setCurrentPickId(D),t.triggerHoverOnLayer(i,I))):(w={x:o,y:u,lngLat:s,type:i.getCurrentPickId()!==null&&l==="mousemove"?"mouseout":"un"+l,featureId:null,target:c,feature:null},t.triggerHoverOnLayer(i,z(z({},w),{},{type:"unpick"})),t.triggerHoverOnLayer(i,w),i.setCurrentPickId(null)),y&&i.layerPickService.highlightPickedFeature(T),x&&l==="click"&&(T==null?void 0:T.toString())!==[0,0,0,0].toString()&&(M=qr(T),i.getCurrentSelectedId()===null||M!==i.getCurrentSelectedId()?(i.layerPickService.selectFeature(T),i.setCurrentSelectedId(M)):(i.layerPickService.selectFeature(new Uint8Array([0,0,0,0])),i.setCurrentSelectedId(null))),B.abrupt("return",f);case 19:case"end":return B.stop()}},n)}));return function(n,i){return r.apply(this,arguments)}}())}return ne(e,[{key:"init",value:function(r){var n=this.rendererService,i=n.createTexture2D,a=n.createFramebuffer,o=n.getContainer,u=this.getContainerSize(o()),s=u.width,l=u.height;s*=nt,l*=nt,this.pickBufferScale=this.configService.getSceneConfig(r).pickBufferScale||1,s=Math.round(s/this.pickBufferScale),l=Math.round(l/this.pickBufferScale);var c=i({width:s,height:l,usage:Q3.RENDER_TARGET,label:"Picking Texture"});this.pickingFBO=a({color:c,depth:!0,width:s,height:l}),this.interactionService.on(Rt.Hover,this.pickingAllLayer.bind(this))}},{key:"boxPickLayer",value:function(){var t=Y(A.mark(function n(i,a,o){var u=this,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=this.rendererService,l=s.useFramebufferAsync,c=s.clear,this.resizePickingFBO(),i.hooks.beforePickingEncode.call(),d.next=5,l(this.pickingFBO,Y(A.mark(function v(){return A.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:c({framebuffer:u.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),i.renderModels({ispick:!0});case 2:case"end":return g.stop()}},v)})));case 5:return i.hooks.afterPickingEncode.call(),d.next=8,this.pickBox(i,a);case 8:f=d.sent,o(f);case 10:case"end":return d.stop()}},n,this)}));function r(n,i,a){return t.apply(this,arguments)}return r}()},{key:"pickBox",value:function(){var t=Y(A.mark(function n(i,a){var o=this,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,k,T,D,U,I,w;return A.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(u=a.map(function(B){var J=B<0?0:B;return Math.floor(J*nt/o.pickBufferScale)}),s=Ie(u,4),l=s[0],c=s[1],f=s[2],h=s[3],d=this.rendererService,v=d.readPixelsAsync,p=d.getContainer,g=this.getContainerSize(p()),m=g.width,_=g.height,m*=nt,_*=nt,!(l>(m-1)*nt/this.pickBufferScale||f<0||c>(_-1)*nt/this.pickBufferScale||h<0)){P.next=7;break}return P.abrupt("return",[]);case 7:return y=Math.min(m/this.pickBufferScale,f)-l,x=Math.min(_/this.pickBufferScale,h)-c,P.next=11,v({x:l,y:Math.floor(_/this.pickBufferScale-(h+1)),width:y,height:x,data:new Uint8Array(y*x*4),framebuffer:this.pickingFBO});case 11:for(b=P.sent,k=[],T={},D=0;D<b.length/4;D=D+1)U=b.slice(D*4,D*4+4),I=qr(U),I!==-1&&!T[I]&&(w=i.layerPickService.getFeatureById(I),k.push(z(z({},w),{},{pickedFeatureIdx:I})),T[I]=!0);return P.abrupt("return",k);case 16:case"end":return P.stop()}},n,this)}));function r(n,i){return t.apply(this,arguments)}return r}()},{key:"handleCursor",value:function(r,n){var i=r.getLayerConfig(),a=i.cursor,o=a===void 0?"":a,u=i.cursorEnabled;if(u){var s=this.mapService.version,l=s==="GAODE2.x"?this.mapService.getMapContainer():this.mapService.getMarkerContainer(),c=l==null?void 0:l.style.getPropertyValue("cursor");n==="unmousemove"&&c!==""?l==null||l.style.setProperty("cursor",""):n==="mousemove"&&(l==null||l.style.setProperty("cursor",o))}}},{key:"destroy",value:function(){this.pickingFBO.destroy(),this.pickingFBO=null}},{key:"getContainerSize",value:function(r){return r.getContext?{width:r.width/nt,height:r.height/nt}:r.getBoundingClientRect()}},{key:"pickingAllLayer",value:function(){var t=Y(A.mark(function n(i){return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(!this.layerService.needPick(i.type)||!this.isPickingAllLayer())){o.next=2;break}return o.abrupt("return");case 2:return this.alreadyInPicking=!0,o.next=5,this.pickingLayers(i);case 5:this.layerService.renderLayers(),this.alreadyInPicking=!1;case 7:case"end":return o.stop()}},n,this)}));function r(n){return t.apply(this,arguments)}return r}()},{key:"isPickingAllLayer",value:function(){return!(this.alreadyInPicking||this.layerService.alreadyInRendering||this.interactionService.indragging||!this.layerService.getShaderPickStat())}},{key:"resizePickingFBO",value:function(){var r=this.rendererService.getContainer,n=this.getContainerSize(r()),i=n.width,a=n.height;i*=nt,a*=nt,(this.width!==i||this.height!==a)&&(this.pickingFBO.resize({width:Math.round(i/this.pickBufferScale),height:Math.round(a/this.pickBufferScale)}),this.width=i,this.height=a)}},{key:"pickingLayers",value:function(){var t=Y(A.mark(function n(i){var a=this,o,u,s,l,c,f,h;return A.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:o=this.rendererService,u=o.clear,s=o.useFramebufferAsync,this.resizePickingFBO(),l=this.layerService.getRenderList(),c=J3(l.filter(function(p){return p.needPick(i.type)}).reverse()),v.prev=4,h=A.mark(function p(){var g,m;return A.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return g=f.value,y.next=3,s(a.pickingFBO,Y(A.mark(function x(){return A.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:u({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),g.layerPickService.pickRender(i);case 2:case"end":return k.stop()}},x)})));case 3:return y.next=5,a.pickFromPickingFBO(g,i);case 5:if(m=y.sent,a.layerService.pickedLayerId=m?+g.id:-1,!(m&&!g.getLayerConfig().enablePropagation)){y.next=9;break}return y.abrupt("return",1);case 9:case"end":return y.stop()}},p)}),c.s();case 7:if((f=c.n()).done){v.next=13;break}return v.delegateYield(h(),"t0",9);case 9:if(!v.t0){v.next=11;break}return v.abrupt("break",13);case 11:v.next=7;break;case 13:v.next=18;break;case 15:v.prev=15,v.t1=v.catch(4),c.e(v.t1);case 18:return v.prev=18,c.f(),v.finish(18);case 21:case"end":return v.stop()}},n,this,[[4,15,18,21]])}));function r(n){return t.apply(this,arguments)}return r}()},{key:"triggerHoverOnLayer",value:function(r,n){K3(n)&&(this.handleCursor(r,n.type),r.emit(n.type,n))}}]),e}(),Nc=Oe(Hr.prototype,"mapService",[Lc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bc=Oe(Hr.prototype,"rendererService",[Rc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Uc=Oe(Hr.prototype,"configService",[Pc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zc=Oe(Hr.prototype,"interactionService",[Fc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$c=Oe(Hr.prototype,"layerService",[Oc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Hr))||Dc),rb=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;ie(this,e),S(this,"autoStart",void 0),S(this,"startTime",0),S(this,"oldTime",0),S(this,"running",!1),S(this,"elapsedTime",0),this.autoStart=t}return ne(e,[{key:"start",value:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}},{key:"stop",value:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}},{key:"getElapsedTime",value:function(){return this.getDelta(),this.elapsedTime}},{key:"getDelta",value:function(){var r=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var n=(typeof performance>"u"?Date:performance).now();r=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=r}return r}}]),e}(),jc,Hc,Gc,Wc,Yc,Qn,Xc,Zc,qc;function sa(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=nb(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function nb(e,t){if(e){if(typeof e=="string")return Kc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Kc(e,t)}}function Kc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ib(e){var t=ab();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function ab(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Qc=Ze.throttle,ob=(jc=Re(),Hc=Ue(q.IRendererService),Gc=Ue(q.IMapService),Wc=Ue(q.IDebugService),jc(Yc=(Qn=function(e){be(r,e);var t=ib(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"pickedLayerId",-1),S(R(n),"clock",new rb),S(R(n),"alreadyInRendering",!1),S(R(n),"layers",[]),S(R(n),"layerList",[]),S(R(n),"layerRenderID",void 0),S(R(n),"sceneInited",!1),S(R(n),"animateInstanceCount",0),S(R(n),"shaderPicking",!0),S(R(n),"enableRender",!0),Ne(R(n),"renderService",Xc,R(n)),Ne(R(n),"mapService",Zc,R(n)),Ne(R(n),"debugService",qc,R(n)),S(R(n),"reRender",Qc(function(){n.renderLayers()},32)),S(R(n),"throttleRenderLayers",Qc(function(){n.renderLayers()},16)),n}return ne(r,[{key:"needPick",value:function(i){return this.layerList.some(function(a){return a.needPick(i)})}},{key:"add",value:function(i){var a=this;this.layers.push(i),this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"addMask",value:function(i){var a=this;this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"initLayers",value:function(){var n=Y(A.mark(function a(){var o=this;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:this.sceneInited=!0,this.layers.forEach(function(){var l=Y(A.mark(function c(f){return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(f.startInit){d.next=4;break}return d.next=3,f.init();case 3:o.updateLayerRenderList();case 4:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}());case 2:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSceneInited",value:function(){return this.sceneInited}},{key:"getRenderList",value:function(){return this.layerList}},{key:"getLayers",value:function(){return this.layers}},{key:"getLayer",value:function(i){return this.layers.find(function(a){return a.id===i})}},{key:"getLayerByName",value:function(i){return this.layers.find(function(a){return a.name===i})}},{key:"remove",value:function(){var n=Y(A.mark(function a(o,u){var s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:u?(s=u.layerChildren.indexOf(o),s>-1&&u.layerChildren.splice(s,1)):(l=this.layers.indexOf(o),l>-1&&this.layers.splice(l,1)),o.destroy(),this.reRender(),this.emit("layerChange",this.layers);case 4:case"end":return f.stop()}},a,this)}));function i(a,o){return n.apply(this,arguments)}return i}()},{key:"removeAllLayers",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:this.destroy(),this.reRender();case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"setEnableRender",value:function(i){this.enableRender=i}},{key:"renderLayers",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d,v;return A.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(!(this.alreadyInRendering||!this.enableRender)){g.next=2;break}return g.abrupt("return");case 2:this.updateLayerRenderList(),o=this.debugService.generateRenderUid(),this.debugService.renderStart(o),this.alreadyInRendering=!0,this.clear(),u=sa(this.layerList);try{for(u.s();!(s=u.n()).done;)l=s.value,l.prerender()}catch(m){u.e(m)}finally{u.f()}this.renderService.beginFrame(),c=sa(this.layerList),g.prev=11,c.s();case 13:if((f=c.n()).done){g.next=25;break}if(h=f.value,d=h.getLayerConfig(),v=d.enableMask,h.masks.filter(function(m){return m.inited}).length>0&&v&&this.renderMask(h.masks),!h.getLayerConfig().enableMultiPassRenderer){g.next=22;break}return g.next=20,h.renderMultiPass();case 20:g.next=23;break;case 22:h.render();case 23:g.next=13;break;case 25:g.next=30;break;case 27:g.prev=27,g.t0=g.catch(11),c.e(g.t0);case 30:return g.prev=30,c.f(),g.finish(30);case 33:this.renderService.endFrame(),this.debugService.renderEnd(o),this.alreadyInRendering=!1;case 36:case"end":return g.stop()}},a,this,[[11,27,30,33]])}));function i(){return n.apply(this,arguments)}return i}()},{key:"renderMask",value:function(i){var a=0;this.renderService.clear({stencil:0,depth:1,framebuffer:null});var o=i.length>1?Xr.MULTIPLE:Xr.SINGLE,u=sa(i),s;try{for(u.s();!(s=u.n()).done;){var l=s.value;l.render({isStencil:!0,stencilType:o,stencilIndex:a++})}}catch(c){u.e(c)}finally{u.f()}}},{key:"beforeRenderData",value:function(){var n=Y(A.mark(function a(o){var u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,o.hooks.beforeRenderData.promise();case 2:u=l.sent,u&&this.renderLayers();case 4:case"end":return l.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"renderTileLayerMask",value:function(i){var a=0,o=i.getLayerConfig(),u=o.enableMask,s=u===void 0?!0:u,l=i.tileMask?1:0,c=i.masks.filter(function(p){return p.inited});l=l+(s?c.length:1);var f=l>1?Xr.MULTIPLE:Xr.SINGLE;if((i.tileMask||c.length&&s)&&this.renderService.clear({stencil:0,depth:1,framebuffer:null}),c.length&&s){var h=sa(c),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;v.render({isStencil:!0,stencilType:f,stencilIndex:a++})}}catch(p){h.e(p)}finally{h.f()}}i.tileMask&&i.tileMask.render({isStencil:!0,stencilType:f,stencilIndex:a++,stencilOperation:Qa.OR})}},{key:"renderTileLayer",value:function(){var n=Y(A.mark(function a(o){return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this.renderTileLayerMask(o),!o.getLayerConfig().enableMultiPassRenderer){s.next=6;break}return s.next=4,o.renderMultiPass();case 4:s.next=8;break;case 6:return s.next=8,o.render();case 8:case"end":return s.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"updateLayerRenderList",value:function(){var i=this;this.layerList=[],this.layers.filter(function(a){return a.inited}).filter(function(a){return a.isVisible()}).sort(function(a,o){return a.zIndex-o.zIndex}).forEach(function(a){i.layerList.push(a)})}},{key:"destroy",value:function(){this.layers.forEach(function(i){i.destroy()}),this.layers=[],this.layerList=[],this.emit("layerChange",this.layers)}},{key:"startAnimate",value:function(){this.animateInstanceCount++===0&&(this.clock.start(),this.runRender())}},{key:"stopAnimate",value:function(){--this.animateInstanceCount===0&&(this.stopRender(),this.clock.stop())}},{key:"getOESTextureFloat",value:function(){return this.renderService.extensionObject.OES_texture_float}},{key:"enableShaderPick",value:function(){this.shaderPicking=!0}},{key:"disableShaderPick",value:function(){this.shaderPicking=!1}},{key:"getShaderPickStat",value:function(){return this.shaderPicking}},{key:"clear",value:function(){var i=qe(this.mapService.bgColor);this.renderService.clear({color:i,depth:1,stencil:0,framebuffer:null})}},{key:"runRender",value:function(){this.renderLayers(),this.layerRenderID=window.requestAnimationFrame(this.runRender.bind(this))}},{key:"stopRender",value:function(){window.cancelAnimationFrame(this.layerRenderID)}}]),r}(zt.EventEmitter),Xc=Oe(Qn.prototype,"renderService",[Hc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Zc=Oe(Qn.prototype,"mapService",[Gc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),qc=Oe(Qn.prototype,"debugService",[Wc],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qn))||Yc);function ub(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Wt(e,t){if(e==null)return{};var r=ub(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=function(e){return e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.BLEND_EQUATION=32777]="BLEND_EQUATION",e[e.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",e[e.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",e[e.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",e[e.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",e[e.MAX_EXT=32776]="MAX_EXT",e[e.MIN_EXT=32775]="MIN_EXT",e[e.BLEND_DST_RGB=32968]="BLEND_DST_RGB",e[e.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",e[e.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",e[e.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.BLEND_COLOR=32773]="BLEND_COLOR",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",e[e.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.BUFFER_SIZE=34660]="BUFFER_SIZE",e[e.BUFFER_USAGE=34661]="BUFFER_USAGE",e[e.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK",e[e.CULL_FACE=2884]="CULL_FACE",e[e.BLEND=3042]="BLEND",e[e.DITHER=3024]="DITHER",e[e.STENCIL_TEST=2960]="STENCIL_TEST",e[e.DEPTH_TEST=2929]="DEPTH_TEST",e[e.SCISSOR_TEST=3089]="SCISSOR_TEST",e[e.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",e[e.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",e[e.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",e[e.NO_ERROR=0]="NO_ERROR",e[e.INVALID_ENUM=1280]="INVALID_ENUM",e[e.INVALID_VALUE=1281]="INVALID_VALUE",e[e.INVALID_OPERATION=1282]="INVALID_OPERATION",e[e.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",e[e.CW=2304]="CW",e[e.CCW=2305]="CCW",e[e.LINE_WIDTH=2849]="LINE_WIDTH",e[e.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",e[e.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",e[e.CULL_FACE_MODE=2885]="CULL_FACE_MODE",e[e.FRONT_FACE=2886]="FRONT_FACE",e[e.DEPTH_RANGE=2928]="DEPTH_RANGE",e[e.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",e[e.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",e[e.DEPTH_FUNC=2932]="DEPTH_FUNC",e[e.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",e[e.STENCIL_FUNC=2962]="STENCIL_FUNC",e[e.STENCIL_FAIL=2964]="STENCIL_FAIL",e[e.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",e[e.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",e[e.STENCIL_REF=2967]="STENCIL_REF",e[e.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",e[e.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",e[e.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",e[e.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",e[e.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",e[e.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",e[e.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",e[e.VIEWPORT=2978]="VIEWPORT",e[e.SCISSOR_BOX=3088]="SCISSOR_BOX",e[e.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",e[e.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",e[e.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",e[e.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",e[e.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",e[e.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",e[e.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",e[e.RED_BITS=3410]="RED_BITS",e[e.GREEN_BITS=3411]="GREEN_BITS",e[e.BLUE_BITS=3412]="BLUE_BITS",e[e.ALPHA_BITS=3413]="ALPHA_BITS",e[e.DEPTH_BITS=3414]="DEPTH_BITS",e[e.STENCIL_BITS=3415]="STENCIL_BITS",e[e.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",e[e.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",e[e.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",e[e.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",e[e.SAMPLES=32937]="SAMPLES",e[e.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",e[e.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",e[e.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",e[e.DONT_CARE=4352]="DONT_CARE",e[e.FASTEST=4353]="FASTEST",e[e.NICEST=4354]="NICEST",e[e.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER",e[e.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",e[e.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",e[e.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",e[e.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",e[e.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",e[e.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",e[e.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",e[e.SHADER_TYPE=35663]="SHADER_TYPE",e[e.DELETE_STATUS=35712]="DELETE_STATUS",e[e.LINK_STATUS=35714]="LINK_STATUS",e[e.VALIDATE_STATUS=35715]="VALIDATE_STATUS",e[e.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",e[e.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",e[e.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",e[e.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",e[e.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP",e[e.VENDOR=7936]="VENDOR",e[e.RENDERER=7937]="RENDERER",e[e.VERSION=7938]="VERSION",e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE=5890]="TEXTURE",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",e[e.TEXTURE0=33984]="TEXTURE0",e[e.TEXTURE1=33985]="TEXTURE1",e[e.TEXTURE2=33986]="TEXTURE2",e[e.TEXTURE3=33987]="TEXTURE3",e[e.TEXTURE4=33988]="TEXTURE4",e[e.TEXTURE5=33989]="TEXTURE5",e[e.TEXTURE6=33990]="TEXTURE6",e[e.TEXTURE7=33991]="TEXTURE7",e[e.TEXTURE8=33992]="TEXTURE8",e[e.TEXTURE9=33993]="TEXTURE9",e[e.TEXTURE10=33994]="TEXTURE10",e[e.TEXTURE11=33995]="TEXTURE11",e[e.TEXTURE12=33996]="TEXTURE12",e[e.TEXTURE13=33997]="TEXTURE13",e[e.TEXTURE14=33998]="TEXTURE14",e[e.TEXTURE15=33999]="TEXTURE15",e[e.TEXTURE16=34e3]="TEXTURE16",e[e.TEXTURE17=34001]="TEXTURE17",e[e.TEXTURE18=34002]="TEXTURE18",e[e.TEXTURE19=34003]="TEXTURE19",e[e.TEXTURE20=34004]="TEXTURE20",e[e.TEXTURE21=34005]="TEXTURE21",e[e.TEXTURE22=34006]="TEXTURE22",e[e.TEXTURE23=34007]="TEXTURE23",e[e.TEXTURE24=34008]="TEXTURE24",e[e.TEXTURE25=34009]="TEXTURE25",e[e.TEXTURE26=34010]="TEXTURE26",e[e.TEXTURE27=34011]="TEXTURE27",e[e.TEXTURE28=34012]="TEXTURE28",e[e.TEXTURE29=34013]="TEXTURE29",e[e.TEXTURE30=34014]="TEXTURE30",e[e.TEXTURE31=34015]="TEXTURE31",e[e.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",e[e.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",e[e.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",e[e.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",e[e.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",e[e.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",e[e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",e[e.COMPILE_STATUS=35713]="COMPILE_STATUS",e[e.LOW_FLOAT=36336]="LOW_FLOAT",e[e.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",e[e.HIGH_FLOAT=36338]="HIGH_FLOAT",e[e.LOW_INT=36339]="LOW_INT",e[e.MEDIUM_INT=36340]="MEDIUM_INT",e[e.HIGH_INT=36341]="HIGH_INT",e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.RENDERBUFFER=36161]="RENDERBUFFER",e[e.RGBA4=32854]="RGBA4",e[e.RGB5_A1=32855]="RGB5_A1",e[e.RGB565=36194]="RGB565",e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX=6401]="STENCIL_INDEX",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",e[e.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",e[e.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",e[e.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",e[e.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",e[e.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",e[e.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",e[e.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",e[e.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",e[e.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",e[e.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",e[e.NONE=0]="NONE",e[e.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",e[e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",e[e.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",e[e.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",e[e.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",e[e.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",e[e.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",e[e.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",e[e.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",e[e.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",e[e.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",e}({}),sb=Ze.isNil,lb=function(){function e(t){var r=this;ie(this,e),S(this,"name",void 0),S(this,"type",void 0),S(this,"scale",void 0),S(this,"descriptor",void 0),S(this,"featureBufferLayout",[]),S(this,"needRescale",!1),S(this,"needRemapping",!1),S(this,"needRegenerateVertices",!1),S(this,"featureRange",{startIndex:0,endIndex:1/0}),S(this,"vertexAttribute",void 0),S(this,"defaultCallback",function(n){if(n.length===0){var i;return((i=r.scale)===null||i===void 0?void 0:i.defaultValues)||[]}return n.map(function(a,o){var u,s=(u=r.scale)===null||u===void 0?void 0:u.scalers[o].func,l=s(a);return l})}),this.setProps(t)}return ne(e,[{key:"setProps",value:function(r){Object.assign(this,r)}},{key:"mapping",value:function(r){var n;if((n=this.scale)!==null&&n!==void 0&&n.callback){var i,a=(i=this.scale)===null||i===void 0?void 0:i.callback.apply(i,Q(r));if(!sb(a))return[a]}return this.defaultCallback(r)}},{key:"resetDescriptor",value:function(){this.descriptor&&(this.descriptor.buffer.data=[])}}]),e}(),cb=["buffer","update","name"],fb=["buffer","update","name"],Jn,Jc,ef,tf,zo,rf,hb=(Jn={},S(Jn,L.FLOAT,4),S(Jn,L.UNSIGNED_BYTE,1),S(Jn,L.UNSIGNED_SHORT,2),Jn),db=(Jc=Re(),ef=Ue(q.IRendererService),Jc(tf=(zo=function(){function e(){ie(this,e),S(this,"attributesAndIndices",void 0),Ne(this,"rendererService",rf,this),S(this,"attributes",[]),S(this,"triangulation",void 0),S(this,"featureLayout",{sizePerElement:0,elements:[]})}return ne(e,[{key:"registerStyleAttribute",value:function(r){var n=this.getLayerStyleAttribute(r.name||"");return n?n.setProps(r):(n=new lb(r),this.attributes.push(n)),n}},{key:"unRegisterStyleAttribute",value:function(r){var n=this.attributes.findIndex(function(i){return i.name===r});n>-1&&this.attributes.splice(n,1)}},{key:"updateScaleAttribute",value:function(r){this.attributes.forEach(function(n){var i,a=n.name,o=(i=n.scale)===null||i===void 0?void 0:i.field;(r[a]||o&&r[o])&&(n.needRescale=!0,n.needRemapping=!0,n.needRegenerateVertices=!0)})}},{key:"updateStyleAttribute",value:function(r,n,i){var a=this.getLayerStyleAttribute(r);a||(a=this.registerStyleAttribute(z(z({},n),{},{name:r})));var o=n.scale;o&&a&&(a.scale=o,a.needRescale=!0,a.needRemapping=!0,a.needRegenerateVertices=!0,i&&i.featureRange&&(a.featureRange=i.featureRange))}},{key:"getLayerStyleAttributes",value:function(){return this.attributes}},{key:"getLayerStyleAttribute",value:function(r){return this.attributes.find(function(n){return n.name===r})}},{key:"getLayerAttributeScale",value:function(r){var n,i=this.getLayerStyleAttribute(r),a=i==null||(n=i.scale)===null||n===void 0?void 0:n.scalers;return a&&a[0]?a[0].func:null}},{key:"updateAttributeByFeatureRange",value:function(r,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,u=this.attributes.find(function(b){return b.name===r});if(u&&u.descriptor){var s=u.descriptor,l=s.update,c=s.buffer,f=s.size,h=f===void 0?0:f,d=hb[c.type||L.FLOAT];if(l){var v=this.featureLayout,p=v.elements,g=v.sizePerElement,m=p.slice(i,a);if(!m.length)return;var _=m[0].offset,y=_*h*d,x=m.map(function(b,k){for(var T=b.featureIdx,D=b.vertices,U=b.normals,I=D.length/g,w=[],M=0;M<I;M++){var P=U?U.slice(M*3,M*3+3):[];w.push.apply(w,Q(l(n[T],T,D.slice(M*g,M*g+g),k,P)))}return w}).flat();u.vertexAttribute.updateBuffer({data:x,offset:y}),o==null||o.emit("legend:".concat(r),{type:r,attr:u})}}}},{key:"createAttributesAndIndices",value:function(r,n,i){var a=this;this.featureLayout={sizePerElement:0,elements:[]},n&&(this.triangulation=n);var o=this.attributes.map(function(m){return m.resetDescriptor(),m.descriptor}),u=0,s=0,l=[],c=3;r.forEach(function(m,_){var y=a.triangulation(m,i),x=y.indices,b=y.vertices,k=y.normals,T=y.size,D=y.indexes,U=y.count;typeof U=="number"&&(s+=U),x.forEach(function(P){l.push(P+u)}),c=T;var I=b.length/T;a.featureLayout.sizePerElement=c,a.featureLayout.elements.push({featureIdx:_,vertices:b,normals:k,offset:u}),u+=I;for(var w=function(B){var J=(k==null?void 0:k.slice(B*3,B*3+3))||[],se=b.slice(B*T,B*T+T),ce=0;D&&D[B]!==void 0&&(ce=D[B]),o.forEach(function(pe,H){if(pe&&pe.update){var V;(V=pe.buffer.data).push.apply(V,Q(pe.update(m,_,se,B,J,ce)))}})},M=0;M<I;M++)w(M)});var f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createElements,p={};o.forEach(function(m,_){if(m){var y=m.buffer;m.update,m.name;var x=Wt(m,cb),b=h(z({buffer:d(y)},x));p[m.name||""]=b,a.attributes[_].vertexAttribute=b}});var g=v({data:l,type:L.UNSIGNED_INT,count:l.length});return this.attributesAndIndices={attributes:p,elements:g,count:s},this.attributesAndIndices}},{key:"createAttributes",value:function(r,n){var i=this;this.featureLayout={sizePerElement:0,elements:[]},n&&(this.triangulation=n);var a=this.attributes.map(function(h){return h.resetDescriptor(),h.descriptor}),o=0,u=3;r.forEach(function(h,d){var v=i.triangulation(h),p=v.indices,g=v.vertices,m=v.normals,_=v.size,y=v.indexes;p.forEach(function(T){}),u=_;var x=g.length/_;i.featureLayout.sizePerElement=u,i.featureLayout.elements.push({featureIdx:d,vertices:g,normals:m,offset:o}),o+=x;for(var b=function(D){var U=(m==null?void 0:m.slice(D*3,D*3+3))||[],I=g.slice(D*_,D*_+_),w=0;y&&y[D]!==void 0&&(w=y[D]),a.forEach(function(M,P){if(M&&M.update){var B;(B=M.buffer.data).push.apply(B,Q(M.update(h,d,I,D,U,w)))}})},k=0;k<x;k++)b(k)});var s=this.rendererService,l=s.createAttribute,c=s.createBuffer,f={};return a.forEach(function(h,d){if(h){var v=h.buffer;h.update,h.name;var p=Wt(h,fb),g=l(z({buffer:c(v)},p));f[h.name||""]=g,i.attributes[d].vertexAttribute=g}}),{attributes:f}}},{key:"clearAllAttributes",value:function(){var r;this.attributes.forEach(function(n){n.vertexAttribute&&n.vertexAttribute.destroy()}),(r=this.attributesAndIndices)===null||r===void 0||r.elements.destroy(),this.attributes=[]}}]),e}(),rf=Oe(zo.prototype,"rendererService",[ef],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zo))||tf);function R0(e,t,r,n){function i(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function u(c){try{l(n.next(c))}catch(f){o(f)}}function s(c){try{l(n.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((n=n.apply(e,t||[])).next())})}function P0(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(c){l=[6,c],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Is(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a}function ks(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function F0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Ia={exports:{}},Pi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return n&&typeof n.length=="number"&&n.length>=0&&n.length%1===0}e.exports=t.default})(Pi,Pi.exports);var Ft={},Fu={exports:{}},Ou={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(r){return function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var a=n.pop();return r.call(this,n,a)}},e.exports=t.default})(Ou,Ou.exports);var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.fallback=O0;Ur.wrap=D0;var vb=Ur.hasQueueMicrotask=typeof queueMicrotask=="function"&&queueMicrotask,pb=Ur.hasSetImmediate=typeof setImmediate=="function"&&setImmediate,gb=Ur.hasNextTick=typeof process=="object"&&typeof process.nextTick=="function";function O0(e){setTimeout(e,0)}function D0(e){return function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return e(function(){return t.apply(void 0,r)})}}var di;vb?di=queueMicrotask:pb?di=setImmediate:gb?di=process.nextTick:di=O0;Ur.default=D0(di);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=Ou.exports,n=u(r),i=Ur,a=u(i),o=Ft;function u(f){return f&&f.__esModule?f:{default:f}}function s(f){return(0,o.isAsync)(f)?function(){for(var h=[],d=arguments.length;d--;)h[d]=arguments[d];var v=h.pop(),p=f.apply(this,h);return l(p,v)}:(0,n.default)(function(h,d){var v;try{v=f.apply(this,h)}catch(p){return d(p)}if(v&&typeof v.then=="function")return l(v,d);d(null,v)})}function l(f,h){return f.then(function(d){c(h,null,d)},function(d){c(h,d&&d.message?d:new Error(d))})}function c(f,h,d){try{f(h,d)}catch(v){(0,a.default)(function(p){throw p},v)}}e.exports=t.default})(Fu,Fu.exports);Object.defineProperty(Ft,"__esModule",{value:!0});Ft.isAsyncIterable=Ft.isAsyncGenerator=Ft.isAsync=void 0;var mb=Fu.exports,yb=_b(mb);function _b(e){return e&&e.__esModule?e:{default:e}}function N0(e){return e[Symbol.toStringTag]==="AsyncFunction"}function xb(e){return e[Symbol.toStringTag]==="AsyncGenerator"}function bb(e){return typeof e[Symbol.asyncIterator]=="function"}function Sb(e){if(typeof e!="function")throw new Error("expected a function");return N0(e)?(0,yb.default)(e):e}Ft.default=Sb;Ft.isAsync=N0;Ft.isAsyncGenerator=xb;Ft.isAsyncIterable=bb;var Jr={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n,i){if(i===void 0&&(i=n.length),!i)throw new Error("arity is undefined");function a(){for(var o=this,u=[],s=arguments.length;s--;)u[s]=arguments[s];return typeof u[i-1]=="function"?n.apply(this,u):new Promise(function(l,c){u[i-1]=function(f){for(var h=[],d=arguments.length-1;d-- >0;)h[d]=arguments[d+1];if(f)return c(f);l(h.length>1?h:h[0])},n.apply(o,u)})}return a}e.exports=t.default})(Jr,Jr.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Pi.exports,n=s(r),i=Ft,a=s(i),o=Jr.exports,u=s(o);function s(l){return l&&l.__esModule?l:{default:l}}t.default=(0,u.default)(function(l,c,f){var h=(0,n.default)(c)?[]:{};l(c,function(d,v,p){(0,a.default)(d)(function(g){for(var m,_=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];_.length<2&&(m=_,_=m[0]),h[v]=_,p(g)})},function(d){return f(d,h)})},3),e.exports=t.default})(Ia,Ia.exports);var Du={exports:{}},ka={exports:{}},Nu={exports:{}},Fi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){function i(){for(var a=[],o=arguments.length;o--;)a[o]=arguments[o];if(n!==null){var u=n;n=null,u.apply(this,a)}}return Object.assign(i,n),i}e.exports=t.default})(Fi,Fi.exports);var Bu={exports:{}},Uu={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(r){return r[Symbol.iterator]&&r[Symbol.iterator]()},e.exports=t.default})(Uu,Uu.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=Pi.exports,n=o(r),i=Uu.exports,a=o(i);function o(f){return f&&f.__esModule?f:{default:f}}function u(f){var h=-1,d=f.length;return function(){return++h<d?{value:f[h],key:h}:null}}function s(f){var h=-1;return function(){var v=f.next();return v.done?null:(h++,{value:v.value,key:h})}}function l(f){var h=f?Object.keys(f):[],d=-1,v=h.length;return function p(){var g=h[++d];return g==="__proto__"?p():d<v?{value:f[g],key:g}:null}}function c(f){if((0,n.default)(f))return u(f);var h=(0,a.default)(f);return h?s(h):l(f)}e.exports=t.default})(Bu,Bu.exports);var Oi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return function(){for(var i=[],a=arguments.length;a--;)i[a]=arguments[a];if(n===null)throw new Error("Callback was already called.");var o=n;n=null,o.apply(this,i)}}e.exports=t.default})(Oi,Oi.exports);var zu={exports:{}},Di={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default=r,e.exports=t.default})(Di,Di.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=Di.exports,n=i(r);function i(o){return o&&o.__esModule?o:{default:o}}function a(o,u,s,l){var c=!1,f=!1,h=!1,d=0,v=0;function p(){d>=u||h||c||(h=!0,o.next().then(function(_){var y=_.value,x=_.done;if(!(f||c)){if(h=!1,x){c=!0,d<=0&&l(null);return}d++,s(y,v,g),v++,p()}}).catch(m))}function g(_,y){if(d-=1,!f){if(_)return m(_);if(_===!1){c=!0,f=!0;return}if(y===n.default||c&&d<=0)return c=!0,l(null);p()}}function m(_){f||(h=!1,c=!0,l(_))}p()}e.exports=t.default})(zu,zu.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Fi.exports,n=d(r),i=Bu.exports,a=d(i),o=Oi.exports,u=d(o),s=Ft,l=zu.exports,c=d(l),f=Di.exports,h=d(f);function d(v){return v&&v.__esModule?v:{default:v}}t.default=function(v){return function(p,g,m){if(m=(0,n.default)(m),v<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!p)return m(null);if((0,s.isAsyncGenerator)(p))return(0,c.default)(p,v,g,m);if((0,s.isAsyncIterable)(p))return(0,c.default)(p[Symbol.asyncIterator](),v,g,m);var _=(0,a.default)(p),y=!1,x=!1,b=0,k=!1;function T(U,I){if(!x)if(b-=1,U)y=!0,m(U);else if(U===!1)y=!0,x=!0;else{if(I===h.default||y&&b<=0)return y=!0,m(null);k||D()}}function D(){for(k=!0;b<v&&!y;){var U=_();if(U===null){y=!0,b<=0&&m(null);return}b+=1,g(U.value,U.key,(0,u.default)(T))}k=!1}D()}},e.exports=t.default})(Nu,Nu.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Nu.exports,n=s(r),i=Ft,a=s(i),o=Jr.exports,u=s(o);function s(c){return c&&c.__esModule?c:{default:c}}function l(c,f,h,d){return(0,n.default)(f)(c,(0,a.default)(h),d)}t.default=(0,u.default)(l,4),e.exports=t.default})(ka,ka.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=ka.exports,n=o(r),i=Jr.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l,c){return(0,n.default)(s,1,l,c)}t.default=(0,a.default)(u,3),e.exports=t.default})(Du,Du.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=Ia.exports,n=o(r),i=Du.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,n.default)(a.default,s,l)}e.exports=t.default})(Pu,Pu.exports);var Ja=F0(Pu.exports),Jt=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.call=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];return this.args=r,Ja(this.tasks)},e.prototype.tap=function(t,r){var n=this;this.tasks.push(function(i){r.apply(void 0,ks([],Is(n.args),!1)),i(null,t)})},e}(),nf={exports:{}},$u={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Pi.exports,n=g(r),i=Di.exports,a=g(i),o=ka.exports,u=g(o),s=Fi.exports,l=g(s),c=Oi.exports,f=g(c),h=Ft,d=g(h),v=Jr.exports,p=g(v);function g(x){return x&&x.__esModule?x:{default:x}}function m(x,b,k){k=(0,l.default)(k);var T=0,D=0,U=x.length,I=!1;U===0&&k(null);function w(M,P){M===!1&&(I=!0),I!==!0&&(M?k(M):(++D===U||P===a.default)&&k(null))}for(;T<U;T++)b(x[T],T,(0,f.default)(w))}function _(x,b,k){return(0,u.default)(x,1/0,b,k)}function y(x,b,k){var T=(0,n.default)(x)?m:_;return T(x,(0,d.default)(b),k)}t.default=(0,p.default)(y,3),e.exports=t.default})($u,$u.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=$u.exports,n=o(r),i=Ia.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,a.default)(n.default,s,l)}e.exports=t.default})(nf,nf.exports);var Vu={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Fi.exports,n=c(r),i=Oi.exports,a=c(i),o=Ft,u=c(o),s=Jr.exports,l=c(s);function c(h){return h&&h.__esModule?h:{default:h}}function f(h,d){if(d=(0,n.default)(d),!Array.isArray(h))return d(new Error("First argument to waterfall must be an array of functions"));if(!h.length)return d();var v=0;function p(m){var _=(0,u.default)(h[v++]);_.apply(void 0,m.concat([(0,a.default)(g)]))}function g(m){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(m!==!1){if(m||v===h.length)return d.apply(void 0,[m].concat(_));p(_)}}p([])}t.default=(0,l.default)(f),e.exports=t.default})(Vu,Vu.exports);var Eb=F0(Vu.exports),af=function(){function e(){this.tasks=[]}return e.prototype.call=function(){return Ja(this.tasks)},e.prototype.tap=function(t,r){this.tasks.push(function(n){var i=r();n(i,t)})},e}(),Cb=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];return this.args=r,Ja(this.tasks)},e.prototype.tapPromise=function(t,r){var n=this;this.tasks.push(function(i){return R0(n,void 0,void 0,function(){return P0(this,function(a){switch(a.label){case 0:return[4,r.apply(void 0,ks([],Is(this.args),!1))];case 1:return a.sent(),i(null,t),[2]}})})})},e}(),Ab=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];return this.args=r,Ja(this.tasks)},e.prototype.tapPromise=function(t,r){var n=this;this.tasks.push(function(i){return R0(n,void 0,void 0,function(){var a;return P0(this,function(o){switch(o.label){case 0:return[4,r.apply(void 0,ks([],Is(this.args),!1))];case 1:return a=o.sent(),i(a,t),[2]}})})})},e}(),wb=function(){function e(){this.tasks=[]}return e.prototype.promise=function(){return Eb(this.tasks)},e.prototype.tapPromise=function(t,r){this.tasks.length===0?this.tasks.push(function(n){r().then(function(i){n(null,i)})}):this.tasks.push(function(n,i){r(n).then(function(a){i(null,a)})})},e}(),B0={exports:{}},Tb=B0.exports={};Tb.forEach=function(e,t){for(var r=0;r<e.length;r++){var n=t(e[r]);if(n)return n}};var U0=B0.exports,Mb=function(e){var t=e.stateHandler.getState;function r(o){var u=t(o);return u&&!!u.isDetectable}function n(o){t(o).isDetectable=!0}function i(o){return!!t(o).busy}function a(o,u){t(o).busy=!!u}return{isDetectable:r,markAsDetectable:n,isBusy:i,markBusy:a}},Ib=function(e){var t={};function r(o){var u=e.get(o);return u===void 0?[]:t[u]||[]}function n(o,u){var s=e.get(o);t[s]||(t[s]=[]),t[s].push(u)}function i(o,u){for(var s=r(o),l=0,c=s.length;l<c;++l)if(s[l]===u){s.splice(l,1);break}}function a(o){var u=r(o);u&&(u.length=0)}return{get:r,add:n,removeListener:i,removeAllListeners:a}},kb=function(){var e=1;function t(){return e++}return{generate:t}},Lb=function(e){var t=e.idGenerator,r=e.stateHandler.getState;function n(a){var o=r(a);return o&&o.id!==void 0?o.id:null}function i(a){var o=r(a);if(!o)throw new Error("setId required the element to have a resize detection state.");var u=t.generate();return o.id=u,u}return{get:n,set:i}},Rb=function(e){function t(){}var r={log:t,warn:t,error:t};if(!e&&window.console){var n=function(i,a){i[a]=function(){var u=console[a];if(u.apply)u.apply(console,arguments);else for(var s=0;s<arguments.length;s++)u(arguments[s])}};n(r,"log"),n(r,"warn"),n(r,"error")}return r},z0={exports:{}},$0=z0.exports={};$0.isIE=function(e){function t(){var n=navigator.userAgent.toLowerCase();return n.indexOf("msie")!==-1||n.indexOf("trident")!==-1||n.indexOf(" edge/")!==-1}if(!t())return!1;if(!e)return!0;var r=function(){var n,i=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->";while(o[0]);return i>4?i:n}();return e===r};$0.isLegacyOpera=function(){return!!window.opera};var V0=z0.exports,j0={exports:{}},Pb=j0.exports={};Pb.getOption=Fb;function Fb(e,t,r){var n=e[t];return n==null&&r!==void 0?r:n}var Ob=j0.exports,of=Ob,Db=function(t){t=t||{};var r=t.reporter,n=of.getOption(t,"async",!0),i=of.getOption(t,"auto",!0);i&&!n&&(r&&r.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a=uf(),o,u=!1;function s(v,p){!u&&i&&n&&a.size()===0&&f(),a.add(v,p)}function l(){for(u=!0;a.size();){var v=a;a=uf(),v.process()}u=!1}function c(v){u||(v===void 0&&(v=n),o&&(h(o),o=null),v?f():l())}function f(){o=d(l)}function h(v){var p=clearTimeout;return p(v)}function d(v){var p=function(g){return setTimeout(g,0)};return p(v)}return{add:s,force:c}};function uf(){var e={},t=0,r=0,n=0;function i(u,s){s||(s=u,u=0),u>r?r=u:u<n&&(n=u),e[u]||(e[u]=[]),e[u].push(s),t++}function a(){for(var u=n;u<=r;u++)for(var s=e[u],l=0;l<s.length;l++){var c=s[l];c()}}function o(){return t}return{add:i,process:a,size:o}}var Ls="_erd";function Nb(e){return e[Ls]={},H0(e)}function H0(e){return e[Ls]}function Bb(e){delete e[Ls]}var Ub={initState:Nb,getState:H0,cleanState:Bb},ei=V0,zb=function(e){e=e||{};var t=e.reporter,r=e.batchProcessor,n=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function i(l,c){function f(){c(l)}if(ei.isIE(8))n(l).object={proxy:f},l.attachEvent("onresize",f);else{var h=u(l);if(!h)throw new Error("Element is not detectable by this strategy.");h.contentDocument.defaultView.addEventListener("resize",f)}}function a(l){var c=e.important?" !important; ":"; ";return(l.join(c)+c).trim()}function o(l,c,f){f||(f=c,c=l,l=null),l=l||{},l.debug;function h(d,v){var p=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),g=!1,m=window.getComputedStyle(d),_=d.offsetWidth,y=d.offsetHeight;n(d).startSize={width:_,height:y};function x(){function b(){if(m.position==="static"){d.style.setProperty("position","relative",l.important?"important":"");var D=function(U,I,w,M){function P(J){return J.replace(/[^-\d\.]/g,"")}var B=w[M];B!=="auto"&&P(B)!=="0"&&(U.warn("An element that is positioned static has style."+M+"="+B+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+M+" will be set to 0. Element: ",I),I.style.setProperty(M,"0",l.important?"important":""))};D(t,d,m,"top"),D(t,d,m,"right"),D(t,d,m,"bottom"),D(t,d,m,"left")}}function k(){g||b();function D(I,w){if(!I.contentDocument){var M=n(I);M.checkForObjectDocumentTimeoutId&&window.clearTimeout(M.checkForObjectDocumentTimeoutId),M.checkForObjectDocumentTimeoutId=setTimeout(function(){M.checkForObjectDocumentTimeoutId=0,D(I,w)},100);return}w(I.contentDocument)}var U=this;D(U,function(w){v(d)})}m.position!==""&&(b(),g=!0);var T=document.createElement("object");T.style.cssText=p,T.tabIndex=-1,T.type="text/html",T.setAttribute("aria-hidden","true"),T.onload=k,ei.isIE()||(T.data="about:blank"),n(d)&&(d.appendChild(T),n(d).object=T,ei.isIE()&&(T.data="about:blank"))}r?r.add(x):x()}ei.isIE(8)?f(c):h(c,f)}function u(l){return n(l).object}function s(l){if(n(l)){var c=u(l);c&&(ei.isIE(8)?l.detachEvent("onresize",c.proxy):l.removeChild(c),n(l).checkForObjectDocumentTimeoutId&&window.clearTimeout(n(l).checkForObjectDocumentTimeoutId),delete n(l).object)}}return{makeDetectable:o,addListener:i,uninstall:s}},$b=U0.forEach,Vb=function(e){e=e||{};var t=e.reporter,r=e.batchProcessor,n=e.stateHandler.getState;e.stateHandler.hasState;var i=e.idHandler;if(!r)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=c(),o="erd_scroll_detection_scrollbar_style",u="erd_scroll_detection_container";function s(x){f(x,o,u)}s(window.document);function l(x){var b=e.important?" !important; ":"; ";return(x.join(b)+b).trim()}function c(){var x=500,b=500,k=document.createElement("div");k.style.cssText=l(["position: absolute","width: "+x*2+"px","height: "+b*2+"px","visibility: hidden","margin: 0","padding: 0"]);var T=document.createElement("div");T.style.cssText=l(["position: absolute","width: "+x+"px","height: "+b+"px","overflow: scroll","visibility: none","top: "+-x*3+"px","left: "+-b*3+"px","visibility: hidden","margin: 0","padding: 0"]),T.appendChild(k),document.body.insertBefore(T,document.body.firstChild);var D=x-T.clientWidth,U=b-T.clientHeight;return document.body.removeChild(T),{width:D,height:U}}function f(x,b,k){function T(w,M){M=M||function(B){x.head.appendChild(B)};var P=x.createElement("style");return P.innerHTML=w,P.id=b,M(P),P}if(!x.getElementById(b)){var D=k+"_animation",U=k+"_animation_active",I=`/* Created by the element-resize-detector library. */
`;I+="."+k+" > div::-webkit-scrollbar { "+l(["display: none"])+` }

`,I+="."+U+" { "+l(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+D,"animation-name: "+D])+` }
`,I+="@-webkit-keyframes "+D+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,I+="@keyframes "+D+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",T(I)}}function h(x){x.className+=" "+u+"_animation_active"}function d(x,b,k){if(x.addEventListener)x.addEventListener(b,k);else if(x.attachEvent)x.attachEvent("on"+b,k);else return t.error("[scroll] Don't know how to add event listeners.")}function v(x,b,k){if(x.removeEventListener)x.removeEventListener(b,k);else if(x.detachEvent)x.detachEvent("on"+b,k);else return t.error("[scroll] Don't know how to remove event listeners.")}function p(x){return n(x).container.childNodes[0].childNodes[0].childNodes[0]}function g(x){return n(x).container.childNodes[0].childNodes[0].childNodes[1]}function m(x,b){var k=n(x).listeners;if(!k.push)throw new Error("Cannot add listener to an element that is not detectable.");n(x).listeners.push(b)}function _(x,b,k){k||(k=b,b=x,x=null),x=x||{};function T(){if(x.debug){var $=Array.prototype.slice.call(arguments);if($.unshift(i.get(b),"Scroll: "),t.log.apply)t.log.apply(null,$);else for(var ae=0;ae<$.length;ae++)t.log($[ae])}}function D($){function ae(me){var ee=me.getRootNode&&me.getRootNode().contains(me);return me===me.ownerDocument.body||me.ownerDocument.body.contains(me)||ee}return!ae($)||window.getComputedStyle($)===null}function U($){var ae=n($).container.childNodes[0],me=window.getComputedStyle(ae);return!me.width||me.width.indexOf("px")===-1}function I(){var $=window.getComputedStyle(b),ae={};return ae.position=$.position,ae.width=b.offsetWidth,ae.height=b.offsetHeight,ae.top=$.top,ae.right=$.right,ae.bottom=$.bottom,ae.left=$.left,ae.widthCSS=$.width,ae.heightCSS=$.height,ae}function w(){var $=I();n(b).startSize={width:$.width,height:$.height},T("Element start size",n(b).startSize)}function M(){n(b).listeners=[]}function P(){if(T("storeStyle invoked."),!n(b)){T("Aborting because element has been uninstalled");return}var $=I();n(b).style=$}function B($,ae,me){n($).lastWidth=ae,n($).lastHeight=me}function J($){return p($).childNodes[0]}function se(){return 2*a.width+1}function ce(){return 2*a.height+1}function pe($){return $+10+se()}function H($){return $+10+ce()}function V($){return $*2+se()}function Z($){return $*2+ce()}function X($,ae,me){var ee=p($),$e=g($),ke=pe(ae),je=H(me),Pe=V(ae),Te=Z(me);ee.scrollLeft=ke,ee.scrollTop=je,$e.scrollLeft=Pe,$e.scrollTop=Te}function fe(){var $=n(b).container;if(!$){$=document.createElement("div"),$.className=u,$.style.cssText=l(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),n(b).container=$,h($),b.appendChild($);var ae=function(){n(b).onRendered&&n(b).onRendered()};d($,"animationstart",ae),n(b).onAnimationStart=ae}return $}function ue(){function $(){var ve=n(b).style;if(ve.position==="static"){b.style.setProperty("position","relative",x.important?"important":"");var He=function(Me,O,N,G){function re(Ke){return Ke.replace(/[^-\d\.]/g,"")}var ye=N[G];ye!=="auto"&&re(ye)!=="0"&&(Me.warn("An element that is positioned static has style."+G+"="+ye+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+G+" will be set to 0. Element: ",O),O.style[G]=0)};He(t,b,ve,"top"),He(t,b,ve,"right"),He(t,b,ve,"bottom"),He(t,b,ve,"left")}}function ae(ve,He,Me,O){return ve=ve?ve+"px":"0",He=He?He+"px":"0",Me=Me?Me+"px":"0",O=O?O+"px":"0",["left: "+ve,"top: "+He,"right: "+O,"bottom: "+Me]}if(T("Injecting elements"),!n(b)){T("Aborting because element has been uninstalled");return}$();var me=n(b).container;me||(me=fe());var ee=a.width,$e=a.height,ke=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),je=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(ae(-(1+ee),-(1+$e),-$e,-ee))),Pe=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),Te=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),tt=l(["position: absolute","left: 0","top: 0"]),ut=l(["position: absolute","width: 200%","height: 200%"]),at=document.createElement("div"),Xe=document.createElement("div"),At=document.createElement("div"),qt=document.createElement("div"),j=document.createElement("div"),te=document.createElement("div");at.dir="ltr",at.style.cssText=ke,at.className=u,Xe.className=u,Xe.style.cssText=je,At.style.cssText=Pe,qt.style.cssText=tt,j.style.cssText=Te,te.style.cssText=ut,At.appendChild(qt),j.appendChild(te),Xe.appendChild(At),Xe.appendChild(j),at.appendChild(Xe),me.appendChild(at);function oe(){var ve=n(b);ve&&ve.onExpand?ve.onExpand():T("Aborting expand scroll handler: element has been uninstalled")}function de(){var ve=n(b);ve&&ve.onShrink?ve.onShrink():T("Aborting shrink scroll handler: element has been uninstalled")}d(At,"scroll",oe),d(j,"scroll",de),n(b).onExpandScroll=oe,n(b).onShrinkScroll=de}function he(){function $(Pe,Te,tt){var ut=J(Pe),at=pe(Te),Xe=H(tt);ut.style.setProperty("width",at+"px",x.important?"important":""),ut.style.setProperty("height",Xe+"px",x.important?"important":"")}function ae(Pe){var Te=b.offsetWidth,tt=b.offsetHeight,ut=Te!==n(b).lastWidth||tt!==n(b).lastHeight;T("Storing current size",Te,tt),B(b,Te,tt),r.add(0,function(){if(ut){if(!n(b)){T("Aborting because element has been uninstalled");return}if(!me()){T("Aborting because element container has not been initialized");return}if(x.debug){var Xe=b.offsetWidth,At=b.offsetHeight;(Xe!==Te||At!==tt)&&t.warn(i.get(b),"Scroll: Size changed before updating detector elements.")}$(b,Te,tt)}}),r.add(1,function(){if(!n(b)){T("Aborting because element has been uninstalled");return}if(!me()){T("Aborting because element container has not been initialized");return}X(b,Te,tt)}),ut&&Pe&&r.add(2,function(){if(!n(b)){T("Aborting because element has been uninstalled");return}if(!me()){T("Aborting because element container has not been initialized");return}Pe()})}function me(){return!!n(b).container}function ee(){function Pe(){return n(b).lastNotifiedWidth===void 0}T("notifyListenersIfNeeded invoked");var Te=n(b);if(Pe()&&Te.lastWidth===Te.startSize.width&&Te.lastHeight===Te.startSize.height)return T("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(Te.lastWidth===Te.lastNotifiedWidth&&Te.lastHeight===Te.lastNotifiedHeight)return T("Not notifying: Size already notified");T("Current size not notified, notifying..."),Te.lastNotifiedWidth=Te.lastWidth,Te.lastNotifiedHeight=Te.lastHeight,$b(n(b).listeners,function(tt){tt(b)})}function $e(){if(T("startanimation triggered."),U(b)){T("Ignoring since element is still unrendered...");return}T("Element rendered.");var Pe=p(b),Te=g(b);(Pe.scrollLeft===0||Pe.scrollTop===0||Te.scrollLeft===0||Te.scrollTop===0)&&(T("Scrollbars out of sync. Updating detector elements..."),ae(ee))}function ke(){if(T("Scroll detected."),U(b)){T("Scroll event fired while unrendered. Ignoring...");return}ae(ee)}if(T("registerListenersAndPositionElements invoked."),!n(b)){T("Aborting because element has been uninstalled");return}n(b).onRendered=$e,n(b).onExpand=ke,n(b).onShrink=ke;var je=n(b).style;$(b,je.width,je.height)}function Be(){if(T("finalizeDomMutation invoked."),!n(b)){T("Aborting because element has been uninstalled");return}var $=n(b).style;B(b,$.width,$.height),X(b,$.width,$.height)}function Le(){k(b)}function Qe(){T("Installing..."),M(),w(),r.add(0,P),r.add(1,ue),r.add(2,he),r.add(3,Be),r.add(4,Le)}T("Making detectable..."),D(b)?(T("Element is detached"),fe(),T("Waiting until element is attached..."),n(b).onRendered=function(){T("Element is now attached"),Qe()}):Qe()}function y(x){var b=n(x);b&&(b.onExpandScroll&&v(p(x),"scroll",b.onExpandScroll),b.onShrinkScroll&&v(g(x),"scroll",b.onShrinkScroll),b.onAnimationStart&&v(b.container,"animationstart",b.onAnimationStart),b.container&&x.removeChild(b.container))}return{makeDetectable:_,addListener:m,uninstall:y,initDocument:s}},vi=U0.forEach,jb=Mb,Hb=Ib,Gb=kb,Wb=Lb,Yb=Rb,sf=V0,Xb=Db,Ar=Ub,Zb=zb,qb=Vb;function lf(e){return Array.isArray(e)||e.length!==void 0}function cf(e){if(Array.isArray(e))return e;var t=[];return vi(e,function(r){t.push(r)}),t}function ff(e){return e&&e.nodeType===1}var Kb=function(e){e=e||{};var t;if(e.idHandler)t={get:function(_){return e.idHandler.get(_,!0)},set:e.idHandler.set};else{var r=Gb(),n=Wb({idGenerator:r,stateHandler:Ar});t=n}var i=e.reporter;if(!i){var a=i===!1;i=Yb(a)}var o=wr(e,"batchProcessor",Xb({reporter:i})),u={};u.callOnAdd=!!wr(e,"callOnAdd",!0),u.debug=!!wr(e,"debug",!1);var s=Hb(t),l=jb({stateHandler:Ar}),c,f=wr(e,"strategy","object"),h=wr(e,"important",!1),d={reporter:i,batchProcessor:o,stateHandler:Ar,idHandler:t,important:h};if(f==="scroll"&&(sf.isLegacyOpera()?(i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),f="object"):sf.isIE(9)&&(i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),f="object")),f==="scroll")c=qb(d);else if(f==="object")c=Zb(d);else throw new Error("Invalid strategy name: "+f);var v={};function p(_,y,x){function b(w){var M=s.get(w);vi(M,function(B){B(w)})}function k(w,M,P){s.add(M,P),w&&P(M)}if(x||(x=y,y=_,_={}),!y)throw new Error("At least one element required.");if(!x)throw new Error("Listener required.");if(ff(y))y=[y];else if(lf(y))y=cf(y);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var T=0,D=wr(_,"callOnAdd",u.callOnAdd),U=wr(_,"onReady",function(){}),I=wr(_,"debug",u.debug);vi(y,function(M){Ar.getState(M)||(Ar.initState(M),t.set(M));var P=t.get(M);if(I&&i.log("Attaching listener to element",P,M),!l.isDetectable(M)){if(I&&i.log(P,"Not detectable."),l.isBusy(M)){I&&i.log(P,"System busy making it detectable"),k(D,M,x),v[P]=v[P]||[],v[P].push(function(){T++,T===y.length&&U()});return}return I&&i.log(P,"Making detectable..."),l.markBusy(M,!0),c.makeDetectable({debug:I,important:h},M,function(J){if(I&&i.log(P,"onElementDetectable"),Ar.getState(J)){l.markAsDetectable(J),l.markBusy(J,!1),c.addListener(J,b),k(D,J,x);var se=Ar.getState(J);if(se&&se.startSize){var ce=J.offsetWidth,pe=J.offsetHeight;(se.startSize.width!==ce||se.startSize.height!==pe)&&b(J)}v[P]&&vi(v[P],function(H){H()})}else I&&i.log(P,"Element uninstalled before being detectable.");delete v[P],T++,T===y.length&&U()})}I&&i.log(P,"Already detecable, adding listener."),k(D,M,x),T++}),T===y.length&&U()}function g(_){if(!_)return i.error("At least one element is required.");if(ff(_))_=[_];else if(lf(_))_=cf(_);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");vi(_,function(y){s.removeAllListeners(y),c.uninstall(y),Ar.cleanState(y)})}function m(_){c.initDocument&&c.initDocument(_)}return{listenTo:p,removeListener:s.removeListener,removeAllListeners:s.removeAllListeners,uninstall:g,initDocument:m}};function wr(e,t,r){var n=e[t];return n==null&&r!==void 0?r:n}const Qb=_r(Kb);var hf,df,vf,pf,gf,mf,yf,_f,xf,bf,Sf,Ef,Cf,Af,wf,Tf,Mf,If,gt,kf,Lf,Rf,Pf,Ff,Of,Df,Nf,Bf,Uf,zf,$f,Vf,jf,Hf,Gf;function Jb(e){var t=eS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function eS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var tS=(hf=Re(),df=Ue(q.SceneID),vf=Ue(q.IIconService),pf=Ue(q.IFontService),gf=Ue(q.IControlService),mf=Ue(q.IGlobalConfigService),yf=Ue(q.IMapService),_f=Ue(q.ICoordinateSystemService),xf=Ue(q.IRendererService),bf=Ue(q.ILayerService),Sf=Ue(q.IDebugService),Ef=Ue(q.ICameraService),Cf=Ue(q.IInteractionService),Af=Ue(q.IPickingService),wf=Ue(q.IShaderModuleService),Tf=Ue(q.IMarkerService),Mf=Ue(q.IPopupService),hf(If=(gt=function(e){be(r,e);var t=Jb(r);function r(){var n;return ie(this,r),n=t.call(this),S(R(n),"destroyed",!1),S(R(n),"loaded",!1),Ne(R(n),"id",kf,R(n)),Ne(R(n),"iconService",Lf,R(n)),Ne(R(n),"fontService",Rf,R(n)),Ne(R(n),"controlService",Pf,R(n)),Ne(R(n),"configService",Ff,R(n)),Ne(R(n),"map",Of,R(n)),Ne(R(n),"coordinateSystemService",Df,R(n)),Ne(R(n),"rendererService",Nf,R(n)),Ne(R(n),"layerService",Bf,R(n)),Ne(R(n),"debugService",Uf,R(n)),Ne(R(n),"cameraService",zf,R(n)),Ne(R(n),"interactionService",$f,R(n)),Ne(R(n),"pickingService",Vf,R(n)),Ne(R(n),"shaderModuleService",jf,R(n)),Ne(R(n),"markerService",Hf,R(n)),Ne(R(n),"popupService",Gf,R(n)),S(R(n),"inited",!1),S(R(n),"rendering",!1),S(R(n),"$container",void 0),S(R(n),"canvas",void 0),S(R(n),"markerContainer",void 0),S(R(n),"resizeDetector",void 0),S(R(n),"hooks",void 0),S(R(n),"handleWindowResized",function(){n.emit("resize"),n.$container&&(n.initContainer(),n.coordinateSystemService.needRefresh=!0,n.render())}),S(R(n),"handleMapCameraChanged",function(i){n.cameraService.update(i),n.render()}),n.hooks={init:new Cb},n}return ne(r,[{key:"init",value:function(i){var a=this;this.configService.setSceneConfig(this.id,i),this.shaderModuleService.registerBuiltinModules(),this.iconService.init(),this.iconService.on("imageUpdate",function(){return a.render()}),this.fontService.init(),this.hooks.init.tapPromise("initMap",Y(A.mark(function o(){return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.debugService.log("map.mapInitStart",{type:a.map.version}),s.next=3,new Promise(function(l){a.map.onCameraChanged(function(c){a.cameraService.init(),a.cameraService.update(c),l()}),a.map.init()});case 3:a.map.onCameraChanged(a.handleMapCameraChanged),a.map.addMarkerContainer(),a.markerService.addMarkers(),a.markerService.addMarkerLayers(),a.popupService.initPopup(),a.interactionService.init(),a.interactionService.on(Rt.Drag,a.addSceneEvent.bind(a));case 10:case"end":return s.stop()}},o)}))),this.hooks.init.tapPromise("initRenderer",Y(A.mark(function o(){var u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s=((u=a.map)===null||u===void 0?void 0:u.getOverlayContainer())||void 0,s?a.$container=s:a.$container=q3(a.configService.getSceneConfig(a.id).id||""),!a.$container){f.next=14;break}return a.canvas=Or("canvas","",a.$container),a.setCanvas(),f.next=7,a.rendererService.init(a.canvas,a.configService.getSceneConfig(a.id),i.gl);case 7:a.registerContextLost(),a.initContainer(),a.resizeDetector=Qb({strategy:"scroll"}),a.resizeDetector.listenTo(a.$container,a.handleWindowResized),window.matchMedia&&((l=window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)"))===null||l===void 0||l.addListener(a.handleWindowResized.bind("screen"))),f.next=15;break;case 14:console.error("容器 id 不存在");case 15:a.pickingService.init(a.id);case 16:case"end":return f.stop()}},o)}))),this.render()}},{key:"registerContextLost",value:function(){var i=this,a=this.rendererService.getCanvas();a&&a.addEventListener("webglcontextlost",function(){return i.emit("webglcontextlost")})}},{key:"addLayer",value:function(i){this.layerService.sceneService=this,this.layerService.add(i)}},{key:"addMask",value:function(i){this.layerService.sceneService=this,this.layerService.addMask(i)}},{key:"render",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.rendering||this.destroyed)){u.next=2;break}return u.abrupt("return");case 2:if(this.rendering=!0,this.inited){u.next=16;break}return u.next=6,this.hooks.init.promise();case 6:return this.destroyed&&this.destroy(),u.next=9,this.layerService.initLayers();case 9:this.layerService.renderLayers(),this.controlService.addControls(),this.loaded=!0,this.emit("loaded"),this.inited=!0,u.next=20;break;case 16:return u.next=18,this.layerService.initLayers();case 18:return u.next=20,this.layerService.renderLayers();case 20:this.rendering=!1;case 21:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"addFontFace",value:function(i,a){this.fontService.addFontFace(i,a)}},{key:"getSceneContainer",value:function(){return this.$container}},{key:"exportPng",value:function(){var n=Y(A.mark(function a(o){var u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=(u=this.$container)===null||u===void 0?void 0:u.getElementsByTagName("canvas")[0],f.next=3,this.render();case 3:return l=o==="jpg"?s==null?void 0:s.toDataURL("image/jpeg"):s==null?void 0:s.toDataURL("image/png"),f.abrupt("return",l);case 5:case"end":return f.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"getSceneConfig",value:function(){return this.configService.getSceneConfig(this.id)}},{key:"getPointSizeRange",value:function(){return this.rendererService.getPointSizeRange()}},{key:"addMarkerContainer",value:function(){var i=this.$container.parentElement;i!==null&&(this.markerContainer=Or("div","l7-marker-container",i))}},{key:"getMarkerContainer",value:function(){return this.markerContainer}},{key:"destroy",value:function(){var i=this,a;if(!this.inited){this.destroyed=!0;return}this.resizeDetector.removeListener(this.$container,this.handleWindowResized),this.pickingService.destroy(),this.layerService.destroy(),this.interactionService.destroy(),this.controlService.destroy(),this.markerService.destroy(),this.fontService.destroy(),this.iconService.destroy(),this.removeAllListeners(),this.inited=!1,this.map.destroy(),setTimeout(function(){var o;(o=i.$container)===null||o===void 0||o.removeChild(i.canvas),i.canvas=null,i.rendererService.destroy()}),(a=this.$container)===null||a===void 0||(a=a.parentNode)===null||a===void 0||a.removeChild(this.$container),this.emit("destroy")}},{key:"initContainer",value:function(){var i,a,o=nt,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l&&(l.width=u*o,l.height=s*o),this.rendererService.viewport({x:0,y:0,width:o*u,height:o*s})}},{key:"setCanvas",value:function(){var i,a,o=nt,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l.width=u*o,l.height=s*o,l.style.width="100%",l.style.height="100%"}},{key:"addSceneEvent",value:function(i){this.emit(i.type,i)}}]),r}(zt.EventEmitter),kf=Oe(gt.prototype,"id",[df],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lf=Oe(gt.prototype,"iconService",[vf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rf=Oe(gt.prototype,"fontService",[pf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pf=Oe(gt.prototype,"controlService",[gf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ff=Oe(gt.prototype,"configService",[mf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Of=Oe(gt.prototype,"map",[yf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Df=Oe(gt.prototype,"coordinateSystemService",[_f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Nf=Oe(gt.prototype,"rendererService",[xf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bf=Oe(gt.prototype,"layerService",[bf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Uf=Oe(gt.prototype,"debugService",[Sf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zf=Oe(gt.prototype,"cameraService",[Ef],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$f=Oe(gt.prototype,"interactionService",[Cf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Vf=Oe(gt.prototype,"pickingService",[Af],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jf=Oe(gt.prototype,"shaderModuleService",[wf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Hf=Oe(gt.prototype,"markerService",[Tf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Gf=Oe(gt.prototype,"popupService",[Mf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gt))||If);function rS(e){var t=0;switch(e){case"vec2":case"ivec2":t=2;break;case"vec3":case"ivec3":t=3;break;case"vec4":case"ivec4":case"mat2":t=4;break;case"mat3":t=9;break;case"mat4":t=16;break}return t}var G0=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;function Wf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r={};return e=e.replace(G0,function(n,i,a){var o=a.split(":"),u=o[0].trim(),s="";switch(o.length>1&&(s=o[1].trim()),i){case"bool":s=s==="true";break;case"float":case"int":s=Number(s);break;case"vec2":case"vec3":case"vec4":case"ivec2":case"ivec3":case"ivec4":case"mat2":case"mat3":case"mat4":s?s=s.replace("[","").replace("]","").split(",").reduce(function(l,c){return l.push(Number(c.trim())),l},[]):s=new Array(rS(i)).fill(0);break}return r[u]=s,"".concat(t?"uniform ":"").concat(i," ").concat(u,`;
`)}),{content:e,uniforms:r}}function $o(e){var t=Wf(e,!0),r=t.content,n=t.uniforms;return r=r.replace(/(\s*uniform\s*.*\s*){((?:\s*.*\s*)*?)};/g,function(i,a,o){o=o.trim().replace(/^.*$/gm,function(c){return"uniform ".concat(c)});var u=Wf(o),s=u.content,l=u.uniforms;return Object.assign(n,l),"".concat(a,`{
`).concat(s,`
};`)}),{content:r,uniforms:n}}function L6(e){var t={};return e.replace(G0,function(r,n,i){var a=i.trim();return t[a]?"":(t[a]=!0,"uniform ".concat(n," ").concat(a,`;
`))})}var Yf,Xf,nS=Ze.uniq,Zf="#define PI 3.14159265359",iS=`#define SHIFT_RIGHT17 1.0 / 131072.0
#define SHIFT_RIGHT18 1.0 / 262144.0
#define SHIFT_RIGHT19 1.0 / 524288.0
#define SHIFT_RIGHT20 1.0 / 1048576.0
#define SHIFT_RIGHT21 1.0 / 2097152.0
#define SHIFT_RIGHT22 1.0 / 4194304.0
#define SHIFT_RIGHT23 1.0 / 8388608.0
#define SHIFT_RIGHT24 1.0 / 16777216.0

#define SHIFT_LEFT17 131072.0
#define SHIFT_LEFT18 262144.0
#define SHIFT_LEFT19 524288.0
#define SHIFT_LEFT20 1048576.0
#define SHIFT_LEFT21 2097152.0
#define SHIFT_LEFT22 4194304.0
#define SHIFT_LEFT23 8388608.0
#define SHIFT_LEFT24 16777216.0

vec2 unpack_float(float packedValue) {
  int packedIntValue = int(packedValue);
  int v0 = packedIntValue / 256;
  return vec2(v0, packedIntValue - v0 * 256);
}

vec4 decode_color(vec2 encodedColor) {
  return vec4(
    unpack_float(encodedColor[0]) / 255.0,
    unpack_float(encodedColor[1]) / 255.0
  );
}
`,qf=`layout(std140) uniform SceneUniforms {
  mat4 u_ViewMatrix;
  mat4 u_ProjectionMatrix;
  mat4 u_ViewProjectionMatrix;
  mat4 u_ModelMatrix;
  vec4 u_ViewportCenterProjection;
  vec3 u_PixelsPerDegree;
  float u_Zoom;
  vec3 u_PixelsPerDegree2;
  float u_ZoomScale;
  vec3 u_PixelsPerMeter;
  float u_CoordinateSystem;
  vec3 u_CameraPosition;
  float u_DevicePixelRatio;
  vec2 u_ViewportCenter;
  vec2 u_ViewportSize;
  float u_FocalDistance;
};

layout(std140) uniform LayerUniforms {
  mat4 u_Mvp;
  vec2 u_sceneCenterMercator;
};
`,Kf=`layout(std140) uniform PickingUniforms {
  vec4 u_HighlightColor;
  vec4 u_SelectColor;
  vec3 u_PickingColor;
  float u_PickingStage;
  vec3 u_CurrentSelectedId;
  float u_PickingThreshold;
  float u_PickingBuffer;
  float u_shaderPick;
  float u_EnableSelect;
  float u_activeMix;
};`,aS=`#define ambientRatio 0.5
#define diffuseRatio 0.3
#define specularRatio 0.2


float calc_lighting(vec4 pos) {

    vec3 worldPos = vec3(pos * u_ModelMatrix);

    vec3 worldNormal = a_Normal;
      // //cal light weight
    vec3 viewDir = normalize(u_CameraPosition - worldPos);

    vec3 lightDir = normalize(vec3(1, -10.5, 12));

    vec3 halfDir = normalize(viewDir+lightDir);
      // //lambert
    float lambert = dot(worldNormal, lightDir);
        //specular
    float specular = pow(max(0.0, dot(worldNormal, halfDir)), 32.0);
        //sum to light weight
    float lightWeight = ambientRatio + diffuseRatio * lambert + specularRatio * specular;

    return lightWeight;
}
`,oS=`// Blinn-Phong model
// apply lighting in vertex shader instead of fragment shader
// @see https://learnopengl.com/Advanced-Lighting/Advanced-Lighting
uniform float u_Ambient : 1.0;
uniform float u_Diffuse : 1.0;
uniform float u_Specular : 1.0;
uniform int u_NumOfDirectionalLights : 1;
uniform int u_NumOfSpotLights : 0;

#define SHININESS 32.0
#define MAX_NUM_OF_DIRECTIONAL_LIGHTS 3
#define MAX_NUM_OF_SPOT_LIGHTS 3

struct DirectionalLight {
  vec3 direction;
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
};

struct SpotLight {
  vec3 position;
  vec3 direction;
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  float constant;
  float linear;
  float quadratic;
  float angle;
  float blur;
  float exponent;
};

uniform DirectionalLight u_DirectionalLights[MAX_NUM_OF_DIRECTIONAL_LIGHTS];
uniform SpotLight u_SpotLights[MAX_NUM_OF_SPOT_LIGHTS];

vec3 calc_directional_light(DirectionalLight light, vec3 normal, vec3 viewDir) {
  vec3 lightDir = normalize(light.direction);
  // diffuse shading
  float diff = max(dot(normal, lightDir), 0.0);
  // Blinn-Phong specular shading
  vec3 halfwayDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normal, halfwayDir), 0.0), SHININESS);

  vec3 ambient = light.ambient * u_Ambient;
  vec3 diffuse = light.diffuse * diff * u_Diffuse;
  vec3 specular = light.specular * spec * u_Specular;

  return ambient + diffuse + specular;
}


vec3 calc_lighting(vec3 position, vec3 normal, vec3 viewDir) {
  vec3 weight = vec3(0.0);
  for (int i = 0; i < MAX_NUM_OF_DIRECTIONAL_LIGHTS; i++) {
    if (i >= u_NumOfDirectionalLights) {
      break;
    }
    weight += calc_directional_light(u_DirectionalLights[i], normal, viewDir);
  }
  return weight;
}
`,uS=`
in vec4 v_PickingResult;

#pragma include "picking_uniforms"

#define PICKING_NONE 0.0
#define PICKING_ENCODE 1.0
#define PICKING_HIGHLIGHT 2.0
#define COLOR_SCALE 1. / 255.

#define HIGHLIGHT 1.0
#define SELECT 2.0

/*
 * Returns highlight color if this item is selected.
 */
vec4 filterHighlightColor(vec4 color, float weight) {
  // float selected = v_PickingResult.a;
  bool selected = bool(v_PickingResult.a);

  // if (selected == SELECT) {
  if (selected) {
  //   // 点击选中状态
  //   vec4 selectColor = u_SelectColor * COLOR_SCALE;
  //   return selectColor;
  // } else if (selected == HIGHLIGHT) {
  //   // hover 高亮状态
    vec4 highLightColor = u_HighlightColor * COLOR_SCALE;

    float highLightAlpha = highLightColor.a;
    float highLightRatio = highLightAlpha / (highLightAlpha + color.a * (1.0 - highLightAlpha));

    vec3 resultRGB = mix(color.rgb, highLightColor.rgb, highLightRatio);
    return vec4(mix(resultRGB * weight, color.rgb, u_activeMix), color.a);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 filterPickingColor(vec4 color) {
  vec3 pickingColor = v_PickingResult.rgb;
  if (u_PickingStage == PICKING_ENCODE && length(pickingColor) < 0.001) {
    discard;
  }
  return u_PickingStage == PICKING_ENCODE ? vec4(pickingColor, step(0.001,color.a)): color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 filterColor(vec4 color) {
  // 过滤多余的 shader 计算
  // return color;
  if(u_shaderPick < 0.5) {
    return color; // 暂时去除 直接取消计算在选中时拖拽地图会有问题
  } else {
    return filterPickingColor(filterHighlightColor(color, 1.0));
  }
  
}

vec4 filterColorAlpha(vec4 color, float alpha) {
  // 过滤多余的 shader 计算
  // return color;
  if(u_shaderPick < 0.5) {
    return color; // 暂时去除 直接取消计算在选中时拖拽地图会有问题
  } else {
    return filterPickingColor(filterHighlightColor(color, alpha));
  }
}

`,sS=`layout(location = 3) in vec3 a_PickingColor;
out vec4 v_PickingResult;

#pragma include "picking_uniforms"

#define PICKING_NONE 0.0
#define PICKING_ENCODE 1.0
#define PICKING_HIGHLIGHT 2.0
#define COLOR_SCALE 1. / 255.

#define NORMAL 0.0
#define HIGHLIGHT 1.0
#define SELECT 2.0

bool isVertexPicked(vec3 vertexColor) {
  return distance(vertexColor,u_PickingColor.rgb) < 0.01;
}

// 判断当前点是否已经被 select 选中
bool isVertexSelected(vec3 vertexColor) {
  return distance(vertexColor,u_CurrentSelectedId.rgb) < 0.01;
}

void setPickingColor(vec3 pickingColor) {
  if(u_shaderPick < 0.5) {
    return;
  }
  // compares only in highlight stage

  v_PickingResult.a = float((u_PickingStage == PICKING_HIGHLIGHT) && isVertexPicked(pickingColor));

  // Stores the picking color so that the fragment shader can render it during picking
  v_PickingResult.rgb = pickingColor * COLOR_SCALE;
}

float setPickingSize(float x) {
   return u_PickingStage == PICKING_ENCODE ? x + u_PickingBuffer : x;
}

float setPickingOrder(float z) {
   bool selected = bool(v_PickingResult.a);
   return selected ? z + 1. : 0.;
}
`,lS=`
#define E 2.718281828459045
vec2 ProjectFlat(vec2 lnglat){
  float maxs=85.0511287798;
  float lat=max(min(maxs,lnglat.y),-maxs);
  float scale= 268435456.;
  float d=PI/180.;
  float x=lnglat.x*d;
  float y=lat*d;
  y=log(tan((PI/4.)+(y/2.)));

  float a=.5/PI,
  b=.5,
  c=-.5/PI;
  d=.5;
  x=scale*(a*x+b);
  y=scale*(c*y+d);
  return vec2(x,y);
}

vec2 unProjectFlat(vec2 px){
  float a=.5/PI;
  float b=.5;
  float c=-.5/PI;
  float d=.5;
  float scale = 268435456.;
  float x=(px.x/scale-b)/a;
  float y=(px.y/scale-d)/c;
  y=(atan(pow(E,y))-(PI/4.))*2.;
  d=PI/180.;
  float lat=y/d;
  float lng=x/d;
  return vec2(lng,lat);
}

float pixelDistance(vec2 from, vec2 to) {
 vec2 a1 = ProjectFlat(from);
 vec2 b1 = ProjectFlat(to);
 return distance(a1, b1);
}

// gaode2.0
vec2 customProject(vec2 lnglat) { // 经纬度 => 平面坐标
  float t = lnglat.x;
  float e = lnglat.y;
  float Sm = 180.0 / PI;
  float Tm = 6378137.0;
  float Rm = PI / 180.0;
  float r = 85.0511287798;
  e = max(min(r, e), -r);
  t *= Rm;
  e *= Rm;
  e = log(tan(PI / 4.0 + e / 2.0));
  return vec2(t * Tm, e * Tm);
}

vec2 unProjCustomCoord(vec2 point) { // 平面坐标 => 经纬度
  float Sm = 57.29577951308232; //180 / Math.PI
  float Tm = 6378137.0;
  float t = point.x;
  float e = point.y;
  return vec2(t / Tm * Sm, (2.0 * atan(exp(e / Tm)) - PI / 2.0) * Sm);
}


float customPixelDistance(vec2 from, vec2 to) {
 vec2 a1 = ProjectFlat(from);
 vec2 b1 = ProjectFlat(to);
 return distance(a1, b1);
}`,Qf=`#define TILE_SIZE 512.0
#define PI 3.1415926536
#define WORLD_SCALE TILE_SIZE / (PI * 2.0)
#define EARTH_CIRCUMFERENCE 40.03e6

#define COORDINATE_SYSTEM_LNGLAT 1.0        // mapbox
#define COORDINATE_SYSTEM_LNGLAT_OFFSET 2.0 // mapbox offset
#define COORDINATE_SYSTEM_VECTOR_TILE 3.0
#define COORDINATE_SYSTEM_IDENTITY 4.0
#define COORDINATE_SYSTEM_P20 5.0           // amap
#define COORDINATE_SYSTEM_P20_OFFSET 6.0    // amap offset
#define COORDINATE_SYSTEM_METER_OFFSET 7.0

#define COORDINATE_SYSTEM_P20_2 8.0         // amap2.0
#pragma include "scene_uniforms"


// web mercator coords -> world coords
vec2 project_mercator(vec2 lnglat) {
   if (u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.0
    return lnglat;
  }
  float x = lnglat.x;
  return vec2(
    radians(x) + PI,
    PI - log(tan(PI * 0.25 + radians(lnglat.y) * 0.5))
  );
}

float project_scale(float meters) {
  return meters * u_PixelsPerMeter.z;
}


// offset coords -> world coords
vec4 project_offset(vec4 offset) {
  float dy = offset.y;
  dy = clamp(dy, -1., 1.);
  vec3 pixels_per_unit = u_PixelsPerDegree + u_PixelsPerDegree2 * dy;
  return vec4(offset.xyz * pixels_per_unit, offset.w);
}

vec3 project_normal(vec3 normal) {
  vec4 normal_modelspace = u_ModelMatrix * vec4(normal, 0.0);
  return normalize(normal_modelspace.xyz * u_PixelsPerMeter);
}

vec3 project_offset_normal(vec3 vector) {
  if (u_CoordinateSystem < COORDINATE_SYSTEM_LNGLAT + 0.01 && u_CoordinateSystem >COORDINATE_SYSTEM_LNGLAT - 0.01
    || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // normals generated by the polygon tesselator are in lnglat offsets instead of meters
    return normalize(vector * u_PixelsPerDegree);
  }
  return project_normal(vector);
}
// || u_CoordinateSystem < COORDINATE_SYSTEM_P20_OFFSET + 0.01 && u_CoordinateSystem >COORDINATE_SYSTEM_P20_OFFSET - 0.01
// reverse Y
vec3 reverse_offset_normal(vec3 vector) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 ||u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET ) {
    return vector * vec3(1.0, -1.0, 1.0);
  }

  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.0
    return vector;
  }
  return vector;
}

vec4 project_mvt_offset_position(vec4 position) {
  float a = COORDINATE_SYSTEM_LNGLAT_OFFSET;
  float b = COORDINATE_SYSTEM_P20_OFFSET;
  float c = COORDINATE_SYSTEM_LNGLAT;
  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    return project_offset(vec4(0.0, 0.0, position.z, position.w));
  }
  if (u_CoordinateSystem < COORDINATE_SYSTEM_LNGLAT + 0.01 && u_CoordinateSystem >COORDINATE_SYSTEM_LNGLAT - 0.01) {
    return vec4(
      project_mercator(position.xy) * WORLD_SCALE * u_ZoomScale,
      project_scale(position.z),
      position.w
    );
  }
  return position;
}

vec4 project_position(vec4 position) {
  float a = COORDINATE_SYSTEM_LNGLAT_OFFSET;
  float b = COORDINATE_SYSTEM_P20_OFFSET;
  float c = COORDINATE_SYSTEM_LNGLAT;
  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    float X = position.x - u_ViewportCenter.x;
    float Y = position.y - u_ViewportCenter.y;
    return project_offset(vec4(X, Y, position.z, position.w));
  }
  if (u_CoordinateSystem < COORDINATE_SYSTEM_LNGLAT + 0.01 && u_CoordinateSystem >COORDINATE_SYSTEM_LNGLAT - 0.01) {
    return vec4(
      project_mercator(position.xy) * WORLD_SCALE * u_ZoomScale,
      project_scale(position.z),
      position.w
    );
  }
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20) {
    return vec4(
      (project_mercator(position.xy) * WORLD_SCALE * u_ZoomScale - vec2(215440491., 106744817.)) * vec2(1., -1.),
      project_scale(position.z),
      position.w
    );
  }

  // if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
 

  //    return vec4(
  //     position.xy,
  //     project_scale(position.z),
  //     position.w);
  // }
  return position;

  // TODO: 瓦片坐标系 & 常规世界坐标系
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
  vec2 offset = pixels / u_ViewportSize * u_DevicePixelRatio * 2.0;
  return offset * u_FocalDistance;
}



float project_pixel_allmap(float pixel) {
  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
    return pixel * pow(2.0, u_Zoom);
  }
  return pixel * u_FocalDistance ;
}

// 适配纹理贴图的等像素大小
float project_pixel_texture(float pixel) {
  // mapbox zoom > 12
  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    return pixel * pow(0.5, u_Zoom) * u_FocalDistance ;
  }

  // amap2 zoom > 12
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    return pixel * pow(2.0, (19.0 - 3.0 - u_Zoom))* u_FocalDistance ;
  }

  // amap zoom > 12
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    return pixel * pow(0.5, u_Zoom)* u_FocalDistance ;
  }

  // amap zoom < 12
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20) {
    return pixel * pow(2.0, (20.0 - u_Zoom))* u_FocalDistance ;
  }
  return pixel * 2.0 *  u_FocalDistance;;
}

// 在不论什么底图下需要统一处理的时候使用
float project_float_pixel(float pixel) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // mapbox P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, (19.0 - u_Zoom))  * u_FocalDistance ;
  }
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    // amap P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, (19.0 - u_Zoom));
  }
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // amap2 P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
    return pixel * pow(2.0, (19.0 - 3.0 - u_Zoom))* u_FocalDistance ;
  }
  return pixel * u_FocalDistance;
}

// Project meter into the unit of pixel which used in the camera world space
float project_float_meter(float meter) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // Since the zoom level uniform is updated by mapservice and it's alread been subtracted by 1
    // Not sure if we are supposed to do that again
   return meter;
  } else  {
    return project_float_pixel(meter);
  }

  // TODO: change the following code to make adaptations for amap
  // return u_FocalDistance * TILE_SIZE * pow(2.0, u_Zoom) * meter / EARTH_CIRCUMFERENCE;
}

float project_pixel(float pixel) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    // amap P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, (19.0 - u_Zoom)) * u_FocalDistance ;
  }
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // amap2 P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
    return pixel * pow(2.0, (19.0 - 3.0 - u_Zoom)) * u_FocalDistance ;
  }
  return pixel * u_FocalDistance;
}
vec2 project_pixel(vec2 pixel) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    // P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, (19.0 - u_Zoom)) * u_FocalDistance ;
  }
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
    return pixel * pow(2.0, (19.0 - 3.0 - u_Zoom)) * u_FocalDistance ;
  }
  return pixel * -1. * u_FocalDistance;
}
vec3 project_pixel(vec3 pixel) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
    // P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, (19.0 - u_Zoom)) *  u_FocalDistance ;
  }
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
    return pixel * pow(2.0, (19.0 - 3.0 - u_Zoom))  * u_FocalDistance ;
  }
  return pixel * -1. * u_FocalDistance;
}

vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
  if (u_CoordinateSystem == COORDINATE_SYSTEM_METER_OFFSET ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // Needs to be divided with project_uCommonUnitsPerMeter
    position.w *= u_PixelsPerMeter.z;
  }

  return viewProjectionMatrix * position + center;
}

// Projects from common space coordinates to clip space
vec4 project_common_position_to_clipspace(vec4 position) {
  return project_common_position_to_clipspace(
    position,
    u_ViewProjectionMatrix,
    u_ViewportCenterProjection
  );
}

vec4 unproject_clipspace_to_position(vec4 clipspacePos, mat4 u_InverseViewProjectionMatrix) {
  vec4 pos = u_InverseViewProjectionMatrix * (clipspacePos - u_ViewportCenterProjection);

  if (u_CoordinateSystem == COORDINATE_SYSTEM_METER_OFFSET ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // Needs to be divided with project_uCommonUnitsPerMeter
     pos.w = pos.w / u_PixelsPerMeter.z;
  }
  return pos;
}


bool isEqual( float a,  float b) {
    return  a< b + 0.001 && a > b - 0.001;
}

// 支持 GaodeV2、Mapbox
vec4 project_common_position_to_clipspace_v2(vec4 position) {
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    return u_Mvp * position;
  } else {
    return project_common_position_to_clipspace(position);
  }
}
`,cS=`vec2 rotate_matrix(vec2 v, float a) {
    float b = a / 180.0 * 3.1415926535897932384626433832795;
    float s = sin(b);
    float c = cos(b);
    mat2 m = mat2(c, s, -s, c);
    return m * v;
}`,fS=`/**
 * 2D signed distance field functions
 * @see http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
 */

float ndot(vec2 a, vec2 b ) { return a.x*b.x - a.y*b.y; }

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

float sdEquilateralTriangle(vec2 p) {
  float k = sqrt(3.0);
  p.x = abs(p.x) - 1.0;
  p.y = p.y + 1.0/k;
  if( p.x + k*p.y > 0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
  p.x -= clamp( p.x, -2.0, 0.0 );
  return -length(p)*sign(p.y);
}

float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p)-b;
  return length(max(d,vec2(0))) + min(max(d.x,d.y),0.0);
}

float sdPentagon(vec2 p, float r) {
  vec3 k = vec3(0.809016994,0.587785252,0.726542528);
  p.x = abs(p.x);
  p -= 2.0*min(dot(vec2(-k.x,k.y),p),0.0)*vec2(-k.x,k.y);
  p -= 2.0*min(dot(vec2( k.x,k.y),p),0.0)*vec2( k.x,k.y);
  p -= vec2(clamp(p.x,-r*k.z,r*k.z),r);
  return length(p)*sign(p.y);
}

float sdHexagon(vec2 p, float r) {
  vec3 k = vec3(-0.866025404,0.5,0.577350269);
  p = abs(p);
  p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
  p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
  return length(p)*sign(p.y);
}

float sdOctogon(vec2 p, float r) {
  vec3 k = vec3(-0.9238795325, 0.3826834323, 0.4142135623 );
  p = abs(p);
  p -= 2.0*min(dot(vec2( k.x,k.y),p),0.0)*vec2( k.x,k.y);
  p -= 2.0*min(dot(vec2(-k.x,k.y),p),0.0)*vec2(-k.x,k.y);
  p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
  return length(p)*sign(p.y);
}

float sdHexagram(vec2 p, float r) {
  vec4 k=vec4(-0.5,0.8660254038,0.5773502692,1.7320508076);
  p = abs(p);
  p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
  p -= 2.0*min(dot(k.yx,p),0.0)*k.yx;
  p -= vec2(clamp(p.x,r*k.z,r*k.w),r);
  return length(p)*sign(p.y);
}

float sdRhombus(vec2 p, vec2 b) {
  vec2 q = abs(p);
  float h = clamp((-2.0*ndot(q,b)+ndot(b,b))/dot(b,b),-1.0,1.0);
  float d = length( q - 0.5*b*vec2(1.0-h,1.0+h) );
  return d * sign( q.x*b.y + q.y*b.x - b.x*b.y );
}

float sdVesica(vec2 p, float r, float d) {
  p = abs(p);
  float b = sqrt(r*r-d*d); // can delay this sqrt
  return ((p.y-b)*d>p.x*b)
          ? length(p-vec2(0.0,b))
          : length(p-vec2(-d,0.0))-r;
}
`,Jf=/precision\s+(high|low|medium)p\s+float/,eh=`#ifdef GL_FRAGMENT_PRECISION_HIGH
 precision highp float;
 #else
 precision mediump float;
#endif
`,hS=/#pragma include (["^+"]?["[a-zA-Z_0-9](.*)"]*?)/g,dS=/void\s+main\s*\([^)]*\)\s*\{\n?/,vS=(Yf=Re(),Yf(Xf=function(){function e(){ie(this,e),S(this,"moduleCache",{}),S(this,"rawContentCache",{})}return ne(e,[{key:"registerBuiltinModules",value:function(){this.destroy(),this.registerModule("common",{vs:Zf,fs:Zf}),this.registerModule("decode",{vs:iS,fs:""}),this.registerModule("scene_uniforms",{vs:qf,fs:qf}),this.registerModule("picking_uniforms",{vs:Kf,fs:Kf}),this.registerModule("projection",{vs:Qf,fs:Qf}),this.registerModule("project",{vs:lS,fs:""}),this.registerModule("sdf_2d",{vs:"",fs:fS}),this.registerModule("lighting",{vs:oS,fs:""}),this.registerModule("light",{vs:aS,fs:""}),this.registerModule("picking",{vs:sS,fs:uS}),this.registerModule("rotation_2d",{vs:cS,fs:""})}},{key:"registerModule",value:function(r,n){n.vs=n.vs.replace(/\r\n/g,`
`),n.fs=n.fs.replace(/\r\n/g,`
`);var i=n.vs,a=n.fs,o=n.uniforms,u=n.inject,s=$o(i),l=s.content,c=s.uniforms,f=$o(a),h=f.content,d=f.uniforms;this.rawContentCache[r]={fs:h,inject:u,uniforms:z(z(z({},c),d),o),vs:l}}},{key:"destroy",value:function(){this.moduleCache={},this.rawContentCache={}}},{key:"getModule",value:function(r){var n=this,i=this.rawContentCache[r].vs,a=this.rawContentCache[r].fs,o=this.rawContentCache[r].inject,u={};o!=null&&o["vs:#decl"]&&(i=(o==null?void 0:o["vs:#decl"])+i,u=$o(o==null?void 0:o["vs:#decl"]).uniforms),o!=null&&o["vs:#main-start"]&&(i=i.replace(dS,function(m){return m+(o==null?void 0:o["vs:#main-start"])})),o!=null&&o["fs:#decl"]&&(a=(o==null?void 0:o["fs:#decl"])+a);var s=this.processModule(i,[],"vs"),l=s.content,c=s.includeList,f=this.processModule(a,[],"fs"),h=f.content,d=f.includeList,v="",p=nS(c.concat(d).concat(r)).reduce(function(m,_){return z(z({},m),n.rawContentCache[_].uniforms)},z({},u));Jf.test(h)||(v=v+eh),v=v+h;var g="";return Jf.test(l)||(g=g+eh),g=g+l,this.moduleCache[r]={fs:v.trim(),uniforms:p,vs:g.trim()},this.moduleCache[r]}},{key:"processModule",value:function(r,n,i){var a=this,o=r.replace(hS,function(u,s){var l=s.split(" "),c=l[0].replace(/"/g,"");if(n.indexOf(c)>-1)return"";var f=a.rawContentCache[c][i];n.push(c);var h=a.processModule(f,n,i),d=h.content;return d});return{content:o,includeList:n}}},{key:"injectDefines",value:function(r){var n=Object.keys(r).reduce(function(i,a){return i+"#define ".concat(a.toUpperCase()," ").concat(r[a],`;
`)},`
`);return n}}]),e}())||Xf);function pS(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=K(e),e!==null););return e}function Kr(){return typeof Reflect<"u"&&Reflect.get?Kr=Reflect.get.bind():Kr=function(t,r,n){var i=pS(t,r);if(i){var a=Object.getOwnPropertyDescriptor(i,r);return a.get?a.get.call(arguments.length<3?t:n):a.value}},Kr.apply(this,arguments)}var Bn=function(e){return e.Normal="normal",e.PostProcessing="post-processing",e}({}),th,rh,eo=(th=Re(),th(rh=function(){function e(){ie(this,e),S(this,"shaderModuleService",void 0),S(this,"rendererService",void 0),S(this,"cameraService",void 0),S(this,"mapService",void 0),S(this,"interactionService",void 0),S(this,"layerService",void 0),S(this,"config",void 0)}return ne(e,[{key:"getName",value:function(){return""}},{key:"getType",value:function(){return Bn.Normal}},{key:"init",value:function(r,n){this.config=n,this.rendererService=r.getContainer().get(q.IRendererService),this.cameraService=r.getContainer().get(q.ICameraService),this.mapService=r.getContainer().get(q.IMapService),this.interactionService=r.getContainer().get(q.IInteractionService),this.layerService=r.getContainer().get(q.ILayerService),this.shaderModuleService=r.getContainer().get(q.IShaderModuleService)}},{key:"render",value:function(r){}}]),e}())||rh),nh,ih;function gS(e){var t=mS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function mS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var yS=(nh=Re(),nh(ih=function(e){be(r,e);var t=gS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getName",value:function(){return"clear"}},{key:"init",value:function(i,a){Kr(K(r.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(){this.rendererService.clear({color:[0,0,0,0],depth:1,framebuffer:null})}}]),r}(eo))||ih),ah,oh,uh,Vo,sh;function _S(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=xS(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function xS(e,t){if(e){if(typeof e=="string")return lh(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return lh(e,t)}}function lh(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var bS=(ah=Re(),oh=Ue(q.IPostProcessor),ah(uh=(Vo=function(){function e(){ie(this,e),S(this,"passes",[]),Ne(this,"postProcessor",sh,this),S(this,"layer",void 0),S(this,"renderFlag",void 0),S(this,"width",0),S(this,"height",0)}return ne(e,[{key:"setLayer",value:function(r){this.layer=r}},{key:"setRenderFlag",value:function(r){this.renderFlag=r}},{key:"getRenderFlag",value:function(){return this.renderFlag}},{key:"getPostProcessor",value:function(){return this.postProcessor}},{key:"render",value:function(){var t=Y(A.mark(function n(){var i,a,o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:i=_S(this.passes),s.prev=1,i.s();case 3:if((a=i.n()).done){s.next=9;break}return o=a.value,s.next=7,o.render(this.layer);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),i.e(s.t0);case 14:return s.prev=14,i.f(),s.finish(14);case 17:return s.next=19,this.postProcessor.render(this.layer);case 19:case"end":return s.stop()}},n,this,[[1,11,14,17]])}));function r(){return t.apply(this,arguments)}return r}()},{key:"resize",value:function(r,n){(this.width!==r||this.height!==n)&&(this.postProcessor.resize(r,n),this.width=r,this.height=n)}},{key:"add",value:function(r,n){r.getType()===Bn.PostProcessing?this.postProcessor.add(r,this.layer,n):(r.init(this.layer,n),this.passes.push(r))}},{key:"insert",value:function(r,n,i){r.init(this.layer,n),this.passes.splice(i,0,r)}},{key:"destroy",value:function(){this.passes.length=0}}]),e}(),sh=Oe(Vo.prototype,"postProcessor",[oh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Vo))||uh),ch,fh;function SS(e){var t=ES();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function ES(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var CS=(ch=Re(),ch(fh=function(e){be(r,e);var t=SS(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"pickingFBO",void 0),S(R(n),"layer",void 0),S(R(n),"width",0),S(R(n),"height",0),S(R(n),"alreadyInRendering",!1),S(R(n),"pickFromPickingFBO",function(u){var s=u.x,l=u.y,c=u.lngLat,f=u.type;if(!(!n.layer.isVisible()||!n.layer.needPick(f))){var h=n.rendererService,d=h.getViewportSize,v=h.readPixelsAsync,p=h.useFramebuffer,g=d(),m=g.width,_=g.height,y=n.layer.getLayerConfig(),x=y.enableHighlight,b=y.enableSelect,k=s*nt,T=l*nt;if(!(k>m||k<0||T>_||T<0)){var D;p(n.pickingFBO,Y(A.mark(function U(){var I,w,M,P,B;return A.wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,v({x:Math.round(k),y:Math.round(_-(l+1)*nt),width:1,height:1,data:new Uint8Array(1*1*4),framebuffer:n.pickingFBO});case 2:D=se.sent,D[0]!==0||D[1]!==0||D[2]!==0?(w=qr(D),M=n.layer.getSource().getFeatureById(w),P={x:s,y:l,type:f,lngLat:c,featureId:w,feature:M},M&&(n.layer.setCurrentPickId(w),n.triggerHoverOnLayer(P))):(B={x:s,y:l,lngLat:c,type:n.layer.getCurrentPickId()===null?"un"+f:"mouseout",featureId:null,feature:null},n.triggerHoverOnLayer(z(z({},B),{},{type:"unpick"})),n.triggerHoverOnLayer(B),n.layer.setCurrentPickId(null)),x&&n.highlightPickedFeature(D),b&&f==="click"&&((I=D)===null||I===void 0?void 0:I.toString())!==[0,0,0,0].toString()&&n.selectFeature(D);case 6:case"end":return se.stop()}},U)})))}}}),n}return ne(r,[{key:"getType",value:function(){return Bn.Normal}},{key:"getName",value:function(){return"pixelPicking"}},{key:"init",value:function(i,a){Kr(K(r.prototype),"init",this).call(this,i,a),this.layer=i;var o=this.rendererService,u=o.createTexture2D,s=o.createFramebuffer,l=o.getViewportSize,c=l(),f=c.width,h=c.height,d=u({width:f,height:h,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE,label:"Picking Texture"});this.pickingFBO=s({color:d}),this.interactionService.on(Rt.Hover,this.pickFromPickingFBO),this.interactionService.on(Rt.Select,this.selectFeatureHandle.bind(this)),this.interactionService.on(Rt.Active,this.highlightFeatureHandle.bind(this))}},{key:"render",value:function(i){var a=this;if(!this.alreadyInRendering){var o=this.rendererService,u=o.getViewportSize,s=o.useFramebuffer,l=o.clear,c=u(),f=c.width,h=c.height;this.alreadyInRendering=!0,(this.width!==f||this.height!==h)&&(this.pickingFBO.resize({width:f,height:h}),this.width=f,this.height=h),s(this.pickingFBO,function(){l({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1});var d=a.layer.multiPassRenderer.getRenderFlag();a.layer.multiPassRenderer.setRenderFlag(!1),i.hooks.beforePickingEncode.call(),i.render(),i.hooks.afterPickingEncode.call(),a.layer.multiPassRenderer.setRenderFlag(d),a.alreadyInRendering=!1})}}},{key:"triggerHoverOnLayer",value:function(i){this.layer.emit(i.type,i)}},{key:"highlightPickedFeature",value:function(i){var a=Ie(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeHighlight.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeature",value:function(i){var a=Ie(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeSelect.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeatureHandle",value:function(i){var a=i.featureId,o=yr(a);this.selectFeature(new Uint8Array(o))}},{key:"highlightFeatureHandle",value:function(i){var a=i.featureId,o=yr(a);this.highlightPickedFeature(new Uint8Array(o))}}]),r}(eo))||fh),hh,dh,vh,jo,ph,AS=Ze.camelCase,wS=Ze.isNil,TS=Ze.upperFirst,MS=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,xr=(hh=Re(),dh=Ue(q.IShaderModuleService),hh(vh=(jo=function(){function e(){ie(this,e),Ne(this,"shaderModuleService",ph,this),S(this,"rendererService",void 0),S(this,"config",void 0),S(this,"quad",MS),S(this,"enabled",!0),S(this,"renderToScreen",!1),S(this,"model",void 0),S(this,"name",void 0),S(this,"optionsToUpdate",{})}return ne(e,[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(r){this.name=r}},{key:"getType",value:function(){return Bn.PostProcessing}},{key:"init",value:function(r,n){this.config=n,this.rendererService=r.getContainer().get(q.IRendererService),this.shaderModuleService=r.getContainer().get(q.IShaderModuleService);var i=this.rendererService,a=i.createAttribute,o=i.createBuffer,u=i.createModel,s=this.setupShaders(),l=s.vs,c=s.fs,f=s.uniforms;this.model=u({vs:l,fs:c,attributes:{a_Position:a({buffer:o({data:[-4,-4,4,-4,0,4],type:L.FLOAT}),size:2})},uniforms:z(z({u_Texture:null},f),this.config&&this.convertOptionsToUniforms(this.config)),depth:{enable:!1},count:3,blend:{enable:this.getName()==="copy"}})}},{key:"render",value:function(r,n){var i=this,a=r.multiPassRenderer.getPostProcessor(),o=this.rendererService,u=o.useFramebuffer,s=o.getViewportSize,l=o.clear,c=s(),f=c.width,h=c.height;u(this.renderToScreen?null:a.getWriteFBO(),function(){l({framebuffer:a.getWriteFBO(),color:[0,0,0,0],depth:1,stencil:0});var d=z({u_BloomFinal:0,u_Texture:a.getReadFBO(),u_ViewportSize:[f,h]},i.convertOptionsToUniforms(i.optionsToUpdate));n&&(d.u_BloomFinal=1,d.u_Texture2=n),i.model.draw({uniforms:d})})}},{key:"isEnabled",value:function(){return this.enabled}},{key:"setEnabled",value:function(r){this.enabled=r}},{key:"setRenderToScreen",value:function(r){this.renderToScreen=r}},{key:"updateOptions",value:function(r){this.optionsToUpdate=z(z({},this.optionsToUpdate),r)}},{key:"setupShaders",value:function(){throw new Error("Method not implemented.")}},{key:"convertOptionsToUniforms",value:function(r){var n={};return Object.keys(r).forEach(function(i){wS(r[i])||(n["u_".concat(TS(AS(i)))]=r[i])}),n}}]),e}(),ph=Oe(jo.prototype,"shaderModuleService",[dh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jo))||vh),gh,mh;function IS(e){var t=kS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function kS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var LS=`varying vec2 v_UV;

uniform float u_BloomFinal: 0.0;
uniform sampler2D u_Texture;
uniform sampler2D u_Texture2;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform float u_radius: 5.0;
uniform float u_intensity: 0.3;
uniform float u_baseRadio: 0.5;

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

float luminance(vec4 color) {
  return  0.2125 * color.r + 0.7154 * color.g + 0.0721 * color.b;
}

void main() {
  // vec4 baseColor = texture2D(u_Texture, v_UV);

  float r = sqrt(u_radius);

  vec4 c1 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(u_radius, 0.0));
  // c1 *= luminance(c1);
  vec4 c2 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(0.0, u_radius));
  // c2 *= luminance(c2);
  vec4 c3 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(r, r));
  // c3 *= luminance(c3);
  vec4 c4 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(r, -r));
  // c4 *= luminance(c4);
  vec4 inbloomColor = (c1 + c2 + c3 + c4) * 0.25;

  // float lum = luminance(inbloomColor);
  // inbloomColor.rgb *= lum;

  if(u_BloomFinal > 0.0) {
    vec4 baseColor = texture2D(u_Texture2, v_UV);
    float baselum = luminance(baseColor);
    gl_FragColor = mix(inbloomColor, baseColor, u_baseRadio);
    if(baselum <= 0.2) {
      gl_FragColor = inbloomColor * u_intensity;
    }
  } else {
    gl_FragColor = inbloomColor;
  }
}`,RS=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,Ho=Ze.isNil,PS=(gh=Re(),gh(mh=function(e){be(r,e);var t=IS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:RS,fs:LS});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return Ho(i.bloomRadius)||(a.u_radius=i.bloomRadius),Ho(i.bloomIntensity)||(a.u_intensity=i.bloomIntensity),Ho(i.bloomBaseRadio)||(a.u_baseRadio=i.bloomBaseRadio),a}}]),r}(xr))||mh),yh,_h;function FS(e){var t=OS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function OS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var DS=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_BlurDir: [1.0, 0.0];

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main() {
  gl_FragColor = blur9(u_Texture, v_UV, u_ViewportSize, u_BlurDir);
}`,NS=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,BS=Ze.isNil,US=(yh=Re(),yh(_h=function(e){be(r,e);var t=FS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:NS,fs:DS});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return BS(i.blurRadius)||(a.u_BlurDir=[i.blurRadius,0]),a}}]),r}(xr))||_h),xh,bh;function zS(e){var t=$S();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function $S(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var VS=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_BlurDir: [1.0, 0.0];

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main() {
  gl_FragColor = blur9(u_Texture, v_UV, u_ViewportSize, u_BlurDir);
}`,jS=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,HS=Ze.isNil,GS=(xh=Re(),xh(bh=function(e){be(r,e);var t=zS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:jS,fs:VS});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return HS(i.blurRadius)||(a.u_BlurDir=[0,i.blurRadius]),a}}]),r}(xr))||bh),Sh,Eh;function WS(e){var t=YS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function YS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var XS=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_Center : [0.5, 0.5];
uniform float u_Angle : 0;
uniform float u_Size : 8;

#pragma include "common"

float scale = PI / u_Size;

float pattern(float u_Angle, vec2 texSize, vec2 texCoord) {
  float s = sin(u_Angle), c = cos(u_Angle);
  vec2 tex = texCoord * texSize - u_Center * texSize;
  vec2 point = vec2(
    c * tex.x - s * tex.y,
    s * tex.x + c * tex.y
  ) * scale;
  return (sin(point.x) * sin(point.y)) * 4.0;
}

// https://github.com/evanw/glfx.js/blob/master/src/filters/fun/colorhalftone.js
vec4 colorHalftone_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  vec3 cmy = 1.0 - color.rgb;
  float k = min(cmy.x, min(cmy.y, cmy.z));
  cmy = (cmy - k) / (1.0 - k);
  cmy = clamp(
    cmy * 10.0 - 3.0 + vec3(
      pattern(u_Angle + 0.26179, texSize, texCoord),
      pattern(u_Angle + 1.30899, texSize, texCoord),
      pattern(u_Angle, texSize, texCoord)
    ),
    0.0,
    1.0
  );
  k = clamp(k * 10.0 - 5.0 + pattern(u_Angle + 0.78539, texSize, texCoord), 0.0, 1.0);
  return vec4(1.0 - cmy - k, color.a);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = colorHalftone_filterColor(gl_FragColor, u_ViewportSize, v_UV);
}`,ZS=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,qS=(Sh=Re(),Sh(Eh=function(e){be(r,e);var t=WS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("colorhalftone-pass",{vs:ZS,fs:XS});var i=this.shaderModuleService.getModule("colorhalftone-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),r}(xr))||Eh),Ch,Ah;function KS(e){var t=QS();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function QS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var JS=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,eE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,tE=(Ch=Re(),Ch(Ah=function(e){be(r,e);var t=KS(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("copy-pass",{vs:eE,fs:JS}),this.shaderModuleService.getModule("copy-pass")}}]),r}(xr))||Ah),wh,Th;function rE(e){var t=nE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function nE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var iE=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_Center : [0.5, 0.5];
uniform float u_Scale : 10;

// https://github.com/evanw/glfx.js/blob/master/src/filters/fun/hexagonalpixelate.js
vec4 hexagonalPixelate_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 tex = (texCoord * texSize - u_Center * texSize) / u_Scale;
  tex.y /= 0.866025404;
  tex.x -= tex.y * 0.5;
  vec2 a;
  if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {
    a = vec2(floor(tex.x), floor(tex.y));
  }
  else a = vec2(ceil(tex.x), ceil(tex.y));
  vec2 b = vec2(ceil(tex.x), floor(tex.y));
  vec2 c = vec2(floor(tex.x), ceil(tex.y));
  vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);
  vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);
  vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);
  vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);
  float alen = length(TEX - A);
  float blen = length(TEX - B);
  float clen = length(TEX - C);
  vec2 choice;
  if (alen < blen) {
    if (alen < clen) choice = a;
    else choice = c;
  } else {
    if (blen < clen) choice = b;
    else choice = c;
  }
  choice.x += choice.y * 0.5;
  choice.y *= 0.866025404;
  choice *= u_Scale / texSize;
  return texture2D(texture, choice + u_Center);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = hexagonalPixelate_sampleColor(u_Texture, u_ViewportSize, v_UV);
}`,aE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,oE=(wh=Re(),wh(Th=function(e){be(r,e);var t=rE(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("hexagonalpixelate-pass",{vs:aE,fs:iE});var i=this.shaderModuleService.getModule("hexagonalpixelate-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),r}(xr))||Th),Mh,Ih;function uE(e){var t=sE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function sE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var lE=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform float u_Strength : 0.6;

vec4 ink_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 dx = vec2(1.0 / texSize.x, 0.0);
  vec2 dy = vec2(0.0, 1.0 / texSize.y);
  vec4 color = texture2D(texture, texCoord);
  float bigTotal = 0.0;
  float smallTotal = 0.0;
  vec3 bigAverage = vec3(0.0);
  vec3 smallAverage = vec3(0.0);
  for (float x = -2.0; x <= 2.0; x += 1.0) {
    for (float y = -2.0; y <= 2.0; y += 1.0) {
      vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;
      bigAverage += sample;
      bigTotal += 1.0;
      if (abs(x) + abs(y) < 2.0) {
        smallAverage += sample;
        smallTotal += 1.0;
      }
    }
  }
  vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);
  float power = u_Strength * u_Strength * u_Strength * u_Strength * u_Strength;
  return vec4(color.rgb - dot(edge, edge) * power * 100000.0, color.a);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = ink_sampleColor(u_Texture, u_ViewportSize, v_UV);
}`,cE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,fE=(Mh=Re(),Mh(Ih=function(e){be(r,e);var t=uE(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("ink-pass",{vs:cE,fs:lE});var i=this.shaderModuleService.getModule("ink-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),r}(xr))||Ih),kh,Lh;function hE(e){var t=dE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function dE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var vE=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform float u_Amount : 0.5;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

// https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
vec4 noise_filterColor(vec4 color, vec2 texCoord) {
  float diff = (rand(texCoord) - 0.5) * u_Amount;
  color.r += diff;
  color.g += diff;
  color.b += diff;
  return color;
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = noise_filterColor(gl_FragColor, v_UV);
}`,pE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,gE=(kh=Re(),kh(Lh=function(e){be(r,e);var t=hE(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("noise-pass",{vs:pE,fs:vE}),this.shaderModuleService.getModule("noise-pass")}}]),r}(xr))||Lh),Rh,Ph;function mE(e){var t=yE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function yE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _E=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,xE=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform float u_Amount : 0.5;

// https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/sepia.js
vec4 sepia_filterColor(vec4 color) {
  float r = color.r;
  float g = color.g;
  float b = color.b;
  color.r =
    min(1.0, (r * (1.0 - (0.607 * u_Amount))) + (g * (0.769 * u_Amount)) + (b * (0.189 * u_Amount)));
  color.g = min(1.0, (r * 0.349 * u_Amount) + (g * (1.0 - (0.314 * u_Amount))) + (b * 0.168 * u_Amount));
  color.b = min(1.0, (r * 0.272 * u_Amount) + (g * 0.534 * u_Amount) + (b * (1.0 - (0.869 * u_Amount))));
  return color;
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = sepia_filterColor(gl_FragColor);
}`,bE=(Rh=Re(),Rh(Ph=function(e){be(r,e);var t=mE(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("sepia-pass",{vs:_E,fs:xE}),this.shaderModuleService.getModule("sepia-pass")}}]),r}(xr))||Ph),Fh,Oh,Dh,Nh,hn,Bh,SE=(Fh=Re(),Oh=Ue(q.IRendererService),Dh=Zx(),Fh(Nh=(hn=function(){function e(){ie(this,e),Ne(this,"rendererService",Bh,this),S(this,"passes",[]),S(this,"readFBO",void 0),S(this,"writeFBO",void 0)}return ne(e,[{key:"getReadFBO",value:function(){return this.readFBO}},{key:"getWriteFBO",value:function(){return this.writeFBO}},{key:"getCurrentFBOTex",value:function(){var r=this.rendererService,n=r.getViewportSize,i=r.createTexture2D,a=n(),o=a.width,u=a.height;return i({x:0,y:0,width:o,height:u,copy:!0})}},{key:"getReadFBOTex",value:function(){var r=this,n=this.rendererService.useFramebuffer;return new Promise(function(i){n(r.readFBO,Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:i(r.getCurrentFBOTex());case 1:case"end":return u.stop()}},a)})))})}},{key:"renderBloomPass",value:function(){var t=Y(A.mark(function n(i,a){var o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.getReadFBOTex();case 2:o=l.sent,u=0;case 4:if(!(u<4)){l.next=11;break}return l.next=7,a.render(i,o);case 7:this.swap(),u++,l.next=4;break;case 11:case"end":return l.stop()}},n,this)}));function r(n,i){return t.apply(this,arguments)}return r}()},{key:"render",value:function(){var t=Y(A.mark(function n(i){var a,o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:a=0;case 1:if(!(a<this.passes.length)){s.next=15;break}if(o=this.passes[a],o.setRenderToScreen(this.isLastEnabledPass(a)),o.getName()!=="bloom"){s.next=9;break}return s.next=7,this.renderBloomPass(i,o);case 7:s.next=12;break;case 9:return s.next=11,o.render(i);case 11:a!==this.passes.length-1&&this.swap();case 12:a++,s.next=1;break;case 15:case"end":return s.stop()}},n,this)}));function r(n){return t.apply(this,arguments)}return r}()},{key:"resize",value:function(r,n){this.readFBO.resize({width:r,height:n}),this.writeFBO.resize({width:r,height:n})}},{key:"add",value:function(r,n,i){r.init(n,i),this.passes.push(r)}},{key:"insert",value:function(r,n,i,a){r.init(i,a),this.passes.splice(n,0,r)}},{key:"getPostProcessingPassByName",value:function(r){return this.passes.find(function(n){return n.getName()===r})}},{key:"init",value:function(){var r=this.rendererService,n=r.createFramebuffer,i=r.createTexture2D;this.readFBO=n({color:i({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.writeFBO=n({color:i({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})})}},{key:"isLastEnabledPass",value:function(r){for(var n=r+1;n<this.passes.length;n++)if(this.passes[n].isEnabled())return!1;return!0}},{key:"swap",value:function(){var r=this.readFBO;this.readFBO=this.writeFBO,this.writeFBO=r}}]),e}(),Bh=Oe(hn.prototype,"rendererService",[Oh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe(hn.prototype,"init",[Dh],Object.getOwnPropertyDescriptor(hn.prototype,"init"),hn.prototype),hn))||Nh),Uh,zh;function EE(e){var t=CE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function CE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var AE=(Uh=Re(),Uh(zh=function(e){be(r,e);var t=EE(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getType",value:function(){return Bn.Normal}},{key:"getName",value:function(){return"render"}},{key:"init",value:function(i,a){Kr(K(r.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(i){var a=this.rendererService,o=a.useFramebuffer,u=a.clear,s=i.multiPassRenderer.getPostProcessor().getReadFBO();o(s,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:s}),i.multiPassRenderer.setRenderFlag(!1),i.models.forEach(function(l){l.draw({uniforms:i.layerModel.getUninforms()})}),i.multiPassRenderer.setRenderFlag(!0)})}}]),r}(eo))||zh),$h,Vh,jh,Go,Hh;function wE(e){var t=TE();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function TE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ME=`uniform float u_opacity : 1.0;
uniform float u_MixRatio : 0.5;

uniform sampler2D u_Diffuse1;
uniform sampler2D u_Diffuse2;

varying vec2 v_UV;

void main() {
  vec4 texel1 = texture2D(u_Diffuse1, v_UV);
  vec4 texel2 = texture2D(u_Diffuse2, v_UV);
  gl_FragColor = u_opacity * mix(texel1, texel2, u_MixRatio);
}
`,Gh=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,IE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;function Wh(e,t){for(var r=0,n=1/t,i=e;i>0;)r=r+n*(i%t),i=Math.floor(i/t),n=n/t;return r}var kE=1,LE=($h=Re(),Vh=Ue(q.IShaderModuleService),$h(jh=(Go=function(e){be(r,e);var t=wE(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),Ne(R(n),"shaderModuleService",Hh,R(n)),S(R(n),"haltonSequence",[]),S(R(n),"accumulatingId",0),S(R(n),"frame",0),S(R(n),"timer",void 0),S(R(n),"sampleRenderTarget",void 0),S(R(n),"prevRenderTarget",void 0),S(R(n),"outputRenderTarget",void 0),S(R(n),"copyRenderTarget",void 0),S(R(n),"blendModel",void 0),S(R(n),"outputModel",void 0),S(R(n),"copyModel",void 0),n}return ne(r,[{key:"getType",value:function(){return Bn.Normal}},{key:"getName",value:function(){return"taa"}},{key:"init",value:function(i,a){Kr(K(r.prototype),"init",this).call(this,i,a);var o=this.rendererService,u=o.createFramebuffer,s=o.createTexture2D;this.sampleRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.prevRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.outputRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.copyRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})});for(var l=0;l<30;l++)this.haltonSequence.push([Wh(l,2),Wh(l,3)]);this.blendModel=this.createTriangleModel("blend-pass",ME),this.outputModel=this.createTriangleModel("copy-pass",Gh,{blend:{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE_MINUS_SRC_ALPHA,srcAlpha:L.ONE,dstAlpha:L.ONE_MINUS_SRC_ALPHA},equation:{rgb:L.FUNC_ADD,alpha:L.FUNC_ADD}}}),this.copyModel=this.createTriangleModel("copy-pass",Gh)}},{key:"render",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height;this.sampleRenderTarget.resize({width:f,height:h}),this.prevRenderTarget.resize({width:f,height:h}),this.outputRenderTarget.resize({width:f,height:h}),this.copyRenderTarget.resize({width:f,height:h}),this.resetFrame(),this.stopAccumulating();var d=i.multiPassRenderer.getPostProcessor().getReadFBO();l(d,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:d}),i.multiPassRenderer.setRenderFlag(!1),i.render(),i.multiPassRenderer.setRenderFlag(!0)});var v=function p(g){!a.accumulatingId||g!==a.accumulatingId||a.isFinished()||(a.doRender(i),window.requestAnimationFrame(function(){p(g)}))};this.accumulatingId=kE++,this.timer=window.setTimeout(function(){v(a.accumulatingId)},50)}},{key:"doRender",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height,d=i.getLayerConfig(),v=d.jitterScale,p=v===void 0?1:v,g=this.haltonSequence[this.frame%this.haltonSequence.length];this.cameraService.jitterProjectionMatrix((g[0]*2-1)/f*p,(g[1]*2-1)/h*p),i.multiPassRenderer.setRenderFlag(!1),i.hooks.beforeRender.call(),l(this.sampleRenderTarget,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:a.sampleRenderTarget}),i.render()}),i.hooks.afterRender.call(),i.multiPassRenderer.setRenderFlag(!0);var m=i.getLayerConfig();l(this.outputRenderTarget,function(){a.blendModel.draw({uniforms:{u_opacity:m.opacity||1,u_MixRatio:a.frame===0?1:.9,u_Diffuse1:a.sampleRenderTarget,u_Diffuse2:a.frame===0?i.multiPassRenderer.getPostProcessor().getReadFBO():a.prevRenderTarget}})}),this.frame===0&&u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:this.copyRenderTarget}),this.frame>=1&&(l(this.copyRenderTarget,function(){a.outputModel.draw({uniforms:{u_Texture:a.outputRenderTarget}})}),l(i.multiPassRenderer.getPostProcessor().getReadFBO(),function(){a.copyModel.draw({uniforms:{u_Texture:a.copyRenderTarget}})}),i.multiPassRenderer.getPostProcessor().render(i));var _=this.prevRenderTarget;this.prevRenderTarget=this.outputRenderTarget,this.outputRenderTarget=_,this.frame++,this.cameraService.clearJitterProjectionMatrix()}},{key:"isFinished",value:function(){return this.frame>=this.haltonSequence.length}},{key:"resetFrame",value:function(){this.frame=0}},{key:"stopAccumulating",value:function(){this.accumulatingId=0,window.clearTimeout(this.timer)}},{key:"createTriangleModel",value:function(i,a,o){this.shaderModuleService.registerModule(i,{vs:IE,fs:a});var u=this.shaderModuleService.getModule(i),s=u.vs,l=u.fs,c=u.uniforms,f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createModel;return v(z({vs:s,fs:l,attributes:{a_Position:h({buffer:d({data:[-4,-4,4,-4,0,4],type:L.FLOAT}),size:2})},uniforms:z({},c),depth:{enable:!1},count:3},o))}}]),r}(eo),Hh=Oe(Go.prototype,"shaderModuleService",[Vh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Go))||jh),mt=new Ts;mt.bind(q.IGlobalConfigService).to(N3).inSingletonScope();Tx(Re(),zt.EventEmitter);mt.bind(q.IEventEmitter).to(zt.EventEmitter);var RE=e3(mt,!1),W0=function(t){var r=RE.lazyInject(t);return function(n,i,a){r.call(this,n,i),a&&(a.initializer=function(){return n[i]})}},PE=0;function R6(){var e=new Ts;return e.parent=mt,e.bind(q.SceneID).toConstantValue("".concat(PE++)),e.bind(q.IShaderModuleService).to(vS).inSingletonScope(),e.bind(q.ILayerService).to(ob).inSingletonScope(),e.bind(q.IDebugService).to(j3).inSingletonScope(),e.bind(q.ISceneService).to(tS).inSingletonScope(),e.bind(q.ICameraService).to(w3).inSingletonScope(),e.bind(q.ICoordinateSystemService).to(z3).inSingletonScope(),e.bind(q.IInteractionService).to(X3).inSingletonScope(),e.bind(q.IPickingService).to(tb).inSingletonScope(),e.bind(q.IControlService).to(k3).inSingletonScope(),e.bind(q.IMarkerService).to(L3).inSingletonScope(),e.bind(q.IIconService).to(A3).inSingletonScope(),e.bind(q.IFontService).to(b3).inSingletonScope(),e.bind(q.IPopupService).to(R3).inSingletonScope(),e.bind(q.INormalPass).to(yS).whenTargetNamed("clear"),e.bind(q.INormalPass).to(CS).whenTargetNamed("pixelPicking"),e.bind(q.INormalPass).to(AE).whenTargetNamed("render"),e.bind(q.INormalPass).to(LE).whenTargetNamed("taa"),e.bind(q.IFactoryNormalPass).toFactory(function(t){return function(r){return t.container.getNamed(q.INormalPass,r)}}),e.bind(q.IPostProcessingPass).to(tE).whenTargetNamed("copy"),e.bind(q.IPostProcessingPass).to(PS).whenTargetNamed("bloom"),e.bind(q.IPostProcessingPass).to(US).whenTargetNamed("blurH"),e.bind(q.IPostProcessingPass).to(GS).whenTargetNamed("blurV"),e.bind(q.IPostProcessingPass).to(gE).whenTargetNamed("noise"),e.bind(q.IPostProcessingPass).to(bE).whenTargetNamed("sepia"),e.bind(q.IPostProcessingPass).to(qS).whenTargetNamed("colorHalftone"),e.bind(q.IPostProcessingPass).to(oE).whenTargetNamed("hexagonalPixelate"),e.bind(q.IPostProcessingPass).to(fE).whenTargetNamed("ink"),e.bind(q.IFactoryPostProcessingPass).toFactory(function(t){return function(r){var n=t.container.getNamed(q.IPostProcessingPass,r);return n.setName(r),n}}),e}function Wo(e){var t=new Ts;return t.parent=e,t.bind(q.IStyleAttributeService).to(db).inSingletonScope(),t.bind(q.IMultiPassRenderer).to(bS).inSingletonScope(),t.bind(q.IPostProcessor).to(SE).inSingletonScope(),t}var Gr={ProjectionMatrix:"u_ProjectionMatrix",ViewMatrix:"u_ViewMatrix",ViewProjectionMatrix:"u_ViewProjectionMatrix",Zoom:"u_Zoom",ZoomScale:"u_ZoomScale",FocalDistance:"u_FocalDistance",CameraPosition:"u_CameraPosition"},ct={MapInitStart:"mapInitStart",LayerInitStart:"layerInitStart",LayerInitEnd:"layerInitEnd",SourceInitStart:"sourceInitStart",SourceInitEnd:"sourceInitEnd",ScaleInitStart:"scaleInitStart",ScaleInitEnd:"scaleInitEnd",MappingStart:"mappingStart",MappingEnd:"mappingEnd",BuildModelStart:"buildModelStart",BuildModelEnd:"buildModelEnd"},Ye=function(e){return e.LINEAR="linear",e.SEQUENTIAL="sequential",e.POWER="power",e.LOG="log",e.IDENTITY="identity",e.TIME="time",e.QUANTILE="quantile",e.QUANTIZE="quantize",e.THRESHOLD="threshold",e.CAT="cat",e.DIVERGING="diverging",e.CUSTOM="threshold",e}({}),dn=function(e){return e.CONSTANT="constant",e.VARIABLE="variable",e}({}),_e=function(e){return e[e.Attribute=0]="Attribute",e[e.InstancedAttribute=1]="InstancedAttribute",e[e.Uniform=2]="Uniform",e}({}),St=function(e){return e.IMAGE="image",e.CUSTOMIMAGE="customImage",e.ARRAYBUFFER="arraybuffer",e.RGB="rgb",e.TERRAINRGB="terrainRGB",e.CUSTOMRGB="customRGB",e.CUSTOMARRAYBUFFER="customArrayBuffer",e.CUSTOMTERRAINRGB="customTerrainRGB",e}({}),FE=function(){var e=Y(A.mark(function t(r,n,i,a){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s,l){n({x:r.x,y:r.y,z:r.z},function(c,f){if(c||f.length===0){l(c);return}f&&Tu([{data:f,bands:[0]}],i,a,function(h,d){h?l(h):d&&s(d)})})}));case 1:case"end":return u.stop()}},t)}));return function(r,n,i,a){return e.apply(this,arguments)}}(),OE=function(){var e=Y(A.mark(function t(r,n){return A.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(o,u){n({x:r.x,y:r.y,z:r.z},function(s,l){if(s||!l){u(s);return}l instanceof ArrayBuffer?Uy(l,function(c,f){c&&u(c),o(f)}):l instanceof HTMLImageElement?o(l):u(s)})}));case 1:case"end":return a.stop()}},t)}));return function(r,n){return e.apply(this,arguments)}}();function DE(e,t){return Array.isArray(e)?typeof e[0]=="string"?e.map(function(r){return Cn(r,t)}):e.map(function(r){return{url:Cn(r.url,t),bands:r.bands||[0]}}):Cn(e,t)}function NE(e){return typeof e=="string"?[{url:e,bands:[0]}]:typeof e[0]=="string"?e.map(function(t){return{url:t,bands:[0]}}):e}function Yh(e,t){e.xhrCancel=function(){t.map(function(r){r.abort()})}}var BE=function(){var e=Y(A.mark(function t(r,n,i,a,o){var u,s,l,c,f,h;return A.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(u=NE(n.url),!(u.length>1)){v.next=15;break}return v.next=4,UE(u,n);case 4:if(s=v.sent,l=s.rasterFiles,c=s.xhrList,f=s.errList,Yh(r,c),!(f.length>0)){v.next=12;break}return i(f,null),v.abrupt("return");case 12:Tu(l,a,o,i),v.next=17;break;case 15:h=us(n,function(p,g){if(p)i(p);else if(g){var m=[{data:g,bands:u[0].bands}];Tu(m,a,o,i)}}),Yh(r,[h]);case 17:case"end":return v.stop()}},t)}));return function(r,n,i,a,o){return e.apply(this,arguments)}}();function UE(e,t){return ju.apply(this,arguments)}function ju(){return ju=Y(A.mark(function e(t,r){var n,i,a,o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:n=[],i=[],a=[],o=0;case 4:if(!(o<t.length)){p.next=20;break}return u=t[o],s=z(z({},r),{},{url:u.url}),l=u.bands,p.next=10,Dy(z(z({},s),{},{type:"arrayBuffer"}));case 10:c=p.sent,f=c.err,h=c.data,d=c.xhr,f&&a.push(f),i.push(d),n.push({data:h,bands:l});case 17:o++,p.next=4;break;case 20:return p.abrupt("return",{rasterFiles:n,xhrList:i,errList:a});case 21:case"end":return p.stop()}},e)})),ju.apply(this,arguments)}var zE=function(){var e=Y(A.mark(function t(r,n,i,a,o){var u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u={url:DE(r,n)},l.abrupt("return",new Promise(function(c,f){BE(i,u,function(h,d){h?f(h):d&&c(d)},a,o)}));case 2:case"end":return l.stop()}},t)}));return function(r,n,i,a,o){return e.apply(this,arguments)}}(),Xh=function(){var e=Y(A.mark(function t(r,n,i,a){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return u=Array.isArray(r)?r[0]:r,a.wmtsOptions?(s=(a==null?void 0:a.getURLFromTemplate)||J1,o=s(u,z(z({},n),a.wmtsOptions))):(l=(a==null?void 0:a.getURLFromTemplate)||Cn,o=l(u,n)),f.abrupt("return",new Promise(function(h,d){var v,p=lu({url:o,type:(a==null||(v=a.requestParameters)===null||v===void 0?void 0:v.type)||"arrayBuffer"},function(g,m){g?d(g):m&&h(m)},a.transformResponse);i.xhrCancel=function(){return p.cancel()}}));case 3:case"end":return f.stop()}},t)}));return function(r,n,i,a){return e.apply(this,arguments)}}(),Zh=function(){return{rasterData:new Uint8Array([0]),width:1,height:1}},$E={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0};St.ARRAYBUFFER,St.RGB;function VE(e){return!!(Array.isArray(e)&&e.length===0||!Array.isArray(e)&&typeof e!="string")}function jE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(VE(e))throw new Error("tile server url is error");var r=(t==null?void 0:t.dataType)||St.IMAGE;r===St.RGB&&(r=St.ARRAYBUFFER);var n=function(o,u){switch(r){case St.IMAGE:return Xh(e,o,u,t);case St.CUSTOMIMAGE:case St.CUSTOMTERRAINRGB:return OE(u,t==null?void 0:t.getCustomData);case St.ARRAYBUFFER:return zE(e,o,u,(t==null?void 0:t.format)||Zh,t==null?void 0:t.operation);case St.CUSTOMARRAYBUFFER:case St.CUSTOMRGB:return FE(u,t==null?void 0:t.getCustomData,(t==null?void 0:t.format)||Zh,t==null?void 0:t.operation);default:return Xh(e,o,u,t)}},i=z(z(z({},$E),t),{},{getTileData:n});return{data:e,dataArray:[],tilesetOptions:i,isTile:!0}}var HE=["extent","min","max","width","height","format","operation"];function GE(e,t){var r=t.extent,n=t.min,i=t.max,a=t.width,o=t.height,u=t.format,s=t.operation,l=Wt(t,HE),c;if(u===void 0||o0(e))c=Array.from(e);else{var f=Array.isArray(e)?e:[e];c=Es(f,u,s)}var h={_id:1,dataArray:[z(z({_id:1,data:c,width:a,height:o},l),{},{min:n,max:i,coordinates:[[r[0],r[1]],[r[2],r[3]]]})]};return h}var WE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0},YE=function(){var e=Y(A.mark(function t(r){return A.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(a){var o=Ie(r.bounds,4),u=o[0],s=o[1],l=o[2],c=o[3],f={layers:{testTile:{features:[{type:"Feature",properties:{key:r.x+"/"+r.y+"/"+r.z,x:(u+l)/2,y:(s+c)/2},geometry:{type:"LineString",coordinates:[[l,c],[l,s],[u,s],[u,s]]}}]}}};a(f)}));case 1:case"end":return i.stop()}},t)}));return function(r){return e.apply(this,arguments)}}();function XE(e,t){var r=function(a){return YE(a)},n=z(z(z({},WE),t),{},{getTileData:r});return{data:e,dataArray:[],tilesetOptions:n,isTile:!0}}var ZE=["extent","width","height"];function qE(e,t){var r=t.extent,n=t.width,i=t.height,a=Wt(t,ZE);e.length<3&&console.warn("RGB解析需要三个波段的数据");for(var o=a.bands||[0,1,2],u=Ie(o,3),s=u[0],l=u[1],c=u[2],f=[e[s],e[l],e[c]],h=[],d=(a==null?void 0:a.countCut)||[2,98],v=Ie(d,2),p=v[0],g=v[1],m=(a==null?void 0:a.RMinMax)||wn(f[0],p,g),_=(a==null?void 0:a.GMinMax)||wn(f[1],p,g),y=(a==null?void 0:a.BMinMax)||wn(f[2],p,g),x=0;x<f[0].length;x++)h.push(Math.max(0,f[0][x]-m[0])),h.push(Math.max(0,f[1][x]-_[0])),h.push(Math.max(0,f[2][x]-y[0]));var b={_id:1,dataArray:[z(z({_id:1,data:h,width:n,height:i,rMinMax:m,gMinMax:_,bMinMax:y},a),{},{coordinates:[[r[0],r[1]],[r[2],r[3]]]})]};return b}var KE=["extent","width","height"];function QE(e,t){var r=t.extent,n=t.width,i=t.height,a=Wt(t,KE);e.length<2&&console.warn("RGB解析需要2个波段的数据");for(var o=a.bands||[0,1],u=Ie(o,2),s=u[0],l=u[1],c=[e[s],e[l]],f=[],h=0;h<c[0].length;h++)f.push((c[1][h]-c[0][h])/(c[1][h]+c[0][h]));var d={_id:1,dataArray:[z(z({_id:1,data:f,width:n,height:i},a),{},{coordinates:[[r[0],r[1]],[r[2],r[3]]]})]};return d}var Y0={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(bi,function(){function r(I,w,M,P,B,J){if(!(B-P<=M)){var se=P+B>>1;n(I,w,se,P,B,J%2),r(I,w,M,P,se-1,J+1),r(I,w,M,se+1,B,J+1)}}function n(I,w,M,P,B,J){for(;B>P;){if(B-P>600){var se=B-P+1,ce=M-P+1,pe=Math.log(se),H=.5*Math.exp(2*pe/3),V=.5*Math.sqrt(pe*H*(se-H)/se)*(ce-se/2<0?-1:1),Z=Math.max(P,Math.floor(M-ce*H/se+V)),X=Math.min(B,Math.floor(M+(se-ce)*H/se+V));n(I,w,M,Z,X,J)}var fe=w[2*M+J],ue=P,he=B;for(i(I,w,P,M),w[2*B+J]>fe&&i(I,w,P,B);ue<he;){for(i(I,w,ue,he),ue++,he--;w[2*ue+J]<fe;)ue++;for(;w[2*he+J]>fe;)he--}w[2*P+J]===fe?i(I,w,P,he):(he++,i(I,w,he,B)),he<=M&&(P=he+1),M<=he&&(B=he-1)}}function i(I,w,M,P){a(I,M,P),a(w,2*M,2*P),a(w,2*M+1,2*P+1)}function a(I,w,M){var P=I[w];I[w]=I[M],I[M]=P}function o(I,w,M,P,B,J,se){for(var ce=[0,I.length-1,0],pe=[],H,V;ce.length;){var Z=ce.pop(),X=ce.pop(),fe=ce.pop();if(X-fe<=se){for(var ue=fe;ue<=X;ue++)H=w[2*ue],V=w[2*ue+1],H>=M&&H<=B&&V>=P&&V<=J&&pe.push(I[ue]);continue}var he=Math.floor((fe+X)/2);H=w[2*he],V=w[2*he+1],H>=M&&H<=B&&V>=P&&V<=J&&pe.push(I[he]);var Be=(Z+1)%2;(Z===0?M<=H:P<=V)&&(ce.push(fe),ce.push(he-1),ce.push(Be)),(Z===0?B>=H:J>=V)&&(ce.push(he+1),ce.push(X),ce.push(Be))}return pe}function u(I,w,M,P,B,J){for(var se=[0,I.length-1,0],ce=[],pe=B*B;se.length;){var H=se.pop(),V=se.pop(),Z=se.pop();if(V-Z<=J){for(var X=Z;X<=V;X++)s(w[2*X],w[2*X+1],M,P)<=pe&&ce.push(I[X]);continue}var fe=Math.floor((Z+V)/2),ue=w[2*fe],he=w[2*fe+1];s(ue,he,M,P)<=pe&&ce.push(I[fe]);var Be=(H+1)%2;(H===0?M-B<=ue:P-B<=he)&&(se.push(Z),se.push(fe-1),se.push(Be)),(H===0?M+B>=ue:P+B>=he)&&(se.push(fe+1),se.push(V),se.push(Be))}return ce}function s(I,w,M,P){var B=I-M,J=w-P;return B*B+J*J}var l=function(I){return I[0]},c=function(I){return I[1]},f=function(w,M,P,B,J){M===void 0&&(M=l),P===void 0&&(P=c),B===void 0&&(B=64),J===void 0&&(J=Float64Array),this.nodeSize=B,this.points=w;for(var se=w.length<65536?Uint16Array:Uint32Array,ce=this.ids=new se(w.length),pe=this.coords=new J(w.length*2),H=0;H<w.length;H++)ce[H]=H,pe[2*H]=M(w[H]),pe[2*H+1]=P(w[H]);r(ce,pe,B,0,ce.length-1,0)};f.prototype.range=function(w,M,P,B){return o(this.ids,this.coords,w,M,P,B,this.nodeSize)},f.prototype.within=function(w,M,P){return u(this.ids,this.coords,w,M,P,this.nodeSize)};var h={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(I){return I}},d=Math.fround||function(I){return function(w){return I[0]=+w,I[0]}}(new Float32Array(1)),v=function(w){this.options=T(Object.create(h),w),this.trees=new Array(this.options.maxZoom+1)};v.prototype.load=function(w){var M=this.options,P=M.log,B=M.minZoom,J=M.maxZoom,se=M.nodeSize;P&&console.time("total time");var ce="prepare "+w.length+" points";P&&console.time(ce),this.points=w;for(var pe=[],H=0;H<w.length;H++)w[H].geometry&&pe.push(g(w[H],H));this.trees[J+1]=new f(pe,D,U,se,Float32Array),P&&console.timeEnd(ce);for(var V=J;V>=B;V--){var Z=+Date.now();pe=this._cluster(pe,V),this.trees[V]=new f(pe,D,U,se,Float32Array),P&&console.log("z%d: %d clusters in %dms",V,pe.length,+Date.now()-Z)}return P&&console.timeEnd("total time"),this},v.prototype.getClusters=function(w,M){var P=((w[0]+180)%360+360)%360-180,B=Math.max(-90,Math.min(90,w[1])),J=w[2]===180?180:((w[2]+180)%360+360)%360-180,se=Math.max(-90,Math.min(90,w[3]));if(w[2]-w[0]>=360)P=-180,J=180;else if(P>J){var ce=this.getClusters([P,B,180,se],M),pe=this.getClusters([-180,B,J,se],M);return ce.concat(pe)}for(var H=this.trees[this._limitZoom(M)],V=H.range(y(P),x(se),y(J),x(B)),Z=[],X=0,fe=V;X<fe.length;X+=1){var ue=fe[X],he=H.points[ue];Z.push(he.numPoints?m(he):this.points[he.index])}return Z},v.prototype.getChildren=function(w){var M=this._getOriginId(w),P=this._getOriginZoom(w),B="No cluster with the specified id.",J=this.trees[P];if(!J)throw new Error(B);var se=J.points[M];if(!se)throw new Error(B);for(var ce=this.options.radius/(this.options.extent*Math.pow(2,P-1)),pe=J.within(se.x,se.y,ce),H=[],V=0,Z=pe;V<Z.length;V+=1){var X=Z[V],fe=J.points[X];fe.parentId===w&&H.push(fe.numPoints?m(fe):this.points[fe.index])}if(H.length===0)throw new Error(B);return H},v.prototype.getLeaves=function(w,M,P){M=M||10,P=P||0;var B=[];return this._appendLeaves(B,w,M,P,0),B},v.prototype.getTile=function(w,M,P){var B=this.trees[this._limitZoom(w)],J=Math.pow(2,w),se=this.options,ce=se.extent,pe=se.radius,H=pe/ce,V=(P-H)/J,Z=(P+1+H)/J,X={features:[]};return this._addTileFeatures(B.range((M-H)/J,V,(M+1+H)/J,Z),B.points,M,P,J,X),M===0&&this._addTileFeatures(B.range(1-H/J,V,1,Z),B.points,J,P,J,X),M===J-1&&this._addTileFeatures(B.range(0,V,H/J,Z),B.points,-1,P,J,X),X.features.length?X:null},v.prototype.getClusterExpansionZoom=function(w){for(var M=this._getOriginZoom(w)-1;M<=this.options.maxZoom;){var P=this.getChildren(w);if(M++,P.length!==1)break;w=P[0].properties.cluster_id}return M},v.prototype._appendLeaves=function(w,M,P,B,J){for(var se=this.getChildren(M),ce=0,pe=se;ce<pe.length;ce+=1){var H=pe[ce],V=H.properties;if(V&&V.cluster?J+V.point_count<=B?J+=V.point_count:J=this._appendLeaves(w,V.cluster_id,P,B,J):J<B?J++:w.push(H),w.length===P)break}return J},v.prototype._addTileFeatures=function(w,M,P,B,J,se){for(var ce=0,pe=w;ce<pe.length;ce+=1){var H=pe[ce],V=M[H],Z=V.numPoints,X=void 0,fe=void 0,ue=void 0;if(Z)X=_(V),fe=V.x,ue=V.y;else{var he=this.points[V.index];X=he.properties,fe=y(he.geometry.coordinates[0]),ue=x(he.geometry.coordinates[1])}var Be={type:1,geometry:[[Math.round(this.options.extent*(fe*J-P)),Math.round(this.options.extent*(ue*J-B))]],tags:X},Le=void 0;Z?Le=V.id:this.options.generateId?Le=V.index:this.points[V.index].id&&(Le=this.points[V.index].id),Le!==void 0&&(Be.id=Le),se.features.push(Be)}},v.prototype._limitZoom=function(w){return Math.max(this.options.minZoom,Math.min(Math.floor(+w),this.options.maxZoom+1))},v.prototype._cluster=function(w,M){for(var P=[],B=this.options,J=B.radius,se=B.extent,ce=B.reduce,pe=B.minPoints,H=J/(se*Math.pow(2,M)),V=0;V<w.length;V++){var Z=w[V];if(!(Z.zoom<=M)){Z.zoom=M;for(var X=this.trees[M+1],fe=X.within(Z.x,Z.y,H),ue=Z.numPoints||1,he=ue,Be=0,Le=fe;Be<Le.length;Be+=1){var Qe=Le[Be],$=X.points[Qe];$.zoom>M&&(he+=$.numPoints||1)}if(he>ue&&he>=pe){for(var ae=Z.x*ue,me=Z.y*ue,ee=ce&&ue>1?this._map(Z,!0):null,$e=(V<<5)+(M+1)+this.points.length,ke=0,je=fe;ke<je.length;ke+=1){var Pe=je[ke],Te=X.points[Pe];if(!(Te.zoom<=M)){Te.zoom=M;var tt=Te.numPoints||1;ae+=Te.x*tt,me+=Te.y*tt,Te.parentId=$e,ce&&(ee||(ee=this._map(Z,!0)),ce(ee,this._map(Te)))}}Z.parentId=$e,P.push(p(ae/he,me/he,$e,he,ee))}else if(P.push(Z),he>1)for(var ut=0,at=fe;ut<at.length;ut+=1){var Xe=at[ut],At=X.points[Xe];At.zoom<=M||(At.zoom=M,P.push(At))}}}return P},v.prototype._getOriginId=function(w){return w-this.points.length>>5},v.prototype._getOriginZoom=function(w){return(w-this.points.length)%32},v.prototype._map=function(w,M){if(w.numPoints)return M?T({},w.properties):w.properties;var P=this.points[w.index].properties,B=this.options.map(P);return M&&B===P?T({},B):B};function p(I,w,M,P,B){return{x:d(I),y:d(w),zoom:1/0,id:M,parentId:-1,numPoints:P,properties:B}}function g(I,w){var M=I.geometry.coordinates,P=M[0],B=M[1];return{x:d(y(P)),y:d(x(B)),zoom:1/0,index:w,parentId:-1}}function m(I){return{type:"Feature",id:I.id,properties:_(I),geometry:{type:"Point",coordinates:[b(I.x),k(I.y)]}}}function _(I){var w=I.numPoints,M=w>=1e4?Math.round(w/1e3)+"k":w>=1e3?Math.round(w/100)/10+"k":w;return T(T({},I.properties),{cluster:!0,cluster_id:I.id,point_count:w,point_count_abbreviated:M})}function y(I){return I/360+.5}function x(I){var w=Math.sin(I*Math.PI/180),M=.5-.25*Math.log((1+w)/(1-w))/Math.PI;return M<0?0:M>1?1:M}function b(I){return(I-.5)*360}function k(I){var w=(180-I*360)*Math.PI/180;return 360*Math.atan(Math.exp(w))/Math.PI-90}function T(I,w){for(var M in w)I[M]=w[M];return I}function D(I){return I.x}function U(I){return I.y}return v})})(Y0);var JE=Y0.exports;const eC=_r(JE);function X0(e,t){var r=t.radius,n=r===void 0?40:r,i=t.maxZoom,a=i===void 0?18:i,o=t.minZoom,u=o===void 0?0:o,s=t.zoom,l=s===void 0?2:s;if(e.pointIndex){var c=e.pointIndex.getClusters(e.extent,Math.floor(l));return e.dataArray=tC(c),e}var f=new eC({radius:n,minZoom:u,maxZoom:a}),h={type:"FeatureCollection",features:[]};return h.features=e.dataArray.map(function(d){return{type:"Feature",geometry:{type:"Point",coordinates:d.coordinates},properties:z({},d)}}),f.load(h.features),f}function tC(e){return e.map(function(t,r){return z({coordinates:t.geometry.coordinates,_id:r+1},t.properties)})}function rC(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]>t&&(t=e[r]);return t}function nC(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]<t&&(t=e[r]);return t}function Z0(e){if(e.length===0)return 0;for(var t=e[0],r=0,n,i=1;i<e.length;i++)n=t+e[i]*1,Math.abs(t)>=Math.abs(e[i])?r+=t-n+e[i]:r+=e[i]-n+t,t=n;return t+r*1}function iC(e){if(e.length===0)throw new Error("mean requires at least one data point");return Z0(e)/e.length}var aC={min:nC,max:rC,mean:iC,sum:Z0};function oC(e){var t=uC();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function uC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sC=Ze.cloneDeep,qh=Ze.isFunction,lC=Ze.isString,cC=Ze.mergeWith;function fC(e,t){if(Array.isArray(t))return t}var q0=function(e){be(r,e);var t=oC(r);function r(n,i){var a;return ie(this,r),a=t.call(this),S(R(a),"type","source"),S(R(a),"isTile",!1),S(R(a),"inited",!1),S(R(a),"hooks",{init:new Jt}),S(R(a),"parser",{type:"geojson"}),S(R(a),"transforms",[]),S(R(a),"cluster",!1),S(R(a),"clusterOptions",{enable:!1,radius:40,maxZoom:20,zoom:-99,method:"count"}),S(R(a),"invalidExtent",!1),S(R(a),"dataArrayChanged",!1),S(R(a),"cfg",{autoRender:!0}),a.originData=n,a.initCfg(i),a.init().then(function(){a.inited=!0,a.emit("update",{type:"inited"})}),a}return ne(r,[{key:"getSourceCfg",value:function(){return this.cfg}},{key:"getClusters",value:function(i){return this.clusterIndex.getClusters(this.caculClusterExtent(2),i)}},{key:"getClustersLeaves",value:function(i){return this.clusterIndex.getLeaves(i,1/0)}},{key:"getParserType",value:function(){return this.parser.type}},{key:"updateClusterData",value:function(i){var a=this,o=this.clusterOptions,u=o.method,s=u===void 0?"sum":u,l=o.field,c=this.clusterIndex.getClusters(this.caculClusterExtent(2),Math.floor(i));this.clusterOptions.zoom=i,c.forEach(function(f){f.id||(f.properties.point_count=1)}),(l||qh(s))&&(c=c.map(function(f){var h=f.id;if(h){var d=a.clusterIndex.getLeaves(h,1/0),v=d.map(function(m){return m.properties}),p;if(lC(s)&&l){var g=w_(v,l);p=aC[s](g)}qh(s)&&(p=s(v)),f.properties.stat=p}else f.properties.point_count=1;return f})),this.data=ol("geojson")({type:"FeatureCollection",features:c}),this.executeTrans()}},{key:"getFeatureById",value:function(i){var a=this.parser,o=a.type,u=o===void 0?"geojson":o,s=a.geometry;if(u==="geojson"&&!this.cluster){var l=i<this.originData.features.length?this.originData.features[i]:"null",c=sC(l);if(c!=null&&c.properties&&(this.transforms.length!==0||this.dataArrayChanged)){var f=this.data.dataArray.find(function(h){return h._id===i});c.properties=f}return c}else return u==="json"&&s?this.data.dataArray.find(function(h){return h._id===i}):i<this.data.dataArray.length?this.data.dataArray[i]:"null"}},{key:"updateFeaturePropertiesById",value:function(i,a){this.data.dataArray=this.data.dataArray.map(function(o){return o._id===i?z(z({},o),a):o}),this.dataArrayChanged=!0,this.emit("update",{type:"update"})}},{key:"getFeatureId",value:function(i,a){var o=this.data.dataArray.find(function(u){return u[i]===a});return o==null?void 0:o._id}},{key:"setData",value:function(i,a){var o=this;this.originData=i,this.dataArrayChanged=!1,this.initCfg(a),this.init().then(function(){o.emit("update",{type:"update"})})}},{key:"reloadAllTile",value:function(){var i;(i=this.tileset)===null||i===void 0||i.reloadAll()}},{key:"reloadTilebyId",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileById(i,a,o)}},{key:"reloadTileByLnglat",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileByLnglat(i,a,o)}},{key:"getTileExtent",value:function(i,a){var o;return(o=this.tileset)===null||o===void 0?void 0:o.getTileExtent(i,a)}},{key:"getTileByZXY",value:function(i,a,o){var u;return(u=this.tileset)===null||u===void 0?void 0:u.getTileByZXY(i,a,o)}},{key:"reloadTileByExtent",value:function(i,a){var o;(o=this.tileset)===null||o===void 0||o.reloadTileByExtent(i,a)}},{key:"destroy",value:function(){var i;this.removeAllListeners(),this.originData=null,this.clusterIndex=null,this.data=null,(i=this.tileset)===null||i===void 0||i.destroy()}},{key:"processData",value:function(){var n=Y(A.mark(function a(){var o=this;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(l,c){try{o.excuteParser(),o.initCluster(),o.executeTrans(),l({})}catch(f){c(f)}}));case 1:case"end":return s.stop()}},a)}));function i(){return n.apply(this,arguments)}return i}()},{key:"initCfg",value:function(i){this.cfg=cC(this.cfg,i,fC);var a=this.cfg;a&&(a.parser&&(this.parser=a.parser),a.transforms&&(this.transforms=a.transforms),this.cluster=a.cluster||!1,a.clusterOptions&&(this.cluster=!0,this.clusterOptions=z(z({},this.clusterOptions),a.clusterOptions)))}},{key:"init",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.inited=!1,u.next=3,this.processData();case 3:this.inited=!0;case 4:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"excuteParser",value:function(){var i=this.parser,a=i.type||"geojson",o=ol(a);this.data=o(this.originData,i),this.tileset=this.initTileset(),!i.cancelExtent&&(this.extent=m1(this.data.dataArray),this.setCenter(this.extent),this.invalidExtent=this.extent[0]===this.extent[2]||this.extent[1]===this.extent[3])}},{key:"setCenter",value:function(i){this.center=[(i[0]+i[2])/2,(i[1]+i[3])/2],(isNaN(this.center[0])||isNaN(this.center[1]))&&(this.center=[108.92361111111111,34.54083333333333])}},{key:"initTileset",value:function(){var i=this.data.tilesetOptions;if(i){if(this.isTile=!0,this.tileset)return this.tileset.updateOptions(i),this.tileset;var a=new Q1(z({},i));return a}}},{key:"executeTrans",value:function(){var i=this,a=this.transforms;a.forEach(function(o){var u=o.type,s=_y(u)(i.data,o);Object.assign(i.data,s)})}},{key:"initCluster",value:function(){if(this.cluster){var i=this.clusterOptions||{};this.clusterIndex=X0(this.data,i)}}},{key:"caculClusterExtent",value:function(i){var a=[[-1/0,-1/0],[1/0,1/0]];return this.invalidExtent||(a=ds(Ta(this.extent),i)),a[0].concat(a[1])}}]),r}(zt.EventEmitter);function hC(e,t){var r=t.callback;return r&&(e.dataArray=e.dataArray.filter(r)),e}function Kh(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=dC(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function dC(e,t){if(e){if(typeof e=="string")return Qh(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qh(e,t)}}function Qh(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Rs=6378e3;function vC(e,t){var r=e.dataArray,n=t.size,i=n===void 0?10:n,a=i/(2*Math.PI*Rs)*(256<<20)/2,o=pC(r,i),u=o.gridHash,s=o.gridOffset,l=_C(u,s,t);return{yOffset:a,xOffset:a,radius:a,type:"grid",dataArray:l}}function pC(e,t){var r=1/0,n=-1/0,i,a=Kh(e),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;i=u.coordinates[1],Number.isFinite(i)&&(r=i<r?i:r,n=i>n?i:n)}}catch(y){a.e(y)}finally{a.f()}var s=(r+n)/2,l=gC(t,s);if(l.xOffset<=0||l.yOffset<=0)return{gridHash:{},gridOffset:l};var c={},f=Kh(e),h;try{for(f.s();!(h=f.n()).done;){var d=h.value,v=d.coordinates[1],p=d.coordinates[0];if(Number.isFinite(v)&&Number.isFinite(p)){var g=Math.floor((v+90)/l.yOffset),m=Math.floor((p+180)/l.xOffset),_="".concat(g,"-").concat(m);c[_]=c[_]||{count:0,points:[]},c[_].count+=1,c[_].points.push(d)}}}catch(y){f.e(y)}finally{f.f()}return{gridHash:c,gridOffset:l}}function gC(e,t){var r=mC(e),n=yC(t,e);return{yOffset:r,xOffset:n}}function mC(e){return e/Rs*(180/Math.PI)}function yC(e,t){return t/Rs*(180/Math.PI)/Math.cos(e*Math.PI/180)}function _C(e,t,r){return Object.keys(e).reduce(function(n,i,a){var o=i.split("-"),u=parseInt(o[0],10),s=parseInt(o[1],10),l={};if(r.field&&r.method){var c=Wp(e[i].points,r.field);l[r.method]=Gp[r.method](c)}return Object.assign(l,{_id:a,coordinates:ot([-180+t.xOffset*(s+.5),-90+t.yOffset*(u+.5)]),rawData:e[i].points,count:e[i].count}),n.push(l),n},[])}var _n=Math.PI/3,xC=[0,_n,2*_n,3*_n,4*_n,5*_n];function bC(e){return e[0]}function SC(e){return e[1]}function EC(){var e=0,t=0,r=1,n=1,i=bC,a=SC,o,u,s;function l(f){var h={},d=[],v,p=f.length;for(v=0;v<p;++v)if(!(isNaN(m=+i.call(null,g=f[v],v,f))||isNaN(_=+a.call(null,g,v,f)))){var g,m,_,y=Math.round(_=_/s),x=Math.round(m=m/u-(y&1)/2),b=_-y;if(Math.abs(b)*3>1){var k=m-x,T=x+(m<x?-1:1)/2,D=y+(_<y?-1:1),U=m-T,I=_-D;k*k+b*b>U*U+I*I&&(x=T+(y&1?1:-1)/2,y=D)}var w=x+"-"+y,M=h[w];M?M.push(g):(d.push(M=h[w]=[g]),M.x=(x+(y&1)/2)*u,M.y=y*s)}return d}function c(f){var h=0,d=0;return xC.map(function(v){var p=Math.sin(v)*f,g=-Math.cos(v)*f,m=p-h,_=g-d;return h=p,d=g,[m,_]})}return l.hexagon=function(f){return"m"+c(f==null?o:+f).join("l")+"z"},l.centers=function(){for(var f=[],h=Math.round(t/s),d=Math.round(e/u),v=h*s;v<n+o;v+=s,++h)for(var p=d*u+(h&1)*u/2;p<r+u/2;p+=u)f.push([p,v]);return f},l.mesh=function(){var f=c(o).slice(0,4).join("l");return l.centers().map(function(h){return"M"+h+"m"+f}).join("")},l.x=function(f){return arguments.length?(i=f,l):i},l.y=function(f){return arguments.length?(a=f,l):a},l.radius=function(f){return arguments.length?(o=+f,u=o*2*Math.sin(_n),s=o*1.5,l):o},l.size=function(f){return arguments.length?(e=t=0,r=+f[0],n=+f[1],l):[r-e,n-t]},l.extent=function(f){return arguments.length?(e=+f[0][0],t=+f[0][1],r=+f[1][0],n=+f[1][1],l):[[e,t],[r,n]]},l.radius(1)}var CC=6378e3;function AC(e,t){var r=e.dataArray,n=t.size,i=n===void 0?10:n,a=t.method,o=a===void 0?"sum":a,u=i/(2*Math.PI*CC)*(256<<20)/2,s=r.map(function(h){var d=ot(h.coordinates),v=Ie(d,2),p=v[0],g=v[1];return z(z({},h),{},{coordinates:[p,g]})}),l=EC().radius(u).x(function(h){return h.coordinates[0]}).y(function(h){return h.coordinates[1]}),c=l(s),f={dataArray:c.map(function(h,d){var v;if(t.field&&o){var p=Wp(h,t.field);h[o]=Gp[o](p)}return v={},S(v,t.method,h[o]),S(v,"count",h.length),S(v,"rawData",h),S(v,"coordinates",[h.x,h.y]),S(v,"_id",d),v}),radius:u,xOffset:u,yOffset:u,type:"hexagon"};return f}function wC(e,t){var r=t.sourceField,n=t.targetField,i=t.data,a={};return i.forEach(function(o){a[o[r]]=o}),e.dataArray=e.dataArray.map(function(o){var u=o[n];return z(z({},o),a[u])}),e}function TC(e,t){var r=t.callback;return r&&(e.dataArray=e.dataArray.map(r)),e}Ut("rasterTile",jE);Ut("mvt",N2);Ut("geojsonvt",q_);Ut("testTile",XE);Ut("geojson",k_);Ut("jsonTile",J_);Ut("image",f0);Ut("csv",T_);Ut("json",u0);Ut("raster",H2);Ut("rasterRgb",GE);Ut("rgb",qE);Ut("ndi",QE);Nn("cluster",X0);Nn("filter",hC);Nn("join",wC);Nn("map",TC);Nn("grid",vC);Nn("hexagon",AC);window._iconfont_svg_string_3580659='<svg><symbol id="l7-icon-area1" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.064889 219.136l38.798223 466.261333a113.777778 113.777778 0 1 1-133.518223 145.237334H279.210667a113.777778 113.777778 0 1 1-60.302223-137.272889L697.856 227.555556A113.777778 113.777778 0 0 1 796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m577.592889-534.072889L269.198222 796.444444c4.152889 7.168 7.509333 14.791111 10.012445 22.812445h465.578666a114.119111 114.119111 0 0 1 65.479111-71.224889l-38.798222-466.261333a112.924444 112.924444 0 0 1-23.210666-7.964445zM796.444444 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-area" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.008 219.136l38.855112 466.261333a113.777778 113.777778 0 0 1-16.497778 224.540445L853.333333 967.111111a113.777778 113.777778 0 0 1-108.544-79.644444H279.210667a113.834667 113.834667 0 0 1-100.067556 79.36L170.666667 967.111111a113.777778 113.777778 0 0 1-17.066667-226.304l30.492444-351.175111a113.777778 113.777778 0 0 1 34.986667-218.680889L227.555556 170.666667a113.777778 113.777778 0 0 1 99.896888 59.221333l355.84-71.395556a113.777778 113.777778 0 0 1 104.675556-101.262222L796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m526.051555-582.314666L340.650667 296.903111a113.891556 113.891556 0 0 1-88.462223 98.645333l-30.947555 355.84c27.477333 13.653333 48.64 38.115556 58.026667 67.754667h465.521777a114.119111 114.119111 0 0 1 65.536-71.168l-38.855111-466.261333a113.948444 113.948444 0 0 1-74.752-56.206222zM227.555556 238.933333a45.511111 45.511111 0 1 0 0 91.022223 45.511111 45.511111 0 0 0 0-91.022223z m568.888888-113.777777a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-delete" viewBox="0 0 1024 1024"><path d="M705.422222 85.333333a34.133333 34.133333 0 0 1 34.133334 34.133334V227.555556h136.533333a34.133333 34.133333 0 0 1 0 68.266666h-25.543111l-24.348445 610.076445a34.133333 34.133333 0 0 1-34.133333 32.768H231.936a34.133333 34.133333 0 0 1-34.076444-32.768L173.340444 295.822222H147.911111a34.133333 34.133333 0 1 1 0-68.266666H284.444444V119.466667a34.133333 34.133333 0 0 1 34.133334-34.133334h386.844444zM241.720889 295.822222l22.983111 574.577778h494.535111l23.04-574.577778H241.720889zM671.288889 153.6H352.711111V227.555556h318.577778V153.6z"  ></path></symbol><symbol id="l7-icon-color" viewBox="0 0 1024 1024"><path d="M512 56.888889c9.841778 0 19.626667 0.341333 29.354667 0.910222 69.176889 4.437333 119.068444 62.577778 124.302222 131.072l0.455111 9.386667c0.739556 44.600889 15.303111 84.935111 44.999111 114.631111 27.022222 27.022222 62.805333 41.528889 102.570667 44.430222l12.060444 0.568889c72.476444 1.194667 135.793778 52.451556 140.458667 124.757333 1.137778 18.261333 1.251556 36.807111 0.170667 55.637334-13.198222 233.585778-211.399111 424.220444-445.326223 428.714666L512 967.111111a455.111111 455.111111 0 0 1-455.054222-464.156444c4.551111-233.927111 195.185778-432.128 428.771555-445.326223C494.535111 57.116444 503.296 56.888889 512 56.888889z m0 68.266667a385.706667 385.706667 0 0 0-22.414222 0.625777C291.726222 136.988444 129.080889 305.948444 125.155556 504.263111c-4.152889 212.366222 163.100444 387.185778 372.508444 394.353778l13.425778 0.227555 8.533333-0.113777c198.371556-3.811556 367.331556-166.456889 378.538667-364.373334a396.174222 396.174222 0 0 0-0.170667-47.331555c-1.991111-31.232-29.127111-56.604444-67.128889-60.472889l-8.248889-0.455111-14.051555-0.682667c-56.547556-4.209778-107.406222-25.884444-145.806222-64.284444-38.855111-38.798222-60.416-90.225778-64.284445-145.749334l-0.910222-21.333333c-2.901333-38.001778-28.785778-66.048-60.302222-68.096A433.891556 433.891556 0 0 0 512 125.155556zM438.044444 682.666667a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m-170.666666-227.555556a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m142.222222-227.555555a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z"  ></path></symbol><symbol id="l7-icon-base-map" viewBox="0 0 1024 1024"><path d="M923.761778 115.029333A34.133333 34.133333 0 0 1 967.111111 147.911111v624.128a34.133333 34.133333 0 0 1-22.186667 32.028445l-278.755555 103.992888a34.133333 34.133333 0 0 1-23.665778 0.056889L381.724444 812.714667a34.133333 34.133333 0 0 0-23.665777 0.113777L102.968889 908.060444a34.133333 34.133333 0 0 1-45.738667-26.965333L56.888889 876.088889V251.960889a34.133333 34.133333 0 0 1 22.186667-32.028445l278.755555-103.992888a34.133333 34.133333 0 0 1 20.992-0.967112l266.183111 72.988445a34.133333 34.133333 0 0 0 18.204445 0zM403.911111 192.625778v555.576889l216.177778 79.075555V251.960889l-216.177778-59.335111z m-68.266667 4.380444L125.155556 275.569778v551.310222l210.432-78.506667V197.006222zM898.844444 192.853333l-210.545777 58.936889v575.089778l210.545777-78.563556V192.853333z"  ></path></symbol><symbol id="l7-icon-dot" viewBox="0 0 1024 1024"><path d="M341.333333 739.555556a113.777778 113.777778 0 0 1 8.533334 227.271111L341.333333 967.111111a113.777778 113.777778 0 0 1-8.533333-227.271111L341.333333 739.555556z m0 68.266666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM910.222222 341.333333a113.777778 113.777778 0 0 1 8.533334 227.271111L910.222222 568.888889a113.777778 113.777778 0 0 1-8.533333-227.271111L910.222222 341.333333z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM227.555556 56.888889a113.777778 113.777778 0 0 1 8.533333 227.271111L227.555556 284.444444a113.777778 113.777778 0 0 1-8.533334-227.271111L227.555556 56.888889z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-display" viewBox="0 0 1024 1024"><path d="M512 170.666667c284.444444 0 455.111111 227.555556 455.111111 341.333333s-170.666667 341.333333-455.111111 341.333333-455.111111-227.555556-455.111111-341.333333 170.666667-341.333333 455.111111-341.333333z m0 68.266666C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 110.762667 178.574222 273.066667 386.844444 273.066667s386.844444-162.304 386.844444-273.066667c0-110.762667-178.574222-273.066667-386.844444-273.066667zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-enlarge" viewBox="0 0 1024 1024"><path d="M546.133333 147.911111l-0.056889 329.955556H876.088889a34.133333 34.133333 0 0 1 0 68.266666H546.076444v329.955556a34.133333 34.133333 0 0 1-68.266666 0V546.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h329.898667V147.911111a34.133333 34.133333 0 0 1 68.266666 0z"  ></path></symbol><symbol id="l7-icon-export-picture" viewBox="0 0 1024 1024"><path d="M883.873684 161.684211a32.336842 32.336842 0 0 1 32.336842 32.336842v582.063158a32.336842 32.336842 0 0 1-32.336842 32.336842H86.231579a32.336842 32.336842 0 0 1-32.336842-32.336842V194.021053a32.336842 32.336842 0 0 1 32.336842-32.336842h797.642105z m-32.336842 64.673684H118.568421v517.389473h170.792421a32.175158 32.175158 0 0 1 0.431158-0.646736l3.772632-4.473264 330.320842-330.374736a32.336842 32.336842 0 0 1 38.588631-5.389474l4.473263 3.018105 184.589474 147.725474V226.357895z m-202.428631 248.131368L379.850105 743.747368H851.536842v-107.304421l-202.428631-161.953684zM323.368421 323.368421a107.789474 107.789474 0 1 1 0 215.578947 107.789474 107.789474 0 0 1 0-215.578947z m0 64.673684a43.115789 43.115789 0 1 0 0 86.231579 43.115789 43.115789 0 0 0 0-86.231579z"  ></path></symbol><symbol id="l7-icon-exit-fullscreen" viewBox="0 0 1024 1024"><path d="M841.955556 591.644444a34.133333 34.133333 0 0 1 5.518222 67.811556l-5.518222 0.455111h-133.745778l192 192.056889a34.133333 34.133333 0 0 1-38.343111 55.182222l-5.176889-2.958222-4.721778-3.982222L659.911111 708.266667V841.955556a34.133333 34.133333 0 0 1-28.615111 33.678222L625.777778 876.088889a34.133333 34.133333 0 0 1-33.678222-28.615111L591.644444 841.955556V625.777778a34.133333 34.133333 0 0 1 28.615112-33.678222L625.777778 591.644444h216.177778z m-443.733334 0a34.133333 34.133333 0 0 1 33.678222 28.615112L432.355556 625.777778v216.177778a34.133333 34.133333 0 0 1-67.811556 5.518222L364.088889 841.955556v-133.745778l-192.056889 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L315.847111 659.911111H182.044444a34.133333 34.133333 0 0 1-33.678222-28.615111L147.911111 625.777778a34.133333 34.133333 0 0 1 28.615111-33.678222L182.044444 591.644444H398.222222zM167.310222 119.808l4.721778 3.982222L364.088889 315.847111V182.044444a34.133333 34.133333 0 0 1 28.615111-33.678222L398.222222 147.911111a34.133333 34.133333 0 0 1 33.678222 28.615111L432.355556 182.044444V398.222222a34.133333 34.133333 0 0 1-28.615112 33.678222L398.222222 432.355556H182.044444a34.133333 34.133333 0 0 1-5.518222-67.811556L182.044444 364.088889h133.802667L123.790222 172.032a34.133333 34.133333 0 0 1 43.52-52.224z m732.899556 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L708.266667 364.088889H841.955556a34.133333 34.133333 0 0 1 33.678222 28.615111L876.088889 398.222222a34.133333 34.133333 0 0 1-28.615111 33.678222L841.955556 432.355556H625.777778a34.133333 34.133333 0 0 1-33.678222-28.615112L591.644444 398.222222V182.044444a34.133333 34.133333 0 0 1 67.811556-5.518222l0.455111 5.518222v133.802667l192.056889-192.056889a34.133333 34.133333 0 0 1 48.241778 0z"  ></path></symbol><symbol id="l7-icon-line" viewBox="0 0 1024 1024"><path d="M853.333333 56.888889a113.777778 113.777778 0 0 1 8.533334 227.271111L853.333333 284.444444c-19.000889 0-36.864-4.664889-52.622222-12.856888l-529.123555 529.066666a113.777778 113.777778 0 0 1-92.387556 166.115556L170.666667 967.111111a113.777778 113.777778 0 0 1-8.533334-227.271111L170.666667 739.555556c19.000889 0 36.864 4.664889 52.622222 12.856888l529.123555-529.066666a113.777778 113.777778 0 0 1 92.387556-166.115556L853.333333 56.888889zM170.666667 807.822222a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m682.666666-682.666666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-layer" viewBox="0 0 1024 1024"><path d="M767.089778 625.777778l180.167111 82.773333a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730667-420.977778 193.422222a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422222a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730667L256.853333 625.777778l81.749334 37.546666L172.771556 739.555556 512 895.374222 851.171556 739.555556l-165.831112-76.231112 81.749334-37.546666z m0-227.555556l180.167111 82.773334a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730666-420.977778 193.422223a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422223a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730666L256.853333 398.222222l81.749334 37.546667-165.831111 76.174222L512 667.818667l339.171556-155.875556-165.831112-76.174222L767.089778 398.222222zM497.720889 60.017778a34.133333 34.133333 0 0 1 28.558222 0l420.977778 193.422222a34.133333 34.133333 0 0 1 0 62.008889l-420.977778 193.422222a34.133333 34.133333 0 0 1-28.558222 0l-420.977778-193.422222a34.133333 34.133333 0 0 1 0-62.008889zM512 128.568889L172.771556 284.387556 512 440.263111l339.171556-155.875555L512 128.568889z"  ></path></symbol><symbol id="l7-icon-narrow" viewBox="0 0 1024 1024"><path d="M910.222222 512a34.133333 34.133333 0 0 1-34.133333 34.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h728.177778a34.133333 34.133333 0 0 1 34.133333 34.133333z"  ></path></symbol><symbol id="l7-icon-fullscreen" viewBox="0 0 1024 1024"><path d="M645.176889 597.674667l4.721778 3.982222L841.955556 793.6l0.056888-133.688889a34.133333 34.133333 0 0 1 28.615112-33.678222L876.088889 625.777778a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 659.911111v216.177778a34.133333 34.133333 0 0 1-28.615111 33.678222L876.088889 910.222222h-216.177778a34.133333 34.133333 0 0 1-5.518222-67.811555l5.518222-0.455111h133.745778l-192-192.056889a34.133333 34.133333 0 0 1 43.52-52.224z m-222.833778 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L230.286222 841.955556H364.088889a34.133333 34.133333 0 0 1 33.678222 28.615111L398.222222 876.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L364.088889 910.222222H147.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 876.088889v-216.177778a34.133333 34.133333 0 0 1 67.811555-5.518222l0.455111 5.518222-0.056888 133.745778 192.113777-192a34.133333 34.133333 0 0 1 48.241778 0zM364.088889 113.777778a34.133333 34.133333 0 0 1 5.518222 67.811555L364.088889 182.044444H230.343111l192 192.056889a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222-192.113777-192.056889L182.044444 364.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L147.911111 398.222222a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 364.088889V147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L147.911111 113.777778h216.177778z m512 0a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 147.911111v216.177778a34.133333 34.133333 0 0 1-67.811555 5.518222L841.955556 364.088889l-0.056889-133.745778-192 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L793.6 182.044444H659.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L625.777778 147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L659.911111 113.777778h216.177778z"  ></path></symbol><symbol id="l7-icon-hide" viewBox="0 0 1024 1024"><path d="M875.52 87.836444a34.133333 34.133333 0 0 1 7.281778 43.121778l-3.527111 5.006222-682.666667 796.444445a34.133333 34.133333 0 0 1-55.409778-39.367111l3.527111-5.006222 97.166223-113.379556C123.164444 697.969778 56.888889 582.940444 56.888889 512c0-113.777778 170.666667-341.333333 455.111111-341.333333a496.64 496.64 0 0 1 208.952889 45.112889l106.439111-124.188445a34.133333 34.133333 0 0 1 48.128-3.754667z m-38.684444 202.524445C921.031111 362.951111 967.111111 452.835556 967.111111 512c0 113.777778-170.666667 341.333333-455.111111 341.333333-50.631111 0-97.678222-7.224889-140.8-19.740444l50.232889-58.595556A417.393778 417.393778 0 0 0 512 785.066667c208.270222 0 386.844444-162.304 386.844444-273.066667 0-52.849778-40.675556-117.418667-105.813333-170.496l43.804445-51.2zM512 238.933333C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 66.787556 64.853333 152.291556 162.133333 209.692444L377.173333 616.675556a170.666667 170.666667 0 0 1 217.713778-253.895112l78.620445-91.704888A432.924444 432.924444 0 0 0 512 238.933333z m166.684444 236.088889a170.666667 170.666667 0 0 1-177.664 207.303111l177.607112-207.303111zM512 409.6a102.4 102.4 0 0 0-88.746667 153.486222L548.864 416.426667A102.172444 102.172444 0 0 0 512 409.6z"  ></path></symbol><symbol id="l7-icon-rectangle" viewBox="0 0 1024 1024"><path d="M170.666667 56.888889a113.777778 113.777778 0 0 1 108.544 79.644444H853.333333a34.133333 34.133333 0 0 1 33.678223 28.615111L887.466667 170.666667v574.122666a113.777778 113.777778 0 1 1-142.677334 142.734223L170.666667 887.466667a34.133333 34.133333 0 0 1-33.678223-28.615111L136.533333 853.333333V279.210667A113.777778 113.777778 0 0 1 170.666667 56.888889z m682.666666 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-34.133333-603.022222H279.210667a114.062222 114.062222 0 0 1-74.353778 74.410667L204.8 819.2h539.989333a114.062222 114.062222 0 0 1 74.410667-74.410667V204.8zM170.666667 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-ranging" viewBox="0 0 1024 1024"><path d="M723.171556 50.403556l250.424888 250.424888a31.061333 31.061333 0 0 1 0 43.918223L344.746667 973.596444a31.061333 31.061333 0 0 1-43.918223 0L50.403556 723.171556a31.061333 31.061333 0 0 1 0-43.918223L679.253333 50.403556a31.061333 31.061333 0 0 1 43.918223 0z m-21.959112 74.524444l-39.765333 39.822222 98.986667 98.872889a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222 62.179556 62.122667a34.133333 34.133333 0 0 1-44.088889 51.882667L563.2 387.242667 501.077333 325.063111 437.191111 388.949333l98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222L387.242667 563.2a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.584-62.122667-62.179556-63.886222 63.886222 98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-39.765333 39.822222 197.802667 197.745778 576.284444-576.284444-197.802667-197.745778z"  ></path></symbol><symbol id="l7-icon-reposition" viewBox="0 0 1024 1024"><path d="M512 56.888889a34.133333 34.133333 0 0 1 34.133333 34.133333v24.177778A398.336 398.336 0 0 1 908.856889 477.866667h24.177778a34.133333 34.133333 0 0 1 0 68.266666h-24.177778A398.336 398.336 0 0 1 546.133333 908.856889L546.133333 932.977778a34.133333 34.133333 0 0 1-68.266666 0v-24.177778A398.336 398.336 0 0 1 115.2 546.133333L91.022222 546.133333a34.133333 34.133333 0 1 1 0-68.266666h24.177778A398.336 398.336 0 0 1 477.866667 115.2V91.022222A34.133333 34.133333 0 0 1 512 56.888889z m34.190222 126.862222L546.133333 193.422222a34.133333 34.133333 0 1 1-68.266666 0v-9.671111A330.069333 330.069333 0 0 0 183.751111 477.866667h9.671111a34.133333 34.133333 0 1 1 0 68.266666l-9.671111 0.056889A330.069333 330.069333 0 0 0 477.866667 840.248889V830.577778a34.133333 34.133333 0 0 1 68.266666 0l0.056889 9.671111A330.069333 330.069333 0 0 0 840.248889 546.133333L830.577778 546.133333a34.133333 34.133333 0 0 1 0-68.266666h9.671111A330.069333 330.069333 0 0 0 546.133333 183.751111zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-round" viewBox="0 0 1024 1024"><path d="M512 56.888889a455.111111 455.111111 0 0 1 391.395556 687.502222 113.777778 113.777778 0 0 1-159.061334 158.890667A455.111111 455.111111 0 0 1 120.604444 279.608889 113.777778 113.777778 0 0 1 279.608889 120.604444 452.835556 452.835556 0 0 1 512 56.888889z m0 68.266667a384.910222 384.910222 0 0 0-191.715556 50.744888A113.777778 113.777778 0 0 1 175.957333 320.284444a386.844444 386.844444 0 0 0 527.815111 527.758223 113.777778 113.777778 0 0 1 144.270223-144.440889A386.844444 386.844444 0 0 0 512 125.155556z m299.406222 640.739555a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM212.593778 167.082667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  ></path></symbol></svg>',function(e){try{let l=function(){u||(u=!0,a())},c=function(){try{o.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}l()};var r=(r=document.getElementsByTagName("script"))[r.length-1],t=r.getAttribute("data-injectcss"),r=r.getAttribute("data-disable-injectsvg");if(!r){var n,i,a,o,u,s=function(h,d){d.parentNode.insertBefore(h,d)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(f){console&&console.log(f)}}n=function(){var h,d=document.createElement("div");d.innerHTML=e._iconfont_svg_string_3580659,(d=d.getElementsByTagName("svg")[0])&&(d.setAttribute("aria-hidden","true"),d.style.position="absolute",d.style.width=0,d.style.height=0,d.style.overflow="hidden",d=d,(h=document.body).firstChild?s(d,h.firstChild):h.appendChild(d))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(i=function(){document.removeEventListener("DOMContentLoaded",i,!1),n()},document.addEventListener("DOMContentLoaded",i,!1)):document.attachEvent&&(a=n,o=e.document,u=!1,c(),o.onreadystatechange=function(){o.readyState=="complete"&&(o.onreadystatechange=null,l())})}}catch{}}(window);function MC(e){var t=IC();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function IC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var kC=function(e){be(r,e);var t=MC(r);function r(n){var i;return ie(this,r),i=t.call(this),r.controlCount++,i.controlOption=z(z({},i.getDefault(n)),n||{}),i}return ne(r,[{key:"getOptions",value:function(){return this.controlOption}},{key:"setOptions",value:function(i){var a=this.getDefault(i);Object.entries(i).forEach(function(o){var u=Ie(o,2),s=u[0],l=u[1];l===void 0&&(i[s]=a[s])}),"position"in i&&this.setPosition(i.position),"className"in i&&this.setClassName(i.className),"style"in i&&this.setStyle(i.style),this.controlOption=z(z({},this.controlOption),i)}},{key:"addTo",value:function(i){this.mapsService=i.get(q.IMapService),this.renderService=i.get(q.IRendererService),this.layerService=i.get(q.ILayerService),this.controlService=i.get(q.IControlService),this.configService=i.get(q.IGlobalConfigService),this.scene=i.get(q.ISceneService),this.sceneContainer=i,this.isShow=!0,this.container=this.onAdd(),yi(this.container,"l7-control");var a=this.controlOption,o=a.className,u=a.style;return o&&this.setClassName(o),u&&this.setStyle(u),this.insertContainer(),this.emit("add",this),this}},{key:"remove",value:function(){if(!this.mapsService)return this;wa(this.container),this.onRemove(),this.emit("remove",this)}},{key:"onAdd",value:function(){return Or("div")}},{key:"onRemove",value:function(){}},{key:"show",value:function(){var i=this.container;fu(i,"l7-control--hide"),this.isShow=!0,this.emit("show",this)}},{key:"hide",value:function(){var i=this.container;yi(i,"l7-control--hide"),this.isShow=!1,this.emit("hide",this)}},{key:"getDefault",value:function(i){return{position:Ru.TOPRIGHT,name:"".concat(r.controlCount)}}},{key:"getContainer",value:function(){return this.container}},{key:"getIsShow",value:function(){return this.isShow}},{key:"_refocusOnMap",value:function(i){if(this.mapsService&&i&&i.screenX>0&&i.screenY>0){var a=this.mapsService.getContainer();a!==null&&a.focus()}}},{key:"setPosition",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ru.TOPLEFT,a=this.controlService;return a&&a.removeControl(this),this.controlOption.position=i,a&&a.addControl(this,this.sceneContainer),this}},{key:"setClassName",value:function(i){var a=this.container,o=this.controlOption.className;o&&fu(a,o),i&&yi(a,i)}},{key:"setStyle",value:function(i){var a=this.container;i?a.setAttribute("style",i):a.removeAttribute("style")}},{key:"insertContainer",value:function(){var i=this.controlOption.position,a=this.container;if(i instanceof Element)i.appendChild(a);else{var o=this.controlService.controlCorners[i];["bottomleft","bottomright","righttop","rightbottom"].includes(i)?o.insertBefore(a,o.firstChild):o.appendChild(a)}}},{key:"checkUpdateOption",value:function(i,a){return a.some(function(o){return o in i})}}]),r}(vs);S(kC,"controlCount",0);function LC(e){var t=RC();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function RC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var PC=function(e){be(r,e);var t=LC(r);function r(n,i){var a;return ie(this,r),a=t.call(this),S(R(a),"isShow",!1),S(R(a),"timeout",null),S(R(a),"show",function(){return a.isShow||!a.contentDOM.innerHTML||(a.resetPopperPosition(),fu(a.popperDOM,"l7-popper-hide"),a.isShow=!0,a.option.unique&&r.conflictPopperList.forEach(function(o){o!==R(a)&&o.isShow&&o.hide()}),a.emit("show"),window.addEventListener("pointerdown",a.onPopperUnClick)),R(a)}),S(R(a),"hide",function(){return a.isShow&&(yi(a.popperDOM,"l7-popper-hide"),a.isShow=!1,a.emit("hide"),window.removeEventListener("pointerdown",a.onPopperUnClick)),R(a)}),S(R(a),"setHideTimeout",function(){a.timeout||(a.timeout=window.setTimeout(function(){a.isShow&&(a.hide(),a.timeout=null)},300))}),S(R(a),"clearHideTimeout",function(){a.timeout&&(window.clearTimeout(a.timeout),a.timeout=null)}),S(R(a),"onBtnClick",function(){a.isShow?a.hide():a.show()}),S(R(a),"onPopperUnClick",function(o){v1(o.target,[".l7-button-control",".l7-popper-content"])||a.hide()}),S(R(a),"onBtnMouseLeave",function(){a.setHideTimeout()}),S(R(a),"onBtnMouseMove",function(){a.clearHideTimeout(),!a.isShow&&a.show()}),a.button=n,a.option=i,a.init(),i.unique&&r.conflictPopperList.push(R(a)),a}return ne(r,[{key:"buttonRect",get:function(){return this.button.getBoundingClientRect()}},{key:"getPopperDOM",value:function(){return this.popperDOM}},{key:"getIsShow",value:function(){return this.isShow}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(i){typeof i=="string"?this.contentDOM.innerHTML=i:i instanceof HTMLElement&&(d1(this.contentDOM),this.contentDOM.appendChild(i)),this.content=i}},{key:"init",value:function(){var i=this.option.trigger;this.popperDOM=this.createPopper(),i==="click"?this.button.addEventListener("click",this.onBtnClick):(this.button.addEventListener("mousemove",this.onBtnMouseMove),this.button.addEventListener("mouseleave",this.onBtnMouseLeave),this.popperDOM.addEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.addEventListener("mouseleave",this.onBtnMouseLeave))}},{key:"destroy",value:function(){this.button.removeEventListener("click",this.onBtnClick),this.button.removeEventListener("mousemove",this.onBtnMouseMove),this.button.removeEventListener("mousemove",this.onBtnMouseLeave),this.popperDOM.removeEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.removeEventListener("mouseleave",this.onBtnMouseLeave),wa(this.popperDOM)}},{key:"resetPopperPosition",value:function(){var i={},a=this.option,o=a.container,u=a.offset,s=u===void 0?[0,0]:u,l=a.placement,c=Ie(s,2),f=c[0],h=c[1],d=this.button.getBoundingClientRect(),v=o.getBoundingClientRect(),p=h1(d,v),g=p.left,m=p.right,_=p.top,y=p.bottom,x=!1,b=!1;/^(left|right)/.test(l)?(l.includes("left")?i.right="".concat(d.width+m,"px"):l.includes("right")&&(i.left="".concat(d.width+g,"px")),l.includes("start")?i.top="".concat(_,"px"):l.includes("end")?i.bottom="".concat(y,"px"):(i.top="".concat(_+d.height/2,"px"),b=!0,i.transform="translate(".concat(f,"px, calc(").concat(h,"px - 50%))"))):/^(top|bottom)/.test(l)&&(l.includes("top")?i.bottom="".concat(d.height+y,"px"):l.includes("bottom")&&(i.top="".concat(d.height+_,"px")),l.includes("start")?i.left="".concat(g,"px"):l.includes("end")?i.right="".concat(m,"px"):(i.left="".concat(g+d.width/2,"px"),x=!0,i.transform="translate(calc(".concat(f,"px - 50%), ").concat(h,"px)"))),i.transform="translate(calc(".concat(f,"px - ").concat(x?"50%":"0%","), calc(").concat(h,"px - ").concat(b?"50%":"0%",")");var k=l.split("-");k.length&&yi(this.popperDOM,k.map(function(T){return"l7-popper-".concat(T)}).join(" ")),c1(this.popperDOM,f1(i))}},{key:"createPopper",value:function(){var i=this.option,a=i.container,o=i.className,u=o===void 0?"":o,s=i.content,l=Or("div","l7-popper l7-popper-hide ".concat(u)),c=Or("div","l7-popper-content"),f=Or("div","l7-popper-arrow");return l.appendChild(c),l.appendChild(f),a.appendChild(l),this.popperDOM=l,this.contentDOM=c,s&&this.setContent(s),l}}]),r}(zt.EventEmitter);S(PC,"conflictPopperList",[]);function FC(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=OC(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function OC(e,t){if(e){if(typeof e=="string")return Jh(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Jh(e,t)}}function Jh(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ed=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],pr=function(){if(typeof document>"u")return!1;for(var e=ed[0],t={},r=0,n=ed;r<n.length;r++){var i=n[r],a=i==null?void 0:i[1];if(a in document){var o=FC(i.entries()),u;try{for(o.s();!(u=o.n()).done;){var s=Ie(u.value,2),l=s[0],c=s[1];t[e[l]]=c}}catch(f){o.e(f)}finally{o.f()}return t}}return!1}(),td={change:pr.fullscreenchange,error:pr.fullscreenerror},Ht={request:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.documentElement,r=arguments.length>1?arguments[1]:void 0;return new Promise(function(n,i){var a=function u(){Ht.off("change",u),n()};Ht.on("change",a);var o=t[pr.requestFullscreen](r);o instanceof Promise&&o.then(a).catch(i)})},exit:function(){return new Promise(function(t,r){if(!Ht.isFullscreen){t();return}var n=function a(){Ht.off("change",a),t()};Ht.on("change",n);var i=document[pr.exitFullscreen]();i instanceof Promise&&i.then(n).catch(r)})},toggle:function(t,r){return Ht.isFullscreen?Ht.exit():Ht.request(t,r)},onchange:function(t){Ht.on("change",t)},onerror:function(t){Ht.on("error",t)},on:function(t,r){var n=td[t];n&&document.addEventListener(n,r,!1)},off:function(t,r){var n=td[t];n&&document.removeEventListener(n,r,!1)},raw:pr};Object.defineProperties(Ht,{isFullscreen:{get:function(){return!!document[pr.fullscreenElement]}},element:{enumerable:!0,get:function(){var t;return(t=document[pr.fullscreenElement])!==null&&t!==void 0?t:void 0}},isEnabled:{enumerable:!0,get:function(){return!!document[pr.fullscreenEnabled]}}});pr||(Ht={isEnabled:!1});var Tr,K0=(Tr={},S(Tr,kr.additive,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE,srcAlpha:1,dstAlpha:1}}),S(Tr,kr.none,{enable:!1}),S(Tr,kr.normal,{enable:!0,func:{srcRGB:L.SRC_ALPHA,dstRGB:L.ONE_MINUS_SRC_ALPHA,srcAlpha:1,dstAlpha:1}}),S(Tr,kr.subtractive,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE,srcAlpha:L.ZERO,dstAlpha:L.ONE_MINUS_SRC_COLOR},equation:{rgb:L.FUNC_SUBTRACT,alpha:L.FUNC_SUBTRACT}}),S(Tr,kr.max,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE},equation:{rgb:L.MAX_EXT}}),S(Tr,kr.min,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE},equation:{rgb:L.MIN_EXT}}),Tr);function Q0(e){return e.map(function(t){return typeof t=="string"&&(t=[t,{}]),t})}function J0(e,t,r,n){var i=e.multiPassRenderer,a=e.getLayerConfig(),o=a.enableTAA;return o?i.add(n("taa")):i.add(n("render")),Q0(t).forEach(function(u){var s=Ie(u,2),l=s[0],c=s[1];i.add(r(l),c)}),i.add(r("copy")),i}var DC=function(){function e(t){ie(this,e),this.layer=t}return ne(e,[{key:"pickRender",value:function(r){var n=this.layer.getContainer(),i=n.get(q.ILayerService),a=this.layer;if(a.tileLayer)return a.tileLayer.pickRender(r);a.hooks.beforePickingEncode.call(),i.renderTileLayerMask(a),a.renderModels({ispick:!0}),a.hooks.afterPickingEncode.call()}},{key:"pick",value:function(){var t=Y(A.mark(function n(i,a){var o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(o=this.layer.getContainer(),u=o.get(q.IPickingService),i.type!=="RasterLayer"){l.next=4;break}return l.abrupt("return",this.pickRasterLayer(i,a));case 4:return this.pickRender(a),l.abrupt("return",u.pickFromPickingFBO(i,a));case 6:case"end":return l.stop()}},n,this)}));function r(n,i){return t.apply(this,arguments)}return r}()},{key:"pickRasterLayer",value:function(r,n,i){var a=this.layer.getContainer(),o=a.get(q.IPickingService),u=a.get(q.IMapService),s=this.layer.getSource().extent,l=g1(n.lngLat,s),c={x:n.x,y:n.y,type:n.type,lngLat:n.lngLat,target:n,rasterValue:null},f=i||r;if(l){var h=this.readRasterValue(r,s,u,n.x,n.y);return c.rasterValue=h,o.triggerHoverOnLayer(f,c),!0}else return c.type=n.type==="mousemove"?"mouseout":"un"+n.type,o.triggerHoverOnLayer(f,z(z({},c),{},{type:"unpick"})),o.triggerHoverOnLayer(f,c),!1}},{key:"readRasterValue",value:function(r,n,i,a,o){var u=r.getSource().data.dataArray[0],s=Ie(n,4),l=s[0],c=l===void 0?0:l,f=s[1],h=f===void 0?0:f,d=s[2],v=d===void 0?10:d,p=s[3],g=p===void 0?-10:p,m=i.lngLatToContainer([c,h]),_=i.lngLatToContainer([v,g]),y=_.x-m.x,x=m.y-_.y,b=[(a-m.x)/y,(o-_.y)/x],k=u.width||1,T=u.height||1,D=Math.floor(b[0]*k),U=Math.floor(b[1]*T),I=Math.max(0,U-1)*k+D,w=u.data[I];return w}},{key:"selectFeature",value:function(r){var n=this.layer,i=Ie(r,3),a=i[0],o=i[1],u=i[2];n.hooks.beforeSelect.call([a,o,u])}},{key:"highlightPickedFeature",value:function(r){var n=Ie(r,3),i=n[0],a=n[1],o=n[2];this.layer.hooks.beforeHighlight.call([i,a,o])}},{key:"getFeatureById",value:function(r){return this.layer.getSource().getFeatureById(r)}}]),e}(),NC=function(){function e(t){ie(this,e),this.layer=t;var r=this.layer.getContainer();this.rendererService=r.get(q.IRendererService)}return ne(e,[{key:"getColorTexture",value:function(r,n){var i=this.getTextureKey(r,n);return this.key===i?this.colorTexture:(this.createColorTexture(r,n),this.key=i,this.colorTexture)}},{key:"createColorTexture",value:function(r,n){var i=this.rendererService.createTexture2D,a=this.getColorRampBar(r,n),o=i({data:new Uint8Array(a.data),width:a.width,height:a.height,flipY:!1,unorm:!0});return this.colorTexture=o,o}},{key:"setColorTexture",value:function(r,n,i){this.key=this.getTextureKey(n,i),this.colorTexture=r}},{key:"destroy",value:function(){var r;(r=this.colorTexture)===null||r===void 0||r.destroy()}},{key:"getColorRampBar",value:function(r,n){switch(r.type){case"cat":return Qy(r);case"quantize":return Jy(r);case"custom":return e1(r,n);case"linear":return Ky(r,n);default:return qy(r)}}},{key:"getTextureKey",value:function(r,n){var i;return"".concat(r.colors.join("_"),"_").concat(r==null||(i=r.positions)===null||i===void 0?void 0:i.join("_"),"_").concat(r.type,"_").concat(n==null?void 0:n.join("_"))}}]),e}(),BC=["passes"],UC=["moduleName","vertexShader","fragmentShader","inject","triangulation","styleOption","pickingEnabled"],rd,Yo,nd;function zC(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=$C(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function $C(e,t){if(e){if(typeof e=="string")return id(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return id(e,t)}}function id(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function VC(e){var t=jC();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function jC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Xo=Ze.isEqual,ad=Ze.isFunction,od=Ze.isNumber,xt=Ze.isObject,HC=Ze.isPlainObject,GC=Ze.isUndefined,ud=0,Un=(rd=W0(q.IGlobalConfigService),Yo=function(e){be(r,e);var t=VC(r);function r(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ie(this,r),n=t.call(this),S(R(n),"id","".concat(ud++)),S(R(n),"name","".concat(ud)),S(R(n),"visible",!0),S(R(n),"zIndex",0),S(R(n),"inited",!1),S(R(n),"layerModelNeedUpdate",!1),S(R(n),"pickedFeatureID",null),S(R(n),"selectedFeatureID",null),S(R(n),"styleNeedUpdate",!1),S(R(n),"forceRender",!1),S(R(n),"clusterZoom",0),S(R(n),"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}}),S(R(n),"dataState",{dataSourceNeedUpdate:!1,dataMappingNeedUpdate:!1,filterNeedUpdate:!1,featureScaleNeedUpdate:!1,StyleAttrNeedUpdate:!1}),S(R(n),"hooks",{init:new Ab,afterInit:new af,beforeRender:new af,beforeRenderData:new wb,afterRender:new Jt,beforePickingEncode:new Jt,afterPickingEncode:new Jt,beforeHighlight:new Jt(["pickedColor"]),afterHighlight:new Jt,beforeSelect:new Jt(["pickedColor"]),afterSelect:new Jt,beforeDestroy:new Jt,afterDestroy:new Jt}),S(R(n),"models",[]),S(R(n),"startInit",!1),S(R(n),"layerChildren",[]),S(R(n),"masks",[]),Ne(R(n),"configService",nd,R(n)),S(R(n),"animateOptions",{enable:!1}),S(R(n),"currentPickId",null),S(R(n),"encodeStyleAttribute",{}),S(R(n),"enableShaderEncodeStyles",[]),S(R(n),"enableDataEncodeStyles",[]),S(R(n),"pendingStyleAttributes",[]),S(R(n),"scaleOptions",{}),S(R(n),"animateStatus",!1),S(R(n),"isDestroyed",!1),S(R(n),"uniformBuffers",[]),S(R(n),"encodeDataLength",0),S(R(n),"sourceEvent",function(){n.dataState.dataSourceNeedUpdate=!0;var a=n.getLayerConfig();a&&a.autoFit&&n.fitBounds(a.fitBoundsOptions);var o=n.layerSource.getSourceCfg().autoRender;o&&setTimeout(function(){n.reRender()},10)}),n.name=i.name||n.id,n.zIndex=i.zIndex||0,n.rawConfig=i,n}return ne(r,[{key:"addMask",value:function(i){this.masks.push(i),this.updateLayerConfig({maskLayers:this.masks}),this.enableMask()}},{key:"removeMask",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),this.updateLayerConfig({maskLayers:this.masks})}},{key:"disableMask",value:function(){this.updateLayerConfig({enableMask:!1})}},{key:"enableMask",value:function(){this.updateLayerConfig({enableMask:!0})}},{key:"addMaskLayer",value:function(i){this.masks.push(i)}},{key:"removeMaskLayer",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),i.destroy()}},{key:"getAttribute",value:function(i){return this.styleAttributeService.getLayerStyleAttribute(i)}},{key:"getLayerConfig",value:function(){return this.configService.getLayerConfig(this.id)}},{key:"updateLayerConfig",value:function(i){var a=this;if(Object.keys(i).map(function(u){u in a.rawConfig&&(a.rawConfig[u]=i[u])}),!this.startInit)this.needUpdateConfig=z(z({},this.needUpdateConfig),i);else{var o=this.container.get(q.SceneID);this.configService.setLayerConfig(o,this.id,z(z(z({},this.configService.getLayerConfig(this.id)),this.needUpdateConfig),i)),this.needUpdateConfig={}}}},{key:"setContainer",value:function(i,a){this.container=i,this.sceneContainer=a}},{key:"getContainer",value:function(){return this.container}},{key:"addPlugin",value:function(i){return this.plugins.push(i),this}},{key:"init",value:function(){var n=Y(A.mark(function a(){var o=this,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:u=this.container.get(q.SceneID),this.startInit=!0,this.configService.setLayerConfig(u,this.id,this.rawConfig),this.layerType=this.rawConfig.layerType,this.iconService=this.container.get(q.IIconService),this.fontService=this.container.get(q.IFontService),this.rendererService=this.container.get(q.IRendererService),this.layerService=this.container.get(q.ILayerService),this.debugService=this.container.get(q.IDebugService),this.interactionService=this.container.get(q.IInteractionService),this.pickingService=this.container.get(q.IPickingService),this.mapService=this.container.get(q.IMapService),s=this.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,l&&c!==null&&c!==void 0&&c.length&&c.length>0&&this.mapService.on("mapAfterFrameChange",function(){o.renderLayers()}),this.cameraService=this.container.get(q.ICameraService),this.coordinateService=this.container.get(q.ICoordinateSystemService),this.shaderModuleService=this.container.get(q.IShaderModuleService),this.postProcessingPassFactory=this.container.get(q.IFactoryPostProcessingPass),this.normalPassFactory=this.container.get(q.IFactoryNormalPass),this.styleAttributeService=this.container.get(q.IStyleAttributeService),l&&(this.multiPassRenderer=this.container.get(q.IMultiPassRenderer),this.multiPassRenderer.setLayer(this)),this.pendingStyleAttributes.forEach(function(g){var m=g.attributeName,_=g.attributeField,y=g.attributeValues,x=g.updateOptions;o.styleAttributeService.updateStyleAttribute(m,{scale:z({field:_},o.splitValuesAndCallbackInAttribute(y,_?void 0:o.getLayerConfig()[m]))},x)}),this.pendingStyleAttributes=[],this.plugins=this.container.getAll(q.ILayerPlugin),f=zC(this.plugins);try{for(f.s();!(h=f.n()).done;)d=h.value,d.apply(this,{rendererService:this.rendererService,mapService:this.mapService,styleAttributeService:this.styleAttributeService,normalPassFactory:this.normalPassFactory,postProcessingPassFactory:this.postProcessingPassFactory})}catch(g){f.e(g)}finally{f.f()}return this.layerPickService=new DC(this),this.textureService=new NC(this),this.log(ct.LayerInitStart),p.next=31,this.hooks.init.promise();case 31:this.log(ct.LayerInitEnd),this.inited=!0,this.emit("inited",{target:this,type:"inited"}),this.emit("add",{target:this,type:"add"}),this.hooks.afterInit.call();case 36:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"log",value:function(i){var a,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"init";if(!(this.tileLayer||this.isTileLayer)){var u="".concat(this.id,".").concat(o,".").concat(i),s={id:this.id,type:this.type};(a=this.debugService)===null||a===void 0||a.log(u,s)}}},{key:"updateModelData",value:function(i){i.attributes&&i.elements?this.models.map(function(a){a.updateAttributesAndElements(i.attributes,i.elements)}):console.warn("data error")}},{key:"setLayerPickService",value:function(i){this.layerPickService=i}},{key:"prepareBuildModel",value:function(){Object.keys(this.needUpdateConfig||{}).length!==0&&this.updateLayerConfig({});var i=this.getLayerConfig(),a=i.animateOption;a!=null&&a.enable&&(this.layerService.startAnimate(),this.animateStatus=!0)}},{key:"color",value:function(i,a,o){return this.updateStyleAttribute("color",i,a,o),this}},{key:"texture",value:function(i,a,o){return this.updateStyleAttribute("texture",i,a,o),this}},{key:"rotate",value:function(i,a,o){return this.updateStyleAttribute("rotate",i,a,o),this}},{key:"size",value:function(i,a,o){return this.updateStyleAttribute("size",i,a,o),this}},{key:"filter",value:function(i,a,o){var u=this.updateStyleAttribute("filter",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"shape",value:function(i,a,o){this.shapeOption={field:i,values:a};var u=this.updateStyleAttribute("shape",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"label",value:function(i,a,o){return this.pendingStyleAttributes.push({attributeName:"label",attributeField:i,attributeValues:a,updateOptions:o}),this}},{key:"animate",value:function(i){var a={};return xt(i)?(a.enable=!0,a=z(z({},a),i)):a.enable=i,this.updateLayerConfig({animateOption:a}),this}},{key:"source",value:function(i,a){return(i==null?void 0:i.type)==="source"?(this.setSource(i),this):(this.sourceOption={data:i,options:a},this.clusterZoom=0,this)}},{key:"setData",value:function(i,a){var o=this;return this.inited?(this.log(ct.SourceInitStart,vt.UPDATE),this.layerSource.setData(i,a),this.log(ct.SourceInitEnd,vt.UPDATE)):this.on("inited",function(){o.log(ct.SourceInitStart,vt.UPDATE);var u=o.getSource();u?o.layerSource.setData(i,a):o.source(new q0(i,a)),o.layerSource.once("update",function(){o.log(ct.SourceInitEnd,vt.UPDATE)})}),this}},{key:"style",value:function(i){var a=this,o=i.passes,u=Wt(i,BC);o&&Q0(o).forEach(function(l){var c=a.multiPassRenderer.getPostProcessor().getPostProcessingPassByName(l[0]);c&&c.updateOptions(l[1])}),u.borderColor&&(u.stroke=u.borderColor),u.borderWidth&&(u.strokeWidth=u.borderWidth);var s=u;return Object.keys(u).forEach(function(l){var c=u[l];Array.isArray(c)&&c.length===2&&!od(c[0])&&!od(c[1])&&(s[l]={field:c[0],value:c[1]})}),this.encodeStyle(s),this.updateLayerConfig(s),this}},{key:"encodeStyle",value:function(i){var a=this;Object.keys(i).forEach(function(o){[].concat(Q(a.enableShaderEncodeStyles),Q(a.enableDataEncodeStyles)).includes(o)&&HC(i[o])&&(i[o].field||i[o].value)&&!Xo(a.encodeStyleAttribute[o],i[o])?(a.encodeStyleAttribute[o]=i[o],a.updateStyleAttribute(o,i[o].field,i[o].value),a.inited&&(a.dataState.dataMappingNeedUpdate=!0)):a.encodeStyleAttribute[o]&&(delete a.encodeStyleAttribute[o],a.dataState.dataSourceNeedUpdate=!0)})}},{key:"scale",value:function(i,a){var o=z({},this.scaleOptions);if(xt(i)?this.scaleOptions=z(z({},this.scaleOptions),i):this.scaleOptions[i]=a,this.styleAttributeService&&!Xo(o,this.scaleOptions)){var u=xt(i)?i:S({},i,a);this.styleAttributeService.updateScaleAttribute(u)}return this}},{key:"renderLayers",value:function(){this.rendering=!0,this.layerService.reRender(),this.rendering=!1}},{key:"prerender",value:function(){}},{key:"render",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.tileLayer?(this.tileLayer.render(),this):(this.layerService.beforeRenderData(this),this.encodeDataLength<=0&&!this.forceRender?this:(this.renderModels(i),this))}},{key:"renderMultiPass",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.encodeDataLength<=0&&!this.forceRender)){u.next=2;break}return u.abrupt("return");case 2:if(!(this.multiPassRenderer&&this.multiPassRenderer.getRenderFlag())){u.next=7;break}return u.next=5,this.multiPassRenderer.render();case 5:u.next=8;break;case 7:this.multiPassRenderer?this.renderModels():this.renderModels();case 8:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"active",value:function(i){var a={};return a.enableHighlight=xt(i)?!0:i,xt(i)?(a.enableHighlight=!0,i.color&&(a.highlightColor=i.color),i.mix&&(a.activeMix=i.mix)):a.enableHighlight=!!i,this.updateLayerConfig(a),this}},{key:"setActive",value:function(i,a){var o=this;if(xt(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({highlightColor:xt(a)?a.color:this.getLayerConfig().highlightColor,activeMix:xt(a)?a.mix:this.getLayerConfig().activeMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,highlightColor:xt(a)?a.color:this.getLayerConfig().highlightColor,activeMix:xt(a)?a.mix:this.getLayerConfig().activeMix}),this.hooks.beforeHighlight.call(yr(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"select",value:function(i){var a={};return a.enableSelect=xt(i)?!0:i,xt(i)?(a.enableSelect=!0,i.color&&(a.selectColor=i.color),i.mix&&(a.selectMix=i.mix)):a.enableSelect=!!i,this.updateLayerConfig(a),this}},{key:"setSelect",value:function(i,a){var o=this;if(xt(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({selectColor:xt(a)?a.color:this.getLayerConfig().selectColor,selectMix:xt(a)?a.mix:this.getLayerConfig().selectMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,selectColor:xt(a)?a.color:this.getLayerConfig().selectColor,selectMix:xt(a)?a.mix:this.getLayerConfig().selectMix}),this.hooks.beforeSelect.call(yr(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"setBlend",value:function(i){return this.updateLayerConfig({blend:i}),this.reRender(),this}},{key:"show",value:function(){return this.updateLayerConfig({visible:!0}),this.reRender(),this.emit("show"),this}},{key:"hide",value:function(){return this.updateLayerConfig({visible:!1}),this.reRender(),this.emit("hide"),this}},{key:"setIndex",value:function(i){return this.zIndex=i,this.layerService.updateLayerRenderList(),this.layerService.renderLayers(),this}},{key:"setCurrentPickId",value:function(i){this.currentPickId=i}},{key:"getCurrentPickId",value:function(){return this.currentPickId}},{key:"setCurrentSelectedId",value:function(i){this.selectedFeatureID=i}},{key:"getCurrentSelectedId",value:function(){return this.selectedFeatureID}},{key:"isVisible",value:function(){var i=this.mapService.getZoom(),a=this.getLayerConfig(),o=a.visible,u=a.minZoom,s=u===void 0?-1/0:u,l=a.maxZoom,c=l===void 0?1/0:l;return!!o&&i>=s&&i<c}},{key:"setMultiPass",value:function(i,a){if(this.updateLayerConfig({enableMultiPassRenderer:i}),a&&this.updateLayerConfig({passes:a}),i){var o=this.getLayerConfig(),u=o.passes,s=u===void 0?[]:u;this.multiPassRenderer=J0(this,s,this.postProcessingPassFactory,this.normalPassFactory),this.multiPassRenderer.setRenderFlag(!0);var l=this.rendererService.getViewportSize(),c=l.width,f=l.height;this.multiPassRenderer.resize(c,f)}return this}},{key:"setMinZoom",value:function(i){return this.updateLayerConfig({minZoom:i}),this}},{key:"getMinZoom",value:function(){var i=this.getLayerConfig(),a=i.minZoom;return a}},{key:"getMaxZoom",value:function(){var i=this.getLayerConfig(),a=i.maxZoom;return a}},{key:"get",value:function(i){var a=this.getLayerConfig();return a[i]}},{key:"setMaxZoom",value:function(i){return this.updateLayerConfig({maxZoom:i}),this}},{key:"setAutoFit",value:function(i){return this.updateLayerConfig({autoFit:i}),this}},{key:"fitBounds",value:function(i){if(!this.inited)return this.updateLayerConfig({autoFit:!0}),this;var a=this.getSource(),o=a.extent,u=o.some(function(s){return Math.abs(s)===1/0});return u?this:(this.mapService.fitBounds([[o[0],o[1]],[o[2],o[3]]],i),this)}},{key:"destroy",value:function(){var i,a,o,u,s,l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(!this.isDestroyed){(i=this.layerModel)===null||i===void 0||i.uniformBuffers.forEach(function(h){h.destroy()}),this.layerChildren.map(function(h){return h.destroy(!1)}),this.layerChildren=[];var c=this.getLayerConfig(),f=c.maskfence;f&&(this.masks.map(function(h){return h.destroy(!1)}),this.masks=[]),this.hooks.beforeDestroy.call(),this.layerSource.off("update",this.sourceEvent),(a=this.multiPassRenderer)===null||a===void 0||a.destroy(),this.textureService.destroy(),this.styleAttributeService.clearAllAttributes(),this.hooks.afterDestroy.call(),(o=this.layerModel)===null||o===void 0||o.clearModels(l),(u=this.tileLayer)===null||u===void 0||u.destroy(),this.models=[],(s=this.debugService)===null||s===void 0||s.removeLog(this.id),this.emit("remove",{target:this,type:"remove"}),this.emit("destroy",{target:this,type:"destroy"}),this.removeAllListeners(),this.isDestroyed=!0}}},{key:"clear",value:function(){this.styleAttributeService.clearAllAttributes()}},{key:"clearModels",value:function(){var i;this.models.forEach(function(a){return a.destroy()}),(i=this.layerModel)===null||i===void 0||i.clearModels(),this.models=[]}},{key:"isDirty",value:function(){return!!(this.styleAttributeService.getLayerStyleAttributes()||[]).filter(function(i){return i.needRescale||i.needRemapping||i.needRegenerateVertices}).length}},{key:"setSource",value:function(i){var a=this;if(this.layerSource&&this.layerSource.off("update",this.sourceEvent),this.layerSource=i,this.clusterZoom=0,this.inited&&this.layerSource.cluster){var o=this.mapService.getZoom();this.layerSource.updateClusterData(o)}this.layerSource.inited&&this.sourceEvent(),this.layerSource.on("update",function(u){var s=u.type;if(a.coordCenter===void 0){var l,c=a.layerSource.center;a.coordCenter=c,(l=a.mapService)!==null&&l!==void 0&&l.setCoordCenter&&a.mapService.setCoordCenter(c)}if(s==="update"){if(a.tileLayer){a.tileLayer.reload();return}a.sourceEvent()}})}},{key:"getSource",value:function(){return this.layerSource}},{key:"getScaleOptions",value:function(){return this.scaleOptions}},{key:"setEncodedData",value:function(i){this.encodedData=i,this.encodeDataLength=i.length}},{key:"getEncodedData",value:function(){return this.encodedData}},{key:"getScale",value:function(i){return this.styleAttributeService.getLayerAttributeScale(i)}},{key:"getLegend",value:function(i){var a,o,u,s=this.styleAttributeService.getLayerStyleAttribute(i),l=(s==null||(a=s.scale)===null||a===void 0?void 0:a.scalers)||[];return{type:(o=l[0].option)===null||o===void 0?void 0:o.type,field:s==null||(u=s.scale)===null||u===void 0?void 0:u.field,items:this.getLegendItems(i)}}},{key:"getLegendItems",value:function(i){var a=this.styleAttributeService.getLayerAttributeScale(i);if(!a)return[];if(a.invertExtent){var o=a.range().map(function(l){return S({value:a.invertExtent(l)},i,l)});return o}else if(a.ticks){var u=a.ticks().map(function(l){return S({value:l},i,a(l))});return u}else if(a!=null&&a.domain){var s=a.domain().filter(function(l){return!GC(l)}).map(function(l){return S({value:l},i,a(l))});return s}return[]}},{key:"pick",value:function(i){var a=i.x,o=i.y;this.interactionService.triggerHover({x:a,y:o})}},{key:"boxSelect",value:function(i,a){this.pickingService.boxPickLayer(this,i,a)}},{key:"buildLayerModel",value:function(){var n=Y(A.mark(function a(o){var u=this,s,l,c,f,h,d,v,p,g,m,_,y,x,b;return A.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return s=o.moduleName,l=o.vertexShader,c=o.fragmentShader,f=o.inject,h=o.triangulation,d=o.styleOption,v=o.pickingEnabled,p=v===void 0?!0:v,g=Wt(o,UC),this.shaderModuleService.registerModule(s,{vs:l,fs:c,inject:f}),m=this.shaderModuleService.getModule(s),_=m.vs,y=m.fs,x=m.uniforms,b=this.rendererService.createModel,T.abrupt("return",new Promise(function(D){var U=u.styleAttributeService.createAttributesAndIndices(u.encodedData,h,d),I=U.attributes,w=U.elements,M=U.count,P=[].concat(Q(u.layerModel.uniformBuffers),Q(u.rendererService.uniformBuffers),[u.getLayerUniformBuffer()]);p&&P.push(u.getPickingUniformBuffer());var B=z({attributes:I,uniforms:x,fs:y,vs:_,elements:w,blend:K0[kr.normal],uniformBuffers:P,textures:u.layerModel.textures},g);M&&(B.count=M);var J=b(B);D(J)}));case 5:case"end":return T.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"createAttributes",value:function(i){var a=i.triangulation,o=this.styleAttributeService.createAttributes(this.encodedData,a),u=o.attributes;return u}},{key:"getTime",value:function(){return this.layerService.clock.getDelta()}},{key:"setAnimateStartTime",value:function(){this.animateStartTime=this.layerService.clock.getElapsedTime()}},{key:"stopAnimate",value:function(){this.animateStatus&&(this.layerService.stopAnimate(),this.animateStatus=!1,this.updateLayerConfig({animateOption:{enable:!1}}))}},{key:"getLayerAnimateTime",value:function(){return this.layerService.clock.getElapsedTime()-this.animateStartTime}},{key:"needPick",value:function(i){var a=this.getLayerConfig(),o=a.enableHighlight,u=o===void 0?!0:o,s=a.enableSelect,l=s===void 0?!0:s,c=this.eventNames().indexOf(i)!==-1||this.eventNames().indexOf("un"+i)!==-1;return(i==="click"||i==="dblclick")&&l&&(c=!0),i==="mousemove"&&(u||this.eventNames().indexOf("mouseenter")!==-1||this.eventNames().indexOf("unmousemove")!==-1||this.eventNames().indexOf("mouseout")!==-1)&&(c=!0),this.isVisible()&&c}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return u.stop()}},a)}));function i(){return n.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"renderMulPass",value:function(){var n=Y(A.mark(function a(o){return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.render();case 2:case"end":return s.stop()}},a)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"renderModels",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.encodeDataLength<=0&&!this.forceRender?(this.clearModels(),this):(this.hooks.beforeRender.call(),this.models.forEach(function(o){o.draw({uniforms:i.layerModel.getUninforms(),blend:i.layerModel.getBlend(),stencil:i.layerModel.getStencil(a),textures:i.layerModel.textures},(a==null?void 0:a.ispick)||!1)}),this.hooks.afterRender.call(),this)}},{key:"updateStyleAttribute",value:function(i,a,o,u){var s=this.configService.getAttributeConfig(this.id)||{};return Xo(s[i],{field:a,values:o})?!1:(["color","size","texture","rotate","filter","label","shape"].indexOf(i)!==-1&&this.configService.setAttributeConfig(this.id,S({},i,{field:a,values:o})),this.startInit?this.styleAttributeService.updateStyleAttribute(i,{scale:z({field:a},this.splitValuesAndCallbackInAttribute(o,this.getLayerConfig()[a]))},u):this.pendingStyleAttributes.push({attributeName:i,attributeField:a,attributeValues:o,updateOptions:u}),!0)}},{key:"getLayerAttributeConfig",value:function(){return this.configService.getAttributeConfig(this.id)}},{key:"getShaderPickStat",value:function(){return this.layerService.getShaderPickStat()}},{key:"setEarthTime",value:function(i){console.warn("empty fn")}},{key:"processData",value:function(i){return i}},{key:"getModelType",value:function(){throw new Error("Method not implemented.")}},{key:"getDefaultConfig",value:function(){return{}}},{key:"initLayerModels",value:function(){var n=Y(A.mark(function a(){var o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this.models.forEach(function(c){return c.destroy()}),this.models=[],this.uniformBuffers.forEach(function(c){c.destroy()}),this.uniformBuffers=[],o=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(o),u=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(u),l.next=10,this.layerModel.initModels();case 10:this.models=l.sent;case 11:case"end":return l.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getLayerUniformBuffer",value:function(){return this.uniformBuffers[0]}},{key:"getPickingUniformBuffer",value:function(){return this.uniformBuffers[1]}},{key:"reRender",value:function(){this.inited&&this.layerService.reRender()}},{key:"splitValuesAndCallbackInAttribute",value:function(i){return{values:ad(i)?void 0:i,callback:ad(i)?i:void 0}}}]),r}(zt.EventEmitter),nd=Oe(Yo.prototype,"configService",[rd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Yo);function WC(e,t){return{enable:e,mask:255,func:{cmp:L.EQUAL,ref:t?1:0,mask:1}}}function sd(e){return e.maskOperation===Qa.OR?{enable:!0,mask:255,func:{cmp:L.ALWAYS,ref:1,mask:255},opFront:{fail:L.KEEP,zfail:L.REPLACE,zpass:L.REPLACE}}:{enable:!0,mask:255,func:{cmp:e.stencilType===Xr.SINGLE||e.stencilIndex===0?L.ALWAYS:L.LESS,ref:e.stencilType===Xr.SINGLE?1:e.stencilIndex===0?2:1,mask:255},opFront:{fail:L.KEEP,zfail:L.REPLACE,zpass:L.REPLACE}}}var we=function(e){return e[e.POSITION=0]="POSITION",e[e.COLOR=1]="COLOR",e[e.VERTEX_ID=2]="VERTEX_ID",e[e.PICKING_COLOR=3]="PICKING_COLOR",e[e.STROKE=4]="STROKE",e[e.OPACITY=5]="OPACITY",e[e.OFFSETS=6]="OFFSETS",e[e.ROTATION=7]="ROTATION",e[e.EXTRUSION_BASE=8]="EXTRUSION_BASE",e[e.SIZE=9]="SIZE",e[e.SHAPE=10]="SHAPE",e[e.EXTRUDE=11]="EXTRUDE",e[e.MAX=12]="MAX",e[e.NORMAL=13]="NORMAL",e[e.UV=14]="UV",e[e.LINEAR=15]="LINEAR",e}({});function YC(e){switch(e){case"rotation":return{name:"Rotation",type:_e.Attribute,descriptor:{name:"a_Rotation",shaderLocation:we.ROTATION,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(r){var n=r.rotation,i=n===void 0?0:n;return Array.isArray(i)?[i[0]]:[i]}}};case"stroke":return{name:"stroke",type:_e.Attribute,descriptor:{name:"a_Stroke",shaderLocation:we.STROKE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(r){var n=r.stroke,i=n===void 0?[1,1,1,1]:n;return i}}};case"opacity":return{name:"opacity",type:_e.Attribute,descriptor:{name:"a_Opacity",shaderLocation:we.OPACITY,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(r){var n=r.opacity,i=n===void 0?1:n;return[i]}}};case"extrusionBase":return{name:"extrusionBase",type:_e.Attribute,descriptor:{name:"a_ExtrusionBase",shaderLocation:we.EXTRUSION_BASE,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(r){var n=r.extrusionBase,i=n===void 0?0:n;return[i]}}};case"offsets":return{name:"offsets",type:_e.Attribute,descriptor:{name:"a_Offsets",shaderLocation:we.OFFSETS,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(r){var n=r.offsets;return n}}};case"thetaOffset":return{name:"thetaOffset",type:_e.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:15,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(r){var n=r.thetaOffset,i=n===void 0?1:n;return[i]}}};default:return}}var XC={opacity:1,stroke:[1,0,0,1],offsets:[0,0],rotation:0,extrusionBase:0,strokeOpacity:1,thetaOffset:.314},la={opacity:"float",stroke:"vec4",offsets:"vec2",textOffset:"vec2",rotation:"float",extrusionBase:"float",strokeOpacity:"float",thetaOffset:"float"};function ld(e){return Math.max(Math.ceil(e/4)*4,4)}var cd,Zo,fd,hd={opacity:we.OPACITY,stroke:we.STROKE,offsets:we.OFFSETS,rotation:we.ROTATION,extrusionBase:we.EXTRUSION_BASE,thetaOffset:15},et=(cd=W0(q.IGlobalConfigService),Zo=function(){function e(t){ie(this,e),S(this,"uniformBuffers",[]),S(this,"textures",[]),S(this,"preStyleAttribute",{}),S(this,"encodeStyleAttribute",{}),Ne(this,"configService",fd,this),this.layer=t,this.rendererService=t.getContainer().get(q.IRendererService),this.pickingService=t.getContainer().get(q.IPickingService),this.shaderModuleService=t.getContainer().get(q.IShaderModuleService),this.styleAttributeService=t.getContainer().get(q.IStyleAttributeService),this.mapService=t.getContainer().get(q.IMapService),this.iconService=t.getContainer().get(q.IIconService),this.fontService=t.getContainer().get(q.IFontService),this.cameraService=t.getContainer().get(q.ICameraService),this.layerService=t.getContainer().get(q.ILayerService),this.registerStyleAttribute(),this.registerBuiltinAttributes(),this.startModelAnimate();var r=this.rendererService.createTexture2D;this.createTexture2D=r}return ne(e,[{key:"getBlend",value:function(){var r=this.layer.getLayerConfig(),n=r.blend,i=n===void 0?"normal":n;return K0[kr[i]]}},{key:"getStencil",value:function(r){var n=this.layer.getLayerConfig(),i=n.mask,a=i===void 0?!1:i,o=n.maskInside,u=o===void 0?!0:o,s=n.enableMask,l=n.maskOperation,c=l===void 0?Qa.AND:l;if(this.layer.type==="MaskLayer")return sd({isStencil:!0,stencilType:Xr.SINGLE});if(r.isStencil)return sd(z(z({},r),{},{maskOperation:c}));var f=a||s&&this.layer.masks.length!==0||this.layer.tileMask!==void 0;return WC(f,u)}},{key:"getDefaultStyle",value:function(){return{}}},{key:"getUninforms",value:function(){var r=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());this.updateStyleUnifoms();var i=z(z({},n.uniformsOption),r.uniformsOption);return!this.rendererService.hasOwnProperty("device")&&this.textures&&this.textures.length===1&&(i.u_texture=this.textures[0]),i}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"needUpdate",value:function(){var t=Y(A.mark(function n(){return A.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!1);case 1:case"end":return a.stop()}},n)}));function r(){return t.apply(this,arguments)}return r}()},{key:"buildModels",value:function(){var t=Y(A.mark(function n(){return A.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},n)}));function r(){return t.apply(this,arguments)}return r}()},{key:"initModels",value:function(){var t=Y(A.mark(function n(){return A.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},n)}));function r(){return t.apply(this,arguments)}return r}()},{key:"clearModels",value:function(){}},{key:"getAttribute",value:function(){throw new Error("Method not implemented.")}},{key:"prerender",value:function(){}},{key:"render",value:function(r){throw new Error("Method not implemented.")}},{key:"registerBuiltinAttributes",value:function(){throw new Error("Method not implemented.")}},{key:"animateOption2Array",value:function(r){return[r.enable?0:1,r.duration||4,r.interval||.2,r.trailLength||.1]}},{key:"startModelAnimate",value:function(){var r=this.layer.getLayerConfig(),n=r.animateOption;n.enable&&this.layer.setAnimateStartTime()}},{key:"getInject",value:function(){var r=this.layer.encodeStyleAttribute,n="",i=[];this.layer.enableShaderEncodeStyles.forEach(function(u){r[u]?n+="#define USE_ATTRIBUTE_".concat(u.toUpperCase(),` 0.0; 

`):i.push("  ".concat(la[u]," u_").concat(u,";")),n+=`
          #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
          layout(location = `).concat(hd[u],") in ").concat(la[u]," a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
        #endif

        `)});var a=i.length?`
layout(std140) uniform AttributeUniforms {
`.concat(i.join(`
`),`
};
    `):"";n+=a;var o="";return this.layer.enableShaderEncodeStyles.forEach(function(u){o+=`

    #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
      `).concat(la[u]," ").concat(u,"  = a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
    #else
      `).concat(la[u]," ").concat(u," = u_").concat(u,`;
    #endif

    `)}),{"vs:#decl":n,"fs:#decl":a,"vs:#main-start":o}}},{key:"getStyleAttribute",value:function(){var r=this,n={};return this.layer.enableShaderEncodeStyles.forEach(function(i){if(!r.layer.encodeStyleAttribute[i]){var a=r.layer.getLayerConfig()[i],o=typeof a>"u"?XC[i]:a;i==="stroke"&&(o=qe(o)),n["u_"+i]=o}}),n}},{key:"registerStyleAttribute",value:function(){var r=this;Object.keys(this.layer.encodeStyleAttribute).forEach(function(n){var i=YC(n);i&&(r.styleAttributeService.registerStyleAttribute(i),i.descriptor&&(i.descriptor.shaderLocation=hd[n]))})}},{key:"updateEncodeAttribute",value:function(r,n){this.encodeStyleAttribute[r]=n}},{key:"initUniformsBuffer",value:function(){var r=this.getUniformsBufferInfo(this.getStyleAttribute()),n=this.getCommonUniformsInfo();r.uniformsLength!==0&&(this.attributeUnifoms=this.rendererService.createBuffer({data:new Float32Array(ld(r.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.attributeUnifoms)),n.uniformsLength!==0&&(this.commonUnifoms=this.rendererService.createBuffer({data:new Float32Array(ld(n.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.commonUnifoms))}},{key:"getUniformsBufferInfo",value:function(r){var n=0,i=[];return Object.values(r).forEach(function(a){Array.isArray(a)?(i.push.apply(i,Q(a)),n+=a.length):typeof a=="number"?(i.push(a),n+=1):typeof a=="boolean"&&(i.push(Number(a)),n+=1)}),{uniformsOption:r,uniformsLength:n,uniformsArray:i}}},{key:"getCommonUniformsInfo",value:function(){return{uniformsLength:0,uniformsArray:[],uniformsOption:{}}}},{key:"updateStyleUnifoms",value:function(){var r,n,i=this.getUniformsBufferInfo(this.getStyleAttribute()),a=i.uniformsArray,o=this.getCommonUniformsInfo(),u=o.uniformsArray;(r=this.attributeUnifoms)===null||r===void 0||r.subData({offset:0,data:new Uint8Array(new Float32Array(a).buffer)}),(n=this.commonUnifoms)===null||n===void 0||n.subData({offset:0,data:new Uint8Array(new Float32Array(u).buffer)})}}]),e}(),fd=Oe(Zo.prototype,"configService",[cd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Zo),dd=function(e){return e.VERTICAL="vertical",e.HORIZONTAL="horizontal",e}({}),ZC=function(e){return e.NORMAL="normal",e.REPLACE="replace",e}({}),Ps=function(e){return e[e.pixel=0]="pixel",e[e.meter=1]="meter",e}({}),eg=100;function vd(e){return e/180*Math.acos(-1)}function tg(e){var t=vd(e[0])+Math.PI/2,r=vd(e[1]),n=eg+Math.random()*.4,i=n*Math.cos(r)*Math.cos(t),a=n*Math.cos(r)*Math.sin(t),o=n*Math.sin(r);return[a,o,i]}var ca=ze();ze();var ht=ze(),Mr=ze(),vn=ze();function qo(e,t,r,n,i){dt(e,r,n),nr(e,e),t=kn(-e[1],e[0]);var a=kn(-r[1],r[0]);return[i/Fr(t,a),t]}function Ir(e,t){return hp(e,-t[1],t[0])}function pn(e,t,r){return In(e,t,r),nr(e,e),e}function Ko(e,t){return e[0]===t[0]&&e[1]===t[1]}var qC=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ie(this,e),S(this,"lastFlip",-1),S(this,"miter",kn(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return ne(e,[{key:"simpleExtrude",value:function(r){var n=this.complex;if(r.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=r.length,a=n.startIndex,o=1;o<i;o++){var u=r[o-1],s=r[o],l=o<r.length-1?r[o+1]:null,c=this.simpleSegment(n,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<n.positions.length/6;f++)n.positions[f*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}},{key:"simpleExtrude_gaode2",value:function(r,n){var i=this.complex;if(r.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=r.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=r[u-1];f.push((s=n[u-1][2])!==null&&s!==void 0?s:0);var h=n[u-1],d=r[u];d.push((l=n[u][2])!==null&&l!==void 0?l:0);var v=n[u],p=u<r.length-1?[].concat(Q(r[u+1]),[(c=n[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<n.length-1?n[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude_gaode2",value:function(r,n){var i=this.complex;if(r.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=r.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=r[u-1];f.push((s=n[u-1][2])!==null&&s!==void 0?s:0);var h=n[u-1],d=r[u];d.push((l=n[u][2])!==null&&l!==void 0?l:0);var v=n[u],p=u<r.length-1?[].concat(Q(r[u+1]),[(c=n[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<n.length-1?n[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(r){var n=this.complex;if(r.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=r.length,a=n.startIndex,o=1;o<i;o++){var u=r[o-1],s=r[o],l=o<r.length-1?r[o+1]:null,c=this.segment(n,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<n.positions.length/6;f++)n.positions[f*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}},{key:"simpleSegment",value:function(r,n,i,a,o){var u=0,s=r.indices,l=r.positions,c=r.normals,f=ot([a[0],a[1]]),h=ot([i[0],i[1]]);pn(ht,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=ze(),Ir(this.normal,ht)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(n+0,n+1,n+2),!o)Ir(this.normal,ht),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),u+=2;else{var v=ot([o[0],o[1]]);Ko(f,v)&&dt(v,f,nr(v,Sn(v,f,h))),pn(Mr,v,f);var p=qo(vn,ze(),ht,Mr,this.thickness),g=Ie(p,2),m=g[0],_=g[1],y=Fr(vn,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),y=-1,er(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment_gaode2",value:function(r,n,i,a,o,u,s,l){var c=0,f=r.indices,h=r.positions,d=r.normals,v=this.cap==="square",p=this.join==="bevel",g=ot([s[0],s[1]]),m=ot([u[0],u[1]]);pn(ht,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=ze(),Ir(this.normal,ht)),!this.started)if(this.started=!0,v){var y=ze(),x=ze();dt(y,this.normal,ht),dt(x,this.normal,ht),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(n+0,n+1,n+2),o){Ko(a,o)&&dt(o,a,nr(o,Sn(o,a,i))),pn(Mr,o,a);var T=qo(vn,ze(),ht,Mr,this.thickness),D=Ie(T,2),U=D[0],I=D[1],w=Fr(vn,this.normal)<0?-1:1,M=p;if(!M&&this.join==="miter"){var P=U;P>this.miterLimit&&(M=!0)}M?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,Q(this.lastFlip!==-w?[n,n+2,n+3]:[n+2,n+1,n+3])),f.push(n+2,n+3,n+4),Ir(ca,Mr),er(this.normal,ca),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,U,this.totalDistance),f.push.apply(f,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),w=-1,er(this.normal,I),c+=2),this.lastFlip=w}else{if(Ir(this.normal,ht),v){var b=ze(),k=ze();In(k,ht,this.normal),dt(b,ht,this.normal),d.push(k[0],k[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),c+=2}return c}},{key:"segment",value:function(r,n,i,a,o){var u=0,s=r.indices,l=r.positions,c=r.normals,f=this.cap==="square",h=this.join==="bevel",d=ot([a[0],a[1]]),v=ot([i[0],i[1]]);pn(ht,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=ze(),Ir(this.normal,ht)),!this.started)if(this.started=!0,f){var g=ze(),m=ze();dt(g,this.normal,ht),dt(m,this.normal,ht),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(n+0,n+1,n+2),o){var x=ot([o[0],o[1]]);Ko(d,x)&&dt(x,d,nr(x,Sn(x,d,v))),pn(Mr,x,d);var b=qo(vn,ze(),ht,Mr,this.thickness),k=Ie(b,2),T=k[0],D=k[1],U=Fr(vn,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var w=T;w>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(D[0],D[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,Q(this.lastFlip!==-U?[n,n+2,n+3]:[n+2,n+1,n+3])),s.push(n+2,n+3,n+4),Ir(ca,Mr),er(this.normal,ca),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,D,T,this.totalDistance),s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),U=-1,er(this.normal,D),u+=2),this.lastFlip=U}else{if(Ir(this.normal,ht),f){var _=ze(),y=ze();In(y,ht,this.normal),dt(_,ht,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,Q(this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3])),u+=2}return u}},{key:"extrusions",value:function(r,n,i,a,o,u){n.push(a[0],a[1],0),n.push(a[0],a[1],0),r.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),r.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(r,n){var i=n[0]-r[0],a=n[1]-r[1];return Math.sqrt(i*i+a*a)}}]),e}();function KC(e){var t=e[0][0],r=e[0][e[0].length-1];t[0]===r[0]&&t[1]===r[1]&&(e[0]=e[0].slice(0,e[0].length-1));for(var n=e[0].length,i=Ot.flatten(e),a=i.vertices,o=i.dimensions,u=[],s=[],l=0;l<a.length/o;l++)o===2?u.push(a[l*2],a[l*2+1],1):u.push(a[l*3],a[l*3+1],1);var c=Ot(i.vertices,i.holes,i.dimensions);s.push.apply(s,Q(c));for(var f=function(){var v=i.vertices.slice(h*o,(h+1)*o),p=i.vertices.slice((h+1)*o,(h+2)*o);p.length===0&&(p=i.vertices.slice(0,o));var g=u.length/3;u.push(v[0],v[1],1,p[0],p[1],1,v[0],v[1],0,p[0],p[1],0),s.push.apply(s,Q([0,2,1,2,3,1].map(function(m){return m+g})))},h=0;h<n;h++)f();return{positions:u,index:s}}function QC(e){var t=Ot.flatten(e),r=Ot(t.vertices,t.holes,t.dimensions);return{positions:t.vertices,index:r}}function rg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e[0][0],n=e[0][e[0].length-1];r[0]===n[0]&&r[1]===n[1]&&(e[0]=e[0].slice(0,e[0].length-1));for(var i=e[0].length,a=Ot.flatten(e),o=a.vertices,u=a.dimensions,s=[],l=[],c=[],f=0;f<o.length/u;f++)s.push(o[f*u],o[f*u+1],1,-1,-1),c.push(0,0,1);var h=Ot(a.vertices,a.holes,a.dimensions);l.push.apply(l,Q(h));for(var d=function(){var g=a.vertices.slice(v*u,(v+1)*u),m=a.vertices.slice((v+1)*u,(v+2)*u);m.length===0&&(m=a.vertices.slice(0,u));var _=s.length/5;s.push(g[0],g[1],1,0,0,m[0],m[1],1,.1,0,g[0],g[1],0,0,.8,m[0],m[1],0,.1,.8);var y=JC([m[0],m[1],1],[g[0],g[1],0],[g[0],g[1],1],t);c.push.apply(c,Q(y).concat(Q(y),Q(y),Q(y))),l.push.apply(l,Q([1,2,0,3,2,1].map(function(x){return x+_})))},v=0;v<i;v++)d();return{positions:s,index:l,normals:c}}function JC(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=Qi(),a=Qi(),o=Qi();n&&(e=Eo(e),t=Eo(t),r=Eo(r));var u=cr.apply(po,Q(e)),s=cr.apply(po,Q(t)),l=cr.apply(po,Q(r));il(i,l,s),il(a,u,s),Lm(o,i,a);var c=Qi();return ci(c,o),c}var Vt,ti=function(e){return e.CYLINDER="cylinder",e.SQUARECOLUMN="squareColumn",e.TRIANGLECOLUMN="triangleColumn",e.HEXAGONCOLUMN="hexagonColumn",e.PENTAGONCOLUMN="pentagonColumn",e}({}),ri=function(e){return e.CIRCLE="circle",e.SQUARE="square",e.TRIANGLE="triangle",e.HEXAGON="hexagon",e.PENTAGON="pentagon",e}({});function ji(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=Math.PI*2/e,n=[],i=0;i<e;i++)n.push(r*i+t*Math.PI/12);var a=n.map(function(o){var u=Math.sin(o+Math.PI/4),s=Math.cos(o+Math.PI/4);return[u,s,0]});return a}function Hu(){return ji(30)}function pd(){return ji(4)}function gd(){return ji(3)}function md(){return ji(6,1)}function yd(){return ji(5)}var Mn=(Vt={},S(Vt,ri.CIRCLE,Hu),S(Vt,ri.HEXAGON,md),S(Vt,ri.TRIANGLE,gd),S(Vt,ri.SQUARE,pd),S(Vt,ri.PENTAGON,yd),S(Vt,ti.CYLINDER,Hu),S(Vt,ti.HEXAGONCOLUMN,md),S(Vt,ti.TRIANGLECOLUMN,gd),S(Vt,ti.SQUARECOLUMN,pd),S(Vt,ti.PENTAGONCOLUMN,yd),Vt),fa={};function La(e){var t=vr(e.coordinates);return{vertices:[].concat(Q(t),Q(t),Q(t),Q(t)),indices:[0,1,2,2,3,0],size:t.length}}function _d(e){var t=vr(e.coordinates),r=tg(t);return{vertices:[].concat(Q(r),Q(r),Q(r),Q(r)),indices:[0,1,2,2,3,0],size:r.length}}function ng(e){var t=e.shape,r=oA(t,!1),n=r.positions,i=r.index,a=r.normals;return{vertices:n,indices:i,normals:a,size:5}}function eA(e){var t=vr(e.coordinates);return{vertices:Q(t),indices:[0],size:t.length}}function tA(e){var t=e.coordinates,r=e.originCoordinates,n=e.version,i=new qC({dash:!0,join:"bevel"});if(n==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=r;Array.isArray(o[0][0])||(o=[r]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function rA(e){var t=e.coordinates,r=e.originCoordinates,n=[];if(!Array.isArray(t[0]))return{vertices:[],indices:[],normals:[],size:6,count:0};var i=nA(t,r),a=i.results,o=i.totalDistance;return a.map(function(u){n.push(u[0],u[1],u[2],u[3],0,o)}),{vertices:n,indices:[],normals:[],size:6,count:a.length}}function xd(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)}function Qo(e,t){return e.length<3&&e.push(0),t!==void 0&&e.push(t),e}function nA(e,t){var r=e,n=t||e;Array.isArray(r)&&Array.isArray(r[0])&&Array.isArray(r[0][0])&&(r=t.flat(),n=t.flat());var i=0;if(r.length<2)return{results:r,totalDistance:0};var a=[],o=Qo(r[0],i);a.push(o);for(var u=1;u<r.length-1;u++){var s=xd(ot(n[u-1]),ot(n[u]));i+=s;var l=Qo(r[u],i);a.push(l),a.push(l)}var c=xd(ot(n[n.length-2]),ot(n[n.length-1]));return i+=c,a.push(Qo(r[r.length-1],i)),{results:a,totalDistance:i}}function Fs(e){var t=e.coordinates,r=Ot.flatten(t),n=r.vertices,i=r.dimensions,a=r.holes;return{indices:Ot(n,a,i),vertices:n,size:i}}function iA(e){var t=e.coordinates,r=Ot.flatten(t),n=r.vertices,i=r.dimensions,a=r.holes;return{indices:Ot(n,a,i),vertices:aA(n),size:i+4}}function aA(e){for(var t=[],r=E1(e),n=r.center,i=r.radius,a=0;a<e.length;a+=2){var o=e[a],u=e[a+1];t.push.apply(t,[o,u,0].concat(Q(n),[i]))}return t}function ig(e){var t=e.coordinates,r=rg(t,!0),n=r.positions,i=r.index,a=r.normals;return{vertices:n,indices:i,normals:a,size:5}}function P6(e){var t=e.shape,r=uA(t),n=r.positions,i=r.index;return{vertices:n,indices:i,size:3}}function to(e){var t=e.coordinates,r=[].concat(Q(t[0]),[0,0,1,t[1][0],t[0][1],0,1,1],Q(t[1]),[0,1,0],Q(t[0]),[0,0,1],Q(t[1]),[0,1,0,t[0][0],t[1][1],0,0,0]),n=[0,1,2,3,4,5];return{vertices:r,indices:n,size:5}}function Os(e,t){for(var r=t.segmentNumber,n=r===void 0?30:r,i=e.coordinates,a=[],o=[],u=function(c){a.push(c,1,c,i[0][0],i[0][1],i[1][0],i[1][1],c,-1,c,i[0][0],i[0][1],i[1][0],i[1][1]),c!==n-1&&o.push.apply(o,Q([0,1,2,1,3,2].map(function(f){return c*2+f})))},s=0;s<n;s++)u(s);return{vertices:a,indices:o,size:7}}function F6(e){var t=e.coordinates;t.length===2&&t.push(0);var r=ha(-1,1),n=ha(1,1),i=ha(-1,-1),a=ha(1,-1),o=[].concat(Q(t),Q(r),Q(t),Q(i),Q(t),Q(a),Q(t),Q(n)),u=[0,1,2,3,0,2];return{vertices:o,indices:u,size:5}}function oA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(fa&&fa[e])return fa[e];var r=Mn[e]?Mn[e]():Mn.cylinder(),n=rg([r],t);return fa[e]=n,n}function uA(e){var t=["cylinder","triangleColumn","hexagonColumn","squareColumn"],r=Mn[e]?Mn[e]():Mn.circle(),n=t.indexOf(e)===-1?QC([r]):KC([r]);return n}function ha(e,t){var r=(e+1)/2,n=(t+1)/2;return[r,n]}/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var bd;(function(e){(function(t){var r=typeof bi=="object"?bi:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(e);typeof r.Reflect>"u"?r.Reflect=e:n=i(r.Reflect,n),t(n);function i(a,o){return function(u,s){typeof a[u]!="function"&&Object.defineProperty(a,u,{configurable:!0,writable:!0,value:s}),o&&o(u,s)}}})(function(t){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",a=n&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",o=typeof Object.create=="function",u={__proto__:[]}instanceof Array,s=!o&&!u,l={create:o?function(){return qt(Object.create(null))}:u?function(){return qt({__proto__:null})}:function(){return qt({})},has:s?function(j,te){return r.call(j,te)}:function(j,te){return te in j},get:s?function(j,te){return r.call(j,te)?j[te]:void 0}:function(j,te){return j[te]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",h=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:at(),d=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Xe(),v=!f&&typeof WeakMap=="function"?WeakMap:At(),p=new v;function g(j,te,oe,de){if(Z(oe)){if(!ae(j))throw new TypeError;if(!ee(te))throw new TypeError;return I(j,te)}else{if(!ae(j))throw new TypeError;if(!ue(te))throw new TypeError;if(!ue(de)&&!Z(de)&&!X(de))throw new TypeError;return X(de)&&(de=void 0),oe=$(oe),w(j,te,oe,de)}}t("decorate",g);function m(j,te){function oe(de,ve){if(!ue(de))throw new TypeError;if(!Z(ve)&&!$e(ve))throw new TypeError;ce(j,te,de,ve)}return oe}t("metadata",m);function _(j,te,oe,de){if(!ue(oe))throw new TypeError;return Z(de)||(de=$(de)),ce(j,te,oe,de)}t("defineMetadata",_);function y(j,te,oe){if(!ue(te))throw new TypeError;return Z(oe)||(oe=$(oe)),P(j,te,oe)}t("hasMetadata",y);function x(j,te,oe){if(!ue(te))throw new TypeError;return Z(oe)||(oe=$(oe)),B(j,te,oe)}t("hasOwnMetadata",x);function b(j,te,oe){if(!ue(te))throw new TypeError;return Z(oe)||(oe=$(oe)),J(j,te,oe)}t("getMetadata",b);function k(j,te,oe){if(!ue(te))throw new TypeError;return Z(oe)||(oe=$(oe)),se(j,te,oe)}t("getOwnMetadata",k);function T(j,te){if(!ue(j))throw new TypeError;return Z(te)||(te=$(te)),pe(j,te)}t("getMetadataKeys",T);function D(j,te){if(!ue(j))throw new TypeError;return Z(te)||(te=$(te)),H(j,te)}t("getOwnMetadataKeys",D);function U(j,te,oe){if(!ue(te))throw new TypeError;Z(oe)||(oe=$(oe));var de=M(te,oe,!1);if(Z(de)||!de.delete(j))return!1;if(de.size>0)return!0;var ve=p.get(te);return ve.delete(oe),ve.size>0||p.delete(te),!0}t("deleteMetadata",U);function I(j,te){for(var oe=j.length-1;oe>=0;--oe){var de=j[oe],ve=de(te);if(!Z(ve)&&!X(ve)){if(!ee(ve))throw new TypeError;te=ve}}return te}function w(j,te,oe,de){for(var ve=j.length-1;ve>=0;--ve){var He=j[ve],Me=He(te,oe,de);if(!Z(Me)&&!X(Me)){if(!ue(Me))throw new TypeError;de=Me}}return de}function M(j,te,oe){var de=p.get(j);if(Z(de)){if(!oe)return;de=new h,p.set(j,de)}var ve=de.get(te);if(Z(ve)){if(!oe)return;ve=new h,de.set(te,ve)}return ve}function P(j,te,oe){var de=B(j,te,oe);if(de)return!0;var ve=ut(te);return X(ve)?!1:P(j,ve,oe)}function B(j,te,oe){var de=M(te,oe,!1);return Z(de)?!1:Le(de.has(j))}function J(j,te,oe){var de=B(j,te,oe);if(de)return se(j,te,oe);var ve=ut(te);if(!X(ve))return J(j,ve,oe)}function se(j,te,oe){var de=M(te,oe,!1);if(!Z(de))return de.get(j)}function ce(j,te,oe,de){var ve=M(oe,de,!0);ve.set(j,te)}function pe(j,te){var oe=H(j,te),de=ut(j);if(de===null)return oe;var ve=pe(de,te);if(ve.length<=0)return oe;if(oe.length<=0)return ve;for(var He=new d,Me=[],O=0,N=oe;O<N.length;O++){var G=N[O],re=He.has(G);re||(He.add(G),Me.push(G))}for(var ye=0,Ke=ve;ye<Ke.length;ye++){var G=Ke[ye],re=He.has(G);re||(He.add(G),Me.push(G))}return Me}function H(j,te){var oe=[],de=M(j,te,!1);if(Z(de))return oe;for(var ve=de.keys(),He=je(ve),Me=0;;){var O=Te(He);if(!O)return oe.length=Me,oe;var N=Pe(O);try{oe[Me]=N}catch(G){try{tt(He)}finally{throw G}}Me++}}function V(j){if(j===null)return 1;switch(typeof j){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return j===null?1:6;default:return 6}}function Z(j){return j===void 0}function X(j){return j===null}function fe(j){return typeof j=="symbol"}function ue(j){return typeof j=="object"?j!==null:typeof j=="function"}function he(j,te){switch(V(j)){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:return j}var oe=te===3?"string":te===5?"number":"default",de=ke(j,i);if(de!==void 0){var ve=de.call(j,oe);if(ue(ve))throw new TypeError;return ve}return Be(j,oe==="default"?"number":oe)}function Be(j,te){if(te==="string"){var oe=j.toString;if(me(oe)){var de=oe.call(j);if(!ue(de))return de}var ve=j.valueOf;if(me(ve)){var de=ve.call(j);if(!ue(de))return de}}else{var ve=j.valueOf;if(me(ve)){var de=ve.call(j);if(!ue(de))return de}var He=j.toString;if(me(He)){var de=He.call(j);if(!ue(de))return de}}throw new TypeError}function Le(j){return!!j}function Qe(j){return""+j}function $(j){var te=he(j,3);return fe(te)?te:Qe(te)}function ae(j){return Array.isArray?Array.isArray(j):j instanceof Object?j instanceof Array:Object.prototype.toString.call(j)==="[object Array]"}function me(j){return typeof j=="function"}function ee(j){return typeof j=="function"}function $e(j){switch(V(j)){case 3:return!0;case 4:return!0;default:return!1}}function ke(j,te){var oe=j[te];if(oe!=null){if(!me(oe))throw new TypeError;return oe}}function je(j){var te=ke(j,a);if(!me(te))throw new TypeError;var oe=te.call(j);if(!ue(oe))throw new TypeError;return oe}function Pe(j){return j.value}function Te(j){var te=j.next();return te.done?!1:te}function tt(j){var te=j.return;te&&te.call(j)}function ut(j){var te=Object.getPrototypeOf(j);if(typeof j!="function"||j===c||te!==c)return te;var oe=j.prototype,de=oe&&Object.getPrototypeOf(oe);if(de==null||de===Object.prototype)return te;var ve=de.constructor;return typeof ve!="function"||ve===j?te:ve}function at(){var j={},te=[],oe=function(){function Me(O,N,G){this._index=0,this._keys=O,this._values=N,this._selector=G}return Me.prototype["@@iterator"]=function(){return this},Me.prototype[a]=function(){return this},Me.prototype.next=function(){var O=this._index;if(O>=0&&O<this._keys.length){var N=this._selector(this._keys[O],this._values[O]);return O+1>=this._keys.length?(this._index=-1,this._keys=te,this._values=te):this._index++,{value:N,done:!1}}return{value:void 0,done:!0}},Me.prototype.throw=function(O){throw this._index>=0&&(this._index=-1,this._keys=te,this._values=te),O},Me.prototype.return=function(O){return this._index>=0&&(this._index=-1,this._keys=te,this._values=te),{value:O,done:!0}},Me}();return function(){function Me(){this._keys=[],this._values=[],this._cacheKey=j,this._cacheIndex=-2}return Object.defineProperty(Me.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Me.prototype.has=function(O){return this._find(O,!1)>=0},Me.prototype.get=function(O){var N=this._find(O,!1);return N>=0?this._values[N]:void 0},Me.prototype.set=function(O,N){var G=this._find(O,!0);return this._values[G]=N,this},Me.prototype.delete=function(O){var N=this._find(O,!1);if(N>=0){for(var G=this._keys.length,re=N+1;re<G;re++)this._keys[re-1]=this._keys[re],this._values[re-1]=this._values[re];return this._keys.length--,this._values.length--,O===this._cacheKey&&(this._cacheKey=j,this._cacheIndex=-2),!0}return!1},Me.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=j,this._cacheIndex=-2},Me.prototype.keys=function(){return new oe(this._keys,this._values,de)},Me.prototype.values=function(){return new oe(this._keys,this._values,ve)},Me.prototype.entries=function(){return new oe(this._keys,this._values,He)},Me.prototype["@@iterator"]=function(){return this.entries()},Me.prototype[a]=function(){return this.entries()},Me.prototype._find=function(O,N){return this._cacheKey!==O&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=O)),this._cacheIndex<0&&N&&(this._cacheIndex=this._keys.length,this._keys.push(O),this._values.push(void 0)),this._cacheIndex},Me}();function de(Me,O){return Me}function ve(Me,O){return O}function He(Me,O){return[Me,O]}}function Xe(){return function(){function j(){this._map=new h}return Object.defineProperty(j.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),j.prototype.has=function(te){return this._map.has(te)},j.prototype.add=function(te){return this._map.set(te,te),this},j.prototype.delete=function(te){return this._map.delete(te)},j.prototype.clear=function(){this._map.clear()},j.prototype.keys=function(){return this._map.keys()},j.prototype.values=function(){return this._map.values()},j.prototype.entries=function(){return this._map.entries()},j.prototype["@@iterator"]=function(){return this.keys()},j.prototype[a]=function(){return this.keys()},j}()}function At(){var j=16,te=l.create(),oe=de();return function(){function N(){this._key=de()}return N.prototype.has=function(G){var re=ve(G,!1);return re!==void 0?l.has(re,this._key):!1},N.prototype.get=function(G){var re=ve(G,!1);return re!==void 0?l.get(re,this._key):void 0},N.prototype.set=function(G,re){var ye=ve(G,!0);return ye[this._key]=re,this},N.prototype.delete=function(G){var re=ve(G,!1);return re!==void 0?delete re[this._key]:!1},N.prototype.clear=function(){this._key=de()},N}();function de(){var N;do N="@@WeakMap@@"+O();while(l.has(te,N));return te[N]=!0,N}function ve(N,G){if(!r.call(N,oe)){if(!G)return;Object.defineProperty(N,oe,{value:l.create()})}return N[oe]}function He(N,G){for(var re=0;re<G;++re)N[re]=Math.random()*255|0;return N}function Me(N){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(N)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(N)):He(new Uint8Array(N),N):He(new Array(N),N)}function O(){var N=Me(j);N[6]=N[6]&79|64,N[8]=N[8]&191|128;for(var G="",re=0;re<j;++re){var ye=N[re];(re===4||re===6||re===8)&&(G+="-"),ye<16&&(G+="0"),G+=ye.toString(16).toLowerCase()}return G}}function qt(j){return j.__=void 0,delete j.__,j}})})(bd||(bd={}));function sA(e,t){return{type:e.type,field:"value",items:e.positions.map(function(r,n){var i;return i={},S(i,t,n>=e.colors.length?null:e.colors[n]),S(i,"value",r),i})}}function lA(e){var t=cA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function cA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var fA=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

in vec2 v_texCoord;
out vec4 outputColor;
vec3 setContrast(vec3 rgb, float contrast) {
  vec3 color = mix(vec3(0.5), rgb, contrast);
  color = clamp(color, 0.0, 1.0);
  return color;
}
vec3 setSaturation(vec3 rgb, float adjustment) {
  const vec3 grayVector = vec3(0.2125, 0.7154, 0.0721);
  vec3 intensity = vec3(dot(rgb, grayVector));
  vec3 color = mix(intensity, rgb, adjustment);
  color = clamp(color, 0.0, 1.0);
  return color;
}
void main() {
  vec4 color = texture(SAMPLER_2D(u_texture),vec2(v_texCoord.x,v_texCoord.y));
  //brightness
  color.rgb = mix(vec3(0.0, 0.0, 0.0), color.rgb, u_brightness);
  //contrast
  color.rgb = setContrast(color.rgb, u_contrast);
  // saturation
  color.rgb = setSaturation(color.rgb, u_saturation);
  // gamma
  color.rgb = pow(color.rgb, vec3(u_gamma));
  outputColor = color;
  outputColor.a *= u_opacity;
  if(outputColor.a < 0.01)
    discard;
}
`,hA=`layout(location = 0) in vec3 a_Position;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

out vec2 v_texCoord;
#pragma include "projection"
void main() {
   v_texCoord = a_Uv;
   vec4 project_pos = project_position(vec4(a_Position, 1.0));
   gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy,0., 1.0));
 
}
`,dA=function(e){be(r,e);var t=lA(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.brightness,u=i.contrast,s=i.saturation,l=i.gamma,c={u_opacity:Wn(a,1),u_brightness:Wn(o,1),u_contrast:Wn(u,1),u_saturation:Wn(s,1),u_gamma:Wn(l,1)};this.textures=[this.texture];var f=this.getUniformsBufferInfo(c);return f}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"loadTexture",value:function(){var n=Y(A.mark(function a(){var o,u,s;return A.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=this.rendererService.createTexture2D,this.texture=o({height:1,width:1}),u=this.layer.getSource(),c.next=5,u.data.images;case 5:s=c.sent,this.texture=o({data:s[0],width:s[0].width,height:s[0].height,mag:L.LINEAR,min:L.LINEAR});case 7:case"end":return c.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"rasterImage",vertexShader:hA,fragmentShader:fA,triangulation:to,primitive:L.TRIANGLES,blend:{enable:!0},depth:{enable:!1},pickingEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_Uv",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),r}(et),vA={image:dA};function pA(e){var t=gA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function gA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var mA=function(e){be(r,e);var t=pA(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","ImageLayer"),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new vA[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={image:{}};return a[i]}},{key:"getModelType",value:function(){return"image"}}]),r}(Un);function yA(e){var t=_A();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function _A(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var xA=`
#define Animate 0.0
#define LineTexture 1.0
uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};

in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_lineData;
//dash
in vec4 v_dash_array;
in float v_distance_ratio;

out vec4 outputColor;
#pragma include "picking"

void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  outputColor = v_color;
  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_lineData.b, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;
  }

  // 当存在贴图时在底色上贴上贴图
  if(u_line_texture == LineTexture) { // while load texture
    float arcRadio = smoothstep( 0.0, 1.0, (v_lineData.r / segmentNumber));
    // float arcRadio = smoothstep( 0.0, 1.0, d_distance_ratio);

    float count = v_lineData.g; // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);
    float v = v_lineData.a; // 横向 v
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;

    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
    
  } else {
     outputColor = filterColor(outputColor);
  }
}`,bA=`#define Animate 0.0
#define LineTexture 1.0
layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 12) in vec4 a_Instance;
layout(location = 14) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};
out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_lineData;
//dash
out vec4 v_dash_array;
out float v_distance_ratio;


#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float bezier3(vec3 arr, float t) {
  float ut = 1. - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}
vec2 midPoint(vec2 source, vec2 target, float arcThetaOffset) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = arcThetaOffset;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2*cos(theta2) + source.x, r2*sin(theta2) + source.y);
  if(u_lineDir == 1.0) { // 正向
    return mid;
  } else { // 逆向
    // (mid + vmin)/2 = (s + t)/2
    vec2 vmid = source + target - mid;
    return vmid;
  }
  // return mid;
}
float getSegmentRatio(float index) {
    // dash: index / (segmentNumber - 1.);
    // normal: smoothstep(0.0, 1.0, index / (segmentNumber - 1.));
    return smoothstep(0.0, 1.0, index / (segmentNumber - 1.));
    //  return index / (segmentNumber - 1.);
}
vec2 interpolate (vec2 source, vec2 target, float t, float arcThetaOffset) {
  // if the angularDist is PI, linear interpolation is applied. otherwise, use spherical interpolation
  vec2 mid = midPoint(source, target, arcThetaOffset);
  vec3 x = vec3(source.x, mid.x, target.x);
  vec3 y = vec3(source.y, mid.y, target.y);
  return vec2(bezier3(x ,t), bezier3(y,t));
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
   return reverse_offset_normal(vec3(dir_screenspace,1.0)).xy * sign(offset_direction);
}

void main() {
  //vs中计算渐变色
  if(u_linearColor==1.0){
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
  }
  else{
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;

  vec2 source = a_Instance.rg;  // 起始点
  vec2 target =  a_Instance.ba; // 终点



  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);

  //计算dashArray和distanceRatio 输出到片元
  vec2 s = source;
  vec2 t = target;
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    s = unProjCustomCoord(source);
    t = unProjCustomCoord(target);
  }
  float total_Distance = pixelDistance(s, t) / 2.0 * PI;
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  v_distance_ratio = segmentIndex / segmentNumber;

  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  float d_distance_ratio;
  
  if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
      if(u_lineDir != 1.0) {
        d_distance_ratio = 1.0 - d_distance_ratio;
      }
  }

  v_lineData.b = d_distance_ratio;

  vec4 curr = project_position(vec4(interpolate(source, target, segmentRatio, thetaOffset), 0.0, 1.0));
  vec4 next = project_position(vec4(interpolate(source, target, nextSegmentRatio, thetaOffset), 0.0, 1.0));

  
  vec2 offset = project_pixel(getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y));


  float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
  v_lineData.r = d_segmentIndex;

  if(LineTexture == u_line_texture) { // 开启贴图模式

    float arcDistrance = length(source - target); // 起始点和终点的距离
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20) { // amap
      arcDistrance *= 1000000.0;
    }
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) { // mapbox
      // arcDistrance *= 8.0;
      arcDistrance = project_pixel_allmap(arcDistrance);
    }
    v_iconMapUV = a_iconMapUV;

    float pixelLen = project_pixel_texture(u_icon_step); // 贴图沿弧线方向的长度 - 随地图缩放改变
    float texCount = floor(arcDistrance/pixelLen); // 贴图在弧线上重复的数量
    v_lineData.g = texCount;

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size); // 定点位置偏移
    v_lineData.a = lineOffsetWidth/linePixelSize; // 线图层贴图部分的 v 坐标值
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(curr.xy + offset, 0, 1.0));

  setPickingColor(a_PickingColor);
}
`,SA={solid:0,dash:1},EA=function(e){be(r,e);var t=yA(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas()}),n.layer.render();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128}),n.textures=[n.texture]}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.forward,v=d===void 0?!0:d,p=i.lineTexture,g=p===void 0?!1:p,m=i.iconStep,_=m===void 0?100:m,y=i.segmentNumber,x=y===void 0?30:y,b=this.layer.getLayerConfig(),k=b.animateOption,T=h;c!=="dash"&&(T=[0,0]),T.length===2&&T.push(0,0);var D=0,U=[0,0,0,0],I=[0,0,0,0];a&&o&&(U=qe(a),I=qe(o),D=1),this.rendererService.getDirty()&&this.texture.bind();var w={u_animate:this.animateOption2Array(k),u_dash_array:T,u_sourceColor:U,u_targetColor:I,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:x,u_lineDir:v?1:-1,u_icon_step:_,u_line_texture:g?1:0,u_textureBlend:s==="normal"?0:1,u_blur:.9,u_line_type:SA[c||"solid"],u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:D},M=this.getUniformsBufferInfo(w);return M}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:xA,vert:bA,type:""}}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=5,this.layer.buildLayerModel({moduleName:"lineArc2d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:Os,depth:{enable:!1},styleOption:{segmentNumber:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:_e.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et);function CA(e){var t=AA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function AA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var wA=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};

// varying vec2 v_normal;
in vec4 v_dash_array;
in vec4 v_color;
in vec4 v_line_data;
in float v_segmentIndex;
in vec2 v_iconMapUV;

out vec4 outputColor;

#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_line_data.g; // 当前点位距离占线总长的比例
  outputColor = v_color;

  if(u_line_type == LineTypeDash) {
    float flag = 0.;
    float dashLength = mod(d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      flag = 1.;
    }
    outputColor.a *=flag;
  }

  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);

      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;

      // u_animate 
      // x enable
      // y duration
      // z interval
      // w trailLength
  }

  if(u_line_texture == LineTexture && u_line_type != LineTypeDash) { // while load texture
    // float arcRadio = smoothstep( 0.0, 1.0, (v_segmentIndex / segmentNumber));
    float arcRadio = v_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);

    float v = v_line_data.a;  // 线图层贴图部分的 v 坐标值
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
          discard;
        } else {
          outputColor = filterColor(pattern);
        }
    }

  } else {
    outputColor = filterColor(outputColor);
  }
}
`,TA=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0
layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 12) in vec4 a_Instance;
layout(location = 14) in vec2 a_iconMapUV;


layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};
out vec4 v_color;
out vec4 v_dash_array;
out float v_segmentIndex;
out vec2 v_iconMapUV;
out vec4 v_line_data;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps (float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return smoothstep(0.0, 1.0, index / (segmentNumber - 1.0));
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(
    mix(source, target, segmentRatio),
    sqrt(max(0.0, vertex_height))
  );
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;

  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  return reverse_offset_normal(vec3(dir_screenspace,1.0)).xy * sign(offset_direction);
}

float torad(float deg) {
  return (deg / 180.0) * acos(-1.0);
}

vec3 lglt2xyz(vec2 lnglat) {
  float pi = 3.1415926;
  // + Math.PI/2 是为了对齐坐标
  float lng = torad(lnglat.x) + pi / 2.0;
  float lat = torad(lnglat.y);

  // 手动增加一些偏移，减轻面的冲突
  float radius = u_globel_radius;

  float z = radius * cos(lat) * cos(lng);
  float x = radius * cos(lat) * sin(lng);
  float y = radius * sin(lat);
  return vec3(x, y, z);
}

void main() {
  //vs中计算渐变色
  if(u_linearColor==1.0){
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
  }
  else{
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;
  vec2 source = project_position(vec4(a_Instance.rg, 0, 0)).xy;
  vec2 target = project_position(vec4(a_Instance.ba, 0, 0)).xy;
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  float d_distance_ratio;
   if(u_line_type == LineTypeDash) {
    d_distance_ratio = segmentIndex / segmentNumber;
    vec2 s = source;
    vec2 t = target;
    
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
      s = unProjCustomCoord(source);
      t = unProjCustomCoord(target);
    }
    float total_Distance = pixelDistance(s, t) / 2.0 * PI;
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / (total_Distance / segmentNumber * segmentIndex);
  }
    if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
  }
  v_line_data.g = d_distance_ratio; // 当前点位距离占线总长的比例

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  vec3 curr = getPos(source, target, segmentRatio);
  vec3 next = getPos(source, target, nextSegmentRatio);
  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y);
  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);


  v_segmentIndex = a_Position.x;
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) { // 开启贴图模式  

    float arcDistrance = length(source - target);
    float pixelLen =  project_pixel_texture(u_icon_step);
    v_line_data.b = floor(arcDistrance/pixelLen); // 贴图在弧线上重复的数量

    vec2 projectOffset = project_pixel(offset);
    float lineOffsetWidth = length(projectOffset + projectOffset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size);  // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth/linePixelSize;  // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }


  gl_Position = project_common_position_to_clipspace_v2(vec4(curr.xy + project_pixel(offset), curr.z * thetaOffset, 1.0));

  // 地球模式
  if(u_globel > 0.0) {
    vec3 startLngLat = lglt2xyz(a_Instance.rg);
    vec3 endLngLat = lglt2xyz(a_Instance.ba);
    float globalRadius = length(startLngLat);

    vec3 lineDir = normalize(endLngLat - startLngLat);
    vec3 midPointDir = normalize((startLngLat + endLngLat)/2.0);

    // 线的偏移
    vec3 lnglatOffset = cross(lineDir, midPointDir) * a_Position.y;
    // 计算起始点和终止点的距离
    float lnglatLength = length(a_Instance.rg - a_Instance.ba)/50.0;
    // 计算飞线各个节点相应的高度
    float lineHeight = u_global_height * (-4.0*segmentRatio*segmentRatio + 4.0 * segmentRatio) * lnglatLength;
    // 地球点位
    vec3 globalPoint = normalize(mix(startLngLat, endLngLat, segmentRatio)) * (globalRadius + lineHeight) + lnglatOffset * a_Size;
    
    gl_Position = u_ViewProjectionMatrix * vec4(globalPoint, 1.0);
  }
 

  setPickingColor(a_PickingColor);
}
`,MA={solid:0,dash:1},Sd=function(e){be(r,e);var t=CA(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas()}),n.layer.render();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128}),n.textures=[n.texture]}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=i.globalArcHeight,x=y===void 0?10:y,b=this.layer.getLayerConfig(),k=b.animateOption;h.length===2&&h.push(0,0);var T=0,D=[0,0,0,0],U=[0,0,0,0];a&&o&&(D=qe(a),U=qe(o),T=1),this.rendererService.getDirty()&&this.texture.bind();var I={u_animate:this.animateOption2Array(k),u_dash_array:h,u_sourceColor:D,u_targetColor:U,u_textSize:[1024,this.iconService.canvasHeight||128],u_globel:this.mapService.version==="GLOBEL"?1:0,u_globel_radius:eg,u_global_height:x,segmentNumber:_,u_line_type:MA[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:T},w=this.getUniformsBufferInfo(I);return w}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:wA,vert:TA,type:""}}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=4,this.layer.buildLayerModel({moduleName:"lineArc3d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:Os,styleOption:{segmentNumber:s}});case 4:return d=p.sent,p.abrupt("return",[d]);case 6:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:_e.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et),Ed={circle:2,triangle:2,diamond:4,rect:2,classic:3,halfTriangle:2,none:0},Pt=1/2;function IA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?1:i;return{vertices:[0,Pt*e,1*e*n,-(a+Pt)*e,1*e*n,(a-Pt)*e,0,Pt*e,1*e*n,-(a+Pt)*e,1*e*n,(a-Pt)*e],indices:[3,4,5],outLineIndices:[0,1,2],normals:[1*e,-2*e,1,-2*e,1.5*e,1,1*e,1.5*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function kA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*e*n,1*a,1*e*n,-1*a,0,0,1*e*n,1*a,1*e*n,-1*a],outLineIndices:[0,1,2],indices:[3,4,5],normals:[0,-1.5*e,1,2,1*e,1,-2,1*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function LA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?2:i;return{vertices:[0,a/2,e*n*1,a/2,e*n*1,-a/2,0,-a/2,0,a/2,e*n*1,a/2,e*n*1,-a/2,0,-a/2],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function RA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*n*e,.5*a,2*n*e,0,1*n*e,-.5*a,0,0,1*n*e,.5*a,2*n*e,0,1*n*e,-.5*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function PA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,2*e*n,1*a,1.5*e*n,0,2*e*n,-1*a,0,0,2*e*n,1*a,1.5*e*n,0,2*e*n,-1*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function FA(e,t){var r=t.width,n=r===void 0?2:r,i=t.height,a=i===void 0?2:i,o=Hu(),u=Ot.flatten([o]),s=Ot(u.vertices,u.holes,u.dimensions),l=o.map(function(c){return[c[0]*n*e,c[1]*a]}).flat();return{vertices:[].concat(Q(l),Q(l)),dimensions:2,indices:s.map(function(c){return c+o.length}),outLineIndices:s,normals:[].concat(Q(o.map(function(c){return[c[1]*a,c[0]*n*e,1]}).flat()),Q(new Array(o.length*3).fill(0)))}}function OA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=hr(r.source)==="object"?r.source.type:r.source,i=hr(r.target)==="object"?r.target.type:r.target,a=hr(r.source)==="object"?r.source:{},o=a.width,u=o===void 0?n?Ed[n]:0:o;a.height;var s=hr(r.target)==="object"?r.target:{},l=s.width,c=l===void 0?i?Ed[i]:0:l;return s.height,{vertices:[0,Pt,1*u].concat(Q(e),[1,Pt,-1*c],Q(e),[1,-Pt,-1*c],Q(e),[0,-Pt,1*u],Q(e),[0,Pt,1*u],Q(e),[1,Pt,-1*c],Q(e),[1,-Pt,-1*c],Q(e),[0,-Pt,1*u],Q(e)),outLineIndices:[0,1,2,0,2,3].map(function(f){return f+t}),indices:[4,5,6,4,6,7].map(function(f){return f+t}),normals:[1,-1,1,1,1,1,-1,0,1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],dimensions:2}}function Cd(e,t){var r=hr(e)==="object"?e.type:e,n=t==="source"?1:-1,i=hr(e)==="object"?e:{};switch(r){case"circle":return FA(n,i);case"triangle":return kA(n,i);case"diamond":return RA(n,i);case"rect":return LA(n,i);case"classic":return PA(n,i);case"halfTriangle":return IA(n,i);default:return{vertices:[],indices:[],normals:[],dimensions:2,outLineIndices:[],outLineNormals:[]}}}function DA(e){var t=e.coordinates.flat(),r=1,n=1;return{vertices:[1,0,0].concat(Q(t),[1,2,-3],Q(t),[1,1,-3],Q(t),[0,1,0],Q(t),[0,0,0],Q(t),[1,0,0],Q(t),[1,2,-3],Q(t),[1,1,-3],Q(t),[0,1,0],Q(t),[0,0,0],Q(t)),normals:[-r,2*n,1,2*n,-n,1,n,-n,1,n,-n,1,-r,-n,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],indices:[0,1,2,0,2,3,0,3,4,5,6,7,5,7,8,5,8,9],size:7}}function NA(e,t){return t?BA(e,t):DA(e)}function BA(e,t){var r=e.coordinates.flat(),n=t,i=n.target,a=i===void 0?"classic":i,o=n.source,u=o===void 0?"circle":o,s=Ad(Cd(u,"source"),r,0,0),l=OA(r,s.vertices.length/7,t),c=Ad(Cd(a,"target"),r,1,s.vertices.length/7+l.vertices.length/7),f={vertices:[].concat(Q(s.vertices),Q(l.vertices),Q(c.vertices)),indices:[].concat(Q(s.outLineIndices),Q(l.outLineIndices),Q(c.outLineIndices),Q(s.indices),Q(l.indices),Q(c.indices)),normals:[].concat(Q(s.normals),Q(l.normals),Q(c.normals)),size:7};return f}function Ad(e,t){for(var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=[],a=e.vertices,o=e.indices,u=e.dimensions,s=e.outLineIndices,l=0;l<a.length;l+=u)i.push.apply(i,[r,a[l+1],a[l]].concat(Q(t)));return z(z({},e),{},{vertices:i,indices:o.map(function(c){return c+n}),outLineIndices:s.map(function(c){return c+n})})}function UA(e){var t=zA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function zA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var $A=`// #extension GL_OES_standard_derivatives : enable

in vec4 v_color;
out vec4 outputColor;


// line texture

#pragma include "picking"

void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,VA=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec2 a_Size;
layout(location = 12) in vec4 a_Instance;
layout(location = 13) in vec3 a_Normal;

layout(std140) uniform commonUniorm {
  float u_gap_width: 1.0;
  float u_stroke_width: 1.0;
  float u_stroke_opacity: 1.0;
};

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

out vec4 v_color;

vec2 project_pixel_offset(vec2 offsets) {

   vec2 data = project_pixel(offsets);
   if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
    return data;
  }

  return vec2(data.x, -data.y);;
}

vec2 line_dir(vec2 target, vec2 source) {

   if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
     return normalize(target - source);
  }
  return normalize(ProjectFlat(target) - ProjectFlat(source));
}

float flag_gap() {
   if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
     return 1.;
  }
  return -1.;

}


void main() {

// 透明度计算
  vec2 source = a_Instance.rg;  // 起始点
  vec2 target =  a_Instance.ba; // 终点
  vec2 flowlineDir = line_dir(target,source);
  vec2 perpendicularDir = vec2(-flowlineDir.y, flowlineDir.x); // mapbox || 高德
   
  vec2 position = mix(source, target, a_Position.x);
  
  float lengthCommon = length(project_position(vec4(target,0,1)) - project_position(vec4(source,0,1)));  //    
  vec2 offsetDistances = a_Size.x * project_pixel_offset(vec2(a_Position.y, a_Position.z)); // Mapbox || 高德
  vec2 limitedOffsetDistances = clamp(   
   offsetDistances,
   project_pixel(-lengthCommon*.2), project_pixel(lengthCommon*.2)
  );


  float startOffsetCommon = project_pixel(offsets[0]);
  float endOffsetCommon = project_pixel(offsets[1]);
  float endpointOffset = mix(
    clamp(startOffsetCommon, 0.0, lengthCommon*.2),
    -clamp(endOffsetCommon, 0.0, lengthCommon*.2),
    a_Position.x
  );

  vec2 normalsCommon =  u_stroke_width * project_pixel_offset(vec2(a_Normal.x, a_Normal.y)); // mapbox || 高德

  float gapCommon = flag_gap() * project_pixel(u_gap_width);
  vec3 offsetCommon = vec3(
    flowlineDir * (limitedOffsetDistances[1] + normalsCommon.y + endpointOffset * 1.05) -
    perpendicularDir *  (limitedOffsetDistances[0] + gapCommon + normalsCommon.x),
    0.0
  );

  vec4 project_pos = project_position(vec4(position.xy, 0, 1.0));

  vec4 fillColor = vec4(a_Color.rgb, a_Color.a * opacity);
  v_color = mix(fillColor, vec4(u_stroke.xyz, u_stroke.w * fillColor.w * u_stroke_opacity), a_Normal.z);

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy +  offsetCommon.xy, 0., 1.0));



  setPickingColor(a_PickingColor);
}
`,jA=function(e){be(r,e);var t=UA(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.gapWidth,o=a===void 0?2:a,u=i.strokeWidth,s=u===void 0?1:u,l=i.strokeOpacity,c=l===void 0?1:l,f={u_gap_width:o,u_stroke_width:s,u_stroke_opacity:c},h=this.getUniformsBufferInfo(f);return h}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"flow_line",vertexShader:VA,fragmentShader:$A,inject:this.getInject(),triangulation:NA,styleOption:this.layer.getLayerConfig().symbol,primitive:L.TRIANGLES,depth:{enable:!1},pick:!1});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0],u[1]]:[u,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:_e.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(a,o,u){return[u[3],u[4],u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}})}}]),r}(et);function HA(e){var t=GA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function GA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var WA=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

in vec4 v_line_data;
in vec2 v_iconMapUV;
in vec4 v_dash_array;
in float v_distance_ratio;
in vec4 v_color;

out vec4 outputColor;
#pragma include "picking"
#pragma include "project"
#pragma include "projection"

void main() {

  float animateSpeed = 0.0;
  float d_segmentIndex = v_line_data.g;
  
  // 设置弧线的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
    outputColor = v_color;
  }

  // float blur = 1.- smoothstep(u_blur, 1., length(v_normal.xy));
  // float blur = smoothstep(1.0, u_blur, length(v_normal.xy));
  if(u_line_type == LineTypeDash) {
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      // 实线部分
    } else {
      // 虚线部分
      discard;
    };
  }

  // 设置弧线的动画模式
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  // 设置弧线的贴图
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) { 
    float arcRadio = smoothstep( 0.0, 1.0, (d_segmentIndex / (segmentNumber - 1.0)));
    // float arcRadio = d_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // 贴图在弧线上重复的数量
    float u = fract(arcRadio * count - animateSpeed * count);
    // float u = fract(arcRadio * count - animateSpeed);
    if(u_animate.x == Animate) {
      u = outputColor.a/v_color.a;
    }

    float v = v_line_data.a; // 线图层贴图部分的 v 坐标值

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);
    
    // 设置贴图和底色的叠加模式
    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  } else {
    outputColor = filterColor(outputColor);
  }

  // gl_FragColor = filterColor(gl_FragColor);
}`,YA=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 12) in vec4 a_Instance;
layout(location = 14) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

out vec4 v_dash_array;
out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_line_data;
out float v_distance_ratio;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps (float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return index / (segmentNumber - 1.);
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(
  mix(source, target, segmentRatio),
  sqrt(max(0.0, vertex_height))
  );
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size)/ 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
   return reverse_offset_normal(vec3(dir_screenspace,1.0)).xy * sign(offset_direction);
}
float getAngularDist (vec2 source, vec2 target) {
  vec2 delta = source - target;
  vec2 sin_half_delta = sin(delta / 2.0);
  float a =
    sin_half_delta.y * sin_half_delta.y +
    cos(source.y) * cos(target.y) *
    sin_half_delta.x * sin_half_delta.x;
  return 2.0 * atan(sqrt(a), sqrt(1.0 - a));
}

vec2 midPoint(vec2 source, vec2 target) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = 0.314;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2*cos(theta2) + source.x, r2*sin(theta2) + source.y);
  return mid;
}
float bezier3(vec3 arr, float t) {
  float ut = 1. - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}

vec2 interpolate (vec2 source, vec2 target, float angularDist, float t) {
  // if the angularDist is PI, linear interpolation is applied. otherwise, use spherical interpolation
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    vec2 mid = midPoint(source, target);
    vec3 x = vec3(source.x, mid.x, target.x);
    vec3 y = vec3(source.y, mid.y, target.y);
    return vec2(bezier3(x ,t), bezier3(y,t));
  }
  else {
    if(abs(angularDist - PI) < 0.001) {
      return (1.0 - t) * source + t * target;
    }
    float a = sin((1.0 - t) * angularDist) / sin(angularDist);
    float b = sin(t * angularDist) / sin(angularDist);
    vec2 sin_source = sin(source);
    vec2 cos_source = cos(source);
    vec2 sin_target = sin(target);
    vec2 cos_target = cos(target);
    float x = a * cos_source.y * cos_source.x + b * cos_target.y * cos_target.x;
    float y = a * cos_source.y * sin_source.x + b * cos_target.y * sin_target.x;
    float z = a * sin_source.y + b * sin_target.y;
    return vec2(atan(y, x), atan(z, sqrt(x * x + y * y)));
  }
}

void main() {
  v_color = a_Color;
  v_color.a = v_color.a * opacity;
  vec2 source = radians(a_Instance.rg);
  vec2 target = radians(a_Instance.ba);
  float angularDist = getAngularDist(source, target);
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  if(u_line_type == LineTypeDash) {
    v_distance_ratio = segmentIndex / segmentNumber;
    vec2 s = source;
    vec2 t = target;
    
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
      s = unProjCustomCoord(source);
      t = unProjCustomCoord(target);
    }
    float total_Distance = pixelDistance(s, t) / 2.0 * PI;
    total_Distance = total_Distance*16.0; // total_Distance*16.0 调整默认的效果
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  }

  if(u_animate.x == Animate) {
      v_distance_ratio = segmentIndex / segmentNumber;
  }

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  v_distance_ratio = segmentIndex / segmentNumber;
  vec4 curr = project_position(vec4(degrees(interpolate(source, target, angularDist, segmentRatio)), 0.0, 1.0));
  vec4 next = project_position(vec4(degrees(interpolate(source, target, angularDist, nextSegmentRatio)), 0.0, 1.0));
  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);
  vec2 offset = project_pixel(getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y));
  //  vec4 project_pos = project_position(vec4(curr.xy, 0, 1.0));
  // gl_Position = project_common_position_to_clipspace(vec4(curr.xy + offset, curr.z, 1.0));

  v_line_data.g = a_Position.x; // 该顶点在弧线上的分段排序
  if(LineTexture == u_line_texture) { // 开启贴图模式  
    // float mapZoomScale = u_CoordinateSystem !== COORDINATE_SYSTEM_P20_2?10000000.0:1.0;
    float d_arcDistrance = length(source - target);
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20) { // amap
      d_arcDistrance = d_arcDistrance * 1000000.0;
    }
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) { // mapbox
      d_arcDistrance = project_pixel_allmap(d_arcDistrance);
    }
    float d_pixelLen = project_pixel(u_icon_step)/8.0;
    v_line_data.b = floor(d_arcDistrance/d_pixelLen); // 贴图在弧线上重复的数量

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size);  // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth/linePixelSize;  // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(curr.xy + offset, 0, 1.0));
  setPickingColor(a_PickingColor);
}

`,XA={solid:0,dash:1},ZA=function(e){be(r,e);var t=HA(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas()}),n.layer.render();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128}),n.textures=[n.texture]}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=this.layer.getLayerConfig(),x=y.animateOption;h.length===2&&h.push(0,0),this.rendererService.getDirty()&&this.texture.bind();var b=0,k=[0,0,0,0],T=[0,0,0,0];a&&o&&(k=qe(a),T=qe(o),b=1);var D=this.layer.getLayerAnimateTime();isNaN(D)&&(D=0);var U={u_animate:this.animateOption2Array(x),u_dash_array:h,u_sourceColor:k,u_targetColor:T,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:_,u_line_type:XA[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:D,u_linearColor:b},I=this.getUniformsBufferInfo(U);return I}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,f.next=3,this.layer.buildLayerModel({moduleName:"lineGreatCircle",vertexShader:YA,fragmentShader:WA,triangulation:Os,styleOption:{segmentNumber:s},inject:this.getInject(),depth:{enable:!1}});case 3:return l=f.sent,f.abrupt("return",[l]);case 5:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:_e.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et);function qA(e){var t=KA();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function KA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var QA=`// #extension GL_OES_standard_derivatives : enable
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};

in vec4 v_color;
in vec4 v_stroke;
// dash
in vec4 v_dash_array;
in float v_d_distance_ratio;
in vec2 v_iconMapUV;
in vec4 v_texture_data;

out vec4 outputColor;
#pragma include "picking"

// [animate, duration, interval, trailLength],
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_texture_data.r; // 当前点位距离占线总长的比例
  if(u_linearDir < 1.0) {
    d_distance_ratio = v_texture_data.a;
  }
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_distance_ratio);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }
  // anti-alias
  // float blur = 1.0 - smoothstep(u_blur, 1., length(v_normal.xy));
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_texture_data.g;      // 当前顶点的距离
    float d_texPixelLen = v_texture_data.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_texture_data.a;  // 线图层贴图部分的 v 坐标值

    // v = max(smoothstep(0.95, 1.0, v), v);
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
     vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor += pattern;
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = pattern;
    }
  } 

  float v = v_texture_data.a;
  float strokeWidth = min(0.5, u_strokeWidth);
  // 绘制 border
  if(strokeWidth > 0.01) {
    float borderOuterWidth = strokeWidth / 2.0;


    if(v >= 1.0 - strokeWidth || v <= strokeWidth) {
      if(v > strokeWidth) { // 外侧
        float linear = smoothstep(0.0, 1.0, (v - (1.0 - strokeWidth))/strokeWidth);
        //  float linear = step(0.0, (v - (1.0 - borderWidth))/borderWidth);
        outputColor.rgb = mix(outputColor.rgb, v_stroke.rgb, linear);
      } else if(v <= strokeWidth) {
        float linear = smoothstep(0.0, 1.0, v/strokeWidth);
        outputColor.rgb = mix(v_stroke.rgb, outputColor.rgb, linear);
      }
    }

    if(v < borderOuterWidth) {
      outputColor.a = mix(0.0, outputColor.a, v/borderOuterWidth);
    } else if(v > 1.0 - borderOuterWidth) {
      outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - borderOuterWidth))/borderOuterWidth);
    }
  }

  // blur
  float blurV = v_texture_data.a;
  if(blurV < 0.5) {
    outputColor.a *= mix(u_blur.r, u_blur.g, blurV/0.5);
  } else {
    outputColor.a *= mix(u_blur.g, u_blur.b, (blurV - 0.5)/0.5);
  }
  
  outputColor = filterColor(outputColor);
}
`,JA=`
#define Animate 0.0

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec2 a_Size;
layout(location = 10) in vec3 a_DistanceAndIndexAndMiter;
layout(location = 13) in vec4 a_Normal_Total_Distance;
layout(location = 14) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};


out vec4 v_color;
out vec4 v_stroke;
//dash
out vec4 v_dash_array;
out float v_d_distance_ratio;
// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_texture_data;

#pragma include "projection"
#pragma include "picking"

void main() {
  vec2 a_DistanceAndIndex = a_DistanceAndIndexAndMiter.xy;
  float a_Miter = a_DistanceAndIndexAndMiter.z;
  vec3 a_Normal = a_Normal_Total_Distance.xyz;
  float a_Total_Distance = a_Normal_Total_Distance.w;
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_Total_Distance;
  v_d_distance_ratio = a_DistanceAndIndex.x / a_Total_Distance;

  // cal style mapping - 数据纹理映射部分的计算
  float d_texPixelLen;    // 贴图的像素长度，根据地图层级缩放
  v_iconMapUV = a_iconMapUV;
  d_texPixelLen = project_float_pixel(u_icon_step);
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    d_texPixelLen *= 10.0;
  }

  v_color = a_Color;
  v_color.a *= opacity;
  v_stroke = stroke;

  vec3 size = a_Miter * setPickingSize(a_Size.x) * reverse_offset_normal(a_Normal);
  
  vec2 offset = project_pixel(size.xy);

  float lineDistance = a_DistanceAndIndex.x;
  float currentLinePointRatio = lineDistance / a_Total_Distance;
 

  float lineOffsetWidth = length(offset + offset * sign(a_Miter)); // 线横向偏移的距离（向两侧偏移的和）
  float linePixelSize = project_pixel(a_Size.x) * 2.0;  // 定点位置偏移，按地图等级缩放后的距离 单侧 * 2
  float texV = lineOffsetWidth/linePixelSize; // 线图层贴图部分的 v 坐标值
  
  v_texture_data = vec4(currentLinePointRatio, lineDistance, d_texPixelLen, texV);
  // 设置数据集的参数

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0));

  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, a_Size.y, 1.0));

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况 vertex height
  float lineHeight = a_Size.y; // size 第二个参数代表的高度 [linewidth, lineheight]

  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    lineHeight *= 0.2; // 保持和 amap/mapbox 一致的效果
    h *= 0.2;
    if(u_heightfixed < 1.0) {
      lineHeight = project_pixel(a_Size.y);
    }
    gl_Position = u_Mvp * (vec4(project_pos.xy + offset, lineHeight + h + u_raisingHeight, 1.0));
  } else {
    // mapbox -  amap
    
    // 兼容 mapbox 在线高度上的效果表现基本一致
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      // mapbox
      // 保持高度相对不变
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      h *= mapboxZoomScale;
      h += u_raisingHeight * mapboxZoomScale;
      if(u_heightfixed > 0.0) {
        lineHeight *= mapboxZoomScale;
      }
      
    } else {
      // amap
      h += u_raisingHeight;
      // lineHeight 顶点偏移高度
      if(u_heightfixed < 1.0) {
        lineHeight *= pow(2.0, 20.0 - u_Zoom);
      }
    }

    gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, lineHeight + h, 1.0));
  }

  setPickingColor(a_PickingColor);
}
`,ag=function(e){be(r,e);var t=qA(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"textureEventFlag",!1),S(R(n),"texture",n.createTexture2D({data:new Uint8Array([0,0,0,0]),width:1,height:1})),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.textures.length===0&&(n.textures=[n.texture]),n.texture){n.texture.update({data:n.iconService.getCanvas()}),n.layer.render();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128})}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5,0,0]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.vertexHeightScale,_=m===void 0?20:m,y=i.strokeWidth,x=y===void 0?0:y,b=i.raisingHeight,k=b===void 0?0:b,T=i.heightfixed,D=T===void 0?!1:T,U=i.linearDir,I=U===void 0?dd.VERTICAL:U,w=i.blur,M=w===void 0?[1,1,1,0]:w,P=h;c!=="dash"&&(P=[0,0,0,0]),P.length===2&&P.push(0,0),this.rendererService.getDirty()&&this.texture&&this.texture.bind();var B=this.layer.getLayerConfig(),J=B.animateOption,se=0,ce=[0,0,0,0],pe=[0,0,0,0];a&&o&&(ce=qe(a),pe=qe(o),se=1);var H={u_animate:this.animateOption2Array(J),u_dash_array:P,u_blur:M,u_sourceColor:ce,u_targetColor:pe,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:g,u_heightfixed:Number(D),u_vertexScale:_,u_raisingHeight:Number(k),u_strokeWidth:x,u_textureBlend:s===ZC.NORMAL?0:1,u_line_texture:v?1:0,u_linearDir:I===dd.VERTICAL?1:0,u_linearColor:se,u_time:this.layer.getLayerAnimateTime()||0},V=this.getUniformsBufferInfo(H);return V}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.textureEventFlag||(this.textureEventFlag=!0,this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture)),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!1:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=_u,p.next=5,this.layer.buildLayerModel({moduleName:"line"+h,vertexShader:f,fragmentShader:c,triangulation:_u,inject:this.getInject(),depth:{enable:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:QA,vert:JA,type:""}}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distanceAndIndex",type:_e.Attribute,descriptor:{name:"a_DistanceAndIndexAndMiter",shaderLocation:10,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l,c,f){return f===void 0?[s[3],10,s[4]]:[s[3],f,s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal_total_distance",type:_e.Attribute,descriptor:{name:"a_Normal_Total_Distance",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s,l,c){return[].concat(Q(c),[s[5]])}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et);function ew(e){var t=tw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function tw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var rw=`
layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};
in float v_distanceScale;
in vec4 v_color;
//dash
in vec4 v_dash_array;

out vec4 outputColor;
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distanceScale, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  if(u_linearColor==1.0){
    outputColor = mix(u_sourceColor, u_targetColor, v_distanceScale);
    outputColor.a *= v_color.a; // 全局透明度
  }
  else{
    outputColor = v_color;
  }
}
`,nw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec4 a_SizeDistanceAndTotalDistance;

layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};

#pragma include "projection"
#pragma include "picking"

out vec4 v_color;
out float v_distanceScale;
out vec4 v_dash_array;

void main() {
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_SizeDistanceAndTotalDistance.a;

  v_color = a_Color; 
  v_distanceScale = a_SizeDistanceAndTotalDistance.b / a_SizeDistanceAndTotalDistance.a;
  v_color.a = v_color.a * opacity;
  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0));

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况

  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    gl_Position = u_Mvp * (vec4(project_pos.xy, project_pixel(a_SizeDistanceAndTotalDistance.y) + h * 0.2, 1.0));
  } else {
    float lineHeight = a_SizeDistanceAndTotalDistance.y;
    // 兼容 mapbox 在线高度上的效果表现基本一致
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      // 保持高度相对不变
      h *= 2.0/pow(2.0, 20.0 - u_Zoom);
    }

    // amap1.x
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
      // 保持高度相对不变
      lineHeight *= pow(2.0, 20.0 - u_Zoom);
    }

    gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, lineHeight + h, 1.0));
    gl_PointSize = 10.0;
  }
}
`,iw=function(e){be(r,e);var t=ew(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.lineType,s=u===void 0?"solid":u,l=i.dashArray,c=l===void 0?[10,5,0,0]:l,f=i.vertexHeightScale,h=f===void 0?20:f,d=c;s!=="dash"&&(d=[0,0,0,0]),d.length===2&&d.push(0,0);var v=0,p=[0,0,0,0],g=[0,0,0,0];a&&o&&(p=qe(a),g=qe(o),v=1);var m={u_sourceColor:p,u_targetColor:g,u_dash_array:d,u_vertexScale:h,u_linearColor:v},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:rw,vert:nw,type:"lineSimpleNormal"}}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return this.initUniformsBuffer(),o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,triangulation:rA,inject:this.getInject(),primitive:L.LINES,depth:{enable:!1},pick:!1});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"sizeDistanceAndTotalDistance",type:_e.Attribute,descriptor:{name:"a_SizeDistanceAndTotalDistance",shaderLocation:we.SIZE,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(a,o,u){var s=a.size,l=s===void 0?1:s,c=Array.isArray(l)?[l[0],l[1]]:[l,0];return[c[0],c[1],u[3],u[5]]}}})}}]),r}(et);function aw(e){var t=ow();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function ow(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var uw=`#define Animate 0.0
#define LineTexture 1.0

// line texture

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};
in vec2 v_iconMapUV;
in float v_blur;
in float v_radio;
in vec4 v_color;
in vec4 v_dataset;

out vec4 outputColor;
#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_dataset.r; // 当前点位距离占线总长的比例
  float v = v_dataset.a;

  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, v);
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }

  outputColor.a *= v_color.a; // 全局透明度
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_dataset.g;      // 当前顶点的距离
    float d_texPixelLen = v_dataset.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_dataset.a;  // 线图层贴图部分的 v 坐标值

    // 计算纹理间隔 start
    float flag = 0.0;
    if(u > 1.0/u_iconStepCount) {
      flag = 1.0;
    }
    u = fract(u*u_iconStepCount);
    // 计算纹理间隔 end

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    // Tip: 判断纹理间隔
    if(flag > 0.0) {
      pattern = vec4(0.0);
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  }
  

  // blur - AA
  if(v < v_blur) {
    outputColor.a = mix(0.0, outputColor.a, v/v_blur);
  } else if(v > 1.0 - v_blur) {
    outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - v_blur))/v_blur);
  }

  outputColor = filterColor(outputColor);
}
`,sw=`#define Animate 0.0
layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec2 a_Size;
layout(location = 10) in float a_Miter;
layout(location = 11) in float a_Total_Distance;
layout(location = 12) in vec4 a_Instance;
layout(location = 13) in vec3 a_Normal;
layout(location = 14) in vec2 a_iconMapUV;
layout(location = 15) in float a_Distance;


layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};
#pragma include "projection"
#pragma include "light"
#pragma include "picking"

// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_color;
out float v_blur;
out float v_radio;
out vec4 v_dataset;

void main() {


  float d_distance_ratio; // 当前点位距离占线总长的比例
  float d_texPixelLen;    // 贴图的像素长度，根据地图层级缩放

  v_iconMapUV = a_iconMapUV;
  if(u_heightfixed < 1.0) {     // 高度随 zoom 调整
    d_texPixelLen = project_pixel(u_icon_step);
  } else {
    d_texPixelLen = u_icon_step;
  }
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
    d_texPixelLen *= 10.0;
  }

  if(u_animate.x == Animate || u_linearColor == 1.0) {
      d_distance_ratio = a_Distance / a_Total_Distance;
  }

  float miter = (a_Miter + 1.0)/2.0;
  // 设置数据集的参数
  v_dataset[0] = d_distance_ratio; // 当前点位距离占线总长的比例
  v_dataset[1] = a_Distance;       // 当前顶点的距离
  v_dataset[2] = d_texPixelLen;    // 贴图的像素长度，根据地图层级缩放
  v_dataset[3] = miter;          // 线图层贴图部分的 v 坐标值 0 - 1

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0));

  float originSize = a_Size.x;  // 固定高度
  if(u_heightfixed < 1.0) {    
     originSize = project_float_meter(a_Size.x); // 高度随 zoom 调整
  }


  float wallHeight = originSize * miter;
  float lightWeight = calc_lighting(vec4(project_pos.xy, wallHeight, 1.0));

  v_blur = min(project_float_pixel(2.0) / originSize, 0.05);
  v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    gl_Position = u_Mvp * (vec4(project_pos.xy, wallHeight, 1.0));
  } else {
    gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, wallHeight, 1.0));
  }

  setPickingColor(a_PickingColor);
}
`,lw=function(e){be(r,e);var t=aw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas()}),n.layer.render();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128}),n.textures=[n.texture]}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.heightfixed,c=l===void 0?!1:l,f=i.lineTexture,h=f===void 0?!1:f,d=i.iconStep,v=d===void 0?100:d,p=i.iconStepCount,g=p===void 0?1:p,m=this.layer.getLayerConfig(),_=m.animateOption;this.rendererService.getDirty()&&this.texture.bind();var y=0,x=[0,0,0,0],b=[0,0,0,0];a&&o&&(x=qe(a),b=qe(o),y=1);var k={u_animate:this.animateOption2Array(_),u_sourceColor:x,u_targetColor:b,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:v,u_heightfixed:Number(c),u_linearColor:y,u_line_texture:h?1:0,u_textureBlend:s==="normal"?0:1,u_iconStepCount:g,u_time:this.layer.getLayerAnimateTime()||0},T=this.getUniformsBufferInfo(k);return T}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"lineWall",vertexShader:sw,fragmentShader:uw,triangulation:tA,inject:this.getInject(),depth:{enable:!1},blend:this.getBlend()});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distance",type:_e.Attribute,descriptor:{name:"a_Distance",shaderLocation:15,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[3]]}}}),this.styleAttributeService.registerStyleAttribute({name:"total_distance",type:_e.Attribute,descriptor:{name:"a_Total_Distance",shaderLocation:11,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[5]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l,c){return c}}}),this.styleAttributeService.registerStyleAttribute({name:"miter",type:_e.Attribute,descriptor:{name:"a_Miter",shaderLocation:10,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et),cw={arc:EA,arc3d:Sd,greatcircle:ZA,wall:lw,line:ag,simple:iw,flowline:jA,earthArc3d:Sd};function fw(e){var t=hw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function hw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var og=function(e){be(r,e);var t=fw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","LineLayer"),S(R(n),"enableShaderEncodeStyles",["stroke","offsets","opacity","thetaOffset"]),S(R(n),"arrowInsertCount",0),S(R(n),"defaultSourceConfig",{data:[{lng1:100,lat1:30,lng2:130,lat2:30}],options:{parser:{type:"json",x:"lng1",y:"lat1",x1:"lng2",y1:"lat2"}}}),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new cw[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={line:{},linearline:{},simple:{},wall:{},arc3d:{blend:"additive"},arc:{blend:"additive"},greatcircle:{blend:"additive"},tileLine:{},earthArc3d:{},flowline:{},arrow:{}};return a[i]}},{key:"getModelType",value:function(){var i;if(this.layerType)return this.layerType;var a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o||"line"}},{key:"processData",value:function(i){if(this.getModelType()!=="simple")return i;var a=[];return i.map(function(o){if(Array.isArray(o.coordinates)&&Array.isArray(o.coordinates[0])&&Array.isArray(o.coordinates[0][0])){var u=z({},o);o.coordinates.map(function(s){a.push(z(z({},u),{},{coordinates:s}))})}else a.push(o)}),a}}]),r}(Un);function dw(e){var t=vw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function vw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var pw=`
layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

in vec4 v_color;
in float v_blur;
in float v_innerRadius;

out vec4 outputColor;

#pragma include "picking"
void main() {
  vec2 center = vec2(0.5);

  // Tip: 片元到中心点的距离 0 - 1
  float fragmengTocenter = distance(center, gl_PointCoord) * 2.0;
  // Tip: 片元的剪切成圆形
  float circleClipOpacity = 1.0 - smoothstep(v_blur, 1.0, fragmengTocenter);


  if(v_innerRadius < 0.99) {
    // 当存在 stroke 且 stroke > 0.01
    float blurWidth = (1.0 - v_blur)/2.0;
    vec4 stroke = vec4(u_stroke_color.rgb, u_stroke_opacity);
    if(fragmengTocenter > v_innerRadius + blurWidth) {
      outputColor = stroke;
    } else if(fragmengTocenter > v_innerRadius - blurWidth){
      float mixR = (fragmengTocenter - (v_innerRadius - blurWidth)) / (blurWidth * 2.0);
      outputColor = mix(v_color, stroke, mixR);
    } else {
      outputColor = v_color;
    }
  } else {
    // 当不存在 stroke 或 stroke <= 0.01
    outputColor = v_color;
  }

  outputColor = filterColor(outputColor);
  
  if(u_additive > 0.0) {
    outputColor *= circleClipOpacity;
  } else {
    outputColor.a *= circleClipOpacity;
  }

}
`,gw=`
layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;

layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

out vec4 v_color;
out float v_blur;
out float v_innerRadius;

#pragma include "projection"
#pragma include "picking"
#pragma include "project"
void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_blur = 1.0 - max(2.0/a_Size, 0.05);
  v_innerRadius = max((a_Size - u_stroke_width) / a_Size, 0.0);
  
  vec2 offset = project_pixel(u_offsets);
  
  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    gl_Position = u_Mvp * vec4(a_Position.xy + offset, a_Position.z, 1.0);
  } else { // else
    vec4 project_pos = project_position(vec4(a_Position, 1.0)) + vec4(a_Size / 2.,-a_Size /2.,0.,0.);
    gl_Position = project_common_position_to_clipspace(vec4(vec2(project_pos.xy+offset),project_pos.z,project_pos.w));
  }
  
  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;
  setPickingColor(a_PickingColor);
}
`;function wd(e){var t=e.coordinates;return{vertices:Q(t),indices:[0],size:t.length}}var mw=function(e){be(r,e);var t=dw(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.strokeOpacity,u=o===void 0?1:o,s=i.strokeWidth,l=s===void 0?0:s,c=i.stroke,f=c===void 0?"#fff":c,h={u_stroke_color:qe(f),u_additive:a==="additive"?1:0,u_stroke_opacity:u,u_stroke_width:l},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=wd,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointSimple",vertexShader:gw,fragmentShader:pw,inject:this.getInject(),triangulation:wd,depth:{enable:!1},primitive:L.POINTS});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),r}(et);function yw(e){var t=_w();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function _w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var xw=`precision highp float;
in vec4 v_color;

#pragma include "picking"

layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};
in float v_lightWeight;
in float v_barLinearZ;
out vec4 outputColor;
void main() {

   outputColor = v_color;

  // 开启透明度渐变
  if(u_opacitylinear > 0.0) {
    outputColor.a *= u_opacitylinear_dir > 0.0 ? (1.0 - v_barLinearZ): v_barLinearZ;
  }

  // picking
  if(u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,bw=`precision highp float;

#define pi 3.1415926535
#define ambientRatio 0.5
#define diffuseRatio 0.3
#define specularRatio 0.2


layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec3 a_Size;
layout(location = 11) in vec3 a_Pos;
layout(location = 13) in vec3 a_Normal;


layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};

out vec4 v_color;
out float v_lightWeight;
out float v_barLinearZ;
// 用于将在顶点着色器中计算好的样式值传递给片元


#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if(x > 0.0 && z > 0.0) {
    return atan(x/z);
  } else if(x > 0.0 && z <= 0.0){
    return atan(-z/x) + pi/2.0;
  } else if(x <= 0.0 && z <= 0.0) {
    return  pi + atan(x/z); //atan(x/z) + 
  } else {
    return atan(z/-x) + pi*3.0/2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y/r);
}

void main() {

  // cal style mapping - 数据纹理映射部分的计算
  vec3 size = a_Size * a_Position;

  // a_Position.z 是在构建网格的时候传入的标准值 0 - 1，在插值器插值可以获取 0～1 线性渐变的值
  v_barLinearZ =  a_Position.z;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移
  if(u_heightfixed < 1.0) { // 圆柱体不固定高度
    
    if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
      // P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
      offset = offset * pow(2.0, (19.0 - u_Zoom));
    }
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
      // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
      offset = offset * pow(2.0, (19.0 - 3.0 - u_Zoom));
    }
  } else {// 圆柱体固定高度 （ 处理 mapbox ）
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      offset *= 4.0/pow(2.0, 21.0 - u_Zoom);
    }
  }


  vec4 project_pos = project_position(vec4(a_Pos.xy, 0., 1.0));

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // 圆柱光照效果
  float lightWeight = 1.0;
  if(u_lightEnable > 0.0) { // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }
  v_lightWeight = lightWeight;
  // 设置圆柱的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, v_barLinearZ);
    v_color.rgb *= lightWeight;
  } else { // 使用 color 方法传入的颜色
     v_color = a_Color;
  }
  v_color.a *= u_opacity;

    
  // 在地球模式下，将原本垂直于 xy 平面的圆柱调整姿态到适应圆的角度
  //旋转矩阵mx，创建绕x轴旋转矩阵
  float r = sqrt(a_Pos.z*a_Pos.z + a_Pos.x*a_Pos.x);
  float xRadian = getXRadian(a_Pos.y, r);
  float xcos = cos(xRadian);//求解旋转角度余弦值
  float xsin = sin(xRadian);//求解旋转角度正弦值
  mat4 mx = mat4(
    1,0,0,0,  
    0,xcos,-xsin,0,  
    0,xsin,xcos,0,  
    0,0,0,1);

  //旋转矩阵my，创建绕y轴旋转矩阵
  float yRadian = getYRadian(a_Pos.x, a_Pos.z);
  float ycos = cos(yRadian);//求解旋转角度余弦值
  float ysin = sin(yRadian);//求解旋转角度正弦值
  mat4 my = mat4(
    ycos,0,-ysin,0,  
    0,1,0,0,  
    ysin,0,ycos,0,  
    0,0,0,1);

  gl_Position = u_ViewProjectionMatrix * vec4(( my * mx *  vec4(a_Position * a_Size, 1.0)).xyz + a_Pos, 1.0);
  

  setPickingColor(a_PickingColor);
}
`,Sw=Ze.isNumber,Ew=function(e){be(r,e);var t=yw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"raiseCount",0),S(R(n),"raiseRepeat",0),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.opacity,s=u===void 0?1:u,l=i.sourceColor,c=i.targetColor,f=i.pickLight,h=f===void 0?!1:f,d=i.heightfixed,v=d===void 0?!0:d,p=i.opacityLinear,g=p===void 0?{enable:!1,dir:"up"}:p,m=i.lightEnable,_=m===void 0?!0:m,y=0,x=[0,0,0,0],b=[0,0,0,0];if(l&&c&&(x=qe(l),b=qe(c),y=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var k=o.speed,T=k===void 0?.01:k;this.raiseCount+=T,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var D={u_sourceColor:x,u_targetColor:b,u_linearColor:y,u_pickLight:Number(h),u_heightfixed:Number(v),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_opacity:Sw(s)?s:1,u_opacitylinear:Number(g.enable),u_opacitylinear_dir:g.dir==="up"?1:0,u_lightEnable:Number(_)},U=this.getUniformsBufferInfo(D);return U}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption.repeat,s=u===void 0?1:u,this.raiseRepeat=s,f.next=4,this.layer.buildLayerModel({moduleName:"pointEarthExtrude",vertexShader:bw,fragmentShader:xw,triangulation:ng,depth:{enable:!0},inject:this.getInject(),cull:{enable:!0,face:fs(this.mapService.version)},blend:this.getBlend()});case 4:return l=f.sent,f.abrupt("return",[l]);case 6:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:_e.Attribute,descriptor:{name:"a_Pos",shaderLocation:15,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=vr(a.coordinates);return tg([o[0],o[1]])}}})}}]),r}(et);function Cw(e){var t=Aw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Aw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ww=`in vec4 v_data;
in vec4 v_color;
in float v_radius;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));

  vec4 strokeColor = u_stroke == vec4(0.0) ? v_color : u_stroke;

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  if(outer_df > antialiasblur + 0.018) discard;

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(
    antialiasblur,
    0.0,
    inner_df
  );

  if(u_stroke_width < 0.01) {
    outputColor = vec4(v_color.rgb, v_color.a * u_opacity);
  } else {
    outputColor = mix(vec4(v_color.rgb, v_color.a * u_opacity), strokeColor * u_stroke_opacity, color_t);
  }

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor = filterColor(outputColor);
  }
}
`,Tw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 10) in float a_Shape;
layout(location = 11) in vec3 a_Extrude;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
out vec4 v_data;
out vec4 v_color;
out float v_radius;

#pragma include "projection"
#pragma include "picking"


void main() {
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;

  // unpack color(vec2)
  v_color = a_Color;

  // radius(16-bit)
  v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur);

  // TODP: /abs(extrude.x) 是为了兼容地球模式
  v_data = vec4(extrude.x/abs(extrude.x), extrude.y/abs(extrude.y), antialiasblur,shape_type);

  gl_Position = u_ViewProjectionMatrix * vec4(a_Position + extrude * newSize * 0.1 + vec3(u_offsets,0.0), 1.0);

  setPickingColor(a_PickingColor);
}`,Mw=function(e){be(r,e);var t=Cw(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c;this.layer.getLayerConfig();var h={u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_stroke_width:s,u_blur:f},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=_d,s.next=3,this.layer.buildLayerModel({moduleName:"pointEarthFill",vertexShader:Tw,fragmentShader:ww,triangulation:_d,inject:this.getInject(),depth:{enable:!0},blend:this.getBlend()});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:_e.Attribute,descriptor:{name:"a_Extrude",shaderLocation:we.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=Ie(s,3),f=c[0],h=c[1],d=c[2],v=cr(0,0,1),p=cr(f,0,d),g=f>=0?al(v,p):Math.PI*2-al(v,p),m=Math.PI*2-Math.asin(h/100),_=xn();mp(_,_,g),gp(_,_,m);var y=cr(1,1,0);Ji(y,y,_),ci(y,y);var x=cr(-1,1,0);Ji(x,x,_),ci(x,x);var b=cr(-1,-1,0);Ji(b,b,_),ci(b,b);var k=cr(1,-1,0);Ji(k,k,_),ci(k,k);var T=[].concat(Q(y),Q(x),Q(b),Q(k)),D=l%4*3;return[T[D],T[D+1],T[D+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:_e.Attribute,descriptor:{name:"a_Shape",shaderLocation:we.SHAPE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.layer.getLayerConfig().shape2d,c=l.indexOf(s);return[c]}}})}}]),r}(et);function Iw(e){var t=kw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function kw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Lw=`
in vec4 v_color;
in float v_lightWeight;
out vec4 outputColor;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {

  outputColor = v_color;
  // 开启透明度渐变
  // picking
  if(u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,Rw=`#define pi 3.1415926535

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in vec3 a_Size;
layout(location = 11) in vec3 a_Extrude;
layout(location = 13) in vec3 a_Normal;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};
out vec4 v_color;
out float v_lightWeight;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if(x > 0.0 && z > 0.0) {
    return atan(x/z);
  } else if(x > 0.0 && z <= 0.0){
    return atan(-z/x) + pi/2.0;
  } else if(x <= 0.0 && z <= 0.0) {
    return  pi + atan(x/z); //atan(x/z) + 
  } else {
    return atan(z/-x) + pi*3.0/2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y/r);
}

void main() {


  vec3 size = a_Size * a_Position;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移

  if(u_heightfixed < 1.0) { // 圆柱体不固定高度
    
    if (u_CoordinateSystem == COORDINATE_SYSTEM_P20 || u_CoordinateSystem == COORDINATE_SYSTEM_P20_OFFSET) {
      // P20 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
      offset = offset * pow(2.0, (19.0 - u_Zoom));
    }
    if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) {
      // P20_2 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减3
      offset = offset * pow(2.0, (19.0 - 3.0 - u_Zoom));
    }
  } else {// 圆柱体固定高度 （ 处理 mapbox ）
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      offset *= 4.0/pow(2.0, 21.0 - u_Zoom);
    }
  }


  vec4 project_pos = project_position(vec4(a_Extrude.xy, 0., 1.0));

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // // 圆柱光照效果
  float lightWeight = 1.0;

  if(u_lightEnable > 0.0) { // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }

  v_lightWeight = lightWeight;

  v_color = a_Color;

    // 设置圆柱的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, a_Position.z);
    v_color.a =  v_color.a * opacity;
  } else {
    v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);
  }

    if(u_opacitylinear > 0.0) {
    v_color.a *= u_opacitylinear_dir > 0.0 ? (1.0 - a_Position.z): a_Position.z;
  }


  gl_Position = project_common_position_to_clipspace_v2(pos);

  setPickingColor(a_PickingColor);
}
`,ug=function(e){be(r,e);var t=Iw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"raiseCount",0),S(R(n),"raiseRepeat",0),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.sourceColor,s=i.targetColor,l=i.pickLight,c=l===void 0?!1:l,f=i.heightfixed,h=f===void 0?!1:f,d=i.opacityLinear,v=d===void 0?{enable:!1,dir:"up"}:d,p=i.lightEnable,g=p===void 0?!0:p,m=0,_=[0,0,0,0],y=[0,0,0,0];if(u&&s&&(_=qe(u),y=qe(s),m=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var x=o.speed,b=x===void 0?.01:x;this.raiseCount+=b,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var k={u_pickLight:Number(c),u_heightfixed:Number(h),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_linearColor:m,u_sourceColor:_,u_targetColor:y,u_opacitylinear:Number(v.enable),u_opacitylinear_dir:v.dir==="up"?1:0,u_lightEnable:Number(g)},T=this.getUniformsBufferInfo(k);return T}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!0:u,l=o.animateOption.repeat,c=l===void 0?1:l,this.raiseRepeat=c,this.initUniformsBuffer(),d.next=5,this.layer.buildLayerModel({moduleName:"pointExtrude",vertexShader:Rw,fragmentShader:Lw,triangulation:ng,inject:this.getInject(),cull:{enable:!0,face:fs(this.mapService.version)},depth:{enable:s}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:_e.Attribute,descriptor:{name:"a_Extrude",shaderLocation:we.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=vr(a.coordinates);return[o[0],o[1],0]}}})}}]),r}(et);function Pw(e){var t=Fw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Fw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Ow=`
layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;
};

in vec4 v_color;
in vec4 v_stroke;
in vec4 v_data;
in float v_radius;

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));
  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(
    antialiasblur,
    0.0,
    inner_df
  );

  float PI = 3.14159;
  float N_RINGS = 3.0;
  float FREQ = 1.0;

  if(u_stroke_width < 0.01) {
    outputColor = v_color;
  } else {
    outputColor = mix(v_color, v_stroke * u_stroke_opacity, color_t);
  }
  float intensity = 1.0;
  if(u_time!=-1.0){
    //wave相关逻辑
    float d = length(v_data.xy);
    if(d > 0.5) {
      discard;
    }
    intensity = clamp(cos(d * PI), 0.0, 1.0) * clamp(cos(2.0 * PI * (d * 2.0 * u_animate.z - u_animate.y * u_time)), 0.0, 1.0);
  }

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor *= intensity;//wave
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor.a *= intensity;//wave 
    outputColor = filterColor(outputColor);
  }
   // 作为 mask 模板时需要丢弃透明的像素
  if(outputColor.a < 0.01) {
    discard;
  } 
}
`,Dw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 10) in float a_Shape;
layout(location = 11) in vec3 a_Extrude;

layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;   
};

out vec4 v_color;
out vec4 v_stroke;
out vec4 v_data;
out float v_radius;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  // 透明度计算
   v_stroke = stroke;  
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  *  u_meter2coord 在等面积大小的时候设置单位
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;



  // unpack color(vec2)
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  if(u_size_unit == 1.0) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }

   v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur_height_fixed.x);

  vec2 offset = (extrude.xy * (newSize + u_stroke_width) + u_offsets);
  vec3 aPosition = a_Position;

  offset = project_pixel(offset);
  offset = rotate_matrix(offset,rotation);
  
  // TODP: /abs(extrude.x) 是为了兼容地球模式
  v_data = vec4(extrude.x/abs(extrude.x), extrude.y/abs(extrude.y), antialiasblur,shape_type);


  // vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0));
  vec4 project_pos = project_position(vec4(aPosition.xy, 0.0, 1.0));
  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  float raisingHeight = u_blur_height_fixed.y;

  if(u_blur_height_fixed.z < 1.0) { // false
    raisingHeight = project_pixel(u_blur_height_fixed.y);
  } else {
     if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_blur_height_fixed.y * mapboxZoomScale;
    }
  }
  
  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  setPickingColor(a_PickingColor);
}
`,sg=function(e){be(r,e);var t=Pw(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c,h=i.raisingHeight,d=h===void 0?0:h,v=i.heightfixed,p=v===void 0?!1:v,g=i.unit,m=g===void 0?"pixel":g,_=this.getAnimateUniforms().u_time;isNaN(_)&&(_=-1);var y={u_blur_height_fixed:[f,Number(d),Number(p)],u_stroke_width:s,u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_size_unit:Ps[m],u_time:_,u_animate:this.getAnimateUniforms().u_animate},x=this.getUniformsBufferInfo(y);return x}},{key:"getAnimateUniforms",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1}:a;return{u_animate:this.animateOption2Array(o),u_time:this.layer.getLayerAnimateTime()}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),ya)}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption,s=u===void 0?{enable:!1}:u,l=this.getShaders(s),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=ya,this.initUniformsBuffer(),p.next=6,this.layer.buildLayerModel({moduleName:h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:ya,depth:{enable:!1}});case 6:return d=p.sent,p.abrupt("return",[d]);case 8:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getShaders",value:function(i){return{frag:Ow,vert:Dw,type:"pointFill"}}},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig().shape2d;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:_e.Attribute,descriptor:{name:"a_Extrude",shaderLocation:we.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:_e.Attribute,descriptor:{name:"a_Shape",shaderLocation:we.SHAPE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.indexOf(s);return[l]}}})}}]),r}(et);function Nw(e){var t=Bw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Bw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Uw=`in vec2 v_uv;// 本身的 uv 坐标
in vec2 v_Iconuv;
in float v_opacity;
out vec4 outputColor;

uniform sampler2D u_texture;
layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed: 0.0;
  float u_raisingHeight: 0.0;
  float u_size_unit;
};

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

void main() {
  vec2 pos = v_Iconuv / u_textSize + v_uv / u_textSize * 64.;
  outputColor = texture(SAMPLER_2D(u_texture), pos);
  outputColor.a *= v_opacity;
  outputColor = filterColor(outputColor);
}
`,zw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 11) in vec3 a_Extrude;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed: 0.0;
  float u_raisingHeight: 0.0;
  float u_size_unit;
};

out vec2 v_uv;
out vec2 v_Iconuv;
out float v_opacity;


#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  vec3 extrude = a_Extrude;
  v_uv = (a_Extrude.xy + 1.0)/2.0;
  v_uv.y = 1.0 - v_uv.y;
  v_Iconuv = a_Uv;
  v_opacity = opacity;
  float newSize = a_Size;
  if(u_size_unit == 1.0) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }
  
  // vec2 offset = (u_RotateMatrix * extrude.xy * (a_Size) + textrueOffsets);
  vec2 offset = (extrude.xy * (newSize) + offsets);

  offset = rotate_matrix(offset,rotation);

  vec3 aPosition = a_Position;

  offset = project_pixel(offset);

  vec4 project_pos = project_position(vec4(aPosition.xy, 0.0, 1.0));
  float raisingHeight = u_raisingHeight;
  if(u_heightfixed < 1.0) { // height fixed
    raisingHeight = project_pixel(u_raisingHeight);
  } else {
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy + offset, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}
`,$w=function(e){be(r,e);var t=Nw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"meter2coord",1),S(R(n),"isMeter",!1),S(R(n),"radian",0),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),n.layerService.throttleRenderLayers();return}n.texture=u({data:n.iconService.getCanvas(),mag:L.LINEAR,min:L.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128,mipmap:!0}),n.textures=[n.texture]}),n}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l=i.unit,c=l===void 0?"pixel":l;this.rendererService.getDirty()&&this.texture.bind();var f={u_textSize:[1024,this.iconService.canvasHeight||128],u_heightfixed:Number(s),u_raisingHeight:Number(o),u_size_unit:Ps[c]},h=this.getUniformsBufferInfo(f);return h}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),La)}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointFillImage",vertexShader:zw,fragmentShader:Uw,triangulation:La,depth:{enable:!1},inject:this.getInject(),cull:{enable:!0,face:fs(this.mapService.version)}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;this.iconService.off("imageUpdate",this.updateTexture),(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_Uv",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:_e.Attribute,descriptor:{name:"a_Extrude",shaderLocation:we.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}})}}]),r}(et);function Vw(e){var t=jw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function jw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Hw=`layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

uniform sampler2D u_texture;

in vec4 v_color;
in vec2 v_uv;
in float v_opacity;

#pragma include "picking"

out vec4 outputColor;

void main(){
  vec2 pos = v_uv / u_textSize + gl_PointCoord / u_textSize * 64.;
  vec4 textureColor;

  // Y = 0.299R + 0.587G + 0.114B // 亮度提取
  
  textureColor = texture(SAMPLER_2D(u_texture), pos);

  // Tip: 去除边缘部分 mipmap 导致的混合变暗
  float fragmengTocenter = distance(vec2(0.5), gl_PointCoord);
  if(fragmengTocenter >= 0.5) {
        float luma = 0.299 * textureColor.r + 0.587 * textureColor.g + 0.114 * textureColor.b;
        textureColor.a *= luma;
  }
  
  if(all(lessThan(v_color, vec4(1.0+0.00001))) && all(greaterThan(v_color, vec4(1.0-0.00001))) || v_color==vec4(1.0)){
        outputColor= textureColor;
  }else {
        outputColor= step(0.01, textureColor.z) * v_color;
  }
  outputColor.a *= v_opacity;
  if (outputColor.a < 0.01) {
      discard;
  }
  outputColor = filterColor(outputColor);
}
`,Gw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

out vec4 v_color;
out vec2 v_uv;
out float v_opacity;

#pragma include "projection"
#pragma include "picking"

void main() {

  // cal style mapping - 数据纹理映射部分的计算
  v_color = a_Color;
  v_opacity = opacity;
  v_uv = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
   
  vec2 offset = project_pixel(offsets);

  float raisingHeight = u_raisingHeight;
  if(u_heightfixed < 1.0) { // false
    raisingHeight = project_pixel(u_raisingHeight);
  } else {
     if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_raisingHeight * mapboxZoomScale;
    }
  }


  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;
  setPickingColor(a_PickingColor);
}
`,lg=function(e){be(r,e);var t=Vw(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"updateTexture",function(){var u=n.rendererService.createTexture2D;if(n.texture){n.texture.update({data:n.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),setTimeout(function(){n.layerService.throttleRenderLayers()});return}n.texture=u({data:n.iconService.getCanvas(),mag:L.LINEAR,min:L.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:n.iconService.canvasHeight||128,mipmap:!0})}),n}return ne(r,[{key:"getUninforms",value:function(){this.rendererService.getDirty()&&this.texture.bind();var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l={u_textSize:[1024,this.iconService.canvasHeight||128],u_raisingHeight:Number(o),u_heightfixed:Number(s),u_texture:this.texture};this.textures=[this.texture];var c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointImage",vertexShader:Gw,fragmentShader:Hw,triangulation:eA,inject:this.getInject(),depth:{enable:!1},primitive:L.POINTS});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_Uv",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}})}}]),r}(et);function Ww(e){var t=Yw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Yw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Xw=`in vec4 v_color;
out vec4 outputColor;
void main() {
  outputColor = v_color;
}`,Zw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;

layout(std140) uniform u_Common {
  float u_size_scale;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"

void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  if (u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    gl_Position = u_Mvp * vec4(a_Position, 1.0);
  } else {
    vec4 project_pos = project_position(vec4(a_Position, 1.0)) + vec4(a_Size / 2., -a_Size /2., 0., 0.);
    gl_Position = project_common_position_to_clipspace(project_pos);
  }

  gl_PointSize = a_Size * u_size_scale *  2.0  * u_DevicePixelRatio;
}
`;function Td(e){var t=e.coordinates;return{vertices:Q(t),indices:[0],size:t.length}}var cg=function(e){be(r,e);var t=Ww(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i={u_size_scale:.5},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=Td,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointNormal",vertexShader:Zw,fragmentShader:Xw,triangulation:Td,inject:this.getInject(),depth:{enable:!1},primitive:L.POINTS,pick:!1});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),r}(et);function qw(e){var t=Kw();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Kw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Qw=`
layout(std140) uniform commonUniorm{
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};
in vec4 v_data;
in vec4 v_color;
in float v_radius;
in vec2 v_extrude;
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius);

  float outer_df = sdCircle(v_data.xy, 1.0);
  float inner_df = sdCircle(v_data.xy, r);

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  outputColor = vec4(v_color.rgb, v_color.a);

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
  } else {
    outputColor.a *= opacity_t;
  }

  if(outputColor.a > 0.0) {
    outputColor = filterColor(outputColor);
  }

  vec2 extrude =  v_extrude;
  vec2 dir = normalize(extrude);
  vec2 baseDir = vec2(1.0, 0.0);
  float pi = 3.14159265359;
  float flag = sign(dir.y);
  float rades = dot(dir, baseDir);
  float radar_v = (flag - 1.0) * -0.5 * acos(rades)/pi;
  // simple AA
  if(radar_v > 0.99) {
    radar_v = 1.0 - (radar_v - 0.99)/0.01;
  }

  outputColor.a *= radar_v;
}
`,Jw=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 11) in vec3 a_Extrude;

layout(std140) uniform commonUniorm {
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};

out vec4 v_data;
out vec4 v_color;
out float v_radius;
out vec2 v_extrude;

#pragma include "projection"
#pragma include "picking"

void main() {
  float newSize = setPickingSize(a_Size);

  float time = u_time * u_speed;
  mat2 rotateMatrix = mat2( 
    cos(time), sin(time), 
    -sin(time), cos(time)
  );
  v_extrude = rotateMatrix * a_Extrude.xy;

  v_color = a_Color;
  v_color.a *= opacity;

  float blur = 0.0;
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / a_Size, blur);

  if(u_size_unit == 1.) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }
  v_radius = newSize;

  vec2 offset = (a_Extrude.xy * (newSize));
  vec3 aPosition = a_Position;
  
  offset = project_pixel(offset);
  
  v_data = vec4(a_Extrude.x, a_Extrude.y, antialiasblur, -1.0);

  vec4 project_pos = project_position(vec4(aPosition.xy, 0.0, 1.0));
  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  setPickingColor(a_PickingColor);
}
`,eT=function(e){be(r,e);var t=qw(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.speed,u=o===void 0?1:o,s=i.unit,l=s===void 0?"pixel":s,c={u_additive:a==="additive"?1:0,u_size_unit:Ps[l],u_speed:u,u_time:this.layer.getLayerAnimateTime()},f=this.getUniformsBufferInfo(c);return f}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),La)}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointRadar",vertexShader:Jw,fragmentShader:Qw,triangulation:La,inject:this.getInject(),depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:_e.Attribute,descriptor:{name:"a_Extrude",shaderLocation:we.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s){var l=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],c=s%4*3;return[l[c],l[c+1],l[c+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{shaderLocation:we.SIZE,name:"a_Size",buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?5:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),r}(et);function tT(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=rT(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function rT(e,t){if(e){if(typeof e=="string")return Md(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Md(e,t)}}function Md(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var nT=function(){function e(t,r,n){ie(this,e),S(this,"boxCells",[]);var i=this.boxCells;this.xCellCount=Math.ceil(t/n),this.yCellCount=Math.ceil(r/n);for(var a=0;a<this.xCellCount*this.yCellCount;a++)i.push([]);this.boxKeys=[],this.bboxes=[],this.width=t,this.height=r,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/r,this.boxUid=0}return ne(e,[{key:"insert",value:function(r,n,i,a,o){this.forEachCell(n,i,a,o,this.insertBoxCell,this.boxUid++),this.boxKeys.push(r),this.bboxes.push(n),this.bboxes.push(i),this.bboxes.push(a),this.bboxes.push(o)}},{key:"query",value:function(r,n,i,a,o){return this.queryHitTest(r,n,i,a,!1,o)}},{key:"hitTest",value:function(r,n,i,a,o){return this.queryHitTest(r,n,i,a,!0,o)}},{key:"insertBoxCell",value:function(r,n,i,a,o,u){this.boxCells[o].push(u)}},{key:"queryHitTest",value:function(r,n,i,a,o,u){if(i<0||r>this.width||a<0||n>this.height)return o?!1:[];var s=[];if(r<=0&&n<=0&&this.width<=i&&this.height<=a){if(o)return!0;for(var l=0;l<this.boxKeys.length;l++)s.push({key:this.boxKeys[l],x1:this.bboxes[l*4],y1:this.bboxes[l*4+1],x2:this.bboxes[l*4+2],y2:this.bboxes[l*4+3]});return u?s.filter(u):s}var c={hitTest:o,seenUids:{box:{},circle:{}}};return this.forEachCell(r,n,i,a,this.queryCell,s,c,u),o?s.length>0:s}},{key:"queryCell",value:function(r,n,i,a,o,u,s,l){var c=s.seenUids,f=this.boxCells[o];if(f!==null){var h=this.bboxes,d=tT(f),v;try{for(d.s();!(v=d.n()).done;){var p=v.value;if(!c.box[p]){c.box[p]=!0;var g=p*4;if(r<=h[g+2]&&n<=h[g+3]&&i>=h[g+0]&&a>=h[g+1]&&(!l||l(this.boxKeys[p]))){if(s.hitTest)return u.push(!0),!0;u.push({key:this.boxKeys[p],x1:h[g],y1:h[g+1],x2:h[g+2],y2:h[g+3]})}}}}catch(m){d.e(m)}finally{d.f()}}return!1}},{key:"forEachCell",value:function(r,n,i,a,o,u,s,l){for(var c=this.convertToXCellCoord(r),f=this.convertToYCellCoord(n),h=this.convertToXCellCoord(i),d=this.convertToYCellCoord(a),v=c;v<=h;v++)for(var p=f;p<=d;p++){var g=this.xCellCount*p+v;if(o.call(this,r,n,i,a,g,u,s,l))return}}},{key:"convertToXCellCoord",value:function(r){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(r*this.xScale)))}},{key:"convertToYCellCoord",value:function(r){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(r*this.yScale)))}}]),e}();const iT=nT;var aT=function(){function e(t,r){ie(this,e),S(this,"viewportPadding",100),this.width=t,this.height=r,this.viewportPadding=Math.max(t,r),this.grid=new iT(t+this.viewportPadding,r+this.viewportPadding,25),this.screenRightBoundary=t+this.viewportPadding,this.screenBottomBoundary=r+this.viewportPadding,this.gridRightBoundary=t+2*this.viewportPadding,this.gridBottomBoundary=r+2*this.viewportPadding}return ne(e,[{key:"placeCollisionBox",value:function(r){var n=r.x1+r.anchorPointX+this.viewportPadding,i=r.y1+r.anchorPointY+this.viewportPadding,a=r.x2+r.anchorPointX+this.viewportPadding,o=r.y2+r.anchorPointY+this.viewportPadding;return!this.isInsideGrid(n,i,a,o)||this.grid.hitTest(n,i,a,o)?{box:[]}:{box:[n,i,a,o]}}},{key:"insertCollisionBox",value:function(r,n){var i={featureIndex:n};this.grid.insert(i,r[0],r[1],r[2],r[3])}},{key:"project",value:function(r,n,i){var a=yy(n,i,0,1),o=Cp(),u=dp.apply(gy,Q(r));return Ap(o,a,u),{x:(o[0]/o[3]+1)/2*this.width+this.viewportPadding,y:(-o[1]/o[3]+1)/2*this.height+this.viewportPadding}}},{key:"isInsideGrid",value:function(r,n,i,a){return i>=0&&r<this.gridRightBoundary&&a>=0&&n<this.gridBottomBoundary}}]),e}();function fg(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=oT(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function oT(e,t){if(e){if(typeof e=="string")return Id(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Id(e,t)}}function Id(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function hg(e){var t=.5,r=.5;switch(e){case"right":case"top-right":case"bottom-right":t=1;break;case"left":case"top-left":case"bottom-left":t=0;break;default:t=.5}switch(e){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;break;default:r=.5}return{horizontalAlign:t,verticalAlign:r}}function dg(e,t,r,n,i){if(i){var a=e[n],o=a.glyph;if(o)for(var u=t[o].advance*a.scale,s=(e[n].x+u)*i,l=r;l<=n;l++)e[l].x-=s}}function vg(e,t,r,n,i,a,o){var u=(t-r)*i,s=(-n*o+.5)*a,l=fg(e),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.x+=u,f.y+=s}}catch(h){l.e(h)}finally{l.f()}}function uT(e,t,r,n,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;r.forEach(function(_){if(_.split("").forEach(function(x){var b=t[x],k=0;b&&(f.push({glyph:x,x:s,y:l+k,vertical:!1,scale:1,metrics:b}),s+=b.advance+o)}),f.length!==d){var y=s-o;c=Math.max(y,c),dg(f,t,d,f.length-1,h)}s=0,l-=n+5});var v=hg(i),p=v.horizontalAlign,g=v.verticalAlign;vg(f,h,p,g,c,n,r.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function sT(e,t,r,n,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;r.forEach(function(_){var y=t[_],x=0;if(y&&(f.push({glyph:_,x:y.advance/2,y:l+x,vertical:!1,scale:1,metrics:y}),s+=y.advance+o),f.length!==d){var b=s-o;c=Math.max(b,c),dg(f,t,d,f.length-1,h)}s=0,l-=n+5});var v=hg(i),p=v.horizontalAlign,g=v.verticalAlign;vg(f,h,p,g,c,n,r.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function lT(e,t,r,n,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:[0,0],u=arguments.length>7?arguments[7]:void 0,s=e.split(`
`),l=[],c={positionedGlyphs:l,top:o[1],bottom:o[1],left:o[0],right:o[0],lineCount:s.length,text:e};return u?sT(c,t,s,r,n,i,a):uT(c,t,s,r,n,i,a),l.length?c:!1}function cT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],r=arguments.length>2?arguments[2]:void 0,n=e.positionedGlyphs,i=n===void 0?[]:n,a=[],o=fg(i),u;try{for(o.s();!(u=o.n()).done;){var s=u.value,l=s.metrics,c=4,f=l.advance*s.scale/2,h=r?[s.x+f,s.y]:[0,0],d=r?[0,0]:[s.x+f+t[0],s.y+t[1]],v=(0-c)*s.scale-f+d[0],p=(0-c)*s.scale+d[1],g=v+l.width*s.scale,m=p+l.height*s.scale,_={x:v,y:p},y={x:g,y:p},x={x:v,y:m},b={x:g,y:m};a.push({tl:_,tr:y,bl:x,br:b,tex:l,glyphOffset:h})}}catch(k){o.e(k)}finally{o.f()}return a}function fT(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=hT(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function hT(e,t){if(e){if(typeof e=="string")return kd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return kd(e,t)}}function kd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function dT(e){var t=vT();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function vT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Ld=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 48.0

uniform sampler2D u_sdf_map;
layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

in vec2 v_uv;
in float v_gamma_scale;
in vec4 v_color;
in vec4 v_stroke_color;
in float v_fontScale;

out vec4 outputColor;

#pragma include "picking"
void main() {
  // get style data mapping

  // get sdf from atlas
  float dist = texture(SAMPLER_2D(u_sdf_map), v_uv).a;

  lowp float buff = (6.0 - u_stroke_width / v_fontScale) / SDF_PX;
  highp float gamma = (u_halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (v_fontScale * u_gamma_scale) / 1.0;

  highp float gamma_scaled = gamma * v_gamma_scale;

  highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);

  outputColor = mix(v_color, v_stroke_color, smoothstep(0., 0.5, 1.- dist));

  outputColor.a *= alpha;
   // 作为 mask 模板时需要丢弃透明的像素
  if (outputColor.a < 0.01) {
    discard;
  }
  outputColor = filterColor(outputColor);
}
`,Rd=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 24.0

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 10) in vec2 a_textOffsets;
layout(location = 14) in vec2 a_tex;

layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

out vec2 v_uv;
out float v_gamma_scale;
out vec4 v_color;
out vec4 v_stroke_color;
out float v_fontScale;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  // cal style mapping - 数据纹理映射部分的计算
  
  v_uv = a_tex / u_sdf_map_size;



  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_stroke_color = vec4(u_stroke_color.xyz, u_stroke_color.w * opacity);

  // 文本缩放比例
  float fontScale = a_Size / FONT_SIZE;
  v_fontScale = fontScale;

  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  // vec4 projected_position  = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  vec2 offset = rotate_matrix(a_textOffsets,rotation);
  
  // gl_Position = vec4(projected_position.xy / projected_position.w + rotation_matrix * a_textOffsets * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);

  float raiseHeight = u_raisingHeight;
  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    raiseHeight = u_raisingHeight * mapboxZoomScale;
  }

  vec4 projected_position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz + vec3(0.0, 0.0, raiseHeight), 1.0));

  gl_Position = vec4(
    projected_position.xy / projected_position.w + offset * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);
  v_gamma_scale = gl_Position.w;
  setPickingColor(a_PickingColor);

}
`,ni=Ze.isEqual;function Pd(e){var t=this,r=e.id,n=[],i=[];if(!t.glyphInfoMap||!t.glyphInfoMap[r])return{vertices:[],indices:[],size:7};var a=t.glyphInfoMap[r].centroid,o=a.length===2?[a[0],a[1],0]:a;return t.glyphInfoMap[r].glyphQuads.forEach(function(u,s){n.push.apply(n,Q(o).concat([u.tex.x,u.tex.y+u.tex.height,u.tl.x,u.tl.y],Q(o),[u.tex.x+u.tex.width,u.tex.y+u.tex.height,u.tr.x,u.tr.y],Q(o),[u.tex.x+u.tex.width,u.tex.y,u.br.x,u.br.y],Q(o),[u.tex.x,u.tex.y,u.bl.x,u.bl.y])),i.push(0+s*4,1+s*4,2+s*4,2+s*4,3+s*4,0+s*4)}),{vertices:n,indices:i,size:7}}var pg=function(e){be(r,e);var t=dT(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"glyphInfoMap",{}),S(R(n),"currentZoom",-1),S(R(n),"textureHeight",0),S(R(n),"textCount",0),S(R(n),"preTextStyle",{}),S(R(n),"mapping",Y(A.mark(function u(){return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return n.initGlyph(),n.updateTexture(),l.next=4,n.reBuildModel();case 4:case"end":return l.stop()}},u)}))),n}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z(z({},i.uniformsOption),a.uniformsOption),{u_sdf_map:this.textures[0]})}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.stroke,o=a===void 0?"#fff":a,u=i.strokeWidth,s=u===void 0?0:u,l=i.halo,c=l===void 0?.5:l,f=i.gamma,h=f===void 0?2:f,d=i.raisingHeight,v=d===void 0?0:d,p=this.getFontServiceMapping(),g=this.getFontServiceCanvas();p&&Object.keys(p).length!==this.textCount&&g&&(this.updateTexture(),this.textCount=Object.keys(p).length),this.preTextStyle=this.getTextStyle();var m={u_stroke_color:qe(o),u_sdf_map_size:[(g==null?void 0:g.width)||1,(g==null?void 0:g.height)||1],u_raisingHeight:Number(v),u_stroke_width:s,u_gamma_scale:h,u_halo_blur:c},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.bindEvent(),this.extent=this.textExtent(),this.rawEncodeData=this.layer.getEncodedData(),this.preTextStyle=this.getTextStyle(),this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 6:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.textAllowOverlap,s=u===void 0?!1:u,this.initGlyph(),this.updateTexture(),s||this.filterGlyphs(),f.next=6,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:Rd,fragmentShader:Ld,inject:this.getInject(),triangulation:Pd.bind(this),depth:{enable:!1}});case 6:return l=f.sent,f.abrupt("return",[l]);case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"needUpdate",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d,v,p,g,m;return A.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(o=this.getTextStyle(),u=o.textAllowOverlap,s=u===void 0?!1:u,l=o.textAnchor,c=l===void 0?"center":l,f=o.textOffset,h=o.padding,d=o.fontFamily,v=o.fontWeight,!(!ni(h,this.preTextStyle.padding)||!ni(f,this.preTextStyle.textOffset)||!ni(c,this.preTextStyle.textAnchor)||!ni(d,this.preTextStyle.fontFamily)||!ni(v,this.preTextStyle.fontWeight))){y.next=5;break}return y.next=4,this.mapping();case 4:return y.abrupt("return",!0);case 5:if(!s){y.next=7;break}return y.abrupt("return",!1);case 7:if(p=this.mapService.getZoom(),g=this.mapService.getBounds(),m=jp(this.extent,g),!(Math.abs(this.currentZoom-p)>.5||!m||s!==this.preTextStyle.textAllowOverlap)){y.next=14;break}return y.next=13,this.reBuildModel();case 13:return y.abrupt("return",!0);case 14:return y.abrupt("return",!1);case 15:case"end":return y.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.layer.off("remapping",this.mapping)}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"textOffsets",type:_e.Attribute,descriptor:{shaderLocation:10,name:"a_textOffsets",buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"textUv",type:_e.Attribute,descriptor:{name:"a_tex",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?12:o;return Array.isArray(u)?[u[0]]:[u]}}})}},{key:"bindEvent",value:function(){this.layer.isTileLayer||this.layer.on("remapping",this.mapping)}},{key:"textExtent",value:function(){var i=this.mapService.getBounds();return ds(i,.5)}},{key:"initTextFont",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f=f.toString();var h=fT(f),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;s.indexOf(v)===-1&&s.push(v)}}catch(p){h.e(p)}finally{h.f()}}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!1})}},{key:"initIconFontTex",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f="".concat(f),s.indexOf(f)===-1&&s.push(f)}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!0})}},{key:"getTextStyle",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u,l=i.textAllowOverlap,c=l===void 0?!1:l,f=i.padding,h=f===void 0?[0,0]:f,d=i.textAnchor,v=d===void 0?"center":d,p=i.textOffset,g=p===void 0?[0,0]:p,m=i.opacity,_=m===void 0?1:m,y=i.strokeOpacity,x=y===void 0?1:y,b=i.strokeWidth,k=b===void 0?0:b,T=i.stroke,D=T===void 0?"#000":T;return{fontWeight:o,fontFamily:s,textAllowOverlap:c,padding:h,textAnchor:v,textOffset:g,opacity:_,strokeOpacity:x,strokeWidth:k,stroke:D}}},{key:"generateGlyphLayout",value:function(i){var a=this,o=this.getFontServiceMapping(),u=this.layer.getLayerConfig(),s=u.spacing,l=s===void 0?2:s,c=u.textAnchor,f=c===void 0?"center":c,h=u.textOffset,d=this.rawEncodeData;this.glyphInfo=d.map(function(v){var p=v.shape,g=p===void 0?"":p,m=v.id,_=v.size,y=_===void 0?1:_,x=v.textOffset?v.textOffset:h||[0,0],b=v.textAnchor?v.textAnchor:f||"center",k=lT(g.toString(),o,y,b,"left",l,x,i),T=cT(k,x,!1);return v.shaping=k,v.glyphQuads=T,v.centroid=vr(v.coordinates),v.originCentroid=v.version==="GAODE2.x"?vr(v.originCoordinates):v.originCentroid=v.centroid,a.glyphInfoMap[m]={shaping:k,glyphQuads:T,centroid:vr(v.coordinates)},v})}},{key:"getFontServiceMapping",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getMappingByKey("".concat(s,"_").concat(o))}},{key:"getFontServiceCanvas",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getCanvasByKey("".concat(s,"_").concat(o))}},{key:"filterGlyphs",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.padding,u=o===void 0?[0,0]:o,s=a.textAllowOverlap,l=s===void 0?!1:s;if(!l){this.glyphInfoMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.textExtent();var c=this.rendererService.getViewportSize(),f=c.width,h=c.height,d=new aT(f,h),v=this.glyphInfo.filter(function(p){var g=p.shaping,m=p.id,_=m===void 0?0:m,y=p.version==="GAODE2.x"?p.originCentroid:p.centroid,x=p.size,b=x/16,k=i.mapService.lngLatToContainer(y),T=d.placeCollisionBox({x1:g.left*b-u[0],x2:g.right*b+u[0],y1:g.top*b-u[1],y2:g.bottom*b+u[1],anchorPointX:k.x,anchorPointY:k.y}),D=T.box;return D&&D.length?(d.insertCollisionBox(D,_),!0):!1});v.forEach(function(p){i.glyphInfoMap[p.id]=p})}}},{key:"initGlyph",value:function(){var i=this.layer.getLayerConfig(),a=i.iconfont,o=a===void 0?!1:a;o?this.initIconFontTex():this.initTextFont(),this.generateGlyphLayout(o)}},{key:"updateTexture",value:function(){var i=this.rendererService.createTexture2D,a=this.getFontServiceCanvas();this.textureHeight=a.height,this.texture&&this.texture.destroy(),this.texture=i({data:a,mag:L.LINEAR,min:L.LINEAR,width:a.width,height:a.height}),this.textures=[this.texture]}},{key:"reBuildModel",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.filterGlyphs(),s.next=3,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:Rd,fragmentShader:Ld,triangulation:Pd.bind(this),inject:this.getInject(),depth:{enable:!1}});case 3:o=s.sent,this.layer.models=[o];case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()}]),r}(et),pT={fillImage:$w,fill:sg,radar:eT,image:lg,normal:cg,simplePoint:mw,extrude:ug,text:pg,earthFill:Mw,earthExtrude:Ew};function gT(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=mT(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function mT(e,t){if(e){if(typeof e=="string")return Fd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Fd(e,t)}}function Fd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function yT(e){var t=_T();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function _T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Gu=function(e){be(r,e);var t=yT(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","PointLayer"),S(R(n),"enableShaderEncodeStyles",["stroke","offsets","opacity","rotation"]),S(R(n),"enableDataEncodeStyles",["textOffset","textAnchor"]),S(R(n),"defaultSourceConfig",{data:[],options:{parser:{type:"json",x:"lng",y:"lat"}}}),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel&&this.layerModel.clearModels(),this.layerModel=new pT[o](this),s.next=5,this.initLayerModels();case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getModelTypeWillEmptyData",value:function(){if(this.shapeOption){var i=this.shapeOption,a=i.field,o=i.values,u=this.getLayerConfig(),s=u.shape2d,l=this.iconService.getIconMap();if(a&&(s==null?void 0:s.indexOf(a))!==-1)return"fill";if(o==="text")return"text";if(o&&o instanceof Array){var c=gT(o),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;if(typeof h=="string"&&l.hasOwnProperty(h))return"image"}}catch(d){c.e(d)}finally{c.f()}}}return"normal"}},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={fillImage:{},normal:{blend:"additive"},radar:{},simplePoint:{},fill:{blend:"normal"},extrude:{},image:{},text:{blend:"normal"},tile:{},tileText:{},earthFill:{},earthExtrude:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=a.billboard,l=s===void 0?!0:s,c=this.iconService.getIconMap(),f=i.find(function(d){return d.hasOwnProperty("shape")});if(f){var h=f.shape;return h==="dot"?"normal":h==="simple"?"simplePoint":h==="radar"?"radar":this.layerType==="fillImage"||l===!1?"fillImage":(o==null?void 0:o.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthFill":"fill":(u==null?void 0:u.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthExtrude":"extrude":c.hasOwnProperty(h)?"image":"text"}else return this.getModelTypeWillEmptyData()}}]),r}(Un);function xT(e){return Wu.apply(this,arguments)}function Wu(){return Wu=Y(A.mark(function e(t){var r,n,i;return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!window.createImageBitmap){o.next=14;break}return o.next=3,fetch(t);case 3:return r=o.sent,o.t0=createImageBitmap,o.next=7,r.blob();case 7:return o.t1=o.sent,o.next=10,(0,o.t0)(o.t1);case 10:return n=o.sent,o.abrupt("return",n);case 14:return i=new window.Image,o.abrupt("return",new Promise(function(u){i.onload=function(){return u(i)},i.src=t,i.crossOrigin="Anonymous"}));case 16:case"end":return o.stop()}},e)})),Wu.apply(this,arguments)}function bT(e){var t=ST();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function ST(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ET=`layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {

     // top face
    if(u_topsurface < 1.0) {
      discard;
    }

    outputColor = v_Color;
  
  outputColor = filterColor(outputColor);
}
`,CT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 13) in vec3 a_Normal;
layout(location = 14) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
 
float isSide = a_Position.z;
 float topU = a_uvs[0];
 float topV = 1.0 - a_uvs[1];
 float sidey = a_uvs[2];

  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  float lightWeight = calc_lighting(pos);

  vec4 project_pos = project_position(pos);

  if(u_heightfixed > 0.0) { // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }


 gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));

  // Tip: 部分机型 GPU 计算精度兼容
  if(isSide < 0.999) {
    // side face
    // if(u_sidesurface < 1.0) {
    //   discard;
    // }

    if(u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      v_Color = linearColor;
    } else {
      v_Color = a_Color;
    }

  } else {
    v_Color = a_Color;
  }

  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);


  setPickingColor(a_PickingColor);
}
`,AT=`uniform sampler2D u_texture;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;

#pragma include "scene_uniforms"
#pragma include "picking"

out vec4 outputColor;

void main() {
  float opacity = u_opacity;
  float isSide = v_texture_data.x;
  float lightWeight = v_texture_data.y;
  float topU = v_uvs[0];
  float topV = 1.0 - v_uvs[1];
  float sidey = v_uvs[2];

  outputColor = texture(SAMPLER_2D(u_texture), vec2(topU, topV));
  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {// 是否是边缘
    // side face
    if (u_sidesurface < 1.0) {
      discard;
    }

    if (u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      outputColor = v_Color;
    }
  } else {
     // top face
    if (u_topsurface < 1.0) {
      discard;
    }
  }
  
  outputColor.a *= opacity;
  outputColor = filterColor(outputColor);
}
`,wT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 13) in vec3 a_Normal;
layout(location = 14) in vec3 a_uvs;


layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
 
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  float lightWeight = calc_lighting(pos);
  vec4 project_pos = project_position(pos);
  v_uvs = a_uvs;
  v_Color = a_Color;
  v_Color.a *= opacity;
   
  v_texture_data = vec2(a_Position.z, lightWeight);

  if(u_heightfixed > 0.0) { // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }


    gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));



  setPickingColor(a_PickingColor);
}
`,TT=`
layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;
out vec4 outputColor;

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  float isSide =  v_texture_data.x;
  float sidey = v_uvs[2];
  float lightWeight = v_texture_data.y;

  // Tip: 部分机型 GPU 计算精度兼容
  if(isSide < 0.999) {
    // side face
    if(u_sidesurface < 1.0) {
      discard;
    }
    
    if( u_linearColor == 1.0) {
      // side use linear
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      // side notuse linear
       outputColor = v_Color;
    }
  } else {
    // top face
    if(u_topsurface < 1.0) {
      discard;
    }
    outputColor = v_Color;
  }

  outputColor = filterColorAlpha(outputColor, lightWeight);
}
`,MT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 13) in vec3 a_Normal;
layout(location = 14) in vec3 a_uvs;


layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {


  v_uvs = a_uvs;
  // cal style mapping - 数据纹理映射部分的计算
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos);

  if(u_heightfixed > 0.0) { // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));
  float lightWeight = calc_lighting(pos);
  v_texture_data = vec2(a_Position.z,lightWeight);

  v_Color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  setPickingColor(a_PickingColor);
}
`,IT=function(e){be(r,e);var t=bT(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.mapTexture,o=i.heightfixed,u=o===void 0?!1:o,s=i.raisingHeight,l=s===void 0?0:s,c=i.topsurface,f=c===void 0?!0:c,h=i.sidesurface,d=h===void 0?!0:h,v=i.sourceColor,p=i.targetColor,g=0,m=[1,1,1,1],_=[1,1,1,1];v&&p&&(m=qe(v),_=qe(p),g=1);var y={u_sourceColor:m,u_targetColor:_,u_linearColor:g,u_topsurface:Number(f),u_sidesurface:Number(d),u_heightfixed:Number(u),u_raisingHeight:Number(l)};a&&this.texture&&(y.u_texture=this.texture,this.textures=[this.texture]);var x=this.getUniformsBufferInfo(y);return x}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,depth:{enable:!0},inject:this.getInject(),triangulation:ig});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){var i=this.layer.getLayerConfig(),a=i.pickLight,o=i.mapTexture;return o?{frag:AT,vert:wT,type:"polygonExtrudeTexture"}:a?{frag:TT,vert:MT,type:"polygonExtrudePickLight"}:{frag:ET,vert:CT,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.textures=[]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=i,o=this.layer.coordCenter||this.layer.getSource().center,u=a[2]-a[0],s=a[3]-a[1];if(this.mapService.version==="GAODE2.x"){var l=this.mapService.coordToAMap2RelativeCoordinates([i[0],i[1]],o),c=Ie(l,2),f=c[0],h=c[1],d=this.mapService.coordToAMap2RelativeCoordinates([i[2],i[3]],o),v=Ie(d,2),p=v[0],g=v[1];u=p-f,s=g-h,a=[f,h,p,g]}this.styleAttributeService.registerStyleAttribute({name:"uvs",type:_e.Attribute,descriptor:{name:"a_uvs",shaderLocation:we.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(_,y,x){var b=x[0],k=x[1];return[(b-a[0])/u,(k-a[1])/s,x[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(_,y,x,b,k){return k}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(_){var y=_.size,x=y===void 0?10:y;return Array.isArray(x)?[x[0]]:[x]}}})}},{key:"loadTexture",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.layer.getLayerConfig(),u=o.mapTexture,s=this.rendererService.createTexture2D,this.texture=s({height:1,width:1}),!u){f.next=8;break}return f.next=6,xT(u);case 6:l=f.sent,this.texture=s({data:l,width:l.width,height:l.height,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE,min:L.LINEAR,mag:L.LINEAR});case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()}]),r}(et);function kT(e){var t=LT();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function LT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var RT=`
in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {

  outputColor = v_Color;
  outputColor = filterColor(outputColor);
}
`,PT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 9) in float a_Size;
layout(location = 13) in vec3 a_Normal;

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
 
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size + (1.0 - a_Position.z) * extrusionBase, 1.0);

  vec4 project_pos = project_position(pos);
   float lightWeight = calc_lighting(project_pos);
  v_Color = a_Color;
  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}
`,FT=function(e){be(r,e);var t=kT(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i={},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:ig,depth:{enable:!0}});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:RT,vert:PT,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:_e.Attribute,descriptor:{name:"a_Normal",shaderLocation:we.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:_e.Attribute,descriptor:{name:"a_Size",shaderLocation:we.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?10:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),r}(et);function OT(e){var t=DT();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function DT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var NT=`in vec4 v_color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,BT=`
layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

in vec4 v_color;
in vec3 v_linear;
in vec2 v_pos;
out vec4 outputColor;
#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  outputColor = v_color;
  if (u_opacitylinear > 0.0) {
    outputColor.a *= u_dir == 1.0 ? 1.0 - length(v_pos - v_linear.xy)/v_linear.z : length(v_pos - v_linear.xy)/v_linear.z;
  }
  outputColor = filterColor(outputColor);
}
`,UT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 15) in vec3 a_linear;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

out vec4 v_color;
out vec3 v_linear;
out vec2 v_pos;

#pragma include "projection"
#pragma include "picking"

void main() {
  if (u_opacitylinear > 0.0) {
    v_linear = a_linear;
    v_pos = a_Position.xy;
  }
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  project_pos.z += u_raisingHeight;

  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));
  setPickingColor(a_PickingColor);
}`,zT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
};


out vec4 v_color;


#pragma include "projection"
#pragma include "picking"

void main() {
  // cal style mapping - 数据纹理映射部分的计算

  // cal style mapping - 数据纹理映射部分的计算

  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  project_pos.z += u_raisingHeight;

  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

 
  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}

`,$T=function(e){be(r,e);var t=OT(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.opacityLinear,s=u===void 0?{enable:!1,dir:"in"}:u,l={u_raisingHeight:Number(o),u_opacitylinear:Number(s.enable),u_dir:s.dir==="in"?1:0},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.getModelParams(),u=o.frag,s=o.vert,l=o.triangulation,c=o.type,this.initUniformsBuffer(),this.layer.triangulation=l,d.next=5,this.layer.buildLayerModel({moduleName:c,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:l,primitive:L.TRIANGLES,depth:{enable:!1}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1,dir:"in"}:a;o.enable&&this.styleAttributeService.registerStyleAttribute({name:"linear",type:_e.Attribute,descriptor:{name:"a_linear",shaderLocation:we.LINEAR,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(s,l,c){return[c[3],c[4],c[5]]}}})}},{key:"getModelParams",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1}:a;return o.enable?{frag:BT,vert:UT,type:"polygonLinear",triangulation:iA}:{frag:NT,vert:zT,type:"polygonFill",triangulation:a0}}}]),r}(et);function VT(e){var t=jT();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function jT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var HT=`
layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};

in vec2 v_uv;
in float v_opacity;
out vec4 outputColor;

float coast2water_fadedepth = 0.10;
float large_waveheight      = .750; // change to adjust the "heavy" waves
float large_wavesize        = 3.4;  // factor to adjust the large wave size
float small_waveheight      = 0.6;  // change to adjust the small random waves
float small_wavesize        = 0.5;   // factor to ajust the small wave size
float water_softlight_fact  = 15.;  // range [1..200] (should be << smaller than glossy-fact)
float water_glossylight_fact= 120.; // range [1..200]
float particle_amount       = 70.;

vec3 water_specularcolor    = vec3(1.3, 1.3, 0.9);    // specular Color (RGB) of the water-highlights
#define light                 vec3(-0., sin(u_time*0.5)*.5 + .35, 2.8) // position of the sun

uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;

  

float hash( float n ) {
    return fract(sin(n)*43758.5453123);
}

// 2d noise function
float noise1( in vec2 x ) {
  vec2 p  = floor(x);
  vec2 f  = smoothstep(0.0, 1.0, fract(x));
  float n = p.x + p.y*57.0;
  return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
    mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

float noise(vec2 p) {
    return texture(SAMPLER_2D(u_texture2),p*vec2(1./256.)).x;
}

vec4 highness(vec2 p) {
    vec4 t = texture(SAMPLER_2D(u_texture1),fract(p));
    float clipped = -2.0-smoothstep(3.,10.,t.a)*6.9-smoothstep(10.,100.,t.a)*89.9-smoothstep(0.,10000.,t.a)*10000.0;
    return clamp(t, 0.0,3.0)+clamp(t/3.0-1.0, 0.0,1.0)+clamp(t/16.0-1.0, 0.0,1.0);
}

float height_map( vec2 p ) {
    vec4 height=highness(p);
    /*
    height = -0.5+
        0.5*smoothstep(-100.,0.,-height)+
        2.75*smoothstep(0.,2.,height)+
        1.75*smoothstep(2.,4.,height)+
        2.75*smoothstep(4.,16.,height)+
        1.5*smoothstep(16.,1000.,height);
    */

    mat2 m = mat2( 0.9563*1.4,  -0.2924*1.4,  0.2924*1.4,  0.9563*1.4 );
    //p = p*6.;
    float f = 0.6000*noise1( p ); p = m*p*1.1*6.;
    f += 0.2500*noise( p ); p = m*p*1.32;
    f += 0.1666*noise( p ); p = m*p*1.11;
    f += 0.0834*noise( p ); p = m*p*1.12;
    f += 0.0634*noise( p ); p = m*p*1.13;
    f += 0.0444*noise( p ); p = m*p*1.14;
    f += 0.0274*noise( p ); p = m*p*1.15;
    f += 0.0134*noise( p ); p = m*p*1.16;
    f += 0.0104*noise( p ); p = m*p*1.17;
    f += 0.0084*noise( p );
    f = .25*f+dot(height,vec4(-.03125,-.125,.25,.25))*.5;
        const float FLAT_LEVEL = 0.92525;
        //f = f*0.25+height*0.75;
    if (f<FLAT_LEVEL)
        f = f;
    else
        f = pow((f-FLAT_LEVEL)/(1.-FLAT_LEVEL), 2.)*(1.-FLAT_LEVEL)*2.0+FLAT_LEVEL; // makes a smooth coast-increase
    return clamp(f, 0., 10.);
}

vec3 plasma_quintic( float x ) {
    x = clamp( x, 0.0, 1.0);
    vec4 x1 = vec4( 1.0, x, x * x, x * x * x ); // 1 x x2 x3
    vec4 x2 = x1 * x1.w * x; // x4 x5 x6 x7
    return vec3(
        dot( x1.xyzw, vec4( +0.063861086, +1.992659096, -1.023901152, -0.490832805 ) ) + dot( x2.xy, vec2( +1.308442123, -0.914547012 ) ),
        dot( x1.xyzw, vec4( +0.049718590, -0.791144343, +2.892305078, +0.811726816 ) ) + dot( x2.xy, vec2( -4.686502417, +2.717794514 ) ),
        dot( x1.xyzw, vec4( +0.513275779, +1.580255060, -5.164414457, +4.559573646 ) ) + dot( x2.xy, vec2( -1.916810682, +0.570638854 ) ) );
}

vec4 color(vec2 p){
    vec4 c1 = vec4(1.7,1.6,.9,1);
    vec4 c2 = vec4(.2,.94,.1,1);
    vec4 c3 = vec4(.3,.2,.0,1);
    vec4 c4 = vec4(.99,.99,1.6,1);
    vec4 v = highness(p);
    float los = smoothstep(0.1,1.1,v.b);
    float his = smoothstep(3.5,6.5,v.b);
    float ces = smoothstep(1.,5.,v.a);
    vec4 lo = mix(c1,c2,los);
    vec4 hi = mix(c3,c4,his);
    vec4 ce = mix(lo,hi,ces);

    return vec4(plasma_quintic(ces),1).ragb;
}

vec3 terrain_map( vec2 p )
{
  return color(p).rgb*0.75+0.25*vec3(0.7, .55, .4)+texture(SAMPLER_2D(u_texture3), fract(p*5.)).rgb*.5; // test-terrain is simply 'sandstone'
}

const mat2 m = mat2( 0.72, -1.60,  1.60,  0.72 );

float water_map( vec2 p, float height ) {
    vec2 p2 = p*large_wavesize;
    vec2 shift1 = 0.001*vec2( u_time*160.0*2.0, u_time*120.0*2.0 );
    vec2 shift2 = 0.001*vec2( u_time*190.0*2.0, -u_time*130.0*2.0 );

    // coarse crossing 'ocean' waves...
    float f = 0.6000*noise( p );
    f += 0.2500*noise( p*m );
    f += 0.1666*noise( p*m*m );
    float wave = sin(p2.x*0.622+p2.y*0.622+shift2.x*4.269)*large_waveheight*f*height*height ;

    p *= small_wavesize;
    f = 0.;
    float amp = 1.0, s = .5;
    for (int i=0; i<9; i++)
    { p = m*p*.947; f -= amp*abs(sin((noise( p+shift1*s )-.5)*2.)); amp = amp*.59; s*=-1.329; }
    
    return wave+f*small_waveheight;
}

float nautic(vec2 p) {
    p *= 18.;
    float f = 0.;
    float amp = 1.0, s = .5;
    for (int i=0; i<3; i++)
    { p = m*p*1.2; f += amp*abs(smoothstep(0., 1., noise( p+u_time*s ))-.5); amp = amp*.5; s*=-1.227; }
    return pow(1.-f, 5.);
}

float particles(vec2 p) {
    p *= 200.;
    float f = 0.;
    float amp = 1.0, s = 1.5;
    for (int i=0; i<3; i++)
    { p = m*p*1.2; f += amp*noise( p+u_time*s ); amp = amp*.5; s*=-1.227; }
    return pow(f*.35, 7.)*particle_amount;
}

float test_shadow( vec2 xy, float height) {
    vec3 r0 = vec3(xy, height);
    vec3 rd = normalize( light - r0 );
    
    float hit = 1.0;
    float t   = 0.001;
    for (int j=1; j<25; j++)
    {
        vec3 p = r0 + t*rd;
        float h = height_map( p.xy );
        float height_diff = p.z - h;
        if (height_diff<0.0)
        {
            return 0.0;
        }
        t += 0.01+height_diff*.02;
        hit = min(hit, 2.*height_diff/t); // soft shaddow   
    }
    return hit;
}

vec3 CalcTerrain(vec2 uv, float height) {
    vec3 col = terrain_map( uv );
    vec2 iResolution = vec2(512.);
    float h1 = height_map(uv-vec2(0., 0.5)/ iResolution.xy);
    float h2 = height_map(uv+vec2(0., 0.5)/ iResolution.xy);
    float h3 = height_map(uv-vec2(0.5, 0.)/ iResolution.xy);
    float h4 = height_map(uv+vec2(0.5, 0.)/ iResolution.xy);
    vec3 norm = normalize(vec3(h3-h4, h1-h2, 1.));
    vec3 r0 = vec3(uv, height);
    vec3 rd = normalize( light - r0 );
    float grad = dot(norm, rd);
    col *= grad+pow(grad, 8.);
    float terrainshade = test_shadow( uv, height );
    col = mix(col*.25, col, terrainshade);
    return col;
}


void main() {
  vec3 watercolor = u_watercolor.rgb;
  vec3 watercolor2 = u_watercolor2.rgb;
  vec2 uv = v_uv;
  float WATER_LEVEL = 0.84; // Water level (range: 0.0 - 2.0)
  float deepwater_fadedepth   = 0.4 + coast2water_fadedepth;
  float height = height_map( uv );
  vec3 col;

    float waveheight = clamp(WATER_LEVEL*3.-1.5, 0., 1.);
    float level = WATER_LEVEL + .2*water_map(uv*15. + vec2(u_time*.1), waveheight);
    if (height > level)
    {
        col = CalcTerrain(uv, height);
    }
    if (height <= level)
    {
        vec2 dif = vec2(.0, .01);
        vec2 pos = uv*15. + vec2(u_time*.01);
        float h1 = water_map(pos-dif,waveheight);
        float h2 = water_map(pos+dif,waveheight);
        float h3 = water_map(pos-dif.yx,waveheight);
        float h4 = water_map(pos+dif.yx,waveheight);
        vec3 normwater = normalize(vec3(h3-h4, h1-h2, .125)); // norm-vector of the 'bumpy' water-plane
        uv += normwater.xy*.002*(level-height);
        
        col = CalcTerrain(uv, height);

        float coastfade = clamp((level-height)/coast2water_fadedepth, 0., 1.);
        float coastfade2= clamp((level-height)/deepwater_fadedepth, 0., 1.);
        float intensity = col.r*.2126+col.g*.7152+col.b*.0722;
        watercolor = mix(watercolor*intensity, watercolor2, smoothstep(0., 1., coastfade2));

        vec3 r0 = vec3(uv, WATER_LEVEL);
        vec3 rd = normalize( light - r0 ); // ray-direction to the light from water-position
        float grad     = dot(normwater, rd); // dot-product of norm-vector and light-direction
        float specular = pow(grad, water_softlight_fact);  // used for soft highlights                          
        float specular2= pow(grad, water_glossylight_fact); // used for glossy highlights
        float gradpos  = dot(vec3(0., 0., 1.), rd);
        float specular1= smoothstep(0., 1., pow(gradpos, 5.));  // used for diffusity (some darker corona around light's specular reflections...)                          
        float watershade  = test_shadow( uv, level );
        watercolor *= 2.2+watershade;
        watercolor += (.2+.8*watershade) * ((grad-1.0)*.5+specular) * .25;
        watercolor /= (1.+specular1*1.25);
        watercolor += watershade*specular2*water_specularcolor;
        watercolor += watershade*coastfade*(1.-coastfade2)*(vec3(.5, .6, .7)*nautic(uv)+vec3(1., 1., 1.)*particles(uv));
        
        col = mix(col, watercolor, coastfade);
    }
    
  outputColor = vec4(col, v_opacity);  
}
`,GT=`layout(location = 0) in vec3 a_Position;
layout(location = 14) in vec2 a_uv;

layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};


out vec2 v_uv;
out float v_opacity;

#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_opacity = opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));
}

`,WT=function(e){be(r,e);var t=VT(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.watercolor,o=a===void 0?"#6D99A8":a,u=i.watercolor2,s=u===void 0?"#0F121C":u,l={u_watercolor:qe(o),u_watercolor2:qe(s),u_time:this.layer.getLayerAnimateTime(),u_texture1:this.texture1,u_texture2:this.texture2,u_texture3:this.texture3};this.textures=[this.texture1,this.texture2,this.texture3];var c=this.getUniformsBufferInfo(l);return c}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonOcean",vertexShader:GT,fragmentShader:HT,inject:this.getInject(),triangulation:Fs,primitive:L.TRIANGLES,depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a,o;(i=this.texture1)===null||i===void 0||i.destroy(),(a=this.texture2)===null||a===void 0||a.destroy(),(o=this.texture3)===null||o===void 0||o.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Ie(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"oceanUv",type:_e.Attribute,descriptor:{name:"a_uv",shaderLocation:we.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Ie(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.rendererService.createTexture2D,o={height:0,width:0};this.texture1=a(o),this.texture2=a(o),this.texture3=a(o),u(function(l){i.texture1=s(l[0]),i.texture2=s(l[1]),i.texture3=s(l[2]),i.layerService.reRender()});function u(l){var c=0,f=[],h=["https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*MJ22QbpuCzIAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*-z2HSIVDsHIAAAAAAAAAAAAAARQnAQ"];h.map(function(d){var v=new Image;v.crossOrigin="",v.src=d,f.push(v),v.onload=function(){c++,c===3&&l(f)}})}function s(l){return a({data:l,width:l.width,height:l.height,wrapS:L.MIRRORED_REPEAT,wrapT:L.MIRRORED_REPEAT,min:L.LINEAR,mag:L.LINEAR})}}}]),r}(et);function YT(e){var t=XT();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function XT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ZT=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};

out vec4 outputColor;


in vec4 v_Color;
in vec2 v_uv;

float rand(vec2 n) { return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453); }

float water(vec3 p) {
  float t = u_time * u_speed;
  p.z += t * 2.; p.x += t * 2.;
  vec3 c1 = texture(SAMPLER_2D(u_texture), p.xz / 30.).xyz;
  p.z += t * 3.; p.x += t * 0.52;
  vec3 c2 = texture(SAMPLER_2D(u_texture), p.xz / 30.).xyz;
  p.z += t * 4.; p.x += t * 0.8;
  vec3 c3 = texture(SAMPLER_2D(u_texture), p.xz / 30.).xyz;
  c1 += c2 - c3;
  float z = (c1.x + c1.y + c1.z) / 3.;
  return p.y + z / 4.;
}

float map(vec3 p) {
  float d = 100.0;
  d = water(p);
  return d;
}

float intersect(vec3 ro, vec3 rd) {
  float d = 0.0;
  for (int i = 0; i <= 100; i++) {
    float h = map(ro + rd * d);
    if (h < 0.1) return  d;
    d += h;
  }
  return 0.0;
}

vec3 norm(vec3 p) {
  float eps = .1;
  return normalize(vec3(
    map(p + vec3(eps, 0, 0)) - map(p + vec3(-eps, 0, 0)),
    map(p + vec3(0, eps, 0)) - map(p + vec3(0, -eps, 0)),
    map(p + vec3(0, 0, eps)) - map(p + vec3(0, 0, -eps))
  ));
} 

float calSpc() {
  vec3 l1 = normalize(vec3(1, 1, 1));
  vec3 ro = vec3(-3, 20, -8);
  vec3 rc = vec3(0, 0, 0);
  vec3 ww = normalize(rc - ro);
  vec3 uu = normalize(cross(vec3(0,1,0), ww));
  vec3 vv = normalize(cross(rc - ro, uu));
  vec3 rd = normalize(uu * v_uv.x + vv * v_uv.y + ww);
  float d = intersect(ro, rd);
  vec3 p = ro + rd * d;
  vec3 n = norm(p);
  float spc = pow(max(0.0, dot(reflect(l1, n), rd)), 30.0);
  return spc;
}

void main() {

  outputColor = v_Color;
  float spc = calSpc();
  outputColor += spc * 0.4;
}
`,qT=`layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 14) in vec2 a_uv;
layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};
out vec4 v_Color;
out vec2 v_uv;


#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_Color = a_Color;
  v_Color.a *= opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xyz, 1.0));
}

`,KT=function(e){be(r,e);var t=YT(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.speed,o=a===void 0?.5:a,u={u_speed:o,u_time:this.layer.getLayerAnimateTime(),u_texture:this.texture};this.textures=[this.texture];var s=this.getUniformsBufferInfo(u);return s}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonWater",vertexShader:qT,fragmentShader:ZT,triangulation:Fs,inject:this.getInject(),primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1,diagnosticDerivativeUniformityEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Ie(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"waterUv",type:_e.Attribute,descriptor:{name:"a_uv",shaderLocation:we.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Ie(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.waterTexture,u=this.rendererService.createTexture2D;this.texture=u({height:1,width:1});var s=new Image;s.crossOrigin="",o?(console.warn("L7 recommend：https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ"),s.src=o):s.src="https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ",s.onload=function(){i.texture=u({data:s,width:s.width,height:s.height,wrapS:L.MIRRORED_REPEAT,wrapT:L.MIRRORED_REPEAT,min:L.LINEAR,mag:L.LINEAR}),i.layerService.reRender()}}}]),r}(et),QT={fill:$T,line:ag,extrude:IT,text:pg,point_fill:sg,point_image:lg,point_normal:cg,point_extrude:ug,water:KT,ocean:WT,extrusion:FT};function JT(e){var t=e4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function e4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var gg=function(e){be(r,e);var t=JT(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","PolygonLayer"),S(R(n),"enableShaderEncodeStyles",["opacity","extrusionBase","rotation","offsets","stroke"]),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new QT[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){var i,a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o==="fill"||!o?"fill":o==="extrude"?"extrude":o==="extrusion"?"extrusion":o==="water"?"water":o==="ocean"?"ocean":o==="line"?"line":this.getPointModelType()}},{key:"getPointModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=this.iconService.getIconMap(),l=i.find(function(f){return f.hasOwnProperty("shape")});if(l){var c=l.shape;return c==="dot"?"point_normal":(o==null?void 0:o.indexOf(c))!==-1?"point_fill":(u==null?void 0:u.indexOf(c))!==-1?"point_extrude":s.hasOwnProperty(c)?"point_image":"text"}else return"fill"}}]),r}(Un);function t4(e){var t=r4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function r4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var n4=`layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

uniform sampler2D u_rasterTexture;
uniform sampler2D u_colorTexture;

in vec2 v_texCoord;

bool isnan_emu(float x) { return (x > 0.0 || x < 0.0) ? x != x : x != 0.0; }

out vec4 outputColor;

void main() {
  // Can use any component here since u_rasterTexture is under luminance format.
  float value = texture(SAMPLER_2D(u_rasterTexture), vec2(v_texCoord.x, v_texCoord.y)).r;
  if (value == u_noDataValue || isnan_emu(value)) {
    discard;
  } else if ((u_clampLow < 0.5 && value < u_domain[0]) || (u_clampHigh < 0.5 && value > u_domain[1])) {
    discard;
  } else {
    float normalisedValue =(value - u_domain[0]) / (u_domain[1] - u_domain[0]);
    vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(normalisedValue, 0));
    
    outputColor = color;
    outputColor.a = outputColor.a * u_opacity ;
    if (outputColor.a < 0.01)
      discard;
  }
}
`,i4=`
layout(location = 0) in vec3 a_Position;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
   v_texCoord = a_Uv;
   vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy,0., 1.0));
}
`,Od=function(e){be(r,e);var t=t4(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.clampLow,s=u===void 0?!0:u,l=i.clampHigh,c=l===void 0?!0:l,f=i.noDataValue,h=f===void 0?-9999999:f,d=i.domain,v=i.rampColors,p=d||cs(v);this.colorTexture=this.layer.textureService.getColorTexture(v,p);var g={u_domain:p,u_opacity:o||1,u_noDataValue:h,u_clampLow:s?1:0,u_clampHigh:(typeof c<"u"?c:s)?1:0,u_rasterTexture:this.texture,u_colorTexture:this.colorTexture};this.textures=[this.texture,this.colorTexture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var n=Y(A.mark(function a(o){var u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!Array.isArray(o.data)){h.next=4;break}return h.abrupt("return",{data:o.data,width:o.width,height:o.height});case 4:return h.next=6,o.data;case 6:return u=h.sent,s=u.rasterData,l=u.width,c=u.height,h.abrupt("return",{data:Array.from(s),width:l,height:c});case 11:case"end":return h.stop()}},a)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d,v,p;return A.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService,s=u.createTexture2D,l=u.queryVerdorInfo,c=o.data.dataArray[0],m.next=6,this.getRasterData(c);case 6:return f=m.sent,h=f.data,d=f.width,v=f.height,this.texture=s({data:new Float32Array(h),width:d,height:v,format:l()==="WebGL1"?L.LUMINANCE:L.RED,type:L.FLOAT,alignment:1}),m.next=13,this.layer.buildLayerModel({moduleName:"rasterImageData",vertexShader:i4,fragmentShader:n4,triangulation:to,primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return p=m.sent,m.abrupt("return",[p]);case 15:case"end":return m.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a;(i=this.texture)===null||i===void 0||i.destroy(),(a=this.colorTexture)===null||a===void 0||a.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{shaderLocation:we.UV,name:"a_Uv",buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),r}(et),a4=["data"],o4=["rasterData"];function u4(e){var t=s4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function s4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var l4=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
 vec2 u_rminmax;
 vec2 u_gminmax;
 vec2 u_bminmax;
 float u_opacity;
 float u_noDataValue;
};

in vec2 v_texCoord;

out vec4 outputColor;

void main() {

  vec3 rgb = texture(SAMPLER_2D(u_texture),vec2(v_texCoord.x,v_texCoord.y)).rgb;

  if(rgb == vec3(u_noDataValue)) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
    outputColor = vec4(rgb.r / (u_rminmax.y -u_rminmax.x), rgb.g /(u_gminmax.y -u_gminmax.x), rgb.b/ (u_bminmax.y - u_bminmax.x), u_opacity);
  }

  if(outputColor.a < 0.01)
    discard;
 
}`,c4=`
layout(location = 0) in vec3 a_Position;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
 vec2 u_rminmax;
 vec2 u_gminmax;
 vec2 u_bminmax;
 float u_opacity;
 float u_noDataValue;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
   v_texCoord = a_Uv;
   vec4 project_pos = project_position(vec4(a_Position, 1.0));
   gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy,0., 1.0));
}
`,f4=function(e){be(r,e);var t=u4(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"dataOption",{}),n}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.noDataValue,s=u===void 0?0:u,l=this.dataOption,c=l.rMinMax,f=c===void 0?[0,255]:c,h=l.gMinMax,d=h===void 0?[0,255]:h,v=l.bMinMax,p=v===void 0?[0,255]:v,g={u_rminmax:f,u_gminmax:d,u_bminmax:p,u_opacity:o||1,u_noDataValue:s,u_texture:this.texture};this.textures=[this.texture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var n=Y(A.mark(function a(o){var u,s,l,c,f;return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!Array.isArray(o.data)){d.next=4;break}return u=o.data,s=Wt(o,a4),this.dataOption=s,d.abrupt("return",z({data:u},s));case 4:return d.next=6,o.data;case 6:if(l=d.sent,c=l.rasterData,f=Wt(l,o4),this.dataOption=f,!Array.isArray(c)){d.next=14;break}return d.abrupt("return",z({data:c},f));case 14:return d.abrupt("return",z({data:Array.from(c)},f));case 15:case"end":return d.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h,d;return A.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,s=o.data.dataArray[0],p.next=6,this.getRasterData(s);case 6:return l=p.sent,c=l.data,f=l.width,h=l.height,this.texture=u({data:new Float32Array(c),width:f,height:h,format:L.RGB,type:L.FLOAT}),p.next=13,this.layer.buildLayerModel({moduleName:"rasterImageDataRGBA",vertexShader:c4,fragmentShader:l4,triangulation:to,primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return d=p.sent,p.abrupt("return",[d]);case 15:case"end":return p.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_Uv",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),r}(et);function h4(e){var t=d4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function d4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var v4=`uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

layout(std140) uniform commonUniforms {
 vec4 u_unpack;
 vec2 u_domain;
 float u_opacity;
 float u_noDataValue;
 float u_clampLow;
 float u_clampHigh;
};

in vec2 v_texCoord;
out vec4 outputColor;


float getElevation(vec2 coord, float bias) {
    // Convert encoded elevation value to meters
    vec4 data =  texture(SAMPLER_2D(u_texture), coord,bias) * 255.0;
    data.a = -1.0;
    return dot(data, u_unpack);
}

vec4 getColor(float value) {
   float normalisedValue =(value- u_domain[0]) / (u_domain[1] - u_domain[0]);
    vec2 coord = vec2(normalisedValue, 0);
    return  texture(SAMPLER_2D(u_colorTexture), coord);
}

void main() {
  float value = getElevation(v_texCoord,0.0);
  if (value == u_noDataValue) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else if ((u_clampLow < 0.5 && value < u_domain[0]) || (u_clampHigh < 0.5 && value > u_domain[1])) {
     outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
   
    outputColor = getColor(value);
    outputColor.a =  outputColor.a * u_opacity ;
      if(outputColor.a < 0.01)
      discard;
  }
}
`,p4=`layout(location = 0) in vec3 a_Position;
layout(location = 14) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
   vec4 u_unpack;
   vec2 u_domain;
   float u_opacity;
   float u_noDataValue;
   float u_clampLow;
   float u_clampHigh;
};
out vec2 v_texCoord;
#pragma include "projection"

void main() {
   v_texCoord = a_Uv;
   vec4 project_pos = project_position(vec4(a_Position, 1.0));
   gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy,0., 1.0));
}
`,g4=function(e){be(r,e);var t=h4(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.clampLow,u=o===void 0?!0:o,s=i.clampHigh,l=s===void 0?!0:s,c=i.noDataValue,f=c===void 0?-9999999:c,h=i.domain,d=i.rampColors,v=i.colorTexture,p=i.rScaler,g=p===void 0?6553.6:p,m=i.gScaler,_=m===void 0?25.6:m,y=i.bScaler,x=y===void 0?.1:y,b=i.offset,k=b===void 0?1e4:b,T=h||cs(d),D=v;v?this.layer.textureService.setColorTexture(v,d,T):D=this.layer.textureService.getColorTexture(d,T);var U={u_unpack:[g,_,x,k],u_domain:T,u_opacity:a||1,u_noDataValue:f,u_clampLow:u,u_clampHigh:typeof l<"u"?l:u,u_texture:this.texture,u_colorTexture:D};this.textures=[this.texture,D];var I=this.getUniformsBufferInfo(U);return I}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,f.next=5,o.data.images;case 5:return s=f.sent,this.texture=u({data:s[0],width:s[0].width,height:s[0].height,min:L.LINEAR,mag:L.LINEAR}),f.next=9,this.layer.buildLayerModel({moduleName:"RasterTileDataImage",vertexShader:p4,fragmentShader:v4,triangulation:to,primitive:L.TRIANGLES,depth:{enable:!1}});case 9:return l=f.sent,f.abrupt("return",[l]);case 11:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:_e.Attribute,descriptor:{name:"a_Uv",shaderLocation:we.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),r}(et),m4={raster:Od,rasterRgb:f4,raster3d:Od,rasterTerrainRgb:g4};function y4(e){var t=_4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function _4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Ds=function(e){be(r,e);var t=y4(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","RasterLayer"),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new m4[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={raster:{},rasterRgb:{},raster3d:{},rasterTerrainRgb:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.layerSource.getParserType();switch(i){case"raster":return"raster";case"rasterRgb":return"rasterRgb";case"rgb":return"rasterRgb";case"image":return"rasterTerrainRgb";default:return"raster"}}},{key:"getLegend",value:function(i){if(i!=="color")return{type:void 0,field:void 0,items:[]};var a=this.getLayerConfig().rampColors;return sA(a,i)}}]),r}(Un);function x4(e){var t=b4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function b4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var S4=`layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

out vec4 outputColor;

void main() {
  outputColor = u_color;
  outputColor.a *= u_opacity;
}
`,E4=`layout(location = 0) in vec3 a_Position;

layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

#pragma include "projection"

void main() {
  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  if(u_CoordinateSystem == COORDINATE_SYSTEM_P20_2) { // gaode2.x
    gl_Position = u_Mvp * (vec4(project_pos.xyz, 1.0));
  } else {
    gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
  }
}

`,C4=function(e){be(r,e);var t=x4(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.color,s=u===void 0?"#000":u,l={u_color:qe(s),u_opacity:o||1},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var n=Y(A.mark(function a(){return A.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"mask",vertexShader:E4,fragmentShader:S4,triangulation:Fs,depth:{enable:!1},pick:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;i&&this.layerService.clear()}},{key:"registerBuiltinAttributes",value:function(){return""}}]),r}(et),A4={fill:C4};function w4(e){var t=T4();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function T4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var M4=function(e){be(r,e);var t=w4(r);function r(){var n;ie(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),S(R(n),"type","MaskLayer"),n}return ne(r,[{key:"buildModels",value:function(){var n=Y(A.mark(function a(){var o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new A4[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){return"fill"}}]),r}(Un),Dd,Nd,Bd,Ud,da,zd,$d,I4=Ze.cloneDeep,k4=(Dd=Re(),Nd=Ue(q.IMapService),Bd=Ue(q.IFontService),Dd(Ud=(da=function(){function e(){ie(this,e),Ne(this,"mapService",zd,this),Ne(this,"fontService",$d,this)}return ne(e,[{key:"apply",value:function(r,n){var i=this,a=n.styleAttributeService;r.hooks.init.tapPromise("DataMappingPlugin",Y(A.mark(function o(){return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:r.log(ct.MappingStart,vt.INIT),i.generateMaping(r,{styleAttributeService:a}),r.log(ct.MappingEnd,vt.INIT);case 3:case"end":return s.stop()}},o)}))),r.hooks.beforeRenderData.tapPromise("DataMappingPlugin",function(){var o=Y(A.mark(function u(s){var l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s){f.next=2;break}return f.abrupt("return",s);case 2:return r.dataState.dataMappingNeedUpdate=!1,r.log(ct.MappingStart,vt.UPDATE),l=i.generateMaping(r,{styleAttributeService:a}),r.log(ct.MappingEnd,vt.UPDATE),f.abrupt("return",l);case 7:case"end":return f.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),r.hooks.beforeRender.tap("DataMappingPlugin",function(){var o=r.getSource();if(!(r.layerModelNeedUpdate||!o||!o.inited)){var u=a.getLayerStyleAttributes()||[],s=a.getLayerStyleAttribute("filter"),l=o.data.dataArray;if(!(Array.isArray(l)&&l.length===0)){var c=u.filter(function(d){return d.needRemapping}),f=l;if(s!=null&&s.needRemapping&&s!==null&&s!==void 0&&s.scale&&(f=l.filter(function(d){return i.applyAttributeMapping(s,d)[0]})),c.length){var h=i.mapping(r,c,f,r.getEncodedData());r.setEncodedData(h)}}}})}},{key:"generateMaping",value:function(r,n){var i=this,a=n.styleAttributeService,o=a.getLayerStyleAttributes()||[],u=a.getLayerStyleAttribute("filter"),s=r.getSource().data.dataArray,l=s;u!=null&&u.scale&&(l=s.filter(function(f){return i.applyAttributeMapping(u,f)[0]})),l=r.processData(l);var c=this.mapping(r,o,l,void 0);return r.setEncodedData(c),r.emit("dataUpdate",null),!0}},{key:"mapping",value:function(r,n,i,a){var o=this,u=n.filter(function(l){return l.scale!==void 0}).filter(function(l){return l.name!=="filter"}),s=i.map(function(l,c){var f=a?a[c]:{},h=z({id:l._id,coordinates:l.coordinates},f);return u.forEach(function(d){var v=o.applyAttributeMapping(d,l);(d.name==="color"||d.name==="stroke")&&(v=v.map(function(p){return qe(p)})),h[d.name]=Array.isArray(v)&&v.length===1?v[0]:v,d.name==="shape"&&(h.shape=o.fontService.getIconFontKey(h[d.name]))}),h});return n.forEach(function(l){l.needRemapping=!1}),this.adjustData2Amap2Coordinates(s,r),this.adjustData2SimpleCoordinates(s),s}},{key:"adjustData2Amap2Coordinates",value:function(r,n){var i=this;if(r.length>0&&this.mapService.version==="GAODE2.x"){var a=n.coordCenter||n.getSource().center;r.filter(function(o){return!o.originCoordinates}).map(function(o){o.version="GAODE2.x",o.originCoordinates=I4(o.coordinates),o.coordinates=i.mapService.coordToAMap2RelativeCoordinates(o.coordinates,a)})}}},{key:"adjustData2SimpleCoordinates",value:function(r){var n=this;r.length>0&&this.mapService.version==="SIMPLE"&&r.map(function(i){i.simpleCoordinate||(i.coordinates=n.unProjectCoordinates(i.coordinates),i.simpleCoordinate=!0)})}},{key:"unProjectCoordinates",value:function(r){var n=this;if(typeof r[0]=="number")return this.mapService.simpleMapCoord.unproject(r);if(r[0]&&r[0][0]instanceof Array){var i=[];return r.map(function(o){var u=[];o.map(function(s){u.push(n.mapService.simpleMapCoord.unproject(s))}),i.push(u)}),i}else{var a=[];return r.map(function(o){a.push(n.mapService.simpleMapCoord.unproject(o))}),a}}},{key:"applyAttributeMapping",value:function(r,n){var i;if(!r.scale)return[];var a=(r==null||(i=r.scale)===null||i===void 0?void 0:i.scalers)||[],o=[];a.forEach(function(s){var l,c=s.field;(n.hasOwnProperty(c)||((l=r.scale)===null||l===void 0?void 0:l.type)==="variable")&&o.push(n[c])});var u=r.mapping?r.mapping(o):[];return u}},{key:"getArrowPoints",value:function(r,n){var i=[n[0]-r[0],n[1]-r[1]],a=b1(i),o=[r[0]+a[0]*1e-4,r[1]+a[1]*1e-4];return o}}]),e}(),zd=Oe(da.prototype,"mapService",[Nd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$d=Oe(da.prototype,"fontService",[Bd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),da))||Ud),Vd,jd,L4=(Vd=Re(),Vd(jd=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){var n=this;this.mapService=r.getContainer().get(q.IMapService),r.hooks.init.tapPromise("DataSourcePlugin",Y(A.mark(function i(){var a,o,u,s;return A.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(r.log(ct.SourceInitStart,vt.INIT),a=r.getSource(),a||(o=r.sourceOption||r.defaultSourceConfig,u=o.data,s=o.options,a=new q0(u,s),r.setSource(a)),!a.inited){c.next=8;break}n.updateClusterData(r),r.log(ct.SourceInitEnd,vt.INIT),c.next=10;break;case 8:return c.next=10,new Promise(function(f){a.on("update",function(h){h.type==="inited"&&(n.updateClusterData(r),r.log(ct.SourceInitEnd,vt.INIT)),f(null)})});case 10:case"end":return c.stop()}},i)}))),r.hooks.beforeRenderData.tapPromise("DataSourcePlugin",Y(A.mark(function i(){var a,o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a=n.updateClusterData(r),o=r.dataState.dataSourceNeedUpdate,r.dataState.dataSourceNeedUpdate=!1,u=a||o,l.abrupt("return",u);case 5:case"end":return l.stop()}},i)})))}},{key:"updateClusterData",value:function(r){if(r.isTileLayer||r.tileLayer||!r.getSource())return!1;var n=r.getSource(),i=n.cluster,a=n.clusterOptions.zoom,o=a===void 0?0:a,u=this.mapService.getZoom()-1,s=r.dataState.dataSourceNeedUpdate;return i&&s&&n.updateClusterData(Math.floor(u)),i&&Math.abs(r.clusterZoom-u)>=1?(o!==Math.floor(u)&&n.updateClusterData(Math.floor(u)),r.clusterZoom=u,!0):!1}}]),e}())||jd);function Ns(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function mg(e){return e.length===1&&(e=R4(e)),{left:function(t,r,n,i){for(n==null&&(n=0),i==null&&(i=t.length);n<i;){var a=n+i>>>1;e(t[a],r)<0?n=a+1:i=a}return n},right:function(t,r,n,i){for(n==null&&(n=0),i==null&&(i=t.length);n<i;){var a=n+i>>>1;e(t[a],r)>0?i=a:n=a+1}return n}}}function R4(e){return function(t,r){return Ns(e(t),r)}}var P4=mg(Ns),ro=P4.right;function F4(e){return e===null?NaN:+e}function Hd(e,t){var r=e.length,n=-1,i,a,o;if(t==null){for(;++n<r;)if((i=e[n])!=null&&i>=i)for(a=o=i;++n<r;)(i=e[n])!=null&&(a>i&&(a=i),o<i&&(o=i))}else for(;++n<r;)if((i=t(e[n],n,e))!=null&&i>=i)for(a=o=i;++n<r;)(i=t(e[n],n,e))!=null&&(a>i&&(a=i),o<i&&(o=i));return[a,o]}var Yu=Math.sqrt(50),Xu=Math.sqrt(10),Zu=Math.sqrt(2);function yg(e,t,r){var n,i=-1,a,o,u;if(t=+t,e=+e,r=+r,e===t&&r>0)return[e];if((n=t<e)&&(a=e,e=t,t=a),(u=Sa(e,t,r))===0||!isFinite(u))return[];if(u>0)for(e=Math.ceil(e/u),t=Math.floor(t/u),o=new Array(a=Math.ceil(t-e+1));++i<a;)o[i]=(e+i)*u;else for(e=Math.floor(e*u),t=Math.ceil(t*u),o=new Array(a=Math.ceil(e-t+1));++i<a;)o[i]=(e-i)/u;return n&&o.reverse(),o}function Sa(e,t,r){var n=(t-e)/Math.max(0,r),i=Math.floor(Math.log(n)/Math.LN10),a=n/Math.pow(10,i);return i>=0?(a>=Yu?10:a>=Xu?5:a>=Zu?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=Yu?10:a>=Xu?5:a>=Zu?2:1)}function qu(e,t,r){var n=Math.abs(t-e)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(n)/Math.LN10)),a=n/i;return a>=Yu?i*=10:a>=Xu?i*=5:a>=Zu&&(i*=2),t<e?-i:i}function O4(e,t,r){if(r==null&&(r=F4),!!(n=e.length)){if((t=+t)<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,i=(n-1)*t,a=Math.floor(i),o=+r(e[a],a,e),u=+r(e[a+1],a+1,e);return o+(u-o)*(i-a)}}function D4(e,t,r,n,i){var a=e*e,o=a*e;return((1-3*e+3*a-o)*t+(4-6*a+3*o)*r+(1+3*e+3*a-3*o)*n+o*i)/6}function N4(e){var t=e.length-1;return function(r){var n=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),i=e[n],a=e[n+1],o=n>0?e[n-1]:2*i-a,u=n<t-1?e[n+2]:2*a-i;return D4((r-n/t)*t,o,i,a,u)}}function Bs(e){return function(){return e}}function B4(e,t){return function(r){return e+r*t}}function U4(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function z4(e){return(e=+e)==1?_g:function(t,r){return r-t?U4(t,r,e):Bs(isNaN(t)?r:t)}}function _g(e,t){var r=t-e;return r?B4(e,r):Bs(isNaN(e)?t:e)}const Gd=function e(t){var r=z4(t);function n(i,a){var o=r((i=Aa(i)).r,(a=Aa(a)).r),u=r(i.g,a.g),s=r(i.b,a.b),l=_g(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=u(c),i.b=s(c),i.opacity=l(c),i+""}}return n.gamma=e,n}(1);function $4(e){return function(t){var r=t.length,n=new Array(r),i=new Array(r),a=new Array(r),o,u;for(o=0;o<r;++o)u=Aa(t[o]),n[o]=u.r||0,i[o]=u.g||0,a[o]=u.b||0;return n=e(n),i=e(i),a=e(a),u.opacity=1,function(s){return u.r=n(s),u.g=i(s),u.b=a(s),u+""}}}var V4=$4(N4);function j4(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),i;return function(a){for(i=0;i<r;++i)n[i]=e[i]*(1-a)+t[i]*a;return n}}function H4(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function G4(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,i=new Array(n),a=new Array(r),o;for(o=0;o<n;++o)i[o]=Us(e[o],t[o]);for(;o<r;++o)a[o]=t[o];return function(u){for(o=0;o<n;++o)a[o]=i[o](u);return a}}function W4(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function Ra(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function Y4(e,t){var r={},n={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?r[i]=Us(e[i],t[i]):n[i]=t[i];return function(a){for(i in r)n[i]=r[i](a);return n}}var Ku=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Jo=new RegExp(Ku.source,"g");function X4(e){return function(){return e}}function Z4(e){return function(t){return e(t)+""}}function q4(e,t){var r=Ku.lastIndex=Jo.lastIndex=0,n,i,a,o=-1,u=[],s=[];for(e=e+"",t=t+"";(n=Ku.exec(e))&&(i=Jo.exec(t));)(a=i.index)>r&&(a=t.slice(r,a),u[o]?u[o]+=a:u[++o]=a),(n=n[0])===(i=i[0])?u[o]?u[o]+=i:u[++o]=i:(u[++o]=null,s.push({i:o,x:Ra(n,i)})),r=Jo.lastIndex;return r<t.length&&(a=t.slice(r),u[o]?u[o]+=a:u[++o]=a),u.length<2?s[0]?Z4(s[0].x):X4(t):(t=s.length,function(l){for(var c=0,f;c<t;++c)u[(f=s[c]).i]=f.x(l);return u.join("")})}function Us(e,t){var r=typeof t,n;return t==null||r==="boolean"?Bs(t):(r==="number"?Ra:r==="string"?(n=Ln(t))?(t=n,Gd):q4:t instanceof Ln?Gd:t instanceof Date?W4:H4(t)?j4:Array.isArray(t)?G4:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Y4:Ra)(e,t)}function K4(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function zr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function xg(e,t){switch(arguments.length){case 0:break;case 1:this.interpolator(e);break;default:this.interpolator(t).domain(e);break}return this}var jt="$";function Pa(){}Pa.prototype=Fa.prototype={constructor:Pa,has:function(e){return jt+e in this},get:function(e){return this[jt+e]},set:function(e,t){return this[jt+e]=t,this},remove:function(e){var t=jt+e;return t in this&&delete this[t]},clear:function(){for(var e in this)e[0]===jt&&delete this[e]},keys:function(){var e=[];for(var t in this)t[0]===jt&&e.push(t.slice(1));return e},values:function(){var e=[];for(var t in this)t[0]===jt&&e.push(this[t]);return e},entries:function(){var e=[];for(var t in this)t[0]===jt&&e.push({key:t.slice(1),value:this[t]});return e},size:function(){var e=0;for(var t in this)t[0]===jt&&++e;return e},empty:function(){for(var e in this)if(e[0]===jt)return!1;return!0},each:function(e){for(var t in this)t[0]===jt&&e(this[t],t.slice(1),this)}};function Fa(e,t){var r=new Pa;if(e instanceof Pa)e.each(function(u,s){r.set(s,u)});else if(Array.isArray(e)){var n=-1,i=e.length,a;if(t==null)for(;++n<i;)r.set(n,e[n]);else for(;++n<i;)r.set(t(a=e[n],n,e),a)}else if(e)for(var o in e)r.set(o,e[o]);return r}function Wd(){}var Wr=Fa.prototype;Wd.prototype={constructor:Wd,has:Wr.has,add:function(e){return e+="",this[jt+e]=e,this},remove:Wr.remove,clear:Wr.clear,values:Wr.keys,size:Wr.size,empty:Wr.empty,each:Wr.each};var bg=Array.prototype,Sg=bg.map,en=bg.slice,Yd={name:"implicit"};function Oa(){var e=Fa(),t=[],r=[],n=Yd;function i(a){var o=a+"",u=e.get(o);if(!u){if(n!==Yd)return n;e.set(o,u=t.push(a))}return r[(u-1)%r.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=Fa();for(var o=-1,u=a.length,s,l;++o<u;)e.has(l=(s=a[o])+"")||e.set(l,t.push(s));return i},i.range=function(a){return arguments.length?(r=en.call(a),i):r.slice()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return Oa(t,r).unknown(n)},zr.apply(i,arguments),i}function Q4(e){return function(){return e}}function J4(e){return+e}var Xd=[0,1];function Tt(e){return e}function Qu(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:Q4(isNaN(t)?NaN:.5)}function Zd(e){var t=e[0],r=e[e.length-1],n;return t>r&&(n=t,t=r,r=n),function(i){return Math.max(t,Math.min(r,i))}}function eM(e,t,r){var n=e[0],i=e[1],a=t[0],o=t[1];return i<n?(n=Qu(i,n),a=r(o,a)):(n=Qu(n,i),a=r(a,o)),function(u){return a(n(u))}}function tM(e,t,r){var n=Math.min(e.length,t.length)-1,i=new Array(n),a=new Array(n),o=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<n;)i[o]=Qu(e[o],e[o+1]),a[o]=r(t[o],t[o+1]);return function(u){var s=ro(e,u,1,n)-1;return a[s](i[s](u))}}function no(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function zs(){var e=Xd,t=Xd,r=Us,n,i,a,o=Tt,u,s,l;function c(){return u=Math.min(e.length,t.length)>2?tM:eM,s=l=null,f}function f(h){return isNaN(h=+h)?a:(s||(s=u(e.map(n),t,r)))(n(o(h)))}return f.invert=function(h){return o(i((l||(l=u(t,e.map(n),Ra)))(h)))},f.domain=function(h){return arguments.length?(e=Sg.call(h,J4),o===Tt||(o=Zd(e)),c()):e.slice()},f.range=function(h){return arguments.length?(t=en.call(h),c()):t.slice()},f.rangeRound=function(h){return t=en.call(h),r=K4,c()},f.clamp=function(h){return arguments.length?(o=h?Zd(e):Tt,f):o!==Tt},f.interpolate=function(h){return arguments.length?(r=h,c()):r},f.unknown=function(h){return arguments.length?(a=h,f):a},function(h,d){return n=h,i=d,c()}}function Eg(e,t){return zs()(e,t)}function rM(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Da(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function Pn(e){return e=Da(Math.abs(e)),e?e[1]:NaN}function nM(e,t){return function(r,n){for(var i=r.length,a=[],o=0,u=e[0],s=0;i>0&&u>0&&(s+u+1>n&&(u=Math.max(1,n-s)),a.push(r.substring(i-=u,i+u)),!((s+=u+1)>n));)u=e[o=(o+1)%e.length];return a.reverse().join(t)}}function iM(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var aM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Na(e){if(!(t=aM.exec(e)))throw new Error("invalid format: "+e);var t;return new $s({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Na.prototype=$s.prototype;function $s(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}$s.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function oM(e){e:for(var t=e.length,r=1,n=-1,i;r<t;++r)switch(e[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var Cg;function uM(e,t){var r=Da(e,t);if(!r)return e+"";var n=r[0],i=r[1],a=i-(Cg=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+Da(e,Math.max(0,t+a-1))[0]}function qd(e,t){var r=Da(e,t);if(!r)return e+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const Kd={"%":function(e,t){return(e*100).toFixed(t)},b:function(e){return Math.round(e).toString(2)},c:function(e){return e+""},d:rM,e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},g:function(e,t){return e.toPrecision(t)},o:function(e){return Math.round(e).toString(8)},p:function(e,t){return qd(e*100,t)},r:qd,s:uM,X:function(e){return Math.round(e).toString(16).toUpperCase()},x:function(e){return Math.round(e).toString(16)}};function Qd(e){return e}var Jd=Array.prototype.map,ev=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function sM(e){var t=e.grouping===void 0||e.thousands===void 0?Qd:nM(Jd.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?Qd:iM(Jd.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"-":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function l(f){f=Na(f);var h=f.fill,d=f.align,v=f.sign,p=f.symbol,g=f.zero,m=f.width,_=f.comma,y=f.precision,x=f.trim,b=f.type;b==="n"?(_=!0,b="g"):Kd[b]||(y===void 0&&(y=12),x=!0,b="g"),(g||h==="0"&&d==="=")&&(g=!0,h="0",d="=");var k=p==="$"?r:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",T=p==="$"?n:/[%p]/.test(b)?o:"",D=Kd[b],U=/[defgprs%]/.test(b);y=y===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function I(w){var M=k,P=T,B,J,se;if(b==="c")P=D(w)+P,w="";else{w=+w;var ce=w<0||1/w<0;if(w=isNaN(w)?s:D(Math.abs(w),y),x&&(w=oM(w)),ce&&+w==0&&v!=="+"&&(ce=!1),M=(ce?v==="("?v:u:v==="-"||v==="("?"":v)+M,P=(b==="s"?ev[8+Cg/3]:"")+P+(ce&&v==="("?")":""),U){for(B=-1,J=w.length;++B<J;)if(se=w.charCodeAt(B),48>se||se>57){P=(se===46?i+w.slice(B+1):w.slice(B))+P,w=w.slice(0,B);break}}}_&&!g&&(w=t(w,1/0));var pe=M.length+w.length+P.length,H=pe<m?new Array(m-pe+1).join(h):"";switch(_&&g&&(w=t(H+w,H.length?m-P.length:1/0),H=""),d){case"<":w=M+w+P+H;break;case"=":w=M+H+w+P;break;case"^":w=H.slice(0,pe=H.length>>1)+M+w+P+H.slice(pe);break;default:w=H+M+w+P;break}return a(w)}return I.toString=function(){return f+""},I}function c(f,h){var d=l((f=Na(f),f.type="f",f)),v=Math.max(-8,Math.min(8,Math.floor(Pn(h)/3)))*3,p=Math.pow(10,-v),g=ev[8+v/3];return function(m){return d(p*m)+g}}return{format:l,formatPrefix:c}}var va,Vs,Ag;lM({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function lM(e){return va=sM(e),Vs=va.format,Ag=va.formatPrefix,va}function cM(e){return Math.max(0,-Pn(Math.abs(e)))}function fM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Pn(t)/3)))*3-Pn(Math.abs(e)))}function hM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Pn(t)-Pn(e))+1}function dM(e,t,r,n){var i=qu(e,t,r),a;switch(n=Na(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(a=fM(i,o))&&(n.precision=a),Ag(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(a=hM(i,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=a-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(a=cM(i))&&(n.precision=a-(n.type==="%")*2);break}}return Vs(n)}function Hi(e){var t=e.domain;return e.ticks=function(r){var n=t();return yg(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var i=t();return dM(i[0],i[i.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),i=0,a=n.length-1,o=n[i],u=n[a],s;return u<o&&(s=o,o=u,u=s,s=i,i=a,a=s),s=Sa(o,u,r),s>0?(o=Math.floor(o/s)*s,u=Math.ceil(u/s)*s,s=Sa(o,u,r)):s<0&&(o=Math.ceil(o*s)/s,u=Math.floor(u*s)/s,s=Sa(o,u,r)),s>0?(n[i]=Math.floor(o/s)*s,n[a]=Math.ceil(u/s)*s,t(n)):s<0&&(n[i]=Math.ceil(o*s)/s,n[a]=Math.floor(u*s)/s,t(n)),e},e}function wg(){var e=Eg(Tt,Tt);return e.copy=function(){return no(e,wg())},zr.apply(e,arguments),Hi(e)}function Tg(e,t){e=e.slice();var r=0,n=e.length-1,i=e[r],a=e[n],o;return a<i&&(o=r,r=n,n=o,o=i,i=a,a=o),e[r]=t.floor(i),e[n]=t.ceil(a),e}function tv(e){return Math.log(e)}function rv(e){return Math.exp(e)}function vM(e){return-Math.log(-e)}function pM(e){return-Math.exp(-e)}function gM(e){return isFinite(e)?+("1e"+e):e<0?0:e}function mM(e){return e===10?gM:e===Math.E?Math.exp:function(t){return Math.pow(e,t)}}function yM(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),function(t){return Math.log(t)/e})}function nv(e){return function(t){return-e(-t)}}function _M(e){var t=e(tv,rv),r=t.domain,n=10,i,a;function o(){return i=yM(n),a=mM(n),r()[0]<0?(i=nv(i),a=nv(a),e(vM,pM)):e(tv,rv),t}return t.base=function(u){return arguments.length?(n=+u,o()):n},t.domain=function(u){return arguments.length?(r(u),o()):r()},t.ticks=function(u){var s=r(),l=s[0],c=s[s.length-1],f;(f=c<l)&&(h=l,l=c,c=h);var h=i(l),d=i(c),v,p,g,m=u==null?10:+u,_=[];if(!(n%1)&&d-h<m){if(h=Math.round(h)-1,d=Math.round(d)+1,l>0){for(;h<d;++h)for(p=1,v=a(h);p<n;++p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else for(;h<d;++h)for(p=n-1,v=a(h);p>=1;--p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else _=yg(h,d,Math.min(d-h,m)).map(a);return f?_.reverse():_},t.tickFormat=function(u,s){if(s==null&&(s=n===10?".0e":","),typeof s!="function"&&(s=Vs(s)),u===1/0)return s;u==null&&(u=10);var l=Math.max(1,n*u/t.ticks().length);return function(c){var f=c/a(Math.round(i(c)));return f*n<n-.5&&(f*=n),f<=l?s(c):""}},t.nice=function(){return r(Tg(r(),{floor:function(u){return a(Math.floor(i(u)))},ceil:function(u){return a(Math.ceil(i(u)))}}))},t}function Mg(){var e=_M(zs()).domain([1,10]);return e.copy=function(){return no(e,Mg()).base(e.base())},zr.apply(e,arguments),e}function iv(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function xM(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function bM(e){return e<0?-e*e:e*e}function SM(e){var t=e(Tt,Tt),r=1;function n(){return r===1?e(Tt,Tt):r===.5?e(xM,bM):e(iv(r),iv(1/r))}return t.exponent=function(i){return arguments.length?(r=+i,n()):r},Hi(t)}function Ig(){var e=SM(zs());return e.copy=function(){return no(e,Ig()).exponent(e.exponent())},zr.apply(e,arguments),e}function kg(){var e=[],t=[],r=[],n;function i(){var o=0,u=Math.max(1,t.length);for(r=new Array(u-1);++o<u;)r[o-1]=O4(e,o/u);return a}function a(o){return isNaN(o=+o)?n:t[ro(r,o)]}return a.invertExtent=function(o){var u=t.indexOf(o);return u<0?[NaN,NaN]:[u>0?r[u-1]:e[0],u<r.length?r[u]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(var u=0,s=o.length,l;u<s;++u)l=o[u],l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ns),i()},a.range=function(o){return arguments.length?(t=en.call(o),i()):t.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.quantiles=function(){return r.slice()},a.copy=function(){return kg().domain(e).range(t).unknown(n)},zr.apply(a,arguments)}function Lg(){var e=0,t=1,r=1,n=[.5],i=[0,1],a;function o(s){return s<=s?i[ro(n,s,0,r)]:a}function u(){var s=-1;for(n=new Array(r);++s<r;)n[s]=((s+1)*t-(s-r)*e)/(r+1);return o}return o.domain=function(s){return arguments.length?(e=+s[0],t=+s[1],u()):[e,t]},o.range=function(s){return arguments.length?(r=(i=en.call(s)).length-1,u()):i.slice()},o.invertExtent=function(s){var l=i.indexOf(s);return l<0?[NaN,NaN]:l<1?[e,n[0]]:l>=r?[n[r-1],t]:[n[l-1],n[l]]},o.unknown=function(s){return arguments.length&&(a=s),o},o.thresholds=function(){return n.slice()},o.copy=function(){return Lg().domain([e,t]).range(i).unknown(a)},zr.apply(Hi(o),arguments)}function Rg(){var e=[.5],t=[0,1],r,n=1;function i(a){return a<=a?t[ro(e,a,0,n)]:r}return i.domain=function(a){return arguments.length?(e=en.call(a),n=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=en.call(a),n=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var o=t.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Rg().domain(e).range(t).unknown(r)},zr.apply(i,arguments)}var eu=new Date,tu=new Date;function kt(e,t,r,n){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=function(a){return e(a=new Date(+a)),a},i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(a){var o=i(a),u=i.ceil(a);return a-o<u-a?o:u},i.offset=function(a,o){return t(a=new Date(+a),o==null?1:Math.floor(o)),a},i.range=function(a,o,u){var s=[],l;if(a=i.ceil(a),u=u==null?1:Math.floor(u),!(a<o)||!(u>0))return s;do s.push(l=new Date(+a)),t(a,u),e(a);while(l<a&&a<o);return s},i.filter=function(a){return kt(function(o){if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},function(o,u){if(o>=o)if(u<0)for(;++u<=0;)for(;t(o,-1),!a(o););else for(;--u>=0;)for(;t(o,1),!a(o););})},r&&(i.count=function(a,o){return eu.setTime(+a),tu.setTime(+o),e(eu),e(tu),Math.floor(r(eu,tu))},i.every=function(a){return a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(n?function(o){return n(o)%a===0}:function(o){return i.count(0,o)%a===0}):i}),i}var Ba=kt(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});Ba.every=function(e){return e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?kt(function(t){t.setTime(Math.floor(t/e)*e)},function(t,r){t.setTime(+t+r*e)},function(t,r){return(r-t)/e}):Ba};const EM=Ba;Ba.range;var Ua=1e3,Ni=6e4,av=36e5,Pg=864e5,Fg=6048e5,Og=kt(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*Ua)},function(e,t){return(t-e)/Ua},function(e){return e.getUTCSeconds()});const CM=Og;Og.range;var Dg=kt(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*Ua)},function(e,t){e.setTime(+e+t*Ni)},function(e,t){return(t-e)/Ni},function(e){return e.getMinutes()});const AM=Dg;Dg.range;var Ng=kt(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*Ua-e.getMinutes()*Ni)},function(e,t){e.setTime(+e+t*av)},function(e,t){return(t-e)/av},function(e){return e.getHours()});const wM=Ng;Ng.range;var Bg=kt(function(e){e.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Ni)/Pg},function(e){return e.getDate()-1});const js=Bg;Bg.range;function rn(e){return kt(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(t,r){t.setDate(t.getDate()+r*7)},function(t,r){return(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*Ni)/Fg})}var Hs=rn(0),za=rn(1),TM=rn(2),MM=rn(3),Fn=rn(4),IM=rn(5),kM=rn(6);Hs.range;za.range;TM.range;MM.range;Fn.range;IM.range;kM.range;var Ug=kt(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});const LM=Ug;Ug.range;var Gs=kt(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});Gs.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:kt(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,r){t.setFullYear(t.getFullYear()+r*e)})};const On=Gs;Gs.range;var Ws=kt(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/Pg},function(e){return e.getUTCDate()-1});Ws.range;function nn(e){return kt(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(t,r){t.setUTCDate(t.getUTCDate()+r*7)},function(t,r){return(r-t)/Fg})}var zg=nn(0),$a=nn(1),RM=nn(2),PM=nn(3),Dn=nn(4),FM=nn(5),OM=nn(6);zg.range;$a.range;RM.range;PM.range;Dn.range;FM.range;OM.range;var tn=kt(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});tn.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:kt(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,r){t.setUTCFullYear(t.getUTCFullYear()+r*e)})};tn.range;function ru(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function nu(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function ii(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function DM(e){var t=e.dateTime,r=e.date,n=e.time,i=e.periods,a=e.days,o=e.shortDays,u=e.months,s=e.shortMonths,l=ai(i),c=oi(i),f=ai(a),h=oi(a),d=ai(o),v=oi(o),p=ai(u),g=oi(u),m=ai(s),_=oi(s),y={a:ce,A:pe,b:H,B:V,c:null,d:fv,e:fv,f:a5,g:p5,G:m5,H:r5,I:n5,j:i5,L:$g,m:o5,M:u5,p:Z,q:X,Q:vv,s:pv,S:s5,u:l5,U:c5,V:f5,w:h5,W:d5,x:null,X:null,y:v5,Y:g5,Z:y5,"%":dv},x={a:fe,A:ue,b:he,B:Be,c:null,d:hv,e:hv,f:S5,g:R5,G:F5,H:_5,I:x5,j:b5,L:jg,m:E5,M:C5,p:Le,q:Qe,Q:vv,s:pv,S:A5,u:w5,U:T5,V:M5,w:I5,W:k5,x:null,X:null,y:L5,Y:P5,Z:O5,"%":dv},b={a:I,A:w,b:M,B:P,c:B,d:lv,e:lv,f:QM,g:sv,G:uv,H:cv,I:cv,j:XM,L:KM,m:YM,M:ZM,p:U,q:WM,Q:e5,s:t5,S:qM,u:$M,U:VM,V:jM,w:zM,W:HM,x:J,X:se,y:sv,Y:uv,Z:GM,"%":JM};y.x=k(r,y),y.X=k(n,y),y.c=k(t,y),x.x=k(r,x),x.X=k(n,x),x.c=k(t,x);function k($,ae){return function(me){var ee=[],$e=-1,ke=0,je=$.length,Pe,Te,tt;for(me instanceof Date||(me=new Date(+me));++$e<je;)$.charCodeAt($e)===37&&(ee.push($.slice(ke,$e)),(Te=ov[Pe=$.charAt(++$e)])!=null?Pe=$.charAt(++$e):Te=Pe==="e"?" ":"0",(tt=ae[Pe])&&(Pe=tt(me,Te)),ee.push(Pe),ke=$e+1);return ee.push($.slice(ke,$e)),ee.join("")}}function T($,ae){return function(me){var ee=ii(1900,void 0,1),$e=D(ee,$,me+="",0),ke,je;if($e!=me.length)return null;if("Q"in ee)return new Date(ee.Q);if("s"in ee)return new Date(ee.s*1e3+("L"in ee?ee.L:0));if(ae&&!("Z"in ee)&&(ee.Z=0),"p"in ee&&(ee.H=ee.H%12+ee.p*12),ee.m===void 0&&(ee.m="q"in ee?ee.q:0),"V"in ee){if(ee.V<1||ee.V>53)return null;"w"in ee||(ee.w=1),"Z"in ee?(ke=nu(ii(ee.y,0,1)),je=ke.getUTCDay(),ke=je>4||je===0?$a.ceil(ke):$a(ke),ke=Ws.offset(ke,(ee.V-1)*7),ee.y=ke.getUTCFullYear(),ee.m=ke.getUTCMonth(),ee.d=ke.getUTCDate()+(ee.w+6)%7):(ke=ru(ii(ee.y,0,1)),je=ke.getDay(),ke=je>4||je===0?za.ceil(ke):za(ke),ke=js.offset(ke,(ee.V-1)*7),ee.y=ke.getFullYear(),ee.m=ke.getMonth(),ee.d=ke.getDate()+(ee.w+6)%7)}else("W"in ee||"U"in ee)&&("w"in ee||(ee.w="u"in ee?ee.u%7:"W"in ee?1:0),je="Z"in ee?nu(ii(ee.y,0,1)).getUTCDay():ru(ii(ee.y,0,1)).getDay(),ee.m=0,ee.d="W"in ee?(ee.w+6)%7+ee.W*7-(je+5)%7:ee.w+ee.U*7-(je+6)%7);return"Z"in ee?(ee.H+=ee.Z/100|0,ee.M+=ee.Z%100,nu(ee)):ru(ee)}}function D($,ae,me,ee){for(var $e=0,ke=ae.length,je=me.length,Pe,Te;$e<ke;){if(ee>=je)return-1;if(Pe=ae.charCodeAt($e++),Pe===37){if(Pe=ae.charAt($e++),Te=b[Pe in ov?ae.charAt($e++):Pe],!Te||(ee=Te($,me,ee))<0)return-1}else if(Pe!=me.charCodeAt(ee++))return-1}return ee}function U($,ae,me){var ee=l.exec(ae.slice(me));return ee?($.p=c[ee[0].toLowerCase()],me+ee[0].length):-1}function I($,ae,me){var ee=d.exec(ae.slice(me));return ee?($.w=v[ee[0].toLowerCase()],me+ee[0].length):-1}function w($,ae,me){var ee=f.exec(ae.slice(me));return ee?($.w=h[ee[0].toLowerCase()],me+ee[0].length):-1}function M($,ae,me){var ee=m.exec(ae.slice(me));return ee?($.m=_[ee[0].toLowerCase()],me+ee[0].length):-1}function P($,ae,me){var ee=p.exec(ae.slice(me));return ee?($.m=g[ee[0].toLowerCase()],me+ee[0].length):-1}function B($,ae,me){return D($,t,ae,me)}function J($,ae,me){return D($,r,ae,me)}function se($,ae,me){return D($,n,ae,me)}function ce($){return o[$.getDay()]}function pe($){return a[$.getDay()]}function H($){return s[$.getMonth()]}function V($){return u[$.getMonth()]}function Z($){return i[+($.getHours()>=12)]}function X($){return 1+~~($.getMonth()/3)}function fe($){return o[$.getUTCDay()]}function ue($){return a[$.getUTCDay()]}function he($){return s[$.getUTCMonth()]}function Be($){return u[$.getUTCMonth()]}function Le($){return i[+($.getUTCHours()>=12)]}function Qe($){return 1+~~($.getUTCMonth()/3)}return{format:function($){var ae=k($+="",y);return ae.toString=function(){return $},ae},parse:function($){var ae=T($+="",!1);return ae.toString=function(){return $},ae},utcFormat:function($){var ae=k($+="",x);return ae.toString=function(){return $},ae},utcParse:function($){var ae=T($+="",!0);return ae.toString=function(){return $},ae}}}var ov={"-":"",_:" ",0:"0"},yt=/^\s*\d+/,NM=/^%/,BM=/[\\^$*+?|[\]().{}]/g;function Ge(e,t,r){var n=e<0?"-":"",i=(n?-e:e)+"",a=i.length;return n+(a<r?new Array(r-a+1).join(t)+i:i)}function UM(e){return e.replace(BM,"\\$&")}function ai(e){return new RegExp("^(?:"+e.map(UM).join("|")+")","i")}function oi(e){for(var t={},r=-1,n=e.length;++r<n;)t[e[r].toLowerCase()]=r;return t}function zM(e,t,r){var n=yt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function $M(e,t,r){var n=yt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function VM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function jM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function HM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function uv(e,t,r){var n=yt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function sv(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function GM(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function WM(e,t,r){var n=yt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function YM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function lv(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function XM(e,t,r){var n=yt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function cv(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function ZM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function qM(e,t,r){var n=yt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function KM(e,t,r){var n=yt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function QM(e,t,r){var n=yt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function JM(e,t,r){var n=NM.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function e5(e,t,r){var n=yt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function t5(e,t,r){var n=yt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function fv(e,t){return Ge(e.getDate(),t,2)}function r5(e,t){return Ge(e.getHours(),t,2)}function n5(e,t){return Ge(e.getHours()%12||12,t,2)}function i5(e,t){return Ge(1+js.count(On(e),e),t,3)}function $g(e,t){return Ge(e.getMilliseconds(),t,3)}function a5(e,t){return $g(e,t)+"000"}function o5(e,t){return Ge(e.getMonth()+1,t,2)}function u5(e,t){return Ge(e.getMinutes(),t,2)}function s5(e,t){return Ge(e.getSeconds(),t,2)}function l5(e){var t=e.getDay();return t===0?7:t}function c5(e,t){return Ge(Hs.count(On(e)-1,e),t,2)}function Vg(e){var t=e.getDay();return t>=4||t===0?Fn(e):Fn.ceil(e)}function f5(e,t){return e=Vg(e),Ge(Fn.count(On(e),e)+(On(e).getDay()===4),t,2)}function h5(e){return e.getDay()}function d5(e,t){return Ge(za.count(On(e)-1,e),t,2)}function v5(e,t){return Ge(e.getFullYear()%100,t,2)}function p5(e,t){return e=Vg(e),Ge(e.getFullYear()%100,t,2)}function g5(e,t){return Ge(e.getFullYear()%1e4,t,4)}function m5(e,t){var r=e.getDay();return e=r>=4||r===0?Fn(e):Fn.ceil(e),Ge(e.getFullYear()%1e4,t,4)}function y5(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ge(t/60|0,"0",2)+Ge(t%60,"0",2)}function hv(e,t){return Ge(e.getUTCDate(),t,2)}function _5(e,t){return Ge(e.getUTCHours(),t,2)}function x5(e,t){return Ge(e.getUTCHours()%12||12,t,2)}function b5(e,t){return Ge(1+Ws.count(tn(e),e),t,3)}function jg(e,t){return Ge(e.getUTCMilliseconds(),t,3)}function S5(e,t){return jg(e,t)+"000"}function E5(e,t){return Ge(e.getUTCMonth()+1,t,2)}function C5(e,t){return Ge(e.getUTCMinutes(),t,2)}function A5(e,t){return Ge(e.getUTCSeconds(),t,2)}function w5(e){var t=e.getUTCDay();return t===0?7:t}function T5(e,t){return Ge(zg.count(tn(e)-1,e),t,2)}function Hg(e){var t=e.getUTCDay();return t>=4||t===0?Dn(e):Dn.ceil(e)}function M5(e,t){return e=Hg(e),Ge(Dn.count(tn(e),e)+(tn(e).getUTCDay()===4),t,2)}function I5(e){return e.getUTCDay()}function k5(e,t){return Ge($a.count(tn(e)-1,e),t,2)}function L5(e,t){return Ge(e.getUTCFullYear()%100,t,2)}function R5(e,t){return e=Hg(e),Ge(e.getUTCFullYear()%100,t,2)}function P5(e,t){return Ge(e.getUTCFullYear()%1e4,t,4)}function F5(e,t){var r=e.getUTCDay();return e=r>=4||r===0?Dn(e):Dn.ceil(e),Ge(e.getUTCFullYear()%1e4,t,4)}function O5(){return"+0000"}function dv(){return"%"}function vv(e){return+e}function pv(e){return Math.floor(+e/1e3)}var gn,Gg;D5({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function D5(e){return gn=DM(e),Gg=gn.format,gn.parse,gn.utcFormat,gn.utcParse,gn}var pi=1e3,gi=pi*60,mi=gi*60,Bi=mi*24,N5=Bi*7,gv=Bi*30,iu=Bi*365;function B5(e){return new Date(e)}function U5(e){return e instanceof Date?+e:+new Date(+e)}function Wg(e,t,r,n,i,a,o,u,s){var l=Eg(Tt,Tt),c=l.invert,f=l.domain,h=s(".%L"),d=s(":%S"),v=s("%I:%M"),p=s("%I %p"),g=s("%a %d"),m=s("%b %d"),_=s("%B"),y=s("%Y"),x=[[o,1,pi],[o,5,5*pi],[o,15,15*pi],[o,30,30*pi],[a,1,gi],[a,5,5*gi],[a,15,15*gi],[a,30,30*gi],[i,1,mi],[i,3,3*mi],[i,6,6*mi],[i,12,12*mi],[n,1,Bi],[n,2,2*Bi],[r,1,N5],[t,1,gv],[t,3,3*gv],[e,1,iu]];function b(T){return(o(T)<T?h:a(T)<T?d:i(T)<T?v:n(T)<T?p:t(T)<T?r(T)<T?g:m:e(T)<T?_:y)(T)}function k(T,D,U,I){if(T==null&&(T=10),typeof T=="number"){var w=Math.abs(U-D)/T,M=mg(function(P){return P[2]}).right(x,w);M===x.length?(I=qu(D/iu,U/iu,T),T=e):M?(M=x[w/x[M-1][2]<x[M][2]/w?M-1:M],I=M[1],T=M[0]):(I=Math.max(qu(D,U,T),1),T=u)}return I==null?T:T.every(I)}return l.invert=function(T){return new Date(c(T))},l.domain=function(T){return arguments.length?f(Sg.call(T,U5)):f().map(B5)},l.ticks=function(T,D){var U=f(),I=U[0],w=U[U.length-1],M=w<I,P;return M&&(P=I,I=w,w=P),P=k(T,I,w,D),P=P?P.range(I,w+1):[],M?P.reverse():P},l.tickFormat=function(T,D){return D==null?b:s(D)},l.nice=function(T,D){var U=f();return(T=k(T,U[0],U[U.length-1],D))?f(Tg(U,T)):l},l.copy=function(){return no(l,Wg(e,t,r,n,i,a,o,u,s))},l}function z5(){return zr.apply(Wg(On,LM,Hs,js,wM,AM,CM,EM,Gg).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function $5(){var e=0,t=1,r,n,i,a,o=Tt,u=!1,s;function l(c){return isNaN(c=+c)?s:o(i===0?.5:(c=(a(c)-r)*i,u?Math.max(0,Math.min(1,c)):c))}return l.domain=function(c){return arguments.length?(r=a(e=+c[0]),n=a(t=+c[1]),i=r===n?0:1/(n-r),l):[e,t]},l.clamp=function(c){return arguments.length?(u=!!c,l):u},l.interpolator=function(c){return arguments.length?(o=c,l):o},l.unknown=function(c){return arguments.length?(s=c,l):s},function(c){return a=c,r=c(e),n=c(t),i=r===n?0:1/(n-r),l}}function Yg(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Xg(){var e=Hi($5()(Tt));return e.copy=function(){return Yg(e,Xg())},xg.apply(e,arguments)}function V5(){var e=0,t=.5,r=1,n,i,a,o,u,s=Tt,l,c=!1,f;function h(d){return isNaN(d=+d)?f:(d=.5+((d=+l(d))-i)*(d<i?o:u),s(c?Math.max(0,Math.min(1,d)):d))}return h.domain=function(d){return arguments.length?(n=l(e=+d[0]),i=l(t=+d[1]),a=l(r=+d[2]),o=n===i?0:.5/(i-n),u=i===a?0:.5/(a-i),h):[e,t,r]},h.clamp=function(d){return arguments.length?(c=!!d,h):c},h.interpolator=function(d){return arguments.length?(s=d,h):s},h.unknown=function(d){return arguments.length?(f=d,h):f},function(d){return l=d,n=d(e),i=d(t),a=d(r),o=n===i?0:.5/(i-n),u=i===a?0:.5/(a-i),h}}function Zg(){var e=Hi(V5()(Tt));return e.copy=function(){return Yg(e,Zg())},xg.apply(e,arguments)}function qg(e){var t,r=[];function n(i){return i??t}return n.invert=n,n.domain=n.range=function(i){return i?(r=i,i):r},n.unknown=function(i){return i?(t=i,i):t},n.copy=function(){return qg().unknown(t)},n}var Nt,mv,yv,au=Ze.isNil,j5=Ze.isString,H5=Ze.uniq,G5=/^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,W5=(Nt={},S(Nt,Ye.LINEAR,wg),S(Nt,Ye.POWER,Ig),S(Nt,Ye.LOG,Mg),S(Nt,Ye.IDENTITY,qg),S(Nt,Ye.SEQUENTIAL,Xg),S(Nt,Ye.TIME,z5),S(Nt,Ye.QUANTILE,kg),S(Nt,Ye.QUANTIZE,Lg),S(Nt,Ye.THRESHOLD,Rg),S(Nt,Ye.CAT,Oa),S(Nt,Ye.DIVERGING,Zg),Nt),Y5=(mv=Re(),mv(yv=function(){function e(){ie(this,e),S(this,"scaleOptions",{})}return ne(e,[{key:"apply",value:function(r,n){var i=this,a=n.styleAttributeService;r.hooks.init.tapPromise("FeatureScalePlugin",Y(A.mark(function o(){var u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(r.log(ct.ScaleInitStart,vt.INIT),i.scaleOptions=r.getScaleOptions(),s=a.getLayerStyleAttributes(),l=(u=r.getSource())===null||u===void 0?void 0:u.data.dataArray,!(Array.isArray(l)&&l.length===0)){f.next=8;break}return f.abrupt("return");case 8:i.caculateScalesForAttributes(s||[],l);case 9:r.log(ct.ScaleInitEnd,vt.INIT);case 10:case"end":return f.stop()}},o)}))),r.hooks.beforeRenderData.tapPromise("FeatureScalePlugin",function(){var o=Y(A.mark(function u(s){var l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s){h.next=2;break}return h.abrupt("return",s);case 2:if(r.log(ct.ScaleInitStart,vt.UPDATE),i.scaleOptions=r.getScaleOptions(),l=a.getLayerStyleAttributes(),c=r.getSource().data.dataArray,!(Array.isArray(c)&&c.length===0)){h.next=8;break}return h.abrupt("return",!0);case 8:return i.caculateScalesForAttributes(l||[],c),r.log(ct.ScaleInitEnd,vt.UPDATE),r.layerModelNeedUpdate=!0,h.abrupt("return",!0);case 12:case"end":return h.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),r.hooks.beforeRender.tap("FeatureScalePlugin",function(){if(!r.layerModelNeedUpdate){i.scaleOptions=r.getScaleOptions();var o=a.getLayerStyleAttributes(),u=r.getSource().data.dataArray;if(!(Array.isArray(u)&&u.length===0)&&o){var s=o.filter(function(l){return l.needRescale});s.length&&i.caculateScalesForAttributes(s,u)}}})}},{key:"isNumber",value:function(r){return!isNaN(parseFloat(r))&&isFinite(r)}},{key:"caculateScalesForAttributes",value:function(r,n){var i=this;r.forEach(function(a){if(a.scale){var o=a.scale,u=a.scale.field;o.names=i.parseFields(au(u)?[]:u);var s=[];o.names.forEach(function(l){var c;s.push(i.createScale(l,a.name,(c=a.scale)===null||c===void 0?void 0:c.values,n))}),s.some(function(l){return l.type===dn.VARIABLE})?(o.type=dn.VARIABLE,s.forEach(function(l){if(!o.callback&&o.values!=="text"){var c;switch((c=l.option)===null||c===void 0?void 0:c.type){case Ye.LOG:case Ye.LINEAR:case Ye.POWER:if(o.values&&o.values.length>2){var f=l.scale.ticks(o.values.length);l.scale.domain(f)}o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case Ye.QUANTILE:case Ye.QUANTIZE:case Ye.THRESHOLD:l.scale.range(o.values);break;case Ye.IDENTITY:break;case Ye.CAT:o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case Ye.DIVERGING:case Ye.SEQUENTIAL:l.scale.interpolator(V4(o.values));break}}if(o.values==="text"){var h;l.scale.range((h=l.option)===null||h===void 0?void 0:h.domain)}})):(o.type=dn.CONSTANT,o.defaultValues=s.map(function(l,c){return l.scale(o.names[c])})),o.scalers=s.map(function(l){return{field:l.field,func:l.scale,option:l.option}}),a.needRescale=!1}})}},{key:"parseFields",value:function(r){return Array.isArray(r)?r:j5(r)?r.split("*"):[r]}},{key:"createScale",value:function(r,n,i,a){var o,u,s=this.scaleOptions[n]&&((o=this.scaleOptions[n])===null||o===void 0?void 0:o.field)===r?this.scaleOptions[n]:this.scaleOptions[r],l={field:r,scale:void 0,type:dn.VARIABLE,option:s};if(!a||!a.length)return s&&s.type?l.scale=this.createDefaultScale(s):(l.scale=Oa([r]),l.type=dn.CONSTANT),l;var c=(u=a.find(function(d){return!au(d[r])}))===null||u===void 0?void 0:u[r];if(this.isNumber(r)||au(c)&&!s)l.scale=Oa([r]),l.type=dn.CONSTANT;else{var f=s&&s.type||this.getDefaultType(c);i==="text"&&(f=Ye.CAT),i===void 0&&(f=Ye.IDENTITY);var h=this.createScaleConfig(f,r,s,a);l.scale=this.createDefaultScale(h),l.option=h}return l}},{key:"getDefaultType",value:function(r){var n=Ye.LINEAR;return typeof r=="string"&&(n=G5.test(r)?Ye.TIME:Ye.CAT),n}},{key:"createScaleConfig",value:function(r,n,i,a){var o={type:r},u=[];if(r===Ye.QUANTILE){var s=new Map;a==null||a.forEach(function(f){s.set(f._id,f[n])}),u=Array.from(s.values())}else u=(a==null?void 0:a.map(function(f){return f[n]}))||[];if(i!=null&&i.domain)o.domain=i==null?void 0:i.domain;else if(r===Ye.CAT||r===Ye.IDENTITY)o.domain=H5(u);else if(r===Ye.QUANTILE)o.domain=u;else if(r===Ye.DIVERGING){var l=Hd(u),c=(i==null?void 0:i.neutral)!==void 0?i==null?void 0:i.neutral:(l[0]+l[1])/2;o.domain=[l[0],c,l[1]]}else o.domain=Hd(u);return z(z({},o),i)}},{key:"createDefaultScale",value:function(r){var n=r.type,i=r.domain,a=r.unknown,o=r.clamp,u=r.nice,s=W5[n]();return i&&s.domain&&s.domain(i),a&&s.unknown(a),o!==void 0&&s.clamp&&s.clamp(o),u!==void 0&&s.nice&&s.nice(u),s}}]),e}())||yv),_v,xv,X5=(_v=Re(),_v(xv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){r.hooks.beforeRender.tap("LayerAnimateStylePlugin",function(){var n=r.animateStatus;n&&r.models.forEach(function(i){i.addUniforms(z({},r.layerModel.getAnimateUniforms()))})})}}]),e}())||xv),bv,Sv,Z5=(bv=Re(),bv(Sv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){r.hooks.afterInit.tap("LayerMaskPlugin",function(){var n=r.getLayerConfig(),i=n.maskLayers,a=n.enableMask;if(!r.tileLayer&&i&&i.length>0){var o;(o=r.masks).push.apply(o,Q(i)),r.updateLayerConfig({mask:a})}})}}]),e}())||Sv),q5=function(){function e(t){var r=t.rendererService,n=t.layerService,i=t.parent;ie(this,e),S(this,"tileResource",new Map),S(this,"layerTiles",[]),this.rendererService=r,this.layerService=n,this.parent=i}return ne(e,[{key:"tiles",get:function(){return this.layerTiles}},{key:"hasTile",value:function(r){return this.layerTiles.some(function(n){return n.key===r})}},{key:"addTile",value:function(r){this.layerTiles.push(r)}},{key:"getTile",value:function(r){return this.layerTiles.find(function(n){return n.key===r})}},{key:"getVisibleTileBylngLat",value:function(r){return this.layerTiles.find(function(n){return n.isLoaded&&n.visible&&n.lnglatInBounds(r)})}},{key:"removeTile",value:function(r){var n=this.layerTiles.findIndex(function(a){return a.key===r}),i=this.layerTiles.splice(n,1);i[0]&&i[0].destroy()}},{key:"updateTileVisible",value:function(r){var n=this.getTile(r.key);if(r.isVisible)if(r.parent){var i=this.isChildrenLoaded(r.parent);n==null||n.updateVisible(i)}else n==null||n.updateVisible(!0);else if(r.parent){var a=this.isChildrenLoaded(r.parent);n==null||n.updateVisible(!a)}else n==null||n.updateVisible(!1)}},{key:"isParentLoaded",value:function(r){var n=r.parent;if(!n)return!0;var i=this.getTile(n==null?void 0:n.key);return!!(i!=null&&i.isLoaded)}},{key:"isChildrenLoaded",value:function(r){var n=this,i=r==null?void 0:r.children;return i.length===0?!0:i.every(function(a){var o=n.getTile(a==null?void 0:a.key);return o?(o==null?void 0:o.isLoaded)===!0:!0})}},{key:"render",value:function(){var t=Y(A.mark(function n(){var i=this,a,o;return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=this.getRenderLayers(),o=a.map(function(){var l=Y(A.mark(function c(f){return A.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,i.layerService.renderTileLayer(f);case 2:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()),s.next=4,Promise.all(o);case 4:case"end":return s.stop()}},n,this)}));function r(){return t.apply(this,arguments)}return r}()},{key:"getRenderLayers",value:function(){var r=this.layerTiles.filter(function(i){return i.visible&&i.isLoaded}),n=[];return r.map(function(i){return n.push.apply(n,Q(i.getLayers()))}),n}},{key:"getLayers",value:function(){var r=this.layerTiles.filter(function(i){return i.isLoaded}),n=[];return r.map(function(i){return n.push.apply(n,Q(i.getLayers()))}),n}},{key:"getTiles",value:function(){return this.layerTiles}},{key:"destroy",value:function(){this.layerTiles.forEach(function(r){return r.destroy()}),this.tileResource.clear()}}]),e}();/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function K5(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(c){l=[6,c],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Br=function(){function e(t,r){this.next=null,this.key=t,this.data=r,this.left=null,this.right=null}return e}();function Q5(e,t){return e>t?1:e<t?-1:0}function Rr(e,t,r){for(var n=new Br(null,null),i=n,a=n;;){var o=r(e,t.key);if(o<0){if(t.left===null)break;if(r(e,t.left.key)<0){var u=t.left;if(t.left=u.right,u.right=t,t=u,t.left===null)break}a.left=t,a=t,t=t.left}else if(o>0){if(t.right===null)break;if(r(e,t.right.key)>0){var u=t.right;if(t.right=u.left,u.left=t,t=u,t.right===null)break}i.right=t,i=t,t=t.right}else break}return i.right=t.left,a.left=t.right,t.left=n.right,t.right=n.left,t}function ou(e,t,r,n){var i=new Br(e,t);if(r===null)return i.left=i.right=null,i;r=Rr(e,r,n);var a=n(e,r.key);return a<0?(i.left=r.left,i.right=r,r.left=null):a>=0&&(i.right=r.right,i.left=r,r.right=null),i}function Ev(e,t,r){var n=null,i=null;if(t){t=Rr(e,t,r);var a=r(t.key,e);a===0?(n=t.left,i=t.right):a<0?(i=t.right,t.right=null,n=t):(n=t.left,t.left=null,i=t)}return{left:n,right:i}}function J5(e,t,r){return t===null?e:(e===null||(t=Rr(e.key,t,r),t.left=e),t)}function Ju(e,t,r,n,i){if(e){n(""+t+(r?"└── ":"├── ")+i(e)+`
`);var a=t+(r?"    ":"│   ");e.left&&Ju(e.left,a,!1,n,i),e.right&&Ju(e.right,a,!0,n,i)}}var Ys=function(){function e(t){t===void 0&&(t=Q5),this._root=null,this._size=0,this._comparator=t}return e.prototype.insert=function(t,r){return this._size++,this._root=ou(t,r,this._root,this._comparator)},e.prototype.add=function(t,r){var n=new Br(t,r);this._root===null&&(n.left=n.right=null,this._size++,this._root=n);var i=this._comparator,a=Rr(t,this._root,i),o=i(t,a.key);return o===0?this._root=a:(o<0?(n.left=a.left,n.right=a,a.left=null):o>0&&(n.right=a.right,n.left=a,a.right=null),this._size++,this._root=n),this._root},e.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},e.prototype._remove=function(t,r,n){var i;if(r===null)return null;r=Rr(t,r,n);var a=n(t,r.key);return a===0?(r.left===null?i=r.right:(i=Rr(t,r.left,n),i.right=r.right),this._size--,i):r},e.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=Rr(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},e.prototype.findStatic=function(t){for(var r=this._root,n=this._comparator;r;){var i=n(t,r.key);if(i===0)return r;i<0?r=r.left:r=r.right}return null},e.prototype.find=function(t){return this._root&&(this._root=Rr(t,this._root,this._comparator),this._comparator(t,this._root.key)!==0)?null:this._root},e.prototype.contains=function(t){for(var r=this._root,n=this._comparator;r;){var i=n(t,r.key);if(i===0)return!0;i<0?r=r.left:r=r.right}return!1},e.prototype.forEach=function(t,r){for(var n=this._root,i=[],a=!1;!a;)n!==null?(i.push(n),n=n.left):i.length!==0?(n=i.pop(),t.call(r,n),n=n.right):a=!0;return this},e.prototype.range=function(t,r,n,i){for(var a=[],o=this._comparator,u=this._root,s;a.length!==0||u;)if(u)a.push(u),u=u.left;else{if(u=a.pop(),s=o(u.key,r),s>0)break;if(o(u.key,t)>=0&&n.call(i,u))return this;u=u.right}return this},e.prototype.keys=function(){var t=[];return this.forEach(function(r){var n=r.key;return t.push(n)}),t},e.prototype.values=function(){var t=[];return this.forEach(function(r){var n=r.data;return t.push(n)}),t},e.prototype.min=function(){return this._root?this.minNode(this._root).key:null},e.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},e.prototype.minNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.left;)t=t.left;return t},e.prototype.maxNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.right;)t=t.right;return t},e.prototype.at=function(t){for(var r=this._root,n=!1,i=0,a=[];!n;)if(r)a.push(r),r=r.left;else if(a.length>0){if(r=a.pop(),i===t)return r;i++,r=r.right}else n=!0;return null},e.prototype.next=function(t){var r=this._root,n=null;if(t.right){for(n=t.right;n.left;)n=n.left;return n}for(var i=this._comparator;r;){var a=i(t.key,r.key);if(a===0)break;a<0?(n=r,r=r.left):r=r.right}return n},e.prototype.prev=function(t){var r=this._root,n=null;if(t.left!==null){for(n=t.left;n.right;)n=n.right;return n}for(var i=this._comparator;r;){var a=i(t.key,r.key);if(a===0)break;a<0?r=r.left:(n=r,r=r.right)}return n},e.prototype.clear=function(){return this._root=null,this._size=0,this},e.prototype.toList=function(){return t7(this._root)},e.prototype.load=function(t,r,n){r===void 0&&(r=[]),n===void 0&&(n=!1);var i=t.length,a=this._comparator;if(n&&rs(t,r,0,i-1,a),this._root===null)this._root=es(t,r,0,i),this._size=i;else{var o=r7(this.toList(),e7(t,r),a);i=this._size+i,this._root=ts({head:o},0,i)}return this},e.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){t===void 0&&(t=function(n){return String(n.key)});var r=[];return Ju(this._root,"",!0,function(n){return r.push(n)},t),r.join("")},e.prototype.update=function(t,r,n){var i=this._comparator,a=Ev(t,this._root,i),o=a.left,u=a.right;i(t,r)<0?u=ou(r,n,u,i):o=ou(r,n,o,i),this._root=J5(o,u,i)},e.prototype.split=function(t){return Ev(t,this._root,this._comparator)},e.prototype[Symbol.iterator]=function(){var t,r,n;return K5(this,function(i){switch(i.label){case 0:t=this._root,r=[],n=!1,i.label=1;case 1:return n?[3,6]:t===null?[3,2]:(r.push(t),t=t.left,[3,5]);case 2:return r.length===0?[3,4]:(t=r.pop(),[4,t]);case 3:return i.sent(),t=t.right,[3,5];case 4:n=!0,i.label=5;case 5:return[3,1];case 6:return[2]}})},e}();function es(e,t,r,n){var i=n-r;if(i>0){var a=r+Math.floor(i/2),o=e[a],u=t[a],s=new Br(o,u);return s.left=es(e,t,r,a),s.right=es(e,t,a+1,n),s}return null}function e7(e,t){for(var r=new Br(null,null),n=r,i=0;i<e.length;i++)n=n.next=new Br(e[i],t[i]);return n.next=null,r.next}function t7(e){for(var t=e,r=[],n=!1,i=new Br(null,null),a=i;!n;)t?(r.push(t),t=t.left):r.length>0?(t=a=a.next=r.pop(),t=t.right):n=!0;return a.next=null,i.next}function ts(e,t,r){var n=r-t;if(n>0){var i=t+Math.floor(n/2),a=ts(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=ts(e,i+1,r),o}return null}function r7(e,t,r){for(var n=new Br(null,null),i=n,a=e,o=t;a!==null&&o!==null;)r(a.key,o.key)<0?(i.next=a,a=a.next):(i.next=o,o=o.next),i=i.next;return a!==null?i.next=a:o!==null&&(i.next=o),n.next}function rs(e,t,r,n,i){if(!(r>=n)){for(var a=e[r+n>>1],o=r-1,u=n+1;;){do o++;while(i(e[o],a)<0);do u--;while(i(e[u],a)>0);if(o>=u)break;var s=e[o];e[o]=e[u],e[u]=s,s=t[o],t[o]=t[u],t[u]=s}rs(e,t,r,u,i),rs(e,t,u+1,n,i)}}const gr=11102230246251565e-32,wt=134217729,n7=(3+8*gr)*gr;function uu(e,t,r,n,i){let a,o,u,s,l=t[0],c=n[0],f=0,h=0;c>l==c>-l?(a=l,l=t[++f]):(a=c,c=n[++h]);let d=0;if(f<e&&h<r)for(c>l==c>-l?(o=l+a,u=a-(o-l),l=t[++f]):(o=c+a,u=a-(o-c),c=n[++h]),a=o,u!==0&&(i[d++]=u);f<e&&h<r;)c>l==c>-l?(o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f]):(o=a+c,s=o-a,u=a-(o-s)+(c-s),c=n[++h]),a=o,u!==0&&(i[d++]=u);for(;f<e;)o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f],a=o,u!==0&&(i[d++]=u);for(;h<r;)o=a+c,s=o-a,u=a-(o-s)+(c-s),c=n[++h],a=o,u!==0&&(i[d++]=u);return(a!==0||d===0)&&(i[d++]=a),d}function i7(e,t){let r=t[0];for(let n=1;n<e;n++)r+=t[n];return r}function Gi(e){return new Float64Array(e)}const a7=(3+16*gr)*gr,o7=(2+12*gr)*gr,u7=(9+64*gr)*gr*gr,mn=Gi(4),Cv=Gi(8),Av=Gi(12),wv=Gi(16),It=Gi(4);function s7(e,t,r,n,i,a,o){let u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,k,T,D;const U=e-i,I=r-i,w=t-a,M=n-a;x=U*M,h=wt*U,d=h-(h-U),v=U-d,h=wt*M,p=h-(h-M),g=M-p,b=v*g-(x-d*p-v*p-d*g),k=w*I,h=wt*w,d=h-(h-w),v=w-d,h=wt*I,p=h-(h-I),g=I-p,T=v*g-(k-d*p-v*p-d*g),m=b-T,f=b-m,mn[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-k,f=y-m,mn[1]=y-(m+f)+(f-k),D=_+m,f=D-_,mn[2]=_-(D-f)+(m-f),mn[3]=D;let P=i7(4,mn),B=o7*o;if(P>=B||-P>=B||(f=e-U,u=e-(U+f)+(f-i),f=r-I,l=r-(I+f)+(f-i),f=t-w,s=t-(w+f)+(f-a),f=n-M,c=n-(M+f)+(f-a),u===0&&s===0&&l===0&&c===0)||(B=u7*o+n7*Math.abs(P),P+=U*c+M*u-(w*l+I*s),P>=B||-P>=B))return P;x=u*M,h=wt*u,d=h-(h-u),v=u-d,h=wt*M,p=h-(h-M),g=M-p,b=v*g-(x-d*p-v*p-d*g),k=s*I,h=wt*s,d=h-(h-s),v=s-d,h=wt*I,p=h-(h-I),g=I-p,T=v*g-(k-d*p-v*p-d*g),m=b-T,f=b-m,It[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-k,f=y-m,It[1]=y-(m+f)+(f-k),D=_+m,f=D-_,It[2]=_-(D-f)+(m-f),It[3]=D;const J=uu(4,mn,4,It,Cv);x=U*c,h=wt*U,d=h-(h-U),v=U-d,h=wt*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),k=w*l,h=wt*w,d=h-(h-w),v=w-d,h=wt*l,p=h-(h-l),g=l-p,T=v*g-(k-d*p-v*p-d*g),m=b-T,f=b-m,It[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-k,f=y-m,It[1]=y-(m+f)+(f-k),D=_+m,f=D-_,It[2]=_-(D-f)+(m-f),It[3]=D;const se=uu(J,Cv,4,It,Av);x=u*c,h=wt*u,d=h-(h-u),v=u-d,h=wt*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),k=s*l,h=wt*s,d=h-(h-s),v=s-d,h=wt*l,p=h-(h-l),g=l-p,T=v*g-(k-d*p-v*p-d*g),m=b-T,f=b-m,It[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-k,f=y-m,It[1]=y-(m+f)+(f-k),D=_+m,f=D-_,It[2]=_-(D-f)+(m-f),It[3]=D;const ce=uu(se,Av,4,It,wv);return wv[ce-1]}function l7(e,t,r,n,i,a){const o=(t-a)*(r-i),u=(e-i)*(n-a),s=o-u,l=Math.abs(o+u);return Math.abs(s)>=a7*l?s:-s7(e,t,r,n,i,a,l)}var Kg={};const ui=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,ns=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;const r=e.ll.x<t.ll.x?t.ll.x:e.ll.x,n=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:r,y:i},ur:{x:n,y:a}}};let Pr=Number.EPSILON;Pr===void 0&&(Pr=Math.pow(2,-52));const c7=Pr*Pr,Tv=(e,t)=>{if(-Pr<e&&e<Pr&&-Pr<t&&t<Pr)return 0;const r=e-t;return r*r<c7*e*t?0:e<t?-1:1};class f7{constructor(){this.reset()}reset(){this.xRounder=new Mv,this.yRounder=new Mv}round(t,r){return{x:this.xRounder.round(t),y:this.yRounder.round(r)}}}class Mv{constructor(){this.tree=new Ys,this.round(0)}round(t){const r=this.tree.add(t),n=this.tree.prev(r);if(n!==null&&Tv(r.key,n.key)===0)return this.tree.remove(t),n.key;const i=this.tree.next(r);return i!==null&&Tv(r.key,i.key)===0?(this.tree.remove(t),i.key):t}}const Ui=new f7,Ea=(e,t)=>e.x*t.y-e.y*t.x,Qg=(e,t)=>e.x*t.x+e.y*t.y,Iv=(e,t,r)=>{const n=l7(e.x,e.y,t.x,t.y,r.x,r.y);return n>0?-1:n<0?1:0},Va=e=>Math.sqrt(Qg(e,e)),h7=(e,t,r)=>{const n={x:t.x-e.x,y:t.y-e.y},i={x:r.x-e.x,y:r.y-e.y};return Ea(i,n)/Va(i)/Va(n)},d7=(e,t,r)=>{const n={x:t.x-e.x,y:t.y-e.y},i={x:r.x-e.x,y:r.y-e.y};return Qg(i,n)/Va(i)/Va(n)},kv=(e,t,r)=>t.y===0?null:{x:e.x+t.x/t.y*(r-e.y),y:r},Lv=(e,t,r)=>t.x===0?null:{x:r,y:e.y+t.y/t.x*(r-e.x)},v7=(e,t,r,n)=>{if(t.x===0)return Lv(r,n,e.x);if(n.x===0)return Lv(e,t,r.x);if(t.y===0)return kv(r,n,e.y);if(n.y===0)return kv(e,t,r.y);const i=Ea(t,n);if(i==0)return null;const a={x:r.x-e.x,y:r.y-e.y},o=Ea(a,t)/i,u=Ea(a,n)/i,s=e.x+u*t.x,l=r.x+o*n.x,c=e.y+u*t.y,f=r.y+o*n.y,h=(s+l)/2,d=(c+f)/2;return{x:h,y:d}};class Gt{static compare(t,r){const n=Gt.comparePoints(t.point,r.point);return n!==0?n:(t.point!==r.point&&t.link(r),t.isLeft!==r.isLeft?t.isLeft?1:-1:Dr.compare(t.segment,r.segment))}static comparePoints(t,r){return t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0}constructor(t,r){t.events===void 0?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=r}link(t){if(t.point===this.point)throw new Error("Tried to link already linked events");const r=t.point.events;for(let n=0,i=r.length;n<i;n++){const a=r[n];this.point.events.push(a),a.point=this.point}this.checkForConsuming()}checkForConsuming(){const t=this.point.events.length;for(let r=0;r<t;r++){const n=this.point.events[r];if(n.segment.consumedBy===void 0)for(let i=r+1;i<t;i++){const a=this.point.events[i];a.consumedBy===void 0&&n.otherSE.point.events===a.otherSE.point.events&&n.segment.consume(a.segment)}}}getAvailableLinkedEvents(){const t=[];for(let r=0,n=this.point.events.length;r<n;r++){const i=this.point.events[r];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&t.push(i)}return t}getLeftmostComparator(t){const r=new Map,n=i=>{const a=i.otherSE;r.set(i,{sine:h7(this.point,t.point,a.point),cosine:d7(this.point,t.point,a.point)})};return(i,a)=>{r.has(i)||n(i),r.has(a)||n(a);const{sine:o,cosine:u}=r.get(i),{sine:s,cosine:l}=r.get(a);return o>=0&&s>=0?u<l?1:u>l?-1:0:o<0&&s<0?u<l?-1:u>l?1:0:s<o?-1:s>o?1:0}}}let p7=0;class Dr{static compare(t,r){const n=t.leftSE.point.x,i=r.leftSE.point.x,a=t.rightSE.point.x,o=r.rightSE.point.x;if(o<n)return 1;if(a<i)return-1;const u=t.leftSE.point.y,s=r.leftSE.point.y,l=t.rightSE.point.y,c=r.rightSE.point.y;if(n<i){if(s<u&&s<l)return 1;if(s>u&&s>l)return-1;const f=t.comparePoint(r.leftSE.point);if(f<0)return 1;if(f>0)return-1;const h=r.comparePoint(t.rightSE.point);return h!==0?h:-1}if(n>i){if(u<s&&u<c)return-1;if(u>s&&u>c)return 1;const f=r.comparePoint(t.leftSE.point);if(f!==0)return f;const h=t.comparePoint(r.rightSE.point);return h<0?1:h>0?-1:1}if(u<s)return-1;if(u>s)return 1;if(a<o){const f=r.comparePoint(t.rightSE.point);if(f!==0)return f}if(a>o){const f=t.comparePoint(r.rightSE.point);if(f<0)return 1;if(f>0)return-1}if(a!==o){const f=l-u,h=a-n,d=c-s,v=o-i;if(f>h&&d<v)return 1;if(f<h&&d>v)return-1}return a>o?1:a<o||l<c?-1:l>c?1:t.id<r.id?-1:t.id>r.id?1:0}constructor(t,r,n,i){this.id=++p7,this.leftSE=t,t.segment=this,t.otherSE=r,this.rightSE=r,r.segment=this,r.otherSE=t,this.rings=n,this.windings=i}static fromRing(t,r,n){let i,a,o;const u=Gt.comparePoints(t,r);if(u<0)i=t,a=r,o=1;else if(u>0)i=r,a=t,o=-1;else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);const s=new Gt(i,!0),l=new Gt(a,!1);return new Dr(s,l,[n],[o])}replaceRightSE(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const t=this.leftSE.point.y,r=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<r?t:r},ur:{x:this.rightSE.point.x,y:t>r?t:r}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}comparePoint(t){if(this.isAnEndpoint(t))return 0;const r=this.leftSE.point,n=this.rightSE.point,i=this.vector();if(r.x===n.x)return t.x===r.x?0:t.x<r.x?1:-1;const a=(t.y-r.y)/i.y,o=r.x+a*i.x;if(t.x===o)return 0;const u=(t.x-r.x)/i.x,s=r.y+u*i.y;return t.y===s?0:t.y<s?-1:1}getIntersection(t){const r=this.bbox(),n=t.bbox(),i=ns(r,n);if(i===null)return null;const a=this.leftSE.point,o=this.rightSE.point,u=t.leftSE.point,s=t.rightSE.point,l=ui(r,u)&&this.comparePoint(u)===0,c=ui(n,a)&&t.comparePoint(a)===0,f=ui(r,s)&&this.comparePoint(s)===0,h=ui(n,o)&&t.comparePoint(o)===0;if(c&&l)return h&&!f?o:!h&&f?s:null;if(c)return f&&a.x===s.x&&a.y===s.y?null:a;if(l)return h&&o.x===u.x&&o.y===u.y?null:u;if(h&&f)return null;if(h)return o;if(f)return s;const d=v7(a,this.vector(),u,t.vector());return d===null||!ui(i,d)?null:Ui.round(d.x,d.y)}split(t){const r=[],n=t.events!==void 0,i=new Gt(t,!0),a=new Gt(t,!1),o=this.rightSE;this.replaceRightSE(a),r.push(a),r.push(i);const u=new Dr(i,o,this.rings.slice(),this.windings.slice());return Gt.comparePoints(u.leftSE.point,u.rightSE.point)>0&&u.swapEvents(),Gt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(i.checkForConsuming(),a.checkForConsuming()),r}swapEvents(){const t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let r=0,n=this.windings.length;r<n;r++)this.windings[r]*=-1}consume(t){let r=this,n=t;for(;r.consumedBy;)r=r.consumedBy;for(;n.consumedBy;)n=n.consumedBy;const i=Dr.compare(r,n);if(i!==0){if(i>0){const a=r;r=n,n=a}if(r.prev===n){const a=r;r=n,n=a}for(let a=0,o=n.rings.length;a<o;a++){const u=n.rings[a],s=n.windings[a],l=r.rings.indexOf(u);l===-1?(r.rings.push(u),r.windings.push(s)):r.windings[l]+=s}n.rings=null,n.windings=null,n.consumedBy=r,n.leftSE.consumedBy=r.leftSE,n.rightSE.consumedBy=r.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};const r=this._afterState.rings,n=this._afterState.windings,i=this._afterState.multiPolys;for(let u=0,s=this.rings.length;u<s;u++){const l=this.rings[u],c=this.windings[u],f=r.indexOf(l);f===-1?(r.push(l),n.push(c)):n[f]+=c}const a=[],o=[];for(let u=0,s=r.length;u<s;u++){if(n[u]===0)continue;const l=r[u],c=l.poly;if(o.indexOf(c)===-1)if(l.isExterior)a.push(c);else{o.indexOf(c)===-1&&o.push(c);const f=a.indexOf(l.poly);f!==-1&&a.splice(f,1)}}for(let u=0,s=a.length;u<s;u++){const l=a[u].multiPoly;i.indexOf(l)===-1&&i.push(l)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const t=this.beforeState().multiPolys,r=this.afterState().multiPolys;switch(Zt.type){case"union":{const n=t.length===0,i=r.length===0;this._isInResult=n!==i;break}case"intersection":{let n,i;t.length<r.length?(n=t.length,i=r.length):(n=r.length,i=t.length),this._isInResult=i===Zt.numMultiPolys&&n<i;break}case"xor":{const n=Math.abs(t.length-r.length);this._isInResult=n%2===1;break}case"difference":{const n=i=>i.length===1&&i[0].isSubject;this._isInResult=n(t)!==n(r);break}default:throw new Error(`Unrecognized operation type found ${Zt.type}`)}return this._isInResult}}class Rv{constructor(t,r,n){if(!Array.isArray(t)||t.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=r,this.isExterior=n,this.segments=[],typeof t[0][0]!="number"||typeof t[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const i=Ui.round(t[0][0],t[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};let a=i;for(let o=1,u=t.length;o<u;o++){if(typeof t[o][0]!="number"||typeof t[o][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let s=Ui.round(t[o][0],t[o][1]);s.x===a.x&&s.y===a.y||(this.segments.push(Dr.fromRing(a,s,this)),s.x<this.bbox.ll.x&&(this.bbox.ll.x=s.x),s.y<this.bbox.ll.y&&(this.bbox.ll.y=s.y),s.x>this.bbox.ur.x&&(this.bbox.ur.x=s.x),s.y>this.bbox.ur.y&&(this.bbox.ur.y=s.y),a=s)}(i.x!==a.x||i.y!==a.y)&&this.segments.push(Dr.fromRing(a,i,this))}getSweepEvents(){const t=[];for(let r=0,n=this.segments.length;r<n;r++){const i=this.segments[r];t.push(i.leftSE),t.push(i.rightSE)}return t}}class g7{constructor(t,r){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Rv(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let n=1,i=t.length;n<i;n++){const a=new Rv(t[n],this,!1);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.interiorRings.push(a)}this.multiPoly=r}getSweepEvents(){const t=this.exteriorRing.getSweepEvents();for(let r=0,n=this.interiorRings.length;r<n;r++){const i=this.interiorRings[r].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class Pv{constructor(t,r){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof t[0][0][0]=="number"&&(t=[t])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let n=0,i=t.length;n<i;n++){const a=new g7(t[n],this);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.polys.push(a)}this.isSubject=r}getSweepEvents(){const t=[];for(let r=0,n=this.polys.length;r<n;r++){const i=this.polys[r].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class ja{static factory(t){const r=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];if(!a.isInResult()||a.ringOut)continue;let o=null,u=a.leftSE,s=a.rightSE;const l=[u],c=u.point,f=[];for(;o=u,u=s,l.push(u),u.point!==c;)for(;;){const h=u.getAvailableLinkedEvents();if(h.length===0){const p=l[0].point,g=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${p.x}, ${p.y}]. Last matching segment found ends at [${g.x}, ${g.y}].`)}if(h.length===1){s=h[0].otherSE;break}let d=null;for(let p=0,g=f.length;p<g;p++)if(f[p].point===u.point){d=p;break}if(d!==null){const p=f.splice(d)[0],g=l.splice(p.index);g.unshift(g[0].otherSE),r.push(new ja(g.reverse()));continue}f.push({index:l.length,point:u.point});const v=u.getLeftmostComparator(o);s=h.sort(v)[0].otherSE;break}r.push(new ja(l))}return r}constructor(t){this.events=t;for(let r=0,n=t.length;r<n;r++)t[r].segment.ringOut=this;this.poly=null}getGeom(){let t=this.events[0].point;const r=[t];for(let l=1,c=this.events.length-1;l<c;l++){const f=this.events[l].point,h=this.events[l+1].point;Iv(f,t,h)!==0&&(r.push(f),t=f)}if(r.length===1)return null;const n=r[0],i=r[1];Iv(n,t,i)===0&&r.shift(),r.push(r[0]);const a=this.isExteriorRing()?1:-1,o=this.isExteriorRing()?0:r.length-1,u=this.isExteriorRing()?r.length:-1,s=[];for(let l=o;l!=u;l+=a)s.push([r[l].x,r[l].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){const t=this.enclosingRing();this._isExteriorRing=t?!t.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let t=this.events[0];for(let i=1,a=this.events.length;i<a;i++){const o=this.events[i];Gt.compare(t,o)>0&&(t=o)}let r=t.segment.prevInResult(),n=r?r.prevInResult():null;for(;;){if(!r)return null;if(!n)return r.ringOut;if(n.ringOut!==r.ringOut)return n.ringOut.enclosingRing()!==r.ringOut?r.ringOut:r.ringOut.enclosingRing();r=n.prevInResult(),n=r?r.prevInResult():null}}}class Fv{constructor(t){this.exteriorRing=t,t.poly=this,this.interiorRings=[]}addInterior(t){this.interiorRings.push(t),t.poly=this}getGeom(){const t=[this.exteriorRing.getGeom()];if(t[0]===null)return null;for(let r=0,n=this.interiorRings.length;r<n;r++){const i=this.interiorRings[r].getGeom();i!==null&&t.push(i)}return t}}class m7{constructor(t){this.rings=t,this.polys=this._composePolys(t)}getGeom(){const t=[];for(let r=0,n=this.polys.length;r<n;r++){const i=this.polys[r].getGeom();i!==null&&t.push(i)}return t}_composePolys(t){const r=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];if(!a.poly)if(a.isExteriorRing())r.push(new Fv(a));else{const o=a.enclosingRing();o.poly||r.push(new Fv(o)),o.poly.addInterior(a)}}return r}}class y7{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Dr.compare;this.queue=t,this.tree=new Ys(r),this.segments=[]}process(t){const r=t.segment,n=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(r),n;const i=t.isLeft?this.tree.add(r):this.tree.find(r);if(!i)throw new Error(`Unable to find segment #${r.id} [${r.leftSE.point.x}, ${r.leftSE.point.y}] -> [${r.rightSE.point.x}, ${r.rightSE.point.y}] in SweepLine tree.`);let a=i,o=i,u,s;for(;u===void 0;)a=this.tree.prev(a),a===null?u=null:a.key.consumedBy===void 0&&(u=a.key);for(;s===void 0;)o=this.tree.next(o),o===null?s=null:o.key.consumedBy===void 0&&(s=o.key);if(t.isLeft){let l=null;if(u){const f=u.getIntersection(r);if(f!==null&&(r.isAnEndpoint(f)||(l=f),!u.isAnEndpoint(f))){const h=this._splitSafely(u,f);for(let d=0,v=h.length;d<v;d++)n.push(h[d])}}let c=null;if(s){const f=s.getIntersection(r);if(f!==null&&(r.isAnEndpoint(f)||(c=f),!s.isAnEndpoint(f))){const h=this._splitSafely(s,f);for(let d=0,v=h.length;d<v;d++)n.push(h[d])}}if(l!==null||c!==null){let f=null;l===null?f=c:c===null?f=l:f=Gt.comparePoints(l,c)<=0?l:c,this.queue.remove(r.rightSE),n.push(r.rightSE);const h=r.split(f);for(let d=0,v=h.length;d<v;d++)n.push(h[d])}n.length>0?(this.tree.remove(r),n.push(t)):(this.segments.push(r),r.prev=u)}else{if(u&&s){const l=u.getIntersection(s);if(l!==null){if(!u.isAnEndpoint(l)){const c=this._splitSafely(u,l);for(let f=0,h=c.length;f<h;f++)n.push(c[f])}if(!s.isAnEndpoint(l)){const c=this._splitSafely(s,l);for(let f=0,h=c.length;f<h;f++)n.push(c[f])}}}this.tree.remove(r)}return n}_splitSafely(t,r){this.tree.remove(t);const n=t.rightSE;this.queue.remove(n);const i=t.split(r);return i.push(n),t.consumedBy===void 0&&this.tree.add(t),i}}const Ov=typeof process<"u"&&Kg.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,_7=typeof process<"u"&&Kg.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class x7{run(t,r,n){Zt.type=t,Ui.reset();const i=[new Pv(r,!0)];for(let f=0,h=n.length;f<h;f++)i.push(new Pv(n[f],!1));if(Zt.numMultiPolys=i.length,Zt.type==="difference"){const f=i[0];let h=1;for(;h<i.length;)ns(i[h].bbox,f.bbox)!==null?h++:i.splice(h,1)}if(Zt.type==="intersection")for(let f=0,h=i.length;f<h;f++){const d=i[f];for(let v=f+1,p=i.length;v<p;v++)if(ns(d.bbox,i[v].bbox)===null)return[]}const a=new Ys(Gt.compare);for(let f=0,h=i.length;f<h;f++){const d=i[f].getSweepEvents();for(let v=0,p=d.length;v<p;v++)if(a.insert(d[v]),a.size>Ov)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const o=new y7(a);let u=a.size,s=a.pop();for(;s;){const f=s.key;if(a.size===u){const d=f.segment;throw new Error(`Unable to pop() ${f.isLeft?"left":"right"} SweepEvent [${f.point.x}, ${f.point.y}] from segment #${d.id} [${d.leftSE.point.x}, ${d.leftSE.point.y}] -> [${d.rightSE.point.x}, ${d.rightSE.point.y}] from queue.`)}if(a.size>Ov)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(o.segments.length>_7)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const h=o.process(f);for(let d=0,v=h.length;d<v;d++){const p=h[d];p.consumedBy===void 0&&a.insert(p)}u=a.size,s=a.pop()}Ui.reset();const l=ja.factory(o.segments);return new m7(l).getGeom()}}const Zt=new x7,b7=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Zt.run("union",e,r)},S7=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Zt.run("intersection",e,r)},E7=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Zt.run("xor",e,r)},C7=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Zt.run("difference",e,r)};var A7={union:b7,intersection:S7,xor:E7,difference:C7};function w7(e,t,r){r===void 0&&(r={});var n=ll(e),i=ll(t),a=A7.union(n.coordinates,i.coordinates);return a.length===0?null:a.length===1?is(a[0],r.properties):My(a,r.properties)}var T7=function(){function e(){ie(this,e)}return ne(e,[{key:"getCombineFeature",value:function(r){var n=null,i=r[0];return r.map(function(a){var o=is(a.coordinates);n===null?n=o:n=w7(n,o)}),i&&(n.properties=z({},i)),n}}]),e}(),si="select",li="active",M7=function(){function e(t){var r=t.layerService,n=t.tileLayerService,i=t.parent;ie(this,e),S(this,"tilePickID",new Map),this.layerService=r,this.tileLayerService=n,this.parent=i,this.tileSourceService=new T7}return ne(e,[{key:"pickRender",value:function(r){var n=this.tileLayerService.getVisibleTileBylngLat(r.lngLat);if(n){var i=n.getMainLayer();i==null||i.layerPickService.pickRender(r)}}},{key:"pick",value:function(){var t=Y(A.mark(function n(i,a){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.parent.getContainer(),u=o.get(q.IPickingService),i.type!=="RasterLayer"){f.next=8;break}if(s=this.tileLayerService.getVisibleTileBylngLat(a.lngLat),!(s&&s.getMainLayer()!==void 0)){f.next=7;break}return l=s.getMainLayer(),f.abrupt("return",l.layerPickService.pickRasterLayer(l,a,this.parent));case 7:return f.abrupt("return",!1);case 8:return this.pickRender(a),f.abrupt("return",u.pickFromPickingFBO(i,a));case 10:case"end":return f.stop()}},n,this)}));function r(n,i){return t.apply(this,arguments)}return r}()},{key:"selectFeature",value:function(r){var n=Ie(r,3),i=n[0],a=n[1],o=n[2],u=this.color2PickId(i,a,o);this.tilePickID.set(si,u),this.updateHighLight(i,a,o,si)}},{key:"highlightPickedFeature",value:function(r){var n=Ie(r,3),i=n[0],a=n[1],o=n[2],u=this.color2PickId(i,a,o);this.tilePickID.set(li,u),this.updateHighLight(i,a,o,li)}},{key:"updateHighLight",value:function(r,n,i,a){this.tileLayerService.tiles.map(function(o){var u=o.getMainLayer();switch(a){case si:u==null||u.hooks.beforeSelect.call([r,n,i]);break;case li:u==null||u.hooks.beforeHighlight.call([r,n,i]);break}})}},{key:"setPickState",value:function(){var r=this.tilePickID.get(si),n=this.tilePickID.get(li);if(r){var i=this.pickId2Color(r),a=Ie(i,3),o=a[0],u=a[1],s=a[2];this.updateHighLight(o,u,s,si);return}if(n){var l=this.pickId2Color(n),c=Ie(l,3),f=c[0],h=c[1],d=c[2];this.updateHighLight(f,h,d,li);return}}},{key:"color2PickId",value:function(r,n,i){return qr(new Uint8Array([r,n,i]))}},{key:"pickId2Color",value:function(r){return yr(r)}},{key:"getFeatureById",value:function(r){var n=this.tileLayerService.getTiles().filter(function(a){return a.visible}),i=[];return n.forEach(function(a){i.push.apply(i,Q(a.getFeatureById(r)))}),i}},{key:"pickRasterLayer",value:function(r,n,i){return!1}}]),e}();function I7(e){return e==="PolygonLayer"?gg:e==="LineLayer"?og:Gu}function k7(e){return["PolygonLayer","LineLayer"].indexOf(e)!==-1}function L7(e){var t=R7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function R7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var an=function(e){be(r,e);var t=L7(r);function r(n,i){var a;return ie(this,r),a=t.call(this),S(R(a),"visible",!0),S(R(a),"layers",[]),S(R(a),"isLoaded",!1),S(R(a),"tileMaskLayers",[]),a.parent=i,a.sourceTile=n,a.x=n.x,a.y=n.y,a.z=n.z,a.key="".concat(a.x,"_").concat(a.y,"_").concat(a.z),a}return ne(r,[{key:"getLayers",value:function(){return this.layers}},{key:"styleUpdate",value:function(){}},{key:"lnglatInBounds",value:function(i){var a=Ie(this.sourceTile.bounds,4),o=a[0],u=a[1],s=a[2],l=a[3],c=i.lng,f=i.lat;return c>=o&&c<=s&&f>=u&&f<=l}},{key:"getLayerOptions",value:function(){var i,a=this.parent.getLayerConfig();return z(z({},a),{},{textAllowOverlap:!0,autoFit:!1,maskLayers:this.getMaskLayer(),tileMask:k7(this.parent.type),mask:a.mask||((i=a.maskLayers)===null||i===void 0?void 0:i.length)!==0&&a.enableMask})}},{key:"getMaskLayer",value:function(){var i=this,a=this.parent.getLayerConfig(),o=a.maskLayers,u=[];return o==null||o.forEach(function(s){if(!s.tileLayer)return u.push(s),s;var l=s.tileLayer,c=l.getTile(i.sourceTile.key),f=c==null?void 0:c.getLayers()[0];f&&u.push(f)}),u}},{key:"addTileMask",value:function(){var n=Y(A.mark(function a(){var o,u,s;return A.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=new gg({name:"mask",visible:!0,enablePicking:!1}).source({type:"FeatureCollection",features:[this.sourceTile.bboxPolygon]},{parser:{type:"geojson",featureId:"id"}}).shape("fill").color("#0f0").style({opacity:.5}),u=Wo(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),c.next=5,o.init();case 5:return this.tileMask=o,s=this.getMainLayer(),s!==void 0&&(s.tileMask=o),c.abrupt("return",o);case 9:case"end":return c.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"addMask",value:function(){var n=Y(A.mark(function a(o,u){var s;return A.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s=Wo(this.parent.sceneContainer),u.setContainer(s,this.parent.sceneContainer),c.next=4,u.init();case 4:o.addMask(u),this.tileMaskLayers.push(u);case 6:case"end":return c.stop()}},a,this)}));function i(a,o){return n.apply(this,arguments)}return i}()},{key:"addLayer",value:function(){var n=Y(A.mark(function a(o){var u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o.isTileLayer=!0,u=Wo(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),this.layers.push(o),l.next=6,o.init();case 6:case"end":return l.stop()}},a,this)}));function i(a){return n.apply(this,arguments)}return i}()},{key:"updateVisible",value:function(i){this.visible=i,this.updateOptions("visible",i)}},{key:"updateOptions",value:function(i,a){this.layers.forEach(function(o){o.updateLayerConfig(S({},i,a))})}},{key:"getMainLayer",value:function(){return this.layers[0]}},{key:"getFeatures",value:function(i){return[]}},{key:"getFeatureById",value:function(i){return[]}},{key:"destroy",value:function(){var i;(i=this.tileMask)===null||i===void 0||i.destroy(),this.layers.forEach(function(a){return a.destroy()})}}]),r}(zt.EventEmitter);function P7(e){var t=F7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function F7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var O7=function(e){be(r,e);var t=P7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.getSourceOption(),u=o.data.features[0].properties,s=new og().source(o.data,o.options).size(1).shape("line").color("red"),l=new Gu({minZoom:this.z-1,maxZoom:this.z+1,textAllowOverlap:!0}).source([u],{parser:{type:"json",x:"x",y:"y"}}).size(20).color("red").shape(this.key).style({stroke:"#fff",strokeWidth:2}),f.next=6,this.addLayer(s);case 6:return f.next=8,this.addLayer(l);case 8:this.isLoaded=!0;case 9:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.layers.testTile.features;return{data:{type:"FeatureCollection",features:a},options:{parser:{type:"geojson"},transforms:i.transforms}}}}]),r}(an);function D7(e){var t=N7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function N7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var B7=function(e){be(r,e);var t=D7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new mA(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),r}(an);function U7(e){var t=z7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function z7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var $7=function(e){be(r,e);var t=U7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new M4(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getFeatures",value:function(i){if(!i)return[];var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=a.featureId,s=this.getFeatures(o);return{data:{type:"FeatureCollection",features:s},options:{parser:{type:"geojson",featureId:u},transforms:i.transforms}}}}]),r}(an),V7=["rasterData"];function j7(e){var t=H7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function H7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var G7=function(e){be(r,e);var t=j7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new Ds(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=Wt(a,V7);return{data:o,options:{parser:z({type:"rasterRgb",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}}]),r}(an);function W7(e){var t=Y7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function Y7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var X7=function(e){be(r,e);var t=W7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l;return A.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new Ds(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),r}(an),Z7=["rasterData"];function q7(e){var t=K7();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function K7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Q7={positions:[0,1],colors:["#000","#fff"]},J7=function(e){be(r,e);var t=q7(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c,f,h;return A.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=this.getLayerOptions(),c=l.rampColors,f=l.domain,this.colorTexture=this.parent.textureService.getColorTexture(c,f),h=new Ds(z(z({},u),{},{colorTexture:this.colorTexture})).source(s.data,s.options),o&&Object.keys(o).forEach(function(p){var g,m,_=p;h[_]((g=o[_])===null||g===void 0?void 0:g.field,(m=o[_])===null||m===void 0?void 0:m.values)}),v.next=9,this.addLayer(h);case 9:this.isLoaded=!0;case 10:case"end":return v.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=Wt(a,Z7);return{data:o,options:{parser:z({type:"raster",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}},{key:"styleUpdate",value:function(){for(var i=this,a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];var s=o,l=s.rampColors,c=l===void 0?Q7:l,f=s.domain;this.colorTexture=this.parent.textureService.getColorTexture(c,f||cs(c)),this.layers.forEach(function(h){return h.style({colorTexture:i.colorTexture})})}},{key:"destroy",value:function(){this.layers.forEach(function(i){return i.destroy()})}}]),r}(an);function e6(e){var t=t6();return function(){var n=K(e),i;if(t){var a=K(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Se(this,i)}}function t6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var pa=function(e){be(r,e);var t=e6(r);function r(){return ie(this,r),t.apply(this,arguments)}return ne(r,[{key:"initTileLayer",value:function(){var n=Y(A.mark(function a(){var o,u,s,l,c;return A.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=I7(this.parent.type),l=this.getSourceOption(),l){h.next=8;break}return this.isLoaded=!0,this.emit("loaded"),h.abrupt("return");case 8:return c=new s(z({},u)).source(l.data,l.options),Object.keys(o).forEach(function(d){var v,p,g=d;c[g]((v=o[g])===null||v===void 0?void 0:v.field,(p=o[g])===null||p===void 0?void 0:p.values)}),h.next=12,this.addLayer(c);case 12:if(!u.tileMask){h.next=15;break}return h.next=15,this.addTileMask();case 15:this.setLayerMinMaxZoom(c),this.isLoaded=!0,this.emit("loaded");case 18:case"end":return h.stop()}},a,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=o===void 0?"defaultLayer":o,s=a.featureId,l=s===void 0?"id":s,c=this.getFeatures(u);return{data:{type:"FeatureCollection",features:c},options:{parser:{type:"geojson",featureId:l},transforms:i.transforms}}}},{key:"setLayerMinMaxZoom",value:function(i){i.getModelType()==="text"&&i.updateLayerConfig({maxZoom:this.z+1,minZoom:this.z-1})}},{key:"getFeatures",value:function(i){var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getFeatureById",value:function(i){var a=this.getMainLayer();if(!a)return[];var o=a.getSource().data.dataArray.filter(function(u){return u._id===i});return o}}]),r}(an);function r6(e){var t=e.type;switch(t){case"PolygonLayer":return pa;case"LineLayer":return pa;case"PointLayer":return pa;case"TileDebugLayer":return O7;case"MaskLayer":return $7;case"RasterLayer":var r=e.getSource().parser.dataType;switch(r){case St.RGB:case St.CUSTOMRGB:return G7;case St.ARRAYBUFFER:case St.CUSTOMARRAYBUFFER:return J7;case St.TERRAINRGB:case St.CUSTOMTERRAINRGB:return X7;default:return B7}default:return pa}}var n6=["shape","color","size","style","animate","filter","rotate","scale","setBlend","setSelect","setActive","disableMask","enableMask","addMask","removeMask"],i6=Ze.debounce,Dv=function(){function e(t){var r=this;ie(this,e),S(this,"initedTileset",!1),S(this,"mapchange",function(){var i;if(r.parent.isVisible()!==!1){var a=r.getCurrentView(),o=a.latLonBounds,u=a.zoom;if(r.mapService.version==="GAODE1.x"){var s=r.parent.getLayerConfig(),l=s.visible;u<2&&l?(r.parent.updateLayerConfig({visible:!1}),r.layerService.reRender()):u>=2&&!l&&(r.parent.updateLayerConfig({visible:!0}),r.layerService.reRender())}r.lastViewStates&&r.lastViewStates.zoom===u&&r.lastViewStates.latLonBounds.toString()===o.toString()||(r.lastViewStates={zoom:u,latLonBounds:o},(i=r.tilesetManager)===null||i===void 0||i.throttleUpdate(u,o))}}),S(this,"viewchange",i6(this.mapchange,24)),this.parent=t;var n=this.parent.getContainer();this.rendererService=n.get(q.IRendererService),this.layerService=n.get(q.ILayerService),this.mapService=n.get(q.IMapService),this.pickingService=n.get(q.IPickingService),this.tileLayerService=new q5({rendererService:this.rendererService,layerService:this.layerService,parent:t}),this.tilePickService=new M7({tileLayerService:this.tileLayerService,layerService:this.layerService,parent:t}),this.parent.setLayerPickService(this.tilePickService),this.proxy(t),this.initTileSetManager()}return ne(e,[{key:"initTileSetManager",value:function(){var r,n=this.parent.getSource();if(this.tilesetManager=n.tileset,this.initedTileset||(this.bindTilesetEvent(),this.initedTileset=!0),this.parent.isVisible()!==!1){var i=this.getCurrentView(),a=i.latLonBounds,o=i.zoom;(r=this.tilesetManager)===null||r===void 0||r.update(o,a)}}},{key:"getCurrentView",value:function(){var r=this.mapService.getBounds(),n=[r[0][0],r[0][1],r[1][0],r[1][1]],i=this.mapService.getZoom();return{latLonBounds:n,zoom:i}}},{key:"bindTilesetEvent",value:function(){var r=this;this.tilesetManager.on("tile-loaded",function(n){}),this.tilesetManager.on("tile-unload",function(n){r.tileUnLoad(n)}),this.tilesetManager.on("tile-error",function(n,i){r.tileError(n)}),this.tilesetManager.on("tile-update",function(){r.tileUpdate()}),this.mapService.on("zoomend",this.mapchange),this.mapService.on("moveend",this.viewchange)}},{key:"render",value:function(){this.tileLayerService.render()}},{key:"getLayers",value:function(){return this.tileLayerService.getLayers()}},{key:"getTiles",value:function(){return this.tileLayerService.getTiles()}},{key:"getTile",value:function(r){return this.tileLayerService.getTile(r)}},{key:"tileLoaded",value:function(r){}},{key:"tileError",value:function(r){console.warn("error:",r)}},{key:"destroy",value:function(){var r;this.mapService.off("zoomend",this.mapchange),this.mapService.off("moveend",this.viewchange),(r=this.tilesetManager)===null||r===void 0||r.destroy(),this.tileLayerService.destroy()}},{key:"reload",value:function(){var r;this.tilesetManager.clear();var n=this.getCurrentView(),i=n.latLonBounds,a=n.zoom;(r=this.tilesetManager)===null||r===void 0||r.update(a,i)}},{key:"tileUnLoad",value:function(r){this.tileLayerService.removeTile(r.key)}},{key:"tileUpdate",value:function(){var t=Y(A.mark(function n(){var i=this,a,o,u;return A.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(this.tilesetManager){l.next=2;break}return l.abrupt("return");case 2:return a=this.parent.getMinZoom(),o=this.parent.getMaxZoom(),u=this.tilesetManager.tiles.filter(function(c){return c.isLoaded}).filter(function(c){return c.isVisibleChange}).filter(function(c){return c.data}).filter(function(c){return c.z>=a&&c.z<o}),l.next=7,Promise.all(u.map(function(){var c=Y(A.mark(function f(h){var d,v;return A.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(i.tileLayerService.hasTile(h.key)){g.next=9;break}return d=r6(i.parent),v=new d(h,i.parent),g.next=5,v.initTileLayer();case 5:i.tilePickService.setPickState(),v.getLayers().length!==0&&(i.tileLayerService.addTile(v),i.tileLayerService.updateTileVisible(h),i.layerService.reRender()),g.next=12;break;case 9:i.tileLayerService.updateTileVisible(h),i.tilePickService.setPickState(),i.layerService.reRender();case 12:case"end":return g.stop()}},f)}));return function(f){return c.apply(this,arguments)}}()));case 7:this.tilesetManager.isLoaded&&this.parent.emit("tiles-loaded",this.tilesetManager.currentTiles);case 8:case"end":return l.stop()}},n,this)}));function r(){return t.apply(this,arguments)}return r}()},{key:"setPickState",value:function(r){}},{key:"pickRender",value:function(r){this.tilePickService.pickRender(r)}},{key:"selectFeature",value:function(r){this.tilePickService.selectFeature(r)}},{key:"highlightPickedFeature",value:function(r){this.tilePickService.highlightPickedFeature(r)}},{key:"proxy",value:function(r){var n=this;n6.forEach(function(i){var a=r[i].bind(r);r[i]=function(){for(var o=arguments.length,u=new Array(o),s=0;s<o;s++)u[s]=arguments[s];return a.apply(void 0,u),n.getLayers().map(function(l){l[i].apply(l,u)}),i==="style"&&n.getTiles().forEach(function(l){return l.styleUpdate.apply(l,u)}),r}})}}]),e}(),Nv,Bv,a6=(Nv=Re(),Nv(Bv=function(){function e(){ie(this,e)}return ne(e,[{key:"build",value:function(){var t=Y(A.mark(function n(i){return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i.prepareBuildModel(),o.next=3,i.buildModels();case 3:case"end":return o.stop()}},n)}));function r(n){return t.apply(this,arguments)}return r}()},{key:"initLayerModel",value:function(){var t=Y(A.mark(function n(i){return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},n,this)}));function r(n){return t.apply(this,arguments)}return r}()},{key:"prepareLayerModel",value:function(){var t=Y(A.mark(function n(i){return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},n,this)}));function r(n){return t.apply(this,arguments)}return r}()},{key:"apply",value:function(r){var n=this;r.hooks.init.tapPromise("LayerModelPlugin",Y(A.mark(function i(){return A.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.getSource().isTile){o.next=4;break}return r.prepareBuildModel(),r.tileLayer=new Dv(r),o.abrupt("return");case 4:return r.log(ct.BuildModelStart,vt.INIT),o.next=7,n.initLayerModel(r);case 7:r.log(ct.BuildModelEnd,vt.INIT);case 8:case"end":return o.stop()}},i)}))),r.hooks.beforeRenderData.tapPromise("LayerModelPlugin",function(){var i=Y(A.mark(function a(o){return A.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(o){s.next=2;break}return s.abrupt("return",!1);case 2:if(!r.getSource().isTile){s.next=5;break}return r.tileLayer=new Dv(r),s.abrupt("return",!1);case 5:return r.log(ct.BuildModelStart,vt.UPDATE),s.next=8,n.prepareLayerModel(r);case 8:return r.log(ct.BuildModelEnd,vt.UPDATE),s.abrupt("return",!0);case 10:case"end":return s.stop()}},a)}));return function(a){return i.apply(this,arguments)}}())}}]),e}())||Bv),Uv,zv,o6=(Uv=Re(),Uv(zv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){r.hooks.afterInit.tap("LayerStylePlugin",function(){var n=r.getLayerConfig(),i=n.autoFit,a=n.fitBoundsOptions;i&&r.fitBounds(a),r.styleNeedUpdate=!1})}}]),e}())||zv),$v,Vv,u6=["type"],jv={directional:{lights:"u_DirectionalLights",num:"u_NumOfDirectionalLights"},spot:{lights:"u_SpotLights",num:"u_NumOfSpotLights"}},s6={type:"directional",direction:[1,10.5,12],ambient:[.2,.2,.2],diffuse:[.6,.6,.6],specular:[.1,.1,.1]},l6={direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0]},c6={position:[0,0,0],direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0],constant:1,linear:0,quadratic:0,angle:14,exponent:40,blur:5};function f6(e){var t={u_DirectionalLights:new Array(3).fill(z({},l6)),u_NumOfDirectionalLights:0,u_SpotLights:new Array(3).fill(z({},c6)),u_NumOfSpotLights:0};return(!e||!e.length)&&(e=[s6]),e.forEach(function(r){var n=r.type,i=n===void 0?"directional":n,a=Wt(r,u6),o=jv[i].lights,u=jv[i].num,s=t[u];t[o][s]=z(z({},t[o][s]),a),t[u]++}),t}var h6=($v=Re(),$v(Vv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){r.hooks.beforeRender.tap("LightingPlugin",function(){var n=r.getLayerConfig(),i=n.enableLighting;i&&r.models.forEach(function(a){return a.addUniforms(z({},f6()))})})}}]),e}())||Vv),Hv,Gv,d6=(Hv=Re(),Hv(Gv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r,n){var i=this,a=n.rendererService,o=n.postProcessingPassFactory,u=n.normalPassFactory;r.hooks.init.tapPromise("MultiPassRendererPlugin",function(){var s=r.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,f=c===void 0?[]:c;i.enabled=!!l&&r.getLayerConfig().enableMultiPassRenderer!==!1,i.enabled&&(r.multiPassRenderer=J0(r,f,o,u),r.multiPassRenderer.setRenderFlag(!0))}),r.hooks.beforeRender.tap("MultiPassRendererPlugin",function(){if(i.enabled){var s=a.getViewportSize(),l=s.width,c=s.height;r.multiPassRenderer.resize(l,c)}})}}]),e}())||Gv),Wv,Yv,v6=Ze.isNumber,yn={NONE:0,ENCODE:1,HIGHLIGHT:2},p6=(Wv=Re(),Wv(Yv=function(){function e(){ie(this,e)}return ne(e,[{key:"pickOption2Array",value:function(){var r=[];return this.pickingUniformMap.forEach(function(n,i){v6(n)?r.push(n):r.push.apply(r,Q(n))}),r}},{key:"updatePickOption",value:function(r,n){var i=this;Object.keys(r).forEach(function(s){i.pickingUniformMap.set(s,r[s])});var a=n.getLayerConfig().pickingBuffer||0,o=Number(n.getShaderPickStat());this.pickingUniformMap.set("u_PickingBuffer",a),this.pickingUniformMap.set("u_shaderPick",o);var u=n.getPickingUniformBuffer();u.subData({offset:0,data:this.pickOption2Array()})}},{key:"apply",value:function(r,n){var i=this;n.rendererService;var a=n.styleAttributeService;this.pickingUniformMap=new Map([["u_HighlightColor",[1,0,0,1]],["u_SelectColor",[1,0,0,1]],["u_PickingColor",[0,0,0]],["u_PickingStage",0],["u_CurrentSelectedId",[0,0,0]],["u_PickingThreshold",10],["u_PickingBuffer",0],["u_shaderPick",0],["u_EnableSelect",0],["u_activeMix",0]]),r.hooks.init.tapPromise("PixelPickingPlugin",function(){var o=r.getLayerConfig(),u=o.enablePicking;a.registerStyleAttribute({name:"pickingColor",type:_e.Attribute,descriptor:{name:"a_PickingColor",shaderLocation:we.PICKING_COLOR,buffer:{data:[],type:L.FLOAT},size:3,update:function(l){var c=l.id;return u?yr(c):[0,0,0]}}})}),r.hooks.beforePickingEncode.tap("PixelPickingPlugin",function(){var o=r.getLayerConfig(),u=o.enablePicking;u&&r.isVisible()&&(i.updatePickOption({u_PickingStage:yn.ENCODE},r),r.models.forEach(function(s){return s.addUniforms({u_PickingStage:yn.ENCODE})}))}),r.hooks.afterPickingEncode.tap("PixelPickingPlugin",function(){var o=r.getLayerConfig(),u=o.enablePicking;u&&r.isVisible()&&(i.updatePickOption({u_PickingStage:yn.HIGHLIGHT},r),r.models.forEach(function(s){return s.addUniforms({u_PickingStage:yn.HIGHLIGHT})}))}),r.hooks.beforeHighlight.tap("PixelPickingPlugin",function(o){var u=r.getLayerConfig(),s=u.highlightColor,l=u.activeMix,c=l===void 0?0:l,f=typeof s=="string"?qe(s):s||[1,0,0,1];r.updateLayerConfig({pickedFeatureID:qr(new Uint8Array(o))});var h={u_PickingStage:yn.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c};i.updatePickOption(h,r),r.models.forEach(function(d){return d.addUniforms(h)})}),r.hooks.beforeSelect.tap("PixelPickingPlugin",function(o){var u=r.getLayerConfig(),s=u.selectColor,l=u.selectMix,c=l===void 0?0:l,f=typeof s=="string"?qe(s):s||[1,0,0,1];r.updateLayerConfig({pickedFeatureID:qr(new Uint8Array(o))});var h={u_PickingStage:yn.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c,u_CurrentSelectedId:o,u_SelectColor:f.map(function(d){return d*255}),u_EnableSelect:1};i.updatePickOption(h,r),r.models.forEach(function(d){return d.addUniforms(h)})})}}]),e}())||Yv),g6=["mvt","geojsonvt","testTile"];function m6(e){var t=e.getSource();return g6.includes(t.parser.type)}var Xv,Zv,y6=(Xv=Re(),Xv(Zv=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r,n){var i=this,a=n.styleAttributeService;r.hooks.init.tapPromise("RegisterStyleAttributePlugin",function(){m6(r)||i.registerBuiltinAttributes(a,r)})}},{key:"registerBuiltinAttributes",value:function(r,n){if(n.type==="MaskLayer"){this.registerPositionAttribute(r);return}this.registerPositionAttribute(r),this.registerColorAttribute(r),this.registerVertexIdAttribute(r)}},{key:"registerPositionAttribute",value:function(r){r.registerStyleAttribute({name:"position",type:_e.Attribute,descriptor:{name:"a_Position",shaderLocation:we.POSITION,buffer:{data:[],type:L.FLOAT},size:3,update:function(i,a,o){return o.length===2?[o[0],o[1],0]:[o[0],o[1],o[2]]}}})}},{key:"registerColorAttribute",value:function(r){r.registerStyleAttribute({name:"color",type:_e.Attribute,descriptor:{name:"a_Color",shaderLocation:we.COLOR,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(i){var a=i.color;return!a||!a.length?[1,1,1,1]:a}}})}},{key:"registerVertexIdAttribute",value:function(r){r.registerStyleAttribute({name:"vertexId",type:_e.Attribute,descriptor:{name:"a_vertexId",shaderLocation:we.VERTEX_ID,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(i,a){return[a]}}})}}]),e}())||Zv),qv,Kv,Qv,Jv,ep,tp,rp,Yr,np,ip,ap,op,up,_6=(qv=Re(),Kv=Ue(q.ICameraService),Qv=Ue(q.ICoordinateSystemService),Jv=Ue(q.IRendererService),ep=Ue(q.IMapService),tp=Ue(q.ILayerService),qv(rp=(Yr=function(){function e(){ie(this,e),Ne(this,"cameraService",np,this),Ne(this,"coordinateSystemService",ip,this),Ne(this,"rendererService",ap,this),Ne(this,"mapService",op,this),Ne(this,"layerService",up,this)}return ne(e,[{key:"apply",value:function(r){var n=this,i=this.mapService.version,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=[0,0],u;this.rendererService.uniformBuffers[0]||(u=this.rendererService.createBuffer({data:new Float32Array(16*4+4*7),isUBO:!0}),this.rendererService.uniformBuffers[0]=u),r.hooks.beforeRender.tap("ShaderUniformPlugin",function(){var s=r.getLayerConfig().tileOrigin;if(n.coordinateSystemService.refresh(s),i==="GAODE2.x"){n.setLayerCenter(r),a=n.mapService.map.customCoords.getMVPMatrix(),o=n.mapService.getCustomCoordCenter();var l=r.getLayerUniformBuffer();l.subData({offset:0,data:new Uint8Array(new Float32Array([].concat(Q(a),Q(o))).buffer)})}var c=n.rendererService.getViewportSize(),f=c.width,h=c.height,d=n.generateUBO(a,o,f,h),v=d.data,p=d.uniforms;if(n.layerService.alreadyInRendering&&n.rendererService.uniformBuffers[0]){var g=n.rendererService.uniformBuffers[0];g.subData({offset:0,data:v})}var m=n.rendererService.queryVerdorInfo();m==="WebGL1"&&r.models.forEach(function(_){_.addUniforms(z(z({},p),{},{u_PickingBuffer:r.getLayerConfig().pickingBuffer||0,u_shaderPick:Number(r.getShaderPickStat())}))})})}},{key:"setLayerCenter",value:function(r){r.coordCenter===void 0&&(r.coordCenter=r.getSource().center),this.mapService.setCoordCenter&&this.mapService.setCoordCenter(r.coordCenter)}},{key:"generateUBO",value:function(r,n,i,a){var o,u=this.cameraService.getProjectionMatrix(),s=this.cameraService.getViewMatrix(),l=this.cameraService.getViewProjectionMatrix(),c=this.cameraService.getModelMatrix(),f=this.coordinateSystemService.getViewportCenterProjection(),h=this.coordinateSystemService.getPixelsPerDegree(),d=this.cameraService.getZoom(),v=this.coordinateSystemService.getPixelsPerDegree2(),p=this.cameraService.getZoomScale(),g=this.coordinateSystemService.getPixelsPerMeter(),m=this.coordinateSystemService.getCoordinateSystem(),_=this.cameraService.getCameraPosition(),y=window.devicePixelRatio,x=this.coordinateSystemService.getViewportCenter(),b=[i,a],k=this.cameraService.getFocalDistance(),T=[].concat(Q(s),Q(u),Q(l),Q(c),Q(f),Q(h),[d],Q(v),[p],Q(g),[m],Q(_),[y],Q(x),b,[k,0,0,0]);return{data:T,uniforms:(o={},S(o,Gr.ProjectionMatrix,u),S(o,Gr.ViewMatrix,s),S(o,Gr.ViewProjectionMatrix,l),S(o,Gr.Zoom,d),S(o,Gr.ZoomScale,p),S(o,Gr.FocalDistance,k),S(o,Gr.CameraPosition,_),S(o,jr.CoordinateSystem,m),S(o,jr.ViewportCenter,x),S(o,jr.ViewportCenterProjection,f),S(o,jr.PixelsPerDegree,h),S(o,jr.PixelsPerDegree2,v),S(o,jr.PixelsPerMeter,g),S(o,jr.Mvp,r),S(o,"u_sceneCenterMercator",n),S(o,"u_ViewportSize",b),S(o,"u_ModelMatrix",c),S(o,"u_DevicePixelRatio",y),o)}}}]),e}(),np=Oe(Yr.prototype,"cameraService",[Kv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ip=Oe(Yr.prototype,"coordinateSystemService",[Qv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ap=Oe(Yr.prototype,"rendererService",[Jv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),op=Oe(Yr.prototype,"mapService",[ep],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),up=Oe(Yr.prototype,"layerService",[tp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Yr))||rp),sp,lp,x6=(sp=Re(),sp(lp=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r){r.hooks.beforeRender.tap("UpdateModelPlugin",function(){r.layerModel&&r.layerModel.needUpdate().then(function(n){n&&r.renderLayers()})}),r.hooks.afterRender.tap("UpdateModelPlugin",function(){r.layerModelNeedUpdate=!1})}}]),e}())||lp),cp,fp,b6=(cp=Re(),cp(fp=function(){function e(){ie(this,e)}return ne(e,[{key:"apply",value:function(r,n){var i=this,a=n.styleAttributeService;r.hooks.init.tapPromise("UpdateStyleAttributePlugin",function(){i.initStyleAttribute(r,{styleAttributeService:a})}),r.hooks.beforeRender.tap("UpdateStyleAttributePlugin",function(){r.layerModelNeedUpdate||r.inited&&i.updateStyleAttribute(r,{styleAttributeService:a})})}},{key:"updateStyleAttribute",value:function(r,n){var i=n.styleAttributeService,a=i.getLayerStyleAttributes()||[],o=i.getLayerStyleAttribute("filter");if(o&&o.needRegenerateVertices){r.layerModelNeedUpdate=!0,a.forEach(function(u){return u.needRegenerateVertices=!1});return}a.filter(function(u){return u.needRegenerateVertices}).forEach(function(u){i.updateAttributeByFeatureRange(u.name,r.getEncodedData(),u.featureRange.startIndex,u.featureRange.endIndex,r),u.needRegenerateVertices=!1})}},{key:"initStyleAttribute",value:function(r,n){var i=n.styleAttributeService,a=i.getLayerStyleAttributes()||[];a.filter(function(o){return o.needRegenerateVertices}).forEach(function(o){i.updateAttributeByFeatureRange(o.name,r.getEncodedData(),o.featureRange.startIndex,o.featureRange.endIndex),o.needRegenerateVertices=!1})}}]),e}())||fp);mt.bind(q.ILayerPlugin).to(L4).inRequestScope();mt.bind(q.ILayerPlugin).to(y6).inRequestScope();mt.bind(q.ILayerPlugin).to(Y5).inRequestScope();mt.bind(q.ILayerPlugin).to(k4).inRequestScope();mt.bind(q.ILayerPlugin).to(o6).inRequestScope();mt.bind(q.ILayerPlugin).to(Z5).inRequestScope();mt.bind(q.ILayerPlugin).to(b6).inRequestScope();mt.bind(q.ILayerPlugin).to(x6).inRequestScope();mt.bind(q.ILayerPlugin).to(d6).inRequestScope();mt.bind(q.ILayerPlugin).to(_6).inRequestScope();mt.bind(q.ILayerPlugin).to(X5).inRequestScope();mt.bind(q.ILayerPlugin).to(h6).inRequestScope();mt.bind(q.ILayerPlugin).to(p6).inRequestScope();mt.bind(q.ILayerPlugin).to(a6).inRequestScope();function S6(e,t){var r=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,n=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(r||n)&&(t||(t=document),!!t)){var i=t.head||t.getElementsByTagName("head")[0];if(!i){i=t.createElement("head");var a=t.body||t.getElementsByTagName("body")[0];a?a.parentNode.insertBefore(i,a):t.documentElement.appendChild(i)}var o=t.createElement("style");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),i.appendChild(o),o}}S6(`.l7-marker-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.l7-marker {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 5;
  cursor: pointer;
}
.l7-marker-cluster {
  width: 40px;
  height: 40px;
  background-color: rgba(181, 226, 140, 0.6);
  background-clip: padding-box;
  border-radius: 20px;
}
.l7-marker-cluster div {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
  font: 12px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  text-align: center;
  background-color: rgba(110, 204, 57, 0.6);
  border-radius: 15px;
}
.l7-marker-cluster span {
  line-height: 30px;
}
.l7-touch .l7-control-attribution,
.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  background-clip: padding-box;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.mapboxgl-ctrl-logo,
.amap-logo {
  display: none !important;
}
.l7-select-box {
  border: 3px dashed gray;
  border-radius: 2px;
  position: absolute;
  z-index: 999;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.l7-control-container {
  font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.l7-control-container .l7-control {
  position: relative;
  z-index: 999;
  float: left;
  clear: both;
  color: #595959;
  font-size: 12px;
  pointer-events: visiblePainted;
  /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}
.l7-control-container .l7-control.l7-control--hide {
  display: none;
}
.l7-control-container .l7-top {
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-top .l7-control:not(.l7-control--hide) {
  margin-top: 8px;
}
.l7-control-container .l7-right {
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-right .l7-control:not(.l7-control--hide) {
  margin-right: 8px;
}
.l7-control-container .l7-bottom {
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-bottom .l7-control:not(.l7-control--hide) {
  margin-bottom: 8px;
}
.l7-control-container .l7-left {
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-left .l7-control:not(.l7-control--hide) {
  margin-left: 8px;
}
.l7-control-container .l7-center {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.l7-control-container .l7-center.l7-top,
.l7-control-container .l7-center.l7-bottom {
  width: 100%;
}
.l7-control-container .l7-center.l7-left,
.l7-control-container .l7-center.l7-right {
  height: 100%;
}
.l7-control-container .l7-center .l7-control {
  margin-right: 8px;
  margin-bottom: 8px;
}
.l7-control-container .l7-row {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
.l7-control-container .l7-row.l7-top {
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.l7-control-container .l7-row.l7-bottom {
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.l7-control-container .l7-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.l7-control-container .l7-column.l7-left {
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.l7-control-container .l7-column.l7-right {
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.l7-button-control {
  min-width: 28px;
  height: 28px;
  background-color: #fff;
  border-width: 0;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 6px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  line-height: 16px;
}
.l7-button-control .l7-iconfont {
  fill: #595959;
  color: #595959;
  width: 16px;
  height: 16px;
}
.l7-button-control.l7-button-control--row {
  padding: 0 16px 0 13px;
}
.l7-button-control.l7-button-control--row * + .l7-button-control__text {
  margin-left: 8px;
}
.l7-button-control.l7-button-control--column {
  height: 44px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.l7-button-control.l7-button-control--column .l7-iconfont {
  margin-top: 3px;
}
.l7-button-control.l7-button-control--column .l7-button-control__text {
  margin-top: 3px;
  font-size: 10px;
  -webkit-transform: scale(0.83333);
          transform: scale(0.83333);
}
.l7-button-control:not(:disabled):hover {
  background-color: #f3f3f3;
}
.l7-button-control:not(:disabled):active {
  background-color: #f3f3f3;
}
.l7-button-control:disabled {
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: not-allowed;
}
.l7-button-control:disabled .l7-iconfont {
  fill: #bdbdbd;
  color: #bdbdbd;
}
.l7-button-control:disabled:hover {
  background-color: #fafafa;
}
.l7-button-control:disabled:active {
  background-color: #fafafa;
}
.l7-popper {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 5;
  color: #595959;
}
.l7-popper.l7-popper-hide {
  display: none;
}
.l7-popper .l7-popper-content {
  min-height: 28px;
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-popper .l7-popper-arrow {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-popper.l7-popper-left {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
.l7-popper.l7-popper-left .l7-popper-arrow {
  border-left-color: #fff;
  margin: 10px 0;
}
.l7-popper.l7-popper-right {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}
.l7-popper.l7-popper-right .l7-popper-arrow {
  border-right-color: #fff;
  margin: 10px 0;
}
.l7-popper.l7-popper-top {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.l7-popper.l7-popper-top .l7-popper-arrow {
  border-top-color: #fff;
  margin: 0 10px;
}
.l7-popper.l7-popper-bottom {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
}
.l7-popper.l7-popper-bottom .l7-popper-arrow {
  border-bottom-color: #fff;
  margin: 0 10px;
}
.l7-popper.l7-popper-start {
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.l7-popper.l7-popper-end {
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.l7-select-control--normal {
  padding: 4px 0;
}
.l7-select-control--normal .l7-select-control-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 24px;
}
.l7-select-control--normal .l7-select-control-item > * + * {
  margin-left: 6px;
}
.l7-select-control--normal .l7-select-control-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.l7-select-control--normal .l7-select-control-item:hover {
  background-color: #f3f3f3;
}
.l7-select-control--image {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  max-width: 460px;
  max-height: 400px;
  margin: 12px 0 0 12px;
  overflow-x: hidden;
  overflow-y: auto;
}
.l7-select-control--image .l7-select-control-item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 calc((100% - (12px + 9px) * 2) / 3);
          flex: 0 0 calc((100% - (12px + 9px) * 2) / 3);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  margin-right: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 2px;
}
.l7-select-control--image .l7-select-control-item img {
  width: 100%;
  height: 80px;
}
.l7-select-control--image .l7-select-control-item input[type='checkbox'] {
  position: absolute;
  top: 0;
  right: 0;
}
.l7-select-control--image .l7-select-control-item input[type='radio'] {
  position: absolute;
  top: 0;
  right: 0;
}
.l7-select-control--image .l7-select-control-item .l7-select-control-item-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  line-height: 26px;
}
.l7-select-control--image .l7-select-control-item .l7-select-control-item-row > * + * {
  margin-left: 8px;
}
.l7-select-control--image .l7-select-control-item.l7-select-control-item-active {
  border-color: #0370fe;
}
.l7-select-control-item {
  cursor: pointer;
}
.l7-select-control-item input[type='checkbox'] {
  margin: 0;
  cursor: pointer;
}
.l7-select-control--multiple .l7-select-control-item:hover {
  background-color: transparent;
}
.l7-control-logo {
  width: 89px;
  height: 16px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.l7-control-logo img {
  height: 100%;
  width: 100%;
}
.l7-control-logo .l7-control-logo-link {
  display: block;
  cursor: pointer;
}
.l7-control-logo .l7-control-logo-link img {
  cursor: pointer;
}
.l7-control-mouse-location {
  background-color: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  padding: 2px 4px;
  min-width: 130px;
}
.l7-control-zoom {
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-control-zoom .l7-button-control {
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  -webkit-box-shadow: 0 0 0;
          box-shadow: 0 0 0;
}
.l7-control-zoom .l7-button-control .l7-iconfont {
  width: 14px;
  height: 14px;
}
.l7-control-zoom .l7-button-control:last-child {
  border-bottom: 0;
}
.l7-control-zoom .l7-control-zoom__number {
  color: #595959;
  padding: 0;
}
.l7-control-zoom .l7-control-zoom__number:hover {
  background-color: #fff;
}
.l7-control-scale {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.l7-control-scale .l7-control-scale-line {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 2px 5px 1px;
  overflow: hidden;
  color: #595959;
  font-size: 10px;
  line-height: 1.1;
  white-space: nowrap;
  background: #fff;
  border: 2px solid #000;
  border-top: 0;
  -webkit-transition: width 0.1s;
  transition: width 0.1s;
}
.l7-control-scale .l7-control-scale-line + .l7-control-scale .l7-control-scale-line {
  margin-top: -2px;
  border-top: 2px solid #777;
  border-bottom: none;
}
.l7-right .l7-control-scale {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.l7-right .l7-control-scale .l7-control-scale-line {
  text-align: right;
}
.l7-popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  will-change: transform;
  pointer-events: none;
}
.l7-popup.l7-popup-hide {
  display: none;
}
.l7-popup .l7-popup-content {
  position: relative;
  padding: 16px;
  font-size: 14px;
  background: #fff;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.l7-popup .l7-popup-content .l7-popup-content__title {
  margin-bottom: 8px;
  font-weight: bold;
}
.l7-popup .l7-popup-content .l7-popup-close-button,
.l7-popup .l7-popup-content .l7-popup-content__title,
.l7-popup .l7-popup-content .l7-popup-content__panel {
  white-space: normal;
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  pointer-events: initial;
}
.l7-popup .l7-popup-content .l7-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0 3px 0 0;
  cursor: pointer;
}
.l7-popup .l7-popup-tip {
  position: relative;
  z-index: 1;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}
.l7-popup.l7-popup-anchor-bottom,
.l7-popup.l7-popup-anchor-bottom-left,
.l7-popup.l7-popup-anchor-bottom-right {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
}
.l7-popup.l7-popup-anchor-bottom .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-right .l7-popup-tip {
  bottom: 1px;
}
.l7-popup.l7-popup-anchor-top,
.l7-popup.l7-popup-anchor-top-left,
.l7-popup.l7-popup-anchor-top-right {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.l7-popup.l7-popup-anchor-top .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-right .l7-popup-tip {
  top: 1px;
}
.l7-popup.l7-popup-anchor-left {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
.l7-popup.l7-popup-anchor-right {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}
.l7-popup-anchor-top .l7-popup-tip {
  position: relative;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
      align-self: center;
  border-top: none;
  border-bottom-color: #fff;
}
.l7-popup-anchor-top-left .l7-popup-tip {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
      align-self: flex-start;
  border-top: none;
  border-bottom-color: #fff;
  border-left: none;
}
.l7-popup-anchor-top-right .l7-popup-tip {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
      align-self: flex-end;
  border-top: none;
  border-right: none;
  border-bottom-color: #fff;
}
.l7-popup-anchor-bottom .l7-popup-tip {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
      align-self: center;
  border-top-color: #fff;
  border-bottom: none;
}
.l7-popup-anchor-bottom-left .l7-popup-tip {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
      align-self: flex-start;
  border-top-color: #fff;
  border-bottom: none;
  border-left: none;
}
.l7-popup-anchor-bottom-right .l7-popup-tip {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
      align-self: flex-end;
  border-top-color: #fff;
  border-right: none;
  border-bottom: none;
}
.l7-popup-anchor-left .l7-popup-tip {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
      align-self: center;
  border-right-color: #fff;
  border-left: none;
}
.l7-popup-anchor-right .l7-popup-tip {
  right: 1px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
      align-self: center;
  border-right: none;
  border-left-color: #fff;
}
.l7-popup-anchor-top-left .l7-popup-content {
  border-top-left-radius: 0;
}
.l7-popup-anchor-top-right .l7-popup-content {
  border-top-right-radius: 0;
}
.l7-popup-anchor-bottom-left .l7-popup-content {
  border-bottom-left-radius: 0;
}
.l7-popup-anchor-bottom-right .l7-popup-content {
  border-bottom-right-radius: 0;
}
.l7-popup-track-pointer {
  display: none;
}
.l7-popup-track-pointer * {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}
.l7-map:hover .l7-popup-track-pointer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.l7-map:active .l7-popup-track-pointer {
  display: none;
}
.l7-layer-popup__row {
  font-size: 12px;
}
.l7-layer-popup__row + .l7-layer-popup__row {
  margin-top: 4px;
}
.l7-control-swipe {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 6;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -ms-touch-action: none;
      touch-action: none;
}
.l7-control-swipe_hide {
  display: none;
}
.l7-control-swipe:before {
  position: absolute;
  top: -5000px;
  bottom: -5000px;
  left: 50%;
  z-index: -1;
  width: 4px;
  background: #fff;
  -webkit-transform: translate(-2px, 0);
          transform: translate(-2px, 0);
  content: '';
}
.l7-control-swipe.horizontal:before {
  top: 50%;
  right: -5000px;
  bottom: auto;
  left: -5000px;
  width: auto;
  height: 4px;
}
.l7-control-swipe__button {
  display: block;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  color: #595959;
  font-weight: bold;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  border: none;
  border-radius: 2px;
  outline: none;
}
.l7-control-swipe,
.l7-control-swipe__button {
  cursor: ew-resize;
}
.l7-control-swipe.horizontal,
.l7-control-swipe.horizontal button {
  cursor: ns-resize;
}
.l7-control-swipe:after,
.l7-control-swipe__button:before,
.l7-control-swipe__button:after {
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 50%;
  width: 2px;
  background: currentColor;
  -webkit-transform: translate(-1px, 0);
          transform: translate(-1px, 0);
  content: '';
}
.l7-control-swipe__button:after {
  -webkit-transform: translateX(4px);
          transform: translateX(4px);
}
.l7-control-swipe__button:before {
  -webkit-transform: translateX(-6px);
          transform: translateX(-6px);
}
`);export{M4 as $,_e as A,et as B,kC as C,Ne as D,Ap as E,w6 as F,Ie as G,P6 as H,Bm as I,Um as J,gp as K,$m as L,ey as M,dy as N,Zr as O,Ru as P,Ue as Q,ua as R,we as S,Q3 as T,mp as U,Wt as V,L6 as W,k6 as X,zt as Y,Wo as Z,be as _,ie as a,Ry as a0,T6 as a1,R6 as a2,Gu as a3,I6 as a4,ne as b,Or as c,Kr as d,K as e,d1 as f,Se as g,L as h,Y as i,A as j,ng as k,R as l,Q as m,xn as n,pp as o,qy as p,Ze as q,Re as r,M6 as s,F6 as t,fs as u,sA as v,Un as w,Oe as x,W0 as y,q as z};
