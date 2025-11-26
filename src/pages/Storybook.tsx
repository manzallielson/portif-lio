import { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  Button,
  Badge,
  Code,
  useDisclosure,
  IconButton,
  useToast,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { EmailIcon, PhoneIcon } from '../icons'
import { useThemeColor } from '../hooks/useThemeColor'

interface ComponentExampleProps {
  title: string
  description?: string
  code: string
  children: React.ReactNode
}

function ComponentExample({ title, description, code, children }: ComponentExampleProps) {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()
  const toast = useToast()
  const { primary, themeColor } = useThemeColor()
  const codeBg = useColorModeValue('gray.50', 'gray.800')

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast({
      title: t('storybook.codeCopied'),
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box bg={cardBg} p={{ base: 4, md: 6 }} borderRadius="lg" boxShadow="md" border="1px" borderColor={borderColor}>
      <VStack align="stretch" spacing={4}>
        <Box>
          <Heading as="h3" size="md" color={primary} mb={2}>
            {title}
          </Heading>
          {description && (
            <Text color="gray.600" fontSize="sm" mb={4}>
              {description}
            </Text>
          )}
        </Box>

        <Divider />

        <Box
          p={6}
          bg={useColorModeValue('gray.50', 'gray.700')}
          borderRadius="md"
          border="1px"
          borderColor={borderColor}
          minH="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>

        <HStack justify="flex-end" spacing={2}>
          <Button size="sm" onClick={onToggle} variant="ghost">
            {isOpen ? t('storybook.hideCode') : t('storybook.showCode')}
          </Button>
          {isOpen && (
            <Button size="sm" onClick={handleCopy} colorScheme={themeColor}>
              {t('storybook.copyCode')}
            </Button>
          )}
        </HStack>

        {isOpen && (
          <Box
            bg={codeBg}
            p={4}
            borderRadius="md"
            border="1px"
            borderColor="gray.300"
            overflowX="auto"
          >
            <Code
              display="block"
              whiteSpace="pre"
              fontSize={{ base: 'xs', md: 'sm' }}
              colorScheme="gray"
              p={0}
              bg="transparent"
            >
              {code}
            </Code>
          </Box>
        )}
      </VStack>
    </Box>
  )
}

function Storybook() {
  const { t } = useTranslation()
  const { primary, primaryLight, themeColor } = useThemeColor()
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('1')
  const [switchValue, setSwitchValue] = useState(false)

  const pageBg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <Box minH="100vh" bg={pageBg} py={{ base: 4, md: 8 }}>
      <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 4, md: 8 }} align="stretch">
          {/* Header */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} color={primary} mb={4}>
              {t('storybook.title')}
            </Heading>
            <Divider mb={4} />
            <Text color="gray.700" fontSize={{ base: "sm", md: "md" }}>
              {t('storybook.description')}
            </Text>
          </Box>

          {/* Button Examples */}
          <ComponentExample
            title={t('storybook.components.button')}
            description={t('storybook.components.descriptions.button')}
            code={`<Button colorScheme="blue">Primary</Button>
<Button colorScheme="blue" variant="outline">Outline</Button>
<Button colorScheme="blue" variant="ghost">Ghost</Button>
<Button colorScheme="blue" variant="link">Link</Button>
<Button colorScheme="blue" size="sm">Small</Button>
<Button colorScheme="blue" size="md">Medium</Button>
<Button colorScheme="blue" size="lg">Large</Button>`}
          >
            <VStack spacing={3}>
              <HStack spacing={3} flexWrap="wrap">
                <Button colorScheme={themeColor}>Primary</Button>
                <Button colorScheme={themeColor} variant="outline">Outline</Button>
                <Button colorScheme={themeColor} variant="ghost">Ghost</Button>
                <Button colorScheme={themeColor} variant="link">Link</Button>
              </HStack>
              <HStack spacing={3} flexWrap="wrap">
                <Button colorScheme={themeColor} size="sm">Small</Button>
                <Button colorScheme={themeColor} size="md">Medium</Button>
                <Button colorScheme={themeColor} size="lg">Large</Button>
              </HStack>
            </VStack>
          </ComponentExample>

          {/* Badge Examples */}
          <ComponentExample
            title={t('storybook.components.badge')}
            description={t('storybook.components.descriptions.badge')}
            code={`<Badge colorScheme="blue">Blue</Badge>
<Badge colorScheme="green">Green</Badge>
<Badge colorScheme="red">Red</Badge>
<Badge colorScheme="yellow">Yellow</Badge>
<Badge colorScheme="purple">Purple</Badge>
<Badge colorScheme="gray">Gray</Badge>`}
          >
            <HStack spacing={3} flexWrap="wrap">
              <Badge colorScheme="blue">Blue</Badge>
              <Badge colorScheme="green">Green</Badge>
              <Badge colorScheme="red">Red</Badge>
              <Badge colorScheme="yellow">Yellow</Badge>
              <Badge colorScheme="purple">Purple</Badge>
              <Badge colorScheme="gray">Gray</Badge>
            </HStack>
          </ComponentExample>

          {/* Card Example */}
          <ComponentExample
            title={t('storybook.components.card')}
            description={t('storybook.components.descriptions.card')}
            code={`<Box bg="white" p={6} borderRadius="lg" boxShadow="md">
  <VStack spacing={4} align="flex-start">
    <Heading size="md">${t('storybook.components.examples.cardTitle')}</Heading>
    <Text>${t('storybook.components.examples.cardDescription')}</Text>
    <HStack>
      <EmailIcon />
      <PhoneIcon />
    </HStack>
  </VStack>
</Box>`}
          >
            <Box bg={useColorModeValue('white', 'gray.800')} p={6} borderRadius="lg" boxShadow="md" w="100%" maxW="400px">
              <VStack spacing={4} align="flex-start">
                <Heading size="md">{t('storybook.components.examples.cardTitle')}</Heading>
                <Text color={useColorModeValue('gray.700', 'gray.300')}>{t('storybook.components.examples.cardDescription')}</Text>
                <HStack>
                  <EmailIcon />
                  <PhoneIcon />
                </HStack>
              </VStack>
            </Box>
          </ComponentExample>

          {/* Input Example */}
          <ComponentExample
            title={t('storybook.components.input')}
            description={t('storybook.components.descriptions.input')}
            code={`<Input
  placeholder="${t('storybook.components.examples.inputPlaceholder')}"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>`}
          >
            <Input
              placeholder={t('storybook.components.examples.inputPlaceholder')}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxW="400px"
              w="100%"
            />
          </ComponentExample>

          {/* Textarea Example */}
          <ComponentExample
            title={t('storybook.components.textarea')}
            description={t('storybook.components.descriptions.textarea')}
            code={`<Textarea
  placeholder="${t('storybook.components.examples.textareaPlaceholder')}"
  value={textareaValue}
  onChange={(e) => setTextareaValue(e.target.value)}
/>`}
          >
            <Textarea
              placeholder={t('storybook.components.examples.textareaPlaceholder')}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              maxW="400px"
              w="100%"
            />
          </ComponentExample>

          {/* Select Example */}
          <ComponentExample
            title={t('storybook.components.select')}
            description={t('storybook.components.descriptions.select')}
            code={`<Select
  placeholder="${t('storybook.components.examples.selectPlaceholder')}"
  value={selectValue}
  onChange={(e) => setSelectValue(e.target.value)}
>
  <option value="option1">${t('storybook.components.examples.selectOption')} 1</option>
  <option value="option2">${t('storybook.components.examples.selectOption')} 2</option>
  <option value="option3">${t('storybook.components.examples.selectOption')} 3</option>
</Select>`}
          >
            <Select
              placeholder={t('storybook.components.examples.selectPlaceholder')}
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              maxW="400px"
              w="100%"
            >
              <option value="option1">{t('storybook.components.examples.selectOption')} 1</option>
              <option value="option2">{t('storybook.components.examples.selectOption')} 2</option>
              <option value="option3">{t('storybook.components.examples.selectOption')} 3</option>
            </Select>
          </ComponentExample>

          {/* Checkbox Example */}
          <ComponentExample
            title={t('storybook.components.checkbox')}
            description={t('storybook.components.descriptions.checkbox')}
            code={`<Checkbox
  isChecked={checkboxValue}
  onChange={(e) => setCheckboxValue(e.target.checked)}
>
  ${t('storybook.components.examples.checkboxLabel')}
</Checkbox>`}
          >
            <Checkbox
              isChecked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
            >
              {t('storybook.components.examples.checkboxLabel')}
            </Checkbox>
          </ComponentExample>

          {/* Radio Example */}
          <ComponentExample
            title={t('storybook.components.radio')}
            description={t('storybook.components.descriptions.radio')}
            code={`<RadioGroup value={radioValue} onChange={setRadioValue}>
  <Stack direction="row">
    <Radio value="1">${t('storybook.components.examples.selectOption')} 1</Radio>
    <Radio value="2">${t('storybook.components.examples.selectOption')} 2</Radio>
    <Radio value="3">${t('storybook.components.examples.selectOption')} 3</Radio>
  </Stack>
</RadioGroup>`}
          >
            <RadioGroup value={radioValue} onChange={setRadioValue}>
              <Stack direction="row" spacing={4}>
                <Radio value="1">{t('storybook.components.examples.selectOption')} 1</Radio>
                <Radio value="2">{t('storybook.components.examples.selectOption')} 2</Radio>
                <Radio value="3">{t('storybook.components.examples.selectOption')} 3</Radio>
              </Stack>
            </RadioGroup>
          </ComponentExample>

          {/* Switch Example */}
          <ComponentExample
            title={t('storybook.components.switch')}
            description={t('storybook.components.descriptions.switch')}
            code={`<FormControl display="flex" alignItems="center">
  <FormLabel mb="0">${t('storybook.components.examples.switchLabel')}</FormLabel>
  <Switch
    isChecked={switchValue}
    onChange={(e) => setSwitchValue(e.target.checked)}
  />
</FormControl>`}
          >
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">{t('storybook.components.examples.switchLabel')}</FormLabel>
              <Switch
                isChecked={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
            </FormControl>
          </ComponentExample>

          {/* Alert Examples */}
          <ComponentExample
            title={t('storybook.components.alert')}
            description={t('storybook.components.descriptions.alert')}
            code={`<Alert status="success">
  <AlertIcon />
  <AlertTitle>${t('storybook.components.examples.alertSuccess')}</AlertTitle>
  <AlertDescription>${t('storybook.components.examples.alertSuccessDesc')}</AlertDescription>
</Alert>

<Alert status="error">
  <AlertIcon />
  <AlertTitle>${t('storybook.components.examples.alertError')}</AlertTitle>
  <AlertDescription>${t('storybook.components.examples.alertErrorDesc')}</AlertDescription>
</Alert>

<Alert status="warning">
  <AlertIcon />
  <AlertTitle>${t('storybook.components.examples.alertWarning')}</AlertTitle>
  <AlertDescription>${t('storybook.components.examples.alertWarningDesc')}</AlertDescription>
</Alert>

<Alert status="info">
  <AlertIcon />
  <AlertTitle>${t('storybook.components.examples.alertInfo')}</AlertTitle>
  <AlertDescription>${t('storybook.components.examples.alertInfoDesc')}</AlertDescription>
</Alert>`}
          >
            <VStack spacing={4} align="stretch" w="100%" maxW="600px">
              <Alert status="success">
                <AlertIcon />
                <AlertTitle>{t('storybook.components.examples.alertSuccess')}</AlertTitle>
                <AlertDescription>{t('storybook.components.examples.alertSuccessDesc')}</AlertDescription>
              </Alert>
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>{t('storybook.components.examples.alertError')}</AlertTitle>
                <AlertDescription>{t('storybook.components.examples.alertErrorDesc')}</AlertDescription>
              </Alert>
              <Alert status="warning">
                <AlertIcon />
                <AlertTitle>{t('storybook.components.examples.alertWarning')}</AlertTitle>
                <AlertDescription>{t('storybook.components.examples.alertWarningDesc')}</AlertDescription>
              </Alert>
              <Alert status="info">
                <AlertIcon />
                <AlertTitle>{t('storybook.components.examples.alertInfo')}</AlertTitle>
                <AlertDescription>{t('storybook.components.examples.alertInfoDesc')}</AlertDescription>
              </Alert>
            </VStack>
          </ComponentExample>
        </VStack>
      </Container>
    </Box>
  )
}

export default Storybook
