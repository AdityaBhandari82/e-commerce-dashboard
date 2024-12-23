import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Header from './Header';

const Inbox = () => {
  

    const emails = [
        { id: 1, sender: 'Jullu Jalal', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM' },
        { id: 2, sender: 'Minerva Barnett', label: 'Work', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM' },
        { id: 3, sender: 'Peter Lewis', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM' },
        { id: 4, sender: 'Anthony Briggs', label: 'Primary', subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM' },
        { id: 5, sender: 'Clifford Morgan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM' },
        { id: 6, sender: 'Cecilia Webster', label: 'Social', subject: 'Always Look On The Bright Side Of Life', time: '3:52 PM' },
        { id: 7, sender: 'Harvey Manning', label: 'Primary', subject: 'Curling Irons Are As Individual As The Women Who Use Them', time: '2:30 PM' },
        { id: 8, sender: 'Willie Blake', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM' },
        { id: 9, sender: 'Minerva Barnett', label: 'Work', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM' },
        { id: 10, sender: 'Fanny Weaver', label: 'Primary', subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM' },
        { id: 11, sender: 'Olga Hogan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM' },
        { id: 12, sender: 'Lora Houston', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM' },
      ];
      const labelColors = {
        Primary: 'primary',
        Social: 'info',
        Work: 'warning',
        Friends: 'success',
      };
return(
    <div className='d-flex'>
        <Sidebar />
<div className='container my-4'>
    <Header />
    <h2 className='m-4'>Inbox</h2>
<div className='d-flex'>
    
    <div className="d-flex flex-column bg-light p-3" style={{ width: '300px', height: '100vh' }}>
        
      <button className="btn btn-primary mb-3">+ Compose</button>
      <div>
        <h6 className="text-muted">My Email</h6>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark">
              <span>
                <i className="bi bi-inbox me-2"></i> Inbox
              </span>
              <span className="badge bg-primary">1253</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-star me-2"></i> Starred <span className="ms-auto">245</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-send me-2"></i> Sent <span className="ms-auto">24,532</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-file-earmark me-2"></i> Draft <span className="ms-auto">09</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-exclamation-triangle me-2"></i> Spam <span className="ms-auto">14</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-bookmark me-2"></i> Important <span className="ms-auto">18</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-dark">
              <i className="bi bi-trash me-2"></i> Bin <span className="ms-auto">9</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h6 className="text-muted">Label</h6>
        <ul className="list-unstyled">
          <li className="mb-2">
            <span className="badge bg-primary me-2">&nbsp;</span> Primary
          </li>
          <li className="mb-2">
            <span className="badge bg-info me-2">&nbsp;</span> Social
          </li>
          <li className="mb-2">
            <span className="badge bg-warning me-2">&nbsp;</span> Work
          </li>
          <li className="mb-2">
            <span className="badge bg-light text-dark me-2">&nbsp;</span> Friends
          </li>
          <li className="mt-2">
            <button className="btn btn-outline-secondary btn-sm">
              + Create New Label
            </button>
          </li>
        </ul>
      </div>


    </div>

    <div className="container mt-3 ,my-4">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search mail" />
        <button className="btn btn-outline-secondary" type="button">
          <i className="bi bi-search"></i>
        </button>
        <button className="btn btn-outline-secondary" type="button">
          <i className="bi bi-gear"></i>
        </button>
        <button className="btn btn-outline-secondary" type="button">
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Star</th>
            <th scope="col">Sender</th>
            <th scope="col">Label</th>
            <th scope="col">Subject</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <i className="bi bi-star"></i>
              </td>
              <td>{email.sender}</td>
              <td>
                <span className={`badge bg-${labelColors[email.label]}`}>
                  {email.label}
                </span>
              </td>
              <td>{email.subject}</td>
              <td>{email.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>

    </div>
    </div>
    
  );
};

export default Inbox;
