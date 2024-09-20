
    const container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Formulir Mahasiswa Baru';
    container.append(h1);
    
    const form2 = document.createElement('form');
    container.append(form2);

    const tabel = document.createElement('table');
    form2.append(tabel);

    const tr1 = document.createElement('tr');
    tabel.append(tr1);

    const td1 = document.createElement('td');
    td1.innerHTML = 'Nama';
    tr1.append(td1);

    const td2 = document.createElement('td');
    tr1.append(td2);

    const inputNama = document.createElement('input');
    inputNama.setAttribute('type', 'text');
    inputNama.setAttribute('name', 'nama');
    inputNama.setAttribute('placeholder', 'Masukan Nama');
    td2.append(inputNama);

    const tr2 = document.createElement('tr');
    tabel.append(tr2);

    const td3 = document.createElement('td');
    td3.innerHTML = 'NIM';
    tr2.append(td3);

    const td4 = document.createElement('td');
    tr2.append(td4);

    const inputNim = document.createElement('input');
    inputNim.setAttribute('type', 'text');
    inputNim.setAttribute('name', 'nim');
    inputNim.setAttribute('placeholder', 'Masukan NIM');
    td4.append(inputNim);

    const tr3 = document.createElement('tr');
    tabel.append(tr3);

    const td5 = document.createElement('td');
    td5.innerHTML = 'Tempat lahir';
    tr3.append(td5);

    const td6 = document.createElement('td');
    tr3.append(td6);

    const inputTempatLahir = document.createElement('input');
    inputTempatLahir.setAttribute('type', 'text');
    inputTempatLahir.setAttribute('name', 'tempat lahir');
    inputTempatLahir.setAttribute('placeholder', 'Kota / Kabupaten');
    td6.append(inputTempatLahir);

    const tr4 = document.createElement('tr');
    tabel.append(tr4);

    const td7 = document.createElement('td');
    td7.innerHTML = 'Tanggal lahir';
    tr4.append(td7);

    const td8 = document.createElement('td');
    tr4.append(td8);

    const inputTanggalLahir = document.createElement('input');
    inputTanggalLahir.setAttribute('type', 'date');
    inputTanggalLahir.setAttribute('name', 'tanggal lahir');
    td8.append(inputTanggalLahir);
    

    const tr5 = document.createElement('tr');
    tabel.append(tr5);

    const td9 = document.createElement('td');
    td9.innerHTML = 'Tenis kelamin';
    tr5.append(td9);

    const td10 = document.createElement('td');
    tr5.append(td10);

    

    const radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'jk');
    radio1.setAttribute('value', 'laki-laki');
    td10.append(radio1);

    const Lakilaki = document.createElement('span');
    Lakilaki.innerHTML = ' Laki-laki';
    td10.append(Lakilaki);

    const radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'jk');
    radio2.setAttribute('value', 'perempuan');
    
    const Perempuan = document.createElement('span');
    Perempuan.innerHTML = ' Perempuan';
    td10.append(radio2);
    td10.append(Perempuan);

    const tr6 = document.createElement('tr');
    tabel.append(tr6);

    const td11 = document.createElement('td');
    td11.innerHTML = 'Alamat';
    tr6.append(td11);

    const td12 = document.createElement('td');
    tr6.append(td12);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'alamat');
    textArea.setAttribute('cols', '10');
    textArea.setAttribute('placeholder', ' Tulis Alamat lengkap');
    td12.append(textArea);

    const tr7 = document.createElement('tr');
    tabel.append(tr7);

    const td13 = document.createElement('td');
    td13.innerHTML = 'Hobi';
    tr7.append(td13);

    const td14 = document.createElement('td');
    tr7.append(td14);
    const textArea2 = document.createElement('textarea');
    textArea2.setAttribute('name', 'hobi');
    textArea2.setAttribute('cols', '10'); 
    td14.append(textArea2);
    const tr8 = document.createElement('tr');
    tabel.append(tr8);

    const td15 = document.createElement('td');
    td15.innerHTML = 'Program Studi';
    tr8.append(td15);

    const td16 = document.createElement('td');
    tr8.append(td16);

    const select = document.createElement('select');
    select.setAttribute('name', 'program studi');
    td16.append(select);

    const option1 = document.createElement('option');
    option1.setAttribute('value', 'sistem informasi kelautan');
    option1.innerHTML = 'Sistem Informasi Kelautan';
    select.append(option1);

    const option2 = document.createElement('option');
    option2.setAttribute('value', 'logistik kelautan');
    option2.innerHTML = 'Logistik kelautan';
    select.append(option2);

    const option3 = document.createElement('option');
    option3.setAttribute('value', 'PGSD');
    option3.innerHTML = 'PGSD';
    select.append(option3);

    const option4 = document.createElement('option');
    option4.setAttribute('value', 'PGPAUD');
    option4.innerHTML = 'PGPAUD';
    select.append(option4);

    const tr9 = document.createElement('tr');
    tabel.append(tr9);

    

    const td18 = document.createElement('td');
    tr9.append(td18);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'simpan');
    td18.append(submit);
    submit.onclick = kunci;
    function kunci(){
        alert('Data Berhasil di simpan');
    }
    function hidup(){
    function berubah(){
        hasil.style.color = 'blue';
    }
    function kembali(){
        hasil.style.color = 'purple';
    }
    hasil.addEventListener('mouseover', berubah);
    hasil.addEventListener('mouseout', kembali);
        
    }  
    
    
    form2.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = inputNama.value;
        const nim = inputNim.value;
        const tempatLahir = inputTempatLahir.value;
        const tanggalLahir = inputTanggalLahir.value;
        const jk = document.querySelector('input[name="jk"]:checked').value;
        const alamat = textArea.value;
        const hobi = textArea2.value;
        const programStudi = select.value;

        const tr12 = document.createElement('tr');
        hasil.append(tr12);

        const td20 = document.createElement('td');
        td20.innerHTML = nama;
        tr12.append(td20);

        const td21 = document.createElement('td');
        td21.innerHTML = nim;
        tr12.append(td21);

        const td22 = document.createElement('td');
        td22.innerHTML = tempatLahir;
        tr12.append(td22);

        const td23 = document.createElement('td');
        td23.innerHTML = tanggalLahir;
        tr12.append(td23);

        const td24 = document.createElement('td');
        td24.innerHTML = jk;
        tr12.append(td24);

        const td25 = document.createElement('td');
        td25.innerHTML = alamat;
        tr12.append(td25);

        const td26 = document.createElement('td');
        td26.innerHTML = hobi;
        tr12.append(td26);

        const td27 = document.createElement('td');
        td27.innerHTML = programStudi;
        tr12.append(td27);

    });
    form2.onmouseover = hidup;


    const hasil = document.createElement('table');
    hasil.id = 'hasil';
    hasil.style.width = '70%';
    hasil.style.borderCollapse = 'collapse';
    hasil.style.marginTop = '20px';
    hasil.style.marginLeft = '15%';
    document.body.appendChild(hasil);

    const headerRow = document.createElement('tr');
    ['Nama', 'NIM', 'Tempat Lahir', 'Tanggal Lahir', 'Jenis Kelamin', 'Alamat', 'Hobi', 'Program Studi'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.padding = '10px';
        th.style.backgroundColor = '#3498db';
        th.style.color = '#fff';
        th.style.textAlign = 'center';
        
        headerRow.appendChild(th);
    });
    hasil.appendChild(headerRow);
