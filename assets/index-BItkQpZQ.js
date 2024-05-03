import Xm from"./zero-step-CxvPJa8l.js";import Zm from"./second-step-BhpwztXC.js";import{_ as fo,u as ja,t as Is,y as Rn,z as Oi}from"./index-DbuHkAAg.js";import{a5 as et,a3 as Vt,a8 as nn,d as gn,f as ut,w as Ls,o as ho,j as Rs,ab as Ps,k as J,ad as Q,G as ge,F as an,al as Fs,ac as Dt,u as ke,af as Os,H as Ki,s as ea,ak as qr,ag as wn,c as qm}from"./vue-CP9fVXMC.js";import{u as Ds}from"./index-C_YyOxxU.js";import{a as Ns}from"./index-CxFJ1M7J.js";import{H as Bs,bx as Us,by as zs,J as $s,K as Pn,m as Kn,at as vo,aG as Vs,aw as js,ay as ta,av as na,I as ra,x as po,aM as ia,bz as Qm,bA as En,bB as z,bC as Jm,bD as Km,bE as ey,bF as ty,bG as ny,bH as ry,bI as iy,bJ as ay,bK as oy,bL as uy,bM as sy,bN as ly,bO as cy,bP as fy,bQ as hy,a$ as dy,bR as vy,bS as py,bT as gy,bU as yy,bV as _y,bW as S,bX as xy,bY as by,bZ as Sy,b_ as Ay,b$ as Ey,Q as Cy,T as wy,ah as Ty,aE as My}from"./antd-BiDZImxE.js";import{A as In,E as pt,j as He,g as _t,s as Vr,n as dn,h as Dr,d as Xn,k as cn,o as jr,p as Qp,q as ya,r as Sn,v as $o,u as jl,w as ky,x as Ei,y as Hl,z as _a}from"./vec2-BmKV7c4I.js";import{l as Iy}from"./user-rH9cqzl6.js";function Fr(){var e=new In(16);return In!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Ly(e){var t=new In(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Ry(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Jp(e,t,n,r,i,a,o,u,s,l,c,f,h,d,v,p){var g=new In(16);return g[0]=e,g[1]=t,g[2]=n,g[3]=r,g[4]=i,g[5]=a,g[6]=o,g[7]=u,g[8]=s,g[9]=l,g[10]=c,g[11]=f,g[12]=h,g[13]=d,g[14]=v,g[15]=p,g}function Py(e,t,n,r,i,a,o,u,s,l,c,f,h,d,v,p,g){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=u,e[7]=s,e[8]=l,e[9]=c,e[10]=f,e[11]=h,e[12]=d,e[13]=v,e[14]=p,e[15]=g,e}function Kp(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Fy(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function e0(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15],_=n*u-r*o,y=n*s-i*o,x=n*l-a*o,b=r*s-i*u,M=r*l-a*u,T=i*l-a*s,D=c*p-f*v,U=c*g-h*v,I=c*m-d*v,w=f*g-h*p,k=f*m-d*p,P=h*m-d*g,B=_*P-y*k+x*w+b*I-M*U+T*D;return B?(B=1/B,e[0]=(u*P-s*k+l*w)*B,e[1]=(i*k-r*P-a*w)*B,e[2]=(p*T-g*M+m*b)*B,e[3]=(h*M-f*T-d*b)*B,e[4]=(s*I-o*P-l*U)*B,e[5]=(n*P-i*I+a*U)*B,e[6]=(g*x-v*T-m*y)*B,e[7]=(c*T-h*x+d*y)*B,e[8]=(o*k-u*I+l*D)*B,e[9]=(r*I-n*k-a*D)*B,e[10]=(v*M-p*x+m*_)*B,e[11]=(f*x-c*M-d*_)*B,e[12]=(u*U-o*w-s*D)*B,e[13]=(n*w-r*U+i*D)*B,e[14]=(p*y-v*b-g*_)*B,e[15]=(c*b-f*y+h*_)*B,e):null}function Oy(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15];return e[0]=u*(h*m-d*g)-f*(s*m-l*g)+p*(s*d-l*h),e[1]=-(r*(h*m-d*g)-f*(i*m-a*g)+p*(i*d-a*h)),e[2]=r*(s*m-l*g)-u*(i*m-a*g)+p*(i*l-a*s),e[3]=-(r*(s*d-l*h)-u*(i*d-a*h)+f*(i*l-a*s)),e[4]=-(o*(h*m-d*g)-c*(s*m-l*g)+v*(s*d-l*h)),e[5]=n*(h*m-d*g)-c*(i*m-a*g)+v*(i*d-a*h),e[6]=-(n*(s*m-l*g)-o*(i*m-a*g)+v*(i*l-a*s)),e[7]=n*(s*d-l*h)-o*(i*d-a*h)+c*(i*l-a*s),e[8]=o*(f*m-d*p)-c*(u*m-l*p)+v*(u*d-l*f),e[9]=-(n*(f*m-d*p)-c*(r*m-a*p)+v*(r*d-a*f)),e[10]=n*(u*m-l*p)-o*(r*m-a*p)+v*(r*l-a*u),e[11]=-(n*(u*d-l*f)-o*(r*d-a*f)+c*(r*l-a*u)),e[12]=-(o*(f*g-h*p)-c*(u*g-s*p)+v*(u*h-s*f)),e[13]=n*(f*g-h*p)-c*(r*g-i*p)+v*(r*h-i*f),e[14]=-(n*(u*g-s*p)-o*(r*g-i*p)+v*(r*s-i*u)),e[15]=n*(u*h-s*f)-o*(r*h-i*f)+c*(r*s-i*u),e}function Dy(e){var t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],u=e[6],s=e[7],l=e[8],c=e[9],f=e[10],h=e[11],d=e[12],v=e[13],p=e[14],g=e[15],m=t*o-n*a,_=t*u-r*a,y=t*s-i*a,x=n*u-r*o,b=n*s-i*o,M=r*s-i*u,T=l*v-c*d,D=l*p-f*d,U=l*g-h*d,I=c*p-f*v,w=c*g-h*v,k=f*g-h*p;return m*k-_*w+y*I+x*U-b*D+M*T}function cr(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],v=t[11],p=t[12],g=t[13],m=t[14],_=t[15],y=n[0],x=n[1],b=n[2],M=n[3];return e[0]=y*r+x*u+b*f+M*p,e[1]=y*i+x*s+b*h+M*g,e[2]=y*a+x*l+b*d+M*m,e[3]=y*o+x*c+b*v+M*_,y=n[4],x=n[5],b=n[6],M=n[7],e[4]=y*r+x*u+b*f+M*p,e[5]=y*i+x*s+b*h+M*g,e[6]=y*a+x*l+b*d+M*m,e[7]=y*o+x*c+b*v+M*_,y=n[8],x=n[9],b=n[10],M=n[11],e[8]=y*r+x*u+b*f+M*p,e[9]=y*i+x*s+b*h+M*g,e[10]=y*a+x*l+b*d+M*m,e[11]=y*o+x*c+b*v+M*_,y=n[12],x=n[13],b=n[14],M=n[15],e[12]=y*r+x*u+b*f+M*p,e[13]=y*i+x*s+b*h+M*g,e[14]=y*a+x*l+b*d+M*m,e[15]=y*o+x*c+b*v+M*_,e}function Ny(e,t,n){var r=n[0],i=n[1],a=n[2],o,u,s,l,c,f,h,d,v,p,g,m;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],u=t[1],s=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],v=t[8],p=t[9],g=t[10],m=t[11],e[0]=o,e[1]=u,e[2]=s,e[3]=l,e[4]=c,e[5]=f,e[6]=h,e[7]=d,e[8]=v,e[9]=p,e[10]=g,e[11]=m,e[12]=o*r+c*i+v*a+t[12],e[13]=u*r+f*i+p*a+t[13],e[14]=s*r+h*i+g*a+t[14],e[15]=l*r+d*i+m*a+t[15]),e}function By(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Uy(e,t,n,r){var i=r[0],a=r[1],o=r[2],u=Math.hypot(i,a,o),s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,T,D,U,I,w,k,P,B,K;return u<pt?null:(u=1/u,i*=u,a*=u,o*=u,s=Math.sin(n),l=Math.cos(n),c=1-l,f=t[0],h=t[1],d=t[2],v=t[3],p=t[4],g=t[5],m=t[6],_=t[7],y=t[8],x=t[9],b=t[10],M=t[11],T=i*i*c+l,D=a*i*c+o*s,U=o*i*c-a*s,I=i*a*c-o*s,w=a*a*c+l,k=o*a*c+i*s,P=i*o*c+a*s,B=a*o*c-i*s,K=o*o*c+l,e[0]=f*T+p*D+y*U,e[1]=h*T+g*D+x*U,e[2]=d*T+m*D+b*U,e[3]=v*T+_*D+M*U,e[4]=f*I+p*w+y*k,e[5]=h*I+g*w+x*k,e[6]=d*I+m*w+b*k,e[7]=v*I+_*w+M*k,e[8]=f*P+p*B+y*K,e[9]=h*P+g*B+x*K,e[10]=d*P+m*B+b*K,e[11]=v*P+_*B+M*K,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function t0(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],u=t[6],s=t[7],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+c*r,e[6]=u*i+f*r,e[7]=s*i+h*r,e[8]=l*i-a*r,e[9]=c*i-o*r,e[10]=f*i-u*r,e[11]=h*i-s*r,e}function n0(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],u=t[2],s=t[3],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-c*r,e[2]=u*i-f*r,e[3]=s*i-h*r,e[8]=a*r+l*i,e[9]=o*r+c*i,e[10]=u*r+f*i,e[11]=s*r+h*i,e}function zy(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],u=t[2],s=t[3],l=t[4],c=t[5],f=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+c*r,e[2]=u*i+f*r,e[3]=s*i+h*r,e[4]=l*i-a*r,e[5]=c*i-o*r,e[6]=f*i-u*r,e[7]=h*i-s*r,e}function r0(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function $y(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Vy(e,t,n){var r=n[0],i=n[1],a=n[2],o=Math.hypot(r,i,a),u,s,l;return o<pt?null:(o=1/o,r*=o,i*=o,a*=o,u=Math.sin(t),s=Math.cos(t),l=1-s,e[0]=r*r*l+s,e[1]=i*r*l+a*u,e[2]=a*r*l-i*u,e[3]=0,e[4]=r*i*l-a*u,e[5]=i*i*l+s,e[6]=a*i*l+r*u,e[7]=0,e[8]=r*a*l+i*u,e[9]=i*a*l-r*u,e[10]=a*a*l+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function jy(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Hy(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Gy(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function i0(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],u=r+r,s=i+i,l=a+a,c=r*u,f=r*s,h=r*l,d=i*s,v=i*l,p=a*l,g=o*u,m=o*s,_=o*l;return e[0]=1-(d+p),e[1]=f+_,e[2]=h-m,e[3]=0,e[4]=f-_,e[5]=1-(c+p),e[6]=v+g,e[7]=0,e[8]=h+m,e[9]=v-g,e[10]=1-(c+d),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function Wy(e,t){var n=new In(3),r=-t[0],i=-t[1],a=-t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=r*r+i*i+a*a+o*o;return f>0?(n[0]=(u*o+c*r+s*a-l*i)*2/f,n[1]=(s*o+c*i+l*r-u*a)*2/f,n[2]=(l*o+c*a+u*i-s*r)*2/f):(n[0]=(u*o+c*r+s*a-l*i)*2,n[1]=(s*o+c*i+l*r-u*a)*2,n[2]=(l*o+c*a+u*i-s*r)*2),i0(e,t,n),e}function Yy(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function a0(e,t){var n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],u=t[6],s=t[8],l=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(a,o,u),e[2]=Math.hypot(s,l,c),e}function Xy(e,t){var n=new In(3);a0(n,t);var r=1/n[0],i=1/n[1],a=1/n[2],o=t[0]*r,u=t[1]*i,s=t[2]*a,l=t[4]*r,c=t[5]*i,f=t[6]*a,h=t[8]*r,d=t[9]*i,v=t[10]*a,p=o+c+v,g=0;return p>0?(g=Math.sqrt(p+1)*2,e[3]=.25*g,e[0]=(f-d)/g,e[1]=(h-s)/g,e[2]=(u-l)/g):o>c&&o>v?(g=Math.sqrt(1+o-c-v)*2,e[3]=(f-d)/g,e[0]=.25*g,e[1]=(u+l)/g,e[2]=(h+s)/g):c>v?(g=Math.sqrt(1+c-o-v)*2,e[3]=(h-s)/g,e[0]=(u+l)/g,e[1]=.25*g,e[2]=(f+d)/g):(g=Math.sqrt(1+v-o-c)*2,e[3]=(u-l)/g,e[0]=(h+s)/g,e[1]=(f+d)/g,e[2]=.25*g),e}function Zy(e,t,n,r){var i=t[0],a=t[1],o=t[2],u=t[3],s=i+i,l=a+a,c=o+o,f=i*s,h=i*l,d=i*c,v=a*l,p=a*c,g=o*c,m=u*s,_=u*l,y=u*c,x=r[0],b=r[1],M=r[2];return e[0]=(1-(v+g))*x,e[1]=(h+y)*x,e[2]=(d-_)*x,e[3]=0,e[4]=(h-y)*b,e[5]=(1-(f+g))*b,e[6]=(p+m)*b,e[7]=0,e[8]=(d+_)*M,e[9]=(p-m)*M,e[10]=(1-(f+v))*M,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function qy(e,t,n,r,i){var a=t[0],o=t[1],u=t[2],s=t[3],l=a+a,c=o+o,f=u+u,h=a*l,d=a*c,v=a*f,p=o*c,g=o*f,m=u*f,_=s*l,y=s*c,x=s*f,b=r[0],M=r[1],T=r[2],D=i[0],U=i[1],I=i[2],w=(1-(p+m))*b,k=(d+x)*b,P=(v-y)*b,B=(d-x)*M,K=(1-(h+m))*M,ce=(g+_)*M,ve=(v+y)*T,ye=(g-_)*T,H=(1-(h+p))*T;return e[0]=w,e[1]=k,e[2]=P,e[3]=0,e[4]=B,e[5]=K,e[6]=ce,e[7]=0,e[8]=ve,e[9]=ye,e[10]=H,e[11]=0,e[12]=n[0]+D-(w*D+B*U+ve*I),e[13]=n[1]+U-(k*D+K*U+ye*I),e[14]=n[2]+I-(P*D+ce*U+H*I),e[15]=1,e}function Qy(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,u=r+r,s=i+i,l=n*o,c=r*o,f=r*u,h=i*o,d=i*u,v=i*s,p=a*o,g=a*u,m=a*s;return e[0]=1-f-v,e[1]=c+m,e[2]=h-g,e[3]=0,e[4]=c-m,e[5]=1-l-v,e[6]=d+p,e[7]=0,e[8]=h+g,e[9]=d-p,e[10]=1-l-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Jy(e,t,n,r,i,a,o){var u=1/(n-t),s=1/(i-r),l=1/(a-o);return e[0]=a*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*s,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(i+r)*s,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function o0(e,t,n,r,i){var a=1/Math.tan(t/2),o;return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(r-i),e[10]=(i+r)*o,e[14]=2*i*r*o):(e[10]=-1,e[14]=-2*r),e}var Ky=o0;function e1(e,t,n,r,i){var a=1/Math.tan(t/2),o;return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(r-i),e[10]=i*o,e[14]=i*r*o):(e[10]=-1,e[14]=-r),e}function t1(e,t,n,r){var i=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),u=Math.tan(t.rightDegrees*Math.PI/180),s=2/(o+u),l=2/(i+a);return e[0]=s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((o-u)*s*.5),e[9]=(i-a)*l*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e}function u0(e,t,n,r,i,a,o){var u=1/(t-n),s=1/(r-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*s,e[14]=(o+a)*l,e[15]=1,e}var n1=u0;function r1(e,t,n,r,i,a,o){var u=1/(t-n),s=1/(r-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=l,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*s,e[14]=a*l,e[15]=1,e}function i1(e,t,n,r){var i,a,o,u,s,l,c,f,h,d,v=t[0],p=t[1],g=t[2],m=r[0],_=r[1],y=r[2],x=n[0],b=n[1],M=n[2];return Math.abs(v-x)<pt&&Math.abs(p-b)<pt&&Math.abs(g-M)<pt?Kp(e):(c=v-x,f=p-b,h=g-M,d=1/Math.hypot(c,f,h),c*=d,f*=d,h*=d,i=_*h-y*f,a=y*c-m*h,o=m*f-_*c,d=Math.hypot(i,a,o),d?(d=1/d,i*=d,a*=d,o*=d):(i=0,a=0,o=0),u=f*o-h*a,s=h*i-c*o,l=c*a-f*i,d=Math.hypot(u,s,l),d?(d=1/d,u*=d,s*=d,l*=d):(u=0,s=0,l=0),e[0]=i,e[1]=u,e[2]=c,e[3]=0,e[4]=a,e[5]=s,e[6]=f,e[7]=0,e[8]=o,e[9]=l,e[10]=h,e[11]=0,e[12]=-(i*v+a*p+o*g),e[13]=-(u*v+s*p+l*g),e[14]=-(c*v+f*p+h*g),e[15]=1,e)}function a1(e,t,n,r){var i=t[0],a=t[1],o=t[2],u=r[0],s=r[1],l=r[2],c=i-n[0],f=a-n[1],h=o-n[2],d=c*c+f*f+h*h;d>0&&(d=1/Math.sqrt(d),c*=d,f*=d,h*=d);var v=s*h-l*f,p=l*c-u*h,g=u*f-s*c;return d=v*v+p*p+g*g,d>0&&(d=1/Math.sqrt(d),v*=d,p*=d,g*=d),e[0]=v,e[1]=p,e[2]=g,e[3]=0,e[4]=f*g-h*p,e[5]=h*v-c*g,e[6]=c*p-f*v,e[7]=0,e[8]=c,e[9]=f,e[10]=h,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function o1(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function u1(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function s1(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function s0(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function l1(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}function c1(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e}function f1(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function h1(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],u=e[5],s=e[6],l=e[7],c=e[8],f=e[9],h=e[10],d=e[11],v=e[12],p=e[13],g=e[14],m=e[15],_=t[0],y=t[1],x=t[2],b=t[3],M=t[4],T=t[5],D=t[6],U=t[7],I=t[8],w=t[9],k=t[10],P=t[11],B=t[12],K=t[13],ce=t[14],ve=t[15];return Math.abs(n-_)<=pt*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(r-y)<=pt*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(i-x)<=pt*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(a-b)<=pt*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(o-M)<=pt*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(u-T)<=pt*Math.max(1,Math.abs(u),Math.abs(T))&&Math.abs(s-D)<=pt*Math.max(1,Math.abs(s),Math.abs(D))&&Math.abs(l-U)<=pt*Math.max(1,Math.abs(l),Math.abs(U))&&Math.abs(c-I)<=pt*Math.max(1,Math.abs(c),Math.abs(I))&&Math.abs(f-w)<=pt*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(h-k)<=pt*Math.max(1,Math.abs(h),Math.abs(k))&&Math.abs(d-P)<=pt*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(v-B)<=pt*Math.max(1,Math.abs(v),Math.abs(B))&&Math.abs(p-K)<=pt*Math.max(1,Math.abs(p),Math.abs(K))&&Math.abs(g-ce)<=pt*Math.max(1,Math.abs(g),Math.abs(ce))&&Math.abs(m-ve)<=pt*Math.max(1,Math.abs(m),Math.abs(ve))}var d1=cr,v1=s0;const p1=Object.freeze(Object.defineProperty({__proto__:null,add:s1,adjoint:Oy,clone:Ly,copy:Ry,create:Fr,determinant:Dy,equals:h1,exactEquals:f1,frob:u1,fromQuat:Qy,fromQuat2:Wy,fromRotation:Vy,fromRotationTranslation:i0,fromRotationTranslationScale:Zy,fromRotationTranslationScaleOrigin:qy,fromScaling:$y,fromTranslation:r0,fromValues:Jp,fromXRotation:jy,fromYRotation:Hy,fromZRotation:Gy,frustum:Jy,getRotation:Xy,getScaling:a0,getTranslation:Yy,identity:Kp,invert:e0,lookAt:i1,mul:d1,multiply:cr,multiplyScalar:l1,multiplyScalarAndAdd:c1,ortho:n1,orthoNO:u0,orthoZO:r1,perspective:Ky,perspectiveFromFieldOfView:t1,perspectiveNO:o0,perspectiveZO:e1,rotate:Uy,rotateX:t0,rotateY:n0,rotateZ:zy,scale:By,set:Py,str:o1,sub:v1,subtract:s0,targetTo:a1,translate:Ny,transpose:Fy},Symbol.toStringTag,{value:"Module"}));function l0(){var e=new In(4);return In!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function g1(e,t,n,r){var i=new In(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function c0(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=l0();return function(t,n,r,i,a,o){var u,s;for(n||(n=4),r||(r=0),i?s=Math.min(i*n+r,t.length):s=t.length,u=r;u<s;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],a(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}})();const m1={name:"SingBox"},y1={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 80 80","enable-background":"new 0 0 80 80","xml:space":"preserve"},_1=nn("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
CXBIWXMAABJNAAASTQHzl8SnAAAQHklEQVR42u1ceXBd1X3+znaX9yTLtiRbi4WXYDYtFC/sxEAD
dUmbJhQmZNIBSjuThsaQmTRtGjrT0Blm0mZoi2Egwx+AHSfYYAIJAVxjQ8oS8EaojbxgbZYtybas
7elt955z7ukf9z1ZsuXlPmvrVN8fGs1I757f77vf+W3n3QtMYxrTmMY0pjGNaUzj/yPIZBtwJtz9
4INFMSHKNOfd6x5/PDXZ9pwJU47Au/7m4UuZHf9RYMyKAEEZJaybEfIhDbL/+ovVj++abPtOxZQi
8Bvf+f6Dmls/5rZTLH0fxgSghIJbNrSXUTTQ/3LJrB8/9uijCCbb1jymBIFf/9bDC+AUrea2/ae+
9BEoBZCRplFKYdkutJ/5iGazq37xzNRQI5tsA+556O/vM5b7CnecP/CyGRgTnEYeABhjoKUPatk1
mrK/bLjm+uCzbR+8P9n2T5oC77j7vori6ur/YJZzj1IKWsnz/myoRgfSy3xAs9mH1v/0338/WX7Q
iV7wL773vfjPX9/8bbu8fKcm/B7fy0YiDwCCQCObToMJ58bAiX389Yf+4QcT7UceE6rAt9//6MZ5
8+b/tKq6svbDHbuw4ddv4NiJXsRiLighMJGvaEAZh2U7UNn0e8RLrlr/zOrdE+nTRMVAsq+140cV
FZUvzJo1e85Afx8WVFdiaV0dMp6H1vbDCEwAxqKaQ2CMgZIS3HbnB0zcX7fseq9x+we/mygCx12B
7320q6FiXvUzVZVzrx/oH4TneSC5JGEJDiEEduxuxMa3NqPzeDfirgtKC1CjAShjELYN7WXfJX5q
1fqn/7NxvP0bVwXu3N/8t/Hi4g3cshf19PSCUQpKT4ZdHQRQSmPhvCosra+D50u0th+GCgJwzqMt
RvKZWoI79sIA7P665TdkG7d/8NF4+jguCtz64a75peWlq4tmzPhKMpmE73kwBhCcoSgeg80tBCY4
aYExEELAtizs2NOIjW/+FzqOHUfcjYHQQkw0YJRD2A60l9lqvOSqDc88sW88fB1zBR7q6P4zK2b/
xo0XX9Xf14tAaxBCQAhBEATwPB+BASwhwq1sQhaDIICvJBZUV2FZfT2kVGhpPwytAwjOQQwi3O5c
bFQS3HYWBZTfX7/8+vRn2z/4eEoT+JVvPfxIMiufvXjhwpj0stBaj3SLEIAQ+NKHrxQ4Y+CcwQwL
eFIqOLaFZfVX4KKqKhw60oETvf3ggg3FzijQSoESanHXXVm77Loba5cs2dm4c9uJKUXgPX/93dra
m27d4MZn/tX+5mbsO9CEivIyzCkvg9IaJsdQXkWEEOgggOd5oRotMaKMCdWoML+qEssa6uAriZb2
I9CBhmARYyOQU6MP7riLAsLur7v62lTjtt9tmxIEfuOhH3zH2PZL1LYv8bIZcM7QnxjE/+zdjyAI
sLBmHgTnoRrJyV04XI1SKjBOwfhIczyp4FgWltbXoqaiEoc6OnGirxc8v/0jgYRqpMwSTmzlpcuu
u+GyK6/csW/X9gtSY8EE3vnt7y668oZb11E3/rAOAqF8H3mGOGcIABxobsXhzi5UVVSgbGYJ1Clb
Ok+kDgJkPR8GASx+khyCUI1KSVxUXYnlDXXw87ExCMAj142ACTS0krCc2BdAxX11y64dbNz+4fYJ
JfDuVd9/gAt3I7PdBi+bzg0AMCLIU0IghMCxnh7s2X8AlhCYX10NRgiUDkbMC/JJxvclfKnAGc/F
xpPB0ZcKjiWwtK4WF1WFauzu64fgHCxKF0NCQ7XyQSizhRu744rl11536WW12/Z9uqt3XAn85qpV
M6645uafCXfGP2pjXOllR52cDIfFOaTW+Ozzgzh+ogc11dWYWVwEpdQovoXZOOv7MMbAsvgpajSQ
8qQalS/Rkq8bC+piQnVzx72YWs69tVcu3d246+OD40bg5ctX/Jszs+yBbGoQgdbnJC8PSikEFzhy
7Dj2fn4QRUVxzKuqBIyBNmZEdRLGRsCXoRoZZxCcY3iqllLCtiwsaahFTVUl2o50oKevD0KEySgq
tJIQtuPIIFgxf3bx001NTfp8PxuJwNprv/iIofQiPcrA85wgYeuW8T3s3rcfA4kkFsyrQVHMPU2N
BBhRNxoTQAgRFtXD6kapJBZUVWJZQz18z0dzPjby6GoMggDEmKKikpkv7Nn5cd+4EFixYPE34zNK
FhljRsSnKOCUgjGOtiMdONDcitkzS1A1dw6CIEBwBjV6UsKXEoyFahxaO/c3xxZYVl+HeZVz0Xrk
CHr7BiAEP+9MPVQRpDPElvrZPZ9u7x4XAmdXVN3re94iy3YgbBsmCCJ2CKHXJJdgBtNp7N67H9ms
hwU1NXBtC0orwJAR1xypRpwkxwAEJIyNSmJ+dRWW19fDy3poaT+MwBhwdvYuhlKKQGmkEgn42TTi
wn5yz++39YwLgTWLL7tX+mrRYF8vKGVwY3EYSkbEpyhgjIEQioOHDqHlUDvmlJVjTnkZdKBPU3he
JZ6U8FVejSO7GF8quJaFZQ21qKqYi5b2dvQOJEZXYz7zZ9JIDSRglAIlxFg2farxkx3jQ2D1Fy69
lwmxSCuJVKIf0vPhxmLgQhS8pQkhsIVA38Agdu8Li+8F86ohBIdW+jTlnOxi/NwQwhrqYggBtNGQ
SmFhTTWW1tchk06jpf1I7oaFXQwlFEZrZAYHkUmFR87hlMiAGv3U/t2fjB+BlPJFxgQglCKbSSGV
SIBzAScWC7deAXNlAEN13/6mVrR3dqJq7lyUzjpz8U1yapRSgfNcTw3kbAA8XyLm2Fh+ZQPmlJei
ue0wBgYTcCwLMushNTAA5fuglA5dDzDGFvypKPVgQQQGgR66a4FWSCb6oaVELB4DGx7kI4JSCm4J
HO/pxe79ByC4wPx5VaA0VN2pYSyvxoznwyDM8kN1IwnnjVJJXHxRDZbWX4GBRALNTc3IplIADMiw
2WSeQIvTSARe8KESoRSUEgz0nkBHaxMygwkwdv4ZcDjysT7mOJBa47W3t2Ldq6+jb2AQccfFaPrO
Z+pUOoP+gUEopYeGtiR30VQ6g9kzS/Anf3gLKMIK4nT7SBhPPS/aTb9QAvOLM8bgex662lrR09UB
GANaQK+aJ5IzhpjrovHzJjz74kvYuacRtu3AGmVSTQBQSiC1Ql8igWQ6DUJCRVNK4EuJYyd6kEyn
zj7pJjCSsUjbZ0yPNfPxpO/4MXS2tsBLpcLAfQFz75jrIJXJYsMbm/DSG28hlc7CdZyTTA/3nxAY
AmQyWQwkU0h7HtKZLPoHB3MhgJwrRBspZSQCow/XzgUCMM7gpZPobG3GrDlzMbNsDkDDyUpUGACC
cwjGsHNPI9o7OnHHzStQd+lieNI/bWgrGIMnFQ4ebEU6ncblixfBskSucTpl4nGK3QiMYVJNngJH
XJgxAAY9RztxtK0FKpsF4xwFy5EQxF0XvYkE1r32On61eWtuem0DCGMa5xx9/QnsPdCEE719kFKH
yjvPeGwM4FM6yQoc4XMYG9PJBDpaMphVUYmS2aUwJmzbosIAsIWFwBi8v+sTtBzpwJdvXYFLFs5H
OpNFW3sHuo53A4SA8/AI4Dy27TCDYWjEGDiuBOZBGYcJNLo72pFJJlBaWQVu2eFEpwASCSGIuS6O
nujB2ldew5duuA6zZs5Eb19/rgJAwaVUNpuN5ttEEBieeodqTA30o7O5Gam+/qFWrqDimxC4jo1M
Oo133/8Qg8lUeHp3pt1qwtqwgOpqKhA4bEHGoJWPY4fb0H34MIzWoBEPigghIMYglUggk0icdmA/
CndDRbc8+ygu8haecAKBsPhmjCLR243OloORim9KKbQvMdjbCy+VAgg9p6oIDOLxGPYe+BzJZBLs
DGQXsusnhUAgVAXlHNL3cLSt5WTxTUcvvvMJITOYxGB/X+6ELSSP5DP7KERyzlBUVISPduzCr97c
BCHEmPoxIUnkbCCUAgbo6z6KTCqJ8spqWLE48v02EB5QaamQGkwMDQDOJTtCCBzHhtQaG179Nbb8
9j1QxmCdbXJUQHycfAIBGELAmICfTqGjpQmllVWYUVoWjtkJgfIlBvv7gCAYPdadQqYQAkEQoHHf
fvzmrU3o7DoK13XCTuVs+7SALTzpBJphPwlj0ErBy2SGxUOCQAVAboQ22g3wfX9oyk0JxbHj3fjk
00/R2dUFyhhiMfecdoSrGZ3xfHXOfy6UQDMBX8gkhJxO1FAbdjoYY+jv70dTcwvmlJejpbUV+w98
DqkVnHzPfH4rgxDqxYUbqRCMRKA2wQCfEg9GDHM7p9TtO3eCUgopJYQQsKImCwLABH6KZ9JRPhYp
C3ON7WertyYL+ZYRACzLKmgWybmAARo/3rgxE+Vz0djQeq2fzSSFZU0iXWdGFOLMsF8oz2VmHfwk
6pqRCNz+35uOKJX9spZqr2XZuTbs/ybyM2vhOECgezOpwQe2blyzKep1IieFo20th7jKPGfPKOWU
0hsp5zAFzPnOBGMM7Fgc8RkzhkbvgVKQXragrXlGAhkHFwLKz/xSZnvvfPeV9b8t5DoXZNFVN932
ReG6T3LbblC+zNVYhU1B8gi0xozScpRXz4PWGoRQyEwWqUT/mBBoQGDZNqT0u4nM/t3ml9auvZDr
XVBZcrS95RDxUmtiJaU2Zez6sVDjeCqQMgZhCSjfe93I/q++/fKL713QBTGG39Jf8sXbb+GOs5pb
dp2SfsHzuLFUYHjKF/4Ulg2t/KTS/g+3rl/z5Fj5PWaFcdeh5jbipV5wZ5U5lPLrGeOFnYGMoQIJ
AEI5LNuG7/nv+InkV9/95bo3x8rn/BpjjiW33HYrE85TwnIuj6rGsVQgt2wE0pdGq0c3b3j+sfHw
dVxas662ltayuPMCcYpjlPFrKeMwWp/XNPhCFWgAUMohbBvKy7yvsom7tmz8+Uvj4ScwAc/KLb31
j29jwlrNLesy5Z9bjReqQMuyIZXKGCX/+e0Nz0UujKNi3IcDXa1NLSU2W8PdoiLKxTWMsbPGxoIU
aAwo5xCWDSn9d7SfvGvLy2tfHW/fgAl+XnjJLStv58J+klv2JUp6o6oxqgLzdZ2SMh0o+cMtG557
YiJ9mtB3JnS1NTW7pGStVSRmMM6vpozBBBrD72MUBYZ1nQ3lZbdIb/DP33n5Z69PpD/ABCtwOK5a
ccdK7vDVwnIWK88HTABDAK01Ss6pQBImCen3m0A98vaLzz09WX5M2ls7jh462BQrLVkjqDWTCb6c
MBp2MedQIGUM3LKgpP+WVANf27p+3ebJ8gGYIu+NWb7i9pXEcZ/gln2Jn0mjeHYpyqtrcgokkBkP
qUQ/LMeFlnJAK++ftmx44anJthuYAu+NAYDOQ81NbmnJWos7xYTSq+NFxXCKi8OnAPJfJwifUtrk
+epr7778fOSx03hhSihwOBpuuvmPZs+t+UnVosX1oAwEBsm+3uPJEz2PbX1lzerJtu9UTDkCAQBL
l4o7r/7SSjvuNmjpH050dL21aePz5/3wyzSmMY1pTGMa05jGNKYxjSmO/wU/DOIZnAoOlQAAACV0
RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wMy0yNlQwNzoxMjo0MCswMDowMEiEjScAAAAldEVYdGRhdGU6
bW9kaWZ5ADIwMjQtMDMtMjZUMDc6MTI6NDArMDA6MDA52TWbAAAAKHRFWHRkYXRlOnRpbWVzdGFt
cAAyMDI0LTAzLTI2VDA3OjEyOjQwKzAwOjAwbswURAAAAABJRU5ErkJggg==`},null,-1),x1=[_1];function b1(e,t,n,r,i,a){return et(),Vt("svg",y1,x1)}const f0=fo(m1,[["render",b1]]),aa=gn({__name:"clash-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=ja(),a=ut(!1),o=ut(!1),u=ut(""),s=ut("active");Ls(o,d=>{d&&(s.value="loading",f().then(v=>{u.value=`clash://install-config?url=${encodeURIComponent(`${n.link[0]}${v}`)}`,s.value="active"}))});async function l(){const d=await f();window.open(`clash://install-config?url=${encodeURIComponent(`${n.link[0]}${d}`)}`)}const{toClipboard:c}=Ds();async function f(){const{data:d}=await Ns();return`&token=${d}`}async function h(d){const v=await f();try{await c(`${d}${v}`),i.success("复制成功")}catch{i.warning("复制失败，可能当前浏览器不支持 😭")}}return ho(()=>{a.value=!0}),Rs(()=>{a.value=!1}),(d,v)=>{const p=Ps("router-link"),g=$s,m=Pn,_=Kn,y=vo,x=Vs;return et(),Vt(an,null,[J(y,{title:"clash订阅",open:!0,width:"350px","mask-closable":!1,"destroy-on-close":"",onCancel:v[1]||(v[1]=b=>r("close"))},{footer:Q(()=>[]),default:Q(()=>[J(g,null,{description:Q(()=>[ge(" 订阅信息自获取之时起60秒内有效，详见："),J(p,{to:"/account/setting?key=5"},{default:Q(()=>[ge(" 订阅保护 ")]),_:1}),ge(" 。过期可重新复制订阅或重新打开二维码（无需刷新页面） ")]),_:1}),J(_,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:Q(()=>[(et(!0),Vt(an,null,Fs(e.link,(b,M)=>(et(),Dt(m,{key:M,size:"large",block:"",onClick:T=>h(b)},{icon:Q(()=>[J(ke(Bs))]),default:Q(()=>[ge(" 复制订阅链接 "+Os(M+1),1)]),_:2},1032,["onClick"]))),128)),J(m,{size:"large",block:"",onClick:v[0]||(v[0]=b=>o.value=!0)},{icon:Q(()=>[J(ke(Us))]),default:Q(()=>[ge(" 二维码导入 ")]),_:1}),J(m,{size:"large",block:!0,onClick:l},{icon:Q(()=>[J(ke(zs))]),default:Q(()=>[ge(" 一键导入到clash ")]),_:1})]),_:1})]),_:1}),J(y,{open:ke(o),"onUpdate:open":v[2]||(v[2]=b=>Ki(o)?o.value=b:null),width:310,title:"扫描二维码订阅clash"},{footer:Q(()=>[]),default:Q(()=>[J(x,{size:260,status:ke(s)||"active",value:ke(u)},null,8,["status","value"])]),_:1},8,["open"])],64)}}}),go=gn({__name:"sing-box-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=ja(),a=ut(!1),o=ut(!1),u=ut("active"),s=ut("");Ls(o,d=>{d&&(u.value="loading",c().then(v=>{s.value=`sub://${btoa(n.link[0])}${v}#米白云`,u.value="active"}))});async function l(){c().then(d=>{window.open(`sub://${btoa(n.link[0])}${d}#米白云`)})}async function c(){const{data:d}=await Ns();return`&token=${d}`}const{toClipboard:f}=Ds();async function h(d){const v=await c();try{await f(d+v),i.success("复制成功")}catch{i.warning("复制失败，可能当前浏览器不支持 😭")}}return ho(()=>{a.value=!0}),Rs(()=>{a.value=!1}),(d,v)=>{const p=Ps("router-link"),g=$s,m=Pn,_=Kn,y=vo,x=Vs;return et(),Vt(an,null,[J(y,{title:"sing-box订阅",open:!0,width:"350px","destroy-on-close":"","mask-closable":!1,onCancel:v[1]||(v[1]=b=>r("close"))},{footer:Q(()=>[]),default:Q(()=>[J(g,null,{description:Q(()=>[ge(" 订阅信息自获取之时起60秒内有效，详见："),J(p,{to:"/account/setting?key=5"},{default:Q(()=>[ge(" 订阅保护 ")]),_:1}),ge(" 。过期可重新复制订阅或重新打开二维码（无需刷新页面） ")]),_:1}),J(_,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:Q(()=>[(et(!0),Vt(an,null,Fs(e.link,(b,M)=>(et(),Dt(m,{key:M,size:"large",block:"",onClick:T=>h(b)},{icon:Q(()=>[J(ke(Bs))]),default:Q(()=>[ge(" 复制订阅链接 "+Os(M+1),1)]),_:2},1032,["onClick"]))),128)),J(m,{size:"large",block:"",onClick:v[0]||(v[0]=b=>o.value=!0)},{icon:Q(()=>[J(ke(Us))]),default:Q(()=>[ge(" 二维码导入 ")]),_:1}),J(m,{size:"large",block:!0,onClick:l},{icon:Q(()=>[J(ke(zs))]),default:Q(()=>[ge(" 一键导入到sing-box ")]),_:1})]),_:1})]),_:1}),J(y,{open:ke(o),"onUpdate:open":v[2]||(v[2]=b=>Ki(o)?o.value=b:null),width:310,title:"扫描二维码订阅clash"},{footer:Q(()=>[]),default:Q(()=>[J(x,{size:260,value:ke(s)},null,8,["value"])]),_:1},8,["open"])],64)}}}),S1=gn({__name:"windows",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=js({scriptUrl:Is(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),r=ut(!1),i=ut(),a=ea();function o(){a.value=aa,i.value=t.link.clash.split(","),r.value=!0}function u(){a.value=go,i.value=t.link.singbox.split(","),r.value=!0}return(s,l)=>{const c=ta,f=na,h=ra,d=Pn,v=Kn,p=f0,g=po,m=ia;return et(),Vt(an,null,[J(m,null,{default:Q(()=>[J(f,null,{default:Q(()=>[ge(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),J(c,{strong:""},{default:Q(()=>[ge(" 第一个 ")]),_:1}),ge("。 ")]),_:1}),J(f,null,{default:Q(()=>[ge(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),J(h,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 订阅链接 ")]),_:1}),J(v,{size:"large"},{default:Q(()=>[J(d,{type:"primary",onClick:o},{default:Q(()=>[ge(" clash订阅 ")]),_:1}),J(d,{type:"primary",onClick:u},{default:Q(()=>[ge(" sing-box订阅 ")]),_:1})]),_:1}),J(h,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 教程 ")]),_:1}),J(f,null,{default:Q(()=>[J(v,{size:"large"},{default:Q(()=>[J(d,{type:"default",href:"https://docs.mebi.me/docs/clash-for-windows"},{icon:Q(()=>[J(ke(n),{type:"icon-clash"})]),default:Q(()=>[ge(" Clash教程 ")]),_:1}),J(g,{title:"暂未开放"},{default:Q(()=>[J(d,{type:"dashed"},{icon:Q(()=>[J(p)]),default:Q(()=>[ge(" sing-box教程 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),ke(r)?(et(),Dt(qr(ke(a)),{key:0,link:ke(i),onClose:l[0]||(l[0]=_=>r.value=!1)},null,40,["link"])):wn("",!0)],64)}}}),A1={name:"SingBox"},E1={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 80 80","enable-background":"new 0 0 80 80","xml:space":"preserve"},C1=nn("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
CXBIWXMAABJNAAASTQHzl8SnAAAVDklEQVR42u2be5RnVXXnP/uce3+/X70f/aAf0DTQNqCADRFQ
xLRgWAIhosuGKJJBxYHELEKyIC6MLh7BZHQUE5gxPmBkyCSITQYciE5ApSM0D4HhIdA8FeiGfndX
V9XvcR/nnD1/nFvVhIWkuu1uJNZe63ZVV/3uuWd/a++z9/7ufWFapmVapmVapmVapmVapmVapmVa
puU3S+SN3sBryUdveWrmRj9r7rbCdkmS6swkzxf0d9Z+67j5m9/ovb1afm0AXPoPG5Y0k+7TctL3
BTGLQ5IMaSKIiZs0Um4ziT5bt8UdM8Qtv+13hh56o/cMvwYALr1m9SHb0uFLC1v/cOhL0ADBgwoY
QCwEC6QgDTANSNpK3WTfm5lll95+4vCjv7EALrl60wVZbeAL2pU2QgYQ0ETAKBgTEbSAUcQQfyeK
SQQzCGRlOeSLi+9d2vvF3zgAD//G5qubgzM+5TtgnEMSASuonQAtuq/ayhStghVEKqs0ELqgdwB6
RtrX3XNszycEdE/rYd4I8A772tZrW30zPuXHHJQlCKhuv14Ng1T/KiASfxAEkhKKbdCe3X3WsXe3
/v6N0GWPA7jkqs1/kfcNfdyNluA9oGiFnGh17lWQTeIoGlGcuCpUxcRflVuhuVf3me9dOXbJntZn
j7rwu69c885Ntdn3Ok0glJWrglTnnTEGTYDEQgNMHbAxoOArqzMxqGgSP2ZFCVagDl01ZUFz5Jjv
HT3j3j2l0x6zQNVLzFbX/7XS1MCVyCtcVdH4vYJpWJIapHmxpmu8ubJ7vHVX2ilfsAnYngimTlgf
gAgiinjwdWGj7f7G8uXL7X84AI/86rlnlD39R4S2Q0P0RQlEswqgGGyfpZ53Hh5qbzrl9NHHDnr0
9/ve88iy3t8+bevdB/fmW06od4qVdhDURuMVicEEIxgBGQe/V+Owby96/5l7Sq894sJ6ySXmwK7z
Hi27ZxyiZQ7GIEYxRqOLWiHpr9HbGf1fv/fizedcdtknstdcB2TJHdmV+VD9PGkzGZFJomtjIe2H
rtHsqTsP++LbRC4L/yEAPPrLa967yc5b4VwZ3c0YxAhiFYxiB+v0tEdufOSc4dOnst4RK9rXuNld
Z7txRRLBmpg2SgLWQncfzBwdPeGmtw3+aHfrtkdcuJU3zvTGoD7EiBs0piwBTK1O2mw9e9z4D8+a
6nrnPrPqj+xo+bj0xbzQCGDBmiqoNKBlG2fsCd12O4CXXPJ4LffmBOmABEE9BA0QAqoGA/QWm//s
by74/c6UATz3HeWg5uenAqZKvBOj0Y2NoBmURt5/7fPPN970AP6L7TvUme4FWmQYDyZEy9MQkFqC
Hd/24P1/svD7O7ruinf33ZE0i5VJPyRWSYygVkkEKCHprc27s+h7+5sewKZLj9KkQQjR6sSDeAgB
rECD/JqdXXsg8dfUajEfJIFUBGuVmii2H1r1nqPe9ACWwR4eAmhQJr4aD0ZrhLFmPks3/WBn1967
3HCbjrl2WRO8KM4oasBb8AYya9/8FuicWRxKwCshhO0gisW6/PHbLzx0zc6ufd3R+60vCY91uqFt
IDOQWaG0QsdD7sJBu1u/ZHcuvnz5cvvnD8o8dQFCrFtVA14j05Lm5cqJzy67c2zWWpPvm6Xd+6TO
zDKunI3TrqIMlD5tFp5NdcrNfb6zZlZor7n5w4s2Arge7tzWzdF5BsYIVqDuodGB/mDm6YoViRx3
nHtzArhm7wEcM5USCRXHVxEHoVVSzObA2fetv7LQrmN/Yrv2r6V9g406pAYkNLAe2iW4HKSATglj
rQFWl8XoAde3n0/b7XvHn8kXbn1LQmYk5kYZGA82iPQ76buob0EPMPqmBHDTmPRrCL3qPGiIkdcY
MELIMzYe2n/i+MzuE20OaYBuD7YTg0xSBZpQKL4UxCnqABWCrQ8UCUuSetcStw56X+iQDKi4YYMb
Eg11S+kTstL3P1KaoTctgCNbRLxoPGdVIu8XYvVBEJxmyFjAah2xaaSyjGI0ElpmggA0FesgIMEj
PoATnFO0DIiDxlqQ1Q5XVylmQ7F3DakV6bg3u5VY2K0Azm72JZv7aiZ4RVQRkQoEIITY67BCCJF1
thItcYIXVBMvpGKnvf7b4lNBVFEELAQE6UD6TEBWFyR7iyT9G7t3p467LQovfm7kfY+esd8NTmui
RUnwiveB4EP83kUw1AjegLMaSzEr2KosU6OoiWiqqciDim6NHKtWjFhFZYeKIbMgrUD5tOGJBw64
/i2ff+LkNw2Af/bde7oOWtX+29W1wR+N9nYdEbIWxik4hVLRUvFlIBTR9dRCsIJYQSwkKdg62AZI
l6BdgjZA08jaRIusgNLt2E1+rfLNIBBcTpO+Q9bK/t+fddGaq886/9rBXa3vLmVjTl05suSloa5r
Nw7Vl6wZh9qLLfpu7GCcIZh/+zCTK+Pvh847+6BWw3bDfGC4CUnblUkZmkWpebNAfUnDO+lHa1Ys
uBJcC7QJIcsIhUIZ8E4JZcA5wEUr9z7ggkHqg/Rmm5/Zx73wySf+9si7f+0AXHrf+EdbPY1rWt1J
97Yx2GgVu6VN33cyTNvEbptWZ5gCmZIdl1Ieb3zdmye6rd41W3l4bitfNcOXGxaMbh2dEYqMDRt4
Ye4+jcd971Anr810ofegluewLOcYX9ojyrKe+k6GumjVvlScU4JT/MSx4aJ7kwwwGJrlvmw+99G/
WXztrw2Ax65sfmZ8sOdLLkBZKC0RRlC03aH7hhZmi4GkSgGJAKrpIRnefP+cPyz+4GdvPeCZnXnu
O69evWht2nt90w8cqVvaMeXxgVAqZQVgcBP+rOAdfUkPvUmDHvfSxc9dtf/lv6ruv/IZ+K4V418Y
H+z5UtkCaYI4wXql4aBuhdCluFJxfrtCwQc0CLq6lJ0FD+C+/7zgOdMIwoyADmX4tCDkii8nLC9W
QPgAziNesEWHot2hJfv95eJPv/DXbyiA77p95ILRwd7PtUfA51Xi6wEv1BwkxqADEonUyUtRp2jW
wkt6+KFn3LX/zj7//d95ciGu8fZax2G6BTPXY/fK8eIJWdwHTsEFcIoNAQmgrqBojzFm9/3sW/7o
2c++IQAed/umD4z3DH7FbQPJwTsoXQVgGSsJY+uk8/sjC+3YDp5TtCxQmZGMtAaP39k9bGgOL5Va
Tyo51F2dhJRkWOhe5KgPe4x0gbdIGcCB9YCv+EgfQRwPC/767Z9a9aE9CuCyWzfP38jAdVkBIQf1
YByIAymBUiEVGq0sGzTr/9z4cmtQC47qLIqW6EvIyuS0nd18p0xO0wKSUjHeUgs1bKhju3roXRS2
zPCrP5Pm7UylD1zABEG9EDyIM5iixOXKJjfz2nf/yYML9hiAP/eNr5Vd6SAtYvLqq6sC0aRCd16M
7tPZdtKzH1/4FZvmq8R0oSGgVUTUoPhinKLsOf6tv7di0Y7uYenXn1xYhq4TaHqsF1InJM6Q+JRG
0kdfaZ7d9N8P/vIgG05Iy+YWTA+JrzzBxf2GIISiSUdmDazeOvz1PQLg8f9n8wlFT8+pOhKLfnEK
XmOZ5WLV0MjybP7ItpPvPmnuvwLUpLwFjaNrhGgBPgTUFQRmJps6w+ft6D62jg39saZdNfIy/vGC
YIOh5g01gZ6gtwJsuvYdK/s7T5/UVbZaSh/Oh/jsoNvP5fYWMplz8uJPPHrSbgdwS951aemJbuoA
J+AEKQUNQqowc7z5Bys+tNc9E/cM0F4u+YYS0opUjVWI8aD5OIXrO/vwj9w+b6p7+NCXH5ndCj3n
+FZAvSBOomUFEKmRjGVuTjF6w+Sel7/3gSHd9FHjSwgJ1is4H6NzUPAlpbOMt3p3eLZmhwA88X+v
PbKodx8TxgEP+Gh9VIHBNqA+0vzWyg/P/KdX3vfkTb/1otXObWq6UQ2IF8RLDCqa4Wpzel4e2esv
p7qPp8ZnXe5rvf1kWbUPwfhIeUnNkBSt23/86QN/8cp71n5nya1pvvFKkUGkrFx40p0NIRuj0JlH
H3zmA0fvNgA35b2naxLPObzEzVfnnhrBbs23HOyev+i17m0kY18V30G8jZGwIlaNMWgYJU/mnr1o
2f1L/709vOPyJ49p14bPCZ0ilsJVQAoeRC1pAf1F86uvde8BjV9cbDrrNioNgle08gb1AbzD0cVo
p/8juw3ALKTH+4zJswO33fpSC7Ws/e3rP3bYyMTnVXWy0nn5liNXpPmWuzH9BFzs0BmDGgHjCdLN
aDn726d9ennvL3v+Od98sHtzZ/a1ZWgQXMH2ZpVHg0fSFDs28tMH/nThj1/r/vv/8eSxGuNXi3RX
OkRLJBBJiCKn8On7VKdeoU0ZwGXffWZWcCymwyRw+BhVxQsy5nSI7LuvBu+VIHalY583miHeIBWV
pRasCKqjFOm8/e/dePgvrVF/vGqv/5Hr8OIwNkrIFM0CvgiEPBAKIFe63baLX0+P3tBZTr41EBLw
kZvUoDHAuRznZNFvn/mTObscwDHXu0BNvVfLMHn2qYvRN4gQsmL9KVvuWvV6a7x825H/atz6m6gN
gzGR4zMgIhiEUI7Qqu23bOEZT/6XV9+78JxnvjDO3h9xo6NoAZoHNPOQBTRXxHZht62/5aHP7H/7
6+3hHUfc8hRufG1QW6VVoTpHAe8x2t21Je/eZ5cDON6hB4TglRA0EqMhAqhAEty6C37JeMYrrXDm
8KbzjW4eD0kPYiuW2kg1ohYIxTaa6f4X7f/xpyYj4r5nrbpo3O/7OTc2iua+sriAlkooFA0NzNho
e26x+k//PT1uvOyywgZZh7Pgw2RWEELAq8cpjGXaNVVcpkzp17yGeF5sH2aWiVZFCbiprfXczce9
NOeEh85r2Rn/02uGFVCpgEQQHGXRZLx7/0v3O/vnLh/NZLxYeLkvmhjjCUns7BkFDQZJDGk9pZFt
vOCuK975/JSUccGoxL4MRA9QIXYO0VjaTFGmbIE2ka3kedX6j0l0jMJKKCB4u98fX/fTGROfFxEV
kcmNvNIK1//wiOtq+ovrktrMSao+8vSCimDE47MmI2Ozv9As519etseJbQEILkx26EIZIO2nNv78
jU9fsfgbU9HjA5/8Xl/hZT9cHnPBoDGQeI1nc+noTs22XQ7gjL6tq8W5zYJBfKgGhAwahFCUuEZP
3wNb55/66vt+GYhDi1eca/1L90t9uOpzxMaRMULIAtmGNsXWMULRRr2PSXsZz90J5hk7g6S57mcL
woOfnKoeD7207wekNntYKKsR1xATwuBRtWjojPTNaL64ywG88fRDmib4h8VuB06rOlhcoOx4RnXg
0mVX3DP8eiBOyHP/7fy8r77mg9Zt+nmo9VZjC+DHHcWmHLI4xqU+DiSpD3jnKxAD0IfN1q+ZZ589
5Sd/d3pzKjr8zmnLB1oMX66qSHXuYisXUIAahvKR//etE6bcR96hPLCh2S0C6EQS7WM9GUIgZDmZ
6d3nieLg7y+74uH5UwFx9c1L1x3mf3RsXVobkQYhC/jcY8UQ0dxOVMTIH6sv8XWMb244eOzhYx78
+tIpzda852P/d+5j7SP/uUxm7KcyjhpBJF7YeElao2HzW3cEkx2i9E/55lMzn27t81xpGwNalEDl
yqpIiOWZrTUwRWtDd2h9ZXa9ufxHFx2w+rXWWnrefXuv7ez1nlaWnpxltQ/6UnopHMEHKGMfQwGx
8dUHU3XtBIPrFtyMsfF6Ut4y4PUH+9ZGVt591Xte8zlHfey+vddl/ae18v4LvQzPC8U2ggYUxUwO
uQsqdRIZax8w9+lFD/3jSet2C4AAh/3XdZe3+uZ83o11qjYioBKJAa1SG9NDkoA0R9s2lI8S/LMJ
ZjQvfRJyP9M7Dgg+PdDJUI8rhdDahpY+VgcuuitlnOYSqfopVjBqCP0lxV4ZmiZYM0zqDLVsW8d6
/3Qt8Jwh2SSoLzLXr6VZ5ELydk1m9fiiQ3BtrJrYQtZAUEU0YLygtdkM6DNXvHzboRfuNgsE+OSX
VvbdpYc8kdUG9pFOJza4q1LIa5XRT0Q2UqAeb4w9HXyuqHNQFGieRUtzYTIpV1c1ghyx0gEMFjUB
N8cR5pVYtSQ+rZgVQUMNoUES6tXbnhOJvoMij/0GrfakAdUYtDQoQT3B9tGlWza+a/jJg75//Skj
O4LHTnXllvzViyeM1effHnIFVxBUIjlQWaEGtnOEvkobvcYC3gWcU4yXmMg6wFUuWzE73ocqrUgI
hRK6StjPITPBeIt4iwkW42w18SqIj+lVqM5l0QhQPEer18lC/EPGIfc4gxOoYRPLYPrsqS/cfNQt
O4rFTjHSj3xu3x/2NtdfmNQTgtRiSRReAV6YYJ2rG4ISqo2jghETSc2qx6nA9qxcEGMhHcJoht27
HZJ3D5LMrZNqSkqNVBIMFiMGYwxG7GRFI0awZvv/1cR3SUQMYiqNqxLS24Sk0Ue/vHjxzoC30wAC
/OzSva9Im2s+Y6ygac8kiBG8SBXFw0a2g1fNrhgVrAhelck3YVRQY6E2SJrUaJiNPxiovXDkPku3
/FZfMnJTzdRJe+ZgbQOjCQaDFYNl+/AXAkYEM1EeSpWuSJz6mng/TARI+knqDXp4+tLVty7Z6f7w
r9xYP/QvXjx1PBm+KtR6F4SOJxTtCkCtXmtQgsbKQSd+7qL7lj7OsYg2EOnC5Bt9qsU/95htV/3i
5iV3vPI5B17y2DEdN+v83KcflHS4ppmDvIM6T3A+nmsB8IKEql4PoZqVMUiIPeKgNUzaR+I2b+wx
689/8Z+W3LCTqu8aAAHed9EPZ6xOjrgwd7WzNemdpQ6CKwmuRL2vuEMikMGC1hBNUAySjxFc6+mG
ljf1y7brn1q+5PHXe9ZhF61a3NKhM0pXX+a09rZgetBcIz/oC/C+KjMVH5RY/KQgNQyCLbaOpqb1
9wvlsS/ec8MH1/6quu/S4aIln71zVtu/5QOlS37Xqznce50f6ErVa3yxJihSdgrjdZ0RvwrCPQO0
7nj8rD+8X477yQ7NMeslmMM6zx/VzhvHeW+OdY63eq9zg3TV1dvI82mAshVE/XoLDyea/8u8/g03
3/fNY17eVTrvtnflrrzyyvqN606cv6GTzvI+JElwYpFyZtfIxmULfrr2/PPPz3ft886r37D643NG
8969XMemxhRJKV3F3DRsWdi4++V/uOI/tXaXrtMyLdMyLdMyLdMyLdMyLdMyLdMyLb9J8v8BcLpa
kvQWwM0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDMtMjZUMDc6MTI6NDMrMDA6MDB5bJe6AAAA
JXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAzLTI2VDA3OjEyOjQzKzAwOjAwCDEvBgAAACh0RVh0ZGF0
ZTp0aW1lc3RhbXAAMjAyNC0wMy0yNlQwNzoxMjo0MyswMDowMF8kDtkAAAAASUVORK5CYII=`},null,-1),w1=[C1];function T1(e,t,n,r,i,a){return et(),Vt("svg",E1,w1)}const M1=fo(A1,[["render",T1]]),k1={name:"SingBox"},I1={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 60 60","enable-background":"new 0 0 60 60","xml:space":"preserve"},L1=nn("image",{id:"image0",width:"80",height:"80",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
CXBIWXMAABJNAAASTQHzl8SnAAAIL0lEQVRo3u2ae3BU1R3Hf+e+9v3eJJvER9JgAHlKsQXHcdRx
zPAQEMGMgiB0Bor1geAIgdhMIC2gIipQIEqRqtjotJIABtFOmCLidGgEQjGUQCDZZLOv7Hv33rv3
ntN/DLNDoXbI3U3I7Hfm/vM7v/s738/+5tx7z94LkFVWWWWVVVaDRijTE5bVXxlFWaw7CaAEG3A9
d2DmXW1DFnjqQc9TyKCvpfQaPVAAcigeQJHAs4ceu60hUx6oTE00vcG5gjHb9nFajV7y9MZllz+q
MmgttCmnftYB58IhBTxjv3MRZy3czHEU4N7waZUsTDTj2DjiDR7nNBxQxrwPZtV3zh4SwHP+2j6Z
1Vne51gA8IWauAvN9++fXvDDvul3XgqcePtB7A18qtIyQKnNHz3x2ZVR6faT1jU8/0uXLiFwZzUO
axHvCZ6wdh17pHbpjPh//SgN/q+0hdZHYk7/qdHNLfdWVz8kpctTWjucDEONIc9aJPWEPKpA2xPX
gwUAMLld5aIz2GV02Ma3ji5dmU5Paevw4rpLwwVtzr8YjYaW/D0zPy7/31fi8k86p2hyC74Qw9GI
SnSX7Ckv9abDV9o6zBP1q0a7npZ8/oM/BQsAUPfU7Y2i1/e5Od9okLDhxXT5Sgvwwj3tDprSPM17
4sBKZM3/e54hmagUPHECFPfrlX86pbtlgBGnnmPNM6tJJHzkg/mOltSxaYc7x037e3jZ9GPhpbOO
dI9MHdv1TNE5ORQ+bMm12oNUbtktA0xjNIcSATgsv58af7zBu1Vvvu2U0WD4g9Fg2Mlq8s/Nrve8
kZqjwngXIwMgQs+9JYBf2N2dQxPVpJgrENXI3q/64vPqun+b57A/T3cHD+C27jJ83j2T84W+zyvI
eeWZT7uvXpn1yPt1rDsYRph6tGpPu3rQA0s0ucdkMasoSfz2nUX3BAEAXvjw30adpKkgF3pP7ptt
mVE3t/DIn8sdDcM6Wh+ES2GPWuAq+uA2Lxgfo5Jik9Fos3qBHTHogWmRGqdmARhMvuuLsXG2IJcx
q/URvjE1t/qlSWHWHzuaQ1tsAhYLrtbA8jGtCgHI1Bil/TFKFwRAIygRgMHS1YuVNYZCIPNAEmjs
tdlmkR5DvAFRTkT8fTFKxqdABGBlULzDigMzGN0uxQjQiG7vi1WuKHL9/nfOxjtthTM31lxZTuiO
vbJsU7Ngrsgx5I7scXV9tL5yYqgvn4P4ZSmSBArokkEPTGMqjyQEoJKhaGpcJ8aXSJ7ev5WY7tji
9nFvUhRL59ps4O70tWgF4ZXUXDmmDgCJYAZDjtL+lF/DGNRSPEIEkQumxl+qLnUKF8/8MubxvqaT
uOM6ATWF3e6V8bbmycs3lLhTc2N6T4SSpDCSwai0vzR0mBBCCOhiMr527OW9DwUBoObH44bKL40Q
oQVJCJBJaX+Kd5jCGBiMAHT0TdfuPVNI0zJhKRnzgx4YJbFg0ucgDcb2m61hFViLjjOaKEl2DWrg
ynXnx5m0plIx3NvMClz3zdbRo1BEjkdaDGrDL9auby1W0qNi++Gqqla7weI4QwBBMt41Zs2au/39
qVdTczlfo7edwUQKY7Fn/KpVIyNK+FSswxyj32nSmvL5gOfp/sICAFRWFrniAXe5WWf+mZQ0bFfK
pyLaXNM+6b3thGxY131Y6dob1zsP1W7D5M11V36uRD1lOozZFRwAMETeqjQwC3irikJACPX8oADe
uPGkicbs1IDPH5cSgW+VBk6yyRMBrz/OYPqxqqqmfm8X+w2sTuSMMWvtOiTxrRUbxwZSx96quZxf
u9778Ja1l5b+VJ231rRNq13nGnUt1OrVJSEk8a0mtc1mlAuG99dvv5+0mCQq1SAKYoSOvr324v0c
Y5gAWL4XEWo84WGk3mCnDSo7vFvR7n5xQ/H+69XYsvrCjFxjSb2YTIBDHtWzo7LnNEG4GQD+KZL4
GYagsJbhIAraEgA4PaDACEg+FgHUoHnAqnUc06oBJAwQicUgzoddwUCXS6e2TdAypt07XmvzLls/
7Hjq+VtXt0/WsKY/JhNxSAiBVoToYovBUabhoEzGAMFYBJJJHrCAgZX7v5noNzAlgRpJEhBJuByN
9JyPRMj3FI2aCSJnk7FTl3qtU5P5MedZh6VwpC+cPFpb0fUhkXAToYDQiH4AAfNsns7CdvV2Nj33
+h0P76pqtcdieEQ0yoyVsTyBAno8RUiJiqLMCEuFAw5MKH4PwqFPjCpv25PVo8Xr5dSuEGYFQ74D
OdrcUoqGRZIMiwAAWBpAxgD+gK9ZSAQWAAAsrR7hA4BvfjwAAOC9qg5rVPDcTaRkb3/9Zuz98KbF
+w359snLENDTAOMCDAAUDZ0y4Pr2nsZd1XsXKb5RyAoG4JOH+/Z/Y9DmjptCEJFjHY1ffFdenhiy
wHMancNFtblRVaArBgDgneEWRgyUfT6lSPFt4I2UsU8egACSeW63QaMrln7wbJbOubeZTcYxNK/a
kTEPmdSv6jqGLf4Sk3l17o/7YvM/8x5c0BAjC/e0OzLlI2Md5kTGYpQRaHlyqC+mSuBDFloLepZW
/N/JAQdmElEXExBALcgT+2JqHo8mniBhvHLnkAPeuqTUCb3Bf+iJZgEAwJJdJ1kz0sxTRfiv33m5
OJgpH2l41XJj6Xi8yW6x/KXyjStPQgS0uXkmkzcU3JRJDxm9LREA9PoGdwvL6QoAUZSQCJ2rWJt/
XyY9ZO62BAAIgLA8v9wKOotepE3aBP+bTM4/YNq+quPAtlfb3x2IuTO6hvuk7bk493LRUbH/lbLK
Kqusshpa+g8vPX1uFTEruAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wMy0yNlQwNzoxMjozMSsw
MDowMOQ2j4oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDMtMjZUMDc6MTI6MzErMDA6MDCVazc2
AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTAzLTI2VDA3OjEyOjMxKzAwOjAwwn4W6QAAAABJ
RU5ErkJggg==`},null,-1),R1=[L1];function P1(e,t,n,r,i,a){return et(),Vt("svg",I1,R1)}const F1=fo(k1,[["render",P1]]);var h0={},d0={},Gl=function(t){return d0[t]},Wt=function(t,n){d0[t]=n},O1=function(t){return h0[t]},Qr=function(t,n){h0[t]=n},Wl={},Vo={},jo=34,ii=10,Ho=13;function v0(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function D1(e,t){var n=v0(e);return function(r,i){return t(n(r),i,e)}}function Yl(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var i in r)i in t||n.push(t[i]=i)}),n}function Bt(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function N1(e){return e<0?"-"+Bt(-e,6):e>9999?"+"+Bt(e,6):Bt(e,4)}function B1(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":N1(e.getUTCFullYear())+"-"+Bt(e.getUTCMonth()+1,2)+"-"+Bt(e.getUTCDate(),2)+(i?"T"+Bt(t,2)+":"+Bt(n,2)+":"+Bt(r,2)+"."+Bt(i,3)+"Z":r?"T"+Bt(t,2)+":"+Bt(n,2)+":"+Bt(r,2)+"Z":n||t?"T"+Bt(t,2)+":"+Bt(n,2)+"Z":"")}function U1(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(f,h){var d,v,p=i(f,function(g,m){if(d)return d(g,m-1);v=g,d=h?D1(g,h):v0(g)});return p.columns=v||[],p}function i(f,h){var d=[],v=f.length,p=0,g=0,m,_=v<=0,y=!1;f.charCodeAt(v-1)===ii&&--v,f.charCodeAt(v-1)===Ho&&--v;function x(){if(_)return Vo;if(y)return y=!1,Wl;var M,T=p,D;if(f.charCodeAt(T)===jo){for(;p++<v&&f.charCodeAt(p)!==jo||f.charCodeAt(++p)===jo;);return(M=p)>=v?_=!0:(D=f.charCodeAt(p++))===ii?y=!0:D===Ho&&(y=!0,f.charCodeAt(p)===ii&&++p),f.slice(T+1,M-1).replace(/""/g,'"')}for(;p<v;){if((D=f.charCodeAt(M=p++))===ii)y=!0;else if(D===Ho)y=!0,f.charCodeAt(p)===ii&&++p;else if(D!==n)continue;return f.slice(T,M)}return _=!0,f.slice(T,v)}for(;(m=x())!==Vo;){for(var b=[];m!==Wl&&m!==Vo;)b.push(m),m=x();h&&(b=h(b,g++))==null||d.push(b)}return d}function a(f,h){return f.map(function(d){return h.map(function(v){return c(d[v])}).join(e)})}function o(f,h){return h==null&&(h=Yl(f)),[h.map(c).join(e)].concat(a(f,h)).join(`
`)}function u(f,h){return h==null&&(h=Yl(f)),a(f,h).join(`
`)}function s(f){return f.map(l).join(`
`)}function l(f){return f.map(c).join(e)}function c(f){return f==null?"":f instanceof Date?B1(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:r,parseRows:i,format:o,formatBody:u,formatRows:s,formatRow:l,formatValue:c}}var z1=U1(","),$1=z1.parse;function Ha(e,t,n){n===void 0&&(n={});var r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function Hs(e,t,n){n===void 0&&(n={});for(var r=0,i=e;r<i.length;r++){var a=i[r];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<a[a.length-1].length;o++)if(a[a.length-1][o]!==a[0][o])throw new Error("First and last Position are not equivalent.")}var u={type:"Polygon",coordinates:e};return Ha(u,t,n)}function V1(e,t,n){n===void 0&&(n={});var r={type:"MultiPolygon",coordinates:e};return Ha(r,t,n)}function p0(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Xl(e){return e.type==="Feature"?e.geometry:e}function j1(e,t){var n,r,i,a,o,u,s,l,c,f,h=0,d=e.type==="FeatureCollection",v=e.type==="Feature",p=d?e.features.length:1;for(n=0;n<p;n++){for(u=d?e.features[n].geometry:v?e.geometry:e,l=d?e.features[n].properties:v?e.properties:{},c=d?e.features[n].bbox:v?e.bbox:void 0,f=d?e.features[n].id:v?e.id:void 0,s=u?u.type==="GeometryCollection":!1,o=s?u.geometries.length:1,i=0;i<o;i++){if(a=s?u.geometries[i]:u,a===null){if(t(null,h,l,c,f)===!1)return!1;continue}switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(a,h,l,c,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<a.geometries.length;r++)if(t(a.geometries[r],h,l,c,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}h++}}function g0(e,t){j1(e,function(n,r,i,a,o){var u=n===null?null:n.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return t(Ha(n,i,{bbox:a,id:o}),r,0)===!1?!1:void 0}var s;switch(u){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon";break}for(var l=0;l<n.coordinates.length;l++){var c=n.coordinates[l],f={type:s,coordinates:c};if(t(Ha(f,i),r,l)===!1)return!1}})}function Zl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Qm(r.key),r)}}function ae(e,t,n){return t&&Zl(e.prototype,t),n&&Zl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Di(e,t){return Di=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Di(e,t)}function Ee(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Di(e,t)}function R(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(e,t){if(t&&(En(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},q(e)}function H1(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function m0(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m0=function(){return!!e})()}function G1(e,t,n){if(m0())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Di(i,n.prototype),i}function Ou(e){var t=typeof Map=="function"?new Map:void 0;return Ou=function(r){if(r===null||!H1(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return G1(r,arguments,q(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Di(i,r)},Ou(e)}var W1={REGISTERED_PROTOCOLS:{}};function Y1(e){var t=X1();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function X1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Gs=function(t){return W1.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))]},Z1=function(e){Ee(n,e);var t=Y1(n);function n(r,i,a,o){var u;return oe(this,n),u=t.call(this,"AJAXError: ".concat(i," (").concat(r,"): ").concat(a)),u.status=r,u.statusText=i,u.url=a,u.body=o,u}return ae(n)}(Ou(Error));function y0(e,t){var n=new XMLHttpRequest,r=Array.isArray(e.url)?e.url[0]:e.url;n.open(e.method||"GET",r,!0),e.type==="arrayBuffer"&&(n.responseType="arraybuffer");for(var i in e.headers)e.headers.hasOwnProperty(i)&&n.setRequestHeader(i,e.headers[i]);return e.type==="json"&&(n.responseType="text",n.setRequestHeader("Accept","application/json")),n.withCredentials=e.credentials==="include",n.onerror=function(){t(new Error(n.statusText))},n.onload=function(){if((n.status>=200&&n.status<300||n.status===0)&&n.response!==null){var a=n.response;if(e.type==="json")try{a=JSON.parse(n.response)}catch(u){return t(u)}t(null,a,n.getResponseHeader("Cache-Control"),n.getResponseHeader("Expires"),n)}else{var o=new Blob([n.response],{type:n.getResponseHeader("Content-Type")});t(new Z1(n.status,n.statusText,r.toString(),o))}},n.cancel=n.abort,n.send(e.body),n}function q1(e){return new Promise(function(t,n){y0(e,function(r,i,a,o,u){r?n({err:r,data:null,xhr:u}):t({err:null,data:i,cacheControl:a,expires:o,xhr:u})})})}function Ws(e,t){return y0(e,t)}var Q1=function(t,n){var r=Gs(t.url)||Ws;return r(z(z({},t),{},{type:"json"}),n)},Ys=function(t,n){var r=Gs(t.url)||Ws;return r(z(z({},t),{},{type:"arrayBuffer"}),n)},J1=function(t,n){return Ws(z(z({},t),{},{method:"GET"}),n)},ql="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function _0(e,t){var n=new window.Image,r=window.URL||window.webkitURL;n.crossOrigin="anonymous",n.onload=function(){t(null,n),r.revokeObjectURL(n.src),n.onload=null,window.requestAnimationFrame(function(){n.src=ql})},n.onerror=function(){return t(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var i=new Blob([new Uint8Array(e)],{type:"image/png"});n.src=e.byteLength?r.createObjectURL(i):ql}function x0(e,t){var n=new Blob([new Uint8Array(e)],{type:"image/png"});createImageBitmap(n).then(function(r){t(null,r)}).catch(function(r){t(new Error("Could not load image because of ".concat(r.message,". Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.")))})}var Du=function(t,n,r){var i=function(o,u){if(o)n(o);else if(u){var s=typeof createImageBitmap=="function",l=r?r(u):u;s?x0(l,n):_0(l,n)}};return t.type==="json"?Q1(t,i):Ys(t,i)},K1=function(t,n){var r=typeof createImageBitmap=="function";r?x0(t,n):_0(t,n)};function Xs(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function b0(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function oa(){}var Ni=.7,Ga=1/Ni,Nr="\\s*([+-]?\\d+)\\s*",Bi="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",vn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",e_=/^#([0-9a-f]{3,8})$/,t_=new RegExp("^rgb\\("+[Nr,Nr,Nr]+"\\)$"),n_=new RegExp("^rgb\\("+[vn,vn,vn]+"\\)$"),r_=new RegExp("^rgba\\("+[Nr,Nr,Nr,Bi]+"\\)$"),i_=new RegExp("^rgba\\("+[vn,vn,vn,Bi]+"\\)$"),a_=new RegExp("^hsl\\("+[Bi,vn,vn]+"\\)$"),o_=new RegExp("^hsla\\("+[Bi,vn,vn,Bi]+"\\)$"),Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Xs(oa,Hr,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:Jl,formatHex:Jl,formatHsl:u_,formatRgb:Kl,toString:Kl});function Jl(){return this.rgb().formatHex()}function u_(){return S0(this).formatHsl()}function Kl(){return this.rgb().formatRgb()}function Hr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=e_.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ec(t):n===3?new Gt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?xa(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?xa(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=t_.exec(e))?new Gt(t[1],t[2],t[3],1):(t=n_.exec(e))?new Gt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=r_.exec(e))?xa(t[1],t[2],t[3],t[4]):(t=i_.exec(e))?xa(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=a_.exec(e))?rc(t[1],t[2]/100,t[3]/100,1):(t=o_.exec(e))?rc(t[1],t[2]/100,t[3]/100,t[4]):Ql.hasOwnProperty(e)?ec(Ql[e]):e==="transparent"?new Gt(NaN,NaN,NaN,0):null}function ec(e){return new Gt(e>>16&255,e>>8&255,e&255,1)}function xa(e,t,n,r){return r<=0&&(e=t=n=NaN),new Gt(e,t,n,r)}function s_(e){return e instanceof oa||(e=Hr(e)),e?(e=e.rgb(),new Gt(e.r,e.g,e.b,e.opacity)):new Gt}function Wa(e,t,n,r){return arguments.length===1?s_(e):new Gt(e,t,n,r??1)}function Gt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Xs(Gt,Wa,b0(oa,{brighter:function(e){return e=e==null?Ga:Math.pow(Ga,e),new Gt(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ni:Math.pow(Ni,e),new Gt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:tc,formatHex:tc,formatRgb:nc,toString:nc}));function tc(){return"#"+Go(this.r)+Go(this.g)+Go(this.b)}function nc(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function Go(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function rc(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new fn(e,t,n,r)}function S0(e){if(e instanceof fn)return new fn(e.h,e.s,e.l,e.opacity);if(e instanceof oa||(e=Hr(e)),!e)return new fn;if(e instanceof fn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,u=a-i,s=(a+i)/2;return u?(t===a?o=(n-r)/u+(n<r)*6:n===a?o=(r-t)/u+2:o=(t-n)/u+4,u/=s<.5?a+i:2-a-i,o*=60):u=s>0&&s<1?0:o,new fn(o,u,s,e.opacity)}function l_(e,t,n,r){return arguments.length===1?S0(e):new fn(e,t,n,r??1)}function fn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Xs(fn,l_,b0(oa,{brighter:function(e){return e=e==null?Ga:Math.pow(Ga,e),new fn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ni:Math.pow(Ni,e),new fn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Gt(Wo(e>=240?e-240:e+120,i,r),Wo(e,i,r),Wo(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function Wo(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function tt(e){var t=Hr(e),n=[0,0,0,0];return t!=null&&(n[0]=t.r/255,n[1]=t.g/255,n[2]=t.b/255,n[3]=t.opacity),n}function fr(e){var t=e&&e[0],n=e&&e[1],r=e&&e[2],i=t+n*256+r*65536-1;return i}function Ln(e){return[e+1&255,e+1>>8&255,e+1>>8>>8&255]}function c_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");t.width=256,t.height=1;for(var r=null,i=n.createLinearGradient(0,0,256,1),a=e.positions[0],o=e.positions[e.positions.length-1],u=0;u<e.colors.length;++u){var s=(e.positions[u]-a)/(o-a);i.addColorStop(s,e.colors[u])}return n.fillStyle=i,n.fillRect(0,0,256,1),r=new Uint8ClampedArray(n.getImageData(0,0,256,1).data),t=null,n=null,{data:r,width:256,height:1}}function f_(e,t){var n=window.document.createElement("canvas"),r=n.getContext("2d");n.width=256,n.height=1;for(var i=r.createLinearGradient(0,0,256,1),a=t[1]-t[0],o=0;o<e.colors.length;++o){var u=Math.max((e.positions[o]-t[0])/a,0);i.addColorStop(u,e.colors[o])}r.fillStyle=i,r.fillRect(0,0,256,1);var s=r.getImageData(0,0,256,1).data,l=Zs(r,s);return n=null,r=null,l}function h_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");t.width=256,t.height=1;var r=n.createImageData(256,1);return r.data.fill(0),e.positions.forEach(function(i,a){var o=tt(e.colors[a]);r.data[i*4+0]=o[0]*255,r.data[i*4+1]=o[1]*255,r.data[i*4+2]=o[2]*255,r.data[i*4+3]=o[3]*255}),t=null,n=null,r}function d_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");n.globalAlpha=1,t.width=256,t.height=1;for(var r=256/e.colors.length,i=0;i<e.colors.length;i++)n.beginPath(),n.lineWidth=2,n.strokeStyle=e.colors[i],n.moveTo(i*r,0),n.lineTo((i+1)*r,0),n.stroke();var a=n.getImageData(0,0,256,1).data,o=Zs(n,a);return t=null,n=null,o}function v_(e,t){var n=window.document.createElement("canvas"),r=n.getContext("2d");r.globalAlpha=1,n.width=256,n.height=1;var i=t[1]-t[0];e.positions.length-e.colors.length;for(var a=0;a<e.colors.length;a++)r.beginPath(),r.lineWidth=2,r.strokeStyle=e.colors[a],r.moveTo((e.positions[a]-t[0])/i*255,0),r.lineTo((e.positions[a+1]-t[0])/i*255,0),r.stroke();var o=r.getImageData(0,0,256,1).data,u=Zs(r,o);return n=null,r=null,u}function Zs(e,t){for(var n=e.createImageData(256,1),r=0;r<n.data.length;r+=4)n.data[r+0]=t[r+0],n.data[r+1]=t[r+1],n.data[r+2]=t[r+2],n.data[r+3]=t[r+3];return n}function qs(e){switch(e.type){case"cat":return[0,255];default:return[0,1]}}var rr={BACK:1029,FRONT:1028};function Qs(e){switch(e){case"GAODE1.x":return rr.BACK;case"GAODE2.x":return rr.BACK;case"MAPBOX":return rr.FRONT;case"SIMPLE":return rr.FRONT;case"GLOBEL":return rr.BACK;case"DEBAULT":return rr.FRONT;default:return rr.FRONT}}function Nu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p_(e){if(Array.isArray(e))return Nu(e)}function g_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A0(e,t){if(e){if(typeof e=="string")return Nu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nu(e,t)}}function m_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(e){return p_(e)||g_(e)||A0(e)||m_()}function y_(e){if(Array.isArray(e))return e}function __(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,u=[],s=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(c){l=!0,i=c}finally{try{if(!s&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return u}}function x_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){return y_(e)||__(e,t)||A0(e,t)||x_()}var Ke={isNil:Jm,merge:Km,throttle:ey,isString:ty,debounce:ny,pull:ry,isTypedArray:iy,isPlainObject:ay,isNumber:oy,isBoolean:uy,isEqual:sy,cloneDeep:ly,uniq:cy,clamp:fy,upperFirst:hy,get:dy,mergeWith:vy,isFunction:py,isObject:gy,isUndefined:yy,camelCase:_y};function E0(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function C0(e){return E0(e).split(/\s+/)}function b_(e){var t,n=(t=document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n)return e[0];for(var r in e)if(e[r]&&e[r]in n)return e[r];return e[0]}function Zn(e,t,n){var r=window.document.createElement(e);return t&&(r.className=t||""),n&&n.appendChild(r),r}function Ya(e){var t=e.parentNode;t&&t.removeChild(e)}function Ri(e,t){if(e.classList!==void 0)for(var n=C0(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!S_(e,t)){var a=Js(e);w0(e,(a?a+" ":"")+t)}}function Bu(e,t){if(e.classList!==void 0){var n=C0(t);n.forEach(function(r){e.classList.remove(r)})}else w0(e,E0((" "+Js(e)+" ").replace(" "+t+" "," ")))}function S_(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=Js(e);return n.length>0&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(n)}function w0(e,t){e instanceof HTMLElement?e.className=t:e.className.baseVal=t}function Js(e){return e instanceof SVGElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}b_(["transform","WebkitTransform"]);function A_(){var e,t=window.document.querySelector('meta[name="viewport"]');if(!t)return 1;var n=(e=t.content)===null||e===void 0?void 0:e.split(","),r=n.find(function(i){var a=i.split("="),o=Pe(a,1),u=o[0];return u==="initial-scale"});return r?r.split("=")[1]*1:1}var lt=A_()<1?1:window.devicePixelRatio;function E_(e,t){e.setAttribute("style","".concat(e.style.cssText).concat(t))}function C_(e){return Object.entries(e).map(function(t){var n=Pe(t,2),r=n[0],i=n[1];return"".concat(r,": ").concat(i)}).join(";")}function w_(e,t){return{left:e.left-t.left,top:e.top-t.top,right:t.left+t.width-e.left-e.width,bottom:t.top+t.height-e.top-e.height}}function T_(e){e.innerHTML=""}function M_(e,t){for(var n=Array.isArray(t)?t:[t],r=e;r instanceof Element&&r!==window.document.body;){var i,a;if(n.find(function(o){var u;return(u=r)===null||u===void 0?void 0:u.matches(o)}))return r;r=(i=(a=r)===null||a===void 0?void 0:a.parentElement)!==null&&i!==void 0?i:null}}var Yo;function k_(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap}var Uu=(Yo=navigator)===null||Yo===void 0?void 0:Yo.userAgent,I_=!!Uu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);Uu.indexOf("Android")>-1||Uu.indexOf("Adr")>-1;function Xo(e){return typeof e=="number"}var ic=2*Math.PI*6378137/2;function L_(e,t){var n=Pe(t,4),r=n[0],i=n[1],a=n[2],o=n[3];return e.lng>r&&e.lng<=a&&e.lat>i&&e.lat<=o}function R_(e){var t=[1/0,1/0,-1/0,-1/0];return e.forEach(function(n){var r=n.coordinates;T0(t,r)}),t}function T0(e,t){return Array.isArray(t[0])?t.forEach(function(n){T0(e,n)}):(e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])),e}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{enable:!0,decimal:1};e=O_(e,t);var r=e[0],i=e[1],a=r*ic/180,o=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return o=o*ic/180,n.enable&&(a=Number(a.toFixed(n.decimal)),o=Number(o.toFixed(n.decimal))),e.length===3?[a,o,e[2]]:[a,o]}function P_(e){if(e==null)throw new Error("lng is required");return(e>180||e<-180)&&(e=e%360,e>180&&(e=-360+e),e<-180&&(e=360+e),e===0&&(e=0)),e}function F_(e){if(e==null)throw new Error("lat is required");return(e>90||e<-90)&&(e=e%180,e>90&&(e=-180+e),e<-90&&(e=180+e),e===0&&(e=0)),e}function O_(e,t){if(t===!1)return e;var n=P_(e[0]),r=F_(e[1]);return r>85&&(r=85),r<-85&&(r=-85),e.length===3?[n,r,e[2]]:[n,r]}function ht(e){var t=85.0511287798,n=Math.max(Math.min(t,e[1]),-t),r=256<<20,i=Math.PI/180,a=e[0]*i,o=n*i;o=Math.log(Math.tan(Math.PI/4+o/2));var u=.5/Math.PI,s=.5,l=-.5/Math.PI;return i=.5,a=r*(u*a+s),o=r*(l*o+i),[Math.floor(a),Math.floor(o)]}function Ks(e,t){var n=Math.abs(e[1][1]-e[0][1])*t,r=Math.abs(e[1][0]-e[0][0])*t;return[[e[0][0]-r,e[0][1]-n],[e[1][0]+r,e[1][1]+n]]}function M0(e,t){return e[0][0]<=t[0][0]&&e[0][1]<=t[0][1]&&e[1][0]>=t[1][0]&&e[1][1]>=t[1][1]}function Xa(e){return[[e[0],e[1]],[e[2],e[3]]]}function D_(e){var t=N_(e,[0,0]);return[e[0]/t,e[1]/t]}function N_(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Tn(e){if(Xo(e[0]))return e;if(Xo(e[0][0]))throw new Error("当前数据不支持标注");if(Xo(e[0][0][0])){var t=e,n=0,r=0,i=0;return t.forEach(function(a){a.forEach(function(o){n+=o[0],r+=o[1],i++})}),[n/i,r/i,0]}else throw new Error("当前数据不支持标注")}function B_(e){for(var t=e[0],n=e[1],r=e[0],i=e[1],a=0,o=0,u=0,s=0;s<e.length;s+=2){var l=e[s],c=e[s+1];l&&c&&(t=Math.max(l,t),n=Math.max(c,n),r=Math.min(l,r),i=Math.min(c,i),a+=l,o+=c,u++)}return{center:[a/u,o/u],radius:Math.sqrt(Math.pow(t-r,2)+Math.pow(n-i,2))/2}}function U_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e==="x"?t:t&3|8;return n.toString(16)})}var z_=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:50,n=arguments.length>1?arguments[1]:void 0;oe(this,e),this.limit=t,this.destroy=n||this.defaultDestroy,this.order=[],this.clear()}return ae(e,[{key:"clear",value:function(){var n=this;this.order.forEach(function(r){n.delete(r)}),this.cache={},this.order=[]}},{key:"get",value:function(n){var r=this.cache[n];return r&&(this.deleteOrder(n),this.appendOrder(n)),r}},{key:"set",value:function(n,r){this.cache[n]?(this.delete(n),this.cache[n]=r,this.appendOrder(n)):(Object.keys(this.cache).length===this.limit&&this.delete(this.order[0]),this.cache[n]=r,this.appendOrder(n))}},{key:"delete",value:function(n){var r=this.cache[n];r&&(this.deleteCache(n),this.deleteOrder(n),this.destroy(r,n))}},{key:"deleteCache",value:function(n){delete this.cache[n]}},{key:"deleteOrder",value:function(n){var r=this.order.findIndex(function(i){return i===n});r>=0&&this.order.splice(r,1)}},{key:"appendOrder",value:function(n){this.order.push(n)}},{key:"defaultDestroy",value:function(n,r){return null}}]),e}();function $_(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t*1}function V_(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]);return t*1}function k0(e){if(e.length===0)return 0;for(var t=e[0]*1,n=1;n<e.length;n++)t+=e[n]*1;return t}function j_(e){if(e.length===0)throw new Error("mean requires at least one data point");return k0(e)/e.length}function H_(e){if(e.length===0)throw new Error("mean requires at least one data point");if(e.length<3)return e[0];e.sort();for(var t=e[0],n=NaN,r=0,i=1,a=1;a<e.length+1;a++)e[a]!==t?(i>r&&(r=i,n=t),i=1,t=e[a]):i++;return n*1}var I0={min:V_,max:$_,mean:j_,sum:k0,mode:H_};function L0(e,t){return e.map(function(n){return n[t]})}function ac(e,t,n,r,i,a,o){try{var u=e[a](o),s=u.value}catch(l){n(l);return}u.done?t(s):Promise.resolve(s).then(r,i)}function Y(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){ac(a,r,i,o,u,"next",s)}function u(s){ac(a,r,i,o,u,"throw",s)}o(void 0)})}}var R0={exports:{}},P0={exports:{}};(function(e){function t(n){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(P0);var G_=P0.exports;(function(e){var t=G_.default;function n(){e.exports=n=function(){return i},e.exports.__esModule=!0,e.exports.default=e.exports;var r,i={},a=Object.prototype,o=a.hasOwnProperty,u=Object.defineProperty||function(H,V,Z){H[V]=Z.value},s=typeof Symbol=="function"?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(H,V,Z){return Object.defineProperty(H,V,{value:Z,enumerable:!0,configurable:!0,writable:!0}),H[V]}try{h({},"")}catch{h=function(Z,X,he){return Z[X]=he}}function d(H,V,Z,X){var he=V&&V.prototype instanceof x?V:x,le=Object.create(he.prototype),de=new ve(X||[]);return u(le,"_invoke",{value:P(H,Z,de)}),le}function v(H,V,Z){try{return{type:"normal",arg:H.call(V,Z)}}catch(X){return{type:"throw",arg:X}}}i.wrap=d;var p="suspendedStart",g="suspendedYield",m="executing",_="completed",y={};function x(){}function b(){}function M(){}var T={};h(T,l,function(){return this});var D=Object.getPrototypeOf,U=D&&D(D(ye([])));U&&U!==a&&o.call(U,l)&&(T=U);var I=M.prototype=x.prototype=Object.create(T);function w(H){["next","throw","return"].forEach(function(V){h(H,V,function(Z){return this._invoke(V,Z)})})}function k(H,V){function Z(he,le,de,Ve){var Oe=v(H[he],H,le);if(Oe.type!=="throw"){var rt=Oe.arg,$=rt.value;return $&&t($)=="object"&&o.call($,"__await")?V.resolve($.__await).then(function(ue){Z("next",ue,de,Ve)},function(ue){Z("throw",ue,de,Ve)}):V.resolve($).then(function(ue){rt.value=ue,de(rt)},function(ue){return Z("throw",ue,de,Ve)})}Ve(Oe.arg)}var X;u(this,"_invoke",{value:function(le,de){function Ve(){return new V(function(Oe,rt){Z(le,de,Oe,rt)})}return X=X?X.then(Ve,Ve):Ve()}})}function P(H,V,Z){var X=p;return function(he,le){if(X===m)throw new Error("Generator is already running");if(X===_){if(he==="throw")throw le;return{value:r,done:!0}}for(Z.method=he,Z.arg=le;;){var de=Z.delegate;if(de){var Ve=B(de,Z);if(Ve){if(Ve===y)continue;return Ve}}if(Z.method==="next")Z.sent=Z._sent=Z.arg;else if(Z.method==="throw"){if(X===p)throw X=_,Z.arg;Z.dispatchException(Z.arg)}else Z.method==="return"&&Z.abrupt("return",Z.arg);X=m;var Oe=v(H,V,Z);if(Oe.type==="normal"){if(X=Z.done?_:g,Oe.arg===y)continue;return{value:Oe.arg,done:Z.done}}Oe.type==="throw"&&(X=_,Z.method="throw",Z.arg=Oe.arg)}}}function B(H,V){var Z=V.method,X=H.iterator[Z];if(X===r)return V.delegate=null,Z==="throw"&&H.iterator.return&&(V.method="return",V.arg=r,B(H,V),V.method==="throw")||Z!=="return"&&(V.method="throw",V.arg=new TypeError("The iterator does not provide a '"+Z+"' method")),y;var he=v(X,H.iterator,V.arg);if(he.type==="throw")return V.method="throw",V.arg=he.arg,V.delegate=null,y;var le=he.arg;return le?le.done?(V[H.resultName]=le.value,V.next=H.nextLoc,V.method!=="return"&&(V.method="next",V.arg=r),V.delegate=null,y):le:(V.method="throw",V.arg=new TypeError("iterator result is not an object"),V.delegate=null,y)}function K(H){var V={tryLoc:H[0]};1 in H&&(V.catchLoc=H[1]),2 in H&&(V.finallyLoc=H[2],V.afterLoc=H[3]),this.tryEntries.push(V)}function ce(H){var V=H.completion||{};V.type="normal",delete V.arg,H.completion=V}function ve(H){this.tryEntries=[{tryLoc:"root"}],H.forEach(K,this),this.reset(!0)}function ye(H){if(H||H===""){var V=H[l];if(V)return V.call(H);if(typeof H.next=="function")return H;if(!isNaN(H.length)){var Z=-1,X=function he(){for(;++Z<H.length;)if(o.call(H,Z))return he.value=H[Z],he.done=!1,he;return he.value=r,he.done=!0,he};return X.next=X}}throw new TypeError(t(H)+" is not iterable")}return b.prototype=M,u(I,"constructor",{value:M,configurable:!0}),u(M,"constructor",{value:b,configurable:!0}),b.displayName=h(M,f,"GeneratorFunction"),i.isGeneratorFunction=function(H){var V=typeof H=="function"&&H.constructor;return!!V&&(V===b||(V.displayName||V.name)==="GeneratorFunction")},i.mark=function(H){return Object.setPrototypeOf?Object.setPrototypeOf(H,M):(H.__proto__=M,h(H,f,"GeneratorFunction")),H.prototype=Object.create(I),H},i.awrap=function(H){return{__await:H}},w(k.prototype),h(k.prototype,c,function(){return this}),i.AsyncIterator=k,i.async=function(H,V,Z,X,he){he===void 0&&(he=Promise);var le=new k(d(H,V,Z,X),he);return i.isGeneratorFunction(V)?le:le.next().then(function(de){return de.done?de.value:le.next()})},w(I),h(I,f,"Generator"),h(I,l,function(){return this}),h(I,"toString",function(){return"[object Generator]"}),i.keys=function(H){var V=Object(H),Z=[];for(var X in V)Z.push(X);return Z.reverse(),function he(){for(;Z.length;){var le=Z.pop();if(le in V)return he.value=le,he.done=!1,he}return he.done=!0,he}},i.values=ye,ve.prototype={constructor:ve,reset:function(V){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(ce),!V)for(var Z in this)Z.charAt(0)==="t"&&o.call(this,Z)&&!isNaN(+Z.slice(1))&&(this[Z]=r)},stop:function(){this.done=!0;var V=this.tryEntries[0].completion;if(V.type==="throw")throw V.arg;return this.rval},dispatchException:function(V){if(this.done)throw V;var Z=this;function X(rt,$){return de.type="throw",de.arg=V,Z.next=rt,$&&(Z.method="next",Z.arg=r),!!$}for(var he=this.tryEntries.length-1;he>=0;--he){var le=this.tryEntries[he],de=le.completion;if(le.tryLoc==="root")return X("end");if(le.tryLoc<=this.prev){var Ve=o.call(le,"catchLoc"),Oe=o.call(le,"finallyLoc");if(Ve&&Oe){if(this.prev<le.catchLoc)return X(le.catchLoc,!0);if(this.prev<le.finallyLoc)return X(le.finallyLoc)}else if(Ve){if(this.prev<le.catchLoc)return X(le.catchLoc,!0)}else{if(!Oe)throw new Error("try statement without catch or finally");if(this.prev<le.finallyLoc)return X(le.finallyLoc)}}}},abrupt:function(V,Z){for(var X=this.tryEntries.length-1;X>=0;--X){var he=this.tryEntries[X];if(he.tryLoc<=this.prev&&o.call(he,"finallyLoc")&&this.prev<he.finallyLoc){var le=he;break}}le&&(V==="break"||V==="continue")&&le.tryLoc<=Z&&Z<=le.finallyLoc&&(le=null);var de=le?le.completion:{};return de.type=V,de.arg=Z,le?(this.method="next",this.next=le.finallyLoc,y):this.complete(de)},complete:function(V,Z){if(V.type==="throw")throw V.arg;return V.type==="break"||V.type==="continue"?this.next=V.arg:V.type==="return"?(this.rval=this.arg=V.arg,this.method="return",this.next="end"):V.type==="normal"&&Z&&(this.next=Z),y},finish:function(V){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var X=this.tryEntries[Z];if(X.finallyLoc===V)return this.complete(X.completion,X.afterLoc),ce(X),y}},catch:function(V){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var X=this.tryEntries[Z];if(X.tryLoc===V){var he=X.completion;if(he.type==="throw"){var le=he.arg;ce(X)}return le}}throw new Error("illegal catch attempt")},delegateYield:function(V,Z,X){return this.delegate={iterator:ye(V),resultName:Z,nextLoc:X},this.method==="next"&&(this.arg=r),y}},i}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(R0);var W_=R0.exports,Oa=W_(),Y_=Oa;try{regeneratorRuntime=Oa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Oa:Function("r","regeneratorRuntime = r")(Oa)}const C=Rn(Y_);function X_(e,t){t===void 0&&(t={});var n=Number(e[0]),r=Number(e[1]),i=Number(e[2]),a=Number(e[3]);if(e.length===6)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var o=[n,r],u=[n,a],s=[i,a],l=[i,r];return Hs([[o,l,s,u,o]],t.properties,{bbox:e,id:t.id})}var F0={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(s,l,c){this.fn=s,this.context=l,this.once=c||!1}function a(s,l,c,f,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,f||s,h),v=n?n+l:l;return s._events[v]?s._events[v].fn?s._events[v]=[s._events[v],d]:s._events[v].push(d):(s._events[v]=d,s._eventsCount++),s}function o(s,l){--s._eventsCount===0?s._events=new r:delete s._events[l]}function u(){this._events=new r,this._eventsCount=0}u.prototype.eventNames=function(){var l=[],c,f;if(this._eventsCount===0)return l;for(f in c=this._events)t.call(c,f)&&l.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},u.prototype.listeners=function(l){var c=n?n+l:l,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,d=f.length,v=new Array(d);h<d;h++)v[h]=f[h].fn;return v},u.prototype.listenerCount=function(l){var c=n?n+l:l,f=this._events[c];return f?f.fn?1:f.length:0},u.prototype.emit=function(l,c,f,h,d,v){var p=n?n+l:l;if(!this._events[p])return!1;var g=this._events[p],m=arguments.length,_,y;if(g.fn){switch(g.once&&this.removeListener(l,g.fn,void 0,!0),m){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,f),!0;case 4:return g.fn.call(g.context,c,f,h),!0;case 5:return g.fn.call(g.context,c,f,h,d),!0;case 6:return g.fn.call(g.context,c,f,h,d,v),!0}for(y=1,_=new Array(m-1);y<m;y++)_[y-1]=arguments[y];g.fn.apply(g.context,_)}else{var x=g.length,b;for(y=0;y<x;y++)switch(g[y].once&&this.removeListener(l,g[y].fn,void 0,!0),m){case 1:g[y].fn.call(g[y].context);break;case 2:g[y].fn.call(g[y].context,c);break;case 3:g[y].fn.call(g[y].context,c,f);break;case 4:g[y].fn.call(g[y].context,c,f,h);break;default:if(!_)for(b=1,_=new Array(m-1);b<m;b++)_[b-1]=arguments[b];g[y].fn.apply(g[y].context,_)}}return!0},u.prototype.on=function(l,c,f){return a(this,l,c,f,!1)},u.prototype.once=function(l,c,f){return a(this,l,c,f,!0)},u.prototype.removeListener=function(l,c,f,h){var d=n?n+l:l;if(!this._events[d])return this;if(!c)return o(this,d),this;var v=this._events[d];if(v.fn)v.fn===c&&(!h||v.once)&&(!f||v.context===f)&&o(this,d);else{for(var p=0,g=[],m=v.length;p<m;p++)(v[p].fn!==c||h&&!v[p].once||f&&v[p].context!==f)&&g.push(v[p]);g.length?this._events[d]=g.length===1?g[0]:g:o(this,d)}return this},u.prototype.removeAllListeners=function(l){var c;return l?(c=n?n+l:l,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(F0);var Yt=F0.exports;const el=Rn(Yt);var Da=function(e){return e.Realtime="realtime",e.Overlap="overlap",e.Replace="replace",e}({}),tn=function(e){return e.Loading="Loading",e.Loaded="Loaded",e.Failure="Failure",e.Cancelled="Cancelled",e}({}),O0=0,oc=1,mo=2;function Z_(e){e.forEach(function(t){t.isCurrent&&(t.isVisible=t.isLoaded)})}function q_(e){e.forEach(function(t){t.properties.state=O0}),e.forEach(function(t){t.isCurrent&&!D0(t)&&tl(t)}),e.forEach(function(t){t.isVisible=!!(t.properties.state&mo)})}function Q_(e){e.forEach(function(n){n.properties.state=O0}),e.forEach(function(n){n.isCurrent&&D0(n)});var t=e.slice().sort(function(n,r){return n.z-r.z});t.forEach(function(n){n.isVisible=!!(n.properties.state&mo),n.children.length&&(n.isVisible||n.properties.state&oc)?n.children.forEach(function(r){r.properties.state=oc}):n.isCurrent&&tl(n)})}function D0(e){for(;e;){if(e.isLoaded)return e.properties.state|=mo,!0;e=e.parent}return!1}function tl(e){e.children.forEach(function(t){t.isLoaded?t.properties.state|=mo:tl(t)})}var ai,N0=[-1/0,-1/0,1/0,1/0],J_=.2,K_=5,e2=(ai={},S(ai,Da.Realtime,Z_),S(ai,Da.Overlap,q_),S(ai,Da.Replace,Q_),ai),t2=function(){};function zu(e,t,n){var r=Math.floor((e+180)/360*Math.pow(2,n)),i=Math.floor((1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,n));return[r,i]}function uc(e,t,n){var r=e/Math.pow(2,n)*360-180,i=Math.PI-2*Math.PI*t/Math.pow(2,n),a=180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)));return[r,a]}var B0=function(t,n,r){var i=uc(t,n,r),a=Pe(i,2),o=a[0],u=a[1],s=uc(t+1,n+1,r),l=Pe(s,2),c=l[0],f=l[1];return[o,f,c,u]};function n2(e){var t=e.zoom,n=e.latLonBounds,r=e.maxZoom,i=r===void 0?1/0:r,a=e.minZoom,o=a===void 0?0:a,u=e.zoomOffset,s=u===void 0?0:u,l=e.extent,c=l===void 0?N0:l,f=Math.ceil(t)+s;if(Number.isFinite(o)&&f<o)return[];Number.isFinite(i)&&f>i&&(f=i);for(var h=Pe(n,4),d=h[0],v=h[1],p=h[2],g=h[3],m=[Math.max(d,c[0]),Math.max(v,c[1]),Math.min(p,c[2]),Math.min(g,c[3])],_=[],y=zu(m[0],m[1],f),x=Pe(y,2),b=x[0],M=x[1],T=zu(m[2],m[3],f),D=Pe(T,2),U=D[0],I=D[1],w=b;w<=U;w++)for(var k=I;k<=M;k++)_.push({x:w,y:k,z:f});var P=(U+b)/2,B=(M+I)/2,K=function(ve,ye){return Math.abs(ve-P)+Math.abs(ye-B)};return _.sort(function(ce,ve){return K(ce.x,ce.y)-K(ve.x,ve.y)}),_}var r2=function(t,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a=Math.pow(2,r),o=a-1,u=a,s=t,l=n;return i&&(s<0?s=s+u:s>o&&(s=s%u)),{warpX:s,warpY:l}};function i2(e){var t=a2();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function a2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var o2=function(e){Ee(n,e);var t=i2(n);function n(r){var i;oe(this,n),i=t.call(this),S(R(i),"tileSize",256),S(R(i),"isVisible",!1),S(R(i),"isCurrent",!1),S(R(i),"isVisibleChange",!1),S(R(i),"loadedLayers",0),S(R(i),"isLayerLoaded",!1),S(R(i),"isLoad",!1),S(R(i),"isChildLoad",!1),S(R(i),"parent",null),S(R(i),"children",[]),S(R(i),"data",null),S(R(i),"properties",{}),S(R(i),"loadDataId",0);var a=r.x,o=r.y,u=r.z,s=r.tileSize,l=r.warp,c=l===void 0?!0:l;return i.x=a,i.y=o,i.z=u,i.warp=c||!0,i.tileSize=s,i}return ae(n,[{key:"isLoading",get:function(){return this.loadStatus===tn.Loading}},{key:"isLoaded",get:function(){return this.loadStatus===tn.Loaded}},{key:"isFailure",get:function(){return this.loadStatus===tn.Failure}},{key:"setTileLayerLoaded",value:function(){this.isLayerLoaded=!0}},{key:"isCancelled",get:function(){return this.loadStatus===tn.Cancelled}},{key:"isDone",get:function(){return[tn.Loaded,tn.Cancelled,tn.Failure].includes(this.loadStatus)}},{key:"bounds",get:function(){return B0(this.x,this.y,this.z)}},{key:"bboxPolygon",get:function(){var i=Pe(this.bounds,4),a=i[0],o=i[1],u=i[2],s=i[3],l=[(u-a)/2,(s-o)/2],c=X_(this.bounds,{properties:{key:this.key,id:this.key,bbox:this.bounds,center:l,meta:`
      `.concat(this.key,`
      `)}});return c}},{key:"key",get:function(){var i="".concat(this.x,"_").concat(this.y,"_").concat(this.z);return i}},{key:"layerLoad",value:function(){this.loadedLayers++,this.emit("layerLoaded")}},{key:"loadData",value:function(){var r=Y(C.mark(function a(o){var u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,T;return C.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return u=o.getData,s=o.onLoad,l=o.onError,this.loadDataId++,c=this.loadDataId,this.isLoading&&this.abortLoad(),this.abortController=new AbortController,this.loadStatus=tn.Loading,f=null,U.prev=7,d=this.x,v=this.y,p=this.z,g=this.bounds,m=this.tileSize,_=this.warp,y=r2(d,v,p,_),x=y.warpX,b=y.warpY,M=this.abortController.signal,T={x,y:b,z:p,bounds:g,tileSize:m,signal:M,warp:_},U.next=14,u(T,this);case 14:f=U.sent,U.next=20;break;case 17:U.prev=17,U.t0=U.catch(7),h=U.t0;case 20:if(c===this.loadDataId){U.next=22;break}return U.abrupt("return");case 22:if(!(this.isCancelled&&!f)){U.next=24;break}return U.abrupt("return");case 24:if(!(h||!f)){U.next=28;break}return this.loadStatus=tn.Failure,l(h,this),U.abrupt("return");case 28:this.loadStatus=tn.Loaded,this.data=f,s(this);case 31:case"end":return U.stop()}},a,this,[[7,17]])}));function i(a){return r.apply(this,arguments)}return i}()},{key:"reloadData",value:function(i){this.isLoading&&this.abortLoad(),this.loadData(i)}},{key:"abortLoad",value:function(){this.isLoaded||this.isCancelled||(this.loadStatus=tn.Cancelled,this.abortController.abort(),this.xhrCancel&&this.xhrCancel())}}]),n}(Yt.EventEmitter),u2=function(t,n){var r=Xa(t),i=Ks(r,n),a=360*3-180,o=85.0511287798065,u=[Math.max(i[0][0],-a),Math.max(i[0][1],-o),Math.min(i[1][0],a),Math.min(i[1][1],o)];return u},s2=function(t,n){var r=Xa(t),i=Xa(n),a=M0(r,i);return a};function Dn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l2(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function l2(e,t){if(e){if(typeof e=="string")return sc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sc(e,t)}}function sc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c2(e){var t=f2();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function f2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var h2=Ke.throttle,br=function(e){return e.TilesLoadStart="tiles-load-start",e.TileLoaded="tile-loaded",e.TileError="tile-error",e.TileUnload="tile-unload",e.TileUpdate="tile-update",e.TilesLoadFinished="tiles-load-finished",e}({}),d2=function(e){Ee(n,e);var t=c2(n);function n(r){var i;return oe(this,n),i=t.call(this),S(R(i),"currentTiles",[]),S(R(i),"cacheTiles",new Map),S(R(i),"throttleUpdate",h2(function(a,o){i.update(a,o)},16)),S(R(i),"onTileLoad",function(a){i.emit(br.TileLoaded,a),i.updateTileVisible(),i.loadFinished()}),S(R(i),"onTileError",function(a,o){i.emit(br.TileError,{error:a,tile:o}),i.updateTileVisible(),i.loadFinished()}),S(R(i),"onTileUnload",function(a){i.emit(br.TileUnload,a),i.loadFinished()}),i.options={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,extent:N0,getTileData:t2,warp:!0,updateStrategy:Da.Replace},i.updateOptions(r),i}return ae(n,[{key:"isLoaded",get:function(){return this.currentTiles.every(function(i){return i.isDone})}},{key:"tiles",get:function(){var i=Array.from(this.cacheTiles.values()).sort(function(a,o){return a.z-o.z});return i}},{key:"updateOptions",value:function(i){var a=i.minZoom===void 0?this.options.minZoom:Math.ceil(i.minZoom),o=i.maxZoom===void 0?this.options.maxZoom:Math.floor(i.maxZoom);this.options=z(z(z({},this.options),i),{},{minZoom:a,maxZoom:o})}},{key:"update",value:function(i,a){var o=this,u=Math.max(0,Math.ceil(i));if(!(this.lastViewStates&&this.lastViewStates.zoom===u&&s2(this.lastViewStates.latLonBoundsBuffer,a))){var s=u2(a,J_);this.lastViewStates={zoom:u,latLonBounds:a,latLonBoundsBuffer:s},this.currentZoom=u;var l=!1,c=this.getTileIndices(u,s).filter(function(f){return o.options.warp||f.x>=0&&f.x<Math.pow(2,u)});this.emit(br.TilesLoadStart),this.currentTiles=c.map(function(f){var h=f.x,d=f.y,v=f.z,p=o.getTile(h,d,v);if(p){var g,m,_=((g=p)===null||g===void 0?void 0:g.isFailure)||((m=p)===null||m===void 0?void 0:m.isCancelled);return _&&p.loadData({getData:o.options.getTileData,onLoad:o.onTileLoad,onError:o.onTileError}),p}return p=o.createTile(h,d,v),l=!0,p}),l&&this.resizeCacheTiles(),this.updateTileVisible(),this.pruneRequests()}}},{key:"reloadAll",value:function(){var i=Dn(this.cacheTiles),a;try{for(i.s();!(a=i.n()).done;){var o=Pe(a.value,2),u=o[0],s=o[1];if(!this.currentTiles.includes(s)){this.cacheTiles.delete(u),this.onTileUnload(s);return}this.onTileUnload(s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError})}}catch(l){i.e(l)}finally{i.f()}}},{key:"reloadTileById",value:function(i,a,o){var u=this.cacheTiles.get("".concat(a,",").concat(o,",").concat(i));u&&(this.onTileUnload(u),u.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}))}},{key:"reloadTileByLnglat",value:function(i,a,o){var u=this.getTileByLngLat(i,a,o);u&&this.reloadTileById(u.z,u.x,u.y)}},{key:"reloadTileByExtent",value:function(i,a){var o=this,u=this.getTileIndices(a,i);u.forEach(function(s){o.reloadTileById(s.z,s.x,s.y)})}},{key:"pruneRequests",value:function(){var i=[],a=Dn(this.cacheTiles.values()),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;u.isLoading&&!u.isCurrent&&!u.isVisible&&i.push(u)}}catch(l){a.e(l)}finally{a.f()}for(;i.length>0;){var s=i.shift();s.abortLoad()}}},{key:"getTileByLngLat",value:function(i,a,o){var u=this.options.zoomOffset,s=Math.ceil(o)+u,l=zu(i,a,s),c=this.tiles.filter(function(f){return f.key==="".concat(l[0],"_").concat(l[1],"_").concat(s)});return c[0]}},{key:"getTileExtent",value:function(i,a){return this.getTileIndices(a,i)}},{key:"getTileByZXY",value:function(i,a,o){var u=this.tiles.filter(function(s){return s.key==="".concat(a,"_").concat(o,"_").concat(i)});return u[0]}},{key:"clear",value:function(){var i=Dn(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.isLoading?o.abortLoad():this.onTileUnload(o)}}catch(u){i.e(u)}finally{i.f()}this.lastViewStates=void 0,this.cacheTiles.clear(),this.currentTiles=[]}},{key:"destroy",value:function(){this.clear(),this.removeAllListeners()}},{key:"updateTileVisible",value:function(){var i=this.options.updateStrategy,a=new Map,o=Dn(this.cacheTiles.values()),u;try{for(o.s();!(u=o.n()).done;){var s=u.value;a.set(s.key,s.isVisible),s.isCurrent=!1,s.isVisible=!1}}catch(v){o.e(v)}finally{o.f()}var l=Dn(this.currentTiles),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.isCurrent=!0,f.isVisible=!0}}catch(v){l.e(v)}finally{l.f()}var h=Array.from(this.cacheTiles.values());typeof i=="function"?i(h):e2[i](h);var d=!1;Array.from(this.cacheTiles.values()).forEach(function(v){v.isVisible!==a.get(v.key)?(v.isVisibleChange=!0,d=!0):v.isVisibleChange=!1}),d&&this.emit(br.TileUpdate)}},{key:"getTileIndices",value:function(i,a){var o=this.options,u=o.tileSize,s=o.extent,l=o.zoomOffset,c=Math.floor(this.options.maxZoom),f=Math.ceil(this.options.minZoom),h=n2({maxZoom:c,minZoom:f,zoomOffset:l,tileSize:u,zoom:i,latLonBounds:a,extent:s});return h}},{key:"getTileId",value:function(i,a,o){var u="".concat(i,",").concat(a,",").concat(o);return u}},{key:"loadFinished",value:function(){var i=!this.currentTiles.some(function(a){return!a.isDone});return i&&this.emit(br.TilesLoadFinished),i}},{key:"getTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=this.cacheTiles.get(u);return s}},{key:"createTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=new o2({x:i,y:a,z:o,tileSize:this.options.tileSize,warp:this.options.warp});return this.cacheTiles.set(u,s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}),s}},{key:"resizeCacheTiles",value:function(){var i=K_*this.currentTiles.length,a=this.cacheTiles.size>i;if(a){var o=Dn(this.cacheTiles),u;try{for(o.s();!(u=o.n()).done;){var s=Pe(u.value,2),l=s[0],c=s[1];if(!c.isVisible&&!this.currentTiles.includes(c)&&(this.cacheTiles.delete(l),this.onTileUnload(c)),this.cacheTiles.size<=i)break}}catch(f){o.e(f)}finally{o.f()}}this.rebuildTileTree()}},{key:"rebuildTileTree",value:function(){var i=Dn(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.parent=null,o.children.length=0}}catch(f){i.e(f)}finally{i.f()}var u=Dn(this.cacheTiles.values()),s;try{for(u.s();!(s=u.n()).done;){var l=s.value,c=this.getNearestAncestor(l.x,l.y,l.z);l.parent=c,c!=null&&c.children&&c.children.push(l)}}catch(f){u.e(f)}finally{u.f()}}},{key:"getNearestAncestor",value:function(i,a,o){for(;o>this.options.minZoom;){i=Math.floor(i/2),a=Math.floor(a/2),o=o-1;var u=this.getTile(i,a,o);if(u)return u}return null}}]),n}(el);function U0(e){var t=[],n=/\{([a-z])-([a-z])\}/.exec(e);if(n){var r=n[1].charCodeAt(0),i=n[2].charCodeAt(0),a;for(a=r;a<=i;++a)t.push(e.replace(n[0],String.fromCharCode(a)));return t}if(n=/\{(\d+)-(\d+)\}/.exec(e),n){for(var o=parseInt(n[2],10),u=parseInt(n[1],10);u<=o;u++)t.push(e.replace(n[0],u.toString()));return t}return t.push(e),t}function Br(e,t){if(!e||!e.length)throw new Error("url is not allowed to be empty");var n=t.x,r=t.y,i=t.z,a=U0(e),o=Math.abs(n+r)%a.length,u=Gs(a[o])?"".concat(a[o],"/{z}/{x}/{y}"):a[o];return u.replace(/\{x\}/g,n.toString()).replace(/\{y\}/g,r.toString()).replace(/\{z\}/g,i.toString()).replace(/\{bbox\}/g,B0(n,r,i).join(",")).replace(/\{-y\}/g,(Math.pow(2,i)-r-1).toString())}function v2(e,t){var n=t.x,r=t.y,i=t.z,a=t.layer,o=t.version,u=o===void 0?"1.0.0":o,s=t.style,l=s===void 0?"default":s,c=t.format,f=t.service,h=f===void 0?"WMTS":f,d=t.tileMatrixset,v=U0(e),p=Math.abs(n+r)%v.length,g="".concat(v[p],"&SERVICE=").concat(h,"&REQUEST=GetTile&VERSION=").concat(u,"&LAYER=").concat(a,"&STYLE=").concat(l,"&TILEMATRIXSET=").concat(d,"&FORMAT=").concat(c,"&TILECOL=").concat(n,"&TILEROW=").concat(r,"&TILEMATRIX=").concat(i);return g}function $u(e,t){if(!e)throw new Error(t||"web worker helper assertion failed.")}var qo=new Map;function p2(e){$u(e.source&&!e.url||!e.source&&e.url);var t=qo.get(e.source||e.url);return t||(e.url&&(t=g2(e.url),qo.set(e.url,t)),e.source&&(t=z0(e.source),qo.set(e.source,t))),$u(t),t}function g2(e){if(!e.startsWith("http"))return e;var t=m2(e);return z0(t)}function z0(e){var t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function m2(e){return`try {
  importScripts('`+e+`');
} catch (error) {
  console.error(error);
  throw error;
}`}function nl(e,t,n){t===void 0&&(t=!0);var r=n||new Set;if(e){if(lc(e))r.add(e);else if(lc(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)){if(t&&typeof e=="object")for(var i in e)nl(e[i],t,r)}}return n===void 0?Array.from(r):[]}function lc(e){return e?e instanceof ArrayBuffer||typeof MessagePort<"u"&&e instanceof MessagePort||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas:!1}var Qo=function(){};(function(){function e(t){this.terminated=!1,this.loadableURL="";var n=t.name,r=t.source,i=t.url;$u(r||i),this.name=n,this.source=r,this.url=i,this.onMessage=Qo,this.onError=function(a){},this.worker=this.createBrowserWorker()}return e.isSupported=function(){return typeof Worker<"u"},e.prototype.destroy=function(){this.onMessage=Qo,this.onError=Qo,this.worker.terminate(),this.terminated=!0},Object.defineProperty(e.prototype,"isRunning",{get:function(){return!!this.onMessage},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(t,n){n=n||nl(t),this.worker.postMessage(t,n)},e.prototype.getErrorFromErrorEvent=function(t){var n="Failed to load ";return n+="worker "+this.name+" from "+this.url+". ",t.message&&(n+=t.message+" in "),t.lineno&&(n+=":"+t.lineno+":"+t.colno),new Error(n)},e.prototype.createBrowserWorker=function(){var t=this;this.loadableURL=p2({source:this.source,url:this.url});var n=new Worker(this.loadableURL,{name:this.name});return n.onmessage=function(r){r.data?t.onMessage(r.data):t.onError(new Error("No data received"))},n.onerror=function(r){t.onError(t.getErrorFromErrorEvent(r)),t.terminated=!0},n.onmessageerror=function(r){},n},e})();var Jo=new Map;(function(){function e(){}return Object.defineProperty(e,"onmessage",{set:function(t){self.onmessage=function(n){if(cc(n)){var r=n.data,i=r.type,a=r.payload;t(i,a)}}},enumerable:!1,configurable:!0}),e.addEventListener=function(t){var n=Jo.get(t);n||(n=function(r){if(cc(r)){var i=r.data,a=i.type,o=i.payload;t(a,o)}}),self.addEventListener("message",n)},e.removeEventListener=function(t){var n=Jo.get(t);Jo.delete(t),self.removeEventListener("message",n)},e.postMessage=function(t,n){if(self){var r={source:"Worker thread",type:t,payload:n},i=nl(n);self.postMessage(r,i)}},e})();function cc(e){var t=e.type,n=e.data;return t==="message"&&n&&typeof n.source=="string"&&n.source==="Main thread"}function rl(e){var t=e.color;return!t||!t.length?[1,1,1,1]:t}function il(e,t,n){return n.length===2?[n[0],n[1],0]:[n[0],n[1],n[2]]}function al(e){var t=e.filter;return t?[1]:[0]}function ol(e,t){return[t]}var ul={exports:{}};ul.exports=yo;ul.exports.default=yo;function yo(e,t,n){n=n||2;var r=t&&t.length,i=r?t[0]*n:e.length,a=$0(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;var u,s,l,c,f,h,d;if(r&&(a=S2(e,t,a,n)),e.length>80*n){u=l=e[0],s=c=e[1];for(var v=n;v<i;v+=n)f=e[v],h=e[v+1],f<u&&(u=f),h<s&&(s=h),f>l&&(l=f),h>c&&(c=h);d=Math.max(l-u,c-s),d=d!==0?32767/d:0}return Ui(a,o,n,u,s,d,0),o}function $0(e,t,n,r,i){var a,o;if(i===Hu(e,t,n,r)>0)for(a=t;a<n;a+=r)o=fc(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=fc(a,e[a],e[a+1],o);return o&&_o(o,o.next)&&($i(o),o=o.next),o}function dr(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(_o(n,n.next)||ct(n.prev,n,n.next)===0)){if($i(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ui(e,t,n,r,i,a,o){if(e){!o&&a&&T2(e,r,i,a);for(var u=e,s,l;e.prev!==e.next;){if(s=e.prev,l=e.next,a?_2(e,r,i,a):y2(e)){t.push(s.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),$i(e),e=l.next,u=l.next;continue}if(e=l,e===u){o?o===1?(e=x2(dr(e),t,n),Ui(e,t,n,r,i,a,2)):o===2&&b2(e,t,n,r,i,a):Ui(dr(e),t,n,r,i,a,1);break}}}}function y2(e){var t=e.prev,n=e,r=e.next;if(ct(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,u=t.y,s=n.y,l=r.y,c=i<a?i<o?i:o:a<o?a:o,f=u<s?u<l?u:l:s<l?s:l,h=i>a?i>o?i:o:a>o?a:o,d=u>s?u>l?u:l:s>l?s:l,v=r.next;v!==t;){if(v.x>=c&&v.x<=h&&v.y>=f&&v.y<=d&&Or(i,u,a,s,o,l,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function _2(e,t,n,r){var i=e.prev,a=e,o=e.next;if(ct(i,a,o)>=0)return!1;for(var u=i.x,s=a.x,l=o.x,c=i.y,f=a.y,h=o.y,d=u<s?u<l?u:l:s<l?s:l,v=c<f?c<h?c:h:f<h?f:h,p=u>s?u>l?u:l:s>l?s:l,g=c>f?c>h?c:h:f>h?f:h,m=Vu(d,v,t,n,r),_=Vu(p,g,t,n,r),y=e.prevZ,x=e.nextZ;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&Or(u,c,s,f,l,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&Or(u,c,s,f,l,h,x.x,x.y)&&ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&Or(u,c,s,f,l,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&Or(u,c,s,f,l,h,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function x2(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!_o(i,a)&&V0(i,r,r.next,a)&&zi(i,a)&&zi(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),$i(r),$i(r.next),r=e=a),r=r.next}while(r!==e);return dr(r)}function b2(e,t,n,r,i,a){var o=e;do{for(var u=o.next.next;u!==o.prev;){if(o.i!==u.i&&I2(o,u)){var s=j0(o,u);o=dr(o,o.next),s=dr(s,s.next),Ui(o,t,n,r,i,a,0),Ui(s,t,n,r,i,a,0);return}u=u.next}o=o.next}while(o!==e)}function S2(e,t,n,r){var i=[],a,o,u,s,l;for(a=0,o=t.length;a<o;a++)u=t[a]*r,s=a<o-1?t[a+1]*r:e.length,l=$0(e,u,s,r,!1),l===l.next&&(l.steiner=!0),i.push(k2(l));for(i.sort(A2),a=0;a<i.length;a++)n=E2(i[a],n);return n}function A2(e,t){return e.x-t.x}function E2(e,t){var n=C2(e,t);if(!n)return t;var r=j0(n,e);return dr(r,r.next),dr(n,n.next)}function C2(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var u=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=r&&u>a&&(a=u,o=n.x<n.next.x?n:n.next,u===r))return o}n=n.next}while(n!==t);if(!o)return null;var s=o,l=o.x,c=o.y,f=1/0,h;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&Or(i<c?r:a,i,l,c,i<c?a:r,i,n.x,n.y)&&(h=Math.abs(i-n.y)/(r-n.x),zi(n,e)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&w2(o,n)))&&(o=n,f=h)),n=n.next;while(n!==s);return o}function w2(e,t){return ct(e.prev,e,t.prev)<0&&ct(t.next,e,e.next)<0}function T2(e,t,n,r){var i=e;do i.z===0&&(i.z=Vu(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,M2(i)}function M2(e){var t,n,r,i,a,o,u,s,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,u=0,t=0;t<l&&(u++,r=r.nextZ,!!r);t++);for(s=l;u>0||s>0&&r;)u!==0&&(s===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,u--):(i=r,r=r.nextZ,s--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Vu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function k2(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Or(e,t,n,r,i,a,o,u){return(i-o)*(t-u)>=(e-o)*(a-u)&&(e-o)*(r-u)>=(n-o)*(t-u)&&(n-o)*(a-u)>=(i-o)*(r-u)}function I2(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!L2(e,t)&&(zi(e,t)&&zi(t,e)&&R2(e,t)&&(ct(e.prev,e,t.prev)||ct(e,t.prev,t))||_o(e,t)&&ct(e.prev,e,e.next)>0&&ct(t.prev,t,t.next)>0)}function ct(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function _o(e,t){return e.x===t.x&&e.y===t.y}function V0(e,t,n,r){var i=Sa(ct(e,t,n)),a=Sa(ct(e,t,r)),o=Sa(ct(n,r,e)),u=Sa(ct(n,r,t));return!!(i!==a&&o!==u||i===0&&ba(e,n,t)||a===0&&ba(e,r,t)||o===0&&ba(n,e,r)||u===0&&ba(n,t,r))}function ba(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Sa(e){return e>0?1:e<0?-1:0}function L2(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&V0(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function zi(e,t){return ct(e.prev,e,e.next)<0?ct(e,t,e.next)>=0&&ct(e,e.prev,t)>=0:ct(e,t,e.prev)<0||ct(e,e.next,t)<0}function R2(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function j0(e,t){var n=new ju(e.i,e.x,e.y),r=new ju(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function fc(e,t,n,r){var i=new ju(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function $i(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ju(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}yo.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(Hu(e,0,a,n));if(i)for(var u=0,s=t.length;u<s;u++){var l=t[u]*n,c=u<s-1?t[u+1]*n:e.length;o-=Math.abs(Hu(e,l,c,n))}var f=0;for(u=0;u<r.length;u+=3){var h=r[u]*n,d=r[u+1]*n,v=r[u+2]*n;f+=Math.abs((e[h]-e[v])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[v+1]-e[h+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function Hu(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}yo.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n};var P2=ul.exports;const pn=Rn(P2);var Aa=He();He();var mt=He(),Nn=He(),Sr=He();function Ko(e,t,n,r,i){_t(e,n,r),dn(e,e),t=jr(-e[1],e[0]);var a=jr(-n[1],n[0]);return[i/Xn(t,a),t]}function Bn(e,t){return Qp(e,-t[1],t[0])}function Ar(e,t,n){return Vr(e,t,n),dn(e,e),e}function eu(e,t){return e[0]===t[0]&&e[1]===t[1]}var F2=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};oe(this,e),S(this,"lastFlip",-1),S(this,"miter",jr(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return ae(e,[{key:"extrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(ee(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"simpleExtrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(ee(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.segment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleExtrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.simpleSegment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"segment_gaode2",value:function(n,r,i,a,o,u,s,l){var c=0,f=n.indices,h=n.positions,d=n.normals,v=this.cap==="square",p=this.join==="bevel",g=ht([s[0],s[1]]),m=ht([u[0],u[1]]);Ar(mt,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=He(),Bn(this.normal,mt)),!this.started)if(this.started=!0,v){var y=He(),x=He();_t(y,this.normal,mt),_t(x,this.normal,mt),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(r+0,r+1,r+2),o){eu(a,o)&&_t(o,a,dn(o,Dr(o,a,i))),Ar(Nn,o,a);var T=Ko(Sr,He(),mt,Nn,this.thickness),D=Pe(T,2),U=D[0],I=D[1],w=Xn(Sr,this.normal)<0?-1:1,k=p;if(!k&&this.join==="miter"){var P=U;P>this.miterLimit&&(k=!0)}k?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,ee(this.lastFlip!==-w?[r,r+2,r+3]:[r+2,r+1,r+3])),f.push(r+2,r+3,r+4),Bn(Aa,Nn),cn(this.normal,Aa),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,U,this.totalDistance),f.push.apply(f,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),w=-1,cn(this.normal,I),c+=2),this.lastFlip=w}else{if(Bn(this.normal,mt),v){var b=He(),M=He();Vr(M,mt,this.normal),_t(b,mt,this.normal),d.push(M[0],M[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),c+=2}return c}},{key:"simpleSegment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=ht([a[0],a[1]]),h=ht([i[0],i[1]]);Ar(mt,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=He(),Bn(this.normal,mt)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(r+0,r+1,r+2),!o)Bn(this.normal,mt),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2;else{var v=ht([o[0],o[1]]);eu(f,v)&&_t(v,f,dn(v,Dr(v,f,h))),Ar(Nn,v,f);var p=Ko(Sr,He(),mt,Nn,this.thickness),g=Pe(p,2),m=g[0],_=g[1],y=Xn(Sr,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),y=-1,cn(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=this.cap==="square",h=this.join==="bevel",d=ht([a[0],a[1]]),v=ht([i[0],i[1]]);Ar(mt,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=He(),Bn(this.normal,mt)),!this.started)if(this.started=!0,f){var g=He(),m=He();_t(g,this.normal,mt),_t(m,this.normal,mt),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(r+0,r+1,r+2),o){var x=ht([o[0],o[1]]);eu(d,x)&&_t(x,d,dn(x,Dr(x,d,v))),Ar(Nn,x,d);var b=Ko(Sr,He(),mt,Nn,this.thickness),M=Pe(b,2),T=M[0],D=M[1],U=Xn(Sr,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var w=T;w>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(D[0],D[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,ee(this.lastFlip!==-U?[r,r+2,r+3]:[r+2,r+1,r+3])),s.push(r+2,r+3,r+4),Bn(Aa,Nn),cn(this.normal,Aa),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,D,T,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),U=-1,cn(this.normal,D),u+=2),this.lastFlip=U}else{if(Bn(this.normal,mt),f){var _=He(),y=He();Vr(y,mt,this.normal),_t(_,mt,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2}return u}},{key:"extrusions",value:function(n,r,i,a,o,u){r.push(a[0],a[1],0),r.push(a[0],a[1],0),n.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),n.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(n,r){var i=r[0]-n[0],a=r[1]-n[1];return Math.sqrt(i*i+a*a)}}]),e}();function Gu(e){var t=e.coordinates,n=e.originCoordinates,r=e.version,i=new F2({dash:!0,join:"bevel"});if(r==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=n;Array.isArray(o[0][0])||(o=[n]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function Na(e){var t=Tn(e.coordinates);return{vertices:[].concat(ee(t),ee(t),ee(t),ee(t)),indices:[0,1,2,2,3,0],size:t.length}}function H0(e){var t=e.coordinates,n=pn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes,o=pn(r,a,i);return{indices:o,vertices:r,size:i}}var O2=function(){var e=Y(C.mark(function t(n){var r,i,a,o,u,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o=n.iconMap,u={a_Color:rl,a_Position:il,filter:al,a_vertexId:ol,a_PickingColor:function(p){var g=p.id;return a?Ln(g):[0,0,0]},a_DistanceAndIndex:function(p,g,m,_,y,x){return x===void 0?[m[3],10]:[m[3],x]},a_Total_Distance:function(p,g,m){return[m[5]]},a_Size:function(p){var g=p.size,m=g===void 0?1:g;return Array.isArray(m)?[m[0],m[1]]:[m,0]},a_Normal:function(p,g,m,_,y){return y},a_Miter:function(p,g,m){return[m[4]]},a_iconMapUV:function(p){var g=p.texture,m=o[g]||{x:0,y:0},_=m.x,y=m.y;return[_,y]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=Gu(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(U){c.push(U+l)}),f=x;var M=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=M;for(var T=function(I){var w=(y==null?void 0:y.slice(I*3,I*3+3))||[],k=_.slice(I*x,I*x+x),P=0;b&&b[I]!==void 0&&(P=b[I]),r.forEach(function(B){if(B&&u[B.name]){var K;(K=B.buffer.data).push.apply(K,ee(u[B.name](v,p,k,I,w,P)))}})},D=0;D<M;D++)T(D)}),d.abrupt("return",{descriptors:r,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),D2=function(){var e=Y(C.mark(function t(n){var r,i,a,o,u,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o=n.shape2d,u={a_Color:rl,a_Position:il,filter:al,a_vertexId:ol,a_PickingColor:function(p){var g=p.id;return a?Ln(g):[0,0,0]},a_Shape:function(p){var g=p.shape,m=g===void 0?2:g,_=o.indexOf(m);return[_]},a_Extrude:function(p,g,m,_){var y=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],x=_%4*3;return[y[x],y[x+1],y[x+2]]},a_Size:function(p){var g=p.size,m=g===void 0?5:g;return Array.isArray(m)?[m[0]]:[m]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=Na(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(U){c.push(U+l)}),f=x;var M=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=M;for(var T=function(I){var w=(y==null?void 0:y.slice(I*3,I*3+3))||[],k=_.slice(I*x,I*x+x),P=0;b&&b[I]!==void 0&&(P=b[I]),r.forEach(function(B){if(B&&u[B.name]){var K;(K=B.buffer.data).push.apply(K,ee(u[B.name](v,p,k,I,w,P)))}})},D=0;D<M;D++)T(D)}),d.abrupt("return",{descriptors:r,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),N2=function(){var e=Y(C.mark(function t(n){var r,i,a,o,u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o={a_Color:rl,a_Position:il,filter:al,a_vertexId:ol,a_PickingColor:function(v){var p=v.id;return a?Ln(p):[0,0,0]}},u={sizePerElement:0,elements:[]},s=0,l=[],c=3,i.forEach(function(d,v){var p=H0(d),g=p.indices,m=p.vertices,_=p.normals,y=p.size,x=p.indexes;g.forEach(function(D){l.push(D+s)}),c=y;var b=m.length/y;u.sizePerElement=c,u.elements.push({featureIdx:v,vertices:m,normals:_,offset:s}),s+=b;for(var M=function(U){var I=(_==null?void 0:_.slice(U*3,U*3+3))||[],w=m.slice(U*y,U*y+y),k=0;x&&x[U]!==void 0&&(k=x[U]),r.forEach(function(P){if(P&&o[P.name]){var B;(B=P.buffer.data).push.apply(B,ee(o[P.name](d,v,w,U,I,k)))}})},T=0;T<b;T++)M(T)}),h.abrupt("return",{descriptors:r,featureLayout:u,indices:l});case 8:case"end":return h.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),B2={pointFill:D2,line:O2,polygonFill:N2};z({},B2);function oi(e,t){return e??t}var U2=Ba;function Ba(e,t){var n=e&&e.type,r;if(n==="FeatureCollection")for(r=0;r<e.features.length;r++)Ba(e.features[r],t);else if(n==="GeometryCollection")for(r=0;r<e.geometries.length;r++)Ba(e.geometries[r],t);else if(n==="Feature")Ba(e.geometry,t);else if(n==="Polygon")hc(e.coordinates,t);else if(n==="MultiPolygon")for(r=0;r<e.coordinates.length;r++)hc(e.coordinates[r],t);return e}function hc(e,t){if(e.length!==0){dc(e[0],t);for(var n=1;n<e.length;n++)dc(e[n],!t)}}function dc(e,t){for(var n=0,r=0,i=0,a=e.length,o=a-1;i<a;o=i++){var u=(e[i][0]-e[o][0])*(e[o][1]+e[i][1]),s=n+u;r+=Math.abs(n)>=Math.abs(u)?n-s+u:u-s+n,n=s}n+r>=0!=!!t&&e.reverse()}const z2=Rn(U2);function $2(e,t){return e.map(function(n){return n[t]*1})}function G0(e){return Array.isArray(e)?e.length===0||typeof e[0]=="number":!1}function Wu(e){var t=Object.isFrozen(e)?Ke.cloneDeep(e):e;return z2(t,!0),t}function W0(e,t){var n=t.x,r=t.y,i=t.x1,a=t.y1,o=t.coordinates,u=t.geometry,s=[];if(!Array.isArray(e))return{dataArray:[]};if(u)return e.filter(function(m){return m[u]&&m[u].type&&m[u].coordinates&&m[u].coordinates.length>0}).forEach(function(m,_){var y=Wu(m[u]);g0(y,function(x){var b=p0(x),M=z(z({},m),{},{_id:_,coordinates:b});s.push(M)})}),{dataArray:s};for(var l=0;l<e.length;l++){var c=e[l],f=[];if(o){var h="Polygon";Array.isArray(o[0])||(h="Point"),Array.isArray(o[0])&&!Array.isArray(o[0][0])&&(h="LineString");var d=Wu({type:h,coordinates:c[o]});f=d.coordinates}else if(n&&r&&i&&a){var v=[parseFloat(c[n]),parseFloat(c[r])],p=[parseFloat(c[i]),parseFloat(c[a])];f=[v,p]}else n&&r&&(f=[parseFloat(c[n]),parseFloat(c[r])]);var g=z(z({},c),{},{_id:l,coordinates:f});s.push(g)}return{dataArray:s}}function V2(e,t){var n=$1(e);return W0(n,t)}function j2(e){for(var t=e.toString(),n=5381,r=t.length;r;)n=n*33^t.charCodeAt(--r);return n>>>0}function H2(e,t){return t===void 0?null:typeof(e.properties[t]*1)=="number"?e.properties[t]*1:e.properties&&e.properties[t]?j2(e.properties[t]+"")%1000019:null}function G2(e,t){var n=[],r={};return e.features?(e.features=e.features.filter(function(i){var a=i.geometry;return i!=null&&a&&a.type&&a.coordinates&&a.coordinates.length>0}),e=Wu(e),e.features.length===0?{dataArray:[],featureKeys:r}:(g0(e,function(i,a){var o=H2(i,t==null?void 0:t.featureId);o===null&&(o=a);var u=o,s=p0(i),l=z(z({},i.properties),{},{coordinates:s,_id:u});n.push(l)}),{dataArray:n,featureKeys:r})):(e.features=[],{dataArray:[]})}function Yu(e,t,n,r){for(var i=r,a=n-t>>1,o=n-t,u,s=e[t],l=e[t+1],c=e[n],f=e[n+1],h=t+3;h<n;h+=3){var d=W2(e[h],e[h+1],s,l,c,f);if(d>i)u=h,i=d;else if(d===i){var v=Math.abs(h-a);v<o&&(u=h,o=v)}}i>r&&(u-t>3&&Yu(e,t,u,r),e[u+2]=i,n-u>3&&Yu(e,u,n,r))}function W2(e,t,n,r,i,a){var o=i-n,u=a-r;if(o!==0||u!==0){var s=((e-n)*o+(t-r)*u)/(o*o+u*u);s>1?(n=i,r=a):s>0&&(n+=o*s,r+=u*s)}return o=e-n,u=t-r,o*o+u*u}function Vi(e,t,n,r){var i={id:typeof e>"u"?null:e,type:t,geometry:n,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return Y2(i),i}function Y2(e){var t=e.geometry,n=e.type;if(n==="Point"||n==="MultiPoint"||n==="LineString")tu(e,t);else if(n==="Polygon"||n==="MultiLineString")for(var r=0;r<t.length;r++)tu(e,t[r]);else if(n==="MultiPolygon")for(r=0;r<t.length;r++)for(var i=0;i<t[r].length;i++)tu(e,t[r][i])}function tu(e,t){for(var n=0;n<t.length;n+=3)e.minX=Math.min(e.minX,t[n]),e.minY=Math.min(e.minY,t[n+1]),e.maxX=Math.max(e.maxX,t[n]),e.maxY=Math.max(e.maxY,t[n+1])}function X2(e,t){var n=[];if(e.type==="FeatureCollection")for(var r=0;r<e.features.length;r++)Ua(n,e.features[r],t,r);else e.type==="Feature"?Ua(n,e,t):Ua(n,{geometry:e},t);return n}function Ua(e,t,n,r){if(t.geometry){var i=t.geometry.coordinates,a=t.geometry.type,o=Math.pow(n.tolerance/((1<<n.maxZoom)*n.extent),2),u=[],s=t.id;if(n.promoteId?s=t.properties[n.promoteId]:n.generateId&&(s=r||0),a==="Point")vc(i,u);else if(a==="MultiPoint")for(var l=0;l<i.length;l++)vc(i[l],u);else if(a==="LineString")Xu(i,u,o,!1);else if(a==="MultiLineString")if(n.lineMetrics){for(l=0;l<i.length;l++)u=[],Xu(i[l],u,o,!1),e.push(Vi(s,"LineString",u,t.properties));return}else nu(i,u,o,!1);else if(a==="Polygon")nu(i,u,o,!0);else if(a==="MultiPolygon")for(l=0;l<i.length;l++){var c=[];nu(i[l],c,o,!0),u.push(c)}else if(a==="GeometryCollection"){for(l=0;l<t.geometry.geometries.length;l++)Ua(e,{id:s,geometry:t.geometry.geometries[l],properties:t.properties},n,r);return}else throw new Error("Input data is not a valid GeoJSON object.");e.push(Vi(s,a,u,t.properties))}}function vc(e,t){t.push(Y0(e[0])),t.push(X0(e[1])),t.push(0)}function Xu(e,t,n,r){for(var i,a,o=0,u=0;u<e.length;u++){var s=Y0(e[u][0]),l=X0(e[u][1]);t.push(s),t.push(l),t.push(0),u>0&&(r?o+=(i*l-s*a)/2:o+=Math.sqrt(Math.pow(s-i,2)+Math.pow(l-a,2))),i=s,a=l}var c=t.length-3;t[2]=1,Yu(t,0,c,n),t[c+2]=1,t.size=Math.abs(o),t.start=0,t.end=t.size}function nu(e,t,n,r){for(var i=0;i<e.length;i++){var a=[];Xu(e[i],a,n,r),t.push(a)}}function Y0(e){return e/360+.5}function X0(e){var t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function An(e,t,n,r,i,a,o,u){if(n/=t,r/=t,a>=n&&o<r)return e;if(o<n||a>=r)return null;for(var s=[],l=0;l<e.length;l++){var c=e[l],f=c.geometry,h=c.type,d=i===0?c.minX:c.minY,v=i===0?c.maxX:c.maxY;if(d>=n&&v<r){s.push(c);continue}else if(v<n||d>=r)continue;var p=[];if(h==="Point"||h==="MultiPoint")Z2(f,p,n,r,i);else if(h==="LineString")Z0(f,p,n,r,i,!1,u.lineMetrics);else if(h==="MultiLineString")ru(f,p,n,r,i,!1);else if(h==="Polygon")ru(f,p,n,r,i,!0);else if(h==="MultiPolygon")for(var g=0;g<f.length;g++){var m=[];ru(f[g],m,n,r,i,!0),m.length&&p.push(m)}if(p.length){if(u.lineMetrics&&h==="LineString"){for(g=0;g<p.length;g++)s.push(Vi(c.id,h,p[g],c.tags));continue}(h==="LineString"||h==="MultiLineString")&&(p.length===1?(h="LineString",p=p[0]):h="MultiLineString"),(h==="Point"||h==="MultiPoint")&&(h=p.length===3?"Point":"MultiPoint"),s.push(Vi(c.id,h,p,c.tags))}}return s.length?s:null}function Z2(e,t,n,r,i){for(var a=0;a<e.length;a+=3){var o=e[a+i];o>=n&&o<=r&&(t.push(e[a]),t.push(e[a+1]),t.push(e[a+2]))}}function Z0(e,t,n,r,i,a,o){for(var u=pc(e),s=i===0?q2:Q2,l=e.start,c,f,h=0;h<e.length-3;h+=3){var d=e[h],v=e[h+1],p=e[h+2],g=e[h+3],m=e[h+4],_=i===0?d:v,y=i===0?g:m,x=!1;o&&(c=Math.sqrt(Math.pow(d-g,2)+Math.pow(v-m,2))),_<n?y>n&&(f=s(u,d,v,g,m,n),o&&(u.start=l+c*f)):_>r?y<r&&(f=s(u,d,v,g,m,r),o&&(u.start=l+c*f)):iu(u,d,v,p),y<n&&_>=n&&(f=s(u,d,v,g,m,n),x=!0),y>r&&_<=r&&(f=s(u,d,v,g,m,r),x=!0),!a&&x&&(o&&(u.end=l+c*f),t.push(u),u=pc(e)),o&&(l+=c)}var b=e.length-3;d=e[b],v=e[b+1],p=e[b+2],_=i===0?d:v,_>=n&&_<=r&&iu(u,d,v,p),b=u.length-3,a&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&iu(u,u[0],u[1],u[2]),u.length&&t.push(u)}function pc(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function ru(e,t,n,r,i,a){for(var o=0;o<e.length;o++)Z0(e[o],t,n,r,i,a,!1)}function iu(e,t,n,r){e.push(t),e.push(n),e.push(r)}function q2(e,t,n,r,i,a){var o=(a-t)/(r-t);return e.push(a),e.push(n+(i-n)*o),e.push(1),o}function Q2(e,t,n,r,i,a){var o=(a-n)/(i-n);return e.push(t+(r-t)*o),e.push(a),e.push(1),o}function J2(e,t){var n=t.buffer/t.extent,r=e,i=An(e,1,-1-n,n,0,-1,2,t),a=An(e,1,1-n,2+n,0,-1,2,t);return(i||a)&&(r=An(e,1,-n,1+n,0,-1,2,t)||[],i&&(r=gc(i,1).concat(r)),a&&(r=r.concat(gc(a,-1)))),r}function gc(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a=i.type,o;if(a==="Point"||a==="MultiPoint"||a==="LineString")o=au(i.geometry,t);else if(a==="MultiLineString"||a==="Polygon"){o=[];for(var u=0;u<i.geometry.length;u++)o.push(au(i.geometry[u],t))}else if(a==="MultiPolygon")for(o=[],u=0;u<i.geometry.length;u++){for(var s=[],l=0;l<i.geometry[u].length;l++)s.push(au(i.geometry[u][l],t));o.push(s)}n.push(Vi(i.id,a,o,i.tags))}return n}function au(e,t){var n=[];n.size=e.size,e.start!==void 0&&(n.start=e.start,n.end=e.end);for(var r=0;r<e.length;r+=3)n.push(e[r]+t,e[r+1],e[r+2]);return n}function mc(e,t){if(e.transformed)return e;var n=1<<e.z,r=e.x,i=e.y,a,o,u;for(a=0;a<e.features.length;a++){var s=e.features[a],l=s.geometry,c=s.type;if(s.geometry=[],c===1)for(o=0;o<l.length;o+=2)s.geometry.push(yc(l[o],l[o+1],t,n,r,i));else for(o=0;o<l.length;o++){var f=[];for(u=0;u<l[o].length;u+=2)f.push(yc(l[o][u],l[o][u+1],t,n,r,i));s.geometry.push(f)}}return e.transformed=!0,e}function yc(e,t,n,r,i,a){return[Math.round(n*(e*r-i)),Math.round(n*(t*r-a))]}function K2(e,t,n,r,i){for(var a=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),o={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},u=0;u<e.length;u++){o.numFeatures++,ex(o,e[u],a,i);var s=e[u].minX,l=e[u].minY,c=e[u].maxX,f=e[u].maxY;s<o.minX&&(o.minX=s),l<o.minY&&(o.minY=l),c>o.maxX&&(o.maxX=c),f>o.maxY&&(o.maxY=f)}return o}function ex(e,t,n,r){var i=t.geometry,a=t.type,o=[];if(a==="Point"||a==="MultiPoint")for(var u=0;u<i.length;u+=3)o.push(i[u]),o.push(i[u+1]),e.numPoints++,e.numSimplified++;else if(a==="LineString")ou(o,i,e,n,!1,!1);else if(a==="MultiLineString"||a==="Polygon")for(u=0;u<i.length;u++)ou(o,i[u],e,n,a==="Polygon",u===0);else if(a==="MultiPolygon")for(var s=0;s<i.length;s++){var l=i[s];for(u=0;u<l.length;u++)ou(o,l[u],e,n,!0,u===0)}if(o.length){var c=t.tags||null;if(a==="LineString"&&r.lineMetrics){c={};for(var f in t.tags)c[f]=t.tags[f];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size}var h={geometry:o,type:a==="Polygon"||a==="MultiPolygon"?3:a==="LineString"||a==="MultiLineString"?2:1,tags:c};t.id!==null&&(h.id=t.id),e.features.push(h)}}function ou(e,t,n,r,i,a){var o=r*r;if(r>0&&t.size<(i?o:r)){n.numPoints+=t.length/3;return}for(var u=[],s=0;s<t.length;s+=3)(r===0||t[s+2]>o)&&(n.numSimplified++,u.push(t[s]),u.push(t[s+1])),n.numPoints++;i&&tx(u,a),e.push(u)}function tx(e,t){for(var n=0,r=0,i=e.length,a=i-2;r<i;a=r,r+=2)n+=(e[r]-e[a])*(e[r+1]+e[a+1]);if(n>0===t)for(r=0,i=e.length;r<i/2;r+=2){var o=e[r],u=e[r+1];e[r]=e[i-2-r],e[r+1]=e[i-1-r],e[i-2-r]=o,e[i-1-r]=u}}function nx(e,t){return new xo(e,t)}function xo(e,t){t=this.options=rx(Object.create(this.options),t);var n=t.debug;if(t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var r=X2(e,t);this.tiles={},this.tileCoords=[],n&&(this.stats={},this.total=0),r=J2(r,t),r.length&&this.splitTile(r,0,0,0),n&&r.length}xo.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0};xo.prototype.splitTile=function(e,t,n,r,i,a,o){for(var u=[e,t,n,r],s=this.options,l=s.debug;u.length;){r=u.pop(),n=u.pop(),t=u.pop(),e=u.pop();var c=1<<t,f=Zu(t,n,r),h=this.tiles[f];if(!h&&(l>1,h=this.tiles[f]=K2(e,t,n,r,s),this.tileCoords.push({z:t,x:n,y:r}),l)){l>1;var d="z"+t;this.stats[d]=(this.stats[d]||0)+1,this.total++}if(h.source=e,i){if(t===s.maxZoom||t===i)continue;var v=1<<i-t;if(n!==Math.floor(a/v)||r!==Math.floor(o/v))continue}else if(t===s.indexMaxZoom||h.numPoints<=s.indexMaxPoints)continue;if(h.source=null,e.length!==0){l>1;var p=.5*s.buffer/s.extent,g=.5-p,m=.5+p,_=1+p,y,x,b,M,T,D;y=x=b=M=null,T=An(e,c,n-p,n+m,0,h.minX,h.maxX,s),D=An(e,c,n+g,n+_,0,h.minX,h.maxX,s),e=null,T&&(y=An(T,c,r-p,r+m,1,h.minY,h.maxY,s),x=An(T,c,r+g,r+_,1,h.minY,h.maxY,s),T=null),D&&(b=An(D,c,r-p,r+m,1,h.minY,h.maxY,s),M=An(D,c,r+g,r+_,1,h.minY,h.maxY,s),D=null),l>1,u.push(y||[],t+1,n*2,r*2),u.push(x||[],t+1,n*2,r*2+1),u.push(b||[],t+1,n*2+1,r*2),u.push(M||[],t+1,n*2+1,r*2+1)}}};xo.prototype.getTile=function(e,t,n){var r=this.options,i=r.extent,a=r.debug;if(e<0||e>24)return null;var o=1<<e;t=(t%o+o)%o;var u=Zu(e,t,n);if(this.tiles[u])return mc(this.tiles[u],i);a>1;for(var s=e,l=t,c=n,f;!f&&s>0;)s--,l=Math.floor(l/2),c=Math.floor(c/2),f=this.tiles[Zu(s,l,c)];return!f||!f.source?null:(a>1,a>1,this.splitTile(f.source,s,l,c,e,t,n),a>1,this.tiles[u]?mc(this.tiles[u],i):null)};function Zu(e,t,n){return((1<<e)*n+t)*32+e}function rx(e,t){for(var n in t)e[n]=t[n];return e}var Ci=function(){function e(t,n,r,i){oe(this,e),S(this,"vectorLayerCache",{}),this.x=n,this.y=r,this.z=i,this.vectorTile=t}return ae(e,[{key:"getTileData",value:function(n){if(!n||!this.vectorTile.layers[n])return[];if(this.vectorLayerCache[n])return this.vectorLayerCache[n];var r=this.vectorTile.layers[n];return r.features}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),ix={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0};function ax(e){for(var t=0,n=0,r=e.length,i=r-1,a,o;n<r;i=n++)a=e[n],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}function ox(e){var t=e.length;if(t<=1)return[e];for(var n=[],r,i,a=0;a<t;a++){var o=ax(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[e[a]]):r.push(e[a]))}return r&&n.push(r),n}var ux=["Unknown","Point","LineString","Polygon"];function sx(e,t,n,r,i){var a=i.geometry,o=i.type,u=i.tags,s=i.id,l=e*Math.pow(2,r),c=e*t,f=e*n,h=ux[o],d,v;function p(_){for(var y=0;y<_.length;y++){var x=_[y];if(x[3])break;var b=180-(x[1]+f)*360/l,M=(x[0]+c)*360/l-180,T=360/Math.PI*Math.atan(Math.exp(b*Math.PI/180))-90;_[y]=[M,T,0,1]}}switch(o){case 1:var g=[];for(d=0;d<a.length;d++)g[d]=a[d][0];a=g,p(a);break;case 2:for(d=0;d<a.length;d++)p(a[d]);break;case 3:for(a=ox(a),d=0;d<a.length;d++)for(v=0;v<a[d].length;v++)p(a[d][v]);break}a.length===1?a=a[0]:h="Multi"+h;var m={type:"Feature",geometry:{type:h,coordinates:a},properties:u,id:s,tileOrigin:[0,0],coord:""};return m}var lx=function(){var e=Y(C.mark(function t(n,r,i,a){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s){var l=r.getTile(n.z,n.x,n.y),c=l?l.features.map(function(d){return sx(a,i.x,i.y,i.z,d)}):[],f={layers:{defaultLayer:{features:c}}},h=new Ci(f,n.x,n.y,n.z);s(h)}));case 1:case"end":return u.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}();function cx(e){var t={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!0,debug:0};return e===void 0||typeof e.geojsonvtOptions>"u"?t:z(z({},t),e.geojsonvtOptions)}function fx(e,t){var n=cx(t),r=n.extent||4096,i=nx(e,n),a=function(s,l){return lx(l,i,s,r)},o=z(z(z({},ix),t),{},{getTileData:a});return{data:e,dataArray:[],tilesetOptions:o,isTile:!0}}function q0(e,t){var n=t.extent,r=n===void 0?[121.168,30.2828,121.384,30.4219]:n,i=t.requestParameters,a=i===void 0?{}:i,o=new Promise(function(s){e instanceof HTMLImageElement||k_(e)?s([e]):hx(e,a,function(l){s(l)})}),u={originData:e,images:o,_id:1,dataArray:[{_id:0,coordinates:[[r[0],r[1]],[r[2],r[3]]]}]};return u}function hx(e,t,n){var r=[];if(typeof e=="string")Du(z(z({},t),{},{url:e}),function(o,u){u&&(r.push(u),n(r))});else{var i=e.length,a=0;e.forEach(function(o){Du(z(z({},t),{},{url:o}),function(u,s){a++,s&&r.push(s),a===i&&n(r)})})}return q0}var dx=function(){var e=Y(C.mark(function t(n,r,i,a){var o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o={x:r.x,y:r.y,z:r.z},u=Br(n,o),l.abrupt("return",new Promise(function(c){a?a(o,function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new Ci(d,r.x,r.y,r.z);c(v)}else{var p={layers:{defaultLayer:{features:h.features}}},g=new Ci(p,r.x,r.y,r.z);c(g)}}):J1(z(z({},i),{},{url:u}),function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new Ci(d,r.x,r.y,r.z);c(v)}else{var p=JSON.parse(h),g={layers:{defaultLayer:{features:p}}},m=new Ci(g,r.x,r.y,r.z);c(m)}})}));case 3:case"end":return l.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}();function vx(e,t){var n=function(a,o){return dx(e,o,t==null?void 0:t.requestParameters,t.getCustomData)},r=z(z({},t),{},{getTileData:n});return{dataArray:[],tilesetOptions:r,isTile:!0}}var px=Ur;function Ur(e,t){this.x=e,this.y=t}Ur.prototype={clone:function(){return new Ur(this.x,this.y)},add:function(e){return this.clone()._add(e)},sub:function(e){return this.clone()._sub(e)},multByPoint:function(e){return this.clone()._multByPoint(e)},divByPoint:function(e){return this.clone()._divByPoint(e)},mult:function(e){return this.clone()._mult(e)},div:function(e){return this.clone()._div(e)},rotate:function(e){return this.clone()._rotate(e)},rotateAround:function(e,t){return this.clone()._rotateAround(e,t)},matMult:function(e){return this.clone()._matMult(e)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(e){return this.x===e.x&&this.y===e.y},dist:function(e){return Math.sqrt(this.distSqr(e))},distSqr:function(e){var t=e.x-this.x,n=e.y-this.y;return t*t+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(e){return Math.atan2(this.y-e.y,this.x-e.x)},angleWith:function(e){return this.angleWithSep(e.x,e.y)},angleWithSep:function(e,t){return Math.atan2(this.x*t-this.y*e,this.x*e+this.y*t)},_matMult:function(e){var t=e[0]*this.x+e[1]*this.y,n=e[2]*this.x+e[3]*this.y;return this.x=t,this.y=n,this},_add:function(e){return this.x+=e.x,this.y+=e.y,this},_sub:function(e){return this.x-=e.x,this.y-=e.y,this},_mult:function(e){return this.x*=e,this.y*=e,this},_div:function(e){return this.x/=e,this.y/=e,this},_multByPoint:function(e){return this.x*=e.x,this.y*=e.y,this},_divByPoint:function(e){return this.x/=e.x,this.y/=e.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var e=this.y;return this.y=this.x,this.x=-e,this},_rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=t*this.x-n*this.y,i=n*this.x+t*this.y;return this.x=r,this.y=i,this},_rotateAround:function(e,t){var n=Math.cos(e),r=Math.sin(e),i=t.x+n*(this.x-t.x)-r*(this.y-t.y),a=t.y+r*(this.x-t.x)+n*(this.y-t.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};Ur.convert=function(e){return e instanceof Ur?e:Array.isArray(e)?new Ur(e[0],e[1]):e};var gx=px,mx=Gr;function Gr(e,t,n,r,i){this.properties={},this.extent=n,this.type=0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=i,e.readFields(yx,this,t)}function yx(e,t,n){e==1?t.id=n.readVarint():e==2?_x(n,t):e==3?t.type=n.readVarint():e==4&&(t._geometry=n.pos)}function _x(e,t){for(var n=e.readVarint()+e.pos;e.pos<n;){var r=t._keys[e.readVarint()],i=t._values[e.readVarint()];t.properties[r]=i}}Gr.types=["Unknown","Point","LineString","Polygon"];Gr.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=[],u;e.pos<t;){if(r<=0){var s=e.readVarint();n=s&7,r=s>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),n===1&&(u&&o.push(u),u=[]),u.push(new gx(i,a));else if(n===7)u&&u.push(u[0].clone());else throw new Error("unknown command "+n)}return u&&o.push(u),o};Gr.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=1/0,u=-1/0,s=1/0,l=-1/0;e.pos<t;){if(r<=0){var c=e.readVarint();n=c&7,r=c>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),i<o&&(o=i),i>u&&(u=i),a<s&&(s=a),a>l&&(l=a);else if(n!==7)throw new Error("unknown command "+n)}return[o,s,u,l]};Gr.prototype.toGeoJSON=function(e,t,n){var r=this.extent*Math.pow(2,n),i=this.extent*e,a=this.extent*t,o=this.loadGeometry(),u=Gr.types[this.type],s,l;function c(d){for(var v=0;v<d.length;v++){var p=d[v],g=180-(p.y+a)*360/r;d[v]=[(p.x+i)*360/r-180,360/Math.PI*Math.atan(Math.exp(g*Math.PI/180))-90]}}switch(this.type){case 1:var f=[];for(s=0;s<o.length;s++)f[s]=o[s][0];o=f,c(o);break;case 2:for(s=0;s<o.length;s++)c(o[s]);break;case 3:for(o=xx(o),s=0;s<o.length;s++)for(l=0;l<o[s].length;l++)c(o[s][l]);break}o.length===1?o=o[0]:u="Multi"+u;var h={type:"Feature",geometry:{type:u,coordinates:o},properties:this.properties};return"id"in this&&(h.id=this.id),h};function xx(e){var t=e.length;if(t<=1)return[e];for(var n=[],r,i,a=0;a<t;a++){var o=bx(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[e[a]]):r.push(e[a]))}return r&&n.push(r),n}function bx(e){for(var t=0,n=0,r=e.length,i=r-1,a,o;n<r;i=n++)a=e[n],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}var Sx=mx,Ax=Q0;function Q0(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(Ex,this,t),this.length=this._features.length}function Ex(e,t,n){e===15?t.version=n.readVarint():e===1?t.name=n.readString():e===5?t.extent=n.readVarint():e===2?t._features.push(n.pos):e===3?t._keys.push(n.readString()):e===4&&t._values.push(Cx(n))}function Cx(e){for(var t=null,n=e.readVarint()+e.pos;e.pos<n;){var r=e.readVarint()>>3;t=r===1?e.readString():r===2?e.readFloat():r===3?e.readDouble():r===4?e.readVarint64():r===5?e.readVarint():r===6?e.readSVarint():r===7?e.readBoolean():null}return t}Q0.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new Sx(this._pbf,t,this.extent,this._keys,this._values)};var Tx=Ax,Mx=kx;function kx(e,t){this.layers=e.readFields(Ix,{},t)}function Ix(e,t,n){if(e===3){var r=new Tx(n,n.readVarint()+n.pos);r.length&&(t[r.name]=r)}}var Lx=Mx,sl={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */sl.read=function(e,t,n,r,i){var a,o,u=i*8-r-1,s=(1<<u)-1,l=s>>1,c=-7,f=n?i-1:0,h=n?-1:1,d=e[t+f];for(f+=h,a=d&(1<<-c)-1,d>>=-c,c+=u;c>0;a=a*256+e[t+f],f+=h,c-=8);for(o=a&(1<<-c)-1,a>>=-c,c+=r;c>0;o=o*256+e[t+f],f+=h,c-=8);if(a===0)a=1-l;else{if(a===s)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,r),a=a-l}return(d?-1:1)*o*Math.pow(2,a-r)};sl.write=function(e,t,n,r,i,a){var o,u,s,l=a*8-i-1,c=(1<<l)-1,f=c>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:a-1,v=r?1:-1,p=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+f>=1?t+=h/s:t+=h*Math.pow(2,1-f),t*s>=2&&(o++,s/=2),o+f>=c?(u=0,o=c):o+f>=1?(u=(t*s-1)*Math.pow(2,i),o=o+f):(u=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=u&255,d+=v,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;e[n+d]=o&255,d+=v,o/=256,l-=8);e[n+d-v]|=p*128};var Rx=qe,Ea=sl;function qe(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}qe.Varint=0;qe.Fixed64=1;qe.Bytes=2;qe.Fixed32=5;var qu=65536*65536,_c=1/qu,Px=12,J0=typeof TextDecoder>"u"?null:new TextDecoder("utf8");qe.prototype={destroy:function(){this.buf=null},readFields:function(e,t,n){for(n=n||this.length;this.pos<n;){var r=this.readVarint(),i=r>>3,a=this.pos;this.type=r&7,e(i,t,this),this.pos===a&&this.skip(r)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=Ca(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=bc(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=Ca(this.buf,this.pos)+Ca(this.buf,this.pos+4)*qu;return this.pos+=8,e},readSFixed64:function(){var e=Ca(this.buf,this.pos)+bc(this.buf,this.pos+4)*qu;return this.pos+=8,e},readFloat:function(){var e=Ea.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=Ea.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t=this.buf,n,r;return r=t[this.pos++],n=r&127,r<128||(r=t[this.pos++],n|=(r&127)<<7,r<128)||(r=t[this.pos++],n|=(r&127)<<14,r<128)||(r=t[this.pos++],n|=(r&127)<<21,r<128)?n:(r=t[this.pos],n|=(r&15)<<28,Fx(n,e,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2===1?(e+1)/-2:e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=Px&&J0?Xx(this.buf,t,e):Yx(this.buf,t,e)},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){if(this.type!==qe.Bytes)return e.push(this.readVarint(t));var n=xn(this);for(e=e||[];this.pos<n;)e.push(this.readVarint(t));return e},readPackedSVarint:function(e){if(this.type!==qe.Bytes)return e.push(this.readSVarint());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readSVarint());return e},readPackedBoolean:function(e){if(this.type!==qe.Bytes)return e.push(this.readBoolean());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readBoolean());return e},readPackedFloat:function(e){if(this.type!==qe.Bytes)return e.push(this.readFloat());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readFloat());return e},readPackedDouble:function(e){if(this.type!==qe.Bytes)return e.push(this.readDouble());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readDouble());return e},readPackedFixed32:function(e){if(this.type!==qe.Bytes)return e.push(this.readFixed32());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readFixed32());return e},readPackedSFixed32:function(e){if(this.type!==qe.Bytes)return e.push(this.readSFixed32());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed32());return e},readPackedFixed64:function(e){if(this.type!==qe.Bytes)return e.push(this.readFixed64());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readFixed64());return e},readPackedSFixed64:function(e){if(this.type!==qe.Bytes)return e.push(this.readSFixed64());var t=xn(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed64());return e},skip:function(e){var t=e&7;if(t===qe.Varint)for(;this.buf[this.pos++]>127;);else if(t===qe.Bytes)this.pos=this.readVarint()+this.pos;else if(t===qe.Fixed32)this.pos+=4;else if(t===qe.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var n=new Uint8Array(t);n.set(this.buf),this.buf=n,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),Cr(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),Cr(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),Cr(this.buf,e&-1,this.pos),Cr(this.buf,Math.floor(e*_c),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),Cr(this.buf,e&-1,this.pos),Cr(this.buf,Math.floor(e*_c),this.pos+4),this.pos+=8},writeVarint:function(e){if(e=+e||0,e>268435455||e<0){Ox(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))},writeSVarint:function(e){this.writeVarint(e<0?-e*2-1:e*2)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(e.length*4),this.pos++;var t=this.pos;this.pos=Zx(this.buf,e,this.pos);var n=this.pos-t;n>=128&&xc(t,n,this),this.pos=t-1,this.writeVarint(n),this.pos+=n},writeFloat:function(e){this.realloc(4),Ea.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),Ea.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=e.length;this.writeVarint(t),this.realloc(t);for(var n=0;n<t;n++)this.buf[this.pos++]=e[n]},writeRawMessage:function(e,t){this.pos++;var n=this.pos;e(t,this);var r=this.pos-n;r>=128&&xc(n,r,this),this.pos=n-1,this.writeVarint(r),this.pos+=r},writeMessage:function(e,t,n){this.writeTag(e,qe.Bytes),this.writeRawMessage(t,n)},writePackedVarint:function(e,t){t.length&&this.writeMessage(e,Bx,t)},writePackedSVarint:function(e,t){t.length&&this.writeMessage(e,Ux,t)},writePackedBoolean:function(e,t){t.length&&this.writeMessage(e,Vx,t)},writePackedFloat:function(e,t){t.length&&this.writeMessage(e,zx,t)},writePackedDouble:function(e,t){t.length&&this.writeMessage(e,$x,t)},writePackedFixed32:function(e,t){t.length&&this.writeMessage(e,jx,t)},writePackedSFixed32:function(e,t){t.length&&this.writeMessage(e,Hx,t)},writePackedFixed64:function(e,t){t.length&&this.writeMessage(e,Gx,t)},writePackedSFixed64:function(e,t){t.length&&this.writeMessage(e,Wx,t)},writeBytesField:function(e,t){this.writeTag(e,qe.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,qe.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,qe.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,qe.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,qe.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,qe.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,qe.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,qe.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,qe.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,qe.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}};function Fx(e,t,n){var r=n.buf,i,a;if(a=r[n.pos++],i=(a&112)>>4,a<128||(a=r[n.pos++],i|=(a&127)<<3,a<128)||(a=r[n.pos++],i|=(a&127)<<10,a<128)||(a=r[n.pos++],i|=(a&127)<<17,a<128)||(a=r[n.pos++],i|=(a&127)<<24,a<128)||(a=r[n.pos++],i|=(a&1)<<31,a<128))return Er(e,i,t);throw new Error("Expected varint not more than 10 bytes")}function xn(e){return e.type===qe.Bytes?e.readVarint()+e.pos:e.pos+1}function Er(e,t,n){return n?t*4294967296+(e>>>0):(t>>>0)*4294967296+(e>>>0)}function Ox(e,t){var n,r;if(e>=0?(n=e%4294967296|0,r=e/4294967296|0):(n=~(-e%4294967296),r=~(-e/4294967296),n^4294967295?n=n+1|0:(n=0,r=r+1|0)),e>=18446744073709552e3||e<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");t.realloc(10),Dx(n,r,t),Nx(r,t)}function Dx(e,t,n){n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos]=e&127}function Nx(e,t){var n=(e&7)<<4;t.buf[t.pos++]|=n|((e>>>=3)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127)))))}function xc(e,t,n){var r=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.floor(Math.log(t)/(Math.LN2*7));n.realloc(r);for(var i=n.pos-1;i>=e;i--)n.buf[i+r]=n.buf[i]}function Bx(e,t){for(var n=0;n<e.length;n++)t.writeVarint(e[n])}function Ux(e,t){for(var n=0;n<e.length;n++)t.writeSVarint(e[n])}function zx(e,t){for(var n=0;n<e.length;n++)t.writeFloat(e[n])}function $x(e,t){for(var n=0;n<e.length;n++)t.writeDouble(e[n])}function Vx(e,t){for(var n=0;n<e.length;n++)t.writeBoolean(e[n])}function jx(e,t){for(var n=0;n<e.length;n++)t.writeFixed32(e[n])}function Hx(e,t){for(var n=0;n<e.length;n++)t.writeSFixed32(e[n])}function Gx(e,t){for(var n=0;n<e.length;n++)t.writeFixed64(e[n])}function Wx(e,t){for(var n=0;n<e.length;n++)t.writeSFixed64(e[n])}function Ca(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+e[t+3]*16777216}function Cr(e,t,n){e[n]=t,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24}function bc(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}function Yx(e,t,n){for(var r="",i=t;i<n;){var a=e[i],o=null,u=a>239?4:a>223?3:a>191?2:1;if(i+u>n)break;var s,l,c;u===1?a<128&&(o=a):u===2?(s=e[i+1],(s&192)===128&&(o=(a&31)<<6|s&63,o<=127&&(o=null))):u===3?(s=e[i+1],l=e[i+2],(s&192)===128&&(l&192)===128&&(o=(a&15)<<12|(s&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):u===4&&(s=e[i+1],l=e[i+2],c=e[i+3],(s&192)===128&&(l&192)===128&&(c&192)===128&&(o=(a&15)<<18|(s&63)<<12|(l&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,u=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=u}return r}function Xx(e,t,n){return J0.decode(e.subarray(t,n))}function Zx(e,t,n){for(var r=0,i,a;r<t.length;r++){if(i=t.charCodeAt(r),i>55295&&i<57344)if(a)if(i<56320){e[n++]=239,e[n++]=191,e[n++]=189,a=i;continue}else i=a-55296<<10|i-56320|65536,a=null;else{i>56319||r+1===t.length?(e[n++]=239,e[n++]=191,e[n++]=189):a=i;continue}else a&&(e[n++]=239,e[n++]=191,e[n++]=189,a=null);i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:(i<65536?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=i&63|128)}return n}const qx=Rn(Rx);var Sc=function(){function e(t,n,r,i){oe(this,e),S(this,"vectorLayerCache",{}),this.x=n,this.y=r,this.z=i,this.vectorTile=new Lx(new qx(t))}return ae(e,[{key:"getTileData",value:function(n){if(!n||!this.vectorTile.layers[n])return[];if(this.vectorLayerCache[n])return this.vectorLayerCache[n];var r=this.vectorTile.layers[n];if(Array.isArray(r.features))return this.vectorLayerCache[n]=r.features,r.features;for(var i=[],a=0;a<r.length;a++){var o=r.feature(a),u=o.toGeoJSON(this.x,this.y,this.z);i.push(z(z({},u),{},{properties:z({id:u.id},u.properties)}))}return this.vectorLayerCache[n]=i,i}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),Qx={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0},Jx=function(){var e=Y(C.mark(function t(n,r,i,a,o){var u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=Br(n,r),l.abrupt("return",new Promise(function(c){if(o)o({x:i.x,y:i.y,z:i.z},function(h,d){if(h||!d)c(void 0);else{var v=new Sc(d,i.x,i.y,i.z);c(v)}});else{var f=Ys(z(z({},a),{},{url:u}),function(h,d){if(h||!d)c(void 0);else{var v=new Sc(d,i.x,i.y,i.z);c(v)}});i.xhrCancel=function(){return f.cancel()}}}));case 2:case"end":return l.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}();function Kx(e,t){var n=Array.isArray(e)?e[0]:e,r=function(o,u){return Jx(n,o,u,t==null?void 0:t.requestParameters,t==null?void 0:t.getCustomData)},i=z(z(z({},Qx),t),{},{getTileData:r});return{data:n,dataArray:[],tilesetOptions:i,isTile:!0}}function e3(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n;case"%":return t%n;case"^":return Math.pow(t,n);case"abs":return Math.abs(t);case"floor":return Math.floor(t);case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"sin":return Math.sin(t);case"cos":return Math.cos(t);case"atan":return n===-1?Math.atan(t):Math.atan2(t,n);case"min":return Math.min(t,n);case"max":return Math.max(t,n);case"log10":return Math.log(t);case"log2":return Math.log2(t);default:return 0}}function Pi(e,t){for(var n=t[0],r=n.width,i=n.height,a=t.map(function(d){return d.rasterData}),o=r*i,u=[],s=JSON.stringify(e),l=0;l<o;l++){var c=JSON.parse(s),f=K0(c,a,l);if(typeof f=="number")u.push(f);else{var h=Qu(c);u.push(h)}}return u}function K0(e,t,n){if(e.length===2&&e[0]==="band"&&typeof e[1]=="number")try{return t[e[1]][n]}catch{return 0}e.map(function(r,i){if(Array.isArray(r)&&r.length>0)switch(r[0]){case"band":try{e[i]=t[r[1]][n]}catch{e[i]=0}break;default:K0(r,t,n)}})}function t3(e){var t=Pe(e,3),n=t[0],r=t[1],i=r===void 0?-1:r,a=t[2],o=a===void 0?-1:a;if(n===void 0)return["+",0,0];var u=n.replace(/\s+/g,"");return[u,i,o]}function Qu(e){var t=t3(e),n=t[0],r=t[1],i=t[2];return Array.isArray(r)&&(r=Qu(e[1])),Array.isArray(i)&&(i=Qu(e[2])),e3(n,r,i)}var n3={nd:{type:"operation",expression:["/",["-",["band",1],["band",0]],["+",["band",1],["band",0]]]},rgb:{type:"function",method:r3}};function r3(e,t){for(var n=e[0].rasterData,r=e[1].rasterData,i=e[2].rasterData,a=[],o=(t==null?void 0:t.countCut)||[2,98],u=Pe(o,2),s=u[0],l=u[1],c=(t==null?void 0:t.RMinMax)||zr(n,s,l),f=(t==null?void 0:t.GMinMax)||zr(r,s,l),h=(t==null?void 0:t.BMinMax)||zr(i,s,l),d=0;d<n.length;d++)a.push(Math.max(0,n[d]-c[0])),a.push(Math.max(0,r[d]-f[0])),a.push(Math.max(0,i[d]-h[0]));return{rasterData:a,rMinMax:c,gMinMax:f,bMinMax:h}}function zr(e,t,n){var r=e.slice().sort(function(u,s){return u-s}),i=r.length,a=r[Math.ceil(i*t/100)],o=r[Math.ceil(i*n/100)];return[a,o]}function ll(e,t,n){return Ju.apply(this,arguments)}function Ju(){return Ju=Y(C.mark(function e(t,n,r){var i,a,o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(t.length!==0){f.next=2;break}return f.abrupt("return",{rasterData:[0],width:1,heigh:1});case 2:return f.next=4,Promise.all(t.map(function(h){var d=h.data,v=h.bands,p=v===void 0?[0]:v;return n(d,p)}));case 4:i=f.sent,a=[],i.forEach(function(h){Array.isArray(h)?a.push.apply(a,ee(h)):a.push(h)}),o=a[0],u=o.width,s=o.height,f.t0=En(r),f.next=f.t0==="function"?11:f.t0==="object"?13:15;break;case 11:return l=r(a),f.abrupt("break",16);case 13:return Array.isArray(r)?l={rasterData:Pi(r,a)}:l=i3(r,a),f.abrupt("break",16);case 15:l={rasterData:a[0].rasterData};case 16:return f.abrupt("return",z(z({},l),{},{width:u,height:s}));case 17:case"end":return f.stop()}},e)})),Ju.apply(this,arguments)}function i3(e,t){var n=n3[e.type];if(n.type==="function")return n.method(t,e==null?void 0:e.options);if(n.type==="operation")return e.type==="rgb"?a3(n.expression,t):{rasterData:Pi(n.expression,t)}}function a3(e,t){e.r,e.g,e.b;var n=Pi(e.r||["band",0],t),r=Pi(e.g||["band",0],t),i=Pi(e.b||["band",0],t);return[n,r,i]}function Ku(e,t,n,r){return es.apply(this,arguments)}function es(){return es=Y(C.mark(function e(t,n,r,i){var a;return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,ll(t,n,r);case 2:a=u.sent,i(null,{data:a});case 4:case"end":return u.stop()}},e)})),es.apply(this,arguments)}function o3(e,t){var n=t.extent,r=t.width,i=t.height,a=t.min,o=t.max,u=t.format,s=t.operation,l,c,f;if(u===void 0||G0(e))l=Array.from(e),c=r,f=i;else{var h=Array.isArray(e)?e:[e];l=ll(h,u,s)}var d={_id:1,dataArray:[{_id:1,data:l,width:c,height:f,min:a,max:o,coordinates:[[n[0],n[1]],[n[2],n[3]]]}]};return d}/*! *****************************************************************************
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
***************************************************************************** */var Ac;(function(e){(function(t){var n=typeof globalThis=="object"?globalThis:typeof Oi=="object"?Oi:typeof self=="object"?self:typeof this=="object"?this:u(),r=i(e);typeof n.Reflect<"u"&&(r=i(n.Reflect,r)),t(r,n),typeof n.Reflect>"u"&&(n.Reflect=e);function i(s,l){return function(c,f){Object.defineProperty(s,c,{configurable:!0,writable:!0,value:f}),l&&l(c,f)}}function a(){try{return Function("return this;")()}catch{}}function o(){try{return(0,eval)("(function() { return this; })()")}catch{}}function u(){return a()||o()}})(function(t,n){var r=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",a=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",o=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",u=typeof Object.create=="function",s={__proto__:[]}instanceof Array,l=!u&&!s,c={create:u?function(){return Re(Object.create(null))}:s?function(){return Re({__proto__:null})}:function(){return Re({})},has:l?function(O,N){return r.call(O,N)}:function(O,N){return N in O},get:l?function(O,N){return r.call(O,N)?O[N]:void 0}:function(O,N){return O[N]}},f=Object.getPrototypeOf(Function),h=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:pe(),d=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:me(),v=typeof WeakMap=="function"?WeakMap:Xe(),p=i?Symbol.for("@reflect-metadata:registry"):void 0,g=on(),m=j(g);function _(O,N,G,re){if(X(G)){if(!xe(O))throw new TypeError;if(!Ge(N))throw new TypeError;return k(O,N)}else{if(!xe(O))throw new TypeError;if(!de(N))throw new TypeError;if(!de(re)&&!X(re)&&!he(re))throw new TypeError;return he(re)&&(re=void 0),G=ue(G),P(O,N,G,re)}}t("decorate",_);function y(O,N){function G(re,be){if(!de(re))throw new TypeError;if(!X(be)&&!Fe(be))throw new TypeError;ye(O,N,re,be)}return G}t("metadata",y);function x(O,N,G,re){if(!de(G))throw new TypeError;return X(re)||(re=ue(re)),ye(O,N,G,re)}t("defineMetadata",x);function b(O,N,G){if(!de(N))throw new TypeError;return X(G)||(G=ue(G)),B(O,N,G)}t("hasMetadata",b);function M(O,N,G){if(!de(N))throw new TypeError;return X(G)||(G=ue(G)),K(O,N,G)}t("hasOwnMetadata",M);function T(O,N,G){if(!de(N))throw new TypeError;return X(G)||(G=ue(G)),ce(O,N,G)}t("getMetadata",T);function D(O,N,G){if(!de(N))throw new TypeError;return X(G)||(G=ue(G)),ve(O,N,G)}t("getOwnMetadata",D);function U(O,N){if(!de(O))throw new TypeError;return X(N)||(N=ue(N)),H(O,N)}t("getMetadataKeys",U);function I(O,N){if(!de(O))throw new TypeError;return X(N)||(N=ue(N)),V(O,N)}t("getOwnMetadataKeys",I);function w(O,N,G){if(!de(N))throw new TypeError;if(X(G)||(G=ue(G)),!de(N))throw new TypeError;X(G)||(G=ue(G));var re=se(N,G,!1);return X(re)?!1:re.OrdinaryDeleteMetadata(O,N,G)}t("deleteMetadata",w);function k(O,N){for(var G=O.length-1;G>=0;--G){var re=O[G],be=re(N);if(!X(be)&&!he(be)){if(!Ge(be))throw new TypeError;N=be}}return N}function P(O,N,G,re){for(var be=O.length-1;be>=0;--be){var nt=O[be],vt=nt(N,G,re);if(!X(vt)&&!he(vt)){if(!de(vt))throw new TypeError;re=vt}}return re}function B(O,N,G){var re=K(O,N,G);if(re)return!0;var be=Je(N);return he(be)?!1:B(O,be,G)}function K(O,N,G){var re=se(N,G,!1);return X(re)?!1:rt(re.OrdinaryHasOwnMetadata(O,N,G))}function ce(O,N,G){var re=K(O,N,G);if(re)return ve(O,N,G);var be=Je(N);if(!he(be))return ce(O,be,G)}function ve(O,N,G){var re=se(N,G,!1);if(!X(re))return re.OrdinaryGetOwnMetadata(O,N,G)}function ye(O,N,G,re){var be=se(G,re,!0);be.OrdinaryDefineOwnMetadata(O,N,G,re)}function H(O,N){var G=V(O,N),re=Je(O);if(re===null)return G;var be=H(re,N);if(be.length<=0)return G;if(G.length<=0)return be;for(var nt=new d,vt=[],Be=0,_e=G;Be<_e.length;Be++){var Te=_e[Be],we=nt.has(Te);we||(nt.add(Te),vt.push(Te))}for(var Me=0,ze=be;Me<ze.length;Me++){var Te=ze[Me],we=nt.has(Te);we||(nt.add(Te),vt.push(Te))}return vt}function V(O,N){var G=se(O,N,!1);return G?G.OrdinaryOwnMetadataKeys(O,N):[]}function Z(O){if(O===null)return 1;switch(typeof O){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return O===null?1:6;default:return 6}}function X(O){return O===void 0}function he(O){return O===null}function le(O){return typeof O=="symbol"}function de(O){return typeof O=="object"?O!==null:typeof O=="function"}function Ve(O,N){switch(Z(O)){case 0:return O;case 1:return O;case 2:return O;case 3:return O;case 4:return O;case 5:return O}var G=N===3?"string":N===5?"number":"default",re=Ne(O,a);if(re!==void 0){var be=re.call(O,G);if(de(be))throw new TypeError;return be}return Oe(O,G==="default"?"number":G)}function Oe(O,N){if(N==="string"){var G=O.toString;if(te(G)){var re=G.call(O);if(!de(re))return re}var be=O.valueOf;if(te(be)){var re=be.call(O);if(!de(re))return re}}else{var be=O.valueOf;if(te(be)){var re=be.call(O);if(!de(re))return re}var nt=O.toString;if(te(nt)){var re=nt.call(O);if(!de(re))return re}}throw new TypeError}function rt(O){return!!O}function $(O){return""+O}function ue(O){var N=Ve(O,3);return le(N)?N:$(N)}function xe(O){return Array.isArray?Array.isArray(O):O instanceof Object?O instanceof Array:Object.prototype.toString.call(O)==="[object Array]"}function te(O){return typeof O=="function"}function Ge(O){return typeof O=="function"}function Fe(O){switch(Z(O)){case 3:return!0;case 4:return!0;default:return!1}}function Ye(O,N){return O===N||O!==O&&N!==N}function Ne(O,N){var G=O[N];if(G!=null){if(!te(G))throw new TypeError;return G}}function Le(O){var N=Ne(O,o);if(!te(N))throw new TypeError;var G=N.call(O);if(!de(G))throw new TypeError;return G}function ot(O){return O.value}function dt(O){var N=O.next();return N.done?!1:N}function ft(O){var N=O.return;N&&N.call(O)}function Je(O){var N=Object.getPrototypeOf(O);if(typeof O!="function"||O===f||N!==f)return N;var G=O.prototype,re=G&&Object.getPrototypeOf(G);if(re==null||re===Object.prototype)return N;var be=re.constructor;return typeof be!="function"||be===O?N:be}function Lt(){var O;!X(p)&&typeof n.Reflect<"u"&&!(p in n.Reflect)&&typeof n.Reflect.defineMetadata=="function"&&(O=ne(n.Reflect));var N,G,re,be=new v,nt={registerProvider:vt,getProvider:_e,setProvider:we};return nt;function vt(Me){if(!Object.isExtensible(nt))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case O===Me:break;case X(N):N=Me;break;case N===Me:break;case X(G):G=Me;break;case G===Me:break;default:re===void 0&&(re=new d),re.add(Me);break}}function Be(Me,ze){if(!X(N)){if(N.isProviderFor(Me,ze))return N;if(!X(G)){if(G.isProviderFor(Me,ze))return N;if(!X(re))for(var it=Le(re);;){var st=dt(it);if(!st)return;var jt=ot(st);if(jt.isProviderFor(Me,ze))return ft(it),jt}}}if(!X(O)&&O.isProviderFor(Me,ze))return O}function _e(Me,ze){var it=be.get(Me),st;return X(it)||(st=it.get(ze)),X(st)&&(st=Be(Me,ze),X(st)||(X(it)&&(it=new h,be.set(Me,it)),it.set(ze,st))),st}function Te(Me){if(X(Me))throw new TypeError;return N===Me||G===Me||!X(re)&&re.has(Me)}function we(Me,ze,it){if(!Te(it))throw new Error("Metadata provider not registered.");var st=_e(Me,ze);if(st!==it){if(!X(st))return!1;var jt=be.get(Me);X(jt)&&(jt=new h,be.set(Me,jt)),jt.set(ze,it)}return!0}}function on(){var O;return!X(p)&&de(n.Reflect)&&Object.isExtensible(n.Reflect)&&(O=n.Reflect[p]),X(O)&&(O=Lt()),!X(p)&&de(n.Reflect)&&Object.isExtensible(n.Reflect)&&Object.defineProperty(n.Reflect,p,{enumerable:!1,configurable:!1,writable:!1,value:O}),O}function j(O){var N=new v,G={isProviderFor:function(Te,we){var Me=N.get(Te);return X(Me)?!1:Me.has(we)},OrdinaryDefineOwnMetadata:vt,OrdinaryHasOwnMetadata:be,OrdinaryGetOwnMetadata:nt,OrdinaryOwnMetadataKeys:Be,OrdinaryDeleteMetadata:_e};return g.registerProvider(G),G;function re(Te,we,Me){var ze=N.get(Te),it=!1;if(X(ze)){if(!Me)return;ze=new h,N.set(Te,ze),it=!0}var st=ze.get(we);if(X(st)){if(!Me)return;if(st=new h,ze.set(we,st),!O.setProvider(Te,we,G))throw ze.delete(we),it&&N.delete(Te),new Error("Wrong provider for target.")}return st}function be(Te,we,Me){var ze=re(we,Me,!1);return X(ze)?!1:rt(ze.has(Te))}function nt(Te,we,Me){var ze=re(we,Me,!1);if(!X(ze))return ze.get(Te)}function vt(Te,we,Me,ze){var it=re(Me,ze,!0);it.set(Te,we)}function Be(Te,we){var Me=[],ze=re(Te,we,!1);if(X(ze))return Me;for(var it=ze.keys(),st=Le(it),jt=0;;){var ei=dt(st);if(!ei)return Me.length=jt,Me;var Lo=ot(ei);try{Me[jt]=Lo}catch(Ro){try{ft(st)}finally{throw Ro}}jt++}}function _e(Te,we,Me){var ze=re(we,Me,!1);if(X(ze)||!ze.delete(Te))return!1;if(ze.size===0){var it=N.get(we);X(it)||(it.delete(Me),it.size===0&&N.delete(it))}return!0}}function ne(O){var N=O.defineMetadata,G=O.hasOwnMetadata,re=O.getOwnMetadata,be=O.getOwnMetadataKeys,nt=O.deleteMetadata,vt=new v,Be={isProviderFor:function(_e,Te){var we=vt.get(_e);return X(we)?be(_e,Te).length?(X(we)&&(we=new d,vt.set(_e,we)),we.add(Te),!0):!1:we.has(Te)},OrdinaryDefineOwnMetadata:N,OrdinaryHasOwnMetadata:G,OrdinaryGetOwnMetadata:re,OrdinaryOwnMetadataKeys:be,OrdinaryDeleteMetadata:nt};return Be}function se(O,N,G){var re=g.getProvider(O,N);if(!X(re))return re;if(G){if(g.setProvider(O,N,m))return m;throw new Error("Illegal state.")}}function pe(){var O={},N=[],G=function(){function Be(_e,Te,we){this._index=0,this._keys=_e,this._values=Te,this._selector=we}return Be.prototype["@@iterator"]=function(){return this},Be.prototype[o]=function(){return this},Be.prototype.next=function(){var _e=this._index;if(_e>=0&&_e<this._keys.length){var Te=this._selector(this._keys[_e],this._values[_e]);return _e+1>=this._keys.length?(this._index=-1,this._keys=N,this._values=N):this._index++,{value:Te,done:!1}}return{value:void 0,done:!0}},Be.prototype.throw=function(_e){throw this._index>=0&&(this._index=-1,this._keys=N,this._values=N),_e},Be.prototype.return=function(_e){return this._index>=0&&(this._index=-1,this._keys=N,this._values=N),{value:_e,done:!0}},Be}(),re=function(){function Be(){this._keys=[],this._values=[],this._cacheKey=O,this._cacheIndex=-2}return Object.defineProperty(Be.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Be.prototype.has=function(_e){return this._find(_e,!1)>=0},Be.prototype.get=function(_e){var Te=this._find(_e,!1);return Te>=0?this._values[Te]:void 0},Be.prototype.set=function(_e,Te){var we=this._find(_e,!0);return this._values[we]=Te,this},Be.prototype.delete=function(_e){var Te=this._find(_e,!1);if(Te>=0){for(var we=this._keys.length,Me=Te+1;Me<we;Me++)this._keys[Me-1]=this._keys[Me],this._values[Me-1]=this._values[Me];return this._keys.length--,this._values.length--,Ye(_e,this._cacheKey)&&(this._cacheKey=O,this._cacheIndex=-2),!0}return!1},Be.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=O,this._cacheIndex=-2},Be.prototype.keys=function(){return new G(this._keys,this._values,be)},Be.prototype.values=function(){return new G(this._keys,this._values,nt)},Be.prototype.entries=function(){return new G(this._keys,this._values,vt)},Be.prototype["@@iterator"]=function(){return this.entries()},Be.prototype[o]=function(){return this.entries()},Be.prototype._find=function(_e,Te){if(!Ye(this._cacheKey,_e)){this._cacheIndex=-1;for(var we=0;we<this._keys.length;we++)if(Ye(this._keys[we],_e)){this._cacheIndex=we;break}}return this._cacheIndex<0&&Te&&(this._cacheIndex=this._keys.length,this._keys.push(_e),this._values.push(void 0)),this._cacheIndex},Be}();return re;function be(Be,_e){return Be}function nt(Be,_e){return _e}function vt(Be,_e){return[Be,_e]}}function me(){var O=function(){function N(){this._map=new h}return Object.defineProperty(N.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),N.prototype.has=function(G){return this._map.has(G)},N.prototype.add=function(G){return this._map.set(G,G),this},N.prototype.delete=function(G){return this._map.delete(G)},N.prototype.clear=function(){this._map.clear()},N.prototype.keys=function(){return this._map.keys()},N.prototype.values=function(){return this._map.keys()},N.prototype.entries=function(){return this._map.entries()},N.prototype["@@iterator"]=function(){return this.keys()},N.prototype[o]=function(){return this.keys()},N}();return O}function Xe(){var O=16,N=c.create(),G=re();return function(){function _e(){this._key=re()}return _e.prototype.has=function(Te){var we=be(Te,!1);return we!==void 0?c.has(we,this._key):!1},_e.prototype.get=function(Te){var we=be(Te,!1);return we!==void 0?c.get(we,this._key):void 0},_e.prototype.set=function(Te,we){var Me=be(Te,!0);return Me[this._key]=we,this},_e.prototype.delete=function(Te){var we=be(Te,!1);return we!==void 0?delete we[this._key]:!1},_e.prototype.clear=function(){this._key=re()},_e}();function re(){var _e;do _e="@@WeakMap@@"+Be();while(c.has(N,_e));return N[_e]=!0,_e}function be(_e,Te){if(!r.call(_e,G)){if(!Te)return;Object.defineProperty(_e,G,{value:c.create()})}return _e[G]}function nt(_e,Te){for(var we=0;we<Te;++we)_e[we]=Math.random()*255|0;return _e}function vt(_e){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(_e)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(_e)):nt(new Uint8Array(_e),_e):nt(new Array(_e),_e)}function Be(){var _e=vt(O);_e[6]=_e[6]&79|64,_e[8]=_e[8]&191|128;for(var Te="",we=0;we<O;++we){var Me=_e[we];(we===4||we===6||we===8)&&(Te+="-"),Me<16&&(Te+="0"),Te+=Me.toString(16).toLowerCase()}return Te}}function Re(O){return O.__=void 0,delete O.__,O}})})(Ac||(Ac={}));var hn="named",eg="name",cl="unmanaged",tg="optional",bo="inject",ji="multi_inject",ng="inversify:tagged",rg="inversify:tagged_props",ts="inversify:paramtypes",u3="design:paramtypes",Fi="post_construct";function s3(){return[bo,ji,eg,cl,hn,tg]}var Ec=s3(),kt={Request:"Request",Singleton:"Singleton",Transient:"Transient"},Mt={ConstantValue:"ConstantValue",Constructor:"Constructor",DynamicValue:"DynamicValue",Factory:"Factory",Function:"Function",Instance:"Instance",Invalid:"Invalid",Provider:"Provider"},Cn={ClassProperty:"ClassProperty",ConstructorArgument:"ConstructorArgument",Variable:"Variable"},l3=0;function ua(){return l3++}var c3=function(){function e(t,n){this.id=ua(),this.activated=!1,this.serviceIdentifier=t,this.scope=n,this.type=Mt.Invalid,this.constraint=function(r){return!0},this.implementationType=null,this.cache=null,this.factory=null,this.provider=null,this.onActivation=null,this.dynamicValue=null}return e.prototype.clone=function(){var t=new e(this.serviceIdentifier,this.scope);return t.activated=t.scope===kt.Singleton?this.activated:!1,t.implementationType=this.implementationType,t.dynamicValue=this.dynamicValue,t.scope=this.scope,t.type=this.type,t.factory=this.factory,t.provider=this.provider,t.constraint=this.constraint,t.onActivation=this.onActivation,t.cache=this.cache,t},e}(),f3="Cannot apply @injectable decorator multiple times.",h3="Metadata key was used more than once in a parameter:",ui="NULL argument",Cc="Key Not Found",d3="Ambiguous match found for serviceIdentifier:",v3="Could not unbind serviceIdentifier:",p3="No matching bindings found for serviceIdentifier:",g3="Missing required @injectable annotation in:",m3="Missing required @inject or @multiInject annotation in:",y3=function(e){return"@inject called with undefined this could mean that the class "+e+" has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."},_3="Circular dependency found:",x3="Invalid binding type:",b3="No snapshot available to restore.",S3="Invalid return type in middleware. Middleware must return!",A3="Value provided to function binding must be a function!",E3="The toSelf function can only be applied when a constructor is used as service identifier",C3="The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",w3=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"The number of constructor arguments in the derived class "+(e[0]+" must be >= than the number of constructor arguments of its base class.")},T3="Invalid Container constructor argument. Container options must be an object.",M3="Invalid Container option. Default scope must be a string ('singleton' or 'transient').",k3="Invalid Container option. Auto bind injectable must be a boolean",I3="Invalid Container option. Skip base check must be a boolean",L3="Cannot apply @postConstruct decorator multiple times in the same class",R3=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"@postConstruct error in class "+e[0]+": "+e[1]},P3=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"It looks like there is a circular dependency "+("in one of the '"+e[0]+"' bindings. Please investigate bindings with")+("service identifier '"+e[1]+"'.")},F3="Maximum call stack size exceeded",O3=function(){function e(){}return e.prototype.getConstructorMetadata=function(t){var n=Reflect.getMetadata(ts,t),r=Reflect.getMetadata(ng,t);return{compilerGeneratedMetadata:n,userGeneratedMetadata:r||{}}},e.prototype.getPropertiesMetadata=function(t){var n=Reflect.getMetadata(rg,t)||[];return n},e}(),za={MultipleBindingsAvailable:2,NoBindingsAvailable:0,OnlyOneBindingAvailable:1};function ig(e){return e instanceof RangeError||e.message===F3}function Hi(e){if(typeof e=="function"){var t=e;return t.name}else{if(typeof e=="symbol")return e.toString();var t=e;return t}}function wc(e,t,n){var r="",i=n(e,t);return i.length!==0&&(r=`
Registered bindings:`,i.forEach(function(a){var o="Object";a.implementationType!==null&&(o=So(a.implementationType)),r=r+`
 `+o,a.constraint.metaData&&(r=r+" - "+a.constraint.metaData)})),r}function ag(e,t){return e.parentRequest===null?!1:e.parentRequest.serviceIdentifier===t?!0:ag(e.parentRequest,t)}function D3(e){function t(r,i){i===void 0&&(i=[]);var a=Hi(r.serviceIdentifier);return i.push(a),r.parentRequest!==null?t(r.parentRequest,i):i}var n=t(e);return n.reverse().join(" --> ")}function og(e){e.childRequests.forEach(function(t){if(ag(t,t.serviceIdentifier)){var n=D3(t);throw new Error(_3+" "+n)}else og(t)})}function N3(e,t){if(t.isTagged()||t.isNamed()){var n="",r=t.getNamedTag(),i=t.getCustomTags();return r!==null&&(n+=r.toString()+`
`),i!==null&&i.forEach(function(a){n+=a.toString()+`
`})," "+e+`
 `+e+" - "+n}else return" "+e}function So(e){if(e.name)return e.name;var t=e.toString(),n=t.match(/^function\s*([^\s(]+)/);return n?n[1]:"Anonymous function: "+t}var ug=function(){function e(t){this.id=ua(),this.container=t}return e.prototype.addPlan=function(t){this.plan=t},e.prototype.setCurrentRequest=function(t){this.currentRequest=t},e}(),Qn=function(){function e(t,n){this.key=t,this.value=n}return e.prototype.toString=function(){return this.key===hn?"named: "+this.value.toString()+" ":"tagged: { key:"+this.key.toString()+", value: "+this.value+" }"},e}(),B3=function(){function e(t,n){this.parentContext=t,this.rootRequest=n}return e}();function U3(e,t,n,r){var i=ng;sg(i,e,t,r,n)}function z3(e,t,n){var r=rg;sg(r,e.constructor,t,n)}function sg(e,t,n,r,i){var a={},o=typeof i=="number",u=i!==void 0&&o?i.toString():n;if(o&&n!==void 0)throw new Error(C3);Reflect.hasOwnMetadata(e,t)&&(a=Reflect.getMetadata(e,t));var s=a[u];if(!Array.isArray(s))s=[];else for(var l=0,c=s;l<c.length;l++){var f=c[l];if(f.key===r.key)throw new Error(h3+" "+f.key.toString())}s.push(r),a[u]=s,Reflect.defineMetadata(e,a,t)}function Tc(e,t){Reflect.decorate(e,t)}function $3(e,t){return function(n,r){t(n,r,e)}}function V3(e,t,n){typeof n=="number"?Tc([$3(n,e)],t):typeof n=="string"?Reflect.decorate([e],t,n):Tc([e],t)}var j3=function(){function e(t){this._cb=t}return e.prototype.unwrap=function(){return this._cb()},e}();function je(e){return function(t,n,r){if(e===void 0)throw new Error(y3(t.name));var i=new Qn(bo,e);typeof r=="number"?U3(t,n,r,i):z3(t,n,i)}}var H3=function(){function e(t){this.str=t}return e.prototype.startsWith=function(t){return this.str.indexOf(t)===0},e.prototype.endsWith=function(t){var n="",r=t.split("").reverse().join("");return n=this.str.split("").reverse().join(""),this.startsWith.call({str:n},r)},e.prototype.contains=function(t){return this.str.indexOf(t)!==-1},e.prototype.equals=function(t){return this.str===t},e.prototype.value=function(){return this.str},e}(),Ao=function(){function e(t,n,r,i){this.id=ua(),this.type=t,this.serviceIdentifier=r,this.name=new H3(n||""),this.metadata=new Array;var a=null;typeof i=="string"?a=new Qn(hn,i):i instanceof Qn&&(a=i),a!==null&&this.metadata.push(a)}return e.prototype.hasTag=function(t){for(var n=0,r=this.metadata;n<r.length;n++){var i=r[n];if(i.key===t)return!0}return!1},e.prototype.isArray=function(){return this.hasTag(ji)},e.prototype.matchesArray=function(t){return this.matchesTag(ji)(t)},e.prototype.isNamed=function(){return this.hasTag(hn)},e.prototype.isTagged=function(){return this.metadata.some(function(t){return Ec.every(function(n){return t.key!==n})})},e.prototype.isOptional=function(){return this.matchesTag(tg)(!0)},e.prototype.getNamedTag=function(){return this.isNamed()?this.metadata.filter(function(t){return t.key===hn})[0]:null},e.prototype.getCustomTags=function(){return this.isTagged()?this.metadata.filter(function(t){return Ec.every(function(n){return t.key!==n})}):null},e.prototype.matchesNamedTag=function(t){return this.matchesTag(hn)(t)},e.prototype.matchesTag=function(t){var n=this;return function(r){for(var i=0,a=n.metadata;i<a.length;i++){var o=a[i];if(o.key===t&&o.value===r)return!0}return!1}},e}(),Za=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};function G3(e,t){var n=So(t),r=lg(e,n,t,!1);return r}function lg(e,t,n,r){var i=e.getConstructorMetadata(n),a=i.compilerGeneratedMetadata;if(a===void 0){var o=g3+" "+t+".";throw new Error(o)}var u=i.userGeneratedMetadata,s=Object.keys(u),l=n.length===0&&s.length>0,c=s.length>n.length,f=l||c?s.length:n.length,h=Y3(r,t,a,u,f),d=cg(e,n),v=Za(Za([],h),d);return v}function W3(e,t,n,r,i){var a=i[e.toString()]||[],o=hg(a),u=o.unmanaged!==!0,s=r[e],l=o.inject||o.multiInject;if(s=l||s,s instanceof j3&&(s=s.unwrap()),u){var c=s===Object,f=s===Function,h=s===void 0,d=c||f||h;if(!t&&d){var v=m3+" argument "+e+" in class "+n+".";throw new Error(v)}var p=new Ao(Cn.ConstructorArgument,o.targetName,s);return p.metadata=a,p}return null}function Y3(e,t,n,r,i){for(var a=[],o=0;o<i;o++){var u=o,s=W3(u,e,t,n,r);s!==null&&a.push(s)}return a}function cg(e,t){for(var n=e.getPropertiesMetadata(t),r=[],i=Object.keys(n),a=0,o=i;a<o.length;a++){var u=o[a],s=n[u],l=hg(n[u]),c=l.targetName||u,f=l.inject||l.multiInject,h=new Ao(Cn.ClassProperty,c,f);h.metadata=s,r.push(h)}var d=Object.getPrototypeOf(t.prototype).constructor;if(d!==Object){var v=cg(e,d);r=Za(Za([],r),v)}return r}function fg(e,t){var n=Object.getPrototypeOf(t.prototype).constructor;if(n!==Object){var r=So(n),i=lg(e,r,n,!0),a=i.map(function(s){return s.metadata.filter(function(l){return l.key===cl})}),o=[].concat.apply([],a).length,u=i.length-o;return u>0?u:fg(e,n)}else return 0}function hg(e){var t={};return e.forEach(function(n){t[n.key.toString()]=n.value}),{inject:t[bo],multiInject:t[ji],targetName:t[eg],unmanaged:t[cl]}}var fl=function(){function e(t,n,r,i,a){this.id=ua(),this.serviceIdentifier=t,this.parentContext=n,this.parentRequest=r,this.target=a,this.childRequests=[],this.bindings=Array.isArray(i)?i:[i],this.requestScope=r===null?new Map:null}return e.prototype.addChildRequest=function(t,n,r){var i=new e(t,this.parentContext,this,n,r);return this.childRequests.push(i),i},e}();function ns(e){return e._bindingDictionary}function X3(e,t,n,r,i,a){var o=e?ji:bo,u=new Qn(o,n),s=new Ao(t,r,n,u);if(i!==void 0){var l=new Qn(i,a);s.metadata.push(l)}return s}function Mc(e,t,n,r,i){var a=Gi(n.container,i.serviceIdentifier),o=[];return a.length===za.NoBindingsAvailable&&n.container.options.autoBindInjectable&&typeof i.serviceIdentifier=="function"&&e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata&&(n.container.bind(i.serviceIdentifier).toSelf(),a=Gi(n.container,i.serviceIdentifier)),t?o=a:o=a.filter(function(u){var s=new fl(u.serviceIdentifier,n,r,u,i);return u.constraint(s)}),Z3(i.serviceIdentifier,o,i,n.container),o}function Z3(e,t,n,r){switch(t.length){case za.NoBindingsAvailable:if(n.isOptional())return t;var i=Hi(e),a=p3;throw a+=N3(i,n),a+=wc(r,i,Gi),new Error(a);case za.OnlyOneBindingAvailable:if(!n.isArray())return t;case za.MultipleBindingsAvailable:default:if(n.isArray())return t;var i=Hi(e),a=d3+" "+i;throw a+=wc(r,i,Gi),new Error(a)}}function dg(e,t,n,r,i,a){var o,u;if(i===null){o=Mc(e,t,r,null,a),u=new fl(n,r,null,o,a);var s=new B3(r,u);r.addPlan(s)}else o=Mc(e,t,r,i,a),u=i.addChildRequest(a.serviceIdentifier,o,a);o.forEach(function(l){var c=null;if(a.isArray())c=u.addChildRequest(l.serviceIdentifier,l,a);else{if(l.cache)return;c=u}if(l.type===Mt.Instance&&l.implementationType!==null){var f=G3(e,l.implementationType);if(!r.container.options.skipBaseClassChecks){var h=fg(e,l.implementationType);if(f.length<h){var d=w3(So(l.implementationType));throw new Error(d)}}f.forEach(function(v){dg(e,!1,v.serviceIdentifier,r,c,v)})}})}function Gi(e,t){var n=[],r=ns(e);return r.hasKey(t)?n=r.get(t):e.parent!==null&&(n=Gi(e.parent,t)),n}function q3(e,t,n,r,i,a,o,u){u===void 0&&(u=!1);var s=new ug(t),l=X3(n,r,i,"",a,o);try{return dg(e,u,i,s,null,l),s}catch(c){throw ig(c)&&s.plan&&og(s.plan.rootRequest),c}}function Q3(e,t,n,r){var i=new Ao(Cn.Variable,"",t,new Qn(n,r)),a=new ug(e),o=new fl(t,a,null,[],i);return o}var J3=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};function K3(e,t,n){var r=t.filter(function(a){return a.target!==null&&a.target.type===Cn.ClassProperty}),i=r.map(n);return r.forEach(function(a,o){var u="";u=a.target.name.value();var s=i[o];e[u]=s}),e}function eb(e,t){return new(e.bind.apply(e,J3([void 0],t)))}function tb(e,t){if(Reflect.hasMetadata(Fi,e)){var n=Reflect.getMetadata(Fi,e);try{t[n.value]()}catch(r){throw new Error(R3(e.name,r.message))}}}function nb(e,t,n){var r=null;if(t.length>0){var i=t.filter(function(o){return o.target!==null&&o.target.type===Cn.ConstructorArgument}),a=i.map(n);r=eb(e,a),r=K3(r,t,n)}else r=new e;return tb(e,r),r}var uu=function(e,t,n){try{return n()}catch(r){throw ig(r)?new Error(P3(e,t.toString())):r}},rs=function(e){return function(t){t.parentContext.setCurrentRequest(t);var n=t.bindings,r=t.childRequests,i=t.target&&t.target.isArray(),a=!t.parentRequest||!t.parentRequest.target||!t.target||!t.parentRequest.target.matchesArray(t.target.serviceIdentifier);if(i&&a)return r.map(function(f){var h=rs(e);return h(f)});var o=null;if(t.target.isOptional()&&n.length===0)return;var u=n[0],s=u.scope===kt.Singleton,l=u.scope===kt.Request;if(s&&u.activated)return u.cache;if(l&&e!==null&&e.has(u.id))return e.get(u.id);if(u.type===Mt.ConstantValue)o=u.cache,u.activated=!0;else if(u.type===Mt.Function)o=u.cache,u.activated=!0;else if(u.type===Mt.Constructor)o=u.implementationType;else if(u.type===Mt.DynamicValue&&u.dynamicValue!==null)o=uu("toDynamicValue",u.serviceIdentifier,function(){return u.dynamicValue(t.parentContext)});else if(u.type===Mt.Factory&&u.factory!==null)o=uu("toFactory",u.serviceIdentifier,function(){return u.factory(t.parentContext)});else if(u.type===Mt.Provider&&u.provider!==null)o=uu("toProvider",u.serviceIdentifier,function(){return u.provider(t.parentContext)});else if(u.type===Mt.Instance&&u.implementationType!==null)o=nb(u.implementationType,r,rs(e));else{var c=Hi(t.serviceIdentifier);throw new Error(x3+" "+c)}return typeof u.onActivation=="function"&&(o=u.onActivation(t.parentContext,o)),s&&(u.cache=o,u.activated=!0),l&&e!==null&&!e.has(u.id)&&e.set(u.id,o),o}};function rb(e){var t=rs(e.plan.rootRequest.requestScope);return t(e.plan.rootRequest)}var bn=function(e,t){var n=e.parentRequest;return n!==null?t(n)?!0:bn(n,t):!1},wi=function(e){return function(t){var n=function(r){return r!==null&&r.target!==null&&r.target.matchesTag(e)(t)};return n.metaData=new Qn(e,t),n}},wa=wi(hn),su=function(e){return function(t){var n=null;if(t!==null)if(n=t.bindings[0],typeof e=="string"){var r=n.serviceIdentifier;return r===e}else{var i=t.bindings[0].implementationType;return e===i}return!1}},hl=function(){function e(t){this._binding=t}return e.prototype.when=function(t){return this._binding.constraint=t,new wt(this._binding)},e.prototype.whenTargetNamed=function(t){return this._binding.constraint=wa(t),new wt(this._binding)},e.prototype.whenTargetIsDefault=function(){return this._binding.constraint=function(t){var n=t.target!==null&&!t.target.isNamed()&&!t.target.isTagged();return n},new wt(this._binding)},e.prototype.whenTargetTagged=function(t,n){return this._binding.constraint=wi(t)(n),new wt(this._binding)},e.prototype.whenInjectedInto=function(t){return this._binding.constraint=function(n){return su(t)(n.parentRequest)},new wt(this._binding)},e.prototype.whenParentNamed=function(t){return this._binding.constraint=function(n){return wa(t)(n.parentRequest)},new wt(this._binding)},e.prototype.whenParentTagged=function(t,n){return this._binding.constraint=function(r){return wi(t)(n)(r.parentRequest)},new wt(this._binding)},e.prototype.whenAnyAncestorIs=function(t){return this._binding.constraint=function(n){return bn(n,su(t))},new wt(this._binding)},e.prototype.whenNoAncestorIs=function(t){return this._binding.constraint=function(n){return!bn(n,su(t))},new wt(this._binding)},e.prototype.whenAnyAncestorNamed=function(t){return this._binding.constraint=function(n){return bn(n,wa(t))},new wt(this._binding)},e.prototype.whenNoAncestorNamed=function(t){return this._binding.constraint=function(n){return!bn(n,wa(t))},new wt(this._binding)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._binding.constraint=function(r){return bn(r,wi(t)(n))},new wt(this._binding)},e.prototype.whenNoAncestorTagged=function(t,n){return this._binding.constraint=function(r){return!bn(r,wi(t)(n))},new wt(this._binding)},e.prototype.whenAnyAncestorMatches=function(t){return this._binding.constraint=function(n){return bn(n,t)},new wt(this._binding)},e.prototype.whenNoAncestorMatches=function(t){return this._binding.constraint=function(n){return!bn(n,t)},new wt(this._binding)},e}(),wt=function(){function e(t){this._binding=t}return e.prototype.onActivation=function(t){return this._binding.onActivation=t,new hl(this._binding)},e}(),Gn=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new hl(this._binding),this._bindingOnSyntax=new wt(this._binding)}return e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,n){return this._bindingWhenSyntax.whenTargetTagged(t,n)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,n){return this._bindingWhenSyntax.whenParentTagged(t,n)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,n)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenNoAncestorTagged(t,n)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),ib=function(){function e(t){this._binding=t}return e.prototype.inRequestScope=function(){return this._binding.scope=kt.Request,new Gn(this._binding)},e.prototype.inSingletonScope=function(){return this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.inTransientScope=function(){return this._binding.scope=kt.Transient,new Gn(this._binding)},e}(),kc=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new hl(this._binding),this._bindingOnSyntax=new wt(this._binding),this._bindingInSyntax=new ib(t)}return e.prototype.inRequestScope=function(){return this._bindingInSyntax.inRequestScope()},e.prototype.inSingletonScope=function(){return this._bindingInSyntax.inSingletonScope()},e.prototype.inTransientScope=function(){return this._bindingInSyntax.inTransientScope()},e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,n){return this._bindingWhenSyntax.whenTargetTagged(t,n)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,n){return this._bindingWhenSyntax.whenParentTagged(t,n)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,n)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenNoAncestorTagged(t,n)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),ab=function(){function e(t){this._binding=t}return e.prototype.to=function(t){return this._binding.type=Mt.Instance,this._binding.implementationType=t,new kc(this._binding)},e.prototype.toSelf=function(){if(typeof this._binding.serviceIdentifier!="function")throw new Error(""+E3);var t=this._binding.serviceIdentifier;return this.to(t)},e.prototype.toConstantValue=function(t){return this._binding.type=Mt.ConstantValue,this._binding.cache=t,this._binding.dynamicValue=null,this._binding.implementationType=null,this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.toDynamicValue=function(t){return this._binding.type=Mt.DynamicValue,this._binding.cache=null,this._binding.dynamicValue=t,this._binding.implementationType=null,new kc(this._binding)},e.prototype.toConstructor=function(t){return this._binding.type=Mt.Constructor,this._binding.implementationType=t,this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.toFactory=function(t){return this._binding.type=Mt.Factory,this._binding.factory=t,this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.toFunction=function(t){if(typeof t!="function")throw new Error(A3);var n=this.toConstantValue(t);return this._binding.type=Mt.Function,this._binding.scope=kt.Singleton,n},e.prototype.toAutoFactory=function(t){return this._binding.type=Mt.Factory,this._binding.factory=function(n){var r=function(){return n.container.get(t)};return r},this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.toProvider=function(t){return this._binding.type=Mt.Provider,this._binding.provider=t,this._binding.scope=kt.Singleton,new Gn(this._binding)},e.prototype.toService=function(t){this.toDynamicValue(function(n){return n.container.get(t)})},e}(),ob=function(){function e(){}return e.of=function(t,n){var r=new e;return r.bindings=t,r.middleware=n,r},e}(),Ic=function(){function e(){this._map=new Map}return e.prototype.getMap=function(){return this._map},e.prototype.add=function(t,n){if(t==null)throw new Error(ui);if(n==null)throw new Error(ui);var r=this._map.get(t);r!==void 0?(r.push(n),this._map.set(t,r)):this._map.set(t,[n])},e.prototype.get=function(t){if(t==null)throw new Error(ui);var n=this._map.get(t);if(n!==void 0)return n;throw new Error(Cc)},e.prototype.remove=function(t){if(t==null)throw new Error(ui);if(!this._map.delete(t))throw new Error(Cc)},e.prototype.removeByCondition=function(t){var n=this;this._map.forEach(function(r,i){var a=r.filter(function(o){return!t(o)});a.length>0?n._map.set(i,a):n._map.delete(i)})},e.prototype.hasKey=function(t){if(t==null)throw new Error(ui);return this._map.has(t)},e.prototype.clone=function(){var t=new e;return this._map.forEach(function(n,r){n.forEach(function(i){return t.add(r,i.clone())})}),t},e.prototype.traverse=function(t){this._map.forEach(function(n,r){t(r,n)})},e}(),ub=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function u(c){try{l(r.next(c))}catch(f){o(f)}}function s(c){try{l(r.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((r=r.apply(e,t||[])).next())})},sb=function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},lb=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},vg=function(){function e(t){this._appliedMiddleware=[];var n=t||{};if(typeof n!="object")throw new Error(""+T3);if(n.defaultScope===void 0)n.defaultScope=kt.Transient;else if(n.defaultScope!==kt.Singleton&&n.defaultScope!==kt.Transient&&n.defaultScope!==kt.Request)throw new Error(""+M3);if(n.autoBindInjectable===void 0)n.autoBindInjectable=!1;else if(typeof n.autoBindInjectable!="boolean")throw new Error(""+k3);if(n.skipBaseClassChecks===void 0)n.skipBaseClassChecks=!1;else if(typeof n.skipBaseClassChecks!="boolean")throw new Error(""+I3);this.options={autoBindInjectable:n.autoBindInjectable,defaultScope:n.defaultScope,skipBaseClassChecks:n.skipBaseClassChecks},this.id=ua(),this._bindingDictionary=new Ic,this._snapshots=[],this._middleware=null,this.parent=null,this._metadataReader=new O3}return e.merge=function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];var a=new e,o=lb([t,n],r).map(function(l){return ns(l)}),u=ns(a);function s(l,c){l.traverse(function(f,h){h.forEach(function(d){c.add(d.serviceIdentifier,d.clone())})})}return o.forEach(function(l){s(l,u)}),a},e.prototype.load=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=this._getContainerModuleHelpersFactory(),i=0,a=t;i<a.length;i++){var o=a[i],u=r(o.id);o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)}},e.prototype.loadAsync=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ub(this,void 0,void 0,function(){var r,i,a,o,u;return sb(this,function(s){switch(s.label){case 0:r=this._getContainerModuleHelpersFactory(),i=0,a=t,s.label=1;case 1:return i<a.length?(o=a[i],u=r(o.id),[4,o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)]):[3,4];case 2:s.sent(),s.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.unload=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=function(a){return function(o){return o.moduleId===a}};n.forEach(function(a){var o=i(a.id);t._bindingDictionary.removeByCondition(o)})},e.prototype.bind=function(t){var n=this.options.defaultScope||kt.Transient,r=new c3(t,n);return this._bindingDictionary.add(t,r),new ab(r)},e.prototype.rebind=function(t){return this.unbind(t),this.bind(t)},e.prototype.unbind=function(t){try{this._bindingDictionary.remove(t)}catch{throw new Error(v3+" "+Hi(t))}},e.prototype.unbindAll=function(){this._bindingDictionary=new Ic},e.prototype.isBound=function(t){var n=this._bindingDictionary.hasKey(t);return!n&&this.parent&&(n=this.parent.isBound(t)),n},e.prototype.isBoundNamed=function(t,n){return this.isBoundTagged(t,hn,n)},e.prototype.isBoundTagged=function(t,n,r){var i=!1;if(this._bindingDictionary.hasKey(t)){var a=this._bindingDictionary.get(t),o=Q3(this,t,n,r);i=a.some(function(u){return u.constraint(o)})}return!i&&this.parent&&(i=this.parent.isBoundTagged(t,n,r)),i},e.prototype.snapshot=function(){this._snapshots.push(ob.of(this._bindingDictionary.clone(),this._middleware))},e.prototype.restore=function(){var t=this._snapshots.pop();if(t===void 0)throw new Error(b3);this._bindingDictionary=t.bindings,this._middleware=t.middleware},e.prototype.createChild=function(t){var n=new e(t||this.options);return n.parent=this,n},e.prototype.applyMiddleware=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._appliedMiddleware=this._appliedMiddleware.concat(t);var r=this._middleware?this._middleware:this._planAndResolve();this._middleware=t.reduce(function(i,a){return a(i)},r)},e.prototype.applyCustomMetadataReader=function(t){this._metadataReader=t},e.prototype.get=function(t){return this._get(!1,!1,Cn.Variable,t)},e.prototype.getTagged=function(t,n,r){return this._get(!1,!1,Cn.Variable,t,n,r)},e.prototype.getNamed=function(t,n){return this.getTagged(t,hn,n)},e.prototype.getAll=function(t){return this._get(!0,!0,Cn.Variable,t)},e.prototype.getAllTagged=function(t,n,r){return this._get(!1,!0,Cn.Variable,t,n,r)},e.prototype.getAllNamed=function(t,n){return this.getAllTagged(t,hn,n)},e.prototype.resolve=function(t){var n=this.createChild();return n.bind(t).toSelf(),this._appliedMiddleware.forEach(function(r){n.applyMiddleware(r)}),n.get(t)},e.prototype._getContainerModuleHelpersFactory=function(){var t=this,n=function(u,s){u._binding.moduleId=s},r=function(u){return function(s){var l=t.bind.bind(t),c=l(s);return n(c,u),c}},i=function(u){return function(s){var l=t.unbind.bind(t);l(s)}},a=function(u){return function(s){var l=t.isBound.bind(t);return l(s)}},o=function(u){return function(s){var l=t.rebind.bind(t),c=l(s);return n(c,u),c}};return function(u){return{bindFunction:r(u),isboundFunction:a(),rebindFunction:o(u),unbindFunction:i()}}},e.prototype._get=function(t,n,r,i,a,o){var u=null,s={avoidConstraints:t,contextInterceptor:function(l){return l},isMultiInject:n,key:a,serviceIdentifier:i,targetType:r,value:o};if(this._middleware){if(u=this._middleware(s),u==null)throw new Error(S3)}else u=this._planAndResolve()(s);return u},e.prototype._planAndResolve=function(){var t=this;return function(n){var r=q3(t._metadataReader,t,n.isMultiInject,n.targetType,n.serviceIdentifier,n.key,n.value,n.avoidConstraints);r=n.contextInterceptor(r);var i=rb(r);return i}},e}();function De(){return function(e){if(Reflect.hasOwnMetadata(ts,e))throw new Error(f3);var t=Reflect.getMetadata(u3,e)||[];return Reflect.defineMetadata(ts,t,e),e}}function cb(){return function(e,t,n){var r=new Qn(Fi,t);if(Reflect.hasOwnMetadata(Fi,e.constructor))throw new Error(L3);Reflect.defineMetadata(Fi,r,e.constructor)}}var si=Symbol.for("INJECTION");function Eo(e,t,n,r){function i(){return r&&!Reflect.hasMetadata(si,this,t)&&Reflect.defineMetadata(si,n(),this,t),Reflect.hasMetadata(si,this,t)?Reflect.getMetadata(si,this,t):n()}function a(o){Reflect.defineMetadata(si,o,this,t)}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:i,set:a})}function fb(e,t){return function(n){return function(r,i){var a=function(){return e.get(n)};Eo(r,i,a,t)}}}function hb(e,t){return function(n,r){return function(i,a){var o=function(){return e.getNamed(n,r)};Eo(i,a,o,t)}}}function db(e,t){return function(n,r,i){return function(a,o){var u=function(){return e.getTagged(n,r,i)};Eo(a,o,u,t)}}}function vb(e,t){return function(n){return function(r,i){var a=function(){return e.getAll(n)};Eo(r,i,a,t)}}}function pb(e,t){t===void 0&&(t=!0);var n=fb(e,t),r=hb(e,t),i=db(e,t),a=vb(e,t);return{lazyInject:n,lazyInjectNamed:r,lazyInjectTagged:i,lazyMultiInject:a}}var ie={IEventEmitter:Symbol.for("IEventEmitter"),ISceneService:Symbol.for("ISceneService"),IGlobalConfigService:Symbol.for("IGlobalConfigService"),ICameraService:Symbol.for("ICameraService"),ICoordinateSystemService:Symbol.for("ICoordinateSystemService"),ILayerService:Symbol.for("ILayerService"),IDebugService:Symbol.for("IDebugService"),ILayerMappingService:Symbol.for("ILayerMappingService"),ILayerStyleService:Symbol.for("ILayerStyleService"),IMapService:Symbol.for("IMapService"),IMarkerService:Symbol.for("IMarkerService"),IPopupService:Symbol.for("PopupService"),IFactoryMapService:Symbol.for("Factory<IMapService>"),IRendererService:Symbol.for("IRendererService"),IShaderModuleService:Symbol.for("IShaderModuleService"),IIconService:Symbol.for("IIconService"),IFontService:Symbol.for("IFontService"),IInteractionService:Symbol.for("IInteractionService"),IPickingService:Symbol.for("IPickingService"),IControlService:Symbol.for("IControlService"),IStyleAttributeService:Symbol.for("IStyleAttributeService"),ILayer:Symbol.for("ILayer"),ILayerPlugin:Symbol.for("ILayerPlugin"),INormalPass:Symbol.for("INormalPass"),IPostProcessor:Symbol.for("IPostProcessor"),IPostProcessingPass:Symbol.for("IPostProcessingPass"),IFactoryPostProcessingPass:Symbol.for("Factory<IPostProcessingPass>"),IFactoryNormalPass:Symbol.for("Factory<IFactoryNormalPass>"),IMultiPassRenderer:Symbol.for("IMultiPassRenderer"),SceneID:Symbol.for("SceneID"),MapConfig:Symbol.for("MapConfig")},dl={exports:{}};dl.exports=sa;dl.exports.default=sa;var $r=1e20;function sa(e,t,n,r,i,a){this.fontSize=e||24,this.buffer=t===void 0?3:t,this.cutoff=r||.25,this.fontFamily=i||"sans-serif",this.fontWeight=a||"normal",this.radius=n||8;var o=this.size=this.fontSize+this.buffer*2,u=o+this.buffer*2;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=o,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textAlign="left",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(u*u),this.gridInner=new Float64Array(u*u),this.f=new Float64Array(u),this.z=new Float64Array(u+1),this.v=new Uint16Array(u),this.useMetrics=this.ctx.measureText("A").actualBoundingBoxLeft!==void 0,this.middle=Math.round(o/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function gb(e,t,n,r,i,a,o){a.fill($r,0,t*n),o.fill(0,0,t*n);for(var u=(t-r)/2,s=0;s<i;s++)for(var l=0;l<r;l++){var c=(s+u)*t+l+u,f=e.data[4*(s*r+l)+3]/255;if(f===1)a[c]=0,o[c]=$r;else if(f===0)a[c]=$r,o[c]=0;else{var h=Math.max(0,.5-f),d=Math.max(0,f-.5);a[c]=h*h,o[c]=d*d}}}function mb(e,t,n,r,i,a,o){for(var u=0;u<t*n;u++){var s=Math.sqrt(r[u])-Math.sqrt(i[u]);e[u]=Math.round(255-255*(s/a+o))}}sa.prototype._draw=function(e,t){var n=this.ctx.measureText(e),r=n.width,i=2*this.buffer,a,o,u,s,l,c,f,h;t&&this.useMetrics?(l=Math.floor(n.actualBoundingBoxAscent),h=this.buffer+Math.ceil(n.actualBoundingBoxAscent),c=this.buffer,f=this.buffer,o=Math.min(this.size,Math.ceil(n.actualBoundingBoxRight-n.actualBoundingBoxLeft)),s=Math.min(this.size-c,Math.ceil(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)),a=o+i,u=s+i,this.ctx.textBaseline="alphabetic"):(a=o=this.size,u=s=this.size,l=19*this.fontSize/24,c=f=0,h=this.middle,this.ctx.textBaseline="middle");var d;o&&s&&(this.ctx.clearRect(f,c,o,s),this.ctx.fillText(e,this.buffer,h),d=this.ctx.getImageData(f,c,o,s));var v=new Uint8ClampedArray(a*u);return gb(d,a,u,o,s,this.gridOuter,this.gridInner),Lc(this.gridOuter,a,u,this.f,this.v,this.z),Lc(this.gridInner,a,u,this.f,this.v,this.z),mb(v,a,u,this.gridOuter,this.gridInner,this.radius,this.cutoff),{data:v,metrics:{width:o,height:s,sdfWidth:a,sdfHeight:u,top:l,left:0,advance:r}}};sa.prototype.draw=function(e){return this._draw(e,!1).data};sa.prototype.drawWithMetrics=function(e){return this._draw(e,!0)};function Lc(e,t,n,r,i,a){for(var o=0;o<t;o++)Rc(e,o,t,n,r,i,a);for(var u=0;u<n;u++)Rc(e,u*t,1,t,r,i,a)}function Rc(e,t,n,r,i,a,o){var u,s,l,c;for(a[0]=0,o[0]=-$r,o[1]=$r,u=0;u<r;u++)i[u]=e[t+u*n];for(u=1,s=0,l=0;u<r;u++){do c=a[s],l=(i[u]-i[c]+u*u-c*c)/(u-c)/2;while(l<=o[s]&&--s>-1);s++,a[s]=u,o[s]=l,o[s+1]=$r}for(u=0,s=0;u<r;u++){for(;o[s+1]<u;)s++;c=a[s],e[t+u*n]=i[c]+(u-c)*(u-c)}}var yb=dl.exports;const _b=Rn(yb);function pg(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=xb(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function xb(e,t){if(e){if(typeof e=="string")return Pc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pc(e,t)}}function Pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var li=30;function bb(e){var t=e.characterSet,n=e.getFontWidth,r=e.fontHeight,i=e.buffer,a=e.maxCanvasWidth,o=e.mapping,u=o===void 0?{}:o,s=e.xOffset,l=s===void 0?0:s,c=e.yOffset,f=c===void 0?0:c,h=0,d=l;Array.from(t).forEach(function(p,g){if(!u[p]){var m=n(p,g);d+li>a&&(d=0,h++),u[p]={x:d,y:f+h*li,width:li,height:li,advance:m},d+=li}});var v=r+i*2;return{mapping:u,xOffset:d,yOffset:f+h*v,canvasHeight:gg(f+(h+1)*v)}}function Sb(e,t,n){var r=0,i=0,a=0,o=[],u={},s=pg(e),l;try{for(s.s();!(l=s.n()).done;){var c=l.value;if(!u[c.id]){var f=c.size;r+f+t>n&&(Fc(u,o,i),r=0,i=a+i+t,a=0,o=[]),o.push({icon:c,xOffset:r}),r=r+f+t,a=Math.max(a,f)}}}catch(d){s.e(d)}finally{s.f()}o.length>0&&Fc(u,o,i);var h=gg(a+i+t);return{mapping:u,canvasHeight:h}}function Fc(e,t,n){var r=pg(t),i;try{for(r.s();!(i=r.n()).done;){var a=i.value,o=a.icon,u=a.xOffset;e[o.id]=z(z({},o),{},{x:u,y:n,image:o.image,width:o.width,height:o.height})}}catch(s){r.e(s)}finally{r.f()}}function gg(e){return Math.pow(2,Math.ceil(Math.log2(e)))}var Oc,Dc;function Nc(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ab(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function Ab(e,t){if(e){if(typeof e=="string")return Bc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bc(e,t)}}function Bc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Eb(e){var t=Cb();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Cb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var wb=Ob(),Tb="sans-serif",Mb="normal",kb=24,Ib=3,Lb=.25,Rb=8,Uc=1024,Pb=1,zc=1,Fb=3;function Ob(){for(var e=[],t=32;t<128;t++)e.push(String.fromCharCode(t));return e}function $c(e,t,n,r){e.font="".concat(r," ").concat(n,"px ").concat(t),e.fillStyle="black",e.textBaseline="middle"}function Vc(e,t){for(var n=0;n<e.length;n++)t.data[4*n+3]=e[n]}Oc=De(),Oc(Dc=function(e){Ee(n,e);var t=Eb(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"fontAtlas",void 0),S(R(r),"iconFontMap",void 0),S(R(r),"iconFontGlyphs",{}),S(R(r),"fontOptions",void 0),S(R(r),"key",void 0),S(R(r),"cache",new z_(Fb)),r}return ae(n,[{key:"scale",get:function(){return zc}},{key:"canvas",get:function(){var i=this.cache.get(this.key);return i&&i.data}},{key:"mapping",get:function(){var i=this.cache.get(this.key);return i&&i.mapping||{}}},{key:"getCanvasByKey",value:function(i){var a=this.cache.get(i);return a&&a.data}},{key:"getMappingByKey",value:function(i){var a=this.cache.get(i);return a&&a.mapping||{}}},{key:"init",value:function(){this.cache.clear(),this.fontOptions={fontFamily:Tb,fontWeight:Mb,characterSet:wb,fontSize:kb,buffer:Ib,sdf:!0,cutoff:Lb,radius:Rb,iconfont:!1},this.key="",this.iconFontMap=new Map}},{key:"addIconGlyphs",value:function(i){var a=this;i.forEach(function(o){a.iconFontGlyphs[o.name]=o.unicode})}},{key:"addIconFont",value:function(i,a){this.iconFontMap.set(i,a)}},{key:"getIconFontKey",value:function(i){return this.iconFontMap.get(i)||i}},{key:"getGlyph",value:function(i){return this.iconFontGlyphs[i]?String.fromCharCode(parseInt(this.iconFontGlyphs[i],16)):""}},{key:"setFontOptions",value:function(i){this.fontOptions=z(z({},this.fontOptions),i),this.key=this.getKey();var a=this.getNewChars(this.key,this.fontOptions.characterSet),o=this.cache.get(this.key);if(!(o&&a.length===0)){var u=this.generateFontAtlas(this.key,a,o);this.fontAtlas=u,this.cache.set(this.key,u)}}},{key:"addFontFace",value:function(i,a){var o=this,u=document.createElement("style");u.type="text/css",u.innerText=`
        @font-face{
            font-family: '`.concat(i,`';
            src: url('`).concat(a,`') format('woff2'),
            url('`).concat(a,`') format('woff'),
            url('`).concat(a,`') format('truetype');
        }`),u.onload=function(){if(document.fonts)try{document.fonts.load("24px ".concat(i),"L7text"),document.fonts.ready.then(function(){o.emit("fontloaded",{fontFamily:i})})}catch{}},document.getElementsByTagName("head")[0].appendChild(u)}},{key:"destroy",value:function(){this.cache.clear(),this.iconFontMap.clear()}},{key:"generateFontAtlas",value:function(i,a,o){var u=this.fontOptions,s=u.fontFamily,l=u.fontWeight,c=u.fontSize,f=u.buffer,h=u.sdf,d=u.radius,v=u.cutoff,p=u.iconfont,g=o&&o.data;g||(g=window.document.createElement("canvas"),g.width=Uc);var m=g.getContext("2d",{willReadFrequently:!0});$c(m,s,c,l);var _=bb(z({getFontWidth:function(H){return m.measureText(H).width},fontHeight:c*zc,buffer:f,characterSet:a,maxCanvasWidth:Uc},o&&{mapping:o.mapping,xOffset:o.xOffset,yOffset:o.yOffset})),y=_.mapping,x=_.canvasHeight,b=_.xOffset,M=_.yOffset,T=m.getImageData(0,0,g.width,g.height);if(g.height=x,m.putImageData(T,0,0),$c(m,s,c,l),h){var D=new _b(c,f,d,v,s,l),U=m.getImageData(0,0,D.size,D.size),I=Nc(a),w;try{for(I.s();!(w=I.n()).done;){var k=w.value;if(p){var P=String.fromCharCode(parseInt(k.replace("&#x","").replace(";",""),16)),B=D.draw(P);Vc(B,U)}else Vc(D.draw(k),U);m.putImageData(U,y[k].x,y[k].y)}}catch(ye){I.e(ye)}finally{I.f()}}else{var K=Nc(a),ce;try{for(K.s();!(ce=K.n()).done;){var ve=ce.value;m.fillText(ve,y[ve].x,y[ve].y+c*Pb)}}catch(ye){K.e(ye)}finally{K.f()}}return{xOffset:b,yOffset:M,mapping:y,data:g,width:g.width,height:g.height}}},{key:"getKey",value:function(){var i=this.fontOptions,a=i.fontFamily,o=i.fontWeight;return"".concat(a,"_").concat(o)}},{key:"getNewChars",value:function(i,a){var o=this.cache.get(i);if(!o)return a;var u=[],s=o.mapping,l=new Set(Object.keys(s)),c=new Set(a);return c.forEach(function(f){l.has(f)||u.push(f)}),u}}]),n}(Yt.EventEmitter));var jc,Hc;function Db(e){var t=Nb();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Nb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Bb=3,Gc=1024,ci=64;jc=De(),jc(Hc=function(e){Ee(n,e);var t=Db(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"canvasHeight",128),S(R(r),"texture",void 0),S(R(r),"canvas",void 0),S(R(r),"iconData",void 0),S(R(r),"iconMap",void 0),S(R(r),"ctx",void 0),S(R(r),"loadingImageCount",0),r}return ae(n,[{key:"isLoading",value:function(){return this.loadingImageCount===0}},{key:"init",value:function(){this.iconData=[],this.iconMap={},this.canvas=window.document.createElement("canvas"),this.canvas.width=128,this.canvas.height=128,this.ctx=this.canvas.getContext("2d")}},{key:"addImage",value:function(){var r=Y(C.mark(function a(o,u){var s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=new Image,this.loadingImageCount++,this.hasImage(o)||this.iconData.push({id:o,size:ci}),this.updateIconMap(),f.next=6,this.loadImage(u);case 6:s=f.sent,l=this.iconData.find(function(h){return h.id===o}),l&&(l.image=s,l.width=s.width,l.height=s.height),this.update();case 10:case"end":return f.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"addImageMini",value:function(i,a,o){var u=this,s=o.getSceneConfig().canvas,l=s.createImage();if(this.loadingImageCount++,this.hasImage(i))throw new Error("Image Id already exists");this.iconData.push({id:i,size:ci}),this.updateIconMap(),this.loadImageMini(a,s).then(function(c){l=c;var f=u.iconData.find(function(h){return h.id===i});f&&(f.image=l,f.width=l.width,f.height=l.height),u.update()})}},{key:"getTexture",value:function(){return this.texture}},{key:"getIconMap",value:function(){return this.iconMap}},{key:"getCanvas",value:function(){return this.canvas}},{key:"hasImage",value:function(i){return this.iconMap.hasOwnProperty(i)}},{key:"removeImage",value:function(i){this.hasImage(i)&&(this.iconData=this.iconData.filter(function(a){return a.id!==i}),delete this.iconMap[i],this.update())}},{key:"destroy",value:function(){this.removeAllListeners("imageUpdate"),this.iconData=[],this.iconMap={}}},{key:"loadImage",value:function(i){return new Promise(function(a,o){if(i instanceof HTMLImageElement){a(i);return}var u=new Image;u.crossOrigin="anonymous",u.onload=function(){a(u)},u.onerror=function(){o(new Error("Could not load image at "+i))},u.src=i instanceof File?URL.createObjectURL(i):i})}},{key:"update",value:function(){this.updateIconMap(),this.updateIconAtlas(),this.loadingImageCount--,this.loadingImageCount===0&&this.emit("imageUpdate")}},{key:"updateIconAtlas",value:function(){var i=this;this.canvas.width=Gc,this.canvas.height=this.canvasHeight,Object.keys(this.iconMap).forEach(function(a){var o=i.iconMap[a],u=o.x,s=o.y,l=o.image,c=o.width,f=c===void 0?64:c,h=o.height,d=h===void 0?64:h,v=Math.max(f,d),p=v/ci,g=d/p,m=f/p;l&&i.ctx.drawImage(l,u+(ci-m)/2,s+(ci-g)/2,m,g)})}},{key:"updateIconMap",value:function(){var i=Sb(this.iconData,Bb,Gc),a=i.mapping,o=i.canvasHeight;this.iconMap=a,this.canvasHeight=o}},{key:"loadImageMini",value:function(i,a){return new Promise(function(o,u){var s=a.createImage();s.crossOrigin="anonymous",s.onload=function(){o(s)},s.onerror=function(){u(new Error("Could not load image at "+i))},s.src=i})}}]),n}(Yt.EventEmitter));var Wc,Yc;Wc=De(),Wc(Yc=function(){function e(){oe(this,e),S(this,"viewport",void 0),S(this,"overridedViewProjectionMatrix",void 0),S(this,"jitteredViewProjectionMatrix",void 0),S(this,"jitteredProjectionMatrix",void 0),S(this,"viewMatrixInverse",void 0),S(this,"cameraPosition",void 0)}return ae(e,[{key:"init",value:function(){}},{key:"update",value:function(n){this.viewport=n,this.viewMatrixInverse=Fr(),e0(this.viewMatrixInverse,n.getViewMatrix()),this.cameraPosition=[this.viewMatrixInverse[12],this.viewMatrixInverse[13],this.viewMatrixInverse[14]]}},{key:"getProjectionMatrix",value:function(){return this.jitteredProjectionMatrix||this.viewport.getProjectionMatrix()}},{key:"getModelMatrix",value:function(){return this.viewport.getModelMatrix()}},{key:"getViewMatrix",value:function(){return this.viewport.getViewMatrix()}},{key:"getViewMatrixUncentered",value:function(){return this.viewport.getViewMatrixUncentered()}},{key:"getViewProjectionMatrixUncentered",value:function(){return this.viewport.getViewProjectionMatrixUncentered()}},{key:"getViewProjectionMatrix",value:function(){return this.overridedViewProjectionMatrix||this.jitteredViewProjectionMatrix||this.viewport.getViewProjectionMatrix()}},{key:"getZoom",value:function(){return this.viewport.getZoom()}},{key:"getZoomScale",value:function(){return this.viewport.getZoomScale()}},{key:"getCenter",value:function(){var n=this.viewport.getCenter(),r=Pe(n,2),i=r[0],a=r[1];return[i,a]}},{key:"getFocalDistance",value:function(){return this.viewport.getFocalDistance()}},{key:"getCameraPosition",value:function(){return this.cameraPosition}},{key:"projectFlat",value:function(n,r){return this.viewport.projectFlat(n,r)}},{key:"setViewProjectionMatrix",value:function(n){this.overridedViewProjectionMatrix=n}},{key:"jitterProjectionMatrix",value:function(n,r){var i=r0(Fr(),[n,r,0]);this.jitteredProjectionMatrix=cr(Fr(),i,this.viewport.getProjectionMatrix()),this.jitteredViewProjectionMatrix=cr(Fr(),this.jitteredProjectionMatrix,this.viewport.getViewMatrix())}},{key:"clearJitterProjectionMatrix",value:function(){this.jitteredProjectionMatrix=void 0,this.jitteredViewProjectionMatrix=void 0}}]),e}());var is=function(e){return e.TOPRIGHT="topright",e.TOPLEFT="topleft",e.BOTTOMRIGHT="bottomright",e.BOTTOMLEFT="bottomleft",e.TOPCENTER="topcenter",e.BOTTOMCENTER="bottomcenter",e.LEFTCENTER="leftcenter",e.RIGHTCENTER="rightcenter",e.LEFTTOP="lefttop",e.RIGHTTOP="righttop",e.LEFTBOTTOM="leftbottom",e.RIGHTBOTTOM="rightbottom",e}({}),Xc,Zc;function Ub(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=zb(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function zb(e,t){if(e){if(typeof e=="string")return qc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qc(e,t)}}function qc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $b={topleft:"column",topright:"column",bottomright:"column",bottomleft:"column",leftcenter:"column",rightcenter:"column",topcenter:"row",bottomcenter:"row",lefttop:"row",righttop:"row",leftbottom:"row",rightbottom:"row"};Xc=De(),Xc(Zc=function(){function e(){oe(this,e),S(this,"container",void 0),S(this,"controlCorners",void 0),S(this,"controlContainer",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"controls",[]),S(this,"unAddControls",[])}return ae(e,[{key:"init",value:function(n,r){this.container=n.container,this.scene=r,this.mapsService=r.get(ie.IMapService),this.initControlPos()}},{key:"addControl",value:function(n,r){var i=r.get(ie.IMapService);i.map?(n.addTo(this.scene),this.controls.push(n)):this.unAddControls.push(n)}},{key:"getControlByName",value:function(n){return this.controls.find(function(r){return r.controlOption.name===n})}},{key:"removeControl",value:function(n){var r=this.controls.indexOf(n);return r>-1&&this.controls.splice(r,1),n.remove(),this}},{key:"addControls",value:function(){var n=this;this.unAddControls.forEach(function(r){r.addTo(n.scene),n.controls.push(r)}),this.unAddControls=[]}},{key:"destroy",value:function(){var n=Ub(this.controls),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;i.remove()}}catch(a){n.e(a)}finally{n.f()}this.controls=[],this.clearControlPos()}},{key:"initControlPos",value:function(){var n=this.controlCorners={},r="l7-",i=this.controlContainer=Zn("div",r+"control-container",this.container);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=u.map(function(l){return r+l}).join(" ");n[u.filter(function(l){return!["row","column"].includes(l)}).join("")]=Zn("div",s,i)}function o(u){var s=u.replace(/^(top|bottom|left|right|center)/,"$1-").split("-");return[].concat(ee(s),[$b[u]])}Object.values(is).forEach(function(u){a(o(u))}),this.checkCornerOverlap()}},{key:"clearControlPos",value:function(){for(var n in this.controlCorners)this.controlCorners[n]&&Ya(this.controlCorners[n]);this.controlContainer&&Ya(this.controlContainer)}},{key:"checkCornerOverlap",value:function(){var n=this,r=window.MutationObserver;if(r)for(var i=function(){var s=o[a],l=s.match(/^(top|bottom)(left|right)$/);if(l){var c=Pe(l,3),f=c[1],h=c[2],d=n.controlCorners["".concat(f).concat(h)],v=new r(function(p){var g=Pe(p,1),m=g[0].target;d&&(d.style[f]=m.clientHeight+"px")});v.observe(n.controlCorners["".concat(h).concat(f)],{childList:!0,attributes:!0})}},a=0,o=Object.keys(this.controlCorners);a<o.length;a++)i()}}]),e}());var Qc,Jc;Qc=De(),Qc(Jc=function(){function e(){oe(this,e),S(this,"container",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"markers",[]),S(this,"markerLayers",[]),S(this,"unAddMarkers",[]),S(this,"unAddMarkerLayers",[])}return ae(e,[{key:"addMarkerLayer",value:function(n){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markerLayers.push(n),n.addTo(this.scene)):this.unAddMarkerLayers.push(n)}},{key:"removeMarkerLayer",value:function(n){n.destroy(),this.markerLayers.indexOf(n);var r=this.markerLayers.indexOf(n);r>-1&&this.markerLayers.splice(r,1)}},{key:"addMarker",value:function(n){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markers.push(n),n.addTo(this.scene)):this.unAddMarkers.push(n)}},{key:"addMarkers",value:function(){var n=this;this.unAddMarkers.forEach(function(r){r.addTo(n.scene),n.markers.push(r)}),this.unAddMarkers=[]}},{key:"addMarkerLayers",value:function(){var n=this;this.unAddMarkerLayers.forEach(function(r){n.markerLayers.push(r),r.addTo(n.scene)}),this.unAddMarkers=[]}},{key:"removeMarker",value:function(n){n.remove(),this.markers.indexOf(n);var r=this.markers.indexOf(n);r>-1&&this.markers.splice(r,1)}},{key:"removeAllMarkers",value:function(){this.destroy()}},{key:"init",value:function(n){this.scene=n,this.mapsService=n.get(ie.IMapService)}},{key:"destroy",value:function(){this.markers.forEach(function(n){n.remove()}),this.markers=[],this.markerLayers.forEach(function(n){n.destroy()}),this.markerLayers=[]}},{key:"removeMakerLayerMarker",value:function(n){n.destroy()}}]),e}());var Kc,ef;Kc=De(),Kc(ef=function(){function e(){oe(this,e),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"popups",[]),S(this,"unAddPopups",[])}return ae(e,[{key:"isMarkerReady",get:function(){return this.mapsService.map&&this.mapsService.getMarkerContainer()}},{key:"removePopup",value:function(n){n!=null&&n.isOpen()&&n.remove();var r=this.popups.indexOf(n);r>-1&&this.popups.splice(r,1);var i=this.unAddPopups.indexOf(n);i>-1&&this.unAddPopups.splice(i,1)}},{key:"destroy",value:function(){this.popups.forEach(function(n){return n.remove()})}},{key:"addPopup",value:function(n){var r=this;n&&n.getOptions().autoClose&&[].concat(ee(this.popups),ee(this.unAddPopups)).forEach(function(i){i.getOptions().autoClose&&r.removePopup(i)}),this.isMarkerReady?(n.addTo(this.scene),this.popups.push(n)):this.unAddPopups.push(n),n.on("close",function(){r.removePopup(n)})}},{key:"initPopup",value:function(){var n=this;this.unAddPopups.length&&this.unAddPopups.forEach(function(r){n.addPopup(r),n.unAddPopups=[]})}},{key:"init",value:function(n){this.scene=n,this.mapsService=n.get(ie.IMapService)}}]),e}());var Hn=function(e){return e.normal="normal",e.additive="additive",e.subtractive="subtractive",e.min="min",e.max="max",e.none="none",e}({}),lr=function(e){return e.MULTIPLE="MULTIPLE",e.SINGLE="SINGLE",e}({}),Co=function(e){return e.AND="and",e.OR="or",e}({}),xt=function(e){return e.INIT="init",e.UPDATE="update",e}({}),Vb={MapToken:"您正在使用 Demo 测试 Token, 生产环境务必自行注册 Token 确保服务稳定 高德地图申请地址 https://lbs.amap.com/api/javascript-api/guide/abc/prepare  Mapbox地图申请地址 https://docs.mapbox.com/help/glossary/access-token/",SDK:"请确认引入了mapbox-gl api且在L7之前引入"},tf,nf,jb=Ke.merge,Hb={id:"map",logoPosition:"bottomleft",logoVisible:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1,pickBufferScale:1,fitBoundsOptions:{animate:!1}},Gb={colors:["rgb(103,0,31)","rgb(178,24,43)","rgb(214,96,77)","rgb(244,165,130)","rgb(253,219,199)","rgb(247,247,247)","rgb(209,229,240)","rgb(146,197,222)","rgb(67,147,195)","rgb(33,102,172)","rgb(5,48,97)"],size:10,shape:"circle",scales:{},shape2d:["circle","triangle","square","pentagon","hexagon","octogon","hexagram","rhombus","vesica"],shape3d:["cylinder","triangleColumn","hexagonColumn","squareColumn"],minZoom:-1,maxZoom:24,visible:!0,autoFit:!1,pickingBuffer:0,enablePropagation:!1,zIndex:0,blend:"normal",maskLayers:[],enableMask:!0,maskOperation:Co.AND,pickedFeatureID:-1,enableMultiPassRenderer:!1,enablePicking:!0,active:!1,activeColor:"#2f54eb",enableHighlight:!1,enableSelect:!1,highlightColor:"#2f54eb",activeMix:0,selectColor:"blue",selectMix:0,enableTAA:!1,jitterScale:1,enableLighting:!1,animateOption:{enable:!1,interval:.2,duration:4,trailLength:.15},forward:!0},Wb=(tf=De(),tf(nf=function(){function e(){oe(this,e),S(this,"sceneConfigCache",{}),S(this,"layerConfigCache",{}),S(this,"layerAttributeConfigCache",{})}return ae(e,[{key:"getSceneConfig",value:function(n){return this.sceneConfigCache[n]}},{key:"getSceneWarninfo",value:function(n){return Vb[n]}},{key:"setSceneConfig",value:function(n,r){this.sceneConfigCache[n]=z(z({},Hb),r)}},{key:"getLayerConfig",value:function(n){return this.layerConfigCache[n]}},{key:"setLayerConfig",value:function(n,r,i){this.layerConfigCache[r]=z({},jb({},this.sceneConfigCache[n],Gb,i))}},{key:"getAttributeConfig",value:function(n){return this.layerAttributeConfigCache[n]}},{key:"setAttributeConfig",value:function(n,r){this.layerAttributeConfigCache[n]=z(z({},this.layerAttributeConfigCache[n]),r)}},{key:"clean",value:function(){this.sceneConfigCache={},this.layerConfigCache={}}}]),e}())||nf);function $e(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function Ue(e,t,n,r,i){var a={};return Object.keys(r).forEach(function(o){a[o]=r[o]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(o,u){return u(e,t,o)||o},a),i&&a.initializer!==void 0&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0),a.initializer===void 0&&(Object.defineProperty(e,t,a),a=null),a}var lu=Math.PI/180,Yb=512,rf=4003e4;function af(e){var t=e.latitude,n=t===void 0?0:t,r=e.zoom,i=r===void 0?0:r,a=e.scale,o=e.highPrecision,u=o===void 0?!1:o,s=e.flipY,l=s===void 0?!1:s;a=a!==void 0?a:Math.pow(2,i);var c={},f=Yb*a,h=Math.cos(n*lu),d=f/360,v=d/h,p=f/rf/h;if(c.pixelsPerMeter=[p,-p,p],c.metersPerPixel=[1/p,-1/p,1/p],c.pixelsPerDegree=[d,-v,p],c.degreesPerPixel=[1/d,-1/v,1/p],u){var g=lu*Math.tan(n*lu)/h,m=d*g/2,_=f/rf*g,y=_/v*p;c.pixelsPerDegree2=[0,-m,_],c.pixelsPerMeter2=[y,0,y],l&&(c.pixelsPerDegree2[1]=-c.pixelsPerDegree2[1],c.pixelsPerMeter2[1]=-c.pixelsPerMeter2[1])}return l&&(c.pixelsPerMeter[1]=-c.pixelsPerMeter[1],c.metersPerPixel[1]=-c.metersPerPixel[1],c.pixelsPerDegree[1]=-c.pixelsPerDegree[1],c.degreesPerPixel[1]=-c.degreesPerPixel[1]),c}var Ta=function(e){return e[e.LNGLAT=1]="LNGLAT",e[e.LNGLAT_OFFSET=2]="LNGLAT_OFFSET",e[e.VECTOR_TILE=3]="VECTOR_TILE",e[e.IDENTITY=4]="IDENTITY",e[e.P20=5]="P20",e[e.P20_OFFSET=6]="P20_OFFSET",e[e.METER_OFFSET=7]="METER_OFFSET",e[e.P20_2=8]="P20_2",e}({}),ir={CoordinateSystem:"u_CoordinateSystem",ViewportCenter:"u_ViewportCenter",ViewportCenterProjection:"u_ViewportCenterProjection",PixelsPerDegree:"u_PixelsPerDegree",PixelsPerDegree2:"u_PixelsPerDegree2",PixelsPerMeter:"u_PixelsPerMeter",Mvp:"u_Mvp"},of,uf,sf,cu,lf,Xb=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];of=De(),uf=je(ie.ICameraService),of(sf=(cu=function(){function e(){oe(this,e),S(this,"needRefresh",!0),$e(this,"cameraService",lf,this),S(this,"coordinateSystem",void 0),S(this,"viewportCenter",void 0),S(this,"viewportCenterProjection",void 0),S(this,"pixelsPerDegree",void 0),S(this,"pixelsPerDegree2",void 0),S(this,"pixelsPerMeter",void 0)}return ae(e,[{key:"refresh",value:function(n){var r=this.cameraService.getZoom(),i=this.cameraService.getZoomScale(),a=n||this.cameraService.getCenter(),o=af({latitude:a[1],zoom:r}),u=o.pixelsPerMeter,s=o.pixelsPerDegree;this.viewportCenter=a,this.viewportCenterProjection=[0,0,0,0],this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=[0,0,0],this.coordinateSystem===Ta.LNGLAT||this.coordinateSystem===Ta.P20?this.cameraService.setViewProjectionMatrix(void 0):this.coordinateSystem===Ta.LNGLAT_OFFSET?this.calculateLnglatOffset(a,r):this.coordinateSystem===Ta.P20_OFFSET&&this.calculateLnglatOffset(a,r,i,!0),this.needRefresh=!1}},{key:"getCoordinateSystem",value:function(){return this.coordinateSystem}},{key:"setCoordinateSystem",value:function(n){this.coordinateSystem=n}},{key:"getViewportCenter",value:function(){return this.viewportCenter}},{key:"getViewportCenterProjection",value:function(){return this.viewportCenterProjection}},{key:"getPixelsPerDegree",value:function(){return this.pixelsPerDegree}},{key:"getPixelsPerDegree2",value:function(){return this.pixelsPerDegree2}},{key:"getPixelsPerMeter",value:function(){return this.pixelsPerMeter}},{key:"calculateLnglatOffset",value:function(n,r,i,a){var o=af({latitude:n[1],zoom:r,scale:i,flipY:a,highPrecision:!0}),u=o.pixelsPerMeter,s=o.pixelsPerDegree,l=o.pixelsPerDegree2,c=this.cameraService.getViewMatrix(),f=this.cameraService.getProjectionMatrix(),h=cr([],f,c),d=this.cameraService.projectFlat([Math.fround(n[0]),Math.fround(n[1])],Math.pow(2,r));this.viewportCenterProjection=c0([],[d[0],d[1],0,1],h),c=this.cameraService.getViewMatrixUncentered()||c,h=cr([],f,c),h=cr([],h,Xb),this.cameraService.setViewProjectionMatrix(h),this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=l}}]),e}(),lf=Ue(cu.prototype,"cameraService",[uf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),cu));var cf,ff;function Zb(e){var t=qb();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function qb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}cf=De(),cf(ff=function(e){Ee(n,e);var t=Zb(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"renderMap",new Map),S(R(r),"enable",!1),S(R(r),"renderEnable",!1),S(R(r),"cacheLogs",{}),r}return ae(n,[{key:"setEnable",value:function(i){this.enable=!!i}},{key:"log",value:function(i,a){var o=this;if(this.enable){var u=i.split("."),s=null;u.forEach(function(l,c){s!==null?(s[l]||(s[l]={}),c!==u.length-1&&(s=s[l])):(o.cacheLogs[l]||(o.cacheLogs[l]={}),c!==u.length-1&&(s=o.cacheLogs[l])),c===u.length-1&&(s[l]=z(z({time:Date.now()},s[l]),a))})}}},{key:"getLog",value:function(i){var a=this;switch(En(i)){case"string":return this.cacheLogs[i];case"object":return i.map(function(o){return a.cacheLogs[o]}).filter(function(o){return o!==void 0});case"undefined":return this.cacheLogs}}},{key:"removeLog",value:function(i){delete this.cacheLogs[i]}},{key:"generateRenderUid",value:function(){return this.renderEnable?U_():""}},{key:"renderDebug",value:function(i){this.renderEnable=i}},{key:"renderStart",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i)||{};this.renderMap.set(i,z(z({},a),{},{renderUid:i,renderStart:Date.now()}))}}},{key:"renderEnd",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i);if(a){var o=a.renderStart,u=Date.now();this.emit("renderEnd",z(z({},a),{},{renderEnd:u,renderDuration:u-o})),this.renderMap.delete(i)}}}},{key:"destroy",value:function(){this.cacheLogs=null,this.renderMap.clear()}}]),n}(Yt.EventEmitter));var mg={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var a=["","webkit","Moz","MS","ms","o"],o=n.createElement("div"),u="function",s=Math.round,l=Math.abs,c=Date.now;function f(A,E,F){return setTimeout(y(A,F),E)}function h(A,E,F){return Array.isArray(A)?(d(A,F[E],F),!0):!1}function d(A,E,F){var W;if(A)if(A.forEach)A.forEach(E,F);else if(A.length!==i)for(W=0;W<A.length;)E.call(F,A[W],W,A),W++;else for(W in A)A.hasOwnProperty(W)&&E.call(F,A[W],W,A)}function v(A,E,F){var W="DEPRECATED METHOD: "+E+`
`+F+` AT 
`;return function(){var fe=new Error("get-stack-trace"),Ae=fe&&fe.stack?fe.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",We=t.console&&(t.console.warn||t.console.log);return We&&We.call(t.console,W,Ae),A.apply(this,arguments)}}var p;typeof Object.assign!="function"?p=function(E){if(E===i||E===null)throw new TypeError("Cannot convert undefined or null to object");for(var F=Object(E),W=1;W<arguments.length;W++){var fe=arguments[W];if(fe!==i&&fe!==null)for(var Ae in fe)fe.hasOwnProperty(Ae)&&(F[Ae]=fe[Ae])}return F}:p=Object.assign;var g=v(function(E,F,W){for(var fe=Object.keys(F),Ae=0;Ae<fe.length;)(!W||W&&E[fe[Ae]]===i)&&(E[fe[Ae]]=F[fe[Ae]]),Ae++;return E},"extend","Use `assign`."),m=v(function(E,F){return g(E,F,!0)},"merge","Use `assign`.");function _(A,E,F){var W=E.prototype,fe;fe=A.prototype=Object.create(W),fe.constructor=A,fe._super=W,F&&p(fe,F)}function y(A,E){return function(){return A.apply(E,arguments)}}function x(A,E){return typeof A==u?A.apply(E&&E[0]||i,E):A}function b(A,E){return A===i?E:A}function M(A,E,F){d(I(E),function(W){A.addEventListener(W,F,!1)})}function T(A,E,F){d(I(E),function(W){A.removeEventListener(W,F,!1)})}function D(A,E){for(;A;){if(A==E)return!0;A=A.parentNode}return!1}function U(A,E){return A.indexOf(E)>-1}function I(A){return A.trim().split(/\s+/g)}function w(A,E,F){if(A.indexOf&&!F)return A.indexOf(E);for(var W=0;W<A.length;){if(F&&A[W][F]==E||!F&&A[W]===E)return W;W++}return-1}function k(A){return Array.prototype.slice.call(A,0)}function P(A,E,F){for(var W=[],fe=[],Ae=0;Ae<A.length;){var We=E?A[Ae][E]:A[Ae];w(fe,We)<0&&W.push(A[Ae]),fe[Ae]=We,Ae++}return F&&(E?W=W.sort(function(Et,Ft){return Et[E]>Ft[E]}):W=W.sort()),W}function B(A,E){for(var F,W,fe=E[0].toUpperCase()+E.slice(1),Ae=0;Ae<a.length;){if(F=a[Ae],W=F?F+fe:E,W in A)return W;Ae++}return i}var K=1;function ce(){return K++}function ve(A){var E=A.ownerDocument||A;return E.defaultView||E.parentWindow||t}var ye=/mobile|tablet|ip(ad|hone|od)|android/i,H="ontouchstart"in t,V=B(t,"PointerEvent")!==i,Z=H&&ye.test(navigator.userAgent),X="touch",he="pen",le="mouse",de="kinect",Ve=25,Oe=1,rt=2,$=4,ue=8,xe=1,te=2,Ge=4,Fe=8,Ye=16,Ne=te|Ge,Le=Fe|Ye,ot=Ne|Le,dt=["x","y"],ft=["clientX","clientY"];function Je(A,E){var F=this;this.manager=A,this.callback=E,this.element=A.element,this.target=A.options.inputTarget,this.domHandler=function(W){x(A.options.enable,[A])&&F.handler(W)},this.init()}Je.prototype={handler:function(){},init:function(){this.evEl&&M(this.element,this.evEl,this.domHandler),this.evTarget&&M(this.target,this.evTarget,this.domHandler),this.evWin&&M(ve(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&T(this.element,this.evEl,this.domHandler),this.evTarget&&T(this.target,this.evTarget,this.domHandler),this.evWin&&T(ve(this.element),this.evWin,this.domHandler)}};function Lt(A){var E,F=A.options.inputClass;return F?E=F:V?E=ze:Z?E=ha:H?E=Po:E=Be,new E(A,on)}function on(A,E,F){var W=F.pointers.length,fe=F.changedPointers.length,Ae=E&Oe&&W-fe===0,We=E&($|ue)&&W-fe===0;F.isFirst=!!Ae,F.isFinal=!!We,Ae&&(A.session={}),F.eventType=E,j(A,F),A.emit("hammer.input",F),A.recognize(F),A.session.prevInput=F}function j(A,E){var F=A.session,W=E.pointers,fe=W.length;F.firstInput||(F.firstInput=pe(E)),fe>1&&!F.firstMultiple?F.firstMultiple=pe(E):fe===1&&(F.firstMultiple=!1);var Ae=F.firstInput,We=F.firstMultiple,bt=We?We.center:Ae.center,Et=E.center=me(W);E.timeStamp=c(),E.deltaTime=E.timeStamp-Ae.timeStamp,E.angle=N(bt,Et),E.distance=O(bt,Et),ne(F,E),E.offsetDirection=Re(E.deltaX,E.deltaY);var Ft=Xe(E.deltaTime,E.deltaX,E.deltaY);E.overallVelocityX=Ft.x,E.overallVelocityY=Ft.y,E.overallVelocity=l(Ft.x)>l(Ft.y)?Ft.x:Ft.y,E.scale=We?re(We.pointers,W):1,E.rotation=We?G(We.pointers,W):0,E.maxPointers=F.prevInput?E.pointers.length>F.prevInput.maxPointers?E.pointers.length:F.prevInput.maxPointers:E.pointers.length,se(F,E);var sn=A.element;D(E.srcEvent.target,sn)&&(sn=E.srcEvent.target),E.target=sn}function ne(A,E){var F=E.center,W=A.offsetDelta||{},fe=A.prevDelta||{},Ae=A.prevInput||{};(E.eventType===Oe||Ae.eventType===$)&&(fe=A.prevDelta={x:Ae.deltaX||0,y:Ae.deltaY||0},W=A.offsetDelta={x:F.x,y:F.y}),E.deltaX=fe.x+(F.x-W.x),E.deltaY=fe.y+(F.y-W.y)}function se(A,E){var F=A.lastInterval||E,W=E.timeStamp-F.timeStamp,fe,Ae,We,bt;if(E.eventType!=ue&&(W>Ve||F.velocity===i)){var Et=E.deltaX-F.deltaX,Ft=E.deltaY-F.deltaY,sn=Xe(W,Et,Ft);Ae=sn.x,We=sn.y,fe=l(sn.x)>l(sn.y)?sn.x:sn.y,bt=Re(Et,Ft),A.lastInterval=E}else fe=F.velocity,Ae=F.velocityX,We=F.velocityY,bt=F.direction;E.velocity=fe,E.velocityX=Ae,E.velocityY=We,E.direction=bt}function pe(A){for(var E=[],F=0;F<A.pointers.length;)E[F]={clientX:s(A.pointers[F].clientX),clientY:s(A.pointers[F].clientY)},F++;return{timeStamp:c(),pointers:E,center:me(E),deltaX:A.deltaX,deltaY:A.deltaY}}function me(A){var E=A.length;if(E===1)return{x:s(A[0].clientX),y:s(A[0].clientY)};for(var F=0,W=0,fe=0;fe<E;)F+=A[fe].clientX,W+=A[fe].clientY,fe++;return{x:s(F/E),y:s(W/E)}}function Xe(A,E,F){return{x:E/A||0,y:F/A||0}}function Re(A,E){return A===E?xe:l(A)>=l(E)?A<0?te:Ge:E<0?Fe:Ye}function O(A,E,F){F||(F=dt);var W=E[F[0]]-A[F[0]],fe=E[F[1]]-A[F[1]];return Math.sqrt(W*W+fe*fe)}function N(A,E,F){F||(F=dt);var W=E[F[0]]-A[F[0]],fe=E[F[1]]-A[F[1]];return Math.atan2(fe,W)*180/Math.PI}function G(A,E){return N(E[1],E[0],ft)+N(A[1],A[0],ft)}function re(A,E){return O(E[0],E[1],ft)/O(A[0],A[1],ft)}var be={mousedown:Oe,mousemove:rt,mouseup:$},nt="mousedown",vt="mousemove mouseup";function Be(){this.evEl=nt,this.evWin=vt,this.pressed=!1,Je.apply(this,arguments)}_(Be,Je,{handler:function(E){var F=be[E.type];F&Oe&&E.button===0&&(this.pressed=!0),F&rt&&E.which!==1&&(F=$),this.pressed&&(F&$&&(this.pressed=!1),this.callback(this.manager,F,{pointers:[E],changedPointers:[E],pointerType:le,srcEvent:E}))}});var _e={pointerdown:Oe,pointermove:rt,pointerup:$,pointercancel:ue,pointerout:ue},Te={2:X,3:he,4:le,5:de},we="pointerdown",Me="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(we="MSPointerDown",Me="MSPointerMove MSPointerUp MSPointerCancel");function ze(){this.evEl=we,this.evWin=Me,Je.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}_(ze,Je,{handler:function(E){var F=this.store,W=!1,fe=E.type.toLowerCase().replace("ms",""),Ae=_e[fe],We=Te[E.pointerType]||E.pointerType,bt=We==X,Et=w(F,E.pointerId,"pointerId");Ae&Oe&&(E.button===0||bt)?Et<0&&(F.push(E),Et=F.length-1):Ae&($|ue)&&(W=!0),!(Et<0)&&(F[Et]=E,this.callback(this.manager,Ae,{pointers:F,changedPointers:[E],pointerType:We,srcEvent:E}),W&&F.splice(Et,1))}});var it={touchstart:Oe,touchmove:rt,touchend:$,touchcancel:ue},st="touchstart",jt="touchstart touchmove touchend touchcancel";function ei(){this.evTarget=st,this.evWin=jt,this.started=!1,Je.apply(this,arguments)}_(ei,Je,{handler:function(E){var F=it[E.type];if(F===Oe&&(this.started=!0),!!this.started){var W=Lo.call(this,E,F);F&($|ue)&&W[0].length-W[1].length===0&&(this.started=!1),this.callback(this.manager,F,{pointers:W[0],changedPointers:W[1],pointerType:X,srcEvent:E})}}});function Lo(A,E){var F=k(A.touches),W=k(A.changedTouches);return E&($|ue)&&(F=P(F.concat(W),"identifier",!0)),[F,W]}var Ro={touchstart:Oe,touchmove:rt,touchend:$,touchcancel:ue},Bm="touchstart touchmove touchend touchcancel";function ha(){this.evTarget=Bm,this.targetIds={},Je.apply(this,arguments)}_(ha,Je,{handler:function(E){var F=Ro[E.type],W=Um.call(this,E,F);W&&this.callback(this.manager,F,{pointers:W[0],changedPointers:W[1],pointerType:X,srcEvent:E})}});function Um(A,E){var F=k(A.touches),W=this.targetIds;if(E&(Oe|rt)&&F.length===1)return W[F[0].identifier]=!0,[F,F];var fe,Ae,We=k(A.changedTouches),bt=[],Et=this.target;if(Ae=F.filter(function(Ft){return D(Ft.target,Et)}),E===Oe)for(fe=0;fe<Ae.length;)W[Ae[fe].identifier]=!0,fe++;for(fe=0;fe<We.length;)W[We[fe].identifier]&&bt.push(We[fe]),E&($|ue)&&delete W[We[fe].identifier],fe++;if(bt.length)return[P(Ae.concat(bt),"identifier",!0),bt]}var zm=2500,Pl=25;function Po(){Je.apply(this,arguments);var A=y(this.handler,this);this.touch=new ha(this.manager,A),this.mouse=new Be(this.manager,A),this.primaryTouch=null,this.lastTouches=[]}_(Po,Je,{handler:function(E,F,W){var fe=W.pointerType==X,Ae=W.pointerType==le;if(!(Ae&&W.sourceCapabilities&&W.sourceCapabilities.firesTouchEvents)){if(fe)$m.call(this,F,W);else if(Ae&&Vm.call(this,W))return;this.callback(E,F,W)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function $m(A,E){A&Oe?(this.primaryTouch=E.changedPointers[0].identifier,Fl.call(this,E)):A&($|ue)&&Fl.call(this,E)}function Fl(A){var E=A.changedPointers[0];if(E.identifier===this.primaryTouch){var F={x:E.clientX,y:E.clientY};this.lastTouches.push(F);var W=this.lastTouches,fe=function(){var Ae=W.indexOf(F);Ae>-1&&W.splice(Ae,1)};setTimeout(fe,zm)}}function Vm(A){for(var E=A.srcEvent.clientX,F=A.srcEvent.clientY,W=0;W<this.lastTouches.length;W++){var fe=this.lastTouches[W],Ae=Math.abs(E-fe.x),We=Math.abs(F-fe.y);if(Ae<=Pl&&We<=Pl)return!0}return!1}var Ol=B(o.style,"touchAction"),Dl=Ol!==i,Nl="compute",Bl="auto",Fo="manipulation",nr="none",ti="pan-x",ni="pan-y",da=Hm();function Oo(A,E){this.manager=A,this.set(E)}Oo.prototype={set:function(A){A==Nl&&(A=this.compute()),Dl&&this.manager.element.style&&da[A]&&(this.manager.element.style[Ol]=A),this.actions=A.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var A=[];return d(this.manager.recognizers,function(E){x(E.options.enable,[E])&&(A=A.concat(E.getTouchAction()))}),jm(A.join(" "))},preventDefaults:function(A){var E=A.srcEvent,F=A.offsetDirection;if(this.manager.session.prevented){E.preventDefault();return}var W=this.actions,fe=U(W,nr)&&!da[nr],Ae=U(W,ni)&&!da[ni],We=U(W,ti)&&!da[ti];if(fe){var bt=A.pointers.length===1,Et=A.distance<2,Ft=A.deltaTime<250;if(bt&&Et&&Ft)return}if(!(We&&Ae)&&(fe||Ae&&F&Ne||We&&F&Le))return this.preventSrc(E)},preventSrc:function(A){this.manager.session.prevented=!0,A.preventDefault()}};function jm(A){if(U(A,nr))return nr;var E=U(A,ti),F=U(A,ni);return E&&F?nr:E||F?E?ti:ni:U(A,Fo)?Fo:Bl}function Hm(){if(!Dl)return!1;var A={},E=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(F){A[F]=E?t.CSS.supports("touch-action",F):!0}),A}var va=1,Xt=2,xr=4,On=8,mn=On,ri=16,un=32;function yn(A){this.options=p({},this.defaults,A||{}),this.id=ce(),this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=va,this.simultaneous={},this.requireFail=[]}yn.prototype={defaults:{},set:function(A){return p(this.options,A),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(A){if(h(A,"recognizeWith",this))return this;var E=this.simultaneous;return A=pa(A,this),E[A.id]||(E[A.id]=A,A.recognizeWith(this)),this},dropRecognizeWith:function(A){return h(A,"dropRecognizeWith",this)?this:(A=pa(A,this),delete this.simultaneous[A.id],this)},requireFailure:function(A){if(h(A,"requireFailure",this))return this;var E=this.requireFail;return A=pa(A,this),w(E,A)===-1&&(E.push(A),A.requireFailure(this)),this},dropRequireFailure:function(A){if(h(A,"dropRequireFailure",this))return this;A=pa(A,this);var E=w(this.requireFail,A);return E>-1&&this.requireFail.splice(E,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(A){return!!this.simultaneous[A.id]},emit:function(A){var E=this,F=this.state;function W(fe){E.manager.emit(fe,A)}F<On&&W(E.options.event+Ul(F)),W(E.options.event),A.additionalEvent&&W(A.additionalEvent),F>=On&&W(E.options.event+Ul(F))},tryEmit:function(A){if(this.canEmit())return this.emit(A);this.state=un},canEmit:function(){for(var A=0;A<this.requireFail.length;){if(!(this.requireFail[A].state&(un|va)))return!1;A++}return!0},recognize:function(A){var E=p({},A);if(!x(this.options.enable,[this,E])){this.reset(),this.state=un;return}this.state&(mn|ri|un)&&(this.state=va),this.state=this.process(E),this.state&(Xt|xr|On|ri)&&this.tryEmit(E)},process:function(A){},getTouchAction:function(){},reset:function(){}};function Ul(A){return A&ri?"cancel":A&On?"end":A&xr?"move":A&Xt?"start":""}function zl(A){return A==Ye?"down":A==Fe?"up":A==te?"left":A==Ge?"right":""}function pa(A,E){var F=E.manager;return F?F.get(A):A}function en(){yn.apply(this,arguments)}_(en,yn,{defaults:{pointers:1},attrTest:function(A){var E=this.options.pointers;return E===0||A.pointers.length===E},process:function(A){var E=this.state,F=A.eventType,W=E&(Xt|xr),fe=this.attrTest(A);return W&&(F&ue||!fe)?E|ri:W||fe?F&$?E|On:E&Xt?E|xr:Xt:un}});function ga(){en.apply(this,arguments),this.pX=null,this.pY=null}_(ga,en,{defaults:{event:"pan",threshold:10,pointers:1,direction:ot},getTouchAction:function(){var A=this.options.direction,E=[];return A&Ne&&E.push(ni),A&Le&&E.push(ti),E},directionTest:function(A){var E=this.options,F=!0,W=A.distance,fe=A.direction,Ae=A.deltaX,We=A.deltaY;return fe&E.direction||(E.direction&Ne?(fe=Ae===0?xe:Ae<0?te:Ge,F=Ae!=this.pX,W=Math.abs(A.deltaX)):(fe=We===0?xe:We<0?Fe:Ye,F=We!=this.pY,W=Math.abs(A.deltaY))),A.direction=fe,F&&W>E.threshold&&fe&E.direction},attrTest:function(A){return en.prototype.attrTest.call(this,A)&&(this.state&Xt||!(this.state&Xt)&&this.directionTest(A))},emit:function(A){this.pX=A.deltaX,this.pY=A.deltaY;var E=zl(A.direction);E&&(A.additionalEvent=this.options.event+E),this._super.emit.call(this,A)}});function Do(){en.apply(this,arguments)}_(Do,en,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[nr]},attrTest:function(A){return this._super.attrTest.call(this,A)&&(Math.abs(A.scale-1)>this.options.threshold||this.state&Xt)},emit:function(A){if(A.scale!==1){var E=A.scale<1?"in":"out";A.additionalEvent=this.options.event+E}this._super.emit.call(this,A)}});function No(){yn.apply(this,arguments),this._timer=null,this._input=null}_(No,yn,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Bl]},process:function(A){var E=this.options,F=A.pointers.length===E.pointers,W=A.distance<E.threshold,fe=A.deltaTime>E.time;if(this._input=A,!W||!F||A.eventType&($|ue)&&!fe)this.reset();else if(A.eventType&Oe)this.reset(),this._timer=f(function(){this.state=mn,this.tryEmit()},E.time,this);else if(A.eventType&$)return mn;return un},reset:function(){clearTimeout(this._timer)},emit:function(A){this.state===mn&&(A&&A.eventType&$?this.manager.emit(this.options.event+"up",A):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function Bo(){en.apply(this,arguments)}_(Bo,en,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[nr]},attrTest:function(A){return this._super.attrTest.call(this,A)&&(Math.abs(A.rotation)>this.options.threshold||this.state&Xt)}});function Uo(){en.apply(this,arguments)}_(Uo,en,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ne|Le,pointers:1},getTouchAction:function(){return ga.prototype.getTouchAction.call(this)},attrTest:function(A){var E=this.options.direction,F;return E&(Ne|Le)?F=A.overallVelocity:E&Ne?F=A.overallVelocityX:E&Le&&(F=A.overallVelocityY),this._super.attrTest.call(this,A)&&E&A.offsetDirection&&A.distance>this.options.threshold&&A.maxPointers==this.options.pointers&&l(F)>this.options.velocity&&A.eventType&$},emit:function(A){var E=zl(A.offsetDirection);E&&this.manager.emit(this.options.event+E,A),this.manager.emit(this.options.event,A)}});function ma(){yn.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}_(ma,yn,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Fo]},process:function(A){var E=this.options,F=A.pointers.length===E.pointers,W=A.distance<E.threshold,fe=A.deltaTime<E.time;if(this.reset(),A.eventType&Oe&&this.count===0)return this.failTimeout();if(W&&fe&&F){if(A.eventType!=$)return this.failTimeout();var Ae=this.pTime?A.timeStamp-this.pTime<E.interval:!0,We=!this.pCenter||O(this.pCenter,A.center)<E.posThreshold;this.pTime=A.timeStamp,this.pCenter=A.center,!We||!Ae?this.count=1:this.count+=1,this._input=A;var bt=this.count%E.taps;if(bt===0)return this.hasRequireFailures()?(this._timer=f(function(){this.state=mn,this.tryEmit()},E.interval,this),Xt):mn}return un},failTimeout:function(){return this._timer=f(function(){this.state=un},this.options.interval,this),un},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==mn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function _n(A,E){return E=E||{},E.recognizers=b(E.recognizers,_n.defaults.preset),new zo(A,E)}_n.VERSION="2.0.7",_n.defaults={domEvents:!1,touchAction:Nl,enable:!0,inputTarget:null,inputClass:null,preset:[[Bo,{enable:!1}],[Do,{enable:!1},["rotate"]],[Uo,{direction:Ne}],[ga,{direction:Ne},["swipe"]],[ma],[ma,{event:"doubletap",taps:2},["tap"]],[No]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Gm=1,$l=2;function zo(A,E){this.options=p({},_n.defaults,E||{}),this.options.inputTarget=this.options.inputTarget||A,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=A,this.input=Lt(this),this.touchAction=new Oo(this,this.options.touchAction),Vl(this,!0),d(this.options.recognizers,function(F){var W=this.add(new F[0](F[1]));F[2]&&W.recognizeWith(F[2]),F[3]&&W.requireFailure(F[3])},this)}zo.prototype={set:function(A){return p(this.options,A),A.touchAction&&this.touchAction.update(),A.inputTarget&&(this.input.destroy(),this.input.target=A.inputTarget,this.input.init()),this},stop:function(A){this.session.stopped=A?$l:Gm},recognize:function(A){var E=this.session;if(!E.stopped){this.touchAction.preventDefaults(A);var F,W=this.recognizers,fe=E.curRecognizer;(!fe||fe&&fe.state&mn)&&(fe=E.curRecognizer=null);for(var Ae=0;Ae<W.length;)F=W[Ae],E.stopped!==$l&&(!fe||F==fe||F.canRecognizeWith(fe))?F.recognize(A):F.reset(),!fe&&F.state&(Xt|xr|On)&&(fe=E.curRecognizer=F),Ae++}},get:function(A){if(A instanceof yn)return A;for(var E=this.recognizers,F=0;F<E.length;F++)if(E[F].options.event==A)return E[F];return null},add:function(A){if(h(A,"add",this))return this;var E=this.get(A.options.event);return E&&this.remove(E),this.recognizers.push(A),A.manager=this,this.touchAction.update(),A},remove:function(A){if(h(A,"remove",this))return this;if(A=this.get(A),A){var E=this.recognizers,F=w(E,A);F!==-1&&(E.splice(F,1),this.touchAction.update())}return this},on:function(A,E){if(A!==i&&E!==i){var F=this.handlers;return d(I(A),function(W){F[W]=F[W]||[],F[W].push(E)}),this}},off:function(A,E){if(A!==i){var F=this.handlers;return d(I(A),function(W){E?F[W]&&F[W].splice(w(F[W],E),1):delete F[W]}),this}},emit:function(A,E){this.options.domEvents&&Wm(A,E);var F=this.handlers[A]&&this.handlers[A].slice();if(!(!F||!F.length)){E.type=A,E.preventDefault=function(){E.srcEvent.preventDefault()};for(var W=0;W<F.length;)F[W](E),W++}},destroy:function(){this.element&&Vl(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Vl(A,E){var F=A.element;if(F.style){var W;d(A.options.cssProps,function(fe,Ae){W=B(F.style,Ae),E?(A.oldCssProps[W]=F.style[W],F.style[W]=fe):F.style[W]=A.oldCssProps[W]||""}),E||(A.oldCssProps={})}}function Wm(A,E){var F=n.createEvent("Event");F.initEvent(A,!0,!0),F.gesture=E,E.target.dispatchEvent(F)}p(_n,{INPUT_START:Oe,INPUT_MOVE:rt,INPUT_END:$,INPUT_CANCEL:ue,STATE_POSSIBLE:va,STATE_BEGAN:Xt,STATE_CHANGED:xr,STATE_ENDED:On,STATE_RECOGNIZED:mn,STATE_CANCELLED:ri,STATE_FAILED:un,DIRECTION_NONE:xe,DIRECTION_LEFT:te,DIRECTION_RIGHT:Ge,DIRECTION_UP:Fe,DIRECTION_DOWN:Ye,DIRECTION_HORIZONTAL:Ne,DIRECTION_VERTICAL:Le,DIRECTION_ALL:ot,Manager:zo,Input:Je,TouchAction:Oo,TouchInput:ha,MouseInput:Be,PointerEventInput:ze,TouchMouseInput:Po,SingleTouchInput:ei,Recognizer:yn,AttrRecognizer:en,Tap:ma,Pan:ga,Swipe:Uo,Pinch:Do,Rotate:Bo,Press:No,on:M,off:T,each:d,merge:m,extend:g,assign:p,inherit:_,bindFn:y,prefixed:B});var Ym=typeof t<"u"?t:typeof self<"u"?self:{};Ym.Hammer=_n,typeof i=="function"&&i.amd?i(function(){return _n}):e.exports?e.exports=_n:t[r]=_n})(window,document,"Hammer")})(mg);var Qb=mg.exports;const fi=Rn(Qb);var Ut=function(e){return e.Hover="hover",e.Click="click",e.Select="select",e.Active="active",e.Drag="drag",e}({}),hf,df,vf,fu,pf;function Jb(e){var t=Kb();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Kb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eS={panstart:"dragstart",panmove:"dragging",panend:"dragend",pancancel:"dragcancel"};hf=De(),df=je(ie.IMapService),hf(vf=(fu=function(e){Ee(n,e);var t=Jb(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"indragging",!1),$e(R(r),"mapService",pf,R(r)),S(R(r),"hammertime",void 0),S(R(r),"lastClickTime",0),S(R(r),"lastClickXY",[-1,-1]),S(R(r),"clickTimer",void 0),S(R(r),"$containter",void 0),S(R(r),"onDrag",function(u){var s=r.interactionEvent(u);s.type=eS[s.type],s.type==="dragging"?r.indragging=!0:r.indragging=!1,r.emit(Ut.Drag,s)}),S(R(r),"onHammer",function(u){u.srcEvent.stopPropagation();var s=r.interactionEvent(u);r.emit(Ut.Hover,s)}),S(R(r),"onTouch",function(u){var s=u.touches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchstart"})}),S(R(r),"onTouchEnd",function(u){if(u.changedTouches.length>0){var s=u.changedTouches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchend"})}}),S(R(r),"onTouchMove",function(u){var s=u.changedTouches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchmove"})}),S(R(r),"onHover",function(u){var s=u.clientX,l=u.clientY,c=s,f=l,h=u.type,d=r.mapService.getMapContainer();if(d){var v=d.getBoundingClientRect(),p=v.top,g=v.left;c=c-g-d.clientLeft,f=f-p-d.clientTop}var m=r.mapService.containerToLngLat([c,f]);if(h==="click"){r.isDoubleTap(c,f,m);return}if(h==="touch"){r.isDoubleTap(c,f,m);return}h!=="click"&&h!=="dblclick"&&r.emit(Ut.Hover,{x:c,y:f,lngLat:m,type:h,target:u})}),r}return ae(n,[{key:"init",value:function(){this.addEventListenerOnMap(),this.$containter=this.mapService.getMapContainer()}},{key:"destroy",value:function(){this.hammertime&&this.hammertime.destroy(),this.removeEventListenerOnMap(),this.off(Ut.Hover)}},{key:"triggerHover",value:function(i){var a=i.x,o=i.y;this.emit(Ut.Hover,{x:a,y:o})}},{key:"triggerSelect",value:function(i){this.emit(Ut.Select,{featureId:i})}},{key:"triggerActive",value:function(i){this.emit(Ut.Active,{featureId:i})}},{key:"addEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();if(i){var a=new fi.Manager(i);a.add(new fi.Tap({event:"dblclick",taps:2})),a.add(new fi.Tap({event:"click"})),a.add(new fi.Pan({threshold:0,pointers:0})),a.add(new fi.Press({})),a.on("dblclick click",this.onHammer),a.on("panstart panmove panend pancancel",this.onDrag),i.addEventListener("touchstart",this.onTouch),i.addEventListener("touchend",this.onTouchEnd),i.addEventListener("mousemove",this.onHover),i.addEventListener("touchmove",this.onTouchMove),i.addEventListener("mousedown",this.onHover,!0),i.addEventListener("mouseup",this.onHover),i.addEventListener("contextmenu",this.onHover),this.hammertime=a}}},{key:"removeEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();i&&(i.removeEventListener("mousemove",this.onHover),this.hammertime.off("dblclick click",this.onHammer),this.hammertime.off("panstart panmove panend pancancel",this.onDrag),i.removeEventListener("touchstart",this.onTouch),i.removeEventListener("touchend",this.onTouchEnd),i.removeEventListener("mousedown",this.onHover),i.removeEventListener("mouseup",this.onHover),i.removeEventListener("contextmenu",this.onHover))}},{key:"interactionEvent",value:function(i){var a=i.type,o=i.pointerType,u,s;o==="touch"?(s=Math.floor(i.pointers[0].clientY),u=Math.floor(i.pointers[0].clientX)):(s=Math.floor(i.srcEvent.y),u=Math.floor(i.srcEvent.x));var l=this.mapService.getMapContainer();if(l){var c=l.getBoundingClientRect(),f=c.top,h=c.left;u-=h,s-=f}var d=this.mapService.containerToLngLat([u,s]);return{x:u,y:s,lngLat:d,type:a,target:i.srcEvent}}},{key:"isDoubleTap",value:function(i,a,o){var u=this,s=new Date().getTime(),l="click";s-this.lastClickTime<400&&Math.abs(this.lastClickXY[0]-i)<10&&Math.abs(this.lastClickXY[1]-a)<10?(this.lastClickTime=0,this.lastClickXY=[-1,-1],this.clickTimer&&clearTimeout(this.clickTimer),l="dblclick",this.emit(Ut.Hover,{x:i,y:a,lngLat:o,type:l})):(this.lastClickTime=s,this.lastClickXY=[i,a],this.clickTimer=setTimeout(function(){l="click",u.emit(Ut.Hover,{x:i,y:a,lngLat:o,type:l})},400))}}]),n}(el),pf=Ue(fu.prototype,"mapService",[df],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),fu));var tS=0;function nS(e){var t=e;if(typeof e=="string"&&(t=document.getElementById(e)),t){var n=document.createElement("div");return n.style.cssText+=`
      position: absolute;
      z-index:2;
      height: 100%;
      width: 100%;
      pointer-events: none;
    `,n.id="l7-scene-".concat(tS++),n.classList.add("l7-scene"),t.appendChild(n),n}return null}function rS(e){var t,n=!0;if((e==null||(t=e.target)===null||t===void 0?void 0:t.target)instanceof HTMLElement)for(var r,i=e==null||(r=e.target)===null||r===void 0?void 0:r.target;i;){var a,o=Array.from(i.classList);if(o.includes("l7-marker")||o.includes("l7-popup")){n=!1;break}i=(a=i)===null||a===void 0?void 0:a.parentElement}return n}var iS=function(e){return e[e.SAMPLED=0]="SAMPLED",e[e.RENDER_TARGET=1]="RENDER_TARGET",e}({}),gf,mf,yf,_f,xf,bf,Sf,ar,Af,Ef,Cf,wf,Tf;function aS(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=oS(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function oS(e,t){if(e){if(typeof e=="string")return Mf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mf(e,t)}}function Mf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}gf=De(),mf=je(ie.IMapService),yf=je(ie.IRendererService),_f=je(ie.IGlobalConfigService),xf=je(ie.IInteractionService),bf=je(ie.ILayerService),gf(Sf=(ar=function(){function e(){var t=this;oe(this,e),S(this,"pickedColors",void 0),S(this,"pickedTileLayers",[]),$e(this,"mapService",Af,this),$e(this,"rendererService",Ef,this),$e(this,"configService",Cf,this),$e(this,"interactionService",wf,this),$e(this,"layerService",Tf,this),S(this,"pickingFBO",void 0),S(this,"width",0),S(this,"height",0),S(this,"alreadyInPicking",!1),S(this,"pickBufferScale",1),S(this,"pickFromPickingFBO",function(){var n=Y(C.mark(function r(i,a){var o,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,T,D,U,I,w,k;return C.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(o=a.x,u=a.y,s=a.lngLat,l=a.type,c=a.target,f=!1,h=t.rendererService,d=h.readPixelsAsync,v=h.getContainer,p=t.getContainerSize(v()),g=p.width,m=p.height,g*=lt,m*=lt,_=i.getLayerConfig(),y=_.enableHighlight,x=_.enableSelect,b=o*lt,M=u*lt,!(b>g-1*lt||b<0||M>m-1*lt||M<0)){B.next=11;break}return B.abrupt("return",!1);case 11:return B.next=13,d({x:Math.floor(b/t.pickBufferScale),y:Math.floor((m-(u+1)*lt)/t.pickBufferScale),width:1,height:1,data:new Uint8Array(4),framebuffer:t.pickingFBO});case 13:return T=B.sent,t.pickedColors=T,T[0]!==0||T[1]!==0||T[2]!==0?(D=fr(T),U=i.layerPickService.getFeatureById(D),D!==i.getCurrentPickId()&&l==="mousemove"&&(l="mouseenter"),I={x:o,y:u,type:l,lngLat:s,featureId:D,feature:U,target:c},U&&(f=!0,i.setCurrentPickId(D),t.triggerHoverOnLayer(i,I))):(w={x:o,y:u,lngLat:s,type:i.getCurrentPickId()!==null&&l==="mousemove"?"mouseout":"un"+l,featureId:null,target:c,feature:null},t.triggerHoverOnLayer(i,z(z({},w),{},{type:"unpick"})),t.triggerHoverOnLayer(i,w),i.setCurrentPickId(null)),y&&i.layerPickService.highlightPickedFeature(T),x&&l==="click"&&(T==null?void 0:T.toString())!==[0,0,0,0].toString()&&(k=fr(T),i.getCurrentSelectedId()===null||k!==i.getCurrentSelectedId()?(i.layerPickService.selectFeature(T),i.setCurrentSelectedId(k)):(i.layerPickService.selectFeature(new Uint8Array([0,0,0,0])),i.setCurrentSelectedId(null))),B.abrupt("return",f);case 19:case"end":return B.stop()}},r)}));return function(r,i){return n.apply(this,arguments)}}())}return ae(e,[{key:"init",value:function(n){var r=this.rendererService,i=r.createTexture2D,a=r.createFramebuffer,o=r.getContainer,u=this.getContainerSize(o()),s=u.width,l=u.height;s*=lt,l*=lt,this.pickBufferScale=this.configService.getSceneConfig(n).pickBufferScale||1,s=Math.round(s/this.pickBufferScale),l=Math.round(l/this.pickBufferScale);var c=i({width:s,height:l,usage:iS.RENDER_TARGET,label:"Picking Texture"});this.pickingFBO=a({color:c,depth:!0,width:s,height:l}),this.interactionService.on(Ut.Hover,this.pickingAllLayer.bind(this))}},{key:"boxPickLayer",value:function(){var t=Y(C.mark(function r(i,a,o){var u=this,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=this.rendererService,l=s.useFramebufferAsync,c=s.clear,this.resizePickingFBO(),i.hooks.beforePickingEncode.call(),d.next=5,l(this.pickingFBO,Y(C.mark(function v(){return C.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:c({framebuffer:u.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),i.renderModels({ispick:!0});case 2:case"end":return g.stop()}},v)})));case 5:return i.hooks.afterPickingEncode.call(),d.next=8,this.pickBox(i,a);case 8:f=d.sent,o(f);case 10:case"end":return d.stop()}},r,this)}));function n(r,i,a){return t.apply(this,arguments)}return n}()},{key:"pickBox",value:function(){var t=Y(C.mark(function r(i,a){var o=this,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,T,D,U,I,w;return C.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(u=a.map(function(B){var K=B<0?0:B;return Math.floor(K*lt/o.pickBufferScale)}),s=Pe(u,4),l=s[0],c=s[1],f=s[2],h=s[3],d=this.rendererService,v=d.readPixelsAsync,p=d.getContainer,g=this.getContainerSize(p()),m=g.width,_=g.height,m*=lt,_*=lt,!(l>(m-1)*lt/this.pickBufferScale||f<0||c>(_-1)*lt/this.pickBufferScale||h<0)){P.next=7;break}return P.abrupt("return",[]);case 7:return y=Math.min(m/this.pickBufferScale,f)-l,x=Math.min(_/this.pickBufferScale,h)-c,P.next=11,v({x:l,y:Math.floor(_/this.pickBufferScale-(h+1)),width:y,height:x,data:new Uint8Array(y*x*4),framebuffer:this.pickingFBO});case 11:for(b=P.sent,M=[],T={},D=0;D<b.length/4;D=D+1)U=b.slice(D*4,D*4+4),I=fr(U),I!==-1&&!T[I]&&(w=i.layerPickService.getFeatureById(I),M.push(z(z({},w),{},{pickedFeatureIdx:I})),T[I]=!0);return P.abrupt("return",M);case 16:case"end":return P.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"handleCursor",value:function(n,r){var i=n.getLayerConfig(),a=i.cursor,o=a===void 0?"":a,u=i.cursorEnabled;if(u){var s=this.mapService.version,l=s==="GAODE2.x"?this.mapService.getMapContainer():this.mapService.getMarkerContainer(),c=l==null?void 0:l.style.getPropertyValue("cursor");r==="unmousemove"&&c!==""?l==null||l.style.setProperty("cursor",""):r==="mousemove"&&(l==null||l.style.setProperty("cursor",o))}}},{key:"destroy",value:function(){this.pickingFBO.destroy(),this.pickingFBO=null}},{key:"getContainerSize",value:function(n){return n.getContext?{width:n.width/lt,height:n.height/lt}:n.getBoundingClientRect()}},{key:"pickingAllLayer",value:function(){var t=Y(C.mark(function r(i){return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(!this.layerService.needPick(i.type)||!this.isPickingAllLayer())){o.next=2;break}return o.abrupt("return");case 2:return this.alreadyInPicking=!0,o.next=5,this.pickingLayers(i);case 5:this.layerService.renderLayers(),this.alreadyInPicking=!1;case 7:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"isPickingAllLayer",value:function(){return!(this.alreadyInPicking||this.layerService.alreadyInRendering||this.interactionService.indragging||!this.layerService.getShaderPickStat())}},{key:"resizePickingFBO",value:function(){var n=this.rendererService.getContainer,r=this.getContainerSize(n()),i=r.width,a=r.height;i*=lt,a*=lt,(this.width!==i||this.height!==a)&&(this.pickingFBO.resize({width:Math.round(i/this.pickBufferScale),height:Math.round(a/this.pickBufferScale)}),this.width=i,this.height=a)}},{key:"pickingLayers",value:function(){var t=Y(C.mark(function r(i){var a=this,o,u,s,l,c,f,h;return C.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:o=this.rendererService,u=o.clear,s=o.useFramebufferAsync,this.resizePickingFBO(),l=this.layerService.getRenderList(),c=aS(l.filter(function(p){return p.needPick(i.type)}).reverse()),v.prev=4,h=C.mark(function p(){var g,m;return C.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return g=f.value,y.next=3,s(a.pickingFBO,Y(C.mark(function x(){return C.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:u({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),g.layerPickService.pickRender(i);case 2:case"end":return M.stop()}},x)})));case 3:return y.next=5,a.pickFromPickingFBO(g,i);case 5:if(m=y.sent,a.layerService.pickedLayerId=m?+g.id:-1,!(m&&!g.getLayerConfig().enablePropagation)){y.next=9;break}return y.abrupt("return",1);case 9:case"end":return y.stop()}},p)}),c.s();case 7:if((f=c.n()).done){v.next=13;break}return v.delegateYield(h(),"t0",9);case 9:if(!v.t0){v.next=11;break}return v.abrupt("break",13);case 11:v.next=7;break;case 13:v.next=18;break;case 15:v.prev=15,v.t1=v.catch(4),c.e(v.t1);case 18:return v.prev=18,c.f(),v.finish(18);case 21:case"end":return v.stop()}},r,this,[[4,15,18,21]])}));function n(r){return t.apply(this,arguments)}return n}()},{key:"triggerHoverOnLayer",value:function(n,r){rS(r)&&(this.handleCursor(n,r.type),n.emit(r.type,r))}}]),e}(),Af=Ue(ar.prototype,"mapService",[mf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ef=Ue(ar.prototype,"rendererService",[yf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Cf=Ue(ar.prototype,"configService",[_f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wf=Ue(ar.prototype,"interactionService",[xf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tf=Ue(ar.prototype,"layerService",[bf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ar));var uS=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;oe(this,e),S(this,"autoStart",void 0),S(this,"startTime",0),S(this,"oldTime",0),S(this,"running",!1),S(this,"elapsedTime",0),this.autoStart=t}return ae(e,[{key:"start",value:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}},{key:"stop",value:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}},{key:"getElapsedTime",value:function(){return this.getDelta(),this.elapsedTime}},{key:"getDelta",value:function(){var n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var r=(typeof performance>"u"?Date:performance).now();n=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=n}return n}}]),e}(),kf,If,Lf,Rf,Pf,hi,Ff,Of,Df;function Ma(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=sS(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function sS(e,t){if(e){if(typeof e=="string")return Nf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(e,t)}}function Nf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lS(e){var t=cS();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function cS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Bf=Ke.throttle;kf=De(),If=je(ie.IRendererService),Lf=je(ie.IMapService),Rf=je(ie.IDebugService),kf(Pf=(hi=function(e){Ee(n,e);var t=lS(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"pickedLayerId",-1),S(R(r),"clock",new uS),S(R(r),"alreadyInRendering",!1),S(R(r),"layers",[]),S(R(r),"layerList",[]),S(R(r),"layerRenderID",void 0),S(R(r),"sceneInited",!1),S(R(r),"animateInstanceCount",0),S(R(r),"shaderPicking",!0),S(R(r),"enableRender",!0),$e(R(r),"renderService",Ff,R(r)),$e(R(r),"mapService",Of,R(r)),$e(R(r),"debugService",Df,R(r)),S(R(r),"reRender",Bf(function(){r.renderLayers()},32)),S(R(r),"throttleRenderLayers",Bf(function(){r.renderLayers()},16)),r}return ae(n,[{key:"needPick",value:function(i){return this.layerList.some(function(a){return a.needPick(i)})}},{key:"add",value:function(i){var a=this;this.layers.push(i),this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"addMask",value:function(i){var a=this;this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"initLayers",value:function(){var r=Y(C.mark(function a(){var o=this;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:this.sceneInited=!0,this.layers.forEach(function(){var l=Y(C.mark(function c(f){return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(f.startInit){d.next=4;break}return d.next=3,f.init();case 3:o.updateLayerRenderList();case 4:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}());case 2:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSceneInited",value:function(){return this.sceneInited}},{key:"getRenderList",value:function(){return this.layerList}},{key:"getLayers",value:function(){return this.layers}},{key:"getLayer",value:function(i){return this.layers.find(function(a){return a.id===i})}},{key:"getLayerByName",value:function(i){return this.layers.find(function(a){return a.name===i})}},{key:"remove",value:function(){var r=Y(C.mark(function a(o,u){var s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:u?(s=u.layerChildren.indexOf(o),s>-1&&u.layerChildren.splice(s,1)):(l=this.layers.indexOf(o),l>-1&&this.layers.splice(l,1)),o.destroy(),this.reRender(),this.emit("layerChange",this.layers);case 4:case"end":return f.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"removeAllLayers",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:this.destroy(),this.reRender();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"setEnableRender",value:function(i){this.enableRender=i}},{key:"renderLayers",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d,v;return C.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(!(this.alreadyInRendering||!this.enableRender)){g.next=2;break}return g.abrupt("return");case 2:this.updateLayerRenderList(),o=this.debugService.generateRenderUid(),this.debugService.renderStart(o),this.alreadyInRendering=!0,this.clear(),u=Ma(this.layerList);try{for(u.s();!(s=u.n()).done;)l=s.value,l.prerender()}catch(m){u.e(m)}finally{u.f()}this.renderService.beginFrame(),c=Ma(this.layerList),g.prev=11,c.s();case 13:if((f=c.n()).done){g.next=25;break}if(h=f.value,d=h.getLayerConfig(),v=d.enableMask,h.masks.filter(function(m){return m.inited}).length>0&&v&&this.renderMask(h.masks),!h.getLayerConfig().enableMultiPassRenderer){g.next=22;break}return g.next=20,h.renderMultiPass();case 20:g.next=23;break;case 22:h.render();case 23:g.next=13;break;case 25:g.next=30;break;case 27:g.prev=27,g.t0=g.catch(11),c.e(g.t0);case 30:return g.prev=30,c.f(),g.finish(30);case 33:this.renderService.endFrame(),this.debugService.renderEnd(o),this.alreadyInRendering=!1;case 36:case"end":return g.stop()}},a,this,[[11,27,30,33]])}));function i(){return r.apply(this,arguments)}return i}()},{key:"renderMask",value:function(i){var a=0;this.renderService.clear({stencil:0,depth:1,framebuffer:null});var o=i.length>1?lr.MULTIPLE:lr.SINGLE,u=Ma(i),s;try{for(u.s();!(s=u.n()).done;){var l=s.value;l.render({isStencil:!0,stencilType:o,stencilIndex:a++})}}catch(c){u.e(c)}finally{u.f()}}},{key:"beforeRenderData",value:function(){var r=Y(C.mark(function a(o){var u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,o.hooks.beforeRenderData.promise();case 2:u=l.sent,u&&this.renderLayers();case 4:case"end":return l.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"renderTileLayerMask",value:function(i){var a=0,o=i.getLayerConfig(),u=o.enableMask,s=u===void 0?!0:u,l=i.tileMask?1:0,c=i.masks.filter(function(p){return p.inited});l=l+(s?c.length:1);var f=l>1?lr.MULTIPLE:lr.SINGLE;if((i.tileMask||c.length&&s)&&this.renderService.clear({stencil:0,depth:1,framebuffer:null}),c.length&&s){var h=Ma(c),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;v.render({isStencil:!0,stencilType:f,stencilIndex:a++})}}catch(p){h.e(p)}finally{h.f()}}i.tileMask&&i.tileMask.render({isStencil:!0,stencilType:f,stencilIndex:a++,stencilOperation:Co.OR})}},{key:"renderTileLayer",value:function(){var r=Y(C.mark(function a(o){return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this.renderTileLayerMask(o),!o.getLayerConfig().enableMultiPassRenderer){s.next=6;break}return s.next=4,o.renderMultiPass();case 4:s.next=8;break;case 6:return s.next=8,o.render();case 8:case"end":return s.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"updateLayerRenderList",value:function(){var i=this;this.layerList=[],this.layers.filter(function(a){return a.inited}).filter(function(a){return a.isVisible()}).sort(function(a,o){return a.zIndex-o.zIndex}).forEach(function(a){i.layerList.push(a)})}},{key:"destroy",value:function(){this.layers.forEach(function(i){i.destroy()}),this.layers=[],this.layerList=[],this.emit("layerChange",this.layers)}},{key:"startAnimate",value:function(){this.animateInstanceCount++===0&&(this.clock.start(),this.runRender())}},{key:"stopAnimate",value:function(){--this.animateInstanceCount===0&&(this.stopRender(),this.clock.stop())}},{key:"getOESTextureFloat",value:function(){return this.renderService.extensionObject.OES_texture_float}},{key:"enableShaderPick",value:function(){this.shaderPicking=!0}},{key:"disableShaderPick",value:function(){this.shaderPicking=!1}},{key:"getShaderPickStat",value:function(){return this.shaderPicking}},{key:"clear",value:function(){var i=tt(this.mapService.bgColor);this.renderService.clear({color:i,depth:1,stencil:0,framebuffer:null})}},{key:"runRender",value:function(){this.renderLayers(),this.layerRenderID=window.requestAnimationFrame(this.runRender.bind(this))}},{key:"stopRender",value:function(){window.cancelAnimationFrame(this.layerRenderID)}}]),n}(Yt.EventEmitter),Ff=Ue(hi.prototype,"renderService",[If],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Of=Ue(hi.prototype,"mapService",[Lf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Df=Ue(hi.prototype,"debugService",[Rf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),hi));function fS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kt(e,t){if(e==null)return{};var n=fS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var L=function(e){return e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.BLEND_EQUATION=32777]="BLEND_EQUATION",e[e.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",e[e.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",e[e.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",e[e.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",e[e.MAX_EXT=32776]="MAX_EXT",e[e.MIN_EXT=32775]="MIN_EXT",e[e.BLEND_DST_RGB=32968]="BLEND_DST_RGB",e[e.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",e[e.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",e[e.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.BLEND_COLOR=32773]="BLEND_COLOR",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",e[e.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.BUFFER_SIZE=34660]="BUFFER_SIZE",e[e.BUFFER_USAGE=34661]="BUFFER_USAGE",e[e.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK",e[e.CULL_FACE=2884]="CULL_FACE",e[e.BLEND=3042]="BLEND",e[e.DITHER=3024]="DITHER",e[e.STENCIL_TEST=2960]="STENCIL_TEST",e[e.DEPTH_TEST=2929]="DEPTH_TEST",e[e.SCISSOR_TEST=3089]="SCISSOR_TEST",e[e.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",e[e.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",e[e.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",e[e.NO_ERROR=0]="NO_ERROR",e[e.INVALID_ENUM=1280]="INVALID_ENUM",e[e.INVALID_VALUE=1281]="INVALID_VALUE",e[e.INVALID_OPERATION=1282]="INVALID_OPERATION",e[e.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",e[e.CW=2304]="CW",e[e.CCW=2305]="CCW",e[e.LINE_WIDTH=2849]="LINE_WIDTH",e[e.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",e[e.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",e[e.CULL_FACE_MODE=2885]="CULL_FACE_MODE",e[e.FRONT_FACE=2886]="FRONT_FACE",e[e.DEPTH_RANGE=2928]="DEPTH_RANGE",e[e.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",e[e.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",e[e.DEPTH_FUNC=2932]="DEPTH_FUNC",e[e.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",e[e.STENCIL_FUNC=2962]="STENCIL_FUNC",e[e.STENCIL_FAIL=2964]="STENCIL_FAIL",e[e.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",e[e.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",e[e.STENCIL_REF=2967]="STENCIL_REF",e[e.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",e[e.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",e[e.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",e[e.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",e[e.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",e[e.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",e[e.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",e[e.VIEWPORT=2978]="VIEWPORT",e[e.SCISSOR_BOX=3088]="SCISSOR_BOX",e[e.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",e[e.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",e[e.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",e[e.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",e[e.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",e[e.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",e[e.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",e[e.RED_BITS=3410]="RED_BITS",e[e.GREEN_BITS=3411]="GREEN_BITS",e[e.BLUE_BITS=3412]="BLUE_BITS",e[e.ALPHA_BITS=3413]="ALPHA_BITS",e[e.DEPTH_BITS=3414]="DEPTH_BITS",e[e.STENCIL_BITS=3415]="STENCIL_BITS",e[e.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",e[e.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",e[e.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",e[e.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",e[e.SAMPLES=32937]="SAMPLES",e[e.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",e[e.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",e[e.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",e[e.DONT_CARE=4352]="DONT_CARE",e[e.FASTEST=4353]="FASTEST",e[e.NICEST=4354]="NICEST",e[e.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER",e[e.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",e[e.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",e[e.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",e[e.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",e[e.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",e[e.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",e[e.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",e[e.SHADER_TYPE=35663]="SHADER_TYPE",e[e.DELETE_STATUS=35712]="DELETE_STATUS",e[e.LINK_STATUS=35714]="LINK_STATUS",e[e.VALIDATE_STATUS=35715]="VALIDATE_STATUS",e[e.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",e[e.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",e[e.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",e[e.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",e[e.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP",e[e.VENDOR=7936]="VENDOR",e[e.RENDERER=7937]="RENDERER",e[e.VERSION=7938]="VERSION",e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE=5890]="TEXTURE",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",e[e.TEXTURE0=33984]="TEXTURE0",e[e.TEXTURE1=33985]="TEXTURE1",e[e.TEXTURE2=33986]="TEXTURE2",e[e.TEXTURE3=33987]="TEXTURE3",e[e.TEXTURE4=33988]="TEXTURE4",e[e.TEXTURE5=33989]="TEXTURE5",e[e.TEXTURE6=33990]="TEXTURE6",e[e.TEXTURE7=33991]="TEXTURE7",e[e.TEXTURE8=33992]="TEXTURE8",e[e.TEXTURE9=33993]="TEXTURE9",e[e.TEXTURE10=33994]="TEXTURE10",e[e.TEXTURE11=33995]="TEXTURE11",e[e.TEXTURE12=33996]="TEXTURE12",e[e.TEXTURE13=33997]="TEXTURE13",e[e.TEXTURE14=33998]="TEXTURE14",e[e.TEXTURE15=33999]="TEXTURE15",e[e.TEXTURE16=34e3]="TEXTURE16",e[e.TEXTURE17=34001]="TEXTURE17",e[e.TEXTURE18=34002]="TEXTURE18",e[e.TEXTURE19=34003]="TEXTURE19",e[e.TEXTURE20=34004]="TEXTURE20",e[e.TEXTURE21=34005]="TEXTURE21",e[e.TEXTURE22=34006]="TEXTURE22",e[e.TEXTURE23=34007]="TEXTURE23",e[e.TEXTURE24=34008]="TEXTURE24",e[e.TEXTURE25=34009]="TEXTURE25",e[e.TEXTURE26=34010]="TEXTURE26",e[e.TEXTURE27=34011]="TEXTURE27",e[e.TEXTURE28=34012]="TEXTURE28",e[e.TEXTURE29=34013]="TEXTURE29",e[e.TEXTURE30=34014]="TEXTURE30",e[e.TEXTURE31=34015]="TEXTURE31",e[e.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",e[e.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",e[e.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",e[e.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",e[e.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",e[e.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",e[e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",e[e.COMPILE_STATUS=35713]="COMPILE_STATUS",e[e.LOW_FLOAT=36336]="LOW_FLOAT",e[e.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",e[e.HIGH_FLOAT=36338]="HIGH_FLOAT",e[e.LOW_INT=36339]="LOW_INT",e[e.MEDIUM_INT=36340]="MEDIUM_INT",e[e.HIGH_INT=36341]="HIGH_INT",e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.RENDERBUFFER=36161]="RENDERBUFFER",e[e.RGBA4=32854]="RGBA4",e[e.RGB5_A1=32855]="RGB5_A1",e[e.RGB565=36194]="RGB565",e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX=6401]="STENCIL_INDEX",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",e[e.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",e[e.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",e[e.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",e[e.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",e[e.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",e[e.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",e[e.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",e[e.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",e[e.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",e[e.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",e[e.NONE=0]="NONE",e[e.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",e[e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",e[e.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",e[e.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",e[e.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",e[e.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",e[e.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",e[e.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",e[e.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",e[e.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",e[e.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",e}({}),hS=Ke.isNil,dS=function(){function e(t){var n=this;oe(this,e),S(this,"name",void 0),S(this,"type",void 0),S(this,"scale",void 0),S(this,"descriptor",void 0),S(this,"featureBufferLayout",[]),S(this,"needRescale",!1),S(this,"needRemapping",!1),S(this,"needRegenerateVertices",!1),S(this,"featureRange",{startIndex:0,endIndex:1/0}),S(this,"vertexAttribute",void 0),S(this,"defaultCallback",function(r){if(r.length===0){var i;return((i=n.scale)===null||i===void 0?void 0:i.defaultValues)||[]}return r.map(function(a,o){var u,s=(u=n.scale)===null||u===void 0?void 0:u.scalers[o].func,l=s(a);return l})}),this.setProps(t)}return ae(e,[{key:"setProps",value:function(n){Object.assign(this,n)}},{key:"mapping",value:function(n){var r;if((r=this.scale)!==null&&r!==void 0&&r.callback){var i,a=(i=this.scale)===null||i===void 0?void 0:i.callback.apply(i,ee(n));if(!hS(a))return[a]}return this.defaultCallback(n)}},{key:"resetDescriptor",value:function(){this.descriptor&&(this.descriptor.buffer.data=[])}}]),e}(),vS=["buffer","update","name"],pS=["buffer","update","name"],di,Uf,zf,$f,hu,Vf,gS=(di={},S(di,L.FLOAT,4),S(di,L.UNSIGNED_BYTE,1),S(di,L.UNSIGNED_SHORT,2),di),mS=(Uf=De(),zf=je(ie.IRendererService),Uf($f=(hu=function(){function e(){oe(this,e),S(this,"attributesAndIndices",void 0),$e(this,"rendererService",Vf,this),S(this,"attributes",[]),S(this,"triangulation",void 0),S(this,"featureLayout",{sizePerElement:0,elements:[]})}return ae(e,[{key:"registerStyleAttribute",value:function(n){var r=this.getLayerStyleAttribute(n.name||"");return r?r.setProps(n):(r=new dS(n),this.attributes.push(r)),r}},{key:"unRegisterStyleAttribute",value:function(n){var r=this.attributes.findIndex(function(i){return i.name===n});r>-1&&this.attributes.splice(r,1)}},{key:"updateScaleAttribute",value:function(n){this.attributes.forEach(function(r){var i,a=r.name,o=(i=r.scale)===null||i===void 0?void 0:i.field;(n[a]||o&&n[o])&&(r.needRescale=!0,r.needRemapping=!0,r.needRegenerateVertices=!0)})}},{key:"updateStyleAttribute",value:function(n,r,i){var a=this.getLayerStyleAttribute(n);a||(a=this.registerStyleAttribute(z(z({},r),{},{name:n})));var o=r.scale;o&&a&&(a.scale=o,a.needRescale=!0,a.needRemapping=!0,a.needRegenerateVertices=!0,i&&i.featureRange&&(a.featureRange=i.featureRange))}},{key:"getLayerStyleAttributes",value:function(){return this.attributes}},{key:"getLayerStyleAttribute",value:function(n){return this.attributes.find(function(r){return r.name===n})}},{key:"getLayerAttributeScale",value:function(n){var r,i=this.getLayerStyleAttribute(n),a=i==null||(r=i.scale)===null||r===void 0?void 0:r.scalers;return a&&a[0]?a[0].func:null}},{key:"updateAttributeByFeatureRange",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,u=this.attributes.find(function(b){return b.name===n});if(u&&u.descriptor){var s=u.descriptor,l=s.update,c=s.buffer,f=s.size,h=f===void 0?0:f,d=gS[c.type||L.FLOAT];if(l){var v=this.featureLayout,p=v.elements,g=v.sizePerElement,m=p.slice(i,a);if(!m.length)return;var _=m[0].offset,y=_*h*d,x=m.map(function(b,M){for(var T=b.featureIdx,D=b.vertices,U=b.normals,I=D.length/g,w=[],k=0;k<I;k++){var P=U?U.slice(k*3,k*3+3):[];w.push.apply(w,ee(l(r[T],T,D.slice(k*g,k*g+g),M,P)))}return w}).flat();u.vertexAttribute.updateBuffer({data:x,offset:y}),o==null||o.emit("legend:".concat(n),{type:n,attr:u})}}}},{key:"createAttributesAndIndices",value:function(n,r,i){var a=this;this.featureLayout={sizePerElement:0,elements:[]},r&&(this.triangulation=r);var o=this.attributes.map(function(m){return m.resetDescriptor(),m.descriptor}),u=0,s=0,l=[],c=3;n.forEach(function(m,_){var y=a.triangulation(m,i),x=y.indices,b=y.vertices,M=y.normals,T=y.size,D=y.indexes,U=y.count;typeof U=="number"&&(s+=U),x.forEach(function(P){l.push(P+u)}),c=T;var I=b.length/T;a.featureLayout.sizePerElement=c,a.featureLayout.elements.push({featureIdx:_,vertices:b,normals:M,offset:u}),u+=I;for(var w=function(B){var K=(M==null?void 0:M.slice(B*3,B*3+3))||[],ce=b.slice(B*T,B*T+T),ve=0;D&&D[B]!==void 0&&(ve=D[B]),o.forEach(function(ye,H){if(ye&&ye.update){var V;(V=ye.buffer.data).push.apply(V,ee(ye.update(m,_,ce,B,K,ve)))}})},k=0;k<I;k++)w(k)});var f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createElements,p={};o.forEach(function(m,_){if(m){var y=m.buffer;m.update,m.name;var x=Kt(m,vS),b=h(z({buffer:d(y)},x));p[m.name||""]=b,a.attributes[_].vertexAttribute=b}});var g=v({data:l,type:L.UNSIGNED_INT,count:l.length});return this.attributesAndIndices={attributes:p,elements:g,count:s},this.attributesAndIndices}},{key:"createAttributes",value:function(n,r){var i=this;this.featureLayout={sizePerElement:0,elements:[]},r&&(this.triangulation=r);var a=this.attributes.map(function(h){return h.resetDescriptor(),h.descriptor}),o=0,u=3;n.forEach(function(h,d){var v=i.triangulation(h),p=v.indices,g=v.vertices,m=v.normals,_=v.size,y=v.indexes;p.forEach(function(T){}),u=_;var x=g.length/_;i.featureLayout.sizePerElement=u,i.featureLayout.elements.push({featureIdx:d,vertices:g,normals:m,offset:o}),o+=x;for(var b=function(D){var U=(m==null?void 0:m.slice(D*3,D*3+3))||[],I=g.slice(D*_,D*_+_),w=0;y&&y[D]!==void 0&&(w=y[D]),a.forEach(function(k,P){if(k&&k.update){var B;(B=k.buffer.data).push.apply(B,ee(k.update(h,d,I,D,U,w)))}})},M=0;M<x;M++)b(M)});var s=this.rendererService,l=s.createAttribute,c=s.createBuffer,f={};return a.forEach(function(h,d){if(h){var v=h.buffer;h.update,h.name;var p=Kt(h,pS),g=l(z({buffer:c(v)},p));f[h.name||""]=g,i.attributes[d].vertexAttribute=g}}),{attributes:f}}},{key:"clearAllAttributes",value:function(){var n;this.attributes.forEach(function(r){r.vertexAttribute&&r.vertexAttribute.destroy()}),(n=this.attributesAndIndices)===null||n===void 0||n.elements.destroy(),this.attributes=[]}}]),e}(),Vf=Ue(hu.prototype,"rendererService",[zf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),hu))||$f);function yg(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function u(c){try{l(r.next(c))}catch(f){o(f)}}function s(c){try{l(r.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((r=r.apply(e,t||[])).next())})}function _g(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function vl(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function pl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function xg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var as={exports:{}},qa={exports:{}},Wi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){return r&&typeof r.length=="number"&&r.length>=0&&r.length%1===0}e.exports=t.default})(Wi,Wi.exports);var $t={},os={exports:{}},us={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var a=r.pop();return n.call(this,r,a)}},e.exports=t.default})(us,us.exports);var er={};Object.defineProperty(er,"__esModule",{value:!0});er.fallback=bg;er.wrap=Sg;var yS=er.hasQueueMicrotask=typeof queueMicrotask=="function"&&queueMicrotask,_S=er.hasSetImmediate=typeof setImmediate=="function"&&setImmediate,xS=er.hasNextTick=typeof process=="object"&&typeof process.nextTick=="function";function bg(e){setTimeout(e,0)}function Sg(e){return function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return e(function(){return t.apply(void 0,n)})}}var Ti;yS?Ti=queueMicrotask:_S?Ti=setImmediate:xS?Ti=process.nextTick:Ti=bg;er.default=Sg(Ti);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=us.exports,r=u(n),i=er,a=u(i),o=$t;function u(f){return f&&f.__esModule?f:{default:f}}function s(f){return(0,o.isAsync)(f)?function(){for(var h=[],d=arguments.length;d--;)h[d]=arguments[d];var v=h.pop(),p=f.apply(this,h);return l(p,v)}:(0,r.default)(function(h,d){var v;try{v=f.apply(this,h)}catch(p){return d(p)}if(v&&typeof v.then=="function")return l(v,d);d(null,v)})}function l(f,h){return f.then(function(d){c(h,null,d)},function(d){c(h,d&&d.message?d:new Error(d))})}function c(f,h,d){try{f(h,d)}catch(v){(0,a.default)(function(p){throw p},v)}}e.exports=t.default})(os,os.exports);Object.defineProperty($t,"__esModule",{value:!0});$t.isAsyncIterable=$t.isAsyncGenerator=$t.isAsync=void 0;var bS=os.exports,SS=AS(bS);function AS(e){return e&&e.__esModule?e:{default:e}}function Ag(e){return e[Symbol.toStringTag]==="AsyncFunction"}function ES(e){return e[Symbol.toStringTag]==="AsyncGenerator"}function CS(e){return typeof e[Symbol.asyncIterator]=="function"}function wS(e){if(typeof e!="function")throw new Error("expected a function");return Ag(e)?(0,SS.default)(e):e}$t.default=wS;$t.isAsync=Ag;$t.isAsyncGenerator=ES;$t.isAsyncIterable=CS;var vr={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r,i){if(i===void 0&&(i=r.length),!i)throw new Error("arity is undefined");function a(){for(var o=this,u=[],s=arguments.length;s--;)u[s]=arguments[s];return typeof u[i-1]=="function"?r.apply(this,u):new Promise(function(l,c){u[i-1]=function(f){for(var h=[],d=arguments.length-1;d-- >0;)h[d]=arguments[d+1];if(f)return c(f);l(h.length>1?h:h[0])},r.apply(o,u)})}return a}e.exports=t.default})(vr,vr.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Wi.exports,r=s(n),i=$t,a=s(i),o=vr.exports,u=s(o);function s(l){return l&&l.__esModule?l:{default:l}}t.default=(0,u.default)(function(l,c,f){var h=(0,r.default)(c)?[]:{};l(c,function(d,v,p){(0,a.default)(d)(function(g){for(var m,_=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];_.length<2&&(m=_,_=m[0]),h[v]=_,p(g)})},function(d){return f(d,h)})},3),e.exports=t.default})(qa,qa.exports);var ss={exports:{}},Qa={exports:{}},ls={exports:{}},Yi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){function i(){for(var a=[],o=arguments.length;o--;)a[o]=arguments[o];if(r!==null){var u=r;r=null,u.apply(this,a)}}return Object.assign(i,r),i}e.exports=t.default})(Yi,Yi.exports);var cs={exports:{}},fs={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return n[Symbol.iterator]&&n[Symbol.iterator]()},e.exports=t.default})(fs,fs.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=Wi.exports,r=o(n),i=fs.exports,a=o(i);function o(f){return f&&f.__esModule?f:{default:f}}function u(f){var h=-1,d=f.length;return function(){return++h<d?{value:f[h],key:h}:null}}function s(f){var h=-1;return function(){var v=f.next();return v.done?null:(h++,{value:v.value,key:h})}}function l(f){var h=f?Object.keys(f):[],d=-1,v=h.length;return function p(){var g=h[++d];return g==="__proto__"?p():d<v?{value:f[g],key:g}:null}}function c(f){if((0,r.default)(f))return u(f);var h=(0,a.default)(f);return h?s(h):l(f)}e.exports=t.default})(cs,cs.exports);var Xi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){return function(){for(var i=[],a=arguments.length;a--;)i[a]=arguments[a];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,i)}}e.exports=t.default})(Xi,Xi.exports);var hs={exports:{}},Zi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={};t.default=n,e.exports=t.default})(Zi,Zi.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=Zi.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function a(o,u,s,l){var c=!1,f=!1,h=!1,d=0,v=0;function p(){d>=u||h||c||(h=!0,o.next().then(function(_){var y=_.value,x=_.done;if(!(f||c)){if(h=!1,x){c=!0,d<=0&&l(null);return}d++,s(y,v,g),v++,p()}}).catch(m))}function g(_,y){if(d-=1,!f){if(_)return m(_);if(_===!1){c=!0,f=!0;return}if(y===r.default||c&&d<=0)return c=!0,l(null);p()}}function m(_){f||(h=!1,c=!0,l(_))}p()}e.exports=t.default})(hs,hs.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Yi.exports,r=d(n),i=cs.exports,a=d(i),o=Xi.exports,u=d(o),s=$t,l=hs.exports,c=d(l),f=Zi.exports,h=d(f);function d(v){return v&&v.__esModule?v:{default:v}}t.default=function(v){return function(p,g,m){if(m=(0,r.default)(m),v<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!p)return m(null);if((0,s.isAsyncGenerator)(p))return(0,c.default)(p,v,g,m);if((0,s.isAsyncIterable)(p))return(0,c.default)(p[Symbol.asyncIterator](),v,g,m);var _=(0,a.default)(p),y=!1,x=!1,b=0,M=!1;function T(U,I){if(!x)if(b-=1,U)y=!0,m(U);else if(U===!1)y=!0,x=!0;else{if(I===h.default||y&&b<=0)return y=!0,m(null);M||D()}}function D(){for(M=!0;b<v&&!y;){var U=_();if(U===null){y=!0,b<=0&&m(null);return}b+=1,g(U.value,U.key,(0,u.default)(T))}M=!1}D()}},e.exports=t.default})(ls,ls.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=ls.exports,r=s(n),i=$t,a=s(i),o=vr.exports,u=s(o);function s(c){return c&&c.__esModule?c:{default:c}}function l(c,f,h,d){return(0,r.default)(f)(c,(0,a.default)(h),d)}t.default=(0,u.default)(l,4),e.exports=t.default})(Qa,Qa.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Qa.exports,r=o(n),i=vr.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l,c){return(0,r.default)(s,1,l,c)}t.default=(0,a.default)(u,3),e.exports=t.default})(ss,ss.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=qa.exports,r=o(n),i=ss.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,r.default)(a.default,s,l)}e.exports=t.default})(as,as.exports);var wo=xg(as.exports),ln=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.call=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,wo(this.tasks)},e.prototype.tap=function(t,n){var r=this;this.tasks.push(function(i){n.apply(void 0,pl([],vl(r.args),!1)),i(null,t)})},e}(),jf={exports:{}},ds={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Wi.exports,r=g(n),i=Zi.exports,a=g(i),o=Qa.exports,u=g(o),s=Yi.exports,l=g(s),c=Xi.exports,f=g(c),h=$t,d=g(h),v=vr.exports,p=g(v);function g(x){return x&&x.__esModule?x:{default:x}}function m(x,b,M){M=(0,l.default)(M);var T=0,D=0,U=x.length,I=!1;U===0&&M(null);function w(k,P){k===!1&&(I=!0),I!==!0&&(k?M(k):(++D===U||P===a.default)&&M(null))}for(;T<U;T++)b(x[T],T,(0,f.default)(w))}function _(x,b,M){return(0,u.default)(x,1/0,b,M)}function y(x,b,M){var T=(0,r.default)(x)?m:_;return T(x,(0,d.default)(b),M)}t.default=(0,p.default)(y,3),e.exports=t.default})(ds,ds.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=ds.exports,r=o(n),i=qa.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,a.default)(r.default,s,l)}e.exports=t.default})(jf,jf.exports);var vs={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Yi.exports,r=c(n),i=Xi.exports,a=c(i),o=$t,u=c(o),s=vr.exports,l=c(s);function c(h){return h&&h.__esModule?h:{default:h}}function f(h,d){if(d=(0,r.default)(d),!Array.isArray(h))return d(new Error("First argument to waterfall must be an array of functions"));if(!h.length)return d();var v=0;function p(m){var _=(0,u.default)(h[v++]);_.apply(void 0,m.concat([(0,a.default)(g)]))}function g(m){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(m!==!1){if(m||v===h.length)return d.apply(void 0,[m].concat(_));p(_)}}p([])}t.default=(0,l.default)(f),e.exports=t.default})(vs,vs.exports);var TS=xg(vs.exports),Hf=function(){function e(){this.tasks=[]}return e.prototype.call=function(){return wo(this.tasks)},e.prototype.tap=function(t,n){this.tasks.push(function(r){var i=n();r(i,t)})},e}(),MS=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,wo(this.tasks)},e.prototype.tapPromise=function(t,n){var r=this;this.tasks.push(function(i){return yg(r,void 0,void 0,function(){return _g(this,function(a){switch(a.label){case 0:return[4,n.apply(void 0,pl([],vl(this.args),!1))];case 1:return a.sent(),i(null,t),[2]}})})})},e}(),kS=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,wo(this.tasks)},e.prototype.tapPromise=function(t,n){var r=this;this.tasks.push(function(i){return yg(r,void 0,void 0,function(){var a;return _g(this,function(o){switch(o.label){case 0:return[4,n.apply(void 0,pl([],vl(this.args),!1))];case 1:return a=o.sent(),i(a,t),[2]}})})})},e}(),IS=function(){function e(){this.tasks=[]}return e.prototype.promise=function(){return TS(this.tasks)},e.prototype.tapPromise=function(t,n){this.tasks.length===0?this.tasks.push(function(r){n().then(function(i){r(null,i)})}):this.tasks.push(function(r,i){n(r).then(function(a){i(null,a)})})},e}(),Eg={exports:{}},LS=Eg.exports={};LS.forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}};var Cg=Eg.exports,RS=function(e){var t=e.stateHandler.getState;function n(o){var u=t(o);return u&&!!u.isDetectable}function r(o){t(o).isDetectable=!0}function i(o){return!!t(o).busy}function a(o,u){t(o).busy=!!u}return{isDetectable:n,markAsDetectable:r,isBusy:i,markBusy:a}},PS=function(e){var t={};function n(o){var u=e.get(o);return u===void 0?[]:t[u]||[]}function r(o,u){var s=e.get(o);t[s]||(t[s]=[]),t[s].push(u)}function i(o,u){for(var s=n(o),l=0,c=s.length;l<c;++l)if(s[l]===u){s.splice(l,1);break}}function a(o){var u=n(o);u&&(u.length=0)}return{get:n,add:r,removeListener:i,removeAllListeners:a}},FS=function(){var e=1;function t(){return e++}return{generate:t}},OS=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function r(a){var o=n(a);return o&&o.id!==void 0?o.id:null}function i(a){var o=n(a);if(!o)throw new Error("setId required the element to have a resize detection state.");var u=t.generate();return o.id=u,u}return{get:r,set:i}},DS=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var r=function(i,a){i[a]=function(){var u=console[a];if(u.apply)u.apply(console,arguments);else for(var s=0;s<arguments.length;s++)u(arguments[s])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n},wg={exports:{}},Tg=wg.exports={};Tg.isIE=function(e){function t(){var r=navigator.userAgent.toLowerCase();return r.indexOf("msie")!==-1||r.indexOf("trident")!==-1||r.indexOf(" edge/")!==-1}if(!t())return!1;if(!e)return!0;var n=function(){var r,i=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->";while(o[0]);return i>4?i:r}();return e===n};Tg.isLegacyOpera=function(){return!!window.opera};var Mg=wg.exports,kg={exports:{}},NS=kg.exports={};NS.getOption=BS;function BS(e,t,n){var r=e[t];return r==null&&n!==void 0?n:r}var US=kg.exports,Gf=US,zS=function(t){t=t||{};var n=t.reporter,r=Gf.getOption(t,"async",!0),i=Gf.getOption(t,"auto",!0);i&&!r&&(n&&n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),r=!0);var a=Wf(),o,u=!1;function s(v,p){!u&&i&&r&&a.size()===0&&f(),a.add(v,p)}function l(){for(u=!0;a.size();){var v=a;a=Wf(),v.process()}u=!1}function c(v){u||(v===void 0&&(v=r),o&&(h(o),o=null),v?f():l())}function f(){o=d(l)}function h(v){var p=clearTimeout;return p(v)}function d(v){var p=function(g){return setTimeout(g,0)};return p(v)}return{add:s,force:c}};function Wf(){var e={},t=0,n=0,r=0;function i(u,s){s||(s=u,u=0),u>n?n=u:u<r&&(r=u),e[u]||(e[u]=[]),e[u].push(s),t++}function a(){for(var u=r;u<=n;u++)for(var s=e[u],l=0;l<s.length;l++){var c=s[l];c()}}function o(){return t}return{add:i,process:a,size:o}}var gl="_erd";function $S(e){return e[gl]={},Ig(e)}function Ig(e){return e[gl]}function VS(e){delete e[gl]}var jS={initState:$S,getState:Ig,cleanState:VS},vi=Mg,HS=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function i(l,c){function f(){c(l)}if(vi.isIE(8))r(l).object={proxy:f},l.attachEvent("onresize",f);else{var h=u(l);if(!h)throw new Error("Element is not detectable by this strategy.");h.contentDocument.defaultView.addEventListener("resize",f)}}function a(l){var c=e.important?" !important; ":"; ";return(l.join(c)+c).trim()}function o(l,c,f){f||(f=c,c=l,l=null),l=l||{},l.debug;function h(d,v){var p=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),g=!1,m=window.getComputedStyle(d),_=d.offsetWidth,y=d.offsetHeight;r(d).startSize={width:_,height:y};function x(){function b(){if(m.position==="static"){d.style.setProperty("position","relative",l.important?"important":"");var D=function(U,I,w,k){function P(K){return K.replace(/[^-\d\.]/g,"")}var B=w[k];B!=="auto"&&P(B)!=="0"&&(U.warn("An element that is positioned static has style."+k+"="+B+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+k+" will be set to 0. Element: ",I),I.style.setProperty(k,"0",l.important?"important":""))};D(t,d,m,"top"),D(t,d,m,"right"),D(t,d,m,"bottom"),D(t,d,m,"left")}}function M(){g||b();function D(I,w){if(!I.contentDocument){var k=r(I);k.checkForObjectDocumentTimeoutId&&window.clearTimeout(k.checkForObjectDocumentTimeoutId),k.checkForObjectDocumentTimeoutId=setTimeout(function(){k.checkForObjectDocumentTimeoutId=0,D(I,w)},100);return}w(I.contentDocument)}var U=this;D(U,function(w){v(d)})}m.position!==""&&(b(),g=!0);var T=document.createElement("object");T.style.cssText=p,T.tabIndex=-1,T.type="text/html",T.setAttribute("aria-hidden","true"),T.onload=M,vi.isIE()||(T.data="about:blank"),r(d)&&(d.appendChild(T),r(d).object=T,vi.isIE()&&(T.data="about:blank"))}n?n.add(x):x()}vi.isIE(8)?f(c):h(c,f)}function u(l){return r(l).object}function s(l){if(r(l)){var c=u(l);c&&(vi.isIE(8)?l.detachEvent("onresize",c.proxy):l.removeChild(c),r(l).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(l).checkForObjectDocumentTimeoutId),delete r(l).object)}}return{makeDetectable:o,addListener:i,uninstall:s}},GS=Cg.forEach,WS=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;e.stateHandler.hasState;var i=e.idHandler;if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=c(),o="erd_scroll_detection_scrollbar_style",u="erd_scroll_detection_container";function s(x){f(x,o,u)}s(window.document);function l(x){var b=e.important?" !important; ":"; ";return(x.join(b)+b).trim()}function c(){var x=500,b=500,M=document.createElement("div");M.style.cssText=l(["position: absolute","width: "+x*2+"px","height: "+b*2+"px","visibility: hidden","margin: 0","padding: 0"]);var T=document.createElement("div");T.style.cssText=l(["position: absolute","width: "+x+"px","height: "+b+"px","overflow: scroll","visibility: none","top: "+-x*3+"px","left: "+-b*3+"px","visibility: hidden","margin: 0","padding: 0"]),T.appendChild(M),document.body.insertBefore(T,document.body.firstChild);var D=x-T.clientWidth,U=b-T.clientHeight;return document.body.removeChild(T),{width:D,height:U}}function f(x,b,M){function T(w,k){k=k||function(B){x.head.appendChild(B)};var P=x.createElement("style");return P.innerHTML=w,P.id=b,k(P),P}if(!x.getElementById(b)){var D=M+"_animation",U=M+"_animation_active",I=`/* Created by the element-resize-detector library. */
`;I+="."+M+" > div::-webkit-scrollbar { "+l(["display: none"])+` }

`,I+="."+U+" { "+l(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+D,"animation-name: "+D])+` }
`,I+="@-webkit-keyframes "+D+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,I+="@keyframes "+D+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",T(I)}}function h(x){x.className+=" "+u+"_animation_active"}function d(x,b,M){if(x.addEventListener)x.addEventListener(b,M);else if(x.attachEvent)x.attachEvent("on"+b,M);else return t.error("[scroll] Don't know how to add event listeners.")}function v(x,b,M){if(x.removeEventListener)x.removeEventListener(b,M);else if(x.detachEvent)x.detachEvent("on"+b,M);else return t.error("[scroll] Don't know how to remove event listeners.")}function p(x){return r(x).container.childNodes[0].childNodes[0].childNodes[0]}function g(x){return r(x).container.childNodes[0].childNodes[0].childNodes[1]}function m(x,b){var M=r(x).listeners;if(!M.push)throw new Error("Cannot add listener to an element that is not detectable.");r(x).listeners.push(b)}function _(x,b,M){M||(M=b,b=x,x=null),x=x||{};function T(){if(x.debug){var $=Array.prototype.slice.call(arguments);if($.unshift(i.get(b),"Scroll: "),t.log.apply)t.log.apply(null,$);else for(var ue=0;ue<$.length;ue++)t.log($[ue])}}function D($){function ue(xe){var te=xe.getRootNode&&xe.getRootNode().contains(xe);return xe===xe.ownerDocument.body||xe.ownerDocument.body.contains(xe)||te}return!ue($)||window.getComputedStyle($)===null}function U($){var ue=r($).container.childNodes[0],xe=window.getComputedStyle(ue);return!xe.width||xe.width.indexOf("px")===-1}function I(){var $=window.getComputedStyle(b),ue={};return ue.position=$.position,ue.width=b.offsetWidth,ue.height=b.offsetHeight,ue.top=$.top,ue.right=$.right,ue.bottom=$.bottom,ue.left=$.left,ue.widthCSS=$.width,ue.heightCSS=$.height,ue}function w(){var $=I();r(b).startSize={width:$.width,height:$.height},T("Element start size",r(b).startSize)}function k(){r(b).listeners=[]}function P(){if(T("storeStyle invoked."),!r(b)){T("Aborting because element has been uninstalled");return}var $=I();r(b).style=$}function B($,ue,xe){r($).lastWidth=ue,r($).lastHeight=xe}function K($){return p($).childNodes[0]}function ce(){return 2*a.width+1}function ve(){return 2*a.height+1}function ye($){return $+10+ce()}function H($){return $+10+ve()}function V($){return $*2+ce()}function Z($){return $*2+ve()}function X($,ue,xe){var te=p($),Ge=g($),Fe=ye(ue),Ye=H(xe),Ne=V(ue),Le=Z(xe);te.scrollLeft=Fe,te.scrollTop=Ye,Ge.scrollLeft=Ne,Ge.scrollTop=Le}function he(){var $=r(b).container;if(!$){$=document.createElement("div"),$.className=u,$.style.cssText=l(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(b).container=$,h($),b.appendChild($);var ue=function(){r(b).onRendered&&r(b).onRendered()};d($,"animationstart",ue),r(b).onAnimationStart=ue}return $}function le(){function $(){var me=r(b).style;if(me.position==="static"){b.style.setProperty("position","relative",x.important?"important":"");var Xe=function(Re,O,N,G){function re(nt){return nt.replace(/[^-\d\.]/g,"")}var be=N[G];be!=="auto"&&re(be)!=="0"&&(Re.warn("An element that is positioned static has style."+G+"="+be+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+G+" will be set to 0. Element: ",O),O.style[G]=0)};Xe(t,b,me,"top"),Xe(t,b,me,"right"),Xe(t,b,me,"bottom"),Xe(t,b,me,"left")}}function ue(me,Xe,Re,O){return me=me?me+"px":"0",Xe=Xe?Xe+"px":"0",Re=Re?Re+"px":"0",O=O?O+"px":"0",["left: "+me,"top: "+Xe,"right: "+O,"bottom: "+Re]}if(T("Injecting elements"),!r(b)){T("Aborting because element has been uninstalled");return}$();var xe=r(b).container;xe||(xe=he());var te=a.width,Ge=a.height,Fe=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),Ye=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(ue(-(1+te),-(1+Ge),-Ge,-te))),Ne=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),Le=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),ot=l(["position: absolute","left: 0","top: 0"]),dt=l(["position: absolute","width: 200%","height: 200%"]),ft=document.createElement("div"),Je=document.createElement("div"),Lt=document.createElement("div"),on=document.createElement("div"),j=document.createElement("div"),ne=document.createElement("div");ft.dir="ltr",ft.style.cssText=Fe,ft.className=u,Je.className=u,Je.style.cssText=Ye,Lt.style.cssText=Ne,on.style.cssText=ot,j.style.cssText=Le,ne.style.cssText=dt,Lt.appendChild(on),j.appendChild(ne),Je.appendChild(Lt),Je.appendChild(j),ft.appendChild(Je),xe.appendChild(ft);function se(){var me=r(b);me&&me.onExpand?me.onExpand():T("Aborting expand scroll handler: element has been uninstalled")}function pe(){var me=r(b);me&&me.onShrink?me.onShrink():T("Aborting shrink scroll handler: element has been uninstalled")}d(Lt,"scroll",se),d(j,"scroll",pe),r(b).onExpandScroll=se,r(b).onShrinkScroll=pe}function de(){function $(Ne,Le,ot){var dt=K(Ne),ft=ye(Le),Je=H(ot);dt.style.setProperty("width",ft+"px",x.important?"important":""),dt.style.setProperty("height",Je+"px",x.important?"important":"")}function ue(Ne){var Le=b.offsetWidth,ot=b.offsetHeight,dt=Le!==r(b).lastWidth||ot!==r(b).lastHeight;T("Storing current size",Le,ot),B(b,Le,ot),n.add(0,function(){if(dt){if(!r(b)){T("Aborting because element has been uninstalled");return}if(!xe()){T("Aborting because element container has not been initialized");return}if(x.debug){var Je=b.offsetWidth,Lt=b.offsetHeight;(Je!==Le||Lt!==ot)&&t.warn(i.get(b),"Scroll: Size changed before updating detector elements.")}$(b,Le,ot)}}),n.add(1,function(){if(!r(b)){T("Aborting because element has been uninstalled");return}if(!xe()){T("Aborting because element container has not been initialized");return}X(b,Le,ot)}),dt&&Ne&&n.add(2,function(){if(!r(b)){T("Aborting because element has been uninstalled");return}if(!xe()){T("Aborting because element container has not been initialized");return}Ne()})}function xe(){return!!r(b).container}function te(){function Ne(){return r(b).lastNotifiedWidth===void 0}T("notifyListenersIfNeeded invoked");var Le=r(b);if(Ne()&&Le.lastWidth===Le.startSize.width&&Le.lastHeight===Le.startSize.height)return T("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(Le.lastWidth===Le.lastNotifiedWidth&&Le.lastHeight===Le.lastNotifiedHeight)return T("Not notifying: Size already notified");T("Current size not notified, notifying..."),Le.lastNotifiedWidth=Le.lastWidth,Le.lastNotifiedHeight=Le.lastHeight,GS(r(b).listeners,function(ot){ot(b)})}function Ge(){if(T("startanimation triggered."),U(b)){T("Ignoring since element is still unrendered...");return}T("Element rendered.");var Ne=p(b),Le=g(b);(Ne.scrollLeft===0||Ne.scrollTop===0||Le.scrollLeft===0||Le.scrollTop===0)&&(T("Scrollbars out of sync. Updating detector elements..."),ue(te))}function Fe(){if(T("Scroll detected."),U(b)){T("Scroll event fired while unrendered. Ignoring...");return}ue(te)}if(T("registerListenersAndPositionElements invoked."),!r(b)){T("Aborting because element has been uninstalled");return}r(b).onRendered=Ge,r(b).onExpand=Fe,r(b).onShrink=Fe;var Ye=r(b).style;$(b,Ye.width,Ye.height)}function Ve(){if(T("finalizeDomMutation invoked."),!r(b)){T("Aborting because element has been uninstalled");return}var $=r(b).style;B(b,$.width,$.height),X(b,$.width,$.height)}function Oe(){M(b)}function rt(){T("Installing..."),k(),w(),n.add(0,P),n.add(1,le),n.add(2,de),n.add(3,Ve),n.add(4,Oe)}T("Making detectable..."),D(b)?(T("Element is detached"),he(),T("Waiting until element is attached..."),r(b).onRendered=function(){T("Element is now attached"),rt()}):rt()}function y(x){var b=r(x);b&&(b.onExpandScroll&&v(p(x),"scroll",b.onExpandScroll),b.onShrinkScroll&&v(g(x),"scroll",b.onShrinkScroll),b.onAnimationStart&&v(b.container,"animationstart",b.onAnimationStart),b.container&&x.removeChild(b.container))}return{makeDetectable:_,addListener:m,uninstall:y,initDocument:s}},Mi=Cg.forEach,YS=RS,XS=PS,ZS=FS,qS=OS,QS=DS,Yf=Mg,JS=zS,Un=jS,KS=HS,eA=WS;function Xf(e){return Array.isArray(e)||e.length!==void 0}function Zf(e){if(Array.isArray(e))return e;var t=[];return Mi(e,function(n){t.push(n)}),t}function qf(e){return e&&e.nodeType===1}var tA=function(e){e=e||{};var t;if(e.idHandler)t={get:function(_){return e.idHandler.get(_,!0)},set:e.idHandler.set};else{var n=ZS(),r=qS({idGenerator:n,stateHandler:Un});t=r}var i=e.reporter;if(!i){var a=i===!1;i=QS(a)}var o=zn(e,"batchProcessor",JS({reporter:i})),u={};u.callOnAdd=!!zn(e,"callOnAdd",!0),u.debug=!!zn(e,"debug",!1);var s=XS(t),l=YS({stateHandler:Un}),c,f=zn(e,"strategy","object"),h=zn(e,"important",!1),d={reporter:i,batchProcessor:o,stateHandler:Un,idHandler:t,important:h};if(f==="scroll"&&(Yf.isLegacyOpera()?(i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),f="object"):Yf.isIE(9)&&(i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),f="object")),f==="scroll")c=eA(d);else if(f==="object")c=KS(d);else throw new Error("Invalid strategy name: "+f);var v={};function p(_,y,x){function b(w){var k=s.get(w);Mi(k,function(B){B(w)})}function M(w,k,P){s.add(k,P),w&&P(k)}if(x||(x=y,y=_,_={}),!y)throw new Error("At least one element required.");if(!x)throw new Error("Listener required.");if(qf(y))y=[y];else if(Xf(y))y=Zf(y);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var T=0,D=zn(_,"callOnAdd",u.callOnAdd),U=zn(_,"onReady",function(){}),I=zn(_,"debug",u.debug);Mi(y,function(k){Un.getState(k)||(Un.initState(k),t.set(k));var P=t.get(k);if(I&&i.log("Attaching listener to element",P,k),!l.isDetectable(k)){if(I&&i.log(P,"Not detectable."),l.isBusy(k)){I&&i.log(P,"System busy making it detectable"),M(D,k,x),v[P]=v[P]||[],v[P].push(function(){T++,T===y.length&&U()});return}return I&&i.log(P,"Making detectable..."),l.markBusy(k,!0),c.makeDetectable({debug:I,important:h},k,function(K){if(I&&i.log(P,"onElementDetectable"),Un.getState(K)){l.markAsDetectable(K),l.markBusy(K,!1),c.addListener(K,b),M(D,K,x);var ce=Un.getState(K);if(ce&&ce.startSize){var ve=K.offsetWidth,ye=K.offsetHeight;(ce.startSize.width!==ve||ce.startSize.height!==ye)&&b(K)}v[P]&&Mi(v[P],function(H){H()})}else I&&i.log(P,"Element uninstalled before being detectable.");delete v[P],T++,T===y.length&&U()})}I&&i.log(P,"Already detecable, adding listener."),M(D,k,x),T++}),T===y.length&&U()}function g(_){if(!_)return i.error("At least one element is required.");if(qf(_))_=[_];else if(Xf(_))_=Zf(_);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");Mi(_,function(y){s.removeAllListeners(y),c.uninstall(y),Un.cleanState(y)})}function m(_){c.initDocument&&c.initDocument(_)}return{listenTo:p,removeListener:s.removeListener,removeAllListeners:s.removeAllListeners,uninstall:g,initDocument:m}};function zn(e,t,n){var r=e[t];return r==null&&n!==void 0?n:r}const nA=Rn(tA);var Qf,Jf,Kf,eh,th,nh,rh,ih,ah,oh,uh,sh,lh,ch,fh,hh,dh,vh,St,ph,gh,mh,yh,_h,xh,bh,Sh,Ah,Eh,Ch,wh,Th,Mh,kh,Ih;function rA(e){var t=iA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function iA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Qf=De(),Jf=je(ie.SceneID),Kf=je(ie.IIconService),eh=je(ie.IFontService),th=je(ie.IControlService),nh=je(ie.IGlobalConfigService),rh=je(ie.IMapService),ih=je(ie.ICoordinateSystemService),ah=je(ie.IRendererService),oh=je(ie.ILayerService),uh=je(ie.IDebugService),sh=je(ie.ICameraService),lh=je(ie.IInteractionService),ch=je(ie.IPickingService),fh=je(ie.IShaderModuleService),hh=je(ie.IMarkerService),dh=je(ie.IPopupService),Qf(vh=(St=function(e){Ee(n,e);var t=rA(n);function n(){var r;return oe(this,n),r=t.call(this),S(R(r),"destroyed",!1),S(R(r),"loaded",!1),$e(R(r),"id",ph,R(r)),$e(R(r),"iconService",gh,R(r)),$e(R(r),"fontService",mh,R(r)),$e(R(r),"controlService",yh,R(r)),$e(R(r),"configService",_h,R(r)),$e(R(r),"map",xh,R(r)),$e(R(r),"coordinateSystemService",bh,R(r)),$e(R(r),"rendererService",Sh,R(r)),$e(R(r),"layerService",Ah,R(r)),$e(R(r),"debugService",Eh,R(r)),$e(R(r),"cameraService",Ch,R(r)),$e(R(r),"interactionService",wh,R(r)),$e(R(r),"pickingService",Th,R(r)),$e(R(r),"shaderModuleService",Mh,R(r)),$e(R(r),"markerService",kh,R(r)),$e(R(r),"popupService",Ih,R(r)),S(R(r),"inited",!1),S(R(r),"rendering",!1),S(R(r),"$container",void 0),S(R(r),"canvas",void 0),S(R(r),"markerContainer",void 0),S(R(r),"resizeDetector",void 0),S(R(r),"hooks",void 0),S(R(r),"handleWindowResized",function(){r.emit("resize"),r.$container&&(r.initContainer(),r.coordinateSystemService.needRefresh=!0,r.render())}),S(R(r),"handleMapCameraChanged",function(i){r.cameraService.update(i),r.render()}),r.hooks={init:new MS},r}return ae(n,[{key:"init",value:function(i){var a=this;this.configService.setSceneConfig(this.id,i),this.shaderModuleService.registerBuiltinModules(),this.iconService.init(),this.iconService.on("imageUpdate",function(){return a.render()}),this.fontService.init(),this.hooks.init.tapPromise("initMap",Y(C.mark(function o(){return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.debugService.log("map.mapInitStart",{type:a.map.version}),s.next=3,new Promise(function(l){a.map.onCameraChanged(function(c){a.cameraService.init(),a.cameraService.update(c),l()}),a.map.init()});case 3:a.map.onCameraChanged(a.handleMapCameraChanged),a.map.addMarkerContainer(),a.markerService.addMarkers(),a.markerService.addMarkerLayers(),a.popupService.initPopup(),a.interactionService.init(),a.interactionService.on(Ut.Drag,a.addSceneEvent.bind(a));case 10:case"end":return s.stop()}},o)}))),this.hooks.init.tapPromise("initRenderer",Y(C.mark(function o(){var u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s=((u=a.map)===null||u===void 0?void 0:u.getOverlayContainer())||void 0,s?a.$container=s:a.$container=nS(a.configService.getSceneConfig(a.id).id||""),!a.$container){f.next=14;break}return a.canvas=Zn("canvas","",a.$container),a.setCanvas(),f.next=7,a.rendererService.init(a.canvas,a.configService.getSceneConfig(a.id),i.gl);case 7:a.registerContextLost(),a.initContainer(),a.resizeDetector=nA({strategy:"scroll"}),a.resizeDetector.listenTo(a.$container,a.handleWindowResized),window.matchMedia&&((l=window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)"))===null||l===void 0||l.addListener(a.handleWindowResized.bind("screen"))),f.next=15;break;case 14:case 15:a.pickingService.init(a.id);case 16:case"end":return f.stop()}},o)}))),this.render()}},{key:"registerContextLost",value:function(){var i=this,a=this.rendererService.getCanvas();a&&a.addEventListener("webglcontextlost",function(){return i.emit("webglcontextlost")})}},{key:"addLayer",value:function(i){this.layerService.sceneService=this,this.layerService.add(i)}},{key:"addMask",value:function(i){this.layerService.sceneService=this,this.layerService.addMask(i)}},{key:"render",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.rendering||this.destroyed)){u.next=2;break}return u.abrupt("return");case 2:if(this.rendering=!0,this.inited){u.next=16;break}return u.next=6,this.hooks.init.promise();case 6:return this.destroyed&&this.destroy(),u.next=9,this.layerService.initLayers();case 9:this.layerService.renderLayers(),this.controlService.addControls(),this.loaded=!0,this.emit("loaded"),this.inited=!0,u.next=20;break;case 16:return u.next=18,this.layerService.initLayers();case 18:return u.next=20,this.layerService.renderLayers();case 20:this.rendering=!1;case 21:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"addFontFace",value:function(i,a){this.fontService.addFontFace(i,a)}},{key:"getSceneContainer",value:function(){return this.$container}},{key:"exportPng",value:function(){var r=Y(C.mark(function a(o){var u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=(u=this.$container)===null||u===void 0?void 0:u.getElementsByTagName("canvas")[0],f.next=3,this.render();case 3:return l=o==="jpg"?s==null?void 0:s.toDataURL("image/jpeg"):s==null?void 0:s.toDataURL("image/png"),f.abrupt("return",l);case 5:case"end":return f.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"getSceneConfig",value:function(){return this.configService.getSceneConfig(this.id)}},{key:"getPointSizeRange",value:function(){return this.rendererService.getPointSizeRange()}},{key:"addMarkerContainer",value:function(){var i=this.$container.parentElement;i!==null&&(this.markerContainer=Zn("div","l7-marker-container",i))}},{key:"getMarkerContainer",value:function(){return this.markerContainer}},{key:"destroy",value:function(){var i=this,a;if(!this.inited){this.destroyed=!0;return}this.resizeDetector.removeListener(this.$container,this.handleWindowResized),this.pickingService.destroy(),this.layerService.destroy(),this.interactionService.destroy(),this.controlService.destroy(),this.markerService.destroy(),this.fontService.destroy(),this.iconService.destroy(),this.removeAllListeners(),this.inited=!1,this.map.destroy(),setTimeout(function(){var o;(o=i.$container)===null||o===void 0||o.removeChild(i.canvas),i.canvas=null,i.rendererService.destroy()}),(a=this.$container)===null||a===void 0||(a=a.parentNode)===null||a===void 0||a.removeChild(this.$container),this.emit("destroy")}},{key:"initContainer",value:function(){var i,a,o=lt,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l&&(l.width=u*o,l.height=s*o),this.rendererService.viewport({x:0,y:0,width:o*u,height:o*s})}},{key:"setCanvas",value:function(){var i,a,o=lt,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l.width=u*o,l.height=s*o,l.style.width="100%",l.style.height="100%"}},{key:"addSceneEvent",value:function(i){this.emit(i.type,i)}}]),n}(Yt.EventEmitter),ph=Ue(St.prototype,"id",[Jf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gh=Ue(St.prototype,"iconService",[Kf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),mh=Ue(St.prototype,"fontService",[eh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),yh=Ue(St.prototype,"controlService",[th],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_h=Ue(St.prototype,"configService",[nh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),xh=Ue(St.prototype,"map",[rh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bh=Ue(St.prototype,"coordinateSystemService",[ih],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Sh=Ue(St.prototype,"rendererService",[ah],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ah=Ue(St.prototype,"layerService",[oh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Eh=Ue(St.prototype,"debugService",[uh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ch=Ue(St.prototype,"cameraService",[sh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wh=Ue(St.prototype,"interactionService",[lh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Th=Ue(St.prototype,"pickingService",[ch],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mh=Ue(St.prototype,"shaderModuleService",[fh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),kh=Ue(St.prototype,"markerService",[hh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ih=Ue(St.prototype,"popupService",[dh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St));function aA(e){var t=0;switch(e){case"vec2":case"ivec2":t=2;break;case"vec3":case"ivec3":t=3;break;case"vec4":case"ivec4":case"mat2":t=4;break;case"mat3":t=9;break;case"mat4":t=16;break}return t}var oA=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;function Lh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n={};return e=e.replace(oA,function(r,i,a){var o=a.split(":"),u=o[0].trim(),s="";switch(o.length>1&&(s=o[1].trim()),i){case"bool":s=s==="true";break;case"float":case"int":s=Number(s);break;case"vec2":case"vec3":case"vec4":case"ivec2":case"ivec3":case"ivec4":case"mat2":case"mat3":case"mat4":s?s=s.replace("[","").replace("]","").split(",").reduce(function(l,c){return l.push(Number(c.trim())),l},[]):s=new Array(aA(i)).fill(0);break}return n[u]=s,"".concat(t?"uniform ":"").concat(i," ").concat(u,`;
`)}),{content:e,uniforms:n}}function du(e){var t=Lh(e,!0),n=t.content,r=t.uniforms;return n=n.replace(/(\s*uniform\s*.*\s*){((?:\s*.*\s*)*?)};/g,function(i,a,o){o=o.trim().replace(/^.*$/gm,function(c){return"uniform ".concat(c)});var u=Lh(o),s=u.content,l=u.uniforms;return Object.assign(r,l),"".concat(a,`{
`).concat(s,`
};`)}),{content:n,uniforms:r}}var Rh,Ph,uA=Ke.uniq,Fh="#define PI 3.14159265359",sA=`#define SHIFT_RIGHT17 1.0 / 131072.0
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
`,Oh=`layout(std140) uniform SceneUniforms {
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
`,Dh=`layout(std140) uniform PickingUniforms {
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
};`,lA=`#define ambientRatio 0.5
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
`,cA=`// Blinn-Phong model
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
`,fA=`
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

`,hA=`layout(location = 3) in vec3 a_PickingColor;
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
`,dA=`
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
}`,Nh=`#define TILE_SIZE 512.0
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
`,vA=`vec2 rotate_matrix(vec2 v, float a) {
    float b = a / 180.0 * 3.1415926535897932384626433832795;
    float s = sin(b);
    float c = cos(b);
    mat2 m = mat2(c, s, -s, c);
    return m * v;
}`,pA=`/**
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
`,Bh=/precision\s+(high|low|medium)p\s+float/,Uh=`#ifdef GL_FRAGMENT_PRECISION_HIGH
 precision highp float;
 #else
 precision mediump float;
#endif
`,gA=/#pragma include (["^+"]?["[a-zA-Z_0-9](.*)"]*?)/g,mA=/void\s+main\s*\([^)]*\)\s*\{\n?/;Rh=De(),Rh(Ph=function(){function e(){oe(this,e),S(this,"moduleCache",{}),S(this,"rawContentCache",{})}return ae(e,[{key:"registerBuiltinModules",value:function(){this.destroy(),this.registerModule("common",{vs:Fh,fs:Fh}),this.registerModule("decode",{vs:sA,fs:""}),this.registerModule("scene_uniforms",{vs:Oh,fs:Oh}),this.registerModule("picking_uniforms",{vs:Dh,fs:Dh}),this.registerModule("projection",{vs:Nh,fs:Nh}),this.registerModule("project",{vs:dA,fs:""}),this.registerModule("sdf_2d",{vs:"",fs:pA}),this.registerModule("lighting",{vs:cA,fs:""}),this.registerModule("light",{vs:lA,fs:""}),this.registerModule("picking",{vs:hA,fs:fA}),this.registerModule("rotation_2d",{vs:vA,fs:""})}},{key:"registerModule",value:function(n,r){r.vs=r.vs.replace(/\r\n/g,`
`),r.fs=r.fs.replace(/\r\n/g,`
`);var i=r.vs,a=r.fs,o=r.uniforms,u=r.inject,s=du(i),l=s.content,c=s.uniforms,f=du(a),h=f.content,d=f.uniforms;this.rawContentCache[n]={fs:h,inject:u,uniforms:z(z(z({},c),d),o),vs:l}}},{key:"destroy",value:function(){this.moduleCache={},this.rawContentCache={}}},{key:"getModule",value:function(n){var r=this,i=this.rawContentCache[n].vs,a=this.rawContentCache[n].fs,o=this.rawContentCache[n].inject,u={};o!=null&&o["vs:#decl"]&&(i=(o==null?void 0:o["vs:#decl"])+i,u=du(o==null?void 0:o["vs:#decl"]).uniforms),o!=null&&o["vs:#main-start"]&&(i=i.replace(mA,function(m){return m+(o==null?void 0:o["vs:#main-start"])})),o!=null&&o["fs:#decl"]&&(a=(o==null?void 0:o["fs:#decl"])+a);var s=this.processModule(i,[],"vs"),l=s.content,c=s.includeList,f=this.processModule(a,[],"fs"),h=f.content,d=f.includeList,v="",p=uA(c.concat(d).concat(n)).reduce(function(m,_){return z(z({},m),r.rawContentCache[_].uniforms)},z({},u));Bh.test(h)||(v=v+Uh),v=v+h;var g="";return Bh.test(l)||(g=g+Uh),g=g+l,this.moduleCache[n]={fs:v.trim(),uniforms:p,vs:g.trim()},this.moduleCache[n]}},{key:"processModule",value:function(n,r,i){var a=this,o=n.replace(gA,function(u,s){var l=s.split(" "),c=l[0].replace(/"/g,"");if(r.indexOf(c)>-1)return"";var f=a.rawContentCache[c][i];r.push(c);var h=a.processModule(f,r,i),d=h.content;return d});return{content:o,includeList:r}}},{key:"injectDefines",value:function(n){var r=Object.keys(n).reduce(function(i,a){return i+"#define ".concat(a.toUpperCase()," ").concat(n[a],`;
`)},`
`);return r}}]),e}());function yA(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=q(e),e!==null););return e}function hr(){return typeof Reflect<"u"&&Reflect.get?hr=Reflect.get.bind():hr=function(t,n,r){var i=yA(t,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(arguments.length<3?t:r):a.value}},hr.apply(this,arguments)}var Jr=function(e){return e.Normal="normal",e.PostProcessing="post-processing",e}({}),zh,$h,To=(zh=De(),zh($h=function(){function e(){oe(this,e),S(this,"shaderModuleService",void 0),S(this,"rendererService",void 0),S(this,"cameraService",void 0),S(this,"mapService",void 0),S(this,"interactionService",void 0),S(this,"layerService",void 0),S(this,"config",void 0)}return ae(e,[{key:"getName",value:function(){return""}},{key:"getType",value:function(){return Jr.Normal}},{key:"init",value:function(n,r){this.config=r,this.rendererService=n.getContainer().get(ie.IRendererService),this.cameraService=n.getContainer().get(ie.ICameraService),this.mapService=n.getContainer().get(ie.IMapService),this.interactionService=n.getContainer().get(ie.IInteractionService),this.layerService=n.getContainer().get(ie.ILayerService),this.shaderModuleService=n.getContainer().get(ie.IShaderModuleService)}},{key:"render",value:function(n){}}]),e}())||$h),Vh,jh;function _A(e){var t=xA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function xA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Vh=De(),Vh(jh=function(e){Ee(n,e);var t=_A(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getName",value:function(){return"clear"}},{key:"init",value:function(i,a){hr(q(n.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(){this.rendererService.clear({color:[0,0,0,0],depth:1,framebuffer:null})}}]),n}(To));var Hh,Gh,Wh,vu,Yh;function bA(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=SA(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function SA(e,t){if(e){if(typeof e=="string")return Xh(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xh(e,t)}}function Xh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var AA=(Hh=De(),Gh=je(ie.IPostProcessor),Hh(Wh=(vu=function(){function e(){oe(this,e),S(this,"passes",[]),$e(this,"postProcessor",Yh,this),S(this,"layer",void 0),S(this,"renderFlag",void 0),S(this,"width",0),S(this,"height",0)}return ae(e,[{key:"setLayer",value:function(n){this.layer=n}},{key:"setRenderFlag",value:function(n){this.renderFlag=n}},{key:"getRenderFlag",value:function(){return this.renderFlag}},{key:"getPostProcessor",value:function(){return this.postProcessor}},{key:"render",value:function(){var t=Y(C.mark(function r(){var i,a,o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:i=bA(this.passes),s.prev=1,i.s();case 3:if((a=i.n()).done){s.next=9;break}return o=a.value,s.next=7,o.render(this.layer);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),i.e(s.t0);case 14:return s.prev=14,i.f(),s.finish(14);case 17:return s.next=19,this.postProcessor.render(this.layer);case 19:case"end":return s.stop()}},r,this,[[1,11,14,17]])}));function n(){return t.apply(this,arguments)}return n}()},{key:"resize",value:function(n,r){(this.width!==n||this.height!==r)&&(this.postProcessor.resize(n,r),this.width=n,this.height=r)}},{key:"add",value:function(n,r){n.getType()===Jr.PostProcessing?this.postProcessor.add(n,this.layer,r):(n.init(this.layer,r),this.passes.push(n))}},{key:"insert",value:function(n,r,i){n.init(this.layer,r),this.passes.splice(i,0,n)}},{key:"destroy",value:function(){this.passes.length=0}}]),e}(),Yh=Ue(vu.prototype,"postProcessor",[Gh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vu))||Wh),Zh,qh;function EA(e){var t=CA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function CA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Zh=De(),Zh(qh=function(e){Ee(n,e);var t=EA(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"pickingFBO",void 0),S(R(r),"layer",void 0),S(R(r),"width",0),S(R(r),"height",0),S(R(r),"alreadyInRendering",!1),S(R(r),"pickFromPickingFBO",function(u){var s=u.x,l=u.y,c=u.lngLat,f=u.type;if(!(!r.layer.isVisible()||!r.layer.needPick(f))){var h=r.rendererService,d=h.getViewportSize,v=h.readPixelsAsync,p=h.useFramebuffer,g=d(),m=g.width,_=g.height,y=r.layer.getLayerConfig(),x=y.enableHighlight,b=y.enableSelect,M=s*lt,T=l*lt;if(!(M>m||M<0||T>_||T<0)){var D;p(r.pickingFBO,Y(C.mark(function U(){var I,w,k,P,B;return C.wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,v({x:Math.round(M),y:Math.round(_-(l+1)*lt),width:1,height:1,data:new Uint8Array(1*1*4),framebuffer:r.pickingFBO});case 2:D=ce.sent,D[0]!==0||D[1]!==0||D[2]!==0?(w=fr(D),k=r.layer.getSource().getFeatureById(w),P={x:s,y:l,type:f,lngLat:c,featureId:w,feature:k},k&&(r.layer.setCurrentPickId(w),r.triggerHoverOnLayer(P))):(B={x:s,y:l,lngLat:c,type:r.layer.getCurrentPickId()===null?"un"+f:"mouseout",featureId:null,feature:null},r.triggerHoverOnLayer(z(z({},B),{},{type:"unpick"})),r.triggerHoverOnLayer(B),r.layer.setCurrentPickId(null)),x&&r.highlightPickedFeature(D),b&&f==="click"&&((I=D)===null||I===void 0?void 0:I.toString())!==[0,0,0,0].toString()&&r.selectFeature(D);case 6:case"end":return ce.stop()}},U)})))}}}),r}return ae(n,[{key:"getType",value:function(){return Jr.Normal}},{key:"getName",value:function(){return"pixelPicking"}},{key:"init",value:function(i,a){hr(q(n.prototype),"init",this).call(this,i,a),this.layer=i;var o=this.rendererService,u=o.createTexture2D,s=o.createFramebuffer,l=o.getViewportSize,c=l(),f=c.width,h=c.height,d=u({width:f,height:h,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE,label:"Picking Texture"});this.pickingFBO=s({color:d}),this.interactionService.on(Ut.Hover,this.pickFromPickingFBO),this.interactionService.on(Ut.Select,this.selectFeatureHandle.bind(this)),this.interactionService.on(Ut.Active,this.highlightFeatureHandle.bind(this))}},{key:"render",value:function(i){var a=this;if(!this.alreadyInRendering){var o=this.rendererService,u=o.getViewportSize,s=o.useFramebuffer,l=o.clear,c=u(),f=c.width,h=c.height;this.alreadyInRendering=!0,(this.width!==f||this.height!==h)&&(this.pickingFBO.resize({width:f,height:h}),this.width=f,this.height=h),s(this.pickingFBO,function(){l({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1});var d=a.layer.multiPassRenderer.getRenderFlag();a.layer.multiPassRenderer.setRenderFlag(!1),i.hooks.beforePickingEncode.call(),i.render(),i.hooks.afterPickingEncode.call(),a.layer.multiPassRenderer.setRenderFlag(d),a.alreadyInRendering=!1})}}},{key:"triggerHoverOnLayer",value:function(i){this.layer.emit(i.type,i)}},{key:"highlightPickedFeature",value:function(i){var a=Pe(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeHighlight.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeature",value:function(i){var a=Pe(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeSelect.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeatureHandle",value:function(i){var a=i.featureId,o=Ln(a);this.selectFeature(new Uint8Array(o))}},{key:"highlightFeatureHandle",value:function(i){var a=i.featureId,o=Ln(a);this.highlightPickedFeature(new Uint8Array(o))}}]),n}(To));var Qh,Jh,Kh,pu,ed,wA=Ke.camelCase,TA=Ke.isNil,MA=Ke.upperFirst,kA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,Fn=(Qh=De(),Jh=je(ie.IShaderModuleService),Qh(Kh=(pu=function(){function e(){oe(this,e),$e(this,"shaderModuleService",ed,this),S(this,"rendererService",void 0),S(this,"config",void 0),S(this,"quad",kA),S(this,"enabled",!0),S(this,"renderToScreen",!1),S(this,"model",void 0),S(this,"name",void 0),S(this,"optionsToUpdate",{})}return ae(e,[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(n){this.name=n}},{key:"getType",value:function(){return Jr.PostProcessing}},{key:"init",value:function(n,r){this.config=r,this.rendererService=n.getContainer().get(ie.IRendererService),this.shaderModuleService=n.getContainer().get(ie.IShaderModuleService);var i=this.rendererService,a=i.createAttribute,o=i.createBuffer,u=i.createModel,s=this.setupShaders(),l=s.vs,c=s.fs,f=s.uniforms;this.model=u({vs:l,fs:c,attributes:{a_Position:a({buffer:o({data:[-4,-4,4,-4,0,4],type:L.FLOAT}),size:2})},uniforms:z(z({u_Texture:null},f),this.config&&this.convertOptionsToUniforms(this.config)),depth:{enable:!1},count:3,blend:{enable:this.getName()==="copy"}})}},{key:"render",value:function(n,r){var i=this,a=n.multiPassRenderer.getPostProcessor(),o=this.rendererService,u=o.useFramebuffer,s=o.getViewportSize,l=o.clear,c=s(),f=c.width,h=c.height;u(this.renderToScreen?null:a.getWriteFBO(),function(){l({framebuffer:a.getWriteFBO(),color:[0,0,0,0],depth:1,stencil:0});var d=z({u_BloomFinal:0,u_Texture:a.getReadFBO(),u_ViewportSize:[f,h]},i.convertOptionsToUniforms(i.optionsToUpdate));r&&(d.u_BloomFinal=1,d.u_Texture2=r),i.model.draw({uniforms:d})})}},{key:"isEnabled",value:function(){return this.enabled}},{key:"setEnabled",value:function(n){this.enabled=n}},{key:"setRenderToScreen",value:function(n){this.renderToScreen=n}},{key:"updateOptions",value:function(n){this.optionsToUpdate=z(z({},this.optionsToUpdate),n)}},{key:"setupShaders",value:function(){throw new Error("Method not implemented.")}},{key:"convertOptionsToUniforms",value:function(n){var r={};return Object.keys(n).forEach(function(i){TA(n[i])||(r["u_".concat(MA(wA(i)))]=n[i])}),r}}]),e}(),ed=Ue(pu.prototype,"shaderModuleService",[Jh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pu))||Kh),td,nd;function IA(e){var t=LA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function LA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var RA=`varying vec2 v_UV;

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
}`,PA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,gu=Ke.isNil;td=De(),td(nd=function(e){Ee(n,e);var t=IA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:PA,fs:RA});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return gu(i.bloomRadius)||(a.u_radius=i.bloomRadius),gu(i.bloomIntensity)||(a.u_intensity=i.bloomIntensity),gu(i.bloomBaseRadio)||(a.u_baseRadio=i.bloomBaseRadio),a}}]),n}(Fn));var rd,id;function FA(e){var t=OA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function OA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var DA=`varying vec2 v_UV;

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
}`,NA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,BA=Ke.isNil;rd=De(),rd(id=function(e){Ee(n,e);var t=FA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:NA,fs:DA});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return BA(i.blurRadius)||(a.u_BlurDir=[i.blurRadius,0]),a}}]),n}(Fn));var ad,od;function UA(e){var t=zA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function zA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var $A=`varying vec2 v_UV;

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
}`,VA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,jA=Ke.isNil;ad=De(),ad(od=function(e){Ee(n,e);var t=UA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:VA,fs:$A});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return jA(i.blurRadius)||(a.u_BlurDir=[0,i.blurRadius]),a}}]),n}(Fn));var ud,sd;function HA(e){var t=GA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function GA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var WA=`varying vec2 v_UV;

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
}`,YA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;ud=De(),ud(sd=function(e){Ee(n,e);var t=HA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("colorhalftone-pass",{vs:YA,fs:WA});var i=this.shaderModuleService.getModule("colorhalftone-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Fn));var ld,cd;function XA(e){var t=ZA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function ZA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var qA=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,QA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;ld=De(),ld(cd=function(e){Ee(n,e);var t=XA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("copy-pass",{vs:QA,fs:qA}),this.shaderModuleService.getModule("copy-pass")}}]),n}(Fn));var fd,hd;function JA(e){var t=KA();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function KA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eE=`varying vec2 v_UV;

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
}`,tE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;fd=De(),fd(hd=function(e){Ee(n,e);var t=JA(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("hexagonalpixelate-pass",{vs:tE,fs:eE});var i=this.shaderModuleService.getModule("hexagonalpixelate-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Fn));var dd,vd;function nE(e){var t=rE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function rE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var iE=`varying vec2 v_UV;

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
}`,aE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;dd=De(),dd(vd=function(e){Ee(n,e);var t=nE(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("ink-pass",{vs:aE,fs:iE});var i=this.shaderModuleService.getModule("ink-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:z(z({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Fn));var pd,gd;function oE(e){var t=uE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function uE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sE=`varying vec2 v_UV;

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
}`,lE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;pd=De(),pd(gd=function(e){Ee(n,e);var t=oE(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("noise-pass",{vs:lE,fs:sE}),this.shaderModuleService.getModule("noise-pass")}}]),n}(Fn));var md,yd;function cE(e){var t=fE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function fE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,dE=`varying vec2 v_UV;

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
}`;md=De(),md(yd=function(e){Ee(n,e);var t=cE(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("sepia-pass",{vs:hE,fs:dE}),this.shaderModuleService.getModule("sepia-pass")}}]),n}(Fn));var _d,xd,bd,Sd,wr,Ad,vE=(_d=De(),xd=je(ie.IRendererService),bd=cb(),_d(Sd=(wr=function(){function e(){oe(this,e),$e(this,"rendererService",Ad,this),S(this,"passes",[]),S(this,"readFBO",void 0),S(this,"writeFBO",void 0)}return ae(e,[{key:"getReadFBO",value:function(){return this.readFBO}},{key:"getWriteFBO",value:function(){return this.writeFBO}},{key:"getCurrentFBOTex",value:function(){var n=this.rendererService,r=n.getViewportSize,i=n.createTexture2D,a=r(),o=a.width,u=a.height;return i({x:0,y:0,width:o,height:u,copy:!0})}},{key:"getReadFBOTex",value:function(){var n=this,r=this.rendererService.useFramebuffer;return new Promise(function(i){r(n.readFBO,Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:i(n.getCurrentFBOTex());case 1:case"end":return u.stop()}},a)})))})}},{key:"renderBloomPass",value:function(){var t=Y(C.mark(function r(i,a){var o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.getReadFBOTex();case 2:o=l.sent,u=0;case 4:if(!(u<4)){l.next=11;break}return l.next=7,a.render(i,o);case 7:this.swap(),u++,l.next=4;break;case 11:case"end":return l.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"render",value:function(){var t=Y(C.mark(function r(i){var a,o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:a=0;case 1:if(!(a<this.passes.length)){s.next=15;break}if(o=this.passes[a],o.setRenderToScreen(this.isLastEnabledPass(a)),o.getName()!=="bloom"){s.next=9;break}return s.next=7,this.renderBloomPass(i,o);case 7:s.next=12;break;case 9:return s.next=11,o.render(i);case 11:a!==this.passes.length-1&&this.swap();case 12:a++,s.next=1;break;case 15:case"end":return s.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"resize",value:function(n,r){this.readFBO.resize({width:n,height:r}),this.writeFBO.resize({width:n,height:r})}},{key:"add",value:function(n,r,i){n.init(r,i),this.passes.push(n)}},{key:"insert",value:function(n,r,i,a){n.init(i,a),this.passes.splice(r,0,n)}},{key:"getPostProcessingPassByName",value:function(n){return this.passes.find(function(r){return r.getName()===n})}},{key:"init",value:function(){var n=this.rendererService,r=n.createFramebuffer,i=n.createTexture2D;this.readFBO=r({color:i({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.writeFBO=r({color:i({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})})}},{key:"isLastEnabledPass",value:function(n){for(var r=n+1;r<this.passes.length;r++)if(this.passes[r].isEnabled())return!1;return!0}},{key:"swap",value:function(){var n=this.readFBO;this.readFBO=this.writeFBO,this.writeFBO=n}}]),e}(),Ad=Ue(wr.prototype,"rendererService",[xd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ue(wr.prototype,"init",[bd],Object.getOwnPropertyDescriptor(wr.prototype,"init"),wr.prototype),wr))||Sd),Ed,Cd;function pE(e){var t=gE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function gE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Ed=De(),Ed(Cd=function(e){Ee(n,e);var t=pE(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getType",value:function(){return Jr.Normal}},{key:"getName",value:function(){return"render"}},{key:"init",value:function(i,a){hr(q(n.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(i){var a=this.rendererService,o=a.useFramebuffer,u=a.clear,s=i.multiPassRenderer.getPostProcessor().getReadFBO();o(s,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:s}),i.multiPassRenderer.setRenderFlag(!1),i.models.forEach(function(l){l.draw({uniforms:i.layerModel.getUninforms()})}),i.multiPassRenderer.setRenderFlag(!0)})}}]),n}(To));var wd,Td,Md,mu,kd;function mE(e){var t=yE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function yE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _E=`uniform float u_opacity : 1.0;
uniform float u_MixRatio : 0.5;

uniform sampler2D u_Diffuse1;
uniform sampler2D u_Diffuse2;

varying vec2 v_UV;

void main() {
  vec4 texel1 = texture2D(u_Diffuse1, v_UV);
  vec4 texel2 = texture2D(u_Diffuse2, v_UV);
  gl_FragColor = u_opacity * mix(texel1, texel2, u_MixRatio);
}
`,Id=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,xE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;function Ld(e,t){for(var n=0,r=1/t,i=e;i>0;)n=n+r*(i%t),i=Math.floor(i/t),r=r/t;return n}var bE=1;wd=De(),Td=je(ie.IShaderModuleService),wd(Md=(mu=function(e){Ee(n,e);var t=mE(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),$e(R(r),"shaderModuleService",kd,R(r)),S(R(r),"haltonSequence",[]),S(R(r),"accumulatingId",0),S(R(r),"frame",0),S(R(r),"timer",void 0),S(R(r),"sampleRenderTarget",void 0),S(R(r),"prevRenderTarget",void 0),S(R(r),"outputRenderTarget",void 0),S(R(r),"copyRenderTarget",void 0),S(R(r),"blendModel",void 0),S(R(r),"outputModel",void 0),S(R(r),"copyModel",void 0),r}return ae(n,[{key:"getType",value:function(){return Jr.Normal}},{key:"getName",value:function(){return"taa"}},{key:"init",value:function(i,a){hr(q(n.prototype),"init",this).call(this,i,a);var o=this.rendererService,u=o.createFramebuffer,s=o.createTexture2D;this.sampleRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.prevRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.outputRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})}),this.copyRenderTarget=u({color:s({width:1,height:1,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE})});for(var l=0;l<30;l++)this.haltonSequence.push([Ld(l,2),Ld(l,3)]);this.blendModel=this.createTriangleModel("blend-pass",_E),this.outputModel=this.createTriangleModel("copy-pass",Id,{blend:{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE_MINUS_SRC_ALPHA,srcAlpha:L.ONE,dstAlpha:L.ONE_MINUS_SRC_ALPHA},equation:{rgb:L.FUNC_ADD,alpha:L.FUNC_ADD}}}),this.copyModel=this.createTriangleModel("copy-pass",Id)}},{key:"render",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height;this.sampleRenderTarget.resize({width:f,height:h}),this.prevRenderTarget.resize({width:f,height:h}),this.outputRenderTarget.resize({width:f,height:h}),this.copyRenderTarget.resize({width:f,height:h}),this.resetFrame(),this.stopAccumulating();var d=i.multiPassRenderer.getPostProcessor().getReadFBO();l(d,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:d}),i.multiPassRenderer.setRenderFlag(!1),i.render(),i.multiPassRenderer.setRenderFlag(!0)});var v=function p(g){!a.accumulatingId||g!==a.accumulatingId||a.isFinished()||(a.doRender(i),window.requestAnimationFrame(function(){p(g)}))};this.accumulatingId=bE++,this.timer=window.setTimeout(function(){v(a.accumulatingId)},50)}},{key:"doRender",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height,d=i.getLayerConfig(),v=d.jitterScale,p=v===void 0?1:v,g=this.haltonSequence[this.frame%this.haltonSequence.length];this.cameraService.jitterProjectionMatrix((g[0]*2-1)/f*p,(g[1]*2-1)/h*p),i.multiPassRenderer.setRenderFlag(!1),i.hooks.beforeRender.call(),l(this.sampleRenderTarget,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:a.sampleRenderTarget}),i.render()}),i.hooks.afterRender.call(),i.multiPassRenderer.setRenderFlag(!0);var m=i.getLayerConfig();l(this.outputRenderTarget,function(){a.blendModel.draw({uniforms:{u_opacity:m.opacity||1,u_MixRatio:a.frame===0?1:.9,u_Diffuse1:a.sampleRenderTarget,u_Diffuse2:a.frame===0?i.multiPassRenderer.getPostProcessor().getReadFBO():a.prevRenderTarget}})}),this.frame===0&&u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:this.copyRenderTarget}),this.frame>=1&&(l(this.copyRenderTarget,function(){a.outputModel.draw({uniforms:{u_Texture:a.outputRenderTarget}})}),l(i.multiPassRenderer.getPostProcessor().getReadFBO(),function(){a.copyModel.draw({uniforms:{u_Texture:a.copyRenderTarget}})}),i.multiPassRenderer.getPostProcessor().render(i));var _=this.prevRenderTarget;this.prevRenderTarget=this.outputRenderTarget,this.outputRenderTarget=_,this.frame++,this.cameraService.clearJitterProjectionMatrix()}},{key:"isFinished",value:function(){return this.frame>=this.haltonSequence.length}},{key:"resetFrame",value:function(){this.frame=0}},{key:"stopAccumulating",value:function(){this.accumulatingId=0,window.clearTimeout(this.timer)}},{key:"createTriangleModel",value:function(i,a,o){this.shaderModuleService.registerModule(i,{vs:xE,fs:a});var u=this.shaderModuleService.getModule(i),s=u.vs,l=u.fs,c=u.uniforms,f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createModel;return v(z({vs:s,fs:l,attributes:{a_Position:h({buffer:d({data:[-4,-4,4,-4,0,4],type:L.FLOAT}),size:2})},uniforms:z({},c),depth:{enable:!1},count:3},o))}}]),n}(To),kd=Ue(mu.prototype,"shaderModuleService",[Td],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),mu));var It=new vg;It.bind(ie.IGlobalConfigService).to(Wb).inSingletonScope();V3(De(),Yt.EventEmitter);It.bind(ie.IEventEmitter).to(Yt.EventEmitter);var SE=pb(It,!1),Lg=function(t){var n=SE.lazyInject(t);return function(r,i,a){n.call(this,r,i),a&&(a.initializer=function(){return r[i]})}};function yu(e){var t=new vg;return t.parent=e,t.bind(ie.IStyleAttributeService).to(mS).inSingletonScope(),t.bind(ie.IMultiPassRenderer).to(AA).inSingletonScope(),t.bind(ie.IPostProcessor).to(vE).inSingletonScope(),t}var or={ProjectionMatrix:"u_ProjectionMatrix",ViewMatrix:"u_ViewMatrix",ViewProjectionMatrix:"u_ViewProjectionMatrix",Zoom:"u_Zoom",ZoomScale:"u_ZoomScale",FocalDistance:"u_FocalDistance",CameraPosition:"u_CameraPosition"},gt={MapInitStart:"mapInitStart",LayerInitStart:"layerInitStart",LayerInitEnd:"layerInitEnd",SourceInitStart:"sourceInitStart",SourceInitEnd:"sourceInitEnd",ScaleInitStart:"scaleInitStart",ScaleInitEnd:"scaleInitEnd",MappingStart:"mappingStart",MappingEnd:"mappingEnd",BuildModelStart:"buildModelStart",BuildModelEnd:"buildModelEnd"},Qe=function(e){return e.LINEAR="linear",e.SEQUENTIAL="sequential",e.POWER="power",e.LOG="log",e.IDENTITY="identity",e.TIME="time",e.QUANTILE="quantile",e.QUANTIZE="quantize",e.THRESHOLD="threshold",e.CAT="cat",e.DIVERGING="diverging",e.CUSTOM="threshold",e}({}),Tr=function(e){return e.CONSTANT="constant",e.VARIABLE="variable",e}({}),Se=function(e){return e[e.Attribute=0]="Attribute",e[e.InstancedAttribute=1]="InstancedAttribute",e[e.Uniform=2]="Uniform",e}({}),Tt=function(e){return e.IMAGE="image",e.CUSTOMIMAGE="customImage",e.ARRAYBUFFER="arraybuffer",e.RGB="rgb",e.TERRAINRGB="terrainRGB",e.CUSTOMRGB="customRGB",e.CUSTOMARRAYBUFFER="customArrayBuffer",e.CUSTOMTERRAINRGB="customTerrainRGB",e}({}),AE=function(){var e=Y(C.mark(function t(n,r,i,a){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s,l){r({x:n.x,y:n.y,z:n.z},function(c,f){if(c||f.length===0){l(c);return}f&&Ku([{data:f,bands:[0]}],i,a,function(h,d){h?l(h):d&&s(d)})})}));case 1:case"end":return u.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}(),EE=function(){var e=Y(C.mark(function t(n,r){return C.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(o,u){r({x:n.x,y:n.y,z:n.z},function(s,l){if(s||!l){u(s);return}l instanceof ArrayBuffer?K1(l,function(c,f){c&&u(c),o(f)}):l instanceof HTMLImageElement?o(l):u(s)})}));case 1:case"end":return a.stop()}},t)}));return function(n,r){return e.apply(this,arguments)}}();function CE(e,t){return Array.isArray(e)?typeof e[0]=="string"?e.map(function(n){return Br(n,t)}):e.map(function(n){return{url:Br(n.url,t),bands:n.bands||[0]}}):Br(e,t)}function wE(e){return typeof e=="string"?[{url:e,bands:[0]}]:typeof e[0]=="string"?e.map(function(t){return{url:t,bands:[0]}}):e}function Rd(e,t){e.xhrCancel=function(){t.map(function(n){n.abort()})}}var TE=function(){var e=Y(C.mark(function t(n,r,i,a,o){var u,s,l,c,f,h;return C.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(u=wE(r.url),!(u.length>1)){v.next=15;break}return v.next=4,ME(u,r);case 4:if(s=v.sent,l=s.rasterFiles,c=s.xhrList,f=s.errList,Rd(n,c),!(f.length>0)){v.next=12;break}return i(f,null),v.abrupt("return");case 12:Ku(l,a,o,i),v.next=17;break;case 15:h=Ys(r,function(p,g){if(p)i(p);else if(g){var m=[{data:g,bands:u[0].bands}];Ku(m,a,o,i)}}),Rd(n,[h]);case 17:case"end":return v.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}();function ME(e,t){return ps.apply(this,arguments)}function ps(){return ps=Y(C.mark(function e(t,n){var r,i,a,o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:r=[],i=[],a=[],o=0;case 4:if(!(o<t.length)){p.next=20;break}return u=t[o],s=z(z({},n),{},{url:u.url}),l=u.bands,p.next=10,q1(z(z({},s),{},{type:"arrayBuffer"}));case 10:c=p.sent,f=c.err,h=c.data,d=c.xhr,f&&a.push(f),i.push(d),r.push({data:h,bands:l});case 17:o++,p.next=4;break;case 20:return p.abrupt("return",{rasterFiles:r,xhrList:i,errList:a});case 21:case"end":return p.stop()}},e)})),ps.apply(this,arguments)}var kE=function(){var e=Y(C.mark(function t(n,r,i,a,o){var u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u={url:CE(n,r)},l.abrupt("return",new Promise(function(c,f){TE(i,u,function(h,d){h?f(h):d&&c(d)},a,o)}));case 2:case"end":return l.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}(),Pd=function(){var e=Y(C.mark(function t(n,r,i,a){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return u=Array.isArray(n)?n[0]:n,a.wmtsOptions?(s=(a==null?void 0:a.getURLFromTemplate)||v2,o=s(u,z(z({},r),a.wmtsOptions))):(l=(a==null?void 0:a.getURLFromTemplate)||Br,o=l(u,r)),f.abrupt("return",new Promise(function(h,d){var v,p=Du({url:o,type:(a==null||(v=a.requestParameters)===null||v===void 0?void 0:v.type)||"arrayBuffer"},function(g,m){g?d(g):m&&h(m)},a.transformResponse);i.xhrCancel=function(){return p.cancel()}}));case 3:case"end":return f.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}(),Fd=function(){return{rasterData:new Uint8Array([0]),width:1,height:1}},IE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0};Tt.ARRAYBUFFER,Tt.RGB;function LE(e){return!!(Array.isArray(e)&&e.length===0||!Array.isArray(e)&&typeof e!="string")}function RE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(LE(e))throw new Error("tile server url is error");var n=(t==null?void 0:t.dataType)||Tt.IMAGE;n===Tt.RGB&&(n=Tt.ARRAYBUFFER);var r=function(o,u){switch(n){case Tt.IMAGE:return Pd(e,o,u,t);case Tt.CUSTOMIMAGE:case Tt.CUSTOMTERRAINRGB:return EE(u,t==null?void 0:t.getCustomData);case Tt.ARRAYBUFFER:return kE(e,o,u,(t==null?void 0:t.format)||Fd,t==null?void 0:t.operation);case Tt.CUSTOMARRAYBUFFER:case Tt.CUSTOMRGB:return AE(u,t==null?void 0:t.getCustomData,(t==null?void 0:t.format)||Fd,t==null?void 0:t.operation);default:return Pd(e,o,u,t)}},i=z(z(z({},IE),t),{},{getTileData:r});return{data:e,dataArray:[],tilesetOptions:i,isTile:!0}}var PE=["extent","min","max","width","height","format","operation"];function FE(e,t){var n=t.extent,r=t.min,i=t.max,a=t.width,o=t.height,u=t.format,s=t.operation,l=Kt(t,PE),c;if(u===void 0||G0(e))c=Array.from(e);else{var f=Array.isArray(e)?e:[e];c=ll(f,u,s)}var h={_id:1,dataArray:[z(z({_id:1,data:c,width:a,height:o},l),{},{min:r,max:i,coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return h}var OE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0},DE=function(){var e=Y(C.mark(function t(n){return C.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(a){var o=Pe(n.bounds,4),u=o[0],s=o[1],l=o[2],c=o[3],f={layers:{testTile:{features:[{type:"Feature",properties:{key:n.x+"/"+n.y+"/"+n.z,x:(u+l)/2,y:(s+c)/2},geometry:{type:"LineString",coordinates:[[l,c],[l,s],[u,s],[u,s]]}}]}}};a(f)}));case 1:case"end":return i.stop()}},t)}));return function(n){return e.apply(this,arguments)}}();function NE(e,t){var n=function(a){return DE(a)},r=z(z(z({},OE),t),{},{getTileData:n});return{data:e,dataArray:[],tilesetOptions:r,isTile:!0}}var BE=["extent","width","height"];function UE(e,t){var n=t.extent,r=t.width,i=t.height,a=Kt(t,BE);e.length<3;for(var o=a.bands||[0,1,2],u=Pe(o,3),s=u[0],l=u[1],c=u[2],f=[e[s],e[l],e[c]],h=[],d=(a==null?void 0:a.countCut)||[2,98],v=Pe(d,2),p=v[0],g=v[1],m=(a==null?void 0:a.RMinMax)||zr(f[0],p,g),_=(a==null?void 0:a.GMinMax)||zr(f[1],p,g),y=(a==null?void 0:a.BMinMax)||zr(f[2],p,g),x=0;x<f[0].length;x++)h.push(Math.max(0,f[0][x]-m[0])),h.push(Math.max(0,f[1][x]-_[0])),h.push(Math.max(0,f[2][x]-y[0]));var b={_id:1,dataArray:[z(z({_id:1,data:h,width:r,height:i,rMinMax:m,gMinMax:_,bMinMax:y},a),{},{coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return b}var zE=["extent","width","height"];function $E(e,t){var n=t.extent,r=t.width,i=t.height,a=Kt(t,zE);e.length<2;for(var o=a.bands||[0,1],u=Pe(o,2),s=u[0],l=u[1],c=[e[s],e[l]],f=[],h=0;h<c[0].length;h++)f.push((c[1][h]-c[0][h])/(c[1][h]+c[0][h]));var d={_id:1,dataArray:[z(z({_id:1,data:f,width:r,height:i},a),{},{coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return d}var Rg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Oi,function(){function n(I,w,k,P,B,K){if(!(B-P<=k)){var ce=P+B>>1;r(I,w,ce,P,B,K%2),n(I,w,k,P,ce-1,K+1),n(I,w,k,ce+1,B,K+1)}}function r(I,w,k,P,B,K){for(;B>P;){if(B-P>600){var ce=B-P+1,ve=k-P+1,ye=Math.log(ce),H=.5*Math.exp(2*ye/3),V=.5*Math.sqrt(ye*H*(ce-H)/ce)*(ve-ce/2<0?-1:1),Z=Math.max(P,Math.floor(k-ve*H/ce+V)),X=Math.min(B,Math.floor(k+(ce-ve)*H/ce+V));r(I,w,k,Z,X,K)}var he=w[2*k+K],le=P,de=B;for(i(I,w,P,k),w[2*B+K]>he&&i(I,w,P,B);le<de;){for(i(I,w,le,de),le++,de--;w[2*le+K]<he;)le++;for(;w[2*de+K]>he;)de--}w[2*P+K]===he?i(I,w,P,de):(de++,i(I,w,de,B)),de<=k&&(P=de+1),k<=de&&(B=de-1)}}function i(I,w,k,P){a(I,k,P),a(w,2*k,2*P),a(w,2*k+1,2*P+1)}function a(I,w,k){var P=I[w];I[w]=I[k],I[k]=P}function o(I,w,k,P,B,K,ce){for(var ve=[0,I.length-1,0],ye=[],H,V;ve.length;){var Z=ve.pop(),X=ve.pop(),he=ve.pop();if(X-he<=ce){for(var le=he;le<=X;le++)H=w[2*le],V=w[2*le+1],H>=k&&H<=B&&V>=P&&V<=K&&ye.push(I[le]);continue}var de=Math.floor((he+X)/2);H=w[2*de],V=w[2*de+1],H>=k&&H<=B&&V>=P&&V<=K&&ye.push(I[de]);var Ve=(Z+1)%2;(Z===0?k<=H:P<=V)&&(ve.push(he),ve.push(de-1),ve.push(Ve)),(Z===0?B>=H:K>=V)&&(ve.push(de+1),ve.push(X),ve.push(Ve))}return ye}function u(I,w,k,P,B,K){for(var ce=[0,I.length-1,0],ve=[],ye=B*B;ce.length;){var H=ce.pop(),V=ce.pop(),Z=ce.pop();if(V-Z<=K){for(var X=Z;X<=V;X++)s(w[2*X],w[2*X+1],k,P)<=ye&&ve.push(I[X]);continue}var he=Math.floor((Z+V)/2),le=w[2*he],de=w[2*he+1];s(le,de,k,P)<=ye&&ve.push(I[he]);var Ve=(H+1)%2;(H===0?k-B<=le:P-B<=de)&&(ce.push(Z),ce.push(he-1),ce.push(Ve)),(H===0?k+B>=le:P+B>=de)&&(ce.push(he+1),ce.push(V),ce.push(Ve))}return ve}function s(I,w,k,P){var B=I-k,K=w-P;return B*B+K*K}var l=function(I){return I[0]},c=function(I){return I[1]},f=function(w,k,P,B,K){k===void 0&&(k=l),P===void 0&&(P=c),B===void 0&&(B=64),K===void 0&&(K=Float64Array),this.nodeSize=B,this.points=w;for(var ce=w.length<65536?Uint16Array:Uint32Array,ve=this.ids=new ce(w.length),ye=this.coords=new K(w.length*2),H=0;H<w.length;H++)ve[H]=H,ye[2*H]=k(w[H]),ye[2*H+1]=P(w[H]);n(ve,ye,B,0,ve.length-1,0)};f.prototype.range=function(w,k,P,B){return o(this.ids,this.coords,w,k,P,B,this.nodeSize)},f.prototype.within=function(w,k,P){return u(this.ids,this.coords,w,k,P,this.nodeSize)};var h={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(I){return I}},d=Math.fround||function(I){return function(w){return I[0]=+w,I[0]}}(new Float32Array(1)),v=function(w){this.options=T(Object.create(h),w),this.trees=new Array(this.options.maxZoom+1)};v.prototype.load=function(w){var k=this.options,P=k.log,B=k.minZoom,K=k.maxZoom,ce=k.nodeSize,ve="prepare "+w.length+" points";this.points=w;for(var ye=[],H=0;H<w.length;H++)w[H].geometry&&ye.push(g(w[H],H));this.trees[K+1]=new f(ye,D,U,ce,Float32Array);for(var V=K;V>=B;V--){var Z=+Date.now();ye=this._cluster(ye,V),this.trees[V]=new f(ye,D,U,ce,Float32Array)}return this},v.prototype.getClusters=function(w,k){var P=((w[0]+180)%360+360)%360-180,B=Math.max(-90,Math.min(90,w[1])),K=w[2]===180?180:((w[2]+180)%360+360)%360-180,ce=Math.max(-90,Math.min(90,w[3]));if(w[2]-w[0]>=360)P=-180,K=180;else if(P>K){var ve=this.getClusters([P,B,180,ce],k),ye=this.getClusters([-180,B,K,ce],k);return ve.concat(ye)}for(var H=this.trees[this._limitZoom(k)],V=H.range(y(P),x(ce),y(K),x(B)),Z=[],X=0,he=V;X<he.length;X+=1){var le=he[X],de=H.points[le];Z.push(de.numPoints?m(de):this.points[de.index])}return Z},v.prototype.getChildren=function(w){var k=this._getOriginId(w),P=this._getOriginZoom(w),B="No cluster with the specified id.",K=this.trees[P];if(!K)throw new Error(B);var ce=K.points[k];if(!ce)throw new Error(B);for(var ve=this.options.radius/(this.options.extent*Math.pow(2,P-1)),ye=K.within(ce.x,ce.y,ve),H=[],V=0,Z=ye;V<Z.length;V+=1){var X=Z[V],he=K.points[X];he.parentId===w&&H.push(he.numPoints?m(he):this.points[he.index])}if(H.length===0)throw new Error(B);return H},v.prototype.getLeaves=function(w,k,P){k=k||10,P=P||0;var B=[];return this._appendLeaves(B,w,k,P,0),B},v.prototype.getTile=function(w,k,P){var B=this.trees[this._limitZoom(w)],K=Math.pow(2,w),ce=this.options,ve=ce.extent,ye=ce.radius,H=ye/ve,V=(P-H)/K,Z=(P+1+H)/K,X={features:[]};return this._addTileFeatures(B.range((k-H)/K,V,(k+1+H)/K,Z),B.points,k,P,K,X),k===0&&this._addTileFeatures(B.range(1-H/K,V,1,Z),B.points,K,P,K,X),k===K-1&&this._addTileFeatures(B.range(0,V,H/K,Z),B.points,-1,P,K,X),X.features.length?X:null},v.prototype.getClusterExpansionZoom=function(w){for(var k=this._getOriginZoom(w)-1;k<=this.options.maxZoom;){var P=this.getChildren(w);if(k++,P.length!==1)break;w=P[0].properties.cluster_id}return k},v.prototype._appendLeaves=function(w,k,P,B,K){for(var ce=this.getChildren(k),ve=0,ye=ce;ve<ye.length;ve+=1){var H=ye[ve],V=H.properties;if(V&&V.cluster?K+V.point_count<=B?K+=V.point_count:K=this._appendLeaves(w,V.cluster_id,P,B,K):K<B?K++:w.push(H),w.length===P)break}return K},v.prototype._addTileFeatures=function(w,k,P,B,K,ce){for(var ve=0,ye=w;ve<ye.length;ve+=1){var H=ye[ve],V=k[H],Z=V.numPoints,X=void 0,he=void 0,le=void 0;if(Z)X=_(V),he=V.x,le=V.y;else{var de=this.points[V.index];X=de.properties,he=y(de.geometry.coordinates[0]),le=x(de.geometry.coordinates[1])}var Ve={type:1,geometry:[[Math.round(this.options.extent*(he*K-P)),Math.round(this.options.extent*(le*K-B))]],tags:X},Oe=void 0;Z?Oe=V.id:this.options.generateId?Oe=V.index:this.points[V.index].id&&(Oe=this.points[V.index].id),Oe!==void 0&&(Ve.id=Oe),ce.features.push(Ve)}},v.prototype._limitZoom=function(w){return Math.max(this.options.minZoom,Math.min(Math.floor(+w),this.options.maxZoom+1))},v.prototype._cluster=function(w,k){for(var P=[],B=this.options,K=B.radius,ce=B.extent,ve=B.reduce,ye=B.minPoints,H=K/(ce*Math.pow(2,k)),V=0;V<w.length;V++){var Z=w[V];if(!(Z.zoom<=k)){Z.zoom=k;for(var X=this.trees[k+1],he=X.within(Z.x,Z.y,H),le=Z.numPoints||1,de=le,Ve=0,Oe=he;Ve<Oe.length;Ve+=1){var rt=Oe[Ve],$=X.points[rt];$.zoom>k&&(de+=$.numPoints||1)}if(de>le&&de>=ye){for(var ue=Z.x*le,xe=Z.y*le,te=ve&&le>1?this._map(Z,!0):null,Ge=(V<<5)+(k+1)+this.points.length,Fe=0,Ye=he;Fe<Ye.length;Fe+=1){var Ne=Ye[Fe],Le=X.points[Ne];if(!(Le.zoom<=k)){Le.zoom=k;var ot=Le.numPoints||1;ue+=Le.x*ot,xe+=Le.y*ot,Le.parentId=Ge,ve&&(te||(te=this._map(Z,!0)),ve(te,this._map(Le)))}}Z.parentId=Ge,P.push(p(ue/de,xe/de,Ge,de,te))}else if(P.push(Z),de>1)for(var dt=0,ft=he;dt<ft.length;dt+=1){var Je=ft[dt],Lt=X.points[Je];Lt.zoom<=k||(Lt.zoom=k,P.push(Lt))}}}return P},v.prototype._getOriginId=function(w){return w-this.points.length>>5},v.prototype._getOriginZoom=function(w){return(w-this.points.length)%32},v.prototype._map=function(w,k){if(w.numPoints)return k?T({},w.properties):w.properties;var P=this.points[w.index].properties,B=this.options.map(P);return k&&B===P?T({},B):B};function p(I,w,k,P,B){return{x:d(I),y:d(w),zoom:1/0,id:k,parentId:-1,numPoints:P,properties:B}}function g(I,w){var k=I.geometry.coordinates,P=k[0],B=k[1];return{x:d(y(P)),y:d(x(B)),zoom:1/0,index:w,parentId:-1}}function m(I){return{type:"Feature",id:I.id,properties:_(I),geometry:{type:"Point",coordinates:[b(I.x),M(I.y)]}}}function _(I){var w=I.numPoints,k=w>=1e4?Math.round(w/1e3)+"k":w>=1e3?Math.round(w/100)/10+"k":w;return T(T({},I.properties),{cluster:!0,cluster_id:I.id,point_count:w,point_count_abbreviated:k})}function y(I){return I/360+.5}function x(I){var w=Math.sin(I*Math.PI/180),k=.5-.25*Math.log((1+w)/(1-w))/Math.PI;return k<0?0:k>1?1:k}function b(I){return(I-.5)*360}function M(I){var w=(180-I*360)*Math.PI/180;return 360*Math.atan(Math.exp(w))/Math.PI-90}function T(I,w){for(var k in w)I[k]=w[k];return I}function D(I){return I.x}function U(I){return I.y}return v})})(Rg);var VE=Rg.exports;const jE=Rn(VE);function Pg(e,t){var n=t.radius,r=n===void 0?40:n,i=t.maxZoom,a=i===void 0?18:i,o=t.minZoom,u=o===void 0?0:o,s=t.zoom,l=s===void 0?2:s;if(e.pointIndex){var c=e.pointIndex.getClusters(e.extent,Math.floor(l));return e.dataArray=HE(c),e}var f=new jE({radius:r,minZoom:u,maxZoom:a}),h={type:"FeatureCollection",features:[]};return h.features=e.dataArray.map(function(d){return{type:"Feature",geometry:{type:"Point",coordinates:d.coordinates},properties:z({},d)}}),f.load(h.features),f}function HE(e){return e.map(function(t,n){return z({coordinates:t.geometry.coordinates,_id:n+1},t.properties)})}function GE(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}function WE(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]);return t}function Fg(e){if(e.length===0)return 0;for(var t=e[0],n=0,r,i=1;i<e.length;i++)r=t+e[i]*1,Math.abs(t)>=Math.abs(e[i])?n+=t-r+e[i]:n+=e[i]-r+t,t=r;return t+n*1}function YE(e){if(e.length===0)throw new Error("mean requires at least one data point");return Fg(e)/e.length}var XE={min:WE,max:GE,mean:YE,sum:Fg};function ZE(e){var t=qE();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function qE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var QE=Ke.cloneDeep,Od=Ke.isFunction,JE=Ke.isString,KE=Ke.mergeWith;function eC(e,t){if(Array.isArray(t))return t}var Og=function(e){Ee(n,e);var t=ZE(n);function n(r,i){var a;return oe(this,n),a=t.call(this),S(R(a),"type","source"),S(R(a),"isTile",!1),S(R(a),"inited",!1),S(R(a),"hooks",{init:new ln}),S(R(a),"parser",{type:"geojson"}),S(R(a),"transforms",[]),S(R(a),"cluster",!1),S(R(a),"clusterOptions",{enable:!1,radius:40,maxZoom:20,zoom:-99,method:"count"}),S(R(a),"invalidExtent",!1),S(R(a),"dataArrayChanged",!1),S(R(a),"cfg",{autoRender:!0}),a.originData=r,a.initCfg(i),a.init().then(function(){a.inited=!0,a.emit("update",{type:"inited"})}),a}return ae(n,[{key:"getSourceCfg",value:function(){return this.cfg}},{key:"getClusters",value:function(i){return this.clusterIndex.getClusters(this.caculClusterExtent(2),i)}},{key:"getClustersLeaves",value:function(i){return this.clusterIndex.getLeaves(i,1/0)}},{key:"getParserType",value:function(){return this.parser.type}},{key:"updateClusterData",value:function(i){var a=this,o=this.clusterOptions,u=o.method,s=u===void 0?"sum":u,l=o.field,c=this.clusterIndex.getClusters(this.caculClusterExtent(2),Math.floor(i));this.clusterOptions.zoom=i,c.forEach(function(f){f.id||(f.properties.point_count=1)}),(l||Od(s))&&(c=c.map(function(f){var h=f.id;if(h){var d=a.clusterIndex.getLeaves(h,1/0),v=d.map(function(m){return m.properties}),p;if(JE(s)&&l){var g=$2(v,l);p=XE[s](g)}Od(s)&&(p=s(v)),f.properties.stat=p}else f.properties.point_count=1;return f})),this.data=Gl("geojson")({type:"FeatureCollection",features:c}),this.executeTrans()}},{key:"getFeatureById",value:function(i){var a=this.parser,o=a.type,u=o===void 0?"geojson":o,s=a.geometry;if(u==="geojson"&&!this.cluster){var l=i<this.originData.features.length?this.originData.features[i]:"null",c=QE(l);if(c!=null&&c.properties&&(this.transforms.length!==0||this.dataArrayChanged)){var f=this.data.dataArray.find(function(h){return h._id===i});c.properties=f}return c}else return u==="json"&&s?this.data.dataArray.find(function(h){return h._id===i}):i<this.data.dataArray.length?this.data.dataArray[i]:"null"}},{key:"updateFeaturePropertiesById",value:function(i,a){this.data.dataArray=this.data.dataArray.map(function(o){return o._id===i?z(z({},o),a):o}),this.dataArrayChanged=!0,this.emit("update",{type:"update"})}},{key:"getFeatureId",value:function(i,a){var o=this.data.dataArray.find(function(u){return u[i]===a});return o==null?void 0:o._id}},{key:"setData",value:function(i,a){var o=this;this.originData=i,this.dataArrayChanged=!1,this.initCfg(a),this.init().then(function(){o.emit("update",{type:"update"})})}},{key:"reloadAllTile",value:function(){var i;(i=this.tileset)===null||i===void 0||i.reloadAll()}},{key:"reloadTilebyId",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileById(i,a,o)}},{key:"reloadTileByLnglat",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileByLnglat(i,a,o)}},{key:"getTileExtent",value:function(i,a){var o;return(o=this.tileset)===null||o===void 0?void 0:o.getTileExtent(i,a)}},{key:"getTileByZXY",value:function(i,a,o){var u;return(u=this.tileset)===null||u===void 0?void 0:u.getTileByZXY(i,a,o)}},{key:"reloadTileByExtent",value:function(i,a){var o;(o=this.tileset)===null||o===void 0||o.reloadTileByExtent(i,a)}},{key:"destroy",value:function(){var i;this.removeAllListeners(),this.originData=null,this.clusterIndex=null,this.data=null,(i=this.tileset)===null||i===void 0||i.destroy()}},{key:"processData",value:function(){var r=Y(C.mark(function a(){var o=this;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(l,c){try{o.excuteParser(),o.initCluster(),o.executeTrans(),l({})}catch(f){c(f)}}));case 1:case"end":return s.stop()}},a)}));function i(){return r.apply(this,arguments)}return i}()},{key:"initCfg",value:function(i){this.cfg=KE(this.cfg,i,eC);var a=this.cfg;a&&(a.parser&&(this.parser=a.parser),a.transforms&&(this.transforms=a.transforms),this.cluster=a.cluster||!1,a.clusterOptions&&(this.cluster=!0,this.clusterOptions=z(z({},this.clusterOptions),a.clusterOptions)))}},{key:"init",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.inited=!1,u.next=3,this.processData();case 3:this.inited=!0;case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"excuteParser",value:function(){var i=this.parser,a=i.type||"geojson",o=Gl(a);this.data=o(this.originData,i),this.tileset=this.initTileset(),!i.cancelExtent&&(this.extent=R_(this.data.dataArray),this.setCenter(this.extent),this.invalidExtent=this.extent[0]===this.extent[2]||this.extent[1]===this.extent[3])}},{key:"setCenter",value:function(i){this.center=[(i[0]+i[2])/2,(i[1]+i[3])/2],(isNaN(this.center[0])||isNaN(this.center[1]))&&(this.center=[108.92361111111111,34.54083333333333])}},{key:"initTileset",value:function(){var i=this.data.tilesetOptions;if(i){if(this.isTile=!0,this.tileset)return this.tileset.updateOptions(i),this.tileset;var a=new d2(z({},i));return a}}},{key:"executeTrans",value:function(){var i=this,a=this.transforms;a.forEach(function(o){var u=o.type,s=O1(u)(i.data,o);Object.assign(i.data,s)})}},{key:"initCluster",value:function(){if(this.cluster){var i=this.clusterOptions||{};this.clusterIndex=Pg(this.data,i)}}},{key:"caculClusterExtent",value:function(i){var a=[[-1/0,-1/0],[1/0,1/0]];return this.invalidExtent||(a=Ks(Xa(this.extent),i)),a[0].concat(a[1])}}]),n}(Yt.EventEmitter);function tC(e,t){var n=t.callback;return n&&(e.dataArray=e.dataArray.filter(n)),e}function Dd(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=nC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function nC(e,t){if(e){if(typeof e=="string")return Nd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nd(e,t)}}function Nd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ml=6378e3;function rC(e,t){var n=e.dataArray,r=t.size,i=r===void 0?10:r,a=i/(2*Math.PI*ml)*(256<<20)/2,o=iC(n,i),u=o.gridHash,s=o.gridOffset,l=sC(u,s,t);return{yOffset:a,xOffset:a,radius:a,type:"grid",dataArray:l}}function iC(e,t){var n=1/0,r=-1/0,i,a=Dd(e),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;i=u.coordinates[1],Number.isFinite(i)&&(n=i<n?i:n,r=i>r?i:r)}}catch(y){a.e(y)}finally{a.f()}var s=(n+r)/2,l=aC(t,s);if(l.xOffset<=0||l.yOffset<=0)return{gridHash:{},gridOffset:l};var c={},f=Dd(e),h;try{for(f.s();!(h=f.n()).done;){var d=h.value,v=d.coordinates[1],p=d.coordinates[0];if(Number.isFinite(v)&&Number.isFinite(p)){var g=Math.floor((v+90)/l.yOffset),m=Math.floor((p+180)/l.xOffset),_="".concat(g,"-").concat(m);c[_]=c[_]||{count:0,points:[]},c[_].count+=1,c[_].points.push(d)}}}catch(y){f.e(y)}finally{f.f()}return{gridHash:c,gridOffset:l}}function aC(e,t){var n=oC(e),r=uC(t,e);return{yOffset:n,xOffset:r}}function oC(e){return e/ml*(180/Math.PI)}function uC(e,t){return t/ml*(180/Math.PI)/Math.cos(e*Math.PI/180)}function sC(e,t,n){return Object.keys(e).reduce(function(r,i,a){var o=i.split("-"),u=parseInt(o[0],10),s=parseInt(o[1],10),l={};if(n.field&&n.method){var c=L0(e[i].points,n.field);l[n.method]=I0[n.method](c)}return Object.assign(l,{_id:a,coordinates:ht([-180+t.xOffset*(s+.5),-90+t.yOffset*(u+.5)]),rawData:e[i].points,count:e[i].count}),r.push(l),r},[])}var Pr=Math.PI/3,lC=[0,Pr,2*Pr,3*Pr,4*Pr,5*Pr];function cC(e){return e[0]}function fC(e){return e[1]}function hC(){var e=0,t=0,n=1,r=1,i=cC,a=fC,o,u,s;function l(f){var h={},d=[],v,p=f.length;for(v=0;v<p;++v)if(!(isNaN(m=+i.call(null,g=f[v],v,f))||isNaN(_=+a.call(null,g,v,f)))){var g,m,_,y=Math.round(_=_/s),x=Math.round(m=m/u-(y&1)/2),b=_-y;if(Math.abs(b)*3>1){var M=m-x,T=x+(m<x?-1:1)/2,D=y+(_<y?-1:1),U=m-T,I=_-D;M*M+b*b>U*U+I*I&&(x=T+(y&1?1:-1)/2,y=D)}var w=x+"-"+y,k=h[w];k?k.push(g):(d.push(k=h[w]=[g]),k.x=(x+(y&1)/2)*u,k.y=y*s)}return d}function c(f){var h=0,d=0;return lC.map(function(v){var p=Math.sin(v)*f,g=-Math.cos(v)*f,m=p-h,_=g-d;return h=p,d=g,[m,_]})}return l.hexagon=function(f){return"m"+c(f==null?o:+f).join("l")+"z"},l.centers=function(){for(var f=[],h=Math.round(t/s),d=Math.round(e/u),v=h*s;v<r+o;v+=s,++h)for(var p=d*u+(h&1)*u/2;p<n+u/2;p+=u)f.push([p,v]);return f},l.mesh=function(){var f=c(o).slice(0,4).join("l");return l.centers().map(function(h){return"M"+h+"m"+f}).join("")},l.x=function(f){return arguments.length?(i=f,l):i},l.y=function(f){return arguments.length?(a=f,l):a},l.radius=function(f){return arguments.length?(o=+f,u=o*2*Math.sin(Pr),s=o*1.5,l):o},l.size=function(f){return arguments.length?(e=t=0,n=+f[0],r=+f[1],l):[n-e,r-t]},l.extent=function(f){return arguments.length?(e=+f[0][0],t=+f[0][1],n=+f[1][0],r=+f[1][1],l):[[e,t],[n,r]]},l.radius(1)}var dC=6378e3;function vC(e,t){var n=e.dataArray,r=t.size,i=r===void 0?10:r,a=t.method,o=a===void 0?"sum":a,u=i/(2*Math.PI*dC)*(256<<20)/2,s=n.map(function(h){var d=ht(h.coordinates),v=Pe(d,2),p=v[0],g=v[1];return z(z({},h),{},{coordinates:[p,g]})}),l=hC().radius(u).x(function(h){return h.coordinates[0]}).y(function(h){return h.coordinates[1]}),c=l(s),f={dataArray:c.map(function(h,d){var v;if(t.field&&o){var p=L0(h,t.field);h[o]=I0[o](p)}return v={},S(v,t.method,h[o]),S(v,"count",h.length),S(v,"rawData",h),S(v,"coordinates",[h.x,h.y]),S(v,"_id",d),v}),radius:u,xOffset:u,yOffset:u,type:"hexagon"};return f}function pC(e,t){var n=t.sourceField,r=t.targetField,i=t.data,a={};return i.forEach(function(o){a[o[n]]=o}),e.dataArray=e.dataArray.map(function(o){var u=o[r];return z(z({},o),a[u])}),e}function gC(e,t){var n=t.callback;return n&&(e.dataArray=e.dataArray.map(n)),e}Wt("rasterTile",RE);Wt("mvt",Kx);Wt("geojsonvt",fx);Wt("testTile",NE);Wt("geojson",G2);Wt("jsonTile",vx);Wt("image",q0);Wt("csv",V2);Wt("json",W0);Wt("raster",o3);Wt("rasterRgb",FE);Wt("rgb",UE);Wt("ndi",$E);Qr("cluster",Pg);Qr("filter",tC);Qr("join",pC);Qr("map",gC);Qr("grid",rC);Qr("hexagon",vC);window._iconfont_svg_string_3580659='<svg><symbol id="l7-icon-area1" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.064889 219.136l38.798223 466.261333a113.777778 113.777778 0 1 1-133.518223 145.237334H279.210667a113.777778 113.777778 0 1 1-60.302223-137.272889L697.856 227.555556A113.777778 113.777778 0 0 1 796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m577.592889-534.072889L269.198222 796.444444c4.152889 7.168 7.509333 14.791111 10.012445 22.812445h465.578666a114.119111 114.119111 0 0 1 65.479111-71.224889l-38.798222-466.261333a112.924444 112.924444 0 0 1-23.210666-7.964445zM796.444444 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-area" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.008 219.136l38.855112 466.261333a113.777778 113.777778 0 0 1-16.497778 224.540445L853.333333 967.111111a113.777778 113.777778 0 0 1-108.544-79.644444H279.210667a113.834667 113.834667 0 0 1-100.067556 79.36L170.666667 967.111111a113.777778 113.777778 0 0 1-17.066667-226.304l30.492444-351.175111a113.777778 113.777778 0 0 1 34.986667-218.680889L227.555556 170.666667a113.777778 113.777778 0 0 1 99.896888 59.221333l355.84-71.395556a113.777778 113.777778 0 0 1 104.675556-101.262222L796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m526.051555-582.314666L340.650667 296.903111a113.891556 113.891556 0 0 1-88.462223 98.645333l-30.947555 355.84c27.477333 13.653333 48.64 38.115556 58.026667 67.754667h465.521777a114.119111 114.119111 0 0 1 65.536-71.168l-38.855111-466.261333a113.948444 113.948444 0 0 1-74.752-56.206222zM227.555556 238.933333a45.511111 45.511111 0 1 0 0 91.022223 45.511111 45.511111 0 0 0 0-91.022223z m568.888888-113.777777a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-delete" viewBox="0 0 1024 1024"><path d="M705.422222 85.333333a34.133333 34.133333 0 0 1 34.133334 34.133334V227.555556h136.533333a34.133333 34.133333 0 0 1 0 68.266666h-25.543111l-24.348445 610.076445a34.133333 34.133333 0 0 1-34.133333 32.768H231.936a34.133333 34.133333 0 0 1-34.076444-32.768L173.340444 295.822222H147.911111a34.133333 34.133333 0 1 1 0-68.266666H284.444444V119.466667a34.133333 34.133333 0 0 1 34.133334-34.133334h386.844444zM241.720889 295.822222l22.983111 574.577778h494.535111l23.04-574.577778H241.720889zM671.288889 153.6H352.711111V227.555556h318.577778V153.6z"  ></path></symbol><symbol id="l7-icon-color" viewBox="0 0 1024 1024"><path d="M512 56.888889c9.841778 0 19.626667 0.341333 29.354667 0.910222 69.176889 4.437333 119.068444 62.577778 124.302222 131.072l0.455111 9.386667c0.739556 44.600889 15.303111 84.935111 44.999111 114.631111 27.022222 27.022222 62.805333 41.528889 102.570667 44.430222l12.060444 0.568889c72.476444 1.194667 135.793778 52.451556 140.458667 124.757333 1.137778 18.261333 1.251556 36.807111 0.170667 55.637334-13.198222 233.585778-211.399111 424.220444-445.326223 428.714666L512 967.111111a455.111111 455.111111 0 0 1-455.054222-464.156444c4.551111-233.927111 195.185778-432.128 428.771555-445.326223C494.535111 57.116444 503.296 56.888889 512 56.888889z m0 68.266667a385.706667 385.706667 0 0 0-22.414222 0.625777C291.726222 136.988444 129.080889 305.948444 125.155556 504.263111c-4.152889 212.366222 163.100444 387.185778 372.508444 394.353778l13.425778 0.227555 8.533333-0.113777c198.371556-3.811556 367.331556-166.456889 378.538667-364.373334a396.174222 396.174222 0 0 0-0.170667-47.331555c-1.991111-31.232-29.127111-56.604444-67.128889-60.472889l-8.248889-0.455111-14.051555-0.682667c-56.547556-4.209778-107.406222-25.884444-145.806222-64.284444-38.855111-38.798222-60.416-90.225778-64.284445-145.749334l-0.910222-21.333333c-2.901333-38.001778-28.785778-66.048-60.302222-68.096A433.891556 433.891556 0 0 0 512 125.155556zM438.044444 682.666667a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m-170.666666-227.555556a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m142.222222-227.555555a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z"  ></path></symbol><symbol id="l7-icon-base-map" viewBox="0 0 1024 1024"><path d="M923.761778 115.029333A34.133333 34.133333 0 0 1 967.111111 147.911111v624.128a34.133333 34.133333 0 0 1-22.186667 32.028445l-278.755555 103.992888a34.133333 34.133333 0 0 1-23.665778 0.056889L381.724444 812.714667a34.133333 34.133333 0 0 0-23.665777 0.113777L102.968889 908.060444a34.133333 34.133333 0 0 1-45.738667-26.965333L56.888889 876.088889V251.960889a34.133333 34.133333 0 0 1 22.186667-32.028445l278.755555-103.992888a34.133333 34.133333 0 0 1 20.992-0.967112l266.183111 72.988445a34.133333 34.133333 0 0 0 18.204445 0zM403.911111 192.625778v555.576889l216.177778 79.075555V251.960889l-216.177778-59.335111z m-68.266667 4.380444L125.155556 275.569778v551.310222l210.432-78.506667V197.006222zM898.844444 192.853333l-210.545777 58.936889v575.089778l210.545777-78.563556V192.853333z"  ></path></symbol><symbol id="l7-icon-dot" viewBox="0 0 1024 1024"><path d="M341.333333 739.555556a113.777778 113.777778 0 0 1 8.533334 227.271111L341.333333 967.111111a113.777778 113.777778 0 0 1-8.533333-227.271111L341.333333 739.555556z m0 68.266666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM910.222222 341.333333a113.777778 113.777778 0 0 1 8.533334 227.271111L910.222222 568.888889a113.777778 113.777778 0 0 1-8.533333-227.271111L910.222222 341.333333z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM227.555556 56.888889a113.777778 113.777778 0 0 1 8.533333 227.271111L227.555556 284.444444a113.777778 113.777778 0 0 1-8.533334-227.271111L227.555556 56.888889z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-display" viewBox="0 0 1024 1024"><path d="M512 170.666667c284.444444 0 455.111111 227.555556 455.111111 341.333333s-170.666667 341.333333-455.111111 341.333333-455.111111-227.555556-455.111111-341.333333 170.666667-341.333333 455.111111-341.333333z m0 68.266666C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 110.762667 178.574222 273.066667 386.844444 273.066667s386.844444-162.304 386.844444-273.066667c0-110.762667-178.574222-273.066667-386.844444-273.066667zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-enlarge" viewBox="0 0 1024 1024"><path d="M546.133333 147.911111l-0.056889 329.955556H876.088889a34.133333 34.133333 0 0 1 0 68.266666H546.076444v329.955556a34.133333 34.133333 0 0 1-68.266666 0V546.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h329.898667V147.911111a34.133333 34.133333 0 0 1 68.266666 0z"  ></path></symbol><symbol id="l7-icon-export-picture" viewBox="0 0 1024 1024"><path d="M883.873684 161.684211a32.336842 32.336842 0 0 1 32.336842 32.336842v582.063158a32.336842 32.336842 0 0 1-32.336842 32.336842H86.231579a32.336842 32.336842 0 0 1-32.336842-32.336842V194.021053a32.336842 32.336842 0 0 1 32.336842-32.336842h797.642105z m-32.336842 64.673684H118.568421v517.389473h170.792421a32.175158 32.175158 0 0 1 0.431158-0.646736l3.772632-4.473264 330.320842-330.374736a32.336842 32.336842 0 0 1 38.588631-5.389474l4.473263 3.018105 184.589474 147.725474V226.357895z m-202.428631 248.131368L379.850105 743.747368H851.536842v-107.304421l-202.428631-161.953684zM323.368421 323.368421a107.789474 107.789474 0 1 1 0 215.578947 107.789474 107.789474 0 0 1 0-215.578947z m0 64.673684a43.115789 43.115789 0 1 0 0 86.231579 43.115789 43.115789 0 0 0 0-86.231579z"  ></path></symbol><symbol id="l7-icon-exit-fullscreen" viewBox="0 0 1024 1024"><path d="M841.955556 591.644444a34.133333 34.133333 0 0 1 5.518222 67.811556l-5.518222 0.455111h-133.745778l192 192.056889a34.133333 34.133333 0 0 1-38.343111 55.182222l-5.176889-2.958222-4.721778-3.982222L659.911111 708.266667V841.955556a34.133333 34.133333 0 0 1-28.615111 33.678222L625.777778 876.088889a34.133333 34.133333 0 0 1-33.678222-28.615111L591.644444 841.955556V625.777778a34.133333 34.133333 0 0 1 28.615112-33.678222L625.777778 591.644444h216.177778z m-443.733334 0a34.133333 34.133333 0 0 1 33.678222 28.615112L432.355556 625.777778v216.177778a34.133333 34.133333 0 0 1-67.811556 5.518222L364.088889 841.955556v-133.745778l-192.056889 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L315.847111 659.911111H182.044444a34.133333 34.133333 0 0 1-33.678222-28.615111L147.911111 625.777778a34.133333 34.133333 0 0 1 28.615111-33.678222L182.044444 591.644444H398.222222zM167.310222 119.808l4.721778 3.982222L364.088889 315.847111V182.044444a34.133333 34.133333 0 0 1 28.615111-33.678222L398.222222 147.911111a34.133333 34.133333 0 0 1 33.678222 28.615111L432.355556 182.044444V398.222222a34.133333 34.133333 0 0 1-28.615112 33.678222L398.222222 432.355556H182.044444a34.133333 34.133333 0 0 1-5.518222-67.811556L182.044444 364.088889h133.802667L123.790222 172.032a34.133333 34.133333 0 0 1 43.52-52.224z m732.899556 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L708.266667 364.088889H841.955556a34.133333 34.133333 0 0 1 33.678222 28.615111L876.088889 398.222222a34.133333 34.133333 0 0 1-28.615111 33.678222L841.955556 432.355556H625.777778a34.133333 34.133333 0 0 1-33.678222-28.615112L591.644444 398.222222V182.044444a34.133333 34.133333 0 0 1 67.811556-5.518222l0.455111 5.518222v133.802667l192.056889-192.056889a34.133333 34.133333 0 0 1 48.241778 0z"  ></path></symbol><symbol id="l7-icon-line" viewBox="0 0 1024 1024"><path d="M853.333333 56.888889a113.777778 113.777778 0 0 1 8.533334 227.271111L853.333333 284.444444c-19.000889 0-36.864-4.664889-52.622222-12.856888l-529.123555 529.066666a113.777778 113.777778 0 0 1-92.387556 166.115556L170.666667 967.111111a113.777778 113.777778 0 0 1-8.533334-227.271111L170.666667 739.555556c19.000889 0 36.864 4.664889 52.622222 12.856888l529.123555-529.066666a113.777778 113.777778 0 0 1 92.387556-166.115556L853.333333 56.888889zM170.666667 807.822222a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m682.666666-682.666666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-layer" viewBox="0 0 1024 1024"><path d="M767.089778 625.777778l180.167111 82.773333a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730667-420.977778 193.422222a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422222a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730667L256.853333 625.777778l81.749334 37.546666L172.771556 739.555556 512 895.374222 851.171556 739.555556l-165.831112-76.231112 81.749334-37.546666z m0-227.555556l180.167111 82.773334a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730666-420.977778 193.422223a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422223a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730666L256.853333 398.222222l81.749334 37.546667-165.831111 76.174222L512 667.818667l339.171556-155.875556-165.831112-76.174222L767.089778 398.222222zM497.720889 60.017778a34.133333 34.133333 0 0 1 28.558222 0l420.977778 193.422222a34.133333 34.133333 0 0 1 0 62.008889l-420.977778 193.422222a34.133333 34.133333 0 0 1-28.558222 0l-420.977778-193.422222a34.133333 34.133333 0 0 1 0-62.008889zM512 128.568889L172.771556 284.387556 512 440.263111l339.171556-155.875555L512 128.568889z"  ></path></symbol><symbol id="l7-icon-narrow" viewBox="0 0 1024 1024"><path d="M910.222222 512a34.133333 34.133333 0 0 1-34.133333 34.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h728.177778a34.133333 34.133333 0 0 1 34.133333 34.133333z"  ></path></symbol><symbol id="l7-icon-fullscreen" viewBox="0 0 1024 1024"><path d="M645.176889 597.674667l4.721778 3.982222L841.955556 793.6l0.056888-133.688889a34.133333 34.133333 0 0 1 28.615112-33.678222L876.088889 625.777778a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 659.911111v216.177778a34.133333 34.133333 0 0 1-28.615111 33.678222L876.088889 910.222222h-216.177778a34.133333 34.133333 0 0 1-5.518222-67.811555l5.518222-0.455111h133.745778l-192-192.056889a34.133333 34.133333 0 0 1 43.52-52.224z m-222.833778 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L230.286222 841.955556H364.088889a34.133333 34.133333 0 0 1 33.678222 28.615111L398.222222 876.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L364.088889 910.222222H147.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 876.088889v-216.177778a34.133333 34.133333 0 0 1 67.811555-5.518222l0.455111 5.518222-0.056888 133.745778 192.113777-192a34.133333 34.133333 0 0 1 48.241778 0zM364.088889 113.777778a34.133333 34.133333 0 0 1 5.518222 67.811555L364.088889 182.044444H230.343111l192 192.056889a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222-192.113777-192.056889L182.044444 364.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L147.911111 398.222222a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 364.088889V147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L147.911111 113.777778h216.177778z m512 0a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 147.911111v216.177778a34.133333 34.133333 0 0 1-67.811555 5.518222L841.955556 364.088889l-0.056889-133.745778-192 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L793.6 182.044444H659.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L625.777778 147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L659.911111 113.777778h216.177778z"  ></path></symbol><symbol id="l7-icon-hide" viewBox="0 0 1024 1024"><path d="M875.52 87.836444a34.133333 34.133333 0 0 1 7.281778 43.121778l-3.527111 5.006222-682.666667 796.444445a34.133333 34.133333 0 0 1-55.409778-39.367111l3.527111-5.006222 97.166223-113.379556C123.164444 697.969778 56.888889 582.940444 56.888889 512c0-113.777778 170.666667-341.333333 455.111111-341.333333a496.64 496.64 0 0 1 208.952889 45.112889l106.439111-124.188445a34.133333 34.133333 0 0 1 48.128-3.754667z m-38.684444 202.524445C921.031111 362.951111 967.111111 452.835556 967.111111 512c0 113.777778-170.666667 341.333333-455.111111 341.333333-50.631111 0-97.678222-7.224889-140.8-19.740444l50.232889-58.595556A417.393778 417.393778 0 0 0 512 785.066667c208.270222 0 386.844444-162.304 386.844444-273.066667 0-52.849778-40.675556-117.418667-105.813333-170.496l43.804445-51.2zM512 238.933333C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 66.787556 64.853333 152.291556 162.133333 209.692444L377.173333 616.675556a170.666667 170.666667 0 0 1 217.713778-253.895112l78.620445-91.704888A432.924444 432.924444 0 0 0 512 238.933333z m166.684444 236.088889a170.666667 170.666667 0 0 1-177.664 207.303111l177.607112-207.303111zM512 409.6a102.4 102.4 0 0 0-88.746667 153.486222L548.864 416.426667A102.172444 102.172444 0 0 0 512 409.6z"  ></path></symbol><symbol id="l7-icon-rectangle" viewBox="0 0 1024 1024"><path d="M170.666667 56.888889a113.777778 113.777778 0 0 1 108.544 79.644444H853.333333a34.133333 34.133333 0 0 1 33.678223 28.615111L887.466667 170.666667v574.122666a113.777778 113.777778 0 1 1-142.677334 142.734223L170.666667 887.466667a34.133333 34.133333 0 0 1-33.678223-28.615111L136.533333 853.333333V279.210667A113.777778 113.777778 0 0 1 170.666667 56.888889z m682.666666 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-34.133333-603.022222H279.210667a114.062222 114.062222 0 0 1-74.353778 74.410667L204.8 819.2h539.989333a114.062222 114.062222 0 0 1 74.410667-74.410667V204.8zM170.666667 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-ranging" viewBox="0 0 1024 1024"><path d="M723.171556 50.403556l250.424888 250.424888a31.061333 31.061333 0 0 1 0 43.918223L344.746667 973.596444a31.061333 31.061333 0 0 1-43.918223 0L50.403556 723.171556a31.061333 31.061333 0 0 1 0-43.918223L679.253333 50.403556a31.061333 31.061333 0 0 1 43.918223 0z m-21.959112 74.524444l-39.765333 39.822222 98.986667 98.872889a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222 62.179556 62.122667a34.133333 34.133333 0 0 1-44.088889 51.882667L563.2 387.242667 501.077333 325.063111 437.191111 388.949333l98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222L387.242667 563.2a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.584-62.122667-62.179556-63.886222 63.886222 98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-39.765333 39.822222 197.802667 197.745778 576.284444-576.284444-197.802667-197.745778z"  ></path></symbol><symbol id="l7-icon-reposition" viewBox="0 0 1024 1024"><path d="M512 56.888889a34.133333 34.133333 0 0 1 34.133333 34.133333v24.177778A398.336 398.336 0 0 1 908.856889 477.866667h24.177778a34.133333 34.133333 0 0 1 0 68.266666h-24.177778A398.336 398.336 0 0 1 546.133333 908.856889L546.133333 932.977778a34.133333 34.133333 0 0 1-68.266666 0v-24.177778A398.336 398.336 0 0 1 115.2 546.133333L91.022222 546.133333a34.133333 34.133333 0 1 1 0-68.266666h24.177778A398.336 398.336 0 0 1 477.866667 115.2V91.022222A34.133333 34.133333 0 0 1 512 56.888889z m34.190222 126.862222L546.133333 193.422222a34.133333 34.133333 0 1 1-68.266666 0v-9.671111A330.069333 330.069333 0 0 0 183.751111 477.866667h9.671111a34.133333 34.133333 0 1 1 0 68.266666l-9.671111 0.056889A330.069333 330.069333 0 0 0 477.866667 840.248889V830.577778a34.133333 34.133333 0 0 1 68.266666 0l0.056889 9.671111A330.069333 330.069333 0 0 0 840.248889 546.133333L830.577778 546.133333a34.133333 34.133333 0 0 1 0-68.266666h9.671111A330.069333 330.069333 0 0 0 546.133333 183.751111zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-round" viewBox="0 0 1024 1024"><path d="M512 56.888889a455.111111 455.111111 0 0 1 391.395556 687.502222 113.777778 113.777778 0 0 1-159.061334 158.890667A455.111111 455.111111 0 0 1 120.604444 279.608889 113.777778 113.777778 0 0 1 279.608889 120.604444 452.835556 452.835556 0 0 1 512 56.888889z m0 68.266667a384.910222 384.910222 0 0 0-191.715556 50.744888A113.777778 113.777778 0 0 1 175.957333 320.284444a386.844444 386.844444 0 0 0 527.815111 527.758223 113.777778 113.777778 0 0 1 144.270223-144.440889A386.844444 386.844444 0 0 0 512 125.155556z m299.406222 640.739555a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM212.593778 167.082667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  ></path></symbol></svg>',function(e){try{let l=function(){u||(u=!0,a())},c=function(){try{o.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}l()};var n=(n=document.getElementsByTagName("script"))[n.length-1],t=n.getAttribute("data-injectcss"),n=n.getAttribute("data-disable-injectsvg");if(!n){var r,i,a,o,u,s=function(h,d){d.parentNode.insertBefore(h,d)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch{}}r=function(){var h,d=document.createElement("div");d.innerHTML=e._iconfont_svg_string_3580659,(d=d.getElementsByTagName("svg")[0])&&(d.setAttribute("aria-hidden","true"),d.style.position="absolute",d.style.width=0,d.style.height=0,d.style.overflow="hidden",d=d,(h=document.body).firstChild?s(d,h.firstChild):h.appendChild(d))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(r,0):(i=function(){document.removeEventListener("DOMContentLoaded",i,!1),r()},document.addEventListener("DOMContentLoaded",i,!1)):document.attachEvent&&(a=r,o=e.document,u=!1,c(),o.onreadystatechange=function(){o.readyState=="complete"&&(o.onreadystatechange=null,l())})}}catch{}}(window);function mC(e){var t=yC();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function yC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _C=function(e){Ee(n,e);var t=mC(n);function n(r){var i;return oe(this,n),i=t.call(this),n.controlCount++,i.controlOption=z(z({},i.getDefault(r)),r||{}),i}return ae(n,[{key:"getOptions",value:function(){return this.controlOption}},{key:"setOptions",value:function(i){var a=this.getDefault(i);Object.entries(i).forEach(function(o){var u=Pe(o,2),s=u[0],l=u[1];l===void 0&&(i[s]=a[s])}),"position"in i&&this.setPosition(i.position),"className"in i&&this.setClassName(i.className),"style"in i&&this.setStyle(i.style),this.controlOption=z(z({},this.controlOption),i)}},{key:"addTo",value:function(i){this.mapsService=i.get(ie.IMapService),this.renderService=i.get(ie.IRendererService),this.layerService=i.get(ie.ILayerService),this.controlService=i.get(ie.IControlService),this.configService=i.get(ie.IGlobalConfigService),this.scene=i.get(ie.ISceneService),this.sceneContainer=i,this.isShow=!0,this.container=this.onAdd(),Ri(this.container,"l7-control");var a=this.controlOption,o=a.className,u=a.style;return o&&this.setClassName(o),u&&this.setStyle(u),this.insertContainer(),this.emit("add",this),this}},{key:"remove",value:function(){if(!this.mapsService)return this;Ya(this.container),this.onRemove(),this.emit("remove",this)}},{key:"onAdd",value:function(){return Zn("div")}},{key:"onRemove",value:function(){}},{key:"show",value:function(){var i=this.container;Bu(i,"l7-control--hide"),this.isShow=!0,this.emit("show",this)}},{key:"hide",value:function(){var i=this.container;Ri(i,"l7-control--hide"),this.isShow=!1,this.emit("hide",this)}},{key:"getDefault",value:function(i){return{position:is.TOPRIGHT,name:"".concat(n.controlCount)}}},{key:"getContainer",value:function(){return this.container}},{key:"getIsShow",value:function(){return this.isShow}},{key:"_refocusOnMap",value:function(i){if(this.mapsService&&i&&i.screenX>0&&i.screenY>0){var a=this.mapsService.getContainer();a!==null&&a.focus()}}},{key:"setPosition",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:is.TOPLEFT,a=this.controlService;return a&&a.removeControl(this),this.controlOption.position=i,a&&a.addControl(this,this.sceneContainer),this}},{key:"setClassName",value:function(i){var a=this.container,o=this.controlOption.className;o&&Bu(a,o),i&&Ri(a,i)}},{key:"setStyle",value:function(i){var a=this.container;i?a.setAttribute("style",i):a.removeAttribute("style")}},{key:"insertContainer",value:function(){var i=this.controlOption.position,a=this.container;if(i instanceof Element)i.appendChild(a);else{var o=this.controlService.controlCorners[i];["bottomleft","bottomright","righttop","rightbottom"].includes(i)?o.insertBefore(a,o.firstChild):o.appendChild(a)}}},{key:"checkUpdateOption",value:function(i,a){return a.some(function(o){return o in i})}}]),n}(el);S(_C,"controlCount",0);function xC(e){var t=bC();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function bC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var SC=function(e){Ee(n,e);var t=xC(n);function n(r,i){var a;return oe(this,n),a=t.call(this),S(R(a),"isShow",!1),S(R(a),"timeout",null),S(R(a),"show",function(){return a.isShow||!a.contentDOM.innerHTML||(a.resetPopperPosition(),Bu(a.popperDOM,"l7-popper-hide"),a.isShow=!0,a.option.unique&&n.conflictPopperList.forEach(function(o){o!==R(a)&&o.isShow&&o.hide()}),a.emit("show"),window.addEventListener("pointerdown",a.onPopperUnClick)),R(a)}),S(R(a),"hide",function(){return a.isShow&&(Ri(a.popperDOM,"l7-popper-hide"),a.isShow=!1,a.emit("hide"),window.removeEventListener("pointerdown",a.onPopperUnClick)),R(a)}),S(R(a),"setHideTimeout",function(){a.timeout||(a.timeout=window.setTimeout(function(){a.isShow&&(a.hide(),a.timeout=null)},300))}),S(R(a),"clearHideTimeout",function(){a.timeout&&(window.clearTimeout(a.timeout),a.timeout=null)}),S(R(a),"onBtnClick",function(){a.isShow?a.hide():a.show()}),S(R(a),"onPopperUnClick",function(o){M_(o.target,[".l7-button-control",".l7-popper-content"])||a.hide()}),S(R(a),"onBtnMouseLeave",function(){a.setHideTimeout()}),S(R(a),"onBtnMouseMove",function(){a.clearHideTimeout(),!a.isShow&&a.show()}),a.button=r,a.option=i,a.init(),i.unique&&n.conflictPopperList.push(R(a)),a}return ae(n,[{key:"buttonRect",get:function(){return this.button.getBoundingClientRect()}},{key:"getPopperDOM",value:function(){return this.popperDOM}},{key:"getIsShow",value:function(){return this.isShow}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(i){typeof i=="string"?this.contentDOM.innerHTML=i:i instanceof HTMLElement&&(T_(this.contentDOM),this.contentDOM.appendChild(i)),this.content=i}},{key:"init",value:function(){var i=this.option.trigger;this.popperDOM=this.createPopper(),i==="click"?this.button.addEventListener("click",this.onBtnClick):(this.button.addEventListener("mousemove",this.onBtnMouseMove),this.button.addEventListener("mouseleave",this.onBtnMouseLeave),this.popperDOM.addEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.addEventListener("mouseleave",this.onBtnMouseLeave))}},{key:"destroy",value:function(){this.button.removeEventListener("click",this.onBtnClick),this.button.removeEventListener("mousemove",this.onBtnMouseMove),this.button.removeEventListener("mousemove",this.onBtnMouseLeave),this.popperDOM.removeEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.removeEventListener("mouseleave",this.onBtnMouseLeave),Ya(this.popperDOM)}},{key:"resetPopperPosition",value:function(){var i={},a=this.option,o=a.container,u=a.offset,s=u===void 0?[0,0]:u,l=a.placement,c=Pe(s,2),f=c[0],h=c[1],d=this.button.getBoundingClientRect(),v=o.getBoundingClientRect(),p=w_(d,v),g=p.left,m=p.right,_=p.top,y=p.bottom,x=!1,b=!1;/^(left|right)/.test(l)?(l.includes("left")?i.right="".concat(d.width+m,"px"):l.includes("right")&&(i.left="".concat(d.width+g,"px")),l.includes("start")?i.top="".concat(_,"px"):l.includes("end")?i.bottom="".concat(y,"px"):(i.top="".concat(_+d.height/2,"px"),b=!0,i.transform="translate(".concat(f,"px, calc(").concat(h,"px - 50%))"))):/^(top|bottom)/.test(l)&&(l.includes("top")?i.bottom="".concat(d.height+y,"px"):l.includes("bottom")&&(i.top="".concat(d.height+_,"px")),l.includes("start")?i.left="".concat(g,"px"):l.includes("end")?i.right="".concat(m,"px"):(i.left="".concat(g+d.width/2,"px"),x=!0,i.transform="translate(calc(".concat(f,"px - 50%), ").concat(h,"px)"))),i.transform="translate(calc(".concat(f,"px - ").concat(x?"50%":"0%","), calc(").concat(h,"px - ").concat(b?"50%":"0%",")");var M=l.split("-");M.length&&Ri(this.popperDOM,M.map(function(T){return"l7-popper-".concat(T)}).join(" ")),E_(this.popperDOM,C_(i))}},{key:"createPopper",value:function(){var i=this.option,a=i.container,o=i.className,u=o===void 0?"":o,s=i.content,l=Zn("div","l7-popper l7-popper-hide ".concat(u)),c=Zn("div","l7-popper-content"),f=Zn("div","l7-popper-arrow");return l.appendChild(c),l.appendChild(f),a.appendChild(l),this.popperDOM=l,this.contentDOM=c,s&&this.setContent(s),l}}]),n}(Yt.EventEmitter);S(SC,"conflictPopperList",[]);function AC(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=EC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function EC(e,t){if(e){if(typeof e=="string")return Bd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bd(e,t)}}function Bd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ud=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Mn=function(){if(typeof document>"u")return!1;for(var e=Ud[0],t={},n=0,r=Ud;n<r.length;n++){var i=r[n],a=i==null?void 0:i[1];if(a in document){var o=AC(i.entries()),u;try{for(o.s();!(u=o.n()).done;){var s=Pe(u.value,2),l=s[0],c=s[1];t[e[l]]=c}}catch(f){o.e(f)}finally{o.f()}return t}}return!1}(),zd={change:Mn.fullscreenchange,error:Mn.fullscreenerror},Qt={request:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise(function(r,i){var a=function u(){Qt.off("change",u),r()};Qt.on("change",a);var o=t[Mn.requestFullscreen](n);o instanceof Promise&&o.then(a).catch(i)})},exit:function(){return new Promise(function(t,n){if(!Qt.isFullscreen){t();return}var r=function a(){Qt.off("change",a),t()};Qt.on("change",r);var i=document[Mn.exitFullscreen]();i instanceof Promise&&i.then(r).catch(n)})},toggle:function(t,n){return Qt.isFullscreen?Qt.exit():Qt.request(t,n)},onchange:function(t){Qt.on("change",t)},onerror:function(t){Qt.on("error",t)},on:function(t,n){var r=zd[t];r&&document.addEventListener(r,n,!1)},off:function(t,n){var r=zd[t];r&&document.removeEventListener(r,n,!1)},raw:Mn};Object.defineProperties(Qt,{isFullscreen:{get:function(){return!!document[Mn.fullscreenElement]}},element:{enumerable:!0,get:function(){var t;return(t=document[Mn.fullscreenElement])!==null&&t!==void 0?t:void 0}},isEnabled:{enumerable:!0,get:function(){return!!document[Mn.fullscreenEnabled]}}});Mn||(Qt={isEnabled:!1});var $n,Dg=($n={},S($n,Hn.additive,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE,srcAlpha:1,dstAlpha:1}}),S($n,Hn.none,{enable:!1}),S($n,Hn.normal,{enable:!0,func:{srcRGB:L.SRC_ALPHA,dstRGB:L.ONE_MINUS_SRC_ALPHA,srcAlpha:1,dstAlpha:1}}),S($n,Hn.subtractive,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE,srcAlpha:L.ZERO,dstAlpha:L.ONE_MINUS_SRC_COLOR},equation:{rgb:L.FUNC_SUBTRACT,alpha:L.FUNC_SUBTRACT}}),S($n,Hn.max,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE},equation:{rgb:L.MAX_EXT}}),S($n,Hn.min,{enable:!0,func:{srcRGB:L.ONE,dstRGB:L.ONE},equation:{rgb:L.MIN_EXT}}),$n);function Ng(e){return e.map(function(t){return typeof t=="string"&&(t=[t,{}]),t})}function Bg(e,t,n,r){var i=e.multiPassRenderer,a=e.getLayerConfig(),o=a.enableTAA;return o?i.add(r("taa")):i.add(r("render")),Ng(t).forEach(function(u){var s=Pe(u,2),l=s[0],c=s[1];i.add(n(l),c)}),i.add(n("copy")),i}var CC=function(){function e(t){oe(this,e),this.layer=t}return ae(e,[{key:"pickRender",value:function(n){var r=this.layer.getContainer(),i=r.get(ie.ILayerService),a=this.layer;if(a.tileLayer)return a.tileLayer.pickRender(n);a.hooks.beforePickingEncode.call(),i.renderTileLayerMask(a),a.renderModels({ispick:!0}),a.hooks.afterPickingEncode.call()}},{key:"pick",value:function(){var t=Y(C.mark(function r(i,a){var o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(o=this.layer.getContainer(),u=o.get(ie.IPickingService),i.type!=="RasterLayer"){l.next=4;break}return l.abrupt("return",this.pickRasterLayer(i,a));case 4:return this.pickRender(a),l.abrupt("return",u.pickFromPickingFBO(i,a));case 6:case"end":return l.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"pickRasterLayer",value:function(n,r,i){var a=this.layer.getContainer(),o=a.get(ie.IPickingService),u=a.get(ie.IMapService),s=this.layer.getSource().extent,l=L_(r.lngLat,s),c={x:r.x,y:r.y,type:r.type,lngLat:r.lngLat,target:r,rasterValue:null},f=i||n;if(l){var h=this.readRasterValue(n,s,u,r.x,r.y);return c.rasterValue=h,o.triggerHoverOnLayer(f,c),!0}else return c.type=r.type==="mousemove"?"mouseout":"un"+r.type,o.triggerHoverOnLayer(f,z(z({},c),{},{type:"unpick"})),o.triggerHoverOnLayer(f,c),!1}},{key:"readRasterValue",value:function(n,r,i,a,o){var u=n.getSource().data.dataArray[0],s=Pe(r,4),l=s[0],c=l===void 0?0:l,f=s[1],h=f===void 0?0:f,d=s[2],v=d===void 0?10:d,p=s[3],g=p===void 0?-10:p,m=i.lngLatToContainer([c,h]),_=i.lngLatToContainer([v,g]),y=_.x-m.x,x=m.y-_.y,b=[(a-m.x)/y,(o-_.y)/x],M=u.width||1,T=u.height||1,D=Math.floor(b[0]*M),U=Math.floor(b[1]*T),I=Math.max(0,U-1)*M+D,w=u.data[I];return w}},{key:"selectFeature",value:function(n){var r=this.layer,i=Pe(n,3),a=i[0],o=i[1],u=i[2];r.hooks.beforeSelect.call([a,o,u])}},{key:"highlightPickedFeature",value:function(n){var r=Pe(n,3),i=r[0],a=r[1],o=r[2];this.layer.hooks.beforeHighlight.call([i,a,o])}},{key:"getFeatureById",value:function(n){return this.layer.getSource().getFeatureById(n)}}]),e}(),wC=function(){function e(t){oe(this,e),this.layer=t;var n=this.layer.getContainer();this.rendererService=n.get(ie.IRendererService)}return ae(e,[{key:"getColorTexture",value:function(n,r){var i=this.getTextureKey(n,r);return this.key===i?this.colorTexture:(this.createColorTexture(n,r),this.key=i,this.colorTexture)}},{key:"createColorTexture",value:function(n,r){var i=this.rendererService.createTexture2D,a=this.getColorRampBar(n,r),o=i({data:new Uint8Array(a.data),width:a.width,height:a.height,flipY:!1,unorm:!0});return this.colorTexture=o,o}},{key:"setColorTexture",value:function(n,r,i){this.key=this.getTextureKey(r,i),this.colorTexture=n}},{key:"destroy",value:function(){var n;(n=this.colorTexture)===null||n===void 0||n.destroy()}},{key:"getColorRampBar",value:function(n,r){switch(n.type){case"cat":return h_(n);case"quantize":return d_(n);case"custom":return v_(n,r);case"linear":return f_(n,r);default:return c_(n)}}},{key:"getTextureKey",value:function(n,r){var i;return"".concat(n.colors.join("_"),"_").concat(n==null||(i=n.positions)===null||i===void 0?void 0:i.join("_"),"_").concat(n.type,"_").concat(r==null?void 0:r.join("_"))}}]),e}(),TC=["passes"],MC=["moduleName","vertexShader","fragmentShader","inject","triangulation","styleOption","pickingEnabled"],$d,_u,Vd;function kC(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=IC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function IC(e,t){if(e){if(typeof e=="string")return jd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jd(e,t)}}function jd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function LC(e){var t=RC();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function RC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var xu=Ke.isEqual,Hd=Ke.isFunction,Gd=Ke.isNumber,Ct=Ke.isObject,PC=Ke.isPlainObject,FC=Ke.isUndefined,Wd=0,Kr=($d=Lg(ie.IGlobalConfigService),_u=function(e){Ee(n,e);var t=LC(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oe(this,n),r=t.call(this),S(R(r),"id","".concat(Wd++)),S(R(r),"name","".concat(Wd)),S(R(r),"visible",!0),S(R(r),"zIndex",0),S(R(r),"inited",!1),S(R(r),"layerModelNeedUpdate",!1),S(R(r),"pickedFeatureID",null),S(R(r),"selectedFeatureID",null),S(R(r),"styleNeedUpdate",!1),S(R(r),"forceRender",!1),S(R(r),"clusterZoom",0),S(R(r),"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}}),S(R(r),"dataState",{dataSourceNeedUpdate:!1,dataMappingNeedUpdate:!1,filterNeedUpdate:!1,featureScaleNeedUpdate:!1,StyleAttrNeedUpdate:!1}),S(R(r),"hooks",{init:new kS,afterInit:new Hf,beforeRender:new Hf,beforeRenderData:new IS,afterRender:new ln,beforePickingEncode:new ln,afterPickingEncode:new ln,beforeHighlight:new ln(["pickedColor"]),afterHighlight:new ln,beforeSelect:new ln(["pickedColor"]),afterSelect:new ln,beforeDestroy:new ln,afterDestroy:new ln}),S(R(r),"models",[]),S(R(r),"startInit",!1),S(R(r),"layerChildren",[]),S(R(r),"masks",[]),$e(R(r),"configService",Vd,R(r)),S(R(r),"animateOptions",{enable:!1}),S(R(r),"currentPickId",null),S(R(r),"encodeStyleAttribute",{}),S(R(r),"enableShaderEncodeStyles",[]),S(R(r),"enableDataEncodeStyles",[]),S(R(r),"pendingStyleAttributes",[]),S(R(r),"scaleOptions",{}),S(R(r),"animateStatus",!1),S(R(r),"isDestroyed",!1),S(R(r),"uniformBuffers",[]),S(R(r),"encodeDataLength",0),S(R(r),"sourceEvent",function(){r.dataState.dataSourceNeedUpdate=!0;var a=r.getLayerConfig();a&&a.autoFit&&r.fitBounds(a.fitBoundsOptions);var o=r.layerSource.getSourceCfg().autoRender;o&&setTimeout(function(){r.reRender()},10)}),r.name=i.name||r.id,r.zIndex=i.zIndex||0,r.rawConfig=i,r}return ae(n,[{key:"addMask",value:function(i){this.masks.push(i),this.updateLayerConfig({maskLayers:this.masks}),this.enableMask()}},{key:"removeMask",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),this.updateLayerConfig({maskLayers:this.masks})}},{key:"disableMask",value:function(){this.updateLayerConfig({enableMask:!1})}},{key:"enableMask",value:function(){this.updateLayerConfig({enableMask:!0})}},{key:"addMaskLayer",value:function(i){this.masks.push(i)}},{key:"removeMaskLayer",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),i.destroy()}},{key:"getAttribute",value:function(i){return this.styleAttributeService.getLayerStyleAttribute(i)}},{key:"getLayerConfig",value:function(){return this.configService.getLayerConfig(this.id)}},{key:"updateLayerConfig",value:function(i){var a=this;if(Object.keys(i).map(function(u){u in a.rawConfig&&(a.rawConfig[u]=i[u])}),!this.startInit)this.needUpdateConfig=z(z({},this.needUpdateConfig),i);else{var o=this.container.get(ie.SceneID);this.configService.setLayerConfig(o,this.id,z(z(z({},this.configService.getLayerConfig(this.id)),this.needUpdateConfig),i)),this.needUpdateConfig={}}}},{key:"setContainer",value:function(i,a){this.container=i,this.sceneContainer=a}},{key:"getContainer",value:function(){return this.container}},{key:"addPlugin",value:function(i){return this.plugins.push(i),this}},{key:"init",value:function(){var r=Y(C.mark(function a(){var o=this,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:u=this.container.get(ie.SceneID),this.startInit=!0,this.configService.setLayerConfig(u,this.id,this.rawConfig),this.layerType=this.rawConfig.layerType,this.iconService=this.container.get(ie.IIconService),this.fontService=this.container.get(ie.IFontService),this.rendererService=this.container.get(ie.IRendererService),this.layerService=this.container.get(ie.ILayerService),this.debugService=this.container.get(ie.IDebugService),this.interactionService=this.container.get(ie.IInteractionService),this.pickingService=this.container.get(ie.IPickingService),this.mapService=this.container.get(ie.IMapService),s=this.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,l&&c!==null&&c!==void 0&&c.length&&c.length>0&&this.mapService.on("mapAfterFrameChange",function(){o.renderLayers()}),this.cameraService=this.container.get(ie.ICameraService),this.coordinateService=this.container.get(ie.ICoordinateSystemService),this.shaderModuleService=this.container.get(ie.IShaderModuleService),this.postProcessingPassFactory=this.container.get(ie.IFactoryPostProcessingPass),this.normalPassFactory=this.container.get(ie.IFactoryNormalPass),this.styleAttributeService=this.container.get(ie.IStyleAttributeService),l&&(this.multiPassRenderer=this.container.get(ie.IMultiPassRenderer),this.multiPassRenderer.setLayer(this)),this.pendingStyleAttributes.forEach(function(g){var m=g.attributeName,_=g.attributeField,y=g.attributeValues,x=g.updateOptions;o.styleAttributeService.updateStyleAttribute(m,{scale:z({field:_},o.splitValuesAndCallbackInAttribute(y,_?void 0:o.getLayerConfig()[m]))},x)}),this.pendingStyleAttributes=[],this.plugins=this.container.getAll(ie.ILayerPlugin),f=kC(this.plugins);try{for(f.s();!(h=f.n()).done;)d=h.value,d.apply(this,{rendererService:this.rendererService,mapService:this.mapService,styleAttributeService:this.styleAttributeService,normalPassFactory:this.normalPassFactory,postProcessingPassFactory:this.postProcessingPassFactory})}catch(g){f.e(g)}finally{f.f()}return this.layerPickService=new CC(this),this.textureService=new wC(this),this.log(gt.LayerInitStart),p.next=31,this.hooks.init.promise();case 31:this.log(gt.LayerInitEnd),this.inited=!0,this.emit("inited",{target:this,type:"inited"}),this.emit("add",{target:this,type:"add"}),this.hooks.afterInit.call();case 36:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"log",value:function(i){var a,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"init";if(!(this.tileLayer||this.isTileLayer)){var u="".concat(this.id,".").concat(o,".").concat(i),s={id:this.id,type:this.type};(a=this.debugService)===null||a===void 0||a.log(u,s)}}},{key:"updateModelData",value:function(i){i.attributes&&i.elements&&this.models.map(function(a){a.updateAttributesAndElements(i.attributes,i.elements)})}},{key:"setLayerPickService",value:function(i){this.layerPickService=i}},{key:"prepareBuildModel",value:function(){Object.keys(this.needUpdateConfig||{}).length!==0&&this.updateLayerConfig({});var i=this.getLayerConfig(),a=i.animateOption;a!=null&&a.enable&&(this.layerService.startAnimate(),this.animateStatus=!0)}},{key:"color",value:function(i,a,o){return this.updateStyleAttribute("color",i,a,o),this}},{key:"texture",value:function(i,a,o){return this.updateStyleAttribute("texture",i,a,o),this}},{key:"rotate",value:function(i,a,o){return this.updateStyleAttribute("rotate",i,a,o),this}},{key:"size",value:function(i,a,o){return this.updateStyleAttribute("size",i,a,o),this}},{key:"filter",value:function(i,a,o){var u=this.updateStyleAttribute("filter",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"shape",value:function(i,a,o){this.shapeOption={field:i,values:a};var u=this.updateStyleAttribute("shape",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"label",value:function(i,a,o){return this.pendingStyleAttributes.push({attributeName:"label",attributeField:i,attributeValues:a,updateOptions:o}),this}},{key:"animate",value:function(i){var a={};return Ct(i)?(a.enable=!0,a=z(z({},a),i)):a.enable=i,this.updateLayerConfig({animateOption:a}),this}},{key:"source",value:function(i,a){return(i==null?void 0:i.type)==="source"?(this.setSource(i),this):(this.sourceOption={data:i,options:a},this.clusterZoom=0,this)}},{key:"setData",value:function(i,a){var o=this;return this.inited?(this.log(gt.SourceInitStart,xt.UPDATE),this.layerSource.setData(i,a),this.log(gt.SourceInitEnd,xt.UPDATE)):this.on("inited",function(){o.log(gt.SourceInitStart,xt.UPDATE);var u=o.getSource();u?o.layerSource.setData(i,a):o.source(new Og(i,a)),o.layerSource.once("update",function(){o.log(gt.SourceInitEnd,xt.UPDATE)})}),this}},{key:"style",value:function(i){var a=this,o=i.passes,u=Kt(i,TC);o&&Ng(o).forEach(function(l){var c=a.multiPassRenderer.getPostProcessor().getPostProcessingPassByName(l[0]);c&&c.updateOptions(l[1])}),u.borderColor&&(u.stroke=u.borderColor),u.borderWidth&&(u.strokeWidth=u.borderWidth);var s=u;return Object.keys(u).forEach(function(l){var c=u[l];Array.isArray(c)&&c.length===2&&!Gd(c[0])&&!Gd(c[1])&&(s[l]={field:c[0],value:c[1]})}),this.encodeStyle(s),this.updateLayerConfig(s),this}},{key:"encodeStyle",value:function(i){var a=this;Object.keys(i).forEach(function(o){[].concat(ee(a.enableShaderEncodeStyles),ee(a.enableDataEncodeStyles)).includes(o)&&PC(i[o])&&(i[o].field||i[o].value)&&!xu(a.encodeStyleAttribute[o],i[o])?(a.encodeStyleAttribute[o]=i[o],a.updateStyleAttribute(o,i[o].field,i[o].value),a.inited&&(a.dataState.dataMappingNeedUpdate=!0)):a.encodeStyleAttribute[o]&&(delete a.encodeStyleAttribute[o],a.dataState.dataSourceNeedUpdate=!0)})}},{key:"scale",value:function(i,a){var o=z({},this.scaleOptions);if(Ct(i)?this.scaleOptions=z(z({},this.scaleOptions),i):this.scaleOptions[i]=a,this.styleAttributeService&&!xu(o,this.scaleOptions)){var u=Ct(i)?i:S({},i,a);this.styleAttributeService.updateScaleAttribute(u)}return this}},{key:"renderLayers",value:function(){this.rendering=!0,this.layerService.reRender(),this.rendering=!1}},{key:"prerender",value:function(){}},{key:"render",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.tileLayer?(this.tileLayer.render(),this):(this.layerService.beforeRenderData(this),this.encodeDataLength<=0&&!this.forceRender?this:(this.renderModels(i),this))}},{key:"renderMultiPass",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.encodeDataLength<=0&&!this.forceRender)){u.next=2;break}return u.abrupt("return");case 2:if(!(this.multiPassRenderer&&this.multiPassRenderer.getRenderFlag())){u.next=7;break}return u.next=5,this.multiPassRenderer.render();case 5:u.next=8;break;case 7:this.multiPassRenderer?this.renderModels():this.renderModels();case 8:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"active",value:function(i){var a={};return a.enableHighlight=Ct(i)?!0:i,Ct(i)?(a.enableHighlight=!0,i.color&&(a.highlightColor=i.color),i.mix&&(a.activeMix=i.mix)):a.enableHighlight=!!i,this.updateLayerConfig(a),this}},{key:"setActive",value:function(i,a){var o=this;if(Ct(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({highlightColor:Ct(a)?a.color:this.getLayerConfig().highlightColor,activeMix:Ct(a)?a.mix:this.getLayerConfig().activeMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,highlightColor:Ct(a)?a.color:this.getLayerConfig().highlightColor,activeMix:Ct(a)?a.mix:this.getLayerConfig().activeMix}),this.hooks.beforeHighlight.call(Ln(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"select",value:function(i){var a={};return a.enableSelect=Ct(i)?!0:i,Ct(i)?(a.enableSelect=!0,i.color&&(a.selectColor=i.color),i.mix&&(a.selectMix=i.mix)):a.enableSelect=!!i,this.updateLayerConfig(a),this}},{key:"setSelect",value:function(i,a){var o=this;if(Ct(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({selectColor:Ct(a)?a.color:this.getLayerConfig().selectColor,selectMix:Ct(a)?a.mix:this.getLayerConfig().selectMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,selectColor:Ct(a)?a.color:this.getLayerConfig().selectColor,selectMix:Ct(a)?a.mix:this.getLayerConfig().selectMix}),this.hooks.beforeSelect.call(Ln(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"setBlend",value:function(i){return this.updateLayerConfig({blend:i}),this.reRender(),this}},{key:"show",value:function(){return this.updateLayerConfig({visible:!0}),this.reRender(),this.emit("show"),this}},{key:"hide",value:function(){return this.updateLayerConfig({visible:!1}),this.reRender(),this.emit("hide"),this}},{key:"setIndex",value:function(i){return this.zIndex=i,this.layerService.updateLayerRenderList(),this.layerService.renderLayers(),this}},{key:"setCurrentPickId",value:function(i){this.currentPickId=i}},{key:"getCurrentPickId",value:function(){return this.currentPickId}},{key:"setCurrentSelectedId",value:function(i){this.selectedFeatureID=i}},{key:"getCurrentSelectedId",value:function(){return this.selectedFeatureID}},{key:"isVisible",value:function(){var i=this.mapService.getZoom(),a=this.getLayerConfig(),o=a.visible,u=a.minZoom,s=u===void 0?-1/0:u,l=a.maxZoom,c=l===void 0?1/0:l;return!!o&&i>=s&&i<c}},{key:"setMultiPass",value:function(i,a){if(this.updateLayerConfig({enableMultiPassRenderer:i}),a&&this.updateLayerConfig({passes:a}),i){var o=this.getLayerConfig(),u=o.passes,s=u===void 0?[]:u;this.multiPassRenderer=Bg(this,s,this.postProcessingPassFactory,this.normalPassFactory),this.multiPassRenderer.setRenderFlag(!0);var l=this.rendererService.getViewportSize(),c=l.width,f=l.height;this.multiPassRenderer.resize(c,f)}return this}},{key:"setMinZoom",value:function(i){return this.updateLayerConfig({minZoom:i}),this}},{key:"getMinZoom",value:function(){var i=this.getLayerConfig(),a=i.minZoom;return a}},{key:"getMaxZoom",value:function(){var i=this.getLayerConfig(),a=i.maxZoom;return a}},{key:"get",value:function(i){var a=this.getLayerConfig();return a[i]}},{key:"setMaxZoom",value:function(i){return this.updateLayerConfig({maxZoom:i}),this}},{key:"setAutoFit",value:function(i){return this.updateLayerConfig({autoFit:i}),this}},{key:"fitBounds",value:function(i){if(!this.inited)return this.updateLayerConfig({autoFit:!0}),this;var a=this.getSource(),o=a.extent,u=o.some(function(s){return Math.abs(s)===1/0});return u?this:(this.mapService.fitBounds([[o[0],o[1]],[o[2],o[3]]],i),this)}},{key:"destroy",value:function(){var i,a,o,u,s,l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(!this.isDestroyed){(i=this.layerModel)===null||i===void 0||i.uniformBuffers.forEach(function(h){h.destroy()}),this.layerChildren.map(function(h){return h.destroy(!1)}),this.layerChildren=[];var c=this.getLayerConfig(),f=c.maskfence;f&&(this.masks.map(function(h){return h.destroy(!1)}),this.masks=[]),this.hooks.beforeDestroy.call(),this.layerSource.off("update",this.sourceEvent),(a=this.multiPassRenderer)===null||a===void 0||a.destroy(),this.textureService.destroy(),this.styleAttributeService.clearAllAttributes(),this.hooks.afterDestroy.call(),(o=this.layerModel)===null||o===void 0||o.clearModels(l),(u=this.tileLayer)===null||u===void 0||u.destroy(),this.models=[],(s=this.debugService)===null||s===void 0||s.removeLog(this.id),this.emit("remove",{target:this,type:"remove"}),this.emit("destroy",{target:this,type:"destroy"}),this.removeAllListeners(),this.isDestroyed=!0}}},{key:"clear",value:function(){this.styleAttributeService.clearAllAttributes()}},{key:"clearModels",value:function(){var i;this.models.forEach(function(a){return a.destroy()}),(i=this.layerModel)===null||i===void 0||i.clearModels(),this.models=[]}},{key:"isDirty",value:function(){return!!(this.styleAttributeService.getLayerStyleAttributes()||[]).filter(function(i){return i.needRescale||i.needRemapping||i.needRegenerateVertices}).length}},{key:"setSource",value:function(i){var a=this;if(this.layerSource&&this.layerSource.off("update",this.sourceEvent),this.layerSource=i,this.clusterZoom=0,this.inited&&this.layerSource.cluster){var o=this.mapService.getZoom();this.layerSource.updateClusterData(o)}this.layerSource.inited&&this.sourceEvent(),this.layerSource.on("update",function(u){var s=u.type;if(a.coordCenter===void 0){var l,c=a.layerSource.center;a.coordCenter=c,(l=a.mapService)!==null&&l!==void 0&&l.setCoordCenter&&a.mapService.setCoordCenter(c)}if(s==="update"){if(a.tileLayer){a.tileLayer.reload();return}a.sourceEvent()}})}},{key:"getSource",value:function(){return this.layerSource}},{key:"getScaleOptions",value:function(){return this.scaleOptions}},{key:"setEncodedData",value:function(i){this.encodedData=i,this.encodeDataLength=i.length}},{key:"getEncodedData",value:function(){return this.encodedData}},{key:"getScale",value:function(i){return this.styleAttributeService.getLayerAttributeScale(i)}},{key:"getLegend",value:function(i){var a,o,u,s=this.styleAttributeService.getLayerStyleAttribute(i),l=(s==null||(a=s.scale)===null||a===void 0?void 0:a.scalers)||[];return{type:(o=l[0].option)===null||o===void 0?void 0:o.type,field:s==null||(u=s.scale)===null||u===void 0?void 0:u.field,items:this.getLegendItems(i)}}},{key:"getLegendItems",value:function(i){var a=this.styleAttributeService.getLayerAttributeScale(i);if(!a)return[];if(a.invertExtent){var o=a.range().map(function(l){return S({value:a.invertExtent(l)},i,l)});return o}else if(a.ticks){var u=a.ticks().map(function(l){return S({value:l},i,a(l))});return u}else if(a!=null&&a.domain){var s=a.domain().filter(function(l){return!FC(l)}).map(function(l){return S({value:l},i,a(l))});return s}return[]}},{key:"pick",value:function(i){var a=i.x,o=i.y;this.interactionService.triggerHover({x:a,y:o})}},{key:"boxSelect",value:function(i,a){this.pickingService.boxPickLayer(this,i,a)}},{key:"buildLayerModel",value:function(){var r=Y(C.mark(function a(o){var u=this,s,l,c,f,h,d,v,p,g,m,_,y,x,b;return C.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return s=o.moduleName,l=o.vertexShader,c=o.fragmentShader,f=o.inject,h=o.triangulation,d=o.styleOption,v=o.pickingEnabled,p=v===void 0?!0:v,g=Kt(o,MC),this.shaderModuleService.registerModule(s,{vs:l,fs:c,inject:f}),m=this.shaderModuleService.getModule(s),_=m.vs,y=m.fs,x=m.uniforms,b=this.rendererService.createModel,T.abrupt("return",new Promise(function(D){var U=u.styleAttributeService.createAttributesAndIndices(u.encodedData,h,d),I=U.attributes,w=U.elements,k=U.count,P=[].concat(ee(u.layerModel.uniformBuffers),ee(u.rendererService.uniformBuffers),[u.getLayerUniformBuffer()]);p&&P.push(u.getPickingUniformBuffer());var B=z({attributes:I,uniforms:x,fs:y,vs:_,elements:w,blend:Dg[Hn.normal],uniformBuffers:P,textures:u.layerModel.textures},g);k&&(B.count=k);var K=b(B);D(K)}));case 5:case"end":return T.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"createAttributes",value:function(i){var a=i.triangulation,o=this.styleAttributeService.createAttributes(this.encodedData,a),u=o.attributes;return u}},{key:"getTime",value:function(){return this.layerService.clock.getDelta()}},{key:"setAnimateStartTime",value:function(){this.animateStartTime=this.layerService.clock.getElapsedTime()}},{key:"stopAnimate",value:function(){this.animateStatus&&(this.layerService.stopAnimate(),this.animateStatus=!1,this.updateLayerConfig({animateOption:{enable:!1}}))}},{key:"getLayerAnimateTime",value:function(){return this.layerService.clock.getElapsedTime()-this.animateStartTime}},{key:"needPick",value:function(i){var a=this.getLayerConfig(),o=a.enableHighlight,u=o===void 0?!0:o,s=a.enableSelect,l=s===void 0?!0:s,c=this.eventNames().indexOf(i)!==-1||this.eventNames().indexOf("un"+i)!==-1;return(i==="click"||i==="dblclick")&&l&&(c=!0),i==="mousemove"&&(u||this.eventNames().indexOf("mouseenter")!==-1||this.eventNames().indexOf("unmousemove")!==-1||this.eventNames().indexOf("mouseout")!==-1)&&(c=!0),this.isVisible()&&c}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return u.stop()}},a)}));function i(){return r.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"renderMulPass",value:function(){var r=Y(C.mark(function a(o){return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.render();case 2:case"end":return s.stop()}},a)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"renderModels",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.encodeDataLength<=0&&!this.forceRender?(this.clearModels(),this):(this.hooks.beforeRender.call(),this.models.forEach(function(o){o.draw({uniforms:i.layerModel.getUninforms(),blend:i.layerModel.getBlend(),stencil:i.layerModel.getStencil(a),textures:i.layerModel.textures},(a==null?void 0:a.ispick)||!1)}),this.hooks.afterRender.call(),this)}},{key:"updateStyleAttribute",value:function(i,a,o,u){var s=this.configService.getAttributeConfig(this.id)||{};return xu(s[i],{field:a,values:o})?!1:(["color","size","texture","rotate","filter","label","shape"].indexOf(i)!==-1&&this.configService.setAttributeConfig(this.id,S({},i,{field:a,values:o})),this.startInit?this.styleAttributeService.updateStyleAttribute(i,{scale:z({field:a},this.splitValuesAndCallbackInAttribute(o,this.getLayerConfig()[a]))},u):this.pendingStyleAttributes.push({attributeName:i,attributeField:a,attributeValues:o,updateOptions:u}),!0)}},{key:"getLayerAttributeConfig",value:function(){return this.configService.getAttributeConfig(this.id)}},{key:"getShaderPickStat",value:function(){return this.layerService.getShaderPickStat()}},{key:"setEarthTime",value:function(i){}},{key:"processData",value:function(i){return i}},{key:"getModelType",value:function(){throw new Error("Method not implemented.")}},{key:"getDefaultConfig",value:function(){return{}}},{key:"initLayerModels",value:function(){var r=Y(C.mark(function a(){var o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this.models.forEach(function(c){return c.destroy()}),this.models=[],this.uniformBuffers.forEach(function(c){c.destroy()}),this.uniformBuffers=[],o=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(o),u=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(u),l.next=10,this.layerModel.initModels();case 10:this.models=l.sent;case 11:case"end":return l.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getLayerUniformBuffer",value:function(){return this.uniformBuffers[0]}},{key:"getPickingUniformBuffer",value:function(){return this.uniformBuffers[1]}},{key:"reRender",value:function(){this.inited&&this.layerService.reRender()}},{key:"splitValuesAndCallbackInAttribute",value:function(i){return{values:Hd(i)?void 0:i,callback:Hd(i)?i:void 0}}}]),n}(Yt.EventEmitter),Vd=Ue(_u.prototype,"configService",[$d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_u);function OC(e,t){return{enable:e,mask:255,func:{cmp:L.EQUAL,ref:t?1:0,mask:1}}}function Yd(e){return e.maskOperation===Co.OR?{enable:!0,mask:255,func:{cmp:L.ALWAYS,ref:1,mask:255},opFront:{fail:L.KEEP,zfail:L.REPLACE,zpass:L.REPLACE}}:{enable:!0,mask:255,func:{cmp:e.stencilType===lr.SINGLE||e.stencilIndex===0?L.ALWAYS:L.LESS,ref:e.stencilType===lr.SINGLE?1:e.stencilIndex===0?2:1,mask:255},opFront:{fail:L.KEEP,zfail:L.REPLACE,zpass:L.REPLACE}}}var Ie=function(e){return e[e.POSITION=0]="POSITION",e[e.COLOR=1]="COLOR",e[e.VERTEX_ID=2]="VERTEX_ID",e[e.PICKING_COLOR=3]="PICKING_COLOR",e[e.STROKE=4]="STROKE",e[e.OPACITY=5]="OPACITY",e[e.OFFSETS=6]="OFFSETS",e[e.ROTATION=7]="ROTATION",e[e.EXTRUSION_BASE=8]="EXTRUSION_BASE",e[e.SIZE=9]="SIZE",e[e.SHAPE=10]="SHAPE",e[e.EXTRUDE=11]="EXTRUDE",e[e.MAX=12]="MAX",e[e.NORMAL=13]="NORMAL",e[e.UV=14]="UV",e[e.LINEAR=15]="LINEAR",e}({});function DC(e){switch(e){case"rotation":return{name:"Rotation",type:Se.Attribute,descriptor:{name:"a_Rotation",shaderLocation:Ie.ROTATION,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(n){var r=n.rotation,i=r===void 0?0:r;return Array.isArray(i)?[i[0]]:[i]}}};case"stroke":return{name:"stroke",type:Se.Attribute,descriptor:{name:"a_Stroke",shaderLocation:Ie.STROKE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(n){var r=n.stroke,i=r===void 0?[1,1,1,1]:r;return i}}};case"opacity":return{name:"opacity",type:Se.Attribute,descriptor:{name:"a_Opacity",shaderLocation:Ie.OPACITY,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(n){var r=n.opacity,i=r===void 0?1:r;return[i]}}};case"extrusionBase":return{name:"extrusionBase",type:Se.Attribute,descriptor:{name:"a_ExtrusionBase",shaderLocation:Ie.EXTRUSION_BASE,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(n){var r=n.extrusionBase,i=r===void 0?0:r;return[i]}}};case"offsets":return{name:"offsets",type:Se.Attribute,descriptor:{name:"a_Offsets",shaderLocation:Ie.OFFSETS,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(n){var r=n.offsets;return r}}};case"thetaOffset":return{name:"thetaOffset",type:Se.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:15,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(n){var r=n.thetaOffset,i=r===void 0?1:r;return[i]}}};default:return}}var NC={opacity:1,stroke:[1,0,0,1],offsets:[0,0],rotation:0,extrusionBase:0,strokeOpacity:1,thetaOffset:.314},ka={opacity:"float",stroke:"vec4",offsets:"vec2",textOffset:"vec2",rotation:"float",extrusionBase:"float",strokeOpacity:"float",thetaOffset:"float"};function Xd(e){return Math.max(Math.ceil(e/4)*4,4)}var Zd,bu,qd,Qd={opacity:Ie.OPACITY,stroke:Ie.STROKE,offsets:Ie.OFFSETS,rotation:Ie.ROTATION,extrusionBase:Ie.EXTRUSION_BASE,thetaOffset:15},at=(Zd=Lg(ie.IGlobalConfigService),bu=function(){function e(t){oe(this,e),S(this,"uniformBuffers",[]),S(this,"textures",[]),S(this,"preStyleAttribute",{}),S(this,"encodeStyleAttribute",{}),$e(this,"configService",qd,this),this.layer=t,this.rendererService=t.getContainer().get(ie.IRendererService),this.pickingService=t.getContainer().get(ie.IPickingService),this.shaderModuleService=t.getContainer().get(ie.IShaderModuleService),this.styleAttributeService=t.getContainer().get(ie.IStyleAttributeService),this.mapService=t.getContainer().get(ie.IMapService),this.iconService=t.getContainer().get(ie.IIconService),this.fontService=t.getContainer().get(ie.IFontService),this.cameraService=t.getContainer().get(ie.ICameraService),this.layerService=t.getContainer().get(ie.ILayerService),this.registerStyleAttribute(),this.registerBuiltinAttributes(),this.startModelAnimate();var n=this.rendererService.createTexture2D;this.createTexture2D=n}return ae(e,[{key:"getBlend",value:function(){var n=this.layer.getLayerConfig(),r=n.blend,i=r===void 0?"normal":r;return Dg[Hn[i]]}},{key:"getStencil",value:function(n){var r=this.layer.getLayerConfig(),i=r.mask,a=i===void 0?!1:i,o=r.maskInside,u=o===void 0?!0:o,s=r.enableMask,l=r.maskOperation,c=l===void 0?Co.AND:l;if(this.layer.type==="MaskLayer")return Yd({isStencil:!0,stencilType:lr.SINGLE});if(n.isStencil)return Yd(z(z({},n),{},{maskOperation:c}));var f=a||s&&this.layer.masks.length!==0||this.layer.tileMask!==void 0;return OC(f,u)}},{key:"getDefaultStyle",value:function(){return{}}},{key:"getUninforms",value:function(){var n=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());this.updateStyleUnifoms();var i=z(z({},r.uniformsOption),n.uniformsOption);return!this.rendererService.hasOwnProperty("device")&&this.textures&&this.textures.length===1&&(i.u_texture=this.textures[0]),i}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"needUpdate",value:function(){var t=Y(C.mark(function r(){return C.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!1);case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"buildModels",value:function(){var t=Y(C.mark(function r(){return C.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"initModels",value:function(){var t=Y(C.mark(function r(){return C.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"clearModels",value:function(){}},{key:"getAttribute",value:function(){throw new Error("Method not implemented.")}},{key:"prerender",value:function(){}},{key:"render",value:function(n){throw new Error("Method not implemented.")}},{key:"registerBuiltinAttributes",value:function(){throw new Error("Method not implemented.")}},{key:"animateOption2Array",value:function(n){return[n.enable?0:1,n.duration||4,n.interval||.2,n.trailLength||.1]}},{key:"startModelAnimate",value:function(){var n=this.layer.getLayerConfig(),r=n.animateOption;r.enable&&this.layer.setAnimateStartTime()}},{key:"getInject",value:function(){var n=this.layer.encodeStyleAttribute,r="",i=[];this.layer.enableShaderEncodeStyles.forEach(function(u){n[u]?r+="#define USE_ATTRIBUTE_".concat(u.toUpperCase(),` 0.0; 

`):i.push("  ".concat(ka[u]," u_").concat(u,";")),r+=`
          #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
          layout(location = `).concat(Qd[u],") in ").concat(ka[u]," a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
        #endif

        `)});var a=i.length?`
layout(std140) uniform AttributeUniforms {
`.concat(i.join(`
`),`
};
    `):"";r+=a;var o="";return this.layer.enableShaderEncodeStyles.forEach(function(u){o+=`

    #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
      `).concat(ka[u]," ").concat(u,"  = a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
    #else
      `).concat(ka[u]," ").concat(u," = u_").concat(u,`;
    #endif

    `)}),{"vs:#decl":r,"fs:#decl":a,"vs:#main-start":o}}},{key:"getStyleAttribute",value:function(){var n=this,r={};return this.layer.enableShaderEncodeStyles.forEach(function(i){if(!n.layer.encodeStyleAttribute[i]){var a=n.layer.getLayerConfig()[i],o=typeof a>"u"?NC[i]:a;i==="stroke"&&(o=tt(o)),r["u_"+i]=o}}),r}},{key:"registerStyleAttribute",value:function(){var n=this;Object.keys(this.layer.encodeStyleAttribute).forEach(function(r){var i=DC(r);i&&(n.styleAttributeService.registerStyleAttribute(i),i.descriptor&&(i.descriptor.shaderLocation=Qd[r]))})}},{key:"updateEncodeAttribute",value:function(n,r){this.encodeStyleAttribute[n]=r}},{key:"initUniformsBuffer",value:function(){var n=this.getUniformsBufferInfo(this.getStyleAttribute()),r=this.getCommonUniformsInfo();n.uniformsLength!==0&&(this.attributeUnifoms=this.rendererService.createBuffer({data:new Float32Array(Xd(n.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.attributeUnifoms)),r.uniformsLength!==0&&(this.commonUnifoms=this.rendererService.createBuffer({data:new Float32Array(Xd(r.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.commonUnifoms))}},{key:"getUniformsBufferInfo",value:function(n){var r=0,i=[];return Object.values(n).forEach(function(a){Array.isArray(a)?(i.push.apply(i,ee(a)),r+=a.length):typeof a=="number"?(i.push(a),r+=1):typeof a=="boolean"&&(i.push(Number(a)),r+=1)}),{uniformsOption:n,uniformsLength:r,uniformsArray:i}}},{key:"getCommonUniformsInfo",value:function(){return{uniformsLength:0,uniformsArray:[],uniformsOption:{}}}},{key:"updateStyleUnifoms",value:function(){var n,r,i=this.getUniformsBufferInfo(this.getStyleAttribute()),a=i.uniformsArray,o=this.getCommonUniformsInfo(),u=o.uniformsArray;(n=this.attributeUnifoms)===null||n===void 0||n.subData({offset:0,data:new Uint8Array(new Float32Array(a).buffer)}),(r=this.commonUnifoms)===null||r===void 0||r.subData({offset:0,data:new Uint8Array(new Float32Array(u).buffer)})}}]),e}(),qd=Ue(bu.prototype,"configService",[Zd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bu),Jd=function(e){return e.VERTICAL="vertical",e.HORIZONTAL="horizontal",e}({}),BC=function(e){return e.NORMAL="normal",e.REPLACE="replace",e}({}),yl=function(e){return e[e.pixel=0]="pixel",e[e.meter=1]="meter",e}({}),Ug=100;function Kd(e){return e/180*Math.acos(-1)}function zg(e){var t=Kd(e[0])+Math.PI/2,n=Kd(e[1]),r=Ug+Math.random()*.4,i=r*Math.cos(n)*Math.cos(t),a=r*Math.cos(n)*Math.sin(t),o=r*Math.sin(n);return[a,o,i]}var Ia=He();He();var yt=He(),Vn=He(),Mr=He();function Su(e,t,n,r,i){_t(e,n,r),dn(e,e),t=jr(-e[1],e[0]);var a=jr(-n[1],n[0]);return[i/Xn(t,a),t]}function jn(e,t){return Qp(e,-t[1],t[0])}function kr(e,t,n){return Vr(e,t,n),dn(e,e),e}function Au(e,t){return e[0]===t[0]&&e[1]===t[1]}var UC=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};oe(this,e),S(this,"lastFlip",-1),S(this,"miter",jr(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return ae(e,[{key:"simpleExtrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.simpleSegment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleExtrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(ee(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(ee(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.segment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleSegment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=ht([a[0],a[1]]),h=ht([i[0],i[1]]);kr(yt,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=He(),jn(this.normal,yt)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(r+0,r+1,r+2),!o)jn(this.normal,yt),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2;else{var v=ht([o[0],o[1]]);Au(f,v)&&_t(v,f,dn(v,Dr(v,f,h))),kr(Vn,v,f);var p=Su(Mr,He(),yt,Vn,this.thickness),g=Pe(p,2),m=g[0],_=g[1],y=Xn(Mr,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),y=-1,cn(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment_gaode2",value:function(n,r,i,a,o,u,s,l){var c=0,f=n.indices,h=n.positions,d=n.normals,v=this.cap==="square",p=this.join==="bevel",g=ht([s[0],s[1]]),m=ht([u[0],u[1]]);kr(yt,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=He(),jn(this.normal,yt)),!this.started)if(this.started=!0,v){var y=He(),x=He();_t(y,this.normal,yt),_t(x,this.normal,yt),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(r+0,r+1,r+2),o){Au(a,o)&&_t(o,a,dn(o,Dr(o,a,i))),kr(Vn,o,a);var T=Su(Mr,He(),yt,Vn,this.thickness),D=Pe(T,2),U=D[0],I=D[1],w=Xn(Mr,this.normal)<0?-1:1,k=p;if(!k&&this.join==="miter"){var P=U;P>this.miterLimit&&(k=!0)}k?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,ee(this.lastFlip!==-w?[r,r+2,r+3]:[r+2,r+1,r+3])),f.push(r+2,r+3,r+4),jn(Ia,Vn),cn(this.normal,Ia),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*w,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,U,this.totalDistance),f.push.apply(f,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),w=-1,cn(this.normal,I),c+=2),this.lastFlip=w}else{if(jn(this.normal,yt),v){var b=He(),M=He();Vr(M,yt,this.normal),_t(b,yt,this.normal),d.push(M[0],M[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),c+=2}return c}},{key:"segment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=this.cap==="square",h=this.join==="bevel",d=ht([a[0],a[1]]),v=ht([i[0],i[1]]);kr(yt,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=He(),jn(this.normal,yt)),!this.started)if(this.started=!0,f){var g=He(),m=He();_t(g,this.normal,yt),_t(m,this.normal,yt),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(r+0,r+1,r+2),o){var x=ht([o[0],o[1]]);Au(d,x)&&_t(x,d,dn(x,Dr(x,d,v))),kr(Vn,x,d);var b=Su(Mr,He(),yt,Vn,this.thickness),M=Pe(b,2),T=M[0],D=M[1],U=Xn(Mr,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var w=T;w>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(D[0],D[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,ee(this.lastFlip!==-U?[r,r+2,r+3]:[r+2,r+1,r+3])),s.push(r+2,r+3,r+4),jn(Ia,Vn),cn(this.normal,Ia),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*U,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,D,T,this.totalDistance),s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),U=-1,cn(this.normal,D),u+=2),this.lastFlip=U}else{if(jn(this.normal,yt),f){var _=He(),y=He();Vr(y,yt,this.normal),_t(_,yt,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,ee(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2}return u}},{key:"extrusions",value:function(n,r,i,a,o,u){r.push(a[0],a[1],0),r.push(a[0],a[1],0),n.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),n.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(n,r){var i=r[0]-n[0],a=r[1]-n[1];return Math.sqrt(i*i+a*a)}}]),e}();function $g(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e[0][0],r=e[0][e[0].length-1];n[0]===r[0]&&n[1]===r[1]&&(e[0]=e[0].slice(0,e[0].length-1));for(var i=e[0].length,a=pn.flatten(e),o=a.vertices,u=a.dimensions,s=[],l=[],c=[],f=0;f<o.length/u;f++)s.push(o[f*u],o[f*u+1],1,-1,-1),c.push(0,0,1);var h=pn(a.vertices,a.holes,a.dimensions);l.push.apply(l,ee(h));for(var d=function(){var g=a.vertices.slice(v*u,(v+1)*u),m=a.vertices.slice((v+1)*u,(v+2)*u);m.length===0&&(m=a.vertices.slice(0,u));var _=s.length/5;s.push(g[0],g[1],1,0,0,m[0],m[1],1,.1,0,g[0],g[1],0,0,.8,m[0],m[1],0,.1,.8);var y=zC([m[0],m[1],1],[g[0],g[1],0],[g[0],g[1],1],t);c.push.apply(c,ee(y).concat(ee(y),ee(y),ee(y))),l.push.apply(l,ee([1,2,0,3,2,1].map(function(x){return x+_})))},v=0;v<i;v++)d();return{positions:s,index:l,normals:c}}function zC(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=ya(),a=ya(),o=ya();r&&(e=Zo(e),t=Zo(t),n=Zo(n));var u=Sn.apply($o,ee(e)),s=Sn.apply($o,ee(t)),l=Sn.apply($o,ee(n));jl(i,l,s),jl(a,u,s),ky(o,i,a);var c=ya();return Ei(c,o),c}var Zt,pi=function(e){return e.CYLINDER="cylinder",e.SQUARECOLUMN="squareColumn",e.TRIANGLECOLUMN="triangleColumn",e.HEXAGONCOLUMN="hexagonColumn",e.PENTAGONCOLUMN="pentagonColumn",e}({}),gi=function(e){return e.CIRCLE="circle",e.SQUARE="square",e.TRIANGLE="triangle",e.HEXAGON="hexagon",e.PENTAGON="pentagon",e}({});function la(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=Math.PI*2/e,r=[],i=0;i<e;i++)r.push(n*i+t*Math.PI/12);var a=r.map(function(o){var u=Math.sin(o+Math.PI/4),s=Math.cos(o+Math.PI/4);return[u,s,0]});return a}function gs(){return la(30)}function ev(){return la(4)}function tv(){return la(3)}function nv(){return la(6,1)}function rv(){return la(5)}var Eu=(Zt={},S(Zt,gi.CIRCLE,gs),S(Zt,gi.HEXAGON,nv),S(Zt,gi.TRIANGLE,tv),S(Zt,gi.SQUARE,ev),S(Zt,gi.PENTAGON,rv),S(Zt,pi.CYLINDER,gs),S(Zt,pi.HEXAGONCOLUMN,nv),S(Zt,pi.TRIANGLECOLUMN,tv),S(Zt,pi.SQUARECOLUMN,ev),S(Zt,pi.PENTAGONCOLUMN,rv),Zt),La={};function Ja(e){var t=Tn(e.coordinates);return{vertices:[].concat(ee(t),ee(t),ee(t),ee(t)),indices:[0,1,2,2,3,0],size:t.length}}function iv(e){var t=Tn(e.coordinates),n=zg(t);return{vertices:[].concat(ee(n),ee(n),ee(n),ee(n)),indices:[0,1,2,2,3,0],size:n.length}}function Vg(e){var t=e.shape,n=YC(t,!1),r=n.positions,i=n.index,a=n.normals;return{vertices:r,indices:i,normals:a,size:5}}function $C(e){var t=Tn(e.coordinates);return{vertices:ee(t),indices:[0],size:t.length}}function VC(e){var t=e.coordinates,n=e.originCoordinates,r=e.version,i=new UC({dash:!0,join:"bevel"});if(r==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=n;Array.isArray(o[0][0])||(o=[n]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function jC(e){var t=e.coordinates,n=e.originCoordinates,r=[];if(!Array.isArray(t[0]))return{vertices:[],indices:[],normals:[],size:6,count:0};var i=HC(t,n),a=i.results,o=i.totalDistance;return a.map(function(u){r.push(u[0],u[1],u[2],u[3],0,o)}),{vertices:r,indices:[],normals:[],size:6,count:a.length}}function av(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}function Cu(e,t){return e.length<3&&e.push(0),t!==void 0&&e.push(t),e}function HC(e,t){var n=e,r=t||e;Array.isArray(n)&&Array.isArray(n[0])&&Array.isArray(n[0][0])&&(n=t.flat(),r=t.flat());var i=0;if(n.length<2)return{results:n,totalDistance:0};var a=[],o=Cu(n[0],i);a.push(o);for(var u=1;u<n.length-1;u++){var s=av(ht(r[u-1]),ht(r[u]));i+=s;var l=Cu(n[u],i);a.push(l),a.push(l)}var c=av(ht(r[r.length-2]),ht(r[r.length-1]));return i+=c,a.push(Cu(n[n.length-1],i)),{results:a,totalDistance:i}}function _l(e){var t=e.coordinates,n=pn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes;return{indices:pn(r,a,i),vertices:r,size:i}}function GC(e){var t=e.coordinates,n=pn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes;return{indices:pn(r,a,i),vertices:WC(r),size:i+4}}function WC(e){for(var t=[],n=B_(e),r=n.center,i=n.radius,a=0;a<e.length;a+=2){var o=e[a],u=e[a+1];t.push.apply(t,[o,u,0].concat(ee(r),[i]))}return t}function jg(e){var t=e.coordinates,n=$g(t,!0),r=n.positions,i=n.index,a=n.normals;return{vertices:r,indices:i,normals:a,size:5}}function Mo(e){var t=e.coordinates,n=[].concat(ee(t[0]),[0,0,1,t[1][0],t[0][1],0,1,1],ee(t[1]),[0,1,0],ee(t[0]),[0,0,1],ee(t[1]),[0,1,0,t[0][0],t[1][1],0,0,0]),r=[0,1,2,3,4,5];return{vertices:n,indices:r,size:5}}function xl(e,t){for(var n=t.segmentNumber,r=n===void 0?30:n,i=e.coordinates,a=[],o=[],u=function(c){a.push(c,1,c,i[0][0],i[0][1],i[1][0],i[1][1],c,-1,c,i[0][0],i[0][1],i[1][0],i[1][1]),c!==r-1&&o.push.apply(o,ee([0,1,2,1,3,2].map(function(f){return c*2+f})))},s=0;s<r;s++)u(s);return{vertices:a,indices:o,size:7}}function YC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(La&&La[e])return La[e];var n=Eu[e]?Eu[e]():Eu.cylinder(),r=$g([n],t);return La[e]=r,r}/*! *****************************************************************************
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
***************************************************************************** */var ov;(function(e){(function(t){var n=typeof Oi=="object"?Oi:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof n.Reflect>"u"?n.Reflect=e:r=i(n.Reflect,r),t(r);function i(a,o){return function(u,s){typeof a[u]!="function"&&Object.defineProperty(a,u,{configurable:!0,writable:!0,value:s}),o&&o(u,s)}}})(function(t){var n=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",a=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",o=typeof Object.create=="function",u={__proto__:[]}instanceof Array,s=!o&&!u,l={create:o?function(){return on(Object.create(null))}:u?function(){return on({__proto__:null})}:function(){return on({})},has:s?function(j,ne){return n.call(j,ne)}:function(j,ne){return ne in j},get:s?function(j,ne){return n.call(j,ne)?j[ne]:void 0}:function(j,ne){return j[ne]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",h=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ft(),d=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Je(),v=!f&&typeof WeakMap=="function"?WeakMap:Lt(),p=new v;function g(j,ne,se,pe){if(Z(se)){if(!ue(j))throw new TypeError;if(!te(ne))throw new TypeError;return I(j,ne)}else{if(!ue(j))throw new TypeError;if(!le(ne))throw new TypeError;if(!le(pe)&&!Z(pe)&&!X(pe))throw new TypeError;return X(pe)&&(pe=void 0),se=$(se),w(j,ne,se,pe)}}t("decorate",g);function m(j,ne){function se(pe,me){if(!le(pe))throw new TypeError;if(!Z(me)&&!Ge(me))throw new TypeError;ve(j,ne,pe,me)}return se}t("metadata",m);function _(j,ne,se,pe){if(!le(se))throw new TypeError;return Z(pe)||(pe=$(pe)),ve(j,ne,se,pe)}t("defineMetadata",_);function y(j,ne,se){if(!le(ne))throw new TypeError;return Z(se)||(se=$(se)),P(j,ne,se)}t("hasMetadata",y);function x(j,ne,se){if(!le(ne))throw new TypeError;return Z(se)||(se=$(se)),B(j,ne,se)}t("hasOwnMetadata",x);function b(j,ne,se){if(!le(ne))throw new TypeError;return Z(se)||(se=$(se)),K(j,ne,se)}t("getMetadata",b);function M(j,ne,se){if(!le(ne))throw new TypeError;return Z(se)||(se=$(se)),ce(j,ne,se)}t("getOwnMetadata",M);function T(j,ne){if(!le(j))throw new TypeError;return Z(ne)||(ne=$(ne)),ye(j,ne)}t("getMetadataKeys",T);function D(j,ne){if(!le(j))throw new TypeError;return Z(ne)||(ne=$(ne)),H(j,ne)}t("getOwnMetadataKeys",D);function U(j,ne,se){if(!le(ne))throw new TypeError;Z(se)||(se=$(se));var pe=k(ne,se,!1);if(Z(pe)||!pe.delete(j))return!1;if(pe.size>0)return!0;var me=p.get(ne);return me.delete(se),me.size>0||p.delete(ne),!0}t("deleteMetadata",U);function I(j,ne){for(var se=j.length-1;se>=0;--se){var pe=j[se],me=pe(ne);if(!Z(me)&&!X(me)){if(!te(me))throw new TypeError;ne=me}}return ne}function w(j,ne,se,pe){for(var me=j.length-1;me>=0;--me){var Xe=j[me],Re=Xe(ne,se,pe);if(!Z(Re)&&!X(Re)){if(!le(Re))throw new TypeError;pe=Re}}return pe}function k(j,ne,se){var pe=p.get(j);if(Z(pe)){if(!se)return;pe=new h,p.set(j,pe)}var me=pe.get(ne);if(Z(me)){if(!se)return;me=new h,pe.set(ne,me)}return me}function P(j,ne,se){var pe=B(j,ne,se);if(pe)return!0;var me=dt(ne);return X(me)?!1:P(j,me,se)}function B(j,ne,se){var pe=k(ne,se,!1);return Z(pe)?!1:Oe(pe.has(j))}function K(j,ne,se){var pe=B(j,ne,se);if(pe)return ce(j,ne,se);var me=dt(ne);if(!X(me))return K(j,me,se)}function ce(j,ne,se){var pe=k(ne,se,!1);if(!Z(pe))return pe.get(j)}function ve(j,ne,se,pe){var me=k(se,pe,!0);me.set(j,ne)}function ye(j,ne){var se=H(j,ne),pe=dt(j);if(pe===null)return se;var me=ye(pe,ne);if(me.length<=0)return se;if(se.length<=0)return me;for(var Xe=new d,Re=[],O=0,N=se;O<N.length;O++){var G=N[O],re=Xe.has(G);re||(Xe.add(G),Re.push(G))}for(var be=0,nt=me;be<nt.length;be++){var G=nt[be],re=Xe.has(G);re||(Xe.add(G),Re.push(G))}return Re}function H(j,ne){var se=[],pe=k(j,ne,!1);if(Z(pe))return se;for(var me=pe.keys(),Xe=Ye(me),Re=0;;){var O=Le(Xe);if(!O)return se.length=Re,se;var N=Ne(O);try{se[Re]=N}catch(G){try{ot(Xe)}finally{throw G}}Re++}}function V(j){if(j===null)return 1;switch(typeof j){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return j===null?1:6;default:return 6}}function Z(j){return j===void 0}function X(j){return j===null}function he(j){return typeof j=="symbol"}function le(j){return typeof j=="object"?j!==null:typeof j=="function"}function de(j,ne){switch(V(j)){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:return j}var se=ne===3?"string":ne===5?"number":"default",pe=Fe(j,i);if(pe!==void 0){var me=pe.call(j,se);if(le(me))throw new TypeError;return me}return Ve(j,se==="default"?"number":se)}function Ve(j,ne){if(ne==="string"){var se=j.toString;if(xe(se)){var pe=se.call(j);if(!le(pe))return pe}var me=j.valueOf;if(xe(me)){var pe=me.call(j);if(!le(pe))return pe}}else{var me=j.valueOf;if(xe(me)){var pe=me.call(j);if(!le(pe))return pe}var Xe=j.toString;if(xe(Xe)){var pe=Xe.call(j);if(!le(pe))return pe}}throw new TypeError}function Oe(j){return!!j}function rt(j){return""+j}function $(j){var ne=de(j,3);return he(ne)?ne:rt(ne)}function ue(j){return Array.isArray?Array.isArray(j):j instanceof Object?j instanceof Array:Object.prototype.toString.call(j)==="[object Array]"}function xe(j){return typeof j=="function"}function te(j){return typeof j=="function"}function Ge(j){switch(V(j)){case 3:return!0;case 4:return!0;default:return!1}}function Fe(j,ne){var se=j[ne];if(se!=null){if(!xe(se))throw new TypeError;return se}}function Ye(j){var ne=Fe(j,a);if(!xe(ne))throw new TypeError;var se=ne.call(j);if(!le(se))throw new TypeError;return se}function Ne(j){return j.value}function Le(j){var ne=j.next();return ne.done?!1:ne}function ot(j){var ne=j.return;ne&&ne.call(j)}function dt(j){var ne=Object.getPrototypeOf(j);if(typeof j!="function"||j===c||ne!==c)return ne;var se=j.prototype,pe=se&&Object.getPrototypeOf(se);if(pe==null||pe===Object.prototype)return ne;var me=pe.constructor;return typeof me!="function"||me===j?ne:me}function ft(){var j={},ne=[],se=function(){function Re(O,N,G){this._index=0,this._keys=O,this._values=N,this._selector=G}return Re.prototype["@@iterator"]=function(){return this},Re.prototype[a]=function(){return this},Re.prototype.next=function(){var O=this._index;if(O>=0&&O<this._keys.length){var N=this._selector(this._keys[O],this._values[O]);return O+1>=this._keys.length?(this._index=-1,this._keys=ne,this._values=ne):this._index++,{value:N,done:!1}}return{value:void 0,done:!0}},Re.prototype.throw=function(O){throw this._index>=0&&(this._index=-1,this._keys=ne,this._values=ne),O},Re.prototype.return=function(O){return this._index>=0&&(this._index=-1,this._keys=ne,this._values=ne),{value:O,done:!0}},Re}();return function(){function Re(){this._keys=[],this._values=[],this._cacheKey=j,this._cacheIndex=-2}return Object.defineProperty(Re.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Re.prototype.has=function(O){return this._find(O,!1)>=0},Re.prototype.get=function(O){var N=this._find(O,!1);return N>=0?this._values[N]:void 0},Re.prototype.set=function(O,N){var G=this._find(O,!0);return this._values[G]=N,this},Re.prototype.delete=function(O){var N=this._find(O,!1);if(N>=0){for(var G=this._keys.length,re=N+1;re<G;re++)this._keys[re-1]=this._keys[re],this._values[re-1]=this._values[re];return this._keys.length--,this._values.length--,O===this._cacheKey&&(this._cacheKey=j,this._cacheIndex=-2),!0}return!1},Re.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=j,this._cacheIndex=-2},Re.prototype.keys=function(){return new se(this._keys,this._values,pe)},Re.prototype.values=function(){return new se(this._keys,this._values,me)},Re.prototype.entries=function(){return new se(this._keys,this._values,Xe)},Re.prototype["@@iterator"]=function(){return this.entries()},Re.prototype[a]=function(){return this.entries()},Re.prototype._find=function(O,N){return this._cacheKey!==O&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=O)),this._cacheIndex<0&&N&&(this._cacheIndex=this._keys.length,this._keys.push(O),this._values.push(void 0)),this._cacheIndex},Re}();function pe(Re,O){return Re}function me(Re,O){return O}function Xe(Re,O){return[Re,O]}}function Je(){return function(){function j(){this._map=new h}return Object.defineProperty(j.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),j.prototype.has=function(ne){return this._map.has(ne)},j.prototype.add=function(ne){return this._map.set(ne,ne),this},j.prototype.delete=function(ne){return this._map.delete(ne)},j.prototype.clear=function(){this._map.clear()},j.prototype.keys=function(){return this._map.keys()},j.prototype.values=function(){return this._map.values()},j.prototype.entries=function(){return this._map.entries()},j.prototype["@@iterator"]=function(){return this.keys()},j.prototype[a]=function(){return this.keys()},j}()}function Lt(){var j=16,ne=l.create(),se=pe();return function(){function N(){this._key=pe()}return N.prototype.has=function(G){var re=me(G,!1);return re!==void 0?l.has(re,this._key):!1},N.prototype.get=function(G){var re=me(G,!1);return re!==void 0?l.get(re,this._key):void 0},N.prototype.set=function(G,re){var be=me(G,!0);return be[this._key]=re,this},N.prototype.delete=function(G){var re=me(G,!1);return re!==void 0?delete re[this._key]:!1},N.prototype.clear=function(){this._key=pe()},N}();function pe(){var N;do N="@@WeakMap@@"+O();while(l.has(ne,N));return ne[N]=!0,N}function me(N,G){if(!n.call(N,se)){if(!G)return;Object.defineProperty(N,se,{value:l.create()})}return N[se]}function Xe(N,G){for(var re=0;re<G;++re)N[re]=Math.random()*255|0;return N}function Re(N){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(N)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(N)):Xe(new Uint8Array(N),N):Xe(new Array(N),N)}function O(){var N=Re(j);N[6]=N[6]&79|64,N[8]=N[8]&191|128;for(var G="",re=0;re<j;++re){var be=N[re];(re===4||re===6||re===8)&&(G+="-"),be<16&&(G+="0"),G+=be.toString(16).toLowerCase()}return G}}function on(j){return j.__=void 0,delete j.__,j}})})(ov||(ov={}));function XC(e,t){return{type:e.type,field:"value",items:e.positions.map(function(n,r){var i;return i={},S(i,t,r>=e.colors.length?null:e.colors[r]),S(i,"value",n),i})}}function ZC(e){var t=qC();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function qC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var QC=`uniform sampler2D u_texture;
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
`,JC=`layout(location = 0) in vec3 a_Position;
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
`,KC=function(e){Ee(n,e);var t=ZC(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.brightness,u=i.contrast,s=i.saturation,l=i.gamma,c={u_opacity:oi(a,1),u_brightness:oi(o,1),u_contrast:oi(u,1),u_saturation:oi(s,1),u_gamma:oi(l,1)};this.textures=[this.texture];var f=this.getUniformsBufferInfo(c);return f}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"loadTexture",value:function(){var r=Y(C.mark(function a(){var o,u,s;return C.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=this.rendererService.createTexture2D,this.texture=o({height:1,width:1}),u=this.layer.getSource(),c.next=5,u.data.images;case 5:s=c.sent,this.texture=o({data:s[0],width:s[0].width,height:s[0].height,mag:L.LINEAR,min:L.LINEAR});case 7:case"end":return c.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"rasterImage",vertexShader:JC,fragmentShader:QC,triangulation:Mo,primitive:L.TRIANGLES,blend:{enable:!0},depth:{enable:!1},pickingEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_Uv",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(at),ew={image:KC};function tw(e){var t=nw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function nw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var rw=function(e){Ee(n,e);var t=tw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","ImageLayer"),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new ew[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={image:{}};return a[i]}},{key:"getModelType",value:function(){return"image"}}]),n}(Kr);function iw(e){var t=aw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function aw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ow=`
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
}`,uw=`#define Animate 0.0
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
`,sw={solid:0,dash:1},lw=function(e){Ee(n,e);var t=iw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.forward,v=d===void 0?!0:d,p=i.lineTexture,g=p===void 0?!1:p,m=i.iconStep,_=m===void 0?100:m,y=i.segmentNumber,x=y===void 0?30:y,b=this.layer.getLayerConfig(),M=b.animateOption,T=h;c!=="dash"&&(T=[0,0]),T.length===2&&T.push(0,0);var D=0,U=[0,0,0,0],I=[0,0,0,0];a&&o&&(U=tt(a),I=tt(o),D=1),this.rendererService.getDirty()&&this.texture.bind();var w={u_animate:this.animateOption2Array(M),u_dash_array:T,u_sourceColor:U,u_targetColor:I,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:x,u_lineDir:v?1:-1,u_icon_step:_,u_line_texture:g?1:0,u_textureBlend:s==="normal"?0:1,u_blur:.9,u_line_type:sw[c||"solid"],u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:D},k=this.getUniformsBufferInfo(w);return k}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:ow,vert:uw,type:""}}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=5,this.layer.buildLayerModel({moduleName:"lineArc2d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:xl,depth:{enable:!1},styleOption:{segmentNumber:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Se.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at);function cw(e){var t=fw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function fw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hw=`#define LineTypeSolid 0.0
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
`,dw=`#define LineTypeSolid 0.0
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
`,vw={solid:0,dash:1},uv=function(e){Ee(n,e);var t=cw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=i.globalArcHeight,x=y===void 0?10:y,b=this.layer.getLayerConfig(),M=b.animateOption;h.length===2&&h.push(0,0);var T=0,D=[0,0,0,0],U=[0,0,0,0];a&&o&&(D=tt(a),U=tt(o),T=1),this.rendererService.getDirty()&&this.texture.bind();var I={u_animate:this.animateOption2Array(M),u_dash_array:h,u_sourceColor:D,u_targetColor:U,u_textSize:[1024,this.iconService.canvasHeight||128],u_globel:this.mapService.version==="GLOBEL"?1:0,u_globel_radius:Ug,u_global_height:x,segmentNumber:_,u_line_type:vw[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:T},w=this.getUniformsBufferInfo(I);return w}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:hw,vert:dw,type:""}}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=4,this.layer.buildLayerModel({moduleName:"lineArc3d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:xl,styleOption:{segmentNumber:s}});case 4:return d=p.sent,p.abrupt("return",[d]);case 6:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Se.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at),sv={circle:2,triangle:2,diamond:4,rect:2,classic:3,halfTriangle:2,none:0},zt=1/2;function pw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?1:i;return{vertices:[0,zt*e,1*e*r,-(a+zt)*e,1*e*r,(a-zt)*e,0,zt*e,1*e*r,-(a+zt)*e,1*e*r,(a-zt)*e],indices:[3,4,5],outLineIndices:[0,1,2],normals:[1*e,-2*e,1,-2*e,1.5*e,1,1*e,1.5*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function gw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*e*r,1*a,1*e*r,-1*a,0,0,1*e*r,1*a,1*e*r,-1*a],outLineIndices:[0,1,2],indices:[3,4,5],normals:[0,-1.5*e,1,2,1*e,1,-2,1*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function mw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?2:i;return{vertices:[0,a/2,e*r*1,a/2,e*r*1,-a/2,0,-a/2,0,a/2,e*r*1,a/2,e*r*1,-a/2,0,-a/2],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function yw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*r*e,.5*a,2*r*e,0,1*r*e,-.5*a,0,0,1*r*e,.5*a,2*r*e,0,1*r*e,-.5*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function _w(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,2*e*r,1*a,1.5*e*r,0,2*e*r,-1*a,0,0,2*e*r,1*a,1.5*e*r,0,2*e*r,-1*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function xw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?2:i,o=gs(),u=pn.flatten([o]),s=pn(u.vertices,u.holes,u.dimensions),l=o.map(function(c){return[c[0]*r*e,c[1]*a]}).flat();return{vertices:[].concat(ee(l),ee(l)),dimensions:2,indices:s.map(function(c){return c+o.length}),outLineIndices:s,normals:[].concat(ee(o.map(function(c){return[c[1]*a,c[0]*r*e,1]}).flat()),ee(new Array(o.length*3).fill(0)))}}function bw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=En(n.source)==="object"?n.source.type:n.source,i=En(n.target)==="object"?n.target.type:n.target,a=En(n.source)==="object"?n.source:{},o=a.width,u=o===void 0?r?sv[r]:0:o;a.height;var s=En(n.target)==="object"?n.target:{},l=s.width,c=l===void 0?i?sv[i]:0:l;return s.height,{vertices:[0,zt,1*u].concat(ee(e),[1,zt,-1*c],ee(e),[1,-zt,-1*c],ee(e),[0,-zt,1*u],ee(e),[0,zt,1*u],ee(e),[1,zt,-1*c],ee(e),[1,-zt,-1*c],ee(e),[0,-zt,1*u],ee(e)),outLineIndices:[0,1,2,0,2,3].map(function(f){return f+t}),indices:[4,5,6,4,6,7].map(function(f){return f+t}),normals:[1,-1,1,1,1,1,-1,0,1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],dimensions:2}}function lv(e,t){var n=En(e)==="object"?e.type:e,r=t==="source"?1:-1,i=En(e)==="object"?e:{};switch(n){case"circle":return xw(r,i);case"triangle":return gw(r,i);case"diamond":return yw(r,i);case"rect":return mw(r,i);case"classic":return _w(r,i);case"halfTriangle":return pw(r,i);default:return{vertices:[],indices:[],normals:[],dimensions:2,outLineIndices:[],outLineNormals:[]}}}function Sw(e){var t=e.coordinates.flat(),n=1,r=1;return{vertices:[1,0,0].concat(ee(t),[1,2,-3],ee(t),[1,1,-3],ee(t),[0,1,0],ee(t),[0,0,0],ee(t),[1,0,0],ee(t),[1,2,-3],ee(t),[1,1,-3],ee(t),[0,1,0],ee(t),[0,0,0],ee(t)),normals:[-n,2*r,1,2*r,-r,1,r,-r,1,r,-r,1,-n,-r,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],indices:[0,1,2,0,2,3,0,3,4,5,6,7,5,7,8,5,8,9],size:7}}function Aw(e,t){return t?Ew(e,t):Sw(e)}function Ew(e,t){var n=e.coordinates.flat(),r=t,i=r.target,a=i===void 0?"classic":i,o=r.source,u=o===void 0?"circle":o,s=cv(lv(u,"source"),n,0,0),l=bw(n,s.vertices.length/7,t),c=cv(lv(a,"target"),n,1,s.vertices.length/7+l.vertices.length/7),f={vertices:[].concat(ee(s.vertices),ee(l.vertices),ee(c.vertices)),indices:[].concat(ee(s.outLineIndices),ee(l.outLineIndices),ee(c.outLineIndices),ee(s.indices),ee(l.indices),ee(c.indices)),normals:[].concat(ee(s.normals),ee(l.normals),ee(c.normals)),size:7};return f}function cv(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=[],a=e.vertices,o=e.indices,u=e.dimensions,s=e.outLineIndices,l=0;l<a.length;l+=u)i.push.apply(i,[n,a[l+1],a[l]].concat(ee(t)));return z(z({},e),{},{vertices:i,indices:o.map(function(c){return c+r}),outLineIndices:s.map(function(c){return c+r})})}function Cw(e){var t=ww();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function ww(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Tw=`// #extension GL_OES_standard_derivatives : enable

in vec4 v_color;
out vec4 outputColor;


// line texture

#pragma include "picking"

void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,Mw=`layout(location = 0) in vec3 a_Position;
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
`,kw=function(e){Ee(n,e);var t=Cw(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.gapWidth,o=a===void 0?2:a,u=i.strokeWidth,s=u===void 0?1:u,l=i.strokeOpacity,c=l===void 0?1:l,f={u_gap_width:o,u_stroke_width:s,u_stroke_opacity:c},h=this.getUniformsBufferInfo(f);return h}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"flow_line",vertexShader:Mw,fragmentShader:Tw,inject:this.getInject(),triangulation:Aw,styleOption:this.layer.getLayerConfig().symbol,primitive:L.TRIANGLES,depth:{enable:!1},pick:!1});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0],u[1]]:[u,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Se.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(a,o,u){return[u[3],u[4],u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}})}}]),n}(at);function Iw(e){var t=Lw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Lw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Rw=`#define LineTypeSolid 0.0
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
}`,Pw=`#define LineTypeSolid 0.0
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

`,Fw={solid:0,dash:1},Ow=function(e){Ee(n,e);var t=Iw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=this.layer.getLayerConfig(),x=y.animateOption;h.length===2&&h.push(0,0),this.rendererService.getDirty()&&this.texture.bind();var b=0,M=[0,0,0,0],T=[0,0,0,0];a&&o&&(M=tt(a),T=tt(o),b=1);var D=this.layer.getLayerAnimateTime();isNaN(D)&&(D=0);var U={u_animate:this.animateOption2Array(x),u_dash_array:h,u_sourceColor:M,u_targetColor:T,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:_,u_line_type:Fw[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:D,u_linearColor:b},I=this.getUniformsBufferInfo(U);return I}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,f.next=3,this.layer.buildLayerModel({moduleName:"lineGreatCircle",vertexShader:Pw,fragmentShader:Rw,triangulation:xl,styleOption:{segmentNumber:s},inject:this.getInject(),depth:{enable:!1}});case 3:return l=f.sent,f.abrupt("return",[l]);case 5:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Se.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at);function Dw(e){var t=Nw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Nw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Bw=`// #extension GL_OES_standard_derivatives : enable
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
`,Uw=`
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
`,Hg=function(e){Ee(n,e);var t=Dw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"textureEventFlag",!1),S(R(r),"texture",r.createTexture2D({data:new Uint8Array([0,0,0,0]),width:1,height:1})),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.textures.length===0&&(r.textures=[r.texture]),r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128})}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5,0,0]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.vertexHeightScale,_=m===void 0?20:m,y=i.strokeWidth,x=y===void 0?0:y,b=i.raisingHeight,M=b===void 0?0:b,T=i.heightfixed,D=T===void 0?!1:T,U=i.linearDir,I=U===void 0?Jd.VERTICAL:U,w=i.blur,k=w===void 0?[1,1,1,0]:w,P=h;c!=="dash"&&(P=[0,0,0,0]),P.length===2&&P.push(0,0),this.rendererService.getDirty()&&this.texture&&this.texture.bind();var B=this.layer.getLayerConfig(),K=B.animateOption,ce=0,ve=[0,0,0,0],ye=[0,0,0,0];a&&o&&(ve=tt(a),ye=tt(o),ce=1);var H={u_animate:this.animateOption2Array(K),u_dash_array:P,u_blur:k,u_sourceColor:ve,u_targetColor:ye,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:g,u_heightfixed:Number(D),u_vertexScale:_,u_raisingHeight:Number(M),u_strokeWidth:x,u_textureBlend:s===BC.NORMAL?0:1,u_line_texture:v?1:0,u_linearDir:I===Jd.VERTICAL?1:0,u_linearColor:ce,u_time:this.layer.getLayerAnimateTime()||0},V=this.getUniformsBufferInfo(H);return V}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.textureEventFlag||(this.textureEventFlag=!0,this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture)),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!1:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=Gu,p.next=5,this.layer.buildLayerModel({moduleName:"line"+h,vertexShader:f,fragmentShader:c,triangulation:Gu,inject:this.getInject(),depth:{enable:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:Bw,vert:Uw,type:""}}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distanceAndIndex",type:Se.Attribute,descriptor:{name:"a_DistanceAndIndexAndMiter",shaderLocation:10,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l,c,f){return f===void 0?[s[3],10,s[4]]:[s[3],f,s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal_total_distance",type:Se.Attribute,descriptor:{name:"a_Normal_Total_Distance",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(o,u,s,l,c){return[].concat(ee(c),[s[5]])}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at);function zw(e){var t=$w();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function $w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Vw=`
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
`,jw=`layout(location = 0) in vec3 a_Position;
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
`,Hw=function(e){Ee(n,e);var t=zw(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.lineType,s=u===void 0?"solid":u,l=i.dashArray,c=l===void 0?[10,5,0,0]:l,f=i.vertexHeightScale,h=f===void 0?20:f,d=c;s!=="dash"&&(d=[0,0,0,0]),d.length===2&&d.push(0,0);var v=0,p=[0,0,0,0],g=[0,0,0,0];a&&o&&(p=tt(a),g=tt(o),v=1);var m={u_sourceColor:p,u_targetColor:g,u_dash_array:d,u_vertexScale:h,u_linearColor:v},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:Vw,vert:jw,type:"lineSimpleNormal"}}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return this.initUniformsBuffer(),o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,triangulation:jC,inject:this.getInject(),primitive:L.LINES,depth:{enable:!1},pick:!1});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"sizeDistanceAndTotalDistance",type:Se.Attribute,descriptor:{name:"a_SizeDistanceAndTotalDistance",shaderLocation:Ie.SIZE,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(a,o,u){var s=a.size,l=s===void 0?1:s,c=Array.isArray(l)?[l[0],l[1]]:[l,0];return[c[0],c[1],u[3],u[5]]}}})}}]),n}(at);function Gw(e){var t=Ww();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Ww(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Yw=`#define Animate 0.0
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
`,Xw=`#define Animate 0.0
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
`,Zw=function(e){Ee(n,e);var t=Gw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.NEAREST,min:L.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.heightfixed,c=l===void 0?!1:l,f=i.lineTexture,h=f===void 0?!1:f,d=i.iconStep,v=d===void 0?100:d,p=i.iconStepCount,g=p===void 0?1:p,m=this.layer.getLayerConfig(),_=m.animateOption;this.rendererService.getDirty()&&this.texture.bind();var y=0,x=[0,0,0,0],b=[0,0,0,0];a&&o&&(x=tt(a),b=tt(o),y=1);var M={u_animate:this.animateOption2Array(_),u_sourceColor:x,u_targetColor:b,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:v,u_heightfixed:Number(c),u_linearColor:y,u_line_texture:h?1:0,u_textureBlend:s==="normal"?0:1,u_iconStepCount:g,u_time:this.layer.getLayerAnimateTime()||0},T=this.getUniformsBufferInfo(M);return T}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"lineWall",vertexShader:Xw,fragmentShader:Yw,triangulation:VC,inject:this.getInject(),depth:{enable:!1},blend:this.getBlend()});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distance",type:Se.Attribute,descriptor:{name:"a_Distance",shaderLocation:15,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[3]]}}}),this.styleAttributeService.registerStyleAttribute({name:"total_distance",type:Se.Attribute,descriptor:{name:"a_Total_Distance",shaderLocation:11,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[5]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l,c){return c}}}),this.styleAttributeService.registerStyleAttribute({name:"miter",type:Se.Attribute,descriptor:{name:"a_Miter",shaderLocation:10,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o,u,s){return[s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at),qw={arc:lw,arc3d:uv,greatcircle:Ow,wall:Zw,line:Hg,simple:Hw,flowline:kw,earthArc3d:uv};function Qw(e){var t=Jw();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function Jw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Gg=function(e){Ee(n,e);var t=Qw(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","LineLayer"),S(R(r),"enableShaderEncodeStyles",["stroke","offsets","opacity","thetaOffset"]),S(R(r),"arrowInsertCount",0),S(R(r),"defaultSourceConfig",{data:[{lng1:100,lat1:30,lng2:130,lat2:30}],options:{parser:{type:"json",x:"lng1",y:"lat1",x1:"lng2",y1:"lat2"}}}),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new qw[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={line:{},linearline:{},simple:{},wall:{},arc3d:{blend:"additive"},arc:{blend:"additive"},greatcircle:{blend:"additive"},tileLine:{},earthArc3d:{},flowline:{},arrow:{}};return a[i]}},{key:"getModelType",value:function(){var i;if(this.layerType)return this.layerType;var a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o||"line"}},{key:"processData",value:function(i){if(this.getModelType()!=="simple")return i;var a=[];return i.map(function(o){if(Array.isArray(o.coordinates)&&Array.isArray(o.coordinates[0])&&Array.isArray(o.coordinates[0][0])){var u=z({},o);o.coordinates.map(function(s){a.push(z(z({},u),{},{coordinates:s}))})}else a.push(o)}),a}}]),n}(Kr);function Kw(e){var t=eT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function eT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var tT=`
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
`,nT=`
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
`;function fv(e){var t=e.coordinates;return{vertices:ee(t),indices:[0],size:t.length}}var rT=function(e){Ee(n,e);var t=Kw(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.strokeOpacity,u=o===void 0?1:o,s=i.strokeWidth,l=s===void 0?0:s,c=i.stroke,f=c===void 0?"#fff":c,h={u_stroke_color:tt(f),u_additive:a==="additive"?1:0,u_stroke_opacity:u,u_stroke_width:l},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=fv,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointSimple",vertexShader:nT,fragmentShader:tT,inject:this.getInject(),triangulation:fv,depth:{enable:!1},primitive:L.POINTS});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(at);function iT(e){var t=aT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function aT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var oT=`precision highp float;
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
`,uT=`precision highp float;

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
`,sT=Ke.isNumber,lT=function(e){Ee(n,e);var t=iT(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"raiseCount",0),S(R(r),"raiseRepeat",0),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.opacity,s=u===void 0?1:u,l=i.sourceColor,c=i.targetColor,f=i.pickLight,h=f===void 0?!1:f,d=i.heightfixed,v=d===void 0?!0:d,p=i.opacityLinear,g=p===void 0?{enable:!1,dir:"up"}:p,m=i.lightEnable,_=m===void 0?!0:m,y=0,x=[0,0,0,0],b=[0,0,0,0];if(l&&c&&(x=tt(l),b=tt(c),y=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var M=o.speed,T=M===void 0?.01:M;this.raiseCount+=T,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var D={u_sourceColor:x,u_targetColor:b,u_linearColor:y,u_pickLight:Number(h),u_heightfixed:Number(v),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_opacity:sT(s)?s:1,u_opacitylinear:Number(g.enable),u_opacitylinear_dir:g.dir==="up"?1:0,u_lightEnable:Number(_)},U=this.getUniformsBufferInfo(D);return U}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption.repeat,s=u===void 0?1:u,this.raiseRepeat=s,f.next=4,this.layer.buildLayerModel({moduleName:"pointEarthExtrude",vertexShader:uT,fragmentShader:oT,triangulation:Vg,depth:{enable:!0},inject:this.getInject(),cull:{enable:!0,face:Qs(this.mapService.version)},blend:this.getBlend()});case 4:return l=f.sent,f.abrupt("return",[l]);case 6:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:Se.Attribute,descriptor:{name:"a_Pos",shaderLocation:15,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=Tn(a.coordinates);return zg([o[0],o[1]])}}})}}]),n}(at);function cT(e){var t=fT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function fT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hT=`in vec4 v_data;
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
`,dT=`layout(location = 0) in vec3 a_Position;
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
}`,vT=function(e){Ee(n,e);var t=cT(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c;this.layer.getLayerConfig();var h={u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_stroke_width:s,u_blur:f},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=iv,s.next=3,this.layer.buildLayerModel({moduleName:"pointEarthFill",vertexShader:dT,fragmentShader:hT,triangulation:iv,inject:this.getInject(),depth:{enable:!0},blend:this.getBlend()});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Se.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Ie.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=Pe(s,3),f=c[0],h=c[1],d=c[2],v=Sn(0,0,1),p=Sn(f,0,d),g=f>=0?Hl(v,p):Math.PI*2-Hl(v,p),m=Math.PI*2-Math.asin(h/100),_=Fr();n0(_,_,g),t0(_,_,m);var y=Sn(1,1,0);_a(y,y,_),Ei(y,y);var x=Sn(-1,1,0);_a(x,x,_),Ei(x,x);var b=Sn(-1,-1,0);_a(b,b,_),Ei(b,b);var M=Sn(1,-1,0);_a(M,M,_),Ei(M,M);var T=[].concat(ee(y),ee(x),ee(b),ee(M)),D=l%4*3;return[T[D],T[D+1],T[D+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Se.Attribute,descriptor:{name:"a_Shape",shaderLocation:Ie.SHAPE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.layer.getLayerConfig().shape2d,c=l.indexOf(s);return[c]}}})}}]),n}(at);function pT(e){var t=gT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function gT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var mT=`
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
`,yT=`#define pi 3.1415926535

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
`,Wg=function(e){Ee(n,e);var t=pT(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"raiseCount",0),S(R(r),"raiseRepeat",0),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.sourceColor,s=i.targetColor,l=i.pickLight,c=l===void 0?!1:l,f=i.heightfixed,h=f===void 0?!1:f,d=i.opacityLinear,v=d===void 0?{enable:!1,dir:"up"}:d,p=i.lightEnable,g=p===void 0?!0:p,m=0,_=[0,0,0,0],y=[0,0,0,0];if(u&&s&&(_=tt(u),y=tt(s),m=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var x=o.speed,b=x===void 0?.01:x;this.raiseCount+=b,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var M={u_pickLight:Number(c),u_heightfixed:Number(h),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_linearColor:m,u_sourceColor:_,u_targetColor:y,u_opacitylinear:Number(v.enable),u_opacitylinear_dir:v.dir==="up"?1:0,u_lightEnable:Number(g)},T=this.getUniformsBufferInfo(M);return T}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!0:u,l=o.animateOption.repeat,c=l===void 0?1:l,this.raiseRepeat=c,this.initUniformsBuffer(),d.next=5,this.layer.buildLayerModel({moduleName:"pointExtrude",vertexShader:yT,fragmentShader:mT,triangulation:Vg,inject:this.getInject(),cull:{enable:!0,face:Qs(this.mapService.version)},depth:{enable:s}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Se.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Ie.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a){var o=Tn(a.coordinates);return[o[0],o[1],0]}}})}}]),n}(at);function _T(e){var t=xT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function xT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var bT=`
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
`,ST=`layout(location = 0) in vec3 a_Position;
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
`,Yg=function(e){Ee(n,e);var t=_T(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c,h=i.raisingHeight,d=h===void 0?0:h,v=i.heightfixed,p=v===void 0?!1:v,g=i.unit,m=g===void 0?"pixel":g,_=this.getAnimateUniforms().u_time;isNaN(_)&&(_=-1);var y={u_blur_height_fixed:[f,Number(d),Number(p)],u_stroke_width:s,u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_size_unit:yl[m],u_time:_,u_animate:this.getAnimateUniforms().u_animate},x=this.getUniformsBufferInfo(y);return x}},{key:"getAnimateUniforms",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1}:a;return{u_animate:this.animateOption2Array(o),u_time:this.layer.getLayerAnimateTime()}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Na)}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption,s=u===void 0?{enable:!1}:u,l=this.getShaders(s),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=Na,this.initUniformsBuffer(),p.next=6,this.layer.buildLayerModel({moduleName:h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:Na,depth:{enable:!1}});case 6:return d=p.sent,p.abrupt("return",[d]);case 8:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(i){return{frag:bT,vert:ST,type:"pointFill"}}},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig().shape2d;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Se.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Ie.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Se.Attribute,descriptor:{name:"a_Shape",shaderLocation:Ie.SHAPE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.indexOf(s);return[l]}}})}}]),n}(at);function AT(e){var t=ET();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function ET(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var CT=`in vec2 v_uv;// 本身的 uv 坐标
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
`,wT=`layout(location = 0) in vec3 a_Position;
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
`,TT=function(e){Ee(n,e);var t=AT(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"meter2coord",1),S(R(r),"isMeter",!1),S(R(r),"radian",0),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),r.layerService.throttleRenderLayers();return}r.texture=u({data:r.iconService.getCanvas(),mag:L.LINEAR,min:L.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128,mipmap:!0}),r.textures=[r.texture]}),r}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l=i.unit,c=l===void 0?"pixel":l;this.rendererService.getDirty()&&this.texture.bind();var f={u_textSize:[1024,this.iconService.canvasHeight||128],u_heightfixed:Number(s),u_raisingHeight:Number(o),u_size_unit:yl[c]},h=this.getUniformsBufferInfo(f);return h}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Ja)}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointFillImage",vertexShader:wT,fragmentShader:CT,triangulation:Ja,depth:{enable:!1},inject:this.getInject(),cull:{enable:!0,face:Qs(this.mapService.version)}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;this.iconService.off("imageUpdate",this.updateTexture),(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_Uv",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Se.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Ie.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}})}}]),n}(at);function MT(e){var t=kT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function kT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var IT=`layout(std140) uniform commonUniforms {
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
`,LT=`layout(location = 0) in vec3 a_Position;
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
`,Xg=function(e){Ee(n,e);var t=MT(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),setTimeout(function(){r.layerService.throttleRenderLayers()});return}r.texture=u({data:r.iconService.getCanvas(),mag:L.LINEAR,min:L.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128,mipmap:!0})}),r}return ae(n,[{key:"getUninforms",value:function(){this.rendererService.getDirty()&&this.texture.bind();var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l={u_textSize:[1024,this.iconService.canvasHeight||128],u_raisingHeight:Number(o),u_heightfixed:Number(s),u_texture:this.texture};this.textures=[this.texture];var c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointImage",vertexShader:LT,fragmentShader:IT,triangulation:$C,inject:this.getInject(),depth:{enable:!1},primitive:L.POINTS});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_Uv",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}})}}]),n}(at);function RT(e){var t=PT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function PT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var FT=`in vec4 v_color;
out vec4 outputColor;
void main() {
  outputColor = v_color;
}`,OT=`layout(location = 0) in vec3 a_Position;
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
`;function hv(e){var t=e.coordinates;return{vertices:ee(t),indices:[0],size:t.length}}var Zg=function(e){Ee(n,e);var t=RT(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i={u_size_scale:.5},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=hv,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointNormal",vertexShader:OT,fragmentShader:FT,triangulation:hv,inject:this.getInject(),depth:{enable:!1},primitive:L.POINTS,pick:!1});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(at);function DT(e){var t=NT();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function NT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var BT=`
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
`,UT=`layout(location = 0) in vec3 a_Position;
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
`,zT=function(e){Ee(n,e);var t=DT(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.speed,u=o===void 0?1:o,s=i.unit,l=s===void 0?"pixel":s,c={u_additive:a==="additive"?1:0,u_size_unit:yl[l],u_speed:u,u_time:this.layer.getLayerAnimateTime()},f=this.getUniformsBufferInfo(c);return f}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Ja)}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointRadar",vertexShader:UT,fragmentShader:BT,triangulation:Ja,inject:this.getInject(),depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Se.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Ie.EXTRUDE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s){var l=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],c=s%4*3;return[l[c],l[c+1],l[c+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{shaderLocation:Ie.SIZE,name:"a_Size",buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?5:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(at);function $T(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=VT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function VT(e,t){if(e){if(typeof e=="string")return dv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dv(e,t)}}function dv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var jT=function(){function e(t,n,r){oe(this,e),S(this,"boxCells",[]);var i=this.boxCells;this.xCellCount=Math.ceil(t/r),this.yCellCount=Math.ceil(n/r);for(var a=0;a<this.xCellCount*this.yCellCount;a++)i.push([]);this.boxKeys=[],this.bboxes=[],this.width=t,this.height=n,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/n,this.boxUid=0}return ae(e,[{key:"insert",value:function(n,r,i,a,o){this.forEachCell(r,i,a,o,this.insertBoxCell,this.boxUid++),this.boxKeys.push(n),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(a),this.bboxes.push(o)}},{key:"query",value:function(n,r,i,a,o){return this.queryHitTest(n,r,i,a,!1,o)}},{key:"hitTest",value:function(n,r,i,a,o){return this.queryHitTest(n,r,i,a,!0,o)}},{key:"insertBoxCell",value:function(n,r,i,a,o,u){this.boxCells[o].push(u)}},{key:"queryHitTest",value:function(n,r,i,a,o,u){if(i<0||n>this.width||a<0||r>this.height)return o?!1:[];var s=[];if(n<=0&&r<=0&&this.width<=i&&this.height<=a){if(o)return!0;for(var l=0;l<this.boxKeys.length;l++)s.push({key:this.boxKeys[l],x1:this.bboxes[l*4],y1:this.bboxes[l*4+1],x2:this.bboxes[l*4+2],y2:this.bboxes[l*4+3]});return u?s.filter(u):s}var c={hitTest:o,seenUids:{box:{},circle:{}}};return this.forEachCell(n,r,i,a,this.queryCell,s,c,u),o?s.length>0:s}},{key:"queryCell",value:function(n,r,i,a,o,u,s,l){var c=s.seenUids,f=this.boxCells[o];if(f!==null){var h=this.bboxes,d=$T(f),v;try{for(d.s();!(v=d.n()).done;){var p=v.value;if(!c.box[p]){c.box[p]=!0;var g=p*4;if(n<=h[g+2]&&r<=h[g+3]&&i>=h[g+0]&&a>=h[g+1]&&(!l||l(this.boxKeys[p]))){if(s.hitTest)return u.push(!0),!0;u.push({key:this.boxKeys[p],x1:h[g],y1:h[g+1],x2:h[g+2],y2:h[g+3]})}}}}catch(m){d.e(m)}finally{d.f()}}return!1}},{key:"forEachCell",value:function(n,r,i,a,o,u,s,l){for(var c=this.convertToXCellCoord(n),f=this.convertToYCellCoord(r),h=this.convertToXCellCoord(i),d=this.convertToYCellCoord(a),v=c;v<=h;v++)for(var p=f;p<=d;p++){var g=this.xCellCount*p+v;if(o.call(this,n,r,i,a,g,u,s,l))return}}},{key:"convertToXCellCoord",value:function(n){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(n*this.xScale)))}},{key:"convertToYCellCoord",value:function(n){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(n*this.yScale)))}}]),e}();const HT=jT;var GT=function(){function e(t,n){oe(this,e),S(this,"viewportPadding",100),this.width=t,this.height=n,this.viewportPadding=Math.max(t,n),this.grid=new HT(t+this.viewportPadding,n+this.viewportPadding,25),this.screenRightBoundary=t+this.viewportPadding,this.screenBottomBoundary=n+this.viewportPadding,this.gridRightBoundary=t+2*this.viewportPadding,this.gridBottomBoundary=n+2*this.viewportPadding}return ae(e,[{key:"placeCollisionBox",value:function(n){var r=n.x1+n.anchorPointX+this.viewportPadding,i=n.y1+n.anchorPointY+this.viewportPadding,a=n.x2+n.anchorPointX+this.viewportPadding,o=n.y2+n.anchorPointY+this.viewportPadding;return!this.isInsideGrid(r,i,a,o)||this.grid.hitTest(r,i,a,o)?{box:[]}:{box:[r,i,a,o]}}},{key:"insertCollisionBox",value:function(n,r){var i={featureIndex:r};this.grid.insert(i,n[0],n[1],n[2],n[3])}},{key:"project",value:function(n,r,i){var a=g1(r,i,0,1),o=l0(),u=Jp.apply(p1,ee(n));return c0(o,a,u),{x:(o[0]/o[3]+1)/2*this.width+this.viewportPadding,y:(-o[1]/o[3]+1)/2*this.height+this.viewportPadding}}},{key:"isInsideGrid",value:function(n,r,i,a){return i>=0&&n<this.gridRightBoundary&&a>=0&&r<this.gridBottomBoundary}}]),e}();function qg(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=WT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function WT(e,t){if(e){if(typeof e=="string")return vv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vv(e,t)}}function vv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qg(e){var t=.5,n=.5;switch(e){case"right":case"top-right":case"bottom-right":t=1;break;case"left":case"top-left":case"bottom-left":t=0;break;default:t=.5}switch(e){case"bottom":case"bottom-right":case"bottom-left":n=1;break;case"top":case"top-right":case"top-left":n=0;break;default:n=.5}return{horizontalAlign:t,verticalAlign:n}}function Jg(e,t,n,r,i){if(i){var a=e[r],o=a.glyph;if(o)for(var u=t[o].advance*a.scale,s=(e[r].x+u)*i,l=n;l<=r;l++)e[l].x-=s}}function Kg(e,t,n,r,i,a,o){var u=(t-n)*i,s=(-r*o+.5)*a,l=qg(e),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.x+=u,f.y+=s}}catch(h){l.e(h)}finally{l.f()}}function YT(e,t,n,r,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;n.forEach(function(_){if(_.split("").forEach(function(x){var b=t[x],M=0;b&&(f.push({glyph:x,x:s,y:l+M,vertical:!1,scale:1,metrics:b}),s+=b.advance+o)}),f.length!==d){var y=s-o;c=Math.max(y,c),Jg(f,t,d,f.length-1,h)}s=0,l-=r+5});var v=Qg(i),p=v.horizontalAlign,g=v.verticalAlign;Kg(f,h,p,g,c,r,n.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function XT(e,t,n,r,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;n.forEach(function(_){var y=t[_],x=0;if(y&&(f.push({glyph:_,x:y.advance/2,y:l+x,vertical:!1,scale:1,metrics:y}),s+=y.advance+o),f.length!==d){var b=s-o;c=Math.max(b,c),Jg(f,t,d,f.length-1,h)}s=0,l-=r+5});var v=Qg(i),p=v.horizontalAlign,g=v.verticalAlign;Kg(f,h,p,g,c,r,n.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function ZT(e,t,n,r,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:[0,0],u=arguments.length>7?arguments[7]:void 0,s=e.split(`
`),l=[],c={positionedGlyphs:l,top:o[1],bottom:o[1],left:o[0],right:o[0],lineCount:s.length,text:e};return u?XT(c,t,s,n,r,i,a):YT(c,t,s,n,r,i,a),l.length?c:!1}function qT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],n=arguments.length>2?arguments[2]:void 0,r=e.positionedGlyphs,i=r===void 0?[]:r,a=[],o=qg(i),u;try{for(o.s();!(u=o.n()).done;){var s=u.value,l=s.metrics,c=4,f=l.advance*s.scale/2,h=n?[s.x+f,s.y]:[0,0],d=n?[0,0]:[s.x+f+t[0],s.y+t[1]],v=(0-c)*s.scale-f+d[0],p=(0-c)*s.scale+d[1],g=v+l.width*s.scale,m=p+l.height*s.scale,_={x:v,y:p},y={x:g,y:p},x={x:v,y:m},b={x:g,y:m};a.push({tl:_,tr:y,bl:x,br:b,tex:l,glyphOffset:h})}}catch(M){o.e(M)}finally{o.f()}return a}function QT(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=JT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function JT(e,t){if(e){if(typeof e=="string")return pv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pv(e,t)}}function pv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function KT(e){var t=e4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function e4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var gv=`#define SDF_PX 8.0
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
`,mv=`#define SDF_PX 8.0
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
`,mi=Ke.isEqual;function yv(e){var t=this,n=e.id,r=[],i=[];if(!t.glyphInfoMap||!t.glyphInfoMap[n])return{vertices:[],indices:[],size:7};var a=t.glyphInfoMap[n].centroid,o=a.length===2?[a[0],a[1],0]:a;return t.glyphInfoMap[n].glyphQuads.forEach(function(u,s){r.push.apply(r,ee(o).concat([u.tex.x,u.tex.y+u.tex.height,u.tl.x,u.tl.y],ee(o),[u.tex.x+u.tex.width,u.tex.y+u.tex.height,u.tr.x,u.tr.y],ee(o),[u.tex.x+u.tex.width,u.tex.y,u.br.x,u.br.y],ee(o),[u.tex.x,u.tex.y,u.bl.x,u.bl.y])),i.push(0+s*4,1+s*4,2+s*4,2+s*4,3+s*4,0+s*4)}),{vertices:r,indices:i,size:7}}var em=function(e){Ee(n,e);var t=KT(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"glyphInfoMap",{}),S(R(r),"currentZoom",-1),S(R(r),"textureHeight",0),S(R(r),"textCount",0),S(R(r),"preTextStyle",{}),S(R(r),"mapping",Y(C.mark(function u(){return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return r.initGlyph(),r.updateTexture(),l.next=4,r.reBuildModel();case 4:case"end":return l.stop()}},u)}))),r}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z(z({},i.uniformsOption),a.uniformsOption),{u_sdf_map:this.textures[0]})}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.stroke,o=a===void 0?"#fff":a,u=i.strokeWidth,s=u===void 0?0:u,l=i.halo,c=l===void 0?.5:l,f=i.gamma,h=f===void 0?2:f,d=i.raisingHeight,v=d===void 0?0:d,p=this.getFontServiceMapping(),g=this.getFontServiceCanvas();p&&Object.keys(p).length!==this.textCount&&g&&(this.updateTexture(),this.textCount=Object.keys(p).length),this.preTextStyle=this.getTextStyle();var m={u_stroke_color:tt(o),u_sdf_map_size:[(g==null?void 0:g.width)||1,(g==null?void 0:g.height)||1],u_raisingHeight:Number(v),u_stroke_width:s,u_gamma_scale:h,u_halo_blur:c},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.bindEvent(),this.extent=this.textExtent(),this.rawEncodeData=this.layer.getEncodedData(),this.preTextStyle=this.getTextStyle(),this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 6:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.textAllowOverlap,s=u===void 0?!1:u,this.initGlyph(),this.updateTexture(),s||this.filterGlyphs(),f.next=6,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:mv,fragmentShader:gv,inject:this.getInject(),triangulation:yv.bind(this),depth:{enable:!1}});case 6:return l=f.sent,f.abrupt("return",[l]);case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"needUpdate",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d,v,p,g,m;return C.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(o=this.getTextStyle(),u=o.textAllowOverlap,s=u===void 0?!1:u,l=o.textAnchor,c=l===void 0?"center":l,f=o.textOffset,h=o.padding,d=o.fontFamily,v=o.fontWeight,!(!mi(h,this.preTextStyle.padding)||!mi(f,this.preTextStyle.textOffset)||!mi(c,this.preTextStyle.textAnchor)||!mi(d,this.preTextStyle.fontFamily)||!mi(v,this.preTextStyle.fontWeight))){y.next=5;break}return y.next=4,this.mapping();case 4:return y.abrupt("return",!0);case 5:if(!s){y.next=7;break}return y.abrupt("return",!1);case 7:if(p=this.mapService.getZoom(),g=this.mapService.getBounds(),m=M0(this.extent,g),!(Math.abs(this.currentZoom-p)>.5||!m||s!==this.preTextStyle.textAllowOverlap)){y.next=14;break}return y.next=13,this.reBuildModel();case 13:return y.abrupt("return",!0);case 14:return y.abrupt("return",!1);case 15:case"end":return y.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.layer.off("remapping",this.mapping)}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"textOffsets",type:Se.Attribute,descriptor:{shaderLocation:10,name:"a_textOffsets",buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"textUv",type:Se.Attribute,descriptor:{name:"a_tex",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?12:o;return Array.isArray(u)?[u[0]]:[u]}}})}},{key:"bindEvent",value:function(){this.layer.isTileLayer||this.layer.on("remapping",this.mapping)}},{key:"textExtent",value:function(){var i=this.mapService.getBounds();return Ks(i,.5)}},{key:"initTextFont",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f=f.toString();var h=QT(f),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;s.indexOf(v)===-1&&s.push(v)}}catch(p){h.e(p)}finally{h.f()}}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!1})}},{key:"initIconFontTex",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f="".concat(f),s.indexOf(f)===-1&&s.push(f)}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!0})}},{key:"getTextStyle",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u,l=i.textAllowOverlap,c=l===void 0?!1:l,f=i.padding,h=f===void 0?[0,0]:f,d=i.textAnchor,v=d===void 0?"center":d,p=i.textOffset,g=p===void 0?[0,0]:p,m=i.opacity,_=m===void 0?1:m,y=i.strokeOpacity,x=y===void 0?1:y,b=i.strokeWidth,M=b===void 0?0:b,T=i.stroke,D=T===void 0?"#000":T;return{fontWeight:o,fontFamily:s,textAllowOverlap:c,padding:h,textAnchor:v,textOffset:g,opacity:_,strokeOpacity:x,strokeWidth:M,stroke:D}}},{key:"generateGlyphLayout",value:function(i){var a=this,o=this.getFontServiceMapping(),u=this.layer.getLayerConfig(),s=u.spacing,l=s===void 0?2:s,c=u.textAnchor,f=c===void 0?"center":c,h=u.textOffset,d=this.rawEncodeData;this.glyphInfo=d.map(function(v){var p=v.shape,g=p===void 0?"":p,m=v.id,_=v.size,y=_===void 0?1:_,x=v.textOffset?v.textOffset:h||[0,0],b=v.textAnchor?v.textAnchor:f||"center",M=ZT(g.toString(),o,y,b,"left",l,x,i),T=qT(M,x,!1);return v.shaping=M,v.glyphQuads=T,v.centroid=Tn(v.coordinates),v.originCentroid=v.version==="GAODE2.x"?Tn(v.originCoordinates):v.originCentroid=v.centroid,a.glyphInfoMap[m]={shaping:M,glyphQuads:T,centroid:Tn(v.coordinates)},v})}},{key:"getFontServiceMapping",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getMappingByKey("".concat(s,"_").concat(o))}},{key:"getFontServiceCanvas",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getCanvasByKey("".concat(s,"_").concat(o))}},{key:"filterGlyphs",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.padding,u=o===void 0?[0,0]:o,s=a.textAllowOverlap,l=s===void 0?!1:s;if(!l){this.glyphInfoMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.textExtent();var c=this.rendererService.getViewportSize(),f=c.width,h=c.height,d=new GT(f,h),v=this.glyphInfo.filter(function(p){var g=p.shaping,m=p.id,_=m===void 0?0:m,y=p.version==="GAODE2.x"?p.originCentroid:p.centroid,x=p.size,b=x/16,M=i.mapService.lngLatToContainer(y),T=d.placeCollisionBox({x1:g.left*b-u[0],x2:g.right*b+u[0],y1:g.top*b-u[1],y2:g.bottom*b+u[1],anchorPointX:M.x,anchorPointY:M.y}),D=T.box;return D&&D.length?(d.insertCollisionBox(D,_),!0):!1});v.forEach(function(p){i.glyphInfoMap[p.id]=p})}}},{key:"initGlyph",value:function(){var i=this.layer.getLayerConfig(),a=i.iconfont,o=a===void 0?!1:a;o?this.initIconFontTex():this.initTextFont(),this.generateGlyphLayout(o)}},{key:"updateTexture",value:function(){var i=this.rendererService.createTexture2D,a=this.getFontServiceCanvas();this.textureHeight=a.height,this.texture&&this.texture.destroy(),this.texture=i({data:a,mag:L.LINEAR,min:L.LINEAR,width:a.width,height:a.height}),this.textures=[this.texture]}},{key:"reBuildModel",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.filterGlyphs(),s.next=3,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:mv,fragmentShader:gv,triangulation:yv.bind(this),inject:this.getInject(),depth:{enable:!1}});case 3:o=s.sent,this.layer.models=[o];case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()}]),n}(at),t4={fillImage:TT,fill:Yg,radar:zT,image:Xg,normal:Zg,simplePoint:rT,extrude:Wg,text:em,earthFill:vT,earthExtrude:lT};function n4(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r4(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function r4(e,t){if(e){if(typeof e=="string")return _v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _v(e,t)}}function _v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i4(e){var t=a4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function a4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ms=function(e){Ee(n,e);var t=i4(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","PointLayer"),S(R(r),"enableShaderEncodeStyles",["stroke","offsets","opacity","rotation"]),S(R(r),"enableDataEncodeStyles",["textOffset","textAnchor"]),S(R(r),"defaultSourceConfig",{data:[],options:{parser:{type:"json",x:"lng",y:"lat"}}}),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel&&this.layerModel.clearModels(),this.layerModel=new t4[o](this),s.next=5,this.initLayerModels();case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelTypeWillEmptyData",value:function(){if(this.shapeOption){var i=this.shapeOption,a=i.field,o=i.values,u=this.getLayerConfig(),s=u.shape2d,l=this.iconService.getIconMap();if(a&&(s==null?void 0:s.indexOf(a))!==-1)return"fill";if(o==="text")return"text";if(o&&o instanceof Array){var c=n4(o),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;if(typeof h=="string"&&l.hasOwnProperty(h))return"image"}}catch(d){c.e(d)}finally{c.f()}}}return"normal"}},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={fillImage:{},normal:{blend:"additive"},radar:{},simplePoint:{},fill:{blend:"normal"},extrude:{},image:{},text:{blend:"normal"},tile:{},tileText:{},earthFill:{},earthExtrude:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=a.billboard,l=s===void 0?!0:s,c=this.iconService.getIconMap(),f=i.find(function(d){return d.hasOwnProperty("shape")});if(f){var h=f.shape;return h==="dot"?"normal":h==="simple"?"simplePoint":h==="radar"?"radar":this.layerType==="fillImage"||l===!1?"fillImage":(o==null?void 0:o.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthFill":"fill":(u==null?void 0:u.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthExtrude":"extrude":c.hasOwnProperty(h)?"image":"text"}else return this.getModelTypeWillEmptyData()}}]),n}(Kr);function o4(e){return ys.apply(this,arguments)}function ys(){return ys=Y(C.mark(function e(t){var n,r,i;return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!window.createImageBitmap){o.next=14;break}return o.next=3,fetch(t);case 3:return n=o.sent,o.t0=createImageBitmap,o.next=7,n.blob();case 7:return o.t1=o.sent,o.next=10,(0,o.t0)(o.t1);case 10:return r=o.sent,o.abrupt("return",r);case 14:return i=new window.Image,o.abrupt("return",new Promise(function(u){i.onload=function(){return u(i)},i.src=t,i.crossOrigin="Anonymous"}));case 16:case"end":return o.stop()}},e)})),ys.apply(this,arguments)}function u4(e){var t=s4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function s4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var l4=`layout(std140) uniform commonUniforms {
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
`,c4=`layout(location = 0) in vec3 a_Position;
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
`,f4=`uniform sampler2D u_texture;

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
`,h4=`layout(location = 0) in vec3 a_Position;
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
`,d4=`
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
`,v4=`layout(location = 0) in vec3 a_Position;
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
`,p4=function(e){Ee(n,e);var t=u4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.mapTexture,o=i.heightfixed,u=o===void 0?!1:o,s=i.raisingHeight,l=s===void 0?0:s,c=i.topsurface,f=c===void 0?!0:c,h=i.sidesurface,d=h===void 0?!0:h,v=i.sourceColor,p=i.targetColor,g=0,m=[1,1,1,1],_=[1,1,1,1];v&&p&&(m=tt(v),_=tt(p),g=1);var y={u_sourceColor:m,u_targetColor:_,u_linearColor:g,u_topsurface:Number(f),u_sidesurface:Number(d),u_heightfixed:Number(u),u_raisingHeight:Number(l)};a&&this.texture&&(y.u_texture=this.texture,this.textures=[this.texture]);var x=this.getUniformsBufferInfo(y);return x}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,depth:{enable:!0},inject:this.getInject(),triangulation:jg});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){var i=this.layer.getLayerConfig(),a=i.pickLight,o=i.mapTexture;return o?{frag:f4,vert:h4,type:"polygonExtrudeTexture"}:a?{frag:d4,vert:v4,type:"polygonExtrudePickLight"}:{frag:l4,vert:c4,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.textures=[]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=i,o=this.layer.coordCenter||this.layer.getSource().center,u=a[2]-a[0],s=a[3]-a[1];if(this.mapService.version==="GAODE2.x"){var l=this.mapService.coordToAMap2RelativeCoordinates([i[0],i[1]],o),c=Pe(l,2),f=c[0],h=c[1],d=this.mapService.coordToAMap2RelativeCoordinates([i[2],i[3]],o),v=Pe(d,2),p=v[0],g=v[1];u=p-f,s=g-h,a=[f,h,p,g]}this.styleAttributeService.registerStyleAttribute({name:"uvs",type:Se.Attribute,descriptor:{name:"a_uvs",shaderLocation:Ie.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(_,y,x){var b=x[0],M=x[1];return[(b-a[0])/u,(M-a[1])/s,x[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(_,y,x,b,M){return M}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(_){var y=_.size,x=y===void 0?10:y;return Array.isArray(x)?[x[0]]:[x]}}})}},{key:"loadTexture",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.layer.getLayerConfig(),u=o.mapTexture,s=this.rendererService.createTexture2D,this.texture=s({height:1,width:1}),!u){f.next=8;break}return f.next=6,o4(u);case 6:l=f.sent,this.texture=s({data:l,width:l.width,height:l.height,wrapS:L.CLAMP_TO_EDGE,wrapT:L.CLAMP_TO_EDGE,min:L.LINEAR,mag:L.LINEAR});case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()}]),n}(at);function g4(e){var t=m4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function m4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var y4=`
in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {

  outputColor = v_Color;
  outputColor = filterColor(outputColor);
}
`,_4=`layout(location = 0) in vec3 a_Position;
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
`,x4=function(e){Ee(n,e);var t=g4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i={},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:jg,depth:{enable:!0}});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:y4,vert:_4,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Se.Attribute,descriptor:{name:"a_Normal",shaderLocation:Ie.NORMAL,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Se.Attribute,descriptor:{name:"a_Size",shaderLocation:Ie.SIZE,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?10:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(at);function b4(e){var t=S4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function S4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var A4=`in vec4 v_color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,E4=`
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
`,C4=`layout(location = 0) in vec3 a_Position;
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
}`,w4=`layout(location = 0) in vec3 a_Position;
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

`,T4=function(e){Ee(n,e);var t=b4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.opacityLinear,s=u===void 0?{enable:!1,dir:"in"}:u,l={u_raisingHeight:Number(o),u_opacitylinear:Number(s.enable),u_dir:s.dir==="in"?1:0},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.getModelParams(),u=o.frag,s=o.vert,l=o.triangulation,c=o.type,this.initUniformsBuffer(),this.layer.triangulation=l,d.next=5,this.layer.buildLayerModel({moduleName:c,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:l,primitive:L.TRIANGLES,depth:{enable:!1}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1,dir:"in"}:a;o.enable&&this.styleAttributeService.registerStyleAttribute({name:"linear",type:Se.Attribute,descriptor:{name:"a_linear",shaderLocation:Ie.LINEAR,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:3,update:function(s,l,c){return[c[3],c[4],c[5]]}}})}},{key:"getModelParams",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1}:a;return o.enable?{frag:E4,vert:C4,type:"polygonLinear",triangulation:GC}:{frag:A4,vert:w4,type:"polygonFill",triangulation:H0}}}]),n}(at);function M4(e){var t=k4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function k4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var I4=`
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
`,L4=`layout(location = 0) in vec3 a_Position;
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

`,R4=function(e){Ee(n,e);var t=M4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.watercolor,o=a===void 0?"#6D99A8":a,u=i.watercolor2,s=u===void 0?"#0F121C":u,l={u_watercolor:tt(o),u_watercolor2:tt(s),u_time:this.layer.getLayerAnimateTime(),u_texture1:this.texture1,u_texture2:this.texture2,u_texture3:this.texture3};this.textures=[this.texture1,this.texture2,this.texture3];var c=this.getUniformsBufferInfo(l);return c}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonOcean",vertexShader:L4,fragmentShader:I4,inject:this.getInject(),triangulation:_l,primitive:L.TRIANGLES,depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a,o;(i=this.texture1)===null||i===void 0||i.destroy(),(a=this.texture2)===null||a===void 0||a.destroy(),(o=this.texture3)===null||o===void 0||o.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Pe(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"oceanUv",type:Se.Attribute,descriptor:{name:"a_uv",shaderLocation:Ie.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Pe(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.rendererService.createTexture2D,o={height:0,width:0};this.texture1=a(o),this.texture2=a(o),this.texture3=a(o),u(function(l){i.texture1=s(l[0]),i.texture2=s(l[1]),i.texture3=s(l[2]),i.layerService.reRender()});function u(l){var c=0,f=[],h=["https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*MJ22QbpuCzIAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*-z2HSIVDsHIAAAAAAAAAAAAAARQnAQ"];h.map(function(d){var v=new Image;v.crossOrigin="",v.src=d,f.push(v),v.onload=function(){c++,c===3&&l(f)}})}function s(l){return a({data:l,width:l.width,height:l.height,wrapS:L.MIRRORED_REPEAT,wrapT:L.MIRRORED_REPEAT,min:L.LINEAR,mag:L.LINEAR})}}}]),n}(at);function P4(e){var t=F4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function F4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var O4=`uniform sampler2D u_texture;
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
`,D4=`layout(location = 0) in vec3 a_Position;
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

`,N4=function(e){Ee(n,e);var t=P4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.speed,o=a===void 0?.5:a,u={u_speed:o,u_time:this.layer.getLayerAnimateTime(),u_texture:this.texture};this.textures=[this.texture];var s=this.getUniformsBufferInfo(u);return s}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonWater",vertexShader:D4,fragmentShader:O4,triangulation:_l,inject:this.getInject(),primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1,diagnosticDerivativeUniformityEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Pe(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"waterUv",type:Se.Attribute,descriptor:{name:"a_uv",shaderLocation:Ie.UV,buffer:{usage:L.STATIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Pe(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.waterTexture,u=this.rendererService.createTexture2D;this.texture=u({height:1,width:1});var s=new Image;s.crossOrigin="",o?s.src=o:s.src="https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ",s.onload=function(){i.texture=u({data:s,width:s.width,height:s.height,wrapS:L.MIRRORED_REPEAT,wrapT:L.MIRRORED_REPEAT,min:L.LINEAR,mag:L.LINEAR}),i.layerService.reRender()}}}]),n}(at),B4={fill:T4,line:Hg,extrude:p4,text:em,point_fill:Yg,point_image:Xg,point_normal:Zg,point_extrude:Wg,water:N4,ocean:R4,extrusion:x4};function U4(e){var t=z4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function z4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var tm=function(e){Ee(n,e);var t=U4(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","PolygonLayer"),S(R(r),"enableShaderEncodeStyles",["opacity","extrusionBase","rotation","offsets","stroke"]),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new B4[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){var i,a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o==="fill"||!o?"fill":o==="extrude"?"extrude":o==="extrusion"?"extrusion":o==="water"?"water":o==="ocean"?"ocean":o==="line"?"line":this.getPointModelType()}},{key:"getPointModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=this.iconService.getIconMap(),l=i.find(function(f){return f.hasOwnProperty("shape")});if(l){var c=l.shape;return c==="dot"?"point_normal":(o==null?void 0:o.indexOf(c))!==-1?"point_fill":(u==null?void 0:u.indexOf(c))!==-1?"point_extrude":s.hasOwnProperty(c)?"point_image":"text"}else return"fill"}}]),n}(Kr);function $4(e){var t=V4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function V4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var j4=`layout(std140) uniform commonUniforms {
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
`,H4=`
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
`,xv=function(e){Ee(n,e);var t=$4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.clampLow,s=u===void 0?!0:u,l=i.clampHigh,c=l===void 0?!0:l,f=i.noDataValue,h=f===void 0?-9999999:f,d=i.domain,v=i.rampColors,p=d||qs(v);this.colorTexture=this.layer.textureService.getColorTexture(v,p);var g={u_domain:p,u_opacity:o||1,u_noDataValue:h,u_clampLow:s?1:0,u_clampHigh:(typeof c<"u"?c:s)?1:0,u_rasterTexture:this.texture,u_colorTexture:this.colorTexture};this.textures=[this.texture,this.colorTexture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var r=Y(C.mark(function a(o){var u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!Array.isArray(o.data)){h.next=4;break}return h.abrupt("return",{data:o.data,width:o.width,height:o.height});case 4:return h.next=6,o.data;case 6:return u=h.sent,s=u.rasterData,l=u.width,c=u.height,h.abrupt("return",{data:Array.from(s),width:l,height:c});case 11:case"end":return h.stop()}},a)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d,v,p;return C.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService,s=u.createTexture2D,l=u.queryVerdorInfo,c=o.data.dataArray[0],m.next=6,this.getRasterData(c);case 6:return f=m.sent,h=f.data,d=f.width,v=f.height,this.texture=s({data:new Float32Array(h),width:d,height:v,format:l()==="WebGL1"?L.LUMINANCE:L.RED,type:L.FLOAT,alignment:1}),m.next=13,this.layer.buildLayerModel({moduleName:"rasterImageData",vertexShader:H4,fragmentShader:j4,triangulation:Mo,primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return p=m.sent,m.abrupt("return",[p]);case 15:case"end":return m.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a;(i=this.texture)===null||i===void 0||i.destroy(),(a=this.colorTexture)===null||a===void 0||a.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{shaderLocation:Ie.UV,name:"a_Uv",buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(at),G4=["data"],W4=["rasterData"];function Y4(e){var t=X4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function X4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Z4=`uniform sampler2D u_texture;
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
 
}`,q4=`
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
`,Q4=function(e){Ee(n,e);var t=Y4(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"dataOption",{}),r}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.noDataValue,s=u===void 0?0:u,l=this.dataOption,c=l.rMinMax,f=c===void 0?[0,255]:c,h=l.gMinMax,d=h===void 0?[0,255]:h,v=l.bMinMax,p=v===void 0?[0,255]:v,g={u_rminmax:f,u_gminmax:d,u_bminmax:p,u_opacity:o||1,u_noDataValue:s,u_texture:this.texture};this.textures=[this.texture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var r=Y(C.mark(function a(o){var u,s,l,c,f;return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!Array.isArray(o.data)){d.next=4;break}return u=o.data,s=Kt(o,G4),this.dataOption=s,d.abrupt("return",z({data:u},s));case 4:return d.next=6,o.data;case 6:if(l=d.sent,c=l.rasterData,f=Kt(l,W4),this.dataOption=f,!Array.isArray(c)){d.next=14;break}return d.abrupt("return",z({data:c},f));case 14:return d.abrupt("return",z({data:Array.from(c)},f));case 15:case"end":return d.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h,d;return C.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,s=o.data.dataArray[0],p.next=6,this.getRasterData(s);case 6:return l=p.sent,c=l.data,f=l.width,h=l.height,this.texture=u({data:new Float32Array(c),width:f,height:h,format:L.RGB,type:L.FLOAT}),p.next=13,this.layer.buildLayerModel({moduleName:"rasterImageDataRGBA",vertexShader:q4,fragmentShader:Z4,triangulation:Mo,primitive:L.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return d=p.sent,p.abrupt("return",[d]);case 15:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_Uv",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(at);function J4(e){var t=K4();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function K4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eM=`uniform sampler2D u_texture;
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
`,tM=`layout(location = 0) in vec3 a_Position;
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
`,nM=function(e){Ee(n,e);var t=J4(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.clampLow,u=o===void 0?!0:o,s=i.clampHigh,l=s===void 0?!0:s,c=i.noDataValue,f=c===void 0?-9999999:c,h=i.domain,d=i.rampColors,v=i.colorTexture,p=i.rScaler,g=p===void 0?6553.6:p,m=i.gScaler,_=m===void 0?25.6:m,y=i.bScaler,x=y===void 0?.1:y,b=i.offset,M=b===void 0?1e4:b,T=h||qs(d),D=v;v?this.layer.textureService.setColorTexture(v,d,T):D=this.layer.textureService.getColorTexture(d,T);var U={u_unpack:[g,_,x,M],u_domain:T,u_opacity:a||1,u_noDataValue:f,u_clampLow:u,u_clampHigh:typeof l<"u"?l:u,u_texture:this.texture,u_colorTexture:D};this.textures=[this.texture,D];var I=this.getUniformsBufferInfo(U);return I}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,f.next=5,o.data.images;case 5:return s=f.sent,this.texture=u({data:s[0],width:s[0].width,height:s[0].height,min:L.LINEAR,mag:L.LINEAR}),f.next=9,this.layer.buildLayerModel({moduleName:"RasterTileDataImage",vertexShader:tM,fragmentShader:eM,triangulation:Mo,primitive:L.TRIANGLES,depth:{enable:!1}});case 9:return l=f.sent,f.abrupt("return",[l]);case 11:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Se.Attribute,descriptor:{name:"a_Uv",shaderLocation:Ie.UV,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(at),rM={raster:xv,rasterRgb:Q4,raster3d:xv,rasterTerrainRgb:nM};function iM(e){var t=aM();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function aM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var bl=function(e){Ee(n,e);var t=iM(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","RasterLayer"),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new rM[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={raster:{},rasterRgb:{},raster3d:{},rasterTerrainRgb:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.layerSource.getParserType();switch(i){case"raster":return"raster";case"rasterRgb":return"rasterRgb";case"rgb":return"rasterRgb";case"image":return"rasterTerrainRgb";default:return"raster"}}},{key:"getLegend",value:function(i){if(i!=="color")return{type:void 0,field:void 0,items:[]};var a=this.getLayerConfig().rampColors;return XC(a,i)}}]),n}(Kr);function oM(e){var t=uM();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function uM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sM=`layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

out vec4 outputColor;

void main() {
  outputColor = u_color;
  outputColor.a *= u_opacity;
}
`,lM=`layout(location = 0) in vec3 a_Position;

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

`,cM=function(e){Ee(n,e);var t=oM(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),z(z({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.color,s=u===void 0?"#000":u,l={u_color:tt(s),u_opacity:o||1},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Y(C.mark(function a(){return C.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"mask",vertexShader:lM,fragmentShader:sM,triangulation:_l,depth:{enable:!1},pick:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;i&&this.layerService.clear()}},{key:"registerBuiltinAttributes",value:function(){return""}}]),n}(at),fM={fill:cM};function hM(e){var t=dM();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function dM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var vM=function(e){Ee(n,e);var t=hM(n);function n(){var r;oe(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(R(r),"type","MaskLayer"),r}return ae(n,[{key:"buildModels",value:function(){var r=Y(C.mark(function a(){var o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new fM[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){return"fill"}}]),n}(Kr),bv,Sv,Av,Ev,Ra,Cv,wv,pM=Ke.cloneDeep,gM=(bv=De(),Sv=je(ie.IMapService),Av=je(ie.IFontService),bv(Ev=(Ra=function(){function e(){oe(this,e),$e(this,"mapService",Cv,this),$e(this,"fontService",wv,this)}return ae(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("DataMappingPlugin",Y(C.mark(function o(){return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:n.log(gt.MappingStart,xt.INIT),i.generateMaping(n,{styleAttributeService:a}),n.log(gt.MappingEnd,xt.INIT);case 3:case"end":return s.stop()}},o)}))),n.hooks.beforeRenderData.tapPromise("DataMappingPlugin",function(){var o=Y(C.mark(function u(s){var l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s){f.next=2;break}return f.abrupt("return",s);case 2:return n.dataState.dataMappingNeedUpdate=!1,n.log(gt.MappingStart,xt.UPDATE),l=i.generateMaping(n,{styleAttributeService:a}),n.log(gt.MappingEnd,xt.UPDATE),f.abrupt("return",l);case 7:case"end":return f.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),n.hooks.beforeRender.tap("DataMappingPlugin",function(){var o=n.getSource();if(!(n.layerModelNeedUpdate||!o||!o.inited)){var u=a.getLayerStyleAttributes()||[],s=a.getLayerStyleAttribute("filter"),l=o.data.dataArray;if(!(Array.isArray(l)&&l.length===0)){var c=u.filter(function(d){return d.needRemapping}),f=l;if(s!=null&&s.needRemapping&&s!==null&&s!==void 0&&s.scale&&(f=l.filter(function(d){return i.applyAttributeMapping(s,d)[0]})),c.length){var h=i.mapping(n,c,f,n.getEncodedData());n.setEncodedData(h)}}}})}},{key:"generateMaping",value:function(n,r){var i=this,a=r.styleAttributeService,o=a.getLayerStyleAttributes()||[],u=a.getLayerStyleAttribute("filter"),s=n.getSource().data.dataArray,l=s;u!=null&&u.scale&&(l=s.filter(function(f){return i.applyAttributeMapping(u,f)[0]})),l=n.processData(l);var c=this.mapping(n,o,l,void 0);return n.setEncodedData(c),n.emit("dataUpdate",null),!0}},{key:"mapping",value:function(n,r,i,a){var o=this,u=r.filter(function(l){return l.scale!==void 0}).filter(function(l){return l.name!=="filter"}),s=i.map(function(l,c){var f=a?a[c]:{},h=z({id:l._id,coordinates:l.coordinates},f);return u.forEach(function(d){var v=o.applyAttributeMapping(d,l);(d.name==="color"||d.name==="stroke")&&(v=v.map(function(p){return tt(p)})),h[d.name]=Array.isArray(v)&&v.length===1?v[0]:v,d.name==="shape"&&(h.shape=o.fontService.getIconFontKey(h[d.name]))}),h});return r.forEach(function(l){l.needRemapping=!1}),this.adjustData2Amap2Coordinates(s,n),this.adjustData2SimpleCoordinates(s),s}},{key:"adjustData2Amap2Coordinates",value:function(n,r){var i=this;if(n.length>0&&this.mapService.version==="GAODE2.x"){var a=r.coordCenter||r.getSource().center;n.filter(function(o){return!o.originCoordinates}).map(function(o){o.version="GAODE2.x",o.originCoordinates=pM(o.coordinates),o.coordinates=i.mapService.coordToAMap2RelativeCoordinates(o.coordinates,a)})}}},{key:"adjustData2SimpleCoordinates",value:function(n){var r=this;n.length>0&&this.mapService.version==="SIMPLE"&&n.map(function(i){i.simpleCoordinate||(i.coordinates=r.unProjectCoordinates(i.coordinates),i.simpleCoordinate=!0)})}},{key:"unProjectCoordinates",value:function(n){var r=this;if(typeof n[0]=="number")return this.mapService.simpleMapCoord.unproject(n);if(n[0]&&n[0][0]instanceof Array){var i=[];return n.map(function(o){var u=[];o.map(function(s){u.push(r.mapService.simpleMapCoord.unproject(s))}),i.push(u)}),i}else{var a=[];return n.map(function(o){a.push(r.mapService.simpleMapCoord.unproject(o))}),a}}},{key:"applyAttributeMapping",value:function(n,r){var i;if(!n.scale)return[];var a=(n==null||(i=n.scale)===null||i===void 0?void 0:i.scalers)||[],o=[];a.forEach(function(s){var l,c=s.field;(r.hasOwnProperty(c)||((l=n.scale)===null||l===void 0?void 0:l.type)==="variable")&&o.push(r[c])});var u=n.mapping?n.mapping(o):[];return u}},{key:"getArrowPoints",value:function(n,r){var i=[r[0]-n[0],r[1]-n[1]],a=D_(i),o=[n[0]+a[0]*1e-4,n[1]+a[1]*1e-4];return o}}]),e}(),Cv=Ue(Ra.prototype,"mapService",[Sv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wv=Ue(Ra.prototype,"fontService",[Av],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ra))||Ev),Tv,Mv,mM=(Tv=De(),Tv(Mv=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){var r=this;this.mapService=n.getContainer().get(ie.IMapService),n.hooks.init.tapPromise("DataSourcePlugin",Y(C.mark(function i(){var a,o,u,s;return C.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(n.log(gt.SourceInitStart,xt.INIT),a=n.getSource(),a||(o=n.sourceOption||n.defaultSourceConfig,u=o.data,s=o.options,a=new Og(u,s),n.setSource(a)),!a.inited){c.next=8;break}r.updateClusterData(n),n.log(gt.SourceInitEnd,xt.INIT),c.next=10;break;case 8:return c.next=10,new Promise(function(f){a.on("update",function(h){h.type==="inited"&&(r.updateClusterData(n),n.log(gt.SourceInitEnd,xt.INIT)),f(null)})});case 10:case"end":return c.stop()}},i)}))),n.hooks.beforeRenderData.tapPromise("DataSourcePlugin",Y(C.mark(function i(){var a,o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a=r.updateClusterData(n),o=n.dataState.dataSourceNeedUpdate,n.dataState.dataSourceNeedUpdate=!1,u=a||o,l.abrupt("return",u);case 5:case"end":return l.stop()}},i)})))}},{key:"updateClusterData",value:function(n){if(n.isTileLayer||n.tileLayer||!n.getSource())return!1;var r=n.getSource(),i=r.cluster,a=r.clusterOptions.zoom,o=a===void 0?0:a,u=this.mapService.getZoom()-1,s=n.dataState.dataSourceNeedUpdate;return i&&s&&r.updateClusterData(Math.floor(u)),i&&Math.abs(n.clusterZoom-u)>=1?(o!==Math.floor(u)&&r.updateClusterData(Math.floor(u)),n.clusterZoom=u,!0):!1}}]),e}())||Mv);function Sl(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function nm(e){return e.length===1&&(e=yM(e)),{left:function(t,n,r,i){for(r==null&&(r=0),i==null&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)<0?r=a+1:i=a}return r},right:function(t,n,r,i){for(r==null&&(r=0),i==null&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)>0?i=a:r=a+1}return r}}}function yM(e){return function(t,n){return Sl(e(t),n)}}var _M=nm(Sl),ko=_M.right;function xM(e){return e===null?NaN:+e}function kv(e,t){var n=e.length,r=-1,i,a,o;if(t==null){for(;++r<n;)if((i=e[r])!=null&&i>=i)for(a=o=i;++r<n;)(i=e[r])!=null&&(a>i&&(a=i),o<i&&(o=i))}else for(;++r<n;)if((i=t(e[r],r,e))!=null&&i>=i)for(a=o=i;++r<n;)(i=t(e[r],r,e))!=null&&(a>i&&(a=i),o<i&&(o=i));return[a,o]}var _s=Math.sqrt(50),xs=Math.sqrt(10),bs=Math.sqrt(2);function rm(e,t,n){var r,i=-1,a,o,u;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(a=e,e=t,t=a),(u=$a(e,t,n))===0||!isFinite(u))return[];if(u>0)for(e=Math.ceil(e/u),t=Math.floor(t/u),o=new Array(a=Math.ceil(t-e+1));++i<a;)o[i]=(e+i)*u;else for(e=Math.floor(e*u),t=Math.ceil(t*u),o=new Array(a=Math.ceil(e-t+1));++i<a;)o[i]=(e-i)/u;return r&&o.reverse(),o}function $a(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=_s?10:a>=xs?5:a>=bs?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=_s?10:a>=xs?5:a>=bs?2:1)}function Ss(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=_s?i*=10:a>=xs?i*=5:a>=bs&&(i*=2),t<e?-i:i}function bM(e,t,n){if(n==null&&(n=xM),!!(r=e.length)){if((t=+t)<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,i=(r-1)*t,a=Math.floor(i),o=+n(e[a],a,e),u=+n(e[a+1],a+1,e);return o+(u-o)*(i-a)}}function SM(e,t,n,r,i){var a=e*e,o=a*e;return((1-3*e+3*a-o)*t+(4-6*a+3*o)*n+(1+3*e+3*a-3*o)*r+o*i)/6}function AM(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],a=e[r+1],o=r>0?e[r-1]:2*i-a,u=r<t-1?e[r+2]:2*a-i;return SM((n-r/t)*t,o,i,a,u)}}function Al(e){return function(){return e}}function EM(e,t){return function(n){return e+n*t}}function CM(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function wM(e){return(e=+e)==1?im:function(t,n){return n-t?CM(t,n,e):Al(isNaN(t)?n:t)}}function im(e,t){var n=t-e;return n?EM(e,n):Al(isNaN(e)?t:e)}const Iv=function e(t){var n=wM(t);function r(i,a){var o=n((i=Wa(i)).r,(a=Wa(a)).r),u=n(i.g,a.g),s=n(i.b,a.b),l=im(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=u(c),i.b=s(c),i.opacity=l(c),i+""}}return r.gamma=e,r}(1);function TM(e){return function(t){var n=t.length,r=new Array(n),i=new Array(n),a=new Array(n),o,u;for(o=0;o<n;++o)u=Wa(t[o]),r[o]=u.r||0,i[o]=u.g||0,a[o]=u.b||0;return r=e(r),i=e(i),a=e(a),u.opacity=1,function(s){return u.r=r(s),u.g=i(s),u.b=a(s),u+""}}}var MM=TM(AM);function kM(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function IM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function LM(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=El(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(u){for(o=0;o<r;++o)a[o]=i[o](u);return a}}function RM(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Ka(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function PM(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=El(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var As=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wu=new RegExp(As.source,"g");function FM(e){return function(){return e}}function OM(e){return function(t){return e(t)+""}}function DM(e,t){var n=As.lastIndex=wu.lastIndex=0,r,i,a,o=-1,u=[],s=[];for(e=e+"",t=t+"";(r=As.exec(e))&&(i=wu.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),u[o]?u[o]+=a:u[++o]=a),(r=r[0])===(i=i[0])?u[o]?u[o]+=i:u[++o]=i:(u[++o]=null,s.push({i:o,x:Ka(r,i)})),n=wu.lastIndex;return n<t.length&&(a=t.slice(n),u[o]?u[o]+=a:u[++o]=a),u.length<2?s[0]?OM(s[0].x):FM(t):(t=s.length,function(l){for(var c=0,f;c<t;++c)u[(f=s[c]).i]=f.x(l);return u.join("")})}function El(e,t){var n=typeof t,r;return t==null||n==="boolean"?Al(t):(n==="number"?Ka:n==="string"?(r=Hr(t))?(t=r,Iv):DM:t instanceof Hr?Iv:t instanceof Date?RM:IM(t)?kM:Array.isArray(t)?LM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?PM:Ka)(e,t)}function NM(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function tr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function am(e,t){switch(arguments.length){case 0:break;case 1:this.interpolator(e);break;default:this.interpolator(t).domain(e);break}return this}var qt="$";function eo(){}eo.prototype=to.prototype={constructor:eo,has:function(e){return qt+e in this},get:function(e){return this[qt+e]},set:function(e,t){return this[qt+e]=t,this},remove:function(e){var t=qt+e;return t in this&&delete this[t]},clear:function(){for(var e in this)e[0]===qt&&delete this[e]},keys:function(){var e=[];for(var t in this)t[0]===qt&&e.push(t.slice(1));return e},values:function(){var e=[];for(var t in this)t[0]===qt&&e.push(this[t]);return e},entries:function(){var e=[];for(var t in this)t[0]===qt&&e.push({key:t.slice(1),value:this[t]});return e},size:function(){var e=0;for(var t in this)t[0]===qt&&++e;return e},empty:function(){for(var e in this)if(e[0]===qt)return!1;return!0},each:function(e){for(var t in this)t[0]===qt&&e(this[t],t.slice(1),this)}};function to(e,t){var n=new eo;if(e instanceof eo)e.each(function(u,s){n.set(s,u)});else if(Array.isArray(e)){var r=-1,i=e.length,a;if(t==null)for(;++r<i;)n.set(r,e[r]);else for(;++r<i;)n.set(t(a=e[r],r,e),a)}else if(e)for(var o in e)n.set(o,e[o]);return n}function Lv(){}var ur=to.prototype;Lv.prototype={constructor:Lv,has:ur.has,add:function(e){return e+="",this[qt+e]=e,this},remove:ur.remove,clear:ur.clear,values:ur.keys,size:ur.size,empty:ur.empty,each:ur.each};var om=Array.prototype,um=om.map,pr=om.slice,Rv={name:"implicit"};function no(){var e=to(),t=[],n=[],r=Rv;function i(a){var o=a+"",u=e.get(o);if(!u){if(r!==Rv)return r;e.set(o,u=t.push(a))}return n[(u-1)%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=to();for(var o=-1,u=a.length,s,l;++o<u;)e.has(l=(s=a[o])+"")||e.set(l,t.push(s));return i},i.range=function(a){return arguments.length?(n=pr.call(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return no(t,n).unknown(r)},tr.apply(i,arguments),i}function BM(e){return function(){return e}}function UM(e){return+e}var Pv=[0,1];function Pt(e){return e}function Es(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:BM(isNaN(t)?NaN:.5)}function Fv(e){var t=e[0],n=e[e.length-1],r;return t>n&&(r=t,t=n,n=r),function(i){return Math.max(t,Math.min(n,i))}}function zM(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=Es(i,r),a=n(o,a)):(r=Es(r,i),a=n(a,o)),function(u){return a(r(u))}}function $M(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=Es(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(u){var s=ko(e,u,1,r)-1;return a[s](i[s](u))}}function Io(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Cl(){var e=Pv,t=Pv,n=El,r,i,a,o=Pt,u,s,l;function c(){return u=Math.min(e.length,t.length)>2?$M:zM,s=l=null,f}function f(h){return isNaN(h=+h)?a:(s||(s=u(e.map(r),t,n)))(r(o(h)))}return f.invert=function(h){return o(i((l||(l=u(t,e.map(r),Ka)))(h)))},f.domain=function(h){return arguments.length?(e=um.call(h,UM),o===Pt||(o=Fv(e)),c()):e.slice()},f.range=function(h){return arguments.length?(t=pr.call(h),c()):t.slice()},f.rangeRound=function(h){return t=pr.call(h),n=NM,c()},f.clamp=function(h){return arguments.length?(o=h?Fv(e):Pt,f):o!==Pt},f.interpolate=function(h){return arguments.length?(n=h,c()):n},f.unknown=function(h){return arguments.length?(a=h,f):a},function(h,d){return r=h,i=d,c()}}function sm(e,t){return Cl()(e,t)}function VM(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ro(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Wr(e){return e=ro(Math.abs(e)),e?e[1]:NaN}function jM(e,t){return function(n,r){for(var i=n.length,a=[],o=0,u=e[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),a.push(n.substring(i-=u,i+u)),!((s+=u+1)>r));)u=e[o=(o+1)%e.length];return a.reverse().join(t)}}function HM(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var GM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function io(e){if(!(t=GM.exec(e)))throw new Error("invalid format: "+e);var t;return new wl({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}io.prototype=wl.prototype;function wl(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}wl.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function WM(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var lm;function YM(e,t){var n=ro(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(lm=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+ro(e,Math.max(0,t+a-1))[0]}function Ov(e,t){var n=ro(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Dv={"%":function(e,t){return(e*100).toFixed(t)},b:function(e){return Math.round(e).toString(2)},c:function(e){return e+""},d:VM,e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},g:function(e,t){return e.toPrecision(t)},o:function(e){return Math.round(e).toString(8)},p:function(e,t){return Ov(e*100,t)},r:Ov,s:YM,X:function(e){return Math.round(e).toString(16).toUpperCase()},x:function(e){return Math.round(e).toString(16)}};function Nv(e){return e}var Bv=Array.prototype.map,Uv=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function XM(e){var t=e.grouping===void 0||e.thousands===void 0?Nv:jM(Bv.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?Nv:HM(Bv.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"-":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function l(f){f=io(f);var h=f.fill,d=f.align,v=f.sign,p=f.symbol,g=f.zero,m=f.width,_=f.comma,y=f.precision,x=f.trim,b=f.type;b==="n"?(_=!0,b="g"):Dv[b]||(y===void 0&&(y=12),x=!0,b="g"),(g||h==="0"&&d==="=")&&(g=!0,h="0",d="=");var M=p==="$"?n:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",T=p==="$"?r:/[%p]/.test(b)?o:"",D=Dv[b],U=/[defgprs%]/.test(b);y=y===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function I(w){var k=M,P=T,B,K,ce;if(b==="c")P=D(w)+P,w="";else{w=+w;var ve=w<0||1/w<0;if(w=isNaN(w)?s:D(Math.abs(w),y),x&&(w=WM(w)),ve&&+w==0&&v!=="+"&&(ve=!1),k=(ve?v==="("?v:u:v==="-"||v==="("?"":v)+k,P=(b==="s"?Uv[8+lm/3]:"")+P+(ve&&v==="("?")":""),U){for(B=-1,K=w.length;++B<K;)if(ce=w.charCodeAt(B),48>ce||ce>57){P=(ce===46?i+w.slice(B+1):w.slice(B))+P,w=w.slice(0,B);break}}}_&&!g&&(w=t(w,1/0));var ye=k.length+w.length+P.length,H=ye<m?new Array(m-ye+1).join(h):"";switch(_&&g&&(w=t(H+w,H.length?m-P.length:1/0),H=""),d){case"<":w=k+w+P+H;break;case"=":w=k+H+w+P;break;case"^":w=H.slice(0,ye=H.length>>1)+k+w+P+H.slice(ye);break;default:w=H+k+w+P;break}return a(w)}return I.toString=function(){return f+""},I}function c(f,h){var d=l((f=io(f),f.type="f",f)),v=Math.max(-8,Math.min(8,Math.floor(Wr(h)/3)))*3,p=Math.pow(10,-v),g=Uv[8+v/3];return function(m){return d(p*m)+g}}return{format:l,formatPrefix:c}}var Pa,Tl,cm;ZM({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function ZM(e){return Pa=XM(e),Tl=Pa.format,cm=Pa.formatPrefix,Pa}function qM(e){return Math.max(0,-Wr(Math.abs(e)))}function QM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Wr(t)/3)))*3-Wr(Math.abs(e)))}function JM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Wr(t)-Wr(e))+1}function KM(e,t,n,r){var i=Ss(e,t,n),a;switch(r=io(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=QM(i,o))&&(r.precision=a),cm(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=JM(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=qM(i))&&(r.precision=a-(r.type==="%")*2);break}}return Tl(r)}function ca(e){var t=e.domain;return e.ticks=function(n){var r=t();return rm(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return KM(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,o=r[i],u=r[a],s;return u<o&&(s=o,o=u,u=s,s=i,i=a,a=s),s=$a(o,u,n),s>0?(o=Math.floor(o/s)*s,u=Math.ceil(u/s)*s,s=$a(o,u,n)):s<0&&(o=Math.ceil(o*s)/s,u=Math.floor(u*s)/s,s=$a(o,u,n)),s>0?(r[i]=Math.floor(o/s)*s,r[a]=Math.ceil(u/s)*s,t(r)):s<0&&(r[i]=Math.ceil(o*s)/s,r[a]=Math.floor(u*s)/s,t(r)),e},e}function fm(){var e=sm(Pt,Pt);return e.copy=function(){return Io(e,fm())},tr.apply(e,arguments),ca(e)}function hm(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}function zv(e){return Math.log(e)}function $v(e){return Math.exp(e)}function e5(e){return-Math.log(-e)}function t5(e){return-Math.exp(-e)}function n5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function r5(e){return e===10?n5:e===Math.E?Math.exp:function(t){return Math.pow(e,t)}}function i5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),function(t){return Math.log(t)/e})}function Vv(e){return function(t){return-e(-t)}}function a5(e){var t=e(zv,$v),n=t.domain,r=10,i,a;function o(){return i=i5(r),a=r5(r),n()[0]<0?(i=Vv(i),a=Vv(a),e(e5,t5)):e(zv,$v),t}return t.base=function(u){return arguments.length?(r=+u,o()):r},t.domain=function(u){return arguments.length?(n(u),o()):n()},t.ticks=function(u){var s=n(),l=s[0],c=s[s.length-1],f;(f=c<l)&&(h=l,l=c,c=h);var h=i(l),d=i(c),v,p,g,m=u==null?10:+u,_=[];if(!(r%1)&&d-h<m){if(h=Math.round(h)-1,d=Math.round(d)+1,l>0){for(;h<d;++h)for(p=1,v=a(h);p<r;++p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else for(;h<d;++h)for(p=r-1,v=a(h);p>=1;--p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else _=rm(h,d,Math.min(d-h,m)).map(a);return f?_.reverse():_},t.tickFormat=function(u,s){if(s==null&&(s=r===10?".0e":","),typeof s!="function"&&(s=Tl(s)),u===1/0)return s;u==null&&(u=10);var l=Math.max(1,r*u/t.ticks().length);return function(c){var f=c/a(Math.round(i(c)));return f*r<r-.5&&(f*=r),f<=l?s(c):""}},t.nice=function(){return n(hm(n(),{floor:function(u){return a(Math.floor(i(u)))},ceil:function(u){return a(Math.ceil(i(u)))}}))},t}function dm(){var e=a5(Cl()).domain([1,10]);return e.copy=function(){return Io(e,dm()).base(e.base())},tr.apply(e,arguments),e}function jv(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function o5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function u5(e){return e<0?-e*e:e*e}function s5(e){var t=e(Pt,Pt),n=1;function r(){return n===1?e(Pt,Pt):n===.5?e(o5,u5):e(jv(n),jv(1/n))}return t.exponent=function(i){return arguments.length?(n=+i,r()):n},ca(t)}function vm(){var e=s5(Cl());return e.copy=function(){return Io(e,vm()).exponent(e.exponent())},tr.apply(e,arguments),e}function pm(){var e=[],t=[],n=[],r;function i(){var o=0,u=Math.max(1,t.length);for(n=new Array(u-1);++o<u;)n[o-1]=bM(e,o/u);return a}function a(o){return isNaN(o=+o)?r:t[ko(n,o)]}return a.invertExtent=function(o){var u=t.indexOf(o);return u<0?[NaN,NaN]:[u>0?n[u-1]:e[0],u<n.length?n[u]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(var u=0,s=o.length,l;u<s;++u)l=o[u],l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Sl),i()},a.range=function(o){return arguments.length?(t=pr.call(o),i()):t.slice()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.quantiles=function(){return n.slice()},a.copy=function(){return pm().domain(e).range(t).unknown(r)},tr.apply(a,arguments)}function gm(){var e=0,t=1,n=1,r=[.5],i=[0,1],a;function o(s){return s<=s?i[ko(r,s,0,n)]:a}function u(){var s=-1;for(r=new Array(n);++s<n;)r[s]=((s+1)*t-(s-n)*e)/(n+1);return o}return o.domain=function(s){return arguments.length?(e=+s[0],t=+s[1],u()):[e,t]},o.range=function(s){return arguments.length?(n=(i=pr.call(s)).length-1,u()):i.slice()},o.invertExtent=function(s){var l=i.indexOf(s);return l<0?[NaN,NaN]:l<1?[e,r[0]]:l>=n?[r[n-1],t]:[r[l-1],r[l]]},o.unknown=function(s){return arguments.length&&(a=s),o},o.thresholds=function(){return r.slice()},o.copy=function(){return gm().domain([e,t]).range(i).unknown(a)},tr.apply(ca(o),arguments)}function mm(){var e=[.5],t=[0,1],n,r=1;function i(a){return a<=a?t[ko(e,a,0,r)]:n}return i.domain=function(a){return arguments.length?(e=pr.call(a),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=pr.call(a),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var o=t.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return mm().domain(e).range(t).unknown(n)},tr.apply(i,arguments)}var Tu=new Date,Mu=new Date;function Nt(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=function(a){return e(a=new Date(+a)),a},i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(a){var o=i(a),u=i.ceil(a);return a-o<u-a?o:u},i.offset=function(a,o){return t(a=new Date(+a),o==null?1:Math.floor(o)),a},i.range=function(a,o,u){var s=[],l;if(a=i.ceil(a),u=u==null?1:Math.floor(u),!(a<o)||!(u>0))return s;do s.push(l=new Date(+a)),t(a,u),e(a);while(l<a&&a<o);return s},i.filter=function(a){return Nt(function(o){if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},function(o,u){if(o>=o)if(u<0)for(;++u<=0;)for(;t(o,-1),!a(o););else for(;--u>=0;)for(;t(o,1),!a(o););})},n&&(i.count=function(a,o){return Tu.setTime(+a),Mu.setTime(+o),e(Tu),e(Mu),Math.floor(n(Tu,Mu))},i.every=function(a){return a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?function(o){return r(o)%a===0}:function(o){return i.count(0,o)%a===0}):i}),i}var ao=Nt(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});ao.every=function(e){return e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Nt(function(t){t.setTime(Math.floor(t/e)*e)},function(t,n){t.setTime(+t+n*e)},function(t,n){return(n-t)/e}):ao};const l5=ao;ao.range;var oo=1e3,qi=6e4,Hv=36e5,ym=864e5,_m=6048e5,xm=Nt(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*oo)},function(e,t){return(t-e)/oo},function(e){return e.getUTCSeconds()});const c5=xm;xm.range;var bm=Nt(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*oo)},function(e,t){e.setTime(+e+t*qi)},function(e,t){return(t-e)/qi},function(e){return e.getMinutes()});const f5=bm;bm.range;var Sm=Nt(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*oo-e.getMinutes()*qi)},function(e,t){e.setTime(+e+t*Hv)},function(e,t){return(t-e)/Hv},function(e){return e.getHours()});const h5=Sm;Sm.range;var Am=Nt(function(e){e.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*qi)/ym},function(e){return e.getDate()-1});const Ml=Am;Am.range;function mr(e){return Nt(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n*7)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*qi)/_m})}var kl=mr(0),uo=mr(1),d5=mr(2),v5=mr(3),Yr=mr(4),p5=mr(5),g5=mr(6);kl.range;uo.range;d5.range;v5.range;Yr.range;p5.range;g5.range;var Em=Nt(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});const m5=Em;Em.range;var Il=Nt(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});Il.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:Nt(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n*e)})};const Xr=Il;Il.range;var Ll=Nt(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/ym},function(e){return e.getUTCDate()-1});Ll.range;function yr(e){return Nt(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n*7)},function(t,n){return(n-t)/_m})}var Cm=yr(0),so=yr(1),y5=yr(2),_5=yr(3),Zr=yr(4),x5=yr(5),b5=yr(6);Cm.range;so.range;y5.range;_5.range;Zr.range;x5.range;b5.range;var gr=Nt(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});gr.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:Nt(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})};gr.range;function ku(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Iu(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function yi(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function S5(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,u=e.months,s=e.shortMonths,l=_i(i),c=xi(i),f=_i(a),h=xi(a),d=_i(o),v=xi(o),p=_i(u),g=xi(u),m=_i(s),_=xi(s),y={a:ve,A:ye,b:H,B:V,c:null,d:qv,e:qv,f:G5,g:t7,G:r7,H:V5,I:j5,j:H5,L:wm,m:W5,M:Y5,p:Z,q:X,Q:Kv,s:ep,S:X5,u:Z5,U:q5,V:Q5,w:J5,W:K5,x:null,X:null,y:e7,Y:n7,Z:i7,"%":Jv},x={a:he,A:le,b:de,B:Ve,c:null,d:Qv,e:Qv,f:s7,g:y7,G:x7,H:a7,I:o7,j:u7,L:Mm,m:l7,M:c7,p:Oe,q:rt,Q:Kv,s:ep,S:f7,u:h7,U:d7,V:v7,w:p7,W:g7,x:null,X:null,y:m7,Y:_7,Z:b7,"%":Jv},b={a:I,A:w,b:k,B:P,c:B,d:Xv,e:Xv,f:B5,g:Yv,G:Wv,H:Zv,I:Zv,j:F5,L:N5,m:P5,M:O5,p:U,q:R5,Q:z5,s:$5,S:D5,u:T5,U:M5,V:k5,w:w5,W:I5,x:K,X:ce,y:Yv,Y:Wv,Z:L5,"%":U5};y.x=M(n,y),y.X=M(r,y),y.c=M(t,y),x.x=M(n,x),x.X=M(r,x),x.c=M(t,x);function M($,ue){return function(xe){var te=[],Ge=-1,Fe=0,Ye=$.length,Ne,Le,ot;for(xe instanceof Date||(xe=new Date(+xe));++Ge<Ye;)$.charCodeAt(Ge)===37&&(te.push($.slice(Fe,Ge)),(Le=Gv[Ne=$.charAt(++Ge)])!=null?Ne=$.charAt(++Ge):Le=Ne==="e"?" ":"0",(ot=ue[Ne])&&(Ne=ot(xe,Le)),te.push(Ne),Fe=Ge+1);return te.push($.slice(Fe,Ge)),te.join("")}}function T($,ue){return function(xe){var te=yi(1900,void 0,1),Ge=D(te,$,xe+="",0),Fe,Ye;if(Ge!=xe.length)return null;if("Q"in te)return new Date(te.Q);if("s"in te)return new Date(te.s*1e3+("L"in te?te.L:0));if(ue&&!("Z"in te)&&(te.Z=0),"p"in te&&(te.H=te.H%12+te.p*12),te.m===void 0&&(te.m="q"in te?te.q:0),"V"in te){if(te.V<1||te.V>53)return null;"w"in te||(te.w=1),"Z"in te?(Fe=Iu(yi(te.y,0,1)),Ye=Fe.getUTCDay(),Fe=Ye>4||Ye===0?so.ceil(Fe):so(Fe),Fe=Ll.offset(Fe,(te.V-1)*7),te.y=Fe.getUTCFullYear(),te.m=Fe.getUTCMonth(),te.d=Fe.getUTCDate()+(te.w+6)%7):(Fe=ku(yi(te.y,0,1)),Ye=Fe.getDay(),Fe=Ye>4||Ye===0?uo.ceil(Fe):uo(Fe),Fe=Ml.offset(Fe,(te.V-1)*7),te.y=Fe.getFullYear(),te.m=Fe.getMonth(),te.d=Fe.getDate()+(te.w+6)%7)}else("W"in te||"U"in te)&&("w"in te||(te.w="u"in te?te.u%7:"W"in te?1:0),Ye="Z"in te?Iu(yi(te.y,0,1)).getUTCDay():ku(yi(te.y,0,1)).getDay(),te.m=0,te.d="W"in te?(te.w+6)%7+te.W*7-(Ye+5)%7:te.w+te.U*7-(Ye+6)%7);return"Z"in te?(te.H+=te.Z/100|0,te.M+=te.Z%100,Iu(te)):ku(te)}}function D($,ue,xe,te){for(var Ge=0,Fe=ue.length,Ye=xe.length,Ne,Le;Ge<Fe;){if(te>=Ye)return-1;if(Ne=ue.charCodeAt(Ge++),Ne===37){if(Ne=ue.charAt(Ge++),Le=b[Ne in Gv?ue.charAt(Ge++):Ne],!Le||(te=Le($,xe,te))<0)return-1}else if(Ne!=xe.charCodeAt(te++))return-1}return te}function U($,ue,xe){var te=l.exec(ue.slice(xe));return te?($.p=c[te[0].toLowerCase()],xe+te[0].length):-1}function I($,ue,xe){var te=d.exec(ue.slice(xe));return te?($.w=v[te[0].toLowerCase()],xe+te[0].length):-1}function w($,ue,xe){var te=f.exec(ue.slice(xe));return te?($.w=h[te[0].toLowerCase()],xe+te[0].length):-1}function k($,ue,xe){var te=m.exec(ue.slice(xe));return te?($.m=_[te[0].toLowerCase()],xe+te[0].length):-1}function P($,ue,xe){var te=p.exec(ue.slice(xe));return te?($.m=g[te[0].toLowerCase()],xe+te[0].length):-1}function B($,ue,xe){return D($,t,ue,xe)}function K($,ue,xe){return D($,n,ue,xe)}function ce($,ue,xe){return D($,r,ue,xe)}function ve($){return o[$.getDay()]}function ye($){return a[$.getDay()]}function H($){return s[$.getMonth()]}function V($){return u[$.getMonth()]}function Z($){return i[+($.getHours()>=12)]}function X($){return 1+~~($.getMonth()/3)}function he($){return o[$.getUTCDay()]}function le($){return a[$.getUTCDay()]}function de($){return s[$.getUTCMonth()]}function Ve($){return u[$.getUTCMonth()]}function Oe($){return i[+($.getUTCHours()>=12)]}function rt($){return 1+~~($.getUTCMonth()/3)}return{format:function($){var ue=M($+="",y);return ue.toString=function(){return $},ue},parse:function($){var ue=T($+="",!1);return ue.toString=function(){return $},ue},utcFormat:function($){var ue=M($+="",x);return ue.toString=function(){return $},ue},utcParse:function($){var ue=T($+="",!0);return ue.toString=function(){return $},ue}}}var Gv={"-":"",_:" ",0:"0"},At=/^\s*\d+/,A5=/^%/,E5=/[\\^$*+?|[\]().{}]/g;function Ze(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function C5(e){return e.replace(E5,"\\$&")}function _i(e){return new RegExp("^(?:"+e.map(C5).join("|")+")","i")}function xi(e){for(var t={},n=-1,r=e.length;++n<r;)t[e[n].toLowerCase()]=n;return t}function w5(e,t,n){var r=At.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function T5(e,t,n){var r=At.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function M5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function k5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function I5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Wv(e,t,n){var r=At.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Yv(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function L5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function R5(e,t,n){var r=At.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function P5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Xv(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function F5(e,t,n){var r=At.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Zv(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function O5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function D5(e,t,n){var r=At.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function N5(e,t,n){var r=At.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function B5(e,t,n){var r=At.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function U5(e,t,n){var r=A5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function z5(e,t,n){var r=At.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function $5(e,t,n){var r=At.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function qv(e,t){return Ze(e.getDate(),t,2)}function V5(e,t){return Ze(e.getHours(),t,2)}function j5(e,t){return Ze(e.getHours()%12||12,t,2)}function H5(e,t){return Ze(1+Ml.count(Xr(e),e),t,3)}function wm(e,t){return Ze(e.getMilliseconds(),t,3)}function G5(e,t){return wm(e,t)+"000"}function W5(e,t){return Ze(e.getMonth()+1,t,2)}function Y5(e,t){return Ze(e.getMinutes(),t,2)}function X5(e,t){return Ze(e.getSeconds(),t,2)}function Z5(e){var t=e.getDay();return t===0?7:t}function q5(e,t){return Ze(kl.count(Xr(e)-1,e),t,2)}function Tm(e){var t=e.getDay();return t>=4||t===0?Yr(e):Yr.ceil(e)}function Q5(e,t){return e=Tm(e),Ze(Yr.count(Xr(e),e)+(Xr(e).getDay()===4),t,2)}function J5(e){return e.getDay()}function K5(e,t){return Ze(uo.count(Xr(e)-1,e),t,2)}function e7(e,t){return Ze(e.getFullYear()%100,t,2)}function t7(e,t){return e=Tm(e),Ze(e.getFullYear()%100,t,2)}function n7(e,t){return Ze(e.getFullYear()%1e4,t,4)}function r7(e,t){var n=e.getDay();return e=n>=4||n===0?Yr(e):Yr.ceil(e),Ze(e.getFullYear()%1e4,t,4)}function i7(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ze(t/60|0,"0",2)+Ze(t%60,"0",2)}function Qv(e,t){return Ze(e.getUTCDate(),t,2)}function a7(e,t){return Ze(e.getUTCHours(),t,2)}function o7(e,t){return Ze(e.getUTCHours()%12||12,t,2)}function u7(e,t){return Ze(1+Ll.count(gr(e),e),t,3)}function Mm(e,t){return Ze(e.getUTCMilliseconds(),t,3)}function s7(e,t){return Mm(e,t)+"000"}function l7(e,t){return Ze(e.getUTCMonth()+1,t,2)}function c7(e,t){return Ze(e.getUTCMinutes(),t,2)}function f7(e,t){return Ze(e.getUTCSeconds(),t,2)}function h7(e){var t=e.getUTCDay();return t===0?7:t}function d7(e,t){return Ze(Cm.count(gr(e)-1,e),t,2)}function km(e){var t=e.getUTCDay();return t>=4||t===0?Zr(e):Zr.ceil(e)}function v7(e,t){return e=km(e),Ze(Zr.count(gr(e),e)+(gr(e).getUTCDay()===4),t,2)}function p7(e){return e.getUTCDay()}function g7(e,t){return Ze(so.count(gr(e)-1,e),t,2)}function m7(e,t){return Ze(e.getUTCFullYear()%100,t,2)}function y7(e,t){return e=km(e),Ze(e.getUTCFullYear()%100,t,2)}function _7(e,t){return Ze(e.getUTCFullYear()%1e4,t,4)}function x7(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Zr(e):Zr.ceil(e),Ze(e.getUTCFullYear()%1e4,t,4)}function b7(){return"+0000"}function Jv(){return"%"}function Kv(e){return+e}function ep(e){return Math.floor(+e/1e3)}var Ir,Im;S7({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function S7(e){return Ir=S5(e),Im=Ir.format,Ir.parse,Ir.utcFormat,Ir.utcParse,Ir}var ki=1e3,Ii=ki*60,Li=Ii*60,Qi=Li*24,A7=Qi*7,tp=Qi*30,Lu=Qi*365;function E7(e){return new Date(e)}function C7(e){return e instanceof Date?+e:+new Date(+e)}function Lm(e,t,n,r,i,a,o,u,s){var l=sm(Pt,Pt),c=l.invert,f=l.domain,h=s(".%L"),d=s(":%S"),v=s("%I:%M"),p=s("%I %p"),g=s("%a %d"),m=s("%b %d"),_=s("%B"),y=s("%Y"),x=[[o,1,ki],[o,5,5*ki],[o,15,15*ki],[o,30,30*ki],[a,1,Ii],[a,5,5*Ii],[a,15,15*Ii],[a,30,30*Ii],[i,1,Li],[i,3,3*Li],[i,6,6*Li],[i,12,12*Li],[r,1,Qi],[r,2,2*Qi],[n,1,A7],[t,1,tp],[t,3,3*tp],[e,1,Lu]];function b(T){return(o(T)<T?h:a(T)<T?d:i(T)<T?v:r(T)<T?p:t(T)<T?n(T)<T?g:m:e(T)<T?_:y)(T)}function M(T,D,U,I){if(T==null&&(T=10),typeof T=="number"){var w=Math.abs(U-D)/T,k=nm(function(P){return P[2]}).right(x,w);k===x.length?(I=Ss(D/Lu,U/Lu,T),T=e):k?(k=x[w/x[k-1][2]<x[k][2]/w?k-1:k],I=k[1],T=k[0]):(I=Math.max(Ss(D,U,T),1),T=u)}return I==null?T:T.every(I)}return l.invert=function(T){return new Date(c(T))},l.domain=function(T){return arguments.length?f(um.call(T,C7)):f().map(E7)},l.ticks=function(T,D){var U=f(),I=U[0],w=U[U.length-1],k=w<I,P;return k&&(P=I,I=w,w=P),P=M(T,I,w,D),P=P?P.range(I,w+1):[],k?P.reverse():P},l.tickFormat=function(T,D){return D==null?b:s(D)},l.nice=function(T,D){var U=f();return(T=M(T,U[0],U[U.length-1],D))?f(hm(U,T)):l},l.copy=function(){return Io(l,Lm(e,t,n,r,i,a,o,u,s))},l}function w7(){return tr.apply(Lm(Xr,m5,kl,Ml,h5,f5,c5,l5,Im).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function T7(){var e=0,t=1,n,r,i,a,o=Pt,u=!1,s;function l(c){return isNaN(c=+c)?s:o(i===0?.5:(c=(a(c)-n)*i,u?Math.max(0,Math.min(1,c)):c))}return l.domain=function(c){return arguments.length?(n=a(e=+c[0]),r=a(t=+c[1]),i=n===r?0:1/(r-n),l):[e,t]},l.clamp=function(c){return arguments.length?(u=!!c,l):u},l.interpolator=function(c){return arguments.length?(o=c,l):o},l.unknown=function(c){return arguments.length?(s=c,l):s},function(c){return a=c,n=c(e),r=c(t),i=n===r?0:1/(r-n),l}}function Rm(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Pm(){var e=ca(T7()(Pt));return e.copy=function(){return Rm(e,Pm())},am.apply(e,arguments)}function M7(){var e=0,t=.5,n=1,r,i,a,o,u,s=Pt,l,c=!1,f;function h(d){return isNaN(d=+d)?f:(d=.5+((d=+l(d))-i)*(d<i?o:u),s(c?Math.max(0,Math.min(1,d)):d))}return h.domain=function(d){return arguments.length?(r=l(e=+d[0]),i=l(t=+d[1]),a=l(n=+d[2]),o=r===i?0:.5/(i-r),u=i===a?0:.5/(a-i),h):[e,t,n]},h.clamp=function(d){return arguments.length?(c=!!d,h):c},h.interpolator=function(d){return arguments.length?(s=d,h):s},h.unknown=function(d){return arguments.length?(f=d,h):f},function(d){return l=d,r=d(e),i=d(t),a=d(n),o=r===i?0:.5/(i-r),u=i===a?0:.5/(a-i),h}}function Fm(){var e=ca(M7()(Pt));return e.copy=function(){return Rm(e,Fm())},am.apply(e,arguments)}function Om(e){var t,n=[];function r(i){return i??t}return r.invert=r,r.domain=r.range=function(i){return i?(n=i,i):n},r.unknown=function(i){return i?(t=i,i):t},r.copy=function(){return Om().unknown(t)},r}var Ht,np,rp,Ru=Ke.isNil,k7=Ke.isString,I7=Ke.uniq,L7=/^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,R7=(Ht={},S(Ht,Qe.LINEAR,fm),S(Ht,Qe.POWER,vm),S(Ht,Qe.LOG,dm),S(Ht,Qe.IDENTITY,Om),S(Ht,Qe.SEQUENTIAL,Pm),S(Ht,Qe.TIME,w7),S(Ht,Qe.QUANTILE,pm),S(Ht,Qe.QUANTIZE,gm),S(Ht,Qe.THRESHOLD,mm),S(Ht,Qe.CAT,no),S(Ht,Qe.DIVERGING,Fm),Ht),P7=(np=De(),np(rp=function(){function e(){oe(this,e),S(this,"scaleOptions",{})}return ae(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("FeatureScalePlugin",Y(C.mark(function o(){var u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(n.log(gt.ScaleInitStart,xt.INIT),i.scaleOptions=n.getScaleOptions(),s=a.getLayerStyleAttributes(),l=(u=n.getSource())===null||u===void 0?void 0:u.data.dataArray,!(Array.isArray(l)&&l.length===0)){f.next=8;break}return f.abrupt("return");case 8:i.caculateScalesForAttributes(s||[],l);case 9:n.log(gt.ScaleInitEnd,xt.INIT);case 10:case"end":return f.stop()}},o)}))),n.hooks.beforeRenderData.tapPromise("FeatureScalePlugin",function(){var o=Y(C.mark(function u(s){var l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s){h.next=2;break}return h.abrupt("return",s);case 2:if(n.log(gt.ScaleInitStart,xt.UPDATE),i.scaleOptions=n.getScaleOptions(),l=a.getLayerStyleAttributes(),c=n.getSource().data.dataArray,!(Array.isArray(c)&&c.length===0)){h.next=8;break}return h.abrupt("return",!0);case 8:return i.caculateScalesForAttributes(l||[],c),n.log(gt.ScaleInitEnd,xt.UPDATE),n.layerModelNeedUpdate=!0,h.abrupt("return",!0);case 12:case"end":return h.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),n.hooks.beforeRender.tap("FeatureScalePlugin",function(){if(!n.layerModelNeedUpdate){i.scaleOptions=n.getScaleOptions();var o=a.getLayerStyleAttributes(),u=n.getSource().data.dataArray;if(!(Array.isArray(u)&&u.length===0)&&o){var s=o.filter(function(l){return l.needRescale});s.length&&i.caculateScalesForAttributes(s,u)}}})}},{key:"isNumber",value:function(n){return!isNaN(parseFloat(n))&&isFinite(n)}},{key:"caculateScalesForAttributes",value:function(n,r){var i=this;n.forEach(function(a){if(a.scale){var o=a.scale,u=a.scale.field;o.names=i.parseFields(Ru(u)?[]:u);var s=[];o.names.forEach(function(l){var c;s.push(i.createScale(l,a.name,(c=a.scale)===null||c===void 0?void 0:c.values,r))}),s.some(function(l){return l.type===Tr.VARIABLE})?(o.type=Tr.VARIABLE,s.forEach(function(l){if(!o.callback&&o.values!=="text"){var c;switch((c=l.option)===null||c===void 0?void 0:c.type){case Qe.LOG:case Qe.LINEAR:case Qe.POWER:if(o.values&&o.values.length>2){var f=l.scale.ticks(o.values.length);l.scale.domain(f)}o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case Qe.QUANTILE:case Qe.QUANTIZE:case Qe.THRESHOLD:l.scale.range(o.values);break;case Qe.IDENTITY:break;case Qe.CAT:o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case Qe.DIVERGING:case Qe.SEQUENTIAL:l.scale.interpolator(MM(o.values));break}}if(o.values==="text"){var h;l.scale.range((h=l.option)===null||h===void 0?void 0:h.domain)}})):(o.type=Tr.CONSTANT,o.defaultValues=s.map(function(l,c){return l.scale(o.names[c])})),o.scalers=s.map(function(l){return{field:l.field,func:l.scale,option:l.option}}),a.needRescale=!1}})}},{key:"parseFields",value:function(n){return Array.isArray(n)?n:k7(n)?n.split("*"):[n]}},{key:"createScale",value:function(n,r,i,a){var o,u,s=this.scaleOptions[r]&&((o=this.scaleOptions[r])===null||o===void 0?void 0:o.field)===n?this.scaleOptions[r]:this.scaleOptions[n],l={field:n,scale:void 0,type:Tr.VARIABLE,option:s};if(!a||!a.length)return s&&s.type?l.scale=this.createDefaultScale(s):(l.scale=no([n]),l.type=Tr.CONSTANT),l;var c=(u=a.find(function(d){return!Ru(d[n])}))===null||u===void 0?void 0:u[n];if(this.isNumber(n)||Ru(c)&&!s)l.scale=no([n]),l.type=Tr.CONSTANT;else{var f=s&&s.type||this.getDefaultType(c);i==="text"&&(f=Qe.CAT),i===void 0&&(f=Qe.IDENTITY);var h=this.createScaleConfig(f,n,s,a);l.scale=this.createDefaultScale(h),l.option=h}return l}},{key:"getDefaultType",value:function(n){var r=Qe.LINEAR;return typeof n=="string"&&(r=L7.test(n)?Qe.TIME:Qe.CAT),r}},{key:"createScaleConfig",value:function(n,r,i,a){var o={type:n},u=[];if(n===Qe.QUANTILE){var s=new Map;a==null||a.forEach(function(f){s.set(f._id,f[r])}),u=Array.from(s.values())}else u=(a==null?void 0:a.map(function(f){return f[r]}))||[];if(i!=null&&i.domain)o.domain=i==null?void 0:i.domain;else if(n===Qe.CAT||n===Qe.IDENTITY)o.domain=I7(u);else if(n===Qe.QUANTILE)o.domain=u;else if(n===Qe.DIVERGING){var l=kv(u),c=(i==null?void 0:i.neutral)!==void 0?i==null?void 0:i.neutral:(l[0]+l[1])/2;o.domain=[l[0],c,l[1]]}else o.domain=kv(u);return z(z({},o),i)}},{key:"createDefaultScale",value:function(n){var r=n.type,i=n.domain,a=n.unknown,o=n.clamp,u=n.nice,s=R7[r]();return i&&s.domain&&s.domain(i),a&&s.unknown(a),o!==void 0&&s.clamp&&s.clamp(o),u!==void 0&&s.nice&&s.nice(u),s}}]),e}())||rp),ip,ap,F7=(ip=De(),ip(ap=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("LayerAnimateStylePlugin",function(){var r=n.animateStatus;r&&n.models.forEach(function(i){i.addUniforms(z({},n.layerModel.getAnimateUniforms()))})})}}]),e}())||ap),op,up,O7=(op=De(),op(up=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){n.hooks.afterInit.tap("LayerMaskPlugin",function(){var r=n.getLayerConfig(),i=r.maskLayers,a=r.enableMask;if(!n.tileLayer&&i&&i.length>0){var o;(o=n.masks).push.apply(o,ee(i)),n.updateLayerConfig({mask:a})}})}}]),e}())||up),D7=function(){function e(t){var n=t.rendererService,r=t.layerService,i=t.parent;oe(this,e),S(this,"tileResource",new Map),S(this,"layerTiles",[]),this.rendererService=n,this.layerService=r,this.parent=i}return ae(e,[{key:"tiles",get:function(){return this.layerTiles}},{key:"hasTile",value:function(n){return this.layerTiles.some(function(r){return r.key===n})}},{key:"addTile",value:function(n){this.layerTiles.push(n)}},{key:"getTile",value:function(n){return this.layerTiles.find(function(r){return r.key===n})}},{key:"getVisibleTileBylngLat",value:function(n){return this.layerTiles.find(function(r){return r.isLoaded&&r.visible&&r.lnglatInBounds(n)})}},{key:"removeTile",value:function(n){var r=this.layerTiles.findIndex(function(a){return a.key===n}),i=this.layerTiles.splice(r,1);i[0]&&i[0].destroy()}},{key:"updateTileVisible",value:function(n){var r=this.getTile(n.key);if(n.isVisible)if(n.parent){var i=this.isChildrenLoaded(n.parent);r==null||r.updateVisible(i)}else r==null||r.updateVisible(!0);else if(n.parent){var a=this.isChildrenLoaded(n.parent);r==null||r.updateVisible(!a)}else r==null||r.updateVisible(!1)}},{key:"isParentLoaded",value:function(n){var r=n.parent;if(!r)return!0;var i=this.getTile(r==null?void 0:r.key);return!!(i!=null&&i.isLoaded)}},{key:"isChildrenLoaded",value:function(n){var r=this,i=n==null?void 0:n.children;return i.length===0?!0:i.every(function(a){var o=r.getTile(a==null?void 0:a.key);return o?(o==null?void 0:o.isLoaded)===!0:!0})}},{key:"render",value:function(){var t=Y(C.mark(function r(){var i=this,a,o;return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=this.getRenderLayers(),o=a.map(function(){var l=Y(C.mark(function c(f){return C.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,i.layerService.renderTileLayer(f);case 2:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()),s.next=4,Promise.all(o);case 4:case"end":return s.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"getRenderLayers",value:function(){var n=this.layerTiles.filter(function(i){return i.visible&&i.isLoaded}),r=[];return n.map(function(i){return r.push.apply(r,ee(i.getLayers()))}),r}},{key:"getLayers",value:function(){var n=this.layerTiles.filter(function(i){return i.isLoaded}),r=[];return n.map(function(i){return r.push.apply(r,ee(i.getLayers()))}),r}},{key:"getTiles",value:function(){return this.layerTiles}},{key:"destroy",value:function(){this.layerTiles.forEach(function(n){return n.destroy()}),this.tileResource.clear()}}]),e}();/**
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
***************************************************************************** */function N7(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Jn=function(){function e(t,n){this.next=null,this.key=t,this.data=n,this.left=null,this.right=null}return e}();function B7(e,t){return e>t?1:e<t?-1:0}function Wn(e,t,n){for(var r=new Jn(null,null),i=r,a=r;;){var o=n(e,t.key);if(o<0){if(t.left===null)break;if(n(e,t.left.key)<0){var u=t.left;if(t.left=u.right,u.right=t,t=u,t.left===null)break}a.left=t,a=t,t=t.left}else if(o>0){if(t.right===null)break;if(n(e,t.right.key)>0){var u=t.right;if(t.right=u.left,u.left=t,t=u,t.right===null)break}i.right=t,i=t,t=t.right}else break}return i.right=t.left,a.left=t.right,t.left=r.right,t.right=r.left,t}function Pu(e,t,n,r){var i=new Jn(e,t);if(n===null)return i.left=i.right=null,i;n=Wn(e,n,r);var a=r(e,n.key);return a<0?(i.left=n.left,i.right=n,n.left=null):a>=0&&(i.right=n.right,i.left=n,n.right=null),i}function sp(e,t,n){var r=null,i=null;if(t){t=Wn(e,t,n);var a=n(t.key,e);a===0?(r=t.left,i=t.right):a<0?(i=t.right,t.right=null,r=t):(r=t.left,t.left=null,i=t)}return{left:r,right:i}}function U7(e,t,n){return t===null?e:(e===null||(t=Wn(e.key,t,n),t.left=e),t)}function Cs(e,t,n,r,i){if(e){r(""+t+(n?"└── ":"├── ")+i(e)+`
`);var a=t+(n?"    ":"│   ");e.left&&Cs(e.left,a,!1,r,i),e.right&&Cs(e.right,a,!0,r,i)}}var Rl=function(){function e(t){t===void 0&&(t=B7),this._root=null,this._size=0,this._comparator=t}return e.prototype.insert=function(t,n){return this._size++,this._root=Pu(t,n,this._root,this._comparator)},e.prototype.add=function(t,n){var r=new Jn(t,n);this._root===null&&(r.left=r.right=null,this._size++,this._root=r);var i=this._comparator,a=Wn(t,this._root,i),o=i(t,a.key);return o===0?this._root=a:(o<0?(r.left=a.left,r.right=a,a.left=null):o>0&&(r.right=a.right,r.left=a,a.right=null),this._size++,this._root=r),this._root},e.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},e.prototype._remove=function(t,n,r){var i;if(n===null)return null;n=Wn(t,n,r);var a=r(t,n.key);return a===0?(n.left===null?i=n.right:(i=Wn(t,n.left,r),i.right=n.right),this._size--,i):n},e.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=Wn(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},e.prototype.findStatic=function(t){for(var n=this._root,r=this._comparator;n;){var i=r(t,n.key);if(i===0)return n;i<0?n=n.left:n=n.right}return null},e.prototype.find=function(t){return this._root&&(this._root=Wn(t,this._root,this._comparator),this._comparator(t,this._root.key)!==0)?null:this._root},e.prototype.contains=function(t){for(var n=this._root,r=this._comparator;n;){var i=r(t,n.key);if(i===0)return!0;i<0?n=n.left:n=n.right}return!1},e.prototype.forEach=function(t,n){for(var r=this._root,i=[],a=!1;!a;)r!==null?(i.push(r),r=r.left):i.length!==0?(r=i.pop(),t.call(n,r),r=r.right):a=!0;return this},e.prototype.range=function(t,n,r,i){for(var a=[],o=this._comparator,u=this._root,s;a.length!==0||u;)if(u)a.push(u),u=u.left;else{if(u=a.pop(),s=o(u.key,n),s>0)break;if(o(u.key,t)>=0&&r.call(i,u))return this;u=u.right}return this},e.prototype.keys=function(){var t=[];return this.forEach(function(n){var r=n.key;return t.push(r)}),t},e.prototype.values=function(){var t=[];return this.forEach(function(n){var r=n.data;return t.push(r)}),t},e.prototype.min=function(){return this._root?this.minNode(this._root).key:null},e.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},e.prototype.minNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.left;)t=t.left;return t},e.prototype.maxNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.right;)t=t.right;return t},e.prototype.at=function(t){for(var n=this._root,r=!1,i=0,a=[];!r;)if(n)a.push(n),n=n.left;else if(a.length>0){if(n=a.pop(),i===t)return n;i++,n=n.right}else r=!0;return null},e.prototype.next=function(t){var n=this._root,r=null;if(t.right){for(r=t.right;r.left;)r=r.left;return r}for(var i=this._comparator;n;){var a=i(t.key,n.key);if(a===0)break;a<0?(r=n,n=n.left):n=n.right}return r},e.prototype.prev=function(t){var n=this._root,r=null;if(t.left!==null){for(r=t.left;r.right;)r=r.right;return r}for(var i=this._comparator;n;){var a=i(t.key,n.key);if(a===0)break;a<0?n=n.left:(r=n,n=n.right)}return r},e.prototype.clear=function(){return this._root=null,this._size=0,this},e.prototype.toList=function(){return $7(this._root)},e.prototype.load=function(t,n,r){n===void 0&&(n=[]),r===void 0&&(r=!1);var i=t.length,a=this._comparator;if(r&&Ms(t,n,0,i-1,a),this._root===null)this._root=ws(t,n,0,i),this._size=i;else{var o=V7(this.toList(),z7(t,n),a);i=this._size+i,this._root=Ts({head:o},0,i)}return this},e.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){t===void 0&&(t=function(r){return String(r.key)});var n=[];return Cs(this._root,"",!0,function(r){return n.push(r)},t),n.join("")},e.prototype.update=function(t,n,r){var i=this._comparator,a=sp(t,this._root,i),o=a.left,u=a.right;i(t,n)<0?u=Pu(n,r,u,i):o=Pu(n,r,o,i),this._root=U7(o,u,i)},e.prototype.split=function(t){return sp(t,this._root,this._comparator)},e.prototype[Symbol.iterator]=function(){var t,n,r;return N7(this,function(i){switch(i.label){case 0:t=this._root,n=[],r=!1,i.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return i.sent(),t=t.right,[3,5];case 4:r=!0,i.label=5;case 5:return[3,1];case 6:return[2]}})},e}();function ws(e,t,n,r){var i=r-n;if(i>0){var a=n+Math.floor(i/2),o=e[a],u=t[a],s=new Jn(o,u);return s.left=ws(e,t,n,a),s.right=ws(e,t,a+1,r),s}return null}function z7(e,t){for(var n=new Jn(null,null),r=n,i=0;i<e.length;i++)r=r.next=new Jn(e[i],t[i]);return r.next=null,n.next}function $7(e){for(var t=e,n=[],r=!1,i=new Jn(null,null),a=i;!r;)t?(n.push(t),t=t.left):n.length>0?(t=a=a.next=n.pop(),t=t.right):r=!0;return a.next=null,i.next}function Ts(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=Ts(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=Ts(e,i+1,n),o}return null}function V7(e,t,n){for(var r=new Jn(null,null),i=r,a=e,o=t;a!==null&&o!==null;)n(a.key,o.key)<0?(i.next=a,a=a.next):(i.next=o,o=o.next),i=i.next;return a!==null?i.next=a:o!==null&&(i.next=o),r.next}function Ms(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,u=r+1;;){do o++;while(i(e[o],a)<0);do u--;while(i(e[u],a)>0);if(o>=u)break;var s=e[o];e[o]=e[u],e[u]=s,s=t[o],t[o]=t[u],t[u]=s}Ms(e,t,n,u,i),Ms(e,t,u+1,r,i)}}const kn=11102230246251565e-32,Rt=134217729,j7=(3+8*kn)*kn;function Fu(e,t,n,r,i){let a,o,u,s,l=t[0],c=r[0],f=0,h=0;c>l==c>-l?(a=l,l=t[++f]):(a=c,c=r[++h]);let d=0;if(f<e&&h<n)for(c>l==c>-l?(o=l+a,u=a-(o-l),l=t[++f]):(o=c+a,u=a-(o-c),c=r[++h]),a=o,u!==0&&(i[d++]=u);f<e&&h<n;)c>l==c>-l?(o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f]):(o=a+c,s=o-a,u=a-(o-s)+(c-s),c=r[++h]),a=o,u!==0&&(i[d++]=u);for(;f<e;)o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f],a=o,u!==0&&(i[d++]=u);for(;h<n;)o=a+c,s=o-a,u=a-(o-s)+(c-s),c=r[++h],a=o,u!==0&&(i[d++]=u);return(a!==0||d===0)&&(i[d++]=a),d}function H7(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function fa(e){return new Float64Array(e)}const G7=(3+16*kn)*kn,W7=(2+12*kn)*kn,Y7=(9+64*kn)*kn*kn,Lr=fa(4),lp=fa(8),cp=fa(12),fp=fa(16),Ot=fa(4);function X7(e,t,n,r,i,a,o){let u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,T,D;const U=e-i,I=n-i,w=t-a,k=r-a;x=U*k,h=Rt*U,d=h-(h-U),v=U-d,h=Rt*k,p=h-(h-k),g=k-p,b=v*g-(x-d*p-v*p-d*g),M=w*I,h=Rt*w,d=h-(h-w),v=w-d,h=Rt*I,p=h-(h-I),g=I-p,T=v*g-(M-d*p-v*p-d*g),m=b-T,f=b-m,Lr[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Lr[1]=y-(m+f)+(f-M),D=_+m,f=D-_,Lr[2]=_-(D-f)+(m-f),Lr[3]=D;let P=H7(4,Lr),B=W7*o;if(P>=B||-P>=B||(f=e-U,u=e-(U+f)+(f-i),f=n-I,l=n-(I+f)+(f-i),f=t-w,s=t-(w+f)+(f-a),f=r-k,c=r-(k+f)+(f-a),u===0&&s===0&&l===0&&c===0)||(B=Y7*o+j7*Math.abs(P),P+=U*c+k*u-(w*l+I*s),P>=B||-P>=B))return P;x=u*k,h=Rt*u,d=h-(h-u),v=u-d,h=Rt*k,p=h-(h-k),g=k-p,b=v*g-(x-d*p-v*p-d*g),M=s*I,h=Rt*s,d=h-(h-s),v=s-d,h=Rt*I,p=h-(h-I),g=I-p,T=v*g-(M-d*p-v*p-d*g),m=b-T,f=b-m,Ot[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ot[1]=y-(m+f)+(f-M),D=_+m,f=D-_,Ot[2]=_-(D-f)+(m-f),Ot[3]=D;const K=Fu(4,Lr,4,Ot,lp);x=U*c,h=Rt*U,d=h-(h-U),v=U-d,h=Rt*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),M=w*l,h=Rt*w,d=h-(h-w),v=w-d,h=Rt*l,p=h-(h-l),g=l-p,T=v*g-(M-d*p-v*p-d*g),m=b-T,f=b-m,Ot[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ot[1]=y-(m+f)+(f-M),D=_+m,f=D-_,Ot[2]=_-(D-f)+(m-f),Ot[3]=D;const ce=Fu(K,lp,4,Ot,cp);x=u*c,h=Rt*u,d=h-(h-u),v=u-d,h=Rt*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),M=s*l,h=Rt*s,d=h-(h-s),v=s-d,h=Rt*l,p=h-(h-l),g=l-p,T=v*g-(M-d*p-v*p-d*g),m=b-T,f=b-m,Ot[0]=b-(m+f)+(f-T),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ot[1]=y-(m+f)+(f-M),D=_+m,f=D-_,Ot[2]=_-(D-f)+(m-f),Ot[3]=D;const ve=Fu(ce,cp,4,Ot,fp);return fp[ve-1]}function Z7(e,t,n,r,i,a){const o=(t-a)*(n-i),u=(e-i)*(r-a),s=o-u,l=Math.abs(o+u);return Math.abs(s)>=G7*l?s:-X7(e,t,n,r,i,a,l)}var Dm={};const bi=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,ks=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;const n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}};let Yn=Number.EPSILON;Yn===void 0&&(Yn=Math.pow(2,-52));const q7=Yn*Yn,hp=(e,t)=>{if(-Yn<e&&e<Yn&&-Yn<t&&t<Yn)return 0;const n=e-t;return n*n<q7*e*t?0:e<t?-1:1};class Q7{constructor(){this.reset()}reset(){this.xRounder=new dp,this.yRounder=new dp}round(t,n){return{x:this.xRounder.round(t),y:this.yRounder.round(n)}}}class dp{constructor(){this.tree=new Rl,this.round(0)}round(t){const n=this.tree.add(t),r=this.tree.prev(n);if(r!==null&&hp(n.key,r.key)===0)return this.tree.remove(t),r.key;const i=this.tree.next(n);return i!==null&&hp(n.key,i.key)===0?(this.tree.remove(t),i.key):t}}const Ji=new Q7,Va=(e,t)=>e.x*t.y-e.y*t.x,Nm=(e,t)=>e.x*t.x+e.y*t.y,vp=(e,t,n)=>{const r=Z7(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:r<0?1:0},lo=e=>Math.sqrt(Nm(e,e)),J7=(e,t,n)=>{const r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return Va(i,r)/lo(i)/lo(r)},K7=(e,t,n)=>{const r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return Nm(i,r)/lo(i)/lo(r)},pp=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},gp=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},e6=(e,t,n,r)=>{if(t.x===0)return gp(n,r,e.x);if(r.x===0)return gp(e,t,n.x);if(t.y===0)return pp(n,r,e.y);if(r.y===0)return pp(e,t,n.y);const i=Va(t,r);if(i==0)return null;const a={x:n.x-e.x,y:n.y-e.y},o=Va(a,t)/i,u=Va(a,r)/i,s=e.x+u*t.x,l=n.x+o*r.x,c=e.y+u*t.y,f=n.y+o*r.y,h=(s+l)/2,d=(c+f)/2;return{x:h,y:d}};class Jt{static compare(t,n){const r=Jt.comparePoints(t.point,n.point);return r!==0?r:(t.point!==n.point&&t.link(n),t.isLeft!==n.isLeft?t.isLeft?1:-1:qn.compare(t.segment,n.segment))}static comparePoints(t,n){return t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0}constructor(t,n){t.events===void 0?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=n}link(t){if(t.point===this.point)throw new Error("Tried to link already linked events");const n=t.point.events;for(let r=0,i=n.length;r<i;r++){const a=n[r];this.point.events.push(a),a.point=this.point}this.checkForConsuming()}checkForConsuming(){const t=this.point.events.length;for(let n=0;n<t;n++){const r=this.point.events[n];if(r.segment.consumedBy===void 0)for(let i=n+1;i<t;i++){const a=this.point.events[i];a.consumedBy===void 0&&r.otherSE.point.events===a.otherSE.point.events&&r.segment.consume(a.segment)}}}getAvailableLinkedEvents(){const t=[];for(let n=0,r=this.point.events.length;n<r;n++){const i=this.point.events[n];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&t.push(i)}return t}getLeftmostComparator(t){const n=new Map,r=i=>{const a=i.otherSE;n.set(i,{sine:J7(this.point,t.point,a.point),cosine:K7(this.point,t.point,a.point)})};return(i,a)=>{n.has(i)||r(i),n.has(a)||r(a);const{sine:o,cosine:u}=n.get(i),{sine:s,cosine:l}=n.get(a);return o>=0&&s>=0?u<l?1:u>l?-1:0:o<0&&s<0?u<l?-1:u>l?1:0:s<o?-1:s>o?1:0}}}let t6=0;class qn{static compare(t,n){const r=t.leftSE.point.x,i=n.leftSE.point.x,a=t.rightSE.point.x,o=n.rightSE.point.x;if(o<r)return 1;if(a<i)return-1;const u=t.leftSE.point.y,s=n.leftSE.point.y,l=t.rightSE.point.y,c=n.rightSE.point.y;if(r<i){if(s<u&&s<l)return 1;if(s>u&&s>l)return-1;const f=t.comparePoint(n.leftSE.point);if(f<0)return 1;if(f>0)return-1;const h=n.comparePoint(t.rightSE.point);return h!==0?h:-1}if(r>i){if(u<s&&u<c)return-1;if(u>s&&u>c)return 1;const f=n.comparePoint(t.leftSE.point);if(f!==0)return f;const h=t.comparePoint(n.rightSE.point);return h<0?1:h>0?-1:1}if(u<s)return-1;if(u>s)return 1;if(a<o){const f=n.comparePoint(t.rightSE.point);if(f!==0)return f}if(a>o){const f=t.comparePoint(n.rightSE.point);if(f<0)return 1;if(f>0)return-1}if(a!==o){const f=l-u,h=a-r,d=c-s,v=o-i;if(f>h&&d<v)return 1;if(f<h&&d>v)return-1}return a>o?1:a<o||l<c?-1:l>c?1:t.id<n.id?-1:t.id>n.id?1:0}constructor(t,n,r,i){this.id=++t6,this.leftSE=t,t.segment=this,t.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=t,this.rings=r,this.windings=i}static fromRing(t,n,r){let i,a,o;const u=Jt.comparePoints(t,n);if(u<0)i=t,a=n,o=1;else if(u>0)i=n,a=t,o=-1;else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);const s=new Jt(i,!0),l=new Jt(a,!1);return new qn(s,l,[r],[o])}replaceRightSE(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const t=this.leftSE.point.y,n=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<n?t:n},ur:{x:this.rightSE.point.x,y:t>n?t:n}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}comparePoint(t){if(this.isAnEndpoint(t))return 0;const n=this.leftSE.point,r=this.rightSE.point,i=this.vector();if(n.x===r.x)return t.x===n.x?0:t.x<n.x?1:-1;const a=(t.y-n.y)/i.y,o=n.x+a*i.x;if(t.x===o)return 0;const u=(t.x-n.x)/i.x,s=n.y+u*i.y;return t.y===s?0:t.y<s?-1:1}getIntersection(t){const n=this.bbox(),r=t.bbox(),i=ks(n,r);if(i===null)return null;const a=this.leftSE.point,o=this.rightSE.point,u=t.leftSE.point,s=t.rightSE.point,l=bi(n,u)&&this.comparePoint(u)===0,c=bi(r,a)&&t.comparePoint(a)===0,f=bi(n,s)&&this.comparePoint(s)===0,h=bi(r,o)&&t.comparePoint(o)===0;if(c&&l)return h&&!f?o:!h&&f?s:null;if(c)return f&&a.x===s.x&&a.y===s.y?null:a;if(l)return h&&o.x===u.x&&o.y===u.y?null:u;if(h&&f)return null;if(h)return o;if(f)return s;const d=e6(a,this.vector(),u,t.vector());return d===null||!bi(i,d)?null:Ji.round(d.x,d.y)}split(t){const n=[],r=t.events!==void 0,i=new Jt(t,!0),a=new Jt(t,!1),o=this.rightSE;this.replaceRightSE(a),n.push(a),n.push(i);const u=new qn(i,o,this.rings.slice(),this.windings.slice());return Jt.comparePoints(u.leftSE.point,u.rightSE.point)>0&&u.swapEvents(),Jt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),a.checkForConsuming()),n}swapEvents(){const t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let n=0,r=this.windings.length;n<r;n++)this.windings[n]*=-1}consume(t){let n=this,r=t;for(;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;const i=qn.compare(n,r);if(i!==0){if(i>0){const a=n;n=r,r=a}if(n.prev===r){const a=n;n=r,r=a}for(let a=0,o=r.rings.length;a<o;a++){const u=r.rings[a],s=r.windings[a],l=n.rings.indexOf(u);l===-1?(n.rings.push(u),n.windings.push(s)):n.windings[l]+=s}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};const n=this._afterState.rings,r=this._afterState.windings,i=this._afterState.multiPolys;for(let u=0,s=this.rings.length;u<s;u++){const l=this.rings[u],c=this.windings[u],f=n.indexOf(l);f===-1?(n.push(l),r.push(c)):r[f]+=c}const a=[],o=[];for(let u=0,s=n.length;u<s;u++){if(r[u]===0)continue;const l=n[u],c=l.poly;if(o.indexOf(c)===-1)if(l.isExterior)a.push(c);else{o.indexOf(c)===-1&&o.push(c);const f=a.indexOf(l.poly);f!==-1&&a.splice(f,1)}}for(let u=0,s=a.length;u<s;u++){const l=a[u].multiPoly;i.indexOf(l)===-1&&i.push(l)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const t=this.beforeState().multiPolys,n=this.afterState().multiPolys;switch(rn.type){case"union":{const r=t.length===0,i=n.length===0;this._isInResult=r!==i;break}case"intersection":{let r,i;t.length<n.length?(r=t.length,i=n.length):(r=n.length,i=t.length),this._isInResult=i===rn.numMultiPolys&&r<i;break}case"xor":{const r=Math.abs(t.length-n.length);this._isInResult=r%2===1;break}case"difference":{const r=i=>i.length===1&&i[0].isSubject;this._isInResult=r(t)!==r(n);break}default:throw new Error(`Unrecognized operation type found ${rn.type}`)}return this._isInResult}}class mp{constructor(t,n,r){if(!Array.isArray(t)||t.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],typeof t[0][0]!="number"||typeof t[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const i=Ji.round(t[0][0],t[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};let a=i;for(let o=1,u=t.length;o<u;o++){if(typeof t[o][0]!="number"||typeof t[o][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let s=Ji.round(t[o][0],t[o][1]);s.x===a.x&&s.y===a.y||(this.segments.push(qn.fromRing(a,s,this)),s.x<this.bbox.ll.x&&(this.bbox.ll.x=s.x),s.y<this.bbox.ll.y&&(this.bbox.ll.y=s.y),s.x>this.bbox.ur.x&&(this.bbox.ur.x=s.x),s.y>this.bbox.ur.y&&(this.bbox.ur.y=s.y),a=s)}(i.x!==a.x||i.y!==a.y)&&this.segments.push(qn.fromRing(a,i,this))}getSweepEvents(){const t=[];for(let n=0,r=this.segments.length;n<r;n++){const i=this.segments[n];t.push(i.leftSE),t.push(i.rightSE)}return t}}class n6{constructor(t,n){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new mp(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let r=1,i=t.length;r<i;r++){const a=new mp(t[r],this,!1);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.interiorRings.push(a)}this.multiPoly=n}getSweepEvents(){const t=this.exteriorRing.getSweepEvents();for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class yp{constructor(t,n){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof t[0][0][0]=="number"&&(t=[t])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let r=0,i=t.length;r<i;r++){const a=new n6(t[r],this);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.polys.push(a)}this.isSubject=n}getSweepEvents(){const t=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class co{static factory(t){const n=[];for(let r=0,i=t.length;r<i;r++){const a=t[r];if(!a.isInResult()||a.ringOut)continue;let o=null,u=a.leftSE,s=a.rightSE;const l=[u],c=u.point,f=[];for(;o=u,u=s,l.push(u),u.point!==c;)for(;;){const h=u.getAvailableLinkedEvents();if(h.length===0){const p=l[0].point,g=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${p.x}, ${p.y}]. Last matching segment found ends at [${g.x}, ${g.y}].`)}if(h.length===1){s=h[0].otherSE;break}let d=null;for(let p=0,g=f.length;p<g;p++)if(f[p].point===u.point){d=p;break}if(d!==null){const p=f.splice(d)[0],g=l.splice(p.index);g.unshift(g[0].otherSE),n.push(new co(g.reverse()));continue}f.push({index:l.length,point:u.point});const v=u.getLeftmostComparator(o);s=h.sort(v)[0].otherSE;break}n.push(new co(l))}return n}constructor(t){this.events=t;for(let n=0,r=t.length;n<r;n++)t[n].segment.ringOut=this;this.poly=null}getGeom(){let t=this.events[0].point;const n=[t];for(let l=1,c=this.events.length-1;l<c;l++){const f=this.events[l].point,h=this.events[l+1].point;vp(f,t,h)!==0&&(n.push(f),t=f)}if(n.length===1)return null;const r=n[0],i=n[1];vp(r,t,i)===0&&n.shift(),n.push(n[0]);const a=this.isExteriorRing()?1:-1,o=this.isExteriorRing()?0:n.length-1,u=this.isExteriorRing()?n.length:-1,s=[];for(let l=o;l!=u;l+=a)s.push([n[l].x,n[l].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){const t=this.enclosingRing();this._isExteriorRing=t?!t.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let t=this.events[0];for(let i=1,a=this.events.length;i<a;i++){const o=this.events[i];Jt.compare(t,o)>0&&(t=o)}let n=t.segment.prevInResult(),r=n?n.prevInResult():null;for(;;){if(!n)return null;if(!r)return n.ringOut;if(r.ringOut!==n.ringOut)return r.ringOut.enclosingRing()!==n.ringOut?n.ringOut:n.ringOut.enclosingRing();n=r.prevInResult(),r=n?n.prevInResult():null}}}class _p{constructor(t){this.exteriorRing=t,t.poly=this,this.interiorRings=[]}addInterior(t){this.interiorRings.push(t),t.poly=this}getGeom(){const t=[this.exteriorRing.getGeom()];if(t[0]===null)return null;for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getGeom();i!==null&&t.push(i)}return t}}class r6{constructor(t){this.rings=t,this.polys=this._composePolys(t)}getGeom(){const t=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getGeom();i!==null&&t.push(i)}return t}_composePolys(t){const n=[];for(let r=0,i=t.length;r<i;r++){const a=t[r];if(!a.poly)if(a.isExteriorRing())n.push(new _p(a));else{const o=a.enclosingRing();o.poly||n.push(new _p(o)),o.poly.addInterior(a)}}return n}}class i6{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qn.compare;this.queue=t,this.tree=new Rl(n),this.segments=[]}process(t){const n=t.segment,r=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(n),r;const i=t.isLeft?this.tree.add(n):this.tree.find(n);if(!i)throw new Error(`Unable to find segment #${n.id} [${n.leftSE.point.x}, ${n.leftSE.point.y}] -> [${n.rightSE.point.x}, ${n.rightSE.point.y}] in SweepLine tree.`);let a=i,o=i,u,s;for(;u===void 0;)a=this.tree.prev(a),a===null?u=null:a.key.consumedBy===void 0&&(u=a.key);for(;s===void 0;)o=this.tree.next(o),o===null?s=null:o.key.consumedBy===void 0&&(s=o.key);if(t.isLeft){let l=null;if(u){const f=u.getIntersection(n);if(f!==null&&(n.isAnEndpoint(f)||(l=f),!u.isAnEndpoint(f))){const h=this._splitSafely(u,f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}}let c=null;if(s){const f=s.getIntersection(n);if(f!==null&&(n.isAnEndpoint(f)||(c=f),!s.isAnEndpoint(f))){const h=this._splitSafely(s,f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}}if(l!==null||c!==null){let f=null;l===null?f=c:c===null?f=l:f=Jt.comparePoints(l,c)<=0?l:c,this.queue.remove(n.rightSE),r.push(n.rightSE);const h=n.split(f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}r.length>0?(this.tree.remove(n),r.push(t)):(this.segments.push(n),n.prev=u)}else{if(u&&s){const l=u.getIntersection(s);if(l!==null){if(!u.isAnEndpoint(l)){const c=this._splitSafely(u,l);for(let f=0,h=c.length;f<h;f++)r.push(c[f])}if(!s.isAnEndpoint(l)){const c=this._splitSafely(s,l);for(let f=0,h=c.length;f<h;f++)r.push(c[f])}}}this.tree.remove(n)}return r}_splitSafely(t,n){this.tree.remove(t);const r=t.rightSE;this.queue.remove(r);const i=t.split(n);return i.push(r),t.consumedBy===void 0&&this.tree.add(t),i}}const xp=typeof process<"u"&&Dm.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,a6=typeof process<"u"&&Dm.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class o6{run(t,n,r){rn.type=t,Ji.reset();const i=[new yp(n,!0)];for(let f=0,h=r.length;f<h;f++)i.push(new yp(r[f],!1));if(rn.numMultiPolys=i.length,rn.type==="difference"){const f=i[0];let h=1;for(;h<i.length;)ks(i[h].bbox,f.bbox)!==null?h++:i.splice(h,1)}if(rn.type==="intersection")for(let f=0,h=i.length;f<h;f++){const d=i[f];for(let v=f+1,p=i.length;v<p;v++)if(ks(d.bbox,i[v].bbox)===null)return[]}const a=new Rl(Jt.compare);for(let f=0,h=i.length;f<h;f++){const d=i[f].getSweepEvents();for(let v=0,p=d.length;v<p;v++)if(a.insert(d[v]),a.size>xp)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const o=new i6(a);let u=a.size,s=a.pop();for(;s;){const f=s.key;if(a.size===u){const d=f.segment;throw new Error(`Unable to pop() ${f.isLeft?"left":"right"} SweepEvent [${f.point.x}, ${f.point.y}] from segment #${d.id} [${d.leftSE.point.x}, ${d.leftSE.point.y}] -> [${d.rightSE.point.x}, ${d.rightSE.point.y}] from queue.`)}if(a.size>xp)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(o.segments.length>a6)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const h=o.process(f);for(let d=0,v=h.length;d<v;d++){const p=h[d];p.consumedBy===void 0&&a.insert(p)}u=a.size,s=a.pop()}Ji.reset();const l=co.factory(o.segments);return new r6(l).getGeom()}}const rn=new o6,u6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return rn.run("union",e,n)},s6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return rn.run("intersection",e,n)},l6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return rn.run("xor",e,n)},c6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return rn.run("difference",e,n)};var f6={union:u6,intersection:s6,xor:l6,difference:c6};function h6(e,t,n){n===void 0&&(n={});var r=Xl(e),i=Xl(t),a=f6.union(r.coordinates,i.coordinates);return a.length===0?null:a.length===1?Hs(a[0],n.properties):V1(a,n.properties)}var d6=function(){function e(){oe(this,e)}return ae(e,[{key:"getCombineFeature",value:function(n){var r=null,i=n[0];return n.map(function(a){var o=Hs(a.coordinates);r===null?r=o:r=h6(r,o)}),i&&(r.properties=z({},i)),r}}]),e}(),Si="select",Ai="active",v6=function(){function e(t){var n=t.layerService,r=t.tileLayerService,i=t.parent;oe(this,e),S(this,"tilePickID",new Map),this.layerService=n,this.tileLayerService=r,this.parent=i,this.tileSourceService=new d6}return ae(e,[{key:"pickRender",value:function(n){var r=this.tileLayerService.getVisibleTileBylngLat(n.lngLat);if(r){var i=r.getMainLayer();i==null||i.layerPickService.pickRender(n)}}},{key:"pick",value:function(){var t=Y(C.mark(function r(i,a){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.parent.getContainer(),u=o.get(ie.IPickingService),i.type!=="RasterLayer"){f.next=8;break}if(s=this.tileLayerService.getVisibleTileBylngLat(a.lngLat),!(s&&s.getMainLayer()!==void 0)){f.next=7;break}return l=s.getMainLayer(),f.abrupt("return",l.layerPickService.pickRasterLayer(l,a,this.parent));case 7:return f.abrupt("return",!1);case 8:return this.pickRender(a),f.abrupt("return",u.pickFromPickingFBO(i,a));case 10:case"end":return f.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"selectFeature",value:function(n){var r=Pe(n,3),i=r[0],a=r[1],o=r[2],u=this.color2PickId(i,a,o);this.tilePickID.set(Si,u),this.updateHighLight(i,a,o,Si)}},{key:"highlightPickedFeature",value:function(n){var r=Pe(n,3),i=r[0],a=r[1],o=r[2],u=this.color2PickId(i,a,o);this.tilePickID.set(Ai,u),this.updateHighLight(i,a,o,Ai)}},{key:"updateHighLight",value:function(n,r,i,a){this.tileLayerService.tiles.map(function(o){var u=o.getMainLayer();switch(a){case Si:u==null||u.hooks.beforeSelect.call([n,r,i]);break;case Ai:u==null||u.hooks.beforeHighlight.call([n,r,i]);break}})}},{key:"setPickState",value:function(){var n=this.tilePickID.get(Si),r=this.tilePickID.get(Ai);if(n){var i=this.pickId2Color(n),a=Pe(i,3),o=a[0],u=a[1],s=a[2];this.updateHighLight(o,u,s,Si);return}if(r){var l=this.pickId2Color(r),c=Pe(l,3),f=c[0],h=c[1],d=c[2];this.updateHighLight(f,h,d,Ai);return}}},{key:"color2PickId",value:function(n,r,i){return fr(new Uint8Array([n,r,i]))}},{key:"pickId2Color",value:function(n){return Ln(n)}},{key:"getFeatureById",value:function(n){var r=this.tileLayerService.getTiles().filter(function(a){return a.visible}),i=[];return r.forEach(function(a){i.push.apply(i,ee(a.getFeatureById(n)))}),i}},{key:"pickRasterLayer",value:function(n,r,i){return!1}}]),e}();function p6(e){return e==="PolygonLayer"?tm:e==="LineLayer"?Gg:ms}function g6(e){return["PolygonLayer","LineLayer"].indexOf(e)!==-1}function m6(e){var t=y6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function y6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _r=function(e){Ee(n,e);var t=m6(n);function n(r,i){var a;return oe(this,n),a=t.call(this),S(R(a),"visible",!0),S(R(a),"layers",[]),S(R(a),"isLoaded",!1),S(R(a),"tileMaskLayers",[]),a.parent=i,a.sourceTile=r,a.x=r.x,a.y=r.y,a.z=r.z,a.key="".concat(a.x,"_").concat(a.y,"_").concat(a.z),a}return ae(n,[{key:"getLayers",value:function(){return this.layers}},{key:"styleUpdate",value:function(){}},{key:"lnglatInBounds",value:function(i){var a=Pe(this.sourceTile.bounds,4),o=a[0],u=a[1],s=a[2],l=a[3],c=i.lng,f=i.lat;return c>=o&&c<=s&&f>=u&&f<=l}},{key:"getLayerOptions",value:function(){var i,a=this.parent.getLayerConfig();return z(z({},a),{},{textAllowOverlap:!0,autoFit:!1,maskLayers:this.getMaskLayer(),tileMask:g6(this.parent.type),mask:a.mask||((i=a.maskLayers)===null||i===void 0?void 0:i.length)!==0&&a.enableMask})}},{key:"getMaskLayer",value:function(){var i=this,a=this.parent.getLayerConfig(),o=a.maskLayers,u=[];return o==null||o.forEach(function(s){if(!s.tileLayer)return u.push(s),s;var l=s.tileLayer,c=l.getTile(i.sourceTile.key),f=c==null?void 0:c.getLayers()[0];f&&u.push(f)}),u}},{key:"addTileMask",value:function(){var r=Y(C.mark(function a(){var o,u,s;return C.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=new tm({name:"mask",visible:!0,enablePicking:!1}).source({type:"FeatureCollection",features:[this.sourceTile.bboxPolygon]},{parser:{type:"geojson",featureId:"id"}}).shape("fill").color("#0f0").style({opacity:.5}),u=yu(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),c.next=5,o.init();case 5:return this.tileMask=o,s=this.getMainLayer(),s!==void 0&&(s.tileMask=o),c.abrupt("return",o);case 9:case"end":return c.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"addMask",value:function(){var r=Y(C.mark(function a(o,u){var s;return C.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s=yu(this.parent.sceneContainer),u.setContainer(s,this.parent.sceneContainer),c.next=4,u.init();case 4:o.addMask(u),this.tileMaskLayers.push(u);case 6:case"end":return c.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"addLayer",value:function(){var r=Y(C.mark(function a(o){var u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o.isTileLayer=!0,u=yu(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),this.layers.push(o),l.next=6,o.init();case 6:case"end":return l.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"updateVisible",value:function(i){this.visible=i,this.updateOptions("visible",i)}},{key:"updateOptions",value:function(i,a){this.layers.forEach(function(o){o.updateLayerConfig(S({},i,a))})}},{key:"getMainLayer",value:function(){return this.layers[0]}},{key:"getFeatures",value:function(i){return[]}},{key:"getFeatureById",value:function(i){return[]}},{key:"destroy",value:function(){var i;(i=this.tileMask)===null||i===void 0||i.destroy(),this.layers.forEach(function(a){return a.destroy()})}}]),n}(Yt.EventEmitter);function _6(e){var t=x6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function x6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var b6=function(e){Ee(n,e);var t=_6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.getSourceOption(),u=o.data.features[0].properties,s=new Gg().source(o.data,o.options).size(1).shape("line").color("red"),l=new ms({minZoom:this.z-1,maxZoom:this.z+1,textAllowOverlap:!0}).source([u],{parser:{type:"json",x:"x",y:"y"}}).size(20).color("red").shape(this.key).style({stroke:"#fff",strokeWidth:2}),f.next=6,this.addLayer(s);case 6:return f.next=8,this.addLayer(l);case 8:this.isLoaded=!0;case 9:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.layers.testTile.features;return{data:{type:"FeatureCollection",features:a},options:{parser:{type:"geojson"},transforms:i.transforms}}}}]),n}(_r);function S6(e){var t=A6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function A6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var E6=function(e){Ee(n,e);var t=S6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new rw(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),n}(_r);function C6(e){var t=w6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function w6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var T6=function(e){Ee(n,e);var t=C6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new vM(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getFeatures",value:function(i){if(!i)return[];var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=a.featureId,s=this.getFeatures(o);return{data:{type:"FeatureCollection",features:s},options:{parser:{type:"geojson",featureId:u},transforms:i.transforms}}}}]),n}(_r),M6=["rasterData"];function k6(e){var t=I6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function I6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var L6=function(e){Ee(n,e);var t=k6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new bl(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=Kt(a,M6);return{data:o,options:{parser:z({type:"rasterRgb",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}}]),n}(_r);function R6(e){var t=P6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function P6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var F6=function(e){Ee(n,e);var t=R6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l;return C.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new bl(z({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),n}(_r),O6=["rasterData"];function D6(e){var t=N6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function N6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var B6={positions:[0,1],colors:["#000","#fff"]},U6=function(e){Ee(n,e);var t=D6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c,f,h;return C.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=this.getLayerOptions(),c=l.rampColors,f=l.domain,this.colorTexture=this.parent.textureService.getColorTexture(c,f),h=new bl(z(z({},u),{},{colorTexture:this.colorTexture})).source(s.data,s.options),o&&Object.keys(o).forEach(function(p){var g,m,_=p;h[_]((g=o[_])===null||g===void 0?void 0:g.field,(m=o[_])===null||m===void 0?void 0:m.values)}),v.next=9,this.addLayer(h);case 9:this.isLoaded=!0;case 10:case"end":return v.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=Kt(a,O6);return{data:o,options:{parser:z({type:"raster",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}},{key:"styleUpdate",value:function(){for(var i=this,a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];var s=o,l=s.rampColors,c=l===void 0?B6:l,f=s.domain;this.colorTexture=this.parent.textureService.getColorTexture(c,f||qs(c)),this.layers.forEach(function(h){return h.style({colorTexture:i.colorTexture})})}},{key:"destroy",value:function(){this.layers.forEach(function(i){return i.destroy()})}}]),n}(_r);function z6(e){var t=$6();return function(){var r=q(e),i;if(t){var a=q(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ce(this,i)}}function $6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Fa=function(e){Ee(n,e);var t=z6(n);function n(){return oe(this,n),t.apply(this,arguments)}return ae(n,[{key:"initTileLayer",value:function(){var r=Y(C.mark(function a(){var o,u,s,l,c;return C.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=p6(this.parent.type),l=this.getSourceOption(),l){h.next=8;break}return this.isLoaded=!0,this.emit("loaded"),h.abrupt("return");case 8:return c=new s(z({},u)).source(l.data,l.options),Object.keys(o).forEach(function(d){var v,p,g=d;c[g]((v=o[g])===null||v===void 0?void 0:v.field,(p=o[g])===null||p===void 0?void 0:p.values)}),h.next=12,this.addLayer(c);case 12:if(!u.tileMask){h.next=15;break}return h.next=15,this.addTileMask();case 15:this.setLayerMinMaxZoom(c),this.isLoaded=!0,this.emit("loaded");case 18:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=o===void 0?"defaultLayer":o,s=a.featureId,l=s===void 0?"id":s,c=this.getFeatures(u);return{data:{type:"FeatureCollection",features:c},options:{parser:{type:"geojson",featureId:l},transforms:i.transforms}}}},{key:"setLayerMinMaxZoom",value:function(i){i.getModelType()==="text"&&i.updateLayerConfig({maxZoom:this.z+1,minZoom:this.z-1})}},{key:"getFeatures",value:function(i){var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getFeatureById",value:function(i){var a=this.getMainLayer();if(!a)return[];var o=a.getSource().data.dataArray.filter(function(u){return u._id===i});return o}}]),n}(_r);function V6(e){var t=e.type;switch(t){case"PolygonLayer":return Fa;case"LineLayer":return Fa;case"PointLayer":return Fa;case"TileDebugLayer":return b6;case"MaskLayer":return T6;case"RasterLayer":var n=e.getSource().parser.dataType;switch(n){case Tt.RGB:case Tt.CUSTOMRGB:return L6;case Tt.ARRAYBUFFER:case Tt.CUSTOMARRAYBUFFER:return U6;case Tt.TERRAINRGB:case Tt.CUSTOMTERRAINRGB:return F6;default:return E6}default:return Fa}}var j6=["shape","color","size","style","animate","filter","rotate","scale","setBlend","setSelect","setActive","disableMask","enableMask","addMask","removeMask"],H6=Ke.debounce,bp=function(){function e(t){var n=this;oe(this,e),S(this,"initedTileset",!1),S(this,"mapchange",function(){var i;if(n.parent.isVisible()!==!1){var a=n.getCurrentView(),o=a.latLonBounds,u=a.zoom;if(n.mapService.version==="GAODE1.x"){var s=n.parent.getLayerConfig(),l=s.visible;u<2&&l?(n.parent.updateLayerConfig({visible:!1}),n.layerService.reRender()):u>=2&&!l&&(n.parent.updateLayerConfig({visible:!0}),n.layerService.reRender())}n.lastViewStates&&n.lastViewStates.zoom===u&&n.lastViewStates.latLonBounds.toString()===o.toString()||(n.lastViewStates={zoom:u,latLonBounds:o},(i=n.tilesetManager)===null||i===void 0||i.throttleUpdate(u,o))}}),S(this,"viewchange",H6(this.mapchange,24)),this.parent=t;var r=this.parent.getContainer();this.rendererService=r.get(ie.IRendererService),this.layerService=r.get(ie.ILayerService),this.mapService=r.get(ie.IMapService),this.pickingService=r.get(ie.IPickingService),this.tileLayerService=new D7({rendererService:this.rendererService,layerService:this.layerService,parent:t}),this.tilePickService=new v6({tileLayerService:this.tileLayerService,layerService:this.layerService,parent:t}),this.parent.setLayerPickService(this.tilePickService),this.proxy(t),this.initTileSetManager()}return ae(e,[{key:"initTileSetManager",value:function(){var n,r=this.parent.getSource();if(this.tilesetManager=r.tileset,this.initedTileset||(this.bindTilesetEvent(),this.initedTileset=!0),this.parent.isVisible()!==!1){var i=this.getCurrentView(),a=i.latLonBounds,o=i.zoom;(n=this.tilesetManager)===null||n===void 0||n.update(o,a)}}},{key:"getCurrentView",value:function(){var n=this.mapService.getBounds(),r=[n[0][0],n[0][1],n[1][0],n[1][1]],i=this.mapService.getZoom();return{latLonBounds:r,zoom:i}}},{key:"bindTilesetEvent",value:function(){var n=this;this.tilesetManager.on("tile-loaded",function(r){}),this.tilesetManager.on("tile-unload",function(r){n.tileUnLoad(r)}),this.tilesetManager.on("tile-error",function(r,i){n.tileError(r)}),this.tilesetManager.on("tile-update",function(){n.tileUpdate()}),this.mapService.on("zoomend",this.mapchange),this.mapService.on("moveend",this.viewchange)}},{key:"render",value:function(){this.tileLayerService.render()}},{key:"getLayers",value:function(){return this.tileLayerService.getLayers()}},{key:"getTiles",value:function(){return this.tileLayerService.getTiles()}},{key:"getTile",value:function(n){return this.tileLayerService.getTile(n)}},{key:"tileLoaded",value:function(n){}},{key:"tileError",value:function(n){}},{key:"destroy",value:function(){var n;this.mapService.off("zoomend",this.mapchange),this.mapService.off("moveend",this.viewchange),(n=this.tilesetManager)===null||n===void 0||n.destroy(),this.tileLayerService.destroy()}},{key:"reload",value:function(){var n;this.tilesetManager.clear();var r=this.getCurrentView(),i=r.latLonBounds,a=r.zoom;(n=this.tilesetManager)===null||n===void 0||n.update(a,i)}},{key:"tileUnLoad",value:function(n){this.tileLayerService.removeTile(n.key)}},{key:"tileUpdate",value:function(){var t=Y(C.mark(function r(){var i=this,a,o,u;return C.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(this.tilesetManager){l.next=2;break}return l.abrupt("return");case 2:return a=this.parent.getMinZoom(),o=this.parent.getMaxZoom(),u=this.tilesetManager.tiles.filter(function(c){return c.isLoaded}).filter(function(c){return c.isVisibleChange}).filter(function(c){return c.data}).filter(function(c){return c.z>=a&&c.z<o}),l.next=7,Promise.all(u.map(function(){var c=Y(C.mark(function f(h){var d,v;return C.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(i.tileLayerService.hasTile(h.key)){g.next=9;break}return d=V6(i.parent),v=new d(h,i.parent),g.next=5,v.initTileLayer();case 5:i.tilePickService.setPickState(),v.getLayers().length!==0&&(i.tileLayerService.addTile(v),i.tileLayerService.updateTileVisible(h),i.layerService.reRender()),g.next=12;break;case 9:i.tileLayerService.updateTileVisible(h),i.tilePickService.setPickState(),i.layerService.reRender();case 12:case"end":return g.stop()}},f)}));return function(f){return c.apply(this,arguments)}}()));case 7:this.tilesetManager.isLoaded&&this.parent.emit("tiles-loaded",this.tilesetManager.currentTiles);case 8:case"end":return l.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"setPickState",value:function(n){}},{key:"pickRender",value:function(n){this.tilePickService.pickRender(n)}},{key:"selectFeature",value:function(n){this.tilePickService.selectFeature(n)}},{key:"highlightPickedFeature",value:function(n){this.tilePickService.highlightPickedFeature(n)}},{key:"proxy",value:function(n){var r=this;j6.forEach(function(i){var a=n[i].bind(n);n[i]=function(){for(var o=arguments.length,u=new Array(o),s=0;s<o;s++)u[s]=arguments[s];return a.apply(void 0,u),r.getLayers().map(function(l){l[i].apply(l,u)}),i==="style"&&r.getTiles().forEach(function(l){return l.styleUpdate.apply(l,u)}),n}})}}]),e}(),Sp,Ap,G6=(Sp=De(),Sp(Ap=function(){function e(){oe(this,e)}return ae(e,[{key:"build",value:function(){var t=Y(C.mark(function r(i){return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i.prepareBuildModel(),o.next=3,i.buildModels();case 3:case"end":return o.stop()}},r)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"initLayerModel",value:function(){var t=Y(C.mark(function r(i){return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"prepareLayerModel",value:function(){var t=Y(C.mark(function r(i){return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"apply",value:function(n){var r=this;n.hooks.init.tapPromise("LayerModelPlugin",Y(C.mark(function i(){return C.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.getSource().isTile){o.next=4;break}return n.prepareBuildModel(),n.tileLayer=new bp(n),o.abrupt("return");case 4:return n.log(gt.BuildModelStart,xt.INIT),o.next=7,r.initLayerModel(n);case 7:n.log(gt.BuildModelEnd,xt.INIT);case 8:case"end":return o.stop()}},i)}))),n.hooks.beforeRenderData.tapPromise("LayerModelPlugin",function(){var i=Y(C.mark(function a(o){return C.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(o){s.next=2;break}return s.abrupt("return",!1);case 2:if(!n.getSource().isTile){s.next=5;break}return n.tileLayer=new bp(n),s.abrupt("return",!1);case 5:return n.log(gt.BuildModelStart,xt.UPDATE),s.next=8,r.prepareLayerModel(n);case 8:return n.log(gt.BuildModelEnd,xt.UPDATE),s.abrupt("return",!0);case 10:case"end":return s.stop()}},a)}));return function(a){return i.apply(this,arguments)}}())}}]),e}())||Ap),Ep,Cp,W6=(Ep=De(),Ep(Cp=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){n.hooks.afterInit.tap("LayerStylePlugin",function(){var r=n.getLayerConfig(),i=r.autoFit,a=r.fitBoundsOptions;i&&n.fitBounds(a),n.styleNeedUpdate=!1})}}]),e}())||Cp),wp,Tp,Y6=["type"],Mp={directional:{lights:"u_DirectionalLights",num:"u_NumOfDirectionalLights"},spot:{lights:"u_SpotLights",num:"u_NumOfSpotLights"}},X6={type:"directional",direction:[1,10.5,12],ambient:[.2,.2,.2],diffuse:[.6,.6,.6],specular:[.1,.1,.1]},Z6={direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0]},q6={position:[0,0,0],direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0],constant:1,linear:0,quadratic:0,angle:14,exponent:40,blur:5};function Q6(e){var t={u_DirectionalLights:new Array(3).fill(z({},Z6)),u_NumOfDirectionalLights:0,u_SpotLights:new Array(3).fill(z({},q6)),u_NumOfSpotLights:0};return(!e||!e.length)&&(e=[X6]),e.forEach(function(n){var r=n.type,i=r===void 0?"directional":r,a=Kt(n,Y6),o=Mp[i].lights,u=Mp[i].num,s=t[u];t[o][s]=z(z({},t[o][s]),a),t[u]++}),t}var J6=(wp=De(),wp(Tp=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("LightingPlugin",function(){var r=n.getLayerConfig(),i=r.enableLighting;i&&n.models.forEach(function(a){return a.addUniforms(z({},Q6()))})})}}]),e}())||Tp),kp,Ip,K6=(kp=De(),kp(Ip=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n,r){var i=this,a=r.rendererService,o=r.postProcessingPassFactory,u=r.normalPassFactory;n.hooks.init.tapPromise("MultiPassRendererPlugin",function(){var s=n.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,f=c===void 0?[]:c;i.enabled=!!l&&n.getLayerConfig().enableMultiPassRenderer!==!1,i.enabled&&(n.multiPassRenderer=Bg(n,f,o,u),n.multiPassRenderer.setRenderFlag(!0))}),n.hooks.beforeRender.tap("MultiPassRendererPlugin",function(){if(i.enabled){var s=a.getViewportSize(),l=s.width,c=s.height;n.multiPassRenderer.resize(l,c)}})}}]),e}())||Ip),Lp,Rp,ek=Ke.isNumber,Rr={NONE:0,ENCODE:1,HIGHLIGHT:2},tk=(Lp=De(),Lp(Rp=function(){function e(){oe(this,e)}return ae(e,[{key:"pickOption2Array",value:function(){var n=[];return this.pickingUniformMap.forEach(function(r,i){ek(r)?n.push(r):n.push.apply(n,ee(r))}),n}},{key:"updatePickOption",value:function(n,r){var i=this;Object.keys(n).forEach(function(s){i.pickingUniformMap.set(s,n[s])});var a=r.getLayerConfig().pickingBuffer||0,o=Number(r.getShaderPickStat());this.pickingUniformMap.set("u_PickingBuffer",a),this.pickingUniformMap.set("u_shaderPick",o);var u=r.getPickingUniformBuffer();u.subData({offset:0,data:this.pickOption2Array()})}},{key:"apply",value:function(n,r){var i=this;r.rendererService;var a=r.styleAttributeService;this.pickingUniformMap=new Map([["u_HighlightColor",[1,0,0,1]],["u_SelectColor",[1,0,0,1]],["u_PickingColor",[0,0,0]],["u_PickingStage",0],["u_CurrentSelectedId",[0,0,0]],["u_PickingThreshold",10],["u_PickingBuffer",0],["u_shaderPick",0],["u_EnableSelect",0],["u_activeMix",0]]),n.hooks.init.tapPromise("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;a.registerStyleAttribute({name:"pickingColor",type:Se.Attribute,descriptor:{name:"a_PickingColor",shaderLocation:Ie.PICKING_COLOR,buffer:{data:[],type:L.FLOAT},size:3,update:function(l){var c=l.id;return u?Ln(c):[0,0,0]}}})}),n.hooks.beforePickingEncode.tap("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;u&&n.isVisible()&&(i.updatePickOption({u_PickingStage:Rr.ENCODE},n),n.models.forEach(function(s){return s.addUniforms({u_PickingStage:Rr.ENCODE})}))}),n.hooks.afterPickingEncode.tap("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;u&&n.isVisible()&&(i.updatePickOption({u_PickingStage:Rr.HIGHLIGHT},n),n.models.forEach(function(s){return s.addUniforms({u_PickingStage:Rr.HIGHLIGHT})}))}),n.hooks.beforeHighlight.tap("PixelPickingPlugin",function(o){var u=n.getLayerConfig(),s=u.highlightColor,l=u.activeMix,c=l===void 0?0:l,f=typeof s=="string"?tt(s):s||[1,0,0,1];n.updateLayerConfig({pickedFeatureID:fr(new Uint8Array(o))});var h={u_PickingStage:Rr.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c};i.updatePickOption(h,n),n.models.forEach(function(d){return d.addUniforms(h)})}),n.hooks.beforeSelect.tap("PixelPickingPlugin",function(o){var u=n.getLayerConfig(),s=u.selectColor,l=u.selectMix,c=l===void 0?0:l,f=typeof s=="string"?tt(s):s||[1,0,0,1];n.updateLayerConfig({pickedFeatureID:fr(new Uint8Array(o))});var h={u_PickingStage:Rr.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c,u_CurrentSelectedId:o,u_SelectColor:f.map(function(d){return d*255}),u_EnableSelect:1};i.updatePickOption(h,n),n.models.forEach(function(d){return d.addUniforms(h)})})}}]),e}())||Rp),nk=["mvt","geojsonvt","testTile"];function rk(e){var t=e.getSource();return nk.includes(t.parser.type)}var Pp,Fp,ik=(Pp=De(),Pp(Fp=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("RegisterStyleAttributePlugin",function(){rk(n)||i.registerBuiltinAttributes(a,n)})}},{key:"registerBuiltinAttributes",value:function(n,r){if(r.type==="MaskLayer"){this.registerPositionAttribute(n);return}this.registerPositionAttribute(n),this.registerColorAttribute(n),this.registerVertexIdAttribute(n)}},{key:"registerPositionAttribute",value:function(n){n.registerStyleAttribute({name:"position",type:Se.Attribute,descriptor:{name:"a_Position",shaderLocation:Ie.POSITION,buffer:{data:[],type:L.FLOAT},size:3,update:function(i,a,o){return o.length===2?[o[0],o[1],0]:[o[0],o[1],o[2]]}}})}},{key:"registerColorAttribute",value:function(n){n.registerStyleAttribute({name:"color",type:Se.Attribute,descriptor:{name:"a_Color",shaderLocation:Ie.COLOR,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:4,update:function(i){var a=i.color;return!a||!a.length?[1,1,1,1]:a}}})}},{key:"registerVertexIdAttribute",value:function(n){n.registerStyleAttribute({name:"vertexId",type:Se.Attribute,descriptor:{name:"a_vertexId",shaderLocation:Ie.VERTEX_ID,buffer:{usage:L.DYNAMIC_DRAW,data:[],type:L.FLOAT},size:1,update:function(i,a){return[a]}}})}}]),e}())||Fp),Op,Dp,Np,Bp,Up,zp,$p,sr,Vp,jp,Hp,Gp,Wp,ak=(Op=De(),Dp=je(ie.ICameraService),Np=je(ie.ICoordinateSystemService),Bp=je(ie.IRendererService),Up=je(ie.IMapService),zp=je(ie.ILayerService),Op($p=(sr=function(){function e(){oe(this,e),$e(this,"cameraService",Vp,this),$e(this,"coordinateSystemService",jp,this),$e(this,"rendererService",Hp,this),$e(this,"mapService",Gp,this),$e(this,"layerService",Wp,this)}return ae(e,[{key:"apply",value:function(n){var r=this,i=this.mapService.version,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=[0,0],u;this.rendererService.uniformBuffers[0]||(u=this.rendererService.createBuffer({data:new Float32Array(16*4+4*7),isUBO:!0}),this.rendererService.uniformBuffers[0]=u),n.hooks.beforeRender.tap("ShaderUniformPlugin",function(){var s=n.getLayerConfig().tileOrigin;if(r.coordinateSystemService.refresh(s),i==="GAODE2.x"){r.setLayerCenter(n),a=r.mapService.map.customCoords.getMVPMatrix(),o=r.mapService.getCustomCoordCenter();var l=n.getLayerUniformBuffer();l.subData({offset:0,data:new Uint8Array(new Float32Array([].concat(ee(a),ee(o))).buffer)})}var c=r.rendererService.getViewportSize(),f=c.width,h=c.height,d=r.generateUBO(a,o,f,h),v=d.data,p=d.uniforms;if(r.layerService.alreadyInRendering&&r.rendererService.uniformBuffers[0]){var g=r.rendererService.uniformBuffers[0];g.subData({offset:0,data:v})}var m=r.rendererService.queryVerdorInfo();m==="WebGL1"&&n.models.forEach(function(_){_.addUniforms(z(z({},p),{},{u_PickingBuffer:n.getLayerConfig().pickingBuffer||0,u_shaderPick:Number(n.getShaderPickStat())}))})})}},{key:"setLayerCenter",value:function(n){n.coordCenter===void 0&&(n.coordCenter=n.getSource().center),this.mapService.setCoordCenter&&this.mapService.setCoordCenter(n.coordCenter)}},{key:"generateUBO",value:function(n,r,i,a){var o,u=this.cameraService.getProjectionMatrix(),s=this.cameraService.getViewMatrix(),l=this.cameraService.getViewProjectionMatrix(),c=this.cameraService.getModelMatrix(),f=this.coordinateSystemService.getViewportCenterProjection(),h=this.coordinateSystemService.getPixelsPerDegree(),d=this.cameraService.getZoom(),v=this.coordinateSystemService.getPixelsPerDegree2(),p=this.cameraService.getZoomScale(),g=this.coordinateSystemService.getPixelsPerMeter(),m=this.coordinateSystemService.getCoordinateSystem(),_=this.cameraService.getCameraPosition(),y=window.devicePixelRatio,x=this.coordinateSystemService.getViewportCenter(),b=[i,a],M=this.cameraService.getFocalDistance(),T=[].concat(ee(s),ee(u),ee(l),ee(c),ee(f),ee(h),[d],ee(v),[p],ee(g),[m],ee(_),[y],ee(x),b,[M,0,0,0]);return{data:T,uniforms:(o={},S(o,or.ProjectionMatrix,u),S(o,or.ViewMatrix,s),S(o,or.ViewProjectionMatrix,l),S(o,or.Zoom,d),S(o,or.ZoomScale,p),S(o,or.FocalDistance,M),S(o,or.CameraPosition,_),S(o,ir.CoordinateSystem,m),S(o,ir.ViewportCenter,x),S(o,ir.ViewportCenterProjection,f),S(o,ir.PixelsPerDegree,h),S(o,ir.PixelsPerDegree2,v),S(o,ir.PixelsPerMeter,g),S(o,ir.Mvp,n),S(o,"u_sceneCenterMercator",r),S(o,"u_ViewportSize",b),S(o,"u_ModelMatrix",c),S(o,"u_DevicePixelRatio",y),o)}}}]),e}(),Vp=Ue(sr.prototype,"cameraService",[Dp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jp=Ue(sr.prototype,"coordinateSystemService",[Np],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Hp=Ue(sr.prototype,"rendererService",[Bp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Gp=Ue(sr.prototype,"mapService",[Up],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Wp=Ue(sr.prototype,"layerService",[zp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),sr))||$p),Yp,Xp,ok=(Yp=De(),Yp(Xp=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("UpdateModelPlugin",function(){n.layerModel&&n.layerModel.needUpdate().then(function(r){r&&n.renderLayers()})}),n.hooks.afterRender.tap("UpdateModelPlugin",function(){n.layerModelNeedUpdate=!1})}}]),e}())||Xp),Zp,qp,uk=(Zp=De(),Zp(qp=function(){function e(){oe(this,e)}return ae(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("UpdateStyleAttributePlugin",function(){i.initStyleAttribute(n,{styleAttributeService:a})}),n.hooks.beforeRender.tap("UpdateStyleAttributePlugin",function(){n.layerModelNeedUpdate||n.inited&&i.updateStyleAttribute(n,{styleAttributeService:a})})}},{key:"updateStyleAttribute",value:function(n,r){var i=r.styleAttributeService,a=i.getLayerStyleAttributes()||[],o=i.getLayerStyleAttribute("filter");if(o&&o.needRegenerateVertices){n.layerModelNeedUpdate=!0,a.forEach(function(u){return u.needRegenerateVertices=!1});return}a.filter(function(u){return u.needRegenerateVertices}).forEach(function(u){i.updateAttributeByFeatureRange(u.name,n.getEncodedData(),u.featureRange.startIndex,u.featureRange.endIndex,n),u.needRegenerateVertices=!1})}},{key:"initStyleAttribute",value:function(n,r){var i=r.styleAttributeService,a=i.getLayerStyleAttributes()||[];a.filter(function(o){return o.needRegenerateVertices}).forEach(function(o){i.updateAttributeByFeatureRange(o.name,n.getEncodedData(),o.featureRange.startIndex,o.featureRange.endIndex),o.needRegenerateVertices=!1})}}]),e}())||qp);It.bind(ie.ILayerPlugin).to(mM).inRequestScope();It.bind(ie.ILayerPlugin).to(ik).inRequestScope();It.bind(ie.ILayerPlugin).to(P7).inRequestScope();It.bind(ie.ILayerPlugin).to(gM).inRequestScope();It.bind(ie.ILayerPlugin).to(W6).inRequestScope();It.bind(ie.ILayerPlugin).to(O7).inRequestScope();It.bind(ie.ILayerPlugin).to(uk).inRequestScope();It.bind(ie.ILayerPlugin).to(ok).inRequestScope();It.bind(ie.ILayerPlugin).to(K6).inRequestScope();It.bind(ie.ILayerPlugin).to(ak).inRequestScope();It.bind(ie.ILayerPlugin).to(F7).inRequestScope();It.bind(ie.ILayerPlugin).to(J6).inRequestScope();It.bind(ie.ILayerPlugin).to(tk).inRequestScope();It.bind(ie.ILayerPlugin).to(G6).inRequestScope();function sk(e,t){var n=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,r=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(n||r)&&(t||(t=document),!!t)){var i=t.head||t.getElementsByTagName("head")[0];if(!i){i=t.createElement("head");var a=t.body||t.getElementsByTagName("body")[0];a?a.parentNode.insertBefore(i,a):t.documentElement.appendChild(i)}var o=t.createElement("style");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),i.appendChild(o),o}}sk(`.l7-marker-container {
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
`);const lk=gn({__name:"shadowrocket-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=ja(),a=ut(!1),o=ut(!1),u=ut("active"),s=ut("");async function l(){const{data:d}=await Ns();return`&token=${d}`}Ls(o,d=>{d&&(u.value="loading",l().then(v=>{s.value=`sub://${btoa(n.link[0])}${v}#米白云`,u.value="active"}))});const{toClipboard:c}=Ds();async function f(d){const v=await l();try{await c(d+v),i.success("复制成功")}catch{i.warning("复制失败，可能当前浏览器不支持 😭")}}function h(){if(!I_){ja().warning("检测你当前不是ios设备，无法导入");return}l().then(d=>{window.open(`shadowrocket://add/sub://${btoa(n.link[0])}${d}?remarks=米白云`)})}return ho(()=>{a.value=!0}),Rs(()=>{a.value=!1}),(d,v)=>{const p=Ps("router-link"),g=$s,m=Pn,_=Kn,y=vo,x=Vs;return et(),Vt(an,null,[J(y,{title:"小火箭订阅",open:!0,width:"350px","mask-closable":!1,"destroy-on-close":"",onCancel:v[1]||(v[1]=b=>r("close"))},{footer:Q(()=>[]),default:Q(()=>[J(g,null,{description:Q(()=>[ge(" 订阅信息自获取之时起60秒内有效，详见："),J(p,{to:"/account/setting?key=5"},{default:Q(()=>[ge(" 订阅保护 ")]),_:1}),ge(" 。过期可重新复制订阅或重新打开二维码（无需刷新页面） ")]),_:1}),J(_,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:Q(()=>[(et(!0),Vt(an,null,Fs(e.link,(b,M)=>(et(),Dt(m,{key:M,size:"large",block:"",onClick:T=>f(b)},{icon:Q(()=>[J(ke(Bs))]),default:Q(()=>[ge(" 复制订阅链接 "+Os(M+1),1)]),_:2},1032,["onClick"]))),128)),J(m,{size:"large",block:"",onClick:v[0]||(v[0]=b=>o.value=!0)},{icon:Q(()=>[J(ke(Us))]),default:Q(()=>[ge(" 二维码导入 ")]),_:1}),J(m,{size:"large",block:!0,onClick:h},{icon:Q(()=>[J(ke(zs))]),default:Q(()=>[ge(" 一键导入到Shadowrocket ")]),_:1})]),_:1})]),_:1}),J(y,{open:ke(o),"onUpdate:open":v[2]||(v[2]=b=>Ki(o)?o.value=b:null),width:310,title:"扫描二维码订阅小火箭"},{footer:Q(()=>[]),default:Q(()=>[J(x,{size:260,value:ke(s)},null,8,["value"]),J(m,{type:"primary",block:""},{default:Q(()=>[ge(" 请使用小火箭软件扫码 ")]),_:1})]),_:1},8,["open"])],64)}}}),ck=gn({__name:"ios",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=js({scriptUrl:Is(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),r=ut(!1),i=ut(),a=ea();function o(){a.value=aa,i.value=t.link.clash.split(","),r.value=!0}function u(){a.value=lk,i.value=t.link.shadowrocket.split(","),r.value=!0}function s(){a.value=go,i.value=t.link.singbox.split(","),r.value=!0}return(l,c)=>{const f=ta,h=na,d=ra,v=Pn,p=Kn,g=f0,m=po,_=F1,y=M1,x=ia;return et(),Vt(an,null,[J(x,null,{default:Q(()=>[J(h,null,{default:Q(()=>[ge(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用 "),J(f,{strong:""},{default:Q(()=>[ge(" 第一个 ")]),_:1}),ge(" 。 ")]),_:1}),J(h,null,{default:Q(()=>[ge(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),J(d,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 订阅链接 ")]),_:1}),J(p,{size:"large",wrap:""},{default:Q(()=>[J(v,{type:"primary",onClick:s},{default:Q(()=>[ge(" sing-box订阅 ")]),_:1}),J(v,{type:"primary",onClick:o},{default:Q(()=>[ge(" clash订阅 ")]),_:1}),J(v,{type:"primary",onClick:u},{default:Q(()=>[ge(" Shadowrocket订阅 ")]),_:1})]),_:1}),J(d,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 教程 ")]),_:1}),J(h,null,{default:Q(()=>[J(p,{size:"large",wrap:""},{default:Q(()=>[J(m,{title:"暂未开放"},{default:Q(()=>[J(v,{type:"dashed"},{icon:Q(()=>[J(g)]),default:Q(()=>[ge(" sing-box ")]),_:1})]),_:1}),J(v,{type:"default",href:"https://docs.mebi.me/docs/shadowrocket-for-ios"},{icon:Q(()=>[J(_)]),default:Q(()=>[ge(" Shadowrocket ")]),_:1}),J(v,{type:"default",href:"https://docs.mebi.me/docs/stash-for-ios"},{icon:Q(()=>[J(y)]),default:Q(()=>[ge(" Stash ")]),_:1}),J(m,{title:"暂不支持"},{default:Q(()=>[J(v,{type:"dashed"},{icon:Q(()=>[J(ke(n),{type:"icon-quantumultx"})]),default:Q(()=>[ge(" QuantumultX ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),ke(r)?(et(),Dt(qr(ke(a)),{key:0,link:ke(i),onClose:c[0]||(c[0]=b=>r.value=!1)},null,40,["link"])):wn("",!0)],64)}}}),fk=gn({__name:"android",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=ut(!1),r=ut(),i=ea();function a(){i.value=aa,r.value=t.link.clash.split(","),n.value=!0}function o(){i.value=go,r.value=t.link.singbox.split(","),n.value=!0}return(u,s)=>{const l=ta,c=na,f=ra,h=Pn,d=Kn,v=po,p=ia;return et(),Vt(an,null,[J(p,null,{default:Q(()=>[J(c,null,{default:Q(()=>[ge(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),J(l,{strong:""},{default:Q(()=>[ge(" 第一个 ")]),_:1}),ge("。 ")]),_:1}),J(c,null,{default:Q(()=>[ge(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),J(f,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 订阅链接 ")]),_:1}),J(d,{size:"large"},{default:Q(()=>[J(h,{type:"primary",onClick:a},{default:Q(()=>[ge(" clash订阅 ")]),_:1}),J(h,{type:"primary",onClick:o},{default:Q(()=>[ge(" sing-box订阅 ")]),_:1})]),_:1}),J(f,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 教程 ")]),_:1}),J(c,null,{default:Q(()=>[J(d,{size:"large"},{default:Q(()=>[J(h,{type:"default",href:"https://docs.mebi.me/docs/clash-for-android"},{default:Q(()=>[ge(" Clash教程 ")]),_:1}),J(v,{title:"暂未开放"},{default:Q(()=>[J(h,{type:"dashed"},{default:Q(()=>[ge(" sing-box教程 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),ke(n)?(et(),Dt(qr(ke(i)),{key:0,link:ke(r),onClose:s[0]||(s[0]=g=>n.value=!1)},null,40,["link"])):wn("",!0)],64)}}}),hk=gn({__name:"linux",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=ut(!1),r=ut(),i=ea();function a(){i.value=aa,r.value=t.link.clash.split(","),n.value=!0}return(o,u)=>{const s=ta,l=na,c=ra,f=Pn,h=Kn,d=ia;return et(),Vt(an,null,[J(d,null,{default:Q(()=>[J(l,null,{default:Q(()=>[ge(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),J(s,{strong:""},{default:Q(()=>[ge(" 第一个 ")]),_:1}),ge("。 ")]),_:1}),J(l,null,{default:Q(()=>[ge(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),J(c,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 订阅链接 ")]),_:1}),J(h,{size:"large"},{default:Q(()=>[J(f,{type:"primary",onClick:a},{default:Q(()=>[ge(" clash订阅 ")]),_:1})]),_:1}),J(c,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 教程 ")]),_:1}),J(l,null,{default:Q(()=>[J(h,{size:"large"},{default:Q(()=>[J(f,{type:"default",href:"https://docs.mebi.me/docs/cfw-for-linux"},{default:Q(()=>[ge(" Clash教程 ")]),_:1})]),_:1})]),_:1})]),_:1}),ke(n)?(et(),Dt(qr(ke(i)),{key:0,link:ke(r),onClose:u[0]||(u[0]=v=>n.value=!1)},null,40,["link"])):wn("",!0)],64)}}}),dk=gn({__name:"macos",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=ut(!1),r=ut(),i=ea();function a(){i.value=aa,r.value=t.link.clash.split(","),n.value=!0}function o(){i.value=go,r.value=t.link.singbox.split(","),n.value=!0}return(u,s)=>{const l=ta,c=na,f=ra,h=Pn,d=Kn,v=po,p=ia;return et(),Vt(an,null,[J(p,null,{default:Q(()=>[J(c,null,{default:Q(()=>[ge(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),J(l,{strong:""},{default:Q(()=>[ge(" 第一个 ")]),_:1}),ge("。 ")]),_:1}),J(c,null,{default:Q(()=>[ge(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),J(f,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 订阅链接 ")]),_:1}),J(d,{size:"large"},{default:Q(()=>[J(h,{type:"primary",onClick:a},{default:Q(()=>[ge(" clash订阅 ")]),_:1}),J(h,{type:"primary",onClick:o},{default:Q(()=>[ge(" sing-box订阅 ")]),_:1})]),_:1}),J(f,{style:{"border-color":"#7cb305"},dashed:""},{default:Q(()=>[ge(" 教程 ")]),_:1}),J(c,null,{default:Q(()=>[J(d,{size:"large"},{default:Q(()=>[J(h,{type:"default",href:"https://docs.mebi.me/docs/clashx-for-macos"},{default:Q(()=>[ge(" ClashX教程 ")]),_:1}),J(v,{title:"暂未开放"},{default:Q(()=>[J(h,{type:"dashed"},{default:Q(()=>[ge(" sing-box教程 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),ke(n)?(et(),Dt(qr(ke(i)),{key:0,link:ke(r),onClose:s[0]||(s[0]=g=>n.value=!1)},null,40,["link"])):wn("",!0)],64)}}}),vk=nn("div",{style:{height:"310px"}}," 请先购买套餐，购买成功后可见 ",-1),pk=gn({__name:"index",setup(e){const t=js({scriptUrl:Is(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),n=ut("1"),r=ut(),i=ut(!0);async function a(){const{data:o}=await Iy();i.value=!1,r.value=o,o.invisible&&(n.value="0")}return ho(()=>{a()}),(o,u)=>{const s=Cy,l=wy,c=Ty;return et(),Dt(c,{loading:ke(i)},{title:Q(()=>[J(ke(t),{type:"icon-jiaocheng"}),ge(" 使用教程 ")]),default:Q(()=>[J(l,{activeKey:ke(n),"onUpdate:activeKey":u[0]||(u[0]=f=>Ki(n)?n.value=f:null)},{default:Q(()=>[ke(n)==="0"?(et(),Dt(s,{key:"0"},{tab:Q(()=>[J(ke(xy)),ge(" 付费可见 ")]),default:Q(()=>[vk]),_:1})):wn("",!0),J(s,{key:"1",disabled:ke(n)==="0"},{tab:Q(()=>[nn("span",null,[J(ke(by)),ge(" 桌面系统 ")])]),default:Q(()=>[J(S1,{link:ke(r)},null,8,["link"])]),_:1},8,["disabled"]),J(s,{key:"2",disabled:ke(n)==="0"},{tab:Q(()=>[nn("span",null,[J(ke(Sy)),ge(" iOS系统 ")])]),default:Q(()=>[J(ck,{link:ke(r)},null,8,["link"])]),_:1},8,["disabled"]),J(s,{key:"3",disabled:ke(n)==="0"},{tab:Q(()=>[nn("span",null,[J(ke(Ay)),ge(" 安卓系统 ")])]),default:Q(()=>[J(fk,{link:ke(r)},null,8,["link"])]),_:1},8,["disabled"]),J(s,{key:"4",disabled:ke(n)==="0"},{tab:Q(()=>[nn("span",null,[J(ke(Ey)),ge(" MacOS系统 ")])]),default:Q(()=>[J(dk,{link:ke(r)},null,8,["link"])]),_:1},8,["disabled"]),J(s,{key:"5",disabled:ke(n)==="0"},{tab:Q(()=>[nn("span",null,[J(ke(t),{type:"icon-linux"}),ge(" Linux系统 ")])]),default:Q(()=>[J(hk,{link:ke(r)},null,8,["link"])]),_:1},8,["disabled"])]),_:1},8,["activeKey"])]),_:1},8,["loading"])}}}),gk={class:"steps-action"},mk=gn({__name:"index",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=t,r=ut(0),i={0:Xm,1:pk,2:Zm},a=qm(()=>i[r.value]);function o(){r.value++}function u(){r.value--}const s=[{title:"第一步",description:"购买套餐"},{title:"第二步",description:"下载软件并导入订阅"},{title:"第三步",description:"使用"}],l=s.map(f=>({key:f.title,title:f.title,description:f.description}));function c(){n("close")}return(f,h)=>{const d=My,v=Pn,p=vo;return et(),Dt(p,{title:"快捷使用教程",open:e.visible,"mask-closable":!1,centered:!0,footer:null,width:800,onCancel:c},{default:Q(()=>[J(d,{current:ke(r),"onUpdate:current":h[0]||(h[0]=g=>Ki(r)?r.value=g:null),items:ke(l)},null,8,["current","items"]),nn("div",null,[(et(),Dt(qr(ke(a))))]),nn("div",gk,[ke(r)<s.length-1?(et(),Dt(v,{key:0,type:"primary",onClick:o},{default:Q(()=>[ge(" 下一步 ")]),_:1})):wn("",!0),ke(r)===s.length-1?(et(),Dt(v,{key:1,type:"primary",onClick:h[1]||(h[1]=g=>n("close"))},{default:Q(()=>[ge(" 完成 ")]),_:1})):wn("",!0),ke(r)>0?(et(),Dt(v,{key:2,style:{"margin-left":"8px"},onClick:u},{default:Q(()=>[ge(" 上一步 ")]),_:1})):wn("",!0)])]),_:1},8,["open"])}}}),yk=fo(mk,[["__scopeId","data-v-69d68a34"]]),Mk=Object.freeze(Object.defineProperty({__proto__:null,default:yk},Symbol.toStringTag,{value:"Module"}));export{pk as _,Mk as i,yk as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
