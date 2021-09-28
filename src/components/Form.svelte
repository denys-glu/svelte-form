<script>

    let data = {
        bankName: 'WFB',
        printDate:'',
        oneOone:'',
        zeroOneNumberCheck:'',
        accountNumber:'',
        accountType:'',
        billPeriod:'',
        bunchZeroes:'000000000000000',
        bunchOfSpaces:'                   ',
        amount:'',
        trustNumber:''
    }

    let myString = '';

    let isValid = false;

    let errors = {
        bankName: '',
        printDate:'',
        oneOone:'',
        zeroOneNumberCheck:'',
        accountNumber:'',
        accountType:'',
        billPeriod:'',
        bunchZeroes:'',
        bunchOfSpaces:'',
        amount:'',
        trustNumber:''
    }

    function validate(e) {
        console.log(e.target.value)
        if (e.target.name === 'bankName') {
            if (e.target.value.length !== 3) {
                errors.bankName = 'Bank name should be 3 characters long'
            } else {
                errors.bankName = ''
            }
        }

        if (e.target.name === 'oneOone') {
            if (e.target.value.length !== 3) {
                errors.oneOone = '101 should be 3 characters long'
            } else {
                errors.oneOone = ''
            }
        }

        if (e.target.name === 'zeroOneNumberCheck') {
            if (e.target.value.length !== 2) {
                errors.zeroOneNumberCheck = 'zeroOneNumberCheck name should be 2 characters long'
            } else {
                errors.zeroOneNumberCheck = ''
            }
        }

        if (e.target.name === 'accountNumber') {
            if (e.target.value.length > 10) {
                errors.accountNumber = 'Account number should be 10 or less characters long'
            } else {
                errors.accountNumber = ''
            }
        }

        if (e.target.name === 'accountType') {
            if (e.target.value.length !== 1) {
                errors.accountType = 'Account type should be 1 characters long'
            } else {
                errors.accountType = ''
            }
        }

        if (e.target.name === 'billPeriod') {
            if (e.target.value.length !== 6) {
                errors.billPeriod = 'Bill period should be 6 characters long'
            } else {
                errors.billPeriod = ''
            }
        }

        if (e.target.name === 'amount') {
            if (e.target.value.length > 10) {
                errors.amount = 'Amount should be 10 or less characters long'
            } else {
                errors.amount = ''
            }
        }

        if (e.target.name === 'trustNumber') {
            if (e.target.value.length !== 3) {
                errors.trustNumber = 'Trust number should be 3 characters long'
            } else {
                errors.trustNumber = ''
            }
        }

        for (const key in errors) {
            if (errors[key] !== '') {
                isValid = false
            } else {
                isValid = true
            }
        }


    }

    function addZeroes(number) {
        let result = '';
        const howManyZeroes = 10 - String(number).length

        for (let i = 0; i < howManyZeroes; i++) {
            result += '0'
        }

        return result + number
    }

    function submitForm(e) {
        e.preventDefault()
        console.log('Submitting')
        myString = ''
        for (const key in data) {
            console.log(data[key])
            if (key === 'accountNumber') {
                myString += addZeroes(data[key])
            } else if (key === 'amount') {
                myString += addZeroes(data[key])
            } else if (key === 'printDate') {
                let dateArray = data[key].split("-");
                let date = '';
                date += dateArray[1];
                date += dateArray[2];
                date += dateArray[0];
                
                myString += date;
            } else {
                myString += data[key]
            }
        }

    }
    
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .output {
    	white-space: pre;
    	color: black;
    }

    div.error {
        color: red;
        height: 22px;
    }

    .input-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .1rem;
    }

    .input-group label {
        width: 20%;
    }
    .input-group input {
        width: 75%;
        height: 60px;
    }

    button {
        width: 45%;
        height: 60px;
    }

</style>


<form 
    on:submit={submitForm}
    on:input={validate}
>
    <div class="input-group">
        <label for="first">Bank name</label>
        <input bind:value={data.bankName} type="text" placeholder="max 3" id="first" name="bankName" required>
    </div>
    <div class="error">{errors.bankName}</div>

    <div class="input-group">
        <label for="first">Print date</label>
        <input bind:value={data.printDate} type="date" placeholder="max 8"  name="printDate" required>
    </div>
    <div class="error">{errors.printDate}</div>

    <div class="input-group">
        <label for="first">101</label>
        <input bind:value={data.oneOone} type="tel" placeholder="max 3"  name="oneOone" required>
    </div>
    <div class="error">{errors.oneOone}</div>

    <div class="input-group">
        <label for="first">01_number_check</label>
        <input bind:value={data.zeroOneNumberCheck} type="tel" placeholder="max 2"  name="zeroOneNumberCheck" required>    
    </div>
    <div class="error">{errors.zeroOneNumberCheck}</div>

    <div class="input-group">
        <label for="first">Account number</label>
        <input bind:value={data.accountNumber} type="tel" placeholder="max 10"  name="accountNumber" required>
    </div>
    <div class="error">{errors.accountNumber}</div>

    <div class="input-group">
        <label for="first">Account type</label>
        <input bind:value={data.accountType} type="text" placeholder="max 1"  name="accountType" required>
    </div>
    <div class="error">{errors.accountType}</div>

    <div class="input-group">
        <label for="first">Bill period</label>
        <input bind:value={data.billPeriod} type="tel" placeholder="max 6"  name="billPeriod" required>
    </div>
    <div class="error">{errors.billPeriod}</div>

    <div class="input-group">
        <label for="first">Amount</label>
        <input bind:value={data.amount} type="tel" placeholder="max 10"  name="amount" required>
    </div>
    <div class="error">{errors.amount}</div>

    <div class="input-group">
        <label for="first">Trust number</label>
        <input bind:value={data.trustNumber} type="tel" placeholder="max 3"  name="trustNumber" required>
    </div>
    <div class="error">{errors.trustNumber}</div>


    <button disabled="{!isValid}">Create String</button>

</form>

<div class="output">{myString.replace(/[_-]/g, "")}</div>