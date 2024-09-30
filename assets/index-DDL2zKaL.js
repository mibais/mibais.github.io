import uy from"./zero-step-B4N2MxhL.js";import sy from"./second-step-ByRJ7jXz.js";import{_ as oa,w as Sn,x as Yr,q as i0,u as Qa,n as Ws}from"./index-BhAGI5mP.js";import{a5 as Ze,a3 as St,a8 as st,d as zt,f as $e,k as U,ad as V,G as ue,u as be,H as Qt,F as Nt,ac as Ct,w as bo,o as ua,j as So,ab as Ao,af as xn,al as Eo,s as sa,ak as ni,ag as Jn,c as ly}from"./vue-DIvP5FMT.js";import{a as Co}from"./index-oOkcun4T.js";import{by as cy,bz as In,bA as $,bB as fy,bC as hy,bD as dy,bE as vy,bF as py,bG as gy,bH as yy,bI as _y,bJ as xy,bK as by,bL as Sy,bM as Ay,bN as Ey,bO as Cy,bP as wy,a_ as Ty,bQ as My,bR as ky,bS as Iy,bT as Ly,bU as Ry,bV as S,az as Ys,ao as un,V as Wt,N as a0,O as o0,ar as ri,aG as br,bW as Py,y as u0,T as s0,s as Oy,bX as wo,bY as To,bZ as Xs,aI as Ja,K as Mo,aB as ko,m as Nn,am as la,aA as Io,ag as ca,ap as Zs,B as fa,b_ as Fy,b$ as Dy,c0 as Ny,c1 as By,a9 as Uy,ay as zy}from"./antd-DWod4DQe.js";import{A as Fn,E as gt,j as We,g as xt,s as Xr,n as yn,h as $r,d as Kn,k as pn,o as Zr,p as l0,q as wa,r as Mn,v as ru,u as ql,w as $y,x as Li,y as Ql,z as Ta}from"./vec2-BmKV7c4I.js";import{l as Vy}from"./user-Dkzn21W-.js";function Ur(){var e=new Fn(16);return Fn!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function jy(e){var t=new Fn(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Hy(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function c0(e,t,n,r,i,a,o,u,s,l,c,f,h,d,v,p){var g=new Fn(16);return g[0]=e,g[1]=t,g[2]=n,g[3]=r,g[4]=i,g[5]=a,g[6]=o,g[7]=u,g[8]=s,g[9]=l,g[10]=c,g[11]=f,g[12]=h,g[13]=d,g[14]=v,g[15]=p,g}function Gy(e,t,n,r,i,a,o,u,s,l,c,f,h,d,v,p,g){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=u,e[7]=s,e[8]=l,e[9]=c,e[10]=f,e[11]=h,e[12]=d,e[13]=v,e[14]=p,e[15]=g,e}function f0(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Wy(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function h0(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15],_=n*u-r*o,y=n*s-i*o,x=n*l-a*o,b=r*s-i*u,M=r*l-a*u,C=i*l-a*s,L=c*p-f*v,N=c*g-h*v,I=c*m-d*v,T=f*g-h*p,k=f*m-d*p,O=h*m-d*g,z=_*O-y*k+x*T+b*I-M*N+C*L;return z?(z=1/z,e[0]=(u*O-s*k+l*T)*z,e[1]=(i*k-r*O-a*T)*z,e[2]=(p*C-g*M+m*b)*z,e[3]=(h*M-f*C-d*b)*z,e[4]=(s*I-o*O-l*N)*z,e[5]=(n*O-i*I+a*N)*z,e[6]=(g*x-v*C-m*y)*z,e[7]=(c*C-h*x+d*y)*z,e[8]=(o*k-u*I+l*L)*z,e[9]=(r*I-n*k-a*L)*z,e[10]=(v*M-p*x+m*_)*z,e[11]=(f*x-c*M-d*_)*z,e[12]=(u*N-o*T-s*L)*z,e[13]=(n*T-r*N+i*L)*z,e[14]=(p*y-v*b-g*_)*z,e[15]=(c*b-f*y+h*_)*z,e):null}function Yy(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],l=t[7],c=t[8],f=t[9],h=t[10],d=t[11],v=t[12],p=t[13],g=t[14],m=t[15];return e[0]=u*(h*m-d*g)-f*(s*m-l*g)+p*(s*d-l*h),e[1]=-(r*(h*m-d*g)-f*(i*m-a*g)+p*(i*d-a*h)),e[2]=r*(s*m-l*g)-u*(i*m-a*g)+p*(i*l-a*s),e[3]=-(r*(s*d-l*h)-u*(i*d-a*h)+f*(i*l-a*s)),e[4]=-(o*(h*m-d*g)-c*(s*m-l*g)+v*(s*d-l*h)),e[5]=n*(h*m-d*g)-c*(i*m-a*g)+v*(i*d-a*h),e[6]=-(n*(s*m-l*g)-o*(i*m-a*g)+v*(i*l-a*s)),e[7]=n*(s*d-l*h)-o*(i*d-a*h)+c*(i*l-a*s),e[8]=o*(f*m-d*p)-c*(u*m-l*p)+v*(u*d-l*f),e[9]=-(n*(f*m-d*p)-c*(r*m-a*p)+v*(r*d-a*f)),e[10]=n*(u*m-l*p)-o*(r*m-a*p)+v*(r*l-a*u),e[11]=-(n*(u*d-l*f)-o*(r*d-a*f)+c*(r*l-a*u)),e[12]=-(o*(f*g-h*p)-c*(u*g-s*p)+v*(u*h-s*f)),e[13]=n*(f*g-h*p)-c*(r*g-i*p)+v*(r*h-i*f),e[14]=-(n*(u*g-s*p)-o*(r*g-i*p)+v*(r*s-i*u)),e[15]=n*(u*h-s*f)-o*(r*h-i*f)+c*(r*s-i*u),e}function Xy(e){var t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],u=e[6],s=e[7],l=e[8],c=e[9],f=e[10],h=e[11],d=e[12],v=e[13],p=e[14],g=e[15],m=t*o-n*a,_=t*u-r*a,y=t*s-i*a,x=n*u-r*o,b=n*s-i*o,M=r*s-i*u,C=l*v-c*d,L=l*p-f*d,N=l*g-h*d,I=c*p-f*v,T=c*g-h*v,k=f*g-h*p;return m*k-_*T+y*I+x*N-b*L+M*C}function vr(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],v=t[11],p=t[12],g=t[13],m=t[14],_=t[15],y=n[0],x=n[1],b=n[2],M=n[3];return e[0]=y*r+x*u+b*f+M*p,e[1]=y*i+x*s+b*h+M*g,e[2]=y*a+x*l+b*d+M*m,e[3]=y*o+x*c+b*v+M*_,y=n[4],x=n[5],b=n[6],M=n[7],e[4]=y*r+x*u+b*f+M*p,e[5]=y*i+x*s+b*h+M*g,e[6]=y*a+x*l+b*d+M*m,e[7]=y*o+x*c+b*v+M*_,y=n[8],x=n[9],b=n[10],M=n[11],e[8]=y*r+x*u+b*f+M*p,e[9]=y*i+x*s+b*h+M*g,e[10]=y*a+x*l+b*d+M*m,e[11]=y*o+x*c+b*v+M*_,y=n[12],x=n[13],b=n[14],M=n[15],e[12]=y*r+x*u+b*f+M*p,e[13]=y*i+x*s+b*h+M*g,e[14]=y*a+x*l+b*d+M*m,e[15]=y*o+x*c+b*v+M*_,e}function Zy(e,t,n){var r=n[0],i=n[1],a=n[2],o,u,s,l,c,f,h,d,v,p,g,m;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],u=t[1],s=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],v=t[8],p=t[9],g=t[10],m=t[11],e[0]=o,e[1]=u,e[2]=s,e[3]=l,e[4]=c,e[5]=f,e[6]=h,e[7]=d,e[8]=v,e[9]=p,e[10]=g,e[11]=m,e[12]=o*r+c*i+v*a+t[12],e[13]=u*r+f*i+p*a+t[13],e[14]=s*r+h*i+g*a+t[14],e[15]=l*r+d*i+m*a+t[15]),e}function qy(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Qy(e,t,n,r){var i=r[0],a=r[1],o=r[2],u=Math.hypot(i,a,o),s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,C,L,N,I,T,k,O,z,ne;return u<gt?null:(u=1/u,i*=u,a*=u,o*=u,s=Math.sin(n),l=Math.cos(n),c=1-l,f=t[0],h=t[1],d=t[2],v=t[3],p=t[4],g=t[5],m=t[6],_=t[7],y=t[8],x=t[9],b=t[10],M=t[11],C=i*i*c+l,L=a*i*c+o*s,N=o*i*c-a*s,I=i*a*c-o*s,T=a*a*c+l,k=o*a*c+i*s,O=i*o*c+a*s,z=a*o*c-i*s,ne=o*o*c+l,e[0]=f*C+p*L+y*N,e[1]=h*C+g*L+x*N,e[2]=d*C+m*L+b*N,e[3]=v*C+_*L+M*N,e[4]=f*I+p*T+y*k,e[5]=h*I+g*T+x*k,e[6]=d*I+m*T+b*k,e[7]=v*I+_*T+M*k,e[8]=f*O+p*z+y*ne,e[9]=h*O+g*z+x*ne,e[10]=d*O+m*z+b*ne,e[11]=v*O+_*z+M*ne,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function d0(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],u=t[6],s=t[7],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+c*r,e[6]=u*i+f*r,e[7]=s*i+h*r,e[8]=l*i-a*r,e[9]=c*i-o*r,e[10]=f*i-u*r,e[11]=h*i-s*r,e}function v0(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],u=t[2],s=t[3],l=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-c*r,e[2]=u*i-f*r,e[3]=s*i-h*r,e[8]=a*r+l*i,e[9]=o*r+c*i,e[10]=u*r+f*i,e[11]=s*r+h*i,e}function Jy(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],u=t[2],s=t[3],l=t[4],c=t[5],f=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+c*r,e[2]=u*i+f*r,e[3]=s*i+h*r,e[4]=l*i-a*r,e[5]=c*i-o*r,e[6]=f*i-u*r,e[7]=h*i-s*r,e}function p0(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function Ky(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function e1(e,t,n){var r=n[0],i=n[1],a=n[2],o=Math.hypot(r,i,a),u,s,l;return o<gt?null:(o=1/o,r*=o,i*=o,a*=o,u=Math.sin(t),s=Math.cos(t),l=1-s,e[0]=r*r*l+s,e[1]=i*r*l+a*u,e[2]=a*r*l-i*u,e[3]=0,e[4]=r*i*l-a*u,e[5]=i*i*l+s,e[6]=a*i*l+r*u,e[7]=0,e[8]=r*a*l+i*u,e[9]=i*a*l-r*u,e[10]=a*a*l+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function t1(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function n1(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function r1(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g0(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],u=r+r,s=i+i,l=a+a,c=r*u,f=r*s,h=r*l,d=i*s,v=i*l,p=a*l,g=o*u,m=o*s,_=o*l;return e[0]=1-(d+p),e[1]=f+_,e[2]=h-m,e[3]=0,e[4]=f-_,e[5]=1-(c+p),e[6]=v+g,e[7]=0,e[8]=h+m,e[9]=v-g,e[10]=1-(c+d),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function i1(e,t){var n=new Fn(3),r=-t[0],i=-t[1],a=-t[2],o=t[3],u=t[4],s=t[5],l=t[6],c=t[7],f=r*r+i*i+a*a+o*o;return f>0?(n[0]=(u*o+c*r+s*a-l*i)*2/f,n[1]=(s*o+c*i+l*r-u*a)*2/f,n[2]=(l*o+c*a+u*i-s*r)*2/f):(n[0]=(u*o+c*r+s*a-l*i)*2,n[1]=(s*o+c*i+l*r-u*a)*2,n[2]=(l*o+c*a+u*i-s*r)*2),g0(e,t,n),e}function a1(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function m0(e,t){var n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],u=t[6],s=t[8],l=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(a,o,u),e[2]=Math.hypot(s,l,c),e}function o1(e,t){var n=new Fn(3);m0(n,t);var r=1/n[0],i=1/n[1],a=1/n[2],o=t[0]*r,u=t[1]*i,s=t[2]*a,l=t[4]*r,c=t[5]*i,f=t[6]*a,h=t[8]*r,d=t[9]*i,v=t[10]*a,p=o+c+v,g=0;return p>0?(g=Math.sqrt(p+1)*2,e[3]=.25*g,e[0]=(f-d)/g,e[1]=(h-s)/g,e[2]=(u-l)/g):o>c&&o>v?(g=Math.sqrt(1+o-c-v)*2,e[3]=(f-d)/g,e[0]=.25*g,e[1]=(u+l)/g,e[2]=(h+s)/g):c>v?(g=Math.sqrt(1+c-o-v)*2,e[3]=(h-s)/g,e[0]=(u+l)/g,e[1]=.25*g,e[2]=(f+d)/g):(g=Math.sqrt(1+v-o-c)*2,e[3]=(u-l)/g,e[0]=(h+s)/g,e[1]=(f+d)/g,e[2]=.25*g),e}function u1(e,t,n,r){var i=t[0],a=t[1],o=t[2],u=t[3],s=i+i,l=a+a,c=o+o,f=i*s,h=i*l,d=i*c,v=a*l,p=a*c,g=o*c,m=u*s,_=u*l,y=u*c,x=r[0],b=r[1],M=r[2];return e[0]=(1-(v+g))*x,e[1]=(h+y)*x,e[2]=(d-_)*x,e[3]=0,e[4]=(h-y)*b,e[5]=(1-(f+g))*b,e[6]=(p+m)*b,e[7]=0,e[8]=(d+_)*M,e[9]=(p-m)*M,e[10]=(1-(f+v))*M,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function s1(e,t,n,r,i){var a=t[0],o=t[1],u=t[2],s=t[3],l=a+a,c=o+o,f=u+u,h=a*l,d=a*c,v=a*f,p=o*c,g=o*f,m=u*f,_=s*l,y=s*c,x=s*f,b=r[0],M=r[1],C=r[2],L=i[0],N=i[1],I=i[2],T=(1-(p+m))*b,k=(d+x)*b,O=(v-y)*b,z=(d-x)*M,ne=(1-(h+m))*M,de=(g+_)*M,pe=(v+y)*C,ye=(g-_)*C,W=(1-(h+p))*C;return e[0]=T,e[1]=k,e[2]=O,e[3]=0,e[4]=z,e[5]=ne,e[6]=de,e[7]=0,e[8]=pe,e[9]=ye,e[10]=W,e[11]=0,e[12]=n[0]+L-(T*L+z*N+pe*I),e[13]=n[1]+N-(k*L+ne*N+ye*I),e[14]=n[2]+I-(O*L+de*N+W*I),e[15]=1,e}function l1(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,u=r+r,s=i+i,l=n*o,c=r*o,f=r*u,h=i*o,d=i*u,v=i*s,p=a*o,g=a*u,m=a*s;return e[0]=1-f-v,e[1]=c+m,e[2]=h-g,e[3]=0,e[4]=c-m,e[5]=1-l-v,e[6]=d+p,e[7]=0,e[8]=h+g,e[9]=d-p,e[10]=1-l-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function c1(e,t,n,r,i,a,o){var u=1/(n-t),s=1/(i-r),l=1/(a-o);return e[0]=a*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*s,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(i+r)*s,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function y0(e,t,n,r,i){var a=1/Math.tan(t/2),o;return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(r-i),e[10]=(i+r)*o,e[14]=2*i*r*o):(e[10]=-1,e[14]=-2*r),e}var f1=y0;function h1(e,t,n,r,i){var a=1/Math.tan(t/2),o;return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(r-i),e[10]=i*o,e[14]=i*r*o):(e[10]=-1,e[14]=-r),e}function d1(e,t,n,r){var i=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),u=Math.tan(t.rightDegrees*Math.PI/180),s=2/(o+u),l=2/(i+a);return e[0]=s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((o-u)*s*.5),e[9]=(i-a)*l*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e}function _0(e,t,n,r,i,a,o){var u=1/(t-n),s=1/(r-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*s,e[14]=(o+a)*l,e[15]=1,e}var v1=_0;function p1(e,t,n,r,i,a,o){var u=1/(t-n),s=1/(r-i),l=1/(a-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=l,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*s,e[14]=a*l,e[15]=1,e}function g1(e,t,n,r){var i,a,o,u,s,l,c,f,h,d,v=t[0],p=t[1],g=t[2],m=r[0],_=r[1],y=r[2],x=n[0],b=n[1],M=n[2];return Math.abs(v-x)<gt&&Math.abs(p-b)<gt&&Math.abs(g-M)<gt?f0(e):(c=v-x,f=p-b,h=g-M,d=1/Math.hypot(c,f,h),c*=d,f*=d,h*=d,i=_*h-y*f,a=y*c-m*h,o=m*f-_*c,d=Math.hypot(i,a,o),d?(d=1/d,i*=d,a*=d,o*=d):(i=0,a=0,o=0),u=f*o-h*a,s=h*i-c*o,l=c*a-f*i,d=Math.hypot(u,s,l),d?(d=1/d,u*=d,s*=d,l*=d):(u=0,s=0,l=0),e[0]=i,e[1]=u,e[2]=c,e[3]=0,e[4]=a,e[5]=s,e[6]=f,e[7]=0,e[8]=o,e[9]=l,e[10]=h,e[11]=0,e[12]=-(i*v+a*p+o*g),e[13]=-(u*v+s*p+l*g),e[14]=-(c*v+f*p+h*g),e[15]=1,e)}function m1(e,t,n,r){var i=t[0],a=t[1],o=t[2],u=r[0],s=r[1],l=r[2],c=i-n[0],f=a-n[1],h=o-n[2],d=c*c+f*f+h*h;d>0&&(d=1/Math.sqrt(d),c*=d,f*=d,h*=d);var v=s*h-l*f,p=l*c-u*h,g=u*f-s*c;return d=v*v+p*p+g*g,d>0&&(d=1/Math.sqrt(d),v*=d,p*=d,g*=d),e[0]=v,e[1]=p,e[2]=g,e[3]=0,e[4]=f*g-h*p,e[5]=h*v-c*g,e[6]=c*p-f*v,e[7]=0,e[8]=c,e[9]=f,e[10]=h,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function y1(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function _1(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function x1(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function x0(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function b1(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}function S1(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e}function A1(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function E1(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],u=e[5],s=e[6],l=e[7],c=e[8],f=e[9],h=e[10],d=e[11],v=e[12],p=e[13],g=e[14],m=e[15],_=t[0],y=t[1],x=t[2],b=t[3],M=t[4],C=t[5],L=t[6],N=t[7],I=t[8],T=t[9],k=t[10],O=t[11],z=t[12],ne=t[13],de=t[14],pe=t[15];return Math.abs(n-_)<=gt*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(r-y)<=gt*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(i-x)<=gt*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(a-b)<=gt*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(o-M)<=gt*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(u-C)<=gt*Math.max(1,Math.abs(u),Math.abs(C))&&Math.abs(s-L)<=gt*Math.max(1,Math.abs(s),Math.abs(L))&&Math.abs(l-N)<=gt*Math.max(1,Math.abs(l),Math.abs(N))&&Math.abs(c-I)<=gt*Math.max(1,Math.abs(c),Math.abs(I))&&Math.abs(f-T)<=gt*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(h-k)<=gt*Math.max(1,Math.abs(h),Math.abs(k))&&Math.abs(d-O)<=gt*Math.max(1,Math.abs(d),Math.abs(O))&&Math.abs(v-z)<=gt*Math.max(1,Math.abs(v),Math.abs(z))&&Math.abs(p-ne)<=gt*Math.max(1,Math.abs(p),Math.abs(ne))&&Math.abs(g-de)<=gt*Math.max(1,Math.abs(g),Math.abs(de))&&Math.abs(m-pe)<=gt*Math.max(1,Math.abs(m),Math.abs(pe))}var C1=vr,w1=x0;const T1=Object.freeze(Object.defineProperty({__proto__:null,add:x1,adjoint:Yy,clone:jy,copy:Hy,create:Ur,determinant:Xy,equals:E1,exactEquals:A1,frob:_1,fromQuat:l1,fromQuat2:i1,fromRotation:e1,fromRotationTranslation:g0,fromRotationTranslationScale:u1,fromRotationTranslationScaleOrigin:s1,fromScaling:Ky,fromTranslation:p0,fromValues:c0,fromXRotation:t1,fromYRotation:n1,fromZRotation:r1,frustum:c1,getRotation:o1,getScaling:m0,getTranslation:a1,identity:f0,invert:h0,lookAt:g1,mul:C1,multiply:vr,multiplyScalar:b1,multiplyScalarAndAdd:S1,ortho:v1,orthoNO:_0,orthoZO:p1,perspective:f1,perspectiveFromFieldOfView:d1,perspectiveNO:y0,perspectiveZO:h1,rotate:Qy,rotateX:d0,rotateY:v0,rotateZ:Jy,scale:qy,set:Gy,str:y1,sub:w1,subtract:x0,targetTo:m1,translate:Zy,transpose:Wy},Symbol.toStringTag,{value:"Module"}));function b0(){var e=new Fn(4);return Fn!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function M1(e,t,n,r){var i=new Fn(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function S0(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=b0();return function(t,n,r,i,a,o){var u,s;for(n||(n=4),r||(r=0),i?s=Math.min(i*n+r,t.length):s=t.length,u=r;u<s;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],a(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}})();const k1={name:"SingBox"},I1={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 80 80","enable-background":"new 0 0 80 80","xml:space":"preserve"},L1=st("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
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
cAAyMDI0LTAzLTI2VDA3OjEyOjQwKzAwOjAwbswURAAAAABJRU5ErkJggg==`},null,-1),R1=[L1];function P1(e,t,n,r,i,a){return Ze(),St("svg",I1,R1)}const A0=oa(k1,[["render",P1]]);var E0={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(e,t){(function(r,i){e.exports=i()})(Yr,function(){return function(){var n={686:function(a,o,u){u.d(o,{default:function(){return J}});var s=u(279),l=u.n(s),c=u(370),f=u.n(c),h=u(817),d=u.n(h);function v(j){try{return document.execCommand(j)}catch{return!1}}var p=function(K){var X=d()(K);return v("cut"),X},g=p;function m(j){var K=document.documentElement.getAttribute("dir")==="rtl",X=document.createElement("textarea");X.style.fontSize="12pt",X.style.border="0",X.style.padding="0",X.style.margin="0",X.style.position="absolute",X.style[K?"right":"left"]="-9999px";var te=window.pageYOffset||document.documentElement.scrollTop;return X.style.top="".concat(te,"px"),X.setAttribute("readonly",""),X.value=j,X}var _=function(K,X){var te=m(K);X.container.appendChild(te);var _e=d()(te);return v("copy"),te.remove(),_e},y=function(K){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},te="";return typeof K=="string"?te=_(K,X):K instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(K==null?void 0:K.type)?te=_(K.value,X):(te=d()(K),v("copy")),te},x=y;function b(j){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?b=function(X){return typeof X}:b=function(X){return X&&typeof Symbol=="function"&&X.constructor===Symbol&&X!==Symbol.prototype?"symbol":typeof X},b(j)}var M=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},X=K.action,te=X===void 0?"copy":X,_e=K.container,ge=K.target,He=K.text;if(te!=="copy"&&te!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(ge!==void 0)if(ge&&b(ge)==="object"&&ge.nodeType===1){if(te==="copy"&&ge.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(te==="cut"&&(ge.hasAttribute("readonly")||ge.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(He)return x(He,{container:_e});if(ge)return te==="cut"?g(ge):x(ge,{container:_e})},C=M;function L(j){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(X){return typeof X}:L=function(X){return X&&typeof Symbol=="function"&&X.constructor===Symbol&&X!==Symbol.prototype?"symbol":typeof X},L(j)}function N(j,K){if(!(j instanceof K))throw new TypeError("Cannot call a class as a function")}function I(j,K){for(var X=0;X<K.length;X++){var te=K[X];te.enumerable=te.enumerable||!1,te.configurable=!0,"value"in te&&(te.writable=!0),Object.defineProperty(j,te.key,te)}}function T(j,K,X){return K&&I(j.prototype,K),X&&I(j,X),j}function k(j,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(K&&K.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),K&&O(j,K)}function O(j,K){return O=Object.setPrototypeOf||function(te,_e){return te.__proto__=_e,te},O(j,K)}function z(j){var K=pe();return function(){var te=ye(j),_e;if(K){var ge=ye(this).constructor;_e=Reflect.construct(te,arguments,ge)}else _e=te.apply(this,arguments);return ne(this,_e)}}function ne(j,K){return K&&(L(K)==="object"||typeof K=="function")?K:de(j)}function de(j){if(j===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j}function pe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ye(j){return ye=Object.setPrototypeOf?Object.getPrototypeOf:function(X){return X.__proto__||Object.getPrototypeOf(X)},ye(j)}function W(j,K){var X="data-clipboard-".concat(j);if(K.hasAttribute(X))return K.getAttribute(X)}var G=function(j){k(X,j);var K=z(X);function X(te,_e){var ge;return N(this,X),ge=K.call(this),ge.resolveOptions(_e),ge.listenClick(te),ge}return T(X,[{key:"resolveOptions",value:function(){var _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof _e.action=="function"?_e.action:this.defaultAction,this.target=typeof _e.target=="function"?_e.target:this.defaultTarget,this.text=typeof _e.text=="function"?_e.text:this.defaultText,this.container=L(_e.container)==="object"?_e.container:document.body}},{key:"listenClick",value:function(_e){var ge=this;this.listener=f()(_e,"click",function(He){return ge.onClick(He)})}},{key:"onClick",value:function(_e){var ge=_e.delegateTarget||_e.currentTarget,He=this.action(ge)||"copy",H=C({action:He,container:this.container,target:this.target(ge),text:this.text(ge)});this.emit(H?"success":"error",{action:He,text:H,trigger:ge,clearSelection:function(){ge&&ge.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(_e){return W("action",_e)}},{key:"defaultTarget",value:function(_e){var ge=W("target",_e);if(ge)return document.querySelector(ge)}},{key:"defaultText",value:function(_e){return W("text",_e)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(_e){var ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return x(_e,ge)}},{key:"cut",value:function(_e){return g(_e)}},{key:"isSupported",value:function(){var _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],ge=typeof _e=="string"?[_e]:_e,He=!!document.queryCommandSupported;return ge.forEach(function(H){He=He&&!!document.queryCommandSupported(H)}),He}}]),X}(l()),J=G},828:function(a){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var u=Element.prototype;u.matches=u.matchesSelector||u.mozMatchesSelector||u.msMatchesSelector||u.oMatchesSelector||u.webkitMatchesSelector}function s(l,c){for(;l&&l.nodeType!==o;){if(typeof l.matches=="function"&&l.matches(c))return l;l=l.parentNode}}a.exports=s},438:function(a,o,u){var s=u(828);function l(h,d,v,p,g){var m=f.apply(this,arguments);return h.addEventListener(v,m,g),{destroy:function(){h.removeEventListener(v,m,g)}}}function c(h,d,v,p,g){return typeof h.addEventListener=="function"?l.apply(null,arguments):typeof v=="function"?l.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(m){return l(m,d,v,p,g)}))}function f(h,d,v,p){return function(g){g.delegateTarget=s(g.target,d),g.delegateTarget&&p.call(h,g)}}a.exports=c},879:function(a,o){o.node=function(u){return u!==void 0&&u instanceof HTMLElement&&u.nodeType===1},o.nodeList=function(u){var s=Object.prototype.toString.call(u);return u!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in u&&(u.length===0||o.node(u[0]))},o.string=function(u){return typeof u=="string"||u instanceof String},o.fn=function(u){var s=Object.prototype.toString.call(u);return s==="[object Function]"}},370:function(a,o,u){var s=u(879),l=u(438);function c(v,p,g){if(!v&&!p&&!g)throw new Error("Missing required arguments");if(!s.string(p))throw new TypeError("Second argument must be a String");if(!s.fn(g))throw new TypeError("Third argument must be a Function");if(s.node(v))return f(v,p,g);if(s.nodeList(v))return h(v,p,g);if(s.string(v))return d(v,p,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function f(v,p,g){return v.addEventListener(p,g),{destroy:function(){v.removeEventListener(p,g)}}}function h(v,p,g){return Array.prototype.forEach.call(v,function(m){m.addEventListener(p,g)}),{destroy:function(){Array.prototype.forEach.call(v,function(m){m.removeEventListener(p,g)})}}}function d(v,p,g){return l(document.body,v,p,g)}a.exports=c},817:function(a){function o(u){var s;if(u.nodeName==="SELECT")u.focus(),s=u.value;else if(u.nodeName==="INPUT"||u.nodeName==="TEXTAREA"){var l=u.hasAttribute("readonly");l||u.setAttribute("readonly",""),u.select(),u.setSelectionRange(0,u.value.length),l||u.removeAttribute("readonly"),s=u.value}else{u.hasAttribute("contenteditable")&&u.focus();var c=window.getSelection(),f=document.createRange();f.selectNodeContents(u),c.removeAllRanges(),c.addRange(f),s=c.toString()}return s}a.exports=o},279:function(a){function o(){}o.prototype={on:function(u,s,l){var c=this.e||(this.e={});return(c[u]||(c[u]=[])).push({fn:s,ctx:l}),this},once:function(u,s,l){var c=this;function f(){c.off(u,f),s.apply(l,arguments)}return f._=s,this.on(u,f,l)},emit:function(u){var s=[].slice.call(arguments,1),l=((this.e||(this.e={}))[u]||[]).slice(),c=0,f=l.length;for(c;c<f;c++)l[c].fn.apply(l[c].ctx,s);return this},off:function(u,s){var l=this.e||(this.e={}),c=l[u],f=[];if(c&&s)for(var h=0,d=c.length;h<d;h++)c[h].fn!==s&&c[h].fn._!==s&&f.push(c[h]);return f.length?l[u]=f:delete l[u],this}},a.exports=o,a.exports.TinyEmitter=o}},r={};function i(a){if(r[a])return r[a].exports;var o=r[a]={exports:{}};return n[a](o,o.exports,i),o.exports}return function(){i.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(o,{a:o}),o}}(),function(){i.d=function(a,o){for(var u in o)i.o(o,u)&&!i.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:o[u]})}}(),function(){i.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)}}(),i(686)}().default})})(E0);var O1=E0.exports;const F1=Sn(O1),ha=e=>{const t=(e==null?void 0:e.appendToBody)===void 0?!0:e.appendToBody;return{toClipboard(n,r){return new Promise((i,a)=>{const o=document.createElement("button"),u=new F1(o,{text:()=>n,action:()=>"copy",container:r!==void 0?r:document.body});u.on("success",s=>{u.destroy(),i(s)}),u.on("error",s=>{u.destroy(),a(s)}),t&&document.body.appendChild(o),o.click(),t&&document.body.removeChild(o)})}}};var C0={},w0={},Jl=function(t){return w0[t]},Jt=function(t,n){w0[t]=n},D1=function(t){return C0[t]},ii=function(t,n){C0[t]=n},Kl={},iu={},au=34,fi=10,ou=13;function T0(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function N1(e,t){var n=T0(e);return function(r,i){return t(n(r),i,e)}}function ec(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var i in r)i in t||n.push(t[i]=i)}),n}function Vt(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function B1(e){return e<0?"-"+Vt(-e,6):e>9999?"+"+Vt(e,6):Vt(e,4)}function U1(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":B1(e.getUTCFullYear())+"-"+Vt(e.getUTCMonth()+1,2)+"-"+Vt(e.getUTCDate(),2)+(i?"T"+Vt(t,2)+":"+Vt(n,2)+":"+Vt(r,2)+"."+Vt(i,3)+"Z":r?"T"+Vt(t,2)+":"+Vt(n,2)+":"+Vt(r,2)+"Z":n||t?"T"+Vt(t,2)+":"+Vt(n,2)+"Z":"")}function z1(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(f,h){var d,v,p=i(f,function(g,m){if(d)return d(g,m-1);v=g,d=h?N1(g,h):T0(g)});return p.columns=v||[],p}function i(f,h){var d=[],v=f.length,p=0,g=0,m,_=v<=0,y=!1;f.charCodeAt(v-1)===fi&&--v,f.charCodeAt(v-1)===ou&&--v;function x(){if(_)return iu;if(y)return y=!1,Kl;var M,C=p,L;if(f.charCodeAt(C)===au){for(;p++<v&&f.charCodeAt(p)!==au||f.charCodeAt(++p)===au;);return(M=p)>=v?_=!0:(L=f.charCodeAt(p++))===fi?y=!0:L===ou&&(y=!0,f.charCodeAt(p)===fi&&++p),f.slice(C+1,M-1).replace(/""/g,'"')}for(;p<v;){if((L=f.charCodeAt(M=p++))===fi)y=!0;else if(L===ou)y=!0,f.charCodeAt(p)===fi&&++p;else if(L!==n)continue;return f.slice(C,M)}return _=!0,f.slice(C,v)}for(;(m=x())!==iu;){for(var b=[];m!==Kl&&m!==iu;)b.push(m),m=x();h&&(b=h(b,g++))==null||d.push(b)}return d}function a(f,h){return f.map(function(d){return h.map(function(v){return c(d[v])}).join(e)})}function o(f,h){return h==null&&(h=ec(f)),[h.map(c).join(e)].concat(a(f,h)).join(`
`)}function u(f,h){return h==null&&(h=ec(f)),a(f,h).join(`
`)}function s(f){return f.map(l).join(`
`)}function l(f){return f.map(c).join(e)}function c(f){return f==null?"":f instanceof Date?U1(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:r,parseRows:i,format:o,formatBody:u,formatRows:s,formatRow:l,formatValue:c}}var $1=z1(","),V1=$1.parse;function Ka(e,t,n){n===void 0&&(n={});var r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function qs(e,t,n){n===void 0&&(n={});for(var r=0,i=e;r<i.length;r++){var a=i[r];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<a[a.length-1].length;o++)if(a[a.length-1][o]!==a[0][o])throw new Error("First and last Position are not equivalent.")}var u={type:"Polygon",coordinates:e};return Ka(u,t,n)}function j1(e,t,n){n===void 0&&(n={});var r={type:"MultiPolygon",coordinates:e};return Ka(r,t,n)}function M0(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function tc(e){return e.type==="Feature"?e.geometry:e}function H1(e,t){var n,r,i,a,o,u,s,l,c,f,h=0,d=e.type==="FeatureCollection",v=e.type==="Feature",p=d?e.features.length:1;for(n=0;n<p;n++){for(u=d?e.features[n].geometry:v?e.geometry:e,l=d?e.features[n].properties:v?e.properties:{},c=d?e.features[n].bbox:v?e.bbox:void 0,f=d?e.features[n].id:v?e.id:void 0,s=u?u.type==="GeometryCollection":!1,o=s?u.geometries.length:1,i=0;i<o;i++){if(a=s?u.geometries[i]:u,a===null){if(t(null,h,l,c,f)===!1)return!1;continue}switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(a,h,l,c,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<a.geometries.length;r++)if(t(a.geometries[r],h,l,c,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}h++}}function k0(e,t){H1(e,function(n,r,i,a,o){var u=n===null?null:n.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return t(Ka(n,i,{bbox:a,id:o}),r,0)===!1?!1:void 0}var s;switch(u){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon";break}for(var l=0;l<n.coordinates.length;l++){var c=n.coordinates[l],f={type:s,coordinates:c};if(t(Ka(f,i),r,l)===!1)return!1}})}function nc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,cy(r.key),r)}}function le(e,t,n){return t&&nc(e.prototype,t),n&&nc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vi(e,t){return Vi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Vi(e,t)}function Te(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vi(e,t)}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Me(e,t){if(t&&(In(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ee(e)}function G1(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function I0(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(I0=function(){return!!e})()}function W1(e,t,n){if(I0())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Vi(i,n.prototype),i}function Qu(e){var t=typeof Map=="function"?new Map:void 0;return Qu=function(r){if(r===null||!G1(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return W1(r,arguments,ee(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Vi(i,r)},Qu(e)}var Y1={REGISTERED_PROTOCOLS:{}};function X1(e){var t=Z1();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function Z1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Qs=function(t){return Y1.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))]},q1=function(e){Te(n,e);var t=X1(n);function n(r,i,a,o){var u;return ce(this,n),u=t.call(this,"AJAXError: ".concat(i," (").concat(r,"): ").concat(a)),u.status=r,u.statusText=i,u.url=a,u.body=o,u}return le(n)}(Qu(Error));function L0(e,t){var n=new XMLHttpRequest,r=Array.isArray(e.url)?e.url[0]:e.url;n.open(e.method||"GET",r,!0),e.type==="arrayBuffer"&&(n.responseType="arraybuffer");for(var i in e.headers)e.headers.hasOwnProperty(i)&&n.setRequestHeader(i,e.headers[i]);return e.type==="json"&&(n.responseType="text",n.setRequestHeader("Accept","application/json")),n.withCredentials=e.credentials==="include",n.onerror=function(){t(new Error(n.statusText))},n.onload=function(){if((n.status>=200&&n.status<300||n.status===0)&&n.response!==null){var a=n.response;if(e.type==="json")try{a=JSON.parse(n.response)}catch(u){return t(u)}t(null,a,n.getResponseHeader("Cache-Control"),n.getResponseHeader("Expires"),n)}else{var o=new Blob([n.response],{type:n.getResponseHeader("Content-Type")});t(new q1(n.status,n.statusText,r.toString(),o))}},n.cancel=n.abort,n.send(e.body),n}function Q1(e){return new Promise(function(t,n){L0(e,function(r,i,a,o,u){r?n({err:r,data:null,xhr:u}):t({err:null,data:i,cacheControl:a,expires:o,xhr:u})})})}function Js(e,t){return L0(e,t)}var J1=function(t,n){var r=Qs(t.url)||Js;return r($($({},t),{},{type:"json"}),n)},Ks=function(t,n){var r=Qs(t.url)||Js;return r($($({},t),{},{type:"arrayBuffer"}),n)},K1=function(t,n){return Js($($({},t),{},{method:"GET"}),n)},rc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function R0(e,t){var n=new window.Image,r=window.URL||window.webkitURL;n.crossOrigin="anonymous",n.onload=function(){t(null,n),r.revokeObjectURL(n.src),n.onload=null,window.requestAnimationFrame(function(){n.src=rc})},n.onerror=function(){return t(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var i=new Blob([new Uint8Array(e)],{type:"image/png"});n.src=e.byteLength?r.createObjectURL(i):rc}function P0(e,t){var n=new Blob([new Uint8Array(e)],{type:"image/png"});createImageBitmap(n).then(function(r){t(null,r)}).catch(function(r){t(new Error("Could not load image because of ".concat(r.message,". Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.")))})}var Ju=function(t,n,r){var i=function(o,u){if(o)n(o);else if(u){var s=typeof createImageBitmap=="function",l=r?r(u):u;s?P0(l,n):R0(l,n)}};return t.type==="json"?J1(t,i):Ks(t,i)},e_=function(t,n){var r=typeof createImageBitmap=="function";r?P0(t,n):R0(t,n)};function el(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function O0(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function da(){}var ji=.7,eo=1/ji,Vr="\\s*([+-]?\\d+)\\s*",Hi="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",t_=/^#([0-9a-f]{3,8})$/,n_=new RegExp("^rgb\\("+[Vr,Vr,Vr]+"\\)$"),r_=new RegExp("^rgb\\("+[_n,_n,_n]+"\\)$"),i_=new RegExp("^rgba\\("+[Vr,Vr,Vr,Hi]+"\\)$"),a_=new RegExp("^rgba\\("+[_n,_n,_n,Hi]+"\\)$"),o_=new RegExp("^hsl\\("+[Hi,_n,_n]+"\\)$"),u_=new RegExp("^hsla\\("+[Hi,_n,_n,Hi]+"\\)$"),ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};el(da,qr,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:ac,formatHex:ac,formatHsl:s_,formatRgb:oc,toString:oc});function ac(){return this.rgb().formatHex()}function s_(){return F0(this).formatHsl()}function oc(){return this.rgb().formatRgb()}function qr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=t_.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?uc(t):n===3?new Zt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ma(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ma(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=n_.exec(e))?new Zt(t[1],t[2],t[3],1):(t=r_.exec(e))?new Zt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=i_.exec(e))?Ma(t[1],t[2],t[3],t[4]):(t=a_.exec(e))?Ma(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=o_.exec(e))?cc(t[1],t[2]/100,t[3]/100,1):(t=u_.exec(e))?cc(t[1],t[2]/100,t[3]/100,t[4]):ic.hasOwnProperty(e)?uc(ic[e]):e==="transparent"?new Zt(NaN,NaN,NaN,0):null}function uc(e){return new Zt(e>>16&255,e>>8&255,e&255,1)}function Ma(e,t,n,r){return r<=0&&(e=t=n=NaN),new Zt(e,t,n,r)}function l_(e){return e instanceof da||(e=qr(e)),e?(e=e.rgb(),new Zt(e.r,e.g,e.b,e.opacity)):new Zt}function to(e,t,n,r){return arguments.length===1?l_(e):new Zt(e,t,n,r??1)}function Zt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}el(Zt,to,O0(da,{brighter:function(e){return e=e==null?eo:Math.pow(eo,e),new Zt(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ji:Math.pow(ji,e),new Zt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sc,formatHex:sc,formatRgb:lc,toString:lc}));function sc(){return"#"+uu(this.r)+uu(this.g)+uu(this.b)}function lc(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function uu(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function cc(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new gn(e,t,n,r)}function F0(e){if(e instanceof gn)return new gn(e.h,e.s,e.l,e.opacity);if(e instanceof da||(e=qr(e)),!e)return new gn;if(e instanceof gn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,u=a-i,s=(a+i)/2;return u?(t===a?o=(n-r)/u+(n<r)*6:n===a?o=(r-t)/u+2:o=(t-n)/u+4,u/=s<.5?a+i:2-a-i,o*=60):u=s>0&&s<1?0:o,new gn(o,u,s,e.opacity)}function c_(e,t,n,r){return arguments.length===1?F0(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}el(gn,c_,O0(da,{brighter:function(e){return e=e==null?eo:Math.pow(eo,e),new gn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ji:Math.pow(ji,e),new gn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Zt(su(e>=240?e-240:e+120,i,r),su(e,i,r),su(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function su(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function rt(e){var t=qr(e),n=[0,0,0,0];return t!=null&&(n[0]=t.r/255,n[1]=t.g/255,n[2]=t.b/255,n[3]=t.opacity),n}function pr(e){var t=e&&e[0],n=e&&e[1],r=e&&e[2],i=t+n*256+r*65536-1;return i}function Dn(e){return[e+1&255,e+1>>8&255,e+1>>8>>8&255]}function f_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");t.width=256,t.height=1;for(var r=null,i=n.createLinearGradient(0,0,256,1),a=e.positions[0],o=e.positions[e.positions.length-1],u=0;u<e.colors.length;++u){var s=(e.positions[u]-a)/(o-a);i.addColorStop(s,e.colors[u])}return n.fillStyle=i,n.fillRect(0,0,256,1),r=new Uint8ClampedArray(n.getImageData(0,0,256,1).data),t=null,n=null,{data:r,width:256,height:1}}function h_(e,t){var n=window.document.createElement("canvas"),r=n.getContext("2d");n.width=256,n.height=1;for(var i=r.createLinearGradient(0,0,256,1),a=t[1]-t[0],o=0;o<e.colors.length;++o){var u=Math.max((e.positions[o]-t[0])/a,0);i.addColorStop(u,e.colors[o])}r.fillStyle=i,r.fillRect(0,0,256,1);var s=r.getImageData(0,0,256,1).data,l=tl(r,s);return n=null,r=null,l}function d_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");t.width=256,t.height=1;var r=n.createImageData(256,1);return r.data.fill(0),e.positions.forEach(function(i,a){var o=rt(e.colors[a]);r.data[i*4+0]=o[0]*255,r.data[i*4+1]=o[1]*255,r.data[i*4+2]=o[2]*255,r.data[i*4+3]=o[3]*255}),t=null,n=null,r}function v_(e){var t=window.document.createElement("canvas"),n=t.getContext("2d");n.globalAlpha=1,t.width=256,t.height=1;for(var r=256/e.colors.length,i=0;i<e.colors.length;i++)n.beginPath(),n.lineWidth=2,n.strokeStyle=e.colors[i],n.moveTo(i*r,0),n.lineTo((i+1)*r,0),n.stroke();var a=n.getImageData(0,0,256,1).data,o=tl(n,a);return t=null,n=null,o}function p_(e,t){var n=window.document.createElement("canvas"),r=n.getContext("2d");r.globalAlpha=1,n.width=256,n.height=1;var i=t[1]-t[0];e.positions.length-e.colors.length;for(var a=0;a<e.colors.length;a++)r.beginPath(),r.lineWidth=2,r.strokeStyle=e.colors[a],r.moveTo((e.positions[a]-t[0])/i*255,0),r.lineTo((e.positions[a+1]-t[0])/i*255,0),r.stroke();var o=r.getImageData(0,0,256,1).data,u=tl(r,o);return n=null,r=null,u}function tl(e,t){for(var n=e.createImageData(256,1),r=0;r<n.data.length;r+=4)n.data[r+0]=t[r+0],n.data[r+1]=t[r+1],n.data[r+2]=t[r+2],n.data[r+3]=t[r+3];return n}function nl(e){switch(e.type){case"cat":return[0,255];default:return[0,1]}}var ur={BACK:1029,FRONT:1028};function rl(e){switch(e){case"GAODE1.x":return ur.BACK;case"GAODE2.x":return ur.BACK;case"MAPBOX":return ur.FRONT;case"SIMPLE":return ur.FRONT;case"GLOBEL":return ur.BACK;case"DEBAULT":return ur.FRONT;default:return ur.FRONT}}function Ku(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g_(e){if(Array.isArray(e))return Ku(e)}function m_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D0(e,t){if(e){if(typeof e=="string")return Ku(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ku(e,t)}}function y_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e){return g_(e)||m_(e)||D0(e)||y_()}function __(e){if(Array.isArray(e))return e}function x_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,u=[],s=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(c){l=!0,i=c}finally{try{if(!s&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return u}}function b_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,t){return __(e)||x_(e,t)||D0(e,t)||b_()}var nt={isNil:fy,merge:hy,throttle:dy,isString:vy,debounce:py,pull:gy,isTypedArray:yy,isPlainObject:_y,isNumber:xy,isBoolean:by,isEqual:Sy,cloneDeep:Ay,uniq:Ey,clamp:Cy,upperFirst:wy,get:Ty,mergeWith:My,isFunction:ky,isObject:Iy,isUndefined:Ly,camelCase:Ry};function N0(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function B0(e){return N0(e).split(/\s+/)}function S_(e){var t,n=(t=document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n)return e[0];for(var r in e)if(e[r]&&e[r]in n)return e[r];return e[0]}function er(e,t,n){var r=window.document.createElement(e);return t&&(r.className=t||""),n&&n.appendChild(r),r}function no(e){var t=e.parentNode;t&&t.removeChild(e)}function Ui(e,t){if(e.classList!==void 0)for(var n=B0(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!A_(e,t)){var a=il(e);U0(e,(a?a+" ":"")+t)}}function es(e,t){if(e.classList!==void 0){var n=B0(t);n.forEach(function(r){e.classList.remove(r)})}else U0(e,N0((" "+il(e)+" ").replace(" "+t+" "," ")))}function A_(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=il(e);return n.length>0&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(n)}function U0(e,t){e instanceof HTMLElement?e.className=t:e.className.baseVal=t}function il(e){return e instanceof SVGElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}S_(["transform","WebkitTransform"]);function E_(){var e,t=window.document.querySelector('meta[name="viewport"]');if(!t)return 1;var n=(e=t.content)===null||e===void 0?void 0:e.split(","),r=n.find(function(i){var a=i.split("="),o=Fe(a,1),u=o[0];return u==="initial-scale"});return r?r.split("=")[1]*1:1}var ct=E_()<1?1:window.devicePixelRatio;function C_(e,t){e.setAttribute("style","".concat(e.style.cssText).concat(t))}function w_(e){return Object.entries(e).map(function(t){var n=Fe(t,2),r=n[0],i=n[1];return"".concat(r,": ").concat(i)}).join(";")}function T_(e,t){return{left:e.left-t.left,top:e.top-t.top,right:t.left+t.width-e.left-e.width,bottom:t.top+t.height-e.top-e.height}}function M_(e){e.innerHTML=""}function k_(e,t){for(var n=Array.isArray(t)?t:[t],r=e;r instanceof Element&&r!==window.document.body;){var i,a;if(n.find(function(o){var u;return(u=r)===null||u===void 0?void 0:u.matches(o)}))return r;r=(i=(a=r)===null||a===void 0?void 0:a.parentElement)!==null&&i!==void 0?i:null}}var lu;function I_(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap}var ts=(lu=navigator)===null||lu===void 0?void 0:lu.userAgent,Gi=!!ts.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);ts.indexOf("Android")>-1||ts.indexOf("Adr")>-1;function cu(e){return typeof e=="number"}var fc=2*Math.PI*6378137/2;function L_(e,t){var n=Fe(t,4),r=n[0],i=n[1],a=n[2],o=n[3];return e.lng>r&&e.lng<=a&&e.lat>i&&e.lat<=o}function R_(e){var t=[1/0,1/0,-1/0,-1/0];return e.forEach(function(n){var r=n.coordinates;z0(t,r)}),t}function z0(e,t){return Array.isArray(t[0])?t.forEach(function(n){z0(e,n)}):(e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])),e}function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{enable:!0,decimal:1};e=F_(e,t);var r=e[0],i=e[1],a=r*fc/180,o=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return o=o*fc/180,n.enable&&(a=Number(a.toFixed(n.decimal)),o=Number(o.toFixed(n.decimal))),e.length===3?[a,o,e[2]]:[a,o]}function P_(e){if(e==null)throw new Error("lng is required");return(e>180||e<-180)&&(e=e%360,e>180&&(e=-360+e),e<-180&&(e=360+e),e===0&&(e=0)),e}function O_(e){if(e==null)throw new Error("lat is required");return(e>90||e<-90)&&(e=e%180,e>90&&(e=-180+e),e<-90&&(e=180+e),e===0&&(e=0)),e}function F_(e,t){if(t===!1)return e;var n=P_(e[0]),r=O_(e[1]);return r>85&&(r=85),r<-85&&(r=-85),e.length===3?[n,r,e[2]]:[n,r]}function dt(e){var t=85.0511287798,n=Math.max(Math.min(t,e[1]),-t),r=256<<20,i=Math.PI/180,a=e[0]*i,o=n*i;o=Math.log(Math.tan(Math.PI/4+o/2));var u=.5/Math.PI,s=.5,l=-.5/Math.PI;return i=.5,a=r*(u*a+s),o=r*(l*o+i),[Math.floor(a),Math.floor(o)]}function al(e,t){var n=Math.abs(e[1][1]-e[0][1])*t,r=Math.abs(e[1][0]-e[0][0])*t;return[[e[0][0]-r,e[0][1]-n],[e[1][0]+r,e[1][1]+n]]}function $0(e,t){return e[0][0]<=t[0][0]&&e[0][1]<=t[0][1]&&e[1][0]>=t[1][0]&&e[1][1]>=t[1][1]}function ro(e){return[[e[0],e[1]],[e[2],e[3]]]}function D_(e){var t=N_(e,[0,0]);return[e[0]/t,e[1]/t]}function N_(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Rn(e){if(cu(e[0]))return e;if(cu(e[0][0]))throw new Error("当前数据不支持标注");if(cu(e[0][0][0])){var t=e,n=0,r=0,i=0;return t.forEach(function(a){a.forEach(function(o){n+=o[0],r+=o[1],i++})}),[n/i,r/i,0]}else throw new Error("当前数据不支持标注")}function B_(e){for(var t=e[0],n=e[1],r=e[0],i=e[1],a=0,o=0,u=0,s=0;s<e.length;s+=2){var l=e[s],c=e[s+1];l&&c&&(t=Math.max(l,t),n=Math.max(c,n),r=Math.min(l,r),i=Math.min(c,i),a+=l,o+=c,u++)}return{center:[a/u,o/u],radius:Math.sqrt(Math.pow(t-r,2)+Math.pow(n-i,2))/2}}function U_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e==="x"?t:t&3|8;return n.toString(16)})}var z_=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:50,n=arguments.length>1?arguments[1]:void 0;ce(this,e),this.limit=t,this.destroy=n||this.defaultDestroy,this.order=[],this.clear()}return le(e,[{key:"clear",value:function(){var n=this;this.order.forEach(function(r){n.delete(r)}),this.cache={},this.order=[]}},{key:"get",value:function(n){var r=this.cache[n];return r&&(this.deleteOrder(n),this.appendOrder(n)),r}},{key:"set",value:function(n,r){this.cache[n]?(this.delete(n),this.cache[n]=r,this.appendOrder(n)):(Object.keys(this.cache).length===this.limit&&this.delete(this.order[0]),this.cache[n]=r,this.appendOrder(n))}},{key:"delete",value:function(n){var r=this.cache[n];r&&(this.deleteCache(n),this.deleteOrder(n),this.destroy(r,n))}},{key:"deleteCache",value:function(n){delete this.cache[n]}},{key:"deleteOrder",value:function(n){var r=this.order.findIndex(function(i){return i===n});r>=0&&this.order.splice(r,1)}},{key:"appendOrder",value:function(n){this.order.push(n)}},{key:"defaultDestroy",value:function(n,r){return null}}]),e}();function $_(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t*1}function V_(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]);return t*1}function V0(e){if(e.length===0)return 0;for(var t=e[0]*1,n=1;n<e.length;n++)t+=e[n]*1;return t}function j_(e){if(e.length===0)throw new Error("mean requires at least one data point");return V0(e)/e.length}function H_(e){if(e.length===0)throw new Error("mean requires at least one data point");if(e.length<3)return e[0];e.sort();for(var t=e[0],n=NaN,r=0,i=1,a=1;a<e.length+1;a++)e[a]!==t?(i>r&&(r=i,n=t),i=1,t=e[a]):i++;return n*1}var j0={min:V_,max:$_,mean:j_,sum:V0,mode:H_};function H0(e,t){return e.map(function(n){return n[t]})}function hc(e,t,n,r,i,a,o){try{var u=e[a](o),s=u.value}catch(l){n(l);return}u.done?t(s):Promise.resolve(s).then(r,i)}function Q(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){hc(a,r,i,o,u,"next",s)}function u(s){hc(a,r,i,o,u,"throw",s)}o(void 0)})}}var G0={exports:{}},W0={exports:{}};(function(e){function t(n){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(W0);var G_=W0.exports;(function(e){var t=G_.default;function n(){e.exports=n=function(){return i},e.exports.__esModule=!0,e.exports.default=e.exports;var r,i={},a=Object.prototype,o=a.hasOwnProperty,u=Object.defineProperty||function(W,G,J){W[G]=J.value},s=typeof Symbol=="function"?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(W,G,J){return Object.defineProperty(W,G,{value:J,enumerable:!0,configurable:!0,writable:!0}),W[G]}try{h({},"")}catch{h=function(J,j,K){return J[j]=K}}function d(W,G,J,j){var K=G&&G.prototype instanceof x?G:x,X=Object.create(K.prototype),te=new pe(j||[]);return u(X,"_invoke",{value:O(W,J,te)}),X}function v(W,G,J){try{return{type:"normal",arg:W.call(G,J)}}catch(j){return{type:"throw",arg:j}}}i.wrap=d;var p="suspendedStart",g="suspendedYield",m="executing",_="completed",y={};function x(){}function b(){}function M(){}var C={};h(C,l,function(){return this});var L=Object.getPrototypeOf,N=L&&L(L(ye([])));N&&N!==a&&o.call(N,l)&&(C=N);var I=M.prototype=x.prototype=Object.create(C);function T(W){["next","throw","return"].forEach(function(G){h(W,G,function(J){return this._invoke(G,J)})})}function k(W,G){function J(K,X,te,_e){var ge=v(W[K],W,X);if(ge.type!=="throw"){var He=ge.arg,H=He.value;return H&&t(H)=="object"&&o.call(H,"__await")?G.resolve(H.__await).then(function(fe){J("next",fe,te,_e)},function(fe){J("throw",fe,te,_e)}):G.resolve(H).then(function(fe){He.value=fe,te(He)},function(fe){return J("throw",fe,te,_e)})}_e(ge.arg)}var j;u(this,"_invoke",{value:function(X,te){function _e(){return new G(function(ge,He){J(X,te,ge,He)})}return j=j?j.then(_e,_e):_e()}})}function O(W,G,J){var j=p;return function(K,X){if(j===m)throw new Error("Generator is already running");if(j===_){if(K==="throw")throw X;return{value:r,done:!0}}for(J.method=K,J.arg=X;;){var te=J.delegate;if(te){var _e=z(te,J);if(_e){if(_e===y)continue;return _e}}if(J.method==="next")J.sent=J._sent=J.arg;else if(J.method==="throw"){if(j===p)throw j=_,J.arg;J.dispatchException(J.arg)}else J.method==="return"&&J.abrupt("return",J.arg);j=m;var ge=v(W,G,J);if(ge.type==="normal"){if(j=J.done?_:g,ge.arg===y)continue;return{value:ge.arg,done:J.done}}ge.type==="throw"&&(j=_,J.method="throw",J.arg=ge.arg)}}}function z(W,G){var J=G.method,j=W.iterator[J];if(j===r)return G.delegate=null,J==="throw"&&W.iterator.return&&(G.method="return",G.arg=r,z(W,G),G.method==="throw")||J!=="return"&&(G.method="throw",G.arg=new TypeError("The iterator does not provide a '"+J+"' method")),y;var K=v(j,W.iterator,G.arg);if(K.type==="throw")return G.method="throw",G.arg=K.arg,G.delegate=null,y;var X=K.arg;return X?X.done?(G[W.resultName]=X.value,G.next=W.nextLoc,G.method!=="return"&&(G.method="next",G.arg=r),G.delegate=null,y):X:(G.method="throw",G.arg=new TypeError("iterator result is not an object"),G.delegate=null,y)}function ne(W){var G={tryLoc:W[0]};1 in W&&(G.catchLoc=W[1]),2 in W&&(G.finallyLoc=W[2],G.afterLoc=W[3]),this.tryEntries.push(G)}function de(W){var G=W.completion||{};G.type="normal",delete G.arg,W.completion=G}function pe(W){this.tryEntries=[{tryLoc:"root"}],W.forEach(ne,this),this.reset(!0)}function ye(W){if(W||W===""){var G=W[l];if(G)return G.call(W);if(typeof W.next=="function")return W;if(!isNaN(W.length)){var J=-1,j=function K(){for(;++J<W.length;)if(o.call(W,J))return K.value=W[J],K.done=!1,K;return K.value=r,K.done=!0,K};return j.next=j}}throw new TypeError(t(W)+" is not iterable")}return b.prototype=M,u(I,"constructor",{value:M,configurable:!0}),u(M,"constructor",{value:b,configurable:!0}),b.displayName=h(M,f,"GeneratorFunction"),i.isGeneratorFunction=function(W){var G=typeof W=="function"&&W.constructor;return!!G&&(G===b||(G.displayName||G.name)==="GeneratorFunction")},i.mark=function(W){return Object.setPrototypeOf?Object.setPrototypeOf(W,M):(W.__proto__=M,h(W,f,"GeneratorFunction")),W.prototype=Object.create(I),W},i.awrap=function(W){return{__await:W}},T(k.prototype),h(k.prototype,c,function(){return this}),i.AsyncIterator=k,i.async=function(W,G,J,j,K){K===void 0&&(K=Promise);var X=new k(d(W,G,J,j),K);return i.isGeneratorFunction(G)?X:X.next().then(function(te){return te.done?te.value:X.next()})},T(I),h(I,f,"Generator"),h(I,l,function(){return this}),h(I,"toString",function(){return"[object Generator]"}),i.keys=function(W){var G=Object(W),J=[];for(var j in G)J.push(j);return J.reverse(),function K(){for(;J.length;){var X=J.pop();if(X in G)return K.value=X,K.done=!1,K}return K.done=!0,K}},i.values=ye,pe.prototype={constructor:pe,reset:function(G){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(de),!G)for(var J in this)J.charAt(0)==="t"&&o.call(this,J)&&!isNaN(+J.slice(1))&&(this[J]=r)},stop:function(){this.done=!0;var G=this.tryEntries[0].completion;if(G.type==="throw")throw G.arg;return this.rval},dispatchException:function(G){if(this.done)throw G;var J=this;function j(He,H){return te.type="throw",te.arg=G,J.next=He,H&&(J.method="next",J.arg=r),!!H}for(var K=this.tryEntries.length-1;K>=0;--K){var X=this.tryEntries[K],te=X.completion;if(X.tryLoc==="root")return j("end");if(X.tryLoc<=this.prev){var _e=o.call(X,"catchLoc"),ge=o.call(X,"finallyLoc");if(_e&&ge){if(this.prev<X.catchLoc)return j(X.catchLoc,!0);if(this.prev<X.finallyLoc)return j(X.finallyLoc)}else if(_e){if(this.prev<X.catchLoc)return j(X.catchLoc,!0)}else{if(!ge)throw new Error("try statement without catch or finally");if(this.prev<X.finallyLoc)return j(X.finallyLoc)}}}},abrupt:function(G,J){for(var j=this.tryEntries.length-1;j>=0;--j){var K=this.tryEntries[j];if(K.tryLoc<=this.prev&&o.call(K,"finallyLoc")&&this.prev<K.finallyLoc){var X=K;break}}X&&(G==="break"||G==="continue")&&X.tryLoc<=J&&J<=X.finallyLoc&&(X=null);var te=X?X.completion:{};return te.type=G,te.arg=J,X?(this.method="next",this.next=X.finallyLoc,y):this.complete(te)},complete:function(G,J){if(G.type==="throw")throw G.arg;return G.type==="break"||G.type==="continue"?this.next=G.arg:G.type==="return"?(this.rval=this.arg=G.arg,this.method="return",this.next="end"):G.type==="normal"&&J&&(this.next=J),y},finish:function(G){for(var J=this.tryEntries.length-1;J>=0;--J){var j=this.tryEntries[J];if(j.finallyLoc===G)return this.complete(j.completion,j.afterLoc),de(j),y}},catch:function(G){for(var J=this.tryEntries.length-1;J>=0;--J){var j=this.tryEntries[J];if(j.tryLoc===G){var K=j.completion;if(K.type==="throw"){var X=K.arg;de(j)}return X}}throw new Error("illegal catch attempt")},delegateYield:function(G,J,j){return this.delegate={iterator:ye(G),resultName:J,nextLoc:j},this.method==="next"&&(this.arg=r),y}},i}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(G0);var W_=G0.exports,ja=W_(),Y_=ja;try{regeneratorRuntime=ja}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ja:Function("r","regeneratorRuntime = r")(ja)}const w=Sn(Y_);function X_(e,t){t===void 0&&(t={});var n=Number(e[0]),r=Number(e[1]),i=Number(e[2]),a=Number(e[3]);if(e.length===6)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var o=[n,r],u=[n,a],s=[i,a],l=[i,r];return qs([[o,l,s,u,o]],t.properties,{bbox:e,id:t.id})}var Y0={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(s,l,c){this.fn=s,this.context=l,this.once=c||!1}function a(s,l,c,f,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,f||s,h),v=n?n+l:l;return s._events[v]?s._events[v].fn?s._events[v]=[s._events[v],d]:s._events[v].push(d):(s._events[v]=d,s._eventsCount++),s}function o(s,l){--s._eventsCount===0?s._events=new r:delete s._events[l]}function u(){this._events=new r,this._eventsCount=0}u.prototype.eventNames=function(){var l=[],c,f;if(this._eventsCount===0)return l;for(f in c=this._events)t.call(c,f)&&l.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},u.prototype.listeners=function(l){var c=n?n+l:l,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,d=f.length,v=new Array(d);h<d;h++)v[h]=f[h].fn;return v},u.prototype.listenerCount=function(l){var c=n?n+l:l,f=this._events[c];return f?f.fn?1:f.length:0},u.prototype.emit=function(l,c,f,h,d,v){var p=n?n+l:l;if(!this._events[p])return!1;var g=this._events[p],m=arguments.length,_,y;if(g.fn){switch(g.once&&this.removeListener(l,g.fn,void 0,!0),m){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,f),!0;case 4:return g.fn.call(g.context,c,f,h),!0;case 5:return g.fn.call(g.context,c,f,h,d),!0;case 6:return g.fn.call(g.context,c,f,h,d,v),!0}for(y=1,_=new Array(m-1);y<m;y++)_[y-1]=arguments[y];g.fn.apply(g.context,_)}else{var x=g.length,b;for(y=0;y<x;y++)switch(g[y].once&&this.removeListener(l,g[y].fn,void 0,!0),m){case 1:g[y].fn.call(g[y].context);break;case 2:g[y].fn.call(g[y].context,c);break;case 3:g[y].fn.call(g[y].context,c,f);break;case 4:g[y].fn.call(g[y].context,c,f,h);break;default:if(!_)for(b=1,_=new Array(m-1);b<m;b++)_[b-1]=arguments[b];g[y].fn.apply(g[y].context,_)}}return!0},u.prototype.on=function(l,c,f){return a(this,l,c,f,!1)},u.prototype.once=function(l,c,f){return a(this,l,c,f,!0)},u.prototype.removeListener=function(l,c,f,h){var d=n?n+l:l;if(!this._events[d])return this;if(!c)return o(this,d),this;var v=this._events[d];if(v.fn)v.fn===c&&(!h||v.once)&&(!f||v.context===f)&&o(this,d);else{for(var p=0,g=[],m=v.length;p<m;p++)(v[p].fn!==c||h&&!v[p].once||f&&v[p].context!==f)&&g.push(v[p]);g.length?this._events[d]=g.length===1?g[0]:g:o(this,d)}return this},u.prototype.removeAllListeners=function(l){var c;return l?(c=n?n+l:l,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(Y0);var Kt=Y0.exports;const ol=Sn(Kt);var Ha=function(e){return e.Realtime="realtime",e.Overlap="overlap",e.Replace="replace",e}({}),ln=function(e){return e.Loading="Loading",e.Loaded="Loaded",e.Failure="Failure",e.Cancelled="Cancelled",e}({}),X0=0,dc=1,Lo=2;function Z_(e){e.forEach(function(t){t.isCurrent&&(t.isVisible=t.isLoaded)})}function q_(e){e.forEach(function(t){t.properties.state=X0}),e.forEach(function(t){t.isCurrent&&!Z0(t)&&ul(t)}),e.forEach(function(t){t.isVisible=!!(t.properties.state&Lo)})}function Q_(e){e.forEach(function(n){n.properties.state=X0}),e.forEach(function(n){n.isCurrent&&Z0(n)});var t=e.slice().sort(function(n,r){return n.z-r.z});t.forEach(function(n){n.isVisible=!!(n.properties.state&Lo),n.children.length&&(n.isVisible||n.properties.state&dc)?n.children.forEach(function(r){r.properties.state=dc}):n.isCurrent&&ul(n)})}function Z0(e){for(;e;){if(e.isLoaded)return e.properties.state|=Lo,!0;e=e.parent}return!1}function ul(e){e.children.forEach(function(t){t.isLoaded?t.properties.state|=Lo:ul(t)})}var hi,q0=[-1/0,-1/0,1/0,1/0],J_=.2,K_=5,e2=(hi={},S(hi,Ha.Realtime,Z_),S(hi,Ha.Overlap,q_),S(hi,Ha.Replace,Q_),hi),t2=function(){};function ns(e,t,n){var r=Math.floor((e+180)/360*Math.pow(2,n)),i=Math.floor((1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,n));return[r,i]}function vc(e,t,n){var r=e/Math.pow(2,n)*360-180,i=Math.PI-2*Math.PI*t/Math.pow(2,n),a=180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)));return[r,a]}var Q0=function(t,n,r){var i=vc(t,n,r),a=Fe(i,2),o=a[0],u=a[1],s=vc(t+1,n+1,r),l=Fe(s,2),c=l[0],f=l[1];return[o,f,c,u]};function n2(e){var t=e.zoom,n=e.latLonBounds,r=e.maxZoom,i=r===void 0?1/0:r,a=e.minZoom,o=a===void 0?0:a,u=e.zoomOffset,s=u===void 0?0:u,l=e.extent,c=l===void 0?q0:l,f=Math.ceil(t)+s;if(Number.isFinite(o)&&f<o)return[];Number.isFinite(i)&&f>i&&(f=i);for(var h=Fe(n,4),d=h[0],v=h[1],p=h[2],g=h[3],m=[Math.max(d,c[0]),Math.max(v,c[1]),Math.min(p,c[2]),Math.min(g,c[3])],_=[],y=ns(m[0],m[1],f),x=Fe(y,2),b=x[0],M=x[1],C=ns(m[2],m[3],f),L=Fe(C,2),N=L[0],I=L[1],T=b;T<=N;T++)for(var k=I;k<=M;k++)_.push({x:T,y:k,z:f});var O=(N+b)/2,z=(M+I)/2,ne=function(pe,ye){return Math.abs(pe-O)+Math.abs(ye-z)};return _.sort(function(de,pe){return ne(de.x,de.y)-ne(pe.x,pe.y)}),_}var r2=function(t,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a=Math.pow(2,r),o=a-1,u=a,s=t,l=n;return i&&(s<0?s=s+u:s>o&&(s=s%u)),{warpX:s,warpY:l}};function i2(e){var t=a2();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function a2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var o2=function(e){Te(n,e);var t=i2(n);function n(r){var i;ce(this,n),i=t.call(this),S(P(i),"tileSize",256),S(P(i),"isVisible",!1),S(P(i),"isCurrent",!1),S(P(i),"isVisibleChange",!1),S(P(i),"loadedLayers",0),S(P(i),"isLayerLoaded",!1),S(P(i),"isLoad",!1),S(P(i),"isChildLoad",!1),S(P(i),"parent",null),S(P(i),"children",[]),S(P(i),"data",null),S(P(i),"properties",{}),S(P(i),"loadDataId",0);var a=r.x,o=r.y,u=r.z,s=r.tileSize,l=r.warp,c=l===void 0?!0:l;return i.x=a,i.y=o,i.z=u,i.warp=c||!0,i.tileSize=s,i}return le(n,[{key:"isLoading",get:function(){return this.loadStatus===ln.Loading}},{key:"isLoaded",get:function(){return this.loadStatus===ln.Loaded}},{key:"isFailure",get:function(){return this.loadStatus===ln.Failure}},{key:"setTileLayerLoaded",value:function(){this.isLayerLoaded=!0}},{key:"isCancelled",get:function(){return this.loadStatus===ln.Cancelled}},{key:"isDone",get:function(){return[ln.Loaded,ln.Cancelled,ln.Failure].includes(this.loadStatus)}},{key:"bounds",get:function(){return Q0(this.x,this.y,this.z)}},{key:"bboxPolygon",get:function(){var i=Fe(this.bounds,4),a=i[0],o=i[1],u=i[2],s=i[3],l=[(u-a)/2,(s-o)/2],c=X_(this.bounds,{properties:{key:this.key,id:this.key,bbox:this.bounds,center:l,meta:`
      `.concat(this.key,`
      `)}});return c}},{key:"key",get:function(){var i="".concat(this.x,"_").concat(this.y,"_").concat(this.z);return i}},{key:"layerLoad",value:function(){this.loadedLayers++,this.emit("layerLoaded")}},{key:"loadData",value:function(){var r=Q(w.mark(function a(o){var u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,C;return w.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=o.getData,s=o.onLoad,l=o.onError,this.loadDataId++,c=this.loadDataId,this.isLoading&&this.abortLoad(),this.abortController=new AbortController,this.loadStatus=ln.Loading,f=null,N.prev=7,d=this.x,v=this.y,p=this.z,g=this.bounds,m=this.tileSize,_=this.warp,y=r2(d,v,p,_),x=y.warpX,b=y.warpY,M=this.abortController.signal,C={x,y:b,z:p,bounds:g,tileSize:m,signal:M,warp:_},N.next=14,u(C,this);case 14:f=N.sent,N.next=20;break;case 17:N.prev=17,N.t0=N.catch(7),h=N.t0;case 20:if(c===this.loadDataId){N.next=22;break}return N.abrupt("return");case 22:if(!(this.isCancelled&&!f)){N.next=24;break}return N.abrupt("return");case 24:if(!(h||!f)){N.next=28;break}return this.loadStatus=ln.Failure,l(h,this),N.abrupt("return");case 28:this.loadStatus=ln.Loaded,this.data=f,s(this);case 31:case"end":return N.stop()}},a,this,[[7,17]])}));function i(a){return r.apply(this,arguments)}return i}()},{key:"reloadData",value:function(i){this.isLoading&&this.abortLoad(),this.loadData(i)}},{key:"abortLoad",value:function(){this.isLoaded||this.isCancelled||(this.loadStatus=ln.Cancelled,this.abortController.abort(),this.xhrCancel&&this.xhrCancel())}}]),n}(Kt.EventEmitter),u2=function(t,n){var r=ro(t),i=al(r,n),a=360*3-180,o=85.0511287798065,u=[Math.max(i[0][0],-a),Math.max(i[0][1],-o),Math.min(i[1][0],a),Math.min(i[1][1],o)];return u},s2=function(t,n){var r=ro(t),i=ro(n),a=$0(r,i);return a};function zn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l2(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function l2(e,t){if(e){if(typeof e=="string")return pc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pc(e,t)}}function pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c2(e){var t=f2();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function f2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var h2=nt.throttle,wr=function(e){return e.TilesLoadStart="tiles-load-start",e.TileLoaded="tile-loaded",e.TileError="tile-error",e.TileUnload="tile-unload",e.TileUpdate="tile-update",e.TilesLoadFinished="tiles-load-finished",e}({}),d2=function(e){Te(n,e);var t=c2(n);function n(r){var i;return ce(this,n),i=t.call(this),S(P(i),"currentTiles",[]),S(P(i),"cacheTiles",new Map),S(P(i),"throttleUpdate",h2(function(a,o){i.update(a,o)},16)),S(P(i),"onTileLoad",function(a){i.emit(wr.TileLoaded,a),i.updateTileVisible(),i.loadFinished()}),S(P(i),"onTileError",function(a,o){i.emit(wr.TileError,{error:a,tile:o}),i.updateTileVisible(),i.loadFinished()}),S(P(i),"onTileUnload",function(a){i.emit(wr.TileUnload,a),i.loadFinished()}),i.options={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,extent:q0,getTileData:t2,warp:!0,updateStrategy:Ha.Replace},i.updateOptions(r),i}return le(n,[{key:"isLoaded",get:function(){return this.currentTiles.every(function(i){return i.isDone})}},{key:"tiles",get:function(){var i=Array.from(this.cacheTiles.values()).sort(function(a,o){return a.z-o.z});return i}},{key:"updateOptions",value:function(i){var a=i.minZoom===void 0?this.options.minZoom:Math.ceil(i.minZoom),o=i.maxZoom===void 0?this.options.maxZoom:Math.floor(i.maxZoom);this.options=$($($({},this.options),i),{},{minZoom:a,maxZoom:o})}},{key:"update",value:function(i,a){var o=this,u=Math.max(0,Math.ceil(i));if(!(this.lastViewStates&&this.lastViewStates.zoom===u&&s2(this.lastViewStates.latLonBoundsBuffer,a))){var s=u2(a,J_);this.lastViewStates={zoom:u,latLonBounds:a,latLonBoundsBuffer:s},this.currentZoom=u;var l=!1,c=this.getTileIndices(u,s).filter(function(f){return o.options.warp||f.x>=0&&f.x<Math.pow(2,u)});this.emit(wr.TilesLoadStart),this.currentTiles=c.map(function(f){var h=f.x,d=f.y,v=f.z,p=o.getTile(h,d,v);if(p){var g,m,_=((g=p)===null||g===void 0?void 0:g.isFailure)||((m=p)===null||m===void 0?void 0:m.isCancelled);return _&&p.loadData({getData:o.options.getTileData,onLoad:o.onTileLoad,onError:o.onTileError}),p}return p=o.createTile(h,d,v),l=!0,p}),l&&this.resizeCacheTiles(),this.updateTileVisible(),this.pruneRequests()}}},{key:"reloadAll",value:function(){var i=zn(this.cacheTiles),a;try{for(i.s();!(a=i.n()).done;){var o=Fe(a.value,2),u=o[0],s=o[1];if(!this.currentTiles.includes(s)){this.cacheTiles.delete(u),this.onTileUnload(s);return}this.onTileUnload(s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError})}}catch(l){i.e(l)}finally{i.f()}}},{key:"reloadTileById",value:function(i,a,o){var u=this.cacheTiles.get("".concat(a,",").concat(o,",").concat(i));u&&(this.onTileUnload(u),u.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}))}},{key:"reloadTileByLnglat",value:function(i,a,o){var u=this.getTileByLngLat(i,a,o);u&&this.reloadTileById(u.z,u.x,u.y)}},{key:"reloadTileByExtent",value:function(i,a){var o=this,u=this.getTileIndices(a,i);u.forEach(function(s){o.reloadTileById(s.z,s.x,s.y)})}},{key:"pruneRequests",value:function(){var i=[],a=zn(this.cacheTiles.values()),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;u.isLoading&&!u.isCurrent&&!u.isVisible&&i.push(u)}}catch(l){a.e(l)}finally{a.f()}for(;i.length>0;){var s=i.shift();s.abortLoad()}}},{key:"getTileByLngLat",value:function(i,a,o){var u=this.options.zoomOffset,s=Math.ceil(o)+u,l=ns(i,a,s),c=this.tiles.filter(function(f){return f.key==="".concat(l[0],"_").concat(l[1],"_").concat(s)});return c[0]}},{key:"getTileExtent",value:function(i,a){return this.getTileIndices(a,i)}},{key:"getTileByZXY",value:function(i,a,o){var u=this.tiles.filter(function(s){return s.key==="".concat(a,"_").concat(o,"_").concat(i)});return u[0]}},{key:"clear",value:function(){var i=zn(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.isLoading?o.abortLoad():this.onTileUnload(o)}}catch(u){i.e(u)}finally{i.f()}this.lastViewStates=void 0,this.cacheTiles.clear(),this.currentTiles=[]}},{key:"destroy",value:function(){this.clear(),this.removeAllListeners()}},{key:"updateTileVisible",value:function(){var i=this.options.updateStrategy,a=new Map,o=zn(this.cacheTiles.values()),u;try{for(o.s();!(u=o.n()).done;){var s=u.value;a.set(s.key,s.isVisible),s.isCurrent=!1,s.isVisible=!1}}catch(v){o.e(v)}finally{o.f()}var l=zn(this.currentTiles),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.isCurrent=!0,f.isVisible=!0}}catch(v){l.e(v)}finally{l.f()}var h=Array.from(this.cacheTiles.values());typeof i=="function"?i(h):e2[i](h);var d=!1;Array.from(this.cacheTiles.values()).forEach(function(v){v.isVisible!==a.get(v.key)?(v.isVisibleChange=!0,d=!0):v.isVisibleChange=!1}),d&&this.emit(wr.TileUpdate)}},{key:"getTileIndices",value:function(i,a){var o=this.options,u=o.tileSize,s=o.extent,l=o.zoomOffset,c=Math.floor(this.options.maxZoom),f=Math.ceil(this.options.minZoom),h=n2({maxZoom:c,minZoom:f,zoomOffset:l,tileSize:u,zoom:i,latLonBounds:a,extent:s});return h}},{key:"getTileId",value:function(i,a,o){var u="".concat(i,",").concat(a,",").concat(o);return u}},{key:"loadFinished",value:function(){var i=!this.currentTiles.some(function(a){return!a.isDone});return i&&this.emit(wr.TilesLoadFinished),i}},{key:"getTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=this.cacheTiles.get(u);return s}},{key:"createTile",value:function(i,a,o){var u=this.getTileId(i,a,o),s=new o2({x:i,y:a,z:o,tileSize:this.options.tileSize,warp:this.options.warp});return this.cacheTiles.set(u,s),s.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}),s}},{key:"resizeCacheTiles",value:function(){var i=K_*this.currentTiles.length,a=this.cacheTiles.size>i;if(a){var o=zn(this.cacheTiles),u;try{for(o.s();!(u=o.n()).done;){var s=Fe(u.value,2),l=s[0],c=s[1];if(!c.isVisible&&!this.currentTiles.includes(c)&&(this.cacheTiles.delete(l),this.onTileUnload(c)),this.cacheTiles.size<=i)break}}catch(f){o.e(f)}finally{o.f()}}this.rebuildTileTree()}},{key:"rebuildTileTree",value:function(){var i=zn(this.cacheTiles.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;o.parent=null,o.children.length=0}}catch(f){i.e(f)}finally{i.f()}var u=zn(this.cacheTiles.values()),s;try{for(u.s();!(s=u.n()).done;){var l=s.value,c=this.getNearestAncestor(l.x,l.y,l.z);l.parent=c,c!=null&&c.children&&c.children.push(l)}}catch(f){u.e(f)}finally{u.f()}}},{key:"getNearestAncestor",value:function(i,a,o){for(;o>this.options.minZoom;){i=Math.floor(i/2),a=Math.floor(a/2),o=o-1;var u=this.getTile(i,a,o);if(u)return u}return null}}]),n}(ol);function J0(e){var t=[],n=/\{([a-z])-([a-z])\}/.exec(e);if(n){var r=n[1].charCodeAt(0),i=n[2].charCodeAt(0),a;for(a=r;a<=i;++a)t.push(e.replace(n[0],String.fromCharCode(a)));return t}if(n=/\{(\d+)-(\d+)\}/.exec(e),n){for(var o=parseInt(n[2],10),u=parseInt(n[1],10);u<=o;u++)t.push(e.replace(n[0],u.toString()));return t}return t.push(e),t}function jr(e,t){if(!e||!e.length)throw new Error("url is not allowed to be empty");var n=t.x,r=t.y,i=t.z,a=J0(e),o=Math.abs(n+r)%a.length,u=Qs(a[o])?"".concat(a[o],"/{z}/{x}/{y}"):a[o];return u.replace(/\{x\}/g,n.toString()).replace(/\{y\}/g,r.toString()).replace(/\{z\}/g,i.toString()).replace(/\{bbox\}/g,Q0(n,r,i).join(",")).replace(/\{-y\}/g,(Math.pow(2,i)-r-1).toString())}function v2(e,t){var n=t.x,r=t.y,i=t.z,a=t.layer,o=t.version,u=o===void 0?"1.0.0":o,s=t.style,l=s===void 0?"default":s,c=t.format,f=t.service,h=f===void 0?"WMTS":f,d=t.tileMatrixset,v=J0(e),p=Math.abs(n+r)%v.length,g="".concat(v[p],"&SERVICE=").concat(h,"&REQUEST=GetTile&VERSION=").concat(u,"&LAYER=").concat(a,"&STYLE=").concat(l,"&TILEMATRIXSET=").concat(d,"&FORMAT=").concat(c,"&TILECOL=").concat(n,"&TILEROW=").concat(r,"&TILEMATRIX=").concat(i);return g}function rs(e,t){if(!e)throw new Error(t||"web worker helper assertion failed.")}var hu=new Map;function p2(e){rs(e.source&&!e.url||!e.source&&e.url);var t=hu.get(e.source||e.url);return t||(e.url&&(t=g2(e.url),hu.set(e.url,t)),e.source&&(t=K0(e.source),hu.set(e.source,t))),rs(t),t}function g2(e){if(!e.startsWith("http"))return e;var t=m2(e);return K0(t)}function K0(e){var t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function m2(e){return`try {
  importScripts('`+e+`');
} catch (error) {
  console.error(error);
  throw error;
}`}function sl(e,t,n){t===void 0&&(t=!0);var r=n||new Set;if(e){if(gc(e))r.add(e);else if(gc(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)){if(t&&typeof e=="object")for(var i in e)sl(e[i],t,r)}}return n===void 0?Array.from(r):[]}function gc(e){return e?e instanceof ArrayBuffer||typeof MessagePort<"u"&&e instanceof MessagePort||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas:!1}var du=function(){};(function(){function e(t){this.terminated=!1,this.loadableURL="";var n=t.name,r=t.source,i=t.url;rs(r||i),this.name=n,this.source=r,this.url=i,this.onMessage=du,this.onError=function(a){},this.worker=this.createBrowserWorker()}return e.isSupported=function(){return typeof Worker<"u"},e.prototype.destroy=function(){this.onMessage=du,this.onError=du,this.worker.terminate(),this.terminated=!0},Object.defineProperty(e.prototype,"isRunning",{get:function(){return!!this.onMessage},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(t,n){n=n||sl(t),this.worker.postMessage(t,n)},e.prototype.getErrorFromErrorEvent=function(t){var n="Failed to load ";return n+="worker "+this.name+" from "+this.url+". ",t.message&&(n+=t.message+" in "),t.lineno&&(n+=":"+t.lineno+":"+t.colno),new Error(n)},e.prototype.createBrowserWorker=function(){var t=this;this.loadableURL=p2({source:this.source,url:this.url});var n=new Worker(this.loadableURL,{name:this.name});return n.onmessage=function(r){r.data?t.onMessage(r.data):t.onError(new Error("No data received"))},n.onerror=function(r){t.onError(t.getErrorFromErrorEvent(r)),t.terminated=!0},n.onmessageerror=function(r){},n},e})();var vu=new Map;(function(){function e(){}return Object.defineProperty(e,"onmessage",{set:function(t){self.onmessage=function(n){if(mc(n)){var r=n.data,i=r.type,a=r.payload;t(i,a)}}},enumerable:!1,configurable:!0}),e.addEventListener=function(t){var n=vu.get(t);n||(n=function(r){if(mc(r)){var i=r.data,a=i.type,o=i.payload;t(a,o)}}),self.addEventListener("message",n)},e.removeEventListener=function(t){var n=vu.get(t);vu.delete(t),self.removeEventListener("message",n)},e.postMessage=function(t,n){if(self){var r={source:"Worker thread",type:t,payload:n},i=sl(n);self.postMessage(r,i)}},e})();function mc(e){var t=e.type,n=e.data;return t==="message"&&n&&typeof n.source=="string"&&n.source==="Main thread"}function ll(e){var t=e.color;return!t||!t.length?[1,1,1,1]:t}function cl(e,t,n){return n.length===2?[n[0],n[1],0]:[n[0],n[1],n[2]]}function fl(e){var t=e.filter;return t?[1]:[0]}function hl(e,t){return[t]}var dl={exports:{}};dl.exports=Ro;dl.exports.default=Ro;function Ro(e,t,n){n=n||2;var r=t&&t.length,i=r?t[0]*n:e.length,a=eg(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;var u,s,l,c,f,h,d;if(r&&(a=S2(e,t,a,n)),e.length>80*n){u=l=e[0],s=c=e[1];for(var v=n;v<i;v+=n)f=e[v],h=e[v+1],f<u&&(u=f),h<s&&(s=h),f>l&&(l=f),h>c&&(c=h);d=Math.max(l-u,c-s),d=d!==0?32767/d:0}return Wi(a,o,n,u,s,d,0),o}function eg(e,t,n,r,i){var a,o;if(i===os(e,t,n,r)>0)for(a=t;a<n;a+=r)o=yc(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=yc(a,e[a],e[a+1],o);return o&&Po(o,o.next)&&(Xi(o),o=o.next),o}function mr(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(Po(n,n.next)||ft(n.prev,n,n.next)===0)){if(Xi(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wi(e,t,n,r,i,a,o){if(e){!o&&a&&T2(e,r,i,a);for(var u=e,s,l;e.prev!==e.next;){if(s=e.prev,l=e.next,a?_2(e,r,i,a):y2(e)){t.push(s.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Xi(e),e=l.next,u=l.next;continue}if(e=l,e===u){o?o===1?(e=x2(mr(e),t,n),Wi(e,t,n,r,i,a,2)):o===2&&b2(e,t,n,r,i,a):Wi(mr(e),t,n,r,i,a,1);break}}}}function y2(e){var t=e.prev,n=e,r=e.next;if(ft(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,u=t.y,s=n.y,l=r.y,c=i<a?i<o?i:o:a<o?a:o,f=u<s?u<l?u:l:s<l?s:l,h=i>a?i>o?i:o:a>o?a:o,d=u>s?u>l?u:l:s>l?s:l,v=r.next;v!==t;){if(v.x>=c&&v.x<=h&&v.y>=f&&v.y<=d&&zr(i,u,a,s,o,l,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function _2(e,t,n,r){var i=e.prev,a=e,o=e.next;if(ft(i,a,o)>=0)return!1;for(var u=i.x,s=a.x,l=o.x,c=i.y,f=a.y,h=o.y,d=u<s?u<l?u:l:s<l?s:l,v=c<f?c<h?c:h:f<h?f:h,p=u>s?u>l?u:l:s>l?s:l,g=c>f?c>h?c:h:f>h?f:h,m=is(d,v,t,n,r),_=is(p,g,t,n,r),y=e.prevZ,x=e.nextZ;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&zr(u,c,s,f,l,h,y.x,y.y)&&ft(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&zr(u,c,s,f,l,h,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=p&&y.y>=v&&y.y<=g&&y!==i&&y!==o&&zr(u,c,s,f,l,h,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=p&&x.y>=v&&x.y<=g&&x!==i&&x!==o&&zr(u,c,s,f,l,h,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function x2(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!Po(i,a)&&tg(i,r,r.next,a)&&Yi(i,a)&&Yi(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Xi(r),Xi(r.next),r=e=a),r=r.next}while(r!==e);return mr(r)}function b2(e,t,n,r,i,a){var o=e;do{for(var u=o.next.next;u!==o.prev;){if(o.i!==u.i&&I2(o,u)){var s=ng(o,u);o=mr(o,o.next),s=mr(s,s.next),Wi(o,t,n,r,i,a,0),Wi(s,t,n,r,i,a,0);return}u=u.next}o=o.next}while(o!==e)}function S2(e,t,n,r){var i=[],a,o,u,s,l;for(a=0,o=t.length;a<o;a++)u=t[a]*r,s=a<o-1?t[a+1]*r:e.length,l=eg(e,u,s,r,!1),l===l.next&&(l.steiner=!0),i.push(k2(l));for(i.sort(A2),a=0;a<i.length;a++)n=E2(i[a],n);return n}function A2(e,t){return e.x-t.x}function E2(e,t){var n=C2(e,t);if(!n)return t;var r=ng(n,e);return mr(r,r.next),mr(n,n.next)}function C2(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var u=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=r&&u>a&&(a=u,o=n.x<n.next.x?n:n.next,u===r))return o}n=n.next}while(n!==t);if(!o)return null;var s=o,l=o.x,c=o.y,f=1/0,h;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&zr(i<c?r:a,i,l,c,i<c?a:r,i,n.x,n.y)&&(h=Math.abs(i-n.y)/(r-n.x),Yi(n,e)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&w2(o,n)))&&(o=n,f=h)),n=n.next;while(n!==s);return o}function w2(e,t){return ft(e.prev,e,t.prev)<0&&ft(t.next,e,e.next)<0}function T2(e,t,n,r){var i=e;do i.z===0&&(i.z=is(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,M2(i)}function M2(e){var t,n,r,i,a,o,u,s,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,u=0,t=0;t<l&&(u++,r=r.nextZ,!!r);t++);for(s=l;u>0||s>0&&r;)u!==0&&(s===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,u--):(i=r,r=r.nextZ,s--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function is(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function k2(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function zr(e,t,n,r,i,a,o,u){return(i-o)*(t-u)>=(e-o)*(a-u)&&(e-o)*(r-u)>=(n-o)*(t-u)&&(n-o)*(a-u)>=(i-o)*(r-u)}function I2(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!L2(e,t)&&(Yi(e,t)&&Yi(t,e)&&R2(e,t)&&(ft(e.prev,e,t.prev)||ft(e,t.prev,t))||Po(e,t)&&ft(e.prev,e,e.next)>0&&ft(t.prev,t,t.next)>0)}function ft(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Po(e,t){return e.x===t.x&&e.y===t.y}function tg(e,t,n,r){var i=Ia(ft(e,t,n)),a=Ia(ft(e,t,r)),o=Ia(ft(n,r,e)),u=Ia(ft(n,r,t));return!!(i!==a&&o!==u||i===0&&ka(e,n,t)||a===0&&ka(e,r,t)||o===0&&ka(n,e,r)||u===0&&ka(n,t,r))}function ka(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ia(e){return e>0?1:e<0?-1:0}function L2(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&tg(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Yi(e,t){return ft(e.prev,e,e.next)<0?ft(e,t,e.next)>=0&&ft(e,e.prev,t)>=0:ft(e,t,e.prev)<0||ft(e,e.next,t)<0}function R2(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ng(e,t){var n=new as(e.i,e.x,e.y),r=new as(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function yc(e,t,n,r){var i=new as(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Xi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function as(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ro.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(os(e,0,a,n));if(i)for(var u=0,s=t.length;u<s;u++){var l=t[u]*n,c=u<s-1?t[u+1]*n:e.length;o-=Math.abs(os(e,l,c,n))}var f=0;for(u=0;u<r.length;u+=3){var h=r[u]*n,d=r[u+1]*n,v=r[u+2]*n;f+=Math.abs((e[h]-e[v])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[v+1]-e[h+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function os(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}Ro.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n};var P2=dl.exports;const bn=Sn(P2);var La=We();We();var yt=We(),$n=We(),Tr=We();function pu(e,t,n,r,i){xt(e,n,r),yn(e,e),t=Zr(-e[1],e[0]);var a=Zr(-n[1],n[0]);return[i/Kn(t,a),t]}function Vn(e,t){return l0(e,-t[1],t[0])}function Mr(e,t,n){return Xr(e,t,n),yn(e,e),e}function gu(e,t){return e[0]===t[0]&&e[1]===t[1]}var O2=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ce(this,e),S(this,"lastFlip",-1),S(this,"miter",Zr(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return le(e,[{key:"extrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(re(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"simpleExtrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(re(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.segment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleExtrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.simpleSegment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"segment_gaode2",value:function(n,r,i,a,o,u,s,l){var c=0,f=n.indices,h=n.positions,d=n.normals,v=this.cap==="square",p=this.join==="bevel",g=dt([s[0],s[1]]),m=dt([u[0],u[1]]);Mr(yt,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=We(),Vn(this.normal,yt)),!this.started)if(this.started=!0,v){var y=We(),x=We();xt(y,this.normal,yt),xt(x,this.normal,yt),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(r+0,r+1,r+2),o){gu(a,o)&&xt(o,a,yn(o,$r(o,a,i))),Mr($n,o,a);var C=pu(Tr,We(),yt,$n,this.thickness),L=Fe(C,2),N=L[0],I=L[1],T=Kn(Tr,this.normal)<0?-1:1,k=p;if(!k&&this.join==="miter"){var O=N;O>this.miterLimit&&(k=!0)}k?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,re(this.lastFlip!==-T?[r,r+2,r+3]:[r+2,r+1,r+3])),f.push(r+2,r+3,r+4),Vn(La,$n),pn(this.normal,La),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,N,this.totalDistance),f.push.apply(f,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),T=-1,pn(this.normal,I),c+=2),this.lastFlip=T}else{if(Vn(this.normal,yt),v){var b=We(),M=We();Xr(M,yt,this.normal),xt(b,yt,this.normal),d.push(M[0],M[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),c+=2}return c}},{key:"simpleSegment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=dt([a[0],a[1]]),h=dt([i[0],i[1]]);Mr(yt,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=We(),Vn(this.normal,yt)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(r+0,r+1,r+2),!o)Vn(this.normal,yt),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2;else{var v=dt([o[0],o[1]]);gu(f,v)&&xt(v,f,yn(v,$r(v,f,h))),Mr($n,v,f);var p=pu(Tr,We(),yt,$n,this.thickness),g=Fe(p,2),m=g[0],_=g[1],y=Kn(Tr,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),y=-1,pn(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=this.cap==="square",h=this.join==="bevel",d=dt([a[0],a[1]]),v=dt([i[0],i[1]]);Mr(yt,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=We(),Vn(this.normal,yt)),!this.started)if(this.started=!0,f){var g=We(),m=We();xt(g,this.normal,yt),xt(m,this.normal,yt),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(r+0,r+1,r+2),o){var x=dt([o[0],o[1]]);gu(d,x)&&xt(x,d,yn(x,$r(x,d,v))),Mr($n,x,d);var b=pu(Tr,We(),yt,$n,this.thickness),M=Fe(b,2),C=M[0],L=M[1],N=Kn(Tr,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var T=C;T>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(L[0],L[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,re(this.lastFlip!==-N?[r,r+2,r+3]:[r+2,r+1,r+3])),s.push(r+2,r+3,r+4),Vn(La,$n),pn(this.normal,La),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,L,C,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),N=-1,pn(this.normal,L),u+=2),this.lastFlip=N}else{if(Vn(this.normal,yt),f){var _=We(),y=We();Xr(y,yt,this.normal),xt(_,yt,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2}return u}},{key:"extrusions",value:function(n,r,i,a,o,u){r.push(a[0],a[1],0),r.push(a[0],a[1],0),n.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),n.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(n,r){var i=r[0]-n[0],a=r[1]-n[1];return Math.sqrt(i*i+a*a)}}]),e}();function us(e){var t=e.coordinates,n=e.originCoordinates,r=e.version,i=new O2({dash:!0,join:"bevel"});if(r==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=n;Array.isArray(o[0][0])||(o=[n]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function Ga(e){var t=Rn(e.coordinates);return{vertices:[].concat(re(t),re(t),re(t),re(t)),indices:[0,1,2,2,3,0],size:t.length}}function rg(e){var t=e.coordinates,n=bn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes,o=bn(r,a,i);return{indices:o,vertices:r,size:i}}var F2=function(){var e=Q(w.mark(function t(n){var r,i,a,o,u,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o=n.iconMap,u={a_Color:ll,a_Position:cl,filter:fl,a_vertexId:hl,a_PickingColor:function(p){var g=p.id;return a?Dn(g):[0,0,0]},a_DistanceAndIndex:function(p,g,m,_,y,x){return x===void 0?[m[3],10]:[m[3],x]},a_Total_Distance:function(p,g,m){return[m[5]]},a_Size:function(p){var g=p.size,m=g===void 0?1:g;return Array.isArray(m)?[m[0],m[1]]:[m,0]},a_Normal:function(p,g,m,_,y){return y},a_Miter:function(p,g,m){return[m[4]]},a_iconMapUV:function(p){var g=p.texture,m=o[g]||{x:0,y:0},_=m.x,y=m.y;return[_,y]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=us(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(N){c.push(N+l)}),f=x;var M=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=M;for(var C=function(I){var T=(y==null?void 0:y.slice(I*3,I*3+3))||[],k=_.slice(I*x,I*x+x),O=0;b&&b[I]!==void 0&&(O=b[I]),r.forEach(function(z){if(z&&u[z.name]){var ne;(ne=z.buffer.data).push.apply(ne,re(u[z.name](v,p,k,I,T,O)))}})},L=0;L<M;L++)C(L)}),d.abrupt("return",{descriptors:r,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),D2=function(){var e=Q(w.mark(function t(n){var r,i,a,o,u,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o=n.shape2d,u={a_Color:ll,a_Position:cl,filter:fl,a_vertexId:hl,a_PickingColor:function(p){var g=p.id;return a?Dn(g):[0,0,0]},a_Shape:function(p){var g=p.shape,m=g===void 0?2:g,_=o.indexOf(m);return[_]},a_Extrude:function(p,g,m,_){var y=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],x=_%4*3;return[y[x],y[x+1],y[x+2]]},a_Size:function(p){var g=p.size,m=g===void 0?5:g;return Array.isArray(m)?[m[0]]:[m]}},s={sizePerElement:0,elements:[]},l=0,c=[],f=3,i.forEach(function(v,p){var g=Ga(v),m=g.indices,_=g.vertices,y=g.normals,x=g.size,b=g.indexes;m.forEach(function(N){c.push(N+l)}),f=x;var M=_.length/x;s.sizePerElement=f,s.elements.push({featureIdx:p,vertices:_,normals:y,offset:l}),l+=M;for(var C=function(I){var T=(y==null?void 0:y.slice(I*3,I*3+3))||[],k=_.slice(I*x,I*x+x),O=0;b&&b[I]!==void 0&&(O=b[I]),r.forEach(function(z){if(z&&u[z.name]){var ne;(ne=z.buffer.data).push.apply(ne,re(u[z.name](v,p,k,I,T,O)))}})},L=0;L<M;L++)C(L)}),d.abrupt("return",{descriptors:r,featureLayout:s,indices:c});case 8:case"end":return d.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),N2=function(){var e=Q(w.mark(function t(n){var r,i,a,o,u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return r=n.descriptors,i=n.features,a=n.enablePicking,o={a_Color:ll,a_Position:cl,filter:fl,a_vertexId:hl,a_PickingColor:function(v){var p=v.id;return a?Dn(p):[0,0,0]}},u={sizePerElement:0,elements:[]},s=0,l=[],c=3,i.forEach(function(d,v){var p=rg(d),g=p.indices,m=p.vertices,_=p.normals,y=p.size,x=p.indexes;g.forEach(function(L){l.push(L+s)}),c=y;var b=m.length/y;u.sizePerElement=c,u.elements.push({featureIdx:v,vertices:m,normals:_,offset:s}),s+=b;for(var M=function(N){var I=(_==null?void 0:_.slice(N*3,N*3+3))||[],T=m.slice(N*y,N*y+y),k=0;x&&x[N]!==void 0&&(k=x[N]),r.forEach(function(O){if(O&&o[O.name]){var z;(z=O.buffer.data).push.apply(z,re(o[O.name](d,v,T,N,I,k)))}})},C=0;C<b;C++)M(C)}),h.abrupt("return",{descriptors:r,featureLayout:u,indices:l});case 8:case"end":return h.stop()}},t)}));return function(n){return e.apply(this,arguments)}}(),B2={pointFill:D2,line:F2,polygonFill:N2};$({},B2);function di(e,t){return e??t}var U2=Wa;function Wa(e,t){var n=e&&e.type,r;if(n==="FeatureCollection")for(r=0;r<e.features.length;r++)Wa(e.features[r],t);else if(n==="GeometryCollection")for(r=0;r<e.geometries.length;r++)Wa(e.geometries[r],t);else if(n==="Feature")Wa(e.geometry,t);else if(n==="Polygon")_c(e.coordinates,t);else if(n==="MultiPolygon")for(r=0;r<e.coordinates.length;r++)_c(e.coordinates[r],t);return e}function _c(e,t){if(e.length!==0){xc(e[0],t);for(var n=1;n<e.length;n++)xc(e[n],!t)}}function xc(e,t){for(var n=0,r=0,i=0,a=e.length,o=a-1;i<a;o=i++){var u=(e[i][0]-e[o][0])*(e[o][1]+e[i][1]),s=n+u;r+=Math.abs(n)>=Math.abs(u)?n-s+u:u-s+n,n=s}n+r>=0!=!!t&&e.reverse()}const z2=Sn(U2);function $2(e,t){return e.map(function(n){return n[t]*1})}function ig(e){return Array.isArray(e)?e.length===0||typeof e[0]=="number":!1}function ss(e){var t=Object.isFrozen(e)?nt.cloneDeep(e):e;return z2(t,!0),t}function ag(e,t){var n=t.x,r=t.y,i=t.x1,a=t.y1,o=t.coordinates,u=t.geometry,s=[];if(!Array.isArray(e))return{dataArray:[]};if(u)return e.filter(function(m){return m[u]&&m[u].type&&m[u].coordinates&&m[u].coordinates.length>0}).forEach(function(m,_){var y=ss(m[u]);k0(y,function(x){var b=M0(x),M=$($({},m),{},{_id:_,coordinates:b});s.push(M)})}),{dataArray:s};for(var l=0;l<e.length;l++){var c=e[l],f=[];if(o){var h="Polygon";Array.isArray(o[0])||(h="Point"),Array.isArray(o[0])&&!Array.isArray(o[0][0])&&(h="LineString");var d=ss({type:h,coordinates:c[o]});f=d.coordinates}else if(n&&r&&i&&a){var v=[parseFloat(c[n]),parseFloat(c[r])],p=[parseFloat(c[i]),parseFloat(c[a])];f=[v,p]}else n&&r&&(f=[parseFloat(c[n]),parseFloat(c[r])]);var g=$($({},c),{},{_id:l,coordinates:f});s.push(g)}return{dataArray:s}}function V2(e,t){var n=V1(e);return ag(n,t)}function j2(e){for(var t=e.toString(),n=5381,r=t.length;r;)n=n*33^t.charCodeAt(--r);return n>>>0}function H2(e,t){return t===void 0?null:typeof(e.properties[t]*1)=="number"?e.properties[t]*1:e.properties&&e.properties[t]?j2(e.properties[t]+"")%1000019:null}function G2(e,t){var n=[],r={};return e.features?(e.features=e.features.filter(function(i){var a=i.geometry;return i!=null&&a&&a.type&&a.coordinates&&a.coordinates.length>0}),e=ss(e),e.features.length===0?{dataArray:[],featureKeys:r}:(k0(e,function(i,a){var o=H2(i,t==null?void 0:t.featureId);o===null&&(o=a);var u=o,s=M0(i),l=$($({},i.properties),{},{coordinates:s,_id:u});n.push(l)}),{dataArray:n,featureKeys:r})):(e.features=[],{dataArray:[]})}function ls(e,t,n,r){for(var i=r,a=n-t>>1,o=n-t,u,s=e[t],l=e[t+1],c=e[n],f=e[n+1],h=t+3;h<n;h+=3){var d=W2(e[h],e[h+1],s,l,c,f);if(d>i)u=h,i=d;else if(d===i){var v=Math.abs(h-a);v<o&&(u=h,o=v)}}i>r&&(u-t>3&&ls(e,t,u,r),e[u+2]=i,n-u>3&&ls(e,u,n,r))}function W2(e,t,n,r,i,a){var o=i-n,u=a-r;if(o!==0||u!==0){var s=((e-n)*o+(t-r)*u)/(o*o+u*u);s>1?(n=i,r=a):s>0&&(n+=o*s,r+=u*s)}return o=e-n,u=t-r,o*o+u*u}function Zi(e,t,n,r){var i={id:typeof e>"u"?null:e,type:t,geometry:n,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return Y2(i),i}function Y2(e){var t=e.geometry,n=e.type;if(n==="Point"||n==="MultiPoint"||n==="LineString")mu(e,t);else if(n==="Polygon"||n==="MultiLineString")for(var r=0;r<t.length;r++)mu(e,t[r]);else if(n==="MultiPolygon")for(r=0;r<t.length;r++)for(var i=0;i<t[r].length;i++)mu(e,t[r][i])}function mu(e,t){for(var n=0;n<t.length;n+=3)e.minX=Math.min(e.minX,t[n]),e.minY=Math.min(e.minY,t[n+1]),e.maxX=Math.max(e.maxX,t[n]),e.maxY=Math.max(e.maxY,t[n+1])}function X2(e,t){var n=[];if(e.type==="FeatureCollection")for(var r=0;r<e.features.length;r++)Ya(n,e.features[r],t,r);else e.type==="Feature"?Ya(n,e,t):Ya(n,{geometry:e},t);return n}function Ya(e,t,n,r){if(t.geometry){var i=t.geometry.coordinates,a=t.geometry.type,o=Math.pow(n.tolerance/((1<<n.maxZoom)*n.extent),2),u=[],s=t.id;if(n.promoteId?s=t.properties[n.promoteId]:n.generateId&&(s=r||0),a==="Point")bc(i,u);else if(a==="MultiPoint")for(var l=0;l<i.length;l++)bc(i[l],u);else if(a==="LineString")cs(i,u,o,!1);else if(a==="MultiLineString")if(n.lineMetrics){for(l=0;l<i.length;l++)u=[],cs(i[l],u,o,!1),e.push(Zi(s,"LineString",u,t.properties));return}else yu(i,u,o,!1);else if(a==="Polygon")yu(i,u,o,!0);else if(a==="MultiPolygon")for(l=0;l<i.length;l++){var c=[];yu(i[l],c,o,!0),u.push(c)}else if(a==="GeometryCollection"){for(l=0;l<t.geometry.geometries.length;l++)Ya(e,{id:s,geometry:t.geometry.geometries[l],properties:t.properties},n,r);return}else throw new Error("Input data is not a valid GeoJSON object.");e.push(Zi(s,a,u,t.properties))}}function bc(e,t){t.push(og(e[0])),t.push(ug(e[1])),t.push(0)}function cs(e,t,n,r){for(var i,a,o=0,u=0;u<e.length;u++){var s=og(e[u][0]),l=ug(e[u][1]);t.push(s),t.push(l),t.push(0),u>0&&(r?o+=(i*l-s*a)/2:o+=Math.sqrt(Math.pow(s-i,2)+Math.pow(l-a,2))),i=s,a=l}var c=t.length-3;t[2]=1,ls(t,0,c,n),t[c+2]=1,t.size=Math.abs(o),t.start=0,t.end=t.size}function yu(e,t,n,r){for(var i=0;i<e.length;i++){var a=[];cs(e[i],a,n,r),t.push(a)}}function og(e){return e/360+.5}function ug(e){var t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function kn(e,t,n,r,i,a,o,u){if(n/=t,r/=t,a>=n&&o<r)return e;if(o<n||a>=r)return null;for(var s=[],l=0;l<e.length;l++){var c=e[l],f=c.geometry,h=c.type,d=i===0?c.minX:c.minY,v=i===0?c.maxX:c.maxY;if(d>=n&&v<r){s.push(c);continue}else if(v<n||d>=r)continue;var p=[];if(h==="Point"||h==="MultiPoint")Z2(f,p,n,r,i);else if(h==="LineString")sg(f,p,n,r,i,!1,u.lineMetrics);else if(h==="MultiLineString")_u(f,p,n,r,i,!1);else if(h==="Polygon")_u(f,p,n,r,i,!0);else if(h==="MultiPolygon")for(var g=0;g<f.length;g++){var m=[];_u(f[g],m,n,r,i,!0),m.length&&p.push(m)}if(p.length){if(u.lineMetrics&&h==="LineString"){for(g=0;g<p.length;g++)s.push(Zi(c.id,h,p[g],c.tags));continue}(h==="LineString"||h==="MultiLineString")&&(p.length===1?(h="LineString",p=p[0]):h="MultiLineString"),(h==="Point"||h==="MultiPoint")&&(h=p.length===3?"Point":"MultiPoint"),s.push(Zi(c.id,h,p,c.tags))}}return s.length?s:null}function Z2(e,t,n,r,i){for(var a=0;a<e.length;a+=3){var o=e[a+i];o>=n&&o<=r&&(t.push(e[a]),t.push(e[a+1]),t.push(e[a+2]))}}function sg(e,t,n,r,i,a,o){for(var u=Sc(e),s=i===0?q2:Q2,l=e.start,c,f,h=0;h<e.length-3;h+=3){var d=e[h],v=e[h+1],p=e[h+2],g=e[h+3],m=e[h+4],_=i===0?d:v,y=i===0?g:m,x=!1;o&&(c=Math.sqrt(Math.pow(d-g,2)+Math.pow(v-m,2))),_<n?y>n&&(f=s(u,d,v,g,m,n),o&&(u.start=l+c*f)):_>r?y<r&&(f=s(u,d,v,g,m,r),o&&(u.start=l+c*f)):xu(u,d,v,p),y<n&&_>=n&&(f=s(u,d,v,g,m,n),x=!0),y>r&&_<=r&&(f=s(u,d,v,g,m,r),x=!0),!a&&x&&(o&&(u.end=l+c*f),t.push(u),u=Sc(e)),o&&(l+=c)}var b=e.length-3;d=e[b],v=e[b+1],p=e[b+2],_=i===0?d:v,_>=n&&_<=r&&xu(u,d,v,p),b=u.length-3,a&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&xu(u,u[0],u[1],u[2]),u.length&&t.push(u)}function Sc(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function _u(e,t,n,r,i,a){for(var o=0;o<e.length;o++)sg(e[o],t,n,r,i,a,!1)}function xu(e,t,n,r){e.push(t),e.push(n),e.push(r)}function q2(e,t,n,r,i,a){var o=(a-t)/(r-t);return e.push(a),e.push(n+(i-n)*o),e.push(1),o}function Q2(e,t,n,r,i,a){var o=(a-n)/(i-n);return e.push(t+(r-t)*o),e.push(a),e.push(1),o}function J2(e,t){var n=t.buffer/t.extent,r=e,i=kn(e,1,-1-n,n,0,-1,2,t),a=kn(e,1,1-n,2+n,0,-1,2,t);return(i||a)&&(r=kn(e,1,-n,1+n,0,-1,2,t)||[],i&&(r=Ac(i,1).concat(r)),a&&(r=r.concat(Ac(a,-1)))),r}function Ac(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a=i.type,o;if(a==="Point"||a==="MultiPoint"||a==="LineString")o=bu(i.geometry,t);else if(a==="MultiLineString"||a==="Polygon"){o=[];for(var u=0;u<i.geometry.length;u++)o.push(bu(i.geometry[u],t))}else if(a==="MultiPolygon")for(o=[],u=0;u<i.geometry.length;u++){for(var s=[],l=0;l<i.geometry[u].length;l++)s.push(bu(i.geometry[u][l],t));o.push(s)}n.push(Zi(i.id,a,o,i.tags))}return n}function bu(e,t){var n=[];n.size=e.size,e.start!==void 0&&(n.start=e.start,n.end=e.end);for(var r=0;r<e.length;r+=3)n.push(e[r]+t,e[r+1],e[r+2]);return n}function Ec(e,t){if(e.transformed)return e;var n=1<<e.z,r=e.x,i=e.y,a,o,u;for(a=0;a<e.features.length;a++){var s=e.features[a],l=s.geometry,c=s.type;if(s.geometry=[],c===1)for(o=0;o<l.length;o+=2)s.geometry.push(Cc(l[o],l[o+1],t,n,r,i));else for(o=0;o<l.length;o++){var f=[];for(u=0;u<l[o].length;u+=2)f.push(Cc(l[o][u],l[o][u+1],t,n,r,i));s.geometry.push(f)}}return e.transformed=!0,e}function Cc(e,t,n,r,i,a){return[Math.round(n*(e*r-i)),Math.round(n*(t*r-a))]}function K2(e,t,n,r,i){for(var a=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),o={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},u=0;u<e.length;u++){o.numFeatures++,ex(o,e[u],a,i);var s=e[u].minX,l=e[u].minY,c=e[u].maxX,f=e[u].maxY;s<o.minX&&(o.minX=s),l<o.minY&&(o.minY=l),c>o.maxX&&(o.maxX=c),f>o.maxY&&(o.maxY=f)}return o}function ex(e,t,n,r){var i=t.geometry,a=t.type,o=[];if(a==="Point"||a==="MultiPoint")for(var u=0;u<i.length;u+=3)o.push(i[u]),o.push(i[u+1]),e.numPoints++,e.numSimplified++;else if(a==="LineString")Su(o,i,e,n,!1,!1);else if(a==="MultiLineString"||a==="Polygon")for(u=0;u<i.length;u++)Su(o,i[u],e,n,a==="Polygon",u===0);else if(a==="MultiPolygon")for(var s=0;s<i.length;s++){var l=i[s];for(u=0;u<l.length;u++)Su(o,l[u],e,n,!0,u===0)}if(o.length){var c=t.tags||null;if(a==="LineString"&&r.lineMetrics){c={};for(var f in t.tags)c[f]=t.tags[f];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size}var h={geometry:o,type:a==="Polygon"||a==="MultiPolygon"?3:a==="LineString"||a==="MultiLineString"?2:1,tags:c};t.id!==null&&(h.id=t.id),e.features.push(h)}}function Su(e,t,n,r,i,a){var o=r*r;if(r>0&&t.size<(i?o:r)){n.numPoints+=t.length/3;return}for(var u=[],s=0;s<t.length;s+=3)(r===0||t[s+2]>o)&&(n.numSimplified++,u.push(t[s]),u.push(t[s+1])),n.numPoints++;i&&tx(u,a),e.push(u)}function tx(e,t){for(var n=0,r=0,i=e.length,a=i-2;r<i;a=r,r+=2)n+=(e[r]-e[a])*(e[r+1]+e[a+1]);if(n>0===t)for(r=0,i=e.length;r<i/2;r+=2){var o=e[r],u=e[r+1];e[r]=e[i-2-r],e[r+1]=e[i-1-r],e[i-2-r]=o,e[i-1-r]=u}}function nx(e,t){return new Oo(e,t)}function Oo(e,t){t=this.options=rx(Object.create(this.options),t);var n=t.debug;if(t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var r=X2(e,t);this.tiles={},this.tileCoords=[],n&&(this.stats={},this.total=0),r=J2(r,t),r.length&&this.splitTile(r,0,0,0),n&&r.length}Oo.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0};Oo.prototype.splitTile=function(e,t,n,r,i,a,o){for(var u=[e,t,n,r],s=this.options,l=s.debug;u.length;){r=u.pop(),n=u.pop(),t=u.pop(),e=u.pop();var c=1<<t,f=fs(t,n,r),h=this.tiles[f];if(!h&&(l>1,h=this.tiles[f]=K2(e,t,n,r,s),this.tileCoords.push({z:t,x:n,y:r}),l)){l>1;var d="z"+t;this.stats[d]=(this.stats[d]||0)+1,this.total++}if(h.source=e,i){if(t===s.maxZoom||t===i)continue;var v=1<<i-t;if(n!==Math.floor(a/v)||r!==Math.floor(o/v))continue}else if(t===s.indexMaxZoom||h.numPoints<=s.indexMaxPoints)continue;if(h.source=null,e.length!==0){l>1;var p=.5*s.buffer/s.extent,g=.5-p,m=.5+p,_=1+p,y,x,b,M,C,L;y=x=b=M=null,C=kn(e,c,n-p,n+m,0,h.minX,h.maxX,s),L=kn(e,c,n+g,n+_,0,h.minX,h.maxX,s),e=null,C&&(y=kn(C,c,r-p,r+m,1,h.minY,h.maxY,s),x=kn(C,c,r+g,r+_,1,h.minY,h.maxY,s),C=null),L&&(b=kn(L,c,r-p,r+m,1,h.minY,h.maxY,s),M=kn(L,c,r+g,r+_,1,h.minY,h.maxY,s),L=null),l>1,u.push(y||[],t+1,n*2,r*2),u.push(x||[],t+1,n*2,r*2+1),u.push(b||[],t+1,n*2+1,r*2),u.push(M||[],t+1,n*2+1,r*2+1)}}};Oo.prototype.getTile=function(e,t,n){var r=this.options,i=r.extent,a=r.debug;if(e<0||e>24)return null;var o=1<<e;t=(t%o+o)%o;var u=fs(e,t,n);if(this.tiles[u])return Ec(this.tiles[u],i);a>1;for(var s=e,l=t,c=n,f;!f&&s>0;)s--,l=Math.floor(l/2),c=Math.floor(c/2),f=this.tiles[fs(s,l,c)];return!f||!f.source?null:(a>1,a>1,this.splitTile(f.source,s,l,c,e,t,n),a>1,this.tiles[u]?Ec(this.tiles[u],i):null)};function fs(e,t,n){return((1<<e)*n+t)*32+e}function rx(e,t){for(var n in t)e[n]=t[n];return e}var Ri=function(){function e(t,n,r,i){ce(this,e),S(this,"vectorLayerCache",{}),this.x=n,this.y=r,this.z=i,this.vectorTile=t}return le(e,[{key:"getTileData",value:function(n){if(!n||!this.vectorTile.layers[n])return[];if(this.vectorLayerCache[n])return this.vectorLayerCache[n];var r=this.vectorTile.layers[n];return r.features}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),ix={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0};function ax(e){for(var t=0,n=0,r=e.length,i=r-1,a,o;n<r;i=n++)a=e[n],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}function ox(e){var t=e.length;if(t<=1)return[e];for(var n=[],r,i,a=0;a<t;a++){var o=ax(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[e[a]]):r.push(e[a]))}return r&&n.push(r),n}var ux=["Unknown","Point","LineString","Polygon"];function sx(e,t,n,r,i){var a=i.geometry,o=i.type,u=i.tags,s=i.id,l=e*Math.pow(2,r),c=e*t,f=e*n,h=ux[o],d,v;function p(_){for(var y=0;y<_.length;y++){var x=_[y];if(x[3])break;var b=180-(x[1]+f)*360/l,M=(x[0]+c)*360/l-180,C=360/Math.PI*Math.atan(Math.exp(b*Math.PI/180))-90;_[y]=[M,C,0,1]}}switch(o){case 1:var g=[];for(d=0;d<a.length;d++)g[d]=a[d][0];a=g,p(a);break;case 2:for(d=0;d<a.length;d++)p(a[d]);break;case 3:for(a=ox(a),d=0;d<a.length;d++)for(v=0;v<a[d].length;v++)p(a[d][v]);break}a.length===1?a=a[0]:h="Multi"+h;var m={type:"Feature",geometry:{type:h,coordinates:a},properties:u,id:s,tileOrigin:[0,0],coord:""};return m}var lx=function(){var e=Q(w.mark(function t(n,r,i,a){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s){var l=r.getTile(n.z,n.x,n.y),c=l?l.features.map(function(d){return sx(a,i.x,i.y,i.z,d)}):[],f={layers:{defaultLayer:{features:c}}},h=new Ri(f,n.x,n.y,n.z);s(h)}));case 1:case"end":return u.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}();function cx(e){var t={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!0,debug:0};return e===void 0||typeof e.geojsonvtOptions>"u"?t:$($({},t),e.geojsonvtOptions)}function fx(e,t){var n=cx(t),r=n.extent||4096,i=nx(e,n),a=function(s,l){return lx(l,i,s,r)},o=$($($({},ix),t),{},{getTileData:a});return{data:e,dataArray:[],tilesetOptions:o,isTile:!0}}function lg(e,t){var n=t.extent,r=n===void 0?[121.168,30.2828,121.384,30.4219]:n,i=t.requestParameters,a=i===void 0?{}:i,o=new Promise(function(s){e instanceof HTMLImageElement||I_(e)?s([e]):hx(e,a,function(l){s(l)})}),u={originData:e,images:o,_id:1,dataArray:[{_id:0,coordinates:[[r[0],r[1]],[r[2],r[3]]]}]};return u}function hx(e,t,n){var r=[];if(typeof e=="string")Ju($($({},t),{},{url:e}),function(o,u){u&&(r.push(u),n(r))});else{var i=e.length,a=0;e.forEach(function(o){Ju($($({},t),{},{url:o}),function(u,s){a++,s&&r.push(s),a===i&&n(r)})})}return lg}var dx=function(){var e=Q(w.mark(function t(n,r,i,a){var o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o={x:r.x,y:r.y,z:r.z},u=jr(n,o),l.abrupt("return",new Promise(function(c){a?a(o,function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new Ri(d,r.x,r.y,r.z);c(v)}else{var p={layers:{defaultLayer:{features:h.features}}},g=new Ri(p,r.x,r.y,r.z);c(g)}}):K1($($({},i),{},{url:u}),function(f,h){if(f||!h){var d={layers:{defaultLayer:{features:[]}}},v=new Ri(d,r.x,r.y,r.z);c(v)}else{var p=JSON.parse(h),g={layers:{defaultLayer:{features:p}}},m=new Ri(g,r.x,r.y,r.z);c(m)}})}));case 3:case"end":return l.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}();function vx(e,t){var n=function(a,o){return dx(e,o,t==null?void 0:t.requestParameters,t.getCustomData)},r=$($({},t),{},{getTileData:n});return{dataArray:[],tilesetOptions:r,isTile:!0}}var px=Hr;function Hr(e,t){this.x=e,this.y=t}Hr.prototype={clone:function(){return new Hr(this.x,this.y)},add:function(e){return this.clone()._add(e)},sub:function(e){return this.clone()._sub(e)},multByPoint:function(e){return this.clone()._multByPoint(e)},divByPoint:function(e){return this.clone()._divByPoint(e)},mult:function(e){return this.clone()._mult(e)},div:function(e){return this.clone()._div(e)},rotate:function(e){return this.clone()._rotate(e)},rotateAround:function(e,t){return this.clone()._rotateAround(e,t)},matMult:function(e){return this.clone()._matMult(e)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(e){return this.x===e.x&&this.y===e.y},dist:function(e){return Math.sqrt(this.distSqr(e))},distSqr:function(e){var t=e.x-this.x,n=e.y-this.y;return t*t+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(e){return Math.atan2(this.y-e.y,this.x-e.x)},angleWith:function(e){return this.angleWithSep(e.x,e.y)},angleWithSep:function(e,t){return Math.atan2(this.x*t-this.y*e,this.x*e+this.y*t)},_matMult:function(e){var t=e[0]*this.x+e[1]*this.y,n=e[2]*this.x+e[3]*this.y;return this.x=t,this.y=n,this},_add:function(e){return this.x+=e.x,this.y+=e.y,this},_sub:function(e){return this.x-=e.x,this.y-=e.y,this},_mult:function(e){return this.x*=e,this.y*=e,this},_div:function(e){return this.x/=e,this.y/=e,this},_multByPoint:function(e){return this.x*=e.x,this.y*=e.y,this},_divByPoint:function(e){return this.x/=e.x,this.y/=e.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var e=this.y;return this.y=this.x,this.x=-e,this},_rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=t*this.x-n*this.y,i=n*this.x+t*this.y;return this.x=r,this.y=i,this},_rotateAround:function(e,t){var n=Math.cos(e),r=Math.sin(e),i=t.x+n*(this.x-t.x)-r*(this.y-t.y),a=t.y+r*(this.x-t.x)+n*(this.y-t.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};Hr.convert=function(e){return e instanceof Hr?e:Array.isArray(e)?new Hr(e[0],e[1]):e};var gx=px,mx=Qr;function Qr(e,t,n,r,i){this.properties={},this.extent=n,this.type=0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=i,e.readFields(yx,this,t)}function yx(e,t,n){e==1?t.id=n.readVarint():e==2?_x(n,t):e==3?t.type=n.readVarint():e==4&&(t._geometry=n.pos)}function _x(e,t){for(var n=e.readVarint()+e.pos;e.pos<n;){var r=t._keys[e.readVarint()],i=t._values[e.readVarint()];t.properties[r]=i}}Qr.types=["Unknown","Point","LineString","Polygon"];Qr.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=[],u;e.pos<t;){if(r<=0){var s=e.readVarint();n=s&7,r=s>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),n===1&&(u&&o.push(u),u=[]),u.push(new gx(i,a));else if(n===7)u&&u.push(u[0].clone());else throw new Error("unknown command "+n)}return u&&o.push(u),o};Qr.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=1/0,u=-1/0,s=1/0,l=-1/0;e.pos<t;){if(r<=0){var c=e.readVarint();n=c&7,r=c>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),i<o&&(o=i),i>u&&(u=i),a<s&&(s=a),a>l&&(l=a);else if(n!==7)throw new Error("unknown command "+n)}return[o,s,u,l]};Qr.prototype.toGeoJSON=function(e,t,n){var r=this.extent*Math.pow(2,n),i=this.extent*e,a=this.extent*t,o=this.loadGeometry(),u=Qr.types[this.type],s,l;function c(d){for(var v=0;v<d.length;v++){var p=d[v],g=180-(p.y+a)*360/r;d[v]=[(p.x+i)*360/r-180,360/Math.PI*Math.atan(Math.exp(g*Math.PI/180))-90]}}switch(this.type){case 1:var f=[];for(s=0;s<o.length;s++)f[s]=o[s][0];o=f,c(o);break;case 2:for(s=0;s<o.length;s++)c(o[s]);break;case 3:for(o=xx(o),s=0;s<o.length;s++)for(l=0;l<o[s].length;l++)c(o[s][l]);break}o.length===1?o=o[0]:u="Multi"+u;var h={type:"Feature",geometry:{type:u,coordinates:o},properties:this.properties};return"id"in this&&(h.id=this.id),h};function xx(e){var t=e.length;if(t<=1)return[e];for(var n=[],r,i,a=0;a<t;a++){var o=bx(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[e[a]]):r.push(e[a]))}return r&&n.push(r),n}function bx(e){for(var t=0,n=0,r=e.length,i=r-1,a,o;n<r;i=n++)a=e[n],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}var Sx=mx,Ax=cg;function cg(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(Ex,this,t),this.length=this._features.length}function Ex(e,t,n){e===15?t.version=n.readVarint():e===1?t.name=n.readString():e===5?t.extent=n.readVarint():e===2?t._features.push(n.pos):e===3?t._keys.push(n.readString()):e===4&&t._values.push(Cx(n))}function Cx(e){for(var t=null,n=e.readVarint()+e.pos;e.pos<n;){var r=e.readVarint()>>3;t=r===1?e.readString():r===2?e.readFloat():r===3?e.readDouble():r===4?e.readVarint64():r===5?e.readVarint():r===6?e.readSVarint():r===7?e.readBoolean():null}return t}cg.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new Sx(this._pbf,t,this.extent,this._keys,this._values)};var Tx=Ax,Mx=kx;function kx(e,t){this.layers=e.readFields(Ix,{},t)}function Ix(e,t,n){if(e===3){var r=new Tx(n,n.readVarint()+n.pos);r.length&&(t[r.name]=r)}}var Lx=Mx,vl={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */vl.read=function(e,t,n,r,i){var a,o,u=i*8-r-1,s=(1<<u)-1,l=s>>1,c=-7,f=n?i-1:0,h=n?-1:1,d=e[t+f];for(f+=h,a=d&(1<<-c)-1,d>>=-c,c+=u;c>0;a=a*256+e[t+f],f+=h,c-=8);for(o=a&(1<<-c)-1,a>>=-c,c+=r;c>0;o=o*256+e[t+f],f+=h,c-=8);if(a===0)a=1-l;else{if(a===s)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,r),a=a-l}return(d?-1:1)*o*Math.pow(2,a-r)};vl.write=function(e,t,n,r,i,a){var o,u,s,l=a*8-i-1,c=(1<<l)-1,f=c>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:a-1,v=r?1:-1,p=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+f>=1?t+=h/s:t+=h*Math.pow(2,1-f),t*s>=2&&(o++,s/=2),o+f>=c?(u=0,o=c):o+f>=1?(u=(t*s-1)*Math.pow(2,i),o=o+f):(u=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=u&255,d+=v,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;e[n+d]=o&255,d+=v,o/=256,l-=8);e[n+d-v]|=p*128};var Rx=Ke,Ra=vl;function Ke(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}Ke.Varint=0;Ke.Fixed64=1;Ke.Bytes=2;Ke.Fixed32=5;var hs=65536*65536,wc=1/hs,Px=12,fg=typeof TextDecoder>"u"?null:new TextDecoder("utf8");Ke.prototype={destroy:function(){this.buf=null},readFields:function(e,t,n){for(n=n||this.length;this.pos<n;){var r=this.readVarint(),i=r>>3,a=this.pos;this.type=r&7,e(i,t,this),this.pos===a&&this.skip(r)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=Pa(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=Mc(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=Pa(this.buf,this.pos)+Pa(this.buf,this.pos+4)*hs;return this.pos+=8,e},readSFixed64:function(){var e=Pa(this.buf,this.pos)+Mc(this.buf,this.pos+4)*hs;return this.pos+=8,e},readFloat:function(){var e=Ra.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=Ra.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t=this.buf,n,r;return r=t[this.pos++],n=r&127,r<128||(r=t[this.pos++],n|=(r&127)<<7,r<128)||(r=t[this.pos++],n|=(r&127)<<14,r<128)||(r=t[this.pos++],n|=(r&127)<<21,r<128)?n:(r=t[this.pos],n|=(r&15)<<28,Ox(n,e,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2===1?(e+1)/-2:e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=Px&&fg?Xx(this.buf,t,e):Yx(this.buf,t,e)},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){if(this.type!==Ke.Bytes)return e.push(this.readVarint(t));var n=wn(this);for(e=e||[];this.pos<n;)e.push(this.readVarint(t));return e},readPackedSVarint:function(e){if(this.type!==Ke.Bytes)return e.push(this.readSVarint());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readSVarint());return e},readPackedBoolean:function(e){if(this.type!==Ke.Bytes)return e.push(this.readBoolean());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readBoolean());return e},readPackedFloat:function(e){if(this.type!==Ke.Bytes)return e.push(this.readFloat());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readFloat());return e},readPackedDouble:function(e){if(this.type!==Ke.Bytes)return e.push(this.readDouble());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readDouble());return e},readPackedFixed32:function(e){if(this.type!==Ke.Bytes)return e.push(this.readFixed32());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readFixed32());return e},readPackedSFixed32:function(e){if(this.type!==Ke.Bytes)return e.push(this.readSFixed32());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed32());return e},readPackedFixed64:function(e){if(this.type!==Ke.Bytes)return e.push(this.readFixed64());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readFixed64());return e},readPackedSFixed64:function(e){if(this.type!==Ke.Bytes)return e.push(this.readSFixed64());var t=wn(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed64());return e},skip:function(e){var t=e&7;if(t===Ke.Varint)for(;this.buf[this.pos++]>127;);else if(t===Ke.Bytes)this.pos=this.readVarint()+this.pos;else if(t===Ke.Fixed32)this.pos+=4;else if(t===Ke.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var n=new Uint8Array(t);n.set(this.buf),this.buf=n,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),Ir(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),Ir(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),Ir(this.buf,e&-1,this.pos),Ir(this.buf,Math.floor(e*wc),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),Ir(this.buf,e&-1,this.pos),Ir(this.buf,Math.floor(e*wc),this.pos+4),this.pos+=8},writeVarint:function(e){if(e=+e||0,e>268435455||e<0){Fx(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))},writeSVarint:function(e){this.writeVarint(e<0?-e*2-1:e*2)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(e.length*4),this.pos++;var t=this.pos;this.pos=Zx(this.buf,e,this.pos);var n=this.pos-t;n>=128&&Tc(t,n,this),this.pos=t-1,this.writeVarint(n),this.pos+=n},writeFloat:function(e){this.realloc(4),Ra.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),Ra.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=e.length;this.writeVarint(t),this.realloc(t);for(var n=0;n<t;n++)this.buf[this.pos++]=e[n]},writeRawMessage:function(e,t){this.pos++;var n=this.pos;e(t,this);var r=this.pos-n;r>=128&&Tc(n,r,this),this.pos=n-1,this.writeVarint(r),this.pos+=r},writeMessage:function(e,t,n){this.writeTag(e,Ke.Bytes),this.writeRawMessage(t,n)},writePackedVarint:function(e,t){t.length&&this.writeMessage(e,Bx,t)},writePackedSVarint:function(e,t){t.length&&this.writeMessage(e,Ux,t)},writePackedBoolean:function(e,t){t.length&&this.writeMessage(e,Vx,t)},writePackedFloat:function(e,t){t.length&&this.writeMessage(e,zx,t)},writePackedDouble:function(e,t){t.length&&this.writeMessage(e,$x,t)},writePackedFixed32:function(e,t){t.length&&this.writeMessage(e,jx,t)},writePackedSFixed32:function(e,t){t.length&&this.writeMessage(e,Hx,t)},writePackedFixed64:function(e,t){t.length&&this.writeMessage(e,Gx,t)},writePackedSFixed64:function(e,t){t.length&&this.writeMessage(e,Wx,t)},writeBytesField:function(e,t){this.writeTag(e,Ke.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,Ke.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,Ke.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,Ke.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,Ke.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,Ke.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,Ke.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,Ke.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,Ke.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,Ke.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}};function Ox(e,t,n){var r=n.buf,i,a;if(a=r[n.pos++],i=(a&112)>>4,a<128||(a=r[n.pos++],i|=(a&127)<<3,a<128)||(a=r[n.pos++],i|=(a&127)<<10,a<128)||(a=r[n.pos++],i|=(a&127)<<17,a<128)||(a=r[n.pos++],i|=(a&127)<<24,a<128)||(a=r[n.pos++],i|=(a&1)<<31,a<128))return kr(e,i,t);throw new Error("Expected varint not more than 10 bytes")}function wn(e){return e.type===Ke.Bytes?e.readVarint()+e.pos:e.pos+1}function kr(e,t,n){return n?t*4294967296+(e>>>0):(t>>>0)*4294967296+(e>>>0)}function Fx(e,t){var n,r;if(e>=0?(n=e%4294967296|0,r=e/4294967296|0):(n=~(-e%4294967296),r=~(-e/4294967296),n^4294967295?n=n+1|0:(n=0,r=r+1|0)),e>=18446744073709552e3||e<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");t.realloc(10),Dx(n,r,t),Nx(r,t)}function Dx(e,t,n){n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos]=e&127}function Nx(e,t){var n=(e&7)<<4;t.buf[t.pos++]|=n|((e>>>=3)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127)))))}function Tc(e,t,n){var r=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.floor(Math.log(t)/(Math.LN2*7));n.realloc(r);for(var i=n.pos-1;i>=e;i--)n.buf[i+r]=n.buf[i]}function Bx(e,t){for(var n=0;n<e.length;n++)t.writeVarint(e[n])}function Ux(e,t){for(var n=0;n<e.length;n++)t.writeSVarint(e[n])}function zx(e,t){for(var n=0;n<e.length;n++)t.writeFloat(e[n])}function $x(e,t){for(var n=0;n<e.length;n++)t.writeDouble(e[n])}function Vx(e,t){for(var n=0;n<e.length;n++)t.writeBoolean(e[n])}function jx(e,t){for(var n=0;n<e.length;n++)t.writeFixed32(e[n])}function Hx(e,t){for(var n=0;n<e.length;n++)t.writeSFixed32(e[n])}function Gx(e,t){for(var n=0;n<e.length;n++)t.writeFixed64(e[n])}function Wx(e,t){for(var n=0;n<e.length;n++)t.writeSFixed64(e[n])}function Pa(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+e[t+3]*16777216}function Ir(e,t,n){e[n]=t,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24}function Mc(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}function Yx(e,t,n){for(var r="",i=t;i<n;){var a=e[i],o=null,u=a>239?4:a>223?3:a>191?2:1;if(i+u>n)break;var s,l,c;u===1?a<128&&(o=a):u===2?(s=e[i+1],(s&192)===128&&(o=(a&31)<<6|s&63,o<=127&&(o=null))):u===3?(s=e[i+1],l=e[i+2],(s&192)===128&&(l&192)===128&&(o=(a&15)<<12|(s&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):u===4&&(s=e[i+1],l=e[i+2],c=e[i+3],(s&192)===128&&(l&192)===128&&(c&192)===128&&(o=(a&15)<<18|(s&63)<<12|(l&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,u=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=u}return r}function Xx(e,t,n){return fg.decode(e.subarray(t,n))}function Zx(e,t,n){for(var r=0,i,a;r<t.length;r++){if(i=t.charCodeAt(r),i>55295&&i<57344)if(a)if(i<56320){e[n++]=239,e[n++]=191,e[n++]=189,a=i;continue}else i=a-55296<<10|i-56320|65536,a=null;else{i>56319||r+1===t.length?(e[n++]=239,e[n++]=191,e[n++]=189):a=i;continue}else a&&(e[n++]=239,e[n++]=191,e[n++]=189,a=null);i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:(i<65536?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=i&63|128)}return n}const qx=Sn(Rx);var kc=function(){function e(t,n,r,i){ce(this,e),S(this,"vectorLayerCache",{}),this.x=n,this.y=r,this.z=i,this.vectorTile=new Lx(new qx(t))}return le(e,[{key:"getTileData",value:function(n){if(!n||!this.vectorTile.layers[n])return[];if(this.vectorLayerCache[n])return this.vectorLayerCache[n];var r=this.vectorTile.layers[n];if(Array.isArray(r.features))return this.vectorLayerCache[n]=r.features,r.features;for(var i=[],a=0;a<r.length;a++){var o=r.feature(a),u=o.toGeoJSON(this.x,this.y,this.z);i.push($($({},u),{},{properties:$({id:u.id},u.properties)}))}return this.vectorLayerCache[n]=i,i}},{key:"getFeatureById",value:function(){throw new Error("Method not implemented.")}}]),e}(),Qx={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0},Jx=function(){var e=Q(w.mark(function t(n,r,i,a,o){var u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=jr(n,r),l.abrupt("return",new Promise(function(c){if(o)o({x:i.x,y:i.y,z:i.z},function(h,d){if(h||!d)c(void 0);else{var v=new kc(d,i.x,i.y,i.z);c(v)}});else{var f=Ks($($({},a),{},{url:u}),function(h,d){if(h||!d)c(void 0);else{var v=new kc(d,i.x,i.y,i.z);c(v)}});i.xhrCancel=function(){return f.cancel()}}}));case 2:case"end":return l.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}();function Kx(e,t){var n=Array.isArray(e)?e[0]:e,r=function(o,u){return Jx(n,o,u,t==null?void 0:t.requestParameters,t==null?void 0:t.getCustomData)},i=$($($({},Qx),t),{},{getTileData:r});return{data:n,dataArray:[],tilesetOptions:i,isTile:!0}}function eb(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n;case"%":return t%n;case"^":return Math.pow(t,n);case"abs":return Math.abs(t);case"floor":return Math.floor(t);case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"sin":return Math.sin(t);case"cos":return Math.cos(t);case"atan":return n===-1?Math.atan(t):Math.atan2(t,n);case"min":return Math.min(t,n);case"max":return Math.max(t,n);case"log10":return Math.log(t);case"log2":return Math.log2(t);default:return 0}}function zi(e,t){for(var n=t[0],r=n.width,i=n.height,a=t.map(function(d){return d.rasterData}),o=r*i,u=[],s=JSON.stringify(e),l=0;l<o;l++){var c=JSON.parse(s),f=hg(c,a,l);if(typeof f=="number")u.push(f);else{var h=ds(c);u.push(h)}}return u}function hg(e,t,n){if(e.length===2&&e[0]==="band"&&typeof e[1]=="number")try{return t[e[1]][n]}catch{return 0}e.map(function(r,i){if(Array.isArray(r)&&r.length>0)switch(r[0]){case"band":try{e[i]=t[r[1]][n]}catch{e[i]=0}break;default:hg(r,t,n)}})}function tb(e){var t=Fe(e,3),n=t[0],r=t[1],i=r===void 0?-1:r,a=t[2],o=a===void 0?-1:a;if(n===void 0)return["+",0,0];var u=n.replace(/\s+/g,"");return[u,i,o]}function ds(e){var t=tb(e),n=t[0],r=t[1],i=t[2];return Array.isArray(r)&&(r=ds(e[1])),Array.isArray(i)&&(i=ds(e[2])),eb(n,r,i)}var nb={nd:{type:"operation",expression:["/",["-",["band",1],["band",0]],["+",["band",1],["band",0]]]},rgb:{type:"function",method:rb}};function rb(e,t){for(var n=e[0].rasterData,r=e[1].rasterData,i=e[2].rasterData,a=[],o=(t==null?void 0:t.countCut)||[2,98],u=Fe(o,2),s=u[0],l=u[1],c=(t==null?void 0:t.RMinMax)||Gr(n,s,l),f=(t==null?void 0:t.GMinMax)||Gr(r,s,l),h=(t==null?void 0:t.BMinMax)||Gr(i,s,l),d=0;d<n.length;d++)a.push(Math.max(0,n[d]-c[0])),a.push(Math.max(0,r[d]-f[0])),a.push(Math.max(0,i[d]-h[0]));return{rasterData:a,rMinMax:c,gMinMax:f,bMinMax:h}}function Gr(e,t,n){var r=e.slice().sort(function(u,s){return u-s}),i=r.length,a=r[Math.ceil(i*t/100)],o=r[Math.ceil(i*n/100)];return[a,o]}function pl(e,t,n){return vs.apply(this,arguments)}function vs(){return vs=Q(w.mark(function e(t,n,r){var i,a,o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(t.length!==0){f.next=2;break}return f.abrupt("return",{rasterData:[0],width:1,heigh:1});case 2:return f.next=4,Promise.all(t.map(function(h){var d=h.data,v=h.bands,p=v===void 0?[0]:v;return n(d,p)}));case 4:i=f.sent,a=[],i.forEach(function(h){Array.isArray(h)?a.push.apply(a,re(h)):a.push(h)}),o=a[0],u=o.width,s=o.height,f.t0=In(r),f.next=f.t0==="function"?11:f.t0==="object"?13:15;break;case 11:return l=r(a),f.abrupt("break",16);case 13:return Array.isArray(r)?l={rasterData:zi(r,a)}:l=ib(r,a),f.abrupt("break",16);case 15:l={rasterData:a[0].rasterData};case 16:return f.abrupt("return",$($({},l),{},{width:u,height:s}));case 17:case"end":return f.stop()}},e)})),vs.apply(this,arguments)}function ib(e,t){var n=nb[e.type];if(n.type==="function")return n.method(t,e==null?void 0:e.options);if(n.type==="operation")return e.type==="rgb"?ab(n.expression,t):{rasterData:zi(n.expression,t)}}function ab(e,t){e.r,e.g,e.b;var n=zi(e.r||["band",0],t),r=zi(e.g||["band",0],t),i=zi(e.b||["band",0],t);return[n,r,i]}function ps(e,t,n,r){return gs.apply(this,arguments)}function gs(){return gs=Q(w.mark(function e(t,n,r,i){var a;return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,pl(t,n,r);case 2:a=u.sent,i(null,{data:a});case 4:case"end":return u.stop()}},e)})),gs.apply(this,arguments)}function ob(e,t){var n=t.extent,r=t.width,i=t.height,a=t.min,o=t.max,u=t.format,s=t.operation,l,c,f;if(u===void 0||ig(e))l=Array.from(e),c=r,f=i;else{var h=Array.isArray(e)?e:[e];l=pl(h,u,s)}var d={_id:1,dataArray:[{_id:1,data:l,width:c,height:f,min:a,max:o,coordinates:[[n[0],n[1]],[n[2],n[3]]]}]};return d}/*! *****************************************************************************
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
***************************************************************************** */var Ic;(function(e){(function(t){var n=typeof globalThis=="object"?globalThis:typeof Yr=="object"?Yr:typeof self=="object"?self:typeof this=="object"?this:u(),r=i(e);typeof n.Reflect<"u"&&(r=i(n.Reflect,r)),t(r,n),typeof n.Reflect>"u"&&(n.Reflect=e);function i(s,l){return function(c,f){Object.defineProperty(s,c,{configurable:!0,writable:!0,value:f}),l&&l(c,f)}}function a(){try{return Function("return this;")()}catch{}}function o(){try{return(0,eval)("(function() { return this; })()")}catch{}}function u(){return a()||o()}})(function(t,n){var r=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",a=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",o=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",u=typeof Object.create=="function",s={__proto__:[]}instanceof Array,l=!u&&!s,c={create:u?function(){return Oe(Object.create(null))}:s?function(){return Oe({__proto__:null})}:function(){return Oe({})},has:l?function(D,B){return r.call(D,B)}:function(D,B){return B in D},get:l?function(D,B){return r.call(D,B)?D[B]:void 0}:function(D,B){return D[B]}},f=Object.getPrototypeOf(Function),h=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:me(),d=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:xe(),v=typeof WeakMap=="function"?WeakMap:Qe(),p=i?Symbol.for("@reflect-metadata:registry"):void 0,g=fn(),m=Y(g);function _(D,B,Z,oe){if(j(Z)){if(!Ae(D))throw new TypeError;if(!Ye(B))throw new TypeError;return k(D,B)}else{if(!Ae(D))throw new TypeError;if(!te(B))throw new TypeError;if(!te(oe)&&!j(oe)&&!K(oe))throw new TypeError;return K(oe)&&(oe=void 0),Z=fe(Z),O(D,B,Z,oe)}}t("decorate",_);function y(D,B){function Z(oe,Ee){if(!te(oe))throw new TypeError;if(!j(Ee)&&!De(Ee))throw new TypeError;ye(D,B,oe,Ee)}return Z}t("metadata",y);function x(D,B,Z,oe){if(!te(Z))throw new TypeError;return j(oe)||(oe=fe(oe)),ye(D,B,Z,oe)}t("defineMetadata",x);function b(D,B,Z){if(!te(B))throw new TypeError;return j(Z)||(Z=fe(Z)),z(D,B,Z)}t("hasMetadata",b);function M(D,B,Z){if(!te(B))throw new TypeError;return j(Z)||(Z=fe(Z)),ne(D,B,Z)}t("hasOwnMetadata",M);function C(D,B,Z){if(!te(B))throw new TypeError;return j(Z)||(Z=fe(Z)),de(D,B,Z)}t("getMetadata",C);function L(D,B,Z){if(!te(B))throw new TypeError;return j(Z)||(Z=fe(Z)),pe(D,B,Z)}t("getOwnMetadata",L);function N(D,B){if(!te(D))throw new TypeError;return j(B)||(B=fe(B)),W(D,B)}t("getMetadataKeys",N);function I(D,B){if(!te(D))throw new TypeError;return j(B)||(B=fe(B)),G(D,B)}t("getOwnMetadataKeys",I);function T(D,B,Z){if(!te(B))throw new TypeError;if(j(Z)||(Z=fe(Z)),!te(B))throw new TypeError;j(Z)||(Z=fe(Z));var oe=he(B,Z,!1);return j(oe)?!1:oe.OrdinaryDeleteMetadata(D,B,Z)}t("deleteMetadata",T);function k(D,B){for(var Z=D.length-1;Z>=0;--Z){var oe=D[Z],Ee=oe(B);if(!j(Ee)&&!K(Ee)){if(!Ye(Ee))throw new TypeError;B=Ee}}return B}function O(D,B,Z,oe){for(var Ee=D.length-1;Ee>=0;--Ee){var it=D[Ee],pt=it(B,Z,oe);if(!j(pt)&&!K(pt)){if(!te(pt))throw new TypeError;oe=pt}}return oe}function z(D,B,Z){var oe=ne(D,B,Z);if(oe)return!0;var Ee=tt(B);return K(Ee)?!1:z(D,Ee,Z)}function ne(D,B,Z){var oe=he(B,Z,!1);return j(oe)?!1:He(oe.OrdinaryHasOwnMetadata(D,B,Z))}function de(D,B,Z){var oe=ne(D,B,Z);if(oe)return pe(D,B,Z);var Ee=tt(B);if(!K(Ee))return de(D,Ee,Z)}function pe(D,B,Z){var oe=he(B,Z,!1);if(!j(oe))return oe.OrdinaryGetOwnMetadata(D,B,Z)}function ye(D,B,Z,oe){var Ee=he(Z,oe,!0);Ee.OrdinaryDefineOwnMetadata(D,B,Z,oe)}function W(D,B){var Z=G(D,B),oe=tt(D);if(oe===null)return Z;var Ee=W(oe,B);if(Ee.length<=0)return Z;if(Z.length<=0)return Ee;for(var it=new d,pt=[],Ue=0,Se=Z;Ue<Se.length;Ue++){var Ie=Se[Ue],ke=it.has(Ie);ke||(it.add(Ie),pt.push(Ie))}for(var Le=0,Ve=Ee;Le<Ve.length;Le++){var Ie=Ve[Le],ke=it.has(Ie);ke||(it.add(Ie),pt.push(Ie))}return pt}function G(D,B){var Z=he(D,B,!1);return Z?Z.OrdinaryOwnMetadataKeys(D,B):[]}function J(D){if(D===null)return 1;switch(typeof D){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return D===null?1:6;default:return 6}}function j(D){return D===void 0}function K(D){return D===null}function X(D){return typeof D=="symbol"}function te(D){return typeof D=="object"?D!==null:typeof D=="function"}function _e(D,B){switch(J(D)){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D}var Z=B===3?"string":B===5?"number":"default",oe=Be(D,a);if(oe!==void 0){var Ee=oe.call(D,Z);if(te(Ee))throw new TypeError;return Ee}return ge(D,Z==="default"?"number":Z)}function ge(D,B){if(B==="string"){var Z=D.toString;if(ie(Z)){var oe=Z.call(D);if(!te(oe))return oe}var Ee=D.valueOf;if(ie(Ee)){var oe=Ee.call(D);if(!te(oe))return oe}}else{var Ee=D.valueOf;if(ie(Ee)){var oe=Ee.call(D);if(!te(oe))return oe}var it=D.toString;if(ie(it)){var oe=it.call(D);if(!te(oe))return oe}}throw new TypeError}function He(D){return!!D}function H(D){return""+D}function fe(D){var B=_e(D,3);return X(B)?B:H(B)}function Ae(D){return Array.isArray?Array.isArray(D):D instanceof Object?D instanceof Array:Object.prototype.toString.call(D)==="[object Array]"}function ie(D){return typeof D=="function"}function Ye(D){return typeof D=="function"}function De(D){switch(J(D)){case 3:return!0;case 4:return!0;default:return!1}}function qe(D,B){return D===B||D!==D&&B!==B}function Be(D,B){var Z=D[B];if(Z!=null){if(!ie(Z))throw new TypeError;return Z}}function Pe(D){var B=Be(D,o);if(!ie(B))throw new TypeError;var Z=B.call(D);if(!te(Z))throw new TypeError;return Z}function ut(D){return D.value}function vt(D){var B=D.next();return B.done?!1:B}function ht(D){var B=D.return;B&&B.call(D)}function tt(D){var B=Object.getPrototypeOf(D);if(typeof D!="function"||D===f||B!==f)return B;var Z=D.prototype,oe=Z&&Object.getPrototypeOf(Z);if(oe==null||oe===Object.prototype)return B;var Ee=oe.constructor;return typeof Ee!="function"||Ee===D?B:Ee}function Ot(){var D;!j(p)&&typeof n.Reflect<"u"&&!(p in n.Reflect)&&typeof n.Reflect.defineMetadata=="function"&&(D=ae(n.Reflect));var B,Z,oe,Ee=new v,it={registerProvider:pt,getProvider:Se,setProvider:ke};return it;function pt(Le){if(!Object.isExtensible(it))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case D===Le:break;case j(B):B=Le;break;case B===Le:break;case j(Z):Z=Le;break;case Z===Le:break;default:oe===void 0&&(oe=new d),oe.add(Le);break}}function Ue(Le,Ve){if(!j(B)){if(B.isProviderFor(Le,Ve))return B;if(!j(Z)){if(Z.isProviderFor(Le,Ve))return B;if(!j(oe))for(var at=Pe(oe);;){var lt=vt(at);if(!lt)return;var Yt=ut(lt);if(Yt.isProviderFor(Le,Ve))return ht(at),Yt}}}if(!j(D)&&D.isProviderFor(Le,Ve))return D}function Se(Le,Ve){var at=Ee.get(Le),lt;return j(at)||(lt=at.get(Ve)),j(lt)&&(lt=Ue(Le,Ve),j(lt)||(j(at)&&(at=new h,Ee.set(Le,at)),at.set(Ve,lt))),lt}function Ie(Le){if(j(Le))throw new TypeError;return B===Le||Z===Le||!j(oe)&&oe.has(Le)}function ke(Le,Ve,at){if(!Ie(at))throw new Error("Metadata provider not registered.");var lt=Se(Le,Ve);if(lt!==at){if(!j(lt))return!1;var Yt=Ee.get(Le);j(Yt)&&(Yt=new h,Ee.set(Le,Yt)),Yt.set(Ve,at)}return!0}}function fn(){var D;return!j(p)&&te(n.Reflect)&&Object.isExtensible(n.Reflect)&&(D=n.Reflect[p]),j(D)&&(D=Ot()),!j(p)&&te(n.Reflect)&&Object.isExtensible(n.Reflect)&&Object.defineProperty(n.Reflect,p,{enumerable:!1,configurable:!1,writable:!1,value:D}),D}function Y(D){var B=new v,Z={isProviderFor:function(Ie,ke){var Le=B.get(Ie);return j(Le)?!1:Le.has(ke)},OrdinaryDefineOwnMetadata:pt,OrdinaryHasOwnMetadata:Ee,OrdinaryGetOwnMetadata:it,OrdinaryOwnMetadataKeys:Ue,OrdinaryDeleteMetadata:Se};return g.registerProvider(Z),Z;function oe(Ie,ke,Le){var Ve=B.get(Ie),at=!1;if(j(Ve)){if(!Le)return;Ve=new h,B.set(Ie,Ve),at=!0}var lt=Ve.get(ke);if(j(lt)){if(!Le)return;if(lt=new h,Ve.set(ke,lt),!D.setProvider(Ie,ke,Z))throw Ve.delete(ke),at&&B.delete(Ie),new Error("Wrong provider for target.")}return lt}function Ee(Ie,ke,Le){var Ve=oe(ke,Le,!1);return j(Ve)?!1:He(Ve.has(Ie))}function it(Ie,ke,Le){var Ve=oe(ke,Le,!1);if(!j(Ve))return Ve.get(Ie)}function pt(Ie,ke,Le,Ve){var at=oe(Le,Ve,!0);at.set(Ie,ke)}function Ue(Ie,ke){var Le=[],Ve=oe(Ie,ke,!1);if(j(Ve))return Le;for(var at=Ve.keys(),lt=Pe(at),Yt=0;;){var ui=vt(lt);if(!ui)return Le.length=Yt,Le;var Yo=ut(ui);try{Le[Yt]=Yo}catch(Xo){try{ht(lt)}finally{throw Xo}}Yt++}}function Se(Ie,ke,Le){var Ve=oe(ke,Le,!1);if(j(Ve)||!Ve.delete(Ie))return!1;if(Ve.size===0){var at=B.get(ke);j(at)||(at.delete(Le),at.size===0&&B.delete(at))}return!0}}function ae(D){var B=D.defineMetadata,Z=D.hasOwnMetadata,oe=D.getOwnMetadata,Ee=D.getOwnMetadataKeys,it=D.deleteMetadata,pt=new v,Ue={isProviderFor:function(Se,Ie){var ke=pt.get(Se);return j(ke)?Ee(Se,Ie).length?(j(ke)&&(ke=new d,pt.set(Se,ke)),ke.add(Ie),!0):!1:ke.has(Ie)},OrdinaryDefineOwnMetadata:B,OrdinaryHasOwnMetadata:Z,OrdinaryGetOwnMetadata:oe,OrdinaryOwnMetadataKeys:Ee,OrdinaryDeleteMetadata:it};return Ue}function he(D,B,Z){var oe=g.getProvider(D,B);if(!j(oe))return oe;if(Z){if(g.setProvider(D,B,m))return m;throw new Error("Illegal state.")}}function me(){var D={},B=[],Z=function(){function Ue(Se,Ie,ke){this._index=0,this._keys=Se,this._values=Ie,this._selector=ke}return Ue.prototype["@@iterator"]=function(){return this},Ue.prototype[o]=function(){return this},Ue.prototype.next=function(){var Se=this._index;if(Se>=0&&Se<this._keys.length){var Ie=this._selector(this._keys[Se],this._values[Se]);return Se+1>=this._keys.length?(this._index=-1,this._keys=B,this._values=B):this._index++,{value:Ie,done:!1}}return{value:void 0,done:!0}},Ue.prototype.throw=function(Se){throw this._index>=0&&(this._index=-1,this._keys=B,this._values=B),Se},Ue.prototype.return=function(Se){return this._index>=0&&(this._index=-1,this._keys=B,this._values=B),{value:Se,done:!0}},Ue}(),oe=function(){function Ue(){this._keys=[],this._values=[],this._cacheKey=D,this._cacheIndex=-2}return Object.defineProperty(Ue.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Ue.prototype.has=function(Se){return this._find(Se,!1)>=0},Ue.prototype.get=function(Se){var Ie=this._find(Se,!1);return Ie>=0?this._values[Ie]:void 0},Ue.prototype.set=function(Se,Ie){var ke=this._find(Se,!0);return this._values[ke]=Ie,this},Ue.prototype.delete=function(Se){var Ie=this._find(Se,!1);if(Ie>=0){for(var ke=this._keys.length,Le=Ie+1;Le<ke;Le++)this._keys[Le-1]=this._keys[Le],this._values[Le-1]=this._values[Le];return this._keys.length--,this._values.length--,qe(Se,this._cacheKey)&&(this._cacheKey=D,this._cacheIndex=-2),!0}return!1},Ue.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=D,this._cacheIndex=-2},Ue.prototype.keys=function(){return new Z(this._keys,this._values,Ee)},Ue.prototype.values=function(){return new Z(this._keys,this._values,it)},Ue.prototype.entries=function(){return new Z(this._keys,this._values,pt)},Ue.prototype["@@iterator"]=function(){return this.entries()},Ue.prototype[o]=function(){return this.entries()},Ue.prototype._find=function(Se,Ie){if(!qe(this._cacheKey,Se)){this._cacheIndex=-1;for(var ke=0;ke<this._keys.length;ke++)if(qe(this._keys[ke],Se)){this._cacheIndex=ke;break}}return this._cacheIndex<0&&Ie&&(this._cacheIndex=this._keys.length,this._keys.push(Se),this._values.push(void 0)),this._cacheIndex},Ue}();return oe;function Ee(Ue,Se){return Ue}function it(Ue,Se){return Se}function pt(Ue,Se){return[Ue,Se]}}function xe(){var D=function(){function B(){this._map=new h}return Object.defineProperty(B.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),B.prototype.has=function(Z){return this._map.has(Z)},B.prototype.add=function(Z){return this._map.set(Z,Z),this},B.prototype.delete=function(Z){return this._map.delete(Z)},B.prototype.clear=function(){this._map.clear()},B.prototype.keys=function(){return this._map.keys()},B.prototype.values=function(){return this._map.keys()},B.prototype.entries=function(){return this._map.entries()},B.prototype["@@iterator"]=function(){return this.keys()},B.prototype[o]=function(){return this.keys()},B}();return D}function Qe(){var D=16,B=c.create(),Z=oe();return function(){function Se(){this._key=oe()}return Se.prototype.has=function(Ie){var ke=Ee(Ie,!1);return ke!==void 0?c.has(ke,this._key):!1},Se.prototype.get=function(Ie){var ke=Ee(Ie,!1);return ke!==void 0?c.get(ke,this._key):void 0},Se.prototype.set=function(Ie,ke){var Le=Ee(Ie,!0);return Le[this._key]=ke,this},Se.prototype.delete=function(Ie){var ke=Ee(Ie,!1);return ke!==void 0?delete ke[this._key]:!1},Se.prototype.clear=function(){this._key=oe()},Se}();function oe(){var Se;do Se="@@WeakMap@@"+Ue();while(c.has(B,Se));return B[Se]=!0,Se}function Ee(Se,Ie){if(!r.call(Se,Z)){if(!Ie)return;Object.defineProperty(Se,Z,{value:c.create()})}return Se[Z]}function it(Se,Ie){for(var ke=0;ke<Ie;++ke)Se[ke]=Math.random()*255|0;return Se}function pt(Se){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(Se)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(Se)):it(new Uint8Array(Se),Se):it(new Array(Se),Se)}function Ue(){var Se=pt(D);Se[6]=Se[6]&79|64,Se[8]=Se[8]&191|128;for(var Ie="",ke=0;ke<D;++ke){var Le=Se[ke];(ke===4||ke===6||ke===8)&&(Ie+="-"),Le<16&&(Ie+="0"),Ie+=Le.toString(16).toLowerCase()}return Ie}}function Oe(D){return D.__=void 0,delete D.__,D}})})(Ic||(Ic={}));var mn="named",dg="name",gl="unmanaged",vg="optional",Fo="inject",qi="multi_inject",pg="inversify:tagged",gg="inversify:tagged_props",ms="inversify:paramtypes",ub="design:paramtypes",$i="post_construct";function sb(){return[Fo,qi,dg,gl,mn,vg]}var Lc=sb(),Rt={Request:"Request",Singleton:"Singleton",Transient:"Transient"},Lt={ConstantValue:"ConstantValue",Constructor:"Constructor",DynamicValue:"DynamicValue",Factory:"Factory",Function:"Function",Instance:"Instance",Invalid:"Invalid",Provider:"Provider"},Ln={ClassProperty:"ClassProperty",ConstructorArgument:"ConstructorArgument",Variable:"Variable"},lb=0;function va(){return lb++}var cb=function(){function e(t,n){this.id=va(),this.activated=!1,this.serviceIdentifier=t,this.scope=n,this.type=Lt.Invalid,this.constraint=function(r){return!0},this.implementationType=null,this.cache=null,this.factory=null,this.provider=null,this.onActivation=null,this.dynamicValue=null}return e.prototype.clone=function(){var t=new e(this.serviceIdentifier,this.scope);return t.activated=t.scope===Rt.Singleton?this.activated:!1,t.implementationType=this.implementationType,t.dynamicValue=this.dynamicValue,t.scope=this.scope,t.type=this.type,t.factory=this.factory,t.provider=this.provider,t.constraint=this.constraint,t.onActivation=this.onActivation,t.cache=this.cache,t},e}(),fb="Cannot apply @injectable decorator multiple times.",hb="Metadata key was used more than once in a parameter:",vi="NULL argument",Rc="Key Not Found",db="Ambiguous match found for serviceIdentifier:",vb="Could not unbind serviceIdentifier:",pb="No matching bindings found for serviceIdentifier:",gb="Missing required @injectable annotation in:",mb="Missing required @inject or @multiInject annotation in:",yb=function(e){return"@inject called with undefined this could mean that the class "+e+" has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."},_b="Circular dependency found:",xb="Invalid binding type:",bb="No snapshot available to restore.",Sb="Invalid return type in middleware. Middleware must return!",Ab="Value provided to function binding must be a function!",Eb="The toSelf function can only be applied when a constructor is used as service identifier",Cb="The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",wb=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"The number of constructor arguments in the derived class "+(e[0]+" must be >= than the number of constructor arguments of its base class.")},Tb="Invalid Container constructor argument. Container options must be an object.",Mb="Invalid Container option. Default scope must be a string ('singleton' or 'transient').",kb="Invalid Container option. Auto bind injectable must be a boolean",Ib="Invalid Container option. Skip base check must be a boolean",Lb="Cannot apply @postConstruct decorator multiple times in the same class",Rb=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"@postConstruct error in class "+e[0]+": "+e[1]},Pb=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"It looks like there is a circular dependency "+("in one of the '"+e[0]+"' bindings. Please investigate bindings with")+("service identifier '"+e[1]+"'.")},Ob="Maximum call stack size exceeded",Fb=function(){function e(){}return e.prototype.getConstructorMetadata=function(t){var n=Reflect.getMetadata(ms,t),r=Reflect.getMetadata(pg,t);return{compilerGeneratedMetadata:n,userGeneratedMetadata:r||{}}},e.prototype.getPropertiesMetadata=function(t){var n=Reflect.getMetadata(gg,t)||[];return n},e}(),Xa={MultipleBindingsAvailable:2,NoBindingsAvailable:0,OnlyOneBindingAvailable:1};function mg(e){return e instanceof RangeError||e.message===Ob}function Qi(e){if(typeof e=="function"){var t=e;return t.name}else{if(typeof e=="symbol")return e.toString();var t=e;return t}}function Pc(e,t,n){var r="",i=n(e,t);return i.length!==0&&(r=`
Registered bindings:`,i.forEach(function(a){var o="Object";a.implementationType!==null&&(o=Do(a.implementationType)),r=r+`
 `+o,a.constraint.metaData&&(r=r+" - "+a.constraint.metaData)})),r}function yg(e,t){return e.parentRequest===null?!1:e.parentRequest.serviceIdentifier===t?!0:yg(e.parentRequest,t)}function Db(e){function t(r,i){i===void 0&&(i=[]);var a=Qi(r.serviceIdentifier);return i.push(a),r.parentRequest!==null?t(r.parentRequest,i):i}var n=t(e);return n.reverse().join(" --> ")}function _g(e){e.childRequests.forEach(function(t){if(yg(t,t.serviceIdentifier)){var n=Db(t);throw new Error(_b+" "+n)}else _g(t)})}function Nb(e,t){if(t.isTagged()||t.isNamed()){var n="",r=t.getNamedTag(),i=t.getCustomTags();return r!==null&&(n+=r.toString()+`
`),i!==null&&i.forEach(function(a){n+=a.toString()+`
`})," "+e+`
 `+e+" - "+n}else return" "+e}function Do(e){if(e.name)return e.name;var t=e.toString(),n=t.match(/^function\s*([^\s(]+)/);return n?n[1]:"Anonymous function: "+t}var xg=function(){function e(t){this.id=va(),this.container=t}return e.prototype.addPlan=function(t){this.plan=t},e.prototype.setCurrentRequest=function(t){this.currentRequest=t},e}(),nr=function(){function e(t,n){this.key=t,this.value=n}return e.prototype.toString=function(){return this.key===mn?"named: "+this.value.toString()+" ":"tagged: { key:"+this.key.toString()+", value: "+this.value+" }"},e}(),Bb=function(){function e(t,n){this.parentContext=t,this.rootRequest=n}return e}();function Ub(e,t,n,r){var i=pg;bg(i,e,t,r,n)}function zb(e,t,n){var r=gg;bg(r,e.constructor,t,n)}function bg(e,t,n,r,i){var a={},o=typeof i=="number",u=i!==void 0&&o?i.toString():n;if(o&&n!==void 0)throw new Error(Cb);Reflect.hasOwnMetadata(e,t)&&(a=Reflect.getMetadata(e,t));var s=a[u];if(!Array.isArray(s))s=[];else for(var l=0,c=s;l<c.length;l++){var f=c[l];if(f.key===r.key)throw new Error(hb+" "+f.key.toString())}s.push(r),a[u]=s,Reflect.defineMetadata(e,a,t)}function Oc(e,t){Reflect.decorate(e,t)}function $b(e,t){return function(n,r){t(n,r,e)}}function Vb(e,t,n){typeof n=="number"?Oc([$b(n,e)],t):typeof n=="string"?Reflect.decorate([e],t,n):Oc([e],t)}var jb=function(){function e(t){this._cb=t}return e.prototype.unwrap=function(){return this._cb()},e}();function Ge(e){return function(t,n,r){if(e===void 0)throw new Error(yb(t.name));var i=new nr(Fo,e);typeof r=="number"?Ub(t,n,r,i):zb(t,n,i)}}var Hb=function(){function e(t){this.str=t}return e.prototype.startsWith=function(t){return this.str.indexOf(t)===0},e.prototype.endsWith=function(t){var n="",r=t.split("").reverse().join("");return n=this.str.split("").reverse().join(""),this.startsWith.call({str:n},r)},e.prototype.contains=function(t){return this.str.indexOf(t)!==-1},e.prototype.equals=function(t){return this.str===t},e.prototype.value=function(){return this.str},e}(),No=function(){function e(t,n,r,i){this.id=va(),this.type=t,this.serviceIdentifier=r,this.name=new Hb(n||""),this.metadata=new Array;var a=null;typeof i=="string"?a=new nr(mn,i):i instanceof nr&&(a=i),a!==null&&this.metadata.push(a)}return e.prototype.hasTag=function(t){for(var n=0,r=this.metadata;n<r.length;n++){var i=r[n];if(i.key===t)return!0}return!1},e.prototype.isArray=function(){return this.hasTag(qi)},e.prototype.matchesArray=function(t){return this.matchesTag(qi)(t)},e.prototype.isNamed=function(){return this.hasTag(mn)},e.prototype.isTagged=function(){return this.metadata.some(function(t){return Lc.every(function(n){return t.key!==n})})},e.prototype.isOptional=function(){return this.matchesTag(vg)(!0)},e.prototype.getNamedTag=function(){return this.isNamed()?this.metadata.filter(function(t){return t.key===mn})[0]:null},e.prototype.getCustomTags=function(){return this.isTagged()?this.metadata.filter(function(t){return Lc.every(function(n){return t.key!==n})}):null},e.prototype.matchesNamedTag=function(t){return this.matchesTag(mn)(t)},e.prototype.matchesTag=function(t){var n=this;return function(r){for(var i=0,a=n.metadata;i<a.length;i++){var o=a[i];if(o.key===t&&o.value===r)return!0}return!1}},e}(),io=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};function Gb(e,t){var n=Do(t),r=Sg(e,n,t,!1);return r}function Sg(e,t,n,r){var i=e.getConstructorMetadata(n),a=i.compilerGeneratedMetadata;if(a===void 0){var o=gb+" "+t+".";throw new Error(o)}var u=i.userGeneratedMetadata,s=Object.keys(u),l=n.length===0&&s.length>0,c=s.length>n.length,f=l||c?s.length:n.length,h=Yb(r,t,a,u,f),d=Ag(e,n),v=io(io([],h),d);return v}function Wb(e,t,n,r,i){var a=i[e.toString()]||[],o=Cg(a),u=o.unmanaged!==!0,s=r[e],l=o.inject||o.multiInject;if(s=l||s,s instanceof jb&&(s=s.unwrap()),u){var c=s===Object,f=s===Function,h=s===void 0,d=c||f||h;if(!t&&d){var v=mb+" argument "+e+" in class "+n+".";throw new Error(v)}var p=new No(Ln.ConstructorArgument,o.targetName,s);return p.metadata=a,p}return null}function Yb(e,t,n,r,i){for(var a=[],o=0;o<i;o++){var u=o,s=Wb(u,e,t,n,r);s!==null&&a.push(s)}return a}function Ag(e,t){for(var n=e.getPropertiesMetadata(t),r=[],i=Object.keys(n),a=0,o=i;a<o.length;a++){var u=o[a],s=n[u],l=Cg(n[u]),c=l.targetName||u,f=l.inject||l.multiInject,h=new No(Ln.ClassProperty,c,f);h.metadata=s,r.push(h)}var d=Object.getPrototypeOf(t.prototype).constructor;if(d!==Object){var v=Ag(e,d);r=io(io([],r),v)}return r}function Eg(e,t){var n=Object.getPrototypeOf(t.prototype).constructor;if(n!==Object){var r=Do(n),i=Sg(e,r,n,!0),a=i.map(function(s){return s.metadata.filter(function(l){return l.key===gl})}),o=[].concat.apply([],a).length,u=i.length-o;return u>0?u:Eg(e,n)}else return 0}function Cg(e){var t={};return e.forEach(function(n){t[n.key.toString()]=n.value}),{inject:t[Fo],multiInject:t[qi],targetName:t[dg],unmanaged:t[gl]}}var ml=function(){function e(t,n,r,i,a){this.id=va(),this.serviceIdentifier=t,this.parentContext=n,this.parentRequest=r,this.target=a,this.childRequests=[],this.bindings=Array.isArray(i)?i:[i],this.requestScope=r===null?new Map:null}return e.prototype.addChildRequest=function(t,n,r){var i=new e(t,this.parentContext,this,n,r);return this.childRequests.push(i),i},e}();function ys(e){return e._bindingDictionary}function Xb(e,t,n,r,i,a){var o=e?qi:Fo,u=new nr(o,n),s=new No(t,r,n,u);if(i!==void 0){var l=new nr(i,a);s.metadata.push(l)}return s}function Fc(e,t,n,r,i){var a=Ji(n.container,i.serviceIdentifier),o=[];return a.length===Xa.NoBindingsAvailable&&n.container.options.autoBindInjectable&&typeof i.serviceIdentifier=="function"&&e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata&&(n.container.bind(i.serviceIdentifier).toSelf(),a=Ji(n.container,i.serviceIdentifier)),t?o=a:o=a.filter(function(u){var s=new ml(u.serviceIdentifier,n,r,u,i);return u.constraint(s)}),Zb(i.serviceIdentifier,o,i,n.container),o}function Zb(e,t,n,r){switch(t.length){case Xa.NoBindingsAvailable:if(n.isOptional())return t;var i=Qi(e),a=pb;throw a+=Nb(i,n),a+=Pc(r,i,Ji),new Error(a);case Xa.OnlyOneBindingAvailable:if(!n.isArray())return t;case Xa.MultipleBindingsAvailable:default:if(n.isArray())return t;var i=Qi(e),a=db+" "+i;throw a+=Pc(r,i,Ji),new Error(a)}}function wg(e,t,n,r,i,a){var o,u;if(i===null){o=Fc(e,t,r,null,a),u=new ml(n,r,null,o,a);var s=new Bb(r,u);r.addPlan(s)}else o=Fc(e,t,r,i,a),u=i.addChildRequest(a.serviceIdentifier,o,a);o.forEach(function(l){var c=null;if(a.isArray())c=u.addChildRequest(l.serviceIdentifier,l,a);else{if(l.cache)return;c=u}if(l.type===Lt.Instance&&l.implementationType!==null){var f=Gb(e,l.implementationType);if(!r.container.options.skipBaseClassChecks){var h=Eg(e,l.implementationType);if(f.length<h){var d=wb(Do(l.implementationType));throw new Error(d)}}f.forEach(function(v){wg(e,!1,v.serviceIdentifier,r,c,v)})}})}function Ji(e,t){var n=[],r=ys(e);return r.hasKey(t)?n=r.get(t):e.parent!==null&&(n=Ji(e.parent,t)),n}function qb(e,t,n,r,i,a,o,u){u===void 0&&(u=!1);var s=new xg(t),l=Xb(n,r,i,"",a,o);try{return wg(e,u,i,s,null,l),s}catch(c){throw mg(c)&&s.plan&&_g(s.plan.rootRequest),c}}function Qb(e,t,n,r){var i=new No(Ln.Variable,"",t,new nr(n,r)),a=new xg(e),o=new ml(t,a,null,[],i);return o}var Jb=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};function Kb(e,t,n){var r=t.filter(function(a){return a.target!==null&&a.target.type===Ln.ClassProperty}),i=r.map(n);return r.forEach(function(a,o){var u="";u=a.target.name.value();var s=i[o];e[u]=s}),e}function e3(e,t){return new(e.bind.apply(e,Jb([void 0],t)))}function t3(e,t){if(Reflect.hasMetadata($i,e)){var n=Reflect.getMetadata($i,e);try{t[n.value]()}catch(r){throw new Error(Rb(e.name,r.message))}}}function n3(e,t,n){var r=null;if(t.length>0){var i=t.filter(function(o){return o.target!==null&&o.target.type===Ln.ConstructorArgument}),a=i.map(n);r=e3(e,a),r=Kb(r,t,n)}else r=new e;return t3(e,r),r}var Au=function(e,t,n){try{return n()}catch(r){throw mg(r)?new Error(Pb(e,t.toString())):r}},_s=function(e){return function(t){t.parentContext.setCurrentRequest(t);var n=t.bindings,r=t.childRequests,i=t.target&&t.target.isArray(),a=!t.parentRequest||!t.parentRequest.target||!t.target||!t.parentRequest.target.matchesArray(t.target.serviceIdentifier);if(i&&a)return r.map(function(f){var h=_s(e);return h(f)});var o=null;if(t.target.isOptional()&&n.length===0)return;var u=n[0],s=u.scope===Rt.Singleton,l=u.scope===Rt.Request;if(s&&u.activated)return u.cache;if(l&&e!==null&&e.has(u.id))return e.get(u.id);if(u.type===Lt.ConstantValue)o=u.cache,u.activated=!0;else if(u.type===Lt.Function)o=u.cache,u.activated=!0;else if(u.type===Lt.Constructor)o=u.implementationType;else if(u.type===Lt.DynamicValue&&u.dynamicValue!==null)o=Au("toDynamicValue",u.serviceIdentifier,function(){return u.dynamicValue(t.parentContext)});else if(u.type===Lt.Factory&&u.factory!==null)o=Au("toFactory",u.serviceIdentifier,function(){return u.factory(t.parentContext)});else if(u.type===Lt.Provider&&u.provider!==null)o=Au("toProvider",u.serviceIdentifier,function(){return u.provider(t.parentContext)});else if(u.type===Lt.Instance&&u.implementationType!==null)o=n3(u.implementationType,r,_s(e));else{var c=Qi(t.serviceIdentifier);throw new Error(xb+" "+c)}return typeof u.onActivation=="function"&&(o=u.onActivation(t.parentContext,o)),s&&(u.cache=o,u.activated=!0),l&&e!==null&&!e.has(u.id)&&e.set(u.id,o),o}};function r3(e){var t=_s(e.plan.rootRequest.requestScope);return t(e.plan.rootRequest)}var Tn=function(e,t){var n=e.parentRequest;return n!==null?t(n)?!0:Tn(n,t):!1},Pi=function(e){return function(t){var n=function(r){return r!==null&&r.target!==null&&r.target.matchesTag(e)(t)};return n.metaData=new nr(e,t),n}},Oa=Pi(mn),Eu=function(e){return function(t){var n=null;if(t!==null)if(n=t.bindings[0],typeof e=="string"){var r=n.serviceIdentifier;return r===e}else{var i=t.bindings[0].implementationType;return e===i}return!1}},yl=function(){function e(t){this._binding=t}return e.prototype.when=function(t){return this._binding.constraint=t,new kt(this._binding)},e.prototype.whenTargetNamed=function(t){return this._binding.constraint=Oa(t),new kt(this._binding)},e.prototype.whenTargetIsDefault=function(){return this._binding.constraint=function(t){var n=t.target!==null&&!t.target.isNamed()&&!t.target.isTagged();return n},new kt(this._binding)},e.prototype.whenTargetTagged=function(t,n){return this._binding.constraint=Pi(t)(n),new kt(this._binding)},e.prototype.whenInjectedInto=function(t){return this._binding.constraint=function(n){return Eu(t)(n.parentRequest)},new kt(this._binding)},e.prototype.whenParentNamed=function(t){return this._binding.constraint=function(n){return Oa(t)(n.parentRequest)},new kt(this._binding)},e.prototype.whenParentTagged=function(t,n){return this._binding.constraint=function(r){return Pi(t)(n)(r.parentRequest)},new kt(this._binding)},e.prototype.whenAnyAncestorIs=function(t){return this._binding.constraint=function(n){return Tn(n,Eu(t))},new kt(this._binding)},e.prototype.whenNoAncestorIs=function(t){return this._binding.constraint=function(n){return!Tn(n,Eu(t))},new kt(this._binding)},e.prototype.whenAnyAncestorNamed=function(t){return this._binding.constraint=function(n){return Tn(n,Oa(t))},new kt(this._binding)},e.prototype.whenNoAncestorNamed=function(t){return this._binding.constraint=function(n){return!Tn(n,Oa(t))},new kt(this._binding)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._binding.constraint=function(r){return Tn(r,Pi(t)(n))},new kt(this._binding)},e.prototype.whenNoAncestorTagged=function(t,n){return this._binding.constraint=function(r){return!Tn(r,Pi(t)(n))},new kt(this._binding)},e.prototype.whenAnyAncestorMatches=function(t){return this._binding.constraint=function(n){return Tn(n,t)},new kt(this._binding)},e.prototype.whenNoAncestorMatches=function(t){return this._binding.constraint=function(n){return!Tn(n,t)},new kt(this._binding)},e}(),kt=function(){function e(t){this._binding=t}return e.prototype.onActivation=function(t){return this._binding.onActivation=t,new yl(this._binding)},e}(),Zn=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new yl(this._binding),this._bindingOnSyntax=new kt(this._binding)}return e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,n){return this._bindingWhenSyntax.whenTargetTagged(t,n)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,n){return this._bindingWhenSyntax.whenParentTagged(t,n)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,n)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenNoAncestorTagged(t,n)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),i3=function(){function e(t){this._binding=t}return e.prototype.inRequestScope=function(){return this._binding.scope=Rt.Request,new Zn(this._binding)},e.prototype.inSingletonScope=function(){return this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.inTransientScope=function(){return this._binding.scope=Rt.Transient,new Zn(this._binding)},e}(),Dc=function(){function e(t){this._binding=t,this._bindingWhenSyntax=new yl(this._binding),this._bindingOnSyntax=new kt(this._binding),this._bindingInSyntax=new i3(t)}return e.prototype.inRequestScope=function(){return this._bindingInSyntax.inRequestScope()},e.prototype.inSingletonScope=function(){return this._bindingInSyntax.inSingletonScope()},e.prototype.inTransientScope=function(){return this._bindingInSyntax.inTransientScope()},e.prototype.when=function(t){return this._bindingWhenSyntax.when(t)},e.prototype.whenTargetNamed=function(t){return this._bindingWhenSyntax.whenTargetNamed(t)},e.prototype.whenTargetIsDefault=function(){return this._bindingWhenSyntax.whenTargetIsDefault()},e.prototype.whenTargetTagged=function(t,n){return this._bindingWhenSyntax.whenTargetTagged(t,n)},e.prototype.whenInjectedInto=function(t){return this._bindingWhenSyntax.whenInjectedInto(t)},e.prototype.whenParentNamed=function(t){return this._bindingWhenSyntax.whenParentNamed(t)},e.prototype.whenParentTagged=function(t,n){return this._bindingWhenSyntax.whenParentTagged(t,n)},e.prototype.whenAnyAncestorIs=function(t){return this._bindingWhenSyntax.whenAnyAncestorIs(t)},e.prototype.whenNoAncestorIs=function(t){return this._bindingWhenSyntax.whenNoAncestorIs(t)},e.prototype.whenAnyAncestorNamed=function(t){return this._bindingWhenSyntax.whenAnyAncestorNamed(t)},e.prototype.whenAnyAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenAnyAncestorTagged(t,n)},e.prototype.whenNoAncestorNamed=function(t){return this._bindingWhenSyntax.whenNoAncestorNamed(t)},e.prototype.whenNoAncestorTagged=function(t,n){return this._bindingWhenSyntax.whenNoAncestorTagged(t,n)},e.prototype.whenAnyAncestorMatches=function(t){return this._bindingWhenSyntax.whenAnyAncestorMatches(t)},e.prototype.whenNoAncestorMatches=function(t){return this._bindingWhenSyntax.whenNoAncestorMatches(t)},e.prototype.onActivation=function(t){return this._bindingOnSyntax.onActivation(t)},e}(),a3=function(){function e(t){this._binding=t}return e.prototype.to=function(t){return this._binding.type=Lt.Instance,this._binding.implementationType=t,new Dc(this._binding)},e.prototype.toSelf=function(){if(typeof this._binding.serviceIdentifier!="function")throw new Error(""+Eb);var t=this._binding.serviceIdentifier;return this.to(t)},e.prototype.toConstantValue=function(t){return this._binding.type=Lt.ConstantValue,this._binding.cache=t,this._binding.dynamicValue=null,this._binding.implementationType=null,this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.toDynamicValue=function(t){return this._binding.type=Lt.DynamicValue,this._binding.cache=null,this._binding.dynamicValue=t,this._binding.implementationType=null,new Dc(this._binding)},e.prototype.toConstructor=function(t){return this._binding.type=Lt.Constructor,this._binding.implementationType=t,this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.toFactory=function(t){return this._binding.type=Lt.Factory,this._binding.factory=t,this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.toFunction=function(t){if(typeof t!="function")throw new Error(Ab);var n=this.toConstantValue(t);return this._binding.type=Lt.Function,this._binding.scope=Rt.Singleton,n},e.prototype.toAutoFactory=function(t){return this._binding.type=Lt.Factory,this._binding.factory=function(n){var r=function(){return n.container.get(t)};return r},this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.toProvider=function(t){return this._binding.type=Lt.Provider,this._binding.provider=t,this._binding.scope=Rt.Singleton,new Zn(this._binding)},e.prototype.toService=function(t){this.toDynamicValue(function(n){return n.container.get(t)})},e}(),o3=function(){function e(){}return e.of=function(t,n){var r=new e;return r.bindings=t,r.middleware=n,r},e}(),Nc=function(){function e(){this._map=new Map}return e.prototype.getMap=function(){return this._map},e.prototype.add=function(t,n){if(t==null)throw new Error(vi);if(n==null)throw new Error(vi);var r=this._map.get(t);r!==void 0?(r.push(n),this._map.set(t,r)):this._map.set(t,[n])},e.prototype.get=function(t){if(t==null)throw new Error(vi);var n=this._map.get(t);if(n!==void 0)return n;throw new Error(Rc)},e.prototype.remove=function(t){if(t==null)throw new Error(vi);if(!this._map.delete(t))throw new Error(Rc)},e.prototype.removeByCondition=function(t){var n=this;this._map.forEach(function(r,i){var a=r.filter(function(o){return!t(o)});a.length>0?n._map.set(i,a):n._map.delete(i)})},e.prototype.hasKey=function(t){if(t==null)throw new Error(vi);return this._map.has(t)},e.prototype.clone=function(){var t=new e;return this._map.forEach(function(n,r){n.forEach(function(i){return t.add(r,i.clone())})}),t},e.prototype.traverse=function(t){this._map.forEach(function(n,r){t(r,n)})},e}(),u3=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function u(c){try{l(r.next(c))}catch(f){o(f)}}function s(c){try{l(r.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((r=r.apply(e,t||[])).next())})},s3=function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},l3=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Tg=function(){function e(t){this._appliedMiddleware=[];var n=t||{};if(typeof n!="object")throw new Error(""+Tb);if(n.defaultScope===void 0)n.defaultScope=Rt.Transient;else if(n.defaultScope!==Rt.Singleton&&n.defaultScope!==Rt.Transient&&n.defaultScope!==Rt.Request)throw new Error(""+Mb);if(n.autoBindInjectable===void 0)n.autoBindInjectable=!1;else if(typeof n.autoBindInjectable!="boolean")throw new Error(""+kb);if(n.skipBaseClassChecks===void 0)n.skipBaseClassChecks=!1;else if(typeof n.skipBaseClassChecks!="boolean")throw new Error(""+Ib);this.options={autoBindInjectable:n.autoBindInjectable,defaultScope:n.defaultScope,skipBaseClassChecks:n.skipBaseClassChecks},this.id=va(),this._bindingDictionary=new Nc,this._snapshots=[],this._middleware=null,this.parent=null,this._metadataReader=new Fb}return e.merge=function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];var a=new e,o=l3([t,n],r).map(function(l){return ys(l)}),u=ys(a);function s(l,c){l.traverse(function(f,h){h.forEach(function(d){c.add(d.serviceIdentifier,d.clone())})})}return o.forEach(function(l){s(l,u)}),a},e.prototype.load=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=this._getContainerModuleHelpersFactory(),i=0,a=t;i<a.length;i++){var o=a[i],u=r(o.id);o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)}},e.prototype.loadAsync=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return u3(this,void 0,void 0,function(){var r,i,a,o,u;return s3(this,function(s){switch(s.label){case 0:r=this._getContainerModuleHelpersFactory(),i=0,a=t,s.label=1;case 1:return i<a.length?(o=a[i],u=r(o.id),[4,o.registry(u.bindFunction,u.unbindFunction,u.isboundFunction,u.rebindFunction)]):[3,4];case 2:s.sent(),s.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.unload=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=function(a){return function(o){return o.moduleId===a}};n.forEach(function(a){var o=i(a.id);t._bindingDictionary.removeByCondition(o)})},e.prototype.bind=function(t){var n=this.options.defaultScope||Rt.Transient,r=new cb(t,n);return this._bindingDictionary.add(t,r),new a3(r)},e.prototype.rebind=function(t){return this.unbind(t),this.bind(t)},e.prototype.unbind=function(t){try{this._bindingDictionary.remove(t)}catch{throw new Error(vb+" "+Qi(t))}},e.prototype.unbindAll=function(){this._bindingDictionary=new Nc},e.prototype.isBound=function(t){var n=this._bindingDictionary.hasKey(t);return!n&&this.parent&&(n=this.parent.isBound(t)),n},e.prototype.isBoundNamed=function(t,n){return this.isBoundTagged(t,mn,n)},e.prototype.isBoundTagged=function(t,n,r){var i=!1;if(this._bindingDictionary.hasKey(t)){var a=this._bindingDictionary.get(t),o=Qb(this,t,n,r);i=a.some(function(u){return u.constraint(o)})}return!i&&this.parent&&(i=this.parent.isBoundTagged(t,n,r)),i},e.prototype.snapshot=function(){this._snapshots.push(o3.of(this._bindingDictionary.clone(),this._middleware))},e.prototype.restore=function(){var t=this._snapshots.pop();if(t===void 0)throw new Error(bb);this._bindingDictionary=t.bindings,this._middleware=t.middleware},e.prototype.createChild=function(t){var n=new e(t||this.options);return n.parent=this,n},e.prototype.applyMiddleware=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._appliedMiddleware=this._appliedMiddleware.concat(t);var r=this._middleware?this._middleware:this._planAndResolve();this._middleware=t.reduce(function(i,a){return a(i)},r)},e.prototype.applyCustomMetadataReader=function(t){this._metadataReader=t},e.prototype.get=function(t){return this._get(!1,!1,Ln.Variable,t)},e.prototype.getTagged=function(t,n,r){return this._get(!1,!1,Ln.Variable,t,n,r)},e.prototype.getNamed=function(t,n){return this.getTagged(t,mn,n)},e.prototype.getAll=function(t){return this._get(!0,!0,Ln.Variable,t)},e.prototype.getAllTagged=function(t,n,r){return this._get(!1,!0,Ln.Variable,t,n,r)},e.prototype.getAllNamed=function(t,n){return this.getAllTagged(t,mn,n)},e.prototype.resolve=function(t){var n=this.createChild();return n.bind(t).toSelf(),this._appliedMiddleware.forEach(function(r){n.applyMiddleware(r)}),n.get(t)},e.prototype._getContainerModuleHelpersFactory=function(){var t=this,n=function(u,s){u._binding.moduleId=s},r=function(u){return function(s){var l=t.bind.bind(t),c=l(s);return n(c,u),c}},i=function(u){return function(s){var l=t.unbind.bind(t);l(s)}},a=function(u){return function(s){var l=t.isBound.bind(t);return l(s)}},o=function(u){return function(s){var l=t.rebind.bind(t),c=l(s);return n(c,u),c}};return function(u){return{bindFunction:r(u),isboundFunction:a(),rebindFunction:o(u),unbindFunction:i()}}},e.prototype._get=function(t,n,r,i,a,o){var u=null,s={avoidConstraints:t,contextInterceptor:function(l){return l},isMultiInject:n,key:a,serviceIdentifier:i,targetType:r,value:o};if(this._middleware){if(u=this._middleware(s),u==null)throw new Error(Sb)}else u=this._planAndResolve()(s);return u},e.prototype._planAndResolve=function(){var t=this;return function(n){var r=qb(t._metadataReader,t,n.isMultiInject,n.targetType,n.serviceIdentifier,n.key,n.value,n.avoidConstraints);r=n.contextInterceptor(r);var i=r3(r);return i}},e}();function Ne(){return function(e){if(Reflect.hasOwnMetadata(ms,e))throw new Error(fb);var t=Reflect.getMetadata(ub,e)||[];return Reflect.defineMetadata(ms,t,e),e}}function c3(){return function(e,t,n){var r=new nr($i,t);if(Reflect.hasOwnMetadata($i,e.constructor))throw new Error(Lb);Reflect.defineMetadata($i,r,e.constructor)}}var pi=Symbol.for("INJECTION");function Bo(e,t,n,r){function i(){return r&&!Reflect.hasMetadata(pi,this,t)&&Reflect.defineMetadata(pi,n(),this,t),Reflect.hasMetadata(pi,this,t)?Reflect.getMetadata(pi,this,t):n()}function a(o){Reflect.defineMetadata(pi,o,this,t)}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:i,set:a})}function f3(e,t){return function(n){return function(r,i){var a=function(){return e.get(n)};Bo(r,i,a,t)}}}function h3(e,t){return function(n,r){return function(i,a){var o=function(){return e.getNamed(n,r)};Bo(i,a,o,t)}}}function d3(e,t){return function(n,r,i){return function(a,o){var u=function(){return e.getTagged(n,r,i)};Bo(a,o,u,t)}}}function v3(e,t){return function(n){return function(r,i){var a=function(){return e.getAll(n)};Bo(r,i,a,t)}}}function p3(e,t){t===void 0&&(t=!0);var n=f3(e,t),r=h3(e,t),i=d3(e,t),a=v3(e,t);return{lazyInject:n,lazyInjectNamed:r,lazyInjectTagged:i,lazyMultiInject:a}}var se={IEventEmitter:Symbol.for("IEventEmitter"),ISceneService:Symbol.for("ISceneService"),IGlobalConfigService:Symbol.for("IGlobalConfigService"),ICameraService:Symbol.for("ICameraService"),ICoordinateSystemService:Symbol.for("ICoordinateSystemService"),ILayerService:Symbol.for("ILayerService"),IDebugService:Symbol.for("IDebugService"),ILayerMappingService:Symbol.for("ILayerMappingService"),ILayerStyleService:Symbol.for("ILayerStyleService"),IMapService:Symbol.for("IMapService"),IMarkerService:Symbol.for("IMarkerService"),IPopupService:Symbol.for("PopupService"),IFactoryMapService:Symbol.for("Factory<IMapService>"),IRendererService:Symbol.for("IRendererService"),IShaderModuleService:Symbol.for("IShaderModuleService"),IIconService:Symbol.for("IIconService"),IFontService:Symbol.for("IFontService"),IInteractionService:Symbol.for("IInteractionService"),IPickingService:Symbol.for("IPickingService"),IControlService:Symbol.for("IControlService"),IStyleAttributeService:Symbol.for("IStyleAttributeService"),ILayer:Symbol.for("ILayer"),ILayerPlugin:Symbol.for("ILayerPlugin"),INormalPass:Symbol.for("INormalPass"),IPostProcessor:Symbol.for("IPostProcessor"),IPostProcessingPass:Symbol.for("IPostProcessingPass"),IFactoryPostProcessingPass:Symbol.for("Factory<IPostProcessingPass>"),IFactoryNormalPass:Symbol.for("Factory<IFactoryNormalPass>"),IMultiPassRenderer:Symbol.for("IMultiPassRenderer"),SceneID:Symbol.for("SceneID"),MapConfig:Symbol.for("MapConfig")},_l={exports:{}};_l.exports=pa;_l.exports.default=pa;var Wr=1e20;function pa(e,t,n,r,i,a){this.fontSize=e||24,this.buffer=t===void 0?3:t,this.cutoff=r||.25,this.fontFamily=i||"sans-serif",this.fontWeight=a||"normal",this.radius=n||8;var o=this.size=this.fontSize+this.buffer*2,u=o+this.buffer*2;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=o,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textAlign="left",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(u*u),this.gridInner=new Float64Array(u*u),this.f=new Float64Array(u),this.z=new Float64Array(u+1),this.v=new Uint16Array(u),this.useMetrics=this.ctx.measureText("A").actualBoundingBoxLeft!==void 0,this.middle=Math.round(o/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function g3(e,t,n,r,i,a,o){a.fill(Wr,0,t*n),o.fill(0,0,t*n);for(var u=(t-r)/2,s=0;s<i;s++)for(var l=0;l<r;l++){var c=(s+u)*t+l+u,f=e.data[4*(s*r+l)+3]/255;if(f===1)a[c]=0,o[c]=Wr;else if(f===0)a[c]=Wr,o[c]=0;else{var h=Math.max(0,.5-f),d=Math.max(0,f-.5);a[c]=h*h,o[c]=d*d}}}function m3(e,t,n,r,i,a,o){for(var u=0;u<t*n;u++){var s=Math.sqrt(r[u])-Math.sqrt(i[u]);e[u]=Math.round(255-255*(s/a+o))}}pa.prototype._draw=function(e,t){var n=this.ctx.measureText(e),r=n.width,i=2*this.buffer,a,o,u,s,l,c,f,h;t&&this.useMetrics?(l=Math.floor(n.actualBoundingBoxAscent),h=this.buffer+Math.ceil(n.actualBoundingBoxAscent),c=this.buffer,f=this.buffer,o=Math.min(this.size,Math.ceil(n.actualBoundingBoxRight-n.actualBoundingBoxLeft)),s=Math.min(this.size-c,Math.ceil(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)),a=o+i,u=s+i,this.ctx.textBaseline="alphabetic"):(a=o=this.size,u=s=this.size,l=19*this.fontSize/24,c=f=0,h=this.middle,this.ctx.textBaseline="middle");var d;o&&s&&(this.ctx.clearRect(f,c,o,s),this.ctx.fillText(e,this.buffer,h),d=this.ctx.getImageData(f,c,o,s));var v=new Uint8ClampedArray(a*u);return g3(d,a,u,o,s,this.gridOuter,this.gridInner),Bc(this.gridOuter,a,u,this.f,this.v,this.z),Bc(this.gridInner,a,u,this.f,this.v,this.z),m3(v,a,u,this.gridOuter,this.gridInner,this.radius,this.cutoff),{data:v,metrics:{width:o,height:s,sdfWidth:a,sdfHeight:u,top:l,left:0,advance:r}}};pa.prototype.draw=function(e){return this._draw(e,!1).data};pa.prototype.drawWithMetrics=function(e){return this._draw(e,!0)};function Bc(e,t,n,r,i,a){for(var o=0;o<t;o++)Uc(e,o,t,n,r,i,a);for(var u=0;u<n;u++)Uc(e,u*t,1,t,r,i,a)}function Uc(e,t,n,r,i,a,o){var u,s,l,c;for(a[0]=0,o[0]=-Wr,o[1]=Wr,u=0;u<r;u++)i[u]=e[t+u*n];for(u=1,s=0,l=0;u<r;u++){do c=a[s],l=(i[u]-i[c]+u*u-c*c)/(u-c)/2;while(l<=o[s]&&--s>-1);s++,a[s]=u,o[s]=l,o[s+1]=Wr}for(u=0,s=0;u<r;u++){for(;o[s+1]<u;)s++;c=a[s],e[t+u*n]=i[c]+(u-c)*(u-c)}}var y3=_l.exports;const _3=Sn(y3);function Mg(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=x3(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function x3(e,t){if(e){if(typeof e=="string")return zc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zc(e,t)}}function zc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var gi=30;function b3(e){var t=e.characterSet,n=e.getFontWidth,r=e.fontHeight,i=e.buffer,a=e.maxCanvasWidth,o=e.mapping,u=o===void 0?{}:o,s=e.xOffset,l=s===void 0?0:s,c=e.yOffset,f=c===void 0?0:c,h=0,d=l;Array.from(t).forEach(function(p,g){if(!u[p]){var m=n(p,g);d+gi>a&&(d=0,h++),u[p]={x:d,y:f+h*gi,width:gi,height:gi,advance:m},d+=gi}});var v=r+i*2;return{mapping:u,xOffset:d,yOffset:f+h*v,canvasHeight:kg(f+(h+1)*v)}}function S3(e,t,n){var r=0,i=0,a=0,o=[],u={},s=Mg(e),l;try{for(s.s();!(l=s.n()).done;){var c=l.value;if(!u[c.id]){var f=c.size;r+f+t>n&&($c(u,o,i),r=0,i=a+i+t,a=0,o=[]),o.push({icon:c,xOffset:r}),r=r+f+t,a=Math.max(a,f)}}}catch(d){s.e(d)}finally{s.f()}o.length>0&&$c(u,o,i);var h=kg(a+i+t);return{mapping:u,canvasHeight:h}}function $c(e,t,n){var r=Mg(t),i;try{for(r.s();!(i=r.n()).done;){var a=i.value,o=a.icon,u=a.xOffset;e[o.id]=$($({},o),{},{x:u,y:n,image:o.image,width:o.width,height:o.height})}}catch(s){r.e(s)}finally{r.f()}}function kg(e){return Math.pow(2,Math.ceil(Math.log2(e)))}var Vc,jc;function Hc(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=A3(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function A3(e,t){if(e){if(typeof e=="string")return Gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(e,t)}}function Gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E3(e){var t=C3();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function C3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var w3=F3(),T3="sans-serif",M3="normal",k3=24,I3=3,L3=.25,R3=8,Wc=1024,P3=1,Yc=1,O3=3;function F3(){for(var e=[],t=32;t<128;t++)e.push(String.fromCharCode(t));return e}function Xc(e,t,n,r){e.font="".concat(r," ").concat(n,"px ").concat(t),e.fillStyle="black",e.textBaseline="middle"}function Zc(e,t){for(var n=0;n<e.length;n++)t.data[4*n+3]=e[n]}Vc=Ne(),Vc(jc=function(e){Te(n,e);var t=E3(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"fontAtlas",void 0),S(P(r),"iconFontMap",void 0),S(P(r),"iconFontGlyphs",{}),S(P(r),"fontOptions",void 0),S(P(r),"key",void 0),S(P(r),"cache",new z_(O3)),r}return le(n,[{key:"scale",get:function(){return Yc}},{key:"canvas",get:function(){var i=this.cache.get(this.key);return i&&i.data}},{key:"mapping",get:function(){var i=this.cache.get(this.key);return i&&i.mapping||{}}},{key:"getCanvasByKey",value:function(i){var a=this.cache.get(i);return a&&a.data}},{key:"getMappingByKey",value:function(i){var a=this.cache.get(i);return a&&a.mapping||{}}},{key:"init",value:function(){this.cache.clear(),this.fontOptions={fontFamily:T3,fontWeight:M3,characterSet:w3,fontSize:k3,buffer:I3,sdf:!0,cutoff:L3,radius:R3,iconfont:!1},this.key="",this.iconFontMap=new Map}},{key:"addIconGlyphs",value:function(i){var a=this;i.forEach(function(o){a.iconFontGlyphs[o.name]=o.unicode})}},{key:"addIconFont",value:function(i,a){this.iconFontMap.set(i,a)}},{key:"getIconFontKey",value:function(i){return this.iconFontMap.get(i)||i}},{key:"getGlyph",value:function(i){return this.iconFontGlyphs[i]?String.fromCharCode(parseInt(this.iconFontGlyphs[i],16)):""}},{key:"setFontOptions",value:function(i){this.fontOptions=$($({},this.fontOptions),i),this.key=this.getKey();var a=this.getNewChars(this.key,this.fontOptions.characterSet),o=this.cache.get(this.key);if(!(o&&a.length===0)){var u=this.generateFontAtlas(this.key,a,o);this.fontAtlas=u,this.cache.set(this.key,u)}}},{key:"addFontFace",value:function(i,a){var o=this,u=document.createElement("style");u.type="text/css",u.innerText=`
        @font-face{
            font-family: '`.concat(i,`';
            src: url('`).concat(a,`') format('woff2'),
            url('`).concat(a,`') format('woff'),
            url('`).concat(a,`') format('truetype');
        }`),u.onload=function(){if(document.fonts)try{document.fonts.load("24px ".concat(i),"L7text"),document.fonts.ready.then(function(){o.emit("fontloaded",{fontFamily:i})})}catch{}},document.getElementsByTagName("head")[0].appendChild(u)}},{key:"destroy",value:function(){this.cache.clear(),this.iconFontMap.clear()}},{key:"generateFontAtlas",value:function(i,a,o){var u=this.fontOptions,s=u.fontFamily,l=u.fontWeight,c=u.fontSize,f=u.buffer,h=u.sdf,d=u.radius,v=u.cutoff,p=u.iconfont,g=o&&o.data;g||(g=window.document.createElement("canvas"),g.width=Wc);var m=g.getContext("2d",{willReadFrequently:!0});Xc(m,s,c,l);var _=b3($({getFontWidth:function(W){return m.measureText(W).width},fontHeight:c*Yc,buffer:f,characterSet:a,maxCanvasWidth:Wc},o&&{mapping:o.mapping,xOffset:o.xOffset,yOffset:o.yOffset})),y=_.mapping,x=_.canvasHeight,b=_.xOffset,M=_.yOffset,C=m.getImageData(0,0,g.width,g.height);if(g.height=x,m.putImageData(C,0,0),Xc(m,s,c,l),h){var L=new _3(c,f,d,v,s,l),N=m.getImageData(0,0,L.size,L.size),I=Hc(a),T;try{for(I.s();!(T=I.n()).done;){var k=T.value;if(p){var O=String.fromCharCode(parseInt(k.replace("&#x","").replace(";",""),16)),z=L.draw(O);Zc(z,N)}else Zc(L.draw(k),N);m.putImageData(N,y[k].x,y[k].y)}}catch(ye){I.e(ye)}finally{I.f()}}else{var ne=Hc(a),de;try{for(ne.s();!(de=ne.n()).done;){var pe=de.value;m.fillText(pe,y[pe].x,y[pe].y+c*P3)}}catch(ye){ne.e(ye)}finally{ne.f()}}return{xOffset:b,yOffset:M,mapping:y,data:g,width:g.width,height:g.height}}},{key:"getKey",value:function(){var i=this.fontOptions,a=i.fontFamily,o=i.fontWeight;return"".concat(a,"_").concat(o)}},{key:"getNewChars",value:function(i,a){var o=this.cache.get(i);if(!o)return a;var u=[],s=o.mapping,l=new Set(Object.keys(s)),c=new Set(a);return c.forEach(function(f){l.has(f)||u.push(f)}),u}}]),n}(Kt.EventEmitter));var qc,Qc;function D3(e){var t=N3();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function N3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var B3=3,Jc=1024,mi=64;qc=Ne(),qc(Qc=function(e){Te(n,e);var t=D3(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"canvasHeight",128),S(P(r),"texture",void 0),S(P(r),"canvas",void 0),S(P(r),"iconData",void 0),S(P(r),"iconMap",void 0),S(P(r),"ctx",void 0),S(P(r),"loadingImageCount",0),r}return le(n,[{key:"isLoading",value:function(){return this.loadingImageCount===0}},{key:"init",value:function(){this.iconData=[],this.iconMap={},this.canvas=window.document.createElement("canvas"),this.canvas.width=128,this.canvas.height=128,this.ctx=this.canvas.getContext("2d")}},{key:"addImage",value:function(){var r=Q(w.mark(function a(o,u){var s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=new Image,this.loadingImageCount++,this.hasImage(o)||this.iconData.push({id:o,size:mi}),this.updateIconMap(),f.next=6,this.loadImage(u);case 6:s=f.sent,l=this.iconData.find(function(h){return h.id===o}),l&&(l.image=s,l.width=s.width,l.height=s.height),this.update();case 10:case"end":return f.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"addImageMini",value:function(i,a,o){var u=this,s=o.getSceneConfig().canvas,l=s.createImage();if(this.loadingImageCount++,this.hasImage(i))throw new Error("Image Id already exists");this.iconData.push({id:i,size:mi}),this.updateIconMap(),this.loadImageMini(a,s).then(function(c){l=c;var f=u.iconData.find(function(h){return h.id===i});f&&(f.image=l,f.width=l.width,f.height=l.height),u.update()})}},{key:"getTexture",value:function(){return this.texture}},{key:"getIconMap",value:function(){return this.iconMap}},{key:"getCanvas",value:function(){return this.canvas}},{key:"hasImage",value:function(i){return this.iconMap.hasOwnProperty(i)}},{key:"removeImage",value:function(i){this.hasImage(i)&&(this.iconData=this.iconData.filter(function(a){return a.id!==i}),delete this.iconMap[i],this.update())}},{key:"destroy",value:function(){this.removeAllListeners("imageUpdate"),this.iconData=[],this.iconMap={}}},{key:"loadImage",value:function(i){return new Promise(function(a,o){if(i instanceof HTMLImageElement){a(i);return}var u=new Image;u.crossOrigin="anonymous",u.onload=function(){a(u)},u.onerror=function(){o(new Error("Could not load image at "+i))},u.src=i instanceof File?URL.createObjectURL(i):i})}},{key:"update",value:function(){this.updateIconMap(),this.updateIconAtlas(),this.loadingImageCount--,this.loadingImageCount===0&&this.emit("imageUpdate")}},{key:"updateIconAtlas",value:function(){var i=this;this.canvas.width=Jc,this.canvas.height=this.canvasHeight,Object.keys(this.iconMap).forEach(function(a){var o=i.iconMap[a],u=o.x,s=o.y,l=o.image,c=o.width,f=c===void 0?64:c,h=o.height,d=h===void 0?64:h,v=Math.max(f,d),p=v/mi,g=d/p,m=f/p;l&&i.ctx.drawImage(l,u+(mi-m)/2,s+(mi-g)/2,m,g)})}},{key:"updateIconMap",value:function(){var i=S3(this.iconData,B3,Jc),a=i.mapping,o=i.canvasHeight;this.iconMap=a,this.canvasHeight=o}},{key:"loadImageMini",value:function(i,a){return new Promise(function(o,u){var s=a.createImage();s.crossOrigin="anonymous",s.onload=function(){o(s)},s.onerror=function(){u(new Error("Could not load image at "+i))},s.src=i})}}]),n}(Kt.EventEmitter));var Kc,ef;Kc=Ne(),Kc(ef=function(){function e(){ce(this,e),S(this,"viewport",void 0),S(this,"overridedViewProjectionMatrix",void 0),S(this,"jitteredViewProjectionMatrix",void 0),S(this,"jitteredProjectionMatrix",void 0),S(this,"viewMatrixInverse",void 0),S(this,"cameraPosition",void 0)}return le(e,[{key:"init",value:function(){}},{key:"update",value:function(n){this.viewport=n,this.viewMatrixInverse=Ur(),h0(this.viewMatrixInverse,n.getViewMatrix()),this.cameraPosition=[this.viewMatrixInverse[12],this.viewMatrixInverse[13],this.viewMatrixInverse[14]]}},{key:"getProjectionMatrix",value:function(){return this.jitteredProjectionMatrix||this.viewport.getProjectionMatrix()}},{key:"getModelMatrix",value:function(){return this.viewport.getModelMatrix()}},{key:"getViewMatrix",value:function(){return this.viewport.getViewMatrix()}},{key:"getViewMatrixUncentered",value:function(){return this.viewport.getViewMatrixUncentered()}},{key:"getViewProjectionMatrixUncentered",value:function(){return this.viewport.getViewProjectionMatrixUncentered()}},{key:"getViewProjectionMatrix",value:function(){return this.overridedViewProjectionMatrix||this.jitteredViewProjectionMatrix||this.viewport.getViewProjectionMatrix()}},{key:"getZoom",value:function(){return this.viewport.getZoom()}},{key:"getZoomScale",value:function(){return this.viewport.getZoomScale()}},{key:"getCenter",value:function(){var n=this.viewport.getCenter(),r=Fe(n,2),i=r[0],a=r[1];return[i,a]}},{key:"getFocalDistance",value:function(){return this.viewport.getFocalDistance()}},{key:"getCameraPosition",value:function(){return this.cameraPosition}},{key:"projectFlat",value:function(n,r){return this.viewport.projectFlat(n,r)}},{key:"setViewProjectionMatrix",value:function(n){this.overridedViewProjectionMatrix=n}},{key:"jitterProjectionMatrix",value:function(n,r){var i=p0(Ur(),[n,r,0]);this.jitteredProjectionMatrix=vr(Ur(),i,this.viewport.getProjectionMatrix()),this.jitteredViewProjectionMatrix=vr(Ur(),this.jitteredProjectionMatrix,this.viewport.getViewMatrix())}},{key:"clearJitterProjectionMatrix",value:function(){this.jitteredProjectionMatrix=void 0,this.jitteredViewProjectionMatrix=void 0}}]),e}());var xs=function(e){return e.TOPRIGHT="topright",e.TOPLEFT="topleft",e.BOTTOMRIGHT="bottomright",e.BOTTOMLEFT="bottomleft",e.TOPCENTER="topcenter",e.BOTTOMCENTER="bottomcenter",e.LEFTCENTER="leftcenter",e.RIGHTCENTER="rightcenter",e.LEFTTOP="lefttop",e.RIGHTTOP="righttop",e.LEFTBOTTOM="leftbottom",e.RIGHTBOTTOM="rightbottom",e}({}),tf,nf;function U3(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=z3(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function z3(e,t){if(e){if(typeof e=="string")return rf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rf(e,t)}}function rf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $3={topleft:"column",topright:"column",bottomright:"column",bottomleft:"column",leftcenter:"column",rightcenter:"column",topcenter:"row",bottomcenter:"row",lefttop:"row",righttop:"row",leftbottom:"row",rightbottom:"row"};tf=Ne(),tf(nf=function(){function e(){ce(this,e),S(this,"container",void 0),S(this,"controlCorners",void 0),S(this,"controlContainer",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"controls",[]),S(this,"unAddControls",[])}return le(e,[{key:"init",value:function(n,r){this.container=n.container,this.scene=r,this.mapsService=r.get(se.IMapService),this.initControlPos()}},{key:"addControl",value:function(n,r){var i=r.get(se.IMapService);i.map?(n.addTo(this.scene),this.controls.push(n)):this.unAddControls.push(n)}},{key:"getControlByName",value:function(n){return this.controls.find(function(r){return r.controlOption.name===n})}},{key:"removeControl",value:function(n){var r=this.controls.indexOf(n);return r>-1&&this.controls.splice(r,1),n.remove(),this}},{key:"addControls",value:function(){var n=this;this.unAddControls.forEach(function(r){r.addTo(n.scene),n.controls.push(r)}),this.unAddControls=[]}},{key:"destroy",value:function(){var n=U3(this.controls),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;i.remove()}}catch(a){n.e(a)}finally{n.f()}this.controls=[],this.clearControlPos()}},{key:"initControlPos",value:function(){var n=this.controlCorners={},r="l7-",i=this.controlContainer=er("div",r+"control-container",this.container);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=u.map(function(l){return r+l}).join(" ");n[u.filter(function(l){return!["row","column"].includes(l)}).join("")]=er("div",s,i)}function o(u){var s=u.replace(/^(top|bottom|left|right|center)/,"$1-").split("-");return[].concat(re(s),[$3[u]])}Object.values(xs).forEach(function(u){a(o(u))}),this.checkCornerOverlap()}},{key:"clearControlPos",value:function(){for(var n in this.controlCorners)this.controlCorners[n]&&no(this.controlCorners[n]);this.controlContainer&&no(this.controlContainer)}},{key:"checkCornerOverlap",value:function(){var n=this,r=window.MutationObserver;if(r)for(var i=function(){var s=o[a],l=s.match(/^(top|bottom)(left|right)$/);if(l){var c=Fe(l,3),f=c[1],h=c[2],d=n.controlCorners["".concat(f).concat(h)],v=new r(function(p){var g=Fe(p,1),m=g[0].target;d&&(d.style[f]=m.clientHeight+"px")});v.observe(n.controlCorners["".concat(h).concat(f)],{childList:!0,attributes:!0})}},a=0,o=Object.keys(this.controlCorners);a<o.length;a++)i()}}]),e}());var af,of;af=Ne(),af(of=function(){function e(){ce(this,e),S(this,"container",void 0),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"markers",[]),S(this,"markerLayers",[]),S(this,"unAddMarkers",[]),S(this,"unAddMarkerLayers",[])}return le(e,[{key:"addMarkerLayer",value:function(n){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markerLayers.push(n),n.addTo(this.scene)):this.unAddMarkerLayers.push(n)}},{key:"removeMarkerLayer",value:function(n){n.destroy(),this.markerLayers.indexOf(n);var r=this.markerLayers.indexOf(n);r>-1&&this.markerLayers.splice(r,1)}},{key:"addMarker",value:function(n){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markers.push(n),n.addTo(this.scene)):this.unAddMarkers.push(n)}},{key:"addMarkers",value:function(){var n=this;this.unAddMarkers.forEach(function(r){r.addTo(n.scene),n.markers.push(r)}),this.unAddMarkers=[]}},{key:"addMarkerLayers",value:function(){var n=this;this.unAddMarkerLayers.forEach(function(r){n.markerLayers.push(r),r.addTo(n.scene)}),this.unAddMarkers=[]}},{key:"removeMarker",value:function(n){n.remove(),this.markers.indexOf(n);var r=this.markers.indexOf(n);r>-1&&this.markers.splice(r,1)}},{key:"removeAllMarkers",value:function(){this.destroy()}},{key:"init",value:function(n){this.scene=n,this.mapsService=n.get(se.IMapService)}},{key:"destroy",value:function(){this.markers.forEach(function(n){n.remove()}),this.markers=[],this.markerLayers.forEach(function(n){n.destroy()}),this.markerLayers=[]}},{key:"removeMakerLayerMarker",value:function(n){n.destroy()}}]),e}());var uf,sf;uf=Ne(),uf(sf=function(){function e(){ce(this,e),S(this,"scene",void 0),S(this,"mapsService",void 0),S(this,"popups",[]),S(this,"unAddPopups",[])}return le(e,[{key:"isMarkerReady",get:function(){return this.mapsService.map&&this.mapsService.getMarkerContainer()}},{key:"removePopup",value:function(n){n!=null&&n.isOpen()&&n.remove();var r=this.popups.indexOf(n);r>-1&&this.popups.splice(r,1);var i=this.unAddPopups.indexOf(n);i>-1&&this.unAddPopups.splice(i,1)}},{key:"destroy",value:function(){this.popups.forEach(function(n){return n.remove()})}},{key:"addPopup",value:function(n){var r=this;n&&n.getOptions().autoClose&&[].concat(re(this.popups),re(this.unAddPopups)).forEach(function(i){i.getOptions().autoClose&&r.removePopup(i)}),this.isMarkerReady?(n.addTo(this.scene),this.popups.push(n)):this.unAddPopups.push(n),n.on("close",function(){r.removePopup(n)})}},{key:"initPopup",value:function(){var n=this;this.unAddPopups.length&&this.unAddPopups.forEach(function(r){n.addPopup(r),n.unAddPopups=[]})}},{key:"init",value:function(n){this.scene=n,this.mapsService=n.get(se.IMapService)}}]),e}());var Xn=function(e){return e.normal="normal",e.additive="additive",e.subtractive="subtractive",e.min="min",e.max="max",e.none="none",e}({}),dr=function(e){return e.MULTIPLE="MULTIPLE",e.SINGLE="SINGLE",e}({}),Uo=function(e){return e.AND="and",e.OR="or",e}({}),bt=function(e){return e.INIT="init",e.UPDATE="update",e}({}),V3={MapToken:"您正在使用 Demo 测试 Token, 生产环境务必自行注册 Token 确保服务稳定 高德地图申请地址 https://lbs.amap.com/api/javascript-api/guide/abc/prepare  Mapbox地图申请地址 https://docs.mapbox.com/help/glossary/access-token/",SDK:"请确认引入了mapbox-gl api且在L7之前引入"},lf,cf,j3=nt.merge,H3={id:"map",logoPosition:"bottomleft",logoVisible:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1,pickBufferScale:1,fitBoundsOptions:{animate:!1}},G3={colors:["rgb(103,0,31)","rgb(178,24,43)","rgb(214,96,77)","rgb(244,165,130)","rgb(253,219,199)","rgb(247,247,247)","rgb(209,229,240)","rgb(146,197,222)","rgb(67,147,195)","rgb(33,102,172)","rgb(5,48,97)"],size:10,shape:"circle",scales:{},shape2d:["circle","triangle","square","pentagon","hexagon","octogon","hexagram","rhombus","vesica"],shape3d:["cylinder","triangleColumn","hexagonColumn","squareColumn"],minZoom:-1,maxZoom:24,visible:!0,autoFit:!1,pickingBuffer:0,enablePropagation:!1,zIndex:0,blend:"normal",maskLayers:[],enableMask:!0,maskOperation:Uo.AND,pickedFeatureID:-1,enableMultiPassRenderer:!1,enablePicking:!0,active:!1,activeColor:"#2f54eb",enableHighlight:!1,enableSelect:!1,highlightColor:"#2f54eb",activeMix:0,selectColor:"blue",selectMix:0,enableTAA:!1,jitterScale:1,enableLighting:!1,animateOption:{enable:!1,interval:.2,duration:4,trailLength:.15},forward:!0},W3=(lf=Ne(),lf(cf=function(){function e(){ce(this,e),S(this,"sceneConfigCache",{}),S(this,"layerConfigCache",{}),S(this,"layerAttributeConfigCache",{})}return le(e,[{key:"getSceneConfig",value:function(n){return this.sceneConfigCache[n]}},{key:"getSceneWarninfo",value:function(n){return V3[n]}},{key:"setSceneConfig",value:function(n,r){this.sceneConfigCache[n]=$($({},H3),r)}},{key:"getLayerConfig",value:function(n){return this.layerConfigCache[n]}},{key:"setLayerConfig",value:function(n,r,i){this.layerConfigCache[r]=$({},j3({},this.sceneConfigCache[n],G3,i))}},{key:"getAttributeConfig",value:function(n){return this.layerAttributeConfigCache[n]}},{key:"setAttributeConfig",value:function(n,r){this.layerAttributeConfigCache[n]=$($({},this.layerAttributeConfigCache[n]),r)}},{key:"clean",value:function(){this.sceneConfigCache={},this.layerConfigCache={}}}]),e}())||cf);function je(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function ze(e,t,n,r,i){var a={};return Object.keys(r).forEach(function(o){a[o]=r[o]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(o,u){return u(e,t,o)||o},a),i&&a.initializer!==void 0&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0),a.initializer===void 0&&(Object.defineProperty(e,t,a),a=null),a}var Cu=Math.PI/180,Y3=512,ff=4003e4;function hf(e){var t=e.latitude,n=t===void 0?0:t,r=e.zoom,i=r===void 0?0:r,a=e.scale,o=e.highPrecision,u=o===void 0?!1:o,s=e.flipY,l=s===void 0?!1:s;a=a!==void 0?a:Math.pow(2,i);var c={},f=Y3*a,h=Math.cos(n*Cu),d=f/360,v=d/h,p=f/ff/h;if(c.pixelsPerMeter=[p,-p,p],c.metersPerPixel=[1/p,-1/p,1/p],c.pixelsPerDegree=[d,-v,p],c.degreesPerPixel=[1/d,-1/v,1/p],u){var g=Cu*Math.tan(n*Cu)/h,m=d*g/2,_=f/ff*g,y=_/v*p;c.pixelsPerDegree2=[0,-m,_],c.pixelsPerMeter2=[y,0,y],l&&(c.pixelsPerDegree2[1]=-c.pixelsPerDegree2[1],c.pixelsPerMeter2[1]=-c.pixelsPerMeter2[1])}return l&&(c.pixelsPerMeter[1]=-c.pixelsPerMeter[1],c.metersPerPixel[1]=-c.metersPerPixel[1],c.pixelsPerDegree[1]=-c.pixelsPerDegree[1],c.degreesPerPixel[1]=-c.degreesPerPixel[1]),c}var Fa=function(e){return e[e.LNGLAT=1]="LNGLAT",e[e.LNGLAT_OFFSET=2]="LNGLAT_OFFSET",e[e.VECTOR_TILE=3]="VECTOR_TILE",e[e.IDENTITY=4]="IDENTITY",e[e.P20=5]="P20",e[e.P20_OFFSET=6]="P20_OFFSET",e[e.METER_OFFSET=7]="METER_OFFSET",e[e.P20_2=8]="P20_2",e}({}),sr={CoordinateSystem:"u_CoordinateSystem",ViewportCenter:"u_ViewportCenter",ViewportCenterProjection:"u_ViewportCenterProjection",PixelsPerDegree:"u_PixelsPerDegree",PixelsPerDegree2:"u_PixelsPerDegree2",PixelsPerMeter:"u_PixelsPerMeter",Mvp:"u_Mvp"},df,vf,pf,wu,gf,X3=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];df=Ne(),vf=Ge(se.ICameraService),df(pf=(wu=function(){function e(){ce(this,e),S(this,"needRefresh",!0),je(this,"cameraService",gf,this),S(this,"coordinateSystem",void 0),S(this,"viewportCenter",void 0),S(this,"viewportCenterProjection",void 0),S(this,"pixelsPerDegree",void 0),S(this,"pixelsPerDegree2",void 0),S(this,"pixelsPerMeter",void 0)}return le(e,[{key:"refresh",value:function(n){var r=this.cameraService.getZoom(),i=this.cameraService.getZoomScale(),a=n||this.cameraService.getCenter(),o=hf({latitude:a[1],zoom:r}),u=o.pixelsPerMeter,s=o.pixelsPerDegree;this.viewportCenter=a,this.viewportCenterProjection=[0,0,0,0],this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=[0,0,0],this.coordinateSystem===Fa.LNGLAT||this.coordinateSystem===Fa.P20?this.cameraService.setViewProjectionMatrix(void 0):this.coordinateSystem===Fa.LNGLAT_OFFSET?this.calculateLnglatOffset(a,r):this.coordinateSystem===Fa.P20_OFFSET&&this.calculateLnglatOffset(a,r,i,!0),this.needRefresh=!1}},{key:"getCoordinateSystem",value:function(){return this.coordinateSystem}},{key:"setCoordinateSystem",value:function(n){this.coordinateSystem=n}},{key:"getViewportCenter",value:function(){return this.viewportCenter}},{key:"getViewportCenterProjection",value:function(){return this.viewportCenterProjection}},{key:"getPixelsPerDegree",value:function(){return this.pixelsPerDegree}},{key:"getPixelsPerDegree2",value:function(){return this.pixelsPerDegree2}},{key:"getPixelsPerMeter",value:function(){return this.pixelsPerMeter}},{key:"calculateLnglatOffset",value:function(n,r,i,a){var o=hf({latitude:n[1],zoom:r,scale:i,flipY:a,highPrecision:!0}),u=o.pixelsPerMeter,s=o.pixelsPerDegree,l=o.pixelsPerDegree2,c=this.cameraService.getViewMatrix(),f=this.cameraService.getProjectionMatrix(),h=vr([],f,c),d=this.cameraService.projectFlat([Math.fround(n[0]),Math.fround(n[1])],Math.pow(2,r));this.viewportCenterProjection=S0([],[d[0],d[1],0,1],h),c=this.cameraService.getViewMatrixUncentered()||c,h=vr([],f,c),h=vr([],h,X3),this.cameraService.setViewProjectionMatrix(h),this.pixelsPerMeter=u,this.pixelsPerDegree=s,this.pixelsPerDegree2=l}}]),e}(),gf=ze(wu.prototype,"cameraService",[vf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wu));var mf,yf;function Z3(e){var t=q3();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function q3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}mf=Ne(),mf(yf=function(e){Te(n,e);var t=Z3(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"renderMap",new Map),S(P(r),"enable",!1),S(P(r),"renderEnable",!1),S(P(r),"cacheLogs",{}),r}return le(n,[{key:"setEnable",value:function(i){this.enable=!!i}},{key:"log",value:function(i,a){var o=this;if(this.enable){var u=i.split("."),s=null;u.forEach(function(l,c){s!==null?(s[l]||(s[l]={}),c!==u.length-1&&(s=s[l])):(o.cacheLogs[l]||(o.cacheLogs[l]={}),c!==u.length-1&&(s=o.cacheLogs[l])),c===u.length-1&&(s[l]=$($({time:Date.now()},s[l]),a))})}}},{key:"getLog",value:function(i){var a=this;switch(In(i)){case"string":return this.cacheLogs[i];case"object":return i.map(function(o){return a.cacheLogs[o]}).filter(function(o){return o!==void 0});case"undefined":return this.cacheLogs}}},{key:"removeLog",value:function(i){delete this.cacheLogs[i]}},{key:"generateRenderUid",value:function(){return this.renderEnable?U_():""}},{key:"renderDebug",value:function(i){this.renderEnable=i}},{key:"renderStart",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i)||{};this.renderMap.set(i,$($({},a),{},{renderUid:i,renderStart:Date.now()}))}}},{key:"renderEnd",value:function(i){if(!(!this.renderEnable||!this.enable)){var a=this.renderMap.get(i);if(a){var o=a.renderStart,u=Date.now();this.emit("renderEnd",$($({},a),{},{renderEnd:u,renderDuration:u-o})),this.renderMap.delete(i)}}}},{key:"destroy",value:function(){this.cacheLogs=null,this.renderMap.clear()}}]),n}(Kt.EventEmitter));var Ig={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var a=["","webkit","Moz","MS","ms","o"],o=n.createElement("div"),u="function",s=Math.round,l=Math.abs,c=Date.now;function f(A,E,F){return setTimeout(y(A,F),E)}function h(A,E,F){return Array.isArray(A)?(d(A,F[E],F),!0):!1}function d(A,E,F){var q;if(A)if(A.forEach)A.forEach(E,F);else if(A.length!==i)for(q=0;q<A.length;)E.call(F,A[q],q,A),q++;else for(q in A)A.hasOwnProperty(q)&&E.call(F,A[q],q,A)}function v(A,E,F){var q="DEPRECATED METHOD: "+E+`
`+F+` AT 
`;return function(){var ve=new Error("get-stack-trace"),we=ve&&ve.stack?ve.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Xe=t.console&&(t.console.warn||t.console.log);return Xe&&Xe.call(t.console,q,we),A.apply(this,arguments)}}var p;typeof Object.assign!="function"?p=function(E){if(E===i||E===null)throw new TypeError("Cannot convert undefined or null to object");for(var F=Object(E),q=1;q<arguments.length;q++){var ve=arguments[q];if(ve!==i&&ve!==null)for(var we in ve)ve.hasOwnProperty(we)&&(F[we]=ve[we])}return F}:p=Object.assign;var g=v(function(E,F,q){for(var ve=Object.keys(F),we=0;we<ve.length;)(!q||q&&E[ve[we]]===i)&&(E[ve[we]]=F[ve[we]]),we++;return E},"extend","Use `assign`."),m=v(function(E,F){return g(E,F,!0)},"merge","Use `assign`.");function _(A,E,F){var q=E.prototype,ve;ve=A.prototype=Object.create(q),ve.constructor=A,ve._super=q,F&&p(ve,F)}function y(A,E){return function(){return A.apply(E,arguments)}}function x(A,E){return typeof A==u?A.apply(E&&E[0]||i,E):A}function b(A,E){return A===i?E:A}function M(A,E,F){d(I(E),function(q){A.addEventListener(q,F,!1)})}function C(A,E,F){d(I(E),function(q){A.removeEventListener(q,F,!1)})}function L(A,E){for(;A;){if(A==E)return!0;A=A.parentNode}return!1}function N(A,E){return A.indexOf(E)>-1}function I(A){return A.trim().split(/\s+/g)}function T(A,E,F){if(A.indexOf&&!F)return A.indexOf(E);for(var q=0;q<A.length;){if(F&&A[q][F]==E||!F&&A[q]===E)return q;q++}return-1}function k(A){return Array.prototype.slice.call(A,0)}function O(A,E,F){for(var q=[],ve=[],we=0;we<A.length;){var Xe=E?A[we][E]:A[we];T(ve,Xe)<0&&q.push(A[we]),ve[we]=Xe,we++}return F&&(E?q=q.sort(function(Tt,Bt){return Tt[E]>Bt[E]}):q=q.sort()),q}function z(A,E){for(var F,q,ve=E[0].toUpperCase()+E.slice(1),we=0;we<a.length;){if(F=a[we],q=F?F+ve:E,q in A)return q;we++}return i}var ne=1;function de(){return ne++}function pe(A){var E=A.ownerDocument||A;return E.defaultView||E.parentWindow||t}var ye=/mobile|tablet|ip(ad|hone|od)|android/i,W="ontouchstart"in t,G=z(t,"PointerEvent")!==i,J=W&&ye.test(navigator.userAgent),j="touch",K="pen",X="mouse",te="kinect",_e=25,ge=1,He=2,H=4,fe=8,Ae=1,ie=2,Ye=4,De=8,qe=16,Be=ie|Ye,Pe=De|qe,ut=Be|Pe,vt=["x","y"],ht=["clientX","clientY"];function tt(A,E){var F=this;this.manager=A,this.callback=E,this.element=A.element,this.target=A.options.inputTarget,this.domHandler=function(q){x(A.options.enable,[A])&&F.handler(q)},this.init()}tt.prototype={handler:function(){},init:function(){this.evEl&&M(this.element,this.evEl,this.domHandler),this.evTarget&&M(this.target,this.evTarget,this.domHandler),this.evWin&&M(pe(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(pe(this.element),this.evWin,this.domHandler)}};function Ot(A){var E,F=A.options.inputClass;return F?E=F:G?E=Ve:J?E=xa:W?E=Zo:E=Ue,new E(A,fn)}function fn(A,E,F){var q=F.pointers.length,ve=F.changedPointers.length,we=E&ge&&q-ve===0,Xe=E&(H|fe)&&q-ve===0;F.isFirst=!!we,F.isFinal=!!Xe,we&&(A.session={}),F.eventType=E,Y(A,F),A.emit("hammer.input",F),A.recognize(F),A.session.prevInput=F}function Y(A,E){var F=A.session,q=E.pointers,ve=q.length;F.firstInput||(F.firstInput=me(E)),ve>1&&!F.firstMultiple?F.firstMultiple=me(E):ve===1&&(F.firstMultiple=!1);var we=F.firstInput,Xe=F.firstMultiple,At=Xe?Xe.center:we.center,Tt=E.center=xe(q);E.timeStamp=c(),E.deltaTime=E.timeStamp-we.timeStamp,E.angle=B(At,Tt),E.distance=D(At,Tt),ae(F,E),E.offsetDirection=Oe(E.deltaX,E.deltaY);var Bt=Qe(E.deltaTime,E.deltaX,E.deltaY);E.overallVelocityX=Bt.x,E.overallVelocityY=Bt.y,E.overallVelocity=l(Bt.x)>l(Bt.y)?Bt.x:Bt.y,E.scale=Xe?oe(Xe.pointers,q):1,E.rotation=Xe?Z(Xe.pointers,q):0,E.maxPointers=F.prevInput?E.pointers.length>F.prevInput.maxPointers?E.pointers.length:F.prevInput.maxPointers:E.pointers.length,he(F,E);var dn=A.element;L(E.srcEvent.target,dn)&&(dn=E.srcEvent.target),E.target=dn}function ae(A,E){var F=E.center,q=A.offsetDelta||{},ve=A.prevDelta||{},we=A.prevInput||{};(E.eventType===ge||we.eventType===H)&&(ve=A.prevDelta={x:we.deltaX||0,y:we.deltaY||0},q=A.offsetDelta={x:F.x,y:F.y}),E.deltaX=ve.x+(F.x-q.x),E.deltaY=ve.y+(F.y-q.y)}function he(A,E){var F=A.lastInterval||E,q=E.timeStamp-F.timeStamp,ve,we,Xe,At;if(E.eventType!=fe&&(q>_e||F.velocity===i)){var Tt=E.deltaX-F.deltaX,Bt=E.deltaY-F.deltaY,dn=Qe(q,Tt,Bt);we=dn.x,Xe=dn.y,ve=l(dn.x)>l(dn.y)?dn.x:dn.y,At=Oe(Tt,Bt),A.lastInterval=E}else ve=F.velocity,we=F.velocityX,Xe=F.velocityY,At=F.direction;E.velocity=ve,E.velocityX=we,E.velocityY=Xe,E.direction=At}function me(A){for(var E=[],F=0;F<A.pointers.length;)E[F]={clientX:s(A.pointers[F].clientX),clientY:s(A.pointers[F].clientY)},F++;return{timeStamp:c(),pointers:E,center:xe(E),deltaX:A.deltaX,deltaY:A.deltaY}}function xe(A){var E=A.length;if(E===1)return{x:s(A[0].clientX),y:s(A[0].clientY)};for(var F=0,q=0,ve=0;ve<E;)F+=A[ve].clientX,q+=A[ve].clientY,ve++;return{x:s(F/E),y:s(q/E)}}function Qe(A,E,F){return{x:E/A||0,y:F/A||0}}function Oe(A,E){return A===E?Ae:l(A)>=l(E)?A<0?ie:Ye:E<0?De:qe}function D(A,E,F){F||(F=vt);var q=E[F[0]]-A[F[0]],ve=E[F[1]]-A[F[1]];return Math.sqrt(q*q+ve*ve)}function B(A,E,F){F||(F=vt);var q=E[F[0]]-A[F[0]],ve=E[F[1]]-A[F[1]];return Math.atan2(ve,q)*180/Math.PI}function Z(A,E){return B(E[1],E[0],ht)+B(A[1],A[0],ht)}function oe(A,E){return D(E[0],E[1],ht)/D(A[0],A[1],ht)}var Ee={mousedown:ge,mousemove:He,mouseup:H},it="mousedown",pt="mousemove mouseup";function Ue(){this.evEl=it,this.evWin=pt,this.pressed=!1,tt.apply(this,arguments)}_(Ue,tt,{handler:function(E){var F=Ee[E.type];F&ge&&E.button===0&&(this.pressed=!0),F&He&&E.which!==1&&(F=H),this.pressed&&(F&H&&(this.pressed=!1),this.callback(this.manager,F,{pointers:[E],changedPointers:[E],pointerType:X,srcEvent:E}))}});var Se={pointerdown:ge,pointermove:He,pointerup:H,pointercancel:fe,pointerout:fe},Ie={2:j,3:K,4:X,5:te},ke="pointerdown",Le="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(ke="MSPointerDown",Le="MSPointerMove MSPointerUp MSPointerCancel");function Ve(){this.evEl=ke,this.evWin=Le,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}_(Ve,tt,{handler:function(E){var F=this.store,q=!1,ve=E.type.toLowerCase().replace("ms",""),we=Se[ve],Xe=Ie[E.pointerType]||E.pointerType,At=Xe==j,Tt=T(F,E.pointerId,"pointerId");we&ge&&(E.button===0||At)?Tt<0&&(F.push(E),Tt=F.length-1):we&(H|fe)&&(q=!0),!(Tt<0)&&(F[Tt]=E,this.callback(this.manager,we,{pointers:F,changedPointers:[E],pointerType:Xe,srcEvent:E}),q&&F.splice(Tt,1))}});var at={touchstart:ge,touchmove:He,touchend:H,touchcancel:fe},lt="touchstart",Yt="touchstart touchmove touchend touchcancel";function ui(){this.evTarget=lt,this.evWin=Yt,this.started=!1,tt.apply(this,arguments)}_(ui,tt,{handler:function(E){var F=at[E.type];if(F===ge&&(this.started=!0),!!this.started){var q=Yo.call(this,E,F);F&(H|fe)&&q[0].length-q[1].length===0&&(this.started=!1),this.callback(this.manager,F,{pointers:q[0],changedPointers:q[1],pointerType:j,srcEvent:E})}}});function Yo(A,E){var F=k(A.touches),q=k(A.changedTouches);return E&(H|fe)&&(F=O(F.concat(q),"identifier",!0)),[F,q]}var Xo={touchstart:ge,touchmove:He,touchend:H,touchcancel:fe},Qm="touchstart touchmove touchend touchcancel";function xa(){this.evTarget=Qm,this.targetIds={},tt.apply(this,arguments)}_(xa,tt,{handler:function(E){var F=Xo[E.type],q=Jm.call(this,E,F);q&&this.callback(this.manager,F,{pointers:q[0],changedPointers:q[1],pointerType:j,srcEvent:E})}});function Jm(A,E){var F=k(A.touches),q=this.targetIds;if(E&(ge|He)&&F.length===1)return q[F[0].identifier]=!0,[F,F];var ve,we,Xe=k(A.changedTouches),At=[],Tt=this.target;if(we=F.filter(function(Bt){return L(Bt.target,Tt)}),E===ge)for(ve=0;ve<we.length;)q[we[ve].identifier]=!0,ve++;for(ve=0;ve<Xe.length;)q[Xe[ve].identifier]&&At.push(Xe[ve]),E&(H|fe)&&delete q[Xe[ve].identifier],ve++;if(At.length)return[O(we.concat(At),"identifier",!0),At]}var Km=2500,zl=25;function Zo(){tt.apply(this,arguments);var A=y(this.handler,this);this.touch=new xa(this.manager,A),this.mouse=new Ue(this.manager,A),this.primaryTouch=null,this.lastTouches=[]}_(Zo,tt,{handler:function(E,F,q){var ve=q.pointerType==j,we=q.pointerType==X;if(!(we&&q.sourceCapabilities&&q.sourceCapabilities.firesTouchEvents)){if(ve)ey.call(this,F,q);else if(we&&ty.call(this,q))return;this.callback(E,F,q)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function ey(A,E){A&ge?(this.primaryTouch=E.changedPointers[0].identifier,$l.call(this,E)):A&(H|fe)&&$l.call(this,E)}function $l(A){var E=A.changedPointers[0];if(E.identifier===this.primaryTouch){var F={x:E.clientX,y:E.clientY};this.lastTouches.push(F);var q=this.lastTouches,ve=function(){var we=q.indexOf(F);we>-1&&q.splice(we,1)};setTimeout(ve,Km)}}function ty(A){for(var E=A.srcEvent.clientX,F=A.srcEvent.clientY,q=0;q<this.lastTouches.length;q++){var ve=this.lastTouches[q],we=Math.abs(E-ve.x),Xe=Math.abs(F-ve.y);if(we<=zl&&Xe<=zl)return!0}return!1}var Vl=z(o.style,"touchAction"),jl=Vl!==i,Hl="compute",Gl="auto",qo="manipulation",or="none",si="pan-x",li="pan-y",ba=ry();function Qo(A,E){this.manager=A,this.set(E)}Qo.prototype={set:function(A){A==Hl&&(A=this.compute()),jl&&this.manager.element.style&&ba[A]&&(this.manager.element.style[Vl]=A),this.actions=A.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var A=[];return d(this.manager.recognizers,function(E){x(E.options.enable,[E])&&(A=A.concat(E.getTouchAction()))}),ny(A.join(" "))},preventDefaults:function(A){var E=A.srcEvent,F=A.offsetDirection;if(this.manager.session.prevented){E.preventDefault();return}var q=this.actions,ve=N(q,or)&&!ba[or],we=N(q,li)&&!ba[li],Xe=N(q,si)&&!ba[si];if(ve){var At=A.pointers.length===1,Tt=A.distance<2,Bt=A.deltaTime<250;if(At&&Tt&&Bt)return}if(!(Xe&&we)&&(ve||we&&F&Be||Xe&&F&Pe))return this.preventSrc(E)},preventSrc:function(A){this.manager.session.prevented=!0,A.preventDefault()}};function ny(A){if(N(A,or))return or;var E=N(A,si),F=N(A,li);return E&&F?or:E||F?E?si:li:N(A,qo)?qo:Gl}function ry(){if(!jl)return!1;var A={},E=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(F){A[F]=E?t.CSS.supports("touch-action",F):!0}),A}var Sa=1,en=2,Cr=4,Un=8,An=Un,ci=16,hn=32;function En(A){this.options=p({},this.defaults,A||{}),this.id=de(),this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=Sa,this.simultaneous={},this.requireFail=[]}En.prototype={defaults:{},set:function(A){return p(this.options,A),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(A){if(h(A,"recognizeWith",this))return this;var E=this.simultaneous;return A=Aa(A,this),E[A.id]||(E[A.id]=A,A.recognizeWith(this)),this},dropRecognizeWith:function(A){return h(A,"dropRecognizeWith",this)?this:(A=Aa(A,this),delete this.simultaneous[A.id],this)},requireFailure:function(A){if(h(A,"requireFailure",this))return this;var E=this.requireFail;return A=Aa(A,this),T(E,A)===-1&&(E.push(A),A.requireFailure(this)),this},dropRequireFailure:function(A){if(h(A,"dropRequireFailure",this))return this;A=Aa(A,this);var E=T(this.requireFail,A);return E>-1&&this.requireFail.splice(E,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(A){return!!this.simultaneous[A.id]},emit:function(A){var E=this,F=this.state;function q(ve){E.manager.emit(ve,A)}F<Un&&q(E.options.event+Wl(F)),q(E.options.event),A.additionalEvent&&q(A.additionalEvent),F>=Un&&q(E.options.event+Wl(F))},tryEmit:function(A){if(this.canEmit())return this.emit(A);this.state=hn},canEmit:function(){for(var A=0;A<this.requireFail.length;){if(!(this.requireFail[A].state&(hn|Sa)))return!1;A++}return!0},recognize:function(A){var E=p({},A);if(!x(this.options.enable,[this,E])){this.reset(),this.state=hn;return}this.state&(An|ci|hn)&&(this.state=Sa),this.state=this.process(E),this.state&(en|Cr|Un|ci)&&this.tryEmit(E)},process:function(A){},getTouchAction:function(){},reset:function(){}};function Wl(A){return A&ci?"cancel":A&Un?"end":A&Cr?"move":A&en?"start":""}function Yl(A){return A==qe?"down":A==De?"up":A==ie?"left":A==Ye?"right":""}function Aa(A,E){var F=E.manager;return F?F.get(A):A}function sn(){En.apply(this,arguments)}_(sn,En,{defaults:{pointers:1},attrTest:function(A){var E=this.options.pointers;return E===0||A.pointers.length===E},process:function(A){var E=this.state,F=A.eventType,q=E&(en|Cr),ve=this.attrTest(A);return q&&(F&fe||!ve)?E|ci:q||ve?F&H?E|Un:E&en?E|Cr:en:hn}});function Ea(){sn.apply(this,arguments),this.pX=null,this.pY=null}_(Ea,sn,{defaults:{event:"pan",threshold:10,pointers:1,direction:ut},getTouchAction:function(){var A=this.options.direction,E=[];return A&Be&&E.push(li),A&Pe&&E.push(si),E},directionTest:function(A){var E=this.options,F=!0,q=A.distance,ve=A.direction,we=A.deltaX,Xe=A.deltaY;return ve&E.direction||(E.direction&Be?(ve=we===0?Ae:we<0?ie:Ye,F=we!=this.pX,q=Math.abs(A.deltaX)):(ve=Xe===0?Ae:Xe<0?De:qe,F=Xe!=this.pY,q=Math.abs(A.deltaY))),A.direction=ve,F&&q>E.threshold&&ve&E.direction},attrTest:function(A){return sn.prototype.attrTest.call(this,A)&&(this.state&en||!(this.state&en)&&this.directionTest(A))},emit:function(A){this.pX=A.deltaX,this.pY=A.deltaY;var E=Yl(A.direction);E&&(A.additionalEvent=this.options.event+E),this._super.emit.call(this,A)}});function Jo(){sn.apply(this,arguments)}_(Jo,sn,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[or]},attrTest:function(A){return this._super.attrTest.call(this,A)&&(Math.abs(A.scale-1)>this.options.threshold||this.state&en)},emit:function(A){if(A.scale!==1){var E=A.scale<1?"in":"out";A.additionalEvent=this.options.event+E}this._super.emit.call(this,A)}});function Ko(){En.apply(this,arguments),this._timer=null,this._input=null}_(Ko,En,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Gl]},process:function(A){var E=this.options,F=A.pointers.length===E.pointers,q=A.distance<E.threshold,ve=A.deltaTime>E.time;if(this._input=A,!q||!F||A.eventType&(H|fe)&&!ve)this.reset();else if(A.eventType&ge)this.reset(),this._timer=f(function(){this.state=An,this.tryEmit()},E.time,this);else if(A.eventType&H)return An;return hn},reset:function(){clearTimeout(this._timer)},emit:function(A){this.state===An&&(A&&A.eventType&H?this.manager.emit(this.options.event+"up",A):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function eu(){sn.apply(this,arguments)}_(eu,sn,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[or]},attrTest:function(A){return this._super.attrTest.call(this,A)&&(Math.abs(A.rotation)>this.options.threshold||this.state&en)}});function tu(){sn.apply(this,arguments)}_(tu,sn,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Be|Pe,pointers:1},getTouchAction:function(){return Ea.prototype.getTouchAction.call(this)},attrTest:function(A){var E=this.options.direction,F;return E&(Be|Pe)?F=A.overallVelocity:E&Be?F=A.overallVelocityX:E&Pe&&(F=A.overallVelocityY),this._super.attrTest.call(this,A)&&E&A.offsetDirection&&A.distance>this.options.threshold&&A.maxPointers==this.options.pointers&&l(F)>this.options.velocity&&A.eventType&H},emit:function(A){var E=Yl(A.offsetDirection);E&&this.manager.emit(this.options.event+E,A),this.manager.emit(this.options.event,A)}});function Ca(){En.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}_(Ca,En,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[qo]},process:function(A){var E=this.options,F=A.pointers.length===E.pointers,q=A.distance<E.threshold,ve=A.deltaTime<E.time;if(this.reset(),A.eventType&ge&&this.count===0)return this.failTimeout();if(q&&ve&&F){if(A.eventType!=H)return this.failTimeout();var we=this.pTime?A.timeStamp-this.pTime<E.interval:!0,Xe=!this.pCenter||D(this.pCenter,A.center)<E.posThreshold;this.pTime=A.timeStamp,this.pCenter=A.center,!Xe||!we?this.count=1:this.count+=1,this._input=A;var At=this.count%E.taps;if(At===0)return this.hasRequireFailures()?(this._timer=f(function(){this.state=An,this.tryEmit()},E.interval,this),en):An}return hn},failTimeout:function(){return this._timer=f(function(){this.state=hn},this.options.interval,this),hn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==An&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function Cn(A,E){return E=E||{},E.recognizers=b(E.recognizers,Cn.defaults.preset),new nu(A,E)}Cn.VERSION="2.0.7",Cn.defaults={domEvents:!1,touchAction:Hl,enable:!0,inputTarget:null,inputClass:null,preset:[[eu,{enable:!1}],[Jo,{enable:!1},["rotate"]],[tu,{direction:Be}],[Ea,{direction:Be},["swipe"]],[Ca],[Ca,{event:"doubletap",taps:2},["tap"]],[Ko]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var iy=1,Xl=2;function nu(A,E){this.options=p({},Cn.defaults,E||{}),this.options.inputTarget=this.options.inputTarget||A,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=A,this.input=Ot(this),this.touchAction=new Qo(this,this.options.touchAction),Zl(this,!0),d(this.options.recognizers,function(F){var q=this.add(new F[0](F[1]));F[2]&&q.recognizeWith(F[2]),F[3]&&q.requireFailure(F[3])},this)}nu.prototype={set:function(A){return p(this.options,A),A.touchAction&&this.touchAction.update(),A.inputTarget&&(this.input.destroy(),this.input.target=A.inputTarget,this.input.init()),this},stop:function(A){this.session.stopped=A?Xl:iy},recognize:function(A){var E=this.session;if(!E.stopped){this.touchAction.preventDefaults(A);var F,q=this.recognizers,ve=E.curRecognizer;(!ve||ve&&ve.state&An)&&(ve=E.curRecognizer=null);for(var we=0;we<q.length;)F=q[we],E.stopped!==Xl&&(!ve||F==ve||F.canRecognizeWith(ve))?F.recognize(A):F.reset(),!ve&&F.state&(en|Cr|Un)&&(ve=E.curRecognizer=F),we++}},get:function(A){if(A instanceof En)return A;for(var E=this.recognizers,F=0;F<E.length;F++)if(E[F].options.event==A)return E[F];return null},add:function(A){if(h(A,"add",this))return this;var E=this.get(A.options.event);return E&&this.remove(E),this.recognizers.push(A),A.manager=this,this.touchAction.update(),A},remove:function(A){if(h(A,"remove",this))return this;if(A=this.get(A),A){var E=this.recognizers,F=T(E,A);F!==-1&&(E.splice(F,1),this.touchAction.update())}return this},on:function(A,E){if(A!==i&&E!==i){var F=this.handlers;return d(I(A),function(q){F[q]=F[q]||[],F[q].push(E)}),this}},off:function(A,E){if(A!==i){var F=this.handlers;return d(I(A),function(q){E?F[q]&&F[q].splice(T(F[q],E),1):delete F[q]}),this}},emit:function(A,E){this.options.domEvents&&ay(A,E);var F=this.handlers[A]&&this.handlers[A].slice();if(!(!F||!F.length)){E.type=A,E.preventDefault=function(){E.srcEvent.preventDefault()};for(var q=0;q<F.length;)F[q](E),q++}},destroy:function(){this.element&&Zl(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Zl(A,E){var F=A.element;if(F.style){var q;d(A.options.cssProps,function(ve,we){q=z(F.style,we),E?(A.oldCssProps[q]=F.style[q],F.style[q]=ve):F.style[q]=A.oldCssProps[q]||""}),E||(A.oldCssProps={})}}function ay(A,E){var F=n.createEvent("Event");F.initEvent(A,!0,!0),F.gesture=E,E.target.dispatchEvent(F)}p(Cn,{INPUT_START:ge,INPUT_MOVE:He,INPUT_END:H,INPUT_CANCEL:fe,STATE_POSSIBLE:Sa,STATE_BEGAN:en,STATE_CHANGED:Cr,STATE_ENDED:Un,STATE_RECOGNIZED:An,STATE_CANCELLED:ci,STATE_FAILED:hn,DIRECTION_NONE:Ae,DIRECTION_LEFT:ie,DIRECTION_RIGHT:Ye,DIRECTION_UP:De,DIRECTION_DOWN:qe,DIRECTION_HORIZONTAL:Be,DIRECTION_VERTICAL:Pe,DIRECTION_ALL:ut,Manager:nu,Input:tt,TouchAction:Qo,TouchInput:xa,MouseInput:Ue,PointerEventInput:Ve,TouchMouseInput:Zo,SingleTouchInput:ui,Recognizer:En,AttrRecognizer:sn,Tap:Ca,Pan:Ea,Swipe:tu,Pinch:Jo,Rotate:eu,Press:Ko,on:M,off:C,each:d,merge:m,extend:g,assign:p,inherit:_,bindFn:y,prefixed:z});var oy=typeof t<"u"?t:typeof self<"u"?self:{};oy.Hammer=Cn,typeof i=="function"&&i.amd?i(function(){return Cn}):e.exports?e.exports=Cn:t[r]=Cn})(window,document,"Hammer")})(Ig);var Q3=Ig.exports;const yi=Sn(Q3);var jt=function(e){return e.Hover="hover",e.Click="click",e.Select="select",e.Active="active",e.Drag="drag",e}({}),_f,xf,bf,Tu,Sf;function J3(e){var t=K3();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function K3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eS={panstart:"dragstart",panmove:"dragging",panend:"dragend",pancancel:"dragcancel"};_f=Ne(),xf=Ge(se.IMapService),_f(bf=(Tu=function(e){Te(n,e);var t=J3(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"indragging",!1),je(P(r),"mapService",Sf,P(r)),S(P(r),"hammertime",void 0),S(P(r),"lastClickTime",0),S(P(r),"lastClickXY",[-1,-1]),S(P(r),"clickTimer",void 0),S(P(r),"$containter",void 0),S(P(r),"onDrag",function(u){var s=r.interactionEvent(u);s.type=eS[s.type],s.type==="dragging"?r.indragging=!0:r.indragging=!1,r.emit(jt.Drag,s)}),S(P(r),"onHammer",function(u){u.srcEvent.stopPropagation();var s=r.interactionEvent(u);r.emit(jt.Hover,s)}),S(P(r),"onTouch",function(u){var s=u.touches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchstart"})}),S(P(r),"onTouchEnd",function(u){if(u.changedTouches.length>0){var s=u.changedTouches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchend"})}}),S(P(r),"onTouchMove",function(u){var s=u.changedTouches[0];r.onHover({clientX:s.clientX,clientY:s.clientY,type:"touchmove"})}),S(P(r),"onHover",function(u){var s=u.clientX,l=u.clientY,c=s,f=l,h=u.type,d=r.mapService.getMapContainer();if(d){var v=d.getBoundingClientRect(),p=v.top,g=v.left;c=c-g-d.clientLeft,f=f-p-d.clientTop}var m=r.mapService.containerToLngLat([c,f]);if(h==="click"){r.isDoubleTap(c,f,m);return}if(h==="touch"){r.isDoubleTap(c,f,m);return}h!=="click"&&h!=="dblclick"&&r.emit(jt.Hover,{x:c,y:f,lngLat:m,type:h,target:u})}),r}return le(n,[{key:"init",value:function(){this.addEventListenerOnMap(),this.$containter=this.mapService.getMapContainer()}},{key:"destroy",value:function(){this.hammertime&&this.hammertime.destroy(),this.removeEventListenerOnMap(),this.off(jt.Hover)}},{key:"triggerHover",value:function(i){var a=i.x,o=i.y;this.emit(jt.Hover,{x:a,y:o})}},{key:"triggerSelect",value:function(i){this.emit(jt.Select,{featureId:i})}},{key:"triggerActive",value:function(i){this.emit(jt.Active,{featureId:i})}},{key:"addEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();if(i){var a=new yi.Manager(i);a.add(new yi.Tap({event:"dblclick",taps:2})),a.add(new yi.Tap({event:"click"})),a.add(new yi.Pan({threshold:0,pointers:0})),a.add(new yi.Press({})),a.on("dblclick click",this.onHammer),a.on("panstart panmove panend pancancel",this.onDrag),i.addEventListener("touchstart",this.onTouch),i.addEventListener("touchend",this.onTouchEnd),i.addEventListener("mousemove",this.onHover),i.addEventListener("touchmove",this.onTouchMove),i.addEventListener("mousedown",this.onHover,!0),i.addEventListener("mouseup",this.onHover),i.addEventListener("contextmenu",this.onHover),this.hammertime=a}}},{key:"removeEventListenerOnMap",value:function(){var i=this.mapService.getMapContainer();i&&(i.removeEventListener("mousemove",this.onHover),this.hammertime.off("dblclick click",this.onHammer),this.hammertime.off("panstart panmove panend pancancel",this.onDrag),i.removeEventListener("touchstart",this.onTouch),i.removeEventListener("touchend",this.onTouchEnd),i.removeEventListener("mousedown",this.onHover),i.removeEventListener("mouseup",this.onHover),i.removeEventListener("contextmenu",this.onHover))}},{key:"interactionEvent",value:function(i){var a=i.type,o=i.pointerType,u,s;o==="touch"?(s=Math.floor(i.pointers[0].clientY),u=Math.floor(i.pointers[0].clientX)):(s=Math.floor(i.srcEvent.y),u=Math.floor(i.srcEvent.x));var l=this.mapService.getMapContainer();if(l){var c=l.getBoundingClientRect(),f=c.top,h=c.left;u-=h,s-=f}var d=this.mapService.containerToLngLat([u,s]);return{x:u,y:s,lngLat:d,type:a,target:i.srcEvent}}},{key:"isDoubleTap",value:function(i,a,o){var u=this,s=new Date().getTime(),l="click";s-this.lastClickTime<400&&Math.abs(this.lastClickXY[0]-i)<10&&Math.abs(this.lastClickXY[1]-a)<10?(this.lastClickTime=0,this.lastClickXY=[-1,-1],this.clickTimer&&clearTimeout(this.clickTimer),l="dblclick",this.emit(jt.Hover,{x:i,y:a,lngLat:o,type:l})):(this.lastClickTime=s,this.lastClickXY=[i,a],this.clickTimer=setTimeout(function(){l="click",u.emit(jt.Hover,{x:i,y:a,lngLat:o,type:l})},400))}}]),n}(ol),Sf=ze(Tu.prototype,"mapService",[xf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tu));var tS=0;function nS(e){var t=e;if(typeof e=="string"&&(t=document.getElementById(e)),t){var n=document.createElement("div");return n.style.cssText+=`
      position: absolute;
      z-index:2;
      height: 100%;
      width: 100%;
      pointer-events: none;
    `,n.id="l7-scene-".concat(tS++),n.classList.add("l7-scene"),t.appendChild(n),n}return null}function rS(e){var t,n=!0;if((e==null||(t=e.target)===null||t===void 0?void 0:t.target)instanceof HTMLElement)for(var r,i=e==null||(r=e.target)===null||r===void 0?void 0:r.target;i;){var a,o=Array.from(i.classList);if(o.includes("l7-marker")||o.includes("l7-popup")){n=!1;break}i=(a=i)===null||a===void 0?void 0:a.parentElement}return n}var iS=function(e){return e[e.SAMPLED=0]="SAMPLED",e[e.RENDER_TARGET=1]="RENDER_TARGET",e}({}),Af,Ef,Cf,wf,Tf,Mf,kf,lr,If,Lf,Rf,Pf,Of;function aS(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=oS(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function oS(e,t){if(e){if(typeof e=="string")return Ff(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ff(e,t)}}function Ff(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Af=Ne(),Ef=Ge(se.IMapService),Cf=Ge(se.IRendererService),wf=Ge(se.IGlobalConfigService),Tf=Ge(se.IInteractionService),Mf=Ge(se.ILayerService),Af(kf=(lr=function(){function e(){var t=this;ce(this,e),S(this,"pickedColors",void 0),S(this,"pickedTileLayers",[]),je(this,"mapService",If,this),je(this,"rendererService",Lf,this),je(this,"configService",Rf,this),je(this,"interactionService",Pf,this),je(this,"layerService",Of,this),S(this,"pickingFBO",void 0),S(this,"width",0),S(this,"height",0),S(this,"alreadyInPicking",!1),S(this,"pickBufferScale",1),S(this,"pickFromPickingFBO",function(){var n=Q(w.mark(function r(i,a){var o,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,C,L,N,I,T,k;return w.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(o=a.x,u=a.y,s=a.lngLat,l=a.type,c=a.target,f=!1,h=t.rendererService,d=h.readPixelsAsync,v=h.getContainer,p=t.getContainerSize(v()),g=p.width,m=p.height,g*=ct,m*=ct,_=i.getLayerConfig(),y=_.enableHighlight,x=_.enableSelect,b=o*ct,M=u*ct,!(b>g-1*ct||b<0||M>m-1*ct||M<0)){z.next=11;break}return z.abrupt("return",!1);case 11:return z.next=13,d({x:Math.floor(b/t.pickBufferScale),y:Math.floor((m-(u+1)*ct)/t.pickBufferScale),width:1,height:1,data:new Uint8Array(4),framebuffer:t.pickingFBO});case 13:return C=z.sent,t.pickedColors=C,C[0]!==0||C[1]!==0||C[2]!==0?(L=pr(C),N=i.layerPickService.getFeatureById(L),L!==i.getCurrentPickId()&&l==="mousemove"&&(l="mouseenter"),I={x:o,y:u,type:l,lngLat:s,featureId:L,feature:N,target:c},N&&(f=!0,i.setCurrentPickId(L),t.triggerHoverOnLayer(i,I))):(T={x:o,y:u,lngLat:s,type:i.getCurrentPickId()!==null&&l==="mousemove"?"mouseout":"un"+l,featureId:null,target:c,feature:null},t.triggerHoverOnLayer(i,$($({},T),{},{type:"unpick"})),t.triggerHoverOnLayer(i,T),i.setCurrentPickId(null)),y&&i.layerPickService.highlightPickedFeature(C),x&&l==="click"&&(C==null?void 0:C.toString())!==[0,0,0,0].toString()&&(k=pr(C),i.getCurrentSelectedId()===null||k!==i.getCurrentSelectedId()?(i.layerPickService.selectFeature(C),i.setCurrentSelectedId(k)):(i.layerPickService.selectFeature(new Uint8Array([0,0,0,0])),i.setCurrentSelectedId(null))),z.abrupt("return",f);case 19:case"end":return z.stop()}},r)}));return function(r,i){return n.apply(this,arguments)}}())}return le(e,[{key:"init",value:function(n){var r=this.rendererService,i=r.createTexture2D,a=r.createFramebuffer,o=r.getContainer,u=this.getContainerSize(o()),s=u.width,l=u.height;s*=ct,l*=ct,this.pickBufferScale=this.configService.getSceneConfig(n).pickBufferScale||1,s=Math.round(s/this.pickBufferScale),l=Math.round(l/this.pickBufferScale);var c=i({width:s,height:l,usage:iS.RENDER_TARGET,label:"Picking Texture"});this.pickingFBO=a({color:c,depth:!0,width:s,height:l}),this.interactionService.on(jt.Hover,this.pickingAllLayer.bind(this))}},{key:"boxPickLayer",value:function(){var t=Q(w.mark(function r(i,a,o){var u=this,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=this.rendererService,l=s.useFramebufferAsync,c=s.clear,this.resizePickingFBO(),i.hooks.beforePickingEncode.call(),d.next=5,l(this.pickingFBO,Q(w.mark(function v(){return w.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:c({framebuffer:u.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),i.renderModels({ispick:!0});case 2:case"end":return g.stop()}},v)})));case 5:return i.hooks.afterPickingEncode.call(),d.next=8,this.pickBox(i,a);case 8:f=d.sent,o(f);case 10:case"end":return d.stop()}},r,this)}));function n(r,i,a){return t.apply(this,arguments)}return n}()},{key:"pickBox",value:function(){var t=Q(w.mark(function r(i,a){var o=this,u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,C,L,N,I,T;return w.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(u=a.map(function(z){var ne=z<0?0:z;return Math.floor(ne*ct/o.pickBufferScale)}),s=Fe(u,4),l=s[0],c=s[1],f=s[2],h=s[3],d=this.rendererService,v=d.readPixelsAsync,p=d.getContainer,g=this.getContainerSize(p()),m=g.width,_=g.height,m*=ct,_*=ct,!(l>(m-1)*ct/this.pickBufferScale||f<0||c>(_-1)*ct/this.pickBufferScale||h<0)){O.next=7;break}return O.abrupt("return",[]);case 7:return y=Math.min(m/this.pickBufferScale,f)-l,x=Math.min(_/this.pickBufferScale,h)-c,O.next=11,v({x:l,y:Math.floor(_/this.pickBufferScale-(h+1)),width:y,height:x,data:new Uint8Array(y*x*4),framebuffer:this.pickingFBO});case 11:for(b=O.sent,M=[],C={},L=0;L<b.length/4;L=L+1)N=b.slice(L*4,L*4+4),I=pr(N),I!==-1&&!C[I]&&(T=i.layerPickService.getFeatureById(I),M.push($($({},T),{},{pickedFeatureIdx:I})),C[I]=!0);return O.abrupt("return",M);case 16:case"end":return O.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"handleCursor",value:function(n,r){var i=n.getLayerConfig(),a=i.cursor,o=a===void 0?"":a,u=i.cursorEnabled;if(u){var s=this.mapService.version,l=s==="GAODE2.x"?this.mapService.getMapContainer():this.mapService.getMarkerContainer(),c=l==null?void 0:l.style.getPropertyValue("cursor");r==="unmousemove"&&c!==""?l==null||l.style.setProperty("cursor",""):r==="mousemove"&&(l==null||l.style.setProperty("cursor",o))}}},{key:"destroy",value:function(){this.pickingFBO.destroy(),this.pickingFBO=null}},{key:"getContainerSize",value:function(n){return n.getContext?{width:n.width/ct,height:n.height/ct}:n.getBoundingClientRect()}},{key:"pickingAllLayer",value:function(){var t=Q(w.mark(function r(i){return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(!this.layerService.needPick(i.type)||!this.isPickingAllLayer())){o.next=2;break}return o.abrupt("return");case 2:return this.alreadyInPicking=!0,o.next=5,this.pickingLayers(i);case 5:this.layerService.renderLayers(),this.alreadyInPicking=!1;case 7:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"isPickingAllLayer",value:function(){return!(this.alreadyInPicking||this.layerService.alreadyInRendering||this.interactionService.indragging||!this.layerService.getShaderPickStat())}},{key:"resizePickingFBO",value:function(){var n=this.rendererService.getContainer,r=this.getContainerSize(n()),i=r.width,a=r.height;i*=ct,a*=ct,(this.width!==i||this.height!==a)&&(this.pickingFBO.resize({width:Math.round(i/this.pickBufferScale),height:Math.round(a/this.pickBufferScale)}),this.width=i,this.height=a)}},{key:"pickingLayers",value:function(){var t=Q(w.mark(function r(i){var a=this,o,u,s,l,c,f,h;return w.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:o=this.rendererService,u=o.clear,s=o.useFramebufferAsync,this.resizePickingFBO(),l=this.layerService.getRenderList(),c=aS(l.filter(function(p){return p.needPick(i.type)}).reverse()),v.prev=4,h=w.mark(function p(){var g,m;return w.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return g=f.value,y.next=3,s(a.pickingFBO,Q(w.mark(function x(){return w.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:u({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),g.layerPickService.pickRender(i);case 2:case"end":return M.stop()}},x)})));case 3:return y.next=5,a.pickFromPickingFBO(g,i);case 5:if(m=y.sent,a.layerService.pickedLayerId=m?+g.id:-1,!(m&&!g.getLayerConfig().enablePropagation)){y.next=9;break}return y.abrupt("return",1);case 9:case"end":return y.stop()}},p)}),c.s();case 7:if((f=c.n()).done){v.next=13;break}return v.delegateYield(h(),"t0",9);case 9:if(!v.t0){v.next=11;break}return v.abrupt("break",13);case 11:v.next=7;break;case 13:v.next=18;break;case 15:v.prev=15,v.t1=v.catch(4),c.e(v.t1);case 18:return v.prev=18,c.f(),v.finish(18);case 21:case"end":return v.stop()}},r,this,[[4,15,18,21]])}));function n(r){return t.apply(this,arguments)}return n}()},{key:"triggerHoverOnLayer",value:function(n,r){rS(r)&&(this.handleCursor(n,r.type),n.emit(r.type,r))}}]),e}(),If=ze(lr.prototype,"mapService",[Ef],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lf=ze(lr.prototype,"rendererService",[Cf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rf=ze(lr.prototype,"configService",[wf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pf=ze(lr.prototype,"interactionService",[Tf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Of=ze(lr.prototype,"layerService",[Mf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lr));var uS=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;ce(this,e),S(this,"autoStart",void 0),S(this,"startTime",0),S(this,"oldTime",0),S(this,"running",!1),S(this,"elapsedTime",0),this.autoStart=t}return le(e,[{key:"start",value:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}},{key:"stop",value:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}},{key:"getElapsedTime",value:function(){return this.getDelta(),this.elapsedTime}},{key:"getDelta",value:function(){var n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var r=(typeof performance>"u"?Date:performance).now();n=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=n}return n}}]),e}(),Df,Nf,Bf,Uf,zf,_i,$f,Vf,jf;function Da(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=sS(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function sS(e,t){if(e){if(typeof e=="string")return Hf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hf(e,t)}}function Hf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lS(e){var t=cS();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function cS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Gf=nt.throttle;Df=Ne(),Nf=Ge(se.IRendererService),Bf=Ge(se.IMapService),Uf=Ge(se.IDebugService),Df(zf=(_i=function(e){Te(n,e);var t=lS(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"pickedLayerId",-1),S(P(r),"clock",new uS),S(P(r),"alreadyInRendering",!1),S(P(r),"layers",[]),S(P(r),"layerList",[]),S(P(r),"layerRenderID",void 0),S(P(r),"sceneInited",!1),S(P(r),"animateInstanceCount",0),S(P(r),"shaderPicking",!0),S(P(r),"enableRender",!0),je(P(r),"renderService",$f,P(r)),je(P(r),"mapService",Vf,P(r)),je(P(r),"debugService",jf,P(r)),S(P(r),"reRender",Gf(function(){r.renderLayers()},32)),S(P(r),"throttleRenderLayers",Gf(function(){r.renderLayers()},16)),r}return le(n,[{key:"needPick",value:function(i){return this.layerList.some(function(a){return a.needPick(i)})}},{key:"add",value:function(i){var a=this;this.layers.push(i),this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"addMask",value:function(i){var a=this;this.sceneInited&&i.init().then(function(){a.renderLayers()})}},{key:"initLayers",value:function(){var r=Q(w.mark(function a(){var o=this;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:this.sceneInited=!0,this.layers.forEach(function(){var l=Q(w.mark(function c(f){return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(f.startInit){d.next=4;break}return d.next=3,f.init();case 3:o.updateLayerRenderList();case 4:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}());case 2:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSceneInited",value:function(){return this.sceneInited}},{key:"getRenderList",value:function(){return this.layerList}},{key:"getLayers",value:function(){return this.layers}},{key:"getLayer",value:function(i){return this.layers.find(function(a){return a.id===i})}},{key:"getLayerByName",value:function(i){return this.layers.find(function(a){return a.name===i})}},{key:"remove",value:function(){var r=Q(w.mark(function a(o,u){var s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:u?(s=u.layerChildren.indexOf(o),s>-1&&u.layerChildren.splice(s,1)):(l=this.layers.indexOf(o),l>-1&&this.layers.splice(l,1)),o.destroy(),this.reRender(),this.emit("layerChange",this.layers);case 4:case"end":return f.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"removeAllLayers",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:this.destroy(),this.reRender();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"setEnableRender",value:function(i){this.enableRender=i}},{key:"renderLayers",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d,v;return w.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(!(this.alreadyInRendering||!this.enableRender)){g.next=2;break}return g.abrupt("return");case 2:this.updateLayerRenderList(),o=this.debugService.generateRenderUid(),this.debugService.renderStart(o),this.alreadyInRendering=!0,this.clear(),u=Da(this.layerList);try{for(u.s();!(s=u.n()).done;)l=s.value,l.prerender()}catch(m){u.e(m)}finally{u.f()}this.renderService.beginFrame(),c=Da(this.layerList),g.prev=11,c.s();case 13:if((f=c.n()).done){g.next=25;break}if(h=f.value,d=h.getLayerConfig(),v=d.enableMask,h.masks.filter(function(m){return m.inited}).length>0&&v&&this.renderMask(h.masks),!h.getLayerConfig().enableMultiPassRenderer){g.next=22;break}return g.next=20,h.renderMultiPass();case 20:g.next=23;break;case 22:h.render();case 23:g.next=13;break;case 25:g.next=30;break;case 27:g.prev=27,g.t0=g.catch(11),c.e(g.t0);case 30:return g.prev=30,c.f(),g.finish(30);case 33:this.renderService.endFrame(),this.debugService.renderEnd(o),this.alreadyInRendering=!1;case 36:case"end":return g.stop()}},a,this,[[11,27,30,33]])}));function i(){return r.apply(this,arguments)}return i}()},{key:"renderMask",value:function(i){var a=0;this.renderService.clear({stencil:0,depth:1,framebuffer:null});var o=i.length>1?dr.MULTIPLE:dr.SINGLE,u=Da(i),s;try{for(u.s();!(s=u.n()).done;){var l=s.value;l.render({isStencil:!0,stencilType:o,stencilIndex:a++})}}catch(c){u.e(c)}finally{u.f()}}},{key:"beforeRenderData",value:function(){var r=Q(w.mark(function a(o){var u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,o.hooks.beforeRenderData.promise();case 2:u=l.sent,u&&this.renderLayers();case 4:case"end":return l.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"renderTileLayerMask",value:function(i){var a=0,o=i.getLayerConfig(),u=o.enableMask,s=u===void 0?!0:u,l=i.tileMask?1:0,c=i.masks.filter(function(p){return p.inited});l=l+(s?c.length:1);var f=l>1?dr.MULTIPLE:dr.SINGLE;if((i.tileMask||c.length&&s)&&this.renderService.clear({stencil:0,depth:1,framebuffer:null}),c.length&&s){var h=Da(c),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;v.render({isStencil:!0,stencilType:f,stencilIndex:a++})}}catch(p){h.e(p)}finally{h.f()}}i.tileMask&&i.tileMask.render({isStencil:!0,stencilType:f,stencilIndex:a++,stencilOperation:Uo.OR})}},{key:"renderTileLayer",value:function(){var r=Q(w.mark(function a(o){return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this.renderTileLayerMask(o),!o.getLayerConfig().enableMultiPassRenderer){s.next=6;break}return s.next=4,o.renderMultiPass();case 4:s.next=8;break;case 6:return s.next=8,o.render();case 8:case"end":return s.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"updateLayerRenderList",value:function(){var i=this;this.layerList=[],this.layers.filter(function(a){return a.inited}).filter(function(a){return a.isVisible()}).sort(function(a,o){return a.zIndex-o.zIndex}).forEach(function(a){i.layerList.push(a)})}},{key:"destroy",value:function(){this.layers.forEach(function(i){i.destroy()}),this.layers=[],this.layerList=[],this.emit("layerChange",this.layers)}},{key:"startAnimate",value:function(){this.animateInstanceCount++===0&&(this.clock.start(),this.runRender())}},{key:"stopAnimate",value:function(){--this.animateInstanceCount===0&&(this.stopRender(),this.clock.stop())}},{key:"getOESTextureFloat",value:function(){return this.renderService.extensionObject.OES_texture_float}},{key:"enableShaderPick",value:function(){this.shaderPicking=!0}},{key:"disableShaderPick",value:function(){this.shaderPicking=!1}},{key:"getShaderPickStat",value:function(){return this.shaderPicking}},{key:"clear",value:function(){var i=rt(this.mapService.bgColor);this.renderService.clear({color:i,depth:1,stencil:0,framebuffer:null})}},{key:"runRender",value:function(){this.renderLayers(),this.layerRenderID=window.requestAnimationFrame(this.runRender.bind(this))}},{key:"stopRender",value:function(){window.cancelAnimationFrame(this.layerRenderID)}}]),n}(Kt.EventEmitter),$f=ze(_i.prototype,"renderService",[Nf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Vf=ze(_i.prototype,"mapService",[Bf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jf=ze(_i.prototype,"debugService",[Uf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_i));function fS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function on(e,t){if(e==null)return{};var n=fS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var R=function(e){return e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.BLEND_EQUATION=32777]="BLEND_EQUATION",e[e.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",e[e.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",e[e.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",e[e.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",e[e.MAX_EXT=32776]="MAX_EXT",e[e.MIN_EXT=32775]="MIN_EXT",e[e.BLEND_DST_RGB=32968]="BLEND_DST_RGB",e[e.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",e[e.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",e[e.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.BLEND_COLOR=32773]="BLEND_COLOR",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",e[e.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.BUFFER_SIZE=34660]="BUFFER_SIZE",e[e.BUFFER_USAGE=34661]="BUFFER_USAGE",e[e.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK",e[e.CULL_FACE=2884]="CULL_FACE",e[e.BLEND=3042]="BLEND",e[e.DITHER=3024]="DITHER",e[e.STENCIL_TEST=2960]="STENCIL_TEST",e[e.DEPTH_TEST=2929]="DEPTH_TEST",e[e.SCISSOR_TEST=3089]="SCISSOR_TEST",e[e.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",e[e.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",e[e.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",e[e.NO_ERROR=0]="NO_ERROR",e[e.INVALID_ENUM=1280]="INVALID_ENUM",e[e.INVALID_VALUE=1281]="INVALID_VALUE",e[e.INVALID_OPERATION=1282]="INVALID_OPERATION",e[e.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",e[e.CW=2304]="CW",e[e.CCW=2305]="CCW",e[e.LINE_WIDTH=2849]="LINE_WIDTH",e[e.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",e[e.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",e[e.CULL_FACE_MODE=2885]="CULL_FACE_MODE",e[e.FRONT_FACE=2886]="FRONT_FACE",e[e.DEPTH_RANGE=2928]="DEPTH_RANGE",e[e.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",e[e.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",e[e.DEPTH_FUNC=2932]="DEPTH_FUNC",e[e.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",e[e.STENCIL_FUNC=2962]="STENCIL_FUNC",e[e.STENCIL_FAIL=2964]="STENCIL_FAIL",e[e.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",e[e.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",e[e.STENCIL_REF=2967]="STENCIL_REF",e[e.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",e[e.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",e[e.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",e[e.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",e[e.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",e[e.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",e[e.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",e[e.VIEWPORT=2978]="VIEWPORT",e[e.SCISSOR_BOX=3088]="SCISSOR_BOX",e[e.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",e[e.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",e[e.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",e[e.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",e[e.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",e[e.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",e[e.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",e[e.RED_BITS=3410]="RED_BITS",e[e.GREEN_BITS=3411]="GREEN_BITS",e[e.BLUE_BITS=3412]="BLUE_BITS",e[e.ALPHA_BITS=3413]="ALPHA_BITS",e[e.DEPTH_BITS=3414]="DEPTH_BITS",e[e.STENCIL_BITS=3415]="STENCIL_BITS",e[e.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",e[e.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",e[e.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",e[e.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",e[e.SAMPLES=32937]="SAMPLES",e[e.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",e[e.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",e[e.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",e[e.DONT_CARE=4352]="DONT_CARE",e[e.FASTEST=4353]="FASTEST",e[e.NICEST=4354]="NICEST",e[e.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER",e[e.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",e[e.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",e[e.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",e[e.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",e[e.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",e[e.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",e[e.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",e[e.SHADER_TYPE=35663]="SHADER_TYPE",e[e.DELETE_STATUS=35712]="DELETE_STATUS",e[e.LINK_STATUS=35714]="LINK_STATUS",e[e.VALIDATE_STATUS=35715]="VALIDATE_STATUS",e[e.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",e[e.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",e[e.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",e[e.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",e[e.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP",e[e.VENDOR=7936]="VENDOR",e[e.RENDERER=7937]="RENDERER",e[e.VERSION=7938]="VERSION",e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE=5890]="TEXTURE",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",e[e.TEXTURE0=33984]="TEXTURE0",e[e.TEXTURE1=33985]="TEXTURE1",e[e.TEXTURE2=33986]="TEXTURE2",e[e.TEXTURE3=33987]="TEXTURE3",e[e.TEXTURE4=33988]="TEXTURE4",e[e.TEXTURE5=33989]="TEXTURE5",e[e.TEXTURE6=33990]="TEXTURE6",e[e.TEXTURE7=33991]="TEXTURE7",e[e.TEXTURE8=33992]="TEXTURE8",e[e.TEXTURE9=33993]="TEXTURE9",e[e.TEXTURE10=33994]="TEXTURE10",e[e.TEXTURE11=33995]="TEXTURE11",e[e.TEXTURE12=33996]="TEXTURE12",e[e.TEXTURE13=33997]="TEXTURE13",e[e.TEXTURE14=33998]="TEXTURE14",e[e.TEXTURE15=33999]="TEXTURE15",e[e.TEXTURE16=34e3]="TEXTURE16",e[e.TEXTURE17=34001]="TEXTURE17",e[e.TEXTURE18=34002]="TEXTURE18",e[e.TEXTURE19=34003]="TEXTURE19",e[e.TEXTURE20=34004]="TEXTURE20",e[e.TEXTURE21=34005]="TEXTURE21",e[e.TEXTURE22=34006]="TEXTURE22",e[e.TEXTURE23=34007]="TEXTURE23",e[e.TEXTURE24=34008]="TEXTURE24",e[e.TEXTURE25=34009]="TEXTURE25",e[e.TEXTURE26=34010]="TEXTURE26",e[e.TEXTURE27=34011]="TEXTURE27",e[e.TEXTURE28=34012]="TEXTURE28",e[e.TEXTURE29=34013]="TEXTURE29",e[e.TEXTURE30=34014]="TEXTURE30",e[e.TEXTURE31=34015]="TEXTURE31",e[e.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",e[e.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",e[e.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",e[e.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",e[e.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",e[e.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",e[e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",e[e.COMPILE_STATUS=35713]="COMPILE_STATUS",e[e.LOW_FLOAT=36336]="LOW_FLOAT",e[e.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",e[e.HIGH_FLOAT=36338]="HIGH_FLOAT",e[e.LOW_INT=36339]="LOW_INT",e[e.MEDIUM_INT=36340]="MEDIUM_INT",e[e.HIGH_INT=36341]="HIGH_INT",e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.RENDERBUFFER=36161]="RENDERBUFFER",e[e.RGBA4=32854]="RGBA4",e[e.RGB5_A1=32855]="RGB5_A1",e[e.RGB565=36194]="RGB565",e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX=6401]="STENCIL_INDEX",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",e[e.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",e[e.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",e[e.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",e[e.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",e[e.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",e[e.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",e[e.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",e[e.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",e[e.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",e[e.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",e[e.NONE=0]="NONE",e[e.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",e[e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",e[e.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",e[e.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",e[e.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",e[e.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",e[e.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",e[e.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",e[e.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",e[e.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",e[e.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",e}({}),hS=nt.isNil,dS=function(){function e(t){var n=this;ce(this,e),S(this,"name",void 0),S(this,"type",void 0),S(this,"scale",void 0),S(this,"descriptor",void 0),S(this,"featureBufferLayout",[]),S(this,"needRescale",!1),S(this,"needRemapping",!1),S(this,"needRegenerateVertices",!1),S(this,"featureRange",{startIndex:0,endIndex:1/0}),S(this,"vertexAttribute",void 0),S(this,"defaultCallback",function(r){if(r.length===0){var i;return((i=n.scale)===null||i===void 0?void 0:i.defaultValues)||[]}return r.map(function(a,o){var u,s=(u=n.scale)===null||u===void 0?void 0:u.scalers[o].func,l=s(a);return l})}),this.setProps(t)}return le(e,[{key:"setProps",value:function(n){Object.assign(this,n)}},{key:"mapping",value:function(n){var r;if((r=this.scale)!==null&&r!==void 0&&r.callback){var i,a=(i=this.scale)===null||i===void 0?void 0:i.callback.apply(i,re(n));if(!hS(a))return[a]}return this.defaultCallback(n)}},{key:"resetDescriptor",value:function(){this.descriptor&&(this.descriptor.buffer.data=[])}}]),e}(),vS=["buffer","update","name"],pS=["buffer","update","name"],xi,Wf,Yf,Xf,Mu,Zf,gS=(xi={},S(xi,R.FLOAT,4),S(xi,R.UNSIGNED_BYTE,1),S(xi,R.UNSIGNED_SHORT,2),xi),mS=(Wf=Ne(),Yf=Ge(se.IRendererService),Wf(Xf=(Mu=function(){function e(){ce(this,e),S(this,"attributesAndIndices",void 0),je(this,"rendererService",Zf,this),S(this,"attributes",[]),S(this,"triangulation",void 0),S(this,"featureLayout",{sizePerElement:0,elements:[]})}return le(e,[{key:"registerStyleAttribute",value:function(n){var r=this.getLayerStyleAttribute(n.name||"");return r?r.setProps(n):(r=new dS(n),this.attributes.push(r)),r}},{key:"unRegisterStyleAttribute",value:function(n){var r=this.attributes.findIndex(function(i){return i.name===n});r>-1&&this.attributes.splice(r,1)}},{key:"updateScaleAttribute",value:function(n){this.attributes.forEach(function(r){var i,a=r.name,o=(i=r.scale)===null||i===void 0?void 0:i.field;(n[a]||o&&n[o])&&(r.needRescale=!0,r.needRemapping=!0,r.needRegenerateVertices=!0)})}},{key:"updateStyleAttribute",value:function(n,r,i){var a=this.getLayerStyleAttribute(n);a||(a=this.registerStyleAttribute($($({},r),{},{name:n})));var o=r.scale;o&&a&&(a.scale=o,a.needRescale=!0,a.needRemapping=!0,a.needRegenerateVertices=!0,i&&i.featureRange&&(a.featureRange=i.featureRange))}},{key:"getLayerStyleAttributes",value:function(){return this.attributes}},{key:"getLayerStyleAttribute",value:function(n){return this.attributes.find(function(r){return r.name===n})}},{key:"getLayerAttributeScale",value:function(n){var r,i=this.getLayerStyleAttribute(n),a=i==null||(r=i.scale)===null||r===void 0?void 0:r.scalers;return a&&a[0]?a[0].func:null}},{key:"updateAttributeByFeatureRange",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,u=this.attributes.find(function(b){return b.name===n});if(u&&u.descriptor){var s=u.descriptor,l=s.update,c=s.buffer,f=s.size,h=f===void 0?0:f,d=gS[c.type||R.FLOAT];if(l){var v=this.featureLayout,p=v.elements,g=v.sizePerElement,m=p.slice(i,a);if(!m.length)return;var _=m[0].offset,y=_*h*d,x=m.map(function(b,M){for(var C=b.featureIdx,L=b.vertices,N=b.normals,I=L.length/g,T=[],k=0;k<I;k++){var O=N?N.slice(k*3,k*3+3):[];T.push.apply(T,re(l(r[C],C,L.slice(k*g,k*g+g),M,O)))}return T}).flat();u.vertexAttribute.updateBuffer({data:x,offset:y}),o==null||o.emit("legend:".concat(n),{type:n,attr:u})}}}},{key:"createAttributesAndIndices",value:function(n,r,i){var a=this;this.featureLayout={sizePerElement:0,elements:[]},r&&(this.triangulation=r);var o=this.attributes.map(function(m){return m.resetDescriptor(),m.descriptor}),u=0,s=0,l=[],c=3;n.forEach(function(m,_){var y=a.triangulation(m,i),x=y.indices,b=y.vertices,M=y.normals,C=y.size,L=y.indexes,N=y.count;typeof N=="number"&&(s+=N),x.forEach(function(O){l.push(O+u)}),c=C;var I=b.length/C;a.featureLayout.sizePerElement=c,a.featureLayout.elements.push({featureIdx:_,vertices:b,normals:M,offset:u}),u+=I;for(var T=function(z){var ne=(M==null?void 0:M.slice(z*3,z*3+3))||[],de=b.slice(z*C,z*C+C),pe=0;L&&L[z]!==void 0&&(pe=L[z]),o.forEach(function(ye,W){if(ye&&ye.update){var G;(G=ye.buffer.data).push.apply(G,re(ye.update(m,_,de,z,ne,pe)))}})},k=0;k<I;k++)T(k)});var f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createElements,p={};o.forEach(function(m,_){if(m){var y=m.buffer;m.update,m.name;var x=on(m,vS),b=h($({buffer:d(y)},x));p[m.name||""]=b,a.attributes[_].vertexAttribute=b}});var g=v({data:l,type:R.UNSIGNED_INT,count:l.length});return this.attributesAndIndices={attributes:p,elements:g,count:s},this.attributesAndIndices}},{key:"createAttributes",value:function(n,r){var i=this;this.featureLayout={sizePerElement:0,elements:[]},r&&(this.triangulation=r);var a=this.attributes.map(function(h){return h.resetDescriptor(),h.descriptor}),o=0,u=3;n.forEach(function(h,d){var v=i.triangulation(h),p=v.indices,g=v.vertices,m=v.normals,_=v.size,y=v.indexes;p.forEach(function(C){}),u=_;var x=g.length/_;i.featureLayout.sizePerElement=u,i.featureLayout.elements.push({featureIdx:d,vertices:g,normals:m,offset:o}),o+=x;for(var b=function(L){var N=(m==null?void 0:m.slice(L*3,L*3+3))||[],I=g.slice(L*_,L*_+_),T=0;y&&y[L]!==void 0&&(T=y[L]),a.forEach(function(k,O){if(k&&k.update){var z;(z=k.buffer.data).push.apply(z,re(k.update(h,d,I,L,N,T)))}})},M=0;M<x;M++)b(M)});var s=this.rendererService,l=s.createAttribute,c=s.createBuffer,f={};return a.forEach(function(h,d){if(h){var v=h.buffer;h.update,h.name;var p=on(h,pS),g=l($({buffer:c(v)},p));f[h.name||""]=g,i.attributes[d].vertexAttribute=g}}),{attributes:f}}},{key:"clearAllAttributes",value:function(){var n;this.attributes.forEach(function(r){r.vertexAttribute&&r.vertexAttribute.destroy()}),(n=this.attributesAndIndices)===null||n===void 0||n.elements.destroy(),this.attributes=[]}}]),e}(),Zf=ze(Mu.prototype,"rendererService",[Yf],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mu))||Xf);function Lg(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function u(c){try{l(r.next(c))}catch(f){o(f)}}function s(c){try{l(r.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):i(c.value).then(u,s)}l((r=r.apply(e,t||[])).next())})}function Rg(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function xl(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function bl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function Pg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},ao={exports:{}},Ki={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){return r&&typeof r.length=="number"&&r.length>=0&&r.length%1===0}e.exports=t.default})(Ki,Ki.exports);var Gt={},Ss={exports:{}},As={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var a=r.pop();return n.call(this,r,a)}},e.exports=t.default})(As,As.exports);var ir={};Object.defineProperty(ir,"__esModule",{value:!0});ir.fallback=Og;ir.wrap=Fg;var yS=ir.hasQueueMicrotask=typeof queueMicrotask=="function"&&queueMicrotask,_S=ir.hasSetImmediate=typeof setImmediate=="function"&&setImmediate,xS=ir.hasNextTick=typeof process=="object"&&typeof process.nextTick=="function";function Og(e){setTimeout(e,0)}function Fg(e){return function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return e(function(){return t.apply(void 0,n)})}}var Oi;yS?Oi=queueMicrotask:_S?Oi=setImmediate:xS?Oi=process.nextTick:Oi=Og;ir.default=Fg(Oi);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=As.exports,r=u(n),i=ir,a=u(i),o=Gt;function u(f){return f&&f.__esModule?f:{default:f}}function s(f){return(0,o.isAsync)(f)?function(){for(var h=[],d=arguments.length;d--;)h[d]=arguments[d];var v=h.pop(),p=f.apply(this,h);return l(p,v)}:(0,r.default)(function(h,d){var v;try{v=f.apply(this,h)}catch(p){return d(p)}if(v&&typeof v.then=="function")return l(v,d);d(null,v)})}function l(f,h){return f.then(function(d){c(h,null,d)},function(d){c(h,d&&d.message?d:new Error(d))})}function c(f,h,d){try{f(h,d)}catch(v){(0,a.default)(function(p){throw p},v)}}e.exports=t.default})(Ss,Ss.exports);Object.defineProperty(Gt,"__esModule",{value:!0});Gt.isAsyncIterable=Gt.isAsyncGenerator=Gt.isAsync=void 0;var bS=Ss.exports,SS=AS(bS);function AS(e){return e&&e.__esModule?e:{default:e}}function Dg(e){return e[Symbol.toStringTag]==="AsyncFunction"}function ES(e){return e[Symbol.toStringTag]==="AsyncGenerator"}function CS(e){return typeof e[Symbol.asyncIterator]=="function"}function wS(e){if(typeof e!="function")throw new Error("expected a function");return Dg(e)?(0,SS.default)(e):e}Gt.default=wS;Gt.isAsync=Dg;Gt.isAsyncGenerator=ES;Gt.isAsyncIterable=CS;var yr={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r,i){if(i===void 0&&(i=r.length),!i)throw new Error("arity is undefined");function a(){for(var o=this,u=[],s=arguments.length;s--;)u[s]=arguments[s];return typeof u[i-1]=="function"?r.apply(this,u):new Promise(function(l,c){u[i-1]=function(f){for(var h=[],d=arguments.length-1;d-- >0;)h[d]=arguments[d+1];if(f)return c(f);l(h.length>1?h:h[0])},r.apply(o,u)})}return a}e.exports=t.default})(yr,yr.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Ki.exports,r=s(n),i=Gt,a=s(i),o=yr.exports,u=s(o);function s(l){return l&&l.__esModule?l:{default:l}}t.default=(0,u.default)(function(l,c,f){var h=(0,r.default)(c)?[]:{};l(c,function(d,v,p){(0,a.default)(d)(function(g){for(var m,_=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];_.length<2&&(m=_,_=m[0]),h[v]=_,p(g)})},function(d){return f(d,h)})},3),e.exports=t.default})(ao,ao.exports);var Es={exports:{}},oo={exports:{}},Cs={exports:{}},ea={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){function i(){for(var a=[],o=arguments.length;o--;)a[o]=arguments[o];if(r!==null){var u=r;r=null,u.apply(this,a)}}return Object.assign(i,r),i}e.exports=t.default})(ea,ea.exports);var ws={exports:{}},Ts={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return n[Symbol.iterator]&&n[Symbol.iterator]()},e.exports=t.default})(Ts,Ts.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=Ki.exports,r=o(n),i=Ts.exports,a=o(i);function o(f){return f&&f.__esModule?f:{default:f}}function u(f){var h=-1,d=f.length;return function(){return++h<d?{value:f[h],key:h}:null}}function s(f){var h=-1;return function(){var v=f.next();return v.done?null:(h++,{value:v.value,key:h})}}function l(f){var h=f?Object.keys(f):[],d=-1,v=h.length;return function p(){var g=h[++d];return g==="__proto__"?p():d<v?{value:f[g],key:g}:null}}function c(f){if((0,r.default)(f))return u(f);var h=(0,a.default)(f);return h?s(h):l(f)}e.exports=t.default})(ws,ws.exports);var ta={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){return function(){for(var i=[],a=arguments.length;a--;)i[a]=arguments[a];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,i)}}e.exports=t.default})(ta,ta.exports);var Ms={exports:{}},na={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={};t.default=n,e.exports=t.default})(na,na.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=na.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function a(o,u,s,l){var c=!1,f=!1,h=!1,d=0,v=0;function p(){d>=u||h||c||(h=!0,o.next().then(function(_){var y=_.value,x=_.done;if(!(f||c)){if(h=!1,x){c=!0,d<=0&&l(null);return}d++,s(y,v,g),v++,p()}}).catch(m))}function g(_,y){if(d-=1,!f){if(_)return m(_);if(_===!1){c=!0,f=!0;return}if(y===r.default||c&&d<=0)return c=!0,l(null);p()}}function m(_){f||(h=!1,c=!0,l(_))}p()}e.exports=t.default})(Ms,Ms.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=ea.exports,r=d(n),i=ws.exports,a=d(i),o=ta.exports,u=d(o),s=Gt,l=Ms.exports,c=d(l),f=na.exports,h=d(f);function d(v){return v&&v.__esModule?v:{default:v}}t.default=function(v){return function(p,g,m){if(m=(0,r.default)(m),v<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!p)return m(null);if((0,s.isAsyncGenerator)(p))return(0,c.default)(p,v,g,m);if((0,s.isAsyncIterable)(p))return(0,c.default)(p[Symbol.asyncIterator](),v,g,m);var _=(0,a.default)(p),y=!1,x=!1,b=0,M=!1;function C(N,I){if(!x)if(b-=1,N)y=!0,m(N);else if(N===!1)y=!0,x=!0;else{if(I===h.default||y&&b<=0)return y=!0,m(null);M||L()}}function L(){for(M=!0;b<v&&!y;){var N=_();if(N===null){y=!0,b<=0&&m(null);return}b+=1,g(N.value,N.key,(0,u.default)(C))}M=!1}L()}},e.exports=t.default})(Cs,Cs.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Cs.exports,r=s(n),i=Gt,a=s(i),o=yr.exports,u=s(o);function s(c){return c&&c.__esModule?c:{default:c}}function l(c,f,h,d){return(0,r.default)(f)(c,(0,a.default)(h),d)}t.default=(0,u.default)(l,4),e.exports=t.default})(oo,oo.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=oo.exports,r=o(n),i=yr.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l,c){return(0,r.default)(s,1,l,c)}t.default=(0,a.default)(u,3),e.exports=t.default})(Es,Es.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=ao.exports,r=o(n),i=Es.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,r.default)(a.default,s,l)}e.exports=t.default})(bs,bs.exports);var zo=Pg(bs.exports),vn=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.call=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,zo(this.tasks)},e.prototype.tap=function(t,n){var r=this;this.tasks.push(function(i){n.apply(void 0,bl([],xl(r.args),!1)),i(null,t)})},e}(),qf={exports:{}},ks={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Ki.exports,r=g(n),i=na.exports,a=g(i),o=oo.exports,u=g(o),s=ea.exports,l=g(s),c=ta.exports,f=g(c),h=Gt,d=g(h),v=yr.exports,p=g(v);function g(x){return x&&x.__esModule?x:{default:x}}function m(x,b,M){M=(0,l.default)(M);var C=0,L=0,N=x.length,I=!1;N===0&&M(null);function T(k,O){k===!1&&(I=!0),I!==!0&&(k?M(k):(++L===N||O===a.default)&&M(null))}for(;C<N;C++)b(x[C],C,(0,f.default)(T))}function _(x,b,M){return(0,u.default)(x,1/0,b,M)}function y(x,b,M){var C=(0,r.default)(x)?m:_;return C(x,(0,d.default)(b),M)}t.default=(0,p.default)(y,3),e.exports=t.default})(ks,ks.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=ks.exports,r=o(n),i=ao.exports,a=o(i);function o(s){return s&&s.__esModule?s:{default:s}}function u(s,l){return(0,a.default)(r.default,s,l)}e.exports=t.default})(qf,qf.exports);var Is={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=ea.exports,r=c(n),i=ta.exports,a=c(i),o=Gt,u=c(o),s=yr.exports,l=c(s);function c(h){return h&&h.__esModule?h:{default:h}}function f(h,d){if(d=(0,r.default)(d),!Array.isArray(h))return d(new Error("First argument to waterfall must be an array of functions"));if(!h.length)return d();var v=0;function p(m){var _=(0,u.default)(h[v++]);_.apply(void 0,m.concat([(0,a.default)(g)]))}function g(m){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(m!==!1){if(m||v===h.length)return d.apply(void 0,[m].concat(_));p(_)}}p([])}t.default=(0,l.default)(f),e.exports=t.default})(Is,Is.exports);var TS=Pg(Is.exports),Qf=function(){function e(){this.tasks=[]}return e.prototype.call=function(){return zo(this.tasks)},e.prototype.tap=function(t,n){this.tasks.push(function(r){var i=n();r(i,t)})},e}(),MS=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,zo(this.tasks)},e.prototype.tapPromise=function(t,n){var r=this;this.tasks.push(function(i){return Lg(r,void 0,void 0,function(){return Rg(this,function(a){switch(a.label){case 0:return[4,n.apply(void 0,bl([],xl(this.args),!1))];case 1:return a.sent(),i(null,t),[2]}})})})},e}(),kS=function(){function e(){this.args=[],this.tasks=[]}return e.prototype.promise=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++)n[r]=t[r];return this.args=n,zo(this.tasks)},e.prototype.tapPromise=function(t,n){var r=this;this.tasks.push(function(i){return Lg(r,void 0,void 0,function(){var a;return Rg(this,function(o){switch(o.label){case 0:return[4,n.apply(void 0,bl([],xl(this.args),!1))];case 1:return a=o.sent(),i(a,t),[2]}})})})},e}(),IS=function(){function e(){this.tasks=[]}return e.prototype.promise=function(){return TS(this.tasks)},e.prototype.tapPromise=function(t,n){this.tasks.length===0?this.tasks.push(function(r){n().then(function(i){r(null,i)})}):this.tasks.push(function(r,i){n(r).then(function(a){i(null,a)})})},e}(),Ng={exports:{}},LS=Ng.exports={};LS.forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}};var Bg=Ng.exports,RS=function(e){var t=e.stateHandler.getState;function n(o){var u=t(o);return u&&!!u.isDetectable}function r(o){t(o).isDetectable=!0}function i(o){return!!t(o).busy}function a(o,u){t(o).busy=!!u}return{isDetectable:n,markAsDetectable:r,isBusy:i,markBusy:a}},PS=function(e){var t={};function n(o){var u=e.get(o);return u===void 0?[]:t[u]||[]}function r(o,u){var s=e.get(o);t[s]||(t[s]=[]),t[s].push(u)}function i(o,u){for(var s=n(o),l=0,c=s.length;l<c;++l)if(s[l]===u){s.splice(l,1);break}}function a(o){var u=n(o);u&&(u.length=0)}return{get:n,add:r,removeListener:i,removeAllListeners:a}},OS=function(){var e=1;function t(){return e++}return{generate:t}},FS=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function r(a){var o=n(a);return o&&o.id!==void 0?o.id:null}function i(a){var o=n(a);if(!o)throw new Error("setId required the element to have a resize detection state.");var u=t.generate();return o.id=u,u}return{get:r,set:i}},DS=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var r=function(i,a){i[a]=function(){var u=console[a];if(u.apply)u.apply(console,arguments);else for(var s=0;s<arguments.length;s++)u(arguments[s])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n},Ug={exports:{}},zg=Ug.exports={};zg.isIE=function(e){function t(){var r=navigator.userAgent.toLowerCase();return r.indexOf("msie")!==-1||r.indexOf("trident")!==-1||r.indexOf(" edge/")!==-1}if(!t())return!1;if(!e)return!0;var n=function(){var r,i=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->";while(o[0]);return i>4?i:r}();return e===n};zg.isLegacyOpera=function(){return!!window.opera};var $g=Ug.exports,Vg={exports:{}},NS=Vg.exports={};NS.getOption=BS;function BS(e,t,n){var r=e[t];return r==null&&n!==void 0?n:r}var US=Vg.exports,Jf=US,zS=function(t){t=t||{};var n=t.reporter,r=Jf.getOption(t,"async",!0),i=Jf.getOption(t,"auto",!0);i&&!r&&(n&&n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),r=!0);var a=Kf(),o,u=!1;function s(v,p){!u&&i&&r&&a.size()===0&&f(),a.add(v,p)}function l(){for(u=!0;a.size();){var v=a;a=Kf(),v.process()}u=!1}function c(v){u||(v===void 0&&(v=r),o&&(h(o),o=null),v?f():l())}function f(){o=d(l)}function h(v){var p=clearTimeout;return p(v)}function d(v){var p=function(g){return setTimeout(g,0)};return p(v)}return{add:s,force:c}};function Kf(){var e={},t=0,n=0,r=0;function i(u,s){s||(s=u,u=0),u>n?n=u:u<r&&(r=u),e[u]||(e[u]=[]),e[u].push(s),t++}function a(){for(var u=r;u<=n;u++)for(var s=e[u],l=0;l<s.length;l++){var c=s[l];c()}}function o(){return t}return{add:i,process:a,size:o}}var Sl="_erd";function $S(e){return e[Sl]={},jg(e)}function jg(e){return e[Sl]}function VS(e){delete e[Sl]}var jS={initState:$S,getState:jg,cleanState:VS},bi=$g,HS=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function i(l,c){function f(){c(l)}if(bi.isIE(8))r(l).object={proxy:f},l.attachEvent("onresize",f);else{var h=u(l);if(!h)throw new Error("Element is not detectable by this strategy.");h.contentDocument.defaultView.addEventListener("resize",f)}}function a(l){var c=e.important?" !important; ":"; ";return(l.join(c)+c).trim()}function o(l,c,f){f||(f=c,c=l,l=null),l=l||{},l.debug;function h(d,v){var p=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),g=!1,m=window.getComputedStyle(d),_=d.offsetWidth,y=d.offsetHeight;r(d).startSize={width:_,height:y};function x(){function b(){if(m.position==="static"){d.style.setProperty("position","relative",l.important?"important":"");var L=function(N,I,T,k){function O(ne){return ne.replace(/[^-\d\.]/g,"")}var z=T[k];z!=="auto"&&O(z)!=="0"&&(N.warn("An element that is positioned static has style."+k+"="+z+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+k+" will be set to 0. Element: ",I),I.style.setProperty(k,"0",l.important?"important":""))};L(t,d,m,"top"),L(t,d,m,"right"),L(t,d,m,"bottom"),L(t,d,m,"left")}}function M(){g||b();function L(I,T){if(!I.contentDocument){var k=r(I);k.checkForObjectDocumentTimeoutId&&window.clearTimeout(k.checkForObjectDocumentTimeoutId),k.checkForObjectDocumentTimeoutId=setTimeout(function(){k.checkForObjectDocumentTimeoutId=0,L(I,T)},100);return}T(I.contentDocument)}var N=this;L(N,function(T){v(d)})}m.position!==""&&(b(),g=!0);var C=document.createElement("object");C.style.cssText=p,C.tabIndex=-1,C.type="text/html",C.setAttribute("aria-hidden","true"),C.onload=M,bi.isIE()||(C.data="about:blank"),r(d)&&(d.appendChild(C),r(d).object=C,bi.isIE()&&(C.data="about:blank"))}n?n.add(x):x()}bi.isIE(8)?f(c):h(c,f)}function u(l){return r(l).object}function s(l){if(r(l)){var c=u(l);c&&(bi.isIE(8)?l.detachEvent("onresize",c.proxy):l.removeChild(c),r(l).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(l).checkForObjectDocumentTimeoutId),delete r(l).object)}}return{makeDetectable:o,addListener:i,uninstall:s}},GS=Bg.forEach,WS=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;e.stateHandler.hasState;var i=e.idHandler;if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=c(),o="erd_scroll_detection_scrollbar_style",u="erd_scroll_detection_container";function s(x){f(x,o,u)}s(window.document);function l(x){var b=e.important?" !important; ":"; ";return(x.join(b)+b).trim()}function c(){var x=500,b=500,M=document.createElement("div");M.style.cssText=l(["position: absolute","width: "+x*2+"px","height: "+b*2+"px","visibility: hidden","margin: 0","padding: 0"]);var C=document.createElement("div");C.style.cssText=l(["position: absolute","width: "+x+"px","height: "+b+"px","overflow: scroll","visibility: none","top: "+-x*3+"px","left: "+-b*3+"px","visibility: hidden","margin: 0","padding: 0"]),C.appendChild(M),document.body.insertBefore(C,document.body.firstChild);var L=x-C.clientWidth,N=b-C.clientHeight;return document.body.removeChild(C),{width:L,height:N}}function f(x,b,M){function C(T,k){k=k||function(z){x.head.appendChild(z)};var O=x.createElement("style");return O.innerHTML=T,O.id=b,k(O),O}if(!x.getElementById(b)){var L=M+"_animation",N=M+"_animation_active",I=`/* Created by the element-resize-detector library. */
`;I+="."+M+" > div::-webkit-scrollbar { "+l(["display: none"])+` }

`,I+="."+N+" { "+l(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+L,"animation-name: "+L])+` }
`,I+="@-webkit-keyframes "+L+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,I+="@keyframes "+L+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",C(I)}}function h(x){x.className+=" "+u+"_animation_active"}function d(x,b,M){if(x.addEventListener)x.addEventListener(b,M);else if(x.attachEvent)x.attachEvent("on"+b,M);else return t.error("[scroll] Don't know how to add event listeners.")}function v(x,b,M){if(x.removeEventListener)x.removeEventListener(b,M);else if(x.detachEvent)x.detachEvent("on"+b,M);else return t.error("[scroll] Don't know how to remove event listeners.")}function p(x){return r(x).container.childNodes[0].childNodes[0].childNodes[0]}function g(x){return r(x).container.childNodes[0].childNodes[0].childNodes[1]}function m(x,b){var M=r(x).listeners;if(!M.push)throw new Error("Cannot add listener to an element that is not detectable.");r(x).listeners.push(b)}function _(x,b,M){M||(M=b,b=x,x=null),x=x||{};function C(){if(x.debug){var H=Array.prototype.slice.call(arguments);if(H.unshift(i.get(b),"Scroll: "),t.log.apply)t.log.apply(null,H);else for(var fe=0;fe<H.length;fe++)t.log(H[fe])}}function L(H){function fe(Ae){var ie=Ae.getRootNode&&Ae.getRootNode().contains(Ae);return Ae===Ae.ownerDocument.body||Ae.ownerDocument.body.contains(Ae)||ie}return!fe(H)||window.getComputedStyle(H)===null}function N(H){var fe=r(H).container.childNodes[0],Ae=window.getComputedStyle(fe);return!Ae.width||Ae.width.indexOf("px")===-1}function I(){var H=window.getComputedStyle(b),fe={};return fe.position=H.position,fe.width=b.offsetWidth,fe.height=b.offsetHeight,fe.top=H.top,fe.right=H.right,fe.bottom=H.bottom,fe.left=H.left,fe.widthCSS=H.width,fe.heightCSS=H.height,fe}function T(){var H=I();r(b).startSize={width:H.width,height:H.height},C("Element start size",r(b).startSize)}function k(){r(b).listeners=[]}function O(){if(C("storeStyle invoked."),!r(b)){C("Aborting because element has been uninstalled");return}var H=I();r(b).style=H}function z(H,fe,Ae){r(H).lastWidth=fe,r(H).lastHeight=Ae}function ne(H){return p(H).childNodes[0]}function de(){return 2*a.width+1}function pe(){return 2*a.height+1}function ye(H){return H+10+de()}function W(H){return H+10+pe()}function G(H){return H*2+de()}function J(H){return H*2+pe()}function j(H,fe,Ae){var ie=p(H),Ye=g(H),De=ye(fe),qe=W(Ae),Be=G(fe),Pe=J(Ae);ie.scrollLeft=De,ie.scrollTop=qe,Ye.scrollLeft=Be,Ye.scrollTop=Pe}function K(){var H=r(b).container;if(!H){H=document.createElement("div"),H.className=u,H.style.cssText=l(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(b).container=H,h(H),b.appendChild(H);var fe=function(){r(b).onRendered&&r(b).onRendered()};d(H,"animationstart",fe),r(b).onAnimationStart=fe}return H}function X(){function H(){var xe=r(b).style;if(xe.position==="static"){b.style.setProperty("position","relative",x.important?"important":"");var Qe=function(Oe,D,B,Z){function oe(it){return it.replace(/[^-\d\.]/g,"")}var Ee=B[Z];Ee!=="auto"&&oe(Ee)!=="0"&&(Oe.warn("An element that is positioned static has style."+Z+"="+Ee+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+Z+" will be set to 0. Element: ",D),D.style[Z]=0)};Qe(t,b,xe,"top"),Qe(t,b,xe,"right"),Qe(t,b,xe,"bottom"),Qe(t,b,xe,"left")}}function fe(xe,Qe,Oe,D){return xe=xe?xe+"px":"0",Qe=Qe?Qe+"px":"0",Oe=Oe?Oe+"px":"0",D=D?D+"px":"0",["left: "+xe,"top: "+Qe,"right: "+D,"bottom: "+Oe]}if(C("Injecting elements"),!r(b)){C("Aborting because element has been uninstalled");return}H();var Ae=r(b).container;Ae||(Ae=K());var ie=a.width,Ye=a.height,De=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),qe=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(fe(-(1+ie),-(1+Ye),-Ye,-ie))),Be=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),Pe=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),ut=l(["position: absolute","left: 0","top: 0"]),vt=l(["position: absolute","width: 200%","height: 200%"]),ht=document.createElement("div"),tt=document.createElement("div"),Ot=document.createElement("div"),fn=document.createElement("div"),Y=document.createElement("div"),ae=document.createElement("div");ht.dir="ltr",ht.style.cssText=De,ht.className=u,tt.className=u,tt.style.cssText=qe,Ot.style.cssText=Be,fn.style.cssText=ut,Y.style.cssText=Pe,ae.style.cssText=vt,Ot.appendChild(fn),Y.appendChild(ae),tt.appendChild(Ot),tt.appendChild(Y),ht.appendChild(tt),Ae.appendChild(ht);function he(){var xe=r(b);xe&&xe.onExpand?xe.onExpand():C("Aborting expand scroll handler: element has been uninstalled")}function me(){var xe=r(b);xe&&xe.onShrink?xe.onShrink():C("Aborting shrink scroll handler: element has been uninstalled")}d(Ot,"scroll",he),d(Y,"scroll",me),r(b).onExpandScroll=he,r(b).onShrinkScroll=me}function te(){function H(Be,Pe,ut){var vt=ne(Be),ht=ye(Pe),tt=W(ut);vt.style.setProperty("width",ht+"px",x.important?"important":""),vt.style.setProperty("height",tt+"px",x.important?"important":"")}function fe(Be){var Pe=b.offsetWidth,ut=b.offsetHeight,vt=Pe!==r(b).lastWidth||ut!==r(b).lastHeight;C("Storing current size",Pe,ut),z(b,Pe,ut),n.add(0,function(){if(vt){if(!r(b)){C("Aborting because element has been uninstalled");return}if(!Ae()){C("Aborting because element container has not been initialized");return}if(x.debug){var tt=b.offsetWidth,Ot=b.offsetHeight;(tt!==Pe||Ot!==ut)&&t.warn(i.get(b),"Scroll: Size changed before updating detector elements.")}H(b,Pe,ut)}}),n.add(1,function(){if(!r(b)){C("Aborting because element has been uninstalled");return}if(!Ae()){C("Aborting because element container has not been initialized");return}j(b,Pe,ut)}),vt&&Be&&n.add(2,function(){if(!r(b)){C("Aborting because element has been uninstalled");return}if(!Ae()){C("Aborting because element container has not been initialized");return}Be()})}function Ae(){return!!r(b).container}function ie(){function Be(){return r(b).lastNotifiedWidth===void 0}C("notifyListenersIfNeeded invoked");var Pe=r(b);if(Be()&&Pe.lastWidth===Pe.startSize.width&&Pe.lastHeight===Pe.startSize.height)return C("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(Pe.lastWidth===Pe.lastNotifiedWidth&&Pe.lastHeight===Pe.lastNotifiedHeight)return C("Not notifying: Size already notified");C("Current size not notified, notifying..."),Pe.lastNotifiedWidth=Pe.lastWidth,Pe.lastNotifiedHeight=Pe.lastHeight,GS(r(b).listeners,function(ut){ut(b)})}function Ye(){if(C("startanimation triggered."),N(b)){C("Ignoring since element is still unrendered...");return}C("Element rendered.");var Be=p(b),Pe=g(b);(Be.scrollLeft===0||Be.scrollTop===0||Pe.scrollLeft===0||Pe.scrollTop===0)&&(C("Scrollbars out of sync. Updating detector elements..."),fe(ie))}function De(){if(C("Scroll detected."),N(b)){C("Scroll event fired while unrendered. Ignoring...");return}fe(ie)}if(C("registerListenersAndPositionElements invoked."),!r(b)){C("Aborting because element has been uninstalled");return}r(b).onRendered=Ye,r(b).onExpand=De,r(b).onShrink=De;var qe=r(b).style;H(b,qe.width,qe.height)}function _e(){if(C("finalizeDomMutation invoked."),!r(b)){C("Aborting because element has been uninstalled");return}var H=r(b).style;z(b,H.width,H.height),j(b,H.width,H.height)}function ge(){M(b)}function He(){C("Installing..."),k(),T(),n.add(0,O),n.add(1,X),n.add(2,te),n.add(3,_e),n.add(4,ge)}C("Making detectable..."),L(b)?(C("Element is detached"),K(),C("Waiting until element is attached..."),r(b).onRendered=function(){C("Element is now attached"),He()}):He()}function y(x){var b=r(x);b&&(b.onExpandScroll&&v(p(x),"scroll",b.onExpandScroll),b.onShrinkScroll&&v(g(x),"scroll",b.onShrinkScroll),b.onAnimationStart&&v(b.container,"animationstart",b.onAnimationStart),b.container&&x.removeChild(b.container))}return{makeDetectable:_,addListener:m,uninstall:y,initDocument:s}},Fi=Bg.forEach,YS=RS,XS=PS,ZS=OS,qS=FS,QS=DS,eh=$g,JS=zS,jn=jS,KS=HS,eA=WS;function th(e){return Array.isArray(e)||e.length!==void 0}function nh(e){if(Array.isArray(e))return e;var t=[];return Fi(e,function(n){t.push(n)}),t}function rh(e){return e&&e.nodeType===1}var tA=function(e){e=e||{};var t;if(e.idHandler)t={get:function(_){return e.idHandler.get(_,!0)},set:e.idHandler.set};else{var n=ZS(),r=qS({idGenerator:n,stateHandler:jn});t=r}var i=e.reporter;if(!i){var a=i===!1;i=QS(a)}var o=Hn(e,"batchProcessor",JS({reporter:i})),u={};u.callOnAdd=!!Hn(e,"callOnAdd",!0),u.debug=!!Hn(e,"debug",!1);var s=XS(t),l=YS({stateHandler:jn}),c,f=Hn(e,"strategy","object"),h=Hn(e,"important",!1),d={reporter:i,batchProcessor:o,stateHandler:jn,idHandler:t,important:h};if(f==="scroll"&&(eh.isLegacyOpera()?(i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),f="object"):eh.isIE(9)&&(i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),f="object")),f==="scroll")c=eA(d);else if(f==="object")c=KS(d);else throw new Error("Invalid strategy name: "+f);var v={};function p(_,y,x){function b(T){var k=s.get(T);Fi(k,function(z){z(T)})}function M(T,k,O){s.add(k,O),T&&O(k)}if(x||(x=y,y=_,_={}),!y)throw new Error("At least one element required.");if(!x)throw new Error("Listener required.");if(rh(y))y=[y];else if(th(y))y=nh(y);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var C=0,L=Hn(_,"callOnAdd",u.callOnAdd),N=Hn(_,"onReady",function(){}),I=Hn(_,"debug",u.debug);Fi(y,function(k){jn.getState(k)||(jn.initState(k),t.set(k));var O=t.get(k);if(I&&i.log("Attaching listener to element",O,k),!l.isDetectable(k)){if(I&&i.log(O,"Not detectable."),l.isBusy(k)){I&&i.log(O,"System busy making it detectable"),M(L,k,x),v[O]=v[O]||[],v[O].push(function(){C++,C===y.length&&N()});return}return I&&i.log(O,"Making detectable..."),l.markBusy(k,!0),c.makeDetectable({debug:I,important:h},k,function(ne){if(I&&i.log(O,"onElementDetectable"),jn.getState(ne)){l.markAsDetectable(ne),l.markBusy(ne,!1),c.addListener(ne,b),M(L,ne,x);var de=jn.getState(ne);if(de&&de.startSize){var pe=ne.offsetWidth,ye=ne.offsetHeight;(de.startSize.width!==pe||de.startSize.height!==ye)&&b(ne)}v[O]&&Fi(v[O],function(W){W()})}else I&&i.log(O,"Element uninstalled before being detectable.");delete v[O],C++,C===y.length&&N()})}I&&i.log(O,"Already detecable, adding listener."),M(L,k,x),C++}),C===y.length&&N()}function g(_){if(!_)return i.error("At least one element is required.");if(rh(_))_=[_];else if(th(_))_=nh(_);else return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");Fi(_,function(y){s.removeAllListeners(y),c.uninstall(y),jn.cleanState(y)})}function m(_){c.initDocument&&c.initDocument(_)}return{listenTo:p,removeListener:s.removeListener,removeAllListeners:s.removeAllListeners,uninstall:g,initDocument:m}};function Hn(e,t,n){var r=e[t];return r==null&&n!==void 0?n:r}const nA=Sn(tA);var ih,ah,oh,uh,sh,lh,ch,fh,hh,dh,vh,ph,gh,mh,yh,_h,xh,bh,Et,Sh,Ah,Eh,Ch,wh,Th,Mh,kh,Ih,Lh,Rh,Ph,Oh,Fh,Dh,Nh;function rA(e){var t=iA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function iA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}ih=Ne(),ah=Ge(se.SceneID),oh=Ge(se.IIconService),uh=Ge(se.IFontService),sh=Ge(se.IControlService),lh=Ge(se.IGlobalConfigService),ch=Ge(se.IMapService),fh=Ge(se.ICoordinateSystemService),hh=Ge(se.IRendererService),dh=Ge(se.ILayerService),vh=Ge(se.IDebugService),ph=Ge(se.ICameraService),gh=Ge(se.IInteractionService),mh=Ge(se.IPickingService),yh=Ge(se.IShaderModuleService),_h=Ge(se.IMarkerService),xh=Ge(se.IPopupService),ih(bh=(Et=function(e){Te(n,e);var t=rA(n);function n(){var r;return ce(this,n),r=t.call(this),S(P(r),"destroyed",!1),S(P(r),"loaded",!1),je(P(r),"id",Sh,P(r)),je(P(r),"iconService",Ah,P(r)),je(P(r),"fontService",Eh,P(r)),je(P(r),"controlService",Ch,P(r)),je(P(r),"configService",wh,P(r)),je(P(r),"map",Th,P(r)),je(P(r),"coordinateSystemService",Mh,P(r)),je(P(r),"rendererService",kh,P(r)),je(P(r),"layerService",Ih,P(r)),je(P(r),"debugService",Lh,P(r)),je(P(r),"cameraService",Rh,P(r)),je(P(r),"interactionService",Ph,P(r)),je(P(r),"pickingService",Oh,P(r)),je(P(r),"shaderModuleService",Fh,P(r)),je(P(r),"markerService",Dh,P(r)),je(P(r),"popupService",Nh,P(r)),S(P(r),"inited",!1),S(P(r),"rendering",!1),S(P(r),"$container",void 0),S(P(r),"canvas",void 0),S(P(r),"markerContainer",void 0),S(P(r),"resizeDetector",void 0),S(P(r),"hooks",void 0),S(P(r),"handleWindowResized",function(){r.emit("resize"),r.$container&&(r.initContainer(),r.coordinateSystemService.needRefresh=!0,r.render())}),S(P(r),"handleMapCameraChanged",function(i){r.cameraService.update(i),r.render()}),r.hooks={init:new MS},r}return le(n,[{key:"init",value:function(i){var a=this;this.configService.setSceneConfig(this.id,i),this.shaderModuleService.registerBuiltinModules(),this.iconService.init(),this.iconService.on("imageUpdate",function(){return a.render()}),this.fontService.init(),this.hooks.init.tapPromise("initMap",Q(w.mark(function o(){return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.debugService.log("map.mapInitStart",{type:a.map.version}),s.next=3,new Promise(function(l){a.map.onCameraChanged(function(c){a.cameraService.init(),a.cameraService.update(c),l()}),a.map.init()});case 3:a.map.onCameraChanged(a.handleMapCameraChanged),a.map.addMarkerContainer(),a.markerService.addMarkers(),a.markerService.addMarkerLayers(),a.popupService.initPopup(),a.interactionService.init(),a.interactionService.on(jt.Drag,a.addSceneEvent.bind(a));case 10:case"end":return s.stop()}},o)}))),this.hooks.init.tapPromise("initRenderer",Q(w.mark(function o(){var u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s=((u=a.map)===null||u===void 0?void 0:u.getOverlayContainer())||void 0,s?a.$container=s:a.$container=nS(a.configService.getSceneConfig(a.id).id||""),!a.$container){f.next=14;break}return a.canvas=er("canvas","",a.$container),a.setCanvas(),f.next=7,a.rendererService.init(a.canvas,a.configService.getSceneConfig(a.id),i.gl);case 7:a.registerContextLost(),a.initContainer(),a.resizeDetector=nA({strategy:"scroll"}),a.resizeDetector.listenTo(a.$container,a.handleWindowResized),window.matchMedia&&((l=window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)"))===null||l===void 0||l.addListener(a.handleWindowResized.bind("screen"))),f.next=15;break;case 14:case 15:a.pickingService.init(a.id);case 16:case"end":return f.stop()}},o)}))),this.render()}},{key:"registerContextLost",value:function(){var i=this,a=this.rendererService.getCanvas();a&&a.addEventListener("webglcontextlost",function(){return i.emit("webglcontextlost")})}},{key:"addLayer",value:function(i){this.layerService.sceneService=this,this.layerService.add(i)}},{key:"addMask",value:function(i){this.layerService.sceneService=this,this.layerService.addMask(i)}},{key:"render",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.rendering||this.destroyed)){u.next=2;break}return u.abrupt("return");case 2:if(this.rendering=!0,this.inited){u.next=16;break}return u.next=6,this.hooks.init.promise();case 6:return this.destroyed&&this.destroy(),u.next=9,this.layerService.initLayers();case 9:this.layerService.renderLayers(),this.controlService.addControls(),this.loaded=!0,this.emit("loaded"),this.inited=!0,u.next=20;break;case 16:return u.next=18,this.layerService.initLayers();case 18:return u.next=20,this.layerService.renderLayers();case 20:this.rendering=!1;case 21:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"addFontFace",value:function(i,a){this.fontService.addFontFace(i,a)}},{key:"getSceneContainer",value:function(){return this.$container}},{key:"exportPng",value:function(){var r=Q(w.mark(function a(o){var u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=(u=this.$container)===null||u===void 0?void 0:u.getElementsByTagName("canvas")[0],f.next=3,this.render();case 3:return l=o==="jpg"?s==null?void 0:s.toDataURL("image/jpeg"):s==null?void 0:s.toDataURL("image/png"),f.abrupt("return",l);case 5:case"end":return f.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"getSceneConfig",value:function(){return this.configService.getSceneConfig(this.id)}},{key:"getPointSizeRange",value:function(){return this.rendererService.getPointSizeRange()}},{key:"addMarkerContainer",value:function(){var i=this.$container.parentElement;i!==null&&(this.markerContainer=er("div","l7-marker-container",i))}},{key:"getMarkerContainer",value:function(){return this.markerContainer}},{key:"destroy",value:function(){var i=this,a;if(!this.inited){this.destroyed=!0;return}this.resizeDetector.removeListener(this.$container,this.handleWindowResized),this.pickingService.destroy(),this.layerService.destroy(),this.interactionService.destroy(),this.controlService.destroy(),this.markerService.destroy(),this.fontService.destroy(),this.iconService.destroy(),this.removeAllListeners(),this.inited=!1,this.map.destroy(),setTimeout(function(){var o;(o=i.$container)===null||o===void 0||o.removeChild(i.canvas),i.canvas=null,i.rendererService.destroy()}),(a=this.$container)===null||a===void 0||(a=a.parentNode)===null||a===void 0||a.removeChild(this.$container),this.emit("destroy")}},{key:"initContainer",value:function(){var i,a,o=ct,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l&&(l.width=u*o,l.height=s*o),this.rendererService.viewport({x:0,y:0,width:o*u,height:o*s})}},{key:"setCanvas",value:function(){var i,a,o=ct,u=((i=this.$container)===null||i===void 0?void 0:i.clientWidth)||400,s=((a=this.$container)===null||a===void 0?void 0:a.clientHeight)||300,l=this.canvas;l.width=u*o,l.height=s*o,l.style.width="100%",l.style.height="100%"}},{key:"addSceneEvent",value:function(i){this.emit(i.type,i)}}]),n}(Kt.EventEmitter),Sh=ze(Et.prototype,"id",[ah],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ah=ze(Et.prototype,"iconService",[oh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Eh=ze(Et.prototype,"fontService",[uh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ch=ze(Et.prototype,"controlService",[sh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wh=ze(Et.prototype,"configService",[lh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Th=ze(Et.prototype,"map",[ch],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mh=ze(Et.prototype,"coordinateSystemService",[fh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),kh=ze(Et.prototype,"rendererService",[hh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ih=ze(Et.prototype,"layerService",[dh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lh=ze(Et.prototype,"debugService",[vh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rh=ze(Et.prototype,"cameraService",[ph],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ph=ze(Et.prototype,"interactionService",[gh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oh=ze(Et.prototype,"pickingService",[mh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Fh=ze(Et.prototype,"shaderModuleService",[yh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Dh=ze(Et.prototype,"markerService",[_h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Nh=ze(Et.prototype,"popupService",[xh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Et));function aA(e){var t=0;switch(e){case"vec2":case"ivec2":t=2;break;case"vec3":case"ivec3":t=3;break;case"vec4":case"ivec4":case"mat2":t=4;break;case"mat3":t=9;break;case"mat4":t=16;break}return t}var oA=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;function Bh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n={};return e=e.replace(oA,function(r,i,a){var o=a.split(":"),u=o[0].trim(),s="";switch(o.length>1&&(s=o[1].trim()),i){case"bool":s=s==="true";break;case"float":case"int":s=Number(s);break;case"vec2":case"vec3":case"vec4":case"ivec2":case"ivec3":case"ivec4":case"mat2":case"mat3":case"mat4":s?s=s.replace("[","").replace("]","").split(",").reduce(function(l,c){return l.push(Number(c.trim())),l},[]):s=new Array(aA(i)).fill(0);break}return n[u]=s,"".concat(t?"uniform ":"").concat(i," ").concat(u,`;
`)}),{content:e,uniforms:n}}function ku(e){var t=Bh(e,!0),n=t.content,r=t.uniforms;return n=n.replace(/(\s*uniform\s*.*\s*){((?:\s*.*\s*)*?)};/g,function(i,a,o){o=o.trim().replace(/^.*$/gm,function(c){return"uniform ".concat(c)});var u=Bh(o),s=u.content,l=u.uniforms;return Object.assign(r,l),"".concat(a,`{
`).concat(s,`
};`)}),{content:n,uniforms:r}}var Uh,zh,uA=nt.uniq,$h="#define PI 3.14159265359",sA=`#define SHIFT_RIGHT17 1.0 / 131072.0
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
`,Vh=`layout(std140) uniform SceneUniforms {
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
`,jh=`layout(std140) uniform PickingUniforms {
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
}`,Hh=`#define TILE_SIZE 512.0
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
`,Gh=/precision\s+(high|low|medium)p\s+float/,Wh=`#ifdef GL_FRAGMENT_PRECISION_HIGH
 precision highp float;
 #else
 precision mediump float;
#endif
`,gA=/#pragma include (["^+"]?["[a-zA-Z_0-9](.*)"]*?)/g,mA=/void\s+main\s*\([^)]*\)\s*\{\n?/;Uh=Ne(),Uh(zh=function(){function e(){ce(this,e),S(this,"moduleCache",{}),S(this,"rawContentCache",{})}return le(e,[{key:"registerBuiltinModules",value:function(){this.destroy(),this.registerModule("common",{vs:$h,fs:$h}),this.registerModule("decode",{vs:sA,fs:""}),this.registerModule("scene_uniforms",{vs:Vh,fs:Vh}),this.registerModule("picking_uniforms",{vs:jh,fs:jh}),this.registerModule("projection",{vs:Hh,fs:Hh}),this.registerModule("project",{vs:dA,fs:""}),this.registerModule("sdf_2d",{vs:"",fs:pA}),this.registerModule("lighting",{vs:cA,fs:""}),this.registerModule("light",{vs:lA,fs:""}),this.registerModule("picking",{vs:hA,fs:fA}),this.registerModule("rotation_2d",{vs:vA,fs:""})}},{key:"registerModule",value:function(n,r){r.vs=r.vs.replace(/\r\n/g,`
`),r.fs=r.fs.replace(/\r\n/g,`
`);var i=r.vs,a=r.fs,o=r.uniforms,u=r.inject,s=ku(i),l=s.content,c=s.uniforms,f=ku(a),h=f.content,d=f.uniforms;this.rawContentCache[n]={fs:h,inject:u,uniforms:$($($({},c),d),o),vs:l}}},{key:"destroy",value:function(){this.moduleCache={},this.rawContentCache={}}},{key:"getModule",value:function(n){var r=this,i=this.rawContentCache[n].vs,a=this.rawContentCache[n].fs,o=this.rawContentCache[n].inject,u={};o!=null&&o["vs:#decl"]&&(i=(o==null?void 0:o["vs:#decl"])+i,u=ku(o==null?void 0:o["vs:#decl"]).uniforms),o!=null&&o["vs:#main-start"]&&(i=i.replace(mA,function(m){return m+(o==null?void 0:o["vs:#main-start"])})),o!=null&&o["fs:#decl"]&&(a=(o==null?void 0:o["fs:#decl"])+a);var s=this.processModule(i,[],"vs"),l=s.content,c=s.includeList,f=this.processModule(a,[],"fs"),h=f.content,d=f.includeList,v="",p=uA(c.concat(d).concat(n)).reduce(function(m,_){return $($({},m),r.rawContentCache[_].uniforms)},$({},u));Gh.test(h)||(v=v+Wh),v=v+h;var g="";return Gh.test(l)||(g=g+Wh),g=g+l,this.moduleCache[n]={fs:v.trim(),uniforms:p,vs:g.trim()},this.moduleCache[n]}},{key:"processModule",value:function(n,r,i){var a=this,o=n.replace(gA,function(u,s){var l=s.split(" "),c=l[0].replace(/"/g,"");if(r.indexOf(c)>-1)return"";var f=a.rawContentCache[c][i];r.push(c);var h=a.processModule(f,r,i),d=h.content;return d});return{content:o,includeList:r}}},{key:"injectDefines",value:function(n){var r=Object.keys(n).reduce(function(i,a){return i+"#define ".concat(a.toUpperCase()," ").concat(n[a],`;
`)},`
`);return r}}]),e}());function yA(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=ee(e),e!==null););return e}function gr(){return typeof Reflect<"u"&&Reflect.get?gr=Reflect.get.bind():gr=function(t,n,r){var i=yA(t,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(arguments.length<3?t:r):a.value}},gr.apply(this,arguments)}var ai=function(e){return e.Normal="normal",e.PostProcessing="post-processing",e}({}),Yh,Xh,$o=(Yh=Ne(),Yh(Xh=function(){function e(){ce(this,e),S(this,"shaderModuleService",void 0),S(this,"rendererService",void 0),S(this,"cameraService",void 0),S(this,"mapService",void 0),S(this,"interactionService",void 0),S(this,"layerService",void 0),S(this,"config",void 0)}return le(e,[{key:"getName",value:function(){return""}},{key:"getType",value:function(){return ai.Normal}},{key:"init",value:function(n,r){this.config=r,this.rendererService=n.getContainer().get(se.IRendererService),this.cameraService=n.getContainer().get(se.ICameraService),this.mapService=n.getContainer().get(se.IMapService),this.interactionService=n.getContainer().get(se.IInteractionService),this.layerService=n.getContainer().get(se.ILayerService),this.shaderModuleService=n.getContainer().get(se.IShaderModuleService)}},{key:"render",value:function(n){}}]),e}())||Xh),Zh,qh;function _A(e){var t=xA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function xA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Zh=Ne(),Zh(qh=function(e){Te(n,e);var t=_A(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getName",value:function(){return"clear"}},{key:"init",value:function(i,a){gr(ee(n.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(){this.rendererService.clear({color:[0,0,0,0],depth:1,framebuffer:null})}}]),n}($o));var Qh,Jh,Kh,Iu,ed;function bA(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=SA(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function SA(e,t){if(e){if(typeof e=="string")return td(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return td(e,t)}}function td(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var AA=(Qh=Ne(),Jh=Ge(se.IPostProcessor),Qh(Kh=(Iu=function(){function e(){ce(this,e),S(this,"passes",[]),je(this,"postProcessor",ed,this),S(this,"layer",void 0),S(this,"renderFlag",void 0),S(this,"width",0),S(this,"height",0)}return le(e,[{key:"setLayer",value:function(n){this.layer=n}},{key:"setRenderFlag",value:function(n){this.renderFlag=n}},{key:"getRenderFlag",value:function(){return this.renderFlag}},{key:"getPostProcessor",value:function(){return this.postProcessor}},{key:"render",value:function(){var t=Q(w.mark(function r(){var i,a,o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:i=bA(this.passes),s.prev=1,i.s();case 3:if((a=i.n()).done){s.next=9;break}return o=a.value,s.next=7,o.render(this.layer);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),i.e(s.t0);case 14:return s.prev=14,i.f(),s.finish(14);case 17:return s.next=19,this.postProcessor.render(this.layer);case 19:case"end":return s.stop()}},r,this,[[1,11,14,17]])}));function n(){return t.apply(this,arguments)}return n}()},{key:"resize",value:function(n,r){(this.width!==n||this.height!==r)&&(this.postProcessor.resize(n,r),this.width=n,this.height=r)}},{key:"add",value:function(n,r){n.getType()===ai.PostProcessing?this.postProcessor.add(n,this.layer,r):(n.init(this.layer,r),this.passes.push(n))}},{key:"insert",value:function(n,r,i){n.init(this.layer,r),this.passes.splice(i,0,n)}},{key:"destroy",value:function(){this.passes.length=0}}]),e}(),ed=ze(Iu.prototype,"postProcessor",[Jh],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Iu))||Kh),nd,rd;function EA(e){var t=CA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function CA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}nd=Ne(),nd(rd=function(e){Te(n,e);var t=EA(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"pickingFBO",void 0),S(P(r),"layer",void 0),S(P(r),"width",0),S(P(r),"height",0),S(P(r),"alreadyInRendering",!1),S(P(r),"pickFromPickingFBO",function(u){var s=u.x,l=u.y,c=u.lngLat,f=u.type;if(!(!r.layer.isVisible()||!r.layer.needPick(f))){var h=r.rendererService,d=h.getViewportSize,v=h.readPixelsAsync,p=h.useFramebuffer,g=d(),m=g.width,_=g.height,y=r.layer.getLayerConfig(),x=y.enableHighlight,b=y.enableSelect,M=s*ct,C=l*ct;if(!(M>m||M<0||C>_||C<0)){var L;p(r.pickingFBO,Q(w.mark(function N(){var I,T,k,O,z;return w.wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,v({x:Math.round(M),y:Math.round(_-(l+1)*ct),width:1,height:1,data:new Uint8Array(1*1*4),framebuffer:r.pickingFBO});case 2:L=de.sent,L[0]!==0||L[1]!==0||L[2]!==0?(T=pr(L),k=r.layer.getSource().getFeatureById(T),O={x:s,y:l,type:f,lngLat:c,featureId:T,feature:k},k&&(r.layer.setCurrentPickId(T),r.triggerHoverOnLayer(O))):(z={x:s,y:l,lngLat:c,type:r.layer.getCurrentPickId()===null?"un"+f:"mouseout",featureId:null,feature:null},r.triggerHoverOnLayer($($({},z),{},{type:"unpick"})),r.triggerHoverOnLayer(z),r.layer.setCurrentPickId(null)),x&&r.highlightPickedFeature(L),b&&f==="click"&&((I=L)===null||I===void 0?void 0:I.toString())!==[0,0,0,0].toString()&&r.selectFeature(L);case 6:case"end":return de.stop()}},N)})))}}}),r}return le(n,[{key:"getType",value:function(){return ai.Normal}},{key:"getName",value:function(){return"pixelPicking"}},{key:"init",value:function(i,a){gr(ee(n.prototype),"init",this).call(this,i,a),this.layer=i;var o=this.rendererService,u=o.createTexture2D,s=o.createFramebuffer,l=o.getViewportSize,c=l(),f=c.width,h=c.height,d=u({width:f,height:h,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE,label:"Picking Texture"});this.pickingFBO=s({color:d}),this.interactionService.on(jt.Hover,this.pickFromPickingFBO),this.interactionService.on(jt.Select,this.selectFeatureHandle.bind(this)),this.interactionService.on(jt.Active,this.highlightFeatureHandle.bind(this))}},{key:"render",value:function(i){var a=this;if(!this.alreadyInRendering){var o=this.rendererService,u=o.getViewportSize,s=o.useFramebuffer,l=o.clear,c=u(),f=c.width,h=c.height;this.alreadyInRendering=!0,(this.width!==f||this.height!==h)&&(this.pickingFBO.resize({width:f,height:h}),this.width=f,this.height=h),s(this.pickingFBO,function(){l({framebuffer:a.pickingFBO,color:[0,0,0,0],stencil:0,depth:1});var d=a.layer.multiPassRenderer.getRenderFlag();a.layer.multiPassRenderer.setRenderFlag(!1),i.hooks.beforePickingEncode.call(),i.render(),i.hooks.afterPickingEncode.call(),a.layer.multiPassRenderer.setRenderFlag(d),a.alreadyInRendering=!1})}}},{key:"triggerHoverOnLayer",value:function(i){this.layer.emit(i.type,i)}},{key:"highlightPickedFeature",value:function(i){var a=Fe(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeHighlight.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeature",value:function(i){var a=Fe(i,3),o=a[0],u=a[1],s=a[2];this.layer.hooks.beforeSelect.call([o,u,s]),this.layerService.renderLayers()}},{key:"selectFeatureHandle",value:function(i){var a=i.featureId,o=Dn(a);this.selectFeature(new Uint8Array(o))}},{key:"highlightFeatureHandle",value:function(i){var a=i.featureId,o=Dn(a);this.highlightPickedFeature(new Uint8Array(o))}}]),n}($o));var id,ad,od,Lu,ud,wA=nt.camelCase,TA=nt.isNil,MA=nt.upperFirst,kA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`,Bn=(id=Ne(),ad=Ge(se.IShaderModuleService),id(od=(Lu=function(){function e(){ce(this,e),je(this,"shaderModuleService",ud,this),S(this,"rendererService",void 0),S(this,"config",void 0),S(this,"quad",kA),S(this,"enabled",!0),S(this,"renderToScreen",!1),S(this,"model",void 0),S(this,"name",void 0),S(this,"optionsToUpdate",{})}return le(e,[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(n){this.name=n}},{key:"getType",value:function(){return ai.PostProcessing}},{key:"init",value:function(n,r){this.config=r,this.rendererService=n.getContainer().get(se.IRendererService),this.shaderModuleService=n.getContainer().get(se.IShaderModuleService);var i=this.rendererService,a=i.createAttribute,o=i.createBuffer,u=i.createModel,s=this.setupShaders(),l=s.vs,c=s.fs,f=s.uniforms;this.model=u({vs:l,fs:c,attributes:{a_Position:a({buffer:o({data:[-4,-4,4,-4,0,4],type:R.FLOAT}),size:2})},uniforms:$($({u_Texture:null},f),this.config&&this.convertOptionsToUniforms(this.config)),depth:{enable:!1},count:3,blend:{enable:this.getName()==="copy"}})}},{key:"render",value:function(n,r){var i=this,a=n.multiPassRenderer.getPostProcessor(),o=this.rendererService,u=o.useFramebuffer,s=o.getViewportSize,l=o.clear,c=s(),f=c.width,h=c.height;u(this.renderToScreen?null:a.getWriteFBO(),function(){l({framebuffer:a.getWriteFBO(),color:[0,0,0,0],depth:1,stencil:0});var d=$({u_BloomFinal:0,u_Texture:a.getReadFBO(),u_ViewportSize:[f,h]},i.convertOptionsToUniforms(i.optionsToUpdate));r&&(d.u_BloomFinal=1,d.u_Texture2=r),i.model.draw({uniforms:d})})}},{key:"isEnabled",value:function(){return this.enabled}},{key:"setEnabled",value:function(n){this.enabled=n}},{key:"setRenderToScreen",value:function(n){this.renderToScreen=n}},{key:"updateOptions",value:function(n){this.optionsToUpdate=$($({},this.optionsToUpdate),n)}},{key:"setupShaders",value:function(){throw new Error("Method not implemented.")}},{key:"convertOptionsToUniforms",value:function(n){var r={};return Object.keys(n).forEach(function(i){TA(n[i])||(r["u_".concat(MA(wA(i)))]=n[i])}),r}}]),e}(),ud=ze(Lu.prototype,"shaderModuleService",[ad],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lu))||od),sd,ld;function IA(e){var t=LA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function LA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var RA=`varying vec2 v_UV;

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
}`,Ru=nt.isNil;sd=Ne(),sd(ld=function(e){Te(n,e);var t=IA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:PA,fs:RA});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return Ru(i.bloomRadius)||(a.u_radius=i.bloomRadius),Ru(i.bloomIntensity)||(a.u_intensity=i.bloomIntensity),Ru(i.bloomBaseRadio)||(a.u_baseRadio=i.bloomBaseRadio),a}}]),n}(Bn));var cd,fd;function OA(e){var t=FA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function FA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var DA=`varying vec2 v_UV;

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
}`,BA=nt.isNil;cd=Ne(),cd(fd=function(e){Te(n,e);var t=OA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:NA,fs:DA});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return BA(i.blurRadius)||(a.u_BlurDir=[i.blurRadius,0]),a}}]),n}(Bn));var hd,dd;function UA(e){var t=zA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function zA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var $A=`varying vec2 v_UV;

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
}`,jA=nt.isNil;hd=Ne(),hd(dd=function(e){Te(n,e);var t=UA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("blur-pass",{vs:VA,fs:$A});var i=this.shaderModuleService.getModule("blur-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}},{key:"convertOptionsToUniforms",value:function(i){var a={};return jA(i.blurRadius)||(a.u_BlurDir=[0,i.blurRadius]),a}}]),n}(Bn));var vd,pd;function HA(e){var t=GA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function GA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var WA=`varying vec2 v_UV;

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
}`;vd=Ne(),vd(pd=function(e){Te(n,e);var t=HA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("colorhalftone-pass",{vs:YA,fs:WA});var i=this.shaderModuleService.getModule("colorhalftone-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Bn));var gd,md;function XA(e){var t=ZA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function ZA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var qA=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,QA=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;gd=Ne(),gd(md=function(e){Te(n,e);var t=XA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("copy-pass",{vs:QA,fs:qA}),this.shaderModuleService.getModule("copy-pass")}}]),n}(Bn));var yd,_d;function JA(e){var t=KA();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function KA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eE=`varying vec2 v_UV;

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
}`;yd=Ne(),yd(_d=function(e){Te(n,e);var t=JA(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("hexagonalpixelate-pass",{vs:tE,fs:eE});var i=this.shaderModuleService.getModule("hexagonalpixelate-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Bn));var xd,bd;function nE(e){var t=rE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function rE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var iE=`varying vec2 v_UV;

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
}`;xd=Ne(),xd(bd=function(e){Te(n,e);var t=nE(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){this.shaderModuleService.registerModule("ink-pass",{vs:aE,fs:iE});var i=this.shaderModuleService.getModule("ink-pass"),a=i.vs,o=i.fs,u=i.uniforms,s=this.rendererService.getViewportSize(),l=s.width,c=s.height;return{vs:a,fs:o,uniforms:$($({},u),{},{u_ViewportSize:[l,c]})}}}]),n}(Bn));var Sd,Ad;function oE(e){var t=uE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function uE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sE=`varying vec2 v_UV;

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
}`;Sd=Ne(),Sd(Ad=function(e){Te(n,e);var t=oE(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("noise-pass",{vs:lE,fs:sE}),this.shaderModuleService.getModule("noise-pass")}}]),n}(Bn));var Ed,Cd;function cE(e){var t=fE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function fE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hE=`attribute vec2 a_Position;

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
}`;Ed=Ne(),Ed(Cd=function(e){Te(n,e);var t=cE(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"setupShaders",value:function(){return this.shaderModuleService.registerModule("sepia-pass",{vs:hE,fs:dE}),this.shaderModuleService.getModule("sepia-pass")}}]),n}(Bn));var wd,Td,Md,kd,Lr,Id,vE=(wd=Ne(),Td=Ge(se.IRendererService),Md=c3(),wd(kd=(Lr=function(){function e(){ce(this,e),je(this,"rendererService",Id,this),S(this,"passes",[]),S(this,"readFBO",void 0),S(this,"writeFBO",void 0)}return le(e,[{key:"getReadFBO",value:function(){return this.readFBO}},{key:"getWriteFBO",value:function(){return this.writeFBO}},{key:"getCurrentFBOTex",value:function(){var n=this.rendererService,r=n.getViewportSize,i=n.createTexture2D,a=r(),o=a.width,u=a.height;return i({x:0,y:0,width:o,height:u,copy:!0})}},{key:"getReadFBOTex",value:function(){var n=this,r=this.rendererService.useFramebuffer;return new Promise(function(i){r(n.readFBO,Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:i(n.getCurrentFBOTex());case 1:case"end":return u.stop()}},a)})))})}},{key:"renderBloomPass",value:function(){var t=Q(w.mark(function r(i,a){var o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.getReadFBOTex();case 2:o=l.sent,u=0;case 4:if(!(u<4)){l.next=11;break}return l.next=7,a.render(i,o);case 7:this.swap(),u++,l.next=4;break;case 11:case"end":return l.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"render",value:function(){var t=Q(w.mark(function r(i){var a,o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:a=0;case 1:if(!(a<this.passes.length)){s.next=15;break}if(o=this.passes[a],o.setRenderToScreen(this.isLastEnabledPass(a)),o.getName()!=="bloom"){s.next=9;break}return s.next=7,this.renderBloomPass(i,o);case 7:s.next=12;break;case 9:return s.next=11,o.render(i);case 11:a!==this.passes.length-1&&this.swap();case 12:a++,s.next=1;break;case 15:case"end":return s.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"resize",value:function(n,r){this.readFBO.resize({width:n,height:r}),this.writeFBO.resize({width:n,height:r})}},{key:"add",value:function(n,r,i){n.init(r,i),this.passes.push(n)}},{key:"insert",value:function(n,r,i,a){n.init(i,a),this.passes.splice(r,0,n)}},{key:"getPostProcessingPassByName",value:function(n){return this.passes.find(function(r){return r.getName()===n})}},{key:"init",value:function(){var n=this.rendererService,r=n.createFramebuffer,i=n.createTexture2D;this.readFBO=r({color:i({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})}),this.writeFBO=r({color:i({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})})}},{key:"isLastEnabledPass",value:function(n){for(var r=n+1;r<this.passes.length;r++)if(this.passes[r].isEnabled())return!1;return!0}},{key:"swap",value:function(){var n=this.readFBO;this.readFBO=this.writeFBO,this.writeFBO=n}}]),e}(),Id=ze(Lr.prototype,"rendererService",[Td],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ze(Lr.prototype,"init",[Md],Object.getOwnPropertyDescriptor(Lr.prototype,"init"),Lr.prototype),Lr))||kd),Ld,Rd;function pE(e){var t=gE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function gE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Ld=Ne(),Ld(Rd=function(e){Te(n,e);var t=pE(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getType",value:function(){return ai.Normal}},{key:"getName",value:function(){return"render"}},{key:"init",value:function(i,a){gr(ee(n.prototype),"init",this).call(this,i,a)}},{key:"render",value:function(i){var a=this.rendererService,o=a.useFramebuffer,u=a.clear,s=i.multiPassRenderer.getPostProcessor().getReadFBO();o(s,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:s}),i.multiPassRenderer.setRenderFlag(!1),i.models.forEach(function(l){l.draw({uniforms:i.layerModel.getUninforms()})}),i.multiPassRenderer.setRenderFlag(!0)})}}]),n}($o));var Pd,Od,Fd,Pu,Dd;function mE(e){var t=yE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function yE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _E=`uniform float u_opacity : 1.0;
uniform float u_MixRatio : 0.5;

uniform sampler2D u_Diffuse1;
uniform sampler2D u_Diffuse2;

varying vec2 v_UV;

void main() {
  vec4 texel1 = texture2D(u_Diffuse1, v_UV);
  vec4 texel2 = texture2D(u_Diffuse2, v_UV);
  gl_FragColor = u_opacity * mix(texel1, texel2, u_MixRatio);
}
`,Nd=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}`,xE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);
}`;function Bd(e,t){for(var n=0,r=1/t,i=e;i>0;)n=n+r*(i%t),i=Math.floor(i/t),r=r/t;return n}var bE=1;Pd=Ne(),Od=Ge(se.IShaderModuleService),Pd(Fd=(Pu=function(e){Te(n,e);var t=mE(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),je(P(r),"shaderModuleService",Dd,P(r)),S(P(r),"haltonSequence",[]),S(P(r),"accumulatingId",0),S(P(r),"frame",0),S(P(r),"timer",void 0),S(P(r),"sampleRenderTarget",void 0),S(P(r),"prevRenderTarget",void 0),S(P(r),"outputRenderTarget",void 0),S(P(r),"copyRenderTarget",void 0),S(P(r),"blendModel",void 0),S(P(r),"outputModel",void 0),S(P(r),"copyModel",void 0),r}return le(n,[{key:"getType",value:function(){return ai.Normal}},{key:"getName",value:function(){return"taa"}},{key:"init",value:function(i,a){gr(ee(n.prototype),"init",this).call(this,i,a);var o=this.rendererService,u=o.createFramebuffer,s=o.createTexture2D;this.sampleRenderTarget=u({color:s({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})}),this.prevRenderTarget=u({color:s({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})}),this.outputRenderTarget=u({color:s({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})}),this.copyRenderTarget=u({color:s({width:1,height:1,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE})});for(var l=0;l<30;l++)this.haltonSequence.push([Bd(l,2),Bd(l,3)]);this.blendModel=this.createTriangleModel("blend-pass",_E),this.outputModel=this.createTriangleModel("copy-pass",Nd,{blend:{enable:!0,func:{srcRGB:R.ONE,dstRGB:R.ONE_MINUS_SRC_ALPHA,srcAlpha:R.ONE,dstAlpha:R.ONE_MINUS_SRC_ALPHA},equation:{rgb:R.FUNC_ADD,alpha:R.FUNC_ADD}}}),this.copyModel=this.createTriangleModel("copy-pass",Nd)}},{key:"render",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height;this.sampleRenderTarget.resize({width:f,height:h}),this.prevRenderTarget.resize({width:f,height:h}),this.outputRenderTarget.resize({width:f,height:h}),this.copyRenderTarget.resize({width:f,height:h}),this.resetFrame(),this.stopAccumulating();var d=i.multiPassRenderer.getPostProcessor().getReadFBO();l(d,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:d}),i.multiPassRenderer.setRenderFlag(!1),i.render(),i.multiPassRenderer.setRenderFlag(!0)});var v=function p(g){!a.accumulatingId||g!==a.accumulatingId||a.isFinished()||(a.doRender(i),window.requestAnimationFrame(function(){p(g)}))};this.accumulatingId=bE++,this.timer=window.setTimeout(function(){v(a.accumulatingId)},50)}},{key:"doRender",value:function(i){var a=this,o=this.rendererService,u=o.clear,s=o.getViewportSize,l=o.useFramebuffer,c=s(),f=c.width,h=c.height,d=i.getLayerConfig(),v=d.jitterScale,p=v===void 0?1:v,g=this.haltonSequence[this.frame%this.haltonSequence.length];this.cameraService.jitterProjectionMatrix((g[0]*2-1)/f*p,(g[1]*2-1)/h*p),i.multiPassRenderer.setRenderFlag(!1),i.hooks.beforeRender.call(),l(this.sampleRenderTarget,function(){u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:a.sampleRenderTarget}),i.render()}),i.hooks.afterRender.call(),i.multiPassRenderer.setRenderFlag(!0);var m=i.getLayerConfig();l(this.outputRenderTarget,function(){a.blendModel.draw({uniforms:{u_opacity:m.opacity||1,u_MixRatio:a.frame===0?1:.9,u_Diffuse1:a.sampleRenderTarget,u_Diffuse2:a.frame===0?i.multiPassRenderer.getPostProcessor().getReadFBO():a.prevRenderTarget}})}),this.frame===0&&u({color:[0,0,0,0],depth:1,stencil:0,framebuffer:this.copyRenderTarget}),this.frame>=1&&(l(this.copyRenderTarget,function(){a.outputModel.draw({uniforms:{u_Texture:a.outputRenderTarget}})}),l(i.multiPassRenderer.getPostProcessor().getReadFBO(),function(){a.copyModel.draw({uniforms:{u_Texture:a.copyRenderTarget}})}),i.multiPassRenderer.getPostProcessor().render(i));var _=this.prevRenderTarget;this.prevRenderTarget=this.outputRenderTarget,this.outputRenderTarget=_,this.frame++,this.cameraService.clearJitterProjectionMatrix()}},{key:"isFinished",value:function(){return this.frame>=this.haltonSequence.length}},{key:"resetFrame",value:function(){this.frame=0}},{key:"stopAccumulating",value:function(){this.accumulatingId=0,window.clearTimeout(this.timer)}},{key:"createTriangleModel",value:function(i,a,o){this.shaderModuleService.registerModule(i,{vs:xE,fs:a});var u=this.shaderModuleService.getModule(i),s=u.vs,l=u.fs,c=u.uniforms,f=this.rendererService,h=f.createAttribute,d=f.createBuffer,v=f.createModel;return v($({vs:s,fs:l,attributes:{a_Position:h({buffer:d({data:[-4,-4,4,-4,0,4],type:R.FLOAT}),size:2})},uniforms:$({},c),depth:{enable:!1},count:3},o))}}]),n}($o),Dd=ze(Pu.prototype,"shaderModuleService",[Od],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pu));var Pt=new Tg;Pt.bind(se.IGlobalConfigService).to(W3).inSingletonScope();Vb(Ne(),Kt.EventEmitter);Pt.bind(se.IEventEmitter).to(Kt.EventEmitter);var SE=p3(Pt,!1),Hg=function(t){var n=SE.lazyInject(t);return function(r,i,a){n.call(this,r,i),a&&(a.initializer=function(){return r[i]})}};function Ou(e){var t=new Tg;return t.parent=e,t.bind(se.IStyleAttributeService).to(mS).inSingletonScope(),t.bind(se.IMultiPassRenderer).to(AA).inSingletonScope(),t.bind(se.IPostProcessor).to(vE).inSingletonScope(),t}var cr={ProjectionMatrix:"u_ProjectionMatrix",ViewMatrix:"u_ViewMatrix",ViewProjectionMatrix:"u_ViewProjectionMatrix",Zoom:"u_Zoom",ZoomScale:"u_ZoomScale",FocalDistance:"u_FocalDistance",CameraPosition:"u_CameraPosition"},mt={MapInitStart:"mapInitStart",LayerInitStart:"layerInitStart",LayerInitEnd:"layerInitEnd",SourceInitStart:"sourceInitStart",SourceInitEnd:"sourceInitEnd",ScaleInitStart:"scaleInitStart",ScaleInitEnd:"scaleInitEnd",MappingStart:"mappingStart",MappingEnd:"mappingEnd",BuildModelStart:"buildModelStart",BuildModelEnd:"buildModelEnd"},et=function(e){return e.LINEAR="linear",e.SEQUENTIAL="sequential",e.POWER="power",e.LOG="log",e.IDENTITY="identity",e.TIME="time",e.QUANTILE="quantile",e.QUANTIZE="quantize",e.THRESHOLD="threshold",e.CAT="cat",e.DIVERGING="diverging",e.CUSTOM="threshold",e}({}),Rr=function(e){return e.CONSTANT="constant",e.VARIABLE="variable",e}({}),Ce=function(e){return e[e.Attribute=0]="Attribute",e[e.InstancedAttribute=1]="InstancedAttribute",e[e.Uniform=2]="Uniform",e}({}),It=function(e){return e.IMAGE="image",e.CUSTOMIMAGE="customImage",e.ARRAYBUFFER="arraybuffer",e.RGB="rgb",e.TERRAINRGB="terrainRGB",e.CUSTOMRGB="customRGB",e.CUSTOMARRAYBUFFER="customArrayBuffer",e.CUSTOMTERRAINRGB="customTerrainRGB",e}({}),AE=function(){var e=Q(w.mark(function t(n,r,i,a){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(s,l){r({x:n.x,y:n.y,z:n.z},function(c,f){if(c||f.length===0){l(c);return}f&&ps([{data:f,bands:[0]}],i,a,function(h,d){h?l(h):d&&s(d)})})}));case 1:case"end":return u.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}(),EE=function(){var e=Q(w.mark(function t(n,r){return w.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(o,u){r({x:n.x,y:n.y,z:n.z},function(s,l){if(s||!l){u(s);return}l instanceof ArrayBuffer?e_(l,function(c,f){c&&u(c),o(f)}):l instanceof HTMLImageElement?o(l):u(s)})}));case 1:case"end":return a.stop()}},t)}));return function(n,r){return e.apply(this,arguments)}}();function CE(e,t){return Array.isArray(e)?typeof e[0]=="string"?e.map(function(n){return jr(n,t)}):e.map(function(n){return{url:jr(n.url,t),bands:n.bands||[0]}}):jr(e,t)}function wE(e){return typeof e=="string"?[{url:e,bands:[0]}]:typeof e[0]=="string"?e.map(function(t){return{url:t,bands:[0]}}):e}function Ud(e,t){e.xhrCancel=function(){t.map(function(n){n.abort()})}}var TE=function(){var e=Q(w.mark(function t(n,r,i,a,o){var u,s,l,c,f,h;return w.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(u=wE(r.url),!(u.length>1)){v.next=15;break}return v.next=4,ME(u,r);case 4:if(s=v.sent,l=s.rasterFiles,c=s.xhrList,f=s.errList,Ud(n,c),!(f.length>0)){v.next=12;break}return i(f,null),v.abrupt("return");case 12:ps(l,a,o,i),v.next=17;break;case 15:h=Ks(r,function(p,g){if(p)i(p);else if(g){var m=[{data:g,bands:u[0].bands}];ps(m,a,o,i)}}),Ud(n,[h]);case 17:case"end":return v.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}();function ME(e,t){return Ls.apply(this,arguments)}function Ls(){return Ls=Q(w.mark(function e(t,n){var r,i,a,o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:r=[],i=[],a=[],o=0;case 4:if(!(o<t.length)){p.next=20;break}return u=t[o],s=$($({},n),{},{url:u.url}),l=u.bands,p.next=10,Q1($($({},s),{},{type:"arrayBuffer"}));case 10:c=p.sent,f=c.err,h=c.data,d=c.xhr,f&&a.push(f),i.push(d),r.push({data:h,bands:l});case 17:o++,p.next=4;break;case 20:return p.abrupt("return",{rasterFiles:r,xhrList:i,errList:a});case 21:case"end":return p.stop()}},e)})),Ls.apply(this,arguments)}var kE=function(){var e=Q(w.mark(function t(n,r,i,a,o){var u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u={url:CE(n,r)},l.abrupt("return",new Promise(function(c,f){TE(i,u,function(h,d){h?f(h):d&&c(d)},a,o)}));case 2:case"end":return l.stop()}},t)}));return function(n,r,i,a,o){return e.apply(this,arguments)}}(),zd=function(){var e=Q(w.mark(function t(n,r,i,a){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return u=Array.isArray(n)?n[0]:n,a.wmtsOptions?(s=(a==null?void 0:a.getURLFromTemplate)||v2,o=s(u,$($({},r),a.wmtsOptions))):(l=(a==null?void 0:a.getURLFromTemplate)||jr,o=l(u,r)),f.abrupt("return",new Promise(function(h,d){var v,p=Ju({url:o,type:(a==null||(v=a.requestParameters)===null||v===void 0?void 0:v.type)||"arrayBuffer"},function(g,m){g?d(g):m&&h(m)},a.transformResponse);i.xhrCancel=function(){return p.cancel()}}));case 3:case"end":return f.stop()}},t)}));return function(n,r,i,a){return e.apply(this,arguments)}}(),$d=function(){return{rasterData:new Uint8Array([0]),width:1,height:1}},IE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0};It.ARRAYBUFFER,It.RGB;function LE(e){return!!(Array.isArray(e)&&e.length===0||!Array.isArray(e)&&typeof e!="string")}function RE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(LE(e))throw new Error("tile server url is error");var n=(t==null?void 0:t.dataType)||It.IMAGE;n===It.RGB&&(n=It.ARRAYBUFFER);var r=function(o,u){switch(n){case It.IMAGE:return zd(e,o,u,t);case It.CUSTOMIMAGE:case It.CUSTOMTERRAINRGB:return EE(u,t==null?void 0:t.getCustomData);case It.ARRAYBUFFER:return kE(e,o,u,(t==null?void 0:t.format)||$d,t==null?void 0:t.operation);case It.CUSTOMARRAYBUFFER:case It.CUSTOMRGB:return AE(u,t==null?void 0:t.getCustomData,(t==null?void 0:t.format)||$d,t==null?void 0:t.operation);default:return zd(e,o,u,t)}},i=$($($({},IE),t),{},{getTileData:r});return{data:e,dataArray:[],tilesetOptions:i,isTile:!0}}var PE=["extent","min","max","width","height","format","operation"];function OE(e,t){var n=t.extent,r=t.min,i=t.max,a=t.width,o=t.height,u=t.format,s=t.operation,l=on(t,PE),c;if(u===void 0||ig(e))c=Array.from(e);else{var f=Array.isArray(e)?e:[e];c=pl(f,u,s)}var h={_id:1,dataArray:[$($({_id:1,data:c,width:a,height:o},l),{},{min:r,max:i,coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return h}var FE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0},DE=function(){var e=Q(w.mark(function t(n){return w.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(a){var o=Fe(n.bounds,4),u=o[0],s=o[1],l=o[2],c=o[3],f={layers:{testTile:{features:[{type:"Feature",properties:{key:n.x+"/"+n.y+"/"+n.z,x:(u+l)/2,y:(s+c)/2},geometry:{type:"LineString",coordinates:[[l,c],[l,s],[u,s],[u,s]]}}]}}};a(f)}));case 1:case"end":return i.stop()}},t)}));return function(n){return e.apply(this,arguments)}}();function NE(e,t){var n=function(a){return DE(a)},r=$($($({},FE),t),{},{getTileData:n});return{data:e,dataArray:[],tilesetOptions:r,isTile:!0}}var BE=["extent","width","height"];function UE(e,t){var n=t.extent,r=t.width,i=t.height,a=on(t,BE);e.length<3;for(var o=a.bands||[0,1,2],u=Fe(o,3),s=u[0],l=u[1],c=u[2],f=[e[s],e[l],e[c]],h=[],d=(a==null?void 0:a.countCut)||[2,98],v=Fe(d,2),p=v[0],g=v[1],m=(a==null?void 0:a.RMinMax)||Gr(f[0],p,g),_=(a==null?void 0:a.GMinMax)||Gr(f[1],p,g),y=(a==null?void 0:a.BMinMax)||Gr(f[2],p,g),x=0;x<f[0].length;x++)h.push(Math.max(0,f[0][x]-m[0])),h.push(Math.max(0,f[1][x]-_[0])),h.push(Math.max(0,f[2][x]-y[0]));var b={_id:1,dataArray:[$($({_id:1,data:h,width:r,height:i,rMinMax:m,gMinMax:_,bMinMax:y},a),{},{coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return b}var zE=["extent","width","height"];function $E(e,t){var n=t.extent,r=t.width,i=t.height,a=on(t,zE);e.length<2;for(var o=a.bands||[0,1],u=Fe(o,2),s=u[0],l=u[1],c=[e[s],e[l]],f=[],h=0;h<c[0].length;h++)f.push((c[1][h]-c[0][h])/(c[1][h]+c[0][h]));var d={_id:1,dataArray:[$($({_id:1,data:f,width:r,height:i},a),{},{coordinates:[[n[0],n[1]],[n[2],n[3]]]})]};return d}var Gg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){function n(I,T,k,O,z,ne){if(!(z-O<=k)){var de=O+z>>1;r(I,T,de,O,z,ne%2),n(I,T,k,O,de-1,ne+1),n(I,T,k,de+1,z,ne+1)}}function r(I,T,k,O,z,ne){for(;z>O;){if(z-O>600){var de=z-O+1,pe=k-O+1,ye=Math.log(de),W=.5*Math.exp(2*ye/3),G=.5*Math.sqrt(ye*W*(de-W)/de)*(pe-de/2<0?-1:1),J=Math.max(O,Math.floor(k-pe*W/de+G)),j=Math.min(z,Math.floor(k+(de-pe)*W/de+G));r(I,T,k,J,j,ne)}var K=T[2*k+ne],X=O,te=z;for(i(I,T,O,k),T[2*z+ne]>K&&i(I,T,O,z);X<te;){for(i(I,T,X,te),X++,te--;T[2*X+ne]<K;)X++;for(;T[2*te+ne]>K;)te--}T[2*O+ne]===K?i(I,T,O,te):(te++,i(I,T,te,z)),te<=k&&(O=te+1),k<=te&&(z=te-1)}}function i(I,T,k,O){a(I,k,O),a(T,2*k,2*O),a(T,2*k+1,2*O+1)}function a(I,T,k){var O=I[T];I[T]=I[k],I[k]=O}function o(I,T,k,O,z,ne,de){for(var pe=[0,I.length-1,0],ye=[],W,G;pe.length;){var J=pe.pop(),j=pe.pop(),K=pe.pop();if(j-K<=de){for(var X=K;X<=j;X++)W=T[2*X],G=T[2*X+1],W>=k&&W<=z&&G>=O&&G<=ne&&ye.push(I[X]);continue}var te=Math.floor((K+j)/2);W=T[2*te],G=T[2*te+1],W>=k&&W<=z&&G>=O&&G<=ne&&ye.push(I[te]);var _e=(J+1)%2;(J===0?k<=W:O<=G)&&(pe.push(K),pe.push(te-1),pe.push(_e)),(J===0?z>=W:ne>=G)&&(pe.push(te+1),pe.push(j),pe.push(_e))}return ye}function u(I,T,k,O,z,ne){for(var de=[0,I.length-1,0],pe=[],ye=z*z;de.length;){var W=de.pop(),G=de.pop(),J=de.pop();if(G-J<=ne){for(var j=J;j<=G;j++)s(T[2*j],T[2*j+1],k,O)<=ye&&pe.push(I[j]);continue}var K=Math.floor((J+G)/2),X=T[2*K],te=T[2*K+1];s(X,te,k,O)<=ye&&pe.push(I[K]);var _e=(W+1)%2;(W===0?k-z<=X:O-z<=te)&&(de.push(J),de.push(K-1),de.push(_e)),(W===0?k+z>=X:O+z>=te)&&(de.push(K+1),de.push(G),de.push(_e))}return pe}function s(I,T,k,O){var z=I-k,ne=T-O;return z*z+ne*ne}var l=function(I){return I[0]},c=function(I){return I[1]},f=function(T,k,O,z,ne){k===void 0&&(k=l),O===void 0&&(O=c),z===void 0&&(z=64),ne===void 0&&(ne=Float64Array),this.nodeSize=z,this.points=T;for(var de=T.length<65536?Uint16Array:Uint32Array,pe=this.ids=new de(T.length),ye=this.coords=new ne(T.length*2),W=0;W<T.length;W++)pe[W]=W,ye[2*W]=k(T[W]),ye[2*W+1]=O(T[W]);n(pe,ye,z,0,pe.length-1,0)};f.prototype.range=function(T,k,O,z){return o(this.ids,this.coords,T,k,O,z,this.nodeSize)},f.prototype.within=function(T,k,O){return u(this.ids,this.coords,T,k,O,this.nodeSize)};var h={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(I){return I}},d=Math.fround||function(I){return function(T){return I[0]=+T,I[0]}}(new Float32Array(1)),v=function(T){this.options=C(Object.create(h),T),this.trees=new Array(this.options.maxZoom+1)};v.prototype.load=function(T){var k=this.options,O=k.log,z=k.minZoom,ne=k.maxZoom,de=k.nodeSize,pe="prepare "+T.length+" points";this.points=T;for(var ye=[],W=0;W<T.length;W++)T[W].geometry&&ye.push(g(T[W],W));this.trees[ne+1]=new f(ye,L,N,de,Float32Array);for(var G=ne;G>=z;G--){var J=+Date.now();ye=this._cluster(ye,G),this.trees[G]=new f(ye,L,N,de,Float32Array)}return this},v.prototype.getClusters=function(T,k){var O=((T[0]+180)%360+360)%360-180,z=Math.max(-90,Math.min(90,T[1])),ne=T[2]===180?180:((T[2]+180)%360+360)%360-180,de=Math.max(-90,Math.min(90,T[3]));if(T[2]-T[0]>=360)O=-180,ne=180;else if(O>ne){var pe=this.getClusters([O,z,180,de],k),ye=this.getClusters([-180,z,ne,de],k);return pe.concat(ye)}for(var W=this.trees[this._limitZoom(k)],G=W.range(y(O),x(de),y(ne),x(z)),J=[],j=0,K=G;j<K.length;j+=1){var X=K[j],te=W.points[X];J.push(te.numPoints?m(te):this.points[te.index])}return J},v.prototype.getChildren=function(T){var k=this._getOriginId(T),O=this._getOriginZoom(T),z="No cluster with the specified id.",ne=this.trees[O];if(!ne)throw new Error(z);var de=ne.points[k];if(!de)throw new Error(z);for(var pe=this.options.radius/(this.options.extent*Math.pow(2,O-1)),ye=ne.within(de.x,de.y,pe),W=[],G=0,J=ye;G<J.length;G+=1){var j=J[G],K=ne.points[j];K.parentId===T&&W.push(K.numPoints?m(K):this.points[K.index])}if(W.length===0)throw new Error(z);return W},v.prototype.getLeaves=function(T,k,O){k=k||10,O=O||0;var z=[];return this._appendLeaves(z,T,k,O,0),z},v.prototype.getTile=function(T,k,O){var z=this.trees[this._limitZoom(T)],ne=Math.pow(2,T),de=this.options,pe=de.extent,ye=de.radius,W=ye/pe,G=(O-W)/ne,J=(O+1+W)/ne,j={features:[]};return this._addTileFeatures(z.range((k-W)/ne,G,(k+1+W)/ne,J),z.points,k,O,ne,j),k===0&&this._addTileFeatures(z.range(1-W/ne,G,1,J),z.points,ne,O,ne,j),k===ne-1&&this._addTileFeatures(z.range(0,G,W/ne,J),z.points,-1,O,ne,j),j.features.length?j:null},v.prototype.getClusterExpansionZoom=function(T){for(var k=this._getOriginZoom(T)-1;k<=this.options.maxZoom;){var O=this.getChildren(T);if(k++,O.length!==1)break;T=O[0].properties.cluster_id}return k},v.prototype._appendLeaves=function(T,k,O,z,ne){for(var de=this.getChildren(k),pe=0,ye=de;pe<ye.length;pe+=1){var W=ye[pe],G=W.properties;if(G&&G.cluster?ne+G.point_count<=z?ne+=G.point_count:ne=this._appendLeaves(T,G.cluster_id,O,z,ne):ne<z?ne++:T.push(W),T.length===O)break}return ne},v.prototype._addTileFeatures=function(T,k,O,z,ne,de){for(var pe=0,ye=T;pe<ye.length;pe+=1){var W=ye[pe],G=k[W],J=G.numPoints,j=void 0,K=void 0,X=void 0;if(J)j=_(G),K=G.x,X=G.y;else{var te=this.points[G.index];j=te.properties,K=y(te.geometry.coordinates[0]),X=x(te.geometry.coordinates[1])}var _e={type:1,geometry:[[Math.round(this.options.extent*(K*ne-O)),Math.round(this.options.extent*(X*ne-z))]],tags:j},ge=void 0;J?ge=G.id:this.options.generateId?ge=G.index:this.points[G.index].id&&(ge=this.points[G.index].id),ge!==void 0&&(_e.id=ge),de.features.push(_e)}},v.prototype._limitZoom=function(T){return Math.max(this.options.minZoom,Math.min(Math.floor(+T),this.options.maxZoom+1))},v.prototype._cluster=function(T,k){for(var O=[],z=this.options,ne=z.radius,de=z.extent,pe=z.reduce,ye=z.minPoints,W=ne/(de*Math.pow(2,k)),G=0;G<T.length;G++){var J=T[G];if(!(J.zoom<=k)){J.zoom=k;for(var j=this.trees[k+1],K=j.within(J.x,J.y,W),X=J.numPoints||1,te=X,_e=0,ge=K;_e<ge.length;_e+=1){var He=ge[_e],H=j.points[He];H.zoom>k&&(te+=H.numPoints||1)}if(te>X&&te>=ye){for(var fe=J.x*X,Ae=J.y*X,ie=pe&&X>1?this._map(J,!0):null,Ye=(G<<5)+(k+1)+this.points.length,De=0,qe=K;De<qe.length;De+=1){var Be=qe[De],Pe=j.points[Be];if(!(Pe.zoom<=k)){Pe.zoom=k;var ut=Pe.numPoints||1;fe+=Pe.x*ut,Ae+=Pe.y*ut,Pe.parentId=Ye,pe&&(ie||(ie=this._map(J,!0)),pe(ie,this._map(Pe)))}}J.parentId=Ye,O.push(p(fe/te,Ae/te,Ye,te,ie))}else if(O.push(J),te>1)for(var vt=0,ht=K;vt<ht.length;vt+=1){var tt=ht[vt],Ot=j.points[tt];Ot.zoom<=k||(Ot.zoom=k,O.push(Ot))}}}return O},v.prototype._getOriginId=function(T){return T-this.points.length>>5},v.prototype._getOriginZoom=function(T){return(T-this.points.length)%32},v.prototype._map=function(T,k){if(T.numPoints)return k?C({},T.properties):T.properties;var O=this.points[T.index].properties,z=this.options.map(O);return k&&z===O?C({},z):z};function p(I,T,k,O,z){return{x:d(I),y:d(T),zoom:1/0,id:k,parentId:-1,numPoints:O,properties:z}}function g(I,T){var k=I.geometry.coordinates,O=k[0],z=k[1];return{x:d(y(O)),y:d(x(z)),zoom:1/0,index:T,parentId:-1}}function m(I){return{type:"Feature",id:I.id,properties:_(I),geometry:{type:"Point",coordinates:[b(I.x),M(I.y)]}}}function _(I){var T=I.numPoints,k=T>=1e4?Math.round(T/1e3)+"k":T>=1e3?Math.round(T/100)/10+"k":T;return C(C({},I.properties),{cluster:!0,cluster_id:I.id,point_count:T,point_count_abbreviated:k})}function y(I){return I/360+.5}function x(I){var T=Math.sin(I*Math.PI/180),k=.5-.25*Math.log((1+T)/(1-T))/Math.PI;return k<0?0:k>1?1:k}function b(I){return(I-.5)*360}function M(I){var T=(180-I*360)*Math.PI/180;return 360*Math.atan(Math.exp(T))/Math.PI-90}function C(I,T){for(var k in T)I[k]=T[k];return I}function L(I){return I.x}function N(I){return I.y}return v})})(Gg);var VE=Gg.exports;const jE=Sn(VE);function Wg(e,t){var n=t.radius,r=n===void 0?40:n,i=t.maxZoom,a=i===void 0?18:i,o=t.minZoom,u=o===void 0?0:o,s=t.zoom,l=s===void 0?2:s;if(e.pointIndex){var c=e.pointIndex.getClusters(e.extent,Math.floor(l));return e.dataArray=HE(c),e}var f=new jE({radius:r,minZoom:u,maxZoom:a}),h={type:"FeatureCollection",features:[]};return h.features=e.dataArray.map(function(d){return{type:"Feature",geometry:{type:"Point",coordinates:d.coordinates},properties:$({},d)}}),f.load(h.features),f}function HE(e){return e.map(function(t,n){return $({coordinates:t.geometry.coordinates,_id:n+1},t.properties)})}function GE(e){if(e.length===0)throw new Error("max requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}function WE(e){if(e.length===0)throw new Error("min requires at least one data point");for(var t=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]);return t}function Yg(e){if(e.length===0)return 0;for(var t=e[0],n=0,r,i=1;i<e.length;i++)r=t+e[i]*1,Math.abs(t)>=Math.abs(e[i])?n+=t-r+e[i]:n+=e[i]-r+t,t=r;return t+n*1}function YE(e){if(e.length===0)throw new Error("mean requires at least one data point");return Yg(e)/e.length}var XE={min:WE,max:GE,mean:YE,sum:Yg};function ZE(e){var t=qE();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function qE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var QE=nt.cloneDeep,Vd=nt.isFunction,JE=nt.isString,KE=nt.mergeWith;function eC(e,t){if(Array.isArray(t))return t}var Xg=function(e){Te(n,e);var t=ZE(n);function n(r,i){var a;return ce(this,n),a=t.call(this),S(P(a),"type","source"),S(P(a),"isTile",!1),S(P(a),"inited",!1),S(P(a),"hooks",{init:new vn}),S(P(a),"parser",{type:"geojson"}),S(P(a),"transforms",[]),S(P(a),"cluster",!1),S(P(a),"clusterOptions",{enable:!1,radius:40,maxZoom:20,zoom:-99,method:"count"}),S(P(a),"invalidExtent",!1),S(P(a),"dataArrayChanged",!1),S(P(a),"cfg",{autoRender:!0}),a.originData=r,a.initCfg(i),a.init().then(function(){a.inited=!0,a.emit("update",{type:"inited"})}),a}return le(n,[{key:"getSourceCfg",value:function(){return this.cfg}},{key:"getClusters",value:function(i){return this.clusterIndex.getClusters(this.caculClusterExtent(2),i)}},{key:"getClustersLeaves",value:function(i){return this.clusterIndex.getLeaves(i,1/0)}},{key:"getParserType",value:function(){return this.parser.type}},{key:"updateClusterData",value:function(i){var a=this,o=this.clusterOptions,u=o.method,s=u===void 0?"sum":u,l=o.field,c=this.clusterIndex.getClusters(this.caculClusterExtent(2),Math.floor(i));this.clusterOptions.zoom=i,c.forEach(function(f){f.id||(f.properties.point_count=1)}),(l||Vd(s))&&(c=c.map(function(f){var h=f.id;if(h){var d=a.clusterIndex.getLeaves(h,1/0),v=d.map(function(m){return m.properties}),p;if(JE(s)&&l){var g=$2(v,l);p=XE[s](g)}Vd(s)&&(p=s(v)),f.properties.stat=p}else f.properties.point_count=1;return f})),this.data=Jl("geojson")({type:"FeatureCollection",features:c}),this.executeTrans()}},{key:"getFeatureById",value:function(i){var a=this.parser,o=a.type,u=o===void 0?"geojson":o,s=a.geometry;if(u==="geojson"&&!this.cluster){var l=i<this.originData.features.length?this.originData.features[i]:"null",c=QE(l);if(c!=null&&c.properties&&(this.transforms.length!==0||this.dataArrayChanged)){var f=this.data.dataArray.find(function(h){return h._id===i});c.properties=f}return c}else return u==="json"&&s?this.data.dataArray.find(function(h){return h._id===i}):i<this.data.dataArray.length?this.data.dataArray[i]:"null"}},{key:"updateFeaturePropertiesById",value:function(i,a){this.data.dataArray=this.data.dataArray.map(function(o){return o._id===i?$($({},o),a):o}),this.dataArrayChanged=!0,this.emit("update",{type:"update"})}},{key:"getFeatureId",value:function(i,a){var o=this.data.dataArray.find(function(u){return u[i]===a});return o==null?void 0:o._id}},{key:"setData",value:function(i,a){var o=this;this.originData=i,this.dataArrayChanged=!1,this.initCfg(a),this.init().then(function(){o.emit("update",{type:"update"})})}},{key:"reloadAllTile",value:function(){var i;(i=this.tileset)===null||i===void 0||i.reloadAll()}},{key:"reloadTilebyId",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileById(i,a,o)}},{key:"reloadTileByLnglat",value:function(i,a,o){var u;(u=this.tileset)===null||u===void 0||u.reloadTileByLnglat(i,a,o)}},{key:"getTileExtent",value:function(i,a){var o;return(o=this.tileset)===null||o===void 0?void 0:o.getTileExtent(i,a)}},{key:"getTileByZXY",value:function(i,a,o){var u;return(u=this.tileset)===null||u===void 0?void 0:u.getTileByZXY(i,a,o)}},{key:"reloadTileByExtent",value:function(i,a){var o;(o=this.tileset)===null||o===void 0||o.reloadTileByExtent(i,a)}},{key:"destroy",value:function(){var i;this.removeAllListeners(),this.originData=null,this.clusterIndex=null,this.data=null,(i=this.tileset)===null||i===void 0||i.destroy()}},{key:"processData",value:function(){var r=Q(w.mark(function a(){var o=this;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(l,c){try{o.excuteParser(),o.initCluster(),o.executeTrans(),l({})}catch(f){c(f)}}));case 1:case"end":return s.stop()}},a)}));function i(){return r.apply(this,arguments)}return i}()},{key:"initCfg",value:function(i){this.cfg=KE(this.cfg,i,eC);var a=this.cfg;a&&(a.parser&&(this.parser=a.parser),a.transforms&&(this.transforms=a.transforms),this.cluster=a.cluster||!1,a.clusterOptions&&(this.cluster=!0,this.clusterOptions=$($({},this.clusterOptions),a.clusterOptions)))}},{key:"init",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.inited=!1,u.next=3,this.processData();case 3:this.inited=!0;case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"excuteParser",value:function(){var i=this.parser,a=i.type||"geojson",o=Jl(a);this.data=o(this.originData,i),this.tileset=this.initTileset(),!i.cancelExtent&&(this.extent=R_(this.data.dataArray),this.setCenter(this.extent),this.invalidExtent=this.extent[0]===this.extent[2]||this.extent[1]===this.extent[3])}},{key:"setCenter",value:function(i){this.center=[(i[0]+i[2])/2,(i[1]+i[3])/2],(isNaN(this.center[0])||isNaN(this.center[1]))&&(this.center=[108.92361111111111,34.54083333333333])}},{key:"initTileset",value:function(){var i=this.data.tilesetOptions;if(i){if(this.isTile=!0,this.tileset)return this.tileset.updateOptions(i),this.tileset;var a=new d2($({},i));return a}}},{key:"executeTrans",value:function(){var i=this,a=this.transforms;a.forEach(function(o){var u=o.type,s=D1(u)(i.data,o);Object.assign(i.data,s)})}},{key:"initCluster",value:function(){if(this.cluster){var i=this.clusterOptions||{};this.clusterIndex=Wg(this.data,i)}}},{key:"caculClusterExtent",value:function(i){var a=[[-1/0,-1/0],[1/0,1/0]];return this.invalidExtent||(a=al(ro(this.extent),i)),a[0].concat(a[1])}}]),n}(Kt.EventEmitter);function tC(e,t){var n=t.callback;return n&&(e.dataArray=e.dataArray.filter(n)),e}function jd(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=nC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function nC(e,t){if(e){if(typeof e=="string")return Hd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hd(e,t)}}function Hd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Al=6378e3;function rC(e,t){var n=e.dataArray,r=t.size,i=r===void 0?10:r,a=i/(2*Math.PI*Al)*(256<<20)/2,o=iC(n,i),u=o.gridHash,s=o.gridOffset,l=sC(u,s,t);return{yOffset:a,xOffset:a,radius:a,type:"grid",dataArray:l}}function iC(e,t){var n=1/0,r=-1/0,i,a=jd(e),o;try{for(a.s();!(o=a.n()).done;){var u=o.value;i=u.coordinates[1],Number.isFinite(i)&&(n=i<n?i:n,r=i>r?i:r)}}catch(y){a.e(y)}finally{a.f()}var s=(n+r)/2,l=aC(t,s);if(l.xOffset<=0||l.yOffset<=0)return{gridHash:{},gridOffset:l};var c={},f=jd(e),h;try{for(f.s();!(h=f.n()).done;){var d=h.value,v=d.coordinates[1],p=d.coordinates[0];if(Number.isFinite(v)&&Number.isFinite(p)){var g=Math.floor((v+90)/l.yOffset),m=Math.floor((p+180)/l.xOffset),_="".concat(g,"-").concat(m);c[_]=c[_]||{count:0,points:[]},c[_].count+=1,c[_].points.push(d)}}}catch(y){f.e(y)}finally{f.f()}return{gridHash:c,gridOffset:l}}function aC(e,t){var n=oC(e),r=uC(t,e);return{yOffset:n,xOffset:r}}function oC(e){return e/Al*(180/Math.PI)}function uC(e,t){return t/Al*(180/Math.PI)/Math.cos(e*Math.PI/180)}function sC(e,t,n){return Object.keys(e).reduce(function(r,i,a){var o=i.split("-"),u=parseInt(o[0],10),s=parseInt(o[1],10),l={};if(n.field&&n.method){var c=H0(e[i].points,n.field);l[n.method]=j0[n.method](c)}return Object.assign(l,{_id:a,coordinates:dt([-180+t.xOffset*(s+.5),-90+t.yOffset*(u+.5)]),rawData:e[i].points,count:e[i].count}),r.push(l),r},[])}var Br=Math.PI/3,lC=[0,Br,2*Br,3*Br,4*Br,5*Br];function cC(e){return e[0]}function fC(e){return e[1]}function hC(){var e=0,t=0,n=1,r=1,i=cC,a=fC,o,u,s;function l(f){var h={},d=[],v,p=f.length;for(v=0;v<p;++v)if(!(isNaN(m=+i.call(null,g=f[v],v,f))||isNaN(_=+a.call(null,g,v,f)))){var g,m,_,y=Math.round(_=_/s),x=Math.round(m=m/u-(y&1)/2),b=_-y;if(Math.abs(b)*3>1){var M=m-x,C=x+(m<x?-1:1)/2,L=y+(_<y?-1:1),N=m-C,I=_-L;M*M+b*b>N*N+I*I&&(x=C+(y&1?1:-1)/2,y=L)}var T=x+"-"+y,k=h[T];k?k.push(g):(d.push(k=h[T]=[g]),k.x=(x+(y&1)/2)*u,k.y=y*s)}return d}function c(f){var h=0,d=0;return lC.map(function(v){var p=Math.sin(v)*f,g=-Math.cos(v)*f,m=p-h,_=g-d;return h=p,d=g,[m,_]})}return l.hexagon=function(f){return"m"+c(f==null?o:+f).join("l")+"z"},l.centers=function(){for(var f=[],h=Math.round(t/s),d=Math.round(e/u),v=h*s;v<r+o;v+=s,++h)for(var p=d*u+(h&1)*u/2;p<n+u/2;p+=u)f.push([p,v]);return f},l.mesh=function(){var f=c(o).slice(0,4).join("l");return l.centers().map(function(h){return"M"+h+"m"+f}).join("")},l.x=function(f){return arguments.length?(i=f,l):i},l.y=function(f){return arguments.length?(a=f,l):a},l.radius=function(f){return arguments.length?(o=+f,u=o*2*Math.sin(Br),s=o*1.5,l):o},l.size=function(f){return arguments.length?(e=t=0,n=+f[0],r=+f[1],l):[n-e,r-t]},l.extent=function(f){return arguments.length?(e=+f[0][0],t=+f[0][1],n=+f[1][0],r=+f[1][1],l):[[e,t],[n,r]]},l.radius(1)}var dC=6378e3;function vC(e,t){var n=e.dataArray,r=t.size,i=r===void 0?10:r,a=t.method,o=a===void 0?"sum":a,u=i/(2*Math.PI*dC)*(256<<20)/2,s=n.map(function(h){var d=dt(h.coordinates),v=Fe(d,2),p=v[0],g=v[1];return $($({},h),{},{coordinates:[p,g]})}),l=hC().radius(u).x(function(h){return h.coordinates[0]}).y(function(h){return h.coordinates[1]}),c=l(s),f={dataArray:c.map(function(h,d){var v;if(t.field&&o){var p=H0(h,t.field);h[o]=j0[o](p)}return v={},S(v,t.method,h[o]),S(v,"count",h.length),S(v,"rawData",h),S(v,"coordinates",[h.x,h.y]),S(v,"_id",d),v}),radius:u,xOffset:u,yOffset:u,type:"hexagon"};return f}function pC(e,t){var n=t.sourceField,r=t.targetField,i=t.data,a={};return i.forEach(function(o){a[o[n]]=o}),e.dataArray=e.dataArray.map(function(o){var u=o[r];return $($({},o),a[u])}),e}function gC(e,t){var n=t.callback;return n&&(e.dataArray=e.dataArray.map(n)),e}Jt("rasterTile",RE);Jt("mvt",Kx);Jt("geojsonvt",fx);Jt("testTile",NE);Jt("geojson",G2);Jt("jsonTile",vx);Jt("image",lg);Jt("csv",V2);Jt("json",ag);Jt("raster",ob);Jt("rasterRgb",OE);Jt("rgb",UE);Jt("ndi",$E);ii("cluster",Wg);ii("filter",tC);ii("join",pC);ii("map",gC);ii("grid",rC);ii("hexagon",vC);window._iconfont_svg_string_3580659='<svg><symbol id="l7-icon-area1" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.064889 219.136l38.798223 466.261333a113.777778 113.777778 0 1 1-133.518223 145.237334H279.210667a113.777778 113.777778 0 1 1-60.302223-137.272889L697.856 227.555556A113.777778 113.777778 0 0 1 796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m577.592889-534.072889L269.198222 796.444444c4.152889 7.168 7.509333 14.791111 10.012445 22.812445h465.578666a114.119111 114.119111 0 0 1 65.479111-71.224889l-38.798222-466.261333a112.924444 112.924444 0 0 1-23.210666-7.964445zM796.444444 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-area" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.008 219.136l38.855112 466.261333a113.777778 113.777778 0 0 1-16.497778 224.540445L853.333333 967.111111a113.777778 113.777778 0 0 1-108.544-79.644444H279.210667a113.834667 113.834667 0 0 1-100.067556 79.36L170.666667 967.111111a113.777778 113.777778 0 0 1-17.066667-226.304l30.492444-351.175111a113.777778 113.777778 0 0 1 34.986667-218.680889L227.555556 170.666667a113.777778 113.777778 0 0 1 99.896888 59.221333l355.84-71.395556a113.777778 113.777778 0 0 1 104.675556-101.262222L796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m526.051555-582.314666L340.650667 296.903111a113.891556 113.891556 0 0 1-88.462223 98.645333l-30.947555 355.84c27.477333 13.653333 48.64 38.115556 58.026667 67.754667h465.521777a114.119111 114.119111 0 0 1 65.536-71.168l-38.855111-466.261333a113.948444 113.948444 0 0 1-74.752-56.206222zM227.555556 238.933333a45.511111 45.511111 0 1 0 0 91.022223 45.511111 45.511111 0 0 0 0-91.022223z m568.888888-113.777777a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-delete" viewBox="0 0 1024 1024"><path d="M705.422222 85.333333a34.133333 34.133333 0 0 1 34.133334 34.133334V227.555556h136.533333a34.133333 34.133333 0 0 1 0 68.266666h-25.543111l-24.348445 610.076445a34.133333 34.133333 0 0 1-34.133333 32.768H231.936a34.133333 34.133333 0 0 1-34.076444-32.768L173.340444 295.822222H147.911111a34.133333 34.133333 0 1 1 0-68.266666H284.444444V119.466667a34.133333 34.133333 0 0 1 34.133334-34.133334h386.844444zM241.720889 295.822222l22.983111 574.577778h494.535111l23.04-574.577778H241.720889zM671.288889 153.6H352.711111V227.555556h318.577778V153.6z"  ></path></symbol><symbol id="l7-icon-color" viewBox="0 0 1024 1024"><path d="M512 56.888889c9.841778 0 19.626667 0.341333 29.354667 0.910222 69.176889 4.437333 119.068444 62.577778 124.302222 131.072l0.455111 9.386667c0.739556 44.600889 15.303111 84.935111 44.999111 114.631111 27.022222 27.022222 62.805333 41.528889 102.570667 44.430222l12.060444 0.568889c72.476444 1.194667 135.793778 52.451556 140.458667 124.757333 1.137778 18.261333 1.251556 36.807111 0.170667 55.637334-13.198222 233.585778-211.399111 424.220444-445.326223 428.714666L512 967.111111a455.111111 455.111111 0 0 1-455.054222-464.156444c4.551111-233.927111 195.185778-432.128 428.771555-445.326223C494.535111 57.116444 503.296 56.888889 512 56.888889z m0 68.266667a385.706667 385.706667 0 0 0-22.414222 0.625777C291.726222 136.988444 129.080889 305.948444 125.155556 504.263111c-4.152889 212.366222 163.100444 387.185778 372.508444 394.353778l13.425778 0.227555 8.533333-0.113777c198.371556-3.811556 367.331556-166.456889 378.538667-364.373334a396.174222 396.174222 0 0 0-0.170667-47.331555c-1.991111-31.232-29.127111-56.604444-67.128889-60.472889l-8.248889-0.455111-14.051555-0.682667c-56.547556-4.209778-107.406222-25.884444-145.806222-64.284444-38.855111-38.798222-60.416-90.225778-64.284445-145.749334l-0.910222-21.333333c-2.901333-38.001778-28.785778-66.048-60.302222-68.096A433.891556 433.891556 0 0 0 512 125.155556zM438.044444 682.666667a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m-170.666666-227.555556a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m142.222222-227.555555a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z"  ></path></symbol><symbol id="l7-icon-base-map" viewBox="0 0 1024 1024"><path d="M923.761778 115.029333A34.133333 34.133333 0 0 1 967.111111 147.911111v624.128a34.133333 34.133333 0 0 1-22.186667 32.028445l-278.755555 103.992888a34.133333 34.133333 0 0 1-23.665778 0.056889L381.724444 812.714667a34.133333 34.133333 0 0 0-23.665777 0.113777L102.968889 908.060444a34.133333 34.133333 0 0 1-45.738667-26.965333L56.888889 876.088889V251.960889a34.133333 34.133333 0 0 1 22.186667-32.028445l278.755555-103.992888a34.133333 34.133333 0 0 1 20.992-0.967112l266.183111 72.988445a34.133333 34.133333 0 0 0 18.204445 0zM403.911111 192.625778v555.576889l216.177778 79.075555V251.960889l-216.177778-59.335111z m-68.266667 4.380444L125.155556 275.569778v551.310222l210.432-78.506667V197.006222zM898.844444 192.853333l-210.545777 58.936889v575.089778l210.545777-78.563556V192.853333z"  ></path></symbol><symbol id="l7-icon-dot" viewBox="0 0 1024 1024"><path d="M341.333333 739.555556a113.777778 113.777778 0 0 1 8.533334 227.271111L341.333333 967.111111a113.777778 113.777778 0 0 1-8.533333-227.271111L341.333333 739.555556z m0 68.266666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM910.222222 341.333333a113.777778 113.777778 0 0 1 8.533334 227.271111L910.222222 568.888889a113.777778 113.777778 0 0 1-8.533333-227.271111L910.222222 341.333333z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM227.555556 56.888889a113.777778 113.777778 0 0 1 8.533333 227.271111L227.555556 284.444444a113.777778 113.777778 0 0 1-8.533334-227.271111L227.555556 56.888889z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-display" viewBox="0 0 1024 1024"><path d="M512 170.666667c284.444444 0 455.111111 227.555556 455.111111 341.333333s-170.666667 341.333333-455.111111 341.333333-455.111111-227.555556-455.111111-341.333333 170.666667-341.333333 455.111111-341.333333z m0 68.266666C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 110.762667 178.574222 273.066667 386.844444 273.066667s386.844444-162.304 386.844444-273.066667c0-110.762667-178.574222-273.066667-386.844444-273.066667zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-enlarge" viewBox="0 0 1024 1024"><path d="M546.133333 147.911111l-0.056889 329.955556H876.088889a34.133333 34.133333 0 0 1 0 68.266666H546.076444v329.955556a34.133333 34.133333 0 0 1-68.266666 0V546.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h329.898667V147.911111a34.133333 34.133333 0 0 1 68.266666 0z"  ></path></symbol><symbol id="l7-icon-export-picture" viewBox="0 0 1024 1024"><path d="M883.873684 161.684211a32.336842 32.336842 0 0 1 32.336842 32.336842v582.063158a32.336842 32.336842 0 0 1-32.336842 32.336842H86.231579a32.336842 32.336842 0 0 1-32.336842-32.336842V194.021053a32.336842 32.336842 0 0 1 32.336842-32.336842h797.642105z m-32.336842 64.673684H118.568421v517.389473h170.792421a32.175158 32.175158 0 0 1 0.431158-0.646736l3.772632-4.473264 330.320842-330.374736a32.336842 32.336842 0 0 1 38.588631-5.389474l4.473263 3.018105 184.589474 147.725474V226.357895z m-202.428631 248.131368L379.850105 743.747368H851.536842v-107.304421l-202.428631-161.953684zM323.368421 323.368421a107.789474 107.789474 0 1 1 0 215.578947 107.789474 107.789474 0 0 1 0-215.578947z m0 64.673684a43.115789 43.115789 0 1 0 0 86.231579 43.115789 43.115789 0 0 0 0-86.231579z"  ></path></symbol><symbol id="l7-icon-exit-fullscreen" viewBox="0 0 1024 1024"><path d="M841.955556 591.644444a34.133333 34.133333 0 0 1 5.518222 67.811556l-5.518222 0.455111h-133.745778l192 192.056889a34.133333 34.133333 0 0 1-38.343111 55.182222l-5.176889-2.958222-4.721778-3.982222L659.911111 708.266667V841.955556a34.133333 34.133333 0 0 1-28.615111 33.678222L625.777778 876.088889a34.133333 34.133333 0 0 1-33.678222-28.615111L591.644444 841.955556V625.777778a34.133333 34.133333 0 0 1 28.615112-33.678222L625.777778 591.644444h216.177778z m-443.733334 0a34.133333 34.133333 0 0 1 33.678222 28.615112L432.355556 625.777778v216.177778a34.133333 34.133333 0 0 1-67.811556 5.518222L364.088889 841.955556v-133.745778l-192.056889 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L315.847111 659.911111H182.044444a34.133333 34.133333 0 0 1-33.678222-28.615111L147.911111 625.777778a34.133333 34.133333 0 0 1 28.615111-33.678222L182.044444 591.644444H398.222222zM167.310222 119.808l4.721778 3.982222L364.088889 315.847111V182.044444a34.133333 34.133333 0 0 1 28.615111-33.678222L398.222222 147.911111a34.133333 34.133333 0 0 1 33.678222 28.615111L432.355556 182.044444V398.222222a34.133333 34.133333 0 0 1-28.615112 33.678222L398.222222 432.355556H182.044444a34.133333 34.133333 0 0 1-5.518222-67.811556L182.044444 364.088889h133.802667L123.790222 172.032a34.133333 34.133333 0 0 1 43.52-52.224z m732.899556 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L708.266667 364.088889H841.955556a34.133333 34.133333 0 0 1 33.678222 28.615111L876.088889 398.222222a34.133333 34.133333 0 0 1-28.615111 33.678222L841.955556 432.355556H625.777778a34.133333 34.133333 0 0 1-33.678222-28.615112L591.644444 398.222222V182.044444a34.133333 34.133333 0 0 1 67.811556-5.518222l0.455111 5.518222v133.802667l192.056889-192.056889a34.133333 34.133333 0 0 1 48.241778 0z"  ></path></symbol><symbol id="l7-icon-line" viewBox="0 0 1024 1024"><path d="M853.333333 56.888889a113.777778 113.777778 0 0 1 8.533334 227.271111L853.333333 284.444444c-19.000889 0-36.864-4.664889-52.622222-12.856888l-529.123555 529.066666a113.777778 113.777778 0 0 1-92.387556 166.115556L170.666667 967.111111a113.777778 113.777778 0 0 1-8.533334-227.271111L170.666667 739.555556c19.000889 0 36.864 4.664889 52.622222 12.856888l529.123555-529.066666a113.777778 113.777778 0 0 1 92.387556-166.115556L853.333333 56.888889zM170.666667 807.822222a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m682.666666-682.666666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-layer" viewBox="0 0 1024 1024"><path d="M767.089778 625.777778l180.167111 82.773333a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730667-420.977778 193.422222a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422222a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730667L256.853333 625.777778l81.749334 37.546666L172.771556 739.555556 512 895.374222 851.171556 739.555556l-165.831112-76.231112 81.749334-37.546666z m0-227.555556l180.167111 82.773334a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730666-420.977778 193.422223a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422223a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730666L256.853333 398.222222l81.749334 37.546667-165.831111 76.174222L512 667.818667l339.171556-155.875556-165.831112-76.174222L767.089778 398.222222zM497.720889 60.017778a34.133333 34.133333 0 0 1 28.558222 0l420.977778 193.422222a34.133333 34.133333 0 0 1 0 62.008889l-420.977778 193.422222a34.133333 34.133333 0 0 1-28.558222 0l-420.977778-193.422222a34.133333 34.133333 0 0 1 0-62.008889zM512 128.568889L172.771556 284.387556 512 440.263111l339.171556-155.875555L512 128.568889z"  ></path></symbol><symbol id="l7-icon-narrow" viewBox="0 0 1024 1024"><path d="M910.222222 512a34.133333 34.133333 0 0 1-34.133333 34.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h728.177778a34.133333 34.133333 0 0 1 34.133333 34.133333z"  ></path></symbol><symbol id="l7-icon-fullscreen" viewBox="0 0 1024 1024"><path d="M645.176889 597.674667l4.721778 3.982222L841.955556 793.6l0.056888-133.688889a34.133333 34.133333 0 0 1 28.615112-33.678222L876.088889 625.777778a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 659.911111v216.177778a34.133333 34.133333 0 0 1-28.615111 33.678222L876.088889 910.222222h-216.177778a34.133333 34.133333 0 0 1-5.518222-67.811555l5.518222-0.455111h133.745778l-192-192.056889a34.133333 34.133333 0 0 1 43.52-52.224z m-222.833778 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L230.286222 841.955556H364.088889a34.133333 34.133333 0 0 1 33.678222 28.615111L398.222222 876.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L364.088889 910.222222H147.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 876.088889v-216.177778a34.133333 34.133333 0 0 1 67.811555-5.518222l0.455111 5.518222-0.056888 133.745778 192.113777-192a34.133333 34.133333 0 0 1 48.241778 0zM364.088889 113.777778a34.133333 34.133333 0 0 1 5.518222 67.811555L364.088889 182.044444H230.343111l192 192.056889a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222-192.113777-192.056889L182.044444 364.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L147.911111 398.222222a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 364.088889V147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L147.911111 113.777778h216.177778z m512 0a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 147.911111v216.177778a34.133333 34.133333 0 0 1-67.811555 5.518222L841.955556 364.088889l-0.056889-133.745778-192 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L793.6 182.044444H659.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L625.777778 147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L659.911111 113.777778h216.177778z"  ></path></symbol><symbol id="l7-icon-hide" viewBox="0 0 1024 1024"><path d="M875.52 87.836444a34.133333 34.133333 0 0 1 7.281778 43.121778l-3.527111 5.006222-682.666667 796.444445a34.133333 34.133333 0 0 1-55.409778-39.367111l3.527111-5.006222 97.166223-113.379556C123.164444 697.969778 56.888889 582.940444 56.888889 512c0-113.777778 170.666667-341.333333 455.111111-341.333333a496.64 496.64 0 0 1 208.952889 45.112889l106.439111-124.188445a34.133333 34.133333 0 0 1 48.128-3.754667z m-38.684444 202.524445C921.031111 362.951111 967.111111 452.835556 967.111111 512c0 113.777778-170.666667 341.333333-455.111111 341.333333-50.631111 0-97.678222-7.224889-140.8-19.740444l50.232889-58.595556A417.393778 417.393778 0 0 0 512 785.066667c208.270222 0 386.844444-162.304 386.844444-273.066667 0-52.849778-40.675556-117.418667-105.813333-170.496l43.804445-51.2zM512 238.933333C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 66.787556 64.853333 152.291556 162.133333 209.692444L377.173333 616.675556a170.666667 170.666667 0 0 1 217.713778-253.895112l78.620445-91.704888A432.924444 432.924444 0 0 0 512 238.933333z m166.684444 236.088889a170.666667 170.666667 0 0 1-177.664 207.303111l177.607112-207.303111zM512 409.6a102.4 102.4 0 0 0-88.746667 153.486222L548.864 416.426667A102.172444 102.172444 0 0 0 512 409.6z"  ></path></symbol><symbol id="l7-icon-rectangle" viewBox="0 0 1024 1024"><path d="M170.666667 56.888889a113.777778 113.777778 0 0 1 108.544 79.644444H853.333333a34.133333 34.133333 0 0 1 33.678223 28.615111L887.466667 170.666667v574.122666a113.777778 113.777778 0 1 1-142.677334 142.734223L170.666667 887.466667a34.133333 34.133333 0 0 1-33.678223-28.615111L136.533333 853.333333V279.210667A113.777778 113.777778 0 0 1 170.666667 56.888889z m682.666666 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-34.133333-603.022222H279.210667a114.062222 114.062222 0 0 1-74.353778 74.410667L204.8 819.2h539.989333a114.062222 114.062222 0 0 1 74.410667-74.410667V204.8zM170.666667 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-ranging" viewBox="0 0 1024 1024"><path d="M723.171556 50.403556l250.424888 250.424888a31.061333 31.061333 0 0 1 0 43.918223L344.746667 973.596444a31.061333 31.061333 0 0 1-43.918223 0L50.403556 723.171556a31.061333 31.061333 0 0 1 0-43.918223L679.253333 50.403556a31.061333 31.061333 0 0 1 43.918223 0z m-21.959112 74.524444l-39.765333 39.822222 98.986667 98.872889a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222 62.179556 62.122667a34.133333 34.133333 0 0 1-44.088889 51.882667L563.2 387.242667 501.077333 325.063111 437.191111 388.949333l98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222L387.242667 563.2a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.584-62.122667-62.179556-63.886222 63.886222 98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-39.765333 39.822222 197.802667 197.745778 576.284444-576.284444-197.802667-197.745778z"  ></path></symbol><symbol id="l7-icon-reposition" viewBox="0 0 1024 1024"><path d="M512 56.888889a34.133333 34.133333 0 0 1 34.133333 34.133333v24.177778A398.336 398.336 0 0 1 908.856889 477.866667h24.177778a34.133333 34.133333 0 0 1 0 68.266666h-24.177778A398.336 398.336 0 0 1 546.133333 908.856889L546.133333 932.977778a34.133333 34.133333 0 0 1-68.266666 0v-24.177778A398.336 398.336 0 0 1 115.2 546.133333L91.022222 546.133333a34.133333 34.133333 0 1 1 0-68.266666h24.177778A398.336 398.336 0 0 1 477.866667 115.2V91.022222A34.133333 34.133333 0 0 1 512 56.888889z m34.190222 126.862222L546.133333 193.422222a34.133333 34.133333 0 1 1-68.266666 0v-9.671111A330.069333 330.069333 0 0 0 183.751111 477.866667h9.671111a34.133333 34.133333 0 1 1 0 68.266666l-9.671111 0.056889A330.069333 330.069333 0 0 0 477.866667 840.248889V830.577778a34.133333 34.133333 0 0 1 68.266666 0l0.056889 9.671111A330.069333 330.069333 0 0 0 840.248889 546.133333L830.577778 546.133333a34.133333 34.133333 0 0 1 0-68.266666h9.671111A330.069333 330.069333 0 0 0 546.133333 183.751111zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-round" viewBox="0 0 1024 1024"><path d="M512 56.888889a455.111111 455.111111 0 0 1 391.395556 687.502222 113.777778 113.777778 0 0 1-159.061334 158.890667A455.111111 455.111111 0 0 1 120.604444 279.608889 113.777778 113.777778 0 0 1 279.608889 120.604444 452.835556 452.835556 0 0 1 512 56.888889z m0 68.266667a384.910222 384.910222 0 0 0-191.715556 50.744888A113.777778 113.777778 0 0 1 175.957333 320.284444a386.844444 386.844444 0 0 0 527.815111 527.758223 113.777778 113.777778 0 0 1 144.270223-144.440889A386.844444 386.844444 0 0 0 512 125.155556z m299.406222 640.739555a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM212.593778 167.082667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  ></path></symbol></svg>',function(e){try{let l=function(){u||(u=!0,a())},c=function(){try{o.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}l()};var n=(n=document.getElementsByTagName("script"))[n.length-1],t=n.getAttribute("data-injectcss"),n=n.getAttribute("data-disable-injectsvg");if(!n){var r,i,a,o,u,s=function(h,d){d.parentNode.insertBefore(h,d)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch{}}r=function(){var h,d=document.createElement("div");d.innerHTML=e._iconfont_svg_string_3580659,(d=d.getElementsByTagName("svg")[0])&&(d.setAttribute("aria-hidden","true"),d.style.position="absolute",d.style.width=0,d.style.height=0,d.style.overflow="hidden",d=d,(h=document.body).firstChild?s(d,h.firstChild):h.appendChild(d))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(r,0):(i=function(){document.removeEventListener("DOMContentLoaded",i,!1),r()},document.addEventListener("DOMContentLoaded",i,!1)):document.attachEvent&&(a=r,o=e.document,u=!1,c(),o.onreadystatechange=function(){o.readyState=="complete"&&(o.onreadystatechange=null,l())})}}catch{}}(window);function mC(e){var t=yC();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function yC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _C=function(e){Te(n,e);var t=mC(n);function n(r){var i;return ce(this,n),i=t.call(this),n.controlCount++,i.controlOption=$($({},i.getDefault(r)),r||{}),i}return le(n,[{key:"getOptions",value:function(){return this.controlOption}},{key:"setOptions",value:function(i){var a=this.getDefault(i);Object.entries(i).forEach(function(o){var u=Fe(o,2),s=u[0],l=u[1];l===void 0&&(i[s]=a[s])}),"position"in i&&this.setPosition(i.position),"className"in i&&this.setClassName(i.className),"style"in i&&this.setStyle(i.style),this.controlOption=$($({},this.controlOption),i)}},{key:"addTo",value:function(i){this.mapsService=i.get(se.IMapService),this.renderService=i.get(se.IRendererService),this.layerService=i.get(se.ILayerService),this.controlService=i.get(se.IControlService),this.configService=i.get(se.IGlobalConfigService),this.scene=i.get(se.ISceneService),this.sceneContainer=i,this.isShow=!0,this.container=this.onAdd(),Ui(this.container,"l7-control");var a=this.controlOption,o=a.className,u=a.style;return o&&this.setClassName(o),u&&this.setStyle(u),this.insertContainer(),this.emit("add",this),this}},{key:"remove",value:function(){if(!this.mapsService)return this;no(this.container),this.onRemove(),this.emit("remove",this)}},{key:"onAdd",value:function(){return er("div")}},{key:"onRemove",value:function(){}},{key:"show",value:function(){var i=this.container;es(i,"l7-control--hide"),this.isShow=!0,this.emit("show",this)}},{key:"hide",value:function(){var i=this.container;Ui(i,"l7-control--hide"),this.isShow=!1,this.emit("hide",this)}},{key:"getDefault",value:function(i){return{position:xs.TOPRIGHT,name:"".concat(n.controlCount)}}},{key:"getContainer",value:function(){return this.container}},{key:"getIsShow",value:function(){return this.isShow}},{key:"_refocusOnMap",value:function(i){if(this.mapsService&&i&&i.screenX>0&&i.screenY>0){var a=this.mapsService.getContainer();a!==null&&a.focus()}}},{key:"setPosition",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xs.TOPLEFT,a=this.controlService;return a&&a.removeControl(this),this.controlOption.position=i,a&&a.addControl(this,this.sceneContainer),this}},{key:"setClassName",value:function(i){var a=this.container,o=this.controlOption.className;o&&es(a,o),i&&Ui(a,i)}},{key:"setStyle",value:function(i){var a=this.container;i?a.setAttribute("style",i):a.removeAttribute("style")}},{key:"insertContainer",value:function(){var i=this.controlOption.position,a=this.container;if(i instanceof Element)i.appendChild(a);else{var o=this.controlService.controlCorners[i];["bottomleft","bottomright","righttop","rightbottom"].includes(i)?o.insertBefore(a,o.firstChild):o.appendChild(a)}}},{key:"checkUpdateOption",value:function(i,a){return a.some(function(o){return o in i})}}]),n}(ol);S(_C,"controlCount",0);function xC(e){var t=bC();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function bC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var SC=function(e){Te(n,e);var t=xC(n);function n(r,i){var a;return ce(this,n),a=t.call(this),S(P(a),"isShow",!1),S(P(a),"timeout",null),S(P(a),"show",function(){return a.isShow||!a.contentDOM.innerHTML||(a.resetPopperPosition(),es(a.popperDOM,"l7-popper-hide"),a.isShow=!0,a.option.unique&&n.conflictPopperList.forEach(function(o){o!==P(a)&&o.isShow&&o.hide()}),a.emit("show"),window.addEventListener("pointerdown",a.onPopperUnClick)),P(a)}),S(P(a),"hide",function(){return a.isShow&&(Ui(a.popperDOM,"l7-popper-hide"),a.isShow=!1,a.emit("hide"),window.removeEventListener("pointerdown",a.onPopperUnClick)),P(a)}),S(P(a),"setHideTimeout",function(){a.timeout||(a.timeout=window.setTimeout(function(){a.isShow&&(a.hide(),a.timeout=null)},300))}),S(P(a),"clearHideTimeout",function(){a.timeout&&(window.clearTimeout(a.timeout),a.timeout=null)}),S(P(a),"onBtnClick",function(){a.isShow?a.hide():a.show()}),S(P(a),"onPopperUnClick",function(o){k_(o.target,[".l7-button-control",".l7-popper-content"])||a.hide()}),S(P(a),"onBtnMouseLeave",function(){a.setHideTimeout()}),S(P(a),"onBtnMouseMove",function(){a.clearHideTimeout(),!a.isShow&&a.show()}),a.button=r,a.option=i,a.init(),i.unique&&n.conflictPopperList.push(P(a)),a}return le(n,[{key:"buttonRect",get:function(){return this.button.getBoundingClientRect()}},{key:"getPopperDOM",value:function(){return this.popperDOM}},{key:"getIsShow",value:function(){return this.isShow}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(i){typeof i=="string"?this.contentDOM.innerHTML=i:i instanceof HTMLElement&&(M_(this.contentDOM),this.contentDOM.appendChild(i)),this.content=i}},{key:"init",value:function(){var i=this.option.trigger;this.popperDOM=this.createPopper(),i==="click"?this.button.addEventListener("click",this.onBtnClick):(this.button.addEventListener("mousemove",this.onBtnMouseMove),this.button.addEventListener("mouseleave",this.onBtnMouseLeave),this.popperDOM.addEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.addEventListener("mouseleave",this.onBtnMouseLeave))}},{key:"destroy",value:function(){this.button.removeEventListener("click",this.onBtnClick),this.button.removeEventListener("mousemove",this.onBtnMouseMove),this.button.removeEventListener("mousemove",this.onBtnMouseLeave),this.popperDOM.removeEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.removeEventListener("mouseleave",this.onBtnMouseLeave),no(this.popperDOM)}},{key:"resetPopperPosition",value:function(){var i={},a=this.option,o=a.container,u=a.offset,s=u===void 0?[0,0]:u,l=a.placement,c=Fe(s,2),f=c[0],h=c[1],d=this.button.getBoundingClientRect(),v=o.getBoundingClientRect(),p=T_(d,v),g=p.left,m=p.right,_=p.top,y=p.bottom,x=!1,b=!1;/^(left|right)/.test(l)?(l.includes("left")?i.right="".concat(d.width+m,"px"):l.includes("right")&&(i.left="".concat(d.width+g,"px")),l.includes("start")?i.top="".concat(_,"px"):l.includes("end")?i.bottom="".concat(y,"px"):(i.top="".concat(_+d.height/2,"px"),b=!0,i.transform="translate(".concat(f,"px, calc(").concat(h,"px - 50%))"))):/^(top|bottom)/.test(l)&&(l.includes("top")?i.bottom="".concat(d.height+y,"px"):l.includes("bottom")&&(i.top="".concat(d.height+_,"px")),l.includes("start")?i.left="".concat(g,"px"):l.includes("end")?i.right="".concat(m,"px"):(i.left="".concat(g+d.width/2,"px"),x=!0,i.transform="translate(calc(".concat(f,"px - 50%), ").concat(h,"px)"))),i.transform="translate(calc(".concat(f,"px - ").concat(x?"50%":"0%","), calc(").concat(h,"px - ").concat(b?"50%":"0%",")");var M=l.split("-");M.length&&Ui(this.popperDOM,M.map(function(C){return"l7-popper-".concat(C)}).join(" ")),C_(this.popperDOM,w_(i))}},{key:"createPopper",value:function(){var i=this.option,a=i.container,o=i.className,u=o===void 0?"":o,s=i.content,l=er("div","l7-popper l7-popper-hide ".concat(u)),c=er("div","l7-popper-content"),f=er("div","l7-popper-arrow");return l.appendChild(c),l.appendChild(f),a.appendChild(l),this.popperDOM=l,this.contentDOM=c,s&&this.setContent(s),l}}]),n}(Kt.EventEmitter);S(SC,"conflictPopperList",[]);function AC(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=EC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function EC(e,t){if(e){if(typeof e=="string")return Gd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gd(e,t)}}function Gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Wd=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Pn=function(){if(typeof document>"u")return!1;for(var e=Wd[0],t={},n=0,r=Wd;n<r.length;n++){var i=r[n],a=i==null?void 0:i[1];if(a in document){var o=AC(i.entries()),u;try{for(o.s();!(u=o.n()).done;){var s=Fe(u.value,2),l=s[0],c=s[1];t[e[l]]=c}}catch(f){o.e(f)}finally{o.f()}return t}}return!1}(),Yd={change:Pn.fullscreenchange,error:Pn.fullscreenerror},rn={request:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise(function(r,i){var a=function u(){rn.off("change",u),r()};rn.on("change",a);var o=t[Pn.requestFullscreen](n);o instanceof Promise&&o.then(a).catch(i)})},exit:function(){return new Promise(function(t,n){if(!rn.isFullscreen){t();return}var r=function a(){rn.off("change",a),t()};rn.on("change",r);var i=document[Pn.exitFullscreen]();i instanceof Promise&&i.then(r).catch(n)})},toggle:function(t,n){return rn.isFullscreen?rn.exit():rn.request(t,n)},onchange:function(t){rn.on("change",t)},onerror:function(t){rn.on("error",t)},on:function(t,n){var r=Yd[t];r&&document.addEventListener(r,n,!1)},off:function(t,n){var r=Yd[t];r&&document.removeEventListener(r,n,!1)},raw:Pn};Object.defineProperties(rn,{isFullscreen:{get:function(){return!!document[Pn.fullscreenElement]}},element:{enumerable:!0,get:function(){var t;return(t=document[Pn.fullscreenElement])!==null&&t!==void 0?t:void 0}},isEnabled:{enumerable:!0,get:function(){return!!document[Pn.fullscreenEnabled]}}});Pn||(rn={isEnabled:!1});var Gn,Zg=(Gn={},S(Gn,Xn.additive,{enable:!0,func:{srcRGB:R.ONE,dstRGB:R.ONE,srcAlpha:1,dstAlpha:1}}),S(Gn,Xn.none,{enable:!1}),S(Gn,Xn.normal,{enable:!0,func:{srcRGB:R.SRC_ALPHA,dstRGB:R.ONE_MINUS_SRC_ALPHA,srcAlpha:1,dstAlpha:1}}),S(Gn,Xn.subtractive,{enable:!0,func:{srcRGB:R.ONE,dstRGB:R.ONE,srcAlpha:R.ZERO,dstAlpha:R.ONE_MINUS_SRC_COLOR},equation:{rgb:R.FUNC_SUBTRACT,alpha:R.FUNC_SUBTRACT}}),S(Gn,Xn.max,{enable:!0,func:{srcRGB:R.ONE,dstRGB:R.ONE},equation:{rgb:R.MAX_EXT}}),S(Gn,Xn.min,{enable:!0,func:{srcRGB:R.ONE,dstRGB:R.ONE},equation:{rgb:R.MIN_EXT}}),Gn);function qg(e){return e.map(function(t){return typeof t=="string"&&(t=[t,{}]),t})}function Qg(e,t,n,r){var i=e.multiPassRenderer,a=e.getLayerConfig(),o=a.enableTAA;return o?i.add(r("taa")):i.add(r("render")),qg(t).forEach(function(u){var s=Fe(u,2),l=s[0],c=s[1];i.add(n(l),c)}),i.add(n("copy")),i}var CC=function(){function e(t){ce(this,e),this.layer=t}return le(e,[{key:"pickRender",value:function(n){var r=this.layer.getContainer(),i=r.get(se.ILayerService),a=this.layer;if(a.tileLayer)return a.tileLayer.pickRender(n);a.hooks.beforePickingEncode.call(),i.renderTileLayerMask(a),a.renderModels({ispick:!0}),a.hooks.afterPickingEncode.call()}},{key:"pick",value:function(){var t=Q(w.mark(function r(i,a){var o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(o=this.layer.getContainer(),u=o.get(se.IPickingService),i.type!=="RasterLayer"){l.next=4;break}return l.abrupt("return",this.pickRasterLayer(i,a));case 4:return this.pickRender(a),l.abrupt("return",u.pickFromPickingFBO(i,a));case 6:case"end":return l.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"pickRasterLayer",value:function(n,r,i){var a=this.layer.getContainer(),o=a.get(se.IPickingService),u=a.get(se.IMapService),s=this.layer.getSource().extent,l=L_(r.lngLat,s),c={x:r.x,y:r.y,type:r.type,lngLat:r.lngLat,target:r,rasterValue:null},f=i||n;if(l){var h=this.readRasterValue(n,s,u,r.x,r.y);return c.rasterValue=h,o.triggerHoverOnLayer(f,c),!0}else return c.type=r.type==="mousemove"?"mouseout":"un"+r.type,o.triggerHoverOnLayer(f,$($({},c),{},{type:"unpick"})),o.triggerHoverOnLayer(f,c),!1}},{key:"readRasterValue",value:function(n,r,i,a,o){var u=n.getSource().data.dataArray[0],s=Fe(r,4),l=s[0],c=l===void 0?0:l,f=s[1],h=f===void 0?0:f,d=s[2],v=d===void 0?10:d,p=s[3],g=p===void 0?-10:p,m=i.lngLatToContainer([c,h]),_=i.lngLatToContainer([v,g]),y=_.x-m.x,x=m.y-_.y,b=[(a-m.x)/y,(o-_.y)/x],M=u.width||1,C=u.height||1,L=Math.floor(b[0]*M),N=Math.floor(b[1]*C),I=Math.max(0,N-1)*M+L,T=u.data[I];return T}},{key:"selectFeature",value:function(n){var r=this.layer,i=Fe(n,3),a=i[0],o=i[1],u=i[2];r.hooks.beforeSelect.call([a,o,u])}},{key:"highlightPickedFeature",value:function(n){var r=Fe(n,3),i=r[0],a=r[1],o=r[2];this.layer.hooks.beforeHighlight.call([i,a,o])}},{key:"getFeatureById",value:function(n){return this.layer.getSource().getFeatureById(n)}}]),e}(),wC=function(){function e(t){ce(this,e),this.layer=t;var n=this.layer.getContainer();this.rendererService=n.get(se.IRendererService)}return le(e,[{key:"getColorTexture",value:function(n,r){var i=this.getTextureKey(n,r);return this.key===i?this.colorTexture:(this.createColorTexture(n,r),this.key=i,this.colorTexture)}},{key:"createColorTexture",value:function(n,r){var i=this.rendererService.createTexture2D,a=this.getColorRampBar(n,r),o=i({data:new Uint8Array(a.data),width:a.width,height:a.height,flipY:!1,unorm:!0});return this.colorTexture=o,o}},{key:"setColorTexture",value:function(n,r,i){this.key=this.getTextureKey(r,i),this.colorTexture=n}},{key:"destroy",value:function(){var n;(n=this.colorTexture)===null||n===void 0||n.destroy()}},{key:"getColorRampBar",value:function(n,r){switch(n.type){case"cat":return d_(n);case"quantize":return v_(n);case"custom":return p_(n,r);case"linear":return h_(n,r);default:return f_(n)}}},{key:"getTextureKey",value:function(n,r){var i;return"".concat(n.colors.join("_"),"_").concat(n==null||(i=n.positions)===null||i===void 0?void 0:i.join("_"),"_").concat(n.type,"_").concat(r==null?void 0:r.join("_"))}}]),e}(),TC=["passes"],MC=["moduleName","vertexShader","fragmentShader","inject","triangulation","styleOption","pickingEnabled"],Xd,Fu,Zd;function kC(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=IC(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function IC(e,t){if(e){if(typeof e=="string")return qd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qd(e,t)}}function qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function LC(e){var t=RC();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function RC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Du=nt.isEqual,Qd=nt.isFunction,Jd=nt.isNumber,Mt=nt.isObject,PC=nt.isPlainObject,OC=nt.isUndefined,Kd=0,oi=(Xd=Hg(se.IGlobalConfigService),Fu=function(e){Te(n,e);var t=LC(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ce(this,n),r=t.call(this),S(P(r),"id","".concat(Kd++)),S(P(r),"name","".concat(Kd)),S(P(r),"visible",!0),S(P(r),"zIndex",0),S(P(r),"inited",!1),S(P(r),"layerModelNeedUpdate",!1),S(P(r),"pickedFeatureID",null),S(P(r),"selectedFeatureID",null),S(P(r),"styleNeedUpdate",!1),S(P(r),"forceRender",!1),S(P(r),"clusterZoom",0),S(P(r),"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}}),S(P(r),"dataState",{dataSourceNeedUpdate:!1,dataMappingNeedUpdate:!1,filterNeedUpdate:!1,featureScaleNeedUpdate:!1,StyleAttrNeedUpdate:!1}),S(P(r),"hooks",{init:new kS,afterInit:new Qf,beforeRender:new Qf,beforeRenderData:new IS,afterRender:new vn,beforePickingEncode:new vn,afterPickingEncode:new vn,beforeHighlight:new vn(["pickedColor"]),afterHighlight:new vn,beforeSelect:new vn(["pickedColor"]),afterSelect:new vn,beforeDestroy:new vn,afterDestroy:new vn}),S(P(r),"models",[]),S(P(r),"startInit",!1),S(P(r),"layerChildren",[]),S(P(r),"masks",[]),je(P(r),"configService",Zd,P(r)),S(P(r),"animateOptions",{enable:!1}),S(P(r),"currentPickId",null),S(P(r),"encodeStyleAttribute",{}),S(P(r),"enableShaderEncodeStyles",[]),S(P(r),"enableDataEncodeStyles",[]),S(P(r),"pendingStyleAttributes",[]),S(P(r),"scaleOptions",{}),S(P(r),"animateStatus",!1),S(P(r),"isDestroyed",!1),S(P(r),"uniformBuffers",[]),S(P(r),"encodeDataLength",0),S(P(r),"sourceEvent",function(){r.dataState.dataSourceNeedUpdate=!0;var a=r.getLayerConfig();a&&a.autoFit&&r.fitBounds(a.fitBoundsOptions);var o=r.layerSource.getSourceCfg().autoRender;o&&setTimeout(function(){r.reRender()},10)}),r.name=i.name||r.id,r.zIndex=i.zIndex||0,r.rawConfig=i,r}return le(n,[{key:"addMask",value:function(i){this.masks.push(i),this.updateLayerConfig({maskLayers:this.masks}),this.enableMask()}},{key:"removeMask",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),this.updateLayerConfig({maskLayers:this.masks})}},{key:"disableMask",value:function(){this.updateLayerConfig({enableMask:!1})}},{key:"enableMask",value:function(){this.updateLayerConfig({enableMask:!0})}},{key:"addMaskLayer",value:function(i){this.masks.push(i)}},{key:"removeMaskLayer",value:function(i){var a=this.masks.indexOf(i);a>-1&&this.masks.splice(a,1),i.destroy()}},{key:"getAttribute",value:function(i){return this.styleAttributeService.getLayerStyleAttribute(i)}},{key:"getLayerConfig",value:function(){return this.configService.getLayerConfig(this.id)}},{key:"updateLayerConfig",value:function(i){var a=this;if(Object.keys(i).map(function(u){u in a.rawConfig&&(a.rawConfig[u]=i[u])}),!this.startInit)this.needUpdateConfig=$($({},this.needUpdateConfig),i);else{var o=this.container.get(se.SceneID);this.configService.setLayerConfig(o,this.id,$($($({},this.configService.getLayerConfig(this.id)),this.needUpdateConfig),i)),this.needUpdateConfig={}}}},{key:"setContainer",value:function(i,a){this.container=i,this.sceneContainer=a}},{key:"getContainer",value:function(){return this.container}},{key:"addPlugin",value:function(i){return this.plugins.push(i),this}},{key:"init",value:function(){var r=Q(w.mark(function a(){var o=this,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:u=this.container.get(se.SceneID),this.startInit=!0,this.configService.setLayerConfig(u,this.id,this.rawConfig),this.layerType=this.rawConfig.layerType,this.iconService=this.container.get(se.IIconService),this.fontService=this.container.get(se.IFontService),this.rendererService=this.container.get(se.IRendererService),this.layerService=this.container.get(se.ILayerService),this.debugService=this.container.get(se.IDebugService),this.interactionService=this.container.get(se.IInteractionService),this.pickingService=this.container.get(se.IPickingService),this.mapService=this.container.get(se.IMapService),s=this.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,l&&c!==null&&c!==void 0&&c.length&&c.length>0&&this.mapService.on("mapAfterFrameChange",function(){o.renderLayers()}),this.cameraService=this.container.get(se.ICameraService),this.coordinateService=this.container.get(se.ICoordinateSystemService),this.shaderModuleService=this.container.get(se.IShaderModuleService),this.postProcessingPassFactory=this.container.get(se.IFactoryPostProcessingPass),this.normalPassFactory=this.container.get(se.IFactoryNormalPass),this.styleAttributeService=this.container.get(se.IStyleAttributeService),l&&(this.multiPassRenderer=this.container.get(se.IMultiPassRenderer),this.multiPassRenderer.setLayer(this)),this.pendingStyleAttributes.forEach(function(g){var m=g.attributeName,_=g.attributeField,y=g.attributeValues,x=g.updateOptions;o.styleAttributeService.updateStyleAttribute(m,{scale:$({field:_},o.splitValuesAndCallbackInAttribute(y,_?void 0:o.getLayerConfig()[m]))},x)}),this.pendingStyleAttributes=[],this.plugins=this.container.getAll(se.ILayerPlugin),f=kC(this.plugins);try{for(f.s();!(h=f.n()).done;)d=h.value,d.apply(this,{rendererService:this.rendererService,mapService:this.mapService,styleAttributeService:this.styleAttributeService,normalPassFactory:this.normalPassFactory,postProcessingPassFactory:this.postProcessingPassFactory})}catch(g){f.e(g)}finally{f.f()}return this.layerPickService=new CC(this),this.textureService=new wC(this),this.log(mt.LayerInitStart),p.next=31,this.hooks.init.promise();case 31:this.log(mt.LayerInitEnd),this.inited=!0,this.emit("inited",{target:this,type:"inited"}),this.emit("add",{target:this,type:"add"}),this.hooks.afterInit.call();case 36:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"log",value:function(i){var a,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"init";if(!(this.tileLayer||this.isTileLayer)){var u="".concat(this.id,".").concat(o,".").concat(i),s={id:this.id,type:this.type};(a=this.debugService)===null||a===void 0||a.log(u,s)}}},{key:"updateModelData",value:function(i){i.attributes&&i.elements&&this.models.map(function(a){a.updateAttributesAndElements(i.attributes,i.elements)})}},{key:"setLayerPickService",value:function(i){this.layerPickService=i}},{key:"prepareBuildModel",value:function(){Object.keys(this.needUpdateConfig||{}).length!==0&&this.updateLayerConfig({});var i=this.getLayerConfig(),a=i.animateOption;a!=null&&a.enable&&(this.layerService.startAnimate(),this.animateStatus=!0)}},{key:"color",value:function(i,a,o){return this.updateStyleAttribute("color",i,a,o),this}},{key:"texture",value:function(i,a,o){return this.updateStyleAttribute("texture",i,a,o),this}},{key:"rotate",value:function(i,a,o){return this.updateStyleAttribute("rotate",i,a,o),this}},{key:"size",value:function(i,a,o){return this.updateStyleAttribute("size",i,a,o),this}},{key:"filter",value:function(i,a,o){var u=this.updateStyleAttribute("filter",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"shape",value:function(i,a,o){this.shapeOption={field:i,values:a};var u=this.updateStyleAttribute("shape",i,a,o);return this.dataState.dataSourceNeedUpdate=u&&this.inited,this}},{key:"label",value:function(i,a,o){return this.pendingStyleAttributes.push({attributeName:"label",attributeField:i,attributeValues:a,updateOptions:o}),this}},{key:"animate",value:function(i){var a={};return Mt(i)?(a.enable=!0,a=$($({},a),i)):a.enable=i,this.updateLayerConfig({animateOption:a}),this}},{key:"source",value:function(i,a){return(i==null?void 0:i.type)==="source"?(this.setSource(i),this):(this.sourceOption={data:i,options:a},this.clusterZoom=0,this)}},{key:"setData",value:function(i,a){var o=this;return this.inited?(this.log(mt.SourceInitStart,bt.UPDATE),this.layerSource.setData(i,a),this.log(mt.SourceInitEnd,bt.UPDATE)):this.on("inited",function(){o.log(mt.SourceInitStart,bt.UPDATE);var u=o.getSource();u?o.layerSource.setData(i,a):o.source(new Xg(i,a)),o.layerSource.once("update",function(){o.log(mt.SourceInitEnd,bt.UPDATE)})}),this}},{key:"style",value:function(i){var a=this,o=i.passes,u=on(i,TC);o&&qg(o).forEach(function(l){var c=a.multiPassRenderer.getPostProcessor().getPostProcessingPassByName(l[0]);c&&c.updateOptions(l[1])}),u.borderColor&&(u.stroke=u.borderColor),u.borderWidth&&(u.strokeWidth=u.borderWidth);var s=u;return Object.keys(u).forEach(function(l){var c=u[l];Array.isArray(c)&&c.length===2&&!Jd(c[0])&&!Jd(c[1])&&(s[l]={field:c[0],value:c[1]})}),this.encodeStyle(s),this.updateLayerConfig(s),this}},{key:"encodeStyle",value:function(i){var a=this;Object.keys(i).forEach(function(o){[].concat(re(a.enableShaderEncodeStyles),re(a.enableDataEncodeStyles)).includes(o)&&PC(i[o])&&(i[o].field||i[o].value)&&!Du(a.encodeStyleAttribute[o],i[o])?(a.encodeStyleAttribute[o]=i[o],a.updateStyleAttribute(o,i[o].field,i[o].value),a.inited&&(a.dataState.dataMappingNeedUpdate=!0)):a.encodeStyleAttribute[o]&&(delete a.encodeStyleAttribute[o],a.dataState.dataSourceNeedUpdate=!0)})}},{key:"scale",value:function(i,a){var o=$({},this.scaleOptions);if(Mt(i)?this.scaleOptions=$($({},this.scaleOptions),i):this.scaleOptions[i]=a,this.styleAttributeService&&!Du(o,this.scaleOptions)){var u=Mt(i)?i:S({},i,a);this.styleAttributeService.updateScaleAttribute(u)}return this}},{key:"renderLayers",value:function(){this.rendering=!0,this.layerService.reRender(),this.rendering=!1}},{key:"prerender",value:function(){}},{key:"render",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.tileLayer?(this.tileLayer.render(),this):(this.layerService.beforeRenderData(this),this.encodeDataLength<=0&&!this.forceRender?this:(this.renderModels(i),this))}},{key:"renderMultiPass",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.encodeDataLength<=0&&!this.forceRender)){u.next=2;break}return u.abrupt("return");case 2:if(!(this.multiPassRenderer&&this.multiPassRenderer.getRenderFlag())){u.next=7;break}return u.next=5,this.multiPassRenderer.render();case 5:u.next=8;break;case 7:this.multiPassRenderer?this.renderModels():this.renderModels();case 8:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"active",value:function(i){var a={};return a.enableHighlight=Mt(i)?!0:i,Mt(i)?(a.enableHighlight=!0,i.color&&(a.highlightColor=i.color),i.mix&&(a.activeMix=i.mix)):a.enableHighlight=!!i,this.updateLayerConfig(a),this}},{key:"setActive",value:function(i,a){var o=this;if(Mt(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({highlightColor:Mt(a)?a.color:this.getLayerConfig().highlightColor,activeMix:Mt(a)?a.mix:this.getLayerConfig().activeMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,highlightColor:Mt(a)?a.color:this.getLayerConfig().highlightColor,activeMix:Mt(a)?a.mix:this.getLayerConfig().activeMix}),this.hooks.beforeHighlight.call(Dn(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"select",value:function(i){var a={};return a.enableSelect=Mt(i)?!0:i,Mt(i)?(a.enableSelect=!0,i.color&&(a.selectColor=i.color),i.mix&&(a.selectMix=i.mix)):a.enableSelect=!!i,this.updateLayerConfig(a),this}},{key:"setSelect",value:function(i,a){var o=this;if(Mt(i)){var u=i.x,s=u===void 0?0:u,l=i.y,c=l===void 0?0:l;this.updateLayerConfig({selectColor:Mt(a)?a.color:this.getLayerConfig().selectColor,selectMix:Mt(a)?a.mix:this.getLayerConfig().selectMix}),this.pick({x:s,y:c})}else this.updateLayerConfig({pickedFeatureID:i,selectColor:Mt(a)?a.color:this.getLayerConfig().selectColor,selectMix:Mt(a)?a.mix:this.getLayerConfig().selectMix}),this.hooks.beforeSelect.call(Dn(i)).then(function(){setTimeout(function(){o.reRender()},1)})}},{key:"setBlend",value:function(i){return this.updateLayerConfig({blend:i}),this.reRender(),this}},{key:"show",value:function(){return this.updateLayerConfig({visible:!0}),this.reRender(),this.emit("show"),this}},{key:"hide",value:function(){return this.updateLayerConfig({visible:!1}),this.reRender(),this.emit("hide"),this}},{key:"setIndex",value:function(i){return this.zIndex=i,this.layerService.updateLayerRenderList(),this.layerService.renderLayers(),this}},{key:"setCurrentPickId",value:function(i){this.currentPickId=i}},{key:"getCurrentPickId",value:function(){return this.currentPickId}},{key:"setCurrentSelectedId",value:function(i){this.selectedFeatureID=i}},{key:"getCurrentSelectedId",value:function(){return this.selectedFeatureID}},{key:"isVisible",value:function(){var i=this.mapService.getZoom(),a=this.getLayerConfig(),o=a.visible,u=a.minZoom,s=u===void 0?-1/0:u,l=a.maxZoom,c=l===void 0?1/0:l;return!!o&&i>=s&&i<c}},{key:"setMultiPass",value:function(i,a){if(this.updateLayerConfig({enableMultiPassRenderer:i}),a&&this.updateLayerConfig({passes:a}),i){var o=this.getLayerConfig(),u=o.passes,s=u===void 0?[]:u;this.multiPassRenderer=Qg(this,s,this.postProcessingPassFactory,this.normalPassFactory),this.multiPassRenderer.setRenderFlag(!0);var l=this.rendererService.getViewportSize(),c=l.width,f=l.height;this.multiPassRenderer.resize(c,f)}return this}},{key:"setMinZoom",value:function(i){return this.updateLayerConfig({minZoom:i}),this}},{key:"getMinZoom",value:function(){var i=this.getLayerConfig(),a=i.minZoom;return a}},{key:"getMaxZoom",value:function(){var i=this.getLayerConfig(),a=i.maxZoom;return a}},{key:"get",value:function(i){var a=this.getLayerConfig();return a[i]}},{key:"setMaxZoom",value:function(i){return this.updateLayerConfig({maxZoom:i}),this}},{key:"setAutoFit",value:function(i){return this.updateLayerConfig({autoFit:i}),this}},{key:"fitBounds",value:function(i){if(!this.inited)return this.updateLayerConfig({autoFit:!0}),this;var a=this.getSource(),o=a.extent,u=o.some(function(s){return Math.abs(s)===1/0});return u?this:(this.mapService.fitBounds([[o[0],o[1]],[o[2],o[3]]],i),this)}},{key:"destroy",value:function(){var i,a,o,u,s,l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(!this.isDestroyed){(i=this.layerModel)===null||i===void 0||i.uniformBuffers.forEach(function(h){h.destroy()}),this.layerChildren.map(function(h){return h.destroy(!1)}),this.layerChildren=[];var c=this.getLayerConfig(),f=c.maskfence;f&&(this.masks.map(function(h){return h.destroy(!1)}),this.masks=[]),this.hooks.beforeDestroy.call(),this.layerSource.off("update",this.sourceEvent),(a=this.multiPassRenderer)===null||a===void 0||a.destroy(),this.textureService.destroy(),this.styleAttributeService.clearAllAttributes(),this.hooks.afterDestroy.call(),(o=this.layerModel)===null||o===void 0||o.clearModels(l),(u=this.tileLayer)===null||u===void 0||u.destroy(),this.models=[],(s=this.debugService)===null||s===void 0||s.removeLog(this.id),this.emit("remove",{target:this,type:"remove"}),this.emit("destroy",{target:this,type:"destroy"}),this.removeAllListeners(),this.isDestroyed=!0}}},{key:"clear",value:function(){this.styleAttributeService.clearAllAttributes()}},{key:"clearModels",value:function(){var i;this.models.forEach(function(a){return a.destroy()}),(i=this.layerModel)===null||i===void 0||i.clearModels(),this.models=[]}},{key:"isDirty",value:function(){return!!(this.styleAttributeService.getLayerStyleAttributes()||[]).filter(function(i){return i.needRescale||i.needRemapping||i.needRegenerateVertices}).length}},{key:"setSource",value:function(i){var a=this;if(this.layerSource&&this.layerSource.off("update",this.sourceEvent),this.layerSource=i,this.clusterZoom=0,this.inited&&this.layerSource.cluster){var o=this.mapService.getZoom();this.layerSource.updateClusterData(o)}this.layerSource.inited&&this.sourceEvent(),this.layerSource.on("update",function(u){var s=u.type;if(a.coordCenter===void 0){var l,c=a.layerSource.center;a.coordCenter=c,(l=a.mapService)!==null&&l!==void 0&&l.setCoordCenter&&a.mapService.setCoordCenter(c)}if(s==="update"){if(a.tileLayer){a.tileLayer.reload();return}a.sourceEvent()}})}},{key:"getSource",value:function(){return this.layerSource}},{key:"getScaleOptions",value:function(){return this.scaleOptions}},{key:"setEncodedData",value:function(i){this.encodedData=i,this.encodeDataLength=i.length}},{key:"getEncodedData",value:function(){return this.encodedData}},{key:"getScale",value:function(i){return this.styleAttributeService.getLayerAttributeScale(i)}},{key:"getLegend",value:function(i){var a,o,u,s=this.styleAttributeService.getLayerStyleAttribute(i),l=(s==null||(a=s.scale)===null||a===void 0?void 0:a.scalers)||[];return{type:(o=l[0].option)===null||o===void 0?void 0:o.type,field:s==null||(u=s.scale)===null||u===void 0?void 0:u.field,items:this.getLegendItems(i)}}},{key:"getLegendItems",value:function(i){var a=this.styleAttributeService.getLayerAttributeScale(i);if(!a)return[];if(a.invertExtent){var o=a.range().map(function(l){return S({value:a.invertExtent(l)},i,l)});return o}else if(a.ticks){var u=a.ticks().map(function(l){return S({value:l},i,a(l))});return u}else if(a!=null&&a.domain){var s=a.domain().filter(function(l){return!OC(l)}).map(function(l){return S({value:l},i,a(l))});return s}return[]}},{key:"pick",value:function(i){var a=i.x,o=i.y;this.interactionService.triggerHover({x:a,y:o})}},{key:"boxSelect",value:function(i,a){this.pickingService.boxPickLayer(this,i,a)}},{key:"buildLayerModel",value:function(){var r=Q(w.mark(function a(o){var u=this,s,l,c,f,h,d,v,p,g,m,_,y,x,b;return w.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return s=o.moduleName,l=o.vertexShader,c=o.fragmentShader,f=o.inject,h=o.triangulation,d=o.styleOption,v=o.pickingEnabled,p=v===void 0?!0:v,g=on(o,MC),this.shaderModuleService.registerModule(s,{vs:l,fs:c,inject:f}),m=this.shaderModuleService.getModule(s),_=m.vs,y=m.fs,x=m.uniforms,b=this.rendererService.createModel,C.abrupt("return",new Promise(function(L){var N=u.styleAttributeService.createAttributesAndIndices(u.encodedData,h,d),I=N.attributes,T=N.elements,k=N.count,O=[].concat(re(u.layerModel.uniformBuffers),re(u.rendererService.uniformBuffers),[u.getLayerUniformBuffer()]);p&&O.push(u.getPickingUniformBuffer());var z=$({attributes:I,uniforms:x,fs:y,vs:_,elements:T,blend:Zg[Xn.normal],uniformBuffers:O,textures:u.layerModel.textures},g);k&&(z.count=k);var ne=b(z);L(ne)}));case 5:case"end":return C.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"createAttributes",value:function(i){var a=i.triangulation,o=this.styleAttributeService.createAttributes(this.encodedData,a),u=o.attributes;return u}},{key:"getTime",value:function(){return this.layerService.clock.getDelta()}},{key:"setAnimateStartTime",value:function(){this.animateStartTime=this.layerService.clock.getElapsedTime()}},{key:"stopAnimate",value:function(){this.animateStatus&&(this.layerService.stopAnimate(),this.animateStatus=!1,this.updateLayerConfig({animateOption:{enable:!1}}))}},{key:"getLayerAnimateTime",value:function(){return this.layerService.clock.getElapsedTime()-this.animateStartTime}},{key:"needPick",value:function(i){var a=this.getLayerConfig(),o=a.enableHighlight,u=o===void 0?!0:o,s=a.enableSelect,l=s===void 0?!0:s,c=this.eventNames().indexOf(i)!==-1||this.eventNames().indexOf("un"+i)!==-1;return(i==="click"||i==="dblclick")&&l&&(c=!0),i==="mousemove"&&(u||this.eventNames().indexOf("mouseenter")!==-1||this.eventNames().indexOf("unmousemove")!==-1||this.eventNames().indexOf("mouseout")!==-1)&&(c=!0),this.isVisible()&&c}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return u.stop()}},a)}));function i(){return r.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"renderMulPass",value:function(){var r=Q(w.mark(function a(o){return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.render();case 2:case"end":return s.stop()}},a)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"renderModels",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.encodeDataLength<=0&&!this.forceRender?(this.clearModels(),this):(this.hooks.beforeRender.call(),this.models.forEach(function(o){o.draw({uniforms:i.layerModel.getUninforms(),blend:i.layerModel.getBlend(),stencil:i.layerModel.getStencil(a),textures:i.layerModel.textures},(a==null?void 0:a.ispick)||!1)}),this.hooks.afterRender.call(),this)}},{key:"updateStyleAttribute",value:function(i,a,o,u){var s=this.configService.getAttributeConfig(this.id)||{};return Du(s[i],{field:a,values:o})?!1:(["color","size","texture","rotate","filter","label","shape"].indexOf(i)!==-1&&this.configService.setAttributeConfig(this.id,S({},i,{field:a,values:o})),this.startInit?this.styleAttributeService.updateStyleAttribute(i,{scale:$({field:a},this.splitValuesAndCallbackInAttribute(o,this.getLayerConfig()[a]))},u):this.pendingStyleAttributes.push({attributeName:i,attributeField:a,attributeValues:o,updateOptions:u}),!0)}},{key:"getLayerAttributeConfig",value:function(){return this.configService.getAttributeConfig(this.id)}},{key:"getShaderPickStat",value:function(){return this.layerService.getShaderPickStat()}},{key:"setEarthTime",value:function(i){}},{key:"processData",value:function(i){return i}},{key:"getModelType",value:function(){throw new Error("Method not implemented.")}},{key:"getDefaultConfig",value:function(){return{}}},{key:"initLayerModels",value:function(){var r=Q(w.mark(function a(){var o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this.models.forEach(function(c){return c.destroy()}),this.models=[],this.uniformBuffers.forEach(function(c){c.destroy()}),this.uniformBuffers=[],o=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(o),u=this.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0}),this.uniformBuffers.push(u),l.next=10,this.layerModel.initModels();case 10:this.models=l.sent;case 11:case"end":return l.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getLayerUniformBuffer",value:function(){return this.uniformBuffers[0]}},{key:"getPickingUniformBuffer",value:function(){return this.uniformBuffers[1]}},{key:"reRender",value:function(){this.inited&&this.layerService.reRender()}},{key:"splitValuesAndCallbackInAttribute",value:function(i){return{values:Qd(i)?void 0:i,callback:Qd(i)?i:void 0}}}]),n}(Kt.EventEmitter),Zd=ze(Fu.prototype,"configService",[Xd],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Fu);function FC(e,t){return{enable:e,mask:255,func:{cmp:R.EQUAL,ref:t?1:0,mask:1}}}function ev(e){return e.maskOperation===Uo.OR?{enable:!0,mask:255,func:{cmp:R.ALWAYS,ref:1,mask:255},opFront:{fail:R.KEEP,zfail:R.REPLACE,zpass:R.REPLACE}}:{enable:!0,mask:255,func:{cmp:e.stencilType===dr.SINGLE||e.stencilIndex===0?R.ALWAYS:R.LESS,ref:e.stencilType===dr.SINGLE?1:e.stencilIndex===0?2:1,mask:255},opFront:{fail:R.KEEP,zfail:R.REPLACE,zpass:R.REPLACE}}}var Re=function(e){return e[e.POSITION=0]="POSITION",e[e.COLOR=1]="COLOR",e[e.VERTEX_ID=2]="VERTEX_ID",e[e.PICKING_COLOR=3]="PICKING_COLOR",e[e.STROKE=4]="STROKE",e[e.OPACITY=5]="OPACITY",e[e.OFFSETS=6]="OFFSETS",e[e.ROTATION=7]="ROTATION",e[e.EXTRUSION_BASE=8]="EXTRUSION_BASE",e[e.SIZE=9]="SIZE",e[e.SHAPE=10]="SHAPE",e[e.EXTRUDE=11]="EXTRUDE",e[e.MAX=12]="MAX",e[e.NORMAL=13]="NORMAL",e[e.UV=14]="UV",e[e.LINEAR=15]="LINEAR",e}({});function DC(e){switch(e){case"rotation":return{name:"Rotation",type:Ce.Attribute,descriptor:{name:"a_Rotation",shaderLocation:Re.ROTATION,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(n){var r=n.rotation,i=r===void 0?0:r;return Array.isArray(i)?[i[0]]:[i]}}};case"stroke":return{name:"stroke",type:Ce.Attribute,descriptor:{name:"a_Stroke",shaderLocation:Re.STROKE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(n){var r=n.stroke,i=r===void 0?[1,1,1,1]:r;return i}}};case"opacity":return{name:"opacity",type:Ce.Attribute,descriptor:{name:"a_Opacity",shaderLocation:Re.OPACITY,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(n){var r=n.opacity,i=r===void 0?1:r;return[i]}}};case"extrusionBase":return{name:"extrusionBase",type:Ce.Attribute,descriptor:{name:"a_ExtrusionBase",shaderLocation:Re.EXTRUSION_BASE,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(n){var r=n.extrusionBase,i=r===void 0?0:r;return[i]}}};case"offsets":return{name:"offsets",type:Ce.Attribute,descriptor:{name:"a_Offsets",shaderLocation:Re.OFFSETS,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(n){var r=n.offsets;return r}}};case"thetaOffset":return{name:"thetaOffset",type:Ce.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:15,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(n){var r=n.thetaOffset,i=r===void 0?1:r;return[i]}}};default:return}}var NC={opacity:1,stroke:[1,0,0,1],offsets:[0,0],rotation:0,extrusionBase:0,strokeOpacity:1,thetaOffset:.314},Na={opacity:"float",stroke:"vec4",offsets:"vec2",textOffset:"vec2",rotation:"float",extrusionBase:"float",strokeOpacity:"float",thetaOffset:"float"};function tv(e){return Math.max(Math.ceil(e/4)*4,4)}var nv,Nu,rv,iv={opacity:Re.OPACITY,stroke:Re.STROKE,offsets:Re.OFFSETS,rotation:Re.ROTATION,extrusionBase:Re.EXTRUSION_BASE,thetaOffset:15},ot=(nv=Hg(se.IGlobalConfigService),Nu=function(){function e(t){ce(this,e),S(this,"uniformBuffers",[]),S(this,"textures",[]),S(this,"preStyleAttribute",{}),S(this,"encodeStyleAttribute",{}),je(this,"configService",rv,this),this.layer=t,this.rendererService=t.getContainer().get(se.IRendererService),this.pickingService=t.getContainer().get(se.IPickingService),this.shaderModuleService=t.getContainer().get(se.IShaderModuleService),this.styleAttributeService=t.getContainer().get(se.IStyleAttributeService),this.mapService=t.getContainer().get(se.IMapService),this.iconService=t.getContainer().get(se.IIconService),this.fontService=t.getContainer().get(se.IFontService),this.cameraService=t.getContainer().get(se.ICameraService),this.layerService=t.getContainer().get(se.ILayerService),this.registerStyleAttribute(),this.registerBuiltinAttributes(),this.startModelAnimate();var n=this.rendererService.createTexture2D;this.createTexture2D=n}return le(e,[{key:"getBlend",value:function(){var n=this.layer.getLayerConfig(),r=n.blend,i=r===void 0?"normal":r;return Zg[Xn[i]]}},{key:"getStencil",value:function(n){var r=this.layer.getLayerConfig(),i=r.mask,a=i===void 0?!1:i,o=r.maskInside,u=o===void 0?!0:o,s=r.enableMask,l=r.maskOperation,c=l===void 0?Uo.AND:l;if(this.layer.type==="MaskLayer")return ev({isStencil:!0,stencilType:dr.SINGLE});if(n.isStencil)return ev($($({},n),{},{maskOperation:c}));var f=a||s&&this.layer.masks.length!==0||this.layer.tileMask!==void 0;return FC(f,u)}},{key:"getDefaultStyle",value:function(){return{}}},{key:"getUninforms",value:function(){var n=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());this.updateStyleUnifoms();var i=$($({},r.uniformsOption),n.uniformsOption);return!this.rendererService.hasOwnProperty("device")&&this.textures&&this.textures.length===1&&(i.u_texture=this.textures[0]),i}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"needUpdate",value:function(){var t=Q(w.mark(function r(){return w.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!1);case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"buildModels",value:function(){var t=Q(w.mark(function r(){return w.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"initModels",value:function(){var t=Q(w.mark(function r(){return w.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return a.stop()}},r)}));function n(){return t.apply(this,arguments)}return n}()},{key:"clearModels",value:function(){}},{key:"getAttribute",value:function(){throw new Error("Method not implemented.")}},{key:"prerender",value:function(){}},{key:"render",value:function(n){throw new Error("Method not implemented.")}},{key:"registerBuiltinAttributes",value:function(){throw new Error("Method not implemented.")}},{key:"animateOption2Array",value:function(n){return[n.enable?0:1,n.duration||4,n.interval||.2,n.trailLength||.1]}},{key:"startModelAnimate",value:function(){var n=this.layer.getLayerConfig(),r=n.animateOption;r.enable&&this.layer.setAnimateStartTime()}},{key:"getInject",value:function(){var n=this.layer.encodeStyleAttribute,r="",i=[];this.layer.enableShaderEncodeStyles.forEach(function(u){n[u]?r+="#define USE_ATTRIBUTE_".concat(u.toUpperCase(),` 0.0; 

`):i.push("  ".concat(Na[u]," u_").concat(u,";")),r+=`
          #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
          layout(location = `).concat(iv[u],") in ").concat(Na[u]," a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
        #endif

        `)});var a=i.length?`
layout(std140) uniform AttributeUniforms {
`.concat(i.join(`
`),`
};
    `):"";r+=a;var o="";return this.layer.enableShaderEncodeStyles.forEach(function(u){o+=`

    #ifdef USE_ATTRIBUTE_`.concat(u.toUpperCase(),`
      `).concat(Na[u]," ").concat(u,"  = a_").concat(u.charAt(0).toUpperCase()+u.slice(1),`;
    #else
      `).concat(Na[u]," ").concat(u," = u_").concat(u,`;
    #endif

    `)}),{"vs:#decl":r,"fs:#decl":a,"vs:#main-start":o}}},{key:"getStyleAttribute",value:function(){var n=this,r={};return this.layer.enableShaderEncodeStyles.forEach(function(i){if(!n.layer.encodeStyleAttribute[i]){var a=n.layer.getLayerConfig()[i],o=typeof a>"u"?NC[i]:a;i==="stroke"&&(o=rt(o)),r["u_"+i]=o}}),r}},{key:"registerStyleAttribute",value:function(){var n=this;Object.keys(this.layer.encodeStyleAttribute).forEach(function(r){var i=DC(r);i&&(n.styleAttributeService.registerStyleAttribute(i),i.descriptor&&(i.descriptor.shaderLocation=iv[r]))})}},{key:"updateEncodeAttribute",value:function(n,r){this.encodeStyleAttribute[n]=r}},{key:"initUniformsBuffer",value:function(){var n=this.getUniformsBufferInfo(this.getStyleAttribute()),r=this.getCommonUniformsInfo();n.uniformsLength!==0&&(this.attributeUnifoms=this.rendererService.createBuffer({data:new Float32Array(tv(n.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.attributeUnifoms)),r.uniformsLength!==0&&(this.commonUnifoms=this.rendererService.createBuffer({data:new Float32Array(tv(r.uniformsLength)).fill(0),isUBO:!0}),this.uniformBuffers.push(this.commonUnifoms))}},{key:"getUniformsBufferInfo",value:function(n){var r=0,i=[];return Object.values(n).forEach(function(a){Array.isArray(a)?(i.push.apply(i,re(a)),r+=a.length):typeof a=="number"?(i.push(a),r+=1):typeof a=="boolean"&&(i.push(Number(a)),r+=1)}),{uniformsOption:n,uniformsLength:r,uniformsArray:i}}},{key:"getCommonUniformsInfo",value:function(){return{uniformsLength:0,uniformsArray:[],uniformsOption:{}}}},{key:"updateStyleUnifoms",value:function(){var n,r,i=this.getUniformsBufferInfo(this.getStyleAttribute()),a=i.uniformsArray,o=this.getCommonUniformsInfo(),u=o.uniformsArray;(n=this.attributeUnifoms)===null||n===void 0||n.subData({offset:0,data:new Uint8Array(new Float32Array(a).buffer)}),(r=this.commonUnifoms)===null||r===void 0||r.subData({offset:0,data:new Uint8Array(new Float32Array(u).buffer)})}}]),e}(),rv=ze(Nu.prototype,"configService",[nv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Nu),av=function(e){return e.VERTICAL="vertical",e.HORIZONTAL="horizontal",e}({}),BC=function(e){return e.NORMAL="normal",e.REPLACE="replace",e}({}),El=function(e){return e[e.pixel=0]="pixel",e[e.meter=1]="meter",e}({}),Jg=100;function ov(e){return e/180*Math.acos(-1)}function Kg(e){var t=ov(e[0])+Math.PI/2,n=ov(e[1]),r=Jg+Math.random()*.4,i=r*Math.cos(n)*Math.cos(t),a=r*Math.cos(n)*Math.sin(t),o=r*Math.sin(n);return[a,o,i]}var Ba=We();We();var _t=We(),Wn=We(),Pr=We();function Bu(e,t,n,r,i){xt(e,n,r),yn(e,e),t=Zr(-e[1],e[0]);var a=Zr(-n[1],n[0]);return[i/Kn(t,a),t]}function Yn(e,t){return l0(e,-t[1],t[0])}function Or(e,t,n){return Xr(e,t,n),yn(e,e),e}function Uu(e,t){return e[0]===t[0]&&e[1]===t[1]}var UC=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ce(this,e),S(this,"lastFlip",-1),S(this,"miter",Zr(0,0)),S(this,"started",!1),S(this,"dash",!1),S(this,"totalDistance",0),S(this,"currentIndex",0),this.join=t.join||"miter",this.cap=t.cap||"butt",this.miterLimit=t.miterLimit||10,this.thickness=t.thickness||1,this.dash=t.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}return le(e,[{key:"simpleExtrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.simpleSegment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleExtrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(re(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.simpleSegment(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude_gaode2",value:function(n,r){var i=this.complex;if(n.length<=1)return i;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var a=n.length,o=i.startIndex,u=1;u<a;u++){var s,l,c,f=n[u-1];f.push((s=r[u-1][2])!==null&&s!==void 0?s:0);var h=r[u-1],d=n[u];d.push((l=r[u][2])!==null&&l!==void 0?l:0);var v=r[u],p=u<n.length-1?[].concat(re(n[u+1]),[(c=r[u+1][2])!==null&&c!==void 0?c:0]):null,g=u<r.length-1?r[u+1]:null,m=this.segment_gaode2(i,o,f,d,p,h,v,g);o+=m}if(this.dash)for(var _=0;_<i.positions.length/6;_++)i.positions[_*6+5]=this.totalDistance;return i.startIndex=i.positions.length/6,i}},{key:"extrude",value:function(n){var r=this.complex;if(n.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;for(var i=n.length,a=r.startIndex,o=1;o<i;o++){var u=n[o-1],s=n[o],l=o<n.length-1?n[o+1]:null,c=this.segment(r,a,u,s,l);a+=c}if(this.dash)for(var f=0;f<r.positions.length/6;f++)r.positions[f*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}},{key:"simpleSegment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=dt([a[0],a[1]]),h=dt([i[0],i[1]]);Or(_t,f,h);var d=0;if(this.dash&&(d=this.lineSegmentDistance(f,h),this.totalDistance+=d),this.normal||(this.normal=We(),Yn(this.normal,_t)),this.started||(this.started=!0,this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-d)),s.push(r+0,r+1,r+2),!o)Yn(this.normal,_t),this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2;else{var v=dt([o[0],o[1]]);Uu(f,v)&&xt(v,f,yn(v,$r(v,f,h))),Or(Wn,v,f);var p=Bu(Pr,We(),_t,Wn,this.thickness),g=Fe(p,2),m=g[0],_=g[1],y=Kn(Pr,this.normal)<0?-1:1;this.extrusions(l,c,a,_,m,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),y=-1,pn(this.normal,_),u+=2,this.lastFlip=y}return u}},{key:"segment_gaode2",value:function(n,r,i,a,o,u,s,l){var c=0,f=n.indices,h=n.positions,d=n.normals,v=this.cap==="square",p=this.join==="bevel",g=dt([s[0],s[1]]),m=dt([u[0],u[1]]);Or(_t,a,i);var _=0;if(this.dash&&(_=this.lineSegmentDistance(g,m),this.totalDistance+=_),this.normal||(this.normal=We(),Yn(this.normal,_t)),!this.started)if(this.started=!0,v){var y=We(),x=We();xt(y,this.normal,_t),xt(x,this.normal,_t),d.push(x[0],x[1],0),d.push(y[0],y[1],0),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),h.push(i[0],i[1],i[2]|0,this.totalDistance-_,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,i,this.normal,this.thickness,this.totalDistance-_);if(f.push(r+0,r+1,r+2),o){Uu(a,o)&&xt(o,a,yn(o,$r(o,a,i))),Or(Wn,o,a);var C=Bu(Pr,We(),_t,Wn,this.thickness),L=Fe(C,2),N=L[0],I=L[1],T=Kn(Pr,this.normal)<0?-1:1,k=p;if(!k&&this.join==="miter"){var O=N;O>this.miterLimit&&(k=!0)}k?(d.push(this.normal[0],this.normal[1],0),d.push(I[0],I[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,f.push.apply(f,re(this.lastFlip!==-T?[r,r+2,r+3]:[r+2,r+1,r+3])),f.push(r+2,r+3,r+4),Yn(Ba,Wn),pn(this.normal,Ba),d.push(this.normal[0],this.normal[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*T,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,c+=3):(this.extrusions(h,d,a,I,N,this.totalDistance),f.push.apply(f,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),T=-1,pn(this.normal,I),c+=2),this.lastFlip=T}else{if(Yn(this.normal,_t),v){var b=We(),M=We();Xr(M,_t,this.normal),xt(b,_t,this.normal),d.push(M[0],M[1],0),d.push(b[0],b[1],0),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),h.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(h,d,a,this.normal,this.thickness,this.totalDistance);f.push.apply(f,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),c+=2}return c}},{key:"segment",value:function(n,r,i,a,o){var u=0,s=n.indices,l=n.positions,c=n.normals,f=this.cap==="square",h=this.join==="bevel",d=dt([a[0],a[1]]),v=dt([i[0],i[1]]);Or(_t,d,v);var p=0;if(this.dash&&(p=this.lineSegmentDistance(d,v),this.totalDistance+=p),this.normal||(this.normal=We(),Yn(this.normal,_t)),!this.started)if(this.started=!0,f){var g=We(),m=We();xt(g,this.normal,_t),xt(m,this.normal,_t),c.push(m[0],m[1],0),c.push(g[0],g[1],0),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,-this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),l.push(i[0],i[1],i[2]|0,this.totalDistance-p,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,i,this.normal,this.thickness,this.totalDistance-p);if(s.push(r+0,r+1,r+2),o){var x=dt([o[0],o[1]]);Uu(d,x)&&xt(x,d,yn(x,$r(x,d,v))),Or(Wn,x,d);var b=Bu(Pr,We(),_t,Wn,this.thickness),M=Fe(b,2),C=M[0],L=M[1],N=Kn(Pr,this.normal)<0?-1:1,I=h;if(!I&&this.join==="miter"){var T=C;T>this.miterLimit&&(I=!0)}I?(c.push(this.normal[0],this.normal[1],0),c.push(L[0],L[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push.apply(s,re(this.lastFlip!==-N?[r,r+2,r+3]:[r+2,r+1,r+3])),s.push(r+2,r+3,r+4),Yn(Ba,Wn),pn(this.normal,Ba),c.push(this.normal[0],this.normal[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,-this.thickness*N,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,u+=3):(this.extrusions(l,c,a,L,C,this.totalDistance),s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),N=-1,pn(this.normal,L),u+=2),this.lastFlip=N}else{if(Yn(this.normal,_t),f){var _=We(),y=We();Xr(y,_t,this.normal),xt(_,_t,this.normal),c.push(y[0],y[1],0),c.push(_[0],_[1],0),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),l.push(a[0],a[1],a[2]|0,this.totalDistance,this.thickness,a[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(l,c,a,this.normal,this.thickness,this.totalDistance);s.push.apply(s,re(this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3])),u+=2}return u}},{key:"extrusions",value:function(n,r,i,a,o,u){r.push(a[0],a[1],0),r.push(a[0],a[1],0),n.push(i[0],i[1],i[2]|0,u,-o,i[2]|0),this.complex.indexes.push(this.currentIndex),n.push(i[0],i[1],i[2]|0,u,o,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}},{key:"lineSegmentDistance",value:function(n,r){var i=r[0]-n[0],a=r[1]-n[1];return Math.sqrt(i*i+a*a)}}]),e}();function em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e[0][0],r=e[0][e[0].length-1];n[0]===r[0]&&n[1]===r[1]&&(e[0]=e[0].slice(0,e[0].length-1));for(var i=e[0].length,a=bn.flatten(e),o=a.vertices,u=a.dimensions,s=[],l=[],c=[],f=0;f<o.length/u;f++)s.push(o[f*u],o[f*u+1],1,-1,-1),c.push(0,0,1);var h=bn(a.vertices,a.holes,a.dimensions);l.push.apply(l,re(h));for(var d=function(){var g=a.vertices.slice(v*u,(v+1)*u),m=a.vertices.slice((v+1)*u,(v+2)*u);m.length===0&&(m=a.vertices.slice(0,u));var _=s.length/5;s.push(g[0],g[1],1,0,0,m[0],m[1],1,.1,0,g[0],g[1],0,0,.8,m[0],m[1],0,.1,.8);var y=zC([m[0],m[1],1],[g[0],g[1],0],[g[0],g[1],1],t);c.push.apply(c,re(y).concat(re(y),re(y),re(y))),l.push.apply(l,re([1,2,0,3,2,1].map(function(x){return x+_})))},v=0;v<i;v++)d();return{positions:s,index:l,normals:c}}function zC(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=wa(),a=wa(),o=wa();r&&(e=fu(e),t=fu(t),n=fu(n));var u=Mn.apply(ru,re(e)),s=Mn.apply(ru,re(t)),l=Mn.apply(ru,re(n));ql(i,l,s),ql(a,u,s),$y(o,i,a);var c=wa();return Li(c,o),c}var tn,Si=function(e){return e.CYLINDER="cylinder",e.SQUARECOLUMN="squareColumn",e.TRIANGLECOLUMN="triangleColumn",e.HEXAGONCOLUMN="hexagonColumn",e.PENTAGONCOLUMN="pentagonColumn",e}({}),Ai=function(e){return e.CIRCLE="circle",e.SQUARE="square",e.TRIANGLE="triangle",e.HEXAGON="hexagon",e.PENTAGON="pentagon",e}({});function ga(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=Math.PI*2/e,r=[],i=0;i<e;i++)r.push(n*i+t*Math.PI/12);var a=r.map(function(o){var u=Math.sin(o+Math.PI/4),s=Math.cos(o+Math.PI/4);return[u,s,0]});return a}function Rs(){return ga(30)}function uv(){return ga(4)}function sv(){return ga(3)}function lv(){return ga(6,1)}function cv(){return ga(5)}var zu=(tn={},S(tn,Ai.CIRCLE,Rs),S(tn,Ai.HEXAGON,lv),S(tn,Ai.TRIANGLE,sv),S(tn,Ai.SQUARE,uv),S(tn,Ai.PENTAGON,cv),S(tn,Si.CYLINDER,Rs),S(tn,Si.HEXAGONCOLUMN,lv),S(tn,Si.TRIANGLECOLUMN,sv),S(tn,Si.SQUARECOLUMN,uv),S(tn,Si.PENTAGONCOLUMN,cv),tn),Ua={};function uo(e){var t=Rn(e.coordinates);return{vertices:[].concat(re(t),re(t),re(t),re(t)),indices:[0,1,2,2,3,0],size:t.length}}function fv(e){var t=Rn(e.coordinates),n=Kg(t);return{vertices:[].concat(re(n),re(n),re(n),re(n)),indices:[0,1,2,2,3,0],size:n.length}}function tm(e){var t=e.shape,n=YC(t,!1),r=n.positions,i=n.index,a=n.normals;return{vertices:r,indices:i,normals:a,size:5}}function $C(e){var t=Rn(e.coordinates);return{vertices:re(t),indices:[0],size:t.length}}function VC(e){var t=e.coordinates,n=e.originCoordinates,r=e.version,i=new UC({dash:!0,join:"bevel"});if(r==="GAODE2.x"){var a=t;Array.isArray(a[0][0])||(a=[t]);var o=n;Array.isArray(o[0][0])||(o=[n]);for(var u=0;u<a.length;u++){var s=a[u],l=o[u];i.extrude_gaode2(s,l)}}else{var c=t;c[0]&&!Array.isArray(c[0][0])&&(c=[t]),c.forEach(function(h){i.extrude(h)})}var f=i.complex;return{vertices:f.positions,indices:f.indices,normals:f.normals,indexes:f.indexes,size:6}}function jC(e){var t=e.coordinates,n=e.originCoordinates,r=[];if(!Array.isArray(t[0]))return{vertices:[],indices:[],normals:[],size:6,count:0};var i=HC(t,n),a=i.results,o=i.totalDistance;return a.map(function(u){r.push(u[0],u[1],u[2],u[3],0,o)}),{vertices:r,indices:[],normals:[],size:6,count:a.length}}function hv(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}function $u(e,t){return e.length<3&&e.push(0),t!==void 0&&e.push(t),e}function HC(e,t){var n=e,r=t||e;Array.isArray(n)&&Array.isArray(n[0])&&Array.isArray(n[0][0])&&(n=t.flat(),r=t.flat());var i=0;if(n.length<2)return{results:n,totalDistance:0};var a=[],o=$u(n[0],i);a.push(o);for(var u=1;u<n.length-1;u++){var s=hv(dt(r[u-1]),dt(r[u]));i+=s;var l=$u(n[u],i);a.push(l),a.push(l)}var c=hv(dt(r[r.length-2]),dt(r[r.length-1]));return i+=c,a.push($u(n[n.length-1],i)),{results:a,totalDistance:i}}function Cl(e){var t=e.coordinates,n=bn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes;return{indices:bn(r,a,i),vertices:r,size:i}}function GC(e){var t=e.coordinates,n=bn.flatten(t),r=n.vertices,i=n.dimensions,a=n.holes;return{indices:bn(r,a,i),vertices:WC(r),size:i+4}}function WC(e){for(var t=[],n=B_(e),r=n.center,i=n.radius,a=0;a<e.length;a+=2){var o=e[a],u=e[a+1];t.push.apply(t,[o,u,0].concat(re(r),[i]))}return t}function nm(e){var t=e.coordinates,n=em(t,!0),r=n.positions,i=n.index,a=n.normals;return{vertices:r,indices:i,normals:a,size:5}}function Vo(e){var t=e.coordinates,n=[].concat(re(t[0]),[0,0,1,t[1][0],t[0][1],0,1,1],re(t[1]),[0,1,0],re(t[0]),[0,0,1],re(t[1]),[0,1,0,t[0][0],t[1][1],0,0,0]),r=[0,1,2,3,4,5];return{vertices:n,indices:r,size:5}}function wl(e,t){for(var n=t.segmentNumber,r=n===void 0?30:n,i=e.coordinates,a=[],o=[],u=function(c){a.push(c,1,c,i[0][0],i[0][1],i[1][0],i[1][1],c,-1,c,i[0][0],i[0][1],i[1][0],i[1][1]),c!==r-1&&o.push.apply(o,re([0,1,2,1,3,2].map(function(f){return c*2+f})))},s=0;s<r;s++)u(s);return{vertices:a,indices:o,size:7}}function YC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ua&&Ua[e])return Ua[e];var n=zu[e]?zu[e]():zu.cylinder(),r=em([n],t);return Ua[e]=r,r}/*! *****************************************************************************
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
***************************************************************************** */var dv;(function(e){(function(t){var n=typeof Yr=="object"?Yr:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof n.Reflect>"u"?n.Reflect=e:r=i(n.Reflect,r),t(r);function i(a,o){return function(u,s){typeof a[u]!="function"&&Object.defineProperty(a,u,{configurable:!0,writable:!0,value:s}),o&&o(u,s)}}})(function(t){var n=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",a=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",o=typeof Object.create=="function",u={__proto__:[]}instanceof Array,s=!o&&!u,l={create:o?function(){return fn(Object.create(null))}:u?function(){return fn({__proto__:null})}:function(){return fn({})},has:s?function(Y,ae){return n.call(Y,ae)}:function(Y,ae){return ae in Y},get:s?function(Y,ae){return n.call(Y,ae)?Y[ae]:void 0}:function(Y,ae){return Y[ae]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",h=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ht(),d=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:tt(),v=!f&&typeof WeakMap=="function"?WeakMap:Ot(),p=new v;function g(Y,ae,he,me){if(J(he)){if(!fe(Y))throw new TypeError;if(!ie(ae))throw new TypeError;return I(Y,ae)}else{if(!fe(Y))throw new TypeError;if(!X(ae))throw new TypeError;if(!X(me)&&!J(me)&&!j(me))throw new TypeError;return j(me)&&(me=void 0),he=H(he),T(Y,ae,he,me)}}t("decorate",g);function m(Y,ae){function he(me,xe){if(!X(me))throw new TypeError;if(!J(xe)&&!Ye(xe))throw new TypeError;pe(Y,ae,me,xe)}return he}t("metadata",m);function _(Y,ae,he,me){if(!X(he))throw new TypeError;return J(me)||(me=H(me)),pe(Y,ae,he,me)}t("defineMetadata",_);function y(Y,ae,he){if(!X(ae))throw new TypeError;return J(he)||(he=H(he)),O(Y,ae,he)}t("hasMetadata",y);function x(Y,ae,he){if(!X(ae))throw new TypeError;return J(he)||(he=H(he)),z(Y,ae,he)}t("hasOwnMetadata",x);function b(Y,ae,he){if(!X(ae))throw new TypeError;return J(he)||(he=H(he)),ne(Y,ae,he)}t("getMetadata",b);function M(Y,ae,he){if(!X(ae))throw new TypeError;return J(he)||(he=H(he)),de(Y,ae,he)}t("getOwnMetadata",M);function C(Y,ae){if(!X(Y))throw new TypeError;return J(ae)||(ae=H(ae)),ye(Y,ae)}t("getMetadataKeys",C);function L(Y,ae){if(!X(Y))throw new TypeError;return J(ae)||(ae=H(ae)),W(Y,ae)}t("getOwnMetadataKeys",L);function N(Y,ae,he){if(!X(ae))throw new TypeError;J(he)||(he=H(he));var me=k(ae,he,!1);if(J(me)||!me.delete(Y))return!1;if(me.size>0)return!0;var xe=p.get(ae);return xe.delete(he),xe.size>0||p.delete(ae),!0}t("deleteMetadata",N);function I(Y,ae){for(var he=Y.length-1;he>=0;--he){var me=Y[he],xe=me(ae);if(!J(xe)&&!j(xe)){if(!ie(xe))throw new TypeError;ae=xe}}return ae}function T(Y,ae,he,me){for(var xe=Y.length-1;xe>=0;--xe){var Qe=Y[xe],Oe=Qe(ae,he,me);if(!J(Oe)&&!j(Oe)){if(!X(Oe))throw new TypeError;me=Oe}}return me}function k(Y,ae,he){var me=p.get(Y);if(J(me)){if(!he)return;me=new h,p.set(Y,me)}var xe=me.get(ae);if(J(xe)){if(!he)return;xe=new h,me.set(ae,xe)}return xe}function O(Y,ae,he){var me=z(Y,ae,he);if(me)return!0;var xe=vt(ae);return j(xe)?!1:O(Y,xe,he)}function z(Y,ae,he){var me=k(ae,he,!1);return J(me)?!1:ge(me.has(Y))}function ne(Y,ae,he){var me=z(Y,ae,he);if(me)return de(Y,ae,he);var xe=vt(ae);if(!j(xe))return ne(Y,xe,he)}function de(Y,ae,he){var me=k(ae,he,!1);if(!J(me))return me.get(Y)}function pe(Y,ae,he,me){var xe=k(he,me,!0);xe.set(Y,ae)}function ye(Y,ae){var he=W(Y,ae),me=vt(Y);if(me===null)return he;var xe=ye(me,ae);if(xe.length<=0)return he;if(he.length<=0)return xe;for(var Qe=new d,Oe=[],D=0,B=he;D<B.length;D++){var Z=B[D],oe=Qe.has(Z);oe||(Qe.add(Z),Oe.push(Z))}for(var Ee=0,it=xe;Ee<it.length;Ee++){var Z=it[Ee],oe=Qe.has(Z);oe||(Qe.add(Z),Oe.push(Z))}return Oe}function W(Y,ae){var he=[],me=k(Y,ae,!1);if(J(me))return he;for(var xe=me.keys(),Qe=qe(xe),Oe=0;;){var D=Pe(Qe);if(!D)return he.length=Oe,he;var B=Be(D);try{he[Oe]=B}catch(Z){try{ut(Qe)}finally{throw Z}}Oe++}}function G(Y){if(Y===null)return 1;switch(typeof Y){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return Y===null?1:6;default:return 6}}function J(Y){return Y===void 0}function j(Y){return Y===null}function K(Y){return typeof Y=="symbol"}function X(Y){return typeof Y=="object"?Y!==null:typeof Y=="function"}function te(Y,ae){switch(G(Y)){case 0:return Y;case 1:return Y;case 2:return Y;case 3:return Y;case 4:return Y;case 5:return Y}var he=ae===3?"string":ae===5?"number":"default",me=De(Y,i);if(me!==void 0){var xe=me.call(Y,he);if(X(xe))throw new TypeError;return xe}return _e(Y,he==="default"?"number":he)}function _e(Y,ae){if(ae==="string"){var he=Y.toString;if(Ae(he)){var me=he.call(Y);if(!X(me))return me}var xe=Y.valueOf;if(Ae(xe)){var me=xe.call(Y);if(!X(me))return me}}else{var xe=Y.valueOf;if(Ae(xe)){var me=xe.call(Y);if(!X(me))return me}var Qe=Y.toString;if(Ae(Qe)){var me=Qe.call(Y);if(!X(me))return me}}throw new TypeError}function ge(Y){return!!Y}function He(Y){return""+Y}function H(Y){var ae=te(Y,3);return K(ae)?ae:He(ae)}function fe(Y){return Array.isArray?Array.isArray(Y):Y instanceof Object?Y instanceof Array:Object.prototype.toString.call(Y)==="[object Array]"}function Ae(Y){return typeof Y=="function"}function ie(Y){return typeof Y=="function"}function Ye(Y){switch(G(Y)){case 3:return!0;case 4:return!0;default:return!1}}function De(Y,ae){var he=Y[ae];if(he!=null){if(!Ae(he))throw new TypeError;return he}}function qe(Y){var ae=De(Y,a);if(!Ae(ae))throw new TypeError;var he=ae.call(Y);if(!X(he))throw new TypeError;return he}function Be(Y){return Y.value}function Pe(Y){var ae=Y.next();return ae.done?!1:ae}function ut(Y){var ae=Y.return;ae&&ae.call(Y)}function vt(Y){var ae=Object.getPrototypeOf(Y);if(typeof Y!="function"||Y===c||ae!==c)return ae;var he=Y.prototype,me=he&&Object.getPrototypeOf(he);if(me==null||me===Object.prototype)return ae;var xe=me.constructor;return typeof xe!="function"||xe===Y?ae:xe}function ht(){var Y={},ae=[],he=function(){function Oe(D,B,Z){this._index=0,this._keys=D,this._values=B,this._selector=Z}return Oe.prototype["@@iterator"]=function(){return this},Oe.prototype[a]=function(){return this},Oe.prototype.next=function(){var D=this._index;if(D>=0&&D<this._keys.length){var B=this._selector(this._keys[D],this._values[D]);return D+1>=this._keys.length?(this._index=-1,this._keys=ae,this._values=ae):this._index++,{value:B,done:!1}}return{value:void 0,done:!0}},Oe.prototype.throw=function(D){throw this._index>=0&&(this._index=-1,this._keys=ae,this._values=ae),D},Oe.prototype.return=function(D){return this._index>=0&&(this._index=-1,this._keys=ae,this._values=ae),{value:D,done:!0}},Oe}();return function(){function Oe(){this._keys=[],this._values=[],this._cacheKey=Y,this._cacheIndex=-2}return Object.defineProperty(Oe.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Oe.prototype.has=function(D){return this._find(D,!1)>=0},Oe.prototype.get=function(D){var B=this._find(D,!1);return B>=0?this._values[B]:void 0},Oe.prototype.set=function(D,B){var Z=this._find(D,!0);return this._values[Z]=B,this},Oe.prototype.delete=function(D){var B=this._find(D,!1);if(B>=0){for(var Z=this._keys.length,oe=B+1;oe<Z;oe++)this._keys[oe-1]=this._keys[oe],this._values[oe-1]=this._values[oe];return this._keys.length--,this._values.length--,D===this._cacheKey&&(this._cacheKey=Y,this._cacheIndex=-2),!0}return!1},Oe.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=Y,this._cacheIndex=-2},Oe.prototype.keys=function(){return new he(this._keys,this._values,me)},Oe.prototype.values=function(){return new he(this._keys,this._values,xe)},Oe.prototype.entries=function(){return new he(this._keys,this._values,Qe)},Oe.prototype["@@iterator"]=function(){return this.entries()},Oe.prototype[a]=function(){return this.entries()},Oe.prototype._find=function(D,B){return this._cacheKey!==D&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=D)),this._cacheIndex<0&&B&&(this._cacheIndex=this._keys.length,this._keys.push(D),this._values.push(void 0)),this._cacheIndex},Oe}();function me(Oe,D){return Oe}function xe(Oe,D){return D}function Qe(Oe,D){return[Oe,D]}}function tt(){return function(){function Y(){this._map=new h}return Object.defineProperty(Y.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),Y.prototype.has=function(ae){return this._map.has(ae)},Y.prototype.add=function(ae){return this._map.set(ae,ae),this},Y.prototype.delete=function(ae){return this._map.delete(ae)},Y.prototype.clear=function(){this._map.clear()},Y.prototype.keys=function(){return this._map.keys()},Y.prototype.values=function(){return this._map.values()},Y.prototype.entries=function(){return this._map.entries()},Y.prototype["@@iterator"]=function(){return this.keys()},Y.prototype[a]=function(){return this.keys()},Y}()}function Ot(){var Y=16,ae=l.create(),he=me();return function(){function B(){this._key=me()}return B.prototype.has=function(Z){var oe=xe(Z,!1);return oe!==void 0?l.has(oe,this._key):!1},B.prototype.get=function(Z){var oe=xe(Z,!1);return oe!==void 0?l.get(oe,this._key):void 0},B.prototype.set=function(Z,oe){var Ee=xe(Z,!0);return Ee[this._key]=oe,this},B.prototype.delete=function(Z){var oe=xe(Z,!1);return oe!==void 0?delete oe[this._key]:!1},B.prototype.clear=function(){this._key=me()},B}();function me(){var B;do B="@@WeakMap@@"+D();while(l.has(ae,B));return ae[B]=!0,B}function xe(B,Z){if(!n.call(B,he)){if(!Z)return;Object.defineProperty(B,he,{value:l.create()})}return B[he]}function Qe(B,Z){for(var oe=0;oe<Z;++oe)B[oe]=Math.random()*255|0;return B}function Oe(B){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(B)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(B)):Qe(new Uint8Array(B),B):Qe(new Array(B),B)}function D(){var B=Oe(Y);B[6]=B[6]&79|64,B[8]=B[8]&191|128;for(var Z="",oe=0;oe<Y;++oe){var Ee=B[oe];(oe===4||oe===6||oe===8)&&(Z+="-"),Ee<16&&(Z+="0"),Z+=Ee.toString(16).toLowerCase()}return Z}}function fn(Y){return Y.__=void 0,delete Y.__,Y}})})(dv||(dv={}));function XC(e,t){return{type:e.type,field:"value",items:e.positions.map(function(n,r){var i;return i={},S(i,t,r>=e.colors.length?null:e.colors[r]),S(i,"value",n),i})}}function ZC(e){var t=qC();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function qC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var QC=`uniform sampler2D u_texture;
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
`,KC=function(e){Te(n,e);var t=ZC(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.brightness,u=i.contrast,s=i.saturation,l=i.gamma,c={u_opacity:di(a,1),u_brightness:di(o,1),u_contrast:di(u,1),u_saturation:di(s,1),u_gamma:di(l,1)};this.textures=[this.texture];var f=this.getUniformsBufferInfo(c);return f}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"loadTexture",value:function(){var r=Q(w.mark(function a(){var o,u,s;return w.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=this.rendererService.createTexture2D,this.texture=o({height:1,width:1}),u=this.layer.getSource(),c.next=5,u.data.images;case 5:s=c.sent,this.texture=o({data:s[0],width:s[0].width,height:s[0].height,mag:R.LINEAR,min:R.LINEAR});case 7:case"end":return c.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"rasterImage",vertexShader:JC,fragmentShader:QC,triangulation:Vo,primitive:R.TRIANGLES,blend:{enable:!0},depth:{enable:!1},pickingEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_Uv",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(ot),ew={image:KC};function tw(e){var t=nw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function nw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var rw=function(e){Te(n,e);var t=tw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","ImageLayer"),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new ew[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={image:{}};return a[i]}},{key:"getModelType",value:function(){return"image"}}]),n}(oi);function iw(e){var t=aw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function aw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ow=`
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
`,sw={solid:0,dash:1},lw=function(e){Te(n,e);var t=iw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.NEAREST,min:R.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.forward,v=d===void 0?!0:d,p=i.lineTexture,g=p===void 0?!1:p,m=i.iconStep,_=m===void 0?100:m,y=i.segmentNumber,x=y===void 0?30:y,b=this.layer.getLayerConfig(),M=b.animateOption,C=h;c!=="dash"&&(C=[0,0]),C.length===2&&C.push(0,0);var L=0,N=[0,0,0,0],I=[0,0,0,0];a&&o&&(N=rt(a),I=rt(o),L=1),this.rendererService.getDirty()&&this.texture.bind();var T={u_animate:this.animateOption2Array(M),u_dash_array:C,u_sourceColor:N,u_targetColor:I,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:x,u_lineDir:v?1:-1,u_icon_step:_,u_line_texture:g?1:0,u_textureBlend:s==="normal"?0:1,u_blur:.9,u_line_type:sw[c||"solid"],u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:L},k=this.getUniformsBufferInfo(T);return k}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:ow,vert:uw,type:""}}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=5,this.layer.buildLayerModel({moduleName:"lineArc2d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:wl,depth:{enable:!1},styleOption:{segmentNumber:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Ce.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot);function cw(e){var t=fw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function fw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hw=`#define LineTypeSolid 0.0
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
`,vw={solid:0,dash:1},vv=function(e){Te(n,e);var t=cw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.NEAREST,min:R.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=i.globalArcHeight,x=y===void 0?10:y,b=this.layer.getLayerConfig(),M=b.animateOption;h.length===2&&h.push(0,0);var C=0,L=[0,0,0,0],N=[0,0,0,0];a&&o&&(L=rt(a),N=rt(o),C=1),this.rendererService.getDirty()&&this.texture.bind();var I={u_animate:this.animateOption2Array(M),u_dash_array:h,u_sourceColor:L,u_targetColor:N,u_textSize:[1024,this.iconService.canvasHeight||128],u_globel:this.mapService.version==="GLOBEL"?1:0,u_globel_radius:Jg,u_global_height:x,segmentNumber:_,u_line_type:vw[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:C},T=this.getUniformsBufferInfo(I);return T}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"getShaders",value:function(){return{frag:hw,vert:dw,type:""}}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,p.next=4,this.layer.buildLayerModel({moduleName:"lineArc3d"+h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:wl,styleOption:{segmentNumber:s}});case 4:return d=p.sent,p.abrupt("return",[d]);case 6:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Ce.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot),pv={circle:2,triangle:2,diamond:4,rect:2,classic:3,halfTriangle:2,none:0},Ht=1/2;function pw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?1:i;return{vertices:[0,Ht*e,1*e*r,-(a+Ht)*e,1*e*r,(a-Ht)*e,0,Ht*e,1*e*r,-(a+Ht)*e,1*e*r,(a-Ht)*e],indices:[3,4,5],outLineIndices:[0,1,2],normals:[1*e,-2*e,1,-2*e,1.5*e,1,1*e,1.5*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function gw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*e*r,1*a,1*e*r,-1*a,0,0,1*e*r,1*a,1*e*r,-1*a],outLineIndices:[0,1,2],indices:[3,4,5],normals:[0,-1.5*e,1,2,1*e,1,-2,1*e,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function mw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?2:i;return{vertices:[0,a/2,e*r*1,a/2,e*r*1,-a/2,0,-a/2,0,a/2,e*r*1,a/2,e*r*1,-a/2,0,-a/2],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function yw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,1*r*e,.5*a,2*r*e,0,1*r*e,-.5*a,0,0,1*r*e,.5*a,2*r*e,0,1*r*e,-.5*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function _w(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?3:i;return{vertices:[0,0,2*e*r,1*a,1.5*e*r,0,2*e*r,-1*a,0,0,2*e*r,1*a,1.5*e*r,0,2*e*r,-1*a],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-e,1,1,0,1,0,-e,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function xw(e,t){var n=t.width,r=n===void 0?2:n,i=t.height,a=i===void 0?2:i,o=Rs(),u=bn.flatten([o]),s=bn(u.vertices,u.holes,u.dimensions),l=o.map(function(c){return[c[0]*r*e,c[1]*a]}).flat();return{vertices:[].concat(re(l),re(l)),dimensions:2,indices:s.map(function(c){return c+o.length}),outLineIndices:s,normals:[].concat(re(o.map(function(c){return[c[1]*a,c[0]*r*e,1]}).flat()),re(new Array(o.length*3).fill(0)))}}function bw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=In(n.source)==="object"?n.source.type:n.source,i=In(n.target)==="object"?n.target.type:n.target,a=In(n.source)==="object"?n.source:{},o=a.width,u=o===void 0?r?pv[r]:0:o;a.height;var s=In(n.target)==="object"?n.target:{},l=s.width,c=l===void 0?i?pv[i]:0:l;return s.height,{vertices:[0,Ht,1*u].concat(re(e),[1,Ht,-1*c],re(e),[1,-Ht,-1*c],re(e),[0,-Ht,1*u],re(e),[0,Ht,1*u],re(e),[1,Ht,-1*c],re(e),[1,-Ht,-1*c],re(e),[0,-Ht,1*u],re(e)),outLineIndices:[0,1,2,0,2,3].map(function(f){return f+t}),indices:[4,5,6,4,6,7].map(function(f){return f+t}),normals:[1,-1,1,1,1,1,-1,0,1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],dimensions:2}}function gv(e,t){var n=In(e)==="object"?e.type:e,r=t==="source"?1:-1,i=In(e)==="object"?e:{};switch(n){case"circle":return xw(r,i);case"triangle":return gw(r,i);case"diamond":return yw(r,i);case"rect":return mw(r,i);case"classic":return _w(r,i);case"halfTriangle":return pw(r,i);default:return{vertices:[],indices:[],normals:[],dimensions:2,outLineIndices:[],outLineNormals:[]}}}function Sw(e){var t=e.coordinates.flat(),n=1,r=1;return{vertices:[1,0,0].concat(re(t),[1,2,-3],re(t),[1,1,-3],re(t),[0,1,0],re(t),[0,0,0],re(t),[1,0,0],re(t),[1,2,-3],re(t),[1,1,-3],re(t),[0,1,0],re(t),[0,0,0],re(t)),normals:[-n,2*r,1,2*r,-r,1,r,-r,1,r,-r,1,-n,-r,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],indices:[0,1,2,0,2,3,0,3,4,5,6,7,5,7,8,5,8,9],size:7}}function Aw(e,t){return t?Ew(e,t):Sw(e)}function Ew(e,t){var n=e.coordinates.flat(),r=t,i=r.target,a=i===void 0?"classic":i,o=r.source,u=o===void 0?"circle":o,s=mv(gv(u,"source"),n,0,0),l=bw(n,s.vertices.length/7,t),c=mv(gv(a,"target"),n,1,s.vertices.length/7+l.vertices.length/7),f={vertices:[].concat(re(s.vertices),re(l.vertices),re(c.vertices)),indices:[].concat(re(s.outLineIndices),re(l.outLineIndices),re(c.outLineIndices),re(s.indices),re(l.indices),re(c.indices)),normals:[].concat(re(s.normals),re(l.normals),re(c.normals)),size:7};return f}function mv(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=[],a=e.vertices,o=e.indices,u=e.dimensions,s=e.outLineIndices,l=0;l<a.length;l+=u)i.push.apply(i,[n,a[l+1],a[l]].concat(re(t)));return $($({},e),{},{vertices:i,indices:o.map(function(c){return c+r}),outLineIndices:s.map(function(c){return c+r})})}function Cw(e){var t=ww();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function ww(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Tw=`// #extension GL_OES_standard_derivatives : enable

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
`,kw=function(e){Te(n,e);var t=Cw(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.gapWidth,o=a===void 0?2:a,u=i.strokeWidth,s=u===void 0?1:u,l=i.strokeOpacity,c=l===void 0?1:l,f={u_gap_width:o,u_stroke_width:s,u_stroke_opacity:c},h=this.getUniformsBufferInfo(f);return h}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"flow_line",vertexShader:Mw,fragmentShader:Tw,inject:this.getInject(),triangulation:Aw,styleOption:this.layer.getLayerConfig().symbol,primitive:R.TRIANGLES,depth:{enable:!1},pick:!1});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0],u[1]]:[u,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Ce.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(a,o,u){return[u[3],u[4],u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a,o,u,s,l){return l}}})}}]),n}(ot);function Iw(e){var t=Lw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function Lw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Rw=`#define LineTypeSolid 0.0
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

`,Ow={solid:0,dash:1},Fw=function(e){Te(n,e);var t=Iw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.NEAREST,min:R.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.segmentNumber,_=m===void 0?30:m,y=this.layer.getLayerConfig(),x=y.animateOption;h.length===2&&h.push(0,0),this.rendererService.getDirty()&&this.texture.bind();var b=0,M=[0,0,0,0],C=[0,0,0,0];a&&o&&(M=rt(a),C=rt(o),b=1);var L=this.layer.getLayerAnimateTime();isNaN(L)&&(L=0);var N={u_animate:this.animateOption2Array(x),u_dash_array:h,u_sourceColor:M,u_targetColor:C,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:_,u_line_type:Ow[c]||0,u_icon_step:g,u_line_texture:v?1:0,u_textureBlend:s==="normal"?0:1,u_time:L,u_linearColor:b},I=this.getUniformsBufferInfo(N);return I}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.segmentNumber,s=u===void 0?30:u,f.next=3,this.layer.buildLayerModel({moduleName:"lineGreatCircle",vertexShader:Pw,fragmentShader:Rw,triangulation:wl,styleOption:{segmentNumber:s},inject:this.getInject(),depth:{enable:!1}});case 3:return l=f.sent,f.abrupt("return",[l]);case 5:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Ce.Attribute,descriptor:{name:"a_Instance",shaderLocation:12,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(o,u,s){return[s[3],s[4],s[5],s[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot);function Dw(e){var t=Nw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function Nw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Bw=`// #extension GL_OES_standard_derivatives : enable
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
`,rm=function(e){Te(n,e);var t=Dw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"textureEventFlag",!1),S(P(r),"texture",r.createTexture2D({data:new Uint8Array([0,0,0,0]),width:1,height:1})),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.textures.length===0&&(r.textures=[r.texture]),r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.NEAREST,min:R.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128})}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.lineType,c=l===void 0?"solid":l,f=i.dashArray,h=f===void 0?[10,5,0,0]:f,d=i.lineTexture,v=d===void 0?!1:d,p=i.iconStep,g=p===void 0?100:p,m=i.vertexHeightScale,_=m===void 0?20:m,y=i.strokeWidth,x=y===void 0?0:y,b=i.raisingHeight,M=b===void 0?0:b,C=i.heightfixed,L=C===void 0?!1:C,N=i.linearDir,I=N===void 0?av.VERTICAL:N,T=i.blur,k=T===void 0?[1,1,1,0]:T,O=h;c!=="dash"&&(O=[0,0,0,0]),O.length===2&&O.push(0,0),this.rendererService.getDirty()&&this.texture&&this.texture.bind();var z=this.layer.getLayerConfig(),ne=z.animateOption,de=0,pe=[0,0,0,0],ye=[0,0,0,0];a&&o&&(pe=rt(a),ye=rt(o),de=1);var W={u_animate:this.animateOption2Array(ne),u_dash_array:O,u_blur:k,u_sourceColor:pe,u_targetColor:ye,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:g,u_heightfixed:Number(L),u_vertexScale:_,u_raisingHeight:Number(M),u_strokeWidth:x,u_textureBlend:s===BC.NORMAL?0:1,u_line_texture:v?1:0,u_linearDir:I===av.VERTICAL?1:0,u_linearColor:de,u_time:this.layer.getLayerAnimateTime()||0},G=this.getUniformsBufferInfo(W);return G}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.textureEventFlag||(this.textureEventFlag=!0,this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture)),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!1:u,l=this.getShaders(),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=us,p.next=5,this.layer.buildLayerModel({moduleName:"line"+h,vertexShader:f,fragmentShader:c,triangulation:us,inject:this.getInject(),depth:{enable:s}});case 5:return d=p.sent,p.abrupt("return",[d]);case 7:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:Bw,vert:Uw,type:""}}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distanceAndIndex",type:Ce.Attribute,descriptor:{name:"a_DistanceAndIndexAndMiter",shaderLocation:10,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(o,u,s,l,c,f){return f===void 0?[s[3],10,s[4]]:[s[3],f,s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal_total_distance",type:Ce.Attribute,descriptor:{name:"a_Normal_Total_Distance",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(o,u,s,l,c){return[].concat(re(c),[s[5]])}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot);function zw(e){var t=$w();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function $w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Vw=`
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
`,Hw=function(e){Te(n,e);var t=zw(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.lineType,s=u===void 0?"solid":u,l=i.dashArray,c=l===void 0?[10,5,0,0]:l,f=i.vertexHeightScale,h=f===void 0?20:f,d=c;s!=="dash"&&(d=[0,0,0,0]),d.length===2&&d.push(0,0);var v=0,p=[0,0,0,0],g=[0,0,0,0];a&&o&&(p=rt(a),g=rt(o),v=1);var m={u_sourceColor:p,u_targetColor:g,u_dash_array:d,u_vertexScale:h,u_linearColor:v},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:Vw,vert:jw,type:"lineSimpleNormal"}}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return this.initUniformsBuffer(),o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,triangulation:jC,inject:this.getInject(),primitive:R.LINES,depth:{enable:!1},pick:!1});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"sizeDistanceAndTotalDistance",type:Ce.Attribute,descriptor:{name:"a_SizeDistanceAndTotalDistance",shaderLocation:Re.SIZE,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(a,o,u){var s=a.size,l=s===void 0?1:s,c=Array.isArray(l)?[l[0],l[1]]:[l,0];return[c[0],c[1],u[3],u[5]]}}})}}]),n}(ot);function Gw(e){var t=Ww();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function Ww(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Yw=`#define Animate 0.0
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
`,Zw=function(e){Te(n,e);var t=Gw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas()}),r.layer.render();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.NEAREST,min:R.NEAREST,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128}),r.textures=[r.texture]}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.sourceColor,o=i.targetColor,u=i.textureBlend,s=u===void 0?"normal":u,l=i.heightfixed,c=l===void 0?!1:l,f=i.lineTexture,h=f===void 0?!1:f,d=i.iconStep,v=d===void 0?100:d,p=i.iconStepCount,g=p===void 0?1:p,m=this.layer.getLayerConfig(),_=m.animateOption;this.rendererService.getDirty()&&this.texture.bind();var y=0,x=[0,0,0,0],b=[0,0,0,0];a&&o&&(x=rt(a),b=rt(o),y=1);var M={u_animate:this.animateOption2Array(_),u_sourceColor:x,u_targetColor:b,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:v,u_heightfixed:Number(c),u_linearColor:y,u_line_texture:h?1:0,u_textureBlend:s==="normal"?0:1,u_iconStepCount:g,u_time:this.layer.getLayerAnimateTime()||0},C=this.getUniformsBufferInfo(M);return C}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),this.updateTexture(),this.iconService.on("imageUpdate",this.updateTexture),u.abrupt("return",this.buildModels());case 4:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.layer.buildLayerModel({moduleName:"lineWall",vertexShader:Xw,fragmentShader:Yw,triangulation:VC,inject:this.getInject(),depth:{enable:!1},blend:this.getBlend()});case 2:return o=s.sent,s.abrupt("return",[o]);case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"distance",type:Ce.Attribute,descriptor:{name:"a_Distance",shaderLocation:15,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o,u,s){return[s[3]]}}}),this.styleAttributeService.registerStyleAttribute({name:"total_distance",type:Ce.Attribute,descriptor:{name:"a_Total_Distance",shaderLocation:11,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o,u,s){return[s[5]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=o.size,s=u===void 0?1:u;return Array.isArray(s)?[s[0],s[1]]:[s,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(o,u,s,l,c){return c}}}),this.styleAttributeService.registerStyleAttribute({name:"miter",type:Ce.Attribute,descriptor:{name:"a_Miter",shaderLocation:10,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o,u,s){return[s[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:14,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.texture,l=u[s]||{x:0,y:0},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot),qw={arc:lw,arc3d:vv,greatcircle:Fw,wall:Zw,line:rm,simple:Hw,flowline:kw,earthArc3d:vv};function Qw(e){var t=Jw();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function Jw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var im=function(e){Te(n,e);var t=Qw(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","LineLayer"),S(P(r),"enableShaderEncodeStyles",["stroke","offsets","opacity","thetaOffset"]),S(P(r),"arrowInsertCount",0),S(P(r),"defaultSourceConfig",{data:[{lng1:100,lat1:30,lng2:130,lat2:30}],options:{parser:{type:"json",x:"lng1",y:"lat1",x1:"lng2",y1:"lat2"}}}),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new qw[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={line:{},linearline:{},simple:{},wall:{},arc3d:{blend:"additive"},arc:{blend:"additive"},greatcircle:{blend:"additive"},tileLine:{},earthArc3d:{},flowline:{},arrow:{}};return a[i]}},{key:"getModelType",value:function(){var i;if(this.layerType)return this.layerType;var a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o||"line"}},{key:"processData",value:function(i){if(this.getModelType()!=="simple")return i;var a=[];return i.map(function(o){if(Array.isArray(o.coordinates)&&Array.isArray(o.coordinates[0])&&Array.isArray(o.coordinates[0][0])){var u=$({},o);o.coordinates.map(function(s){a.push($($({},u),{},{coordinates:s}))})}else a.push(o)}),a}}]),n}(oi);function Kw(e){var t=eT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function eT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var tT=`
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
`;function yv(e){var t=e.coordinates;return{vertices:re(t),indices:[0],size:t.length}}var rT=function(e){Te(n,e);var t=Kw(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.strokeOpacity,u=o===void 0?1:o,s=i.strokeWidth,l=s===void 0?0:s,c=i.stroke,f=c===void 0?"#fff":c,h={u_stroke_color:rt(f),u_additive:a==="additive"?1:0,u_stroke_opacity:u,u_stroke_width:l},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=yv,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointSimple",vertexShader:nT,fragmentShader:tT,inject:this.getInject(),triangulation:yv,depth:{enable:!1},primitive:R.POINTS});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(ot);function iT(e){var t=aT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function aT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var oT=`precision highp float;
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
`,sT=nt.isNumber,lT=function(e){Te(n,e);var t=iT(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"raiseCount",0),S(P(r),"raiseRepeat",0),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.opacity,s=u===void 0?1:u,l=i.sourceColor,c=i.targetColor,f=i.pickLight,h=f===void 0?!1:f,d=i.heightfixed,v=d===void 0?!0:d,p=i.opacityLinear,g=p===void 0?{enable:!1,dir:"up"}:p,m=i.lightEnable,_=m===void 0?!0:m,y=0,x=[0,0,0,0],b=[0,0,0,0];if(l&&c&&(x=rt(l),b=rt(c),y=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var M=o.speed,C=M===void 0?.01:M;this.raiseCount+=C,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var L={u_sourceColor:x,u_targetColor:b,u_linearColor:y,u_pickLight:Number(h),u_heightfixed:Number(v),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_opacity:sT(s)?s:1,u_opacitylinear:Number(g.enable),u_opacitylinear_dir:g.dir==="up"?1:0,u_lightEnable:Number(_)},N=this.getUniformsBufferInfo(L);return N}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption.repeat,s=u===void 0?1:u,this.raiseRepeat=s,f.next=4,this.layer.buildLayerModel({moduleName:"pointEarthExtrude",vertexShader:uT,fragmentShader:oT,triangulation:tm,depth:{enable:!0},inject:this.getInject(),cull:{enable:!0,face:rl(this.mapService.version)},blend:this.getBlend()});case 4:return l=f.sent,f.abrupt("return",[l]);case 6:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:Ce.Attribute,descriptor:{name:"a_Pos",shaderLocation:15,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a){var o=Rn(a.coordinates);return Kg([o[0],o[1]])}}})}}]),n}(ot);function cT(e){var t=fT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function fT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var hT=`in vec4 v_data;
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
}`,vT=function(e){Te(n,e);var t=cT(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c;this.layer.getLayerConfig();var h={u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_stroke_width:s,u_blur:f},d=this.getUniformsBufferInfo(h);return d}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=fv,s.next=3,this.layer.buildLayerModel({moduleName:"pointEarthFill",vertexShader:dT,fragmentShader:hT,triangulation:fv,inject:this.getInject(),depth:{enable:!0},blend:this.getBlend()});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Ce.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Re.EXTRUDE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(o,u,s,l){var c=Fe(s,3),f=c[0],h=c[1],d=c[2],v=Mn(0,0,1),p=Mn(f,0,d),g=f>=0?Ql(v,p):Math.PI*2-Ql(v,p),m=Math.PI*2-Math.asin(h/100),_=Ur();v0(_,_,g),d0(_,_,m);var y=Mn(1,1,0);Ta(y,y,_),Li(y,y);var x=Mn(-1,1,0);Ta(x,x,_),Li(x,x);var b=Mn(-1,-1,0);Ta(b,b,_),Li(b,b);var M=Mn(1,-1,0);Ta(M,M,_),Li(M,M);var C=[].concat(re(y),re(x),re(b),re(M)),L=l%4*3;return[C[L],C[L+1],C[L+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Ce.Attribute,descriptor:{name:"a_Shape",shaderLocation:Re.SHAPE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.layer.getLayerConfig().shape2d,c=l.indexOf(s);return[c]}}})}}]),n}(ot);function pT(e){var t=gT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function gT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var mT=`
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
`,am=function(e){Te(n,e);var t=pT(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"raiseCount",0),S(P(r),"raiseRepeat",0),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1,speed:.01,repeat:!1}:a,u=i.sourceColor,s=i.targetColor,l=i.pickLight,c=l===void 0?!1:l,f=i.heightfixed,h=f===void 0?!1:f,d=i.opacityLinear,v=d===void 0?{enable:!1,dir:"up"}:d,p=i.lightEnable,g=p===void 0?!0:p,m=0,_=[0,0,0,0],y=[0,0,0,0];if(u&&s&&(_=rt(u),y=rt(s),m=1),this.raiseCount<1&&this.raiseRepeat>0&&o.enable){var x=o.speed,b=x===void 0?.01:x;this.raiseCount+=b,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}var M={u_pickLight:Number(c),u_heightfixed:Number(h),u_r:o.enable&&this.raiseRepeat>0?this.raiseCount:1,u_linearColor:m,u_sourceColor:_,u_targetColor:y,u_opacitylinear:Number(v.enable),u_opacitylinear_dir:v.dir==="up"?1:0,u_lightEnable:Number(g)},C=this.getUniformsBufferInfo(M);return C}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.layer.getLayerConfig(),u=o.depth,s=u===void 0?!0:u,l=o.animateOption.repeat,c=l===void 0?1:l,this.raiseRepeat=c,this.initUniformsBuffer(),d.next=5,this.layer.buildLayerModel({moduleName:"pointExtrude",vertexShader:yT,fragmentShader:mT,triangulation:tm,inject:this.getInject(),cull:{enable:!0,face:rl(this.mapService.version)},depth:{enable:s}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a){var o=a.size;if(o){var u=[];return Array.isArray(o)&&(u=o.length===2?[o[0],o[0],o[1]]:o),Array.isArray(o)||(u=[o,o,o]),u}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Ce.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Re.EXTRUDE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a){var o=Rn(a.coordinates);return[o[0],o[1],0]}}})}}]),n}(ot);function _T(e){var t=xT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function xT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var bT=`
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
`,om=function(e){Te(n,e);var t=_T(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.strokeOpacity,o=a===void 0?1:a,u=i.strokeWidth,s=u===void 0?0:u,l=i.blend,c=i.blur,f=c===void 0?0:c,h=i.raisingHeight,d=h===void 0?0:h,v=i.heightfixed,p=v===void 0?!1:v,g=i.unit,m=g===void 0?"pixel":g,_=this.getAnimateUniforms().u_time;isNaN(_)&&(_=-1);var y={u_blur_height_fixed:[f,Number(d),Number(p)],u_stroke_width:s,u_additive:l==="additive"?1:0,u_stroke_opacity:o,u_size_unit:El[m],u_time:_,u_animate:this.getAnimateUniforms().u_animate},x=this.getUniformsBufferInfo(y);return x}},{key:"getAnimateUniforms",value:function(){var i=this.layer.getLayerConfig(),a=i.animateOption,o=a===void 0?{enable:!1}:a;return{u_animate:this.animateOption2Array(o),u_time:this.layer.getLayerAnimateTime()}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Ga)}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=this.layer.getLayerConfig(),u=o.animateOption,s=u===void 0?{enable:!1}:u,l=this.getShaders(s),c=l.frag,f=l.vert,h=l.type,this.layer.triangulation=Ga,this.initUniformsBuffer(),p.next=6,this.layer.buildLayerModel({moduleName:h,vertexShader:f,fragmentShader:c,inject:this.getInject(),triangulation:Ga,depth:{enable:!1}});case 6:return d=p.sent,p.abrupt("return",[d]);case 8:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(i){return{frag:bT,vert:ST,type:"pointFill"}}},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig().shape2d;this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Ce.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Re.EXTRUDE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Ce.Attribute,descriptor:{name:"a_Shape",shaderLocation:Re.SHAPE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.shape,s=u===void 0?2:u,l=i.indexOf(s);return[l]}}})}}]),n}(ot);function AT(e){var t=ET();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function ET(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var CT=`in vec2 v_uv;// 本身的 uv 坐标
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
`,TT=function(e){Te(n,e);var t=AT(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"meter2coord",1),S(P(r),"isMeter",!1),S(P(r),"radian",0),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),r.layerService.throttleRenderLayers();return}r.texture=u({data:r.iconService.getCanvas(),mag:R.LINEAR,min:R.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128,mipmap:!0}),r.textures=[r.texture]}),r}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l=i.unit,c=l===void 0?"pixel":l;this.rendererService.getDirty()&&this.texture.bind();var f={u_textSize:[1024,this.iconService.canvasHeight||128],u_heightfixed:Number(s),u_raisingHeight:Number(o),u_size_unit:El[c]},h=this.getUniformsBufferInfo(f);return h}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),uo)}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointFillImage",vertexShader:wT,fragmentShader:CT,triangulation:uo,depth:{enable:!1},inject:this.getInject(),cull:{enable:!0,face:rl(this.mapService.version)}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;this.iconService.off("imageUpdate",this.updateTexture),(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_Uv",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Ce.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Re.EXTRUDE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(o,u,s,l){var c=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],f=l%4*3;return[c[f],c[f+1],c[f+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}})}}]),n}(ot);function MT(e){var t=kT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function kT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var IT=`layout(std140) uniform commonUniforms {
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
`,um=function(e){Te(n,e);var t=MT(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"updateTexture",function(){var u=r.rendererService.createTexture2D;if(r.texture){r.texture.update({data:r.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),setTimeout(function(){r.layerService.throttleRenderLayers()});return}r.texture=u({data:r.iconService.getCanvas(),mag:R.LINEAR,min:R.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:r.iconService.canvasHeight||128,mipmap:!0})}),r}return le(n,[{key:"getUninforms",value:function(){this.rendererService.getDirty()&&this.texture.bind();var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.heightfixed,s=u===void 0?!1:u,l={u_textSize:[1024,this.iconService.canvasHeight||128],u_raisingHeight:Number(o),u_heightfixed:Number(s),u_texture:this.texture};this.textures=[this.texture];var c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.iconService.on("imageUpdate",this.updateTexture),this.updateTexture(),u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointImage",vertexShader:LT,fragmentShader:IT,triangulation:$C,inject:this.getInject(),depth:{enable:!1},primitive:R.POINTS});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this;this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(o){var u=o.size,s=u===void 0?5:u;return Array.isArray(s)?[s[0]]:[s]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_Uv",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(o){var u=i.iconService.getIconMap(),s=o.shape,l=u[s]||{x:-64,y:-64},c=l.x,f=l.y;return[c,f]}}})}}]),n}(ot);function RT(e){var t=PT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function PT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var OT=`in vec4 v_color;
out vec4 outputColor;
void main() {
  outputColor = v_color;
}`,FT=`layout(location = 0) in vec3 a_Position;
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
`;function _v(e){var t=e.coordinates;return{vertices:re(t),indices:[0],size:t.length}}var sm=function(e){Te(n,e);var t=RT(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getDefaultStyle",value:function(){return{blend:"additive"}}},{key:"getCommonUniformsInfo",value:function(){var i={u_size_scale:.5},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.layer.triangulation=_v,this.initUniformsBuffer(),s.next=4,this.layer.buildLayerModel({moduleName:"pointNormal",vertexShader:FT,fragmentShader:OT,triangulation:_v,inject:this.getInject(),depth:{enable:!1},primitive:R.POINTS,pick:!1});case 4:return o=s.sent,s.abrupt("return",[o]);case 6:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?1:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(ot);function DT(e){var t=NT();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function NT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var BT=`
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
`,zT=function(e){Te(n,e);var t=DT(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.blend,o=i.speed,u=o===void 0?1:o,s=i.unit,l=s===void 0?"pixel":s,c={u_additive:a==="additive"?1:0,u_size_unit:El[l],u_speed:u,u_time:this.layer.getLayerAnimateTime()},f=this.getUniformsBufferInfo(c);return f}},{key:"getAnimateUniforms",value:function(){return{}}},{key:"getAttribute",value:function(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),uo)}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"pointRadar",vertexShader:UT,fragmentShader:BT,triangulation:uo,inject:this.getInject(),depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"animateOption2Array",value:function(i){return[i.enable?0:1,i.speed||1,i.rings||3,0]}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Ce.Attribute,descriptor:{name:"a_Extrude",shaderLocation:Re.EXTRUDE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a,o,u,s){var l=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],c=s%4*3;return[l[c],l[c+1],l[c+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{shaderLocation:Re.SIZE,name:"a_Size",buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?5:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(ot);function $T(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=VT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function VT(e,t){if(e){if(typeof e=="string")return xv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xv(e,t)}}function xv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var jT=function(){function e(t,n,r){ce(this,e),S(this,"boxCells",[]);var i=this.boxCells;this.xCellCount=Math.ceil(t/r),this.yCellCount=Math.ceil(n/r);for(var a=0;a<this.xCellCount*this.yCellCount;a++)i.push([]);this.boxKeys=[],this.bboxes=[],this.width=t,this.height=n,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/n,this.boxUid=0}return le(e,[{key:"insert",value:function(n,r,i,a,o){this.forEachCell(r,i,a,o,this.insertBoxCell,this.boxUid++),this.boxKeys.push(n),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(a),this.bboxes.push(o)}},{key:"query",value:function(n,r,i,a,o){return this.queryHitTest(n,r,i,a,!1,o)}},{key:"hitTest",value:function(n,r,i,a,o){return this.queryHitTest(n,r,i,a,!0,o)}},{key:"insertBoxCell",value:function(n,r,i,a,o,u){this.boxCells[o].push(u)}},{key:"queryHitTest",value:function(n,r,i,a,o,u){if(i<0||n>this.width||a<0||r>this.height)return o?!1:[];var s=[];if(n<=0&&r<=0&&this.width<=i&&this.height<=a){if(o)return!0;for(var l=0;l<this.boxKeys.length;l++)s.push({key:this.boxKeys[l],x1:this.bboxes[l*4],y1:this.bboxes[l*4+1],x2:this.bboxes[l*4+2],y2:this.bboxes[l*4+3]});return u?s.filter(u):s}var c={hitTest:o,seenUids:{box:{},circle:{}}};return this.forEachCell(n,r,i,a,this.queryCell,s,c,u),o?s.length>0:s}},{key:"queryCell",value:function(n,r,i,a,o,u,s,l){var c=s.seenUids,f=this.boxCells[o];if(f!==null){var h=this.bboxes,d=$T(f),v;try{for(d.s();!(v=d.n()).done;){var p=v.value;if(!c.box[p]){c.box[p]=!0;var g=p*4;if(n<=h[g+2]&&r<=h[g+3]&&i>=h[g+0]&&a>=h[g+1]&&(!l||l(this.boxKeys[p]))){if(s.hitTest)return u.push(!0),!0;u.push({key:this.boxKeys[p],x1:h[g],y1:h[g+1],x2:h[g+2],y2:h[g+3]})}}}}catch(m){d.e(m)}finally{d.f()}}return!1}},{key:"forEachCell",value:function(n,r,i,a,o,u,s,l){for(var c=this.convertToXCellCoord(n),f=this.convertToYCellCoord(r),h=this.convertToXCellCoord(i),d=this.convertToYCellCoord(a),v=c;v<=h;v++)for(var p=f;p<=d;p++){var g=this.xCellCount*p+v;if(o.call(this,n,r,i,a,g,u,s,l))return}}},{key:"convertToXCellCoord",value:function(n){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(n*this.xScale)))}},{key:"convertToYCellCoord",value:function(n){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(n*this.yScale)))}}]),e}();const HT=jT;var GT=function(){function e(t,n){ce(this,e),S(this,"viewportPadding",100),this.width=t,this.height=n,this.viewportPadding=Math.max(t,n),this.grid=new HT(t+this.viewportPadding,n+this.viewportPadding,25),this.screenRightBoundary=t+this.viewportPadding,this.screenBottomBoundary=n+this.viewportPadding,this.gridRightBoundary=t+2*this.viewportPadding,this.gridBottomBoundary=n+2*this.viewportPadding}return le(e,[{key:"placeCollisionBox",value:function(n){var r=n.x1+n.anchorPointX+this.viewportPadding,i=n.y1+n.anchorPointY+this.viewportPadding,a=n.x2+n.anchorPointX+this.viewportPadding,o=n.y2+n.anchorPointY+this.viewportPadding;return!this.isInsideGrid(r,i,a,o)||this.grid.hitTest(r,i,a,o)?{box:[]}:{box:[r,i,a,o]}}},{key:"insertCollisionBox",value:function(n,r){var i={featureIndex:r};this.grid.insert(i,n[0],n[1],n[2],n[3])}},{key:"project",value:function(n,r,i){var a=M1(r,i,0,1),o=b0(),u=c0.apply(T1,re(n));return S0(o,a,u),{x:(o[0]/o[3]+1)/2*this.width+this.viewportPadding,y:(-o[1]/o[3]+1)/2*this.height+this.viewportPadding}}},{key:"isInsideGrid",value:function(n,r,i,a){return i>=0&&n<this.gridRightBoundary&&a>=0&&r<this.gridBottomBoundary}}]),e}();function lm(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=WT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function WT(e,t){if(e){if(typeof e=="string")return bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bv(e,t)}}function bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cm(e){var t=.5,n=.5;switch(e){case"right":case"top-right":case"bottom-right":t=1;break;case"left":case"top-left":case"bottom-left":t=0;break;default:t=.5}switch(e){case"bottom":case"bottom-right":case"bottom-left":n=1;break;case"top":case"top-right":case"top-left":n=0;break;default:n=.5}return{horizontalAlign:t,verticalAlign:n}}function fm(e,t,n,r,i){if(i){var a=e[r],o=a.glyph;if(o)for(var u=t[o].advance*a.scale,s=(e[r].x+u)*i,l=n;l<=r;l++)e[l].x-=s}}function hm(e,t,n,r,i,a,o){var u=(t-n)*i,s=(-r*o+.5)*a,l=lm(e),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;f.x+=u,f.y+=s}}catch(h){l.e(h)}finally{l.f()}}function YT(e,t,n,r,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;n.forEach(function(_){if(_.split("").forEach(function(x){var b=t[x],M=0;b&&(f.push({glyph:x,x:s,y:l+M,vertical:!1,scale:1,metrics:b}),s+=b.advance+o)}),f.length!==d){var y=s-o;c=Math.max(y,c),fm(f,t,d,f.length-1,h)}s=0,l-=r+5});var v=cm(i),p=v.horizontalAlign,g=v.verticalAlign;hm(f,h,p,g,c,r,n.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function XT(e,t,n,r,i,a,o){var u=-8,s=0,l=u,c=0,f=e.positionedGlyphs,h=a==="right"?1:a==="left"?0:.5,d=f.length;n.forEach(function(_){var y=t[_],x=0;if(y&&(f.push({glyph:_,x:y.advance/2,y:l+x,vertical:!1,scale:1,metrics:y}),s+=y.advance+o),f.length!==d){var b=s-o;c=Math.max(b,c),fm(f,t,d,f.length-1,h)}s=0,l-=r+5});var v=cm(i),p=v.horizontalAlign,g=v.verticalAlign;hm(f,h,p,g,c,r,n.length);var m=l-u;e.top+=-g*m,e.bottom=e.top-m,e.left+=-p*c,e.right=e.left+c}function ZT(e,t,n,r,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:[0,0],u=arguments.length>7?arguments[7]:void 0,s=e.split(`
`),l=[],c={positionedGlyphs:l,top:o[1],bottom:o[1],left:o[0],right:o[0],lineCount:s.length,text:e};return u?XT(c,t,s,n,r,i,a):YT(c,t,s,n,r,i,a),l.length?c:!1}function qT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],n=arguments.length>2?arguments[2]:void 0,r=e.positionedGlyphs,i=r===void 0?[]:r,a=[],o=lm(i),u;try{for(o.s();!(u=o.n()).done;){var s=u.value,l=s.metrics,c=4,f=l.advance*s.scale/2,h=n?[s.x+f,s.y]:[0,0],d=n?[0,0]:[s.x+f+t[0],s.y+t[1]],v=(0-c)*s.scale-f+d[0],p=(0-c)*s.scale+d[1],g=v+l.width*s.scale,m=p+l.height*s.scale,_={x:v,y:p},y={x:g,y:p},x={x:v,y:m},b={x:g,y:m};a.push({tl:_,tr:y,bl:x,br:b,tex:l,glyphOffset:h})}}catch(M){o.e(M)}finally{o.f()}return a}function QT(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=JT(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function JT(e,t){if(e){if(typeof e=="string")return Sv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sv(e,t)}}function Sv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function KT(e){var t=e4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function e4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Av=`#define SDF_PX 8.0
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
`,Ev=`#define SDF_PX 8.0
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
`,Ei=nt.isEqual;function Cv(e){var t=this,n=e.id,r=[],i=[];if(!t.glyphInfoMap||!t.glyphInfoMap[n])return{vertices:[],indices:[],size:7};var a=t.glyphInfoMap[n].centroid,o=a.length===2?[a[0],a[1],0]:a;return t.glyphInfoMap[n].glyphQuads.forEach(function(u,s){r.push.apply(r,re(o).concat([u.tex.x,u.tex.y+u.tex.height,u.tl.x,u.tl.y],re(o),[u.tex.x+u.tex.width,u.tex.y+u.tex.height,u.tr.x,u.tr.y],re(o),[u.tex.x+u.tex.width,u.tex.y,u.br.x,u.br.y],re(o),[u.tex.x,u.tex.y,u.bl.x,u.bl.y])),i.push(0+s*4,1+s*4,2+s*4,2+s*4,3+s*4,0+s*4)}),{vertices:r,indices:i,size:7}}var dm=function(e){Te(n,e);var t=KT(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"glyphInfoMap",{}),S(P(r),"currentZoom",-1),S(P(r),"textureHeight",0),S(P(r),"textCount",0),S(P(r),"preTextStyle",{}),S(P(r),"mapping",Q(w.mark(function u(){return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return r.initGlyph(),r.updateTexture(),l.next=4,r.reBuildModel();case 4:case"end":return l.stop()}},u)}))),r}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($($({},i.uniformsOption),a.uniformsOption),{u_sdf_map:this.textures[0]})}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.stroke,o=a===void 0?"#fff":a,u=i.strokeWidth,s=u===void 0?0:u,l=i.halo,c=l===void 0?.5:l,f=i.gamma,h=f===void 0?2:f,d=i.raisingHeight,v=d===void 0?0:d,p=this.getFontServiceMapping(),g=this.getFontServiceCanvas();p&&Object.keys(p).length!==this.textCount&&g&&(this.updateTexture(),this.textCount=Object.keys(p).length),this.preTextStyle=this.getTextStyle();var m={u_stroke_color:rt(o),u_sdf_map_size:[(g==null?void 0:g.width)||1,(g==null?void 0:g.height)||1],u_raisingHeight:Number(v),u_stroke_width:s,u_gamma_scale:h,u_halo_blur:c},_=this.getUniformsBufferInfo(m);return _}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.bindEvent(),this.extent=this.textExtent(),this.rawEncodeData=this.layer.getEncodedData(),this.preTextStyle=this.getTextStyle(),this.initUniformsBuffer(),u.abrupt("return",this.buildModels());case 6:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.layer.getLayerConfig(),u=o.textAllowOverlap,s=u===void 0?!1:u,this.initGlyph(),this.updateTexture(),s||this.filterGlyphs(),f.next=6,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:Ev,fragmentShader:Av,inject:this.getInject(),triangulation:Cv.bind(this),depth:{enable:!1}});case 6:return l=f.sent,f.abrupt("return",[l]);case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"needUpdate",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d,v,p,g,m;return w.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(o=this.getTextStyle(),u=o.textAllowOverlap,s=u===void 0?!1:u,l=o.textAnchor,c=l===void 0?"center":l,f=o.textOffset,h=o.padding,d=o.fontFamily,v=o.fontWeight,!(!Ei(h,this.preTextStyle.padding)||!Ei(f,this.preTextStyle.textOffset)||!Ei(c,this.preTextStyle.textAnchor)||!Ei(d,this.preTextStyle.fontFamily)||!Ei(v,this.preTextStyle.fontWeight))){y.next=5;break}return y.next=4,this.mapping();case 4:return y.abrupt("return",!0);case 5:if(!s){y.next=7;break}return y.abrupt("return",!1);case 7:if(p=this.mapService.getZoom(),g=this.mapService.getBounds(),m=$0(this.extent,g),!(Math.abs(this.currentZoom-p)>.5||!m||s!==this.preTextStyle.textAllowOverlap)){y.next=14;break}return y.next=13,this.reBuildModel();case 13:return y.abrupt("return",!0);case 14:return y.abrupt("return",!1);case 15:case"end":return y.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.layer.off("remapping",this.mapping)}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"textOffsets",type:Ce.Attribute,descriptor:{shaderLocation:10,name:"a_textOffsets",buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[5],u[6]]}}}),this.styleAttributeService.registerStyleAttribute({name:"textUv",type:Ce.Attribute,descriptor:{name:"a_tex",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?12:o;return Array.isArray(u)?[u[0]]:[u]}}})}},{key:"bindEvent",value:function(){this.layer.isTileLayer||this.layer.on("remapping",this.mapping)}},{key:"textExtent",value:function(){var i=this.mapService.getBounds();return al(i,.5)}},{key:"initTextFont",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f=f.toString();var h=QT(f),d;try{for(h.s();!(d=h.n()).done;){var v=d.value;s.indexOf(v)===-1&&s.push(v)}}catch(p){h.e(p)}finally{h.f()}}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!1})}},{key:"initIconFontTex",value:function(){var i=this.getTextStyle(),a=i.fontWeight,o=i.fontFamily,u=this.rawEncodeData,s=[];u.forEach(function(l){var c=l.shape,f=c===void 0?"":c;f="".concat(f),s.indexOf(f)===-1&&s.push(f)}),this.fontService.setFontOptions({characterSet:s,fontWeight:a,fontFamily:o,iconfont:!0})}},{key:"getTextStyle",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u,l=i.textAllowOverlap,c=l===void 0?!1:l,f=i.padding,h=f===void 0?[0,0]:f,d=i.textAnchor,v=d===void 0?"center":d,p=i.textOffset,g=p===void 0?[0,0]:p,m=i.opacity,_=m===void 0?1:m,y=i.strokeOpacity,x=y===void 0?1:y,b=i.strokeWidth,M=b===void 0?0:b,C=i.stroke,L=C===void 0?"#000":C;return{fontWeight:o,fontFamily:s,textAllowOverlap:c,padding:h,textAnchor:v,textOffset:g,opacity:_,strokeOpacity:x,strokeWidth:M,stroke:L}}},{key:"generateGlyphLayout",value:function(i){var a=this,o=this.getFontServiceMapping(),u=this.layer.getLayerConfig(),s=u.spacing,l=s===void 0?2:s,c=u.textAnchor,f=c===void 0?"center":c,h=u.textOffset,d=this.rawEncodeData;this.glyphInfo=d.map(function(v){var p=v.shape,g=p===void 0?"":p,m=v.id,_=v.size,y=_===void 0?1:_,x=v.textOffset?v.textOffset:h||[0,0],b=v.textAnchor?v.textAnchor:f||"center",M=ZT(g.toString(),o,y,b,"left",l,x,i),C=qT(M,x,!1);return v.shaping=M,v.glyphQuads=C,v.centroid=Rn(v.coordinates),v.originCentroid=v.version==="GAODE2.x"?Rn(v.originCoordinates):v.originCentroid=v.centroid,a.glyphInfoMap[m]={shaping:M,glyphQuads:C,centroid:Rn(v.coordinates)},v})}},{key:"getFontServiceMapping",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getMappingByKey("".concat(s,"_").concat(o))}},{key:"getFontServiceCanvas",value:function(){var i=this.layer.getLayerConfig(),a=i.fontWeight,o=a===void 0?"400":a,u=i.fontFamily,s=u===void 0?"sans-serif":u;return this.fontService.getCanvasByKey("".concat(s,"_").concat(o))}},{key:"filterGlyphs",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.padding,u=o===void 0?[0,0]:o,s=a.textAllowOverlap,l=s===void 0?!1:s;if(!l){this.glyphInfoMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.textExtent();var c=this.rendererService.getViewportSize(),f=c.width,h=c.height,d=new GT(f,h),v=this.glyphInfo.filter(function(p){var g=p.shaping,m=p.id,_=m===void 0?0:m,y=p.version==="GAODE2.x"?p.originCentroid:p.centroid,x=p.size,b=x/16,M=i.mapService.lngLatToContainer(y),C=d.placeCollisionBox({x1:g.left*b-u[0],x2:g.right*b+u[0],y1:g.top*b-u[1],y2:g.bottom*b+u[1],anchorPointX:M.x,anchorPointY:M.y}),L=C.box;return L&&L.length?(d.insertCollisionBox(L,_),!0):!1});v.forEach(function(p){i.glyphInfoMap[p.id]=p})}}},{key:"initGlyph",value:function(){var i=this.layer.getLayerConfig(),a=i.iconfont,o=a===void 0?!1:a;o?this.initIconFontTex():this.initTextFont(),this.generateGlyphLayout(o)}},{key:"updateTexture",value:function(){var i=this.rendererService.createTexture2D,a=this.getFontServiceCanvas();this.textureHeight=a.height,this.texture&&this.texture.destroy(),this.texture=i({data:a,mag:R.LINEAR,min:R.LINEAR,width:a.width,height:a.height}),this.textures=[this.texture]}},{key:"reBuildModel",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.filterGlyphs(),s.next=3,this.layer.buildLayerModel({moduleName:"pointText",vertexShader:Ev,fragmentShader:Av,triangulation:Cv.bind(this),inject:this.getInject(),depth:{enable:!1}});case 3:o=s.sent,this.layer.models=[o];case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()}]),n}(ot),t4={fillImage:TT,fill:om,radar:zT,image:um,normal:sm,simplePoint:rT,extrude:am,text:dm,earthFill:vT,earthExtrude:lT};function n4(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r4(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,u;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}}}function r4(e,t){if(e){if(typeof e=="string")return wv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wv(e,t)}}function wv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i4(e){var t=a4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function a4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Ps=function(e){Te(n,e);var t=i4(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","PointLayer"),S(P(r),"enableShaderEncodeStyles",["stroke","offsets","opacity","rotation"]),S(P(r),"enableDataEncodeStyles",["textOffset","textAnchor"]),S(P(r),"defaultSourceConfig",{data:[],options:{parser:{type:"json",x:"lng",y:"lat"}}}),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel&&this.layerModel.clearModels(),this.layerModel=new t4[o](this),s.next=5,this.initLayerModels();case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"rebuildModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.buildModels();case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelTypeWillEmptyData",value:function(){if(this.shapeOption){var i=this.shapeOption,a=i.field,o=i.values,u=this.getLayerConfig(),s=u.shape2d,l=this.iconService.getIconMap();if(a&&(s==null?void 0:s.indexOf(a))!==-1)return"fill";if(o==="text")return"text";if(o&&o instanceof Array){var c=n4(o),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;if(typeof h=="string"&&l.hasOwnProperty(h))return"image"}}catch(d){c.e(d)}finally{c.f()}}}return"normal"}},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={fillImage:{},normal:{blend:"additive"},radar:{},simplePoint:{},fill:{blend:"normal"},extrude:{},image:{},text:{blend:"normal"},tile:{},tileText:{},earthFill:{},earthExtrude:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=a.billboard,l=s===void 0?!0:s,c=this.iconService.getIconMap(),f=i.find(function(d){return d.hasOwnProperty("shape")});if(f){var h=f.shape;return h==="dot"?"normal":h==="simple"?"simplePoint":h==="radar"?"radar":this.layerType==="fillImage"||l===!1?"fillImage":(o==null?void 0:o.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthFill":"fill":(u==null?void 0:u.indexOf(h))!==-1?this.mapService.version==="GLOBEL"?"earthExtrude":"extrude":c.hasOwnProperty(h)?"image":"text"}else return this.getModelTypeWillEmptyData()}}]),n}(oi);function o4(e){return Os.apply(this,arguments)}function Os(){return Os=Q(w.mark(function e(t){var n,r,i;return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!window.createImageBitmap){o.next=14;break}return o.next=3,fetch(t);case 3:return n=o.sent,o.t0=createImageBitmap,o.next=7,n.blob();case 7:return o.t1=o.sent,o.next=10,(0,o.t0)(o.t1);case 10:return r=o.sent,o.abrupt("return",r);case 14:return i=new window.Image,o.abrupt("return",new Promise(function(u){i.onload=function(){return u(i)},i.src=t,i.crossOrigin="Anonymous"}));case 16:case"end":return o.stop()}},e)})),Os.apply(this,arguments)}function u4(e){var t=s4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function s4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var l4=`layout(std140) uniform commonUniforms {
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
`,p4=function(e){Te(n,e);var t=u4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.mapTexture,o=i.heightfixed,u=o===void 0?!1:o,s=i.raisingHeight,l=s===void 0?0:s,c=i.topsurface,f=c===void 0?!0:c,h=i.sidesurface,d=h===void 0?!0:h,v=i.sourceColor,p=i.targetColor,g=0,m=[1,1,1,1],_=[1,1,1,1];v&&p&&(m=rt(v),_=rt(p),g=1);var y={u_sourceColor:m,u_targetColor:_,u_linearColor:g,u_topsurface:Number(f),u_sidesurface:Number(d),u_heightfixed:Number(u),u_raisingHeight:Number(l)};a&&this.texture&&(y.u_texture=this.texture,this.textures=[this.texture]);var x=this.getUniformsBufferInfo(y);return x}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.loadTexture();case 2:return u.abrupt("return",this.buildModels());case 3:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,depth:{enable:!0},inject:this.getInject(),triangulation:nm});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){var i=this.layer.getLayerConfig(),a=i.pickLight,o=i.mapTexture;return o?{frag:f4,vert:h4,type:"polygonExtrudeTexture"}:a?{frag:d4,vert:v4,type:"polygonExtrudePickLight"}:{frag:l4,vert:c4,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy(),this.textures=[]}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=i,o=this.layer.coordCenter||this.layer.getSource().center,u=a[2]-a[0],s=a[3]-a[1];if(this.mapService.version==="GAODE2.x"){var l=this.mapService.coordToAMap2RelativeCoordinates([i[0],i[1]],o),c=Fe(l,2),f=c[0],h=c[1],d=this.mapService.coordToAMap2RelativeCoordinates([i[2],i[3]],o),v=Fe(d,2),p=v[0],g=v[1];u=p-f,s=g-h,a=[f,h,p,g]}this.styleAttributeService.registerStyleAttribute({name:"uvs",type:Ce.Attribute,descriptor:{name:"a_uvs",shaderLocation:Re.UV,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(_,y,x){var b=x[0],M=x[1];return[(b-a[0])/u,(M-a[1])/s,x[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(_,y,x,b,M){return M}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(_){var y=_.size,x=y===void 0?10:y;return Array.isArray(x)?[x[0]]:[x]}}})}},{key:"loadTexture",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.layer.getLayerConfig(),u=o.mapTexture,s=this.rendererService.createTexture2D,this.texture=s({height:1,width:1}),!u){f.next=8;break}return f.next=6,o4(u);case 6:l=f.sent,this.texture=s({data:l,width:l.width,height:l.height,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE,min:R.LINEAR,mag:R.LINEAR});case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()}]),n}(ot);function g4(e){var t=m4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function m4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var y4=`
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
`,x4=function(e){Te(n,e);var t=g4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i={},a=this.getUniformsBufferInfo(i);return a}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o=this.getShaders(),u=o.frag,s=o.vert,l=o.type,this.initUniformsBuffer(),h.next=4,this.layer.buildLayerModel({moduleName:l,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:nm,depth:{enable:!0}});case 4:return c=h.sent,h.abrupt("return",[c]);case 6:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getShaders",value:function(){return{frag:y4,vert:_4,type:"polygonExtrude"}}},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Ce.Attribute,descriptor:{name:"a_Normal",shaderLocation:Re.NORMAL,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(a,o,u,s,l){return l}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Ce.Attribute,descriptor:{name:"a_Size",shaderLocation:Re.SIZE,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(a){var o=a.size,u=o===void 0?10:o;return Array.isArray(u)?[u[0]]:[u]}}})}}]),n}(ot);function b4(e){var t=S4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function S4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var A4=`in vec4 v_color;
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

`,T4=function(e){Te(n,e);var t=b4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.raisingHeight,o=a===void 0?0:a,u=i.opacityLinear,s=u===void 0?{enable:!1,dir:"in"}:u,l={u_raisingHeight:Number(o),u_opacitylinear:Number(s.enable),u_dir:s.dir==="in"?1:0},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=this.getModelParams(),u=o.frag,s=o.vert,l=o.triangulation,c=o.type,this.initUniformsBuffer(),this.layer.triangulation=l,d.next=5,this.layer.buildLayerModel({moduleName:c,vertexShader:s,fragmentShader:u,inject:this.getInject(),triangulation:l,primitive:R.TRIANGLES,depth:{enable:!1}});case 5:return f=d.sent,d.abrupt("return",[f]);case 7:case"end":return d.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1,dir:"in"}:a;o.enable&&this.styleAttributeService.registerStyleAttribute({name:"linear",type:Ce.Attribute,descriptor:{name:"a_linear",shaderLocation:Re.LINEAR,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:3,update:function(s,l,c){return[c[3],c[4],c[5]]}}})}},{key:"getModelParams",value:function(){var i=this.layer.getLayerConfig(),a=i.opacityLinear,o=a===void 0?{enable:!1}:a;return o.enable?{frag:E4,vert:C4,type:"polygonLinear",triangulation:GC}:{frag:A4,vert:w4,type:"polygonFill",triangulation:rg}}}]),n}(ot);function M4(e){var t=k4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function k4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var I4=`
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

`,R4=function(e){Te(n,e);var t=M4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.watercolor,o=a===void 0?"#6D99A8":a,u=i.watercolor2,s=u===void 0?"#0F121C":u,l={u_watercolor:rt(o),u_watercolor2:rt(s),u_time:this.layer.getLayerAnimateTime(),u_texture1:this.texture1,u_texture2:this.texture2,u_texture3:this.texture3};this.textures=[this.texture1,this.texture2,this.texture3];var c=this.getUniformsBufferInfo(l);return c}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonOcean",vertexShader:L4,fragmentShader:I4,inject:this.getInject(),triangulation:Cl,primitive:R.TRIANGLES,depth:{enable:!1}});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a,o;(i=this.texture1)===null||i===void 0||i.destroy(),(a=this.texture2)===null||a===void 0||a.destroy(),(o=this.texture3)===null||o===void 0||o.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Fe(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"oceanUv",type:Ce.Attribute,descriptor:{name:"a_uv",shaderLocation:Re.UV,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Fe(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.rendererService.createTexture2D,o={height:0,width:0};this.texture1=a(o),this.texture2=a(o),this.texture3=a(o),u(function(l){i.texture1=s(l[0]),i.texture2=s(l[1]),i.texture3=s(l[2]),i.layerService.reRender()});function u(l){var c=0,f=[],h=["https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*MJ22QbpuCzIAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*-z2HSIVDsHIAAAAAAAAAAAAAARQnAQ"];h.map(function(d){var v=new Image;v.crossOrigin="",v.src=d,f.push(v),v.onload=function(){c++,c===3&&l(f)}})}function s(l){return a({data:l,width:l.width,height:l.height,wrapS:R.MIRRORED_REPEAT,wrapT:R.MIRRORED_REPEAT,min:R.LINEAR,mag:R.LINEAR})}}}]),n}(ot);function P4(e){var t=O4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function O4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var F4=`uniform sampler2D u_texture;
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

`,N4=function(e){Te(n,e);var t=P4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.speed,o=a===void 0?.5:a,u={u_speed:o,u_time:this.layer.getLayerAnimateTime(),u_texture:this.texture};this.textures=[this.texture];var s=this.getUniformsBufferInfo(u);return s}},{key:"getAnimateUniforms",value:function(){return{u_time:this.layer.getLayerAnimateTime()}}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.loadTexture(),u.abrupt("return",this.buildModels());case 2:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"polygonWater",vertexShader:D4,fragmentShader:F4,triangulation:Cl,inject:this.getInject(),primitive:R.TRIANGLES,depth:{enable:!1},pickingEnabled:!1,diagnosticDerivativeUniformityEnabled:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){var i=this.layer.getSource().extent,a=Fe(i,4),o=a[0],u=a[1],s=a[2],l=a[3],c=s-o,f=l-u;this.styleAttributeService.registerStyleAttribute({name:"waterUv",type:Ce.Attribute,descriptor:{name:"a_uv",shaderLocation:Re.UV,buffer:{usage:R.STATIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(d,v,p,g){var m=d.version==="GAODE2.x"?d.originCoordinates[0][g]:p,_=Fe(m,2),y=_[0],x=_[1];return[(y-o)/c,(x-u)/f]}}})}},{key:"loadTexture",value:function(){var i=this,a=this.layer.getLayerConfig(),o=a.waterTexture,u=this.rendererService.createTexture2D;this.texture=u({height:1,width:1});var s=new Image;s.crossOrigin="",o?s.src=o:s.src="https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ",s.onload=function(){i.texture=u({data:s,width:s.width,height:s.height,wrapS:R.MIRRORED_REPEAT,wrapT:R.MIRRORED_REPEAT,min:R.LINEAR,mag:R.LINEAR}),i.layerService.reRender()}}}]),n}(ot),B4={fill:T4,line:rm,extrude:p4,text:dm,point_fill:om,point_image:um,point_normal:sm,point_extrude:am,water:N4,ocean:R4,extrusion:x4};function U4(e){var t=z4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function z4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var vm=function(e){Te(n,e);var t=U4(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","PolygonLayer"),S(P(r),"enableShaderEncodeStyles",["opacity","extrusionBase","rotation","offsets","stroke"]),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new B4[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){var i,a=this.styleAttributeService.getLayerStyleAttribute("shape"),o=a==null||(i=a.scale)===null||i===void 0?void 0:i.field;return o==="fill"||!o?"fill":o==="extrude"?"extrude":o==="extrusion"?"extrusion":o==="water"?"water":o==="ocean"?"ocean":o==="line"?"line":this.getPointModelType()}},{key:"getPointModelType",value:function(){var i=this.getEncodedData(),a=this.getLayerConfig(),o=a.shape2d,u=a.shape3d,s=this.iconService.getIconMap(),l=i.find(function(f){return f.hasOwnProperty("shape")});if(l){var c=l.shape;return c==="dot"?"point_normal":(o==null?void 0:o.indexOf(c))!==-1?"point_fill":(u==null?void 0:u.indexOf(c))!==-1?"point_extrude":s.hasOwnProperty(c)?"point_image":"text"}else return"fill"}}]),n}(oi);function $4(e){var t=V4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function V4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var j4=`layout(std140) uniform commonUniforms {
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
`,Tv=function(e){Te(n,e);var t=$4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.clampLow,s=u===void 0?!0:u,l=i.clampHigh,c=l===void 0?!0:l,f=i.noDataValue,h=f===void 0?-9999999:f,d=i.domain,v=i.rampColors,p=d||nl(v);this.colorTexture=this.layer.textureService.getColorTexture(v,p);var g={u_domain:p,u_opacity:o||1,u_noDataValue:h,u_clampLow:s?1:0,u_clampHigh:(typeof c<"u"?c:s)?1:0,u_rasterTexture:this.texture,u_colorTexture:this.colorTexture};this.textures=[this.texture,this.colorTexture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var r=Q(w.mark(function a(o){var u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!Array.isArray(o.data)){h.next=4;break}return h.abrupt("return",{data:o.data,width:o.width,height:o.height});case 4:return h.next=6,o.data;case 6:return u=h.sent,s=u.rasterData,l=u.width,c=u.height,h.abrupt("return",{data:Array.from(s),width:l,height:c});case 11:case"end":return h.stop()}},a)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d,v,p;return w.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService,s=u.createTexture2D,l=u.queryVerdorInfo,c=o.data.dataArray[0],m.next=6,this.getRasterData(c);case 6:return f=m.sent,h=f.data,d=f.width,v=f.height,this.texture=s({data:new Float32Array(h),width:d,height:v,format:l()==="WebGL1"?R.LUMINANCE:R.RED,type:R.FLOAT,alignment:1}),m.next=13,this.layer.buildLayerModel({moduleName:"rasterImageData",vertexShader:H4,fragmentShader:j4,triangulation:Vo,primitive:R.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return p=m.sent,m.abrupt("return",[p]);case 15:case"end":return m.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i,a;(i=this.texture)===null||i===void 0||i.destroy(),(a=this.colorTexture)===null||a===void 0||a.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{shaderLocation:Re.UV,name:"a_Uv",buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(ot),G4=["data"],W4=["rasterData"];function Y4(e){var t=X4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function X4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Z4=`uniform sampler2D u_texture;
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
`,Q4=function(e){Te(n,e);var t=Y4(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"dataOption",{}),r}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.noDataValue,s=u===void 0?0:u,l=this.dataOption,c=l.rMinMax,f=c===void 0?[0,255]:c,h=l.gMinMax,d=h===void 0?[0,255]:h,v=l.bMinMax,p=v===void 0?[0,255]:v,g={u_rminmax:f,u_gminmax:d,u_bminmax:p,u_opacity:o||1,u_noDataValue:s,u_texture:this.texture};this.textures=[this.texture];var m=this.getUniformsBufferInfo(g);return m}},{key:"getRasterData",value:function(){var r=Q(w.mark(function a(o){var u,s,l,c,f;return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!Array.isArray(o.data)){d.next=4;break}return u=o.data,s=on(o,G4),this.dataOption=s,d.abrupt("return",$({data:u},s));case 4:return d.next=6,o.data;case 6:if(l=d.sent,c=l.rasterData,f=on(l,W4),this.dataOption=f,!Array.isArray(c)){d.next=14;break}return d.abrupt("return",$({data:c},f));case 14:return d.abrupt("return",$({data:Array.from(c)},f));case 15:case"end":return d.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"initModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h,d;return w.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,s=o.data.dataArray[0],p.next=6,this.getRasterData(s);case 6:return l=p.sent,c=l.data,f=l.width,h=l.height,this.texture=u({data:new Float32Array(c),width:f,height:h,format:R.RGB,type:R.FLOAT}),p.next=13,this.layer.buildLayerModel({moduleName:"rasterImageDataRGBA",vertexShader:q4,fragmentShader:Z4,triangulation:Vo,primitive:R.TRIANGLES,depth:{enable:!1},pickingEnabled:!1});case 13:return d=p.sent,p.abrupt("return",[d]);case 15:case"end":return p.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_Uv",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(ot);function J4(e){var t=K4();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function K4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var eM=`uniform sampler2D u_texture;
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
`,nM=function(e){Te(n,e);var t=J4(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=i.clampLow,u=o===void 0?!0:o,s=i.clampHigh,l=s===void 0?!0:s,c=i.noDataValue,f=c===void 0?-9999999:c,h=i.domain,d=i.rampColors,v=i.colorTexture,p=i.rScaler,g=p===void 0?6553.6:p,m=i.gScaler,_=m===void 0?25.6:m,y=i.bScaler,x=y===void 0?.1:y,b=i.offset,M=b===void 0?1e4:b,C=h||nl(d),L=v;v?this.layer.textureService.setColorTexture(v,d,C):L=this.layer.textureService.getColorTexture(d,C);var N={u_unpack:[g,_,x,M],u_domain:C,u_opacity:a||1,u_noDataValue:f,u_clampLow:u,u_clampHigh:typeof l<"u"?l:u,u_texture:this.texture,u_colorTexture:L};this.textures=[this.texture,L];var I=this.getUniformsBufferInfo(N);return I}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return this.initUniformsBuffer(),o=this.layer.getSource(),u=this.rendererService.createTexture2D,f.next=5,o.data.images;case 5:return s=f.sent,this.texture=u({data:s[0],width:s[0].width,height:s[0].height,min:R.LINEAR,mag:R.LINEAR}),f.next=9,this.layer.buildLayerModel({moduleName:"RasterTileDataImage",vertexShader:tM,fragmentShader:eM,triangulation:Vo,primitive:R.TRIANGLES,depth:{enable:!1}});case 9:return l=f.sent,f.abrupt("return",[l]);case 11:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i;(i=this.texture)===null||i===void 0||i.destroy()}},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.initModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"registerBuiltinAttributes",value:function(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Ce.Attribute,descriptor:{name:"a_Uv",shaderLocation:Re.UV,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:2,update:function(a,o,u){return[u[3],u[4]]}}})}}]),n}(ot),rM={raster:Tv,rasterRgb:Q4,raster3d:Tv,rasterTerrainRgb:nM};function iM(e){var t=aM();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function aM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Tl=function(e){Te(n,e);var t=iM(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","RasterLayer"),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new rM[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getDefaultConfig",value:function(){var i=this.getModelType(),a={raster:{},rasterRgb:{},raster3d:{},rasterTerrainRgb:{}};return a[i]}},{key:"getModelType",value:function(){var i=this.layerSource.getParserType();switch(i){case"raster":return"raster";case"rasterRgb":return"rasterRgb";case"rgb":return"rasterRgb";case"image":return"rasterTerrainRgb";default:return"raster"}}},{key:"getLegend",value:function(i){if(i!=="color")return{type:void 0,field:void 0,items:[]};var a=this.getLayerConfig().rampColors;return XC(a,i)}}]),n}(oi);function oM(e){var t=uM();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function uM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sM=`layout(std140) uniform commonUniorm {
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

`,cM=function(e){Te(n,e);var t=oM(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"getUninforms",value:function(){var i=this.getCommonUniformsInfo(),a=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),$($({},i.uniformsOption),a.uniformsOption)}},{key:"getCommonUniformsInfo",value:function(){var i=this.layer.getLayerConfig(),a=i.opacity,o=a===void 0?1:a,u=i.color,s=u===void 0?"#000":u,l={u_color:rt(s),u_opacity:o||1},c=this.getUniformsBufferInfo(l);return c}},{key:"initModels",value:function(){var r=Q(w.mark(function a(){return w.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",this.buildModels());case 1:case"end":return u.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.initUniformsBuffer(),s.next=3,this.layer.buildLayerModel({moduleName:"mask",vertexShader:lM,fragmentShader:sM,triangulation:Cl,depth:{enable:!1},pick:!1});case 3:return o=s.sent,s.abrupt("return",[o]);case 5:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"clearModels",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;i&&this.layerService.clear()}},{key:"registerBuiltinAttributes",value:function(){return""}}]),n}(ot),fM={fill:cM};function hM(e){var t=dM();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function dM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var vM=function(e){Te(n,e);var t=hM(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),S(P(r),"type","MaskLayer"),r}return le(n,[{key:"buildModels",value:function(){var r=Q(w.mark(function a(){var o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=this.getModelType(),this.layerModel=new fM[o](this),s.next=4,this.initLayerModels();case 4:case"end":return s.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getModelType",value:function(){return"fill"}}]),n}(oi),Mv,kv,Iv,Lv,za,Rv,Pv,pM=nt.cloneDeep,gM=(Mv=Ne(),kv=Ge(se.IMapService),Iv=Ge(se.IFontService),Mv(Lv=(za=function(){function e(){ce(this,e),je(this,"mapService",Rv,this),je(this,"fontService",Pv,this)}return le(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("DataMappingPlugin",Q(w.mark(function o(){return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:n.log(mt.MappingStart,bt.INIT),i.generateMaping(n,{styleAttributeService:a}),n.log(mt.MappingEnd,bt.INIT);case 3:case"end":return s.stop()}},o)}))),n.hooks.beforeRenderData.tapPromise("DataMappingPlugin",function(){var o=Q(w.mark(function u(s){var l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(s){f.next=2;break}return f.abrupt("return",s);case 2:return n.dataState.dataMappingNeedUpdate=!1,n.log(mt.MappingStart,bt.UPDATE),l=i.generateMaping(n,{styleAttributeService:a}),n.log(mt.MappingEnd,bt.UPDATE),f.abrupt("return",l);case 7:case"end":return f.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),n.hooks.beforeRender.tap("DataMappingPlugin",function(){var o=n.getSource();if(!(n.layerModelNeedUpdate||!o||!o.inited)){var u=a.getLayerStyleAttributes()||[],s=a.getLayerStyleAttribute("filter"),l=o.data.dataArray;if(!(Array.isArray(l)&&l.length===0)){var c=u.filter(function(d){return d.needRemapping}),f=l;if(s!=null&&s.needRemapping&&s!==null&&s!==void 0&&s.scale&&(f=l.filter(function(d){return i.applyAttributeMapping(s,d)[0]})),c.length){var h=i.mapping(n,c,f,n.getEncodedData());n.setEncodedData(h)}}}})}},{key:"generateMaping",value:function(n,r){var i=this,a=r.styleAttributeService,o=a.getLayerStyleAttributes()||[],u=a.getLayerStyleAttribute("filter"),s=n.getSource().data.dataArray,l=s;u!=null&&u.scale&&(l=s.filter(function(f){return i.applyAttributeMapping(u,f)[0]})),l=n.processData(l);var c=this.mapping(n,o,l,void 0);return n.setEncodedData(c),n.emit("dataUpdate",null),!0}},{key:"mapping",value:function(n,r,i,a){var o=this,u=r.filter(function(l){return l.scale!==void 0}).filter(function(l){return l.name!=="filter"}),s=i.map(function(l,c){var f=a?a[c]:{},h=$({id:l._id,coordinates:l.coordinates},f);return u.forEach(function(d){var v=o.applyAttributeMapping(d,l);(d.name==="color"||d.name==="stroke")&&(v=v.map(function(p){return rt(p)})),h[d.name]=Array.isArray(v)&&v.length===1?v[0]:v,d.name==="shape"&&(h.shape=o.fontService.getIconFontKey(h[d.name]))}),h});return r.forEach(function(l){l.needRemapping=!1}),this.adjustData2Amap2Coordinates(s,n),this.adjustData2SimpleCoordinates(s),s}},{key:"adjustData2Amap2Coordinates",value:function(n,r){var i=this;if(n.length>0&&this.mapService.version==="GAODE2.x"){var a=r.coordCenter||r.getSource().center;n.filter(function(o){return!o.originCoordinates}).map(function(o){o.version="GAODE2.x",o.originCoordinates=pM(o.coordinates),o.coordinates=i.mapService.coordToAMap2RelativeCoordinates(o.coordinates,a)})}}},{key:"adjustData2SimpleCoordinates",value:function(n){var r=this;n.length>0&&this.mapService.version==="SIMPLE"&&n.map(function(i){i.simpleCoordinate||(i.coordinates=r.unProjectCoordinates(i.coordinates),i.simpleCoordinate=!0)})}},{key:"unProjectCoordinates",value:function(n){var r=this;if(typeof n[0]=="number")return this.mapService.simpleMapCoord.unproject(n);if(n[0]&&n[0][0]instanceof Array){var i=[];return n.map(function(o){var u=[];o.map(function(s){u.push(r.mapService.simpleMapCoord.unproject(s))}),i.push(u)}),i}else{var a=[];return n.map(function(o){a.push(r.mapService.simpleMapCoord.unproject(o))}),a}}},{key:"applyAttributeMapping",value:function(n,r){var i;if(!n.scale)return[];var a=(n==null||(i=n.scale)===null||i===void 0?void 0:i.scalers)||[],o=[];a.forEach(function(s){var l,c=s.field;(r.hasOwnProperty(c)||((l=n.scale)===null||l===void 0?void 0:l.type)==="variable")&&o.push(r[c])});var u=n.mapping?n.mapping(o):[];return u}},{key:"getArrowPoints",value:function(n,r){var i=[r[0]-n[0],r[1]-n[1]],a=D_(i),o=[n[0]+a[0]*1e-4,n[1]+a[1]*1e-4];return o}}]),e}(),Rv=ze(za.prototype,"mapService",[kv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pv=ze(za.prototype,"fontService",[Iv],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),za))||Lv),Ov,Fv,mM=(Ov=Ne(),Ov(Fv=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){var r=this;this.mapService=n.getContainer().get(se.IMapService),n.hooks.init.tapPromise("DataSourcePlugin",Q(w.mark(function i(){var a,o,u,s;return w.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(n.log(mt.SourceInitStart,bt.INIT),a=n.getSource(),a||(o=n.sourceOption||n.defaultSourceConfig,u=o.data,s=o.options,a=new Xg(u,s),n.setSource(a)),!a.inited){c.next=8;break}r.updateClusterData(n),n.log(mt.SourceInitEnd,bt.INIT),c.next=10;break;case 8:return c.next=10,new Promise(function(f){a.on("update",function(h){h.type==="inited"&&(r.updateClusterData(n),n.log(mt.SourceInitEnd,bt.INIT)),f(null)})});case 10:case"end":return c.stop()}},i)}))),n.hooks.beforeRenderData.tapPromise("DataSourcePlugin",Q(w.mark(function i(){var a,o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a=r.updateClusterData(n),o=n.dataState.dataSourceNeedUpdate,n.dataState.dataSourceNeedUpdate=!1,u=a||o,l.abrupt("return",u);case 5:case"end":return l.stop()}},i)})))}},{key:"updateClusterData",value:function(n){if(n.isTileLayer||n.tileLayer||!n.getSource())return!1;var r=n.getSource(),i=r.cluster,a=r.clusterOptions.zoom,o=a===void 0?0:a,u=this.mapService.getZoom()-1,s=n.dataState.dataSourceNeedUpdate;return i&&s&&r.updateClusterData(Math.floor(u)),i&&Math.abs(n.clusterZoom-u)>=1?(o!==Math.floor(u)&&r.updateClusterData(Math.floor(u)),n.clusterZoom=u,!0):!1}}]),e}())||Fv);function Ml(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function pm(e){return e.length===1&&(e=yM(e)),{left:function(t,n,r,i){for(r==null&&(r=0),i==null&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)<0?r=a+1:i=a}return r},right:function(t,n,r,i){for(r==null&&(r=0),i==null&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)>0?i=a:r=a+1}return r}}}function yM(e){return function(t,n){return Ml(e(t),n)}}var _M=pm(Ml),jo=_M.right;function xM(e){return e===null?NaN:+e}function Dv(e,t){var n=e.length,r=-1,i,a,o;if(t==null){for(;++r<n;)if((i=e[r])!=null&&i>=i)for(a=o=i;++r<n;)(i=e[r])!=null&&(a>i&&(a=i),o<i&&(o=i))}else for(;++r<n;)if((i=t(e[r],r,e))!=null&&i>=i)for(a=o=i;++r<n;)(i=t(e[r],r,e))!=null&&(a>i&&(a=i),o<i&&(o=i));return[a,o]}var Fs=Math.sqrt(50),Ds=Math.sqrt(10),Ns=Math.sqrt(2);function gm(e,t,n){var r,i=-1,a,o,u;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(a=e,e=t,t=a),(u=Za(e,t,n))===0||!isFinite(u))return[];if(u>0)for(e=Math.ceil(e/u),t=Math.floor(t/u),o=new Array(a=Math.ceil(t-e+1));++i<a;)o[i]=(e+i)*u;else for(e=Math.floor(e*u),t=Math.ceil(t*u),o=new Array(a=Math.ceil(e-t+1));++i<a;)o[i]=(e-i)/u;return r&&o.reverse(),o}function Za(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=Fs?10:a>=Ds?5:a>=Ns?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=Fs?10:a>=Ds?5:a>=Ns?2:1)}function Bs(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=Fs?i*=10:a>=Ds?i*=5:a>=Ns&&(i*=2),t<e?-i:i}function bM(e,t,n){if(n==null&&(n=xM),!!(r=e.length)){if((t=+t)<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,i=(r-1)*t,a=Math.floor(i),o=+n(e[a],a,e),u=+n(e[a+1],a+1,e);return o+(u-o)*(i-a)}}function SM(e,t,n,r,i){var a=e*e,o=a*e;return((1-3*e+3*a-o)*t+(4-6*a+3*o)*n+(1+3*e+3*a-3*o)*r+o*i)/6}function AM(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],a=e[r+1],o=r>0?e[r-1]:2*i-a,u=r<t-1?e[r+2]:2*a-i;return SM((n-r/t)*t,o,i,a,u)}}function kl(e){return function(){return e}}function EM(e,t){return function(n){return e+n*t}}function CM(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function wM(e){return(e=+e)==1?mm:function(t,n){return n-t?CM(t,n,e):kl(isNaN(t)?n:t)}}function mm(e,t){var n=t-e;return n?EM(e,n):kl(isNaN(e)?t:e)}const Nv=function e(t){var n=wM(t);function r(i,a){var o=n((i=to(i)).r,(a=to(a)).r),u=n(i.g,a.g),s=n(i.b,a.b),l=mm(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=u(c),i.b=s(c),i.opacity=l(c),i+""}}return r.gamma=e,r}(1);function TM(e){return function(t){var n=t.length,r=new Array(n),i=new Array(n),a=new Array(n),o,u;for(o=0;o<n;++o)u=to(t[o]),r[o]=u.r||0,i[o]=u.g||0,a[o]=u.b||0;return r=e(r),i=e(i),a=e(a),u.opacity=1,function(s){return u.r=r(s),u.g=i(s),u.b=a(s),u+""}}}var MM=TM(AM);function kM(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function IM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function LM(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=Il(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(u){for(o=0;o<r;++o)a[o]=i[o](u);return a}}function RM(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function so(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function PM(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Il(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var Us=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Vu=new RegExp(Us.source,"g");function OM(e){return function(){return e}}function FM(e){return function(t){return e(t)+""}}function DM(e,t){var n=Us.lastIndex=Vu.lastIndex=0,r,i,a,o=-1,u=[],s=[];for(e=e+"",t=t+"";(r=Us.exec(e))&&(i=Vu.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),u[o]?u[o]+=a:u[++o]=a),(r=r[0])===(i=i[0])?u[o]?u[o]+=i:u[++o]=i:(u[++o]=null,s.push({i:o,x:so(r,i)})),n=Vu.lastIndex;return n<t.length&&(a=t.slice(n),u[o]?u[o]+=a:u[++o]=a),u.length<2?s[0]?FM(s[0].x):OM(t):(t=s.length,function(l){for(var c=0,f;c<t;++c)u[(f=s[c]).i]=f.x(l);return u.join("")})}function Il(e,t){var n=typeof t,r;return t==null||n==="boolean"?kl(t):(n==="number"?so:n==="string"?(r=qr(t))?(t=r,Nv):DM:t instanceof qr?Nv:t instanceof Date?RM:IM(t)?kM:Array.isArray(t)?LM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?PM:so)(e,t)}function NM(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ar(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function ym(e,t){switch(arguments.length){case 0:break;case 1:this.interpolator(e);break;default:this.interpolator(t).domain(e);break}return this}var nn="$";function lo(){}lo.prototype=co.prototype={constructor:lo,has:function(e){return nn+e in this},get:function(e){return this[nn+e]},set:function(e,t){return this[nn+e]=t,this},remove:function(e){var t=nn+e;return t in this&&delete this[t]},clear:function(){for(var e in this)e[0]===nn&&delete this[e]},keys:function(){var e=[];for(var t in this)t[0]===nn&&e.push(t.slice(1));return e},values:function(){var e=[];for(var t in this)t[0]===nn&&e.push(this[t]);return e},entries:function(){var e=[];for(var t in this)t[0]===nn&&e.push({key:t.slice(1),value:this[t]});return e},size:function(){var e=0;for(var t in this)t[0]===nn&&++e;return e},empty:function(){for(var e in this)if(e[0]===nn)return!1;return!0},each:function(e){for(var t in this)t[0]===nn&&e(this[t],t.slice(1),this)}};function co(e,t){var n=new lo;if(e instanceof lo)e.each(function(u,s){n.set(s,u)});else if(Array.isArray(e)){var r=-1,i=e.length,a;if(t==null)for(;++r<i;)n.set(r,e[r]);else for(;++r<i;)n.set(t(a=e[r],r,e),a)}else if(e)for(var o in e)n.set(o,e[o]);return n}function Bv(){}var fr=co.prototype;Bv.prototype={constructor:Bv,has:fr.has,add:function(e){return e+="",this[nn+e]=e,this},remove:fr.remove,clear:fr.clear,values:fr.keys,size:fr.size,empty:fr.empty,each:fr.each};var _m=Array.prototype,xm=_m.map,_r=_m.slice,Uv={name:"implicit"};function fo(){var e=co(),t=[],n=[],r=Uv;function i(a){var o=a+"",u=e.get(o);if(!u){if(r!==Uv)return r;e.set(o,u=t.push(a))}return n[(u-1)%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=co();for(var o=-1,u=a.length,s,l;++o<u;)e.has(l=(s=a[o])+"")||e.set(l,t.push(s));return i},i.range=function(a){return arguments.length?(n=_r.call(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return fo(t,n).unknown(r)},ar.apply(i,arguments),i}function BM(e){return function(){return e}}function UM(e){return+e}var zv=[0,1];function Dt(e){return e}function zs(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:BM(isNaN(t)?NaN:.5)}function $v(e){var t=e[0],n=e[e.length-1],r;return t>n&&(r=t,t=n,n=r),function(i){return Math.max(t,Math.min(n,i))}}function zM(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=zs(i,r),a=n(o,a)):(r=zs(r,i),a=n(a,o)),function(u){return a(r(u))}}function $M(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=zs(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(u){var s=jo(e,u,1,r)-1;return a[s](i[s](u))}}function Ho(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Ll(){var e=zv,t=zv,n=Il,r,i,a,o=Dt,u,s,l;function c(){return u=Math.min(e.length,t.length)>2?$M:zM,s=l=null,f}function f(h){return isNaN(h=+h)?a:(s||(s=u(e.map(r),t,n)))(r(o(h)))}return f.invert=function(h){return o(i((l||(l=u(t,e.map(r),so)))(h)))},f.domain=function(h){return arguments.length?(e=xm.call(h,UM),o===Dt||(o=$v(e)),c()):e.slice()},f.range=function(h){return arguments.length?(t=_r.call(h),c()):t.slice()},f.rangeRound=function(h){return t=_r.call(h),n=NM,c()},f.clamp=function(h){return arguments.length?(o=h?$v(e):Dt,f):o!==Dt},f.interpolate=function(h){return arguments.length?(n=h,c()):n},f.unknown=function(h){return arguments.length?(a=h,f):a},function(h,d){return r=h,i=d,c()}}function bm(e,t){return Ll()(e,t)}function VM(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ho(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Jr(e){return e=ho(Math.abs(e)),e?e[1]:NaN}function jM(e,t){return function(n,r){for(var i=n.length,a=[],o=0,u=e[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),a.push(n.substring(i-=u,i+u)),!((s+=u+1)>r));)u=e[o=(o+1)%e.length];return a.reverse().join(t)}}function HM(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var GM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function vo(e){if(!(t=GM.exec(e)))throw new Error("invalid format: "+e);var t;return new Rl({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}vo.prototype=Rl.prototype;function Rl(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Rl.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function WM(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var Sm;function YM(e,t){var n=ho(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(Sm=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+ho(e,Math.max(0,t+a-1))[0]}function Vv(e,t){var n=ho(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const jv={"%":function(e,t){return(e*100).toFixed(t)},b:function(e){return Math.round(e).toString(2)},c:function(e){return e+""},d:VM,e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},g:function(e,t){return e.toPrecision(t)},o:function(e){return Math.round(e).toString(8)},p:function(e,t){return Vv(e*100,t)},r:Vv,s:YM,X:function(e){return Math.round(e).toString(16).toUpperCase()},x:function(e){return Math.round(e).toString(16)}};function Hv(e){return e}var Gv=Array.prototype.map,Wv=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function XM(e){var t=e.grouping===void 0||e.thousands===void 0?Hv:jM(Gv.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?Hv:HM(Gv.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"-":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function l(f){f=vo(f);var h=f.fill,d=f.align,v=f.sign,p=f.symbol,g=f.zero,m=f.width,_=f.comma,y=f.precision,x=f.trim,b=f.type;b==="n"?(_=!0,b="g"):jv[b]||(y===void 0&&(y=12),x=!0,b="g"),(g||h==="0"&&d==="=")&&(g=!0,h="0",d="=");var M=p==="$"?n:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",C=p==="$"?r:/[%p]/.test(b)?o:"",L=jv[b],N=/[defgprs%]/.test(b);y=y===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function I(T){var k=M,O=C,z,ne,de;if(b==="c")O=L(T)+O,T="";else{T=+T;var pe=T<0||1/T<0;if(T=isNaN(T)?s:L(Math.abs(T),y),x&&(T=WM(T)),pe&&+T==0&&v!=="+"&&(pe=!1),k=(pe?v==="("?v:u:v==="-"||v==="("?"":v)+k,O=(b==="s"?Wv[8+Sm/3]:"")+O+(pe&&v==="("?")":""),N){for(z=-1,ne=T.length;++z<ne;)if(de=T.charCodeAt(z),48>de||de>57){O=(de===46?i+T.slice(z+1):T.slice(z))+O,T=T.slice(0,z);break}}}_&&!g&&(T=t(T,1/0));var ye=k.length+T.length+O.length,W=ye<m?new Array(m-ye+1).join(h):"";switch(_&&g&&(T=t(W+T,W.length?m-O.length:1/0),W=""),d){case"<":T=k+T+O+W;break;case"=":T=k+W+T+O;break;case"^":T=W.slice(0,ye=W.length>>1)+k+T+O+W.slice(ye);break;default:T=W+k+T+O;break}return a(T)}return I.toString=function(){return f+""},I}function c(f,h){var d=l((f=vo(f),f.type="f",f)),v=Math.max(-8,Math.min(8,Math.floor(Jr(h)/3)))*3,p=Math.pow(10,-v),g=Wv[8+v/3];return function(m){return d(p*m)+g}}return{format:l,formatPrefix:c}}var $a,Pl,Am;ZM({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function ZM(e){return $a=XM(e),Pl=$a.format,Am=$a.formatPrefix,$a}function qM(e){return Math.max(0,-Jr(Math.abs(e)))}function QM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Jr(t)/3)))*3-Jr(Math.abs(e)))}function JM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Jr(t)-Jr(e))+1}function KM(e,t,n,r){var i=Bs(e,t,n),a;switch(r=vo(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=QM(i,o))&&(r.precision=a),Am(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=JM(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=qM(i))&&(r.precision=a-(r.type==="%")*2);break}}return Pl(r)}function ma(e){var t=e.domain;return e.ticks=function(n){var r=t();return gm(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return KM(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,o=r[i],u=r[a],s;return u<o&&(s=o,o=u,u=s,s=i,i=a,a=s),s=Za(o,u,n),s>0?(o=Math.floor(o/s)*s,u=Math.ceil(u/s)*s,s=Za(o,u,n)):s<0&&(o=Math.ceil(o*s)/s,u=Math.floor(u*s)/s,s=Za(o,u,n)),s>0?(r[i]=Math.floor(o/s)*s,r[a]=Math.ceil(u/s)*s,t(r)):s<0&&(r[i]=Math.ceil(o*s)/s,r[a]=Math.floor(u*s)/s,t(r)),e},e}function Em(){var e=bm(Dt,Dt);return e.copy=function(){return Ho(e,Em())},ar.apply(e,arguments),ma(e)}function Cm(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}function Yv(e){return Math.log(e)}function Xv(e){return Math.exp(e)}function e5(e){return-Math.log(-e)}function t5(e){return-Math.exp(-e)}function n5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function r5(e){return e===10?n5:e===Math.E?Math.exp:function(t){return Math.pow(e,t)}}function i5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),function(t){return Math.log(t)/e})}function Zv(e){return function(t){return-e(-t)}}function a5(e){var t=e(Yv,Xv),n=t.domain,r=10,i,a;function o(){return i=i5(r),a=r5(r),n()[0]<0?(i=Zv(i),a=Zv(a),e(e5,t5)):e(Yv,Xv),t}return t.base=function(u){return arguments.length?(r=+u,o()):r},t.domain=function(u){return arguments.length?(n(u),o()):n()},t.ticks=function(u){var s=n(),l=s[0],c=s[s.length-1],f;(f=c<l)&&(h=l,l=c,c=h);var h=i(l),d=i(c),v,p,g,m=u==null?10:+u,_=[];if(!(r%1)&&d-h<m){if(h=Math.round(h)-1,d=Math.round(d)+1,l>0){for(;h<d;++h)for(p=1,v=a(h);p<r;++p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else for(;h<d;++h)for(p=r-1,v=a(h);p>=1;--p)if(g=v*p,!(g<l)){if(g>c)break;_.push(g)}}else _=gm(h,d,Math.min(d-h,m)).map(a);return f?_.reverse():_},t.tickFormat=function(u,s){if(s==null&&(s=r===10?".0e":","),typeof s!="function"&&(s=Pl(s)),u===1/0)return s;u==null&&(u=10);var l=Math.max(1,r*u/t.ticks().length);return function(c){var f=c/a(Math.round(i(c)));return f*r<r-.5&&(f*=r),f<=l?s(c):""}},t.nice=function(){return n(Cm(n(),{floor:function(u){return a(Math.floor(i(u)))},ceil:function(u){return a(Math.ceil(i(u)))}}))},t}function wm(){var e=a5(Ll()).domain([1,10]);return e.copy=function(){return Ho(e,wm()).base(e.base())},ar.apply(e,arguments),e}function qv(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function o5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function u5(e){return e<0?-e*e:e*e}function s5(e){var t=e(Dt,Dt),n=1;function r(){return n===1?e(Dt,Dt):n===.5?e(o5,u5):e(qv(n),qv(1/n))}return t.exponent=function(i){return arguments.length?(n=+i,r()):n},ma(t)}function Tm(){var e=s5(Ll());return e.copy=function(){return Ho(e,Tm()).exponent(e.exponent())},ar.apply(e,arguments),e}function Mm(){var e=[],t=[],n=[],r;function i(){var o=0,u=Math.max(1,t.length);for(n=new Array(u-1);++o<u;)n[o-1]=bM(e,o/u);return a}function a(o){return isNaN(o=+o)?r:t[jo(n,o)]}return a.invertExtent=function(o){var u=t.indexOf(o);return u<0?[NaN,NaN]:[u>0?n[u-1]:e[0],u<n.length?n[u]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(var u=0,s=o.length,l;u<s;++u)l=o[u],l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ml),i()},a.range=function(o){return arguments.length?(t=_r.call(o),i()):t.slice()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.quantiles=function(){return n.slice()},a.copy=function(){return Mm().domain(e).range(t).unknown(r)},ar.apply(a,arguments)}function km(){var e=0,t=1,n=1,r=[.5],i=[0,1],a;function o(s){return s<=s?i[jo(r,s,0,n)]:a}function u(){var s=-1;for(r=new Array(n);++s<n;)r[s]=((s+1)*t-(s-n)*e)/(n+1);return o}return o.domain=function(s){return arguments.length?(e=+s[0],t=+s[1],u()):[e,t]},o.range=function(s){return arguments.length?(n=(i=_r.call(s)).length-1,u()):i.slice()},o.invertExtent=function(s){var l=i.indexOf(s);return l<0?[NaN,NaN]:l<1?[e,r[0]]:l>=n?[r[n-1],t]:[r[l-1],r[l]]},o.unknown=function(s){return arguments.length&&(a=s),o},o.thresholds=function(){return r.slice()},o.copy=function(){return km().domain([e,t]).range(i).unknown(a)},ar.apply(ma(o),arguments)}function Im(){var e=[.5],t=[0,1],n,r=1;function i(a){return a<=a?t[jo(e,a,0,r)]:n}return i.domain=function(a){return arguments.length?(e=_r.call(a),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=_r.call(a),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var o=t.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return Im().domain(e).range(t).unknown(n)},ar.apply(i,arguments)}var ju=new Date,Hu=new Date;function $t(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=function(a){return e(a=new Date(+a)),a},i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(a){var o=i(a),u=i.ceil(a);return a-o<u-a?o:u},i.offset=function(a,o){return t(a=new Date(+a),o==null?1:Math.floor(o)),a},i.range=function(a,o,u){var s=[],l;if(a=i.ceil(a),u=u==null?1:Math.floor(u),!(a<o)||!(u>0))return s;do s.push(l=new Date(+a)),t(a,u),e(a);while(l<a&&a<o);return s},i.filter=function(a){return $t(function(o){if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},function(o,u){if(o>=o)if(u<0)for(;++u<=0;)for(;t(o,-1),!a(o););else for(;--u>=0;)for(;t(o,1),!a(o););})},n&&(i.count=function(a,o){return ju.setTime(+a),Hu.setTime(+o),e(ju),e(Hu),Math.floor(n(ju,Hu))},i.every=function(a){return a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?function(o){return r(o)%a===0}:function(o){return i.count(0,o)%a===0}):i}),i}var po=$t(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});po.every=function(e){return e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?$t(function(t){t.setTime(Math.floor(t/e)*e)},function(t,n){t.setTime(+t+n*e)},function(t,n){return(n-t)/e}):po};const l5=po;po.range;var go=1e3,ra=6e4,Qv=36e5,Lm=864e5,Rm=6048e5,Pm=$t(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*go)},function(e,t){return(t-e)/go},function(e){return e.getUTCSeconds()});const c5=Pm;Pm.range;var Om=$t(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*go)},function(e,t){e.setTime(+e+t*ra)},function(e,t){return(t-e)/ra},function(e){return e.getMinutes()});const f5=Om;Om.range;var Fm=$t(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*go-e.getMinutes()*ra)},function(e,t){e.setTime(+e+t*Qv)},function(e,t){return(t-e)/Qv},function(e){return e.getHours()});const h5=Fm;Fm.range;var Dm=$t(function(e){e.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*ra)/Lm},function(e){return e.getDate()-1});const Ol=Dm;Dm.range;function Sr(e){return $t(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n*7)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ra)/Rm})}var Fl=Sr(0),mo=Sr(1),d5=Sr(2),v5=Sr(3),Kr=Sr(4),p5=Sr(5),g5=Sr(6);Fl.range;mo.range;d5.range;v5.range;Kr.range;p5.range;g5.range;var Nm=$t(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});const m5=Nm;Nm.range;var Dl=$t(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});Dl.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:$t(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n*e)})};const ei=Dl;Dl.range;var Nl=$t(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/Lm},function(e){return e.getUTCDate()-1});Nl.range;function Ar(e){return $t(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n*7)},function(t,n){return(n-t)/Rm})}var Bm=Ar(0),yo=Ar(1),y5=Ar(2),_5=Ar(3),ti=Ar(4),x5=Ar(5),b5=Ar(6);Bm.range;yo.range;y5.range;_5.range;ti.range;x5.range;b5.range;var xr=$t(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});xr.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:$t(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})};xr.range;function Gu(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Wu(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Ci(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function S5(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,u=e.months,s=e.shortMonths,l=wi(i),c=Ti(i),f=wi(a),h=Ti(a),d=wi(o),v=Ti(o),p=wi(u),g=Ti(u),m=wi(s),_=Ti(s),y={a:pe,A:ye,b:W,B:G,c:null,d:rp,e:rp,f:G5,g:t7,G:r7,H:V5,I:j5,j:H5,L:Um,m:W5,M:Y5,p:J,q:j,Q:op,s:up,S:X5,u:Z5,U:q5,V:Q5,w:J5,W:K5,x:null,X:null,y:e7,Y:n7,Z:i7,"%":ap},x={a:K,A:X,b:te,B:_e,c:null,d:ip,e:ip,f:s7,g:y7,G:x7,H:a7,I:o7,j:u7,L:$m,m:l7,M:c7,p:ge,q:He,Q:op,s:up,S:f7,u:h7,U:d7,V:v7,w:p7,W:g7,x:null,X:null,y:m7,Y:_7,Z:b7,"%":ap},b={a:I,A:T,b:k,B:O,c:z,d:tp,e:tp,f:B5,g:ep,G:Kv,H:np,I:np,j:O5,L:N5,m:P5,M:F5,p:N,q:R5,Q:z5,s:$5,S:D5,u:T5,U:M5,V:k5,w:w5,W:I5,x:ne,X:de,y:ep,Y:Kv,Z:L5,"%":U5};y.x=M(n,y),y.X=M(r,y),y.c=M(t,y),x.x=M(n,x),x.X=M(r,x),x.c=M(t,x);function M(H,fe){return function(Ae){var ie=[],Ye=-1,De=0,qe=H.length,Be,Pe,ut;for(Ae instanceof Date||(Ae=new Date(+Ae));++Ye<qe;)H.charCodeAt(Ye)===37&&(ie.push(H.slice(De,Ye)),(Pe=Jv[Be=H.charAt(++Ye)])!=null?Be=H.charAt(++Ye):Pe=Be==="e"?" ":"0",(ut=fe[Be])&&(Be=ut(Ae,Pe)),ie.push(Be),De=Ye+1);return ie.push(H.slice(De,Ye)),ie.join("")}}function C(H,fe){return function(Ae){var ie=Ci(1900,void 0,1),Ye=L(ie,H,Ae+="",0),De,qe;if(Ye!=Ae.length)return null;if("Q"in ie)return new Date(ie.Q);if("s"in ie)return new Date(ie.s*1e3+("L"in ie?ie.L:0));if(fe&&!("Z"in ie)&&(ie.Z=0),"p"in ie&&(ie.H=ie.H%12+ie.p*12),ie.m===void 0&&(ie.m="q"in ie?ie.q:0),"V"in ie){if(ie.V<1||ie.V>53)return null;"w"in ie||(ie.w=1),"Z"in ie?(De=Wu(Ci(ie.y,0,1)),qe=De.getUTCDay(),De=qe>4||qe===0?yo.ceil(De):yo(De),De=Nl.offset(De,(ie.V-1)*7),ie.y=De.getUTCFullYear(),ie.m=De.getUTCMonth(),ie.d=De.getUTCDate()+(ie.w+6)%7):(De=Gu(Ci(ie.y,0,1)),qe=De.getDay(),De=qe>4||qe===0?mo.ceil(De):mo(De),De=Ol.offset(De,(ie.V-1)*7),ie.y=De.getFullYear(),ie.m=De.getMonth(),ie.d=De.getDate()+(ie.w+6)%7)}else("W"in ie||"U"in ie)&&("w"in ie||(ie.w="u"in ie?ie.u%7:"W"in ie?1:0),qe="Z"in ie?Wu(Ci(ie.y,0,1)).getUTCDay():Gu(Ci(ie.y,0,1)).getDay(),ie.m=0,ie.d="W"in ie?(ie.w+6)%7+ie.W*7-(qe+5)%7:ie.w+ie.U*7-(qe+6)%7);return"Z"in ie?(ie.H+=ie.Z/100|0,ie.M+=ie.Z%100,Wu(ie)):Gu(ie)}}function L(H,fe,Ae,ie){for(var Ye=0,De=fe.length,qe=Ae.length,Be,Pe;Ye<De;){if(ie>=qe)return-1;if(Be=fe.charCodeAt(Ye++),Be===37){if(Be=fe.charAt(Ye++),Pe=b[Be in Jv?fe.charAt(Ye++):Be],!Pe||(ie=Pe(H,Ae,ie))<0)return-1}else if(Be!=Ae.charCodeAt(ie++))return-1}return ie}function N(H,fe,Ae){var ie=l.exec(fe.slice(Ae));return ie?(H.p=c[ie[0].toLowerCase()],Ae+ie[0].length):-1}function I(H,fe,Ae){var ie=d.exec(fe.slice(Ae));return ie?(H.w=v[ie[0].toLowerCase()],Ae+ie[0].length):-1}function T(H,fe,Ae){var ie=f.exec(fe.slice(Ae));return ie?(H.w=h[ie[0].toLowerCase()],Ae+ie[0].length):-1}function k(H,fe,Ae){var ie=m.exec(fe.slice(Ae));return ie?(H.m=_[ie[0].toLowerCase()],Ae+ie[0].length):-1}function O(H,fe,Ae){var ie=p.exec(fe.slice(Ae));return ie?(H.m=g[ie[0].toLowerCase()],Ae+ie[0].length):-1}function z(H,fe,Ae){return L(H,t,fe,Ae)}function ne(H,fe,Ae){return L(H,n,fe,Ae)}function de(H,fe,Ae){return L(H,r,fe,Ae)}function pe(H){return o[H.getDay()]}function ye(H){return a[H.getDay()]}function W(H){return s[H.getMonth()]}function G(H){return u[H.getMonth()]}function J(H){return i[+(H.getHours()>=12)]}function j(H){return 1+~~(H.getMonth()/3)}function K(H){return o[H.getUTCDay()]}function X(H){return a[H.getUTCDay()]}function te(H){return s[H.getUTCMonth()]}function _e(H){return u[H.getUTCMonth()]}function ge(H){return i[+(H.getUTCHours()>=12)]}function He(H){return 1+~~(H.getUTCMonth()/3)}return{format:function(H){var fe=M(H+="",y);return fe.toString=function(){return H},fe},parse:function(H){var fe=C(H+="",!1);return fe.toString=function(){return H},fe},utcFormat:function(H){var fe=M(H+="",x);return fe.toString=function(){return H},fe},utcParse:function(H){var fe=C(H+="",!0);return fe.toString=function(){return H},fe}}}var Jv={"-":"",_:" ",0:"0"},wt=/^\s*\d+/,A5=/^%/,E5=/[\\^$*+?|[\]().{}]/g;function Je(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function C5(e){return e.replace(E5,"\\$&")}function wi(e){return new RegExp("^(?:"+e.map(C5).join("|")+")","i")}function Ti(e){for(var t={},n=-1,r=e.length;++n<r;)t[e[n].toLowerCase()]=n;return t}function w5(e,t,n){var r=wt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function T5(e,t,n){var r=wt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function M5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function k5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function I5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Kv(e,t,n){var r=wt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function ep(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function L5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function R5(e,t,n){var r=wt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function P5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function tp(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function O5(e,t,n){var r=wt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function np(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function F5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function D5(e,t,n){var r=wt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function N5(e,t,n){var r=wt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function B5(e,t,n){var r=wt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function U5(e,t,n){var r=A5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function z5(e,t,n){var r=wt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function $5(e,t,n){var r=wt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function rp(e,t){return Je(e.getDate(),t,2)}function V5(e,t){return Je(e.getHours(),t,2)}function j5(e,t){return Je(e.getHours()%12||12,t,2)}function H5(e,t){return Je(1+Ol.count(ei(e),e),t,3)}function Um(e,t){return Je(e.getMilliseconds(),t,3)}function G5(e,t){return Um(e,t)+"000"}function W5(e,t){return Je(e.getMonth()+1,t,2)}function Y5(e,t){return Je(e.getMinutes(),t,2)}function X5(e,t){return Je(e.getSeconds(),t,2)}function Z5(e){var t=e.getDay();return t===0?7:t}function q5(e,t){return Je(Fl.count(ei(e)-1,e),t,2)}function zm(e){var t=e.getDay();return t>=4||t===0?Kr(e):Kr.ceil(e)}function Q5(e,t){return e=zm(e),Je(Kr.count(ei(e),e)+(ei(e).getDay()===4),t,2)}function J5(e){return e.getDay()}function K5(e,t){return Je(mo.count(ei(e)-1,e),t,2)}function e7(e,t){return Je(e.getFullYear()%100,t,2)}function t7(e,t){return e=zm(e),Je(e.getFullYear()%100,t,2)}function n7(e,t){return Je(e.getFullYear()%1e4,t,4)}function r7(e,t){var n=e.getDay();return e=n>=4||n===0?Kr(e):Kr.ceil(e),Je(e.getFullYear()%1e4,t,4)}function i7(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Je(t/60|0,"0",2)+Je(t%60,"0",2)}function ip(e,t){return Je(e.getUTCDate(),t,2)}function a7(e,t){return Je(e.getUTCHours(),t,2)}function o7(e,t){return Je(e.getUTCHours()%12||12,t,2)}function u7(e,t){return Je(1+Nl.count(xr(e),e),t,3)}function $m(e,t){return Je(e.getUTCMilliseconds(),t,3)}function s7(e,t){return $m(e,t)+"000"}function l7(e,t){return Je(e.getUTCMonth()+1,t,2)}function c7(e,t){return Je(e.getUTCMinutes(),t,2)}function f7(e,t){return Je(e.getUTCSeconds(),t,2)}function h7(e){var t=e.getUTCDay();return t===0?7:t}function d7(e,t){return Je(Bm.count(xr(e)-1,e),t,2)}function Vm(e){var t=e.getUTCDay();return t>=4||t===0?ti(e):ti.ceil(e)}function v7(e,t){return e=Vm(e),Je(ti.count(xr(e),e)+(xr(e).getUTCDay()===4),t,2)}function p7(e){return e.getUTCDay()}function g7(e,t){return Je(yo.count(xr(e)-1,e),t,2)}function m7(e,t){return Je(e.getUTCFullYear()%100,t,2)}function y7(e,t){return e=Vm(e),Je(e.getUTCFullYear()%100,t,2)}function _7(e,t){return Je(e.getUTCFullYear()%1e4,t,4)}function x7(e,t){var n=e.getUTCDay();return e=n>=4||n===0?ti(e):ti.ceil(e),Je(e.getUTCFullYear()%1e4,t,4)}function b7(){return"+0000"}function ap(){return"%"}function op(e){return+e}function up(e){return Math.floor(+e/1e3)}var Fr,jm;S7({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function S7(e){return Fr=S5(e),jm=Fr.format,Fr.parse,Fr.utcFormat,Fr.utcParse,Fr}var Di=1e3,Ni=Di*60,Bi=Ni*60,ia=Bi*24,A7=ia*7,sp=ia*30,Yu=ia*365;function E7(e){return new Date(e)}function C7(e){return e instanceof Date?+e:+new Date(+e)}function Hm(e,t,n,r,i,a,o,u,s){var l=bm(Dt,Dt),c=l.invert,f=l.domain,h=s(".%L"),d=s(":%S"),v=s("%I:%M"),p=s("%I %p"),g=s("%a %d"),m=s("%b %d"),_=s("%B"),y=s("%Y"),x=[[o,1,Di],[o,5,5*Di],[o,15,15*Di],[o,30,30*Di],[a,1,Ni],[a,5,5*Ni],[a,15,15*Ni],[a,30,30*Ni],[i,1,Bi],[i,3,3*Bi],[i,6,6*Bi],[i,12,12*Bi],[r,1,ia],[r,2,2*ia],[n,1,A7],[t,1,sp],[t,3,3*sp],[e,1,Yu]];function b(C){return(o(C)<C?h:a(C)<C?d:i(C)<C?v:r(C)<C?p:t(C)<C?n(C)<C?g:m:e(C)<C?_:y)(C)}function M(C,L,N,I){if(C==null&&(C=10),typeof C=="number"){var T=Math.abs(N-L)/C,k=pm(function(O){return O[2]}).right(x,T);k===x.length?(I=Bs(L/Yu,N/Yu,C),C=e):k?(k=x[T/x[k-1][2]<x[k][2]/T?k-1:k],I=k[1],C=k[0]):(I=Math.max(Bs(L,N,C),1),C=u)}return I==null?C:C.every(I)}return l.invert=function(C){return new Date(c(C))},l.domain=function(C){return arguments.length?f(xm.call(C,C7)):f().map(E7)},l.ticks=function(C,L){var N=f(),I=N[0],T=N[N.length-1],k=T<I,O;return k&&(O=I,I=T,T=O),O=M(C,I,T,L),O=O?O.range(I,T+1):[],k?O.reverse():O},l.tickFormat=function(C,L){return L==null?b:s(L)},l.nice=function(C,L){var N=f();return(C=M(C,N[0],N[N.length-1],L))?f(Cm(N,C)):l},l.copy=function(){return Ho(l,Hm(e,t,n,r,i,a,o,u,s))},l}function w7(){return ar.apply(Hm(ei,m5,Fl,Ol,h5,f5,c5,l5,jm).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function T7(){var e=0,t=1,n,r,i,a,o=Dt,u=!1,s;function l(c){return isNaN(c=+c)?s:o(i===0?.5:(c=(a(c)-n)*i,u?Math.max(0,Math.min(1,c)):c))}return l.domain=function(c){return arguments.length?(n=a(e=+c[0]),r=a(t=+c[1]),i=n===r?0:1/(r-n),l):[e,t]},l.clamp=function(c){return arguments.length?(u=!!c,l):u},l.interpolator=function(c){return arguments.length?(o=c,l):o},l.unknown=function(c){return arguments.length?(s=c,l):s},function(c){return a=c,n=c(e),r=c(t),i=n===r?0:1/(r-n),l}}function Gm(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Wm(){var e=ma(T7()(Dt));return e.copy=function(){return Gm(e,Wm())},ym.apply(e,arguments)}function M7(){var e=0,t=.5,n=1,r,i,a,o,u,s=Dt,l,c=!1,f;function h(d){return isNaN(d=+d)?f:(d=.5+((d=+l(d))-i)*(d<i?o:u),s(c?Math.max(0,Math.min(1,d)):d))}return h.domain=function(d){return arguments.length?(r=l(e=+d[0]),i=l(t=+d[1]),a=l(n=+d[2]),o=r===i?0:.5/(i-r),u=i===a?0:.5/(a-i),h):[e,t,n]},h.clamp=function(d){return arguments.length?(c=!!d,h):c},h.interpolator=function(d){return arguments.length?(s=d,h):s},h.unknown=function(d){return arguments.length?(f=d,h):f},function(d){return l=d,r=d(e),i=d(t),a=d(n),o=r===i?0:.5/(i-r),u=i===a?0:.5/(a-i),h}}function Ym(){var e=ma(M7()(Dt));return e.copy=function(){return Gm(e,Ym())},ym.apply(e,arguments)}function Xm(e){var t,n=[];function r(i){return i??t}return r.invert=r,r.domain=r.range=function(i){return i?(n=i,i):n},r.unknown=function(i){return i?(t=i,i):t},r.copy=function(){return Xm().unknown(t)},r}var Xt,lp,cp,Xu=nt.isNil,k7=nt.isString,I7=nt.uniq,L7=/^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,R7=(Xt={},S(Xt,et.LINEAR,Em),S(Xt,et.POWER,Tm),S(Xt,et.LOG,wm),S(Xt,et.IDENTITY,Xm),S(Xt,et.SEQUENTIAL,Wm),S(Xt,et.TIME,w7),S(Xt,et.QUANTILE,Mm),S(Xt,et.QUANTIZE,km),S(Xt,et.THRESHOLD,Im),S(Xt,et.CAT,fo),S(Xt,et.DIVERGING,Ym),Xt),P7=(lp=Ne(),lp(cp=function(){function e(){ce(this,e),S(this,"scaleOptions",{})}return le(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("FeatureScalePlugin",Q(w.mark(function o(){var u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(n.log(mt.ScaleInitStart,bt.INIT),i.scaleOptions=n.getScaleOptions(),s=a.getLayerStyleAttributes(),l=(u=n.getSource())===null||u===void 0?void 0:u.data.dataArray,!(Array.isArray(l)&&l.length===0)){f.next=8;break}return f.abrupt("return");case 8:i.caculateScalesForAttributes(s||[],l);case 9:n.log(mt.ScaleInitEnd,bt.INIT);case 10:case"end":return f.stop()}},o)}))),n.hooks.beforeRenderData.tapPromise("FeatureScalePlugin",function(){var o=Q(w.mark(function u(s){var l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s){h.next=2;break}return h.abrupt("return",s);case 2:if(n.log(mt.ScaleInitStart,bt.UPDATE),i.scaleOptions=n.getScaleOptions(),l=a.getLayerStyleAttributes(),c=n.getSource().data.dataArray,!(Array.isArray(c)&&c.length===0)){h.next=8;break}return h.abrupt("return",!0);case 8:return i.caculateScalesForAttributes(l||[],c),n.log(mt.ScaleInitEnd,bt.UPDATE),n.layerModelNeedUpdate=!0,h.abrupt("return",!0);case 12:case"end":return h.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()),n.hooks.beforeRender.tap("FeatureScalePlugin",function(){if(!n.layerModelNeedUpdate){i.scaleOptions=n.getScaleOptions();var o=a.getLayerStyleAttributes(),u=n.getSource().data.dataArray;if(!(Array.isArray(u)&&u.length===0)&&o){var s=o.filter(function(l){return l.needRescale});s.length&&i.caculateScalesForAttributes(s,u)}}})}},{key:"isNumber",value:function(n){return!isNaN(parseFloat(n))&&isFinite(n)}},{key:"caculateScalesForAttributes",value:function(n,r){var i=this;n.forEach(function(a){if(a.scale){var o=a.scale,u=a.scale.field;o.names=i.parseFields(Xu(u)?[]:u);var s=[];o.names.forEach(function(l){var c;s.push(i.createScale(l,a.name,(c=a.scale)===null||c===void 0?void 0:c.values,r))}),s.some(function(l){return l.type===Rr.VARIABLE})?(o.type=Rr.VARIABLE,s.forEach(function(l){if(!o.callback&&o.values!=="text"){var c;switch((c=l.option)===null||c===void 0?void 0:c.type){case et.LOG:case et.LINEAR:case et.POWER:if(o.values&&o.values.length>2){var f=l.scale.ticks(o.values.length);l.scale.domain(f)}o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case et.QUANTILE:case et.QUANTIZE:case et.THRESHOLD:l.scale.range(o.values);break;case et.IDENTITY:break;case et.CAT:o.values?l.scale.range(o.values):l.scale.range(l.option.domain);break;case et.DIVERGING:case et.SEQUENTIAL:l.scale.interpolator(MM(o.values));break}}if(o.values==="text"){var h;l.scale.range((h=l.option)===null||h===void 0?void 0:h.domain)}})):(o.type=Rr.CONSTANT,o.defaultValues=s.map(function(l,c){return l.scale(o.names[c])})),o.scalers=s.map(function(l){return{field:l.field,func:l.scale,option:l.option}}),a.needRescale=!1}})}},{key:"parseFields",value:function(n){return Array.isArray(n)?n:k7(n)?n.split("*"):[n]}},{key:"createScale",value:function(n,r,i,a){var o,u,s=this.scaleOptions[r]&&((o=this.scaleOptions[r])===null||o===void 0?void 0:o.field)===n?this.scaleOptions[r]:this.scaleOptions[n],l={field:n,scale:void 0,type:Rr.VARIABLE,option:s};if(!a||!a.length)return s&&s.type?l.scale=this.createDefaultScale(s):(l.scale=fo([n]),l.type=Rr.CONSTANT),l;var c=(u=a.find(function(d){return!Xu(d[n])}))===null||u===void 0?void 0:u[n];if(this.isNumber(n)||Xu(c)&&!s)l.scale=fo([n]),l.type=Rr.CONSTANT;else{var f=s&&s.type||this.getDefaultType(c);i==="text"&&(f=et.CAT),i===void 0&&(f=et.IDENTITY);var h=this.createScaleConfig(f,n,s,a);l.scale=this.createDefaultScale(h),l.option=h}return l}},{key:"getDefaultType",value:function(n){var r=et.LINEAR;return typeof n=="string"&&(r=L7.test(n)?et.TIME:et.CAT),r}},{key:"createScaleConfig",value:function(n,r,i,a){var o={type:n},u=[];if(n===et.QUANTILE){var s=new Map;a==null||a.forEach(function(f){s.set(f._id,f[r])}),u=Array.from(s.values())}else u=(a==null?void 0:a.map(function(f){return f[r]}))||[];if(i!=null&&i.domain)o.domain=i==null?void 0:i.domain;else if(n===et.CAT||n===et.IDENTITY)o.domain=I7(u);else if(n===et.QUANTILE)o.domain=u;else if(n===et.DIVERGING){var l=Dv(u),c=(i==null?void 0:i.neutral)!==void 0?i==null?void 0:i.neutral:(l[0]+l[1])/2;o.domain=[l[0],c,l[1]]}else o.domain=Dv(u);return $($({},o),i)}},{key:"createDefaultScale",value:function(n){var r=n.type,i=n.domain,a=n.unknown,o=n.clamp,u=n.nice,s=R7[r]();return i&&s.domain&&s.domain(i),a&&s.unknown(a),o!==void 0&&s.clamp&&s.clamp(o),u!==void 0&&s.nice&&s.nice(u),s}}]),e}())||cp),fp,hp,O7=(fp=Ne(),fp(hp=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("LayerAnimateStylePlugin",function(){var r=n.animateStatus;r&&n.models.forEach(function(i){i.addUniforms($({},n.layerModel.getAnimateUniforms()))})})}}]),e}())||hp),dp,vp,F7=(dp=Ne(),dp(vp=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){n.hooks.afterInit.tap("LayerMaskPlugin",function(){var r=n.getLayerConfig(),i=r.maskLayers,a=r.enableMask;if(!n.tileLayer&&i&&i.length>0){var o;(o=n.masks).push.apply(o,re(i)),n.updateLayerConfig({mask:a})}})}}]),e}())||vp),D7=function(){function e(t){var n=t.rendererService,r=t.layerService,i=t.parent;ce(this,e),S(this,"tileResource",new Map),S(this,"layerTiles",[]),this.rendererService=n,this.layerService=r,this.parent=i}return le(e,[{key:"tiles",get:function(){return this.layerTiles}},{key:"hasTile",value:function(n){return this.layerTiles.some(function(r){return r.key===n})}},{key:"addTile",value:function(n){this.layerTiles.push(n)}},{key:"getTile",value:function(n){return this.layerTiles.find(function(r){return r.key===n})}},{key:"getVisibleTileBylngLat",value:function(n){return this.layerTiles.find(function(r){return r.isLoaded&&r.visible&&r.lnglatInBounds(n)})}},{key:"removeTile",value:function(n){var r=this.layerTiles.findIndex(function(a){return a.key===n}),i=this.layerTiles.splice(r,1);i[0]&&i[0].destroy()}},{key:"updateTileVisible",value:function(n){var r=this.getTile(n.key);if(n.isVisible)if(n.parent){var i=this.isChildrenLoaded(n.parent);r==null||r.updateVisible(i)}else r==null||r.updateVisible(!0);else if(n.parent){var a=this.isChildrenLoaded(n.parent);r==null||r.updateVisible(!a)}else r==null||r.updateVisible(!1)}},{key:"isParentLoaded",value:function(n){var r=n.parent;if(!r)return!0;var i=this.getTile(r==null?void 0:r.key);return!!(i!=null&&i.isLoaded)}},{key:"isChildrenLoaded",value:function(n){var r=this,i=n==null?void 0:n.children;return i.length===0?!0:i.every(function(a){var o=r.getTile(a==null?void 0:a.key);return o?(o==null?void 0:o.isLoaded)===!0:!0})}},{key:"render",value:function(){var t=Q(w.mark(function r(){var i=this,a,o;return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=this.getRenderLayers(),o=a.map(function(){var l=Q(w.mark(function c(f){return w.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,i.layerService.renderTileLayer(f);case 2:case"end":return d.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()),s.next=4,Promise.all(o);case 4:case"end":return s.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"getRenderLayers",value:function(){var n=this.layerTiles.filter(function(i){return i.visible&&i.isLoaded}),r=[];return n.map(function(i){return r.push.apply(r,re(i.getLayers()))}),r}},{key:"getLayers",value:function(){var n=this.layerTiles.filter(function(i){return i.isLoaded}),r=[];return n.map(function(i){return r.push.apply(r,re(i.getLayers()))}),r}},{key:"getTiles",value:function(){return this.layerTiles}},{key:"destroy",value:function(){this.layerTiles.forEach(function(n){return n.destroy()}),this.tileResource.clear()}}]),e}();/**
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
***************************************************************************** */function N7(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1],a=l;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(l);break}a[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var rr=function(){function e(t,n){this.next=null,this.key=t,this.data=n,this.left=null,this.right=null}return e}();function B7(e,t){return e>t?1:e<t?-1:0}function qn(e,t,n){for(var r=new rr(null,null),i=r,a=r;;){var o=n(e,t.key);if(o<0){if(t.left===null)break;if(n(e,t.left.key)<0){var u=t.left;if(t.left=u.right,u.right=t,t=u,t.left===null)break}a.left=t,a=t,t=t.left}else if(o>0){if(t.right===null)break;if(n(e,t.right.key)>0){var u=t.right;if(t.right=u.left,u.left=t,t=u,t.right===null)break}i.right=t,i=t,t=t.right}else break}return i.right=t.left,a.left=t.right,t.left=r.right,t.right=r.left,t}function Zu(e,t,n,r){var i=new rr(e,t);if(n===null)return i.left=i.right=null,i;n=qn(e,n,r);var a=r(e,n.key);return a<0?(i.left=n.left,i.right=n,n.left=null):a>=0&&(i.right=n.right,i.left=n,n.right=null),i}function pp(e,t,n){var r=null,i=null;if(t){t=qn(e,t,n);var a=n(t.key,e);a===0?(r=t.left,i=t.right):a<0?(i=t.right,t.right=null,r=t):(r=t.left,t.left=null,i=t)}return{left:r,right:i}}function U7(e,t,n){return t===null?e:(e===null||(t=qn(e.key,t,n),t.left=e),t)}function $s(e,t,n,r,i){if(e){r(""+t+(n?"└── ":"├── ")+i(e)+`
`);var a=t+(n?"    ":"│   ");e.left&&$s(e.left,a,!1,r,i),e.right&&$s(e.right,a,!0,r,i)}}var Bl=function(){function e(t){t===void 0&&(t=B7),this._root=null,this._size=0,this._comparator=t}return e.prototype.insert=function(t,n){return this._size++,this._root=Zu(t,n,this._root,this._comparator)},e.prototype.add=function(t,n){var r=new rr(t,n);this._root===null&&(r.left=r.right=null,this._size++,this._root=r);var i=this._comparator,a=qn(t,this._root,i),o=i(t,a.key);return o===0?this._root=a:(o<0?(r.left=a.left,r.right=a,a.left=null):o>0&&(r.right=a.right,r.left=a,a.right=null),this._size++,this._root=r),this._root},e.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},e.prototype._remove=function(t,n,r){var i;if(n===null)return null;n=qn(t,n,r);var a=r(t,n.key);return a===0?(n.left===null?i=n.right:(i=qn(t,n.left,r),i.right=n.right),this._size--,i):n},e.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=qn(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},e.prototype.findStatic=function(t){for(var n=this._root,r=this._comparator;n;){var i=r(t,n.key);if(i===0)return n;i<0?n=n.left:n=n.right}return null},e.prototype.find=function(t){return this._root&&(this._root=qn(t,this._root,this._comparator),this._comparator(t,this._root.key)!==0)?null:this._root},e.prototype.contains=function(t){for(var n=this._root,r=this._comparator;n;){var i=r(t,n.key);if(i===0)return!0;i<0?n=n.left:n=n.right}return!1},e.prototype.forEach=function(t,n){for(var r=this._root,i=[],a=!1;!a;)r!==null?(i.push(r),r=r.left):i.length!==0?(r=i.pop(),t.call(n,r),r=r.right):a=!0;return this},e.prototype.range=function(t,n,r,i){for(var a=[],o=this._comparator,u=this._root,s;a.length!==0||u;)if(u)a.push(u),u=u.left;else{if(u=a.pop(),s=o(u.key,n),s>0)break;if(o(u.key,t)>=0&&r.call(i,u))return this;u=u.right}return this},e.prototype.keys=function(){var t=[];return this.forEach(function(n){var r=n.key;return t.push(r)}),t},e.prototype.values=function(){var t=[];return this.forEach(function(n){var r=n.data;return t.push(r)}),t},e.prototype.min=function(){return this._root?this.minNode(this._root).key:null},e.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},e.prototype.minNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.left;)t=t.left;return t},e.prototype.maxNode=function(t){if(t===void 0&&(t=this._root),t)for(;t.right;)t=t.right;return t},e.prototype.at=function(t){for(var n=this._root,r=!1,i=0,a=[];!r;)if(n)a.push(n),n=n.left;else if(a.length>0){if(n=a.pop(),i===t)return n;i++,n=n.right}else r=!0;return null},e.prototype.next=function(t){var n=this._root,r=null;if(t.right){for(r=t.right;r.left;)r=r.left;return r}for(var i=this._comparator;n;){var a=i(t.key,n.key);if(a===0)break;a<0?(r=n,n=n.left):n=n.right}return r},e.prototype.prev=function(t){var n=this._root,r=null;if(t.left!==null){for(r=t.left;r.right;)r=r.right;return r}for(var i=this._comparator;n;){var a=i(t.key,n.key);if(a===0)break;a<0?n=n.left:(r=n,n=n.right)}return r},e.prototype.clear=function(){return this._root=null,this._size=0,this},e.prototype.toList=function(){return $7(this._root)},e.prototype.load=function(t,n,r){n===void 0&&(n=[]),r===void 0&&(r=!1);var i=t.length,a=this._comparator;if(r&&Hs(t,n,0,i-1,a),this._root===null)this._root=Vs(t,n,0,i),this._size=i;else{var o=V7(this.toList(),z7(t,n),a);i=this._size+i,this._root=js({head:o},0,i)}return this},e.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){t===void 0&&(t=function(r){return String(r.key)});var n=[];return $s(this._root,"",!0,function(r){return n.push(r)},t),n.join("")},e.prototype.update=function(t,n,r){var i=this._comparator,a=pp(t,this._root,i),o=a.left,u=a.right;i(t,n)<0?u=Zu(n,r,u,i):o=Zu(n,r,o,i),this._root=U7(o,u,i)},e.prototype.split=function(t){return pp(t,this._root,this._comparator)},e.prototype[Symbol.iterator]=function(){var t,n,r;return N7(this,function(i){switch(i.label){case 0:t=this._root,n=[],r=!1,i.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return i.sent(),t=t.right,[3,5];case 4:r=!0,i.label=5;case 5:return[3,1];case 6:return[2]}})},e}();function Vs(e,t,n,r){var i=r-n;if(i>0){var a=n+Math.floor(i/2),o=e[a],u=t[a],s=new rr(o,u);return s.left=Vs(e,t,n,a),s.right=Vs(e,t,a+1,r),s}return null}function z7(e,t){for(var n=new rr(null,null),r=n,i=0;i<e.length;i++)r=r.next=new rr(e[i],t[i]);return r.next=null,n.next}function $7(e){for(var t=e,n=[],r=!1,i=new rr(null,null),a=i;!r;)t?(n.push(t),t=t.left):n.length>0?(t=a=a.next=n.pop(),t=t.right):r=!0;return a.next=null,i.next}function js(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=js(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=js(e,i+1,n),o}return null}function V7(e,t,n){for(var r=new rr(null,null),i=r,a=e,o=t;a!==null&&o!==null;)n(a.key,o.key)<0?(i.next=a,a=a.next):(i.next=o,o=o.next),i=i.next;return a!==null?i.next=a:o!==null&&(i.next=o),r.next}function Hs(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,u=r+1;;){do o++;while(i(e[o],a)<0);do u--;while(i(e[u],a)>0);if(o>=u)break;var s=e[o];e[o]=e[u],e[u]=s,s=t[o],t[o]=t[u],t[u]=s}Hs(e,t,n,u,i),Hs(e,t,u+1,r,i)}}const On=11102230246251565e-32,Ft=134217729,j7=(3+8*On)*On;function qu(e,t,n,r,i){let a,o,u,s,l=t[0],c=r[0],f=0,h=0;c>l==c>-l?(a=l,l=t[++f]):(a=c,c=r[++h]);let d=0;if(f<e&&h<n)for(c>l==c>-l?(o=l+a,u=a-(o-l),l=t[++f]):(o=c+a,u=a-(o-c),c=r[++h]),a=o,u!==0&&(i[d++]=u);f<e&&h<n;)c>l==c>-l?(o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f]):(o=a+c,s=o-a,u=a-(o-s)+(c-s),c=r[++h]),a=o,u!==0&&(i[d++]=u);for(;f<e;)o=a+l,s=o-a,u=a-(o-s)+(l-s),l=t[++f],a=o,u!==0&&(i[d++]=u);for(;h<n;)o=a+c,s=o-a,u=a-(o-s)+(c-s),c=r[++h],a=o,u!==0&&(i[d++]=u);return(a!==0||d===0)&&(i[d++]=a),d}function H7(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function ya(e){return new Float64Array(e)}const G7=(3+16*On)*On,W7=(2+12*On)*On,Y7=(9+64*On)*On*On,Dr=ya(4),gp=ya(8),mp=ya(12),yp=ya(16),Ut=ya(4);function X7(e,t,n,r,i,a,o){let u,s,l,c,f,h,d,v,p,g,m,_,y,x,b,M,C,L;const N=e-i,I=n-i,T=t-a,k=r-a;x=N*k,h=Ft*N,d=h-(h-N),v=N-d,h=Ft*k,p=h-(h-k),g=k-p,b=v*g-(x-d*p-v*p-d*g),M=T*I,h=Ft*T,d=h-(h-T),v=T-d,h=Ft*I,p=h-(h-I),g=I-p,C=v*g-(M-d*p-v*p-d*g),m=b-C,f=b-m,Dr[0]=b-(m+f)+(f-C),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Dr[1]=y-(m+f)+(f-M),L=_+m,f=L-_,Dr[2]=_-(L-f)+(m-f),Dr[3]=L;let O=H7(4,Dr),z=W7*o;if(O>=z||-O>=z||(f=e-N,u=e-(N+f)+(f-i),f=n-I,l=n-(I+f)+(f-i),f=t-T,s=t-(T+f)+(f-a),f=r-k,c=r-(k+f)+(f-a),u===0&&s===0&&l===0&&c===0)||(z=Y7*o+j7*Math.abs(O),O+=N*c+k*u-(T*l+I*s),O>=z||-O>=z))return O;x=u*k,h=Ft*u,d=h-(h-u),v=u-d,h=Ft*k,p=h-(h-k),g=k-p,b=v*g-(x-d*p-v*p-d*g),M=s*I,h=Ft*s,d=h-(h-s),v=s-d,h=Ft*I,p=h-(h-I),g=I-p,C=v*g-(M-d*p-v*p-d*g),m=b-C,f=b-m,Ut[0]=b-(m+f)+(f-C),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ut[1]=y-(m+f)+(f-M),L=_+m,f=L-_,Ut[2]=_-(L-f)+(m-f),Ut[3]=L;const ne=qu(4,Dr,4,Ut,gp);x=N*c,h=Ft*N,d=h-(h-N),v=N-d,h=Ft*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),M=T*l,h=Ft*T,d=h-(h-T),v=T-d,h=Ft*l,p=h-(h-l),g=l-p,C=v*g-(M-d*p-v*p-d*g),m=b-C,f=b-m,Ut[0]=b-(m+f)+(f-C),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ut[1]=y-(m+f)+(f-M),L=_+m,f=L-_,Ut[2]=_-(L-f)+(m-f),Ut[3]=L;const de=qu(ne,gp,4,Ut,mp);x=u*c,h=Ft*u,d=h-(h-u),v=u-d,h=Ft*c,p=h-(h-c),g=c-p,b=v*g-(x-d*p-v*p-d*g),M=s*l,h=Ft*s,d=h-(h-s),v=s-d,h=Ft*l,p=h-(h-l),g=l-p,C=v*g-(M-d*p-v*p-d*g),m=b-C,f=b-m,Ut[0]=b-(m+f)+(f-C),_=x+m,f=_-x,y=x-(_-f)+(m-f),m=y-M,f=y-m,Ut[1]=y-(m+f)+(f-M),L=_+m,f=L-_,Ut[2]=_-(L-f)+(m-f),Ut[3]=L;const pe=qu(de,mp,4,Ut,yp);return yp[pe-1]}function Z7(e,t,n,r,i,a){const o=(t-a)*(n-i),u=(e-i)*(r-a),s=o-u,l=Math.abs(o+u);return Math.abs(s)>=G7*l?s:-X7(e,t,n,r,i,a,l)}var Zm={};const Mi=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,Gs=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;const n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}};let Qn=Number.EPSILON;Qn===void 0&&(Qn=Math.pow(2,-52));const q7=Qn*Qn,_p=(e,t)=>{if(-Qn<e&&e<Qn&&-Qn<t&&t<Qn)return 0;const n=e-t;return n*n<q7*e*t?0:e<t?-1:1};class Q7{constructor(){this.reset()}reset(){this.xRounder=new xp,this.yRounder=new xp}round(t,n){return{x:this.xRounder.round(t),y:this.yRounder.round(n)}}}class xp{constructor(){this.tree=new Bl,this.round(0)}round(t){const n=this.tree.add(t),r=this.tree.prev(n);if(r!==null&&_p(n.key,r.key)===0)return this.tree.remove(t),r.key;const i=this.tree.next(n);return i!==null&&_p(n.key,i.key)===0?(this.tree.remove(t),i.key):t}}const aa=new Q7,qa=(e,t)=>e.x*t.y-e.y*t.x,qm=(e,t)=>e.x*t.x+e.y*t.y,bp=(e,t,n)=>{const r=Z7(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:r<0?1:0},_o=e=>Math.sqrt(qm(e,e)),J7=(e,t,n)=>{const r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return qa(i,r)/_o(i)/_o(r)},K7=(e,t,n)=>{const r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return qm(i,r)/_o(i)/_o(r)},Sp=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},Ap=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},e6=(e,t,n,r)=>{if(t.x===0)return Ap(n,r,e.x);if(r.x===0)return Ap(e,t,n.x);if(t.y===0)return Sp(n,r,e.y);if(r.y===0)return Sp(e,t,n.y);const i=qa(t,r);if(i==0)return null;const a={x:n.x-e.x,y:n.y-e.y},o=qa(a,t)/i,u=qa(a,r)/i,s=e.x+u*t.x,l=n.x+o*r.x,c=e.y+u*t.y,f=n.y+o*r.y,h=(s+l)/2,d=(c+f)/2;return{x:h,y:d}};class an{static compare(t,n){const r=an.comparePoints(t.point,n.point);return r!==0?r:(t.point!==n.point&&t.link(n),t.isLeft!==n.isLeft?t.isLeft?1:-1:tr.compare(t.segment,n.segment))}static comparePoints(t,n){return t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0}constructor(t,n){t.events===void 0?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=n}link(t){if(t.point===this.point)throw new Error("Tried to link already linked events");const n=t.point.events;for(let r=0,i=n.length;r<i;r++){const a=n[r];this.point.events.push(a),a.point=this.point}this.checkForConsuming()}checkForConsuming(){const t=this.point.events.length;for(let n=0;n<t;n++){const r=this.point.events[n];if(r.segment.consumedBy===void 0)for(let i=n+1;i<t;i++){const a=this.point.events[i];a.consumedBy===void 0&&r.otherSE.point.events===a.otherSE.point.events&&r.segment.consume(a.segment)}}}getAvailableLinkedEvents(){const t=[];for(let n=0,r=this.point.events.length;n<r;n++){const i=this.point.events[n];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&t.push(i)}return t}getLeftmostComparator(t){const n=new Map,r=i=>{const a=i.otherSE;n.set(i,{sine:J7(this.point,t.point,a.point),cosine:K7(this.point,t.point,a.point)})};return(i,a)=>{n.has(i)||r(i),n.has(a)||r(a);const{sine:o,cosine:u}=n.get(i),{sine:s,cosine:l}=n.get(a);return o>=0&&s>=0?u<l?1:u>l?-1:0:o<0&&s<0?u<l?-1:u>l?1:0:s<o?-1:s>o?1:0}}}let t6=0;class tr{static compare(t,n){const r=t.leftSE.point.x,i=n.leftSE.point.x,a=t.rightSE.point.x,o=n.rightSE.point.x;if(o<r)return 1;if(a<i)return-1;const u=t.leftSE.point.y,s=n.leftSE.point.y,l=t.rightSE.point.y,c=n.rightSE.point.y;if(r<i){if(s<u&&s<l)return 1;if(s>u&&s>l)return-1;const f=t.comparePoint(n.leftSE.point);if(f<0)return 1;if(f>0)return-1;const h=n.comparePoint(t.rightSE.point);return h!==0?h:-1}if(r>i){if(u<s&&u<c)return-1;if(u>s&&u>c)return 1;const f=n.comparePoint(t.leftSE.point);if(f!==0)return f;const h=t.comparePoint(n.rightSE.point);return h<0?1:h>0?-1:1}if(u<s)return-1;if(u>s)return 1;if(a<o){const f=n.comparePoint(t.rightSE.point);if(f!==0)return f}if(a>o){const f=t.comparePoint(n.rightSE.point);if(f<0)return 1;if(f>0)return-1}if(a!==o){const f=l-u,h=a-r,d=c-s,v=o-i;if(f>h&&d<v)return 1;if(f<h&&d>v)return-1}return a>o?1:a<o||l<c?-1:l>c?1:t.id<n.id?-1:t.id>n.id?1:0}constructor(t,n,r,i){this.id=++t6,this.leftSE=t,t.segment=this,t.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=t,this.rings=r,this.windings=i}static fromRing(t,n,r){let i,a,o;const u=an.comparePoints(t,n);if(u<0)i=t,a=n,o=1;else if(u>0)i=n,a=t,o=-1;else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);const s=new an(i,!0),l=new an(a,!1);return new tr(s,l,[r],[o])}replaceRightSE(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const t=this.leftSE.point.y,n=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<n?t:n},ur:{x:this.rightSE.point.x,y:t>n?t:n}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}comparePoint(t){if(this.isAnEndpoint(t))return 0;const n=this.leftSE.point,r=this.rightSE.point,i=this.vector();if(n.x===r.x)return t.x===n.x?0:t.x<n.x?1:-1;const a=(t.y-n.y)/i.y,o=n.x+a*i.x;if(t.x===o)return 0;const u=(t.x-n.x)/i.x,s=n.y+u*i.y;return t.y===s?0:t.y<s?-1:1}getIntersection(t){const n=this.bbox(),r=t.bbox(),i=Gs(n,r);if(i===null)return null;const a=this.leftSE.point,o=this.rightSE.point,u=t.leftSE.point,s=t.rightSE.point,l=Mi(n,u)&&this.comparePoint(u)===0,c=Mi(r,a)&&t.comparePoint(a)===0,f=Mi(n,s)&&this.comparePoint(s)===0,h=Mi(r,o)&&t.comparePoint(o)===0;if(c&&l)return h&&!f?o:!h&&f?s:null;if(c)return f&&a.x===s.x&&a.y===s.y?null:a;if(l)return h&&o.x===u.x&&o.y===u.y?null:u;if(h&&f)return null;if(h)return o;if(f)return s;const d=e6(a,this.vector(),u,t.vector());return d===null||!Mi(i,d)?null:aa.round(d.x,d.y)}split(t){const n=[],r=t.events!==void 0,i=new an(t,!0),a=new an(t,!1),o=this.rightSE;this.replaceRightSE(a),n.push(a),n.push(i);const u=new tr(i,o,this.rings.slice(),this.windings.slice());return an.comparePoints(u.leftSE.point,u.rightSE.point)>0&&u.swapEvents(),an.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),a.checkForConsuming()),n}swapEvents(){const t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let n=0,r=this.windings.length;n<r;n++)this.windings[n]*=-1}consume(t){let n=this,r=t;for(;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;const i=tr.compare(n,r);if(i!==0){if(i>0){const a=n;n=r,r=a}if(n.prev===r){const a=n;n=r,r=a}for(let a=0,o=r.rings.length;a<o;a++){const u=r.rings[a],s=r.windings[a],l=n.rings.indexOf(u);l===-1?(n.rings.push(u),n.windings.push(s)):n.windings[l]+=s}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};const n=this._afterState.rings,r=this._afterState.windings,i=this._afterState.multiPolys;for(let u=0,s=this.rings.length;u<s;u++){const l=this.rings[u],c=this.windings[u],f=n.indexOf(l);f===-1?(n.push(l),r.push(c)):r[f]+=c}const a=[],o=[];for(let u=0,s=n.length;u<s;u++){if(r[u]===0)continue;const l=n[u],c=l.poly;if(o.indexOf(c)===-1)if(l.isExterior)a.push(c);else{o.indexOf(c)===-1&&o.push(c);const f=a.indexOf(l.poly);f!==-1&&a.splice(f,1)}}for(let u=0,s=a.length;u<s;u++){const l=a[u].multiPoly;i.indexOf(l)===-1&&i.push(l)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const t=this.beforeState().multiPolys,n=this.afterState().multiPolys;switch(cn.type){case"union":{const r=t.length===0,i=n.length===0;this._isInResult=r!==i;break}case"intersection":{let r,i;t.length<n.length?(r=t.length,i=n.length):(r=n.length,i=t.length),this._isInResult=i===cn.numMultiPolys&&r<i;break}case"xor":{const r=Math.abs(t.length-n.length);this._isInResult=r%2===1;break}case"difference":{const r=i=>i.length===1&&i[0].isSubject;this._isInResult=r(t)!==r(n);break}default:throw new Error(`Unrecognized operation type found ${cn.type}`)}return this._isInResult}}class Ep{constructor(t,n,r){if(!Array.isArray(t)||t.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],typeof t[0][0]!="number"||typeof t[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const i=aa.round(t[0][0],t[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};let a=i;for(let o=1,u=t.length;o<u;o++){if(typeof t[o][0]!="number"||typeof t[o][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let s=aa.round(t[o][0],t[o][1]);s.x===a.x&&s.y===a.y||(this.segments.push(tr.fromRing(a,s,this)),s.x<this.bbox.ll.x&&(this.bbox.ll.x=s.x),s.y<this.bbox.ll.y&&(this.bbox.ll.y=s.y),s.x>this.bbox.ur.x&&(this.bbox.ur.x=s.x),s.y>this.bbox.ur.y&&(this.bbox.ur.y=s.y),a=s)}(i.x!==a.x||i.y!==a.y)&&this.segments.push(tr.fromRing(a,i,this))}getSweepEvents(){const t=[];for(let n=0,r=this.segments.length;n<r;n++){const i=this.segments[n];t.push(i.leftSE),t.push(i.rightSE)}return t}}class n6{constructor(t,n){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Ep(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let r=1,i=t.length;r<i;r++){const a=new Ep(t[r],this,!1);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.interiorRings.push(a)}this.multiPoly=n}getSweepEvents(){const t=this.exteriorRing.getSweepEvents();for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class Cp{constructor(t,n){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof t[0][0][0]=="number"&&(t=[t])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let r=0,i=t.length;r<i;r++){const a=new n6(t[r],this);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.polys.push(a)}this.isSubject=n}getSweepEvents(){const t=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getSweepEvents();for(let a=0,o=i.length;a<o;a++)t.push(i[a])}return t}}class xo{static factory(t){const n=[];for(let r=0,i=t.length;r<i;r++){const a=t[r];if(!a.isInResult()||a.ringOut)continue;let o=null,u=a.leftSE,s=a.rightSE;const l=[u],c=u.point,f=[];for(;o=u,u=s,l.push(u),u.point!==c;)for(;;){const h=u.getAvailableLinkedEvents();if(h.length===0){const p=l[0].point,g=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${p.x}, ${p.y}]. Last matching segment found ends at [${g.x}, ${g.y}].`)}if(h.length===1){s=h[0].otherSE;break}let d=null;for(let p=0,g=f.length;p<g;p++)if(f[p].point===u.point){d=p;break}if(d!==null){const p=f.splice(d)[0],g=l.splice(p.index);g.unshift(g[0].otherSE),n.push(new xo(g.reverse()));continue}f.push({index:l.length,point:u.point});const v=u.getLeftmostComparator(o);s=h.sort(v)[0].otherSE;break}n.push(new xo(l))}return n}constructor(t){this.events=t;for(let n=0,r=t.length;n<r;n++)t[n].segment.ringOut=this;this.poly=null}getGeom(){let t=this.events[0].point;const n=[t];for(let l=1,c=this.events.length-1;l<c;l++){const f=this.events[l].point,h=this.events[l+1].point;bp(f,t,h)!==0&&(n.push(f),t=f)}if(n.length===1)return null;const r=n[0],i=n[1];bp(r,t,i)===0&&n.shift(),n.push(n[0]);const a=this.isExteriorRing()?1:-1,o=this.isExteriorRing()?0:n.length-1,u=this.isExteriorRing()?n.length:-1,s=[];for(let l=o;l!=u;l+=a)s.push([n[l].x,n[l].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){const t=this.enclosingRing();this._isExteriorRing=t?!t.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let t=this.events[0];for(let i=1,a=this.events.length;i<a;i++){const o=this.events[i];an.compare(t,o)>0&&(t=o)}let n=t.segment.prevInResult(),r=n?n.prevInResult():null;for(;;){if(!n)return null;if(!r)return n.ringOut;if(r.ringOut!==n.ringOut)return r.ringOut.enclosingRing()!==n.ringOut?n.ringOut:n.ringOut.enclosingRing();n=r.prevInResult(),r=n?n.prevInResult():null}}}class wp{constructor(t){this.exteriorRing=t,t.poly=this,this.interiorRings=[]}addInterior(t){this.interiorRings.push(t),t.poly=this}getGeom(){const t=[this.exteriorRing.getGeom()];if(t[0]===null)return null;for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getGeom();i!==null&&t.push(i)}return t}}class r6{constructor(t){this.rings=t,this.polys=this._composePolys(t)}getGeom(){const t=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getGeom();i!==null&&t.push(i)}return t}_composePolys(t){const n=[];for(let r=0,i=t.length;r<i;r++){const a=t[r];if(!a.poly)if(a.isExteriorRing())n.push(new wp(a));else{const o=a.enclosingRing();o.poly||n.push(new wp(o)),o.poly.addInterior(a)}}return n}}class i6{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tr.compare;this.queue=t,this.tree=new Bl(n),this.segments=[]}process(t){const n=t.segment,r=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(n),r;const i=t.isLeft?this.tree.add(n):this.tree.find(n);if(!i)throw new Error(`Unable to find segment #${n.id} [${n.leftSE.point.x}, ${n.leftSE.point.y}] -> [${n.rightSE.point.x}, ${n.rightSE.point.y}] in SweepLine tree.`);let a=i,o=i,u,s;for(;u===void 0;)a=this.tree.prev(a),a===null?u=null:a.key.consumedBy===void 0&&(u=a.key);for(;s===void 0;)o=this.tree.next(o),o===null?s=null:o.key.consumedBy===void 0&&(s=o.key);if(t.isLeft){let l=null;if(u){const f=u.getIntersection(n);if(f!==null&&(n.isAnEndpoint(f)||(l=f),!u.isAnEndpoint(f))){const h=this._splitSafely(u,f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}}let c=null;if(s){const f=s.getIntersection(n);if(f!==null&&(n.isAnEndpoint(f)||(c=f),!s.isAnEndpoint(f))){const h=this._splitSafely(s,f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}}if(l!==null||c!==null){let f=null;l===null?f=c:c===null?f=l:f=an.comparePoints(l,c)<=0?l:c,this.queue.remove(n.rightSE),r.push(n.rightSE);const h=n.split(f);for(let d=0,v=h.length;d<v;d++)r.push(h[d])}r.length>0?(this.tree.remove(n),r.push(t)):(this.segments.push(n),n.prev=u)}else{if(u&&s){const l=u.getIntersection(s);if(l!==null){if(!u.isAnEndpoint(l)){const c=this._splitSafely(u,l);for(let f=0,h=c.length;f<h;f++)r.push(c[f])}if(!s.isAnEndpoint(l)){const c=this._splitSafely(s,l);for(let f=0,h=c.length;f<h;f++)r.push(c[f])}}}this.tree.remove(n)}return r}_splitSafely(t,n){this.tree.remove(t);const r=t.rightSE;this.queue.remove(r);const i=t.split(n);return i.push(r),t.consumedBy===void 0&&this.tree.add(t),i}}const Tp=typeof process<"u"&&Zm.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,a6=typeof process<"u"&&Zm.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class o6{run(t,n,r){cn.type=t,aa.reset();const i=[new Cp(n,!0)];for(let f=0,h=r.length;f<h;f++)i.push(new Cp(r[f],!1));if(cn.numMultiPolys=i.length,cn.type==="difference"){const f=i[0];let h=1;for(;h<i.length;)Gs(i[h].bbox,f.bbox)!==null?h++:i.splice(h,1)}if(cn.type==="intersection")for(let f=0,h=i.length;f<h;f++){const d=i[f];for(let v=f+1,p=i.length;v<p;v++)if(Gs(d.bbox,i[v].bbox)===null)return[]}const a=new Bl(an.compare);for(let f=0,h=i.length;f<h;f++){const d=i[f].getSweepEvents();for(let v=0,p=d.length;v<p;v++)if(a.insert(d[v]),a.size>Tp)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const o=new i6(a);let u=a.size,s=a.pop();for(;s;){const f=s.key;if(a.size===u){const d=f.segment;throw new Error(`Unable to pop() ${f.isLeft?"left":"right"} SweepEvent [${f.point.x}, ${f.point.y}] from segment #${d.id} [${d.leftSE.point.x}, ${d.leftSE.point.y}] -> [${d.rightSE.point.x}, ${d.rightSE.point.y}] from queue.`)}if(a.size>Tp)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(o.segments.length>a6)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const h=o.process(f);for(let d=0,v=h.length;d<v;d++){const p=h[d];p.consumedBy===void 0&&a.insert(p)}u=a.size,s=a.pop()}aa.reset();const l=xo.factory(o.segments);return new r6(l).getGeom()}}const cn=new o6,u6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return cn.run("union",e,n)},s6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return cn.run("intersection",e,n)},l6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return cn.run("xor",e,n)},c6=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return cn.run("difference",e,n)};var f6={union:u6,intersection:s6,xor:l6,difference:c6};function h6(e,t,n){n===void 0&&(n={});var r=tc(e),i=tc(t),a=f6.union(r.coordinates,i.coordinates);return a.length===0?null:a.length===1?qs(a[0],n.properties):j1(a,n.properties)}var d6=function(){function e(){ce(this,e)}return le(e,[{key:"getCombineFeature",value:function(n){var r=null,i=n[0];return n.map(function(a){var o=qs(a.coordinates);r===null?r=o:r=h6(r,o)}),i&&(r.properties=$({},i)),r}}]),e}(),ki="select",Ii="active",v6=function(){function e(t){var n=t.layerService,r=t.tileLayerService,i=t.parent;ce(this,e),S(this,"tilePickID",new Map),this.layerService=n,this.tileLayerService=r,this.parent=i,this.tileSourceService=new d6}return le(e,[{key:"pickRender",value:function(n){var r=this.tileLayerService.getVisibleTileBylngLat(n.lngLat);if(r){var i=r.getMainLayer();i==null||i.layerPickService.pickRender(n)}}},{key:"pick",value:function(){var t=Q(w.mark(function r(i,a){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=this.parent.getContainer(),u=o.get(se.IPickingService),i.type!=="RasterLayer"){f.next=8;break}if(s=this.tileLayerService.getVisibleTileBylngLat(a.lngLat),!(s&&s.getMainLayer()!==void 0)){f.next=7;break}return l=s.getMainLayer(),f.abrupt("return",l.layerPickService.pickRasterLayer(l,a,this.parent));case 7:return f.abrupt("return",!1);case 8:return this.pickRender(a),f.abrupt("return",u.pickFromPickingFBO(i,a));case 10:case"end":return f.stop()}},r,this)}));function n(r,i){return t.apply(this,arguments)}return n}()},{key:"selectFeature",value:function(n){var r=Fe(n,3),i=r[0],a=r[1],o=r[2],u=this.color2PickId(i,a,o);this.tilePickID.set(ki,u),this.updateHighLight(i,a,o,ki)}},{key:"highlightPickedFeature",value:function(n){var r=Fe(n,3),i=r[0],a=r[1],o=r[2],u=this.color2PickId(i,a,o);this.tilePickID.set(Ii,u),this.updateHighLight(i,a,o,Ii)}},{key:"updateHighLight",value:function(n,r,i,a){this.tileLayerService.tiles.map(function(o){var u=o.getMainLayer();switch(a){case ki:u==null||u.hooks.beforeSelect.call([n,r,i]);break;case Ii:u==null||u.hooks.beforeHighlight.call([n,r,i]);break}})}},{key:"setPickState",value:function(){var n=this.tilePickID.get(ki),r=this.tilePickID.get(Ii);if(n){var i=this.pickId2Color(n),a=Fe(i,3),o=a[0],u=a[1],s=a[2];this.updateHighLight(o,u,s,ki);return}if(r){var l=this.pickId2Color(r),c=Fe(l,3),f=c[0],h=c[1],d=c[2];this.updateHighLight(f,h,d,Ii);return}}},{key:"color2PickId",value:function(n,r,i){return pr(new Uint8Array([n,r,i]))}},{key:"pickId2Color",value:function(n){return Dn(n)}},{key:"getFeatureById",value:function(n){var r=this.tileLayerService.getTiles().filter(function(a){return a.visible}),i=[];return r.forEach(function(a){i.push.apply(i,re(a.getFeatureById(n)))}),i}},{key:"pickRasterLayer",value:function(n,r,i){return!1}}]),e}();function p6(e){return e==="PolygonLayer"?vm:e==="LineLayer"?im:Ps}function g6(e){return["PolygonLayer","LineLayer"].indexOf(e)!==-1}function m6(e){var t=y6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function y6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Er=function(e){Te(n,e);var t=m6(n);function n(r,i){var a;return ce(this,n),a=t.call(this),S(P(a),"visible",!0),S(P(a),"layers",[]),S(P(a),"isLoaded",!1),S(P(a),"tileMaskLayers",[]),a.parent=i,a.sourceTile=r,a.x=r.x,a.y=r.y,a.z=r.z,a.key="".concat(a.x,"_").concat(a.y,"_").concat(a.z),a}return le(n,[{key:"getLayers",value:function(){return this.layers}},{key:"styleUpdate",value:function(){}},{key:"lnglatInBounds",value:function(i){var a=Fe(this.sourceTile.bounds,4),o=a[0],u=a[1],s=a[2],l=a[3],c=i.lng,f=i.lat;return c>=o&&c<=s&&f>=u&&f<=l}},{key:"getLayerOptions",value:function(){var i,a=this.parent.getLayerConfig();return $($({},a),{},{textAllowOverlap:!0,autoFit:!1,maskLayers:this.getMaskLayer(),tileMask:g6(this.parent.type),mask:a.mask||((i=a.maskLayers)===null||i===void 0?void 0:i.length)!==0&&a.enableMask})}},{key:"getMaskLayer",value:function(){var i=this,a=this.parent.getLayerConfig(),o=a.maskLayers,u=[];return o==null||o.forEach(function(s){if(!s.tileLayer)return u.push(s),s;var l=s.tileLayer,c=l.getTile(i.sourceTile.key),f=c==null?void 0:c.getLayers()[0];f&&u.push(f)}),u}},{key:"addTileMask",value:function(){var r=Q(w.mark(function a(){var o,u,s;return w.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=new vm({name:"mask",visible:!0,enablePicking:!1}).source({type:"FeatureCollection",features:[this.sourceTile.bboxPolygon]},{parser:{type:"geojson",featureId:"id"}}).shape("fill").color("#0f0").style({opacity:.5}),u=Ou(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),c.next=5,o.init();case 5:return this.tileMask=o,s=this.getMainLayer(),s!==void 0&&(s.tileMask=o),c.abrupt("return",o);case 9:case"end":return c.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"addMask",value:function(){var r=Q(w.mark(function a(o,u){var s;return w.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s=Ou(this.parent.sceneContainer),u.setContainer(s,this.parent.sceneContainer),c.next=4,u.init();case 4:o.addMask(u),this.tileMaskLayers.push(u);case 6:case"end":return c.stop()}},a,this)}));function i(a,o){return r.apply(this,arguments)}return i}()},{key:"addLayer",value:function(){var r=Q(w.mark(function a(o){var u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o.isTileLayer=!0,u=Ou(this.parent.sceneContainer),o.setContainer(u,this.parent.sceneContainer),this.layers.push(o),l.next=6,o.init();case 6:case"end":return l.stop()}},a,this)}));function i(a){return r.apply(this,arguments)}return i}()},{key:"updateVisible",value:function(i){this.visible=i,this.updateOptions("visible",i)}},{key:"updateOptions",value:function(i,a){this.layers.forEach(function(o){o.updateLayerConfig(S({},i,a))})}},{key:"getMainLayer",value:function(){return this.layers[0]}},{key:"getFeatures",value:function(i){return[]}},{key:"getFeatureById",value:function(i){return[]}},{key:"destroy",value:function(){var i;(i=this.tileMask)===null||i===void 0||i.destroy(),this.layers.forEach(function(a){return a.destroy()})}}]),n}(Kt.EventEmitter);function _6(e){var t=x6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function x6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var b6=function(e){Te(n,e);var t=_6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.getSourceOption(),u=o.data.features[0].properties,s=new im().source(o.data,o.options).size(1).shape("line").color("red"),l=new Ps({minZoom:this.z-1,maxZoom:this.z+1,textAllowOverlap:!0}).source([u],{parser:{type:"json",x:"x",y:"y"}}).size(20).color("red").shape(this.key).style({stroke:"#fff",strokeWidth:2}),f.next=6,this.addLayer(s);case 6:return f.next=8,this.addLayer(l);case 8:this.isLoaded=!0;case 9:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.layers.testTile.features;return{data:{type:"FeatureCollection",features:a},options:{parser:{type:"geojson"},transforms:i.transforms}}}}]),n}(Er);function S6(e){var t=A6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function A6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var E6=function(e){Te(n,e);var t=S6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new rw($({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),n}(Er);function C6(e){var t=w6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function w6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var T6=function(e){Te(n,e);var t=C6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new vM($({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getFeatures",value:function(i){if(!i)return[];var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=a.featureId,s=this.getFeatures(o);return{data:{type:"FeatureCollection",features:s},options:{parser:{type:"geojson",featureId:u},transforms:i.transforms}}}}]),n}(Er),M6=["rasterData"];function k6(e){var t=I6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function I6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var L6=function(e){Te(n,e);var t=k6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new Tl($({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=on(a,M6);return{data:o,options:{parser:$({type:"rasterRgb",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}}]),n}(Er);function R6(e){var t=P6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function P6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var O6=function(e){Te(n,e);var t=R6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l;return w.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=new Tl($({},u)).source(s.data,s.options),o&&Object.keys(o).forEach(function(h){var d,v,p=h;l[p]((d=o[p])===null||d===void 0?void 0:d.field,(v=o[p])===null||v===void 0?void 0:v.values)}),f.next=7,this.addLayer(l);case 7:this.isLoaded=!0;case 8:case"end":return f.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:i.transforms}}}}]),n}(Er),F6=["rasterData"];function D6(e){var t=N6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function N6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var B6={positions:[0,1],colors:["#000","#fff"]},U6=function(e){Te(n,e);var t=D6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c,f,h;return w.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=this.getSourceOption(),l=this.getLayerOptions(),c=l.rampColors,f=l.domain,this.colorTexture=this.parent.textureService.getColorTexture(c,f),h=new Tl($($({},u),{},{colorTexture:this.colorTexture})).source(s.data,s.options),o&&Object.keys(o).forEach(function(p){var g,m,_=p;h[_]((g=o[_])===null||g===void 0?void 0:g.field,(m=o[_])===null||m===void 0?void 0:m.values)}),v.next=9,this.addLayer(h);case 9:this.isLoaded=!0;case 10:case"end":return v.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.sourceTile.data.data,o=a.rasterData,u=on(a,F6);return{data:o,options:{parser:$({type:"raster",extent:this.sourceTile.bounds},u),transforms:i.transforms}}}},{key:"styleUpdate",value:function(){for(var i=this,a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];var s=o,l=s.rampColors,c=l===void 0?B6:l,f=s.domain;this.colorTexture=this.parent.textureService.getColorTexture(c,f||nl(c)),this.layers.forEach(function(h){return h.style({colorTexture:i.colorTexture})})}},{key:"destroy",value:function(){this.layers.forEach(function(i){return i.destroy()})}}]),n}(Er);function z6(e){var t=$6();return function(){var r=ee(e),i;if(t){var a=ee(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Me(this,i)}}function $6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Va=function(e){Te(n,e);var t=z6(n);function n(){return ce(this,n),t.apply(this,arguments)}return le(n,[{key:"initTileLayer",value:function(){var r=Q(w.mark(function a(){var o,u,s,l,c;return w.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=this.parent.getLayerAttributeConfig(),u=this.getLayerOptions(),s=p6(this.parent.type),l=this.getSourceOption(),l){h.next=8;break}return this.isLoaded=!0,this.emit("loaded"),h.abrupt("return");case 8:return c=new s($({},u)).source(l.data,l.options),Object.keys(o).forEach(function(d){var v,p,g=d;c[g]((v=o[g])===null||v===void 0?void 0:v.field,(p=o[g])===null||p===void 0?void 0:p.values)}),h.next=12,this.addLayer(c);case 12:if(!u.tileMask){h.next=15;break}return h.next=15,this.addTileMask();case 15:this.setLayerMinMaxZoom(c),this.isLoaded=!0,this.emit("loaded");case 18:case"end":return h.stop()}},a,this)}));function i(){return r.apply(this,arguments)}return i}()},{key:"getSourceOption",value:function(){var i=this.parent.getSource(),a=this.parent.getLayerConfig(),o=a.sourceLayer,u=o===void 0?"defaultLayer":o,s=a.featureId,l=s===void 0?"id":s,c=this.getFeatures(u);return{data:{type:"FeatureCollection",features:c},options:{parser:{type:"geojson",featureId:l},transforms:i.transforms}}}},{key:"setLayerMinMaxZoom",value:function(i){i.getModelType()==="text"&&i.updateLayerConfig({maxZoom:this.z+1,minZoom:this.z-1})}},{key:"getFeatures",value:function(i){var a=this.sourceTile.data;return a.getTileData(i)}},{key:"getFeatureById",value:function(i){var a=this.getMainLayer();if(!a)return[];var o=a.getSource().data.dataArray.filter(function(u){return u._id===i});return o}}]),n}(Er);function V6(e){var t=e.type;switch(t){case"PolygonLayer":return Va;case"LineLayer":return Va;case"PointLayer":return Va;case"TileDebugLayer":return b6;case"MaskLayer":return T6;case"RasterLayer":var n=e.getSource().parser.dataType;switch(n){case It.RGB:case It.CUSTOMRGB:return L6;case It.ARRAYBUFFER:case It.CUSTOMARRAYBUFFER:return U6;case It.TERRAINRGB:case It.CUSTOMTERRAINRGB:return O6;default:return E6}default:return Va}}var j6=["shape","color","size","style","animate","filter","rotate","scale","setBlend","setSelect","setActive","disableMask","enableMask","addMask","removeMask"],H6=nt.debounce,Mp=function(){function e(t){var n=this;ce(this,e),S(this,"initedTileset",!1),S(this,"mapchange",function(){var i;if(n.parent.isVisible()!==!1){var a=n.getCurrentView(),o=a.latLonBounds,u=a.zoom;if(n.mapService.version==="GAODE1.x"){var s=n.parent.getLayerConfig(),l=s.visible;u<2&&l?(n.parent.updateLayerConfig({visible:!1}),n.layerService.reRender()):u>=2&&!l&&(n.parent.updateLayerConfig({visible:!0}),n.layerService.reRender())}n.lastViewStates&&n.lastViewStates.zoom===u&&n.lastViewStates.latLonBounds.toString()===o.toString()||(n.lastViewStates={zoom:u,latLonBounds:o},(i=n.tilesetManager)===null||i===void 0||i.throttleUpdate(u,o))}}),S(this,"viewchange",H6(this.mapchange,24)),this.parent=t;var r=this.parent.getContainer();this.rendererService=r.get(se.IRendererService),this.layerService=r.get(se.ILayerService),this.mapService=r.get(se.IMapService),this.pickingService=r.get(se.IPickingService),this.tileLayerService=new D7({rendererService:this.rendererService,layerService:this.layerService,parent:t}),this.tilePickService=new v6({tileLayerService:this.tileLayerService,layerService:this.layerService,parent:t}),this.parent.setLayerPickService(this.tilePickService),this.proxy(t),this.initTileSetManager()}return le(e,[{key:"initTileSetManager",value:function(){var n,r=this.parent.getSource();if(this.tilesetManager=r.tileset,this.initedTileset||(this.bindTilesetEvent(),this.initedTileset=!0),this.parent.isVisible()!==!1){var i=this.getCurrentView(),a=i.latLonBounds,o=i.zoom;(n=this.tilesetManager)===null||n===void 0||n.update(o,a)}}},{key:"getCurrentView",value:function(){var n=this.mapService.getBounds(),r=[n[0][0],n[0][1],n[1][0],n[1][1]],i=this.mapService.getZoom();return{latLonBounds:r,zoom:i}}},{key:"bindTilesetEvent",value:function(){var n=this;this.tilesetManager.on("tile-loaded",function(r){}),this.tilesetManager.on("tile-unload",function(r){n.tileUnLoad(r)}),this.tilesetManager.on("tile-error",function(r,i){n.tileError(r)}),this.tilesetManager.on("tile-update",function(){n.tileUpdate()}),this.mapService.on("zoomend",this.mapchange),this.mapService.on("moveend",this.viewchange)}},{key:"render",value:function(){this.tileLayerService.render()}},{key:"getLayers",value:function(){return this.tileLayerService.getLayers()}},{key:"getTiles",value:function(){return this.tileLayerService.getTiles()}},{key:"getTile",value:function(n){return this.tileLayerService.getTile(n)}},{key:"tileLoaded",value:function(n){}},{key:"tileError",value:function(n){}},{key:"destroy",value:function(){var n;this.mapService.off("zoomend",this.mapchange),this.mapService.off("moveend",this.viewchange),(n=this.tilesetManager)===null||n===void 0||n.destroy(),this.tileLayerService.destroy()}},{key:"reload",value:function(){var n;this.tilesetManager.clear();var r=this.getCurrentView(),i=r.latLonBounds,a=r.zoom;(n=this.tilesetManager)===null||n===void 0||n.update(a,i)}},{key:"tileUnLoad",value:function(n){this.tileLayerService.removeTile(n.key)}},{key:"tileUpdate",value:function(){var t=Q(w.mark(function r(){var i=this,a,o,u;return w.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(this.tilesetManager){l.next=2;break}return l.abrupt("return");case 2:return a=this.parent.getMinZoom(),o=this.parent.getMaxZoom(),u=this.tilesetManager.tiles.filter(function(c){return c.isLoaded}).filter(function(c){return c.isVisibleChange}).filter(function(c){return c.data}).filter(function(c){return c.z>=a&&c.z<o}),l.next=7,Promise.all(u.map(function(){var c=Q(w.mark(function f(h){var d,v;return w.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(i.tileLayerService.hasTile(h.key)){g.next=9;break}return d=V6(i.parent),v=new d(h,i.parent),g.next=5,v.initTileLayer();case 5:i.tilePickService.setPickState(),v.getLayers().length!==0&&(i.tileLayerService.addTile(v),i.tileLayerService.updateTileVisible(h),i.layerService.reRender()),g.next=12;break;case 9:i.tileLayerService.updateTileVisible(h),i.tilePickService.setPickState(),i.layerService.reRender();case 12:case"end":return g.stop()}},f)}));return function(f){return c.apply(this,arguments)}}()));case 7:this.tilesetManager.isLoaded&&this.parent.emit("tiles-loaded",this.tilesetManager.currentTiles);case 8:case"end":return l.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"setPickState",value:function(n){}},{key:"pickRender",value:function(n){this.tilePickService.pickRender(n)}},{key:"selectFeature",value:function(n){this.tilePickService.selectFeature(n)}},{key:"highlightPickedFeature",value:function(n){this.tilePickService.highlightPickedFeature(n)}},{key:"proxy",value:function(n){var r=this;j6.forEach(function(i){var a=n[i].bind(n);n[i]=function(){for(var o=arguments.length,u=new Array(o),s=0;s<o;s++)u[s]=arguments[s];return a.apply(void 0,u),r.getLayers().map(function(l){l[i].apply(l,u)}),i==="style"&&r.getTiles().forEach(function(l){return l.styleUpdate.apply(l,u)}),n}})}}]),e}(),kp,Ip,G6=(kp=Ne(),kp(Ip=function(){function e(){ce(this,e)}return le(e,[{key:"build",value:function(){var t=Q(w.mark(function r(i){return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i.prepareBuildModel(),o.next=3,i.buildModels();case 3:case"end":return o.stop()}},r)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"initLayerModel",value:function(){var t=Q(w.mark(function r(i){return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"prepareLayerModel",value:function(){var t=Q(w.mark(function r(i){return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.build(i);case 2:i.styleNeedUpdate=!1;case 3:case"end":return o.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"apply",value:function(n){var r=this;n.hooks.init.tapPromise("LayerModelPlugin",Q(w.mark(function i(){return w.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.getSource().isTile){o.next=4;break}return n.prepareBuildModel(),n.tileLayer=new Mp(n),o.abrupt("return");case 4:return n.log(mt.BuildModelStart,bt.INIT),o.next=7,r.initLayerModel(n);case 7:n.log(mt.BuildModelEnd,bt.INIT);case 8:case"end":return o.stop()}},i)}))),n.hooks.beforeRenderData.tapPromise("LayerModelPlugin",function(){var i=Q(w.mark(function a(o){return w.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(o){s.next=2;break}return s.abrupt("return",!1);case 2:if(!n.getSource().isTile){s.next=5;break}return n.tileLayer=new Mp(n),s.abrupt("return",!1);case 5:return n.log(mt.BuildModelStart,bt.UPDATE),s.next=8,r.prepareLayerModel(n);case 8:return n.log(mt.BuildModelEnd,bt.UPDATE),s.abrupt("return",!0);case 10:case"end":return s.stop()}},a)}));return function(a){return i.apply(this,arguments)}}())}}]),e}())||Ip),Lp,Rp,W6=(Lp=Ne(),Lp(Rp=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){n.hooks.afterInit.tap("LayerStylePlugin",function(){var r=n.getLayerConfig(),i=r.autoFit,a=r.fitBoundsOptions;i&&n.fitBounds(a),n.styleNeedUpdate=!1})}}]),e}())||Rp),Pp,Op,Y6=["type"],Fp={directional:{lights:"u_DirectionalLights",num:"u_NumOfDirectionalLights"},spot:{lights:"u_SpotLights",num:"u_NumOfSpotLights"}},X6={type:"directional",direction:[1,10.5,12],ambient:[.2,.2,.2],diffuse:[.6,.6,.6],specular:[.1,.1,.1]},Z6={direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0]},q6={position:[0,0,0],direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0],constant:1,linear:0,quadratic:0,angle:14,exponent:40,blur:5};function Q6(e){var t={u_DirectionalLights:new Array(3).fill($({},Z6)),u_NumOfDirectionalLights:0,u_SpotLights:new Array(3).fill($({},q6)),u_NumOfSpotLights:0};return(!e||!e.length)&&(e=[X6]),e.forEach(function(n){var r=n.type,i=r===void 0?"directional":r,a=on(n,Y6),o=Fp[i].lights,u=Fp[i].num,s=t[u];t[o][s]=$($({},t[o][s]),a),t[u]++}),t}var J6=(Pp=Ne(),Pp(Op=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("LightingPlugin",function(){var r=n.getLayerConfig(),i=r.enableLighting;i&&n.models.forEach(function(a){return a.addUniforms($({},Q6()))})})}}]),e}())||Op),Dp,Np,K6=(Dp=Ne(),Dp(Np=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n,r){var i=this,a=r.rendererService,o=r.postProcessingPassFactory,u=r.normalPassFactory;n.hooks.init.tapPromise("MultiPassRendererPlugin",function(){var s=n.getLayerConfig(),l=s.enableMultiPassRenderer,c=s.passes,f=c===void 0?[]:c;i.enabled=!!l&&n.getLayerConfig().enableMultiPassRenderer!==!1,i.enabled&&(n.multiPassRenderer=Qg(n,f,o,u),n.multiPassRenderer.setRenderFlag(!0))}),n.hooks.beforeRender.tap("MultiPassRendererPlugin",function(){if(i.enabled){var s=a.getViewportSize(),l=s.width,c=s.height;n.multiPassRenderer.resize(l,c)}})}}]),e}())||Np),Bp,Up,ek=nt.isNumber,Nr={NONE:0,ENCODE:1,HIGHLIGHT:2},tk=(Bp=Ne(),Bp(Up=function(){function e(){ce(this,e)}return le(e,[{key:"pickOption2Array",value:function(){var n=[];return this.pickingUniformMap.forEach(function(r,i){ek(r)?n.push(r):n.push.apply(n,re(r))}),n}},{key:"updatePickOption",value:function(n,r){var i=this;Object.keys(n).forEach(function(s){i.pickingUniformMap.set(s,n[s])});var a=r.getLayerConfig().pickingBuffer||0,o=Number(r.getShaderPickStat());this.pickingUniformMap.set("u_PickingBuffer",a),this.pickingUniformMap.set("u_shaderPick",o);var u=r.getPickingUniformBuffer();u.subData({offset:0,data:this.pickOption2Array()})}},{key:"apply",value:function(n,r){var i=this;r.rendererService;var a=r.styleAttributeService;this.pickingUniformMap=new Map([["u_HighlightColor",[1,0,0,1]],["u_SelectColor",[1,0,0,1]],["u_PickingColor",[0,0,0]],["u_PickingStage",0],["u_CurrentSelectedId",[0,0,0]],["u_PickingThreshold",10],["u_PickingBuffer",0],["u_shaderPick",0],["u_EnableSelect",0],["u_activeMix",0]]),n.hooks.init.tapPromise("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;a.registerStyleAttribute({name:"pickingColor",type:Ce.Attribute,descriptor:{name:"a_PickingColor",shaderLocation:Re.PICKING_COLOR,buffer:{data:[],type:R.FLOAT},size:3,update:function(l){var c=l.id;return u?Dn(c):[0,0,0]}}})}),n.hooks.beforePickingEncode.tap("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;u&&n.isVisible()&&(i.updatePickOption({u_PickingStage:Nr.ENCODE},n),n.models.forEach(function(s){return s.addUniforms({u_PickingStage:Nr.ENCODE})}))}),n.hooks.afterPickingEncode.tap("PixelPickingPlugin",function(){var o=n.getLayerConfig(),u=o.enablePicking;u&&n.isVisible()&&(i.updatePickOption({u_PickingStage:Nr.HIGHLIGHT},n),n.models.forEach(function(s){return s.addUniforms({u_PickingStage:Nr.HIGHLIGHT})}))}),n.hooks.beforeHighlight.tap("PixelPickingPlugin",function(o){var u=n.getLayerConfig(),s=u.highlightColor,l=u.activeMix,c=l===void 0?0:l,f=typeof s=="string"?rt(s):s||[1,0,0,1];n.updateLayerConfig({pickedFeatureID:pr(new Uint8Array(o))});var h={u_PickingStage:Nr.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c};i.updatePickOption(h,n),n.models.forEach(function(d){return d.addUniforms(h)})}),n.hooks.beforeSelect.tap("PixelPickingPlugin",function(o){var u=n.getLayerConfig(),s=u.selectColor,l=u.selectMix,c=l===void 0?0:l,f=typeof s=="string"?rt(s):s||[1,0,0,1];n.updateLayerConfig({pickedFeatureID:pr(new Uint8Array(o))});var h={u_PickingStage:Nr.HIGHLIGHT,u_PickingColor:o,u_HighlightColor:f.map(function(d){return d*255}),u_activeMix:c,u_CurrentSelectedId:o,u_SelectColor:f.map(function(d){return d*255}),u_EnableSelect:1};i.updatePickOption(h,n),n.models.forEach(function(d){return d.addUniforms(h)})})}}]),e}())||Up),nk=["mvt","geojsonvt","testTile"];function rk(e){var t=e.getSource();return nk.includes(t.parser.type)}var zp,$p,ik=(zp=Ne(),zp($p=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("RegisterStyleAttributePlugin",function(){rk(n)||i.registerBuiltinAttributes(a,n)})}},{key:"registerBuiltinAttributes",value:function(n,r){if(r.type==="MaskLayer"){this.registerPositionAttribute(n);return}this.registerPositionAttribute(n),this.registerColorAttribute(n),this.registerVertexIdAttribute(n)}},{key:"registerPositionAttribute",value:function(n){n.registerStyleAttribute({name:"position",type:Ce.Attribute,descriptor:{name:"a_Position",shaderLocation:Re.POSITION,buffer:{data:[],type:R.FLOAT},size:3,update:function(i,a,o){return o.length===2?[o[0],o[1],0]:[o[0],o[1],o[2]]}}})}},{key:"registerColorAttribute",value:function(n){n.registerStyleAttribute({name:"color",type:Ce.Attribute,descriptor:{name:"a_Color",shaderLocation:Re.COLOR,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:4,update:function(i){var a=i.color;return!a||!a.length?[1,1,1,1]:a}}})}},{key:"registerVertexIdAttribute",value:function(n){n.registerStyleAttribute({name:"vertexId",type:Ce.Attribute,descriptor:{name:"a_vertexId",shaderLocation:Re.VERTEX_ID,buffer:{usage:R.DYNAMIC_DRAW,data:[],type:R.FLOAT},size:1,update:function(i,a){return[a]}}})}}]),e}())||$p),Vp,jp,Hp,Gp,Wp,Yp,Xp,hr,Zp,qp,Qp,Jp,Kp,ak=(Vp=Ne(),jp=Ge(se.ICameraService),Hp=Ge(se.ICoordinateSystemService),Gp=Ge(se.IRendererService),Wp=Ge(se.IMapService),Yp=Ge(se.ILayerService),Vp(Xp=(hr=function(){function e(){ce(this,e),je(this,"cameraService",Zp,this),je(this,"coordinateSystemService",qp,this),je(this,"rendererService",Qp,this),je(this,"mapService",Jp,this),je(this,"layerService",Kp,this)}return le(e,[{key:"apply",value:function(n){var r=this,i=this.mapService.version,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=[0,0],u;this.rendererService.uniformBuffers[0]||(u=this.rendererService.createBuffer({data:new Float32Array(16*4+4*7),isUBO:!0}),this.rendererService.uniformBuffers[0]=u),n.hooks.beforeRender.tap("ShaderUniformPlugin",function(){var s=n.getLayerConfig().tileOrigin;if(r.coordinateSystemService.refresh(s),i==="GAODE2.x"){r.setLayerCenter(n),a=r.mapService.map.customCoords.getMVPMatrix(),o=r.mapService.getCustomCoordCenter();var l=n.getLayerUniformBuffer();l.subData({offset:0,data:new Uint8Array(new Float32Array([].concat(re(a),re(o))).buffer)})}var c=r.rendererService.getViewportSize(),f=c.width,h=c.height,d=r.generateUBO(a,o,f,h),v=d.data,p=d.uniforms;if(r.layerService.alreadyInRendering&&r.rendererService.uniformBuffers[0]){var g=r.rendererService.uniformBuffers[0];g.subData({offset:0,data:v})}var m=r.rendererService.queryVerdorInfo();m==="WebGL1"&&n.models.forEach(function(_){_.addUniforms($($({},p),{},{u_PickingBuffer:n.getLayerConfig().pickingBuffer||0,u_shaderPick:Number(n.getShaderPickStat())}))})})}},{key:"setLayerCenter",value:function(n){n.coordCenter===void 0&&(n.coordCenter=n.getSource().center),this.mapService.setCoordCenter&&this.mapService.setCoordCenter(n.coordCenter)}},{key:"generateUBO",value:function(n,r,i,a){var o,u=this.cameraService.getProjectionMatrix(),s=this.cameraService.getViewMatrix(),l=this.cameraService.getViewProjectionMatrix(),c=this.cameraService.getModelMatrix(),f=this.coordinateSystemService.getViewportCenterProjection(),h=this.coordinateSystemService.getPixelsPerDegree(),d=this.cameraService.getZoom(),v=this.coordinateSystemService.getPixelsPerDegree2(),p=this.cameraService.getZoomScale(),g=this.coordinateSystemService.getPixelsPerMeter(),m=this.coordinateSystemService.getCoordinateSystem(),_=this.cameraService.getCameraPosition(),y=window.devicePixelRatio,x=this.coordinateSystemService.getViewportCenter(),b=[i,a],M=this.cameraService.getFocalDistance(),C=[].concat(re(s),re(u),re(l),re(c),re(f),re(h),[d],re(v),[p],re(g),[m],re(_),[y],re(x),b,[M,0,0,0]);return{data:C,uniforms:(o={},S(o,cr.ProjectionMatrix,u),S(o,cr.ViewMatrix,s),S(o,cr.ViewProjectionMatrix,l),S(o,cr.Zoom,d),S(o,cr.ZoomScale,p),S(o,cr.FocalDistance,M),S(o,cr.CameraPosition,_),S(o,sr.CoordinateSystem,m),S(o,sr.ViewportCenter,x),S(o,sr.ViewportCenterProjection,f),S(o,sr.PixelsPerDegree,h),S(o,sr.PixelsPerDegree2,v),S(o,sr.PixelsPerMeter,g),S(o,sr.Mvp,n),S(o,"u_sceneCenterMercator",r),S(o,"u_ViewportSize",b),S(o,"u_ModelMatrix",c),S(o,"u_DevicePixelRatio",y),o)}}}]),e}(),Zp=ze(hr.prototype,"cameraService",[jp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),qp=ze(hr.prototype,"coordinateSystemService",[Hp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qp=ze(hr.prototype,"rendererService",[Gp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Jp=ze(hr.prototype,"mapService",[Wp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Kp=ze(hr.prototype,"layerService",[Yp],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),hr))||Xp),e0,t0,ok=(e0=Ne(),e0(t0=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n){n.hooks.beforeRender.tap("UpdateModelPlugin",function(){n.layerModel&&n.layerModel.needUpdate().then(function(r){r&&n.renderLayers()})}),n.hooks.afterRender.tap("UpdateModelPlugin",function(){n.layerModelNeedUpdate=!1})}}]),e}())||t0),n0,r0,uk=(n0=Ne(),n0(r0=function(){function e(){ce(this,e)}return le(e,[{key:"apply",value:function(n,r){var i=this,a=r.styleAttributeService;n.hooks.init.tapPromise("UpdateStyleAttributePlugin",function(){i.initStyleAttribute(n,{styleAttributeService:a})}),n.hooks.beforeRender.tap("UpdateStyleAttributePlugin",function(){n.layerModelNeedUpdate||n.inited&&i.updateStyleAttribute(n,{styleAttributeService:a})})}},{key:"updateStyleAttribute",value:function(n,r){var i=r.styleAttributeService,a=i.getLayerStyleAttributes()||[],o=i.getLayerStyleAttribute("filter");if(o&&o.needRegenerateVertices){n.layerModelNeedUpdate=!0,a.forEach(function(u){return u.needRegenerateVertices=!1});return}a.filter(function(u){return u.needRegenerateVertices}).forEach(function(u){i.updateAttributeByFeatureRange(u.name,n.getEncodedData(),u.featureRange.startIndex,u.featureRange.endIndex,n),u.needRegenerateVertices=!1})}},{key:"initStyleAttribute",value:function(n,r){var i=r.styleAttributeService,a=i.getLayerStyleAttributes()||[];a.filter(function(o){return o.needRegenerateVertices}).forEach(function(o){i.updateAttributeByFeatureRange(o.name,n.getEncodedData(),o.featureRange.startIndex,o.featureRange.endIndex),o.needRegenerateVertices=!1})}}]),e}())||r0);Pt.bind(se.ILayerPlugin).to(mM).inRequestScope();Pt.bind(se.ILayerPlugin).to(ik).inRequestScope();Pt.bind(se.ILayerPlugin).to(P7).inRequestScope();Pt.bind(se.ILayerPlugin).to(gM).inRequestScope();Pt.bind(se.ILayerPlugin).to(W6).inRequestScope();Pt.bind(se.ILayerPlugin).to(F7).inRequestScope();Pt.bind(se.ILayerPlugin).to(uk).inRequestScope();Pt.bind(se.ILayerPlugin).to(ok).inRequestScope();Pt.bind(se.ILayerPlugin).to(K6).inRequestScope();Pt.bind(se.ILayerPlugin).to(ak).inRequestScope();Pt.bind(se.ILayerPlugin).to(O7).inRequestScope();Pt.bind(se.ILayerPlugin).to(J6).inRequestScope();Pt.bind(se.ILayerPlugin).to(tk).inRequestScope();Pt.bind(se.ILayerPlugin).to(G6).inRequestScope();function sk(e,t){var n=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,r=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(n||r)&&(t||(t=document),!!t)){var i=t.head||t.getElementsByTagName("head")[0];if(!i){i=t.createElement("head");var a=t.body||t.getElementsByTagName("body")[0];a?a.parentNode.insertBefore(i,a):t.documentElement.appendChild(i)}var o=t.createElement("style");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),i.appendChild(o),o}}sk(`.l7-marker-container {
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
`);function lk(e){return i0("/customHost/download",{scriptType:e},{customDev:!0})}function ck(e){return i0("/customHost/transfer",{subLink:e},{customDev:!0})}const fk=st("br",null,null,-1),hk=st("b",null,"两次",-1),dk=zt({__name:"windows",emits:["transfer","downloadScript"],setup(e,{emit:t}){const n=t,r=$e("");return(i,a)=>{const o=Ys,u=un,s=Wt,l=a0,c=o0;return Ze(),St(Nt,null,[U(o,{level:4},{default:V(()=>[ue("第一步：下载脚本并运行")]),_:1}),U(u,null,{default:V(()=>[ue(" 点击下方按钮下载脚本，然后右键脚本选择管理员身份打开，脚本将自动为你设置好一个临时的host配置环境。"),fk]),_:1}),U(s,{"mb-2":"",type:"primary",onClick:a[0]||(a[0]=f=>n("downloadScript","bat"))},{default:V(()=>[ue("下载脚本")]),_:1}),U(o,{level:4},{default:V(()=>[ue("第二步：转换订阅链接")]),_:1}),U(u,null,{default:V(()=>[ue(" 复制你要转换的订阅链接到下方，点击按钮后将自动转换订阅链接并复制转换后的订阅链接 ")]),_:1}),U(c,null,{default:V(()=>[U(l,{value:be(r),"onUpdate:value":a[1]||(a[1]=f=>Qt(r)?r.value=f:null),placeholder:"请输入订阅链接开始转换"},null,8,["value"])]),_:1}),U(s,{"mb-2":"",type:"primary",onClick:a[2]||(a[2]=f=>n("transfer",be(r)))},{default:V(()=>[ue("转换并复制")]),_:1}),U(o,{level:4},{default:V(()=>[ue("第三步：导入订阅")]),_:1}),U(u,null,{default:V(()=>[ue(" 参考对应软件的教程中的导入订阅步骤下的 — 复制订阅方法，将第二步复制的订阅链接导入到软件中，再进行进行教程的后续操作即可。 ")]),_:1}),U(o,{level:4},{default:V(()=>[ue("收尾")]),_:1}),U(u,null,{default:V(()=>[ue(" 订阅成功后，回到窗口并直接会车"),hk,ue("退出脚本，这样脚本会恢复本机的host文件，让脚本运行对操作系统没有任何副作用。 ")]),_:1})],64)}}}),vk=zt({__name:"macos",emits:["transfer","downloadScript"],setup(e,{emit:t}){const n=t,r=$e("");return(i,a)=>{const o=Ys,u=un,s=ri,l=Wt,c=a0,f=o0;return Ze(),St(Nt,null,[U(o,{level:4},{default:V(()=>[ue("第一步：下载脚本并运行")]),_:1}),U(u,null,{default:V(()=>[ue(" 点击下方按钮下载脚本，然后进入脚本所在目录执行如下命令，脚本将自动为你设置好一个临时的host配置环境. ")]),_:1}),U(u,null,{default:V(()=>[U(s,{code:"",copyable:""},{default:V(()=>[ue("sudo bash host.sh")]),_:1})]),_:1}),U(u,null,{default:V(()=>[ue(" tip：该命令执行时系统会要求输入密码。 ")]),_:1}),U(l,{"mb-2":"",type:"primary",onClick:a[0]||(a[0]=h=>n("downloadScript","shell"))},{default:V(()=>[ue("下载脚本")]),_:1}),U(o,{level:4},{default:V(()=>[ue("第二步：转换订阅链接")]),_:1}),U(u,null,{default:V(()=>[ue(" 复制你要转换的订阅链接到下方，点击按钮后将自动转换订阅链接并复制转换后的订阅链接 ")]),_:1}),U(f,null,{default:V(()=>[U(c,{value:be(r),"onUpdate:value":a[1]||(a[1]=h=>Qt(r)?r.value=h:null),placeholder:"请输入订阅链接开始转换"},null,8,["value"])]),_:1}),U(l,{"mb-2":"",type:"primary",onClick:a[2]||(a[2]=h=>n("transfer",be(r)))},{default:V(()=>[ue("转换并复制")]),_:1}),U(o,{level:4},{default:V(()=>[ue("第三步：导入订阅")]),_:1}),U(u,null,{default:V(()=>[ue(" 参考对应软件的教程中的导入订阅步骤下的 — 复制订阅方法，将第二步复制的订阅链接导入到软件中，再进行进行教程的后续操作即可。 ")]),_:1}),U(o,{level:4},{default:V(()=>[ue("收尾")]),_:1}),U(u,null,{default:V(()=>[ue(" 订阅成功后，回到窗口并直接会车退出脚本，这样脚本会恢复本机的host文件，让脚本运行对操作系统没有任何副作用。 ")]),_:1})],64)}}}),pk={},gk=st("b",null,"粘贴到窗口并回车",-1),mk=st("b",null,"订阅文件存放的具体路径",-1),yk=st("b",null,"订阅文件导入订阅",-1),_k=st("b",null,"粘贴到窗口并回车",-1),xk=st("b",null,"订阅文件导入订阅",-1);function bk(e,t){const n=un,r=Ys,i=br;return Ze(),Ct(i,null,{default:V(()=>[U(n,null,{default:V(()=>[ue(" 手机、平板等这类不容易修改host的设备，需要借助windows系统和macos系统来生成一个订阅文件，并将订阅文件传输到手机、平板端，通过订阅文件来导入订阅。 ")]),_:1}),U(r,{level:4},{default:V(()=>[ue("借助windows")]),_:1}),U(n,null,{default:V(()=>[ue(" 参考windows教程，执行到第二步—即复制了转换之后的订阅链接后，回到命令窗口（也称黑窗）右键，将复制的订阅链接"),gk,ue("，窗口会开始下载订阅内容并 在下载完毕后告知你"),mk,ue("，请将订阅文件传输到手机或平板端，然后继续参考对应软件的教程中的通过 "),yk,ue("。 ")]),_:1}),U(r,{level:4},{default:V(()=>[ue("借助MacOS")]),_:1}),U(n,null,{default:V(()=>[ue(" 参考MacOS教程，执行到第二步—即复制了转换之后的订阅链接后，将复制的订阅链接"),_k,ue("，窗口会开始下载订阅内容并在当前目录下存放为 sub.txt 文件， 请将该文件传输到手机或平板端，然后继续参考对应软件的教程中的通过 "),xk,ue("。 ")]),_:1})]),_:1})}const Sk=oa(pk,[["render",bk]]),Ak=st("blockquote",null,[ue(" 本方法为借助脚本自定义host来实现订阅链接只针对本机可用，没有副作用。"),st("b",null,"操作前请关闭所有代理"),ue("。 ")],-1),Go=zt({__name:"index",setup(e){const t=Qa();async function n(a){await lk(a),t.success("下载成功")}const r=$e(!1);async function i(a){const{data:o}=await ck(a);t.success("转换成功");const{toClipboard:u}=ha();try{await u(o),t.success("复制成功")}catch{t.warning("复制失败，可能当前浏览器不支持 😭")}}return(a,o)=>{const u=Wt,s=u0,l=s0,c=br,f=Oy;return Ze(),St(Nt,null,[U(u,{block:"",onClick:o[0]||(o[0]=h=>r.value=!0)},{icon:V(()=>[U(be(Py))]),default:V(()=>[ue(" 无法订阅？点我 ")]),_:1}),U(f,{title:"自定义host订阅",open:be(r),"onUpdate:open":o[1]||(o[1]=h=>Qt(r)?r.value=h:null),width:"520px"},{default:V(()=>[U(c,null,{default:V(()=>[Ak,U(l,null,{default:V(()=>[U(s,{key:"1",tab:"windows系统"},{default:V(()=>[U(dk,{onDownloadScript:n,onTransfer:i})]),_:1}),U(s,{key:"2",tab:"MacOS类Linux系统"},{default:V(()=>[U(vk,{onDownloadScript:n,onTransfer:i})]),_:1}),U(s,{key:"3",tab:"其他（手机、平板等）"},{default:V(()=>[U(Sk)]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64)}}}),_a=zt({__name:"clash-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=$e(!1),a=$e(!1),o=$e(""),u=$e("active");bo(a,d=>{d&&(u.value="loading",l().then(v=>{o.value=`clash://install-config?url=${encodeURIComponent(`${n.link[0]}${v}`)}`,u.value="active"}))});async function s(){const d=await l();window.location.href=`clash://install-config?url=${encodeURIComponent(`${n.link[0]}${d}`)}`}async function l(){const{data:d}=await Co();return`&token=${d}`}const c=$e(""),f=$e(!1);async function h(d){const v=await l();if(c.value=d+v,Gi)f.value=!0;else{const{toClipboard:p}=ha();try{await p(c.value),Ja.success("复制成功")}catch{Ja.warning("复制失败，可能当前浏览器不支持 😭")}}}return ua(()=>{i.value=!0}),So(()=>{i.value=!1}),(d,v)=>{const p=Ao("router-link"),g=Mo,m=un,_=ko,y=Wt,x=Nn,b=la,M=Io;return Ze(),St(Nt,null,[U(b,{title:"clash订阅",open:!0,width:"350px","mask-closable":!1,"destroy-on-close":"",onCancel:v[3]||(v[3]=C=>r("close"))},{footer:V(()=>[]),default:V(()=>[U(g,null,{description:V(()=>[ue(" 如果开启了订阅保护可能导致订阅失败，详细请访问："),U(p,{to:"/account/setting?key=5"},{default:V(()=>[ue(" 订阅保护 ")]),_:1})]),_:1}),U(x,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:V(()=>[U(_,{open:be(f),"onUpdate:open":v[1]||(v[1]=C=>Qt(f)?f.value=C:null),title:"手动复制",trigger:"click"},{content:V(()=>[U(m,{copyable:""},{default:V(()=>[ue(xn(be(c)),1)]),_:1}),st("a",{onClick:v[0]||(v[0]=C=>f.value=!1)},"关闭")]),_:1},8,["open"]),(Ze(!0),St(Nt,null,Eo(e.link,(C,L)=>(Ze(),Ct(y,{key:L,size:"large",block:"",onClick:N=>h(C)},{icon:V(()=>[U(be(wo))]),default:V(()=>[ue(" 复制订阅链接 "+xn(L+1),1)]),_:2},1032,["onClick"]))),128)),U(y,{size:"large",block:"",onClick:v[2]||(v[2]=C=>a.value=!0)},{icon:V(()=>[U(be(To))]),default:V(()=>[ue(" 二维码导入 ")]),_:1}),U(y,{size:"large",block:!0,onClick:s},{icon:V(()=>[U(be(Xs))]),default:V(()=>[ue(" 一键导入到clash ")]),_:1}),U(Go)]),_:1})]),_:1}),U(b,{open:be(a),"onUpdate:open":v[4]||(v[4]=C=>Qt(a)?a.value=C:null),width:310,title:"扫描二维码订阅clash"},{footer:V(()=>[]),default:V(()=>[U(M,{size:260,status:be(u)||"active",value:be(o)},null,8,["status","value"])]),_:1},8,["open"])],64)}}}),Ek=st("blockquote",null," singbox不支持二维码导入，你需要将扫描后的结果复制到浏览器打开 ",-1),Wo=zt({__name:"sing-box-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=Qa(),a=$e(!1),o=$e(!1),u=$e("active"),s=$e("");bo(o,v=>{v&&(u.value="loading",c().then(p=>{s.value=`sing-box://import-remote-profile?url=${n.link[0]}&${p}#米白云`,u.value="active"}))});async function l(){c().then(v=>{window.location.href=`sing-box://import-remote-profile?url=${n.link[0]}&${v}#米白云`})}async function c(){const{data:v}=await Co();return`token=${v}`}const f=$e(""),h=$e(!1);async function d(v){const p=await c();if(f.value=v+"&"+p,Gi)h.value=!0;else{const{toClipboard:g}=ha();try{await g(f.value),i.success("复制成功")}catch{i.warning("复制失败，可能当前浏览器不支持 😭")}}}return ua(()=>{a.value=!0}),So(()=>{a.value=!1}),(v,p)=>{const g=Ao("router-link"),m=Mo,_=un,y=ko,x=Wt,b=Nn,M=la,C=Io;return Ze(),St(Nt,null,[U(M,{title:"sing-box订阅",open:!0,width:"350px","destroy-on-close":"","mask-closable":!1,onCancel:p[3]||(p[3]=L=>r("close"))},{footer:V(()=>[]),default:V(()=>[U(m,null,{description:V(()=>[ue(" 如果开启了订阅保护可能导致订阅失败，详细请访问："),U(g,{to:"/account/setting?key=5"},{default:V(()=>[ue(" 订阅保护 ")]),_:1})]),_:1}),U(b,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:V(()=>[U(y,{open:be(h),"onUpdate:open":p[1]||(p[1]=L=>Qt(h)?h.value=L:null),title:"手动复制",trigger:"click"},{content:V(()=>[U(_,{copyable:""},{default:V(()=>[ue(xn(be(f)),1)]),_:1}),st("a",{onClick:p[0]||(p[0]=L=>h.value=!1)},"关闭")]),_:1},8,["open"]),(Ze(!0),St(Nt,null,Eo(e.link,(L,N)=>(Ze(),Ct(x,{key:N,size:"large",block:"",onClick:I=>d(L)},{icon:V(()=>[U(be(wo))]),default:V(()=>[ue(" 复制订阅链接 "+xn(N+1),1)]),_:2},1032,["onClick"]))),128)),U(x,{size:"large",block:"",onClick:p[2]||(p[2]=L=>o.value=!0)},{icon:V(()=>[U(be(To))]),default:V(()=>[ue(" 二维码导入 ")]),_:1}),U(x,{size:"large",block:!0,onClick:l},{icon:V(()=>[U(be(Xs))]),default:V(()=>[ue(" 一键导入到sing-box ")]),_:1}),U(Go)]),_:1})]),_:1}),U(M,{open:be(o),"onUpdate:open":p[4]||(p[4]=L=>Qt(o)?o.value=L:null),width:310,title:"扫描二维码订阅singbox"},{footer:V(()=>[]),default:V(()=>[Ek,U(C,{size:260,value:be(s)},null,8,["value"])]),_:1},8,["open"])],64)}}}),Ul=zt({__name:"v2ray-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=$e(!1),a=$e(!1),o=$e(""),u=$e("active");bo(a,h=>{h&&(u.value="loading",s().then(d=>{o.value=`${encodeURIComponent(`${n.link[0]}${d}`)}`,u.value="active"}))});async function s(){const{data:h}=await Co();return`&token=${h}`}const l=$e(""),c=$e(!1);async function f(h){const d=await s();if(l.value=h+d,Gi)c.value=!0;else{const{toClipboard:v}=ha();try{await v(l.value),Ja.success("复制成功")}catch{Ja.warning("复制失败，可能当前浏览器不支持 😭")}}}return ua(()=>{i.value=!0}),So(()=>{i.value=!1}),(h,d)=>{const v=Ao("router-link"),p=Mo,g=un,m=ko,_=Wt,y=Nn,x=la,b=Io;return Ze(),St(Nt,null,[U(x,{title:"v2ray订阅",open:!0,width:"350px","mask-closable":!1,"destroy-on-close":"",onCancel:d[3]||(d[3]=M=>r("close"))},{footer:V(()=>[]),default:V(()=>[U(p,null,{description:V(()=>[ue(" 如果开启了订阅保护可能导致订阅失败，详细请访问："),U(v,{to:"/account/setting?key=5"},{default:V(()=>[ue(" 订阅保护 ")]),_:1})]),_:1}),U(y,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:V(()=>[U(m,{open:be(c),"onUpdate:open":d[1]||(d[1]=M=>Qt(c)?c.value=M:null),title:"手动复制",trigger:"click"},{content:V(()=>[U(g,{copyable:""},{default:V(()=>[ue(xn(be(l)),1)]),_:1}),st("a",{onClick:d[0]||(d[0]=M=>c.value=!1)},"关闭")]),_:1},8,["open"]),(Ze(!0),St(Nt,null,Eo(e.link,(M,C)=>(Ze(),Ct(_,{key:C,size:"large",block:"",onClick:L=>f(M)},{icon:V(()=>[U(be(wo))]),default:V(()=>[ue(" 复制订阅链接 "+xn(C+1),1)]),_:2},1032,["onClick"]))),128)),U(_,{size:"large",block:"",onClick:d[2]||(d[2]=M=>a.value=!0)},{icon:V(()=>[U(be(To))]),default:V(()=>[ue(" 二维码导入 ")]),_:1}),U(Go)]),_:1})]),_:1}),U(x,{open:be(a),"onUpdate:open":d[4]||(d[4]=M=>Qt(a)?a.value=M:null),width:310,title:"扫描二维码订阅v2ray"},{footer:V(()=>[]),default:V(()=>[U(b,{size:260,status:be(u)||"active",value:be(o)},null,8,["status","value"])]),_:1},8,["open"])],64)}}}),qt=zt({__name:"sub-button",props:{buttonText:{type:String,default:!0},hidden:{type:Boolean,required:!0},tooltip:{type:String,default:"请先购买套餐"}},emits:["click"],setup(e,{emit:t}){const n=t;return(r,i)=>{const a=Wt,o=ca;return e.hidden?(Ze(),Ct(o,{key:0,title:e.tooltip,trigger:["click","hover"]},{default:V(()=>[U(a,{type:"primary",disabled:""},{default:V(()=>[ue(xn(e.buttonText),1)]),_:1})]),_:1},8,["title"])):(Ze(),Ct(a,{key:1,type:"primary",onClick:i[0]||(i[0]=u=>n("click"))},{default:V(()=>[ue(xn(e.buttonText),1)]),_:1}))}}}),Ck=zt({__name:"windows",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=Zs({scriptUrl:Ws(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),r=$e(!1),i=$e(),a=sa();function o(){a.value=_a,i.value=t.link.clash.split(","),r.value=!0}function u(){a.value=Wo,i.value=t.link.singbox.split(","),r.value=!0}function s(){a.value=Ul,i.value=t.link.v2ray.split(","),r.value=!0}return(l,c)=>{const f=ri,h=un,d=fa,v=Nn,p=Wt,g=A0,m=ca,_=br;return Ze(),St(Nt,null,[U(_,null,{default:V(()=>[U(h,null,{default:V(()=>[ue(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),U(f,{strong:""},{default:V(()=>[ue(" 第一个 ")]),_:1}),ue("。 ")]),_:1}),U(h,null,{default:V(()=>[ue(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),U(d,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 订阅按钮 ")]),_:1}),U(v,{size:"large",wrap:""},{default:V(()=>[U(qt,{hidden:e.link.invisible,onClick:o,"button-text":"clash订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:s,"button-text":"v2ray订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:u,"button-text":"sing-box订阅"},null,8,["hidden"])]),_:1}),U(d,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 使用教程 ")]),_:1}),U(h,null,{default:V(()=>[U(v,{size:"large",wrap:""},{default:V(()=>[U(p,{type:"default",href:"https://docs.mebi.me/docs/clash-for-windows"},{icon:V(()=>[U(be(n),{type:"icon-clash"})]),default:V(()=>[ue(" Clash教程 ")]),_:1}),U(m,{title:"暂未开放"},{default:V(()=>[U(p,{type:"dashed"},{icon:V(()=>[U(g)]),default:V(()=>[ue(" sing-box教程 ")]),_:1})]),_:1}),U(p,{type:"default",href:"https://docs.mebi.me/docs/clash-verge-windows"},{icon:V(()=>[U(be(n),{type:"icon-clash"})]),default:V(()=>[ue(" Clash Verge教程 ")]),_:1}),U(p,{type:"default",href:"https://docs.mebi.me/docs/v2rayn-for-windows"},{default:V(()=>[ue(" V2rayN教程 ")]),_:1})]),_:1})]),_:1})]),_:1}),be(r)?(Ze(),Ct(ni(be(a)),{key:0,link:be(i),onClose:c[0]||(c[0]=y=>r.value=!1)},null,40,["link"])):Jn("",!0)],64)}}}),wk={name:"SingBox"},Tk={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 80 80","enable-background":"new 0 0 80 80","xml:space":"preserve"},Mk=st("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
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
ZTp0aW1lc3RhbXAAMjAyNC0wMy0yNlQwNzoxMjo0MyswMDowMF8kDtkAAAAASUVORK5CYII=`},null,-1),kk=[Mk];function Ik(e,t,n,r,i,a){return Ze(),St("svg",Tk,kk)}const Lk=oa(wk,[["render",Ik]]),Rk={name:"SingBox"},Pk={id:"Layer_1",style:{"margin-right":"0.4em"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 60 60","enable-background":"new 0 0 60 60","xml:space":"preserve"},Ok=st("image",{id:"image0",width:"80",height:"80",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
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
RU5ErkJggg==`},null,-1),Fk=[Ok];function Dk(e,t,n,r,i,a){return Ze(),St("svg",Pk,Fk)}const Nk=oa(Rk,[["render",Dk]]),Bk=zt({__name:"shadowrocket-sub",props:{link:{type:Array,default:()=>["订阅链接获取失败，请尝试刷新页面再试"]}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=Qa(),a=$e(!1),o=$e(!1),u=$e("active"),s=$e("");async function l(){const{data:v}=await Co();return`token=${v}`}bo(o,v=>{v&&(u.value="loading",l().then(p=>{s.value=`sub://${btoa(n.link[0]+"&"+p)}#米白云`,u.value="active"}))});const c=$e(""),f=$e(!1);async function h(v){const p=await l();if(c.value=v+"&"+p,Gi)f.value=!0;else{const{toClipboard:g}=ha();try{await g(c.value),i.success("复制成功")}catch{i.warning("复制失败，可能当前浏览器不支持 😭")}}}function d(){if(!Gi){Qa().warning("检测你当前不是ios设备，无法导入");return}l().then(v=>{window.location.href=`shadowrocket://add/sub://${btoa(n.link[0]+"&"+v)}?remarks=米白云`})}return ua(()=>{a.value=!0}),So(()=>{a.value=!1}),(v,p)=>{const g=Ao("router-link"),m=Mo,_=un,y=ko,x=Wt,b=Nn,M=la,C=Io;return Ze(),St(Nt,null,[U(M,{title:"小火箭订阅",open:!0,width:"350px","mask-closable":!1,"destroy-on-close":"",onCancel:p[3]||(p[3]=L=>r("close"))},{footer:V(()=>[]),default:V(()=>[U(m,null,{description:V(()=>[ue(" 如果开启了订阅保护可能导致订阅失败，详细请访问："),U(g,{to:"/account/setting?key=5"},{default:V(()=>[ue(" 订阅保护 ")]),_:1})]),_:1}),U(b,{size:"large","w-75":"","mt-5":"",direction:"vertical"},{default:V(()=>[U(y,{open:be(f),"onUpdate:open":p[1]||(p[1]=L=>Qt(f)?f.value=L:null),title:"手动复制",trigger:"click"},{content:V(()=>[U(_,{copyable:""},{default:V(()=>[ue(xn(be(c)),1)]),_:1}),st("a",{onClick:p[0]||(p[0]=L=>f.value=!1)},"关闭")]),_:1},8,["open"]),(Ze(!0),St(Nt,null,Eo(e.link,(L,N)=>(Ze(),Ct(x,{key:N,size:"large",block:"",onClick:I=>h(L)},{icon:V(()=>[U(be(wo))]),default:V(()=>[ue(" 复制订阅链接 "+xn(N+1),1)]),_:2},1032,["onClick"]))),128)),U(x,{size:"large",block:"",onClick:p[2]||(p[2]=L=>o.value=!0)},{icon:V(()=>[U(be(To))]),default:V(()=>[ue(" 二维码导入 ")]),_:1}),U(x,{size:"large",block:!0,onClick:d},{icon:V(()=>[U(be(Xs))]),default:V(()=>[ue(" 一键导入到Shadowrocket ")]),_:1}),U(Go)]),_:1})]),_:1}),U(M,{open:be(o),"onUpdate:open":p[4]||(p[4]=L=>Qt(o)?o.value=L:null),width:310,title:"扫描二维码订阅小火箭"},{footer:V(()=>[]),default:V(()=>[U(C,{size:260,value:be(s)},null,8,["value"]),U(x,{type:"primary",block:""},{default:V(()=>[ue(" 请使用小火箭软件扫码 ")]),_:1})]),_:1},8,["open"])],64)}}}),Uk=zt({__name:"ios",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=Zs({scriptUrl:Ws(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),r=$e(!1),i=$e(),a=sa();function o(){a.value=_a,i.value=t.link.clash.split(","),r.value=!0}function u(){a.value=Bk,i.value=t.link.shadowrocket.split(","),r.value=!0}function s(){a.value=Wo,i.value=t.link.singbox.split(","),r.value=!0}return(l,c)=>{const f=ri,h=un,d=fa,v=Nn,p=A0,g=Wt,m=Nk,_=Lk,y=ca,x=br;return Ze(),St(Nt,null,[U(x,null,{default:V(()=>[U(h,null,{default:V(()=>[ue(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用 "),U(f,{strong:""},{default:V(()=>[ue(" 第一个 ")]),_:1}),ue(" 。 ")]),_:1}),U(h,null,{default:V(()=>[ue(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),U(d,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 订阅按钮 ")]),_:1}),U(v,{size:["large","small"],wrap:""},{default:V(()=>[U(qt,{hidden:e.link.invisible,onClick:s,"button-text":"sing-box订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:o,"button-text":"clash订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:u,"button-text":"Shadowrocket订阅"},null,8,["hidden"])]),_:1}),U(d,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 使用教程 ")]),_:1}),U(h,null,{default:V(()=>[U(v,{size:"large",wrap:""},{default:V(()=>[U(g,{type:"default",href:"https://docs.mebi.me/docs/singbox-for-ios"},{icon:V(()=>[U(p)]),default:V(()=>[ue(" sing-box ")]),_:1}),U(g,{type:"default",href:"https://docs.mebi.me/docs/shadowrocket-for-ios"},{icon:V(()=>[U(m)]),default:V(()=>[ue(" Shadowrocket ")]),_:1}),U(g,{type:"default",href:"https://docs.mebi.me/docs/stash-for-ios"},{icon:V(()=>[U(_)]),default:V(()=>[ue(" Stash ")]),_:1}),U(y,{title:"暂不支持"},{default:V(()=>[U(g,{type:"dashed"},{icon:V(()=>[U(be(n),{type:"icon-quantumultx"})]),default:V(()=>[ue(" QuantumultX ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),be(r)?(Ze(),Ct(ni(be(a)),{key:0,link:be(i),onClose:c[0]||(c[0]=b=>r.value=!1)},null,40,["link"])):Jn("",!0)],64)}}}),zk=zt({__name:"android",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=$e(!1),r=$e(),i=sa();function a(){i.value=_a,r.value=t.link.clash.split(","),n.value=!0}function o(){i.value=Wo,r.value=t.link.singbox.split(","),n.value=!0}function u(){i.value=Ul,r.value=t.link.v2ray.split(","),n.value=!0}return(s,l)=>{const c=ri,f=un,h=fa,d=Nn,v=Wt,p=ca,g=br;return Ze(),St(Nt,null,[U(g,null,{default:V(()=>[U(f,null,{default:V(()=>[ue(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),U(c,{strong:""},{default:V(()=>[ue(" 第一个 ")]),_:1}),ue("。 ")]),_:1}),U(f,null,{default:V(()=>[ue(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),U(h,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 订阅按钮 ")]),_:1}),U(d,{size:"large",wrap:""},{default:V(()=>[U(qt,{hidden:e.link.invisible,onClick:a,"button-text":"clash订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:u,"button-text":"v2ray订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:o,"button-text":"sing-box订阅"},null,8,["hidden"])]),_:1}),U(h,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 使用教程 ")]),_:1}),U(f,null,{default:V(()=>[U(d,{size:"large",wrap:""},{default:V(()=>[U(v,{type:"default",href:"https://docs.mebi.me/docs/clash-for-android"},{default:V(()=>[ue(" Clash教程 ")]),_:1}),U(p,{title:"暂未开放"},{default:V(()=>[U(v,{type:"dashed"},{default:V(()=>[ue(" sing-box教程 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),be(n)?(Ze(),Ct(ni(be(i)),{key:0,link:be(r),onClose:l[0]||(l[0]=m=>n.value=!1)},null,40,["link"])):Jn("",!0)],64)}}}),$k=zt({__name:"linux",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=$e(!1),r=$e(),i=sa();function a(){i.value=_a,r.value=t.link.clash.split(","),n.value=!0}return(o,u)=>{const s=ri,l=un,c=fa,f=Nn,h=Wt,d=br;return Ze(),St(Nt,null,[U(d,null,{default:V(()=>[U(l,null,{default:V(()=>[ue(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),U(s,{strong:""},{default:V(()=>[ue(" 第一个 ")]),_:1}),ue("。 ")]),_:1}),U(l,null,{default:V(()=>[ue(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),U(c,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 订阅按钮 ")]),_:1}),U(f,{size:["large","middle"]},{default:V(()=>[U(qt,{hidden:e.link.invisible,onClick:a,"button-text":"clash订阅"},null,8,["hidden"])]),_:1}),U(c,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 使用教程 ")]),_:1}),U(l,null,{default:V(()=>[U(f,{size:"large"},{default:V(()=>[U(h,{type:"default",href:"https://docs.mebi.me/docs/cfw-for-linux"},{default:V(()=>[ue(" Clash教程 ")]),_:1})]),_:1})]),_:1})]),_:1}),be(n)?(Ze(),Ct(ni(be(i)),{key:0,link:be(r),onClose:u[0]||(u[0]=v=>n.value=!1)},null,40,["link"])):Jn("",!0)],64)}}}),Vk=zt({__name:"macos",props:{link:{type:Object,default:()=>{}}},setup(e){const t=e,n=$e(!1),r=$e(),i=sa();function a(){i.value=_a,r.value=t.link.clash.split(","),n.value=!0}function o(){i.value=Wo,r.value=t.link.singbox.split(","),n.value=!0}function u(){i.value=Ul,r.value=t.link.v2ray.split(","),n.value=!0}return(s,l)=>{const c=ri,f=un,h=fa,d=Nn,v=Wt,p=ca,g=br;return Ze(),St(Nt,null,[U(g,null,{default:V(()=>[U(f,null,{default:V(()=>[ue(" 请选择你要使用的软件，并参考相关教程。如果无法选择，请使用"),U(c,{strong:""},{default:V(()=>[ue(" 第一个 ")]),_:1}),ue("。 ")]),_:1}),U(f,null,{default:V(()=>[ue(" 软件下载方式就在教程文档之中。订阅链接就在本页的右侧或下方。 ")]),_:1}),U(h,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 订阅按钮 ")]),_:1}),U(d,{size:"large",wrap:""},{default:V(()=>[U(qt,{hidden:e.link.invisible,onClick:a,"button-text":"clash订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:o,"button-text":"sing-box订阅"},null,8,["hidden"]),U(qt,{hidden:e.link.invisible,onClick:u,"button-text":"v2ray订阅"},null,8,["hidden"])]),_:1}),U(h,{style:{"border-color":"#7cb305"},dashed:""},{default:V(()=>[ue(" 使用教程 ")]),_:1}),U(f,null,{default:V(()=>[U(d,{size:"large",wrap:""},{default:V(()=>[U(v,{type:"default",href:"https://docs.mebi.me/docs/clashx-for-macos"},{default:V(()=>[ue(" ClashX教程 ")]),_:1}),U(v,{type:"default",href:"https://docs.mebi.me/docs/clash-verge-macos"},{default:V(()=>[ue(" Clash Verge教程 ")]),_:1}),U(v,{type:"default",href:"https://docs.mebi.me/docs/v2rayu-for-macos"},{default:V(()=>[ue(" V2rayU教程 ")]),_:1}),U(p,{title:"暂未开放"},{default:V(()=>[U(v,{type:"dashed"},{default:V(()=>[ue(" sing-box教程 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),be(n)?(Ze(),Ct(ni(be(i)),{key:0,link:be(r),onClose:l[0]||(l[0]=m=>n.value=!1)},null,40,["link"])):Jn("",!0)],64)}}}),jk=zt({__name:"index",setup(e){const t=Zs({scriptUrl:Ws(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),n=$e("1"),r=$e(),i=$e(!0);async function a(){const{data:o}=await Vy();i.value=!1,r.value=o}return ua(()=>{a()}),(o,u)=>{const s=u0,l=s0,c=Uy;return Ze(),Ct(c,{loading:be(i)},{title:V(()=>[U(be(t),{type:"icon-jiaocheng"}),ue(" 使用教程 ")]),default:V(()=>[U(l,{activeKey:be(n),"onUpdate:activeKey":u[0]||(u[0]=f=>Qt(n)?n.value=f:null)},{default:V(()=>[U(s,{key:"1",disabled:be(n)==="0"},{tab:V(()=>[st("span",null,[U(be(Fy)),ue(" 桌面系统 ")])]),default:V(()=>[U(Ck,{link:be(r)},null,8,["link"])]),_:1},8,["disabled"]),U(s,{key:"2",disabled:be(n)==="0"},{tab:V(()=>[st("span",null,[U(be(Dy)),ue(" iOS系统 ")])]),default:V(()=>[U(Uk,{link:be(r)},null,8,["link"])]),_:1},8,["disabled"]),U(s,{key:"3",disabled:be(n)==="0"},{tab:V(()=>[st("span",null,[U(be(Ny)),ue(" 安卓系统 ")])]),default:V(()=>[U(zk,{link:be(r)},null,8,["link"])]),_:1},8,["disabled"]),U(s,{key:"4",disabled:be(n)==="0"},{tab:V(()=>[st("span",null,[U(be(By)),ue(" MacOS系统 ")])]),default:V(()=>[U(Vk,{link:be(r)},null,8,["link"])]),_:1},8,["disabled"]),U(s,{key:"5",disabled:be(n)==="0"},{tab:V(()=>[st("span",null,[U(be(t),{type:"icon-linux"}),ue(" Linux系统 ")])]),default:V(()=>[U($k,{link:be(r)},null,8,["link"])]),_:1},8,["disabled"])]),_:1},8,["activeKey"])]),_:1},8,["loading"])}}}),Hk={class:"steps-action"},Gk=zt({__name:"index",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=t,r=$e(0),i={0:uy,1:jk,2:sy},a=ly(()=>i[r.value]);function o(){r.value++}function u(){r.value--}const s=[{title:"第一步",description:"购买套餐"},{title:"第二步",description:"下载软件并导入订阅"},{title:"第三步",description:"使用"}],l=s.map(f=>({key:f.title,title:f.title,description:f.description}));function c(){n("close")}return(f,h)=>{const d=zy,v=Wt,p=la;return Ze(),Ct(p,{title:"快捷使用教程",open:e.visible,"mask-closable":!1,centered:!0,footer:null,width:800,onCancel:c},{default:V(()=>[U(d,{current:be(r),"onUpdate:current":h[0]||(h[0]=g=>Qt(r)?r.value=g:null),items:be(l)},null,8,["current","items"]),st("div",null,[(Ze(),Ct(ni(be(a))))]),st("div",Hk,[be(r)<s.length-1?(Ze(),Ct(v,{key:0,type:"primary",onClick:o},{default:V(()=>[ue(" 下一步 ")]),_:1})):Jn("",!0),be(r)===s.length-1?(Ze(),Ct(v,{key:1,type:"primary",onClick:h[1]||(h[1]=g=>n("close"))},{default:V(()=>[ue(" 完成 ")]),_:1})):Jn("",!0),be(r)>0?(Ze(),Ct(v,{key:2,style:{"margin-left":"8px"},onClick:u},{default:V(()=>[ue(" 上一步 ")]),_:1})):Jn("",!0)])]),_:1},8,["open"])}}}),Wk=oa(Gk,[["__scopeId","data-v-69d68a34"]]),tI=Object.freeze(Object.defineProperty({__proto__:null,default:Wk},Symbol.toStringTag,{value:"Module"}));export{jk as _,tI as i,Wk as t,ha as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
