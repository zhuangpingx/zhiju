export default function HomePage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0f",color:"#e8e8f0",fontFamily:"sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px 20px"}}>
      <div style={{fontSize:48,marginBottom:16}}>⚡</div>
      <h1 style={{fontSize:48,fontWeight:900,background:"linear-gradient(90deg,#a78bfa,#60a5fa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:16}}>智具集</h1>
      <p style={{fontSize:20,color:"#888",marginBottom:32}}>AI工具交换平台 · 即将上线</p>
      <p style={{fontSize:14,color:"#555"}}>发现 & 分享普通人也能用的AI工具</p>
    </main>
  );
}
