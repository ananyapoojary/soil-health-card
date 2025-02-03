import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth < 600; // Responsive check

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="xl">
      {/* Header Section */}
      <Grid container spacing={5} alignItems="center" justifyContent="center" py={3}>
        {/* Government Emblem & Title */}
        <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent={isSmallScreen ? "center" : "flex-start"}>
          <img
            src="/images/indian-emblem.jpeg"
            alt="Indian Emblem"
            style={{ height: "80px", marginRight: "10px", borderRadius: "5px" }}
          />
          <Box textAlign="center">
            <Typography variant="h4" fontWeight="bold" color="primary">Government of India</Typography>
            <Typography variant="h5" fontWeight="bold" color="secondary">Ministry of Agriculture and Farmers Welfare</Typography>
            <Typography variant="h6" fontWeight="bold" color="secondary">Department of Agriculture and Farmers Welfare</Typography>
          </Box>
        </Grid>

        {/* Soil Health Card Logos */}
        <Grid item xs={6} md={2} textAlign="center">
          <img
            src="/images/soil-logo.png"
            alt="Soil Health Card Logo"
            style={{ height: "100px", borderRadius: "10px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>

        <Grid item xs={6} md={3} textAlign="center">
          <img
            src="/images/soil-health-card.png"
            alt="Soil Health Card Icon"
            style={{ height: "100px", borderRadius: "10px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>

        {/* Navigation Buttons */}
        <Grid item xs={12} md={5} display="flex" justifyContent={isSmallScreen ? "center" : "flex-end"} alignItems="center">
          <Button variant="text" color="secondary" size="large" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="text" color="secondary" sx={{ mx:1 }} onClick={() => navigate("/about")}>
            About Us
          </Button>
          <Button variant="contained" color="primary" sx={{ mx: 1 }} onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
          <Button variant="text" color="secondary" sx={{ mx: 1 }} onClick={() => navigate("/")}>
            Dashboard
          </Button>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="DAC & FW and ICAR Officers" />
          <Tab label="NIC Officers" />
          <Tab label="Agriculture/Horticulture Ministers and Secretaries of States" />
          <Tab label="State Nodal Officers" />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ mt: 2 }}>
          {selectedTab === 0 && (
            <Box>
              <Typography variant="h6" fontWeight="bold" mb={2}>DAC & FW Officers</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Designation</strong></TableCell>
                    <TableCell><strong>Phone Number</strong></TableCell>
                    <TableCell><strong>Email Address</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Smt. Yogita Rana</TableCell>
                    <TableCell>Joint Secretary(INM)</TableCell>
                    <TableCell>011-23384280, 23386849</TableCell>
                    <TableCell>yogitarana@nic.in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Smt. Rachna Kumar</TableCell>
                    <TableCell>Deputy Secretary (Natural Farming-INM)</TableCell>
                    <TableCell>011-23070342</TableCell>
                    <TableCell>rachna.kumar@nic.in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shri. Chandra Shekhar Prasad</TableCell>
                    <TableCell>Under Secretary (INM)</TableCell>
                    <TableCell>011-23381191</TableCell>
                    <TableCell>chandra.sp@nic.in</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>ICAR Officers</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Designation</strong></TableCell>
                    <TableCell><strong>Phone Number</strong></TableCell>
                    <TableCell><strong>Email Address</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Dr. Suresh Kumar Chaudhary</TableCell>
                    <TableCell>Deputy Director General (NRM)</TableCell>
                    <TableCell>25848364</TableCell>
                    <TableCell>ddg.nrm@icar.gov.in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dr. Adlul Islam</TableCell>
                    <TableCell>Assistant Director General (SW&M)</TableCell>
                    <TableCell>25848369</TableCell>
                    <TableCell>adgswm@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dr. P P Biswas</TableCell>
                    <TableCell>Pr. Scientist (Soils)</TableCell>
                    <TableCell>25843151</TableCell>
                    <TableCell>parthabiswas1957@gmail.com</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          )}
          {selectedTab === 1 && (
            <Box>
              <Typography variant="h6" fontWeight="bold" mb={2}>NIC Officers</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Designation</strong></TableCell>
                    <TableCell><strong>Phone Number</strong></TableCell>
                    <TableCell><strong>Email Address</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Smt. Pratibha Lokhande</TableCell>
                    <TableCell>Dy. Director General & HoG</TableCell>
                    <TableCell>24305692</TableCell>
                    <TableCell>pratibha@nic.in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Smt. Anju Kapoor</TableCell>
                    <TableCell>Technical Director</TableCell>
                    <TableCell>24305669</TableCell>
                    <TableCell>akapoor@nic.in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mr. DV Singh</TableCell>
                    <TableCell>Technical Director</TableCell>
                    <TableCell>24305591</TableCell>
                    <TableCell>dv-singh@nic.in</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          )}
          {selectedTab === 2 && (
            <Box sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              List of Agriculture/Horticulture Ministers and Secretaries of States
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>State</strong></TableCell>
                    <TableCell><strong>Name & Designation</strong></TableCell>
                    <TableCell><strong>Address</strong></TableCell>
                    <TableCell><strong>Phone Number</strong></TableCell>
                    <TableCell><strong>Email Address</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Andhra Pradesh Example Row */}
                  <TableRow>
                    <TableCell>Andhra Pradesh</TableCell>
                    <TableCell>
                      Sri Nara Chandrababu Naidu, Chief Minister <br />
                      Sri Kinjarapu Atchannaidu, Minister for Agriculture, Co-Operation, Marketing, Animal Husbandry, Dairy Development & Fisheries <br />
                      Sri Neerabh Kumar Prasad, IAS Chief Secretary to Government <br />
                      Sri Budithi Rajsekhar, IAS Special Chief Secretary to Government <br />
                      Sri T. Vijay Kumar, IAS (Retired) Ex-Officio Special Chief Secretary to Government (Natural Farming) <br />
                      Sri Babu A, IAS Secretary to Government (Horticulture, Aquaculture, Fisheries) Agriculture & Cooperation Department
                    </TableCell>
                    <TableCell>
                      1st Floor, Building No-1, Velagapudi <br />
                      Room No.130, Ground Floor, Building No-4, Velagapudi <br />
                      1st Block, 1st Floor, Interim Government Complex, A.P Secretariat Office, Velagapudi <br />
                      Address: 4th Block, Ground Floor, Room No:188, A.P Secretariat Office, Velagapudi
                    </TableCell>
                    <TableCell>
                      0863-244152, 0863-2442917, 0863-2444539, 0863-2442117, 0863-2444458
                    </TableCell>
                    <TableCell>
                      cm@ap.gov.in <br />
                      katchannaiadu@gmail.com <br />
                      prlsecy_agr@ap.gov.in, apagricultureps@gmail.com <br />
                      advcr-agri@ap.gov.in <br />
                      secy-horti-fisheries@ap.gov.in, horti.aquafisheriespeshi@gmail.com
                    </TableCell>
                  </TableRow>
          
                  {/* Arunachal Pradesh */}
                  <TableRow>
                    <TableCell>Arunachal Pradesh</TableCell>
                    <TableCell>
                      Shri Nabum Tuki, Hon’ble CM and Minister Agri <br />
                      Shri Hage Khoda, IAS, Commissioner-cum-Secretary, Agriculture & Horticulture <br />
                      Shri Tanga Byaling, Minister for Home, Power & Horticulture, Govt of Arunachal Pradesh
                    </TableCell>
                    <TableCell>
                      Hon’ble Chief Minister Arunachal Pradesh, Itanagar, District Papumpare- 791111 <br />
                      Krishi Bhawan D-Sector, High Court Road, Nahalugan, Papumpare District - 791110 <br />
                      Vidhyut Bhawan, Itanagar - 791111 Arunachal Pradesh
                    </TableCell>
                    <TableCell>
                      0360-2212173, 0360-2212456, 0360-2214234
                    </TableCell>
                    <TableCell>
                      mediacellapcm@gmail.com <br />
                      hagekhoda57@rediffmail.com <br />
                      mprdparunachal@rediffmail.com
                    </TableCell>
                  </TableRow>
          
                  {/* Assam */}
                  <TableRow>
                    <TableCell>Assam</TableCell>
                    <TableCell>
                      Shri Rockybul Hussain, Hon’ble Minister of Agriculture & Horticulture <br />
                      Shri V. B. Pyarelal, IAS Additional Chief Secretary to the Govt. of Assam, Agriculture etc. Department & APC, Assam <br />
                      Shri Amlan Baruah, IAS Secretary to the Govt. of Assam, Department of Agriculture and Horticulture
                    </TableCell>
                    <TableCell>
                      A- Block, Ground Floor, Assam Secretariat, Dispur, Guwahati-6 <br />
                      Chief Minister’s Block, 3rd Floor, Assam Secretariat, Dispur, Guwahati-6 <br />
                      D-Block, 2nd Floor, Assam Secretariat, Dispur, Guwahati- 781006
                    </TableCell>
                    <TableCell>
                      0361 2233163
                    </TableCell>
                    <TableCell>
                      secagri@assam.gov.in <br />
                      hussain@assam.gov.in
                    </TableCell>
                  </TableRow>
          
                  {/* Bihar */}
                  <TableRow>
                    <TableCell>Bihar</TableCell>
                    <TableCell>
                      Shri Ramvichar Rai, Minister for Agriculture <br />
                      Shri Sudhir Kumar, IAS, Principal Secretary, Department of Agriculture
                    </TableCell>
                    <TableCell>
                      Vikas Bhawan, New Secretariat, Patna <br />
                      Vikas Bhawan, Bailey Road, Patna- 15 Bihar
                    </TableCell>
                    <TableCell>
                      0612-2231212, 0612-2215373
                    </TableCell>
                    <TableCell>
                      ramvicharrai@bihar.gov.in <br />
                      sudhir.kumar@bihar.gov.in
                    </TableCell>
                  </TableRow>
          
                  {/* Chhattisgarh */}
                  <TableRow>
                    <TableCell>Chhattisgarh</TableCell>
                    <TableCell>
                      Shri Brij Mohan Agarwal, Minister for Agriculture <br />
                      Shri Ajay Singh, IAS Agriculture Production Commissioner <br />
                      Shri Anup Kumar Srivastav, IFS <br />
                      Shri Avinash Champavat, IAS, Director, Horticulture
                    </TableCell>
                    <TableCell>
                      Department of Agriculture, Secretariat, Mahanadhi Bhavan, Naya Raipur, 492002 Chhattisgarh <br />
                      Department of Agriculture, Secretariat, Mahanadhi Bhavan, Naya Raipur, 492002 Chhattisgarh <br />
                      Directorate of Horticulture, Indravati Bhavan, Naya Raipur, 492002 Chhattisgarh
                    </TableCell>
                    <TableCell>
                      0771-2510226/2221226, 0771-2331014, 0771-2433001
                    </TableCell>
                    <TableCell>
                      ajaysingh@nic.in <br />
                      dir.horti-cg@nic.in
                    </TableCell>
                  </TableRow>
          
                  {/* Goa */}
                  <TableRow>
                    <TableCell>Goa</TableCell>
                    <TableCell>
                      Shri Ramesh Tawadkar, Minister for Agriculture <br />
                      Shri Amjad Tak, IAS, Secretary Agriculture
                    </TableCell>
                    <TableCell>
                      Ministerial Block Secretariat, Porvorim 403521 Goa <br />
                      Department of Agriculture, Govt of Goa, Secretariat, Porvorim 403521 Goa
                    </TableCell>
                    <TableCell>
                      0832-2419534, 0832-2419419
                    </TableCell>
                    <TableCell>
                      sportsministergoa@gmail.com <br />
                      sect-fisheries.goa@nic.in
                    </TableCell>
                  </TableRow>
          
                  {/* More rows can be added similarly */}
                  
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          
          )}
          {selectedTab === 3 && (
  <Typography variant="body1">
    <h2>List of State Nodal Officers</h2>
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Name & Designation</th>
          <th>Email Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Andhra Pradesh</td>
          <td>Smt. N. Padmavathi</td>
          <td><a href="mailto:jda.soilcorrelatorap@rediffmail.com">jda.soilcorrelatorap@rediffmail.com</a></td>
          <td>--</td>
        </tr>
        <tr>
          <td>Arunachal Pradesh</td>
          <td>Dr. N. Ronang, Shri T. Game</td>
          <td>
            <a href="mailto:hagekhoda57@rediffmail.com">hagekhoda57@rediffmail.com</a>, 
            <a href="mailto:Krishiarun06@yahoo.co.in">Krishiarun06@yahoo.co.in</a>,
            <a href="mailto:hage_kojeen@rediffmail.com">age_kojeen@rediffmail.com</a>
          </td>
          <td>0360-2351383</td>
        </tr>
        <tr>
          <td>Assam</td>
          <td>Dr. Debjit</td>
          <td><a href="mailto:Debjit.neog@gmail.com">Debjit.neog@gmail.com</a></td>
          <td>0361-2237271</td>
        </tr>
        <tr>
          <td>Bihar</td>
          <td>Dr. R.P. Sahani, Dr. Sanjay K.</td>
          <td><a href="mailto:ddcstl-agri-bih@nic.in">ddcstl-agri-bih@nic.in</a></td>
          <td>0612-2215895</td>
        </tr>
        <tr>
          <td>Chhattisgarh</td>
          <td>Dr. S.R. Ratre, Mr. Sunil Kujur (Addl. Chief Secretary and Agriculture Production Commissioner), Mr. Anup Kumar Shriwastav (Secretary Agriculture), Mr. M.S. Kerketta (Director Agriculture), Mr. S.R. Verma (Director NFSM), Mr. A.B. Asana (Addl. Director Agriculture)</td>
          <td>
            <a href="mailto:diagricg.cg@nic.in">diagricg.cg@nic.in</a>, 
            <a href="mailto:skkujurias@cg.nic.in">skkujurias@cg.nic.in</a>, 
            <a href="mailto:acs24heri@gmail.com">acs24heri@gmail.com</a>, 
            <a href="mailto:ifs.aks@gmail.com">ifs.aks@gmail.com</a>, 
            <a href="mailto:iagricg.cg@gov.in">iagricg.cg@gov.in</a>, 
            <a href="mailto:indir.sameti-cg@gov.in">indir.sameti-cg@gov.in</a>, 
            <a href="mailto:iagricg.cg@gov.in">iagricg.cg@gov.in</a>
          </td>
          <td>0771-2510962, 0771-2221120, 0771-2221147, 0771-2442015, 0771-2443982, 0771-2443733</td>
        </tr>
        <tr>
          <td>Andhra Pradesh</td>
          <td>Smt. N. Padmavathi</td>
          <td><a href="mailto:jda.soilcorrelatorap@rediffmail.com">jda.soilcorrelatorap@rediffmail.com</a></td>
          <td>--</td>
        </tr>
        <tr>
          <td>Arunachal Pradesh</td>
          <td>Dr. N. Ronang, Shri T. Game</td>
          <td>
            <a href="mailto:hagekhoda57@rediffmail.com">hagekhoda57@rediffmail.com</a>, 
            <a href="mailto:Krishiarun06@yahoo.co.in">Krishiarun06@yahoo.co.in</a>
          </td>
          <td>0360-2351383</td>
        </tr>
        <tr>
          <td>Assam</td>
          <td>Dr. Debjit</td>
          <td><a href="mailto:Debjit.neog@gmail.com">Debjit.neog@gmail.com</a></td>
          <td>0361-2237271</td>
        </tr>
        <tr>
          <td>Bihar</td>
          <td>Dr. R.P. Sahani, Dr. Sanjay K.</td>
          <td><a href="mailto:ddcstl-agri-bih@nic.in">ddcstl-agri-bih@nic.in</a></td>
          <td>0612-2215895</td>
        </tr>
        <tr>
          <td>Chhattisgarh</td>
          <td>Dr. S.R. Ratre, Mr. Sunil Kujur (Addl. Chief Secretary and Agriculture Production Commissioner), Mr. Anup Kumar Shriwastav (Secretary Agriculture), Mr. M.S. Kerketta (Director Agriculture), Mr. S.R. Verma (Director NFSM), Mr. A.B. Asana (Addl. Director Agriculture)</td>
          <td>
            <a href="mailto:diagricg.cg@nic.in">diagricg.cg@nic.in</a>, 
            <a href="mailto:skkujurias@cg.nic.in">skkujurias@cg.nic.in</a>, 
            <a href="mailto:acs24heri@gmail.com">acs24heri@gmail.com</a>, 
            <a href="mailto:ifs.aks@gmail.com">ifs.aks@gmail.com</a>, 
            <a href="mailto:iagricg.cg@gov.in">iagricg.cg@gov.in</a>, 
            <a href="mailto:indir.sameti-cg@gov.in">indir.sameti-cg@gov.in</a>, 
            <a href="mailto:iagricg.cg@gov.in">iagricg.cg@gov.in</a>
          </td>
          <td>0771-2510962, 0771-2221120, 0771-2221147, 0771-2442015, 0771-2443982, 0771-2443733</td>
        </tr>
        {/* Additional Entries */}
        <tr>
          <td>Gujarat</td>
          <td>Dr. M.N. Shukla</td>
          <td><a href="mailto:dda.soil.2015@gmail.com">dda.soil.2015@gmail.com</a></td>
          <td>079-23256247</td>
        </tr>
        <tr>
          <td>Haryana</td>
          <td>Dr. Anil Kumar Rana</td>
          <td><a href="mailto:ranajdast@gmail.com">ranajdast@gmail.com</a></td>
          <td>0172-2711952</td>
        </tr>
        <tr>
          <td>Himachal Pradesh</td>
          <td>Dr. Dev Raj Thakur</td>
          <td>
            <a href="mailto:krishibhawan-hp@gov.in">krishibhawan-hp@gov.in</a>, 
            <a href="mailto:krishinidesh@yahoo.com">krishinidesh@yahoo.com</a>
          </td>
          <td>0177-2622269</td>
        </tr>
        <tr>
          <td>Jammu & Kashmir</td>
          <td>Dr. Susheel Sahani (Jammu), Dr. Altaf Adravi (Kashmir)</td>
          <td>
            <a href="mailto:agrichemist56@gmail.com">agrichemist56@gmail.com</a>, 
            <a href="mailto:diragrikmr@gmail.com">diragrikmr@gmail.com</a>
          </td>
          <td>0191-2540531</td>
        </tr>
        <tr>
          <td>Jharkhand</td>
          <td>Mr. Subhash Singh (JDA), Mr. Satya Prakash (ASC)</td>
          <td><a href="mailto:soilhealthjha@gmail.com">soilhealthjha@gmail.com</a></td>
          <td>0651-2490578</td>
        </tr>
        <tr>
          <td>Karnataka</td>
          <td>Sh. Ramakrishna, DD (Agri), Ms. Salma, Agri. Officer, Mrs. Anasuya, Agru. Officer</td>
          <td><a href="mailto:agrish@nic.in">agrish@nic.in</a></td>
          <td>080-22074128</td>
        </tr>
        <tr>
          <td>Kerala</td>
          <td>Ms. Leena</td>
          <td><a href="mailto:krishidirector@gmail.com">krishidirector@gmail.com</a></td>
          <td>0471-2304741</td>
        </tr>
        <tr>
          <td>Madhya Pradesh</td>
          <td>Dr. B.M. Sahare, H.R. Prabhakar</td>
          <td><a href="mailto:dagst@mp.gov.in">dagst@mp.gov.in</a></td>
          <td>0755-2559542</td>
        </tr>
        <tr>
          <td>Meghalaya</td>
          <td>Dr. I.B. Saiborne</td>
          <td><a href="mailto:Agri_meg@nic.in">Agri_meg@nic.in</a></td>
          <td>0364-2505049</td>
        </tr>
        <tr>
          <td>Maharashtra</td>
          <td>Dr. Ashok Panchale</td>
          <td><a href="mailto:ddssst@gmail.com">ddssst@gmail.com</a></td>
          <td>022-5538475</td>
        </tr>
        <tr>
          <td>Mizoram</td>
          <td>Dr. Lal Ram</td>
          <td><a href="mailto:agrimizoram@gmail.com">agrimizoram@gmail.com</a></td>
          <td>0389-2322163</td>
        </tr>
        <tr>
          <td>Odisha</td>
          <td>Dr. A.K. Mohanty</td>
          <td><a href="mailto:ddaextngc@gmail.com">ddaextngc@gmail.com</a></td>
          <td>0674-2323049</td>
        </tr>
        <tr>
          <td>Punjab</td>
          <td>Dr. R.S. Brar</td>
          <td><a href="mailto:jdainputs@gmail.com">jdainputs@gmail.com</a></td>
          <td>0172-2741187</td>
        </tr>
        <tr>
          <td>Rajasthan</td>
          <td>Dr. Bhima Ram, Dr. AK Pachori</td>
          <td>
            <a href="mailto:shashijain@rajasthan.gov.in">shashijain@rajasthan.gov.in</a>, 
            <a href="mailto:jdagr_chem@rediffmail.com">jdagr_chem@rediffmail.com</a>
          </td>
          <td>0141-5116893</td>
        </tr>
        {/* Add other rows similarly */}
      </tbody>
    </table>
  </Typography>
)}

        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
