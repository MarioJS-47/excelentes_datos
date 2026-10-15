import { useState } from 'react';
import './App.css';

function App() {

    const [vista, setVista] = useState('home');
    const [confirmacion, setConfirmacion] = useState(false);

    const controlSubmit = (event) => {
      event.preventDefault();
      setConfirmacion(true);
    };

    const serviceList = [
      { id: 1, 
        imagen: "/ExcelS1.jpg", 
        titulo: "Desarrollo de Modelos Académicos y Prácticas de Excel", 
        descripcion: "Creacion de hojas de cálculo estructuradas, resolvemos de casos de estudio, simulaciones financieras y análisis de datos enfocados en proyectos escolares y universitarios." 
      },
      { id: 2,
        imagen: "/Service2.jpg",
        titulo: "Automatización de Procesos con Macros (VBA)",
        descripcion:"Optimizacion de archivos con macros personalizadas en VBA para eliminar tareas manuales repetitivas y unificar flujos de operaciones"
      },
      { id: 3,
        imagen: "/Service3.jpg",
        titulo: "Integración, Limpieza y Transformación de Datos (Power Query)",
        descripcion:"Consolidación y estructuración de múltiples fuentes de información corporativa mediante procesos ETL automatizados dentro de Excel."
      },
      { id: 4,
        imagen: "/Service4.jpg",
        titulo: "Migración y Unificación de Múltiples Archivos (Power Query Avanzado)",
        descripcion:"Soluciones automatizadas para centralizar cientos de reportes o bases de datos dispersas de sucursales en un único modelo unificado."
      },
      { id: 5,
        imagen: "/Service5.jpg",
        titulo: "Diseño de Formularios y Sistemas de Captura Corporativos (VBA)",
        descripcion:"Creación de interfaces de usuario (UserForms) con validación estricta de datos y restricciones de acceso para proteger información sensible de la empresa."
      },
      { id: 6,
        imagen: "/Service6.jpg",
        titulo: "Auditoría, Corrección y Blindaje de Hojas de Cálculo",
        descripcion:"Revisión profunda de libros de Excel empresariales para detectar errores lógicos, referencias circulares y establecer protecciones de seguridad a nivel de estructura y código."
      },
      { id: 7,
        imagen: "/Service7.jpg",
        titulo: "Automatización de Correos y Reportes Masivos (VBA + Outlook)",
        descripcion:"Conexión directa entre Excel y Outlook para enviar reportes gerenciales o estados de cuenta corporativos de forma automática con un solo clic."
      },
      { id: 8,
        imagen: "/Service8.jpg",
        titulo: "Creación de Plantillas Inteligentes y Escalables",
        descripcion:"Diseño desde cero de formatos reutilizables (cotizadores, factureros internos y planeadores) adaptados al crecimiento de un negocio local."
      },
      { id: 9,
        imagen: "/Service9.jpg",
        titulo: "Soluciones de Inventarios y Control Logístico para Comercios",
        descripcion:"Implementación de sistemas sencillos de entradas, salidas, kardex automatizado y control de stock impulsados por bases de datos tabulares en Excel."
      },
      { id: 10,
        imagen: "/  Service10.jpg",
        titulo: "Desarrollo de Paneles de Control y Métricas de Negocio (Dashboards)",
        descripcion:"Creación de tableros visuales e intuitivos para que pequeños emprendedores puedan ver sus ventas, gastos y ganancias de un vistazo sin complicaciones técnicas."
      },
    ];
    
    const renderContent = () => {
      switch (vista) {
        case 'solicitudes':
          return <div>
            <main>
              <form className="App-form" onSubmit={controlSubmit}>
                <div className="App-form-header">
                  <h2>¿Como podemos ayudarte?</h2>
                  <p>Compartenos tu necesidad y te contactaremos a la brevedad posible.</p> 
                </div>
                <label className="form-data-label">
                  <span>Nombre</span>
                  <input type="text" placeholder="Nombre" />
                </label>  
                <label className="form-data-label">
                  <span>Correo Electrónico</span>
                  <input type="email" placeholder="email@example.com" />
                </label>
                <label className="form-data-label">
                  <span>Telefono</span>
                  <input type="number" placeholder="XXX-XXX-XX-XX" />
                </label>
                <label className="form-data-label">
                  <span>Tipo de solicitud</span>
                  <select defaultValue="">
                    <option value="" disabled>Selecciona un tipo de solicitud</option>
                    <option value="solicitud1">Proyecto escolar</option>
                    <option value="solicitud2">Automatizacion empresarial</option>
                    <option value="solicitud3">Proyecto de negocio</option>
                    <option value="solicitud4">Otro</option>
                  </select>
                </label>
                <label className="form-data-label">
                  <span>Descripcion</span>
                  <textarea placeholder="Describe lo que necesitas"></textarea>
                </label>
                <div className="form-button">
                  <button type="submit">Enviar solicitud</button>
                </div>
              </form>
              {confirmacion && (
                <div className="confirmation" role="dialog" aria-modal="true">
                  <div className="confirmation-container">
                    <div className="text-confirmation">
                      <p className="title-confirmation">Recibimos tu solicitud exitosamente</p>
                      <p className="comment-confirmation">Te contactaremos a la brevedad posible</p>
                    </div>
                    <div className="button-confirmation">
                      <button type="button" onClick={() => setConfirmacion(false)}>Cerrar</button>
                    </div>  
                  </div>               
                </div>             
              )}              
            </main>
          </div>;
        case 'servicios': 
        return (
          <main>
            <div className="service-container">
              {serviceList.map((service) => (
                <div className="service-section" key={service.id}>
                  <div className="image-service">
                    <img src={service.imagen} alt={service.titulo} />
                  </div>
                  <div className="service-description">
                    <p className="service-title">{service.titulo}</p>
                    <p className="service-text">{service.descripcion}</p>
                  </div>                  
                </div>
              ))}
            </div>
          </main>
        );
        case 'contacto':
          return <div>
            <main>
              <div className="contact">
                <p className="contact-title">Contactanos para mas informacion</p>
                <div className="contact-container">
                  <div className="contact-descriptions">
                    <div className="contact-section">
                      <p className="contact-description">Telefono:</p>
                      <p className="contact-data">XXX-XXX-XX-XX</p>
                    </div>
                    <div className="contact-section">
                      <p className="contact-description">Correo:</p>
                      <p className="contact-data">excelentesdatos@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-hrs-container">
                    <p className="contact-hrs-title">Horarios de atencion</p>
                    <p className="contact-hrs">
                      <p>Lunes a Viernes</p>
                      <p>08:00 am a 06:00 pm</p>
                      <br></br>
                      <p>Sabado y Domingo</p>                  
                      <p>10:00 am a 02:00 pm</p>
                    </p>
                  </div>
                </div>  
              </div>
            </main>
          </div>;
        default:
          return <div>
            <main>
              <div className="App-intro">
                <p>El tiempo y la información son los activos más valiosos de cualquier proyecto o empresa. Ayudamos a estudiantes, profesionales y negocios a dominar sus flujos de trabajo mediante desarrollo técnico riguroso, automatización inteligente de procesos operativos y herramientas analíticas avanzadas diseñadas a su medida.</p>
              </div>
              <div className="App-services">
                <div className="App-service">
                  <img src="/ExcelS1.jpg" alt="Asesoria y desarrollo de proyectos escolares" />
                  <p>Desarrollo de proyectos escolares</p>
                </div>
                <div className="App-service">
                  <img src="/ExcelS2.jpg" alt="Soporte con automatizacion de procesos empresariales" />
                  <p>Automatizacion de procesos empresariales</p>
                </div>
                <div className="App-service">
                  <img src="/ExcelS3.jpg" alt="Diseño de herramientas de datos para tu negocio" />
                  <p>Diseño de herramientas de datos para tu negocio</p>
                </div>
              </div>
              <div className="App-intro-2">
                <p>Contactanos sin compromiso, podemos solucionar cualquier problema, transformar tus ideas en proyectos reales y desarrollar herramientas profesionales</p>
              </div>
              <div className="App-diagram"></div>
                <div className="diagram">
                  <ul className="diagram-list">
                    <li className="diagram-container">
                      <p className="diagram-position">1</p>
                      <p className="diagram-description">Revisamos tu solicitud y te brindamos las mejores opciones adecuadas para ti</p>
                    </li>
                    <li className="diagram-container">
                      <p className="diagram-position">2</p>
                      <p className="diagram-description">Cotizamos tu solicitud con un costo accesible, olvidate de los precios elevados y entregas tardadas, nosotros te damos un costo accesible y entrega a la brevedad</p>
                    </li>
                    <li className="diagram-container">
                      <p className="diagram-position">3</p>
                      <p className="diagram-description">Agendamos reuniones virtuales para que observes los avances en tu proyecto y el resultado del mismo</p>
                    </li>
                    <li className="diagram-container">
                      <p className="diagram-position">4</p>
                      <p className="diagram-description">Te enviamos tus archivos de excel impecables, sin formulas y codigos bloqueados para que puedas utilizarlos y configurarlos a tu gusto</p>
                    </li>
                  </ul>
                </div>
            </main> 
          </div>;
      }
    };
    return (
      <div className="App">
        <header className="App-header" style={{ '--header-image': `url("/ExcelD.jpg")` }}>
          <nav className="App-nav">
            <ul> 
              <li className="App-nav-item"><button onClick={() => setVista("home")}>Inicio</button></li>
              <li className="App-nav-item"><button onClick={() => setVista("solicitudes")}>Solicitudes</button></li>
              <li className="App-nav-item"><button onClick={() => setVista("servicios")}>Servicios</button></li>
              <li className="App-nav-item"><button onClick={() => setVista("contacto")}>Contacto</button></li>
            </ul>
          </nav>
        </header>      
        {renderContent()}
        <footer className="App-footer">
          <div className="footer-container">
            <div className="footer-section">
              <p className="footer-title">Excelentes Datos</p>
              <p className="footer-title-description">Transformamos tus ideas y brindamos soluciones</p>
            </div>
            <div className="footer-section">
              <p className="footer-comment">Contactanos y te asesoramos sin compromiso</p>
              <p className="footer-mail"><a href='mailto:excelentesdatos@gmail.com'>excelentesdatos@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-signature">
            <p>© Excelentes datos 2026</p>
          </div>
        </footer>   
      </div>
      
    );
  };

export default App;
